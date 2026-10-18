const fs = require('fs');

const files = ['data/quizzes_16_20.js', 'data/quizzes_21_25.js'];
const results = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let code = content.replace(/^const quizzes_/m, 'global.quizzes_');
  eval(code);
  const quizObj = f.includes('16_20') ? global.quizzes_16_20 : global.quizzes_21_25;
  for (const [key, lesson] of Object.entries(quizObj)) {
    const qList = Array.isArray(lesson) ? lesson : (lesson.questions || []);
    qList.forEach(q => {
      if (q.question.includes('読み方') || q.question.includes('よみかた')) {
        results.push({
          file: f,
          id: q.id,
          question: q.question,
          options: q.options,
          correctIdx: q.correctIdx,
          correctReading: q.options[q.correctIdx],
          explanation: q.explanation
        });
      }
    });
  }
});

console.log(`Found ${results.length} reading questions`);
fs.writeFileSync('scripts/55_reading_questions.json', JSON.stringify(results, null, 2), 'utf8');
