/**
 * MASTER COMPILER: COMPLETE ENRICHED KANJI VOCABULARY DATABASE (50 LESSONS)
 * Conforms 100% with kanji-hanzi-mnemonics SKILL.md
 * Merges all vocabulary from flashcards PDF + lessons_*.js + existing kanji_data.js
 */

const fs = require('fs');

// 1. Load Master Kanji Dictionary (944 Kanji covering 100% of curriculum)
const p1 = require('./mnemonics_part1.js');
const c1 = require('./mnemonics_chunk_260_389.js');
const c2 = require('./mnemonics_chunk_390_519.js');
const p2 = require('./mnemonics_part2.js');
const c3 = require('./mnemonics_chunk_635_780.js');
const m163 = require('./mnemonics_chunk_missing_163.js');
const masterKanji = Object.assign({}, p1, c1, c2, p2, c3, m163);
const harvested = require('./harvested_kanji_dict.json');

// 2. Load Compound Mnemonic Engine
const { buildSmartCompoundMnemonic } = require('./compound_mnemonic_engine.js');

// 3. Load Flashcards Data (1822 items across 50 lessons)
const flashcardsData = JSON.parse(fs.readFileSync('C:/Users/Lecoo/.gemini/antigravity/brain/db2c3020-14b1-40e6-9bcc-f6f1795fdc89/scratch/parsed_flashcards.json', 'utf8'));

// 4. Load Lessons Data from data/lessons_*.js
const lessonFiles = [
  'lessons_1_5.js', 'lessons_6_10.js', 'lessons_11_15.js', 'lessons_16_20.js',
  'lessons_21_25.js', 'lessons_26_30.js', 'lessons_31_35.js', 'lessons_36_40.js',
  'lessons_41_45.js', 'lessons_46_50.js'
];

const lessonsRaw = [];
lessonFiles.forEach(f => {
  const code = fs.readFileSync('data/' + f, 'utf8');
  const varName = f.replace('.js', '');
  eval(code.replace('const ' + varName + ' =', 'global.' + varName + '='));
  lessonsRaw.push(...global[varName]);
});

// 5. Load Current kanji_data.js (to preserve curated examples)
const currentCode = fs.readFileSync('data/kanji_data.js', 'utf8');
const fn = new Function('window', currentCode + '; return kanjiLessonsData;');
const currentKanjiData = fn({});
const currentItemsMap = new Map();
currentKanjiData.forEach(l => {
  (l.items || []).forEach(it => {
    currentItemsMap.set(l.lesson + '::' + it.word, it);
  });
});

// Function to clean raw vocabulary from lessons_*.js
function parseVocab(v) {
  let rawK = (v.kanji || '').replace(/<rt>[\s\S]*?<\/rt>/g, '').replace(/<[^>]+>/g, '').trim();
  let rawR = (v.hiragana || '').trim();
  let rawM = (v.meaning || '').trim();

  if (rawK === 'トイレ (手洗い)') rawK = '手洗い (トイレ)';

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

// Function to infer type if missing
function inferType(word, reading, meaning) {
  const m = meaning.toLowerCase();
  if (m.startsWith('thức dậy') || m.startsWith('ngủ') || m.startsWith('làm việc') || m.startsWith('nghỉ') ||
      m.startsWith('học') || m.startsWith('ăn') || m.startsWith('uống') || m.startsWith('đi') ||
      m.startsWith('đến') || m.startsWith('về') || m.startsWith('xem') || m.startsWith('nghe') ||
      m.startsWith('đọc') || m.startsWith('viết') || m.startsWith('mua') || m.startsWith('chụp') ||
      m.startsWith('gặp') || m.includes('động từ') || word.endsWith('ます') || word.endsWith('する') ||
      word.endsWith('る') || word.endsWith('く') || word.endsWith('む') || word.endsWith('う') || word.endsWith('つ')) {
    return 'Động từ';
  }
  if (m.includes('tính từ') || word.endsWith('い') || word.includes('な')) {
    return 'Tính từ';
  }
  if (m.startsWith('tôi') || m.startsWith('bạn') || m.startsWith('chúng tôi') || m.startsWith('anh ấy') || m.startsWith('cô ấy')) {
    return 'Đại từ';
  }
  return 'Danh từ';
}

// 6. Compile 50 Lessons
const compiledLessons = [];
let grandTotalCards = 0;
let grandTotalCompounds = 0;
let grandTotalSingles = 0;

for (let lIdx = 0; lIdx < 50; lIdx++) {
  const lNum = lIdx + 1;
  const fcList = flashcardsData[String(lNum)] || [];
  const rawLesson = lessonsRaw[lIdx] || { vocabulary: [] };
  const rawVocabs = rawLesson.vocabulary || [];

  // Parse items from lessons_*.js
  const lessonJsItems = [];
  rawVocabs.forEach(v => {
    lessonJsItems.push(...parseVocab(v));
  });

  // Track combined unique items
  const combinedMap = new Map();

  // First: Add existing items from kanji_data.js to preserve order and examples
  const currLessonData = currentKanjiData[lIdx];
  if (currLessonData && currLessonData.items) {
    currLessonData.items.forEach(it => {
      combinedMap.set(it.word, {
        word: it.word,
        reading: it.reading,
        meaning: it.meaning,
        type: it.type || '',
        example: it.example || ''
      });
    });
  }

  // Second: Add items from lessons_*.js
  lessonJsItems.forEach(it => {
    if (!combinedMap.has(it.word)) {
      combinedMap.set(it.word, it);
    }
  });

  // Third: Add items from flashcards PDF
  fcList.forEach(it => {
    if (/[\u4e00-\u9faf]/.test(it.word)) {
      if (!combinedMap.has(it.word)) {
        combinedMap.set(it.word, {
          word: it.word,
          reading: it.reading,
          meaning: it.meaning,
          type: inferType(it.word, it.reading, it.meaning),
          example: ''
        });
      }
    }
  });

  // Build compiled lesson items
  const lessonItems = [];

  combinedMap.forEach((p, word) => {
    const kanjis = word.match(/[\u4e00-\u9faf]/g) || [];
    if (kanjis.length === 0) return;

    // Check if any kanji missing in master
    const unrec = kanjis.filter(k => !masterKanji[k]);
    if (unrec.length > 0) {
      console.warn(`Warning: Unrecognized kanji [${unrec.join(', ')}] in word "${word}" (Bài ${lNum})`);
    }

    // Full Sino-Vietnamese reading
    const hvList = kanjis.map(k => (masterKanji[k] ? masterKanji[k].hv : ''));
    const hanVietFull = hvList.join(' ');

    // Component characters info
    let totalStrokes = 0;
    const components = kanjis.map(k => {
      const m = masterKanji[k] || { hv: '', mean: '', parts: '', story: '' };
      const h = harvested[k] || { strokes: 1, radical: 'Cơ bản', onyomi: '—', kunyomi: '—' };
      const shortMean = m.mean ? m.mean.split('(')[0].split(',')[0].replace(/^.*?:/, '').trim() : '';
      totalStrokes += (h.strokes || 1);
      return {
        kanji: k,
        hanViet: m.hv || (h.hanViet ? h.hanViet.split(' ')[0] : ''),
        meaning: shortMean,
        strokes: h.strokes || 1,
        radical: h.radical || 'Cơ bản',
        onyomi: h.onyomi || '—',
        kunyomi: h.kunyomi || '—'
      };
    });

    let fullMnemonic = '';
    if (kanjis.length === 1) {
      grandTotalSingles++;
      const k = kanjis[0];
      const m = masterKanji[k];
      fullMnemonic = `【Chiết tự】: ${m.parts}\n【Mẹo nhớ】: ${m.story}`;
    } else {
      grandTotalCompounds++;
      const compHeader = components.map(c => `${c.kanji} (${c.hanViet}: ${c.meaning})`).join(' + ');
      const story = buildSmartCompoundMnemonic(word, p.reading, hanVietFull, p.meaning, components);
      fullMnemonic = `【Cấu thành】: ${compHeader}\n【Mẹo nhớ từ】: ${story}`;
    }

    // Look for existing example if available
    const existing = currentItemsMap.get(lNum + '::' + word);
    const example = (existing && existing.example) ? existing.example : (p.example || '');

    lessonItems.push({
      id: `v-${lNum}-${lessonItems.length + 1}`,
      word: word,
      kanji: word,
      reading: p.reading,
      hanViet: hanVietFull,
      meaning: p.meaning,
      type: p.type || inferType(word, p.reading, p.meaning),
      kanjiCount: kanjis.length,
      kanjis: kanjis,
      strokes: totalStrokes,
      radicals: components[0].radical || 'Cơ bản',
      onyomi: components[0].onyomi || '—',
      kunyomi: components[0].kunyomi || '—',
      components: components,
      mnemonic: fullMnemonic,
      example: example
    });
  });

  grandTotalCards += lessonItems.length;

  compiledLessons.push({
    id: `kanji-${lNum}`,
    lesson: lNum,
    title: `Bài ${lNum}: Mẹo Nhớ Từ Vựng Chữ Hán`,
    level: lNum <= 25 ? `Minna N5 (Bài ${lNum})` : `Minna N4 (Bài ${lNum})`,
    description: `Toàn bộ ${lessonItems.length} từ vựng chữ Hán trọng tâm Bài ${lNum}. Từ ghép được giải nghĩa trọn vẹn trong 1 ô, giúp nhớ nhanh và không bị loạn thông tin.`,
    totalKanji: lessonItems.length,
    items: lessonItems
  });
}

console.log('--- MASTER COMPILATION COMPLETED ---');
console.log('Total Lessons:', compiledLessons.length);
console.log('Total Vocabulary Cards:', grandTotalCards);
console.log('Compound Word Cards (>=2 kanji):', grandTotalCompounds);
console.log('Single Kanji Cards (1 kanji):', grandTotalSingles);

// Output to data/kanji_data.js
const outputJs = `/**
 * MASTER DATABASE: MẸO GHI NHỚ TỪ VỰNG CHỮ HÁN 50 BÀI MINNA NO NIHONGO (N5 & N4)
 * Thiết kế chuẩn: Từ vựng chữ Hán bên trên - Mẹo nhớ ở dòng bên dưới
 * Từ mới có từ 2 chữ Hán trở lên được biểu diễn trong 1 ô mẹo nhớ duy nhất
 * Đầy đủ âm Hán Việt, Cách đọc Hiragana, Cấu thành chữ Hán, Mẹo nhớ & Ví dụ thực tế
 * Tương thích 100% với kanji-hanzi-mnemonics SKILL.md
 */
const kanjiLessonsData = ${JSON.stringify(compiledLessons, null, 2)};
`;

fs.writeFileSync('data/kanji_data.js', outputJs, 'utf8');
console.log('Successfully written data/kanji_data.js with size: ' + outputJs.length + ' bytes');
