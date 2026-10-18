const fs = require('fs');

const q16_20 = require('./build_quizzes_16_20.js');
// Wait, build_quizzes_16_20 writes to data/quizzes_16_20.js
// Let's load the data files directly:
function loadData(filepath, varname) {
  const code = fs.readFileSync(filepath, 'utf8');
  const fn = new Function(code + `; return ${varname};`);
  return fn();
}

const q16 = loadData('data/quizzes_16_20.js', 'quizzes_16_20');
const q21 = loadData('data/quizzes_21_25.js', 'quizzes_21_25');

const readingQs = [];
[q16, q21].forEach(qSet => {
  for (const [quizId, list] of Object.entries(qSet)) {
    list.forEach(q => {
      if (q.question.includes('読み方')) {
        readingQs.push({ id: q.id, question: q.question, options: q.options });
      }
    });
  }
});

console.log('Total 読み方 questions:', readingQs.length);
readingQs.forEach(r => console.log(r.id, r.question));
