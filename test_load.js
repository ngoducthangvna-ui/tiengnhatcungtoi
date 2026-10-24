const fs = require('fs');

// Load master kanji
const p1 = require('./mnemonics_part1.js');
const c1 = require('./mnemonics_chunk_260_389.js');
const c2 = require('./mnemonics_chunk_390_519.js');
const p2 = require('./mnemonics_part2.js');
const c3 = require('./mnemonics_chunk_635_780.js');
const m163 = require('./mnemonics_chunk_missing_163.js');
const masterKanji = Object.assign({}, p1, c1, c2, p2, c3, m163);

const compounds = JSON.parse(fs.readFileSync('C:/Users/Lecoo/.gemini/antigravity/brain/db2c3020-14b1-40e6-9bcc-f6f1795fdc89/scratch/all_unique_compounds_merged.json', 'utf8'));

console.log('Compounds loaded:', compounds.length);
console.log('Master kanji loaded:', Object.keys(masterKanji).length);
