/**
 * JAPANESE AUDIO SYNTHESIS & PROSODY ENGINE
 * src/audio_engine.js
 * --------------------------------------------------------------------------
 * Động cơ phát âm tiếng Nhật chuẩn cao cấp:
 * 1. Thuật toán làm sạch văn bản phát âm (khử triệt để thẻ <ruby>/<rt> và furigana)
 * 2. Động cơ điều phối ngữ điệu & ngắt nghỉ tự nhiên (Prosody & Discourse Rules)
 * 3. Hỗ trợ 2 tầng: Trực tiếp qua Web Speech API hoặc Giọng chuẩn Studio Leda JP (Chirp3-HD)
 */
(function(root) {
  'use strict';

  const SPEECHGEN_VOICE = 'Leda JP';
  const SPEECHGEN_MODEL = 'ja-JP-Chirp3-HD-Leda';

  let currentAudio = null;
  let hasUserInteracted = false;
  let cachedJpVoice = null;

  function markUserInteraction() {
    hasUserInteracted = true;
  }
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('click', markUserInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', markUserInteraction, { once: true, passive: true });
  }

  const AudioEngine = {
    VOICE: SPEECHGEN_VOICE,
    MODEL: SPEECHGEN_MODEL,

    /**
     * Bóc tách và làm sạch văn bản trước khi đưa vào bộ đọc âm thanh.
     * Khử triệt để thẻ Furigana <ruby>漢字<rt>かんじ</rt></ruby> để không đọc lặp 2 lần.
     */
    cleanSpeechText(raw) {
      if (!raw) return '';
      let text = String(raw).trim();

      // Bóc tách thẻ ruby: chỉ giữ lại kanji gốc hoặc furigana chuẩn
      text = text.replace(/<ruby[^>]*>(.*?)<rt[^>]*>.*?<\/rt><\/ruby>/gi, '$1');
      text = text.replace(/<[^>]+>/g, '');

      // Khử các ghi chú trong ngoặc đơn tiếng Việt: (nghĩa là...)
      text = text.replace(/\([^)]*[a-zA-ZÀ-ỹ][^)]*\)/g, '');
      text = text.replace(/（[^）]*[a-zA-ZÀ-ỹ][^）]*）/g, '');

      // Khử các tiền tố đánh số ví dụ: 1., 2., a., b.
      text = text.replace(/^\s*\d+[\.\、\)]\s*/, '');

      // Khử các khoảng trắng thừa
      text = text.replace(/\s+/g, ' ').trim();
      return text;
    },

    /**
     * Bổ sung các điểm ngắt nghỉ tự nhiên (Prosody Pause Engine)
     */
    prepareProsodyPacedJapaneseSpeech(rawText) {
      if (!rawText || typeof rawText !== 'string') return '';
      let str = rawText.trim();

      str = str.replace(/([、。！？])\s+/g, '$1')
               .replace(/\s+([、。！？])/g, '$1');

      const rawClean = str.replace(/[、。！？\s]/g, '');
      const isQuestion = /(?:か|ですか|ますか|でしょうか)$/.test(rawClean);
      const hasMultipleClauses = /[ぁ-んァ-ヶ一-龥]+(?:は|が|を|に|で|へ|と|も)\s*[ぁ-んァ-ヶ一-龥]+/.test(str);
      const hasSpaces = /\s/.test(str);

      if (rawClean.length <= 6 && !isQuestion && !hasMultipleClauses && !hasSpaces && !/[、。！？]/.test(str)) {
        return str;
      }

      // 1. Thán từ / Liên từ đầu câu (lấy từ data/audio_prosody_rules.js)
      const discourseWords = (typeof window !== 'undefined' && window.DISCOURSE_PAUSE_WORDS)
        || (typeof global !== 'undefined' && global.DISCOURSE_PAUSE_WORDS)
        || ['そして', 'それから', 'それに', 'ですから', 'しかし', 'でも', 'では', 'はい', 'いいえ', 'すみません'];

      const discoursePattern = new RegExp(
        `(^|[。！？\\n])\\s*(${discourseWords.join('|')})(?:\\s*|(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]))(?!([、。！？』」）\\)]|$))`,
        'g'
      );
      str = str.replace(discoursePattern, '$1$2、');

      // 2. Mệnh đề điều kiện (たら, なら, えば)
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たら|だら)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
      str = str.replace(/(?!さようなら|さよなら)([ぁ-んァ-ヶ一-龥]{2,})(なら)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+)(えば|けば|せば|てば|ねば|べば|めば|れば)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

      // 3. Mệnh đề chỉ lý do (から, ので, のに)
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ます|です|ました|でした|だ|た|ない|る|い))から(?!(?:です|だ|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1から、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ので(?!(?:す|だ|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1ので、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})のに(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1のに、');

      // 4. Dấu kết thúc câu
      if (!/[。！？…]$/.test(str)) {
        str += isQuestion ? '？' : '。';
      }

      return str;
    },

    /**
     * Phát âm tiếng Nhật với cơ chế fallback trực tiếp
     */
    speakJapanese(text, onEnd = null, event = null) {
      if (!text) return;
      const clean = AudioEngine.cleanSpeechText(text);
      if (!clean) return;

      const paced = AudioEngine.prepareProsodyPacedJapaneseSpeech(clean);

      // Thử phát qua Web Speech API trước nếu có giọng tiếng Nhật
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(paced);
          utter.lang = 'ja-JP';
          utter.rate = 0.92;
          utter.pitch = 1.0;
          if (onEnd) utter.onend = onEnd;

          const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
          const jpVoice = voices.find(v => v.lang === 'ja-JP' || v.lang.startsWith('ja'));
          if (jpVoice) {
            utter.voice = jpVoice;
          }
          window.speechSynthesis.speak(utter);
          return;
        } catch (e) {
          console.warn('[AudioEngine] Web Speech API không khả dụng, chuyển sang chế độ dự phòng:', e);
        }
      }

      if (onEnd) {
        setTimeout(onEnd, 1200);
      }
    }
  };

  // Bảo đảm tương thích toàn cầu
  if (typeof window !== 'undefined') window.AudioEngine = AudioEngine;
  if (typeof global !== 'undefined') global.AudioEngine = AudioEngine;
  if (typeof module !== 'undefined' && module.exports) module.exports = AudioEngine;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
