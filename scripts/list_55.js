const fs = require('fs');
const list = JSON.parse(fs.readFileSync('scripts/55_reading_questions.json', 'utf8'));
list.forEach((item, i) => {
  const m = item.question.match(/「(.*?)」/);
  const word = m ? m[1] : item.question;
  console.log(`${i+1}. [${item.id}] ${word} -> ${item.correctReading} | ${item.explanation}`);
});
