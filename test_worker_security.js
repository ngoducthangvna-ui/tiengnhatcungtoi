/**
 * ==============================================================================
 * TEST SUITE: KIỂM THỬ AN TOÀN & BẢO MẬT CLOUDFLARE WORKER (_worker.js)
 * File: scripts/test_worker_security.js
 * ==============================================================================
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== KIỂM THỬ TOÀN DIỆN BẢO MẬT CLOUDFLARE WORKER & NĂM CẤP ĐỘ BẢO VỆ ===\n');

// 1. Kiểm tra file _worker.js tồn tại và cú pháp hợp lệ
const workerPath = path.join(__dirname, '..', '_worker.js');
assert.ok(fs.existsSync(workerPath), 'File _worker.js phải tồn tại');
console.log('✓ File _worker.js đã được tạo.');

// Tải worker module
// Do _worker.js dùng ES module (export default), ta chuyển đổi nhẹ để require được trong Node CommonJS
const workerCode = fs.readFileSync(workerPath, 'utf8');
const cjsCode = workerCode.replace('export default {', 'module.exports = {');

// Mock môi trường Web API cho Node.js nếu cần
class MockHeaders {
  constructor(init = {}) {
    this._map = new Map();
    if (init) {
      if (typeof init.entries === 'function') {
        for (const [k, v] of init.entries()) this.set(k, v);
      } else {
        for (const [k, v] of Object.entries(init)) this.set(k, v);
      }
    }
  }
  get(name) { return this._map.get(name.toLowerCase()) || null; }
  set(name, value) { this._map.set(name.toLowerCase(), String(value)); }
  entries() { return this._map.entries(); }
}

class MockResponse {
  constructor(body = null, init = {}) {
    this.body = body;
    this.status = (init && init.status !== undefined) ? init.status : 200;
    this.headers = new MockHeaders(init && init.headers ? init.headers : {});
  }
  static redirect(url, status = 302) {
    return new MockResponse(null, { status: status, headers: { Location: url } });
  }
  async json() {
    return typeof this.body === 'string' ? JSON.parse(this.body) : this.body;
  }
}

class MockRequest {
  constructor(url, init = {}) {
    this.url = url;
    this.method = init.method || 'GET';
    this.headers = new MockHeaders(init.headers || {});
    this._body = init.body || null;
  }
  async json() {
    return typeof this._body === 'string' ? JSON.parse(this._body) : this._body;
  }
}

global.Response = MockResponse;
global.Request = MockRequest;
global.Headers = MockHeaders;

// Nạp worker script
const scriptModule = { exports: {} };
const fn = new Function('module', 'exports', 'require', 'Response', 'Request', 'Headers', cjsCode);
fn(scriptModule, scriptModule.exports, require, MockResponse, MockRequest, MockHeaders);
const worker = scriptModule.exports;

// Mock Env và Mock Asset fetcher
const mockEnv = {
  CANONICAL_DOMAIN: 'tiengnhat.edu.vn',
  ENFORCE_SSL: 'true',
  SPEECHGEN_TOKEN: 'mock_test_token_123',
  SPEECHGEN_EMAIL: 'tester@tiengnhat.edu.vn',
  ASSETS: {
    fetch: async (req) => new MockResponse('<!DOCTYPE html><html><body>Minna App</body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    })
  }
};

async function runTests() {
  // --------------------------------------------------------------------------
  // TEST 1: CẤU HÌNH BỔ SUNG ĐẦY ĐỦ 9 HTTP SECURITY HEADERS (POINT 1)
  // --------------------------------------------------------------------------
  console.log('--- TEST 1: Kiểm tra 9 HTTP Security Headers ---');
  const reqNormal = new MockRequest('https://tiengnhat.edu.vn/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      'CF-Connecting-IP': '113.190.234.12'
    }
  });
  const resNormal = await worker.fetch(reqNormal, mockEnv, {});
  assert.strictEqual(resNormal.status, 200);

  const expectedHeaders = [
    'content-security-policy',
    'strict-transport-security',
    'x-frame-options',
    'x-content-type-options',
    'x-xss-protection',
    'referrer-policy',
    'permissions-policy',
    'cross-origin-opener-policy',
    'cross-origin-resource-policy'
  ];

  for (const h of expectedHeaders) {
    const val = resNormal.headers.get(h);
    assert.ok(val, `Header ${h} phải có trong phản hồi`);
    console.log(`  ✓ Header ${h}: ${val.slice(0, 45)}...`);
  }
  assert.strictEqual(resNormal.headers.get('x-frame-options'), 'DENY');
  assert.strictEqual(resNormal.headers.get('x-content-type-options'), 'nosniff');

  // --------------------------------------------------------------------------
  // TEST 2: CHỐNG BOT CÀO DỮ LIỆU & BẪY HONEYPOT (POINT 2)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST 2: Tính năng chống Bot cào & Bẫy Honeypot ---');
  
  // 2A. Kiểm tra chặn bot cào User-Agent bị cấm
  const blockedUAs = [
    'python-requests/2.28.1',
    'curl/7.81.0',
    'Scrapy/2.8.0 (+https://scrapy.org)',
    'Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)',
    'Mozilla/5.0 (compatible; ClaudeBot/1.0; +https://www.anthropic.com/claudebot)',
    'Bytespider'
  ];

  for (const ua of blockedUAs) {
    const reqBot = new MockRequest('https://tiengnhat.edu.vn/app.js', {
      headers: { 'User-Agent': ua, 'CF-Connecting-IP': '45.134.22.1' }
    });
    const resBot = await worker.fetch(reqBot, mockEnv, {});
    assert.strictEqual(resBot.status, 403, `Bot với User-Agent ${ua} phải bị chặn 403 Forbidden`);
    assert.strictEqual(resBot.headers.get('x-bot-blocked'), 'true');
    console.log(`  ✓ Đã chặn thành công scraper: ${ua.slice(0, 35)} (403 Forbidden)`);
  }

  // 2B. Kiểm tra bẫy Honeypot (/hidden-crawler-trap/)
  const reqTrap = new MockRequest('https://tiengnhat.edu.vn/hidden-crawler-trap/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 Normal-Looking Browser',
      'CF-Connecting-IP': '103.45.67.89'
    }
  });
  const resTrap = await worker.fetch(reqTrap, mockEnv, {});
  assert.strictEqual(resTrap.status, 403);
  assert.strictEqual(resTrap.headers.get('x-crawler-detected'), 'true');
  console.log('  ✓ Bẫy Honeypot hoạt động chính xác: Bot dính bẫy bị chặn 403 và gắn cờ X-Crawler-Detected.');

  // --------------------------------------------------------------------------
  // TEST 3: TÊN MIỀN RIÊNG & ĐIỀU HƯỚNG CANONICAL HTTPS (POINT 3)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST 3: Gắn tên miền riêng & Chuyển hướng HTTPS Canonical ---');
  
  // 3A. Chuyển hướng HTTP sang HTTPS
  const reqHttp = new MockRequest('http://tiengnhat.edu.vn/bai-1', {
    headers: { 'User-Agent': 'Chrome' }
  });
  const resHttp = await worker.fetch(reqHttp, mockEnv, {});
  assert.strictEqual(resHttp.status, 301);
  assert.strictEqual(resHttp.headers.get('location'), 'https://tiengnhat.edu.vn/bai-1');
  console.log('  ✓ Chuyển hướng 301 tự động từ HTTP sang HTTPS an toàn.');

  // 3B. Chuyển hướng Canonical Domain (từ subdomain pages.dev sang tên miền riêng)
  const reqAlias = new MockRequest('https://minna-test.pages.dev/dokkai-5', {
    headers: { 'User-Agent': 'Chrome' }
  });
  const resAlias = await worker.fetch(reqAlias, mockEnv, {});
  assert.strictEqual(resAlias.status, 301);
  assert.strictEqual(resAlias.headers.get('location'), 'https://tiengnhat.edu.vn/dokkai-5');
  console.log('  ✓ Chuyển hướng 301 tên miền phụ về Canonical Custom Domain (tiengnhat.edu.vn).');

  // --------------------------------------------------------------------------
  // TEST 4: CHỐNG ĐÁNH CẮP BĂNG THÔNG ÂM THANH (HOTLINK PROTECTION) (POINT 4)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST 4: Chống đánh cắp băng thông âm thanh (Hotlink Protection) ---');
  
  // 4A. Chặn yêu cầu gắn file âm thanh từ website bên thứ ba (Sec-Fetch-Site: cross-site)
  const reqCrossSiteAudio = new MockRequest('https://tiengnhat.edu.vn/audio/lesson1_vocab.mp3', {
    headers: {
      'User-Agent': 'Chrome',
      'Sec-Fetch-Site': 'cross-site',
      'Referer': 'https://stealing-site.com/japanese-course'
    }
  });
  const resCrossAudio = await worker.fetch(reqCrossSiteAudio, mockEnv, {});
  assert.strictEqual(resCrossAudio.status, 403);
  assert.strictEqual(resCrossAudio.headers.get('x-hotlink-blocked'), 'true');
  console.log('  ✓ Chặn đứng hotlink trộm MP3 từ website khác (Sec-Fetch-Site: cross-site -> 403)');

  // 4B. Chặn yêu cầu có Referer từ trang lạ
  const reqForeignReferer = new MockRequest('https://tiengnhat.edu.vn/audio/kanji_01.mp3', {
    headers: {
      'User-Agent': 'Chrome',
      'Referer': 'https://attacker.org/embed'
    }
  });
  const resForeign = await worker.fetch(reqForeignReferer, mockEnv, {});
  assert.strictEqual(resForeign.status, 403);
  console.log('  ✓ Chặn hotlink file âm thanh khi Referer lạ không thuộc tên miền chính.');

  // 4C. Cho phép tải âm thanh khi đến từ cùng tên miền (Same-Origin)
  const reqValidAudio = new MockRequest('https://tiengnhat.edu.vn/audio/lesson1_vocab.mp3', {
    headers: {
      'User-Agent': 'Chrome',
      'Sec-Fetch-Site': 'same-origin',
      'Referer': 'https://tiengnhat.edu.vn/bai-1'
    }
  });
  const resValidAudio = await worker.fetch(reqValidAudio, mockEnv, {});
  assert.strictEqual(resValidAudio.status, 200);
  console.log('  ✓ Cho phép tải âm thanh hợp lệ cùng nguồn gốc (Same-Origin -> 200 OK)');

  // 4D. Kiểm tra route /api/speech từ trang ngoài
  const reqCrossSpeech = new MockRequest('https://tiengnhat.edu.vn/api/speech', {
    method: 'POST',
    headers: {
      'User-Agent': 'Chrome',
      'Sec-Fetch-Site': 'cross-site'
    },
    body: JSON.stringify({ text: 'こんにちは' })
  });
  const resCrossSpeech = await worker.fetch(reqCrossSpeech, mockEnv, {});
  assert.strictEqual(resCrossSpeech.status, 403);
  console.log('  ✓ Chặn gọi API SpeechGen trái phép từ trang web khác (/api/speech -> 403)');

  console.log('\n=== TẤT CẢ KIỂM THỬ WORKER SECURITY ĐÃ ĐẠT 100% THÀNH CÔNG! ===');
}

runTests().catch(err => {
  console.error('\n❌ Lỗi kiểm thử worker security:', err);
  process.exit(1);
});
