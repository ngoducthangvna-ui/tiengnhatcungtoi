/**
 * COMPILE ALL KANJI MASTER SCRIPT
 * Combines all 5 mnemonic parts into a unified database for all 50 lessons.
 * Generates: data/kanji_data.js
 */

const fs = require('fs');

const harvested = require('./harvested_kanji_dict.json');
const vocabMap = require('./lesson_vocab_map.json');

const p1 = require('./mnemonics_part1.js');
const c1 = require('./mnemonics_chunk_260_389.js');
const c2 = require('./mnemonics_chunk_390_519.js');
const p2 = require('./mnemonics_part2.js');
const c3 = require('./mnemonics_chunk_635_780.js');

const masterMnemonics = Object.assign({}, p1, c1, c2, p2, c3);
console.log('Master mnemonics loaded. Total unique kanji:', Object.keys(masterMnemonics).length);

// Danh sách các bài từ 1 đến 50
const finalLessons = [];

for (let lNum = 1; lNum <= 50; lNum++) {
  const vocabs = vocabMap[lNum] || [];

  // Thu thập danh sách chữ Hán xuất hiện trong bài này
  const kanjiSet = new Set();
  vocabs.forEach(v => {
    (v.kanjis || []).forEach(k => kanjiSet.add(k));
  });

  const lessonKanjiList = Array.from(kanjiSet);

  const items = lessonKanjiList.map(k => {
    const h = harvested[k] || {};
    const mInfo = masterMnemonics[k] || {};

    // Tìm các từ vựng tiêu biểu trong bài chứa chữ Hán này
    const matchingExamples = [];
    vocabs.forEach(v => {
      if ((v.kanjis || []).includes(k)) {
        if (matchingExamples.length < 3) {
          matchingExamples.push({
            word: v.word,
            reading: v.reading,
            meaning: v.meaning
          });
        }
      }
    });

    // Nếu bài đó chưa có ví dụ (hiếm), thêm ví dụ cơ bản
    if (matchingExamples.length === 0) {
      if (k === '九') matchingExamples.push({ word: '九歳', reading: 'きゅうさい', meaning: '9 tuổi' });
      else if (k === '十') matchingExamples.push({ word: '十歳', reading: 'じゅっさい', meaning: '10 tuổi' });
      else matchingExamples.push({ word: k, reading: h.kunyomi || h.onyomi || '', meaning: mInfo.mean || 'Chữ Hán trong bài' });
    }

    // Làm sạch âm Hán Việt chuẩn
    let cleanHanViet = mInfo.hv || h.hanViet || '';
    if (cleanHanViet.includes(' ')) {
      cleanHanViet = cleanHanViet.split(' ')[0];
    }

    // Làm sạch nghĩa tiếng Việt
    let cleanMeaning = mInfo.mean || '';
    if (!cleanMeaning) {
      if (h.meaningsVn && h.meaningsVn.length > 0) {
        cleanMeaning = h.meaningsVn.map(m => m.replace(/^\[.*?\]\s*/, '')).slice(0, 2).join(', ');
      } else if (h.meaningsEn && h.meaningsEn.length > 0) {
        cleanMeaning = h.meaningsEn.slice(0, 2).join(', ');
      }
    }

    // Ghép mẹo nhớ chi tiết chuẩn mực
    let fullMnemonic = '';
    if (mInfo.parts && mInfo.story) {
      fullMnemonic = `【Chiết tự】: ${mInfo.parts}\n【Mẹo nhớ】: ${mInfo.story}`;
    } else if (mInfo.story) {
      fullMnemonic = mInfo.story;
    } else {
      fullMnemonic = `Cấu trúc các nét tạo thành chữ ${k} mang ý nghĩa ${cleanMeaning}.`;
    }

    return {
      kanji: k,
      hanViet: cleanHanViet,
      onyomi: h.onyomi || '—',
      kunyomi: h.kunyomi || '—',
      meaning: cleanMeaning || 'Đang cập nhật',
      strokes: h.strokes || 1,
      radicals: h.radical || 'Cơ bản',
      mnemonic: fullMnemonic,
      examples: matchingExamples
    };
  });

  finalLessons.push({
    id: `kanji-${lNum}`,
    lesson: lNum,
    title: `Bài ${lNum}: Mẹo Nhớ Chữ Hán`,
    level: lNum <= 25 ? `Minna N5 (Bài ${lNum})` : `Minna N4 (Bài ${lNum})`,
    description: `Toàn bộ ${items.length} chữ Hán trọng tâm trong từ vựng Bài ${lNum} kèm mẹo nhớ chiết tự trực quan, âm Hán Việt và ví dụ thực tế.`,
    totalKanji: items.length,
    items: items
  });
}

console.log('Total lessons built:', finalLessons.length);
console.log('Total kanji instances across 50 lessons:', finalLessons.reduce((acc, l) => acc + l.items.length, 0));

const outputJs = `/**
 * MASTER DATABASE: MẸO GHI NHỚ TOÀN BỘ CHỮ HÁN 50 BÀI MINNA NO NIHONGO (N5 & N4)
 * Thiết kế chuẩn: Chữ Hán bên trên - Mẹo nhớ ở dòng bên dưới
 * Đầy đủ âm Hán Việt, Onyomi, Kunyomi, Số nét, Bộ thủ, Mẹo chiết tự & Từ vựng ví dụ
 */
const kanjiLessonsData = ${JSON.stringify(finalLessons, null, 2)};
`;

fs.writeFileSync('data/kanji_data.js', outputJs, 'utf8');
console.log('Successfully written data/kanji_data.js');
