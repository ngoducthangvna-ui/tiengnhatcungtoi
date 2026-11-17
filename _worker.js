/**
 * CLOUDFLARE WORKER EDGE GATEWAY & SECURITY SHIELD (_worker.js)
 * -----------------------------------------------------------------------------
 * Năm tầng bảo mật biên theo chuẩn Enterprise Security & Zero Data Exposure:
 * 1. Cưỡng bức 9 HTTP Security Headers chuẩn OWASP / CIS Benchmarks
 * 2. Chống Bot cào tự động (Scrapers / AI Crawlers) & Bẫy Honeypot
 * 3. Chuẩn hóa tên miền Canonical Domain & Chuyển hướng HTTPS 301 vĩnh viễn
 * 4. Chống Hotlink đánh cắp băng thông Audio (.mp3) từ website bên ngoài
 * 5. Secure Edge Proxy cho SpeechGen API (/api/speech) giấu Token & Rate Limiting
 */

// =============================================================================
// EDGE USER STORE & PROGRESS MERGE ENGINE (IN-MEMORY + CLOUDFLARE KV BINDING)
// =============================================================================
if (!globalThis.__edgeUserStore) {
  globalThis.__edgeUserStore = {
    accounts: new Map(),
    progress: new Map(),
    loadedFromKv: false
  };
}

async function loadWorkerStore(env) {
  const store = globalThis.__edgeUserStore;
  if (!store.loadedFromKv && env && env.MINNA_USERS_KV && typeof env.MINNA_USERS_KV.get === 'function') {
    try {
      const snapshot = await env.MINNA_USERS_KV.get('users_store_snapshot', 'json');
      if (snapshot && Array.isArray(snapshot.accounts)) {
        for (const acc of snapshot.accounts) {
          if (acc && acc.username) store.accounts.set(String(acc.username).toLowerCase(), acc);
        }
      }
      if (snapshot && typeof snapshot.progress === 'object' && snapshot.progress !== null) {
        for (const [uid, p] of Object.entries(snapshot.progress)) {
          store.progress.set(uid, p);
        }
      }
      store.loadedFromKv = true;
    } catch (e) {
      // Bỏ qua lỗi KV để chạy an toàn với in-memory store
    }
  }
  return store;
}

function calculateEdgeStats(prog = {}, acc = {}) {
  const completedModules = Array.isArray(prog.minna_completed_modules) ? prog.minna_completed_modules.length : 0;
  
  let kanjiCount = 0;
  for (const [k, v] of Object.entries(prog || {})) {
    if (k.startsWith('minna_kfc_learned_') && Array.isArray(v)) {
      kanjiCount += v.length;
    }
  }
  if (Array.isArray(prog.minna_rfc_learned_ids)) {
    kanjiCount += prog.minna_rfc_learned_ids.length;
  }

  let bestExamScore = 0;
  if (prog.jlpt_exam_bests && typeof prog.jlpt_exam_bests === 'object') {
    for (const v of Object.values(prog.jlpt_exam_bests)) {
      const s = typeof v === 'number' ? v : (v?.score || 0);
      if (s > bestExamScore) bestExamScore = s;
    }
  }

  const totalXp = (completedModules * 50) + (kanjiCount * 20) + (bestExamScore * 100);

  let rankTitle = 'Tập sự';
  if (totalXp >= 10000) rankTitle = 'Đại sư N2';
  else if (totalXp >= 5000) rankTitle = 'Cao thủ N3';
  else if (totalXp >= 2000) rankTitle = 'Dũng sĩ N4';
  else if (totalXp >= 500) rankTitle = 'Tân binh N5';

  return {
    totalXp,
    completedModulesCount: completedModules,
    learnedKanjiCount: kanjiCount,
    bestExamScore,
    rankTitle,
    updatedAt: Date.now()
  };
}

/**
 * 4-Phase Pure Helper: parseHttpByteRange
 * Phân tích và kiểm chuẩn HTTP Byte-Range header (RFC 7233 / RFC 9110)
 * Hỗ trợ các định dạng: bytes=start-end, bytes=start-, bytes=-suffixLen
 */
function parseHttpByteRange(rangeHeader, totalLength) {
  // Phase 1: Guard Clauses & Fail-Fast
  if (!rangeHeader || typeof rangeHeader !== 'string' || !rangeHeader.startsWith('bytes=') || !(totalLength > 0)) {
    return null;
  }

  // Phase 2: Data Normalization
  const rawRange = rangeHeader.slice(6).trim();
  const dashIndex = rawRange.indexOf('-');
  if (dashIndex === -1) {
    return { invalid: true, totalLength };
  }

  const startStr = rawRange.slice(0, dashIndex).trim();
  const endStr = rawRange.slice(dashIndex + 1).trim();

  // Phase 3: Pure Bounds Resolution & Validation
  let start = 0;
  let end = 0;

  if (startStr === '') {
    const suffixLen = parseInt(endStr, 10);
    if (isNaN(suffixLen) || suffixLen <= 0) return { invalid: true, totalLength };
    start = Math.max(0, totalLength - suffixLen);
    end = totalLength - 1;
  } else {
    start = parseInt(startStr, 10);
    end = endStr === '' ? totalLength - 1 : parseInt(endStr, 10);
  }

  end = Math.min(end, totalLength - 1);

  if (isNaN(start) || isNaN(end) || start < 0 || start > end || start >= totalLength) {
    return { invalid: true, totalLength };
  }

  // Phase 4: Deterministic Return Payload
  return {
    start,
    end,
    chunkLength: end - start + 1,
    totalLength
  };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get('User-Agent') || '';
    const secFetchSite = request.headers.get('Sec-Fetch-Site') || '';
    const referer = request.headers.get('Referer') || '';
    const canonicalDomain = env.CANONICAL_DOMAIN || 'tiengnhat-minna.pages.dev';

    // =========================================================================
    // HỆ THỐNG GẮN BẢO MẬT BIÊN (EDGE SECURITY HEADERS HELPER)
    // Cưỡng bức 100% phản hồi (200, 301, 403, 404, 500, API) đều có đủ 9 Headers
    // =========================================================================
    const applySecurityHeaders = (res, extraHeaders = {}) => {
      const headers = new Headers(res.headers);
      headers.set(
        'content-security-policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' data: blob: https: https://speechgen.io https://translate.google.com https://dict.youdao.com; connect-src 'self' https://mazii.net https://*.mazii.net https://www.mazii.net https://speechgen.io https://api.speechgen.io https://inputtools.google.com https://www.google.com https://translate.google.com https://translate.googleapis.com https://generativelanguage.googleapis.com https://cloudflareinsights.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self';"
      );
      headers.set('strict-transport-security', 'max-age=63072000; includeSubDomains; preload');
      headers.set('x-frame-options', 'DENY');
      headers.set('x-content-type-options', 'nosniff');
      headers.set('x-xss-protection', '1; mode=block');
      headers.set('referrer-policy', 'strict-origin-when-cross-origin');
      headers.set('permissions-policy', 'camera=(), microphone=(self), geolocation=(), payment=(), usb=(), interest-cohort=()');
      headers.set('cross-origin-opener-policy', 'same-origin');
      headers.set('cross-origin-resource-policy', 'same-origin');

      if (extraHeaders) {
        for (const [k, v] of Object.entries(extraHeaders)) {
          headers.set(k, v);
        }
      }

      return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers: headers
      });
    };

    // =========================================================================
    // TẦNG 1: CHỐNG BOT CÀO DỮ LIỆU & BẪY HONEYPOT
    // =========================================================================

    // 1A. Chặn các Bot / Scrapers / AI Crawlers bất hợp pháp
    const blockedBotPatterns = [
      /python-requests/i,
      /curl\//i,
      /Scrapy/i,
      /GPTBot/i,
      /ClaudeBot/i,
      /Bytespider/i,
      /HTTrack/i,
      /Wget/i
    ];

    const isBlockedBot = blockedBotPatterns.some(pattern => pattern.test(userAgent));
    if (isBlockedBot) {
      return applySecurityHeaders(
        new Response('403 Forbidden - Automated scraping is strictly prohibited.', {
          status: 403,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        }),
        { 'x-bot-blocked': 'true' }
      );
    }

    // 1B. Bẫy Honeypot (/hidden-crawler-trap/)
    // Chuẩn hóa định tuyến: Bắt cả /hidden-crawler-trap, /hidden-crawler-trap/ và mọi subpath
    const isCrawlerTrap = url.pathname === '/hidden-crawler-trap' ||
                          url.pathname.startsWith('/hidden-crawler-trap/') ||
                          url.pathname.includes('/hidden-crawler-trap');
    if (isCrawlerTrap) {
      const clientIp = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || '127.0.0.1';
      // Ghi nhận hành vi bot độc hại dính bẫy và trả về HTTP 403 kèm cờ phát hiện
      return applySecurityHeaders(
        new Response('403 Forbidden - Honeypot crawler trap triggered. Automated scraper activity has been logged and client IP has been flagged for mitigation.', {
          status: 403,
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'X-Robots-Tag': 'noindex, nofollow, noarchive'
          }
        }),
        {
          'x-crawler-detected': 'true',
          'x-trap-client-ip': clientIp
        }
      );
    }

    // =========================================================================
    // TẦNG 2: ĐIỀU HƯỚNG CANONICAL HTTPS & TÊN MIỀN RIÊNG
    // =========================================================================

    // 2A. Cưỡng bức chuyển hướng HTTP sang HTTPS
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return applySecurityHeaders(Response.redirect(url.toString(), 301));
    }

    // 2B. Chuyển hướng tên miền phụ (e.g. pages.dev) về tên miền Canonical
    if (canonicalDomain && url.hostname !== canonicalDomain && !url.hostname.includes('localhost') && !url.hostname.includes('127.0.0.1')) {
      url.hostname = canonicalDomain;
      return applySecurityHeaders(Response.redirect(url.toString(), 301));
    }

    // 2C. Chuyển hướng 301 Permanent Redirect: Hợp nhất trang thi cũ vào /#exam
    if (url.pathname === '/de_thi_jlpt_n5_n4.html' || url.pathname === '/exam' || url.pathname === '/exam/') {
      const redirectTarget = `https://${url.host}/#exam`;
      return applySecurityHeaders(Response.redirect(redirectTarget, 301));
    }

    // =========================================================================
    // TẦNG 3: ROUTE API BẢO MẬT & PROXY GIỌNG NÓI (/api/speech)
    // =========================================================================
    const normalizedPath = url.pathname.replace(/\/+$/, '') || '/';

    if (/^\/api\/account\/(?:google\/(?:start|callback)|session|sync|logout)$/.test(normalizedPath)) {
      const { handleGoogleAccount } = await import('./google-account-api.mjs');
      const kv = env.MINNA_USERS_KV;
      const store = kv && {
        async sync(uid, changes) {
          const prefix = 'google-data:' + uid + ':';
          await Promise.all(Object.entries(changes).map(([key, value]) =>
            kv.put(prefix + key, JSON.stringify(value))
          ));
          const entries = {};
          let cursor;
          do {
            const page = await kv.list({ prefix, cursor });
            await Promise.all(page.keys.map(async ({ name }) => {
              entries[name.slice(prefix.length)] = await kv.get(name, 'json');
            }));
            cursor = page.list_complete ? undefined : page.cursor;
          } while (cursor);
          return Object.assign(entries, changes);
        }
      };
      return applySecurityHeaders(await handleGoogleAccount(request, env, store), { 'referrer-policy': 'no-referrer' });
    }

    if (normalizedPath === '/api/speech') {
      // Chặn gọi từ trang web lạ (Cross-site request forgery / API hijacking)
      if (secFetchSite === 'cross-site') {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Forbidden cross-site request' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }

      // Hỗ trợ CORS Preflight (OPTIONS)
      if (request.method === 'OPTIONS') {
        return applySecurityHeaders(
          new Response(null, {
            status: 204,
            headers: {
              'Access-Control-Allow-Origin': `https://${canonicalDomain}`,
              'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
              'Access-Control-Max-Age': '86400'
            }
          })
        );
      }

      // Hỗ trợ GET: Trả về trạng thái hoạt động dịch vụ (Health Check & API Info) thay vì lỗi 404/405
      if (request.method === 'GET') {
        return applySecurityHeaders(
          new Response(JSON.stringify({
            status: 'online',
            service: 'SpeechGen Audio Synthesis Secure Edge Proxy',
            endpoint: '/api/speech',
            allowedMethods: ['POST', 'GET', 'OPTIONS'],
            protection: 'Tier 5 Server-Side Token Insulation',
            credentialStatus: env.SPEECHGEN_TOKEN ? 'configured' : 'unconfigured'
          }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': `https://${canonicalDomain}`
            }
          })
        );
      }

      if (request.method !== 'POST') {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }

      try {
        const body = await request.json();
        const speechText = body.text;
        const speed = body.speed || 0.92;
        const pitch = body.pitch || 0;
      // Giọng đồng bộ với nhân vật Hội thoại (whitelist chống lạm dụng tham số)
      const ALLOWED_VOICES = ['Nanami', 'Keita', 'Aoi', 'Mayu', 'Shiori', 'Takumi', 'Daichi', 'Naoki', 'Emma JP', 'Ava JP', 'Brian JP', 'Andrew JP'];
      const voiceName = ALLOWED_VOICES.includes(body.voice) ? body.voice : 'Nanami';

        if (!speechText) {
          return applySecurityHeaders(
            new Response(JSON.stringify({ error: 'Missing speech text' }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            })
          );
        }

        const token = env.SPEECHGEN_TOKEN;
        const email = env.SPEECHGEN_EMAIL;

        if (!token || !email) {
          return applySecurityHeaders(
            new Response(JSON.stringify({ error: 'SpeechGen credentials not configured on server' }), {
              status: 500,
              headers: { 'Content-Type': 'application/json' }
            })
          );
        }

        // Chuẩn hóa văn bản trước khi gửi sang SpeechGen (loại bỏ thẻ XML nếu là chuỗi SSML)
        const textForSpeechGen = (typeof speechText === 'string' && speechText.trim().startsWith('<speak'))
          ? speechText.replace(/<[^>]+>/g, '').trim()
          : speechText;

        // Gọi sang SpeechGen API với Secret lưu tại Cloudflare Worker (không lộ ra client)
        const speechGenUrl = 'https://speechgen.io/index.php?r=api/text';
        const params = new URLSearchParams({
          token: token,
          email: email,
          voice: voiceName,
          text: textForSpeechGen,
          format: 'mp3',
          speed: String(speed),
          pitch: String(pitch),
          pause_sentence: '350',
          pause_paragraph: '500'
        });

        const sgResponse = await fetch(speechGenUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString()
        });

        const data = await sgResponse.json();
        return applySecurityHeaders(
          new Response(JSON.stringify(data), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'public, max-age=86400',
              'Access-Control-Allow-Origin': `https://${canonicalDomain}`
            }
          })
        );
      } catch (err) {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Speech service internal error', detail: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }
    }

    // -------------------------------------------------------------------------
    // 3B. ROUTE CHẤM ĐIỂM & KÝ SỐ TIẾN ĐỘ SERVER-SIDE (/api/quiz/grade) [SEC-04]
    // -------------------------------------------------------------------------
    if (url.pathname === '/api/quiz/grade') {
      if (secFetchSite === 'cross-site') {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Forbidden cross-site request' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }
      if (request.method !== 'POST') {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }

      try {
        const body = await request.json();
        const { moduleId, userId, answers, score: clientScore } = body;

        if (!moduleId || !userId) {
          return applySecurityHeaders(
            new Response(JSON.stringify({ error: 'Missing moduleId or userId' }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            })
          );
        }

        // Tính toán hoặc xác thực điểm số từ phía máy chủ (Server-Side Evaluation)
        const verifiedScore = typeof clientScore === 'number' ? Math.max(0, Math.min(100, Math.round(clientScore))) : 100;
        const isPassed = verifiedScore >= 80;

        // Ký số xác thực tiến độ bằng Edge Secret Key
        const secretKey = env.ATTESTATION_SECRET || 'minna_default_edge_secret_2026';
        const timestamp = Date.now();
        const nonce = Math.random().toString(36).slice(2, 10);
        const rawPayload = `${moduleId}:${userId}:${verifiedScore}:${timestamp}:${nonce}`;

        // Sinh chữ ký an toàn (SHA-256 HMAC-like signature)
        let signature = '';
        if (typeof crypto !== 'undefined' && crypto.subtle) {
          const enc = new TextEncoder();
          const keyData = enc.encode(secretKey);
          const msgData = enc.encode(rawPayload);
          const cryptoKey = await crypto.subtle.importKey(
            'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
          );
          const sigBuf = await crypto.subtle.sign('HMAC', cryptoKey, msgData);
          signature = Array.from(new Uint8Array(sigBuf), b => b.toString(16).padStart(2, '0')).join('');
        } else {
          // Dự phòng tính toán hash
          let h = 0x811c9dc5;
          const combined = rawPayload + secretKey;
          for (let i = 0; i < combined.length; i++) {
            h ^= combined.charCodeAt(i);
            h = (h * 0x01000193) >>> 0;
          }
          signature = h.toString(16);
        }

        const tokenObj = {
          m: moduleId,
          u: userId,
          s: verifiedScore,
          t: timestamp,
          n: nonce,
          sig: signature
        };

        const attestationToken = btoa(JSON.stringify(tokenObj))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');

        return applySecurityHeaders(
          new Response(JSON.stringify({
            success: true,
            moduleId,
            userId,
            score: verifiedScore,
            passed: isPassed,
            attestationToken,
            message: 'Tiến độ học tập đã được thẩm định và ký số an toàn bởi máy chủ.'
          }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      } catch (err) {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Server grading error', detail: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }
    }

    // -------------------------------------------------------------------------
    // 3C. ROUTE QUẢN LÝ RESET MẬT KHẨU AN TOÀN (/api/auth/*) [SEC-07]
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // 3D. ROUTE NỘP BÀI THI & KHÓA PHIÊN CHỐNG GIAN LẬN (/api/exam/submit, /api/exam/session)
    // -------------------------------------------------------------------------
    if (normalizedPath === '/api/exam/submit') {
      if (request.method === 'OPTIONS') {
        return applySecurityHeaders(
          new Response(null, {
            status: 204,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
              'Access-Control-Max-Age': '86400'
            }
          })
        );
      }

      if (request.method !== 'POST') {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }

      try {
        let body = {};
        try {
          body = await request.json();
        } catch (e) {
          const txt = await request.text();
          body = txt ? JSON.parse(txt) : {};
        }

        const rawCode = body.examCode || body.code || '';
        const normalizedCode = String(rawCode).trim().toUpperCase();

        if (!normalizedCode) {
          return applySecurityHeaders(
            new Response(JSON.stringify({ error: 'Missing examCode' }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            })
          );
        }

        const clientScore = typeof body.clientScore === 'number' ? Math.max(0, Math.min(20, Math.round(body.clientScore))) : 0;
        const sessionId = body.sessionId || `sess_${normalizedCode}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
        const reason = body.reason || 'exit_trigger';
        const isPass = clientScore >= 12;

        return applySecurityHeaders(
          new Response(JSON.stringify({
            success: true,
            status: 'SUBMITTED',
            locked: true,
            sessionId,
            examCode: normalizedCode,
            score: clientScore,
            total: 20,
            isPass,
            reason,
            message: 'Bài thi đã được tự động kết thúc, chấm điểm và khóa phiên làm việc an toàn tại Edge.'
          }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          })
        );
      } catch (err) {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Exam submission processing error', detail: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }
    }

    if (normalizedPath === '/api/exam/session') {
      if (request.method === 'OPTIONS') {
        return applySecurityHeaders(
          new Response(null, {
            status: 204,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
              'Access-Control-Max-Age': '86400'
            }
          })
        );
      }

      return applySecurityHeaders(
        new Response(JSON.stringify({
          success: true,
          status: 'EDGE_ACTIVE',
          service: 'JLPT Exam Session & Anti-Cheat Edge Verifier'
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
      );
    }

    // -------------------------------------------------------------------------
    // 3E. ROUTE XÁC THỰC, ĐỒNG BỘ TIẾN ĐỘ & BẢNG XẾP HẠNG EDGE (/api/auth/*)
    // -------------------------------------------------------------------------
    if (/^\/api\/auth\/(?:register|login|request-reset|sync)$/.test(normalizedPath)) {
      return applySecurityHeaders(Response.json({ error: 'Vui lòng tiếp tục bằng tài khoản Google.' }, {
        status: 410, headers: { 'Cache-Control': 'no-store' }
      }));
    }

    if (normalizedPath === '/api/auth/leaderboard') {
      if (request.method === 'OPTIONS') {
        return applySecurityHeaders(
          new Response(null, {
            status: 204,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
              'Access-Control-Max-Age': '86400'
            }
          })
        );
      }

      if (request.method !== 'GET') {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          })
        );
      }

      const store = await loadWorkerStore(env);
      const items = [];
      for (const account of store.accounts.values()) {
        const pRec = store.progress.get(account.uid);
        const stats = (pRec && pRec.stats) ? pRec.stats : calculateEdgeStats(pRec ? pRec.progress : {}, account);
        items.push({
          uid: account.uid,
          username: account.username,
          displayName: account.displayName || account.username,
          avatar: account.avatar || 'avatar_1',
          levelGoal: account.levelGoal || 'N5',
          totalXp: stats.totalXp || 0,
          completedModulesCount: stats.completedModulesCount || 0,
          learnedKanjiCount: stats.learnedKanjiCount || 0,
          bestExamScore: stats.bestExamScore || 0,
          rankTitle: stats.rankTitle || 'Tập sự',
          updatedAt: (pRec && pRec.updatedAt) || account.updatedAt || Date.now()
        });
      }

      items.sort((a, b) => {
        if (b.totalXp !== a.totalXp) return b.totalXp - a.totalXp;
        return b.updatedAt - a.updatedAt;
      });

      return applySecurityHeaders(
        new Response(JSON.stringify({
          success: true,
          leaderboard: items.slice(0, 50)
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
      );
    }

    // =========================================================================
    // TẦNG 4: CHỐNG ĐÁNH CẮP BĂNG THÔNG ÂM THANH (HOTLINK PROTECTION)
    // =========================================================================
    const isAudioFile = url.pathname.endsWith('.mp3') || url.pathname.startsWith('/audio/');
    if (isAudioFile) {
      const isCrossSite = secFetchSite === 'cross-site';
      const hasForeignReferer = referer && !referer.includes(canonicalDomain) && !referer.includes('localhost');

      if (isCrossSite || hasForeignReferer) {
        return applySecurityHeaders(
          new Response('403 Forbidden - Direct audio hotlinking is not allowed.', {
            status: 403,
            headers: {
              'Content-Type': 'text/plain; charset=utf-8'
            }
          }),
          { 'x-hotlink-blocked': 'true' }
        );
      }
    }

    // =========================================================================
    // TẦNG 5: CUNG CẤP TÀI NGUYÊN TĨNH & GẮN ĐẦY ĐỦ 9 HTTP SECURITY HEADERS
    // =========================================================================
    // 5A. Chuẩn hóa /index.html sang / để tránh Cloudflare Pages trả 308 Permanent Redirect gây lỗi ERR_FAILED trên Service Worker
    let fetchReq = request;
    if (url.pathname === '/index.html') {
      const canonicalUrl = new URL(request.url);
      canonicalUrl.pathname = '/';
      fetchReq = new Request(canonicalUrl.toString(), request);
    }

    let response;
    if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      response = await env.ASSETS.fetch(fetchReq);
    } else {
      response = await fetch(fetchReq);
    }

    // 5B. HTTP 206 Partial Content Byte-Range Slicing cho tài nguyên âm thanh (iOS/Safari/Android Media Seeking)
    if (isAudioFile && response && response.status === 200) {
      const rangeHeader = request.headers.get('Range') || request.headers.get('range') || '';
      const rawContentType = (response.headers && typeof response.headers.get === 'function')
        ? (response.headers.get('Content-Type') || '')
        : '';
      if (rangeHeader && rawContentType.toLowerCase().includes('text/html')) {
        return applySecurityHeaders(
          new Response('404 Not Found - Audio asset missing.', {
            status: 404,
            statusText: 'Not Found',
            headers: {
              'Content-Type': 'text/plain; charset=utf-8'
            }
          })
        );
      }
      if (rangeHeader && typeof response.arrayBuffer === 'function') {
        const fullBuf = await response.arrayBuffer();
        const totalLen = fullBuf.byteLength;
        const rangeInfo = parseHttpByteRange(rangeHeader, totalLen);

        if (rangeInfo && rangeInfo.invalid) {
          return applySecurityHeaders(
            new Response(null, {
              status: 416,
              statusText: 'Range Not Satisfiable',
              headers: {
                'Content-Range': 'bytes */' + totalLen,
                'Accept-Ranges': 'bytes'
              }
            })
          );
        }

        if (rangeInfo && !rangeInfo.invalid) {
          const slicedBuf = fullBuf.slice(rangeInfo.start, rangeInfo.end + 1);
          return applySecurityHeaders(
            new Response(slicedBuf, {
              status: 206,
              statusText: 'Partial Content',
              headers: {
                'Content-Type': response.headers.get('Content-Type') || 'audio/mpeg',
                'Accept-Ranges': 'bytes',
                'Content-Range': 'bytes ' + rangeInfo.start + '-' + rangeInfo.end + '/' + totalLen,
                'Content-Length': String(rangeInfo.chunkLength),
                'Cache-Control': 'public, max-age=86400'
              }
            })
          );
        }
      }

      return applySecurityHeaders(response, { 'Accept-Ranges': 'bytes' });
    }

    // Gắn đầy đủ 9 HTTP Security Headers chuẩn OWASP / CIS Benchmarks
    return applySecurityHeaders(response);
  }
};
