/**
 * REFLEX QUIZ & DISTRACTOR GENERATION ENGINE
 * src/quiz_engine.js
 * --------------------------------------------------------------------------
 * Động cơ sinh câu hỏi trắc nghiệm phản xạ và phương án nhiễu:
 * 1. Thuật toán sinh chữ Hán nhiễu nét tương tự (Look-alike Kanji Distractors)
 * 2. Thuật toán sinh nghĩa tiếng Việt nhiễu (Meaning Distractors)
 * 3. Bộ tạo 25 câu hỏi phản xạ 2 chiều (Kanji ➔ Nghĩa & Nghĩa ➔ Kanji)
 * 4. Bộ tạo 25 câu hỏi phản xạ Bộ thủ (Ký tự ➔ Tên/Nghĩa & Tên ➔ Ký tự)
 * 5. Thuật toán Spaced Repetition (SRS)
 */
(function(root) {
  'use strict';

  const QuizEngine = {
    /**
     * Trộn ngẫu nhiên một mảng (Fisher-Yates shuffle an toàn)
     */
    shuffle(arr) {
      if (!Array.isArray(arr)) return [];
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },

    /**
     * Sinh 3 chữ Hán gây nhiễu có nét/cách viết gần giống nhau (Look-alike Distractors)
     */
    getLookalikeKanjiDistractors(item, lessonItems) {
      const distractors = [];
      const word = (item.word || item.kanji || '').trim();
      const kanjis = Array.isArray(item.kanjis) && item.kanjis.length > 0 
        ? item.kanjis 
        : Array.from(word).filter(ch => /[\u4e00-\u9faf]/.test(ch));

      const lookalikeMap = (typeof window !== 'undefined' && window.KANJI_LOOKALIKES_MAP)
        || (typeof global !== 'undefined' && global.KANJI_LOOKALIKES_MAP)
        || {};

      // 1. Thay thế trực tiếp từ từ điển lookalikeMap
      for (const k of kanjis) {
        const lookalikes = lookalikeMap[k] || [];
        for (const sim of lookalikes) {
          if (sim !== k) {
            const fakeWord = word.replace(new RegExp(k, 'g'), sim);
            if (fakeWord !== word && !distractors.includes(fakeWord)) {
              distractors.push(fakeWord);
              if (distractors.length >= 3) break;
            }
          }
        }
        if (distractors.length >= 3) break;
      }

      // 2. Lấy từ các mục khác trong cùng bài học có độ dài tương đương
      if (distractors.length < 3 && Array.isArray(lessonItems)) {
        for (const other of lessonItems) {
          const oWord = (other.word || other.kanji || '').trim();
          if (oWord && oWord !== word && !distractors.includes(oWord)) {
            if (Math.abs(oWord.length - word.length) <= 1) {
              distractors.push(oWord);
              if (distractors.length >= 3) break;
            }
          }
        }
      }

      // 3. Fallback từ bất kỳ mục nào khác trong bài
      if (distractors.length < 3 && Array.isArray(lessonItems)) {
        for (const other of lessonItems) {
          const oWord = (other.word || other.kanji || '').trim();
          if (oWord && oWord !== word && !distractors.includes(oWord)) {
            distractors.push(oWord);
            if (distractors.length >= 3) break;
          }
        }
      }

      // 4. Fallback toàn cục từ các bài Kanji khác nếu bài học quá ít chữ
      const globalKanjiData = (typeof window !== 'undefined' && window.kanjiLessonsData)
        || (typeof global !== 'undefined' && global.kanjiLessonsData)
        || [];
      if (distractors.length < 3 && Array.isArray(globalKanjiData)) {
        for (const kl of globalKanjiData) {
          if (!kl.items) continue;
          for (const other of kl.items) {
            const oWord = (other.word || other.kanji || '').trim();
            if (oWord && oWord !== word && !distractors.includes(oWord)) {
              distractors.push(oWord);
              if (distractors.length >= 3) break;
            }
          }
          if (distractors.length >= 3) break;
        }
      }

      // 5. Fallback cuối cùng từ kho Minna nếu vẫn chưa đủ 3
      const globalLessonsData = (typeof window !== 'undefined' && window.lessonsData)
        || (typeof global !== 'undefined' && global.lessonsData)
        || [];
      if (distractors.length < 3 && Array.isArray(globalLessonsData)) {
        for (const l of globalLessonsData) {
          const vList = l.vocabulary || l.vocab || [];
          for (const v of vList) {
            const vWord = (v.kanji || v.word || v.hiragana || '').trim();
            if (vWord && vWord !== word && !distractors.includes(vWord)) {
              distractors.push(vWord);
              if (distractors.length >= 3) break;
            }
          }
          if (distractors.length >= 3) break;
        }
      }

      return distractors.slice(0, 3);
    },

    /**
     * Sinh 3 nghĩa tiếng Việt gây nhiễu cho câu hỏi trắc nghiệm
     */
    getMeaningDistractors(item, lessonItems) {
      const correctMeaning = (item.meaning || '').trim();
      const distractors = [];

      const pool = (lessonItems || []).filter(it => (it.meaning || '').trim() && (it.meaning || '').trim() !== correctMeaning);
      const shuffledPool = QuizEngine.shuffle(pool);

      for (const other of shuffledPool) {
        const m = (other.meaning || '').trim();
        if (m && m !== correctMeaning && !distractors.includes(m)) {
          distractors.push(m);
          if (distractors.length >= 3) break;
        }
      }

      // Fallback từ các bài khác
      const globalKanjiData = (typeof window !== 'undefined' && window.kanjiLessonsData)
        || (typeof global !== 'undefined' && global.kanjiLessonsData)
        || [];
      if (distractors.length < 3 && Array.isArray(globalKanjiData)) {
        for (const kl of globalKanjiData) {
          if (!kl.items) continue;
          for (const other of kl.items) {
            const m = (other.meaning || '').trim();
            if (m && m !== correctMeaning && !distractors.includes(m)) {
              distractors.push(m);
              if (distractors.length >= 3) break;
            }
          }
          if (distractors.length >= 3) break;
        }
      }

      return distractors.slice(0, 3);
    },

    /**
     * Sinh chính xác 25 câu hỏi phản xạ Chữ Hán (13 Kanji➔Nghĩa, 12 Nghĩa➔Kanji)
     */
    generateKanjiReflexQuiz(items, targetCount = 25) {
      if (!Array.isArray(items) || items.length === 0) return [];

      const half1 = Math.ceil(targetCount / 2); // 13
      const half2 = targetCount - half1; // 12

      const shuffled1 = QuizEngine.shuffle(items);
      const shuffled2 = QuizEngine.shuffle(items);

      const k2mItems = [];
      for (let i = 0; i < half1; i++) {
        k2mItems.push(shuffled1[i % shuffled1.length]);
      }

      const m2kItems = [];
      const remaining = shuffled1.slice(half1);
      for (const it of remaining) {
        if (m2kItems.length >= half2) break;
        m2kItems.push(it);
      }
      for (const it of shuffled2) {
        if (m2kItems.length >= half2) break;
        if (!m2kItems.includes(it)) m2kItems.push(it);
      }
      while (m2kItems.length < half2 && items.length > 0) {
        m2kItems.push(items[m2kItems.length % items.length]);
      }

      const q1 = k2mItems.map(item => {
        const correct = (item.meaning || '').trim();
        const wrongs = QuizEngine.getMeaningDistractors(item, items);
        const options = QuizEngine.shuffle([
          { text: correct, isCorrect: true },
          ...wrongs.map(w => ({ text: w, isCorrect: false }))
        ]);
        return { item, type: 'kanji-to-meaning', options };
      });

      const q2 = m2kItems.map(item => {
        const correct = (item.word || item.kanji || '').trim();
        const wrongs = QuizEngine.getLookalikeKanjiDistractors(item, items);
        const options = QuizEngine.shuffle([
          { text: correct, isCorrect: true },
          ...wrongs.map(w => ({ text: w, isCorrect: false }))
        ]);
        return { item, type: 'meaning-to-kanji', options };
      });

      return QuizEngine.shuffle([...q1, ...q2]).slice(0, targetCount);
    },

    /**
     * Sinh 3 tên/nghĩa Bộ thủ gây nhiễu
     */
    getRadicalMeaningDistractors(targetItem, allPool) {
      const correctName = (targetItem.name || '').trim();
      const distractors = [];
      const shuffled = QuizEngine.shuffle(allPool || []);
      for (const other of shuffled) {
        const oName = (other.name || '').trim();
        if (oName && oName !== correctName && !distractors.includes(oName)) {
          distractors.push(oName);
          if (distractors.length >= 3) break;
        }
      }
      return distractors.slice(0, 3);
    },

    /**
     * Sinh 3 ký tự Bộ thủ gây nhiễu (ưu tiên cùng hoặc gần số nét)
     */
    getRadicalCharDistractors(targetItem, allPool) {
      const correctChar = (targetItem.character || '').trim();
      const distractors = [];
      const sameStroke = (allPool || []).filter(it => it.character !== correctChar && Math.abs(it.strokeCount - targetItem.strokeCount) <= 1);
      const shuffledSame = QuizEngine.shuffle(sameStroke);

      for (const other of shuffledSame) {
        const oChar = (other.character || '').trim();
        if (oChar && oChar !== correctChar && !distractors.includes(oChar)) {
          distractors.push(oChar);
          if (distractors.length >= 3) break;
        }
      }
      if (distractors.length < 3) {
        const shuffledAll = QuizEngine.shuffle(allPool || []);
        for (const other of shuffledAll) {
          const oChar = (other.character || '').trim();
          if (oChar && oChar !== correctChar && !distractors.includes(oChar)) {
            distractors.push(oChar);
            if (distractors.length >= 3) break;
          }
        }
      }
      return distractors.slice(0, 3);
    }
  };

  // Bảo đảm tương thích toàn cầu
  if (typeof window !== 'undefined') window.QuizEngine = QuizEngine;
  if (typeof global !== 'undefined') global.QuizEngine = QuizEngine;
  if (typeof module !== 'undefined' && module.exports) module.exports = QuizEngine;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
