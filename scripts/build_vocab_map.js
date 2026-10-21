const fs = require('fs');

let allLessons = [];
const ranges = ["1_5", "6_10", "11_15", "16_20", "21_25", "26_30", "31_35", "36_40", "41_45", "46_50"];
ranges.forEach(r => {
  const code = fs.readFileSync("data/lessons_" + r + ".js", "utf8");
  const fn = new Function(code + "; return lessons_" + r + ";");
  allLessons = allLessons.concat(fn());
});

const lessonVocabMap = {};

allLessons.forEach((l, i) => {
  const lNum = i + 1;
  lessonVocabMap[lNum] = [];
  l.vocabulary.forEach(v => {
    const raw = v.kanji || '';
    // Strip <rt>...</rt> first so readings don't get appended to kanji text
    const clean = raw.replace(/<rt>[\s\S]*?<\/rt>/g, '').replace(/<[^>]+>/g, '').trim();
    const kanjis = clean.match(/[\u4e00-\u9faf]/g) || [];
    if (kanjis.length > 0) {
      lessonVocabMap[lNum].push({
        word: clean,
        reading: v.hiragana || '',
        meaning: v.meaning || '',
        kanjis: kanjis
      });
    }
  });
});

fs.writeFileSync('scripts/lesson_vocab_map.json', JSON.stringify(lessonVocabMap, null, 2), 'utf8');
console.log('Saved updated lesson_vocab_map.json with clean words.');
