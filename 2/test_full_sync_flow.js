/**
 * ==============================================================================
 * TEST SUITE: KIỂM THỬ TOÀN TRÌNH TỰ ĐỘNG ĐỒNG BỘ TIẾN ĐỘ ĐA THIẾT BỊ (FRONTEND - D1)
 * File: scripts/test_full_sync_flow.js
 * ==============================================================================
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== KIỂM THỬ TOÀN TRÌNH ĐỒNG BỘ ĐA THIẾT BỊ (DESKTOP <-> MOBILE <-> D1) ===\n');

// 1. Nạp _worker.js và thiết lập D1 Mock
const workerPath = path.join(__dirname, '..', '_worker.js');
const workerCode = fs.readFileSync(workerPath, 'utf8');
const cjsWorker = workerCode.replace('export default {', 'module.exports = {');

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
    return new MockResponse(null, { status, headers: { Location: url } });
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

const workerModule = { exports: {} };
const fn = new Function('module', 'exports', 'require', 'Response', 'Request', 'Headers', cjsWorker);
fn(workerModule, workerModule.exports, require, MockResponse, MockRequest, MockHeaders);
const worker = workerModule.exports;

// Mock D1 Database phân tán
const d1Data = {
  users: new Map(),
  progress: new Map()
};

const mockD1 = {
  prepare(sql) {
    let bound = [];
    return {
      bind(...args) { bound = args; return this; },
      async first() {
        if (sql.includes('FROM users WHERE email = ?')) return d1Data.users.get(bound[0]) || null;
        if (sql.includes('FROM users WHERE id = ?')) {
          for (const u of d1Data.users.values()) if (u.id === bound[0]) return u;
          return null;
        }
        if (sql.includes('FROM user_progress WHERE user_id = ?')) return d1Data.progress.get(bound[0]) || null;
        return null;
      },
      async run() {
        if (sql.includes('INSERT INTO users')) {
          const [id, email, password_hash, salt, display_name, created_at, last_login_at] = bound;
          d1Data.users.set(email, { id, email, password_hash, salt, display_name, created_at, last_login_at });
        }
        if (sql.includes('INSERT INTO user_progress')) {
          const [user_id, last_active_id, completed_modules, practice_answers, dokkai_answers, device_settings, updated_at] = bound;
          d1Data.progress.set(user_id, { user_id, last_active_id, completed_modules, practice_answers, dokkai_answers, device_settings, updated_at });
        }
        return { success: true };
      }
    };
  }
};

const cloudEnv = {
  DB: mockD1,
  JWT_SECRET: 'minna-super-secret-jwt-key-2026-production',
  ASSETS: { fetch: async () => new MockResponse('OK', { status: 200 }) }
};

// Thiết lập hàm fetch giả lập kết nối tới Worker
global.fetch = async (url, init = {}) => {
  const fullUrl = url.startsWith('http') ? url : `https://tiengnhat.edu.vn${url}`;
  const req = new MockRequest(fullUrl, init);
  return await worker.fetch(req, cloudEnv, {});
};

// 2. Mô phỏng Device 1 (Máy tính để bàn - PC Desktop)
async function runFullSyncFlow() {
  console.log('--- GIAI ĐOẠN 1: Học trên Thiết bị 1 (PC Desktop) ---');
  const pcStorage = new Map();
  const makeDeviceEnv = (storageMap) => ({
    getItem: (k) => storageMap.has(k) ? storageMap.get(k) : null,
    setItem: (k, v) => storageMap.set(k, String(v)),
    removeItem: (k) => storageMap.delete(k),
    clear: () => storageMap.clear()
  });

  global.localStorage = makeDeviceEnv(pcStorage);

  // Đăng ký tài khoản từ PC Desktop
  const regRes = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'learner@minna.vn',
      password: 'securePassword123',
      displayName: 'Nguyễn Văn Minh'
    })
  });
  if (regRes.status !== 201) {
    const err = await regRes.json();
    console.error('Registration failed with:', err);
  }
  assert.strictEqual(regRes.status, 201);
  const regData = await regRes.json();
  const authToken = regData.token;
  assert.ok(authToken, 'Phải có token xác thực');
  console.log('  ✓ Người dùng đăng ký tài khoản thành công trên PC Desktop');

  // PC hoàn thành Bài 1, Bài 2 và đang dừng ở Bài 5
  const pcPayload = {
    lastActiveId: 'bai-5',
    completedModules: ['bai-1', 'bai-2'],
    practiceAnswers: { 'quiz-1': { score: 100, submitted: true } },
    dokkaiAnswers: { 'dokkai-1': { score: 5, submitted: true } },
    deviceSettings: { mode: 'desktop', fontSize: 'normal', density: 'normal' }
  };

  const saveRes1 = await fetch('/api/progress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(pcPayload)
  });
  assert.strictEqual(saveRes1.status, 200);
  console.log('  ✓ PC Desktop tự động lưu tiến trình: Đang học "bai-5", đã xong ["bai-1", "bai-2"]');

  // 3. Mô phỏng Device 2 (Điện thoại iPhone / Android Mobile)
  console.log('\n--- GIAI ĐOẠN 2: Mở điện thoại di động đăng nhập tài khoản ---');
  const mobileStorage = new Map();
  global.localStorage = makeDeviceEnv(mobileStorage);

  // Điện thoại đăng nhập cùng tài khoản
  const loginRes = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'learner@minna.vn',
      password: 'securePassword123'
    })
  });
  assert.strictEqual(loginRes.status, 200);
  const loginData = await loginRes.json();
  const mobileToken = loginData.token;
  console.log('  ✓ Đăng nhập thành công trên Điện thoại di động');

  // Điện thoại tự động gọi GET /api/progress để đồng bộ
  const getProgRes = await fetch('/api/progress', {
    headers: { 'Authorization': `Bearer ${mobileToken}` }
  });
  assert.strictEqual(getProgRes.status, 200);
  const cloudDataOnMobile = await getProgRes.json();

  assert.strictEqual(cloudDataOnMobile.progress.lastActiveId, 'bai-5', 'Điện thoại phải mở ngay Bài 5 mà người dùng đang học dở trên PC');
  assert.deepStrictEqual(cloudDataOnMobile.progress.completedModules, ['bai-1', 'bai-2']);
  assert.strictEqual(cloudDataOnMobile.progress.practiceAnswers['quiz-1'].score, 100);
  console.log('  ✓ Điện thoại tự động phục hồi tiến trình: Mở ngay Bài 5, khôi phục bài 1 & 2 đã hoàn thành!');

  // 4. Người dùng tiếp tục học trên Điện thoại: làm Bài 5, hoàn thành Bài 5, chuyển sang Bài 6
  console.log('\n--- GIAI ĐOẠN 3: Người dùng tiếp tục học trên Điện thoại và chuyển sang Bài 6 ---');
  const mobileUpdatedPayload = {
    lastActiveId: 'bai-6',
    completedModules: ['bai-1', 'bai-2', 'bai-5'],
    practiceAnswers: {
      'quiz-1': { score: 100, submitted: true },
      'quiz-5': { score: 90, submitted: true }
    },
    dokkaiAnswers: {
      'dokkai-1': { score: 5, submitted: true },
      'dokkai-5': { score: 5, submitted: true }
    },
    deviceSettings: { mode: 'mobile', fontSize: 'large', density: 'comfort', thermalMode: true }
  };

  const saveRes2 = await fetch('/api/progress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${mobileToken}`
    },
    body: JSON.stringify(mobileUpdatedPayload)
  });
  assert.strictEqual(saveRes2.status, 200);
  console.log('  ✓ Điện thoại tự động đồng bộ tiến độ mới lên Cloudflare D1: Đang học "bai-6", đã xong Bài 5');

  // 5. Quay lại PC Desktop: Kiểm tra đồng bộ từ Điện thoại về PC
  console.log('\n--- GIAI ĐOẠN 4: Người dùng quay lại PC Desktop ---');
  global.localStorage = makeDeviceEnv(pcStorage);

  const syncBackRes = await fetch('/api/progress', {
    headers: { 'Authorization': `Bearer ${authToken}` }
  });
  assert.strictEqual(syncBackRes.status, 200);
  const pcSyncedData = await syncBackRes.json();

  assert.strictEqual(pcSyncedData.progress.lastActiveId, 'bai-6', 'PC Desktop khi bật lên phải tự động chuyển ngay sang Bài 6');
  assert.deepStrictEqual(pcSyncedData.progress.completedModules, ['bai-1', 'bai-2', 'bai-5']);
  assert.strictEqual(pcSyncedData.progress.practiceAnswers['quiz-5'].score, 90);
  assert.strictEqual(pcSyncedData.progress.deviceSettings.thermalMode, true);
  console.log('  ✓ PC Desktop đã đồng bộ trơn tru: Tự động nhảy tới Bài 6 với điểm số Bài 5 vừa học xong trên điện thoại!');

  console.log('\n=== TOÀN BỘ QUY TRÌNH ĐỒNG BỘ ĐA THIẾT BỊ ĐÃ VƯỢT QUA 100% THÀNH CÔNG! ===');
}

runFullSyncFlow().catch(err => {
  console.error('\n❌ Lỗi kiểm thử quy trình đồng bộ:', err);
  process.exit(1);
});
