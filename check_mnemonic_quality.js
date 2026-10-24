const fs = require('fs');

const allUnique = JSON.parse(fs.readFileSync('scripts/all_unique_kanji.json', 'utf8'));
console.log('Total unique kanji:', allUnique.length);

const harvested = JSON.parse(fs.readFileSync('scripts/harvested_kanji_dict.json', 'utf8'));

// Check how many have generic mnemonics in data/kanji_data.js
const code = fs.readFileSync('data/kanji_data.js', 'utf8');
eval(code.replace('const kanjiLessonsData =', 'global.kanjiLessonsData ='));

let genericCount = 0;
let detailedCount = 0;

global.kanjiLessonsData.forEach(l => {
  l.items.forEach(it => {
    if (it.mnemonic.includes('Cấu trúc các nét') || it.mnemonic.includes('phẩm chất đạo đức') || it.mnemonic.includes('diễn đạt ý nghĩa')) {
      genericCount++;
    } else {
      detailedCount++;
    }
  });
});

console.log('Current items with generic mnemonics:', genericCount);
console.log('Current items with custom/detailed mnemonics:', detailedCount);
