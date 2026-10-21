const fs = require('fs');

const fullDict = JSON.parse(fs.readFileSync('scripts/full_ruby_dict.json', 'utf8'));

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
  
  // Match dictionary entries (longest first)
  for (let i = 0; i < fullDict.length; i++) {
    const word = fullDict[i][0];
    const rubyTag = fullDict[i][1];
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

function findBareKanji(text) {
  if (!text) return [];
  // strip ruby
  const stripped = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, '');
  // strip vietnamese & english & symbols
  const matches = stripped.match(/[\u4e00-\u9faf]/g);
  return matches || [];
}

const quizFiles = [
  { file: 'data/quizzes_26_30.js', varName: 'quizzes_26_30' },
  { file: 'data/quizzes_31_35.js', varName: 'quizzes_31_35' },
  { file: 'data/quizzes_36_40.js', varName: 'quizzes_36_40' },
  { file: 'data/quizzes_41_45.js', varName: 'quizzes_41_45' },
  { file: 'data/quizzes_46_50.js', varName: 'quizzes_46_50' }
];

let globalBare = new Set();

quizFiles.forEach(({ file, varName }) => {
  const content = fs.readFileSync(file, 'utf8');
  eval(content.replace(new RegExp(`const\\s+${varName}\\s*=`), 'global.currentQuiz ='));
  const quizObj = global.currentQuiz;

  for (const [quizId, qList] of Object.entries(quizObj)) {
    qList.forEach(q => {
      q.question = annotateRuby(q.question);
      q.options = q.options.map(opt => annotateRuby(opt));

      const bareQ = findBareKanji(q.question);
      const bareOpts = q.options.flatMap(findBareKanji);
      bareQ.forEach(k => globalBare.add(k));
      bareOpts.forEach(k => globalBare.add(k));
    });
  }

  const newContent = `// Quizzes for ${varName} (Annotated with Furigana)
const ${varName} = ${JSON.stringify(quizObj, null, 2)};
`;
  fs.writeFileSync(file, newContent, 'utf8');
  console.log(`Updated and annotated ${file}`);
});

console.log('Remaining bare kanji characters across quizzes 26-50:', Array.from(globalBare));
