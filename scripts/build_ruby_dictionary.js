const fs = require('fs');

const rubyMap = new Map(); // plainText -> rubyHTML

function harvestRuby(text) {
  if (!text) return;
  // Match <ruby>...</ruby> or multiple consecutive ruby tags
  const regex = /<ruby>(.*?)<rt>(.*?)<\/rt><\/ruby>/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const kanji = m[1];
    const reading = m[2];
    const fullTag = `<ruby>${kanji}<rt>${reading}</rt></ruby>`;
    if (!rubyMap.has(kanji)) {
      rubyMap.set(kanji, fullTag);
    }
  }

  // Also match composite ruby like <ruby>富士大学<rt>ふじだいがく</rt></ruby> or consecutive <ruby>...<rt>...</rt></ruby><ruby>...<rt>...</rt></ruby>
  const multiRegex = /((?:<ruby>[^<]+<rt>[^<]*<\/rt><\/ruby>)+)/g;
  let mm;
  while ((mm = multiRegex.exec(text)) !== null) {
    const rawTag = mm[1];
    const plainText = rawTag.replace(/<rt>[^<]*<\/rt>/g, '').replace(/<\/?ruby>/g, '');
    if (plainText.length > 1 && !rubyMap.has(plainText)) {
      rubyMap.set(plainText, rawTag);
    }
  }
}

// Harvest from all files
const files = [
  'data/lessons_1_5.js',
  'data/lessons_6_10.js',
  'data/lessons_11_15.js',
  'data/lessons_16_20.js',
  'data/lessons_21_25.js',
  'data/quizzes_1_5.js',
  'data/quizzes_6_10.js',
  'data/quizzes_11_15.js',
  'data/dokkai.js'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    harvestRuby(content);
  }
});

console.log(`Harvested ${rubyMap.size} unique ruby mappings!`);

// Check coverage against bare_words.json
const bareWords = JSON.parse(fs.readFileSync('scripts/bare_words.json', 'utf8'));
let matched = 0;
let unmatched = [];

bareWords.forEach(w => {
  if (rubyMap.has(w)) {
    matched++;
  } else {
    unmatched.push(w);
  }
});

console.log(`Direct matches: ${matched}/${bareWords.length}`);
console.log(`Unmatched count: ${unmatched.length}`);
console.log('Unmatched words sample (first 30):', unmatched.slice(0, 30));
fs.writeFileSync('scripts/unmatched_words.json', JSON.stringify(unmatched, null, 2), 'utf8');
