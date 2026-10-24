const fs = require('fs');
const map = require('./lesson_vocab_map.json');

const allUniqueKanji = new Set();
for (let i = 1; i <= 50; i++) {
  (map[i] || []).forEach(w => {
    w.kanjis.forEach(k => allUniqueKanji.add(k));
  });
}

const list = Array.from(allUniqueKanji);
fs.writeFileSync('scripts/all_unique_kanji.json', JSON.stringify(list, null, 2), 'utf8');
console.log('Total unique kanji:', list.length);
console.log('First 50:', list.slice(0, 50).join(' '));
