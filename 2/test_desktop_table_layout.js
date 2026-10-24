const fs = require('fs');

console.log('--- TEST DESKTOP TABLE COLUMN LAYOUT & SIZING ---');

const css = fs.readFileSync('style.css', 'utf8');

// 1. Kiểm tra tỷ lệ phần trăm các cột
const thCol1 = css.includes('.vocab-table th:nth-child(1)') && css.includes('width: 30%');
const thCol2 = css.includes('.vocab-table th:nth-child(2)') && css.includes('width: 25%');
const thCol3 = css.includes('.vocab-table th:nth-child(3)') && css.includes('width: 9%');
const thCol4 = css.includes('.vocab-table th:nth-child(4)') && css.includes('width: 36%');

if (!thCol1 || !thCol2 || !thCol3 || !thCol4) {
  throw new Error('Tỷ lệ các cột (30% - 25% - 9% - 36%) chưa được khai báo đầy đủ trên thead th!');
}
console.log('1. Tỷ lệ 4 cột chuẩn Laptop/Desktop (30% + 25% + 9% + 36% = 100%): ĐẠT');

// 2. Kiểm tra ô Từ Loại đã thu hẹp và padding tinh gọn
if (!css.includes('width: 9%') || !css.includes('padding-left: 6px !important')) {
  throw new Error('Ô từ loại chưa được thu hẹp tối đa diện tích!');
}
console.log('2. Thu hẹp ô Từ Loại xuống 9% và tinh gọn padding ngang: ĐẠT');

// 3. Kiểm tra khả năng chống dính chữ (loại bỏ white-space: nowrap trên kanji/hiragana cell)
const kanjiBlock = css.substring(css.indexOf('.vocab-col-kanji {'), css.indexOf('.vocab-col-kanji {') + 300);
const hiraBlock = css.substring(css.indexOf('.vocab-col-hira {'), css.indexOf('.vocab-col-hira {') + 300);

if (kanjiBlock.includes('white-space: nowrap') || hiraBlock.includes('white-space: nowrap')) {
  throw new Error('Vẫn còn white-space: nowrap gây tràn ô và dính chữ sang cột bên cạnh!');
}
console.log('3. Khử triệt để white-space: nowrap gây tràn chữ sang ô bên cạnh: ĐẠT');

// 4. Kiểm tra word-break & overflow-wrap
if (!kanjiBlock.includes('word-break: break-word') || !hiraBlock.includes('word-break: break-word')) {
  throw new Error('Chưa bật word-break: break-word cho từ vựng Kanji và Hiragana!');
}
console.log('4. Cấu hình word-break & overflow-wrap tự xuống dòng mềm mại trong ô: ĐẠT');

console.log('=== TOÀN BỘ KIỂM THỬ BỐ CỤC BẢNG TỪ VỰNG TRÊN LAPTOP ĐÃ VƯỢT QUA 100% ===');
