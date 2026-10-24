const fs = require('fs');

let allLessons = [];
const ranges = ["1_5", "6_10", "11_15", "16_20", "21_25", "26_30", "31_35", "36_40", "41_45", "46_50"];
ranges.forEach(r => {
  const code = fs.readFileSync("data/lessons_" + r + ".js", "utf8");
  const fn = new Function(code + "; return lessons_" + r + ";");
  allLessons = allLessons.concat(fn());
});

allLessons.forEach((l, i) => {
  const kanjiInVocab = [];
  l.vocabulary.forEach(v => {
    const raw = v.kanji || '';
    const clean = raw.replace(/<[^>]+>/g, '');
    const chars = clean.match(/[\u4e00-\u9faf]/g) || [];
    chars.forEach(c => {
      if (!kanjiInVocab.includes(c)) kanjiInVocab.push(c);
    });
  });
  console.log(`Bài ${i + 1} (${kanjiInVocab.length} kanji): ${kanjiInVocab.join(' ')}`);
});
