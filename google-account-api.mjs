const sessionCookie = '__Host-minna-google';
const oauthCookie = '__Host-minna-google-state';
const sessionAge = 7 * 24 * 60 * 60;
const avatarKey = 'minna_google_avatar';
const allowedKey = /^(?:minna_(?:completed_modules|practice_answers|dokkai_answers(?:_v1)?|kaiwa_progress_v1|rfc_learned_ids|last_active(?:_id)?|bookmarks_v1|mistake_bank_v1|daily_streak_v1|study_heatmap_v1|daily_quests_v1|kfc_learned_l(?:[1-9]|[1-4]\d|50)|mazii_history|quiz_auto_advance|theme|voice_settings|show_furigana|furigana_setting|google_avatar)|jlpt_exam_(?:history|bests|draft|locked_sessions)|speechgen_(?:speed|pitch|speaker))$/;
const encoder = new TextEncoder();
const decoder = new TextDecoder();

function encode(bytes) {
  return btoa(Array.from(bytes, byte => String.fromCharCode(byte)).join(''))
    .replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}

function decode(value) {
  return Uint8Array.from(atob(value.replaceAll('-', '+').replaceAll('_', '/')), char => char.charCodeAt(0));
}

const token = () => encode(crypto.getRandomValues(new Uint8Array(32)));
const now = () => Math.floor(Date.now() / 1000);
const cookie = (name, value, age) => `${name}=${value}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${age}`;
const getCookie = (request, name) => (request.headers.get('cookie') || '').split(';')
  .map(part => part.trim()).find(part => part.startsWith(name + '='))?.slice(name.length + 1);

const commonHeaders = { 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' };
const json = (data, status = 200, headers = {}) => Response.json(data, {
  status, headers: { ...commonHeaders, ...headers }
});
const redirect = (location, setCookie) => new Response(null, {
  status: 303, headers: { ...commonHeaders, Location: location, 'Set-Cookie': setCookie }
});

async function signingKey(secret) {
  return crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

async function seal(data, secret) {
  const body = encode(encoder.encode(JSON.stringify(data)));
  const signature = await crypto.subtle.sign('HMAC', await signingKey(secret), encoder.encode(body));
  return body + '.' + encode(new Uint8Array(signature));
}

async function unseal(value, secret) {
  if (!value || value.length > 4096) return null;
  try {
    const [body, signature, extra] = value.split('.');
    if (extra || !body || !signature) return null;
    const valid = await crypto.subtle.verify('HMAC', await signingKey(secret), decode(signature), encoder.encode(body));
    if (!valid) return null;
    const data = JSON.parse(decoder.decode(decode(body)));
    return data.exp > now() ? data : null;
  } catch {
    return null;
  }
}

function configFrom(env) {
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET || (env.GOOGLE_SESSION_SECRET || '').length < 32) return null;
  try {
    const callback = new URL(env.GOOGLE_REDIRECT_URI);
    if (callback.pathname !== '/api/account/google/callback' || callback.search || callback.hash) return null;
    if (callback.protocol !== 'https:' && callback.hostname !== 'localhost') return null;
    return { clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET, callback, secret: env.GOOGLE_SESSION_SECRET };
  } catch {
    return null;
  }
}

async function startLogin(config) {
  const state = token();
  const verifier = token();
  const challenge = encode(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(verifier))));
  const destination = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  destination.search = new URLSearchParams({
    client_id: config.clientId, redirect_uri: config.callback.href, response_type: 'code',
    scope: 'openid email profile', prompt: 'select_account', state, code_challenge: challenge,
    code_challenge_method: 'S256'
  });
  const saved = await seal({ state, verifier, exp: now() + 600 }, config.secret);
  return redirect(destination.href, cookie(oauthCookie, saved, 600));
}

async function finishLogin(request, config, fetcher) {
  const params = new URL(request.url).searchParams;
  const saved = await unseal(getCookie(request, oauthCookie), config.secret);
  const clear = cookie(oauthCookie, '', 0);
  const fail = () => redirect('/?account=error', clear);
  if (!saved || !params.get('code') || params.get('state') !== saved.state) return fail();

  try {
    const exchange = await fetcher('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: new URLSearchParams({
        code: params.get('code'), client_id: config.clientId, client_secret: config.clientSecret,
        redirect_uri: config.callback.href, grant_type: 'authorization_code', code_verifier: saved.verifier
      })
    });
    if (!exchange.ok) return fail();
    const { access_token: accessToken } = await exchange.json();
    if (!accessToken) return fail();
    const reply = await fetcher('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: { Authorization: 'Bearer ' + accessToken }
    });
    if (!reply.ok) return fail();
    const profile = await reply.json();
    if (!/^\d{1,40}$/.test(profile.sub || '')) return fail();
    const user = {
      uid: 'google_' + profile.sub,
      displayName: String(profile.name || 'Học viên').slice(0, 80),
      email: profile.email_verified === true ? String(profile.email || '').slice(0, 254) : '',
      picture: /^https:\/\/lh\d+\.googleusercontent\.com\//i.test(profile.picture || '')
        ? profile.picture.slice(0, 512) : ''
    };
    const session = await seal({ user, exp: now() + sessionAge }, config.secret);
    const response = redirect('/?account=connected', cookie(sessionCookie, session, sessionAge));
    response.headers.append('Set-Cookie', clear);
    return response;
  } catch {
    return fail();
  }
}

function validChanges(changes) {
  if (!changes || Array.isArray(changes) || typeof changes !== 'object') return false;
  return Object.entries(changes).every(([key, value]) => {
    if (!allowedKey.test(key)) return false;
    if (value === null) return true;
    if (typeof value !== 'string') return false;
    if (key === avatarKey) return value.length <= 180000 && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+={0,2}$/.test(value);
    return value.length <= 1000000;
  });
}

async function readChanges(request) {
  const reader = request.body?.getReader();
  if (!reader) return null;
  const streamDecoder = new TextDecoder();
  const parts = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 4000000) {
      await reader.cancel();
      return null;
    }
    parts.push(streamDecoder.decode(value, { stream: true }));
  }
  return JSON.parse(parts.join('') + streamDecoder.decode());
}

export async function handleGoogleAccount(request, env, store, fetcher = fetch) {
  const pathname = new URL(request.url).pathname.replace(/\/+$/, '');
  const config = configFrom(env);
  if (!config || !store) {
    return pathname.endsWith('/session')
      ? json({ configured: false, user: null })
      : json({ error: 'Đăng nhập Google chưa được cấu hình.' }, 503);
  }
  if (request.method === 'GET' && pathname.endsWith('/google/start')) return startLogin(config);
  if (request.method === 'GET' && pathname.endsWith('/google/callback')) return finishLogin(request, config, fetcher);

  const session = await unseal(getCookie(request, sessionCookie), config.secret);
  if (request.method === 'GET' && pathname.endsWith('/session')) return json({ configured: true, user: session?.user || null });
  if (request.method !== 'POST') return json({ error: 'Phương thức không hợp lệ.' }, 405);
  if (request.headers.get('origin') !== config.callback.origin) return json({ error: 'Yêu cầu không hợp lệ.' }, 403);
  const isLogout = pathname.endsWith('/logout');
  if (!isLogout && !pathname.endsWith('/sync')) return json({ error: 'Không tìm thấy.' }, 404);
  if (!session?.user) return json({ error: 'Vui lòng đăng nhập lại.' }, 401);
  if (request.headers.get('X-Minna-Account') !== session.user.uid) {
    return json({ error: 'Tài khoản đang mở đã thay đổi.' }, 409);
  }
  if (isLogout) return json({ success: true }, 200, { 'Set-Cookie': cookie(sessionCookie, '', 0) });
  if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ error: 'Dữ liệu không hợp lệ.' }, 415);

  let changes;
  try {
    changes = await readChanges(request);
  } catch {
    return json({ error: 'Dữ liệu không hợp lệ.' }, 400);
  }
  if (!validChanges(changes)) return json({ error: 'Dữ liệu đồng bộ không hợp lệ hoặc quá lớn.' }, 400);
  try {
    const revision = Date.now();
    const updates = Object.fromEntries(Object.entries(changes).map(([key, value]) => [key, { value, revision }]));
    const entries = await store.sync(session.user.uid, updates);
    return json({ entries });
  } catch {
    return json({ error: 'Chưa thể lưu dữ liệu. Vui lòng thử lại.' }, 503);
  }
}
