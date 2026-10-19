const fs = require('fs');
const path = require('path');

const q21 = require('./data_q21.js');
const q22 = require('./data_q22.js');
const q23 = require('./data_q23.js');
const q24 = require('./data_q24.js');
const q25 = require('./data_q25.js');

const all = {
  "quiz-21": q21,
  "quiz-22": q22,
  "quiz-23": q23,
  "quiz-24": q24,
  "quiz-25": q25
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

const fileContent = `// Quizzes for Lessons 21 to 25
const quizzes_21_25 = ${JSON.stringify(all, null, 2)};
`;

const targetPath = path.resolve(__dirname, '../data/quizzes_21_25.js');
fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log(`Successfully generated ${targetPath} with 250 questions!`);
