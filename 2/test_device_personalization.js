/**
 * ==============================================================================
 * TEST SUITE: KIỂM THỬ TÍNH NĂNG CÁ NHÂN HÓA THIẾT BỊ & CHẾ ĐỘ LÀM MÁT (THERMAL SAVER)
 * File: scripts/test_device_personalization.js
 * ==============================================================================
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('=== KIỂM THỬ CÁ NHÂN HÓA THIẾT BỊ & CHẾ ĐỘ LÀM MÁT (THERMAL SAVER) ===\n');

const htmlPath = path.join(__dirname, '..', 'index.html');
const cssPath = path.join(__dirname, '..', 'style.css');
const appPath = path.join(__dirname, '..', 'app.js');

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const appContent = fs.readFileSync(appPath, 'utf8');

// ----------------------------------------------------------------------------
// 1. KIỂM TRA PHẦN TỬ GIAO DIỆN TRONG INDEX.HTML
// ----------------------------------------------------------------------------
console.log('--- TEST 1: Kiểm tra cấu trúc HTML của tính năng Cá nhân hóa ---');
assert.ok(htmlContent.includes('id="btn-device-settings"'), 'Phải có nút #btn-device-settings trên thanh Header');
assert.ok(htmlContent.includes('id="device-settings-modal"'), 'Phải có modal #device-settings-modal');
assert.ok(htmlContent.includes('id="device-mode-selector"'), 'Phải có bộ chọn chế độ thiết bị #device-mode-selector');
assert.ok(htmlContent.includes('id="device-font-selector"'), 'Phải có bộ chọn cỡ chữ #device-font-selector');
assert.ok(htmlContent.includes('id="device-density-selector"'), 'Phải có bộ chọn mật độ #device-density-selector');
assert.ok(htmlContent.includes('id="thermal-saver-toggle"'), 'Phải có nút gạt chế độ làm mát #thermal-saver-toggle');
assert.ok(htmlContent.includes('id="haptic-toggle"'), 'Phải có nút gạt rung xúc giác #haptic-toggle');
assert.ok(htmlContent.includes('href="/hidden-crawler-trap/"'), 'Phải có link bẫy bot honeypot trong index.html');
console.log('  ✓ Đầy đủ các nút điều khiển, modal và bẫy crawler trong index.html');

// ----------------------------------------------------------------------------
// 2. KIỂM TRA CSS QUY TẮC HIỂN THỊ & LÀM MÁT TRONG STYLE.CSS
// ----------------------------------------------------------------------------
console.log('\n--- TEST 2: Kiểm tra các quy tắc CSS cá nhân hóa & Làm mát GPU ---');
assert.ok(cssContent.includes('.device-settings-btn'), 'Có CSS cho nút header .device-settings-btn');
assert.ok(cssContent.includes('.device-modal-card'), 'Có CSS cho card modal .device-modal-card');
assert.ok(cssContent.includes('.device-pill'), 'Có CSS cho các chip nút chọn .device-pill');
assert.ok(cssContent.includes('.device-slider'), 'Có CSS cho công tắc gạt .device-slider');

// Kiểm tra cỡ chữ (Font scale)
assert.ok(cssContent.includes('html[data-font-size="small"]'), 'Có rule data-font-size="small"');
assert.ok(cssContent.includes('html[data-font-size="large"]'), 'Có rule data-font-size="large"');
assert.ok(cssContent.includes('html[data-font-size="xlarge"]'), 'Có rule data-font-size="xlarge"');
console.log('  ✓ CSS hỗ trợ đầy đủ 4 nấc kích thước chữ (Nhỏ, Chuẩn, Lớn, Rất lớn)');

// Kiểm tra mật độ (Density)
assert.ok(cssContent.includes('html[data-density="compact"]'), 'Có rule data-density="compact"');
assert.ok(cssContent.includes('html[data-density="comfort"]'), 'Có rule data-density="comfort"');
console.log('  ✓ CSS hỗ trợ đầy đủ 3 cấp độ mật độ nội dung (Thu gọn, Chuẩn, Thoải mái)');

// Kiểm tra Chế độ làm mát (Thermal Saver Mode)
assert.ok(cssContent.includes('html[data-thermal-mode="true"] *'), 'Có CSS triệt tiêu backdrop-filter khi bật thermal mode');
assert.ok(cssContent.includes('backdrop-filter: none !important;'), 'Phải tắt bỏ backdrop-filter để giải phóng GPU');
assert.ok(cssContent.includes('-webkit-backdrop-filter: none !important;'), 'Phải tắt bỏ -webkit-backdrop-filter');
console.log('  ✓ CSS Chế độ làm mát triệt tiêu hoàn toàn backdrop-filter và animation nặng, giải phóng GPU điện thoại');

// ----------------------------------------------------------------------------
// 3. KIỂM THỬ HÀM LOGIC CÁ NHÂN HÓA TRONG APP.JS
// ----------------------------------------------------------------------------
console.log('\n--- TEST 3: Kiểm thử logic nhận diện và áp dụng cấu hình thiết bị ---');

// Mock môi trường
const mockRootAttrs = {};
global.document = {
  documentElement: {
    setAttribute: (k, v) => { mockRootAttrs[k] = String(v); },
    getAttribute: (k) => mockRootAttrs[k] || null,
    clientWidth: 1024
  },
  getElementById: (id) => ({
    id,
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    setAttribute: () => {},
    textContent: ''
  })
};

global.window = {
  innerWidth: 1024,
  document: global.document
};

Object.defineProperty(globalThis, 'navigator', {
  value: {
    maxTouchPoints: 0,
    vibrate: (pattern) => { global._vibratedPattern = pattern; return true; }
  },
  configurable: true,
  writable: true
});

const extractFn = (name) => {
  const match = appContent.match(new RegExp(`function\\s+${name}\\s*\\([^)]*\\)\\s*\\{[\\s\\S]*?\\n\\}`));
  if (!match) throw new Error(`Không tìm thấy hàm ${name} trong app.js`);
  return new Function(`return (${match[0]})`)();
};

const detectCurrentDevice = extractFn('detectCurrentDevice');
global.detectCurrentDevice = detectCurrentDevice;

const applyDeviceSettings = extractFn('applyDeviceSettings');
global.applyDeviceSettings = applyDeviceSettings;

const triggerHaptic = extractFn('triggerHaptic');
global.triggerHaptic = triggerHaptic;

// 3A. Nhận diện thiết bị theo viewport và touch
global.window.innerWidth = 414;
assert.strictEqual(detectCurrentDevice(), 'mobile', 'Màn hình 414px phải được nhận diện là mobile');
console.log('  ✓ Nhận diện chính xác thiết bị Mobile (< 768px)');

global.window.innerWidth = 800;
global.navigator.maxTouchPoints = 5;
assert.strictEqual(detectCurrentDevice(), 'tablet', 'Màn hình 800px kèm cảm ứng phải được nhận diện là tablet');
console.log('  ✓ Nhận diện chính xác thiết bị Tablet (768 - 1024px + Touch)');

global.window.innerWidth = 1440;
global.navigator.maxTouchPoints = 0;
assert.strictEqual(detectCurrentDevice(), 'desktop', 'Màn hình 1440px phải được nhận diện là desktop');
console.log('  ✓ Nhận diện chính xác thiết bị Desktop (> 1024px)');

// 3B. Áp dụng cấu hình lên document.documentElement
applyDeviceSettings({
  mode: 'auto',
  fontSize: 'large',
  density: 'compact',
  thermalMode: true,
  haptic: true
});

assert.strictEqual(mockRootAttrs['data-device'], 'desktop');
assert.strictEqual(mockRootAttrs['data-device-mode'], 'auto');
assert.strictEqual(mockRootAttrs['data-font-size'], 'large');
assert.strictEqual(mockRootAttrs['data-density'], 'compact');
assert.strictEqual(mockRootAttrs['data-thermal-mode'], 'true');
assert.strictEqual(mockRootAttrs['data-haptic'], 'true');
console.log('  ✓ Cấu hình được gắn đầy đủ vào thuộc tính data-* trên thẻ <html>');

// 3C. Kiểm tra ép buộc chế độ (Forced Mode override)
applyDeviceSettings({
  mode: 'mobile',
  fontSize: 'normal',
  density: 'comfort',
  thermalMode: false,
  haptic: false
});
assert.strictEqual(mockRootAttrs['data-device'], 'mobile', 'Chế độ người dùng chọn (mobile) phải override tự động nhận diện');
assert.strictEqual(mockRootAttrs['data-thermal-mode'], 'false');
console.log('  ✓ Chế độ ép buộc người dùng chọn (mobile mode) hoạt động chuẩn xác');

// 3D. Kiểm tra kích hoạt Rung phản hồi xúc giác (Haptic Feedback)
global.getDeviceSettings = () => ({ haptic: true });
triggerHaptic(25);
assert.strictEqual(global._vibratedPattern, 25, 'Haptic feedback phải gọi navigator.vibrate đúng thời lượng');
console.log('  ✓ Rung phản hồi xúc giác (Haptic Vibration) hoạt động chuẩn xác');

console.log('\n=== TẤT CẢ KIỂM THỬ CÁ NHÂN HÓA THIẾT BỊ ĐÃ VƯỢT QUA 100%! ===');
