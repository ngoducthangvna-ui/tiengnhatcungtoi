const fs = require('fs');

let allLessons = [];
const ranges = ["1_5", "6_10", "11_15", "16_20", "21_25", "26_30", "31_35", "36_40", "41_45", "46_50"];
ranges.forEach(r => {
  const code = fs.readFileSync("data/lessons_" + r + ".js", "utf8");
  const fn = new Function(code + "; return lessons_" + r + ";");
  allLessons = allLessons.concat(fn());
});

console.log("Loaded", allLessons.length, "lessons.");

const perLessonKanji = [];
const seenKanji = new Set();

allLessons.forEach((l, i) => {
  const kanjiSetThisLesson = new Set();
  l.vocabulary.forEach(v => {
    const raw = v.kanji || "";
    const cleanKanji = raw.replace(/<[^>]+>/g, "").match(/[\u4e00-\u9faf]/g) || [];
    cleanKanji.forEach(k => {
      kanjiSetThisLesson.add(k);
    });
  });
  
  // New kanji introduced in this lesson vs cumulative
  const newKanji = [];
  kanjiSetThisLesson.forEach(k => {
    if (!seenKanji.has(k)) {
      newKanji.push(k);
      seenKanji.add(k);
    }
  });

  perLessonKanji.push({
    lesson: i + 1,
    title: l.title,
    totalVocab: l.vocabulary.length,
    allKanjiInLesson: Array.from(kanjiSetThisLesson),
    newKanji: newKanji
  });
  console.log(`Bài ${i+1}: Total vocab=${l.vocabulary.length}, Unique Kanji=${kanjiSetThisLesson.size}, New Kanji=${newKanji.length}: ${newKanji.slice(0, 15).join(' ')}${newKanji.length > 15 ? '...' : ''}`);
});

console.log("Total unique Kanji across all 50 lessons:", seenKanji.size);
