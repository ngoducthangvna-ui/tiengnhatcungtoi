/**
 * QUY TẮC NGẮT NGHỈ VÀ NGỮ ĐIỆU PHÁT ÂM TIẾNG NHẬT (AUDIO PROSODY & DISCOURSE RULES)
 * data/audio_prosody_rules.js
 * --------------------------------------------------------------------------
 * Danh sách thán từ, liên từ đầu câu, từ nối mệnh đề phụ và cấu trúc ngắt câu
 * giúp động cơ Leda JP (Chirp3-HD) đọc tự nhiên như người bản xứ.
 */
(function(root) {
  'use strict';

  const DISCOURSE_PAUSE_WORDS = [
    'そして', 'それから', 'それに', 'それで', 'ですから', 'だから',
    'しかし', 'でも', 'けれども', 'だけど', 'また', 'あるいは', 'または',
    'では', 'それでは', 'じゃ', 'ところで', 'たとえば', '例えば',
    '実は', 'じつは', 'まず', 'つぎに', '次に', 'さいごに', '最後に',
    'はい', 'いいえ', 'ええ', 'すみません', 'すいません', 'ごめんなさい',
    'おはようございます', 'こんにちは', 'こんばんは', 'はじめまして',
    'どうぞ', 'あのう', 'ええと'
  ];

  const AUDIO_PROSODY_RULES = {
    discourseWords: DISCOURSE_PAUSE_WORDS,
    subordinateConjunctions: ['たら', 'だら', 'なら', 'えば', 'けば', 'せば', 'てば', 'ねば', 'べば', 'めば', 'れば', 'いれば', 'ければ'],
    causeConjunctions: ['から', 'ので', 'のに']
  };

  // Bảo đảm tương thích toàn cầu
  if (typeof window !== 'undefined') {
    window.DISCOURSE_PAUSE_WORDS = DISCOURSE_PAUSE_WORDS;
    window.AUDIO_PROSODY_RULES = AUDIO_PROSODY_RULES;
  }
  if (typeof global !== 'undefined') {
    global.DISCOURSE_PAUSE_WORDS = DISCOURSE_PAUSE_WORDS;
    global.AUDIO_PROSODY_RULES = AUDIO_PROSODY_RULES;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUDIO_PROSODY_RULES;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
