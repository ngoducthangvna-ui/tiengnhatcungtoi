const fs = require('fs');
const https = require('https');

// Danh sách các bộ thủ từ 7 nét đến 17 nét với mã codePoint tương ứng
const radicals_7_to_17 = [
  // 7 nét
  { char: '見', hex: '0898b' }, { char: '角', hex: '089d2' }, { char: '言', hex: '08a00' }, { char: '谷', hex: '08c37' },
  { char: '豆', hex: '08c46' }, { char: '豕', hex: '08c55' }, { char: '豸', hex: '08c78' }, { char: '貝', hex: '08c9d' },
  { char: '赤', hex: '08d64' }, { char: '走', hex: '08d70' }, { char: '足', hex: '08db3' }, { char: '身', hex: '08eab' },
  { char: '車', hex: '08eca' }, { char: '辛', hex: '08f9b' }, { char: '辰', hex: '08fb0' }, { char: '辶', hex: '08fb6' },
  { char: '邑', hex: '09091' }, { char: '酉', hex: '09149' }, { char: '釆', hex: '091c6' }, { char: '里', hex: '091cc' },
  // 8 nét
  { char: '金', hex: '091d1' }, { char: '長', hex: '09577' }, { char: '門', hex: '09580' }, { char: '阜', hex: '0961c' },
  { char: '隹', hex: '096b9' }, { char: '雨', hex: '096e8' }, { char: '青', hex: '09752' }, { char: '非', hex: '0975e' },
  { char: '斉', hex: '06589' },
  // 9 nét
  { char: '面', hex: '09762' }, { char: '革', hex: '09769' }, { char: '韋', hex: '097cb' }, { char: '韭', hex: '097ed' },
  { char: '音', hex: '097f3' }, { char: '頁', hex: '09801' }, { char: '風', hex: '098a8' }, { char: '飛', hex: '098db' },
  { char: '食', hex: '098df' }, { char: '首', hex: '09996' }, { char: '香', hex: '09999' },
  // 10 nét
  { char: '馬', hex: '099ac' }, { char: '骨', hex: '09aa8' }, { char: '高', hex: '09ad8' }, { char: '髟', hex: '09adf' },
  { char: '鬥', hex: '09b25' }, { char: '鬯', hex: '09b2f' }, { char: '鬲', hex: '09b32' }, { char: '鬼', hex: '09b3c' },
  // 11 nét
  { char: '魚', hex: '09b5a' }, { char: '鳥', hex: '09ce5' }, { char: '鹵', hex: '09e75' }, { char: '鹿', hex: '09e7f' },
  { char: '麦', hex: '09ea6' }, { char: '麻', hex: '09ebb' },
  // 12 nét
  { char: '黄', hex: '09ec4' }, { char: '黍', hex: '09ecd' }, { char: '黒', hex: '09ed2' }, { char: '黹', hex: '09ef9' },
  // 13 nét
  { char: '黽', hex: '09efd' }, { char: '鼎', hex: '09f0e' }, { char: '鼓', hex: '09f13' }, { char: '鼠', hex: '09f20' },
  // 14 nét
  { char: '鼻', hex: '09f3b' }, { char: '齊', hex: '09f4a' },
  // 15 nét
  { char: '歯', hex: '06b6f' },
  // 16 nét
  { char: '竜', hex: '07adc' }, { char: '亀', hex: '04e80' },
  // 17 nét
  { char: '龠', hex: '09fa0' }
];

async function testFetchAll() {
  console.log('Testing fetch for', radicals_7_to_17.length, 'radicals from 7 to 17 strokes...');
  for (const r of radicals_7_to_17) {
    await new Promise(resolve => {
      https.get(`https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${r.hex}.svg`, res => {
        let d = '';
        res.on('data', chunk => d += chunk);
        res.on('end', () => {
          const match = d.match(/<path[^>]+d="([^"]+)"/g);
          console.log(r.char, r.hex, 'status:', res.statusCode, 'paths:', match ? match.length : 0);
          resolve();
        });
      }).on('error', err => {
        console.log(r.char, r.hex, 'error:', err.message);
        resolve();
      });
    });
  }
}

testFetchAll();
