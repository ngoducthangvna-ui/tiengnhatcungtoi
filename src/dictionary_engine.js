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

  const DEFAULT_ROMAJI_MAP = {
    kya: 'きゃ', kyu: 'きゅ', kyo: 'きょ',
    sha: 'しゃ', shu: 'しゅ', sho: 'しょ',
    cha: 'ちゃ', chu: 'ちゅ', cho: 'ちょ',
    nya: 'にゃ', nyu: 'にゅ', nyo: 'にょ',
    hya: 'ひゃ', hyu: 'ひゅ', hyo: 'ひょ',
    mya: 'みゃ', myu: 'みゅ', myo: 'みょ',
    rya: 'りゃ', ryu: 'りゅ', ryo: 'りょ',
    gya: 'ぎゃ', gyu: 'ぎゅ', gyo: 'ぎょ',
    ja: 'じゃ', ju: 'じゅ', jo: 'じょ',
    bya: 'びゃ', byu: 'びゅ', byo: 'びょ',
    pya: 'ぴゃ', pyu: 'ぴゅ', pyo: 'ぴょ',
    tsu: 'つ', shi: 'し', chi: 'ち',
    ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
    sa: 'さ', si: 'し', su: 'す', se: 'せ', so: 'そ',
    ta: 'た', ti: 'ち', tu: 'つ', te: 'て', to: 'と',
    na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
    ha: 'は', hi: 'ひ', fu: 'ふ', hu: 'ふ', he: 'へ', ho: 'ほ',
    ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
    ya: 'や', yu: 'ゆ', yo: 'よ',
    ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
    wa: 'わ', wo: 'を', nn: 'ん',
    ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご',
    za: 'ざ', zi: 'じ', ji: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
    da: 'だ', di: 'ぢ', du: 'づ', de: 'で', do: 'ど',
    ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
    pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ',
    a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お'
  };

  const DictionaryEngine = {
    /**
     * Chuyển đổi chuỗi Romaji sang Hiragana với xử lý âm ngắt (sokuon) và âm ghép
     */
    romajiToHiragana(raw) {
      if (!raw || typeof raw !== 'string') return '';
      let str = raw.toLowerCase().trim();

      const map = (root && root.ROMAJI_TO_HIRAGANA_MAP)
        || (typeof window !== 'undefined' && window.ROMAJI_TO_HIRAGANA_MAP)
        || (typeof globalThis !== 'undefined' && globalThis.ROMAJI_TO_HIRAGANA_MAP)
        || DEFAULT_ROMAJI_MAP;

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
     * Dịch tự động hai chiều Việt - Nhật / Nhật - Việt chuẩn 4-Phase Linear Anatomy
     * @param {string} text Đoạn văn bản cần dịch
     * @param {object} options Tùy chọn { sl, tl, timeoutMs }
     * @returns {Promise<{ original: string, translated: string, transliteration: string, sourceLang: string, targetLang: string, error?: string }>}
     */
    async translateText(text, options = {}) {
      // Phase 1: Guard Clauses & Fail-Fast
      if (!text || typeof text !== 'string') {
        return { original: '', translated: '', transliteration: '', sourceLang: '', targetLang: '' };
      }
      const rawTrim = text.trim();
      if (!rawTrim) {
        return { original: '', translated: '', transliteration: '', sourceLang: '', targetLang: '' };
      }

      // Phase 2: Data Normalization
      const normalizedQuery = rawTrim.replace(/\s+/g, ' ');
      const hasJapanese = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(normalizedQuery);
      const sourceLang = options.sl || (hasJapanese ? 'ja' : 'vi');
      const targetLang = options.tl || (hasJapanese ? 'vi' : 'ja');
      const cacheKey = `trans_${sourceLang}_${targetLang}_${normalizedQuery}`;

      // Cost-Ordered Short-Circuit: LRU In-Memory Cache (0ms)
      if (_maziiCache.has(cacheKey)) {
        return _maziiCache.get(cacheKey);
      }

      // Phase 3 & 4: Network Fetch with Timeout & Fallback (Imperative Shell)
      const timeoutMs = options.timeoutMs || 5000;
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;

      const endpoints = [
        `https://translate.google.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&dt=rm&q=${encodeURIComponent(normalizedQuery)}`,
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&dt=rm&q=${encodeURIComponent(normalizedQuery)}`
      ];

      let lastError = null;
      for (const url of endpoints) {
        try {
          const fetchOptions = {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
          };
          if (controller) {
            fetchOptions.signal = controller.signal;
          }

          const res = await fetch(url, fetchOptions);
          if (timer) clearTimeout(timer);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);

          const rawData = await res.json();
          // Phase 3 (Pure Extraction)
          const result = this._parseTranslatePayload(rawData, normalizedQuery, sourceLang, targetLang);
          if (result && result.translated) {
            this._setCache(cacheKey, result);
            return result;
          }
        } catch (err) {
          lastError = err;
        }
      }

      if (timer) clearTimeout(timer);
      console.warn('[DictionaryEngine] Lỗi dịch tự động:', lastError);
      return {
        original: normalizedQuery,
        translated: '',
        transliteration: '',
        sourceLang,
        targetLang,
        error: lastError ? lastError.message : 'Dịch thất bại'
      };
    },

    /**
     * Trích xuất cấu trúc dữ liệu bản dịch thuần túy (Pure Function)
     */
    _parseTranslatePayload(data, original, sourceLang, targetLang) {
      if (!Array.isArray(data) || !Array.isArray(data[0])) {
        return { original, translated: '', transliteration: '', sourceLang, targetLang };
      }

      let translated = '';
      let transliteration = '';

      // data[0] chứa các mảng phân đoạn dịch: [[translatedSegment, originalSegment, ...], ...]
      const segments = data[0];
      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        if (Array.isArray(seg)) {
          if (typeof seg[0] === 'string') {
            translated += seg[0];
          }
          if (typeof seg[2] === 'string' && !transliteration) {
            transliteration = seg[2];
          } else if (typeof seg[3] === 'string' && !transliteration) {
            transliteration = seg[3];
          }
        }
      }

      const detectedLang = typeof data[2] === 'string' ? data[2] : sourceLang;

      return {
        original,
        translated: translated.trim(),
        transliteration: transliteration.trim(),
        sourceLang: detectedLang,
        targetLang
      };
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
      recognition.continuous = options.continuous !== undefined ? Boolean(options.continuous) : true;
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

        for (let i = 0; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            finalTranscript += (res[0] && res[0].transcript) || '';
            for (let j = 0; j < res.length; ++j) {
              const alt = cleanText(res[j] && res[j].transcript);
              if (alt && !allAlternatives.includes(alt)) {
                allAlternatives.push(alt);
                // Nếu là tiếng Nhật và có chứa ký tự Latinh (Romaji) -> tự động bổ sung biến thể Hiragana
                if (lang === 'ja-JP' && /[a-zA-Z]/.test(alt)) {
                  const cleanRomaji = alt.replace(/['’\-_]/g, ' ');
                  const kana = this.romajiToHiragana(cleanRomaji).replace(/\s+/g, '');
                  if (kana && !allAlternatives.includes(kana)) {
                    allAlternatives.push(kana);
                  }
                }
              }
            }
          } else {
            interimTranscript += (res[0] && res[0].transcript) || '';
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
    },

    /**
     * Chuyển đổi chuỗi Hiragana sang Katakana
     */
    hiraganaToKatakana(str) {
      if (!str || typeof str !== 'string') return '';
      return str.replace(/[\u3041-\u3096]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) + 0x60));
    },

    /**
     * Chuyển đổi chuỗi Katakana sang Hiragana
     */
    katakanaToHiragana(str) {
      if (!str || typeof str !== 'string') return '';
      return str.replace(/[\u30a1-\u30f6]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
    },

    /**
     * Sinh các biến thể ngữ âm tiếng Nhật (Hiragana, Katakana, Trường âm Katakana) từ chuỗi nhập vào
     */
    toPhoneticVariants(raw) {
      if (!raw || typeof raw !== 'string') return { raw: '', hira: '', kata: '', kataLong: '' };
      const clean = raw.trim().toLowerCase();
      if (!clean) return { raw: '', hira: '', kata: '', kataLong: '' };
      const hasLatin = /[a-z]/.test(clean);
      const baseHira = hasLatin ? this.romajiToHiragana(clean) : this.katakanaToHiragana(clean);
      const baseKata = this.hiraganaToKatakana(baseHira);
      const kataLong = baseKata
        .replace(/([アカサタナハマヤラワガザダバパァャ])ア/g, '$1ー')
        .replace(/([イキシチニヒミリギジヂビピィ])イ/g, '$1ー')
        .replace(/([ウクスツヌフムユルグズヅブプゥュ])ウ/g, '$1ー')
        .replace(/([エケセテネヘメレゲゼデベペェ])(エ|イ)/g, '$1ー')
        .replace(/([オコソトノホモヨロゴゾドボポォョ])(オ|ウ)/g, '$1ー');
      return { raw: clean, hira: baseHira, kata: baseKata, kataLong };
    },

    /**
     * Phân tích ngược (De-inflection) động từ & tính từ đang chia thể về Thể từ điển gốc (N5-N4)
     * @param {string} input Chuỗi tiếng Nhật (Kanji/Hiragana hoặc Romaji)
     * @returns {Array<{ root: string, formLabel: string, pos: string, group?: string }>}
     */
    deinflectJapanese(input) {
      if (!input || typeof input !== 'string') return [];
      const trimmed = input.trim();
      if (!trimmed || trimmed.length < 2) return [];
      const query = /^[a-zA-Z]+$/.test(trimmed) ? this.romajiToHiragana(trimmed) : this.katakanaToHiragana(trimmed);
      const results = [];
      const seen = new Set();
      const addCandidate = (rootWord, formLabel, pos, group = '') => {
        if (!rootWord || rootWord.length < 2 || rootWord === query) return;
        const key = `${rootWord}|${formLabel}`;
        if (seen.has(key)) return;
        seen.add(key);
        results.push({ root: rootWord, formLabel, pos, group });
      };

      // 1. Nhóm 3 bất quy tắc (する / くる) & Kính ngữ
      const irregMap = [
        { suffixes: ['します', 'しました', 'しません', 'して', 'しています', 'した', 'しない', 'しなかった', 'しよう', 'しましょう', 'しろ', 'できる', 'できます', 'される', 'させる'], replace: 'する', label: 'Chia từ động từ Nhóm III (する)' },
        { suffixes: ['きます', 'きました', 'きません', 'きて', 'しています', 'きた', 'こない', 'こなかった', 'こよう', 'こられる', 'こさせる', 'こい'], replace: 'くる', label: 'Chia từ động từ Nhóm III (くる)' },
        { suffixes: ['来ます', '来ました', '来ません', '来て', '来た', '来ない', '来なかった', '来よう', '来られる'], replace: '来る', label: 'Chia từ động từ Nhóm III (来る)' },
        { suffixes: ['いきます', 'いきました', 'いって', 'いった', 'いかない', 'いかなかった', 'いこう', 'いける'], replace: 'いく', label: 'Chia từ động từ đặc biệt (いく)' },
        { suffixes: ['行きます', '行きました', '行って', '行った', '行かない', '行かなかった', '行こう', '行ける'], replace: '行く', label: 'Chia từ động từ đặc biệt (行く)' },
        { suffixes: ['よくない', 'よかった', 'よくなかった', 'よくて'], replace: 'いい', label: 'Chia từ tính từ đặc biệt (いい / よい)' }
      ];
      for (const ir of irregMap) {
        for (const sfx of ir.suffixes) {
          if (query === sfx || (query.endsWith(sfx) && sfx.length >= 2)) {
            const prefix = query.slice(0, query.length - sfx.length);
            addCandidate(prefix + ir.replace, `${ir.label} [${sfx}]`, 'verb', 'III');
          }
        }
      }

      // 2. Quy tắc hậu tố Động từ Nhóm I (Godan) & Nhóm II (Ichidan)
      const iRowToU = { 'い': 'う', 'き': 'く', 'ぎ': 'ぐ', 'し': 'す', 'ち': 'つ', 'に': 'ぬ', 'び': 'ぶ', 'み': 'む', 'り': 'る' };
      const aRowToU = { 'わ': 'う', 'か': 'く', 'が': 'ぐ', 'さ': 'す', 'た': 'つ', 'な': 'ぬ', 'ば': 'ぶ', 'ま': 'む', 'ら': 'る' };
      const eRowToU = { 'え': 'う', 'け': 'く', 'げ': 'ぐ', 'せ': 'す', 'て': 'つ', 'ね': 'ぬ', 'べ': 'ぶ', 'め': 'む', 'れ': 'る' };
      const oRowToU = { 'お': 'う', 'こ': 'く', 'ご': 'ぐ', 'そ': 'す', 'と': 'つ', 'の': 'ぬ', 'ぼ': 'ぶ', 'も': 'む', 'ろ': 'る' };

      const masuSuffixes = [
        { s: 'ませんでした', label: 'Thể ます quá khứ phủ định' },
        { s: 'ましょう', label: 'Thể ます rủ rê (〜ましょう)' },
        { s: 'ました', label: 'Thể ます quá khứ (〜ました)' },
        { s: 'ません', label: 'Thể ます phủ định (〜ません)' },
        { s: 'たいです', label: 'Thể mong muốn (〜たい)' },
        { s: 'たい', label: 'Thể mong muốn (〜たい)' },
        { s: 'ます', label: 'Thể lịch sự (〜ます)' }
      ];
      for (const m of masuSuffixes) {
        if (query.endsWith(m.s) && query.length > m.s.length) {
          const stem = query.slice(0, -m.s.length);
          addCandidate(stem + 'る', `${m.label} (Nhóm II)`, 'verb', 'II');
          const last = stem.slice(-1);
          if (iRowToU[last]) {
            addCandidate(stem.slice(0, -1) + iRowToU[last], `${m.label} (Nhóm I)`, 'verb', 'I');
          }
        }
      }

      const teTaRules = [
        { suffixes: ['っています', 'っていた', 'ってください', 'ってもいい', 'って'], endings: ['う', 'つ', 'る'], label: 'Thể て (〜って)' },
        { suffixes: ['ったことがあります', 'ったほうがいい', 'った'], endings: ['う', 'つ', 'る'], label: 'Thể た quá khứ (〜った)' },
        { suffixes: ['んでいます', 'んでいた', 'んでください', 'んで'], endings: ['む', 'ぶ', 'ぬ'], label: 'Thể て (〜んで)' },
        { suffixes: ['んだことがあります', 'んだ'], endings: ['む', 'ぶ', 'ぬ'], label: 'Thể た quá khứ (〜んだ)' },
        { suffixes: ['いています', 'いてください', 'いて'], endings: ['く'], label: 'Thể て (〜いて)' },
        { suffixes: ['いたことがあります', 'いた'], endings: ['く'], label: 'Thể た quá khứ (〜いた)' },
        { suffixes: ['いでいます', 'いでください', 'いで'], endings: ['ぐ'], label: 'Thể て (〜いで)' },
        { suffixes: ['いだ'], endings: ['ぐ'], label: 'Thể た quá khứ (〜いだ)' },
        { suffixes: ['しています', 'してください', 'して'], endings: ['す'], label: 'Thể て (〜して)' },
        { suffixes: ['した'], endings: ['す'], label: 'Thể た quá khứ (〜した)' }
      ];
      for (const rule of teTaRules) {
        for (const sfx of rule.suffixes) {
          if (query.endsWith(sfx) && query.length > sfx.length) {
            const base = query.slice(0, -sfx.length);
            for (const endChar of rule.endings) {
              addCandidate(base + endChar, `${rule.label} (Nhóm I)`, 'verb', 'I');
            }
          }
        }
      }

      const ichidanTeTa = [
        { s: 'ています', label: 'Thể tiếp diễn (〜ています)' },
        { s: 'てください', label: 'Thể yêu cầu (〜てください)' },
        { s: 'てもいい', label: 'Thể xin phép (〜てもいい)' },
        { s: 'てはいけない', label: 'Thể cấm đoán (〜てはいけない)' },
        { s: 'たことがあります', label: 'Thể kinh nghiệm (〜たことがある)' },
        { s: 'たほうがいい', label: 'Thể khuyên bảo (〜たほうがいい)' },
        { s: 'られる', label: 'Thể Khả năng / Bị động (〜られる)' },
        { s: 'られます', label: 'Thể Khả năng / Bị động (〜られます)' },
        { s: 'させる', label: 'Thể Sai khiến (〜させる)' },
        { s: 'よう', label: 'Thể Ý chí (〜よう)' },
        { s: 'て', label: 'Thể て (Nhóm II)' },
        { s: 'た', label: 'Thể た quá khứ (Nhóm II)' }
      ];
      for (const ic of ichidanTeTa) {
        if (query.endsWith(ic.s) && query.length > ic.s.length) {
          const stem = query.slice(0, -ic.s.length);
          addCandidate(stem + 'る', ic.label, 'verb', 'II');
        }
      }

      const naiSuffixes = [
        { s: 'なければなりません', label: 'Thể nghĩa vụ (〜なければならない)' },
        { s: 'なくてもいい', label: 'Thể không cần (〜なくてもいい)' },
        { s: 'ないでください', label: 'Thể yêu cầu phủ định (〜ないで)' },
        { s: 'なかった', label: 'Thể quá khứ phủ định (〜なかった)' },
        { s: 'ない', label: 'Thể phủ định ngắn (〜ない)' },
        { s: 'れる', label: 'Thể Bị động Nhóm I (〜れる)' },
        { s: 'せる', label: 'Thể Sai khiến Nhóm I (〜せる)' }
      ];
      for (const ns of naiSuffixes) {
        if (query.endsWith(ns.s) && query.length > ns.s.length) {
          const stem = query.slice(0, -ns.s.length);
          if (ns.s.includes('نا') || ns.s.startsWith('な')) {
            addCandidate(stem + 'る', `${ns.label} (Nhóm II)`, 'verb', 'II');
          }
          const last = stem.slice(-1);
          if (aRowToU[last]) {
            addCandidate(stem.slice(0, -1) + aRowToU[last], `${ns.label} (Nhóm I)`, 'verb', 'I');
          }
        }
      }

      // Thể khả năng & ý chí Nhóm I
      if (query.endsWith('루') || (query.endsWith('る') && query.length >= 3)) {
        const prev = query.slice(-2, -1);
        if (eRowToU[prev]) {
          addCandidate(query.slice(0, -2) + eRowToU[prev], 'Thể Khả năng Nhóm I (〜える)', 'verb', 'I');
        }
      }
      if (query.endsWith('う') && query.length >= 3) {
        const prev = query.slice(-2, -1);
        if (oRowToU[prev]) {
          addCandidate(query.slice(0, -2) + oRowToU[prev], 'Thể Ý chí Nhóm I (〜おう)', 'verb', 'I');
        }
      }

      // 3. Tính từ đuôi い & đuôi な
      const iAdjSuffixes = [
        { s: 'くなかったです', label: 'Tính từ い quá khứ phủ định' },
        { s: 'くなかった', label: 'Tính từ い quá khứ phủ định (〜くなかった)' },
        { s: 'くないです', label: 'Tính từ い phủ định (〜くない)' },
        { s: 'くない', label: 'Tính từ い phủ định (〜くない)' },
        { s: 'かったです', label: 'Tính từ い quá khứ (〜かった)' },
        { s: 'かった', label: 'Tính từ い quá khứ (〜かった)' },
        { s: 'くて', label: 'Tính từ い nối câu (〜くて)' }
      ];
      for (const ia of iAdjSuffixes) {
        if (query.endsWith(ia.s) && query.length > ia.s.length) {
          const stem = query.slice(0, -ia.s.length);
          addCandidate(stem + 'い', ia.label, 'adj-i');
        }
      }

      const naAdjSuffixes = [
        { s: 'ではありませんでした', label: 'Tính từ な quá khứ phủ định' },
        { s: 'じゃありませんでした', label: 'Tính từ な quá khứ phủ định' },
        { s: 'ではなかった', label: 'Tính từ な quá khứ phủ định' },
        { s: 'じゃなかった', label: 'Tính từ な quá khứ phủ định' },
        { s: 'ではありません', label: 'Tính từ な phủ định' },
        { s: 'じゃありません', label: 'Tính từ な phủ định' },
        { s: 'ではない', label: 'Tính từ な phủ định' },
        { s: 'じゃない', label: 'Tính từ な phủ định' },
        { s: 'でした', label: 'Tính từ な quá khứ lịch sự' },
        { s: 'だった', label: 'Tính từ な quá khứ ngắn' }
      ];
      for (const na of naAdjSuffixes) {
        if (query.endsWith(na.s) && query.length > na.s.length) {
          const stem = query.slice(0, -na.s.length);
          addCandidate(stem, na.label, 'adj-na');
        }
      }

      return results.slice(0, 6);
    },

    /**
     * Tính khoảng cách chỉnh sửa Levenshtein có giới hạn (Bounded Damerau-Levenshtein) để bắt lỗi gõ phím
     */
    computeEditDistance(a, b, maxDist = 2) {
      if (!a || !b) return 99;
      if (a === b) return 0;
      const lenA = a.length;
      const lenB = b.length;
      if (Math.abs(lenA - lenB) > maxDist) return maxDist + 1;
      const dp = Array.from({ length: lenA + 1 }, () => new Array(lenB + 1).fill(0));
      for (let i = 0; i <= lenA; i++) dp[i][0] = i;
      for (let j = 0; j <= lenB; j++) dp[0][j] = j;
      for (let i = 1; i <= lenA; i++) {
        let rowMin = 99;
        for (let j = 1; j <= lenB; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
          if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
            dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
          }
          if (dp[i][j] < rowMin) rowMin = dp[i][j];
        }
        if (rowMin > maxDist) return maxDist + 1;
      }
      return dp[lenA][lenB];
    },

    /**
     * Phân tích cú pháp truy vấn tìm kiếm Master (Command DSL & Shortcut Parser)
     * Hỗ trợ: @vocab, @kanji, @grammar, @kaiwa, @ref, @exam, @dokkai, @quiz, @radical
     * và phím tắt điều hướng nhanh: "bài 15", "b15", "kaiwa 5", "kanji 10", "đề n5", "kính ngữ"...
     */
    parseSearchDSL(rawQuery) {
      if (!rawQuery || typeof rawQuery !== 'string') {
        return { raw: '', cleanQuery: '', scope: 'all', directCommand: null };
      }
      const trimmed = rawQuery.trim();
      let scope = 'all';
      let cleanQuery = trimmed;

      const prefixMap = {
        '@vocab': 'vocab', '@tu': 'vocab', '@tuvung': 'vocab', 'v:': 'vocab',
        '@kanji': 'kanji', '@han': 'kanji', 'k:': 'kanji',
        '@grammar': 'grammar', '@nguphap': 'grammar', 'g:': 'grammar',
        '@kaiwa': 'kaiwa', '@hoithoai': 'kaiwa',
        '@ref': 'ref', '@tracuu': 'ref', '@bang': 'ref',
        '@exam': 'exam', '@thi': 'exam', '@jlpt': 'exam',
        '@dokkai': 'dokkai', '@doc': 'dokkai',
        '@quiz': 'quiz', '@baitap': 'quiz',
        '@radical': 'radical', '@bothu': 'radical'
      };

      const firstToken = trimmed.split(/\s+/)[0].toLowerCase();
      if (prefixMap[firstToken]) {
        scope = prefixMap[firstToken];
        cleanQuery = trimmed.slice(firstToken.length).trim();
      }

      const norm = cleanQuery.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim();
      let directCommand = null;

      const lessonMatch = norm.match(/^(?:bai|bai hoc|lesson|b)\s*(\d{1,2})$/);
      const kaiwaMatch = norm.match(/^(?:kaiwa|hoi thoai|ht)\s*(\d{1,2})$/);
      const kanjiMatch = norm.match(/^(?:kanji|chu han|ch)\s*(\d{1,2})$/);
      const quizMatch = norm.match(/^(?:quiz|bai tap|trac nghiem|bt)\s*(\d{1,2})$/);
      const dokkaiMatch = norm.match(/^(?:dokkai|doc hieu|dh)\s*(\d{1,2})$/);

      if (lessonMatch) {
        const n = Math.max(1, Math.min(50, parseInt(lessonMatch[1], 10)));
        directCommand = { targetId: `bai-${n}`, title: `Mở nhanh: Bài ${n} (Từ vựng & Ngữ pháp)`, category: 'Điều Hướng Nhanh', badge: `Bài ${n}` };
      } else if (kaiwaMatch) {
        const n = Math.max(1, Math.min(50, parseInt(kaiwaMatch[1], 10)));
        directCommand = { targetId: `kaiwa-${n}`, title: `Mở nhanh: Hội thoại Kaiwa Bài ${n}`, category: 'Điều Hướng Nhanh', badge: `Kaiwa ${n}` };
      } else if (kanjiMatch) {
        const n = Math.max(1, Math.min(50, parseInt(kanjiMatch[1], 10)));
        directCommand = { targetId: `kanji-${n}`, title: `Mở nhanh: Chữ Hán & Mẹo nhớ Bài ${n}`, category: 'Điều Hướng Nhanh', badge: `Kanji ${n}` };
      } else if (quizMatch) {
        const n = Math.max(1, Math.min(50, parseInt(quizMatch[1], 10)));
        directCommand = { targetId: `quiz-${n}`, title: `Mở nhanh: Trắc nghiệm Phản xạ Bài ${n}`, category: 'Điều Hướng Nhanh', badge: `Quiz ${n}` };
      } else if (dokkaiMatch) {
        const n = Math.max(1, Math.min(50, parseInt(dokkaiMatch[1], 10)));
        directCommand = { targetId: `dokkai-${n}`, title: `Mở nhanh: Đọc hiểu Dokkai Bài ${n}`, category: 'Điều Hướng Nhanh', badge: `Dokkai ${n}` };
      }

      return { raw: trimmed, cleanQuery, scope, directCommand };
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
