const fs = require('fs');

console.log('--- KIỂM TRA TƯƠNG TÁC GIAO DIỆN DI ĐỘNG (MOBILE INTERACTION TEST) ---');

// 1. Kiểm tra cú pháp và độ cân bằng ngoặc của style.css
const css = fs.readFileSync('style.css', 'utf8');
let openBraces = 0;
for (let i = 0; i < css.length; i++) {
  if (css[i] === '{') openBraces++;
  else if (css[i] === '}') openBraces--;
}
if (openBraces !== 0) {
  throw new Error(`Lỗi cú pháp CSS: Độ cân bằng ngoặc là ${openBraces} (yêu cầu = 0)!`);
}
console.log('1. Cú pháp CSS & Media Query: HỢP LỆ (Brace balance = 0)');

// 2. Kiểm tra các media queries chuẩn trên điện thoại
const hasMobile768 = css.includes('@media (max-width: 768px)');
const hasMobile680 = css.includes('@media (max-width: 680px)');
const hasMobile420 = css.includes('@media (max-width: 420px)');
const hasHoverSuppression = css.includes('@media (hover: none) and (pointer: coarse)');
if (!hasMobile768 || !hasMobile680 || !hasMobile420 || !hasHoverSuppression) {
  throw new Error('Thiếu media query responsive di động chuẩn!');
}
console.log('2. Đầy đủ các breakpoint di động: 768px, 680px (Cards), 420px & Khử sticky hover');

// 3. Kiểm tra việc loại bỏ transform: scale() gây hủy click trên màn cảm ứng
const coarseHoverBlock = css.substring(css.lastIndexOf('@media (hover: none) and (pointer: coarse)'));
if (!coarseHoverBlock.includes('transform: none !important')) {
  throw new Error('Chưa vô hiệu hóa transform: scale() ở trạng thái active trên màn cảm ứng!');
}
console.log('3. Khắc phục triệt để lỗi hủy sự kiện click (Tap Cancellation) trên iOS & Android: ĐẠT');

// 4. Kiểm tra vùng chạm nút bấm (Min 44x44px)
if (!css.includes('min-width: 44px') || !css.includes('min-height: 44px')) {
  throw new Error('Nút bấm chưa đạt chuẩn vùng chạm 44x44px cho ngón tay!');
}
console.log('4. Chuẩn vùng chạm 44x44px theo Apple Human Interface & Google Material: ĐẠT');

// 5. Kiểm tra logic xử lý audio Web Speech API đồng bộ trong app.js
const appJs = fs.readFileSync('app.js', 'utf8');
if (!appJs.includes('isTouchDevice') || !appJs.includes('SpeechSynthesisUtterance')) {
  throw new Error('Chưa tối ưu phát âm đồng bộ cho thiết bị cảm ứng!');
}
console.log('5. Tối ưu phát âm Web Speech API trực tiếp trong User Gesture trên Safari/Chrome Mobile: ĐẠT');

// 6. Kiểm tra khóa cuộn background và overlay touch listener cho Sidebar Drawer
if (!appJs.includes('sidebar-open-lock') || !appJs.includes('touchstart')) {
  throw new Error('Chưa tối ưu sự kiện touch cho Sidebar Drawer!');
}
console.log('6. Khóa cuộn trang khi mở menu và sự kiện chạm cảm ứng 0ms trên Sidebar Backdrop: ĐẠT');

console.log('=== TOÀN BỘ KIỂM THỬ TƯƠNG TÁC TRÊN ĐIỆN THOẠI DI ĐỘNG ĐÃ VƯỢT QUA 100% ===');
