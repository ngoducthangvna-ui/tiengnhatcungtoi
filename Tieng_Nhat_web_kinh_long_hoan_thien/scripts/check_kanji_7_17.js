const https = require('https');

const chars = [
  '見', '角', '言', '谷', '豆', '豕', '豸', '貝', '赤', '走', '足', '身', '車', '辛', '辰', '辵', '邑', '酉', '釆', '里',
  '金', '長', '門', '阜', '隹', '雨', '青', '非',
  '面', '革', '韋', '韭', '音', '頁', '風', '飛', '食', '首', '香',
  '馬', '骨', '高', '髟', '鬥', '鬯', '鬲', '鬼',
  '魚', '鳥', '鹵', '鹿', '麦', '麻',
  '黄', '黍', '黒', '黹',
  '黽', '鼎', '鼓', '鼠',
  '鼻', '斉',
  '歯',
  '竜', '亀',
  '龠'
];

async function check() {
  for (const c of chars) {
    const hex = c.codePointAt(0).toString(16).padStart(5, '0');
    await new Promise(r => {
      https.get('https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/' + hex + '.svg', res => {
        let d = '';
        res.on('data', chunk => d += chunk);
        res.on('end', () => {
          const match = d.match(/<path[^>]+d="([^"]+)"/g);
          const count = match ? match.length : 0;
          console.log(c, hex, 'status:', res.statusCode, 'paths:', count);
          r();
        });
      }).on('error', err => {
        console.log(c, hex, 'err:', err.message);
        r();
      });
    });
  }
}
check();
