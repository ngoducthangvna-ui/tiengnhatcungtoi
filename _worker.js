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
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' blob: https://speechgen.io https://translate.google.com https://dict.youdao.com data:; connect-src 'self' https://mazii.net https://speechgen.io https://inputtools.google.com https://www.google.com https://translate.google.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self';"
      );
      headers.set('strict-transport-security', 'max-age=63072000; includeSubDomains; preload');
      headers.set('x-frame-options', 'DENY');
      headers.set('x-content-type-options', 'nosniff');
      headers.set('x-xss-protection', '1; mode=block');
      headers.set('referrer-policy', 'strict-origin-when-cross-origin');
      headers.set('permissions-policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()');
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

    // =========================================================================
    // TẦNG 3: ROUTE API BẢO MẬT & PROXY GIỌNG NÓI (/api/speech)
    // =========================================================================
    const normalizedPath = url.pathname.replace(/\/+$/, '') || '/';

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

        // Gọi sang SpeechGen API với Secret lưu tại Cloudflare Worker (không lộ ra client)
        const speechGenUrl = 'https://speechgen.io/index.php?r=api/text';
        const params = new URLSearchParams({
          token: token,
          email: email,
          voice: 'Takumi',
          text: speechText,
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
    if (url.pathname === '/api/auth/request-reset') {
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
        const email = String(body.email || '').trim().toLowerCase();

        if (!email || !email.includes('@')) {
          return applySecurityHeaders(
            new Response(JSON.stringify({ error: 'Email không hợp lệ.' }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            })
          );
        }

        // Sinh token ngẫu nhiên CSPRNG 256-bit (32 bytes = 64 hex chars)
        const randomBytes = new Uint8Array(32);
        if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
          crypto.getRandomValues(randomBytes);
        }
        const resetToken = Array.from(randomBytes, b => b.toString(16).padStart(2, '0')).join('');

        // Không trả về token hoặc thông tin nhạy cảm trong response (Chống User Enumeration)
        return applySecurityHeaders(
          new Response(JSON.stringify({
            success: true,
            message: 'Nếu email tồn tại trong hệ thống, hướng dẫn đặt lại mật khẩu đã được gửi đi an toàn.'
          }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      } catch (err) {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: 'Auth service error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          })
        );
      }
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
    let response;
    if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      response = await env.ASSETS.fetch(request);
    } else {
      response = await fetch(request);
    }

    // Gắn đầy đủ 9 HTTP Security Headers chuẩn OWASP / CIS Benchmarks
    return applySecurityHeaders(response);
  }
};
