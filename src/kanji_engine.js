/**
 * KANJI MNEMONICS & STRUCTURE ENGINE
 * src/kanji_engine.js
 * --------------------------------------------------------------------------
 * Động cơ phân tích chiết tự và tạo thẻ ghi nhớ chữ Hán:
 * 1. Định dạng chiết tự bộ thủ & mẹo nhớ câu chuyện trực quan (formatMnemonic)
 * 2. Nhận diện & bóc tách ký tự chữ Hán CJK (hasKanji, extractKanjiCharacters)
 * 3. Quản lý trạng thái đã học / chưa học qua StorageEngine (loadLearnedSet, saveLearnedSet)
 * 4. Tra cứu chữ Hán tương đồng gây nhiễu (extractLookalikes)
 */
(function(root) {
  'use strict';

  const KANJI_REGEX = /[\u4e00-\u9faf]/;
  const KANJI_GLOBAL_REGEX = /[\u4e00-\u9faf]/g;

  const KanjiEngine = {
    /**
     * Kiểm tra xem chuỗi có chứa ít nhất một chữ Hán CJK hay không
     */
    hasKanji(text) {
      if (!text || typeof text !== 'string') return false;
      return KANJI_REGEX.test(text);
    },

    /**
     * Bóc tách toàn bộ các chữ Hán riêng lẻ trong chuỗi văn bản
     */
    extractKanjiCharacters(text) {
      if (!text || typeof text !== 'string') return [];
      return Array.from(text).filter(ch => KANJI_REGEX.test(ch));
    },

    /**
     * Định dạng chuỗi mẹo nhớ thô thành HTML hiển thị cấu trúc đẹp mắt
     * Phân tách rõ ràng giữa 【Chiết tự】 và 【Mẹo nhớ】
     */
    formatMnemonic(raw) {
      if (!raw) {
        return '<div class="mnemonic-row"><span class="mnemonic-text">Đang cập nhật mẹo nhớ...</span></div>';
      }
      const lines = String(raw).split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length === 0) {
        return '<div class="mnemonic-row"><span class="mnemonic-text">Đang cập nhật mẹo nhớ...</span></div>';
      }

      return lines.map(line => {
        if (line.includes('【Chiết tự】') || line.includes('【Cấu thành】')) {
          const tag = line.includes('【Chiết tự】') ? '【Chiết tự】:' : '【Cấu thành】:';
          const text = line.replace(/^【.*?】:\s*/, '');
          return `
            <div class="mnemonic-row mnemonic-breakdown-row">
              <span class="mnemonic-tag mnemonic-tag-breakdown">${tag}</span>
              <span class="mnemonic-text">${text}</span>
            </div>
          `;
        } else if (line.includes('【Mẹo nhớ】') || line.includes('【Mẹo nhớ từ】')) {
          const tag = line.includes('【Mẹo nhớ từ】') ? '【Mẹo nhớ từ】:' : '【Mẹo nhớ】:';
          const text = line.replace(/^【.*?】:\s*/, '');
          return `
            <div class="mnemonic-row mnemonic-story-row">
              <span class="mnemonic-tag mnemonic-tag-story">${tag}</span>
              <span class="mnemonic-text">${text}</span>
            </div>
          `;
        } else {
          return `
            <div class="mnemonic-row">
              <span class="mnemonic-text">${line}</span>
            </div>
          `;
        }
      }).join('');
    },

    /**
     * Tạo khóa lưu trữ cho bài học Kanji
     */
    getLearnedStorageKey(lessonNum) {
      return `minna_kfc_learned_l${lessonNum}`;
    },

    /**
     * Tải danh sách chữ Hán đã đánh dấu là "Đã học" của một bài học
     */
    loadLearnedSet(lessonNum, storageEngine) {
      const storage = storageEngine || (typeof root !== 'undefined' && root.StorageEngine);
      const key = this.getLearnedStorageKey(lessonNum);
      if (storage && typeof storage.getItem === 'function') {
        const raw = storage.getItem(key, '[]');
        try {
          const parsed = JSON.parse(raw);
          return new Set(Array.isArray(parsed) ? parsed : []);
        } catch (e) {
          return new Set();
        }
      }
      return new Set();
    },

    /**
     * Lưu danh sách chữ Hán đã học vào bộ nhớ bảo mật
     */
    saveLearnedSet(lessonNum, learnedSet, storageEngine) {
      const storage = storageEngine || (typeof root !== 'undefined' && root.StorageEngine);
      const key = this.getLearnedStorageKey(lessonNum);
      const arr = Array.from(learnedSet || []);
      if (storage && typeof storage.setItem === 'function') {
        storage.setItem(key, JSON.stringify(arr));
      }
    },

    /**
     * Lấy các chữ Hán tương tự gây nhiễu cho 1 chữ Hán cụ thể
     */
    extractLookalikes(kanjiChar, customMap) {
      if (!kanjiChar || typeof kanjiChar !== 'string') return [];
      const map = customMap
        || (typeof root !== 'undefined' && root.KANJI_LOOKALIKES_MAP)
        || {};
      return Array.isArray(map[kanjiChar]) ? [...map[kanjiChar]] : [];
    }
  };

  // Xuất bản đa môi trường UMD
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = KanjiEngine;
  }
  if (root) {
    root.KanjiEngine = KanjiEngine;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
