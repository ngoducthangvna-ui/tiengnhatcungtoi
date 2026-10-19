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

function checkBareKanji(text) {
  if (!text) return [];
  const stripped = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, '');
  const matches = stripped.match(/[\u4e00-\u9faf]/g);
  return matches || [];
}

const files = ['data/quizzes_16_20.js', 'data/quizzes_21_25.js'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let code = content.replace(/^const quizzes_/m, 'global.quizzes_');
  eval(code);
  const quizObj = f.includes('16_20') ? global.quizzes_16_20 : global.quizzes_21_25;
  
  let totalBareQ = 0;
  let totalBareOpt = 0;
  let remainingBareKanji = new Set();
  
  for (const [key, lesson] of Object.entries(quizObj)) {
    const qList = Array.isArray(lesson) ? lesson : (lesson.questions || []);
    qList.forEach(q => {
      let qText = q.question;
      let opts = [...q.options];
      
      // Check if it's one of the 55 reading questions
      if (readingMap[q.id]) {
        qText = readingMap[q.id].question;
        opts = readingMap[q.id].options;
      } else {
        qText = annotateRuby(qText);
        opts = opts.map(opt => annotateRuby(opt));
      }
      
      const bareQ = checkBareKanji(qText);
      const bareOpts = opts.flatMap(opt => checkBareKanji(opt));
      
      if (bareQ.length > 0) {
        totalBareQ++;
        bareQ.forEach(k => remainingBareKanji.add(k));
        console.log(`Bare in Q [${q.id}]: ${qText} -> bare: ${bareQ.join(',')}`);
      }
      if (bareOpts.length > 0) {
        totalBareOpt++;
        bareOpts.forEach(k => remainingBareKanji.add(k));
        console.log(`Bare in Opt [${q.id}]: ${opts.join(' | ')} -> bare: ${bareOpts.join(',')}`);
      }
    });
  }
  
  console.log(`\n=== Test Results for ${f} ===`);
  console.log(`Remaining Questions with bare Kanji: ${totalBareQ}`);
  console.log(`Remaining Options with bare Kanji: ${totalBareOpt}`);
  console.log(`Remaining bare Kanji set:`, [...remainingBareKanji]);
});

// Test dokkai.js
{
  const content = fs.readFileSync('data/dokkai.js', 'utf8');
  let code = content.replace(/^const dokkaiData =/m, 'global.dokkaiData =');
  eval(code);
  
  let totalBareP = 0;
  let totalBareQ = 0;
  let totalBareOpt = 0;
  let remainingBareKanji = new Set();
  
  global.dokkaiData.forEach((item, dIdx) => {
    // passage
    const pAnnotated = annotateRuby(item.passage);
    const bareP = checkBareKanji(pAnnotated);
    if (bareP.length > 0) {
      totalBareP++;
      bareP.forEach(k => remainingBareKanji.add(k));
    }
    
    // questions
    item.questions.forEach((q, qIdx) => {
      const qAnnotated = annotateRuby(q.question);
      const bareQ = checkBareKanji(qAnnotated);
      if (bareQ.length > 0) {
        totalBareQ++;
        bareQ.forEach(k => remainingBareKanji.add(k));
      }
      q.options.forEach(opt => {
        const optAnnotated = annotateRuby(opt);
        const bareOpt = checkBareKanji(optAnnotated);
        if (bareOpt.length > 0) {
          totalBareOpt++;
          bareOpt.forEach(k => remainingBareKanji.add(k));
        }
      });
    });
  });
  
  console.log(`\n=== Test Results for data/dokkai.js ===`);
  console.log(`Remaining Passages with bare Kanji: ${totalBareP}`);
  console.log(`Remaining Questions with bare Kanji: ${totalBareQ}`);
  console.log(`Remaining Options with bare Kanji: ${totalBareOpt}`);
  console.log(`Remaining bare Kanji set:`, [...remainingBareKanji]);
}
