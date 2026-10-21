const fs = require('fs');

const harvested = require('./harvested_kanji_dict.json');
const vocabMap = require('./lesson_vocab_map.json');

for (let i = 1; i <= 50; i++) {
  const words = vocabMap[i] || [];
  const kanjiSet = [];
  words.forEach(w => {
    w.kanjis.forEach(k => {
      if (!kanjiSet.includes(k) && harvested[k]) {
        kanjiSet.push(k);
      }
    });
  });
  console.log(`Bài ${i}: ${kanjiSet.length} kanji`);
}
