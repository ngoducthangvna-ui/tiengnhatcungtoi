const fs = require('fs');

function load(file, varName) {
  let code = fs.readFileSync(file, 'utf8');
  eval(code.replace(new RegExp(`const\\s+${varName}\\s*=`), `global.${varName} =`));
  return global[varName];
}

const q1_5 = load('data/quizzes_1_5.js', 'quizzes_1_5');
const q6_10 = load('data/quizzes_6_10.js', 'quizzes_6_10');
const q11_15 = load('data/quizzes_11_15.js', 'quizzes_11_15');
const q16_20 = load('data/quizzes_16_20.js', 'quizzes_16_20');
const q21_25 = load('data/quizzes_21_25.js', 'quizzes_21_25');

function findKanjiWithoutRuby(text) {
  if (!text) return [];
  // strip all <ruby>...</ruby>
  const stripped = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, '');
  // find kanji in remaining text: \u4e00-\u9faf
  const kanjiMatches = stripped.match(/[\u4e00-\u9faf]/g);
  return kanjiMatches || [];
}

const quizSets = {
  'quizzes_1_5': q1_5,
  'quizzes_6_10': q6_10,
  'quizzes_11_15': q11_15,
  'quizzes_16_20': q16_20,
  'quizzes_21_25': q21_25
};

for (const [setName, setObj] of Object.entries(quizSets)) {
  let countQ = 0;
  let countOpt = 0;
  let samples = [];
  for (const [quizId, qList] of Object.entries(setObj)) {
    qList.forEach(q => {
      const bareKanjiQ = findKanjiWithoutRuby(q.question);
      if (bareKanjiQ.length > 0) {
        countQ++;
        if (samples.length < 5) samples.push({ quizId, id: q.id, question: q.question, bareKanji: [...new Set(bareKanjiQ)] });
      }
      q.options.forEach(opt => {
        const bareKanjiOpt = findKanjiWithoutRuby(opt);
        if (bareKanjiOpt.length > 0) countOpt++;
      });
    });
  }
  console.log(`=== ${setName} ===`);
  console.log(`Questions with bare Kanji: ${countQ}`);
  console.log(`Options with bare Kanji: ${countOpt}`);
  if (samples.length > 0) console.log('Samples:', JSON.stringify(samples, null, 2));
}
