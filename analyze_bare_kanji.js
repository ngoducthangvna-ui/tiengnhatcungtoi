const fs = require('fs');

function load(file, varName) {
  let code = fs.readFileSync(file, 'utf8');
  eval(code.replace(new RegExp(`const\\s+${varName}\\s*=`), `global.${varName} =`));
  return global[varName];
}

const q16_20 = load('data/quizzes_16_20.js', 'quizzes_16_20');
const q21_25 = load('data/quizzes_21_25.js', 'quizzes_21_25');
const dokkai = load('data/dokkai.js', 'dokkaiData');

const kanjiOccurrences = new Map();

function recordBareKanji(text, context) {
  if (!text) return;
  // Remove existing <ruby>...</ruby>
  const stripped = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, ' ');
  // Match any contiguous kanji sequences
  const matches = stripped.match(/[\u4e00-\u9faf]+/g);
  if (matches) {
    matches.forEach(m => {
      if (!kanjiOccurrences.has(m)) {
        kanjiOccurrences.set(m, []);
      }
      kanjiOccurrences.get(m).push(context);
    });
  }
}

[q16_20, q21_25].forEach(qSet => {
  for (const [quizId, qList] of Object.entries(qSet)) {
    qList.forEach(q => {
      recordBareKanji(q.question, `${quizId}:${q.id}:Q -> "${q.question}"`);
      q.options.forEach((opt, idx) => {
        recordBareKanji(opt, `${quizId}:${q.id}:Opt${idx} -> "${opt}"`);
      });
    });
  }
});

// Also check dokkai 16-25
dokkai.slice(15).forEach(d => {
  recordBareKanji(d.passage, `${d.id}:passage`);
  d.questions.forEach(q => {
    recordBareKanji(q.question, `${d.id}:${q.id}:Q`);
    q.options.forEach((opt, idx) => {
      recordBareKanji(opt, `${d.id}:${q.id}:Opt${idx}`);
    });
  });
});

console.log('Total unique bare kanji words:', kanjiOccurrences.size);
const sortedKeys = Array.from(kanjiOccurrences.keys()).sort((a, b) => b.length - a.length || a.localeCompare(b));
console.log('Longest to shortest bare kanji words:');
sortedKeys.forEach(k => {
  console.log(`${k} (count: ${kanjiOccurrences.get(k).length}) e.g.: ${kanjiOccurrences.get(k)[0]}`);
});
