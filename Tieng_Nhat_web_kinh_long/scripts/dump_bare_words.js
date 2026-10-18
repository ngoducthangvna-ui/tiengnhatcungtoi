const fs = require('fs');

function load(file, varName) {
  let code = fs.readFileSync(file, 'utf8');
  eval(code.replace(new RegExp(`const\\s+${varName}\\s*=`), `global.${varName} =`));
  return global[varName];
}

const q16_20 = load('data/quizzes_16_20.js', 'quizzes_16_20');
const q21_25 = load('data/quizzes_21_25.js', 'quizzes_21_25');
const dokkai = load('data/dokkai.js', 'dokkaiData');

const wordsSet = new Set();

function extract(text) {
  if (!text) return;
  const stripped = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, ' ');
  const m = stripped.match(/[\u4e00-\u9faf]+/g);
  if (m) m.forEach(w => wordsSet.add(w));
}

[q16_20, q21_25].forEach(qSet => {
  for (const qList of Object.values(qSet)) {
    qList.forEach(q => {
      extract(q.question);
      q.options.forEach(opt => extract(opt));
    });
  }
});

dokkai.forEach(d => {
  extract(d.passage);
  d.questions.forEach(q => {
    extract(q.question);
    q.options.forEach(opt => extract(opt));
  });
});

const sortedWords = Array.from(wordsSet).sort((a, b) => b.length - a.length || a.localeCompare(b));
fs.writeFileSync('scripts/bare_words.json', JSON.stringify(sortedWords, null, 2), 'utf8');
console.log(`Saved ${sortedWords.length} unique bare kanji words to scripts/bare_words.json`);
