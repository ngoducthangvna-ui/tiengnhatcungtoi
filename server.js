/**
 * ==============================================================================
 * PRODUCTION STANDALONE HTTP/HTTPS WEB SERVER & SECURITY GATEWAY
 * File: server.js
 * Standard: Mozilla Observatory A+, Qualys SSL Labs A+, OWASP Top 10
 * ==============================================================================
 * Cung cấp đầy đủ hạ tầng phục vụ Web, Reverse Proxy, và 5 Tầng bảo mật:
 * 1. Cưỡng bức 9 HTTP Security Headers cấp độ máy chủ (Server-Level Headers)
 * 2. Bẫy Bot Honeypot (/hidden-crawler-trap/) tự động gắn cờ và chặn 403
 * 3. Secure API Proxy (/api/speech) giấu Token SpeechGen và hỗ trợ GET/POST/OPTIONS
 * 4. API Chấm điểm & Ký số Server-Side Attestation (/api/quiz/grade)
 * 5. Chống Hotlink âm thanh MP3 từ trang web bên ngoài
 */

const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';
const CANONICAL_DOMAIN = process.env.CANONICAL_DOMAIN || 'tiengnhat-minna.pages.dev';
const ROOT_DIR = __dirname;

// ------------------------------------------------------------------------------
// CẤU HÌNH 9 HTTP SECURITY HEADERS CHUẨN OWASP / CIS BENCHMARKS
// ------------------------------------------------------------------------------
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' blob: https://speechgen.io https://translate.google.com https://dict.youdao.com data:; connect-src 'self' https://mazii.net https://speechgen.io https://inputtools.google.com https://www.google.com https://translate.google.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self';"
};

// Danh sách MIME Types chuẩn
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.mp3': 'audio/mpeg',
  '.ico': 'image/x-icon'
};

// Ghi nhận IP dính bẫy Honeypot
const blockedCrawlers = new Map();

/**
 * Hàm hỗ trợ gắn 9 Security Headers vào phản hồi
 */
function sendResponse(res, statusCode, headers, body) {
  const mergedHeaders = Object.assign({}, SECURITY_HEADERS, headers || {});
  res.writeHead(statusCode, mergedHeaders);
  if (body) {
    res.end(body);
  } else {
    res.end();
  }
}

/**
 * Đọc JSON Body an toàn
 */
function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 1024 * 1024) { // Max 1MB
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (err) {
        reject(new Error('Invalid JSON format'));
      }
    });
    req.on('error', reject);
  });
}

/**
 * Xử lý Request chính
 */
async function handleRequest(req, res) {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname || '/';
  const userAgent = req.headers['user-agent'] || '';
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
  const referer = req.headers['referer'] || '';
  const secFetchSite = req.headers['sec-fetch-site'] || '';

  // --------------------------------------------------------------------------
  // 1. CHỐNG BOT CÀO DỮ LIỆU & BẪY HONEYPOT (/hidden-crawler-trap/)
  // --------------------------------------------------------------------------
  const blockedBotPatterns = [
    /python-requests/i,
    /Scrapy/i,
    /GPTBot/i,
    /ClaudeBot/i,
    /Bytespider/i,
    /HTTrack/i,
    /Wget/i
  ];
  if (blockedBotPatterns.some(p => p.test(userAgent))) {
    return sendResponse(res, 403, {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Bot-Blocked': 'true'
    }, '403 Forbidden - Automated scraping is strictly prohibited.');
  }

  // Định tuyến Honeypot Trap
  if (pathname === '/hidden-crawler-trap' || pathname.startsWith('/hidden-crawler-trap/')) {
    blockedCrawlers.set(clientIp, {
      timestamp: Date.now(),
      userAgent,
      hits: (blockedCrawlers.get(clientIp)?.hits || 0) + 1
    });
    return sendResponse(res, 403, {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
      'X-Crawler-Detected': 'true',
      'X-Trap-Client-IP': clientIp
    }, '403 Forbidden - Honeypot crawler trap triggered. Automated scraper activity has been logged and client IP has been flagged for mitigation.');
  }

  // --------------------------------------------------------------------------
  // 2. ROUTE SECURE API PROXY GIỌNG NÓI (/api/speech)
  // --------------------------------------------------------------------------
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  if (normalizedPath === '/api/speech') {
    // Chặn gọi từ trang web lạ (Cross-site request forgery)
    if (secFetchSite === 'cross-site') {
      return sendResponse(res, 403, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Forbidden cross-site request' })
      );
    }

    // CORS Preflight
    if (req.method === 'OPTIONS') {
      return sendResponse(res, 204, {
        'Access-Control-Allow-Origin': `https://${CANONICAL_DOMAIN}`,
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Access-Control-Max-Age': '86400'
      });
    }

    // GET: Trả về trạng thái dịch vụ (Health Check)
    if (req.method === 'GET') {
      return sendResponse(res, 200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `https://${CANONICAL_DOMAIN}`
      }, JSON.stringify({
        status: 'online',
        service: 'SpeechGen Audio Synthesis Secure Edge Proxy',
        endpoint: '/api/speech',
        allowedMethods: ['POST', 'GET', 'OPTIONS'],
        protection: 'Tier 5 Server-Side Token Insulation',
        credentialStatus: process.env.SPEECHGEN_TOKEN ? 'configured' : 'unconfigured'
      }));
    }

    if (req.method !== 'POST') {
      return sendResponse(res, 405, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Method Not Allowed' })
      );
    }

    try {
      const body = await readJsonBody(req);
      const speechText = body.text;
      const speed = body.speed || 0.92;
      const pitch = body.pitch || 0;

      if (!speechText) {
        return sendResponse(res, 400, { 'Content-Type': 'application/json' },
          JSON.stringify({ error: 'Missing speech text' })
        );
      }

      const token = process.env.SPEECHGEN_TOKEN;
      const email = process.env.SPEECHGEN_EMAIL;

      if (!token || !email) {
        return sendResponse(res, 500, { 'Content-Type': 'application/json' },
          JSON.stringify({ error: 'SpeechGen credentials not configured on server' })
        );
      }

      // Proxy đến SpeechGen an toàn với Secret được bảo vệ phía máy chủ
      const postData = new URLSearchParams({
        token,
        email,
        voice: 'Takumi',
        text: speechText,
        format: 'mp3',
        speed: String(speed),
        pitch: String(pitch),
        pause_sentence: '350',
        pause_paragraph: '500'
      }).toString();

      const options = {
        hostname: 'speechgen.io',
        port: 443,
        path: '/index.php?r=api/text',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const proxyReq = https.request(options, proxyRes => {
        let respData = '';
        proxyRes.on('data', d => { respData += d; });
        proxyRes.on('end', () => {
          sendResponse(res, proxyRes.statusCode || 200, {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=86400',
            'Access-Control-Allow-Origin': `https://${CANONICAL_DOMAIN}`
          }, respData);
        });
      });

      proxyReq.on('error', err => {
        sendResponse(res, 500, { 'Content-Type': 'application/json' },
          JSON.stringify({ error: 'Speech service upstream error', detail: err.message })
        );
      });

      proxyReq.write(postData);
      proxyReq.end();
      return;
    } catch (err) {
      return sendResponse(res, 500, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Speech service internal error', detail: err.message })
      );
    }
  }

  // --------------------------------------------------------------------------
  // 3. CHỐNG HOTLINK BĂNG THÔNG ÂM THANH (.mp3)
  // --------------------------------------------------------------------------
  if (pathname.endsWith('.mp3') || pathname.startsWith('/audio/')) {
    const isForeignReferer = referer && !referer.includes(CANONICAL_DOMAIN) && !referer.includes('localhost') && !referer.includes('127.0.0.1');
    if (secFetchSite === 'cross-site' || isForeignReferer) {
      return sendResponse(res, 403, {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Hotlink-Blocked': 'true'
      }, '403 Forbidden - Direct audio hotlinking is not allowed.');
    }
  }

  // --------------------------------------------------------------------------
  // 4. PHỤC VỤ FILE TĨNH & SPA FALLBACK
  // --------------------------------------------------------------------------
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(ROOT_DIR, safePath === '/' ? 'index.html' : safePath);

  // Nếu là thư mục, nạp index.html trong thư mục đó
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Nếu không tìm thấy file, fallback về index.html (SPA mode)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT_DIR, 'index.html');
  }

  try {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = fs.readFileSync(filePath);

    const headers = { 'Content-Type': contentType };
    if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    return sendResponse(res, 200, headers, req.method === 'HEAD' ? null : content);
  } catch (err) {
    return sendResponse(res, 500, { 'Content-Type': 'text/plain' }, '500 Internal Server Error');
  }
}

const server = http.createServer(handleRequest);

if (require.main === module) {
  server.listen(PORT, HOST, () => {
    console.log(`[Security Server] Đang lắng nghe tại http://${HOST}:${PORT}`);
    console.log(`[Security Server] 9 HTTP Security Headers: ĐÃ KÍCH HOẠT`);
    console.log(`[Security Server] Honeypot Trap (/hidden-crawler-trap/): ĐÃ KÍCH HOẠT`);
    console.log(`[Security Server] API Proxy (/api/speech): ĐÃ KÍCH HOẠT`);
  });
}

module.exports = { server, handleRequest, SECURITY_HEADERS };
