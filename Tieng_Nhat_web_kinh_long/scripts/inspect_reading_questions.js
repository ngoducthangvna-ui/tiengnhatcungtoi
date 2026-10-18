const fs = require('fs');

['data/quizzes_16_20.js', 'data/quizzes_21_25.js'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // evaluate the quizzes
  let code = content.replace(/^const quizzes_/m, 'global.quizzes_');
  eval(code);
  const quizObj = f.includes('16_20') ? global.quizzes_16_20 : global.quizzes_21_25;
  let count = 0;
  for (const [key, lesson] of Object.entries(quizObj)) {
    const qList = Array.isArray(lesson) ? lesson : (lesson.questions || []);
    qList.forEach((q, idx) => {
      if (q.question.includes('読み方') || q.question.includes('よみかた')) {
        count++;
        console.log(`${key} Q${idx+1}: ${q.question} | options: ${JSON.stringify(q.options)} | correct: ${q.options[q.correctIdx]}`);
      }
    });
  }
  console.log(`${f}: Total reading questions = ${count}\n`);
});
