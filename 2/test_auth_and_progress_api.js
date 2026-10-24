/**
 * ==============================================================================
 * TEST SUITE: KIỂM THỬ XÁC THỰC (AUTH) & 2 API TIẾN ĐỘ D1 TRÊN CLOUDFLARE WORKER
 * File: scripts/test_auth_and_progress_api.js
 * ==============================================================================
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== KIỂM THỬ DỊCH VỤ AUTHENTICATION & 2 API TIẾN ĐỘ TRÊN WORKER ===\n');

const workerPath = path.join(__dirname, '..', '_worker.js');
const workerCode = fs.readFileSync(workerPath, 'utf8');
const cjsCode = workerCode.replace('export default {', 'module.exports = {');

// Mock Web API
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

const scriptModule = { exports: {} };
const fn = new Function('module', 'exports', 'require', 'Response', 'Request', 'Headers', cjsCode);
fn(scriptModule, scriptModule.exports, require, MockResponse, MockRequest, MockHeaders);
const worker = scriptModule.exports;

// Mock Cloudflare D1 Database Database Interface
const d1Store = {
  users: new Map(),
  progress: new Map()
};

const mockD1 = {
  prepare(sql) {
    let boundArgs = [];
    return {
      bind(...args) {
        boundArgs = args;
        return this;
      },
      async first() {
        if (sql.includes('SELECT * FROM users WHERE email = ?')) {
          const email = boundArgs[0];
          return d1Store.users.get(email) || null;
        }
        if (sql.includes('SELECT id, email, display_name, created_at, last_login_at FROM users WHERE id = ?')) {
          const id = boundArgs[0];
          for (const u of d1Store.users.values()) {
            if (u.id === id) return u;
          }
          return null;
        }
        if (sql.includes('SELECT * FROM user_progress WHERE user_id = ?')) {
          const userId = boundArgs[0];
          return d1Store.progress.get(userId) || null;
        }
        return null;
      },
      async run() {
        if (sql.includes('INSERT INTO users')) {
          const [id, email, password_hash, salt, display_name, created_at, last_login_at] = boundArgs;
          d1Store.users.set(email, { id, email, password_hash, salt, display_name, created_at, last_login_at });
          return { success: true };
        }
        if (sql.includes('UPDATE users SET last_login_at = ? WHERE id = ?')) {
          const [last_login_at, id] = boundArgs;
          for (const u of d1Store.users.values()) {
            if (u.id === id) u.last_login_at = last_login_at;
          }
          return { success: true };
        }
        if (sql.includes('INSERT INTO user_progress')) {
          const [user_id, last_active_id, completed_modules, practice_answers, dokkai_answers, device_settings, updated_at] = boundArgs;
          d1Store.progress.set(user_id, {
            user_id,
            last_active_id,
            completed_modules,
            practice_answers,
            dokkai_answers,
            device_settings,
            updated_at
          });
          return { success: true };
        }
        return { success: true };
      }
    };
  }
};

const testEnv = {
  DB: mockD1,
  JWT_SECRET: 'test-suite-super-secret-key-2026',
  ASSETS: {
    fetch: async () => new MockResponse('OK', { status: 200 })
  }
};

async function runTests() {
  // --------------------------------------------------------------------------
  // TEST 1: ĐĂNG KÝ TÀI KHOẢN (POST /api/auth/register)
  // --------------------------------------------------------------------------
  console.log('--- TEST 1: Đăng ký tài khoản mới (/api/auth/register) ---');
  
  // 1A. Kiểm tra từ chối email không hợp lệ
  const reqBadEmail = new MockRequest('https://tiengnhat.edu.vn/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email: 'bad-email', password: 'password123' })
  });
  const resBadEmail = await worker.fetch(reqBadEmail, testEnv, {});
  assert.strictEqual(resBadEmail.status, 400);
  console.log('  ✓ Chặn email sai cú pháp (400 Bad Request)');

  // 1B. Kiểm tra từ chối mật khẩu quá ngắn (< 6 ký tự)
  const reqShortPass = new MockRequest('https://tiengnhat.edu.vn/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email: 'user@example.com', password: '123' })
  });
  const resShortPass = await worker.fetch(reqShortPass, testEnv, {});
  assert.strictEqual(resShortPass.status, 400);
  console.log('  ✓ Chặn mật khẩu ngắn < 6 ký tự (400 Bad Request)');

  // 1C. Đăng ký thành công tài khoản chuẩn
  const reqValidReg = new MockRequest('https://tiengnhat.edu.vn/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      email: 'yamada@example.com',
      password: 'mypassword2026',
      displayName: 'Yamada Taro'
    })
  });
  const resValidReg = await worker.fetch(reqValidReg, testEnv, {});
  assert.strictEqual(resValidReg.status, 201);
  const dataReg = await resValidReg.json();
  assert.ok(dataReg.token, 'Đăng ký phải trả về JWT Token');
  assert.strictEqual(dataReg.user.email, 'yamada@example.com');
  assert.strictEqual(dataReg.user.displayName, 'Yamada Taro');
  console.log('  ✓ Đăng ký tài khoản thành công (201 Created), cấp JWT token');

  const userToken = dataReg.token;

  // 1D. Kiểm tra chống trùng Email
  const reqDupReg = new MockRequest('https://tiengnhat.edu.vn/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email: 'yamada@example.com', password: 'otherpassword' })
  });
  const resDupReg = await worker.fetch(reqDupReg, testEnv, {});
  assert.strictEqual(resDupReg.status, 409);
  console.log('  ✓ Ngăn chặn đăng ký trùng email (409 Conflict)');

  // --------------------------------------------------------------------------
  // TEST 2: ĐĂNG NHẬP (POST /api/auth/login)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST 2: Đăng nhập tài khoản (/api/auth/login) ---');
  
  // 2A. Sai mật khẩu
  const reqWrongPass = new MockRequest('https://tiengnhat.edu.vn/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email: 'yamada@example.com', password: 'wrongpassword' })
  });
  const resWrongPass = await worker.fetch(reqWrongPass, testEnv, {});
  assert.strictEqual(resWrongPass.status, 401);
  console.log('  ✓ Từ chối khi nhập sai mật khẩu (401 Unauthorized)');

  // 2B. Đăng nhập đúng mật khẩu
  const reqLogin = new MockRequest('https://tiengnhat.edu.vn/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email: 'yamada@example.com', password: 'mypassword2026' })
  });
  const resLogin = await worker.fetch(reqLogin, testEnv, {});
  assert.strictEqual(resLogin.status, 200);
  const dataLogin = await resLogin.json();
  assert.ok(dataLogin.token);
  assert.strictEqual(dataLogin.user.email, 'yamada@example.com');
  console.log('  ✓ Đăng nhập thành công, nhận token xác thực');

  // --------------------------------------------------------------------------
  // TEST 3: XÁC THỰC PHIÊN ĐĂNG NHẬP (GET /api/auth/me)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST 3: Xác thực phiên người dùng (/api/auth/me) ---');
  
  // 3A. Không gửi Token
  const reqNoAuth = new MockRequest('https://tiengnhat.edu.vn/api/auth/me');
  const resNoAuth = await worker.fetch(reqNoAuth, testEnv, {});
  assert.strictEqual(resNoAuth.status, 401);
  console.log('  ✓ Chặn truy cập khi thiếu token (401 Unauthorized)');

  // 3B. Gửi Token hợp lệ
  const reqMe = new MockRequest('https://tiengnhat.edu.vn/api/auth/me', {
    headers: { 'Authorization': `Bearer ${userToken}` }
  });
  const resMe = await worker.fetch(reqMe, testEnv, {});
  assert.strictEqual(resMe.status, 200);
  const dataMe = await resMe.json();
  assert.strictEqual(dataMe.user.email, 'yamada@example.com');
  assert.strictEqual(dataMe.user.displayName, 'Yamada Taro');
  console.log('  ✓ Xác thực JWT thành công, trả về profile người dùng');

  // --------------------------------------------------------------------------
  // TEST 4: API 1 - LẤY TIẾN ĐỘ HỌC TẬP (GET /api/progress)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST 4: API 1 - Lấy tiến trình bài học gần nhất (GET /api/progress) ---');
  
  // 4A. Chưa có dữ liệu tiến độ ban đầu
  const reqGetProg1 = new MockRequest('https://tiengnhat.edu.vn/api/progress', {
    headers: { 'Authorization': `Bearer ${userToken}` }
  });
  const resGetProg1 = await worker.fetch(reqGetProg1, testEnv, {});
  assert.strictEqual(resGetProg1.status, 200);
  const dataProg1 = await resGetProg1.json();
  assert.strictEqual(dataProg1.success, true);
  assert.strictEqual(dataProg1.progress.lastActiveId, 'bai-1');
  assert.deepStrictEqual(dataProg1.progress.completedModules, []);
  console.log('  ✓ Lấy tiến độ khởi tạo thành công: lastActiveId = "bai-1"');

  // --------------------------------------------------------------------------
  // TEST 5: API 2 - TỰ ĐỘNG CẬP NHẬT TIẾN ĐỘ (POST /api/progress)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST 5: API 2 - Tự động lưu tiến độ lên Cloudflare D1 (POST /api/progress) ---');
  
  const updatedProgress = {
    lastActiveId: 'bai-15',
    completedModules: ['bai-1', 'bai-2', 'bai-3', 'bai-15', 'quiz-1'],
    practiceAnswers: {
      'quiz-1': { submitted: true, score: 50, selections: { 'q1': 0, 'q2': 1 } }
    },
    dokkaiAnswers: {
      'dokkai-1': { submitted: true, score: 5 }
    },
    deviceSettings: {
      mode: 'auto',
      fontSize: 'large',
      density: 'comfort',
      thermalMode: true
    }
  };

  const reqSaveProg = new MockRequest('https://tiengnhat.edu.vn/api/progress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify(updatedProgress)
  });

  const resSaveProg = await worker.fetch(reqSaveProg, testEnv, {});
  assert.strictEqual(resSaveProg.status, 200);
  const dataSaveProg = await resSaveProg.json();
  assert.strictEqual(dataSaveProg.success, true);
  assert.ok(dataSaveProg.syncedAt > 0);
  console.log('  ✓ Đã lưu tiến trình học thành công lên Cloudflare D1 (200 OK)');

  // --------------------------------------------------------------------------
  // TEST 6: KIỂM TRA ĐỒNG BỘ ĐA THIẾT BỊ (DEVICE SYNC VERIFICATION)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST 6: Kiểm tra lấy tiến độ trên một thiết bị khác (Cross-Device Sync) ---');
  
  // Giả lập một thiết bị khác (như iPhone hoặc Tablet) truy cập và lấy tiến độ
  const reqDevice2 = new MockRequest('https://tiengnhat.edu.vn/api/progress', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      'Authorization': `Bearer ${userToken}`
    }
  });

  const resDevice2 = await worker.fetch(reqDevice2, testEnv, {});
  assert.strictEqual(resDevice2.status, 200);
  const dataDevice2 = await resDevice2.json();
  
  assert.strictEqual(dataDevice2.progress.lastActiveId, 'bai-15', 'Thiết bị mới phải nhận diện bài đang học gần nhất là Bài 15');
  assert.deepStrictEqual(dataDevice2.progress.completedModules, ['bai-1', 'bai-2', 'bai-3', 'bai-15', 'quiz-1']);
  assert.strictEqual(dataDevice2.progress.practiceAnswers['quiz-1'].score, 50);
  assert.strictEqual(dataDevice2.progress.deviceSettings.thermalMode, true);
  console.log('  ✓ Thiết bị mới đã tải chính xác 100% tiến trình học: Mở ngay Bài 15, khôi phục bài tập và cấu hình!');

  console.log('\n=== TẤT CẢ KIỂM THỬ AUTH & 2 API TIẾN ĐỘ D1 ĐÃ VƯỢT QUA 100%! ===');
}

runTests().catch(err => {
  console.error('\n❌ Lỗi kiểm thử Auth & Progress API:', err);
  process.exit(1);
});
