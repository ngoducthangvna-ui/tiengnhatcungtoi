const fs = require('fs');

let allLessons = [];
const ranges = ["1_5", "6_10", "11_15", "16_20", "21_25", "26_30", "31_35", "36_40", "41_45", "46_50"];
ranges.forEach(r => {
  const code = fs.readFileSync("data/lessons_" + r + ".js", "utf8");
  const fn = new Function(code + "; return lessons_" + r + ";");
  allLessons = allLessons.concat(fn());
});

const summary = allLessons.map((l, i) => {
  const kanjiMap = new Map();
  l.vocabulary.forEach(v => {
    const raw = v.kanji || "";
    // extract ruby if present
    const rubyRegex = /<ruby>(.*?)<rt>(.*?)<\/rt><\/ruby>/g;
    let match;
    let cleanText = raw;
    while ((match = rubyRegex.exec(raw)) !== null) {
      const kChar = match[1];
      const rReading = match[2];
      for (const ch of kChar) {
        if (/[\u4e00-\u9faf]/.test(ch)) {
          if (!kanjiMap.has(ch)) kanjiMap.set(ch, []);
          kanjiMap.get(ch).push({ word: kChar, reading: rReading, meaning: v.meaning });
        }
      }
    }
    const pureKanji = raw.replace(/<[^>]+>/g, "").match(/[\u4e00-\u9faf]/g) || [];
    pureKanji.forEach(ch => {
      if (!kanjiMap.has(ch)) {
        kanjiMap.set(ch, [{ word: v.hiragana || raw, reading: v.hiragana || '', meaning: v.meaning }]);
      }
    });
  });

  return {
    lesson: i + 1,
    title: l.title,
    kanjiCount: kanjiMap.size,
    kanjis: Array.from(kanjiMap.keys())
  };
});

fs.writeFileSync('scripts/lesson_kanji_summary.json', JSON.stringify(summary, null, 2), 'utf8');
console.log('Done writing lesson_kanji_summary.json');
summary.slice(0, 10).forEach(s => {
  console.log(`Bài ${s.lesson}: (${s.kanjiCount} kanji) ${s.kanjis.join(' ')}`);
});
