/**
 * BẢN ĐỒ CHƯƠNG TRÌNH HỌC TẬP & DANH MỤC 217 MODULE (CURRICULUM MANIFEST)
 * data/curriculum_manifest.js
 * --------------------------------------------------------------------------
 * Khai báo tập trung cấu trúc cây bài học, số lượng bài và quy tắc định tuyến
 * chunk dữ liệu cho toàn bộ 5 phân hệ đào tạo tiếng Nhật.
 */
(function(root) {
  'use strict';

  const CURRICULUM_MANIFEST = {
    totalModules: 217,
    sections: [
      {
        id: 'group-lessons',
        title: 'Bài Học',
        prefix: 'bai-',
        count: 50,
        subtext: num => (num <= 25 ? 'Minna N5' : 'Minna N4')
      },
      {
        id: 'group-quiz',
        title: 'Bài Tập',
        prefix: 'quiz-',
        count: 50,
        subtext: () => '50 Câu'
      },
      {
        id: 'group-dokkai',
        title: 'Đọc Hiểu',
        prefix: 'dokkai-',
        count: 50,
        subtext: () => '1 Bài • 5 Câu'
      },
      {
        id: 'group-kanji',
        title: 'Mẹo Nhớ Kanji',
        prefix: 'kanji-',
        count: 50,
        subtext: () => 'Mẹo nhớ Chữ Hán'
      },
      {
        id: 'group-radicals',
        title: 'Bộ Thủ',
        prefix: 'radicals-',
        count: 17,
        subtext: num => `Nhóm ${num} nét`
      }
    ],

    /**
     * Tra cứu đường dẫn file chunk cho bất kỳ module ID nào
     */
    getScriptUrl(id) {
      if (!id || typeof id !== 'string') return null;
      const lessonMatch = id.match(/^(?:bai|lesson)-(\d+)$/);
      if (lessonMatch) {
        const num = parseInt(lessonMatch[1], 10);
        const start = Math.floor((num - 1) / 5) * 5 + 1;
        const end = start + 4;
        return `data/lessons_${start}_${end}.js`;
      }
      const quizMatch = id.match(/^quiz-(\d+)$/);
      if (quizMatch) {
        const num = parseInt(quizMatch[1], 10);
        const start = Math.floor((num - 1) / 5) * 5 + 1;
        const end = start + 4;
        return `data/quizzes_${start}_${end}.js`;
      }
      if (id.startsWith('dokkai')) return 'data/dokkai.js';
      if (id.startsWith('radicals')) return 'data/radicals_data.js';
      if (id.startsWith('kanji')) return 'data/kanji_data.js';
      return null;
    }
  };

  // Bảo đảm tương thích toàn cầu
  if (typeof window !== 'undefined') window.CURRICULUM_MANIFEST = CURRICULUM_MANIFEST;
  if (typeof global !== 'undefined') global.CURRICULUM_MANIFEST = CURRICULUM_MANIFEST;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM_MANIFEST;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
