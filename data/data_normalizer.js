/**
 * DATA NORMALIZER & DEFENSIVE SCHEMA BOUNDARY
 * data/data_normalizer.js
 * --------------------------------------------------------------------------
 * Cổng kiểm duyệt và chuẩn hóa dữ liệu an toàn trước khi nạp vào RAM và UI.
 * Tự động bù đắp giá trị mặc định an toàn khi gặp dữ liệu rỗng/null/thiếu trường,
 * triệt tiêu hoàn toàn nguy cơ sập ứng dụng (Crash / Blank Screen) do lỗi định dạng.
 */
(function(root) {
  'use strict';

  function safeTrim(val, fallback = '') {
    if (val === null || val === undefined) return fallback;
    return String(val).trim();
  }

  function safeArray(arr) {
    return Array.isArray(arr) ? arr : [];
  }

  const DataNormalizer = {
    /**
     * Chuẩn hóa mục từ vựng trong bài học Minna
     */
    normalizeVocabItem(raw, idx = 0) {
      if (!raw || typeof raw !== 'object') {
        return {
          kanji: '',
          hiragana: '',
          meaning: '[Nội dung đang cập nhật]',
          type: 'other',
          example: ''
        };
      }
      return {
        ...raw,
        kanji: safeTrim(raw.kanji || raw.word || raw.hiragana || ''),
        hiragana: safeTrim(raw.hiragana || raw.reading || raw.kana || ''),
        meaning: safeTrim(raw.meaning || raw.vi || raw.mean || '[Chưa có dịch nghĩa]'),
        type: safeTrim(raw.type || 'other'),
        example: safeTrim(raw.example || raw.ex || '')
      };
    },

    /**
     * Chuẩn hóa điểm ngữ pháp trong bài học Minna
     */
    normalizeGrammarItem(raw, idx = 0) {
      if (!raw || typeof raw !== 'object') {
        return {
          structure: `Ngữ pháp #${idx + 1}`,
          title: `Ngữ pháp #${idx + 1}`,
          pattern: `Ngữ pháp #${idx + 1}`,
          explanation: '[Giải thích đang được cập nhật]',
          caution: '',
          examples: []
        };
      }

      const struct = safeTrim(raw.structure || raw.pattern || raw.formula || raw.title || `Ngữ pháp #${idx + 1}`);
      const expl = safeTrim(raw.explanation || raw.desc || raw.meaning || '');
      const caution = safeTrim(raw.caution || raw.note || '');
      const rawExamples = safeArray(raw.examples || raw.ex);

      const examples = rawExamples.map((e, eIdx) => {
        if (!e) return { type: 'sentence', jp: '', vi: '', rawJp: '' };
        if (typeof e === 'string') return { type: 'sentence', jp: e, vi: '', rawJp: e };
        if (typeof e === 'object') {
          const type = e.type === 'dialogue' ? 'dialogue' : 'sentence';
          if (type === 'dialogue') {
            const rawLines = safeArray(e.lines || e.dialogue);
            const lines = rawLines.map(l => ({
              ...l,
              speaker: safeTrim(l.speaker || 'A'),
              jp: safeTrim(l.jp || l.japanese || ''),
              rawJp: safeTrim(l.rawJp || l.jp || ''),
              vi: safeTrim(l.vi || l.vietnamese || '')
            }));
            return {
              ...e,
              type: 'dialogue',
              context: safeTrim(e.context || ''),
              lines
            };
          } else {
            return {
              ...e,
              type: 'sentence',
              context: safeTrim(e.context || ''),
              jp: safeTrim(e.jp || e.japanese || ''),
              rawJp: safeTrim(e.rawJp || e.jp || ''),
              vi: safeTrim(e.vi || e.vietnamese || '')
            };
          }
        }
        return { type: 'sentence', jp: '', vi: '', rawJp: '' };
      });

      return {
        ...raw,
        structure: struct,
        title: struct,
        pattern: struct,
        explanation: expl,
        caution: caution,
        examples: examples
      };
    },

    /**
     * Chuẩn hóa toàn bộ một bài học Minna no Nihongo (bai-1 đến bai-50)
     */
    normalizeLesson(raw, fallbackId = 'bai-0') {
      if (!raw || typeof raw !== 'object') {
        return {
          id: fallbackId,
          title: 'Bài học Minna',
          level: 'N5',
          badge: '',
          description: '',
          vocabulary: [],
          grammar: [],
          conversation: null
        };
      }

      const rawVocab = safeArray(raw.vocabulary || raw.vocab);
      const rawGrammar = safeArray(raw.grammar);

      return {
        id: safeTrim(raw.id || fallbackId),
        title: safeTrim(raw.title || 'Bài học Minna no Nihongo'),
        level: safeTrim(raw.level || 'Minna no Nihongo N5'),
        badge: safeTrim(raw.badge || ''),
        description: safeTrim(raw.description || ''),
        vocabulary: rawVocab.map((v, idx) => DataNormalizer.normalizeVocabItem(v, idx)),
        grammar: rawGrammar.map((g, idx) => DataNormalizer.normalizeGrammarItem(g, idx)),
        conversation: raw.conversation && typeof raw.conversation === 'object' ? raw.conversation : null
      };
    },

    /**
     * Chuẩn hóa một câu hỏi trắc nghiệm (quiz-1 đến quiz-50)
     */
    normalizeQuizQuestion(raw, idx = 0) {
      if (!raw || typeof raw !== 'object') {
        return {
          id: `pq-unknown-${idx}`,
          question: 'Câu hỏi đang cập nhật...',
          options: ['A', 'B', 'C', 'D'],
          correctIdx: 0,
          explanation: ''
        };
      }

      let options = safeArray(raw.options).map(o => safeTrim(o));
      // Bảo đảm luôn có đúng 4 options
      while (options.length < 4) {
        options.push(`Phương án ${options.length + 1}`);
      }
      if (options.length > 4) {
        options = options.slice(0, 4);
      }

      // Khử trùng lặp trong options (đảm bảo 4 đáp án luôn độc nhất)
      const seen = new Set();
      for (let i = 0; i < options.length; i++) {
        if (!options[i] || seen.has(options[i])) {
          let suffix = 2;
          let candidate = `${options[i] || 'Phương án'} (${suffix})`;
          while (seen.has(candidate)) {
            suffix++;
            candidate = `${options[i] || 'Phương án'} (${suffix})`;
          }
          options[i] = candidate;
        }
        seen.add(options[i]);
      }

      let correctIdx = typeof raw.correctIdx === 'number' ? raw.correctIdx : 0;
      if (correctIdx < 0 || correctIdx >= options.length) {
        correctIdx = 0;
      }

      return {
        id: safeTrim(raw.id || `pq-${idx + 1}`),
        question: safeTrim(raw.question || 'Câu hỏi trắc nghiệm:'),
        options,
        correctIdx,
        explanation: safeTrim(raw.explanation || '')
      };
    },

    /**
     * Chuẩn hóa một bài đọc hiểu Dokkai
     */
    normalizeDokkai(raw, fallbackId = 'dokkai-0') {
      if (!raw || typeof raw !== 'object') {
        return {
          id: fallbackId,
          lessonId: fallbackId,
          title: 'Bài đọc hiểu',
          subTitle: '',
          description: '',
          passage: 'Nội dung bài đọc đang được cập nhật.',
          questions: [],
          translation: 'Bản dịch đang được cập nhật.'
        };
      }

      const questions = safeArray(raw.questions).map((q, qIdx) => ({
        id: safeTrim(q.id || `dq-${qIdx + 1}`),
        question: safeTrim(q.question || `Câu hỏi #${qIdx + 1}`),
        options: safeArray(q.options).map(o => safeTrim(o)),
        correctIdx: typeof q.correctIdx === 'number' ? q.correctIdx : 0,
        explanation: safeTrim(q.explanation || '')
      }));

      return {
        id: safeTrim(raw.id || fallbackId),
        lessonId: safeTrim(raw.lessonId || fallbackId),
        title: safeTrim(raw.title || 'Đọc hiểu Minna'),
        subTitle: safeTrim(raw.subTitle || ''),
        description: safeTrim(raw.description || ''),
        passage: safeTrim(raw.passage || ''),
        questions,
        translation: safeTrim(raw.translation || '')
      };
    },

    /**
     * Chuẩn hóa một mục chữ Hán
     */
    normalizeKanjiItem(raw, idx = 0) {
      if (!raw || typeof raw !== 'object') {
        return {
          id: `kanji-${idx}`,
          kanji: '',
          word: '',
          reading: '',
          hanViet: '',
          meaning: '[Ý nghĩa đang cập nhật]',
          strokes: 0,
          onyomi: '',
          kunyomi: '',
          mnemonic: ''
        };
      }

      return {
        ...raw,
        id: safeTrim(raw.id || `kanji-${idx}`),
        kanji: safeTrim(raw.kanji || raw.word || ''),
        word: safeTrim(raw.word || raw.kanji || ''),
        reading: safeTrim(raw.reading || raw.hiragana || ''),
        hanViet: safeTrim(raw.hanViet || raw.hanviet || ''),
        meaning: safeTrim(raw.meaning || '[Chưa có nghĩa]'),
        strokes: typeof raw.strokes === 'number' ? raw.strokes : (parseInt(raw.strokes, 10) || 0),
        onyomi: safeTrim(raw.onyomi || raw.on || ''),
        kunyomi: safeTrim(raw.kunyomi || raw.kun || ''),
        mnemonic: safeTrim(raw.mnemonic || '')
      };
    }
  };

  // Bảo đảm tương thích toàn cầu
  if (typeof window !== 'undefined') window.DataNormalizer = DataNormalizer;
  if (typeof global !== 'undefined') global.DataNormalizer = DataNormalizer;
  if (typeof module !== 'undefined' && module.exports) module.exports = DataNormalizer;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
