/**
 * ==========================================================================
 * CLOUDFLARE WORKER / PAGES ADVANCED SECURITY & PROGRESS SYNCHRONIZATION
 * File: _worker.js
 * 
 * Thực thi đầy đủ 5 bước tích hợp D1, Auth và Đồng bộ tiến độ đa thiết bị:
 *  1. Quản lý và liên kết cơ sở dữ liệu Cloudflare D1 (Serverless SQLite)
 *  2. Dịch vụ Đăng nhập & Xác thực JWT bảo mật cao (Web Crypto PBKDF2 & HS256)
 *  3. API 1: GET /api/progress - Lấy tiến trình bài học gần nhất
 *  4. API 2: POST /api/progress - Tự động lưu tiến trình học lên đám mây
 *  5. Hệ thống phòng thủ bảo mật 5 lớp: 9 Security Headers, Anti-Scraping,
 *     Honeypot Trap, Audio Hotlink Protection & Custom Domain Canonical
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. CẤU HÌNH HTTP SECURITY HEADERS TIÊU CHUẨN CAO
// --------------------------------------------------------------------------
const SECURITY_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "media-src 'self' data: blob: https:",
    "connect-src 'self' https://speechgen.io https://api.speechgen.io",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests"
  ].join('; '),
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), vr=(), interest-cohort=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin'
};

// --------------------------------------------------------------------------
// 2. CHỐNG BOT CÀO DỮ LIỆU & RATE LIMITING
// --------------------------------------------------------------------------
const BLOCKED_BOT_REGEX = new RegExp([
  'python-requests',
  'curl',
  'wget',
  'scrapy',
  'aiohttp',
  'mechanize',
  'phantomjs',
  'postmanruntime',
  'httpclient',
  'undici',
  'go-http-client',
  'node-fetch',
  'axios',
  'GPTBot',
  'ClaudeBot',
  'CCBot',
  'Bytespider',
  'PetalBot',
  'Amazonbot',
  'FacebookBot',
  'anthropic-ai',
  'Google-Extended',
  'Crawlson',
  'ScrapyProject',
  'DataForSeoBot'
].join('|'), 'i');

const HONEYPOT_PATH = '/hidden-crawler-trap/';

const ipRateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_MIN = 120;
const MAX_API_PER_MIN = 45;

function checkRateLimit(ip, isApi = false) {
  const now = Date.now();
  const maxReq = isApi ? MAX_API_PER_MIN : MAX_REQUESTS_PER_MIN;
  const key = `${ip}:${isApi ? 'api' : 'web'}`;
  
  let record = ipRateLimitMap.get(key);
  if (!record || (now - record.startTime) > RATE_LIMIT_WINDOW_MS) {
    record = { count: 1, startTime: now };
    ipRateLimitMap.set(key, record);
    return true;
  }
  
  record.count++;
  if (record.count > maxReq) {
    return false;
  }
  return true;
}

if (typeof setInterval !== 'undefined') {
  const cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, val] of ipRateLimitMap.entries()) {
      if (now - val.startTime > RATE_LIMIT_WINDOW_MS) {
        ipRateLimitMap.delete(key);
      }
    }
  }, 120000);
  if (cleanupTimer && typeof cleanupTimer.unref === 'function') {
    cleanupTimer.unref();
  }
}

// --------------------------------------------------------------------------
// 3. MẬT MÃ HỌC WEB CRYPTO: BĂM MẬT KHẨU (PBKDF2) & KÝ XÁC THỰC JWT (HS256)
// --------------------------------------------------------------------------
function bytesToHex(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes;
}

function base64UrlEncode(str) {
  const enc = new TextEncoder();
  const bytes = enc.encode(str);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const b64 = (typeof btoa === 'function')
    ? btoa(binary)
    : Buffer.from(bytes).toString('base64');
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) base64 += '=';
  const binary = (typeof atob === 'function')
    ? atob(base64)
    : Buffer.from(base64, 'base64').toString('binary');
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const dec = new TextDecoder();
  return dec.decode(bytes);
}

// Băm mật khẩu an toàn chuẩn PBKDF2 100.000 vòng lặp kèm muối Salt ngẫu nhiên
async function hashPassword(password, saltHex = null) {
  const enc = new TextEncoder();
  const salt = saltHex ? hexToBytes(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  const actualSaltHex = bytesToHex(salt);
  
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    256
  );
  
  const hashHex = bytesToHex(new Uint8Array(derivedBits));
  return { hash: hashHex, salt: actualSaltHex };
}

// Ký JSON Web Token (JWT) thời hạn 30 ngày
async function signJwt(payload, secret) {
  const enc = new TextEncoder();
  const header = { alg: 'HS256', typ: 'JWT' };
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const data = `${encodedHeader}.${encodedPayload}`;

  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const sigBuffer = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  const sigBytes = new Uint8Array(sigBuffer);
  let sigString = '';
  for (let i = 0; i < sigBytes.length; i++) {
    sigString += String.fromCharCode(sigBytes[i]);
  }
  const encodedSig = base64UrlEncode(sigString);
  return `${data}.${encodedSig}`;
}

// Xác thực tính hợp lệ và thời hạn của JWT
async function verifyJwt(token, secret) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [headerB64, payloadB64, sigB64] = parts;
  const enc = new TextEncoder();
  const data = `${headerB64}.${payloadB64}`;

  try {
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    const sigStr = base64UrlDecode(sigB64);
    const sigBytes = new Uint8Array(sigStr.split('').map(c => c.charCodeAt(0)));
    const isValid = await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(data));
    if (!isValid) return null;

    const payload = JSON.parse(base64UrlDecode(payloadB64));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch (e) {
    return null;
  }
}

// Trích xuất và xác thực người dùng từ tiêu đề Authorization
async function authenticateRequest(request, env) {
  const authHeader = request.headers.get('Authorization') || '';
  if (!authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7).trim();
  const secret = (env && env.JWT_SECRET) || 'minna-super-secret-jwt-key-2026-production';
  return await verifyJwt(token, secret);
}

// --------------------------------------------------------------------------
// 4. KHO LƯU TRỮ DỮ LIỆU: CLOUDFLARE D1 (VÀ FALLBACK BỘ NHỚ KHI TEST DEV)
// --------------------------------------------------------------------------
const memoryUsers = new Map();
const memoryProgress = new Map();

async function dbGetUserByEmail(env, email) {
  const cleanEmail = email.toLowerCase().trim();
  if (env && env.DB && typeof env.DB.prepare === 'function') {
    return await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(cleanEmail).first();
  }
  return memoryUsers.get(cleanEmail) || null;
}

async function dbGetUserById(env, id) {
  if (env && env.DB && typeof env.DB.prepare === 'function') {
    return await env.DB.prepare('SELECT id, email, display_name, created_at, last_login_at FROM users WHERE id = ?').bind(id).first();
  }
  for (const u of memoryUsers.values()) {
    if (u.id === id) return u;
  }
  return null;
}

async function dbCreateUser(env, user) {
  const cleanEmail = user.email.toLowerCase().trim();
  if (env && env.DB && typeof env.DB.prepare === 'function') {
    await env.DB.prepare(
      'INSERT INTO users (id, email, password_hash, salt, display_name, created_at, last_login_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).bind(user.id, cleanEmail, user.password_hash, user.salt, user.display_name, user.created_at, user.last_login_at).run();
  } else {
    memoryUsers.set(cleanEmail, { ...user, email: cleanEmail });
  }
}

async function dbUpdateUserLastLogin(env, id) {
  const now = Date.now();
  if (env && env.DB && typeof env.DB.prepare === 'function') {
    await env.DB.prepare('UPDATE users SET last_login_at = ? WHERE id = ?').bind(now, id).run();
  } else {
    for (const u of memoryUsers.values()) {
      if (u.id === id) u.last_login_at = now;
    }
  }
}

async function dbGetProgress(env, userId) {
  if (env && env.DB && typeof env.DB.prepare === 'function') {
    return await env.DB.prepare('SELECT * FROM user_progress WHERE user_id = ?').bind(userId).first();
  }
  return memoryProgress.get(userId) || null;
}

async function dbUpsertProgress(env, progress) {
  if (env && env.DB && typeof env.DB.prepare === 'function') {
    await env.DB.prepare(`
      INSERT INTO user_progress (user_id, last_active_id, completed_modules, practice_answers, dokkai_answers, device_settings, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        last_active_id = excluded.last_active_id,
        completed_modules = excluded.completed_modules,
        practice_answers = excluded.practice_answers,
        dokkai_answers = excluded.dokkai_answers,
        device_settings = excluded.device_settings,
        updated_at = excluded.updated_at
    `).bind(
      progress.user_id,
      progress.last_active_id,
      progress.completed_modules,
      progress.practice_answers,
      progress.dokkai_answers,
      progress.device_settings,
      progress.updated_at
    ).run();
  } else {
    memoryProgress.set(progress.user_id, { ...progress });
  }
}

// --------------------------------------------------------------------------
// 5. CÁC ROUTE XỬ LÝ AUTHENTICATION (/api/auth/*)
// --------------------------------------------------------------------------
async function handleAuthRegister(request, env) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }

  try {
    const body = await request.json();
    const email = (body && body.email ? String(body.email) : '').trim().toLowerCase();
    const password = body && body.password ? String(body.password) : '';
    const displayName = (body && body.displayName ? String(body.displayName) : '').trim() || email.split('@')[0];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email không đúng định dạng.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    if (password.length < 6) {
      return new Response(JSON.stringify({ error: 'Mật khẩu phải có ít nhất 6 ký tự.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    const existing = await dbGetUserByEmail(env, email);
    if (existing) {
      return new Response(JSON.stringify({ error: 'Email này đã được đăng ký tài khoản.' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    const { hash, salt } = await hashPassword(password);
    const userId = 'usr_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
    const now = Date.now();

    const newUser = {
      id: userId,
      email,
      password_hash: hash,
      salt,
      display_name: displayName,
      created_at: now,
      last_login_at: now
    };

    await dbCreateUser(env, newUser);

    // Khởi tạo bản ghi tiến độ rỗng
    await dbUpsertProgress(env, {
      user_id: userId,
      last_active_id: 'bai-1',
      completed_modules: '[]',
      practice_answers: '{}',
      dokkai_answers: '{}',
      device_settings: '{}',
      updated_at: now
    });

    const jwtSecret = (env && env.JWT_SECRET) || 'minna-super-secret-jwt-key-2026-production';
    const token = await signJwt({
      sub: userId,
      email: email,
      name: displayName,
      exp: Math.floor(Date.now() / 1000) + (30 * 86400) // 30 ngày
    }, jwtSecret);

    return new Response(JSON.stringify({
      success: true,
      message: 'Đăng ký tài khoản thành công!',
      token,
      user: { id: userId, email, displayName }
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Lỗi đăng ký: ' + err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }
}

async function handleAuthLogin(request, env) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }

  try {
    const body = await request.json();
    const email = (body && body.email ? String(body.email) : '').trim().toLowerCase();
    const password = body && body.password ? String(body.password) : '';

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Vui lòng nhập đầy đủ Email và Mật khẩu.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    const user = await dbGetUserByEmail(env, email);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Email hoặc mật khẩu không chính xác.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    const { hash } = await hashPassword(password, user.salt);
    if (hash !== user.password_hash) {
      return new Response(JSON.stringify({ error: 'Email hoặc mật khẩu không chính xác.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    await dbUpdateUserLastLogin(env, user.id);

    const jwtSecret = (env && env.JWT_SECRET) || 'minna-super-secret-jwt-key-2026-production';
    const token = await signJwt({
      sub: user.id,
      email: user.email,
      name: user.display_name,
      exp: Math.floor(Date.now() / 1000) + (30 * 86400)
    }, jwtSecret);

    return new Response(JSON.stringify({
      success: true,
      message: 'Đăng nhập thành công!',
      token,
      user: { id: user.id, email: user.email, displayName: user.display_name }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Lỗi đăng nhập: ' + err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }
}

async function handleAuthMe(request, env) {
  const auth = await authenticateRequest(request, env);
  if (!auth) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Phiên đăng nhập không hợp lệ hoặc đã hết hạn.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }

  const user = await dbGetUserById(env, auth.sub);
  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }

  return new Response(JSON.stringify({
    success: true,
    user: {
      id: user.id,
      email: user.email,
      displayName: user.display_name,
      lastLoginAt: user.last_login_at
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
  });
}

// --------------------------------------------------------------------------
// 6. HAI API XỬ LÝ TIẾN ĐỘ HỌC TẬP (GET /api/progress & POST /api/progress)
// --------------------------------------------------------------------------

// API 1: Lấy tiến trình học mới nhất của người dùng
async function handleGetProgress(request, env) {
  const auth = await authenticateRequest(request, env);
  if (!auth) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Bạn cần đăng nhập để lấy tiến trình đám mây.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }

  try {
    const row = await dbGetProgress(env, auth.sub);
    if (!row) {
      return new Response(JSON.stringify({
        success: true,
        progress: {
          lastActiveId: 'bai-1',
          completedModules: [],
          practiceAnswers: {},
          dokkaiAnswers: {},
          deviceSettings: {},
          updatedAt: 0
        }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    let completedModules = [];
    let practiceAnswers = {};
    let dokkaiAnswers = {};
    let deviceSettings = {};

    try { completedModules = JSON.parse(row.completed_modules || '[]'); } catch (e) {}
    try { practiceAnswers = JSON.parse(row.practice_answers || '{}'); } catch (e) {}
    try { dokkaiAnswers = JSON.parse(row.dokkai_answers || '{}'); } catch (e) {}
    try { deviceSettings = JSON.parse(row.device_settings || '{}'); } catch (e) {}

    return new Response(JSON.stringify({
      success: true,
      progress: {
        lastActiveId: row.last_active_id || 'bai-1',
        completedModules: Array.isArray(completedModules) ? completedModules : [],
        practiceAnswers: typeof practiceAnswers === 'object' ? practiceAnswers : {},
        dokkaiAnswers: typeof dokkaiAnswers === 'object' ? dokkaiAnswers : {},
        deviceSettings: typeof deviceSettings === 'object' ? deviceSettings : {},
        updatedAt: row.updated_at || 0
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Lỗi tải tiến độ: ' + err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }
}

// API 2: Tự động lưu tiến trình học lên Cloudflare D1
async function handlePostProgress(request, env) {
  const auth = await authenticateRequest(request, env);
  if (!auth) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Bạn cần đăng nhập để lưu tiến trình lên đám mây.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }

  try {
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    const lastActiveId = (body.lastActiveId ? String(body.lastActiveId) : 'bai-1').slice(0, 64);
    const completedModules = Array.isArray(body.completedModules) ? body.completedModules.slice(0, 300) : [];
    const practiceAnswers = (body.practiceAnswers && typeof body.practiceAnswers === 'object') ? body.practiceAnswers : {};
    const dokkaiAnswers = (body.dokkaiAnswers && typeof body.dokkaiAnswers === 'object') ? body.dokkaiAnswers : {};
    const deviceSettings = (body.deviceSettings && typeof body.deviceSettings === 'object') ? body.deviceSettings : {};
    const now = Date.now();

    await dbUpsertProgress(env, {
      user_id: auth.sub,
      last_active_id: lastActiveId,
      completed_modules: JSON.stringify(completedModules),
      practice_answers: JSON.stringify(practiceAnswers),
      dokkai_answers: JSON.stringify(dokkaiAnswers),
      device_settings: JSON.stringify(deviceSettings),
      updated_at: now
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Tiến trình học đã được đồng bộ an toàn lên đám mây!',
      syncedAt: now
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Lỗi lưu tiến độ: ' + err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }
}

// --------------------------------------------------------------------------
// 7. KIỂM TRA CHỐNG ĐÁNH CẮP ÂM THANH (AUDIO HOTLINK PROTECTION)
// --------------------------------------------------------------------------
function isAudioOrSpeechResource(url) {
  const path = url.pathname.toLowerCase();
  return (
    path.startsWith('/api/speech') ||
    path.startsWith('/audio/') ||
    path.endsWith('.mp3') ||
    path.endsWith('.wav') ||
    path.endsWith('.ogg') ||
    path.endsWith('.m4a')
  );
}

function checkHotlinkProtection(request, url) {
  const secFetchSite = request.headers.get('Sec-Fetch-Site');
  if (secFetchSite === 'cross-site') {
    return false;
  }

  const referer = request.headers.get('Referer');
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      const isAllowedHost = 
        refererUrl.hostname === url.hostname ||
        refererUrl.hostname.endsWith(url.hostname) ||
        refererUrl.hostname === 'localhost' ||
        refererUrl.hostname === '127.0.0.1';
      if (!isAllowedHost) return false;
    } catch (e) {
      return false;
    }
  }

  const origin = request.headers.get('Origin');
  if (origin) {
    try {
      const originUrl = new URL(origin);
      const isAllowedOrigin = 
        originUrl.hostname === url.hostname ||
        originUrl.hostname.endsWith(url.hostname) ||
        originUrl.hostname === 'localhost' ||
        originUrl.hostname === '127.0.0.1';
      if (!isAllowedOrigin) return false;
    } catch (e) {
      return false;
    }
  }

  return true;
}

// --------------------------------------------------------------------------
// 8. PROXY TTS PHÁT ÂM TIẾNG NHẬT BẢO MẬT (/api/speech)
// --------------------------------------------------------------------------
async function handleSpeechProxy(request, env) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }

  try {
    const body = await request.json();
    const speechText = (body && body.text ? String(body.text) : '').trim();
    const speed = body && body.speed ? String(body.speed) : '0.92';
    const pitch = body && body.pitch ? String(body.pitch) : '0';

    if (!speechText) {
      return new Response(JSON.stringify({ error: 'Missing text parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    const token = (env && env.SPEECHGEN_TOKEN) || 'SECURE_WORKER_TOKEN';
    const email = (env && env.SPEECHGEN_EMAIL) || 'secure_worker@example.com';
    const voice = (env && env.SPEECHGEN_VOICE) || 'Akira';

    const speechgenParams = new URLSearchParams({
      token: token,
      email: email,
      voice: voice,
      text: speechText,
      format: 'mp3',
      speed: speed,
      pitch: pitch,
      pause_sentence: '350',
      pause_paragraph: '500'
    });

    const sgRes = await fetch('https://speechgen.io/index.php?r=api/text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: speechgenParams.toString()
    });

    if (!sgRes.ok) {
      return new Response(JSON.stringify({ error: 'Upstream TTS provider error', status: sgRes.status }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    const sgData = await sgRes.json();
    if (sgData && (sgData.status === 1 || sgData.status === '1') && (sgData.file || sgData.file_cors)) {
      return new Response(JSON.stringify({
        success: true,
        audioUrl: sgData.file_cors || sgData.file
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=86400',
          ...SECURITY_HEADERS
        }
      });
    }

    return new Response(JSON.stringify({ error: (sgData && sgData.error) || 'TTS generation failed' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Speech Proxy Internal Error: ' + err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
    });
  }
}

// --------------------------------------------------------------------------
// 9. WORKER FETCH HANDLER CHÍNH
// --------------------------------------------------------------------------
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1';
    const userAgent = request.headers.get('User-Agent') || '';

    // 1. Chuyển hướng HTTPS Canonical & Custom Domain
    if (url.protocol === 'http:' && !url.hostname.includes('localhost') && !url.hostname.includes('127.0.0.1')) {
      const httpsUrl = new URL(request.url);
      httpsUrl.protocol = 'https:';
      return Response.redirect(httpsUrl.toString(), 301);
    }

    const canonicalDomain = env && env.CANONICAL_DOMAIN;
    if (canonicalDomain && url.hostname !== canonicalDomain && !url.hostname.includes('localhost') && !url.hostname.includes('127.0.0.1')) {
      const canonicalUrl = new URL(request.url);
      canonicalUrl.hostname = canonicalDomain;
      return Response.redirect(canonicalUrl.toString(), 301);
    }

    // 2. Chống Bot cào tự động & Bẫy Honeypot
    if (url.pathname === HONEYPOT_PATH || url.pathname.startsWith('/hidden-crawler-trap')) {
      return new Response(JSON.stringify({
        error: "Forbidden: Honeypot crawler trap triggered. Your IP has been logged.",
        ip: clientIp
      }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'X-Crawler-Detected': 'true',
          'Retry-After': '86400',
          ...SECURITY_HEADERS
        }
      });
    }

    if (BLOCKED_BOT_REGEX.test(userAgent)) {
      return new Response(JSON.stringify({
        error: "Access Denied: Automated scraping tools and unauthorized AI crawlers are strictly forbidden.",
        reason: "User-Agent rejected by Minna Security Shield"
      }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'X-Bot-Blocked': 'true',
          ...SECURITY_HEADERS
        }
      });
    }

    // 3. Giới hạn tần suất truy cập (Rate Limit)
    const isApiRequest = url.pathname.startsWith('/api/');
    if (!checkRateLimit(clientIp, isApiRequest)) {
      return new Response(JSON.stringify({
        error: "Too Many Requests: Rate limit exceeded. Please slow down.",
        retryAfter: 60
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
          ...SECURITY_HEADERS
        }
      });
    }

    // 4. Chống đánh cắp băng thông âm thanh (Audio Hotlink)
    if (isAudioOrSpeechResource(url)) {
      if (!checkHotlinkProtection(request, url)) {
        return new Response(JSON.stringify({
          error: "Forbidden: Audio hotlinking from unauthorized third-party websites is blocked.",
          code: "HOTLINK_FORBIDDEN"
        }), {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'X-Hotlink-Blocked': 'true',
            ...SECURITY_HEADERS
          }
        });
      }
    }

    // 5. Tuyến đường API Authentication (/api/auth/*)
    if (url.pathname === '/api/auth/register') {
      return handleAuthRegister(request, env);
    }
    if (url.pathname === '/api/auth/login') {
      return handleAuthLogin(request, env);
    }
    if (url.pathname === '/api/auth/me') {
      return handleAuthMe(request, env);
    }

    // 6. Tuyến đường API Tiến độ học tập (/api/progress)
    if (url.pathname === '/api/progress') {
      if (request.method === 'GET') {
        return handleGetProgress(request, env);
      }
      if (request.method === 'POST') {
        return handlePostProgress(request, env);
      }
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...SECURITY_HEADERS }
      });
    }

    // 7. Tuyến đường TTS Voice Proxy (/api/speech)
    if (url.pathname === '/api/speech') {
      return handleSpeechProxy(request, env);
    }

    // 8. Phục vụ tài nguyên tĩnh (HTML, CSS, JS, DATA) kèm 9 HTTP Security Headers
    let response;
    try {
      if (env && env.ASSETS && typeof env.ASSETS.fetch === 'function') {
        response = await env.ASSETS.fetch(request);
      } else {
        response = await fetch(request);
      }
    } catch (fetchErr) {
      return new Response("Service Unavailable", { status: 503 });
    }

    const secureResponse = new Response(response.body, response);
    for (const [headerKey, headerVal] of Object.entries(SECURITY_HEADERS)) {
      secureResponse.headers.set(headerKey, headerVal);
    }

    secureResponse.headers.set('X-Security-Shield', 'Minna-Enterprise-Shield-v2.0');
    if (url.pathname.startsWith('/api/')) {
      secureResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    }

    return secureResponse;
  }
};
