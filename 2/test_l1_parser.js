/**
 * TEST VOCAB COMPILER FOR LESSONS 1-5
 */
const fs = require('fs');

const p1 = require('./mnemonics_part1.js');
const c1 = require('./mnemonics_chunk_260_389.js');
const c2 = require('./mnemonics_chunk_390_519.js');
const p2 = require('./mnemonics_part2.js');
const c3 = require('./mnemonics_chunk_635_780.js');
const masterKanji = Object.assign({}, p1, c1, c2, p2, c3);
const harvested = require('./harvested_kanji_dict.json');

const files = ['lessons_1_5.js'];
const lessons = [];
files.forEach(f => {
  const code = fs.readFileSync('data/' + f, 'utf8');
  const varName = f.replace('.js', '');
  eval(code.replace('const ' + varName + ' =', 'global.' + varName + '='));
  lessons.push(...global[varName]);
});

function parseVocab(v) {
  const rawK = v.kanji.replace(/<rt>[\s\S]*?<\/rt>/g, '').replace(/<[^>]+>/g, '').trim();
  const rawR = (v.hiragana || '').trim();
  const rawM = (v.meaning || '').trim();

  if (rawK.includes(' / ')) {
    const kParts = rawK.split(' / ');
    const rParts = rawR.split(' / ');
    const mParts = rawM.split(' / ');
    return kParts.map((kp, idx) => ({
      word: kp.trim(),
      reading: rParts[idx] ? rParts[idx].trim() : (rParts[0] ? rParts[0].trim() : ''),
      meaning: mParts[idx] ? mParts[idx].trim() : rawM,
      type: v.type || '',
      example: v.example || ''
    })).filter(item => /[\u4e00-\u9faf]/.test(item.word));
  } else if (/[\u4e00-\u9faf]/.test(rawK)) {
    return [{
      word: rawK,
      reading: rawR,
      meaning: rawM,
      type: v.type || '',
      example: v.example || ''
    }];
  }
  return [];
}

const l1Vocabs = [];
lessons[0].vocabulary.forEach(v => {
  l1Vocabs.push(...parseVocab(v));
});

console.log('Lesson 1 parsed vocabs count:', l1Vocabs.length);
l1Vocabs.forEach((v, idx) => {
  const kanjis = v.word.match(/[\u4e00-\u9faf]/g) || [];
  const hv = kanjis.map(k => (masterKanji[k] ? masterKanji[k].hv : '')).join(' ');
  console.log(`${idx + 1}. [${v.word}] (${v.reading}) -> ${hv} -> Kanjis: ${kanjis.length}`);
});
