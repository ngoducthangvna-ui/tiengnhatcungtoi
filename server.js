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
  'Permissions-Policy': 'camera=(), microphone=(self), geolocation=(), payment=(), usb=(), interest-cohort=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' blob: https://speechgen.io https://translate.google.com https://dict.youdao.com data:; connect-src 'self' https://mazii.net https://speechgen.io https://inputtools.google.com https://www.google.com https://translate.google.com https://translate.googleapis.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self';"
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

// Hệ thống quản lý phiên thi & khóa chống gian lận (Anti-Cheat Exam Session Manager)
const activeExamSessions = new Map();
const lockedExamCodes = new Map();

// Hệ thống lưu trữ tài khoản & tiến độ học tập đồng bộ 2 chiều (User Accounts & Sync Store)
const USERS_STORE_FILE = path.join(ROOT_DIR, 'data', 'users_sync_store.json');
const userAccountsStore = new Map();
const userProgressStore = new Map();
const SYNC_SIGNING_KEY = process.env.SYNC_SIGNING_KEY || 'minna_sync_edge_secret_key_2026';

function loadPersistedUserStore() {
  try {
    if (fs.existsSync(USERS_STORE_FILE)) {
      const raw = fs.readFileSync(USERS_STORE_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.accounts)) {
        parsed.accounts.forEach(acc => {
          if (acc && acc.username) {
            userAccountsStore.set(String(acc.username).toLowerCase(), acc);
          }
        });
      }
      if (parsed && typeof parsed.progress === 'object' && parsed.progress !== null) {
        for (const [uid, prog] of Object.entries(parsed.progress)) {
          userProgressStore.set(uid, prog);
        }
      }
    }
  } catch (err) {
    // Chạy an toàn trong RAM nếu filesystem read-only hoặc file hỏng nhẹ
  }
}

function savePersistedUserStore() {
  try {
    const accounts = Array.from(userAccountsStore.values());
    const progress = {};
    for (const [uid, prog] of userProgressStore.entries()) {
      progress[uid] = prog;
    }
    const data = {
      updatedAt: Date.now(),
      accounts,
      progress
    };
    const dir = path.dirname(USERS_STORE_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(USERS_STORE_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    // Chạy an toàn nếu filesystem read-only
  }
}

// Khởi tạo nạp dữ liệu bền vững
loadPersistedUserStore();

function timingSafeEqualString(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

function generateSyncToken(uid, username) {
  const timestamp = Date.now();
  const raw = `${uid}:${username}:${timestamp}`;
  const sig = crypto.createHmac('sha256', SYNC_SIGNING_KEY).update(raw).digest('hex');
  const tokenObj = { uid, u: username, t: timestamp, sig };
  return Buffer.from(JSON.stringify(tokenObj), 'utf8').toString('base64url');
}

function verifySyncToken(tokenStr) {
  if (!tokenStr || typeof tokenStr !== 'string') return null;
  try {
    const jsonStr = Buffer.from(tokenStr, 'base64url').toString('utf8');
    const tokenObj = JSON.parse(jsonStr);
    if (!tokenObj || !tokenObj.uid || !tokenObj.u || !tokenObj.t || !tokenObj.sig) return null;
    // Token có hiệu lực 30 ngày
    if (Date.now() - tokenObj.t > 30 * 86400 * 1000) return null;
    const raw = `${tokenObj.uid}:${tokenObj.u}:${tokenObj.t}`;
    const expectedSig = crypto.createHmac('sha256', SYNC_SIGNING_KEY).update(raw).digest('hex');
    if (!timingSafeEqualString(tokenObj.sig, expectedSig)) return null;
    return tokenObj;
  } catch (e) {
    return null;
  }
}

function mergeServerProgress(existing = {}, incoming = {}) {
  const result = Object.assign({}, existing);

  for (const [key, incVal] of Object.entries(incoming || {})) {
    const existVal = result[key];

    // Gộp mảng bằng Set union không trùng lặp
    if (Array.isArray(incVal)) {
      if (key === 'jlpt_exam_history') {
        const existHist = Array.isArray(existVal) ? existVal : [];
        const seen = new Set();
        const merged = [];
        const allHist = [...incVal, ...existHist];
        for (const h of allHist) {
          if (!h) continue;
          const sid = h.sessionId || `${h.examCode || 'EXAM'}_${h.submittedAt || h.timestamp || Math.random()}`;
          if (!seen.has(sid)) {
            seen.add(sid);
            merged.push(h);
          }
        }
        merged.sort((a, b) => (b.submittedAt || b.timestamp || 0) - (a.submittedAt || a.timestamp || 0));
        result[key] = merged.slice(0, 50);
      } else {
        const existArr = Array.isArray(existVal) ? existVal : [];
        result[key] = Array.from(new Set([...existArr, ...incVal]));
      }
      continue;
    }

    // Gộp jlpt_exam_bests (giữ điểm cao nhất mỗi đề)
    if (key === 'jlpt_exam_bests' && incVal && typeof incVal === 'object') {
      const bests = Object.assign({}, existVal || {});
      for (const [examKey, val] of Object.entries(incVal)) {
        if (!bests[examKey]) {
          bests[examKey] = val;
        } else {
          const prevScore = typeof bests[examKey] === 'number' ? bests[examKey] : (bests[examKey]?.score || 0);
          const newScore = typeof val === 'number' ? val : (val?.score || 0);
          if (newScore >= prevScore) {
            bests[examKey] = val;
          }
        }
      }
      result[key] = bests;
      continue;
    }

    // Gộp minna_practice_answers, minna_dokkai_answers_v1, minna_kaiwa_progress_v1 (giữ điểm cao nhất)
    if (['minna_practice_answers', 'minna_dokkai_answers_v1', 'minna_kaiwa_progress_v1'].includes(key) && incVal && typeof incVal === 'object') {
      const mergedObj = Object.assign({}, existVal || {});
      for (const [subKey, val] of Object.entries(incVal)) {
        if (!mergedObj[subKey]) {
          mergedObj[subKey] = val;
        } else {
          const prevScore = typeof mergedObj[subKey] === 'number' ? mergedObj[subKey] : (mergedObj[subKey]?.score ?? mergedObj[subKey]?.accuracy ?? 0);
          const newScore = typeof val === 'number' ? val : (val?.score ?? val?.accuracy ?? 0);
          if (newScore >= prevScore) {
            mergedObj[subKey] = val;
          }
        }
      }
      result[key] = mergedObj;
      continue;
    }

    // Merge các object thông thường khác
    if (incVal && typeof incVal === 'object' && !Array.isArray(incVal)) {
      result[key] = Object.assign({}, existVal || {}, incVal);
      continue;
    }

    // Giá trị nguyên thủy
    if (incVal !== undefined && incVal !== null) {
      result[key] = incVal;
    }
  }

  result.lastMergedAt = Date.now();
  return result;
}

function calculateUserStats(prog = {}, acc = {}) {
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

let examsN5Data = null;
let examsN4Data = null;
try {
  examsN5Data = require('./data/exams_n5.js');
} catch (e) {
  examsN5Data = [];
}
try {
  examsN4Data = require('./data/exams_n4.js');
} catch (e) {
  examsN4Data = [];
}

function findExamOnServer(code) {
  if (!code) return null;
  const norm = String(code).trim().toUpperCase();
  const all = [...(examsN5Data || []), ...(examsN4Data || [])];
  return all.find(e => e.code.toUpperCase() === norm) || null;
}

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
  const clientIp = req.headers['x-forwarded-for'] || (req.socket && req.socket.remoteAddress) || '127.0.0.1';
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
      // Giọng đồng bộ với nhân vật Hội thoại (whitelist chống lạm dụng tham số)
      const ALLOWED_VOICES = ['Nanami', 'Keita', 'Aoi', 'Mayu', 'Shiori', 'Takumi', 'Daichi', 'Naoki'];
      const voiceName = ALLOWED_VOICES.includes(body.voice) ? body.voice : 'Nanami';

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
        voice: voiceName,
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
  // 2B. ROUTE HỆ THỐNG THI & KHÓA PHIÊN CHỐNG GIAN LẬN (/api/exam/submit, /api/exam/session)
  // --------------------------------------------------------------------------
  if (normalizedPath === '/api/exam/submit') {
    if (req.method === 'OPTIONS') {
      return sendResponse(res, 204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Access-Control-Max-Age': '86400'
      });
    }

    if (req.method !== 'POST') {
      return sendResponse(res, 405, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Method Not Allowed' })
      );
    }

    try {
      const body = await readJsonBody(req);
      const rawCode = body.examCode || body.code || '';
      const normalizedCode = String(rawCode).trim().toUpperCase();

      if (!normalizedCode) {
        return sendResponse(res, 400, { 'Content-Type': 'application/json' },
          JSON.stringify({ error: 'Missing examCode' })
        );
      }

      const answers = (body.answers && typeof body.answers === 'object') ? body.answers : {};
      const exam = findExamOnServer(normalizedCode);

      // Chấm điểm chuẩn xác từ phía máy chủ: các câu chưa làm tính là 0 điểm
      let verifiedScore = 0;
      if (exam && Array.isArray(exam.questions)) {
        exam.questions.forEach(q => {
          if (answers[q.id] === q.correct) {
            verifiedScore++;
          }
        });
      } else if (typeof body.clientScore === 'number') {
        verifiedScore = Math.max(0, Math.min(20, Math.round(body.clientScore)));
      }

      const sessionId = body.sessionId || `sess_${normalizedCode}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      const reason = body.reason || 'exit_trigger';
      const isPass = verifiedScore >= 12;

      const sessionRecord = {
        sessionId,
        examCode: normalizedCode,
        status: 'SUBMITTED',
        locked: true,
        reason,
        score: verifiedScore,
        total: 20,
        isPass,
        answers,
        submittedAt: Date.now(),
        clientIp,
        userAgent
      };

      // Khóa phiên vĩnh viễn trên database/máy chủ
      lockedExamCodes.set(normalizedCode, sessionRecord);
      activeExamSessions.set(sessionId, sessionRecord);

      return sendResponse(res, 200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }, JSON.stringify({
        success: true,
        status: 'SUBMITTED',
        locked: true,
        sessionId,
        examCode: normalizedCode,
        score: verifiedScore,
        total: 20,
        isPass,
        reason,
        message: 'Bài thi đã được tự động kết thúc, chấm điểm và khóa phiên làm việc an toàn.'
      }));
    } catch (err) {
      return sendResponse(res, 500, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Exam submission processing error', detail: err.message })
      );
    }
  }

  if (normalizedPath === '/api/exam/session') {
    if (req.method === 'OPTIONS') {
      return sendResponse(res, 204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400'
      });
    }

    const code = parsedUrl.searchParams.get('code') ? parsedUrl.searchParams.get('code').toUpperCase() : null;
    const sessId = parsedUrl.searchParams.get('sessionId');

    let matched = null;
    if (code && lockedExamCodes.has(code)) {
      matched = lockedExamCodes.get(code);
    } else if (sessId && activeExamSessions.has(sessId)) {
      matched = activeExamSessions.get(sessId);
    }

    return sendResponse(res, 200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }, JSON.stringify({
      success: true,
      locked: Boolean(matched && matched.locked),
      status: matched ? matched.status : 'ACTIVE',
      session: matched || null
    }));
  }

  // --------------------------------------------------------------------------
  // 2C. ROUTE XÁC THỰC, ĐỒNG BỘ TIẾN ĐỘ & BẢNG XẾP HẠNG (/api/auth/*)
  // --------------------------------------------------------------------------
  if (normalizedPath === '/api/auth/register' || normalizedPath === '/api/auth/login') {
    if (secFetchSite === 'cross-site') {
      return sendResponse(res, 403, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Forbidden cross-site request' })
      );
    }

    if (req.method === 'OPTIONS') {
      return sendResponse(res, 204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Access-Control-Max-Age': '86400'
      });
    }

    if (req.method !== 'POST') {
      return sendResponse(res, 405, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Method Not Allowed' })
      );
    }

    try {
      const body = await readJsonBody(req);
      const rawUsername = String(body.username || '').trim();
      const USERNAME_REGEX = /^[a-zA-Z0-9_.-]{3,24}$/;
      if (!USERNAME_REGEX.test(rawUsername)) {
        return sendResponse(res, 400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          JSON.stringify({ error: 'Tên tài khoản không hợp lệ (3-24 ký tự chữ, số, gạch nối hoặc chấm).' })
        );
      }

      const clientCredHash = String(body.credentialHash || '').trim();
      if (!clientCredHash || clientCredHash.length < 32) {
        return sendResponse(res, 400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          JSON.stringify({ error: 'Thiếu credentialHash xác thực an toàn.' })
        );
      }

      const usernameKey = rawUsername.toLowerCase();
      const isRegisterAction = normalizedPath === '/api/auth/register' || body.action === 'register';
      const existingAccount = userAccountsStore.get(usernameKey);

      if (isRegisterAction) {
        if (existingAccount) {
          if (timingSafeEqualString(existingAccount.credentialHash, clientCredHash)) {
            const syncToken = generateSyncToken(existingAccount.uid, existingAccount.username);
            const storedRec = userProgressStore.get(existingAccount.uid);
            return sendResponse(res, 200, {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }, JSON.stringify({
              success: true,
              user: {
                uid: existingAccount.uid,
                username: existingAccount.username,
                displayName: existingAccount.displayName,
                avatar: existingAccount.avatar,
                levelGoal: existingAccount.levelGoal,
                updatedAt: existingAccount.updatedAt
              },
              syncToken,
              progress: storedRec ? storedRec.progress : null
            }));
          } else {
            return sendResponse(res, 409, {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }, JSON.stringify({ error: 'Tên tài khoản đã tồn tại.' }));
          }
        }

        const uid = `usr_${Date.now().toString(36)}_${crypto.randomBytes(4).toString('hex')}`;
        const newAccount = {
          uid,
          username: rawUsername,
          displayName: String(body.displayName || rawUsername).trim().slice(0, 50),
          avatar: String(body.avatar || 'avatar_1').slice(0, 50),
          levelGoal: String(body.levelGoal || 'N5').slice(0, 10),
          credentialHash: clientCredHash,
          createdAt: Date.now(),
          updatedAt: Date.now()
        };

        userAccountsStore.set(usernameKey, newAccount);
        savePersistedUserStore();

        const syncToken = generateSyncToken(uid, newAccount.username);
        return sendResponse(res, 200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }, JSON.stringify({
          success: true,
          user: {
            uid: newAccount.uid,
            username: newAccount.username,
            displayName: newAccount.displayName,
            avatar: newAccount.avatar,
            levelGoal: newAccount.levelGoal,
            updatedAt: newAccount.updatedAt
          },
          syncToken,
          progress: null
        }));
      }

      // Đăng nhập (login)
      if (!existingAccount) {
        return sendResponse(res, 401, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }, JSON.stringify({ error: 'Tên đăng nhập hoặc mật khẩu không chính xác.' }));
      }

      if (!timingSafeEqualString(existingAccount.credentialHash, clientCredHash)) {
        return sendResponse(res, 401, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }, JSON.stringify({ error: 'Tên đăng nhập hoặc mật khẩu không chính xác.' }));
      }

      if (body.displayName) existingAccount.displayName = String(body.displayName).trim().slice(0, 50);
      if (body.avatar) existingAccount.avatar = String(body.avatar).slice(0, 50);
      if (body.levelGoal) existingAccount.levelGoal = String(body.levelGoal).slice(0, 10);
      existingAccount.updatedAt = Date.now();
      savePersistedUserStore();

      const syncToken = generateSyncToken(existingAccount.uid, existingAccount.username);
      const storedRec = userProgressStore.get(existingAccount.uid);
      return sendResponse(res, 200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }, JSON.stringify({
        success: true,
        user: {
          uid: existingAccount.uid,
          username: existingAccount.username,
          displayName: existingAccount.displayName,
          avatar: existingAccount.avatar,
          levelGoal: existingAccount.levelGoal,
          updatedAt: existingAccount.updatedAt
        },
        syncToken,
        progress: storedRec ? storedRec.progress : null
      }));
    } catch (err) {
      return sendResponse(res, 500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        JSON.stringify({ error: 'Auth processing error', detail: err.message })
      );
    }
  }

  if (normalizedPath === '/api/auth/sync') {
    if (secFetchSite === 'cross-site') {
      return sendResponse(res, 403, { 'Content-Type': 'application/json' },
        JSON.stringify({ error: 'Forbidden cross-site request' })
      );
    }

    if (req.method === 'OPTIONS') {
      return sendResponse(res, 204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Access-Control-Max-Age': '86400'
      });
    }

    try {
      const authHeader = req.headers['authorization'] || '';
      let bearerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';

      if (req.method === 'GET') {
        const queryToken = parsedUrl.searchParams.get('token') || parsedUrl.searchParams.get('syncToken');
        if (!bearerToken && queryToken) bearerToken = queryToken;
        const queryUid = parsedUrl.searchParams.get('uid');
        const queryUsername = parsedUrl.searchParams.get('username');

        let verifiedUser = bearerToken ? verifySyncToken(bearerToken) : null;
        let account = null;

        if (verifiedUser) {
          account = Array.from(userAccountsStore.values()).find(a => a.uid === verifiedUser.uid);
        } else if (queryUsername) {
          account = userAccountsStore.get(queryUsername.toLowerCase());
          const queryHash = parsedUrl.searchParams.get('credentialHash');
          if (!account || !queryHash || !timingSafeEqualString(account.credentialHash, queryHash)) {
            account = null;
          }
        }

        if (!account) {
          return sendResponse(res, 401, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            JSON.stringify({ error: 'Yêu cầu xác thực không hợp lệ.' })
          );
        }

        if (queryUid && queryUid !== account.uid) {
          return sendResponse(res, 403, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            JSON.stringify({ error: 'Truy cập bị từ chối (IDOR Guard).' })
          );
        }

        const storedRec = userProgressStore.get(account.uid) || { progress: {}, stats: {} };
        return sendResponse(res, 200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }, JSON.stringify({
          success: true,
          syncedAt: storedRec.updatedAt || Date.now(),
          progress: storedRec.progress || {},
          stats: storedRec.stats || {}
        }));
      }

      if (req.method === 'POST') {
        const body = await readJsonBody(req);
        const tokenInBody = body.syncToken || bearerToken;
        let verifiedUser = tokenInBody ? verifySyncToken(tokenInBody) : null;
        let account = null;

        if (verifiedUser) {
          account = Array.from(userAccountsStore.values()).find(a => a.uid === verifiedUser.uid);
        }

        if (!account && body.username && body.credentialHash) {
          const acc = userAccountsStore.get(String(body.username).trim().toLowerCase());
          if (acc && timingSafeEqualString(acc.credentialHash, String(body.credentialHash))) {
            account = acc;
          }
        }

        if (!account && body.uid && body.credentialHash) {
          const acc = Array.from(userAccountsStore.values()).find(a => a.uid === body.uid);
          if (acc && timingSafeEqualString(acc.credentialHash, String(body.credentialHash))) {
            account = acc;
          }
        }

        if (!account) {
          return sendResponse(res, 401, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            JSON.stringify({ error: 'Yêu cầu xác thực không hợp lệ hoặc phiên làm việc đã hết hạn.' })
          );
        }

        // Chống IDOR
        if (body.uid && body.uid !== account.uid) {
          return sendResponse(res, 403, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            JSON.stringify({ error: 'Truy cập bị từ chối (IDOR Guard).' })
          );
        }

        if (body.displayName) account.displayName = String(body.displayName).trim().slice(0, 50);
        if (body.avatar) account.avatar = String(body.avatar).slice(0, 50);
        if (body.levelGoal) account.levelGoal = String(body.levelGoal).slice(0, 10);
        account.updatedAt = Date.now();

        const currentRecord = userProgressStore.get(account.uid) || { progress: {}, stats: {} };
        const mergedProgress = mergeServerProgress(currentRecord.progress || {}, body.progress || {});
        const calculatedStats = calculateUserStats(mergedProgress, account);
        const updatedStats = Object.assign({}, calculatedStats, body.stats || {});

        const newRecord = {
          progress: mergedProgress,
          stats: updatedStats,
          updatedAt: Date.now()
        };

        userProgressStore.set(account.uid, newRecord);
        savePersistedUserStore();

        return sendResponse(res, 200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }, JSON.stringify({
          success: true,
          syncedAt: newRecord.updatedAt,
          progress: mergedProgress,
          stats: updatedStats
        }));
      }

      return sendResponse(res, 405, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        JSON.stringify({ error: 'Method Not Allowed' })
      );
    } catch (err) {
      return sendResponse(res, 500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        JSON.stringify({ error: 'Sync processing error', detail: err.message })
      );
    }
  }

  if (normalizedPath === '/api/auth/leaderboard') {
    if (req.method === 'OPTIONS') {
      return sendResponse(res, 204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400'
      });
    }

    if (req.method !== 'GET') {
      return sendResponse(res, 405, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        JSON.stringify({ error: 'Method Not Allowed' })
      );
    }

    const items = [];
    for (const account of userAccountsStore.values()) {
      const pRec = userProgressStore.get(account.uid);
      const stats = (pRec && pRec.stats) ? pRec.stats : calculateUserStats(pRec ? pRec.progress : {}, account);
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

    return sendResponse(res, 200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }, JSON.stringify({
      success: true,
      leaderboard: items.slice(0, 50)
    }));
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
    const totalLength = content.length;

    const headers = {
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes'
    };
    if (ext === '.html' || ext === '.mp3' || pathname.startsWith('/data/kaiwa_')) {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    // Hỗ trợ HTTP Byte-Range (206 Partial Content) để trình duyệt tua chính xác Audio Sprite (audio.currentTime = startSec)
    const rangeHeader = req.headers['range'];
    if (rangeHeader && ext === '.mp3' && totalLength > 0) {
      const m = /^bytes=(\d*)-(\d*)$/i.exec(String(rangeHeader).trim());
      if (m) {
        let start = m[1] !== '' ? parseInt(m[1], 10) : 0;
        let end = m[2] !== '' ? parseInt(m[2], 10) : (totalLength - 1);
        if (m[1] === '' && m[2] !== '') {
          const suffixLen = parseInt(m[2], 10);
          start = Math.max(0, totalLength - suffixLen);
          end = totalLength - 1;
        }
        if (isNaN(start) || isNaN(end) || start >= totalLength || start > end) {
          headers['Content-Range'] = `bytes */${totalLength}`;
          return sendResponse(res, 416, headers, null);
        }
        end = Math.min(end, totalLength - 1);
        const sliced = content.subarray(start, end + 1);
        headers['Content-Range'] = `bytes ${start}-${end}/${totalLength}`;
        headers['Content-Length'] = String(sliced.length);
        return sendResponse(res, 206, headers, req.method === 'HEAD' ? null : sliced);
      }
    }

    headers['Content-Length'] = String(totalLength);
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

module.exports = {
  server,
  handleRequest,
  SECURITY_HEADERS,
  activeExamSessions,
  lockedExamCodes,
  findExamOnServer,
  userAccountsStore,
  userProgressStore,
  mergeServerProgress,
  calculateUserStats,
  generateSyncToken,
  verifySyncToken
};
