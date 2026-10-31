/**
 * MAZII DICTIONARY & AI HANDWRITING ENGINE
 * src/dictionary_engine.js
 * --------------------------------------------------------------------------
 * Động cơ từ điển Mazii & Nhận diện chữ viết tay AI:
 * 1. Chuyển đổi Romaji sang Hiragana chính xác (romajiToHiragana)
 * 2. Tra cứu đa năng Mazii API (Từ vựng, Hán tự, Ngữ pháp) kèm bộ nhớ đệm LRU & Fallback
 * 3. Nhận diện nét vẽ AI qua Google Handwriting Recognition API
 */
(function(root) {
  'use strict';

  const _maziiCache = new Map();
  const MAX_CACHE_SIZE = 150;

  const DictionaryEngine = {
    /**
     * Chuyển đổi chuỗi Romaji sang Hiragana với xử lý âm ngắt (sokuon) và âm ghép
     */
    romajiToHiragana(raw) {
      if (!raw || typeof raw !== 'string') return '';
      let str = raw.toLowerCase().trim();

      const map = (root.ROMAJI_TO_HIRAGANA_MAP)
        || (typeof window !== 'undefined' && window.ROMAJI_TO_HIRAGANA_MAP)
        || {};

      // 1. Xử lý âm ngắt (phụ âm kép: kk, tt, pp, ss...)
      str = str.replace(/([bcdfghjklmpqrstvwxyz])\1/g, 'っ$1');
      str = str.replace(/tc/g, 'っc');

      // 2. Sắp xếp các phím theo độ dài giảm dần để ưu tiên âm ghép trước (vd: kya trước ka)
      const keys = Object.keys(map).sort((a, b) => b.length - a.length);
      for (const k of keys) {
        if (str.includes(k)) {
          str = str.split(k).join(map[k]);
        }
      }

      // 3. Xử lý chữ 'n' đơn lẻ ở cuối hoặc trước phụ âm
      str = str.replace(/n(?![aeiouy])/g, 'ん');

      return str;
    },

    /**
     * Tra cứu từ điển Mazii trực tuyến qua API
     * @param {string} query Từ khóa tra cứu
     * @param {'word'|'kanji'|'grammar'} type Loại tra cứu
     * @param {object} options Các tùy chọn (timeout, signal, v.v.)
     */
    async fetchMaziiSearch(query, type = 'word', options = {}) {
      if (!query || !query.trim()) return null;
      const q = query.trim();
      const cacheKey = `${type}_${q}`;

      if (_maziiCache.has(cacheKey)) {
        return _maziiCache.get(cacheKey);
      }

      const timeoutMs = options.timeoutMs || 6000;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      try {
        const res = await fetch('https://mazii.net/api/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ dict: 'javi', type, query: q, page: 1 }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // Nếu tra từ vựng không ra kết quả và query là romaji -> tự động đổi sang hiragana để thử lại
        if (type === 'word' && (!data.data || data.data.length === 0)) {
          const kanaQ = this.romajiToHiragana(q);
          if (kanaQ && kanaQ !== q) {
            try {
              const fallbackRes = await fetch('https://mazii.net/api/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ dict: 'javi', type, query: kanaQ, page: 1 })
              });
              if (fallbackRes.ok) {
                const fallbackData = await fallbackRes.json();
                if (fallbackData.data && fallbackData.data.length > 0) {
                  this._setCache(cacheKey, fallbackData);
                  return fallbackData;
                }
              }
            } catch (e) {
              // Tiếp tục trả về data gốc nếu fallback lỗi
            }
          }
        }

        this._setCache(cacheKey, data);
        return data;
      } catch (err) {
        clearTimeout(timeoutId);
        console.warn('[DictionaryEngine] Lỗi tra cứu Mazii API:', err);
        throw err;
      }
    },

    /**
     * Nhận diện nét vẽ chữ Hán & từ vựng qua Google Handwriting Recognition API
     * @param {Array} inkStrokes Danh sách các mảng tọa độ nét vẽ [[xs, ys], ...]
     * @param {object} canvasDim Kích thước khung vẽ { width, height, dpr }
     */
    async recognizeHandwriting(inkStrokes, canvasDim = {}) {
      if (!Array.isArray(inkStrokes) || inkStrokes.length === 0) {
        return [];
      }

      const dpr = canvasDim.dpr || 1;
      const w = Math.round((canvasDim.width || 300) / dpr);
      const h = Math.round((canvasDim.height || 320) / dpr);

      const payload = {
        app_version: 0.4,
        api_level: '537.36',
        device: '537.36',
        input_type: '0',
        options: 'enable_pre_space',
        requests: [{
          writing_guide: {
            writing_area_width: w,
            writing_area_height: h
          },
          pre_context: '',
          max_num_results: 12,
          max_completions: 0,
          language: 'ja',
          ink: inkStrokes
        }]
      };

      const endpoints = [
        'https://inputtools.google.com/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8',
        'https://www.google.com/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8'
      ];

      let lastError = null;
      for (const url of endpoints) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 4000);

          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();

          // Cấu trúc phản hồi: ["SUCCESS", [["ja", ["字", "学", ...]]]]
          if (Array.isArray(data) && data[0] === 'SUCCESS' && Array.isArray(data[1])) {
            const firstResult = data[1][0];
            if (Array.isArray(firstResult) && Array.isArray(firstResult[1])) {
              return firstResult[1];
            }
          }
        } catch (err) {
          lastError = err;
        }
      }

      if (lastError) {
        console.warn('[DictionaryEngine] Lỗi nhận diện chữ viết tay:', lastError);
      }
      return [];
    },

    /**
     * Quản lý bộ nhớ đệm có giới hạn kích thước
     */
    _setCache(key, value) {
      if (_maziiCache.size >= MAX_CACHE_SIZE) {
        const firstKey = _maziiCache.keys().next().value;
        _maziiCache.delete(firstKey);
      }
      _maziiCache.set(key, value);
    },

    /**
     * Kiểm tra trình duyệt có hỗ trợ Web Speech Recognition API hay không
     */
    isVoiceSearchSupported() {
      if (typeof window === 'undefined') return false;
      return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
    },

    /**
     * Khởi tạo đối tượng nhận diện giọng nói Web Speech Recognition API chuẩn Google Engine
     * @param {object} callbacks Các hàm phản hồi { onStart, onResult, onError, onEnd }
     * @param {string} lang Ngôn ngữ nhận diện ('ja-JP' hoặc 'vi-VN')
     * @param {object} options Các tùy chọn nâng cao (maxAlternatives, continuous)
     */
    createVoiceRecognition({ onStart, onResult, onError, onEnd } = {}, lang = 'ja-JP', options = {}) {
      if (!this.isVoiceSearchSupported()) {
        const err = new Error('Trình duyệt không hỗ trợ Web Speech API');
        err.code = 'NOT_SUPPORTED';
        if (typeof onError === 'function') onError(err);
        return null;
      }

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = lang || 'ja-JP';
      recognition.continuous = options.continuous !== undefined ? Boolean(options.continuous) : false;
      recognition.interimResults = true;
      recognition.maxAlternatives = options.maxAlternatives || 5; // Lấy tối đa 5 phương án xếp hạng theo Google

      if (typeof onStart === 'function') {
        recognition.onstart = () => onStart();
      }

      const cleanText = (str) => {
        if (!str || typeof str !== 'string') return '';
        return str.replace(/[。、.,?!？！]/g, '').trim();
      };

      recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        const allAlternatives = [];

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            finalTranscript += res[0].transcript;
            for (let j = 0; j < res.length; ++j) {
              const alt = cleanText(res[j].transcript);
              if (alt && !allAlternatives.includes(alt)) {
                allAlternatives.push(alt);
                // Nếu là tiếng Nhật và có chứa ký tự Latinh (Romaji) -> tự động bổ sung biến thể Hiragana
                if (lang === 'ja-JP' && /^[a-zA-Z\s]+$/.test(alt)) {
                  const kana = this.romajiToHiragana(alt);
                  if (kana && !allAlternatives.includes(kana)) {
                    allAlternatives.push(kana);
                  }
                }
              }
            }
          } else {
            interimTranscript += res[0].transcript;
          }
        }

        const cleanedFinal = cleanText(finalTranscript);
        const cleanedInterim = cleanText(interimTranscript);

        if (typeof onResult === 'function') {
          onResult({
            transcript: cleanedFinal || cleanedInterim,
            isFinal: Boolean(finalTranscript),
            interim: cleanedInterim,
            final: cleanedFinal,
            alternatives: allAlternatives
          });
        }
      };

      recognition.onerror = (event) => {
        let message = 'Lỗi nhận diện giọng nói.';
        if (event.error === 'not-allowed') {
          message = 'Chưa cấp quyền Micro. Vui lòng cho phép quyền truy cập Micro trên trình duyệt.';
        } else if (event.error === 'no-speech') {
          message = 'Không nghe thấy giọng nói. Vui lòng thử lại và nói rõ hơn.';
        } else if (event.error === 'network') {
          message = 'Lỗi mạng khi kết nối nhận diện giọng nói.';
        } else if (event.error === 'audio-capture') {
          message = 'Không tìm thấy thiết bị thu âm Micro hoặc Micro đang bị ứng dụng khác khóa.';
        }
        const err = new Error(message);
        err.code = event.error;
        if (typeof onError === 'function') onError(err);
      };

      if (typeof onEnd === 'function') {
        recognition.onend = () => onEnd();
      }

      return recognition;
    },

    /**
     * Xóa sạch bộ nhớ đệm tra cứu
     */
    clearCache() {
      _maziiCache.clear();
    }
  };

  // Xuất bản đa môi trường UMD
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DictionaryEngine;
  }
  if (root) {
    root.DictionaryEngine = DictionaryEngine;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
