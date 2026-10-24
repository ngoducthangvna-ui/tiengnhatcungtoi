const fs = require('fs');

const dict = JSON.parse(fs.readFileSync('scripts/compiled_ruby_dict.json', 'utf8'));
const readingMap = require('./reading_questions_map.js');

function annotateRuby(text) {
  if (!text || typeof text !== 'string') return text;
  
  const tokenMap = new Map();
  let counter = 0;
  
  // Protect existing <ruby>...</ruby>
  let current = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, match => {
    const ph = `§§§RUBY_${counter++}§§§`;
    tokenMap.set(ph, match);
    return ph;
  });
  
  // Match dictionary entries (sorted longest first)
  for (let i = 0; i < dict.length; i++) {
    const word = dict[i][0];
    const rubyTag = dict[i][1];
    if (current.includes(word)) {
      const ph = `§§§RUBY_${counter++}§§§`;
      tokenMap.set(ph, rubyTag);
      current = current.split(word).join(ph);
    }
  }
  
  // Restore all placeholders
  current = current.replace(/§§§RUBY_(\d+)§§§/g, (match) => {
    return tokenMap.get(match) || match;
  });
  
  return current;
}

// 1. Process quizzes_16_20.js
{
  const filePath = 'data/quizzes_16_20.js';
  const content = fs.readFileSync(filePath, 'utf8');
  let code = content.replace(/^const quizzes_16_20\s*=/m, 'global.quizzes_16_20 =');
  eval(code);
  const quizObj = global.quizzes_16_20;
  
  for (const [key, qList] of Object.entries(quizObj)) {
    qList.forEach(q => {
      if (readingMap[q.id]) {
        q.question = readingMap[q.id].question;
        q.options = readingMap[q.id].options;
        q.explanation = readingMap[q.id].explanation;
        q.correctIdx = 0;
      } else {
        q.question = annotateRuby(q.question);
        q.options = q.options.map(opt => annotateRuby(opt));
      }
    });
  }
  
  const outputCode = `// Quizzes for Lessons 16 to 20\nconst quizzes_16_20 = ${JSON.stringify(quizObj, null, 2)};\n`;
  fs.writeFileSync(filePath, outputCode, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 2. Process quizzes_21_25.js
{
  const filePath = 'data/quizzes_21_25.js';
  const content = fs.readFileSync(filePath, 'utf8');
  let code = content.replace(/^const quizzes_21_25\s*=/m, 'global.quizzes_21_25 =');
  eval(code);
  const quizObj = global.quizzes_21_25;
  
  for (const [key, qList] of Object.entries(quizObj)) {
    qList.forEach(q => {
      if (readingMap[q.id]) {
        q.question = readingMap[q.id].question;
        q.options = readingMap[q.id].options;
        q.explanation = readingMap[q.id].explanation;
        q.correctIdx = 0;
      } else {
        q.question = annotateRuby(q.question);
        q.options = q.options.map(opt => annotateRuby(opt));
      }
    });
  }
  
  const outputCode = `// Quizzes for Lessons 21 to 25\nconst quizzes_21_25 = ${JSON.stringify(quizObj, null, 2)};\n`;
  fs.writeFileSync(filePath, outputCode, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 3. Process dokkai.js
{
  const filePath = 'data/dokkai.js';
  const content = fs.readFileSync(filePath, 'utf8');
  let code = content.replace(/^const dokkaiData\s*=/m, 'global.dokkaiData =');
  eval(code);
  const dokkaiData = global.dokkaiData;
  
  dokkaiData.forEach(item => {
    item.passage = annotateRuby(item.passage);
    if (item.questions) {
      item.questions.forEach(q => {
        q.question = annotateRuby(q.question);
        if (q.options) {
          q.options = q.options.map(opt => annotateRuby(opt));
        }
      });
    }
  });
  
  const outputCode = `// Dữ liệu 25 bài đọc hiểu theo giáo trình Minna no Nihongo (Bài 1 - 25)\nconst dokkaiData = ${JSON.stringify(dokkaiData, null, 2)};\n`;
  fs.writeFileSync(filePath, outputCode, 'utf8');
  console.log(`Updated ${filePath}`);
}

console.log('All exercise and reading files successfully annotated with Furigana!');
