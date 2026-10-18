const fs = require('fs');
const path = require('path');

const q16 = require('./data_q16.js');
const q17 = require('./data_q17.js');
const q18 = require('./data_q18.js');
const q19 = require('./data_q19.js');
const q20 = require('./data_q20.js');

const all = {
  "quiz-16": q16,
  "quiz-17": q17,
  "quiz-18": q18,
  "quiz-19": q19,
  "quiz-20": q20
};

// Verify each quiz
for (const [key, questions] of Object.entries(all)) {
  console.log(`Checking ${key}: ${questions.length} questions`);
  if (questions.length !== 50) {
    throw new Error(`${key} has ${questions.length} questions instead of 50!`);
  }
  questions.forEach((q, idx) => {
    if (!q.id || !q.question || !Array.isArray(q.options) || q.options.length !== 4 || typeof q.correctIdx !== 'number' || !q.explanation) {
      throw new Error(`Invalid question format at ${key} index ${idx}: ${JSON.stringify(q)}`);
    }
    if (q.correctIdx < 0 || q.correctIdx > 3) {
      throw new Error(`Invalid correctIdx at ${key} index ${idx}: ${q.correctIdx}`);
    }
  });
}

const fileContent = `// Quizzes for Lessons 16 to 20
const quizzes_16_20 = ${JSON.stringify(all, null, 2)};
`;

const targetPath = path.resolve(__dirname, '../data/quizzes_16_20.js');
fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log(`Successfully generated ${targetPath} with 250 questions!`);
