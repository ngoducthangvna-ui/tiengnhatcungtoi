/**
 * KaiwaEngine - Hệ thống Hội thoại Tương tác, Shadowing, Nhập vai, Chấm Phát âm & Biểu đồ Ngữ điệu (Bài 1 - 50)
 * Architecture: Decoupled UMD Module (Browser & Node.js Test Compatible)
 */
(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(root);
  } else {
    root.KaiwaEngine = factory(root);
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this), function(root) {
  'use strict';

  const STORAGE_KEY = 'minna_kaiwa_progress_v1';
  const ASSET_VERSION = '20261121_18';

  function resolveSpriteRuntimeUrl(audioSrc) {
    if (!audioSrc || typeof audioSrc !== 'string') return audioSrc;
    if (/^(?:data|blob):/i.test(audioSrc) || /[?&]v=/.test(audioSrc)) return audioSrc;
    const loc = (typeof window !== 'undefined' && window.location) ? window.location : (root && root.location);
    const proto = loc && loc.protocol;
    if (proto && /^https?:$/i.test(proto)) {
      return audioSrc + (audioSrc.includes('?') ? '&' : '?') + 'v=' + ASSET_VERSION;
    }
    return audioSrc;
  }

  // Ký hiệu số Zen tối giản phong cách Nhật Bản cho tab Luyện tập C
  const ZEN_CIRCLED_NUMS = ['①', '②', '③', '④', '⑤'];

  // Helper trích xuất nhanh gợi ý ngữ cảnh từ nhãn Mẫu thay thế
  function extractRenshuuSubHint(label) {
    if (!label) return '';
    const m = String(label).match(/\(([^)]+)\)/);
    if (m && m[1]) return m[1].trim();
    return String(label).replace(/^Mẫu\s*\d+\s*:?\s*/i, '').trim();
  }

  function getAcousticAnalyzer() {
    if (root && root.AcousticAnalyzer) return root.AcousticAnalyzer;
    if (typeof require === 'function') {
      try {
        const mod = require('./acoustic_analyzer.js');
        if (root) root.AcousticAnalyzer = mod;
        return mod;
      } catch (e) {}
    }
    return null;
  }

  // Helper tạo class chuẩn cho speaker badge (tự động phân biệt avatar tròn A, B và pill tên tiếng Nhật)
  function getSpkBadgeClass(badgeContent, color) {
    const raw = String(badgeContent || '').trim();
    const isSingleChar = raw.length === 1 && !raw.includes('<');
    const isLatinCode = /^[A-Za-z0-9]{1,2}$/.test(raw);
    const isAvatar = isSingleChar || isLatinCode;
    return `kaiwa-spk-badge ${isAvatar ? 'kaiwa-spk-avatar' : ''} kaiwa-spk-${color || 'blue'}`;
  }

  // HỆ THỐNG BIỂU TƯỢNG VECTOR SVG ĐỒNG BỘ PHONG CÁCH TỐI GIẢN TOÀN TRANG (FEATHER / LUCIDE STYLE)
  const KAIWA_ICONS = {
    speaker: `<svg class="icon-svg speaker-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path class="icon-detail" d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path class="icon-detail" d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`,
    userVoice: `<svg class="icon-svg user-voice-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14V12A8 8 0 0 1 20 12V14 M4 12.5C5.5 9 8.5 7 12 7C15.5 7 18.5 9 20 12.5 M4 13.5H6.5A1.5 1.5 0 0 1 8 15V18.5A1.5 1.5 0 0 1 6.5 20H5.5A1.5 1.5 0 0 1 4 18.5V13.5Z M16 15A1.5 1.5 0 0 1 17.5 13.5H20V18.5A1.5 1.5 0 0 1 18.5 20H17.5A1.5 1.5 0 0 1 16 18.5V15Z"></path></svg>`,
    mic: `<svg class="icon-svg mic-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line><line x1="8" y1="22" x2="16" y2="22"></line></svg>`,
    info: `<svg class="icon-svg info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    repeat: `<svg class="icon-svg repeat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 2 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 22 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`,
    play: `<svg class="icon-svg play-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    masterPlay: `<svg class="icon-svg play-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    pause: `<svg class="icon-svg pause-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
    close: `<svg class="icon-svg close-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    check: `<svg class="icon-svg check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`
  };

  const state = {
    currentLessonId: 'kaiwa-1',
    activeTab: 'dialogue', // 'dialogue' | 'renshuu'
    showFurigana: true,
    viewMode: 'full', // 'full' | 'compact'
    slowAudio: false,
    hideVi: false,
    maskJp: false,
    practiceMode: 'free', // 'free' | 'shadowing' | 'roleplay'
    roleplayCharId: null,
    isRoleplaying: false,
    isPlayingAll: false,
    playingLineId: null,
    playingUserVoiceLineId: null,
    loopingLineId: null,
    recordingLineId: null,
    stoppingRecordingLineId: null,
    openEvalByLine: {},
    openExpByLine: {},
    activeExpLineId: null,
    rcSubIndex: {}, // rc.id -> selected substitution index
    quizAnswers: {}, // q.id -> selected option index
    userBlobs: {}, // lineId -> ObjectURL of recorded audio
    progress: loadProgress()
  };

  let masterTimer = null;
  let roleplayTimer = null;
  let activeRecognition = null;
  let activeRecording = null;
  let activeRecognitionEndTimer = null;
  const recognitionOnlyLines = new Set();
  const latestRecordingByLine = new Map();
  const clipAttemptByLine = new Map();
  const scoreAttemptByLine = new Map();
  let activeMediaRecorder = null;
  let activeMediaStream = null;
  let pendingRecorderStop = false;
  let deferredStreamStopTimer = null;
  let activeUserAudio = null;
  let activeAudioCtx = null;
  let activePitchTimer = null;
  let activeSilenceTimer = null;
  let activeMaxRecordTimer = null;
  let activeFinishRecording = null;
  let activeForceStopRecording = null;
  const SILENCE_TIMEOUT_MS = 5000;
  const MAX_RECORD_TIMEOUT_MS = 30000;
  const RECOGNITION_TAIL_MS = 700;
  let capturedPitchSamples = [];
  let speakerPressTimer = null;
  let speakerLongPressTriggered = false;
  let bsTouchStartY = 0;
  let bsTouchCurrentY = 0;
  const spriteAudioCache = {};
  const spriteBufferCache = {};
  const spriteBufferPending = {};
  let spriteAudioCtx = null;
  let activeSpriteSource = null;
  let activeSpriteAudio = null;
  let activeSpriteTimer = null;
  let activeSpriteLoadTimer = null;
  let activeSpriteRafId = null;
  let activeSpriteTimeUpdate = null;
  let activeSpriteEndHandler = null;
  let activeSpriteErrHandler = null;
  let activeSpriteSeekedHandler = null;
  let activeContinuousAudio = null;
  let activeContinuousRafId = null;
  let activeContinuousLoadTimer = null;
  let activeContinuousHandlers = null;
  let activeContinuousBounds = null;
  let lastMountContainer = null;
  let lastSyncedActiveLineId = null;
  let currentKaiwaSessionId = 0;

  function loadProgress() {
    const empty = { scores: {}, evalData: {} };
    try {
      let progress;
      if (root.StorageEngine && typeof root.StorageEngine.secureGetJson === 'function') {
        progress = root.StorageEngine.secureGetJson(STORAGE_KEY, empty);
      } else if (root.localStorage) {
        const raw = root.localStorage.getItem(STORAGE_KEY);
        if (raw) progress = JSON.parse(raw);
      }
      if (!progress) return empty;
      // Older versions stored recognition errors as zero-point attempts.
      for (const [lineId, result] of Object.entries(progress.evalData || {})) {
        if (result?.score === 0 && result.errorCode) {
          delete progress.evalData[lineId];
          if (progress.scores?.[lineId] === 0) delete progress.scores[lineId];
        }
      }
      return progress;
    } catch (e) {}
    return empty;
  }

  function saveProgress() {
    try {
      if (root.StorageEngine && typeof root.StorageEngine.secureSet === 'function') {
        root.StorageEngine.secureSet(STORAGE_KEY, JSON.stringify(state.progress));
        return;
      }
      if (root.localStorage) {
        root.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
      }
    } catch (e) {}
  }

  function reloadUserProgress() {
    state.progress = loadProgress();
    return state.progress;
  }

  function ensureStylesheetLoaded() {
    if (typeof document === 'undefined' || !document.head) return;
    if (document.getElementById('kaiwa-engine-stylesheet')) return;
    const link = document.createElement('link');
    link.id = 'kaiwa-engine-stylesheet';
    link.rel = 'stylesheet';
    link.href = `src/kaiwa_style.css?v=${ASSET_VERSION}`;
    document.head.appendChild(link);
  }

  function stripHtml(html) {
    if (!html) return '';
    return String(html)
      .replace(/<rt>[\s\S]*?<\/rt>/g, '')
      .replace(/<[^>]+>/g, '')
      .trim();
  }

  /**
   * Chuẩn hóa văn bản tiếng Nhật tự nhiên cho bộ tổng hợp giọng nói (TTS):
   * - Giữ âm đọc Katakana cho các từ viết tắt Latinh (<ruby>IMC<rt>アイエムシー</rt></ruby> -> アイエムシー)
   * - Chuẩn hóa số phòng / số đếm đặc biệt (408 -> よんまるはち, 305号室 -> さんまるごごうしつ)
   * - Tự động chuyển dấu chấm ở cuối câu hỏi (か。 -> か？) để kích hoạt ngữ điệu hỏi ↗
   * - Loại bỏ khoảng trắng sách giáo khoa giữa các từ tiếng Nhật để câu đọc nối âm mượt mà
   */
  function buildNaturalSpeechText(htmlOrRaw) {
    if (!htmlOrRaw) return '';
    if (root.AudioEngine && typeof root.AudioEngine.buildNaturalSpeechText === 'function') {
      return root.AudioEngine.buildNaturalSpeechText(htmlOrRaw);
    }
    let text = String(htmlOrRaw)
      .replace(/<ruby[^>]*>\s*([A-Z]{2,})\s*<rt[^>]*>(.*?)<\/rt>\s*<\/ruby>/g, '$2')
      .replace(/<ruby[^>]*>\s*何\s*<rt[^>]*>(いく)<\/rt>\s*<\/ruby>/g, '$1')
      .replace(/<rt>[\s\S]*?<\/rt>/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/(「[^」]+」)\s*[\(（][一-龯々]+[\)）]/g, '$1')
      .trim();

    if (root.AudioEngine && typeof root.AudioEngine.naturalizePhonetics === 'function') {
      text = root.AudioEngine.naturalizePhonetics(text);
    }

    if (root.AudioEngine && typeof root.AudioEngine.prepareProsodyPacedJapaneseSpeech === 'function') {
      text = root.AudioEngine.prepareProsodyPacedJapaneseSpeech(text);
    } else {
      // Fallback: tự động chuyển dấu chấm ở câu hỏi sang dấu hỏi
      text = text.replace(/([^。！？]+(?:ですか|ますか|でしょうか|ませんか|ましょうか|んですか|のですか|どこですか|何ですか|だれですか|どなたですか|いくらですか|いくつですか|どうですか|どうでしたか))。/g, '$1？');
    }

    // Khử khoảng trắng sách giáo khoa giữa các ký tự tiếng Nhật để không bị ngắt nhịp từng từ
    text = text
      .replace(/([ぁ-んァ-ヶー一-龯々。、！？「」『』（）])\s+(?=[ぁ-んァ-ヶー一-龯々0-9A-Za-z「『（])/g, '$1')
      .replace(/([0-9A-Za-z])\s+(?=[ぁ-んァ-ヶー一-龯々])/g, '$1')
      .trim();

    return text;
  }

  function isJpPunctOrSpace(ch) {
    return /[。、！？「」『』（）()\s・…〜～]/u.test(ch);
  }

  function katakanaToHiragana(str) {
    return String(str || '').replace(/[\u30a1-\u30f6]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) - 0x60);
    });
  }

  function normalizeJapaneseForCompare(str) {
    if (!str) return '';
    return stripHtml(str)
      .replace(/[。、！？「」『』（）()\s・…〜～]/g, '')
      .trim();
  }

  function extractKanaReadingFromRubyHtml(jpHtml) {
    if (!jpHtml) return '';
    const withRubyReplaced = String(jpHtml).replace(/<ruby>([\s\S]*?)<rt>([\s\S]*?)<\/rt><\/ruby>/g, '$2');
    return katakanaToHiragana(
      withRubyReplaced
        .replace(/<[^>]+>/g, '')
        .replace(/[。、！？「」『』（）()\s・…〜～]/g, '')
        .trim()
    );
  }

  /**
   * Chuẩn hóa chữ số Ả Rập (0-9) hoặc chữ số Hán tự đơn giản trong kết quả ASR sang Hiragana
   */
  function normalizeNumbersToHiragana(str) {
    if (!str) return '';
    let s = String(str);
    // Chuyển đổi full-width digits sang half-width
    s = s.replace(/[０-９]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0));
    const compoundMap = {
      '10000': 'いちまん', '1000': 'せん', '3000': 'さんぜん', '8000': 'はっせん',
      '100': 'ひゃく', '300': 'さんびゃく', '600': 'ろっぴゃく', '800': 'はっぴゃく',
      '20': 'にじゅう', '30': 'さんじゅう', '40': 'よんじゅう', '50': 'ごじゅう',
      '10': 'じゅう', '11': 'じゅういち', '12': 'じゅうに', '14': 'じゅうよん',
      '1階': 'いっかい', '2階': 'にかい', '3階': 'さんがい', '4階': 'よんかい', '6階': 'ろっかい',
      '1時': 'いちじ', '2時': 'にじ', '3時': 'さんじ', '4時': 'よじ', '5時': 'ごじ',
      '6時': 'ろくじ', '7時': 'しちじ', '8時': 'はちじ', '9時': 'くじ', '10時': 'じゅうじ',
      '1人': 'ひとり', '2人': 'ふたり', '1つ': 'ひとつ', '2つ': 'ふたつ', '3つ': 'みっつ'
    };
    Object.keys(compoundMap).sort((a, b) => b.length - a.length).forEach(k => {
      if (s.includes(k)) s = s.split(k).join(compoundMap[k]);
    });
    const digitMap = {
      '0': 'れい', '1': 'いち', '2': 'に', '3': 'さん', '4': 'よん',
      '5': 'ご', '6': 'ろく', '7': 'なな', '8': 'はち', '9': 'きゅう'
    };
    return s.replace(/[0-9]/g, d => digitMap[d] || d);
  }

  /**
   * Bóc tách danh sách đơn vị ký tự hiển thị kèm cách đọc Hiragana chuẩn từ HTML chứa <ruby>
   */
  function parseTargetUnits(targetInput, optionalRubyHtml) {
    const sourceHtml = (optionalRubyHtml && String(optionalRubyHtml).includes('<ruby>'))
      ? String(optionalRubyHtml)
      : String(targetInput || '');

    const units = [];
    const tokens = sourceHtml.match(/(<ruby>[\s\S]*?<\/ruby>|<[^>]+>|[^<])/g) || [];

    for (let i = 0; i < tokens.length; i++) {
      const tk = tokens[i];
      if (tk.startsWith('<ruby>')) {
        const m = tk.match(/^<ruby>([\s\S]*?)<rt>([\s\S]*?)<\/rt><\/ruby>$/i);
        if (m) {
          const baseClean = m[1].replace(/<[^>]+>/g, '').trim();
          const rtClean = katakanaToHiragana(m[2].replace(/<[^>]+>/g, '').trim());
          const baseChars = Array.from(baseClean).filter(c => !isJpPunctOrSpace(c));
          const rtChars = Array.from(rtClean).filter(c => !isJpPunctOrSpace(c));
          if (baseChars.length === 1) {
            units.push({ char: baseChars[0], hira: rtChars.join('') || katakanaToHiragana(baseChars[0]) });
          } else if (baseChars.length > 1) {
            // Chia đều cụm furigana cho từng chữ Kanji trong thẻ ruby
            const step = rtChars.length / baseChars.length;
            baseChars.forEach((bCh, bIdx) => {
              const start = Math.round(bIdx * step);
              const end = Math.max(start + 1, Math.round((bIdx + 1) * step));
              const sliceHira = rtChars.slice(start, end).join('') || katakanaToHiragana(bCh);
              units.push({ char: bCh, hira: sliceHira });
            });
          }
          continue;
        }
      }
      if (tk.startsWith('<')) continue;
      if (!isJpPunctOrSpace(tk)) {
        units.push({ char: tk, hira: katakanaToHiragana(tk) });
      }
    }
    return units;
  }

  /**
   * Tách chuỗi Hiragana thành các đơn vị Mora (拍 - Haku) chuẩn ngữ âm học Nhật Bản:
   * Âm ghép (きゃ, しゅ, ちょ) tính là 1 mora; Xúc âm (っ), Trường âm (ー, う...), Âm mũi (ん) tính là 1 mora độc lập.
   */
  function splitIntoMoraTokens(str) {
    if (!str) return [];
    const s = katakanaToHiragana(str);
    const moras = [];
    const len = s.length;
    for (let i = 0; i < len; i++) {
      const ch = s[i];
      if (isJpPunctOrSpace(ch)) continue;
      const next = i + 1 < len ? s[i + 1] : '';
      if (next && /[ゃゅょゎぁぃぅぇぉ]/.test(next)) {
        moras.push(ch + next);
        i++;
      } else {
        moras.push(ch);
      }
    }
    return moras;
  }

  /**
   * Kiểm tra hai âm tiết Hiragana/Mora có gần âm nhau hay không (biến âm đục/bán đục, xúc âm, âm ghép)
   */
  function isSimilarKana(a, b) {
    if (!a || !b) return false;
    if (a === b) return true;
    const baseVoicingMap = {
      'が':'か','ぎ':'き','ぐ':'く','げ':'け','ご':'こ',
      'ざ':'さ','じ':'し','ず':'す','ぜ':'せ','ぞ':'そ',
      'だ':'た','ぢ':'ち','づ':'つ','で':'て','ど':'と',
      'ば':'は','び':'ひ','ぶ':'ふ','べ':'へ','ぼ':'ほ',
      'ぱ':'は','ぴ':'ひ','ぷ':'ふ','ぺ':'へ','ぽ':'ほ',
      'づ':'ず','ぢ':'じ'
    };
    if (baseVoicingMap[a] && baseVoicingMap[a] === (baseVoicingMap[b] || b)) return true;
    if (baseVoicingMap[b] && baseVoicingMap[b] === (baseVoicingMap[a] || a)) return true;

    // Âm ghép so với âm đơn (như ちょ vs ち, しゃ vs し)
    if (a.length === 2 && b.length === 1 && a[0] === b) return true;
    if (b.length === 2 && a.length === 1 && b[0] === a) return true;

    return false;
  }

  /**
   * Đếm tổng số Trường âm (長音) trong chuỗi Mora, bao gồm cả dấu「ー」Katakana và nguyên âm kéo dài Hiragana (おう, えい, ょう, ゅう, ああ, いい, うう...)
   */
  function countJapaneseLongVowels(moraArr) {
    if (!Array.isArray(moraArr) || moraArr.length === 0) return { dashCount: 0, hiraLongCount: 0, total: 0, positions: [] };
    const oEndMoras = new Set(['お','こ','ご','そ','ぞ','と','ど','の','ほ','ぼ','ぽ','も','よ','ろ','ょ','きょ','ぎょ','しょ','じょ','ちょ','にょ','ひょ','びょ','ぴょ','みょ','りょ']);
    const uEndMoras = new Set(['う','く','ぐ','す','ず','つ','づ','ぬ','ふ','ぶ','ぷ','む','ゆ','る','ゅ','きゅ','ぎゅ','しゅ','じゅ','ちゅ','にゅ','ひゅ','びゅ','ぴゅ','みゅ','りゅ']);
    const eEndMoras = new Set(['え','け','げ','せ','ぜ','て','で','ね','へ','べ','ぺ','め','れ']);
    const iEndMoras = new Set(['い','き','ぎ','し','じ','ち','ぢ','に','ひ','び','ぴ','み','り']);
    const aEndMoras = new Set(['あ','か','が','さ','ざ','た','だ','な','は','ば','ぱ','ま','や','ら','わ','ゃ','きゃ','ぎゃ','しゃ','じゃ','ちゃ','にゃ','ひゃ','びゃ','ぴゃ','みゃ','りゃ']);

    let dashCount = 0;
    let hiraLongCount = 0;
    const positions = [];

    for (let i = 0; i < moraArr.length; i++) {
      const m = moraArr[i];
      const prev = i > 0 ? moraArr[i - 1] : '';
      if (m === 'ー') {
        dashCount++;
        positions.push(`${prev}ー`);
      } else if (i > 0) {
        if ((m === 'う' || m === 'お') && oEndMoras.has(prev)) {
          hiraLongCount++;
          positions.push(`${prev}${m}`);
        } else if (m === 'у' || (m === 'う' && uEndMoras.has(prev))) {
          hiraLongCount++;
          positions.push(`${prev}${m}`);
        } else if ((m === 'い' || m === 'え') && eEndMoras.has(prev)) {
          hiraLongCount++;
          positions.push(`${prev}${m}`);
        } else if (m === 'い' && iEndMoras.has(prev)) {
          hiraLongCount++;
          positions.push(`${prev}${m}`);
        } else if (m === 'あ' && aEndMoras.has(prev)) {
          hiraLongCount++;
          positions.push(`${prev}${m}`);
        }
      }
    }
    return { dashCount, hiraLongCount, total: dashCount + hiraLongCount, positions };
  }

  /**
   * Kiểm tra khắt khe 7 đặc trưng ngữ âm cốt lõi của tiếng Nhật (Master 7-Dimension Phonetic Audit - Văn bản & Sóng âm DSP):
   * 1. Xúc âm (促音 っ): Kiểm tra văn bản + khoảng ngắt hơi thanh môn (100-180ms) trên sóng âm RMS
   * 2. Trường âm toàn diện (長音 ー + Hiragana Long Vowels おう/えい/ょう/ゅう): Kiểm tra văn bản + độ ngân nguyên âm
   * 3. Bạc âm / Âm mũi (撥音 ん): Kiểm tra ngân âm mũi đủ 1 nhịp Mora & biến âm đồng hóa môi/lưỡi
   * 4. Ảo âm / Âm ghép (拗音 きゃ/しゅ/ちょ/びょ): Phát hiện lỗi tách 2 âm tiết hoặc nuốt âm trượt
   * 5. Thanh âm – Đục âm – Bán đục âm (濁音 が/ざ/だ/ば & 半濁音 ぱ): Kiểm tra độ rung dây thanh quản & bật hơi môi
   * 6. Phụ âm đặc thù người Việt hay lệch (つ [ts], ふ [ɸ], ら行 [ɾ], し/ち/じ)
   */
  function auditJapanesePhonetics(targetMoraArr, spokenMoraArr, acousticReport, moraRatio) {
    let penalty = 0;
    const feedbackNotes = [];
    const expertCards = [];

    // 1. Kiểm tra Xúc âm (促音 っ)
    const targetSokuonCount = targetMoraArr.filter(m => m === 'っ').length;
    const spokenSokuonCount = spokenMoraArr.filter(m => m === 'っ').length;
    let sokuonOk = true;
    if (targetSokuonCount > spokenSokuonCount) {
      sokuonOk = false;
      const diff = targetSokuonCount - spokenSokuonCount;
      penalty += diff * 25;
      feedbackNotes.push(`Chưa ngắt nhịp xúc âm「っ」(${diff} vị trí). Cần đóng thanh môn/khẩu hình và nén hơi đúng 1 nhịp Mora (~130ms) trước khi bật phụ âm sau.`);
      expertCards.push({
        type: 'sokuon',
        badge: 'Xúc âm「っ」',
        diagnosis: `Thiếu nhịp nén hơi xúc âm「っ」(${diff} vị trí).`,
        articulatoryTip: 'Kỹ thuật khẩu hình: Ngay sau nguyên âm trước「っ」, hãy khép nhanh khẩu hình của phụ âm kế tiếp (ví dụ đặt sẵn đầu lưỡi lên lợi cho t/k hoặc khép hai môi cho p) và giữ im lặng hoàn toàn trong 1 nhịp vỗ tay (~130ms) rồi mới bật hơi ra.'
      });
    } else if (targetSokuonCount > 0 && acousticReport && acousticReport.sokuon && !acousticReport.sokuon.sokuonVerified) {
      sokuonOk = false;
      penalty += 24;
      feedbackNotes.push('Chưa ngắt nhịp xúc âm「っ」trên sóng âm thực tế (cần khoảng lặng ngắt hơi 100-180ms giữa câu, tránh đọc lướt).');
      expertCards.push({
        type: 'sokuon',
        badge: 'Sóng âm Xúc âm「っ」',
        diagnosis: 'Sóng âm RMS chưa có khoảng lặng đóng thanh môn rõ rệt cho chữ「っ」.',
        articulatoryTip: 'Kỹ thuật khẩu hình: Đừng chỉ đọc nhấn mạnh phụ âm, tiếng Nhật chuẩn yêu cầu một khoảng ngắt hơi thực sự (0 dB trong ~120–150ms) trước khi bật âm tiếp theo.'
      });
    }

    // 2. Kiểm tra Trường âm toàn diện (長音 ー + Hiragana Long Vowels おう, えい, ょう, ゅう...)
    const targetLong = countJapaneseLongVowels(targetMoraArr);
    const spokenLong = countJapaneseLongVowels(spokenMoraArr);
    let chouonOk = true;
    if (targetLong.dashCount > spokenLong.dashCount && !spokenMoraArr.some(m => ['う', 'お', 'い', 'あ', 'え'].includes(m))) {
      chouonOk = false;
      penalty += (targetLong.dashCount - spokenLong.dashCount) * 22;
      const samplePos = targetLong.positions[0] || 'ー';
      feedbackNotes.push(`Thiếu trường âm (âm kéo dài「${samplePos}」). Hãy giữ nguyên độ mở hàm và ngân dài nguyên âm đúng 2 nhịp Mora.`);
      expertCards.push({
        type: 'chouon',
        badge: 'Trường âm「ー」',
        diagnosis: `Đọc hụt trường âm tại「${samplePos}」.`,
        articulatoryTip: 'Kỹ thuật khẩu hình: Giữ cố định vị trí môi và độ mở hàm của nguyên âm đứng trước, ngân luồng hơi đều đặn gấp đôi âm tiết thường (2 nhịp vỗ tay Mora), tuyệt đối không đổi khẩu hình giữa chừng.'
      });
    } else if (targetLong.hiraLongCount > spokenLong.hiraLongCount && spokenMoraArr.length < targetMoraArr.length) {
      chouonOk = false;
      const diffHira = targetLong.hiraLongCount - spokenLong.hiraLongCount;
      penalty += diffHira * 18;
      const samplePos = targetLong.positions[0] || 'おう/えい';
      feedbackNotes.push(`Đọc hụt trường âm Hiragana tại「${samplePos}」. Lưu ý「おう」đọc là ō kéo dài,「えい」đọc là ē kéo dài 2 nhịp Mora.`);
      expertCards.push({
        type: 'chouon-hira',
        badge: `Trường âm「${samplePos}」`,
        diagnosis: `Nuốt mất nhịp ngân trường âm Hiragana tại「${samplePos}」.`,
        articulatoryTip: 'Kỹ thuật khẩu hình: Với cụm「おう/ょう」, không đọc tách thành "ô-ư" mà giữ tròn môi âm [oː] kéo dài 2 nhịp; với「えい」, giữ dẹt môi âm [eː] kéo dài 2 nhịp.'
      });
    } else if (targetLong.dashCount > 0 && acousticReport && acousticReport.chouon && !acousticReport.chouon.chouonVerified) {
      chouonOk = false;
      penalty += 18;
      feedbackNotes.push('Độ ngân trường âm「ー」trên sóng âm thực tế còn hơi ngắn, hãy ngân đủ 2 nhịp Mora.');
    }

    // 3. Kiểm tra Bạc âm / Âm mũi「ん」(Hatsuon)
    const targetHatsuonCount = targetMoraArr.filter(m => m === 'ん').length;
    const spokenHatsuonCount = spokenMoraArr.filter(m => m === 'ん').length;
    let hatsuonOk = true;
    if (targetHatsuonCount > spokenHatsuonCount && spokenMoraArr.length < targetMoraArr.length) {
      hatsuonOk = false;
      const diffN = targetHatsuonCount - spokenHatsuonCount;
      penalty += diffN * 18;
      feedbackNotes.push('Thiếu hoặc lướt quá nhanh âm mũi Bạc âm「ん」. Trong tiếng Nhật, chữ「ん」chiếm trọn 1 nhịp Mora độc lập.');
      expertCards.push({
        type: 'hatsuon',
        badge: 'Bạc âm「ん」',
        diagnosis: 'Âm mũi「ん」bị nuốt hoặc ngân chưa đủ 1 nhịp Mora.',
        articulatoryTip: 'Kỹ thuật khẩu hình: Đưa luồng hơi ngân qua khoang mũi trọn 1 nhịp. Lưu ý đồng hóa âm:「ん」đứng trước hàng バ/パ/マ thì khép hai môi đọc thành [m]; đứng trước カ/ガ đọc ở cuống lưỡi [ŋ]; đứng trước タ/ダ/ナ/ラ đặt đầu lưỡi chạm chân răng trên [n].'
      });
    }

    // 4. Kiểm tra Ảo âm / Âm ghép (拗音 Yoon: きゃ, しゅ, ちょ, びょ...)
    const yoonRegex = /^[きぎしじちぢにひびぴみり][ゃゅょ]$/;
    const targetYoon = targetMoraArr.filter(m => yoonRegex.test(m));
    let yoonMissCount = 0;
    targetYoon.forEach(ym => {
      if (!spokenMoraArr.includes(ym)) {
        yoonMissCount++;
      }
    });
    const yoonOk = yoonMissCount === 0;
    if (yoonMissCount > 0 && spokenMoraArr.length > 0) {
      penalty += Math.min(24, yoonMissCount * 12);
      const sampleYoon = targetYoon[0];
      feedbackNotes.push(`Lưu ý ảo âm ghép「${sampleYoon}」: cần lướt liền thành 1 nhịp Mora duy nhất, không tách rời thành 2 âm tiết.`);
      expertCards.push({
        type: 'yoon',
        badge: `Ảo âm「${sampleYoon}」`,
        diagnosis: `Âm ghép「${sampleYoon}」chưa tròn hoặc bị tách nhịp.`,
        articulatoryTip: `Kỹ thuật khẩu hình: Nâng mặt lưỡi áp gần vòm cứng (tạo thế âm vòm hóa [j]) ngay từ lúc phát phụ âm đầu của「${sampleYoon}」, bật gọn trong đúng 1 nhịp Mora duy nhất.`
      });
    }

    // 5. Kiểm tra biến âm đục/bán đục (Voicing clarity: Dakuon & Handakuon)
    const voicingPairs = {
      'が':'か','ぎ':'き','ぐ':'く','げ':'け','ご':'こ',
      'ざ':'さ','じ':'し','ず':'す','ぜ':'せ','ぞ':'そ',
      'だ':'た','ぢ':'ち','づ':'つ','で':'て','ど':'と',
      'ば':'は','び':'ひ','ぶ':'ふ','べ':'へ','ぼ':'ほ',
      'ぱ':'は','ぴ':'ひ','ぷ':'ふ','ぺ':'へ','ぽ':'ほ'
    };
    let voicingMissCount = 0;
    let missedVoicedSample = '';
    targetMoraArr.forEach(tM => {
      const base = voicingPairs[tM];
      if (base && spokenMoraArr.includes(base) && !spokenMoraArr.includes(tM)) {
        voicingMissCount++;
        if (!missedVoicedSample) missedVoicedSample = `${tM} (nghe thành ${base})`;
      }
    });
    if (voicingMissCount > 0) {
      penalty += Math.min(36, voicingMissCount * 15);
      feedbackNotes.push(`Lưu ý phát âm rõ âm đục/bán đục tại「${missedVoicedSample}」(rung dây thanh quản với が, ざ, だ, ば; mím môi bật hơi với ぱ).`);
      expertCards.push({
        type: 'voicing',
        badge: 'Đục âm / Bán đục âm',
        diagnosis: `Độ rung thanh quản chưa rõ tại「${missedVoicedSample}」.`,
        articulatoryTip: 'Kỹ thuật khẩu hình: Với âm đục (が/ざ/だ/ば), hãy kích hoạt rung dây thanh quản ngay từ đầu âm tiết (đặt ngón tay lên cổ họng sẽ thấy rung nhẹ). Với âm bán đục (ぱ/ぴ/ぷ/ぺ/ぽ), mím chặt hai môi rồi bật luồng hơi dứt khoát.'
      });
    }

    let featureScore = Math.max(20, Math.min(100, Math.round(100 - penalty)));
    if (typeof moraRatio === 'number' && moraRatio < 0.65) {
      featureScore = Math.min(featureScore, Math.max(25, Math.round(moraRatio * 110)));
    }
    return {
      featureScore,
      sokuonOk,
      chouonOk,
      hatsuonOk,
      yoonOk,
      voicingMissCount,
      feedbackNotes,
      expertCards
    };
  }

  /**
   * Căn chỉnh quy hoạch động (Needleman-Wunsch / Levenshtein Alignment) giữa chuỗi âm chuẩn và chuỗi nói
   */
  function alignCharSequences(targetArr, spokenArr) {
    const n = targetArr.length;
    const m = spokenArr.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) dp[i][0] = i * 1.0;
    for (let j = 1; j <= m; j++) dp[0][j] = j * 0.7;

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const t = targetArr[i - 1];
        const s = spokenArr[j - 1];
        let subCost = 1.0;
        if (t === s) subCost = 0;
        else if (isSimilarKana(t, s)) subCost = 0.35;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1.0,       // deletion (bỏ sót âm)
          dp[i][j - 1] + 0.7,       // insertion (thừa âm ngập ngừng)
          dp[i - 1][j - 1] + subCost // match / substitution
        );
      }
    }

    // Truy vết ngược để xác định trạng thái của từng ký tự trong targetArr
    const statuses = new Array(n).fill('miss');
    let i = n;
    let j = m;
    while (i > 0 && j > 0) {
      const t = targetArr[i - 1];
      const s = spokenArr[j - 1];
      const subCost = t === s ? 0 : (isSimilarKana(t, s) ? 0.35 : 1.0);
      if (Math.abs(dp[i][j] - (dp[i - 1][j - 1] + subCost)) < 1e-6) {
        if (t === s) statuses[i - 1] = 'ok';
        else if (isSimilarKana(t, s)) statuses[i - 1] = 'near';
        else statuses[i - 1] = 'miss';
        i--;
        j--;
      } else if (Math.abs(dp[i][j] - (dp[i][j - 1] + 0.7)) < 1e-6) {
        j--;
      } else {
        statuses[i - 1] = 'miss';
        i--;
      }
    }
    return statuses;
  }

  /**
   * Ước lượng tần số cơ bản F0 (Hz) từ mẫu miền thời gian bằng YIN (AcousticAnalyzer) hoặc Autocorrelation
   */
  function detectPitchF0FromBuffer(float32Buf, sampleRate) {
    if (!float32Buf || float32Buf.length === 0 || !sampleRate) return null;
    const analyzer = getAcousticAnalyzer();
    if (analyzer && typeof analyzer.detectPitchYin === 'function') {
      const yinRes = analyzer.detectPitchYin(float32Buf, sampleRate);
      return yinRes ? yinRes.f0 : null;
    }
    const size = float32Buf.length;
    let rms = 0;
    for (let i = 0; i < size; i++) {
      rms += float32Buf[i] * float32Buf[i];
    }
    rms = Math.sqrt(rms / size);
    if (rms < 0.015) return null;

    const minLag = Math.floor(sampleRate / 420);
    const maxLag = Math.floor(sampleRate / 75);
    let bestLag = -1;
    let bestCorr = 0;

    for (let lag = minLag; lag <= Math.min(maxLag, size - 1); lag++) {
      let sum = 0;
      let norm1 = 0;
      let norm2 = 0;
      for (let i = 0; i < size - lag; i++) {
        const a = float32Buf[i];
        const b = float32Buf[i + lag];
        sum += a * b;
        norm1 += a * a;
        norm2 += b * b;
      }
      const denom = Math.sqrt(norm1 * norm2);
      const corr = denom > 0 ? sum / denom : 0;
      if (corr > bestCorr) {
        bestCorr = corr;
        bestLag = lag;
      }
    }

    if (bestLag > 0 && bestCorr >= 0.55) {
      return sampleRate / bestLag;
    }
    return null;
  }

  /**
   * Chuẩn hóa và nội suy mảng tần số F0 thu được từ Micro về đường cong [0.18, 0.92] cùng kích thước mCurve
   */
  function buildMeasuredUserPitchCurve(f0Samples, targetLength) {
    if (!Array.isArray(f0Samples) || f0Samples.length < 3 || targetLength <= 0) return null;
    const analyzer = getAcousticAnalyzer();
    if (analyzer && typeof analyzer.normalizeF0ToPitchCurve === 'function') {
      const norm = analyzer.normalizeF0ToPitchCurve(f0Samples, targetLength);
      if (norm && Array.isArray(norm.userCurve)) return norm.userCurve;
    }
    const minHz = Math.min(...f0Samples);
    const maxHz = Math.max(...f0Samples);
    const span = Math.max(45, maxHz - minHz);
    const midHz = (minHz + maxHz) / 2;
    const normalized = f0Samples.map(hz => {
      const ratio = (hz - midHz) / span;
      return Math.max(0.18, Math.min(0.92, 0.50 + ratio * 0.68));
    });

    const resampled = [];
    for (let i = 0; i < targetLength; i++) {
      const pos = (i / Math.max(1, targetLength - 1)) * (normalized.length - 1);
      const idx0 = Math.floor(pos);
      const idx1 = Math.min(normalized.length - 1, idx0 + 1);
      const frac = pos - idx0;
      const val = normalized[idx0] * (1 - frac) + normalized[idx1] * frac;
      resampled.push(Number(val.toFixed(2)));
    }
    return resampled;
  }

  function getLessonData(moduleId) {
    const db = root.KAIWA_DATA || {};
    return db[moduleId] || null;
  }

  function getPassedCount(lessonData) {
    if (!lessonData || !Array.isArray(lessonData.dialogue)) return 0;
    const scores = (state.progress && state.progress.scores) || {};
    return lessonData.dialogue.filter(line => (scores[line.id] || 0) >= 70).length;
  }

  function getTotalRenshuuSentences(lessonData) {
    if (!lessonData || !Array.isArray(lessonData.renshuuC)) return 0;
    let count = 0;
    lessonData.renshuuC.forEach(rc => {
      const linesCount = (rc.lines || []).length;
      const subsCount = Math.max(1, (rc.substitutions || []).length);
      count += linesCount * subsCount + 8;
    });
    return count || 42;
  }

  /**
   * Scene illustration placeholder (removed per design request to focus directly on dialogue)
   */
  function renderSceneSvg() {
    return '';
  }

  /**
   * THUẬT TOÁN CHẤM ĐIỂM PHÁT ÂM 4 TRỤ CỘT CHUẨN NGỮ ÂM NHẬT BẢN (KAIWA SCORING v3.0 - OFFLINE DSP & GATED SCORING):
   * 1. Âm vị Mora (55%): Bóc tách và so khớp theo từng nhịp Mora (拍), áp dụng Cửa ải Mora (Mora Gate < 75 không cho phép kéo điểm)
   * 2. Đặc trưng ngữ âm (15%): Kiểm tra kép Văn bản + Sóng âm RMS cho Xúc âm (促音 っ), Trường âm (長音 ー), Âm đục (濁音)
   * 3. Trọng âm Tokyo & Ngữ điệu F0 (20%): Phân tích YIN Pitch + Dynamic Time Warping (DTW) và bắt lỗi đọc ngang (Monotone)
   * 4. Nhịp độ Đẳng thời Mora (10%): Đo độ dài phát âm thực tế từ AudioBuffer / thời lượng ghi âm so với mẫu chuẩn Audio Sprite
   */
  function evaluatePronunciation(targetRawJp, spokenText, modelPitchCurve, modelEndPitch, options) {
    const opts = options || {};
    const targetRubyHtml = opts.targetRubyHtml || targetRawJp;
    const cleanTarget = normalizeJapaneseForCompare(targetRawJp);
    const hasExplicitSpoken = spokenText !== undefined && spokenText !== null;
    const rawSpokenStr = hasExplicitSpoken ? String(spokenText) : cleanTarget;
    const cleanSpoken = normalizeJapaneseForCompare(rawSpokenStr);

    const mCurve = Array.isArray(modelPitchCurve) && modelPitchCurve.length >= 4
      ? modelPitchCurve
      : [0.32, 0.68, 0.62, 0.56, 0.50, 0.44, 0.36];

    const targetUnits = parseTargetUnits(targetRawJp, targetRubyHtml);
    const targetChars = targetUnits.length > 0
      ? targetUnits.map(u => u.char)
      : Array.from(cleanTarget);

    // Xử lý khi người dùng im lặng hoàn toàn (spokenText === '') -> chấm 0 điểm
    if (hasExplicitSpoken && cleanSpoken.length === 0) {
      const zeroDiffs = targetChars.map(ch => ({ char: ch, status: 'miss' }));
      const flatCurve = mCurve.map(() => 0.25);
      return {
        score: 0,
        moraScore: 0,
        featureScore: 0,
        pitchScore: 0,
        tempoScore: 0,
        heardText: '(Chưa nghe rõ giọng nói)',
        charDiffs: zeroDiffs,
        modelCurve: mCurve,
        userCurve: flatCurve,
        pitchSimilarity: 0,
        modelEndPitch: modelEndPitch || 'down',
        userEndPitch: 'flat',
        diagnostics: {
          chouonOk: false,
          sokuonOk: false,
          endPitchOk: false,
          acousticVerified: false,
          isMonotone: false,
          tempoRatio: 0,
          feedbackNotes: ['Chưa ghi nhận âm thanh. Hãy bấm Micro và đọc rõ vào mic nhé!']
        },
        errorCode: opts.errorCode || 'no-speech'
      };
    }

    // --- TRỤ CỘT 1: ÂM VỊ MORA & SẮP XẾP CHUỖI ---
    const targetHira = extractKanaReadingFromRubyHtml(targetRubyHtml) || katakanaToHiragana(normalizeNumbersToHiragana(cleanTarget));

    let spokenNormalized = cleanSpoken;
    if (cleanSpoken === cleanTarget) {
      spokenNormalized = targetHira;
    } else if (targetRubyHtml && targetRubyHtml.includes('<ruby>')) {
      const rubyRegex = /<ruby>([\s\S]*?)<rt>([\s\S]*?)<\/rt><\/ruby>/g;
      let rMatch;
      while ((rMatch = rubyRegex.exec(targetRubyHtml)) !== null) {
        const kanji = rMatch[1].replace(/<[^>]+>/g, '').trim();
        const furi = katakanaToHiragana(rMatch[2].replace(/<[^>]+>/g, '').trim());
        if (kanji && furi && spokenNormalized.includes(kanji)) {
          spokenNormalized = spokenNormalized.split(kanji).join(furi);
        }
      }
    }
    const spokenHira = katakanaToHiragana(normalizeNumbersToHiragana(spokenNormalized));

    const spokenMoras = splitIntoMoraTokens(spokenHira);
    const targetMoras = splitIntoMoraTokens(targetHira);

    const moraStatuses = alignCharSequences(targetMoras, spokenMoras);
    let matchedMoras = 0;
    moraStatuses.forEach(st => {
      if (st === 'ok') matchedMoras += 1.0;
      else if (st === 'near') matchedMoras += 0.4;
    });

    const moraRatio = targetMoras.length > 0 ? (matchedMoras / targetMoras.length) : 1;
    const lenDiffRatio = targetMoras.length > 0
      ? Math.max(0, spokenMoras.length - targetMoras.length * 1.35) / targetMoras.length
      : 0;
    const rawMoraScore = Math.round(Math.max(0, (moraRatio - lenDiffRatio * 0.25)) * 100);
    const moraScore = matchedMoras === 0 ? 0 : Math.max(10, Math.min(100, rawMoraScore));

    // Ánh xạ trạng thái mora về từng ký tự targetChars để hiển thị highlight
    let moraCursor = 0;
    const charDiffs = targetChars.map((ch, idx) => {
      const unitHira = (targetUnits[idx] && targetUnits[idx].hira) || katakanaToHiragana(ch);
      const unitMoras = splitIntoMoraTokens(unitHira);
      const unitLen = Math.max(1, unitMoras.length);
      const sliceStatuses = moraStatuses.slice(moraCursor, moraCursor + unitLen);
      moraCursor += unitLen;

      let st = 'miss';
      if (sliceStatuses.length > 0) {
        if (sliceStatuses.every(s => s === 'ok')) st = 'ok';
        else if (sliceStatuses.some(s => s === 'ok' || s === 'near')) st = 'near';
      }
      return { char: ch, status: st };
    });

    // --- KÍCH HOẠT PHÂN TÍCH ÂM HỌC OFFLINE DSP (YIN PITCH + RMS ENVELOPE + DTW) ---
    const analyzer = getAcousticAnalyzer();
    let acousticReport = opts.acousticReport || null;
    if (!acousticReport && analyzer && (opts.pcmData || opts.audioBuffer)) {
      acousticReport = analyzer.analyzeAudioBufferOffline(opts.pcmData || opts.audioBuffer, {
        modelCurve: mCurve,
        targetMoras
      });
    }

    // --- TRỤ CỘT 2: ĐẶC TRƯNG NGỮ ÂM TIẾNG NHẬT (CHOUON, SOKUON, DAKUON) ---
    const phoneticAudit = auditJapanesePhonetics(targetMoras, spokenMoras, acousticReport, moraRatio);
    const featureScore = phoneticAudit.featureScore;
    const allNotes = [...phoneticAudit.feedbackNotes];

    // --- TRỤ CỘT 3: TRỌNG ÂM TOKYO & NGỮ ĐIỆU F0 (YIN + DTW) ---
    const f0List = (acousticReport && Array.isArray(acousticReport.f0Samples) && acousticReport.f0Samples.length >= 3)
      ? acousticReport.f0Samples
      : (opts.measuredPitchSamples || capturedPitchSamples);
    const measuredCurve = (acousticReport && Array.isArray(acousticReport.userCurve))
      ? acousticReport.userCurve
      : buildMeasuredUserPitchCurve(f0List, mCurve.length);
    const hasAcousticPitch = Boolean((acousticReport && acousticReport.hasRealAudio) || (measuredCurve && measuredCurve.length >= 3));

    let userEndPitch = (moraScore >= 85) ? (modelEndPitch || 'down') : 'flat';
    if (acousticReport && acousticReport.userEndPitch) {
      userEndPitch = acousticReport.userEndPitch;
    } else if (measuredCurve && measuredCurve.length >= 3) {
      const lastDiff = measuredCurve[measuredCurve.length - 1] - measuredCurve[measuredCurve.length - 2];
      if (lastDiff > 0.035) userEndPitch = 'up';
      else if (lastDiff < -0.035) userEndPitch = 'down';
      else userEndPitch = 'flat';
    }

    const expectedEnd = modelEndPitch || 'down';
    let endPitchOk = true;
    let endPitchPoints = 100;
    if (expectedEnd === 'up') {
      if (userEndPitch === 'up') {
        endPitchPoints = 100;
      } else {
        endPitchOk = false;
        endPitchPoints = 40;
        allNotes.push('Câu hỏi nghi vấn cần lên giọng ở cuối câu (↗).');
      }
    } else {
      if (userEndPitch === 'down') {
        endPitchPoints = 100;
      } else if (userEndPitch === 'up') {
        endPitchOk = false;
        endPitchPoints = 45;
        allNotes.push('Câu trần thuật cần hạ nhẹ giọng ở cuối câu (↘).');
      } else {
        endPitchPoints = 82;
      }
    }

    const userCurve = measuredCurve || mCurve.map((val, idx) => {
      if (moraScore >= 98 && featureScore >= 98 && endPitchOk) {
        return val;
      }
      const delta = ((idx % 3) - 1) * (moraScore >= 85 ? 0.04 : 0.12);
      return Number(Math.max(0.18, Math.min(0.92, val + delta)).toFixed(2));
    });

    let pitchSimilarity = 0;
    let isMonotone = false;
    if (moraScore === 0) {
      pitchSimilarity = 0;
    } else if (acousticReport && acousticReport.dtw) {
      pitchSimilarity = acousticReport.dtw.similarity;
      isMonotone = Boolean(acousticReport.isMonotone || acousticReport.dtw.isMonotone);
    } else if (hasAcousticPitch && analyzer && typeof analyzer.computeDtwSimilarity === 'function') {
      const dtwRes = analyzer.computeDtwSimilarity(mCurve, userCurve);
      pitchSimilarity = dtwRes.similarity;
      isMonotone = Boolean(dtwRes.isMonotone);
    } else {
      let diffSum = 0;
      for (let i = 0; i < mCurve.length; i++) {
        diffSum += Math.abs(mCurve[i] - userCurve[i]);
      }
      const avgDiff = diffSum / mCurve.length;
      pitchSimilarity = Math.max(40, Math.min(100, Math.round((1 - avgDiff * 1.45) * 100)));
      if (moraScore < 85) {
        pitchSimilarity = Math.min(pitchSimilarity, Math.max(40, moraScore));
      }
    }

    if (isMonotone) {
      allNotes.push('Giọng đọc đang ngang đều (monotone). Hãy nhấn cao-thấp theo đường cong trọng âm Tokyo.');
    }

    const accentProfile = (acousticReport && acousticReport.accentProfile)
      || (analyzer && typeof analyzer.analyzeTokyoAccentProfile === 'function'
        ? analyzer.analyzeTokyoAccentProfile(mCurve, userCurve, targetMoras)
        : null);

    // Kiểm phạt Điểm rơi Trọng âm (下がり目 Nucleus Penalty & Pitch Step Mismatch)
    let nucleusPenalty = 0;
    if (hasAcousticPitch && accentProfile && Array.isArray(accentProfile.moraSteps) && pitchSimilarity < 86) {
      const mismatchCount = accentProfile.moraSteps.filter(st => st.diff >= 0.22).length;
      if (mismatchCount > 0) {
        nucleusPenalty += Math.min(20, mismatchCount * 6);
      }
      if (accentProfile.dropMoraIndex >= 0 && accentProfile.moraSteps[accentProfile.dropMoraIndex]) {
        const dropSt = accentProfile.moraSteps[accentProfile.dropMoraIndex];
        if (dropSt.diff >= 0.20) {
          nucleusPenalty += 10;
        }
      }
    }

    let pitchScore = Math.max(15, Math.round(0.64 * pitchSimilarity + 0.36 * endPitchPoints) - nucleusPenalty);
    if (isMonotone) {
      pitchScore = Math.min(pitchScore, 48);
    }

    // --- TRỤ CỘT 4: NHỊP ĐỘ & ĐỘ TRÔI CHẢY (TEMPO ISOCHRONY) ---
    let tempoScore = 100;
    let tempoRatio = 1.0;
    const effectiveUserDuration = opts.userDurationSec ||
      (acousticReport && acousticReport.rms && acousticReport.rms.voicedDurationSec > 0 ? acousticReport.rms.voicedDurationSec : null);
    const computedTargetDuration = (opts.targetDurationSec && opts.targetDurationSec > 0)
      ? opts.targetDurationSec
      : (effectiveUserDuration && targetMoras.length >= 2 ? Number((targetMoras.length * 0.135).toFixed(2)) : null);

    if (effectiveUserDuration && computedTargetDuration && computedTargetDuration > 0) {
      tempoRatio = Number((effectiveUserDuration / computedTargetDuration).toFixed(2));
      if (tempoRatio >= 0.78 && tempoRatio <= 1.28) {
        tempoScore = 100;
      } else if (tempoRatio > 1.28 && tempoRatio <= 1.65) {
        tempoScore = 72;
        allNotes.push(`Tốc độ nói hơi chậm (${tempoRatio}x so với nhịp chuẩn Mora).`);
      } else if (tempoRatio > 1.65) {
        tempoScore = Math.max(30, Math.round(100 - (tempoRatio - 1.25) * 75));
        allNotes.push('Đọc ngập ngừng nhiều chỗ. Hãy luyện đọc liền mạch theo nhịp vỗ tay Mora.');
      } else {
        tempoScore = Math.max(40, Math.round(66 * (tempoRatio / 0.78)));
        allNotes.push('Đọc hơi vội vàng so với nhịp câu mẫu, dễ làm nuốt trường âm/xúc âm.');
      }
    }

    // Hệ số phạt thứ hạng & độ tự tin ASR (Hardcore Shadowing Mode: siết chặt phát âm mờ / đoán chữ)
    const rankPenalty = typeof opts.candidateRank === 'number'
      ? Math.min(36, opts.candidateRank === 1 ? 14 : opts.candidateRank * 16)
      : 0;
    const confPenalty = (typeof opts.confidence === 'number' && opts.confidence > 0 && opts.confidence < 0.90)
      ? Math.round((0.90 - opts.confidence) * 55)
      : 0;

    // Tổng hợp điểm cơ sở 4 Trụ Cột chuẩn NHK Hardcore: 40% Mora + 20% Features + 25% Pitch + 15% Tempo
    let weightedScore = Math.round(
      0.40 * moraScore +
      0.20 * featureScore +
      0.25 * pitchScore +
      0.15 * tempoScore
    );
    weightedScore = Math.max(0, weightedScore - rankPenalty - confPenalty);

    // --- ĐƯỜNG CONG KHẮT KHE LŨY TIẾN (HARDCORE EXPONENTIAL CALIBRATION: x^1.28) ---
    // Giữ nguyên dải Xuất sắc (>= 94 và không mắc lỗi cửa ải) cho giọng đọc chuẩn bản xứ;
    // các bài đọc mức trung bình-khá (< 94) áp dụng đường cong mũ 1.28 để ép điểm về thực chất (85 -> 76, 75 -> 64)
    const isNativeClean = moraRatio >= 1.0 && featureScore === 100 && endPitchOk && !isMonotone && pitchSimilarity >= 86;
    if (!isNativeClean || weightedScore < 94) {
      weightedScore = Math.round(Math.pow(weightedScore / 100, 1.28) * 100);
    }

    // --- CƠ CHẾ CỬA ẢI KHÔNG BÙ TRỪ (NON-COMPENSATORY GATED SCORING - HARDCORE CAPS) ---
    // Cửa ải 1 (Mora Gate): Nếu phát âm thiếu/sai chữ (moraScore < 85), khống chế trần nghiêm ngặt
    if (moraScore < 75) {
      weightedScore = Math.min(weightedScore, Math.round(moraScore * 0.96));
    } else if (moraScore < 88) {
      weightedScore = Math.min(weightedScore, 74);
    }

    // Cửa ải 2 (Phonetic Feature Gate): Sai Xúc âm「っ」, Trường âm「ー/おう/えい」, Bạc âm「ん」hoặc Âm đục
    if (!phoneticAudit.sokuonOk) {
      weightedScore = Math.min(weightedScore - 8, 66);
    }
    if (!phoneticAudit.chouonOk) {
      weightedScore = Math.min(weightedScore - 8, 66);
    }
    if (phoneticAudit.hatsuonOk === false) {
      weightedScore = Math.min(weightedScore - 6, 68);
    }
    if (phoneticAudit.voicingMissCount > 0) {
      weightedScore = Math.min(weightedScore - 6, 68);
    }

    // Cửa ải 3 (Prosody & Monotone Gate): Đọc ngang như robot hoặc ngược ngữ điệu cuối câu bị khống chế trần thấp
    if (isMonotone) {
      weightedScore = Math.min(weightedScore - 6, 65);
    }
    if (!endPitchOk) {
      weightedScore = Math.min(weightedScore, 72);
    }
    if (typeof opts.candidateRank === 'number' && opts.candidateRank >= 1) {
      weightedScore = Math.min(weightedScore, 72);
    }

    const hasMiss = charDiffs.some(d => d.status === 'miss');
    const hasNear = charDiffs.some(d => d.status === 'near');
    let finalScore = matchedMoras === 0 ? 0 : Math.max(12, Math.min(100, weightedScore));
    if ((hasMiss || hasNear || !endPitchOk || !phoneticAudit.sokuonOk || !phoneticAudit.chouonOk || isMonotone) && finalScore >= 90) {
      finalScore = hasMiss ? 78 : 84;
    }

    if (
      moraRatio >= 1.0 &&
      featureScore === 100 &&
      endPitchOk &&
      !isMonotone &&
      pitchSimilarity >= 88 &&
      nucleusPenalty === 0 &&
      tempoScore >= 95 &&
      rankPenalty === 0 &&
      confPenalty === 0 &&
      !hasMiss &&
      !hasNear
    ) {
      finalScore = 100;
    }

    if (allNotes.length === 0) {
      allNotes.push(finalScore >= 85 ? 'Phát âm tự nhiên và chuẩn nhịp Tokyo!' : 'Đọc rõ ràng, tiếp tục phát huy!');
    }

    const expertCoaching = buildMasterExpertCoaching({
      finalScore,
      moraScore,
      charDiffs,
      targetMoras,
      phoneticAudit,
      accentProfile,
      isMonotone,
      endPitchOk,
      expectedEnd,
      userEndPitch,
      tempoRatio
    });

    if (accentProfile && accentProfile.worstMoraStep && accentProfile.worstMoraStep.diff >= 0.18) {
      const ws = accentProfile.worstMoraStep;
      const pitchStepNote = `Tại nhịp「${ws.mora}」cao độ đang ${ws.userVal > ws.modelVal ? 'cao hơn' : 'thấp hơn'} giọng mẫu (${accentProfile.patternLabel}).`;
      if (!allNotes.includes(pitchStepNote)) {
        allNotes.push(pitchStepNote);
      }
    }

    return {
      score: finalScore,
      moraScore,
      featureScore,
      pitchScore,
      tempoScore,
      heardText: cleanSpoken || cleanTarget,
      charDiffs,
      modelCurve: mCurve,
      userCurve,
      pitchSimilarity,
      modelEndPitch: expectedEnd,
      userEndPitch,
      expertCoaching,
      diagnostics: {
        chouonOk: phoneticAudit.chouonOk,
        sokuonOk: phoneticAudit.sokuonOk,
        hatsuonOk: phoneticAudit.hatsuonOk !== false,
        yoonOk: phoneticAudit.yoonOk !== false,
        endPitchOk,
        acousticVerified: hasAcousticPitch,
        isMonotone,
        tempoRatio,
        accentPattern: expertCoaching.patternLabel,
        dropMoraText: expertCoaching.dropMoraText,
        feedbackNotes: allNotes
      }
    };
  }

  /**
   * Hệ thống Huấn luyện viên Ngữ âm & Khẩu hình Tokyo (AI Tokyo Phonetics & Articulatory Coach)
   * Sinh lời khuyên chuyên sâu 3 tầng:
   * 1. Chẩn đoán chính xác âm vị / điểm rơi trọng âm (Pinpoint Diagnosis)
   * 2. Kỹ thuật Khẩu hình – Vị trí lưỡi – Hơi thở (Articulatory Technique)
   * 3. Bài tập sửa lỗi nhanh 1 nhịp (Actionable Micro-Drill)
   */
  function buildMasterExpertCoaching(params) {
    const {
      finalScore,
      moraScore,
      charDiffs,
      targetMoras,
      phoneticAudit,
      accentProfile,
      isMonotone,
      endPitchOk,
      expectedEnd,
      userEndPitch,
      tempoRatio
    } = params;

    const cards = Array.isArray(phoneticAudit && phoneticAudit.expertCards)
      ? phoneticAudit.expertCards.slice()
      : [];

    // 1. Chẩn đoán chữ phát âm thiếu/sai hoặc gần đúng từ charDiffs
    const missedChars = (charDiffs || []).filter(d => d.status === 'miss').map(d => d.char);
    const nearChars = (charDiffs || []).filter(d => d.status === 'near').map(d => d.char);

    if (missedChars.length > 0) {
      const sampleMiss = missedChars.slice(0, 4).join('・');
      let specialArticulation = 'Mở rõ khẩu hình nguyên âm (a-i-u-e-o) và giữ nhịp vỗ tay đều đặn cho từng chữ, tránh lướt âm cuối hoặc nuốt trợ từ.';
      const joinedHira = (targetMoras || []).join('');
      if (joinedHira.includes('つ')) {
        specialArticulation = 'Với âm「つ」[tsɯ]: Đặt đầu lưỡi chạm mặt sau răng cửa trên, nén nhẹ rồi xì hơi ngắn qua khe răng (giống tổ hợp t+s), môi giữ tự nhiên không chu tròn như "chư".';
      } else if (joinedHira.includes('ふ')) {
        specialArticulation = 'Với âm「ふ」[ɸɯ]: Khép hờ hai môi gần chạm nhau (không cắn môi dưới như chữ F tiếng Việt) và thổi luồng hơi nhẹ qua khe giữa hai môi.';
      } else if (/[らりるれろ]/.test(joinedHira)) {
        specialArticulation = 'Với hàng「ら・り・る・れ・ろ」[ɾ]: Đầu lưỡi chỉ búng nhẹ 1 lần vào lợi trên (giữa âm L và R nhẹ, tuyệt đối không rung lưỡi nhiều lần).';
      } else if (/[しちじ]/.test(joinedHira)) {
        specialArticulation = 'Với cụm「し・ち・じ」: Nâng mặt lưỡi gần vòm cứng để tạo âm xát mềm [ɕ / tɕ], nhẹ và êm hơn âm "s/tr" nặng của tiếng Việt.';
      }
      cards.unshift({
        type: 'mora-miss',
        badge: `Âm vị cần sửa:「${sampleMiss}」`,
        diagnosis: `Máy chưa bắt rõ âm tại「${sampleMiss}」(${moraScore}/100 điểm Mora).`,
        articulatoryTip: `Kỹ thuật khẩu hình: ${specialArticulation}`
      });
    } else if (nearChars.length > 0 && cards.length === 0) {
      const sampleNear = nearChars.slice(0, 3).join('・');
      cards.push({
        type: 'mora-near',
        badge: `Tinh chỉnh âm:「${sampleNear}」`,
        diagnosis: `Âm「${sampleNear}」đã gần chuẩn nhưng độ bật phụ âm/thanh quản hơi mờ.`,
        articulatoryTip: 'Kỹ thuật khẩu hình: Giữ luồng hơi từ cơ hoành ổn định, phát âm dứt khoát từng đơn vị Mora với độ dài bằng nhau.'
      });
    }

    // 2. Chẩn đoán Trọng âm Tokyo & Điểm rơi trọng âm (下がり目 - Accent Nucleus)
    if (accentProfile) {
      if (isMonotone) {
        const dropHint = accentProfile.dropMoraText
          ? `Sau nhịp「${accentProfile.dropMoraText}」cần hạ thấp cao độ rõ rệt xuống nhịp「${accentProfile.afterDropMoraText || 'tiếp theo'}」.`
          : 'Mora đầu tiên đọc trầm hơn, từ Mora thứ 2 nâng cao độ lên và giữ nhịp.';
        cards.push({
          type: 'pitch-monotone',
          badge: `Trọng âm ${accentProfile.patternLabel}`,
          diagnosis: 'Đường cong F0 đang phẳng (Monotone < 18Hz biến thiên).',
          articulatoryTip: `Kỹ thuật ngữ điệu Tokyo: Tiếng Nhật dùng Trọng âm Cao–Thấp (Pitch Accent) chứ không nhấn mạnh lực hơi. ${dropHint}`
        });
      } else if (accentProfile.worstMoraStep && accentProfile.worstMoraStep.diff >= 0.18) {
        const ws = accentProfile.worstMoraStep;
        const dirFix = ws.userVal > ws.modelVal
          ? 'hạ trầm giọng xuống (thả lỏng dây thanh)'
          : 'nâng cao độ giọng lên khoảng 3–4 bán âm';
        cards.push({
          type: 'pitch-nucleus',
          badge: `Điểm lệch cao độ: nhịp「${ws.mora}」`,
          diagnosis: `Tại nhịp Mora thứ ${ws.index + 1}「${ws.mora}」, cao độ của bạn đang ${ws.userVal > ws.modelVal ? 'cao hơn' : 'thấp hơn'} giọng mẫu Tokyo.`,
          articulatoryTip: `Kỹ thuật ngữ điệu: Khi lướt tới「${ws.mora}」, hãy ${dirFix}${accentProfile.dropMoraText ? ` và giữ điểm rơi trọng âm (下がり目 ┐) ngay sau「${accentProfile.dropMoraText}」` : ''}.`
        });
      }
    }

    // 3. Chẩn đoán Ngữ điệu cuối câu (Intonation Tail) & Nhịp độ Đẳng thời (Isochrony Tempo)
    if (!endPitchOk) {
      if (expectedEnd === 'up') {
        cards.push({
          type: 'tail-up',
          badge: 'Ngữ điệu câu hỏi (↗)',
          diagnosis: 'Cuối câu hỏi chưa vuốt cao độ lên.',
          articulatoryTip: 'Kỹ thuật ngữ điệu: Ở âm tiết cuối cùng (như「か」), hãy nâng nhanh tần số F0 lên cao ở 1/2 nửa sau của nguyên âm để tạo sắc thái hỏi lịch sự.'
        });
      } else if (userEndPitch === 'up') {
        cards.push({
          type: 'tail-down',
          badge: 'Ngữ điệu trần thuật (↘)',
          diagnosis: 'Cuối câu trần thuật đang bị hất giọng lên.',
          articulatoryTip: 'Kỹ thuật ngữ điệu: Thu nhẹ cằm và buông trùng luồng hơi ở chữ cuối (「ます / です」) để câu kết thúc đĩnh đạc, tự nhiên.'
        });
      }
    }

    if (typeof tempoRatio === 'number' && (tempoRatio > 1.38 || tempoRatio < 0.74)) {
      cards.push({
        type: 'tempo',
        badge: tempoRatio > 1.38 ? `Nhịp chậm (${tempoRatio}x)` : `Nhịp vội (${tempoRatio}x)`,
        diagnosis: tempoRatio > 1.38
          ? 'Khoảng dừng giữa các từ còn hơi dài làm đứt mạch câu.'
          : 'Tốc độ đọc hơi nhanh làm các Mora bị dính vào nhau.',
        articulatoryTip: 'Kỹ thuật Đẳng thời (Isochrony): Tiếng Nhật là ngôn ngữ đẳng thời theo Mora (mỗi nhịp ~110–130ms). Hãy gõ nhẹ ngón tay đều như máy đếm nhịp cho mỗi Mora (kể cả「っ」,「ー」,「ん」).'
      });
    }

    // Nếu người học đã đạt xuất sắc (>= 88 điểm) và không có lỗi lớn -> lời khen & bí quyết nâng tầm bản xứ
    if (cards.length === 0) {
      const dropInfo = (accentProfile && accentProfile.dropMoraText)
        ? `Bạn đã đặt điểm rơi trọng âm (下がり目 ┐) ngay sau nhịp「${accentProfile.dropMoraText}」rất chuẩn xác.`
        : 'Độ chuyển tiếp từ âm đầu thấp lên âm thứ hai cao tuân thủ đúng quy luật Heiban Tokyo.';
      cards.push({
        type: 'master-praise',
        badge: `Đẳng cấp Bản xứ (${accentProfile ? accentProfile.patternLabel : 'Chuẩn Tokyo'})`,
        diagnosis: `Phát âm tròn vành rõ chữ (${finalScore}/100), nhịp Mora đều đặn và tự nhiên.`,
        articulatoryTip: `Nhận xét Chuyên gia: ${dropInfo} Để đạt độ mượt hoàn hảo như phát thanh viên NHK, hãy duy trì hơi thở bụng nhẹ nhàng và nối âm mượt qua các trợ từ.`
      });
    }

    const topCard = cards[0];
    const summaryHeadline = `${topCard.badge}: ${topCard.diagnosis} ${topCard.articulatoryTip}`;

    return {
      patternKey: accentProfile ? accentProfile.patternKey : 'heiban',
      patternLabel: accentProfile ? accentProfile.patternLabel : '平板型 (Heiban · Bằng phẳng)',
      dropMoraIndex: accentProfile ? accentProfile.dropMoraIndex : -1,
      dropMoraText: accentProfile ? accentProfile.dropMoraText : null,
      moraSteps: accentProfile ? accentProfile.moraSteps : [],
      expertCards: cards.slice(0, 3),
      summaryHeadline
    };
  }
  function renderHighlightedJapanese(jpHtml, evalInfo) {
    if (!jpHtml || !evalInfo || !Array.isArray(evalInfo.charDiffs) || evalInfo.charDiffs.length === 0) {
      return jpHtml || '';
    }
    const diffs = evalInfo.charDiffs;
    let diffIdx = 0;
    const tokens = String(jpHtml).match(/(<ruby>[\s\S]*?<\/ruby>|<[^>]+>|[^<])/g) || [];
    let out = '';
    let pendingStatus = null; // 'near' | 'miss'
    let pendingBuffer = '';

    function flushPending() {
      if (!pendingBuffer) return;
      if (pendingStatus === 'miss') {
        out += `<span class="kaiwa-hl-miss kaiwa-char-miss" title="Phát âm sai hoặc thiếu">${pendingBuffer}</span>`;
      } else if (pendingStatus === 'near') {
        out += `<span class="kaiwa-hl-near kaiwa-char-near" title="Phát âm chưa chuẩn (gần đúng)">${pendingBuffer}</span>`;
      } else {
        out += pendingBuffer;
      }
      pendingBuffer = '';
      pendingStatus = null;
    }

    for (let i = 0; i < tokens.length; i++) {
      const tk = tokens[i];
      if (tk.startsWith('<ruby>')) {
        const baseText = stripHtml(tk);
        const baseChars = Array.from(baseText);
        let rubyStatus = 'ok';
        for (let c = 0; c < baseChars.length; c++) {
          if (!isJpPunctOrSpace(baseChars[c])) {
            const d = diffs[diffIdx++];
            const st = d ? d.status : 'ok';
            if (st === 'miss') rubyStatus = 'miss';
            else if (st === 'near' && rubyStatus !== 'miss') rubyStatus = 'near';
          }
        }
        if (rubyStatus === 'ok') {
          flushPending();
          out += tk;
        } else if (pendingStatus === rubyStatus) {
          pendingBuffer += tk;
        } else {
          flushPending();
          pendingStatus = rubyStatus;
          pendingBuffer = tk;
        }
      } else if (tk.startsWith('<')) {
        flushPending();
        out += tk;
      } else {
        if (isJpPunctOrSpace(tk)) {
          flushPending();
          out += tk;
        } else {
          const d = diffs[diffIdx++];
          const st = d ? d.status : 'ok';
          if (st === 'ok') {
            flushPending();
            out += tk;
          } else if (pendingStatus === st) {
            pendingBuffer += tk;
          } else {
            flushPending();
            pendingStatus = st;
            pendingBuffer = tk;
          }
        }
      }
    }
    flushPending();
    return out;
  }

  /**
   * Render SVG Pitch Contour Chart (Mẫu blue curve vs Bạn orange curve) matching Screenshot 3
   */
  function renderPitchChartSvg(modelCurve, userCurve) {
    const w = 560;
    const h = 84;
    const padX = 20;
    const padY = 14;

    function buildSmoothPath(points) {
      if (!points || points.length === 0) return '';
      const stepX = (w - padX * 2) / Math.max(1, points.length - 1);
      const coords = points.map((v, i) => ({
        x: Math.round(padX + i * stepX),
        y: Math.round(h - padY - v * (h - padY * 2))
      }));
      let d = `M ${coords[0].x} ${coords[0].y}`;
      for (let i = 1; i < coords.length; i++) {
        const prev = coords[i - 1];
        const curr = coords[i];
        const cx1 = Math.round((prev.x + curr.x) / 2);
        const cy1 = prev.y;
        const cx2 = Math.round((prev.x + curr.x) / 2);
        const cy2 = curr.y;
        d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
      }
      return d;
    }

    const modelPath = buildSmoothPath(modelCurve);
    const userPath = buildSmoothPath(userCurve);

    return `
      <svg class="kaiwa-pitch-svg" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <line x1="${padX}" y1="${Math.round(h / 2)}" x2="${w - padX}" y2="${Math.round(h / 2)}" stroke="currentColor" opacity="0.25" stroke-dasharray="4 4" stroke-width="1"/>
        <path d="${modelPath}" fill="none" stroke="var(--accent-indigo, #0284c7)" stroke-width="3.2" stroke-linecap="round"/>
        <path d="${userPath}" fill="none" stroke="var(--primary, #ff6b4a)" stroke-width="3.2" stroke-linecap="round"/>
      </svg>
    `;
  }

  function getPitchCoachingText(modelEnd, userEnd, expertCoaching) {
    const dirLabel = {
      up: 'lên ↗',
      down: 'xuống ↘',
      flat: 'ngang →'
    };
    const m = dirLabel[modelEnd] || 'lên ↗';
    const u = dirLabel[userEnd] || 'ngang →';
    const dropExtra = (expertCoaching && expertCoaching.dropMoraText)
      ? ` Điểm rơi trọng âm (下がり目 ┐) nằm ngay sau nhịp「${expertCoaching.dropMoraText}」.`
      : '';
    if (modelEnd === userEnd) {
      return `Cuối câu — mẫu: ${m} · bạn: ${u}. Ngữ điệu cuối câu của bạn rất tự nhiên và khớp với giọng mẫu!${dropExtra}`;
    }
    if (modelEnd === 'up') {
      return `Cuối câu — mẫu: ${m} · bạn: ${u}. Mẫu lên giọng ở cuối câu hỏi, bạn hãy nâng cao độ ở nửa sau âm tiết cuối.${dropExtra}`;
    }
    return `Cuối câu — mẫu: ${m} · bạn: ${u}. Mẫu hạ giọng tự nhiên ở cuối câu trần thuật, bạn hãy thu nhẹ cằm và hạ giọng nhé.${dropExtra}`;
  }

  /**
   * Render thanh chỉ báo Điểm rơi Trọng âm NHK gọn nhẹ (Compact Mora Pitch Step Strip L/H + 下がり目 ┐)
   */
  function renderCompactMoraPitchStrip(expertCoaching) {
    if (!expertCoaching || !Array.isArray(expertCoaching.moraSteps) || expertCoaching.moraSteps.length === 0) {
      return '';
    }
    const steps = expertCoaching.moraSteps.slice(0, 18);
    const itemsHtml = steps.map((st) => {
      const levelCls = st.modelLevel === 'H' ? 'is-high' : 'is-low';
      const dropCls = st.isDropNucleus ? 'has-drop-nucleus' : '';
      const mismatchCls = st.diff >= 0.18 ? 'is-pitch-mismatch' : '';
      return `
        <span class="kaiwa-mora-step ${levelCls} ${dropCls} ${mismatchCls}" title="Nhịp「${st.mora}」: Mẫu ${st.modelLevel === 'H' ? 'Cao (高)' : 'Thấp (低)'}${st.isDropNucleus ? ' · Điểm rơi trọng âm (下がり目 ┐)' : ''}">
          <span class="kaiwa-mora-txt" lang="ja">${st.mora}</span>
        </span>
      `;
    }).join('');

    return `
      <div class="kaiwa-accent-strip-wrap">
        <div class="kaiwa-accent-strip-meta">
          <span class="kaiwa-accent-pattern-badge">${expertCoaching.patternLabel || '平板型 (Heiban)'}</span>
          ${expertCoaching.dropMoraText ? `<span class="kaiwa-accent-drop-tag">Điểm rơi 下がり目: <strong>${expertCoaching.dropMoraText}┐</strong></span>` : ''}
        </div>
        <div class="kaiwa-mora-pitch-strip" aria-label="Bậc thang trọng âm từng nhịp Mora">${itemsHtml}</div>
      </div>
    `;
  }

  /**
   * Khung đánh giá phát âm & so sánh đường cong ngữ điệu chi tiết theo 4 Trụ Cột Chuẩn Nhật + Lời khuyên Chuyên gia
   */
  function buildEvalPanelHtml(lineId, evalInfo, defaultEndPitch, onPlaySampleCall) {
    if (!evalInfo) return '';
    const pitchArrowMap = { up: '↗', down: '↘', flat: '→' };
    const endPitchArrow = pitchArrowMap[(evalInfo && evalInfo.modelEndPitch) || defaultEndPitch || 'down'] || '↘';
    const pct = evalInfo.score;
    const verdictText = pct >= 85 ? 'Rất tốt!' : (pct >= 70 ? 'Khá tốt!' : 'Cần luyện thêm!');

    const charsHtml = (evalInfo.charDiffs || []).map(item => {
      const cls = item.status === 'ok' ? 'kaiwa-char-ok' : (item.status === 'near' ? 'kaiwa-char-near' : 'kaiwa-char-miss');
      return `<span class="${cls}">${item.char}</span>`;
    }).join('');

    const moraScore = evalInfo.moraScore !== undefined ? evalInfo.moraScore : pct;
    const featureScore = evalInfo.featureScore !== undefined ? evalInfo.featureScore : 100;
    const pitchScore = evalInfo.pitchScore !== undefined ? evalInfo.pitchScore : (evalInfo.pitchSimilarity || 85);
    const tempoScore = evalInfo.tempoScore !== undefined ? evalInfo.tempoScore : 100;

    const getScoreColorClass = (s) => s >= 85 ? 'is-good' : (s >= 70 ? 'is-warn' : 'is-low');

    const expert = evalInfo.expertCoaching || null;
    const expertCards = (expert && Array.isArray(expert.expertCards)) ? expert.expertCards : [];
    const feedbackList = (evalInfo.diagnostics && evalInfo.diagnostics.feedbackNotes) || [];

    const expertCardsHtml = expertCards.length > 0
      ? `<div class="kaiwa-expert-cards-stack">
          ${expertCards.map(c => `
            <div class="kaiwa-expert-card is-${c.type || 'general'}">
              <div class="kaiwa-expert-card-head">
                <span class="kaiwa-expert-badge">${c.badge}</span>
                <span class="kaiwa-expert-diag">${c.diagnosis}</span>
              </div>
              <div class="kaiwa-expert-tip">${c.articulatoryTip}</div>
            </div>
          `).join('')}
        </div>`
      : '';

    const feedbackHtml = (expertCardsHtml || feedbackList.length > 0) ? `
      <div class="kaiwa-diagnostic-box">
        <div class="kaiwa-diag-title">💡 Chuyên gia Ngữ âm &amp; Khẩu hình Tokyo tư vấn:</div>
        ${expertCardsHtml}
        ${feedbackList.length > 0 ? `<ul class="kaiwa-diag-list">${feedbackList.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
      </div>
    ` : '';

    const pitchSvg = renderPitchChartSvg(evalInfo.modelCurve, evalInfo.userCurve);
    const moraStripHtml = renderCompactMoraPitchStrip(expert);
    const coachingText = getPitchCoachingText(evalInfo.modelEndPitch, evalInfo.userEndPitch, expert);
    const playSampleFn = onPlaySampleCall || `KaiwaEngine.playLine('${lineId}')`;
    const isPlayingUser = state.playingUserVoiceLineId === lineId;
    const isAcousticVerified = Boolean(evalInfo.diagnostics && evalInfo.diagnostics.acousticVerified);

    return `
      <div class="kaiwa-eval-panel" id="kaiwa-eval-${lineId}">
        <div class="kaiwa-eval-header">
          <div class="kaiwa-eval-summary">
            <div class="kaiwa-eval-summary-top">
              <span class="kaiwa-eval-verdict">${verdictText} (${pct}/100)</span>
              <span class="kaiwa-pitch-dir-tag" title="Hướng ngữ điệu cuối câu">Ngữ điệu ${endPitchArrow} · Giống mẫu: <strong>${evalInfo.pitchSimilarity}%</strong></span>
            </div>
            <div class="kaiwa-eval-chars">${charsHtml}</div>
            <div class="kaiwa-eval-heard">
              <span>Máy nghe được: <strong class="kaiwa-heard-text">${evalInfo.heardText || '(chưa rõ)'}</strong></span>
              <span class="kaiwa-engine-tag">${isAcousticVerified ? 'Phân tích: DSP Âm học (YIN + DTW)' : 'Nhận giọng: trình duyệt'}</span>
            </div>

            <div class="kaiwa-pillars-grid">
              <div class="kaiwa-pillar-item">
                <div class="kaiwa-pillar-head">
                  <span class="kaiwa-pillar-label">Âm vị Mora</span>
                  <span class="kaiwa-pillar-val ${getScoreColorClass(moraScore)}">${moraScore}<span class="kaiwa-score-denom">/100</span></span>
                </div>
                <div class="kaiwa-pillar-track"><div class="kaiwa-pillar-fill ${getScoreColorClass(moraScore)}" style="width:${moraScore}%"></div></div>
              </div>
              <div class="kaiwa-pillar-item">
                <div class="kaiwa-pillar-head">
                  <span class="kaiwa-pillar-label">Trường âm &amp; Xúc âm</span>
                  <span class="kaiwa-pillar-val ${getScoreColorClass(featureScore)}">${featureScore}<span class="kaiwa-score-denom">/100</span></span>
                </div>
                <div class="kaiwa-pillar-track"><div class="kaiwa-pillar-fill ${getScoreColorClass(featureScore)}" style="width:${featureScore}%"></div></div>
              </div>
              <div class="kaiwa-pillar-item">
                <div class="kaiwa-pillar-head">
                  <span class="kaiwa-pillar-label">Trọng âm Tokyo</span>
                  <span class="kaiwa-pillar-val ${getScoreColorClass(pitchScore)}">${pitchScore}<span class="kaiwa-score-denom">/100</span></span>
                </div>
                <div class="kaiwa-pillar-track"><div class="kaiwa-pillar-fill ${getScoreColorClass(pitchScore)}" style="width:${pitchScore}%"></div></div>
              </div>
              <div class="kaiwa-pillar-item">
                <div class="kaiwa-pillar-head">
                  <span class="kaiwa-pillar-label">Nhịp độ &amp; Trôi chảy</span>
                  <span class="kaiwa-pillar-val ${getScoreColorClass(tempoScore)}">${tempoScore}<span class="kaiwa-score-denom">/100</span></span>
                </div>
                <div class="kaiwa-pillar-track"><div class="kaiwa-pillar-fill ${getScoreColorClass(tempoScore)}" style="width:${tempoScore}%"></div></div>
              </div>
            </div>
            ${feedbackHtml}
          </div>
        </div>

        <div class="kaiwa-pitch-box">
          <div class="kaiwa-pitch-top">
            <div class="kaiwa-pitch-legend">
              <span class="kaiwa-legend-model">Mẫu</span>
              <span class="kaiwa-legend-user">Bạn</span>
            </div>
            <div>Ngữ điệu giống mẫu: <strong>${evalInfo.pitchSimilarity}%</strong></div>
          </div>
          ${moraStripHtml}
          ${pitchSvg}
          <div class="kaiwa-pitch-advice">${coachingText}</div>
        </div>

        <div class="kaiwa-eval-actions">
          <button type="button" class="kaiwa-mini-btn" onclick="${playSampleFn}">${KAIWA_ICONS.play} <span>Giọng mẫu</span></button>
          ${state.userBlobs[lineId] ? `<button type="button" class="kaiwa-mini-btn kaiwa-btn-play-user ${isPlayingUser ? 'is-playing' : ''}" onclick="KaiwaEngine.playUserVoice('${lineId}')">${KAIWA_ICONS.userVoice || KAIWA_ICONS.play} <span>${getRecordingLabel(lineId)}</span></button>` : ''}
          <button type="button" class="kaiwa-mini-btn" onclick="KaiwaEngine.recordLine('${lineId}')">${KAIWA_ICONS.mic} <span>Đọc lại</span></button>
          <button type="button" class="kaiwa-close-eval" onclick="KaiwaEngine.toggleEvalPanel('${lineId}', false)">Đóng</button>
        </div>
      </div>
    `;
  }

  /**
   * Render a single Dialogue Line Card with Inline Pronunciation Highlight & On-Demand Intonation Drawer
   */
  function renderDialogueLineCard(line, idx, lessonData) {
    const score = (state.progress.scores && state.progress.scores[line.id]) !== undefined
      ? state.progress.scores[line.id]
      : null;
    const isPassed = score !== null && score >= 70;
    const isPlaying = state.playingLineId === line.id;
    const isLooping = state.loopingLineId === line.id;
    const isStopping = state.stoppingRecordingLineId === line.id;
    const isRecording = state.recordingLineId === line.id && !isStopping;
    const isOpenEval = !!state.openEvalByLine[line.id];
    const isOpenExp = !!state.openExpByLine[line.id];
    const evalInfo = (state.progress.evalData && state.progress.evalData[line.id]) || null;
    const hasUserVoice = Boolean(state.userBlobs[line.id]);
    const isPlayingUser = state.playingUserVoiceLineId === line.id;

    const highlightedJpHtml = renderHighlightedJapanese(line.jp, evalInfo);
    const pitchArrowMap = { up: '↗', down: '↘', flat: '→' };
    const endPitchArrow = pitchArrowMap[(evalInfo && evalInfo.modelEndPitch) || line.endPitch || 'down'] || '↘';

    let evalPanelHtml = '';
    if (isOpenEval) {
      const activeEval = evalInfo || (score !== null ? {
        score: score,
        heardText: '(Đã lưu kết quả trước đó)',
        pitchSimilarity: score >= 85 ? 90 : (score >= 70 ? 75 : 60),
        charDiffs: [{ char: line.rawJp || line.jp, status: score >= 70 ? 'ok' : 'miss' }],
        modelCurve: line.pitchCurve || [0.32, 0.68, 0.62, 0.56, 0.50, 0.44, 0.36],
        userCurve: (line.pitchCurve || [0.32, 0.68, 0.62, 0.56, 0.50, 0.44, 0.36]).map(v => Math.max(0.18, Math.min(0.92, v + (score >= 85 ? 0.04 : -0.06)))),
        modelEndPitch: line.endPitch || 'down',
        userEndPitch: line.endPitch || 'down'
      } : null);
      if (activeEval) {
        evalPanelHtml = buildEvalPanelHtml(line.id, activeEval, line.endPitch, `KaiwaEngine.playLine('${line.id}')`);
      }
    }

    const scoreBadgeClass = score !== null
      ? (score < 70 ? 'is-low' : (score < 85 ? 'is-warn' : 'is-good'))
      : '';

    const mode = (state.practiceMode === 'shadowing' || state.practiceMode === 'roleplay')
      ? state.practiceMode
      : 'free';
    const isFree = mode === 'free';
    const isShadowing = mode === 'shadowing';
    const isRoleplay = mode === 'roleplay';
    const isUserRole = isRoleplay && line.speakerId === state.roleplayCharId;

    const showInfoBtn = isFree;
    const showSpeakerBtn = true;
    const showLoopBtn = isShadowing;
    const showMicBtn = isFree || (isRoleplay && isUserRole);
    const showScorePill = score !== null && (isFree || (isRoleplay && isUserRole));

    return `
      <div class="kaiwa-line-card ${isPassed ? 'is-passed' : ''} ${isPlaying ? 'is-playing' : ''} ${isLooping ? 'is-looping-card' : ''} ${isRoleplay ? (isUserRole ? 'is-user-turn' : 'is-partner-turn') : ''} ${isOpenExp ? 'has-open-exp' : ''}" id="kaiwa-card-${line.id}">
        <div class="kaiwa-line-top">
          <div class="kaiwa-line-top-left">
            <span class="${getSpkBadgeClass(line.speakerBadge, line.speakerColor)}">${line.speakerBadge}</span>
            ${showInfoBtn ? `<button type="button" class="kaiwa-info-icon-btn ${isOpenExp ? 'is-active' : ''}" title="Giải thích ngữ pháp & từ vựng" aria-label="Giải thích ngữ pháp và từ vựng" onclick="KaiwaEngine.toggleExp('${line.id}', event)">${KAIWA_ICONS.info}</button>` : ''}
            ${isRoleplay ? `<span class="kaiwa-role-turn-tag ${isUserRole ? 'is-user' : 'is-partner'}">${isUserRole ? 'Vai của bạn' : 'Máy nói'}</span>` : ''}
            ${isLooping ? `<span class="kaiwa-loop-pill" title="Đang phát lặp lại (Chạm loa để dừng)">${KAIWA_ICONS.repeat} <span>Lặp</span></span>` : ''}
          </div>
          <div class="kaiwa-line-top-right">
            ${isPassed && !isShadowing ? `<span class="kaiwa-pass-label">✓ Đọc đạt</span>` : ''}
          </div>
        </div>

        ${isOpenExp ? buildExpPopoverHtml(line) : ''}

        <div class="kaiwa-line-middle">
          <div class="kaiwa-bubble" onclick="KaiwaEngine.onBubbleClick('${line.id}', event)" style="cursor:pointer;" title="Chạm vào câu thoại để nghe riêng câu này">
            <div class="kaiwa-line-jp">${highlightedJpHtml}</div>
            <div class="kaiwa-line-vi">${line.vi}</div>
          </div>
          <div class="kaiwa-line-actions">
            ${showScorePill ? `<button type="button" class="kaiwa-score-pill ${scoreBadgeClass} ${isOpenEval ? 'is-open' : ''}" title="Bấm để xem chi tiết ngữ điệu ${endPitchArrow} &amp; nghe lại giọng (${score}/100)" aria-label="Điểm phát âm ${score} trên 100. Bấm để xem chi tiết ngữ điệu và nghe lại giọng" aria-expanded="${isOpenEval ? 'true' : 'false'}" onclick="KaiwaEngine.toggleEvalPanel('${line.id}')">${score}/100</button>` : ''}
            ${showSpeakerBtn ? `<button type="button" class="kaiwa-circle-btn kaiwa-btn-speaker ${isPlaying ? 'is-playing' : ''} ${isLooping ? 'is-looping' : ''}" title="Chạm để nghe phát âm mẫu • Nhấn giữ nếu muốn lặp" aria-label="Chạm để nghe phát âm mẫu, nhấn giữ nếu muốn lặp" onpointerdown="KaiwaEngine.onSpeakerDown('${line.id}', event)" onpointerup="KaiwaEngine.onSpeakerUp('${line.id}', event)" onpointerleave="KaiwaEngine.onSpeakerUp('${line.id}', event)" onpointercancel="KaiwaEngine.onSpeakerUp('${line.id}', event)" oncontextmenu="return KaiwaEngine.onSpeakerContextMenu('${line.id}', event)" onclick="KaiwaEngine.onSpeakerClick('${line.id}', event)">${KAIWA_ICONS.speaker}</button>` : ''}
            ${hasUserVoice && !isShadowing ? `<button type="button" class="kaiwa-circle-btn kaiwa-btn-user-voice ${isPlayingUser ? 'is-playing' : ''}" title="${getRecordingLabel(line.id)}" aria-label="${getRecordingLabel(line.id)}" onclick="KaiwaEngine.playUserVoice('${line.id}')">${KAIWA_ICONS.userVoice}</button>` : ''}
            ${showLoopBtn ? `<button type="button" class="kaiwa-circle-btn kaiwa-btn-loop ${isLooping ? 'is-looping' : ''}" title="Bật/tắt lặp câu này để nhại theo" aria-label="Lặp câu này" onclick="KaiwaEngine.toggleLoopLine('${line.id}')">${KAIWA_ICONS.repeat}</button>` : ''}
            ${showMicBtn ? `<button type="button" class="kaiwa-circle-btn kaiwa-btn-mic ${isRecording ? 'is-recording' : (isStopping ? 'is-stopping' : '')}" title="${isRecording ? 'Đang thu âm... Chạm để dừng và chấm điểm' : (isStopping ? 'Đang chấm điểm... Chạm lần nữa để chốt ngay' : 'Chạm để thu âm chấm điểm')}" aria-label="${isRecording ? 'Đang thu âm, chạm để dừng' : (isStopping ? 'Đang xử lý kết quả' : 'Chạm để thu âm chấm điểm')}" onclick="KaiwaEngine.recordLine('${line.id}')">${KAIWA_ICONS.mic}</button>` : ''}
          </div>
        </div>

        ${!isShadowing ? evalPanelHtml : ''}
      </div>
    `;
  }

  /**
   * Render Anchored Floating Explanation Popover (Bung từ nút ! nổi trên câu hội thoại)
   */
  function buildExpPopoverHtml(line) {
    if (!line) return '';
    return `
      <div class="kaiwa-exp-popover" id="kaiwa-exp-bottom-sheet" role="dialog" aria-modal="false" aria-label="Giải thích ngữ pháp và từ vựng">
        <div class="kaiwa-exp-popover-header">
          <div class="kaiwa-exp-popover-title">
            <span class="kaiwa-exp-title-icon">${KAIWA_ICONS.info}</span>
            <span class="kaiwa-exp-title-text">Giải thích ngữ pháp &amp; từ vựng</span>
          </div>
          <button type="button" class="kaiwa-exp-popover-close-btn kaiwa-bs-close-btn" title="Đóng giải thích" aria-label="Đóng giải thích" onclick="KaiwaEngine.closeExpPopover(event)">
            ${KAIWA_ICONS.close}
          </button>
        </div>
        <div class="kaiwa-exp-popover-body">
          <div class="kaiwa-exp-popover-quote kaiwa-bs-quote">
            <div class="kaiwa-exp-popover-quote-text kaiwa-bs-quote-text">
              <div class="kaiwa-line-jp kaiwa-exp-popover-quote-jp">${line.jp}</div>
              <div class="kaiwa-line-vi kaiwa-exp-popover-quote-vi">${line.vi}</div>
            </div>
            <button type="button" class="kaiwa-circle-btn kaiwa-btn-speaker" title="Nghe câu này" aria-label="Nghe phát âm mẫu" onclick="KaiwaEngine.playLine('${line.id}', event)">
              ${KAIWA_ICONS.speaker}
            </button>
          </div>
          <div class="kaiwa-exp-box kaiwa-exp-popover-content kaiwa-bs-exp-content">
            ${line.explanation || 'Mẫu câu giao tiếp trọng tâm trong bài.'}
          </div>
        </div>
      </div>
    `;
  }

  function renderExplanationBottomSheet() {
    return '';
  }

  /**
   * Apply substitution values to Renshuu C lines with <u>...</u> placeholders
   * and dynamically update the Vietnamese translation (line.vi) using viValues.
   */
  function applyRenshuuSubstitution(rc, subIdx) {
    const subs = rc.substitutions || [];
    const baseSub = subs[0] || null;
    const chosen = subs[subIdx] || subs[0];
    if (!chosen || !Array.isArray(chosen.values) || chosen.values.length === 0) {
      return rc.lines || [];
    }
    let slotCounter = 0;
    const timingsList = Array.isArray(chosen.lineTimings) ? chosen.lineTimings : [];
    const metaList = Array.isArray(chosen.lineMeta) ? chosen.lineMeta : [];
    return (rc.lines || []).map((line, lineIdx) => {
      const slotIndicesInLine = [];
      const replacedJp = String(line.jp).replace(/<u>[\s\S]*?<\/u>/g, () => {
        const currentSlot = slotCounter;
        const replacement = chosen.values[currentSlot] !== undefined
          ? chosen.values[currentSlot]
          : chosen.values[chosen.values.length - 1];
        slotIndicesInLine.push(currentSlot);
        slotCounter++;
        return `<u>${replacement}</u>`;
      });

      let replacedVi = String(line.vi || '');
      if (Array.isArray(chosen.viLines) && typeof chosen.viLines[lineIdx] === 'string' && chosen.viLines[lineIdx]) {
        replacedVi = chosen.viLines[lineIdx];
      } else if (
        subIdx > 0 &&
        baseSub &&
        Array.isArray(baseSub.viValues) &&
        Array.isArray(chosen.viValues)
      ) {
        const indicesToTry = slotIndicesInLine.length > 0
          ? slotIndicesInLine
          : baseSub.viValues.map((_, i) => i);
        indicesToTry.forEach(idx => {
          const fromVi = baseSub.viValues[idx];
          const toVi = chosen.viValues[idx];
          if (!fromVi || !toVi || fromVi === toVi) return;
          const exactIdx = replacedVi.indexOf(fromVi);
          if (exactIdx !== -1) {
            replacedVi = replacedVi.slice(0, exactIdx) + toVi + replacedVi.slice(exactIdx + fromVi.length);
            return;
          }
          const escaped = String(fromVi).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const match = replacedVi.match(new RegExp(escaped, 'i'));
          if (match && typeof match.index === 'number') {
            const matchedStr = match[0];
            const firstCh = matchedStr.charAt(0);
            const startsUpper = Boolean(firstCh && firstCh === firstCh.toUpperCase() && firstCh !== firstCh.toLowerCase());
            const adjustedTo = startsUpper
              ? toVi.charAt(0).toUpperCase() + toVi.slice(1)
              : toVi;
            replacedVi = replacedVi.slice(0, match.index) + adjustedTo + replacedVi.slice(match.index + matchedStr.length);
          }
        });
      }

      return {
        ...line,
        jp: replacedJp,
        rawJp: stripHtml(replacedJp),
        vi: replacedVi,
        time: timingsList[lineIdx] || null,
        meta: metaList[lineIdx] || null
      };
    });
  }

  /**
   * Render Renshuu C (Luyện tập C - 3 mẫu hội thoại thay thế)
   */
  function renderRenshuuCTab(lessonData) {
    const rcList = lessonData.renshuuC || [];
    if (rcList.length === 0) {
      return `<div class="kaiwa-rc-card">Chưa có dữ liệu Luyện tập C.</div>`;
    }

    const cardsHtml = rcList.map((rc) => {
      const activeSubIdx = state.rcSubIndex[rc.id] || 0;
      const substitutedLines = applyRenshuuSubstitution(rc, activeSubIdx);
      const activeSubObj = (rc.substitutions || [])[activeSubIdx] || (rc.substitutions || [])[0] || null;
      const activeSubHint = activeSubObj ? extractRenshuuSubHint(activeSubObj.label) : '';

      const subsButtonsHtml = (rc.substitutions || []).map((sub, sIdx) => {
        const subHint = extractRenshuuSubHint(sub.label);
        const circleGlyph = ZEN_CIRCLED_NUMS[sIdx] || String(sIdx + 1);
        const isActive = sIdx === activeSubIdx;
        const fullTitle = `Mẫu ${sIdx + 1}${subHint ? ': ' + subHint : ''}`;
        return `
          <button type="button" class="kaiwa-sub-pill ${isActive ? 'active' : ''}"
            onclick="KaiwaEngine.selectRenshuuSub('${rc.id}', ${sIdx})"
            title="${fullTitle}"
            aria-label="${fullTitle}"
            aria-pressed="${isActive ? 'true' : 'false'}">
            <span class="kaiwa-zen-glyph">${circleGlyph}</span>
          </button>
        `;
      }).join('');

      const linesHtml = substitutedLines.map((l, lIdx) => {
        const spkColor = String(l.speaker || '').toUpperCase() === 'B' ? 'emerald' : 'blue';
        const rcLineId = `${rc.id}-sub${activeSubIdx}-${lIdx}`;
        const rcScore = (state.progress.scores && state.progress.scores[rcLineId]) !== undefined
          ? state.progress.scores[rcLineId]
          : null;
        const rcEvalInfo = (state.progress.evalData && state.progress.evalData[rcLineId]) || null;
        const isRcStopping = state.stoppingRecordingLineId === rcLineId;
        const isRcRecording = state.recordingLineId === rcLineId && !isRcStopping;
        const isRcPlaying = state.playingLineId === rcLineId;
        const isRcOpenEval = !!state.openEvalByLine[rcLineId];
        const isPlayingUser = state.playingUserVoiceLineId === rcLineId;
        const hasUserVoice = Boolean(state.userBlobs[rcLineId]);
        const highlightedRcJp = renderHighlightedJapanese(l.jp, rcEvalInfo);
        const rcScoreBadgeClass = rcScore !== null
          ? (rcScore < 70 ? 'is-low' : (rcScore < 85 ? 'is-warn' : 'is-good'))
          : '';
        const isQ = /[？?]$|か[。]?$/.test((l.rawJp || '').trim());
        const endPitch = (l.meta && l.meta.endPitch) || (isQ ? 'up' : 'down');
        const endPitchArrow = endPitch === 'up' ? '↗' : '↘';
        const defaultCurve = (l.meta && Array.isArray(l.meta.pitchCurve))
          ? l.meta.pitchCurve
          : [0.32, 0.68, 0.62, 0.56, 0.50, 0.44, isQ ? 0.82 : 0.36];

        let rcEvalPanelHtml = '';
        if (rcScore !== null && isRcOpenEval) {
          const activeEval = rcEvalInfo || {
            score: rcScore,
            heardText: '(Đã lưu kết quả trước đó)',
            pitchSimilarity: rcScore >= 85 ? 90 : (rcScore >= 70 ? 75 : 60),
            charDiffs: [{ char: l.rawJp || l.jp, status: rcScore >= 70 ? 'ok' : 'miss' }],
            modelCurve: defaultCurve,
            userCurve: defaultCurve.map(v => Math.max(0.18, Math.min(0.92, v + (rcScore >= 85 ? 0.04 : -0.06)))),
            modelEndPitch: endPitch,
            userEndPitch: endPitch
          };
          rcEvalPanelHtml = buildEvalPanelHtml(rcLineId, activeEval, endPitch, `KaiwaEngine.playLine('${rcLineId}')`);
        }

        return `
          <div class="kaiwa-line-card ${rcScore !== null && rcScore >= 70 ? 'is-passed' : ''} ${isRcPlaying ? 'is-playing' : ''}" id="kaiwa-card-${rcLineId}" style="margin-bottom:10px;">
            <div class="kaiwa-line-middle">
              <span class="${getSpkBadgeClass(l.speaker, spkColor)}">${l.speaker}</span>
              <div class="kaiwa-bubble" onclick="KaiwaEngine.onBubbleClick('${rcLineId}', event)" style="cursor:pointer;" title="Chạm vào câu thoại để nghe riêng câu này">
                <div class="kaiwa-line-jp">${highlightedRcJp}</div>
                <div class="kaiwa-line-vi">${l.vi}</div>
              </div>
              <div class="kaiwa-line-actions">
                ${rcScore !== null ? `<button type="button" class="kaiwa-score-pill ${rcScoreBadgeClass} ${isRcOpenEval ? 'is-open' : ''}" title="Bấm để xem chi tiết ngữ điệu ${endPitchArrow} &amp; nghe lại giọng (${rcScore}/100)" aria-label="Điểm phát âm ${rcScore} trên 100. Bấm để xem chi tiết ngữ điệu và nghe lại giọng" aria-expanded="${isRcOpenEval ? 'true' : 'false'}" onclick="KaiwaEngine.toggleEvalPanel('${rcLineId}')">${rcScore}/100</button>` : ''}
                <button type="button" class="kaiwa-circle-btn kaiwa-btn-speaker ${isRcPlaying ? 'is-playing' : ''}" title="Chạm để nghe phát âm mẫu" aria-label="Chạm để nghe phát âm mẫu" onclick="KaiwaEngine.playLine('${rcLineId}')">${KAIWA_ICONS.speaker}</button>
                ${hasUserVoice ? `<button type="button" class="kaiwa-circle-btn kaiwa-btn-user-voice ${isPlayingUser ? 'is-playing' : ''}" title="${getRecordingLabel(rcLineId)}" aria-label="${getRecordingLabel(rcLineId)}" onclick="KaiwaEngine.playUserVoice('${rcLineId}')">${KAIWA_ICONS.userVoice}</button>` : ''}
                <button type="button" class="kaiwa-circle-btn kaiwa-btn-mic ${isRcRecording ? 'is-recording' : (isRcStopping ? 'is-stopping' : '')}" title="${isRcRecording ? 'Đang thu âm... Chạm để dừng và chấm điểm' : (isRcStopping ? 'Đang chấm điểm... Chạm lần nữa để chốt ngay' : 'Chạm để thu âm chấm điểm')}" aria-label="${isRcRecording ? 'Đang thu âm, chạm để dừng' : (isRcStopping ? 'Đang xử lý kết quả' : 'Chạm để thu âm chấm điểm')}" onclick="KaiwaEngine.recordLine('${rcLineId}')">${KAIWA_ICONS.mic}</button>
              </div>
            </div>
            ${rcEvalPanelHtml}
          </div>
        `;
      }).join('');

      return `
        <div class="kaiwa-rc-card" id="kaiwa-rc-${rc.id}">
          <div class="kaiwa-rc-header">
            <h3 class="kaiwa-rc-title">${rc.title}</h3>
            <p class="kaiwa-rc-context">${rc.context}</p>
            <div class="kaiwa-rc-zen-bar">
              <span class="kaiwa-zen-caption">Mẫu:</span>
              <div class="kaiwa-rc-subs" role="tablist" aria-label="Chọn mẫu thay thế">${subsButtonsHtml}</div>
              ${activeSubHint ? `
                <div class="kaiwa-zen-hint-strip" title="Tình huống thay thế hiện tại">
                  <span class="kaiwa-zen-hint-tag">${ZEN_CIRCLED_NUMS[activeSubIdx] || (activeSubIdx + 1)} Mẫu ${activeSubIdx + 1}</span>
                  <span class="kaiwa-zen-hint-divider">•</span>
                  <span class="kaiwa-zen-hint-text">${activeSubHint}</span>
                </div>
              ` : ''}
            </div>
          </div>
          <div>${linesHtml}</div>
        </div>
      `;
    }).join('');

    return `<div class="kaiwa-rc-list">${cardsHtml}</div>`;
  }

  /**
   * Render Kaiwa Quiz Tab (Kiểm tra 10 câu phản xạ & hiểu hội thoại)
   */
  function renderQuizTab(lessonData) {
    const questions = lessonData.quiz || [];
    let correctCount = 0;
    questions.forEach(q => {
      if (state.quizAnswers[q.id] === q.correctIdx) correctCount++;
    });

    const itemsHtml = questions.map((q, qIdx) => {
      const picked = state.quizAnswers[q.id];
      const isAnswered = picked !== undefined;

      const optsHtml = (q.options || []).map((opt, oIdx) => {
        let cls = 'kaiwa-quiz-opt';
        if (isAnswered) {
          if (oIdx === q.correctIdx) cls += ' is-correct';
          else if (oIdx === picked) cls += ' is-wrong';
        }
        return `
          <button type="button" class="${cls}" onclick="KaiwaEngine.answerQuiz('${q.id}', ${oIdx})">
            <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}
          </button>
        `;
      }).join('');

      return `
        <div class="kaiwa-quiz-item" id="kaiwa-q-${q.id}">
          <div class="kaiwa-quiz-q">Câu ${qIdx + 1}: ${q.question}</div>
          <div class="kaiwa-quiz-opts">${optsHtml}</div>
          ${isAnswered ? `<div class="kaiwa-quiz-exp"><strong>Giải thích:</strong> ${q.explanation}</div>` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="kaiwa-quiz-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
          <h3 style="margin:0;color:var(--text-primary);font-size:1.2rem;">Kiểm tra phản xạ Hội thoại & 練習C (${questions.length} câu)</h3>
          <span class="kaiwa-banner-badge">Điểm: ${correctCount}/${questions.length}</span>
        </div>
        ${itemsHtml}
      </div>
    `;
  }

  /**
   * Main HTML builder for a Kaiwa Lesson
   */
  function buildKaiwaHtml(lessonData) {
    const num = lessonData.lesson;
    const totalLines = (lessonData.dialogue || []).length;
    const passedLines = getPassedCount(lessonData);
    const totalRcSentences = getTotalRenshuuSentences(lessonData);

    const charNamesJoined = (lessonData.characters || []).map(c => c.badgeJp).join(' · ');

    const objectivesHtml = (lessonData.objectives || []).map(obj => `
      <li class="kaiwa-obj-item">
        <span class="kaiwa-obj-check">${KAIWA_ICONS.check}</span>
        <span>${obj}</span>
      </li>
    `).join('');

    const castCardsHtml = (lessonData.characters || []).map(c => `
      <div class="kaiwa-cast-card">
        <span class="${getSpkBadgeClass(c.badgeJp, c.color)}">${c.badgeJp}</span>
        <div class="kaiwa-cast-info">
          <div class="kaiwa-cast-name">${c.fullNameJp}</div>
          <div class="kaiwa-cast-role">${c.roleVi}</div>
        </div>
      </div>
    `).join('');

    const activeMode = (state.practiceMode === 'shadowing' || state.practiceMode === 'roleplay')
      ? state.practiceMode
      : 'free';

    const roleplayBarHtml = activeMode === 'roleplay' ? `
      <div class="kaiwa-roleplay-bar">
        <span class="kaiwa-roleplay-label">Chọn vai:</span>
        <div class="kaiwa-roleplay-chips">
          ${(lessonData.characters || []).map(c => `
            <button type="button" class="kaiwa-role-chip ${state.roleplayCharId === c.id ? 'active' : ''}"
              onclick="KaiwaEngine.selectRoleplayCharacter('${c.id}')">
              ${c.badgeJp}
            </button>
          `).join('')}
        </div>
        <button type="button" class="kaiwa-mini-btn kaiwa-roleplay-start-btn ${state.isRoleplaying ? 'is-active' : ''}" onclick="KaiwaEngine.startRoleplaySession()">
          ${state.isRoleplaying ? `${KAIWA_ICONS.pause} <span>Dừng nhập vai</span>` : `${KAIWA_ICONS.play} <span>Bắt đầu nhập vai</span>`}
        </button>
      </div>
    ` : '';

    let mainStageHtml = '';
    if (state.activeTab === 'renshuu') {
      mainStageHtml = renderRenshuuCTab(lessonData);
    } else {
      const dialogueCardsHtml = (lessonData.dialogue || []).map((line, idx) =>
        renderDialogueLineCard(line, idx, lessonData)
      ).join('');

      const bounds = getDialogueTimeBounds(lessonData);
      const totalSec = bounds
        ? Math.max(1, Math.round(bounds.endSec - bounds.startSec))
        : Math.max(15, totalLines * 3 - 4);
      const totalTimeStr = formatClockSec(totalSec);

      const currentIdx = state.playingLineId
        ? (lessonData.dialogue || []).findIndex(l => l.id === state.playingLineId)
        : -1;
      const progressPct = currentIdx >= 0 && totalLines > 0
        ? Math.min(100, Math.round(((currentIdx + 1) / totalLines) * 100))
        : (state.isPlayingAll ? 14 : 0);
      const elapsedSec = currentIdx >= 0
        ? Math.min(totalSec, Math.max(1, Math.round(((currentIdx + 1) / Math.max(1, totalLines)) * totalSec)))
        : 0;
      const elapsedStr = formatClockSec(elapsedSec);
      const statusTimerStr = currentIdx >= 0
        ? `Câu ${currentIdx + 1}/${totalLines} · ${elapsedStr} / ${totalTimeStr}`
        : `0:00 / ${totalTimeStr}`;

      const playerBarHtml = activeMode !== 'roleplay' ? `
        <div class="kaiwa-player-top">
          <button type="button" class="kaiwa-master-play-btn" onclick="KaiwaEngine.togglePlayAll()" aria-label="${activeMode === 'shadowing' ? 'Chạy Shadowing cả bài' : 'Nghe cả bài'}">
            ${state.isPlayingAll ? KAIWA_ICONS.pause : KAIWA_ICONS.masterPlay}
          </button>
          <div class="kaiwa-player-track">
            <div class="kaiwa-player-meta">
              <span>${activeMode === 'shadowing' ? 'Shadowing cả bài (nghỉ nhịp sau mỗi câu)' : 'Nghe cả bài'}</span>
              <span class="kaiwa-player-time" id="kaiwa-master-timer">${statusTimerStr}</span>
            </div>
            <div class="kaiwa-progress-bar" onclick="KaiwaEngine.seekMasterPlayer(event)" title="Bấm vào thanh tiến trình để chuyển nhanh đến câu thoại">
              <div class="kaiwa-progress-fill" id="kaiwa-master-progress" style="width:${progressPct}%"></div>
            </div>
          </div>
        </div>
      ` : '';

      mainStageHtml = `
        <div class="kaiwa-stage-card">
          <div class="kaiwa-stage-banner">
            <h2 class="kaiwa-banner-title">
              <span>${lessonData.titleJp}</span>
              <span class="kaiwa-banner-sub">${lessonData.subtitleVi || lessonData.titleVi}</span>
            </h2>
            <span class="kaiwa-banner-badge">Đọc đạt ${passedLines}/${totalLines}</span>
          </div>

          <div class="kaiwa-stage-body">
            <p class="kaiwa-context-text"><strong>Bối cảnh:</strong> ${lessonData.context}</p>

            <div class="kaiwa-cast-grid">
              ${castCardsHtml}
            </div>

            <div class="kaiwa-master-player">
              <div class="kaiwa-mode-segmented" role="tablist" aria-label="Chế độ luyện tập">
                <button type="button" role="tab" aria-selected="${activeMode === 'free' ? 'true' : 'false'}"
                  class="kaiwa-mode-pill ${activeMode === 'free' ? 'active' : ''}"
                  onclick="KaiwaEngine.setPracticeMode('free')">
                  Tự do
                </button>
                <button type="button" role="tab" aria-selected="${activeMode === 'shadowing' ? 'true' : 'false'}"
                  class="kaiwa-mode-pill ${activeMode === 'shadowing' ? 'active' : ''}"
                  onclick="KaiwaEngine.setPracticeMode('shadowing')">
                  Shadowing
                </button>
                <button type="button" role="tab" aria-selected="${activeMode === 'roleplay' ? 'true' : 'false'}"
                  class="kaiwa-mode-pill ${activeMode === 'roleplay' ? 'active' : ''}"
                  onclick="KaiwaEngine.setPracticeMode('roleplay')">
                  Nhập vai
                </button>
              </div>

              ${playerBarHtml}
              ${roleplayBarHtml}
            </div>

            <div class="kaiwa-dialogue-list">
              ${dialogueCardsHtml}
            </div>
          </div>
        </div>
      `;
    }

    const wrapperClasses = [
      'kaiwa-container',
      `kaiwa-mode-is-${activeMode}`,
      !state.showFurigana ? 'kaiwa-hide-furi' : '',
      state.hideVi ? 'kaiwa-hide-vi' : '',
      state.maskJp ? 'kaiwa-mask-jp' : '',
      state.viewMode === 'compact' ? 'kaiwa-compact-mode' : ''
    ].filter(Boolean).join(' ');

    return `
      <div class="${wrapperClasses}" id="kaiwa-root-container">
        <div class="kaiwa-shell">
          <div class="kaiwa-top-bar">
            <h1 class="kaiwa-page-title">MINNA NO NIHONGO BÀI ${num} – HỘI THOẠI</h1>
            <div class="kaiwa-top-controls">
              <button type="button" class="kaiwa-ctrl-btn ${!state.showFurigana ? 'is-off' : ''}"
                onclick="KaiwaEngine.toggleFurigana()">
                Hiện/Ẩn Furigana
              </button>
              <div class="kaiwa-view-segment" role="group" aria-label="Chế độ hiển thị">
                <button type="button" class="kaiwa-seg-btn ${state.viewMode === 'full' ? 'active' : ''}"
                  onclick="KaiwaEngine.setViewMode('full')">Đầy đủ</button>
                <button type="button" class="kaiwa-seg-btn ${state.viewMode === 'compact' ? 'active' : ''}"
                  onclick="KaiwaEngine.setViewMode('compact')">Tối giản</button>
              </div>
            </div>
          </div>

          <div class="kaiwa-hero-card">
            <div class="kaiwa-breadcrumb">Minna no Nihongo · ${lessonData.level} · Bài ${num} · Hội thoại</div>
            <h2 class="kaiwa-hero-heading">Hội thoại bài ${num}: ${lessonData.titleJp} – ${lessonData.titleVi}</h2>
            <p class="kaiwa-hero-desc">
              Nghe từng câu trong hội thoại gốc, luyện Shadowing, nhập vai ${charNamesJoined} và tự chấm phát âm. Sau đó luyện 3 đoạn hội thoại (<ruby>練習<rt>れんしゅう</rt></ruby>C) theo tình huống.
            </p>
            <div class="kaiwa-obj-title">Học xong bài này, bạn có thể:</div>
            <ul class="kaiwa-obj-list">
              ${objectivesHtml}
            </ul>

            <div class="kaiwa-filter-pills">
              <button type="button" class="kaiwa-pill-toggle ${state.slowAudio ? 'active' : ''}"
                onclick="KaiwaEngine.toggleSlowAudio()">Đọc chậm</button>
              <button type="button" class="kaiwa-pill-toggle ${state.hideVi ? 'active' : ''}"
                onclick="KaiwaEngine.toggleHideVi()">Ẩn nghĩa tiếng Việt</button>
              <button type="button" class="kaiwa-pill-toggle ${state.maskJp ? 'active' : ''}"
                onclick="KaiwaEngine.toggleMaskJp()">Che tiếng Nhật</button>
            </div>
          </div>

          <div class="kaiwa-main-tabs" role="tablist">
            <button type="button" class="kaiwa-main-tab ${state.activeTab === 'dialogue' ? 'active' : ''}"
              onclick="KaiwaEngine.setTab('dialogue')">
              <span class="kaiwa-tab-title">Hội thoại</span>
              <span class="kaiwa-tab-sub">Đọc đạt ${passedLines}/${totalLines} câu</span>
            </button>
            <button type="button" class="kaiwa-main-tab ${state.activeTab === 'renshuu' ? 'active' : ''}"
              onclick="KaiwaEngine.setTab('renshuu')">
              <span class="kaiwa-tab-title">Luyện tập C</span>
              <span class="kaiwa-tab-sub">3 mẫu · ${totalRcSentences} câu</span>
            </button>
          </div>

          ${mainStageHtml}
        </div>
        ${state.activeExpLineId ? `<div class="kaiwa-exp-backdrop" onclick="KaiwaEngine.closeExpPopover(event)"></div>` : ''}
      </div>
    `;
  }

  function renderKaiwaModule(moduleId, containerEl) {
    ensureStylesheetLoaded();
    if (moduleId && moduleId !== state.currentLessonId) {
      cancelRecording(false);
      state.isPlayingAll = false;
      state.playingLineId = null;
      state.loopingLineId = null;
      state.isRoleplaying = false;
      if (masterTimer) {
        clearTimeout(masterTimer);
        masterTimer = null;
      }
      if (roleplayTimer) {
        clearTimeout(roleplayTimer);
        roleplayTimer = null;
      }
      stopKaiwaAudioResources();
    }
    if (moduleId) state.currentLessonId = moduleId;
    const lessonData = getLessonData(state.currentLessonId);

    const target = containerEl || (typeof document !== 'undefined' ? document.getElementById('lesson-content') : null);
    if (target) lastMountContainer = target;
    if (!lessonData) {
      const emptyHtml = `<div class="kaiwa-container"><div class="kaiwa-shell">Đang tải dữ liệu Hội thoại (${state.currentLessonId})...</div></div>`;
      if (target) target.innerHTML = emptyHtml;
      return emptyHtml;
    }

    if (!state.roleplayCharId && lessonData.characters && lessonData.characters.length > 0) {
      state.roleplayCharId = lessonData.characters[0].id;
    }

    // Ensure first line has default sample score 100 on first visit if user wants immediate preview or keep clean
    const syncBarHtml = typeof root.renderModuleSyncBar === 'function'
      ? root.renderModuleSyncBar(lessonData.lesson, 'kaiwa')
      : '';
    const footerNavHtml = typeof root.renderModuleFooterNav === 'function'
      ? root.renderModuleFooterNav(lessonData.lesson, 'kaiwa')
      : '';

    const fullHtml = syncBarHtml + buildKaiwaHtml(lessonData) + footerNavHtml;
    if (target) {
      target.innerHTML = fullHtml;
    }
    return fullHtml;
  }

  function rerender() {
    if (typeof document !== 'undefined') {
      const content = document.getElementById('lesson-content');
      if (content) {
        renderKaiwaModule(state.currentLessonId, content);
        const activeId = state.recordingLineId || (state.isPlayingAll || state.isRoleplaying ? state.playingLineId : null);
        if (activeId && typeof document.getElementById === 'function') {
          const activeCard = document.getElementById(`kaiwa-card-${activeId}`);
          if (activeCard && typeof activeCard.scrollIntoView === 'function') {
            try {
              activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } catch (e) {}
          }
        }
      }
    }
  }

  function stopContinuousPlaybackResources() {
    if (activeContinuousRafId !== null) {
      try {
        if (typeof root.cancelAnimationFrame === 'function') {
          root.cancelAnimationFrame(activeContinuousRafId);
        }
      } catch (e) {}
      activeContinuousRafId = null;
    }
    if (activeContinuousLoadTimer) {
      clearTimeout(activeContinuousLoadTimer);
      activeContinuousLoadTimer = null;
    }
    if (activeContinuousAudio) {
      try {
        if (activeContinuousHandlers && typeof activeContinuousAudio.removeEventListener === 'function') {
          if (activeContinuousHandlers.timeupdate) activeContinuousAudio.removeEventListener('timeupdate', activeContinuousHandlers.timeupdate);
          if (activeContinuousHandlers.ended) activeContinuousAudio.removeEventListener('ended', activeContinuousHandlers.ended);
          if (activeContinuousHandlers.error) activeContinuousAudio.removeEventListener('error', activeContinuousHandlers.error);
          if (activeContinuousHandlers.loadedmetadata) activeContinuousAudio.removeEventListener('loadedmetadata', activeContinuousHandlers.loadedmetadata);
          if (activeContinuousHandlers.seeked) activeContinuousAudio.removeEventListener('seeked', activeContinuousHandlers.seeked);
        }
        activeContinuousAudio.pause();
      } catch (e) {}
      activeContinuousAudio = null;
    }
    activeContinuousHandlers = null;
    activeContinuousBounds = null;
  }

  function applyPreservePitch(audioEl) {
    if (!audioEl) return;
    try {
      if ('preservesPitch' in audioEl) audioEl.preservesPitch = true;
      if ('mozPreservesPitch' in audioEl) audioEl.mozPreservesPitch = true;
      if ('webkitPreservesPitch' in audioEl) audioEl.webkitPreservesPitch = true;
    } catch (e) {}
  }

  function stopKaiwaAudioResources() {
    currentKaiwaSessionId++;
    stopContinuousPlaybackResources();
    if (activeSpriteRafId !== null) {
      try {
        if (typeof root.cancelAnimationFrame === 'function') {
          root.cancelAnimationFrame(activeSpriteRafId);
        }
      } catch (e) {}
      activeSpriteRafId = null;
    }
    if (activeSpriteTimer) {
      clearTimeout(activeSpriteTimer);
      activeSpriteTimer = null;
    }
    if (activeSpriteLoadTimer) {
      clearTimeout(activeSpriteLoadTimer);
      activeSpriteLoadTimer = null;
    }
    if (activeSpriteSource) {
      try {
        activeSpriteSource.onended = null;
        activeSpriteSource.stop(0);
        activeSpriteSource.disconnect();
      } catch (e) {}
      activeSpriteSource = null;
    }
    if (activeSpriteAudio) {
      try {
        if (typeof activeSpriteAudio.removeEventListener === 'function') {
          if (activeSpriteTimeUpdate) activeSpriteAudio.removeEventListener('timeupdate', activeSpriteTimeUpdate);
          if (activeSpriteEndHandler) activeSpriteAudio.removeEventListener('ended', activeSpriteEndHandler);
          if (activeSpriteErrHandler) activeSpriteAudio.removeEventListener('error', activeSpriteErrHandler);
          if (activeSpriteSeekedHandler) activeSpriteAudio.removeEventListener('seeked', activeSpriteSeekedHandler);
        }
        activeSpriteAudio.pause();
      } catch (e) {}
      activeSpriteAudio = null;
      activeSpriteTimeUpdate = null;
      activeSpriteEndHandler = null;
      activeSpriteErrHandler = null;
      activeSpriteSeekedHandler = null;
    }
    if (activeUserAudio) {
      try {
        activeUserAudio.pause();
        activeUserAudio.currentTime = 0;
      } catch (e) {}
      activeUserAudio = null;
    }
    if (root.speechSynthesis) {
      try { root.speechSynthesis.cancel(); } catch (e) {}
    }
    // Đồng bộ dừng sang app.js (nếu có) có cờ chống đệ quy chéo
    if (typeof root.stopAllSpeechAudio === 'function' && !root._suppressKaiwaCrossStop) {
      try {
        root._suppressKaiwaCrossStop = true;
        root.stopAllSpeechAudio();
      } catch (e) {
      } finally {
        root._suppressKaiwaCrossStop = false;
      }
    }
  }

  function stopAllKaiwaAudio() {
    const hadUiPlayback = Boolean(state.isPlayingAll || state.playingLineId || state.loopingLineId);
    if (masterTimer) {
      clearTimeout(masterTimer);
      masterTimer = null;
    }
    state.isPlayingAll = false;
    state.playingLineId = null;
    state.loopingLineId = null;
    stopKaiwaAudioResources();
    if (hadUiPlayback) {
      syncPlaybackDomState(getLessonData(state.currentLessonId));
    }
  }

  function getOrCreateSpriteAudioContext() {
    const AudioCtx = root.AudioContext || root.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!spriteAudioCtx) {
      try {
        spriteAudioCtx = new AudioCtx();
      } catch (e) {
        return null;
      }
    }
    if (spriteAudioCtx && spriteAudioCtx.state === 'suspended' && typeof spriteAudioCtx.resume === 'function') {
      spriteAudioCtx.resume().catch(function() {});
    }
    return spriteAudioCtx;
  }

  function fetchAndDecodeSpriteBuffer(audioSrc, ctx) {
    if (!audioSrc || !ctx || typeof root.fetch !== 'function') {
      return Promise.resolve(null);
    }
    if (spriteBufferCache[audioSrc]) {
      return Promise.resolve(spriteBufferCache[audioSrc]);
    }
    if (spriteBufferPending[audioSrc]) {
      return spriteBufferPending[audioSrc];
    }

    const pendingPromise = root.fetch(resolveSpriteRuntimeUrl(audioSrc))
      .then(function(res) {
        const ct = (res && res.headers && typeof res.headers.get === 'function')
          ? (res.headers.get('content-type') || res.headers.get('Content-Type') || '')
          : '';
        if (!res.ok || ct.toLowerCase().includes('text/html')) {
          throw new Error('Fetch audio sprite failed');
        }
        return res.arrayBuffer();
      })
      .then(function(arrayBuf) {
        return new Promise(function(resolve, reject) {
          const promiseOrVoid = ctx.decodeAudioData(arrayBuf, resolve, reject);
          if (promiseOrVoid && typeof promiseOrVoid.then === 'function') {
            promiseOrVoid.then(resolve).catch(reject);
          }
        });
      })
      .then(function(audioBuffer) {
        spriteBufferCache[audioSrc] = audioBuffer;
        delete spriteBufferPending[audioSrc];
        return audioBuffer;
      })
      .catch(function() {
        delete spriteBufferPending[audioSrc];
        return null;
      });

    spriteBufferPending[audioSrc] = pendingPromise;
    return pendingPromise;
  }

  function playBufferSpriteSegment(ctx, audioBuffer, startSec, endSec, playbackRate, finishOnce, fallbackOnce, sessionId) {
    if (!ctx || !audioBuffer) {
      if (typeof fallbackOnce === 'function') fallbackOnce();
      return;
    }
    const safeStart = Math.max(0, Number(startSec) || 0);
    const safeEnd = Math.max(safeStart + 0.08, Number(endSec) || (safeStart + 1.0));
    const safeRate = playbackRate > 0 ? playbackRate : 1.0;
    const safeDuration = Math.max(0.08, safeEnd - safeStart);
    const durationMs = Math.ceil((safeDuration / safeRate) * 1000) + 900;

    const launchSource = function() {
      if (typeof sessionId === 'number' && sessionId !== currentKaiwaSessionId) return;
      try {
        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        if (source.playbackRate) source.playbackRate.value = safeRate;
        if (typeof ctx.createGain === 'function' && typeof ctx.currentTime === 'number') {
          const gainNode = ctx.createGain();
          const now = ctx.currentTime;
          const playWallSec = safeDuration / safeRate;
          const fadeSec = Math.min(0.018, playWallSec * 0.2);
          gainNode.gain.setValueAtTime(1.0, now);
          if (playWallSec > fadeSec) {
            gainNode.gain.setValueAtTime(1.0, now + playWallSec - fadeSec);
            gainNode.gain.linearRampToValueAtTime(0.001, now + playWallSec);
          }
          source.connect(gainNode);
          gainNode.connect(ctx.destination);
        } else {
          source.connect(ctx.destination);
        }
        activeSpriteSource = source;
        source.onended = finishOnce;
        activeSpriteTimer = setTimeout(finishOnce, durationMs);
        source.start(0, safeStart, safeDuration);
      } catch (e) {
        if (typeof fallbackOnce === 'function') fallbackOnce();
      }
    };

    if (ctx.state === 'suspended' && typeof ctx.resume === 'function') {
      try {
        const resPromise = ctx.resume();
        if (resPromise && typeof resPromise.then === 'function') {
          resPromise.then(launchSource, launchSource);
          return;
        }
      } catch (e) {}
    }

    launchSource();
  }

  function playHtmlAudioSpriteSegment(audioSrc, startSec, endSec, playbackRate, finishOnce, fallbackOnce, sessionId) {
    let audio = spriteAudioCache[audioSrc];
    if (!audio) {
      try {
        audio = new root.Audio(resolveSpriteRuntimeUrl(audioSrc));
        audio.preload = 'auto';
        spriteAudioCache[audioSrc] = audio;
      } catch (err) {
        if (typeof fallbackOnce === 'function') fallbackOnce();
        return;
      }
    }

    applyPreservePitch(audio);
    activeSpriteAudio = audio;
    const tailEndSec = endSec + 0.04;
    const expectedMs = Math.ceil(((tailEndSec - startSec) / playbackRate) * 1000);
    const durationMs = expectedMs + 450;
    const initialPos = Number(audio.currentTime) || 0;
    let seekSettled = Math.abs(initialPos - startSec) <= 0.04 && initialPos < tailEndSec - 0.15 && !audio.seeking;
    let watchdogRetries = 0;

    const checkBoundary = function() {
      if (sessionId !== currentKaiwaSessionId || activeSpriteAudio !== audio) return true;
      if (audio.seeking) return false;
      const cur = Number(audio.currentTime) || 0;
      if (!seekSettled) {
        if (cur >= startSec - 0.08 && cur <= tailEndSec - 0.03) {
          seekSettled = true;
        } else {
          return false;
        }
      }
      if (cur >= tailEndSec) {
        finishOnce();
        return true;
      }
      return false;
    };

    const pollFrame = function() {
      if (checkBoundary()) return;
      if (typeof root.requestAnimationFrame === 'function') {
        activeSpriteRafId = root.requestAnimationFrame(pollFrame);
      }
    };

    const scheduleWatchdog = function(waitMs) {
      activeSpriteTimer = setTimeout(function() {
        if (sessionId !== currentKaiwaSessionId || activeSpriteAudio !== audio) return;
        const cur = Number(audio.currentTime) || 0;
        if (!audio.paused && !audio.ended && cur < tailEndSec - 0.06 && watchdogRetries < 3) {
          watchdogRetries++;
          const remainingMs = Math.max(250, Math.ceil(((tailEndSec - Math.max(startSec, cur)) / playbackRate) * 1000) + 250);
          scheduleWatchdog(remainingMs);
          return;
        }
        finishOnce();
      }, waitMs);
    };

    activeSpriteSeekedHandler = function() {
      seekSettled = true;
    };
    activeSpriteTimeUpdate = function() {
      checkBoundary();
    };
    activeSpriteEndHandler = finishOnce;
    activeSpriteErrHandler = fallbackOnce;

    if (typeof audio.addEventListener === 'function') {
      audio.addEventListener('seeked', activeSpriteSeekedHandler, { once: true });
      audio.addEventListener('timeupdate', activeSpriteTimeUpdate);
      audio.addEventListener('ended', activeSpriteEndHandler, { once: true });
      audio.addEventListener('error', activeSpriteErrHandler, { once: true });
    }

    function startHtmlPlayback() {
      if (sessionId !== currentKaiwaSessionId) return;
      activeSpriteLoadTimer = setTimeout(fallbackOnce, 5000);
      try {
        applyPreservePitch(audio);
        audio.playbackRate = playbackRate;
        const beforeSeek = Number(audio.currentTime) || 0;
        seekSettled = Math.abs(beforeSeek - startSec) <= 0.04 && beforeSeek < tailEndSec - 0.15 && !audio.seeking;
        audio.currentTime = startSec;
        const afterSeek = Number(audio.currentTime) || 0;
        if (Math.abs(afterSeek - startSec) <= 0.08 && afterSeek < tailEndSec - 0.12 && !audio.seeking) {
          seekSettled = true;
        }
        const playPromise = audio.play();
        const afterStart = function() {
          if (sessionId !== currentKaiwaSessionId || activeSpriteAudio !== audio) return;
          applyPreservePitch(audio);
          audio.playbackRate = playbackRate;
          clearTimeout(activeSpriteLoadTimer);
          activeSpriteLoadTimer = null;
          scheduleWatchdog(durationMs);
          if (typeof root.requestAnimationFrame === 'function') {
            activeSpriteRafId = root.requestAnimationFrame(pollFrame);
          }
        };
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.then(afterStart, fallbackOnce);
        } else {
          afterStart();
        }
      } catch (e) {
        fallbackOnce();
      }
    }

    if (typeof audio.readyState === 'number' && audio.readyState === 0) {
      activeSpriteLoadTimer = setTimeout(function() {
        activeSpriteLoadTimer = null;
        if (sessionId === currentKaiwaSessionId) fallbackOnce();
      }, 5000);
      audio.addEventListener('loadedmetadata', function() {
        if (sessionId !== currentKaiwaSessionId || activeSpriteAudio !== audio) return;
        if (activeSpriteLoadTimer) {
          clearTimeout(activeSpriteLoadTimer);
          activeSpriteLoadTimer = null;
        }
        startHtmlPlayback();
      }, { once: true });
      return;
    }

    startHtmlPlayback();
  }

  /**
   * Tầng 1: Phát đoạn âm thanh (Audio Sprite) theo mốc thời gian [startSec, endSec]
   * từ file MP3 đa nhân vật của bài học (audio/kaiwa/lesson_X.mp3).
   * Ưu tiên Web Audio API (Sprite Buffer) chống giật/trễ, fallback sang HTML5 Audio hoặc TTS.
   */
  function playSpriteSegment(audioSrc, timeRange, onEndCallback, onFallback, previewSpeed) {
    if (
      !audioSrc ||
      !Array.isArray(timeRange) ||
      timeRange.length < 2 ||
      (typeof root.Audio !== 'function' && typeof root.AudioContext !== 'function' && typeof root.webkitAudioContext !== 'function')
    ) {
      if (typeof onFallback === 'function') onFallback();
      else if (typeof onEndCallback === 'function') onEndCallback();
      return;
    }

    const startSec = Math.max(0, Number(timeRange[0]) || 0);
    const endSec = Math.max(startSec + 0.08, Number(timeRange[1]) || (startSec + 2.0));
    const playbackRate = previewSpeed ?? (state.slowAudio ? 0.78 : 1);

    stopKaiwaAudioResources();
    const sessionId = ++currentKaiwaSessionId;

    let settled = false;
    const cleanup = function() {
      if (activeSpriteRafId !== null) {
        try {
          if (typeof root.cancelAnimationFrame === 'function') {
            root.cancelAnimationFrame(activeSpriteRafId);
          }
        } catch (e) {}
        activeSpriteRafId = null;
      }
      if (activeSpriteTimer) {
        clearTimeout(activeSpriteTimer);
        activeSpriteTimer = null;
      }
      if (activeSpriteLoadTimer) {
        clearTimeout(activeSpriteLoadTimer);
        activeSpriteLoadTimer = null;
      }
      if (activeSpriteSource) {
        try {
          activeSpriteSource.onended = null;
          activeSpriteSource.stop(0);
          activeSpriteSource.disconnect();
        } catch (e) {}
        activeSpriteSource = null;
      }
      if (activeSpriteAudio) {
        if (typeof activeSpriteAudio.removeEventListener === 'function') {
          try {
            if (activeSpriteTimeUpdate) activeSpriteAudio.removeEventListener('timeupdate', activeSpriteTimeUpdate);
            if (activeSpriteEndHandler) activeSpriteAudio.removeEventListener('ended', activeSpriteEndHandler);
            if (activeSpriteErrHandler) activeSpriteAudio.removeEventListener('error', activeSpriteErrHandler);
            if (activeSpriteSeekedHandler) activeSpriteAudio.removeEventListener('seeked', activeSpriteSeekedHandler);
          } catch (e) {}
        }
        try { activeSpriteAudio.pause(); } catch (e) {}
        activeSpriteAudio = null;
      }
      activeSpriteTimeUpdate = null;
      activeSpriteEndHandler = null;
      activeSpriteErrHandler = null;
      activeSpriteSeekedHandler = null;
    };

    const finishOnce = function() {
      if (settled || sessionId !== currentKaiwaSessionId) return;
      settled = true;
      cleanup();
      if (typeof onEndCallback === 'function') onEndCallback();
    };

    const fallbackOnce = function() {
      if (settled || sessionId !== currentKaiwaSessionId) return;
      settled = true;
      cleanup();
      if (typeof onFallback === 'function') onFallback();
      else if (typeof onEndCallback === 'function') onEndCallback();
    };

    const ctx = (typeof root.fetch === 'function') ? getOrCreateSpriteAudioContext() : null;

    if (ctx && (previewSpeed === undefined || playbackRate === 1)) {
      if (spriteBufferCache[audioSrc]) {
        playBufferSpriteSegment(ctx, spriteBufferCache[audioSrc], startSec, endSec, playbackRate, finishOnce, fallbackOnce, sessionId);
        return;
      }
      fetchAndDecodeSpriteBuffer(audioSrc, ctx).then(function(buf) {
        if (settled || sessionId !== currentKaiwaSessionId) return;
        if (buf) {
          playBufferSpriteSegment(ctx, buf, startSec, endSec, playbackRate, finishOnce, fallbackOnce, sessionId);
        } else {
          playHtmlAudioSpriteSegment(audioSrc, startSec, endSec, playbackRate, finishOnce, fallbackOnce, sessionId);
        }
      });
      return;
    }

    playHtmlAudioSpriteSegment(audioSrc, startSec, endSec, playbackRate, finishOnce, fallbackOnce, sessionId);
  }

  function playVoiceSample(sample, speed, onDone) {
    playSpriteSegment(sample.src, [sample.start, sample.end], () => onDone(true), () => onDone(false), speed);
  }

  function speakJapanese(text, pitchOpt, onEndCallback, preferredGender, speakerId, rateOpt, contextMeta) {
    const paced = buildNaturalSpeechText(text);
    if (!paced) {
      if (typeof onEndCallback === 'function') onEndCallback();
      return;
    }

    let rate = state.slowAudio ? 0.78 : (Number(rateOpt) || 0.96);
    let safePitch = Math.max(0.88, Math.min(1.12, Number(pitchOpt) || 1.0));

    // Điều biến ngữ điệu cảm xúc (Emotion Prosody) theo nội dung câu thoại & ngữ cảnh đối thoại
    if (root.AudioEngine && typeof root.AudioEngine.computeExpressiveProsody === 'function') {
      const exp = root.AudioEngine.computeExpressiveProsody(paced, speakerId, state.slowAudio, contextMeta || null);
      if (exp) {
        rate = exp.rate;
        safePitch = exp.pitch;
      }
    }

    stopKaiwaAudioResources();
    const sessionId = ++currentKaiwaSessionId;

    if (typeof root.speechSynthesis !== 'undefined' && typeof root.SpeechSynthesisUtterance !== 'undefined') {
      try {
        const utter = new root.SpeechSynthesisUtterance(paced);
        utter.lang = 'ja-JP';
        utter.rate = rate;
        utter.pitch = safePitch;

        let jpVoice = null;
        if (typeof root.speechSynthesis.getVoices === 'function') {
          const voices = root.speechSynthesis.getVoices() || [];
          if (root.AudioEngine && typeof root.AudioEngine.selectBestJapaneseVoice === 'function') {
            jpVoice = root.AudioEngine.selectBestJapaneseVoice(voices, preferredGender, speakerId);
          } else {
            jpVoice = voices.find(v => v.lang === 'ja-JP' || (v.lang && v.lang.startsWith('ja')));
          }
          if (jpVoice) utter.voice = jpVoice;

          // Nếu trình duyệt đã tải danh sách giọng nhưng thiết bị không có giọng tiếng Nhật cục bộ, dùng Online TTS
          if (voices.length > 0 && !jpVoice && typeof root.playOnlineJapaneseAudio === 'function') {
            root.playOnlineJapaneseAudio(paced, onEndCallback);
            return;
          }
        }

        let callbackDone = false;
        const finishOnce = function() {
          if (callbackDone || sessionId !== currentKaiwaSessionId) return;
          callbackDone = true;
          if (typeof onEndCallback === 'function') onEndCallback();
        };

        utter.onend = finishOnce;
        utter.onerror = function(err) {
          if (sessionId !== currentKaiwaSessionId) return;
          const errCode = (err && err.error) || '';
          if (errCode === 'interrupted' || errCode === 'canceled') {
            finishOnce();
            return;
          }
          if (!callbackDone && typeof root.playOnlineJapaneseAudio === 'function') {
            callbackDone = true;
            root.playOnlineJapaneseAudio(paced, onEndCallback);
            return;
          }
          finishOnce();
        };

        // Micro-delay (16ms) an toàn cho Safari WebKit & Android Audio Engine sau cancel()
        setTimeout(function() {
          if (sessionId !== currentKaiwaSessionId) return;
          try {
            if (root.speechSynthesis.paused) {
              root.speechSynthesis.resume();
            }
            root.speechSynthesis.speak(utter);
          } catch (e) {
            if (sessionId === currentKaiwaSessionId && typeof root.playOnlineJapaneseAudio === 'function') {
              root.playOnlineJapaneseAudio(paced, onEndCallback);
            } else {
              finishOnce();
            }
          }
        }, 16);
        return;
      } catch (e) {
        if (typeof root.playOnlineJapaneseAudio === 'function') {
          root.playOnlineJapaneseAudio(paced, onEndCallback);
          return;
        }
      }
    } else if (typeof root.playOnlineJapaneseAudio === 'function') {
      root.playOnlineJapaneseAudio(paced, onEndCallback);
      return;
    }

    if (typeof onEndCallback === 'function') {
      setTimeout(onEndCallback, 450);
    }
  }

  function findLineById(lineId) {
    const lessonData = getLessonData(state.currentLessonId);
    if (!lessonData) return null;
    if (Array.isArray(lessonData.dialogue)) {
      const idx = lessonData.dialogue.findIndex(l => l.id === lineId);
      if (idx >= 0) {
        const found = lessonData.dialogue[idx];
        const prev = idx > 0 ? lessonData.dialogue[idx - 1] : null;
        return Object.assign({}, found, {
          prevText: prev ? (prev.rawJp || prev.jp || '') : '',
          sceneType: lessonData.sceneType || ''
        });
      }
    }
    // Hỗ trợ tìm câu thoại trong Luyện tập C (rcId-subX-lineIdx) kèm gán phân vai nhân vật
    const rcMatch = String(lineId || '').match(/^(.+)-sub(\d+)-(\d+)$/);
    if (rcMatch && Array.isArray(lessonData.renshuuC)) {
      const rcId = rcMatch[1];
      const subIdx = parseInt(rcMatch[2], 10);
      const lIdx = parseInt(rcMatch[3], 10);
      const rcObj = lessonData.renshuuC.find(r => r.id === rcId);
      if (rcObj) {
        const subLines = applyRenshuuSubstitution(rcObj, subIdx);
        if (subLines[lIdx]) {
          const lObj = subLines[lIdx];
          const meta = lObj.meta || null;
          const rawText = lObj.rawJp || '';
          const prevSub = lIdx > 0 && subLines[lIdx - 1] ? (subLines[lIdx - 1].rawJp || subLines[lIdx - 1].jp || '') : '';
          const isQ = /[？?]$|か[。]?$/.test(rawText.trim());
          const chars = lessonData.characters || [];
          // Đảm bảo người nói A và B trong 練習C luôn có 2 giọng và giới tính đối lập rõ ràng
          const charA = chars[0] || { id: 'sato', gender: 'female', voice: 'ja-JP-NanamiNeural' };
          let charB = chars[1] || null;
          if (!charB || charB.voice === charA.voice || charB.gender === charA.gender) {
            charB = charA.gender === 'female'
              ? { id: 'yamada', gender: 'male', voice: 'ja-JP-KeitaNeural' }
              : { id: 'sato', gender: 'female', voice: 'ja-JP-NanamiNeural' };
          }
          const isRoleB = String(lObj.speaker || '').toUpperCase() === 'B';
          const assignedChar = isRoleB ? charB : charA;
          const resolvedSpeakerId = (meta && meta.speakerId) || (assignedChar ? assignedChar.id : (isRoleB ? 'yamada' : 'sato'));
          const resolvedEndPitch = (meta && meta.endPitch) || (isQ ? 'up' : 'down');
          const resolvedCurve = (meta && Array.isArray(meta.pitchCurve))
            ? meta.pitchCurve
            : [0.32, 0.68, 0.62, 0.56, 0.50, 0.44, isQ ? 0.82 : 0.36];

          return {
            id: lineId,
            speakerId: resolvedSpeakerId,
            voice: (meta && meta.voice) || (assignedChar && assignedChar.voice) || 'ja-JP-NanamiNeural',
            emotion: (meta && meta.emotion) || 'statement',
            audioSrc: lessonData.renshuuAudioSrc || null,
            time: Array.isArray(lObj.time) && lObj.time.length === 2 ? lObj.time : null,
            jp: lObj.jp,
            rawJp: rawText,
            vi: lObj.vi,
            prevText: prevSub,
            sceneType: lessonData.sceneType || '',
            endPitch: resolvedEndPitch,
            pitchCurve: resolvedCurve
          };
        }
      }
    }
    return null;
  }

  function formatClockSec(sec) {
    const safeSec = Math.max(0, Math.round(Number(sec) || 0));
    const mins = Math.floor(safeSec / 60);
    const rem = safeSec % 60;
    return `${mins}:${rem < 10 ? '0' + rem : rem}`;
  }

  function getDialogueTimeBounds(lessonData) {
    if (!lessonData || !Array.isArray(lessonData.dialogue) || lessonData.dialogue.length === 0) {
      return null;
    }
    const dialogue = lessonData.dialogue;
    const allTimed = dialogue.every(l => Array.isArray(l.time) && l.time.length === 2 && Number(l.time[1]) > Number(l.time[0]));
    if (!allTimed) return null;
    const startSec = Math.max(0, Number(dialogue[0].time[0]) || 0);
    const lastEnd = Number(dialogue[dialogue.length - 1].time[1]) || startSec;
    const rawDuration = Number(lessonData.audioDuration) || 0;
    const endSec = rawDuration > lastEnd
      ? Math.min(rawDuration, lastEnd + 0.35)
      : lastEnd + 0.35;
    return { startSec, lastEnd, endSec };
  }

  function getActiveContainer() {
    if (typeof document !== 'undefined' && typeof document.getElementById === 'function') {
      const liveEl = document.getElementById('lesson-content');
      if (liveEl) return liveEl;
    }
    return lastMountContainer;
  }

  /**
   * Pure Function: Xác định chỉ số câu thoại đang phát tại mốc currentTimeSec.
   * Giữ ổn định câu đang hiển thị trong khoảng nghỉ tự nhiên giữa 2 lượt thoại,
   * không nhảy sớm hay nhấp nháy tắt/bật khi băng gốc có khoảng lặng.
   */
  function resolveActiveLineIndexAtTime(dialogue, currentTimeSec) {
    if (!Array.isArray(dialogue) || dialogue.length === 0) return -1;
    const t = Number(currentTimeSec);
    if (!Number.isFinite(t)) return 0;

    const LOOKAHEAD_SEC = 0.02;
    let activeIdx = 0;

    for (let i = 0; i < dialogue.length; i++) {
      const time = dialogue[i] && dialogue[i].time;
      if (!Array.isArray(time) || time.length < 2) continue;
      const lineStart = Number(time[0]) || 0;
      const lineEnd = Number(time[1]) || lineStart;
      if (t >= lineStart - LOOKAHEAD_SEC && t <= lineEnd) {
        return i;
      }
      if (t >= lineStart - LOOKAHEAD_SEC) {
        activeIdx = i;
      }
    }
    return activeIdx;
  }

  /**
   * Zero-Flicker DOM Sync: Cập nhật trực tiếp class `.is-playing`, nút phát chính
   * và thanh tiến trình mà không phá hủy/dựng lại toàn bộ innerHTML.
   * Tự động fallback sang rerender() nếu container không hỗ trợ querySelectorAll (môi trường test giả lập).
   */
  function syncPlaybackDomState(lessonData, currentTimeSec) {
    const activeContainer = getActiveContainer();
    if (!activeContainer || typeof activeContainer.querySelectorAll !== 'function') {
      rerender();
      return;
    }

    const activeLineId = state.playingLineId;
    const cards = activeContainer.querySelectorAll('.kaiwa-line-card');
    let newlyActiveCard = null;
    cards.forEach(function(card) {
      const shouldPlay = Boolean(activeLineId && card.id === `kaiwa-card-${activeLineId}`);
      if (shouldPlay) newlyActiveCard = card;
      if (card.classList.contains('is-playing') !== shouldPlay) {
        card.classList.toggle('is-playing', shouldPlay);
      }
      const spkBtn = card.querySelector('.kaiwa-btn-speaker');
      if (spkBtn && spkBtn.classList.contains('is-playing') !== shouldPlay) {
        spkBtn.classList.toggle('is-playing', shouldPlay);
      }
    });

    if (activeLineId && activeLineId !== lastSyncedActiveLineId) {
      lastSyncedActiveLineId = activeLineId;
      if ((state.isPlayingAll || state.isRoleplaying) && newlyActiveCard && typeof newlyActiveCard.scrollIntoView === 'function') {
        try {
          newlyActiveCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } catch (e) {}
      }
    } else if (!activeLineId) {
      lastSyncedActiveLineId = null;
    }

    const masterBtn = activeContainer.querySelector('.kaiwa-master-play-btn');
    if (masterBtn) {
      const targetIcon = state.isPlayingAll ? KAIWA_ICONS.pause : KAIWA_ICONS.masterPlay;
      if (masterBtn.dataset.playingState !== String(state.isPlayingAll)) {
        masterBtn.innerHTML = targetIcon;
        masterBtn.dataset.playingState = String(state.isPlayingAll);
      }
    }

    const data = lessonData || getLessonData(state.currentLessonId);
    const dialogue = (data && Array.isArray(data.dialogue)) ? data.dialogue : [];
    const totalLines = dialogue.length;
    const progressEl = activeContainer.querySelector('#kaiwa-master-progress');
    const timerEl = activeContainer.querySelector('#kaiwa-master-timer');
    if (!progressEl && !timerEl) return;

    const bounds = activeContinuousBounds || getDialogueTimeBounds(data);
    const totalSec = bounds
      ? Math.max(1, bounds.endSec - bounds.startSec)
      : Math.max(15, totalLines * 3 - 4);

    let progressPct = 0;
    let elapsedSec = 0;
    const currentIdx = activeLineId ? dialogue.findIndex(l => l.id === activeLineId) : -1;

    if (bounds && typeof currentTimeSec === 'number' && Number.isFinite(currentTimeSec)) {
      elapsedSec = Math.max(0, Math.min(totalSec, currentTimeSec - bounds.startSec));
      progressPct = Math.max(0, Math.min(100, (elapsedSec / totalSec) * 100));
    } else if (currentIdx >= 0 && totalLines > 0) {
      progressPct = Math.min(100, Math.round(((currentIdx + 1) / totalLines) * 100));
      elapsedSec = Math.min(totalSec, Math.max(1, Math.round(((currentIdx + 1) / totalLines) * totalSec)));
    }

    if (progressEl) {
      progressEl.style.width = `${progressPct.toFixed(1)}%`;
    }
    if (timerEl) {
      const totalStr = formatClockSec(totalSec);
      const elapsedStr = formatClockSec(elapsedSec);
      timerEl.textContent = currentIdx >= 0
        ? `Câu ${currentIdx + 1}/${totalLines} · ${elapsedStr} / ${totalStr}`
        : `0:00 / ${totalStr}`;
    }
  }

  function playContinuousDialogue(lessonData, startIndex, fallbackToSegmented) {
    const bounds = getDialogueTimeBounds(lessonData);
    if (!lessonData || !lessonData.audioSrc || !bounds || typeof root.Audio !== 'function') {
      if (typeof fallbackToSegmented === 'function') fallbackToSegmented();
      return;
    }

    const dialogue = lessonData.dialogue;
    const safeStartIdx = Math.max(0, Math.min(dialogue.length - 1, Number(startIndex) || 0));
    const seekStart = Math.max(0, Number(dialogue[safeStartIdx].time[0]) || bounds.startSec);
    const audioSrc = lessonData.audioSrc;

    stopKaiwaAudioResources();
    const sessionId = ++currentKaiwaSessionId;

    let audio = spriteAudioCache[audioSrc];
    if (!audio) {
      try {
        audio = new root.Audio(resolveSpriteRuntimeUrl(audioSrc));
        audio.preload = 'auto';
        spriteAudioCache[audioSrc] = audio;
      } catch (err) {
        if (typeof fallbackToSegmented === 'function') fallbackToSegmented();
        return;
      }
    }

    applyPreservePitch(audio);
    activeContinuousAudio = audio;
    activeContinuousBounds = bounds;
    state.isPlayingAll = true;
    state.playingLineId = dialogue[safeStartIdx].id;
    syncPlaybackDomState(lessonData, seekStart);

    let settled = false;
    let seekSettled = Math.abs((Number(audio.currentTime) || 0) - seekStart) <= 0.35;

    const finishStream = function() {
      if (settled || sessionId !== currentKaiwaSessionId) return;
      settled = true;
      state.isPlayingAll = false;
      state.playingLineId = null;
      stopContinuousPlaybackResources();
      syncPlaybackDomState(lessonData, bounds.startSec);
    };

    const failToFallback = function() {
      if (settled || sessionId !== currentKaiwaSessionId) return;
      settled = true;
      stopContinuousPlaybackResources();
      if (typeof fallbackToSegmented === 'function') fallbackToSegmented();
    };

    const onSeeked = function() {
      seekSettled = true;
    };

    const handleTimeTick = function() {
      if (audio.seeking) return false;
      const curTime = Number(audio.currentTime) || 0;
      if (!seekSettled) {
        if (curTime >= seekStart - 0.15 && curTime < bounds.endSec) {
          seekSettled = true;
        } else {
          return false;
        }
      }
      if (curTime >= bounds.endSec) {
        finishStream();
        return true;
      }
      const lineIdx = resolveActiveLineIndexAtTime(dialogue, curTime);
      if (lineIdx >= 0 && dialogue[lineIdx]) {
        state.playingLineId = dialogue[lineIdx].id;
      }
      syncPlaybackDomState(lessonData, curTime);
      return false;
    };

    const syncFrame = function() {
      if (settled || sessionId !== currentKaiwaSessionId || !state.isPlayingAll || activeContinuousAudio !== audio) {
        return;
      }
      if (handleTimeTick()) return;
      if (typeof root.requestAnimationFrame === 'function') {
        activeContinuousRafId = root.requestAnimationFrame(syncFrame);
      }
    };

    const onTimeUpdate = function() {
      if (settled || sessionId !== currentKaiwaSessionId || !state.isPlayingAll || activeContinuousAudio !== audio) return;
      handleTimeTick();
    };

    const onEnded = function() {
      finishStream();
    };

    const onError = function() {
      failToFallback();
    };

    const startPlayback = function() {
      if (settled || sessionId !== currentKaiwaSessionId || activeContinuousAudio !== audio) return;
      activeContinuousLoadTimer = setTimeout(failToFallback, 6000);
      try {
        applyPreservePitch(audio);
        audio.playbackRate = state.slowAudio ? 0.78 : 1.0;
        audio.currentTime = seekStart;
        if (Math.abs((Number(audio.currentTime) || 0) - seekStart) <= 0.35 && !audio.seeking) {
          seekSettled = true;
        }
        const playPromise = audio.play();
        const afterStart = function() {
          if (settled || sessionId !== currentKaiwaSessionId || activeContinuousAudio !== audio) return;
          applyPreservePitch(audio);
          audio.playbackRate = state.slowAudio ? 0.78 : 1.0;
          if (activeContinuousLoadTimer) {
            clearTimeout(activeContinuousLoadTimer);
            activeContinuousLoadTimer = null;
          }
          if (typeof root.requestAnimationFrame === 'function') {
            activeContinuousRafId = root.requestAnimationFrame(syncFrame);
          }
        };
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.then(afterStart, failToFallback);
        } else {
          afterStart();
        }
      } catch (e) {
        failToFallback();
      }
    };

    const onLoadedMetadata = function() {
      if (settled || sessionId !== currentKaiwaSessionId || activeContinuousAudio !== audio) return;
      if (activeContinuousLoadTimer) {
        clearTimeout(activeContinuousLoadTimer);
        activeContinuousLoadTimer = null;
      }
      startPlayback();
    };

    activeContinuousHandlers = {
      timeupdate: onTimeUpdate,
      ended: onEnded,
      error: onError,
      loadedmetadata: onLoadedMetadata,
      seeked: onSeeked
    };

    if (typeof audio.addEventListener === 'function') {
      audio.addEventListener('seeked', onSeeked, { once: true });
      audio.addEventListener('timeupdate', onTimeUpdate);
      audio.addEventListener('ended', onEnded, { once: true });
      audio.addEventListener('error', onError, { once: true });
    }

    if (typeof audio.readyState === 'number' && audio.readyState === 0 && typeof audio.addEventListener === 'function') {
      activeContinuousLoadTimer = setTimeout(failToFallback, 6000);
      audio.addEventListener('loadedmetadata', onLoadedMetadata, { once: true });
      return;
    }

    startPlayback();
  }

  function playLine(lineId, onComplete) {
    const line = findLineById(lineId);
    if (!line) return;

    const isStandaloneClick = typeof onComplete !== 'function';

    // Khi người dùng nhấn riêng vào 1 câu thoại trong lúc đang Nghe cả bài -> dừng hẳn phiên Nghe cả bài
    if (isStandaloneClick && state.isPlayingAll) {
      state.isPlayingAll = false;
      if (masterTimer) {
        clearTimeout(masterTimer);
        masterTimer = null;
      }
    }

    // Bấm lần 2 vào nút loa của câu đang phát đơn lẻ -> dừng phát ngay
    if (state.playingLineId === lineId && !state.isPlayingAll && !state.isRoleplaying && isStandaloneClick) {
      state.playingLineId = null;
      state.loopingLineId = null;
      stopAllKaiwaAudio();
      syncPlaybackDomState(getLessonData(state.currentLessonId));
      return;
    }

    state.playingLineId = lineId;
    const lessonData = getLessonData(state.currentLessonId) || {};
    syncPlaybackDomState(lessonData);

    const charObj = (lessonData.characters || []).find(c => c.id === line.speakerId) ||
      (root.AudioEngine && typeof root.AudioEngine.getCharacterVoiceProfile === 'function'
        ? root.AudioEngine.getCharacterVoiceProfile(line.speakerId)
        : null);
    const pitch = charObj && charObj.pitch ? charObj.pitch : 1.0;
    const rate = charObj && charObj.rate ? charObj.rate : 0.96;
    const gender = charObj ? charObj.gender : null;
    const speakerId = line.speakerId || (charObj && charObj.id) || null;
    const contextMeta = {
      prevText: line.prevText || '',
      sceneType: line.sceneType || lessonData.sceneType || ''
    };

    const handleLineEnded = function() {
      if (state.loopingLineId === lineId) {
        playLine(lineId, onComplete);
        return;
      }
      state.playingLineId = null;
      syncPlaybackDomState(lessonData);
      if (typeof onComplete === 'function') onComplete();
    };

    const fallbackToTts = function() {
      speakJapanese(line.jp || line.rawJp, pitch, handleLineEnded, gender, speakerId, rate, contextMeta);
    };

    const spriteSrc = line.audioSrc || lessonData.audioSrc;
    if (spriteSrc && Array.isArray(line.time) && line.time.length === 2) {
      playSpriteSegment(spriteSrc, line.time, handleLineEnded, fallbackToTts);
      return;
    }

    fallbackToTts();
  }

  function seekMasterPlayer(ev) {
    const lessonData = getLessonData(state.currentLessonId);
    if (!lessonData || !Array.isArray(lessonData.dialogue) || lessonData.dialogue.length === 0) return;
    let ratio = 0;
    if (ev && ev.currentTarget && typeof ev.currentTarget.getBoundingClientRect === 'function') {
      const rect = ev.currentTarget.getBoundingClientRect();
      if (rect && rect.width > 0 && typeof ev.clientX === 'number') {
        ratio = Math.max(0, Math.min(0.999, (ev.clientX - rect.left) / rect.width));
      }
    }

    // Nếu đang phát liên tục ở chế độ Tự do, tua mượt ngay trên luồng đang chạy không cần khởi tạo lại
    if (state.isPlayingAll && state.practiceMode !== 'shadowing' && activeContinuousAudio && activeContinuousBounds) {
      const span = Math.max(0.5, activeContinuousBounds.endSec - activeContinuousBounds.startSec);
      const targetTime = activeContinuousBounds.startSec + ratio * span;
      try {
        activeContinuousAudio.currentTime = targetTime;
        const lineIdx = resolveActiveLineIndexAtTime(lessonData.dialogue, targetTime);
        if (lineIdx >= 0 && lessonData.dialogue[lineIdx]) {
          state.playingLineId = lessonData.dialogue[lineIdx].id;
        }
        syncPlaybackDomState(lessonData, targetTime);
        return;
      } catch (e) {}
    }

    const targetIdx = Math.floor(ratio * lessonData.dialogue.length);
    togglePlayAll(targetIdx);
  }

  function toggleLoopLine(lineId) {
    if (state.loopingLineId === lineId) {
      state.loopingLineId = null;
      state.playingLineId = null;
      stopKaiwaAudioResources();
      rerender();
    } else {
      if (state.isPlayingAll) {
        state.isPlayingAll = false;
        if (masterTimer) {
          clearTimeout(masterTimer);
          masterTimer = null;
        }
      }
      state.loopingLineId = lineId;
      rerender();
      playLine(lineId);
    }
  }

  function computeTurnTransitionDelay(currLine, nextLine, usedSprite = false) {
    if (state.practiceMode === 'shadowing') return 1450;
    if (!currLine || !nextLine) return usedSprite ? 80 : 400;
    if (usedSprite) {
      if (currLine.speakerId && currLine.speakerId === nextLine.speakerId) {
        return 220;
      }
      const currText = String(currLine.rawJp || currLine.jp || '');
      const nextText = String(nextLine.rawJp || nextLine.jp || '');
      if (currLine.endPitch === 'up' || /[？?]|か[。]?$/.test(currText.trim())) {
        return 340;
      }
      if (/^(?:あのう|実は|ところで|それでは|では)/.test(nextText.trim())) {
        return 380;
      }
      return 280;
    }
    if (currLine.speakerId && currLine.speakerId === nextLine.speakerId) {
      return 300;
    }
    const currText = String(currLine.rawJp || currLine.jp || '');
    const nextText = String(nextLine.rawJp || nextLine.jp || '');
    if (currLine.endPitch === 'up' || /[？?]|か[。]?$/.test(currText.trim())) {
      return 480;
    }
    if (/^(?:あのう|実は|ところで|それでは|では)/.test(nextText.trim())) {
      return 520;
    }
    return 400;
  }

  function togglePlayAll(startIndex) {
    const hasCustomStart = typeof startIndex === 'number' && startIndex >= 0;
    if (state.isPlayingAll && !hasCustomStart) {
      state.isPlayingAll = false;
      state.playingLineId = null;
      if (masterTimer) {
        clearTimeout(masterTimer);
        masterTimer = null;
      }
      stopAllKaiwaAudio();
      syncPlaybackDomState(getLessonData(state.currentLessonId));
      return;
    }

    const lessonData = getLessonData(state.currentLessonId);
    if (!lessonData || !lessonData.dialogue || lessonData.dialogue.length === 0) return;

    if (masterTimer) {
      clearTimeout(masterTimer);
      masterTimer = null;
    }
    stopKaiwaAudioResources();

    state.isPlayingAll = true;
    const startIdx = hasCustomStart ? Math.min(lessonData.dialogue.length - 1, startIndex) : 0;

    function runSegmentedPlayback() {
      let idx = startIdx;
      function playNext() {
        if (!state.isPlayingAll || idx >= lessonData.dialogue.length) {
          state.isPlayingAll = false;
          state.playingLineId = null;
          syncPlaybackDomState(lessonData);
          return;
        }
        const line = lessonData.dialogue[idx++];
        const nextLine = idx < lessonData.dialogue.length ? lessonData.dialogue[idx] : null;
        const hasSprite = Boolean(
          (line.audioSrc || lessonData.audioSrc) &&
          Array.isArray(line.time) &&
          line.time.length === 2 &&
          typeof root.Audio === 'function'
        );
        playLine(line.id, function() {
          if (!state.isPlayingAll) return;
          const delay = computeTurnTransitionDelay(line, nextLine, hasSprite);
          masterTimer = setTimeout(playNext, delay);
        });
      }
      playNext();
    }

    // Chế độ Tự do (Nghe cả bài): Phát liền mạch 1 luồng audio gốc từ đầu đến cuối, không cắt giữa các câu
    if (state.practiceMode !== 'shadowing' && lessonData.audioSrc && getDialogueTimeBounds(lessonData)) {
      playContinuousDialogue(lessonData, startIdx, runSegmentedPlayback);
      return;
    }

    // Chế độ Shadowing (cần khoảng nghỉ 1.45s sau mỗi câu để người học nhại theo) hoặc fallback TTS
    runSegmentedPlayback();
  }

  function stopStreamTracks(stream) {
    if (!stream || typeof stream.getTracks !== 'function') return;
    try {
      stream.getTracks().forEach(t => {
        try { t.stop(); } catch (e) {}
      });
    } catch (e) {}
  }

  function createSafeMediaRecorder(stream, isIOS) {
    if (!stream || typeof root.MediaRecorder !== 'function') {
      return { recorder: null, mimeType: '' };
    }
    const candidates = isIOS
      ? ['audio/mp4;codecs=mp4a.40.2', 'audio/mp4', 'audio/webm;codecs=opus', 'audio/webm']
      : ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4;codecs=mp4a.40.2', 'audio/mp4', 'audio/ogg;codecs=opus'];
    let selectedMime = '';
    if (typeof root.MediaRecorder.isTypeSupported === 'function') {
      for (let i = 0; i < candidates.length; i++) {
        try {
          if (root.MediaRecorder.isTypeSupported(candidates[i])) {
            selectedMime = candidates[i];
            break;
          }
        } catch (e) {}
      }
    }
    if (selectedMime) {
      try {
        return {
          recorder: new root.MediaRecorder(stream, { mimeType: selectedMime }),
          mimeType: selectedMime
        };
      } catch (e) {}
    }
    return {
      recorder: new root.MediaRecorder(stream),
      mimeType: ''
    };
  }

  function cleanupAudioCapture(deferStreamStop = false) {
    clearTimeout(activeRecognitionEndTimer);
    activeRecognitionEndTimer = null;
    if (activeSilenceTimer) {
      clearTimeout(activeSilenceTimer);
      activeSilenceTimer = null;
    }
    if (activeMaxRecordTimer) {
      clearTimeout(activeMaxRecordTimer);
      activeMaxRecordTimer = null;
    }
    activeFinishRecording = null;
    activeForceStopRecording = null;
    if (activePitchTimer) {
      clearInterval(activePitchTimer);
      activePitchTimer = null;
    }
    stopRecorder();
    if (activeAudioCtx) {
      try { activeAudioCtx.close(); } catch (e) {}
      activeAudioCtx = null;
    }
    if (activeMediaStream) {
      const streamRef = activeMediaStream;
      if (deferStreamStop && pendingRecorderStop) {
        if (deferredStreamStopTimer) clearTimeout(deferredStreamStopTimer);
        deferredStreamStopTimer = setTimeout(() => {
          deferredStreamStopTimer = null;
          pendingRecorderStop = false;
          stopStreamTracks(streamRef);
          if (activeMediaStream === streamRef) activeMediaStream = null;
        }, 2000);
      } else {
        if (deferredStreamStopTimer) {
          clearTimeout(deferredStreamStopTimer);
          deferredStreamStopTimer = null;
        }
        pendingRecorderStop = false;
        stopStreamTracks(streamRef);
        activeMediaStream = null;
      }
    }
  }

  function stopRecorder() {
    const recorder = activeMediaRecorder;
    activeMediaRecorder = null;
    if (recorder && recorder.state !== 'inactive') {
      pendingRecorderStop = true;
      try {
        recorder.stop();
      } catch (e) {
        pendingRecorderStop = false;
      }
    }
  }

  function cancelRecording(shouldRender = true) {
    if (!activeRecording) return;
    if (latestRecordingByLine.get(activeRecording.key) === activeRecording) {
      latestRecordingByLine.delete(activeRecording.key);
    }
    activeRecording = null;
    const rec = activeRecognition;
    activeRecognition = null;
    state.recordingLineId = null;
    state.stoppingRecordingLineId = null;
    if (state.isRoleplaying) {
      state.isRoleplaying = false;
      clearTimeout(roleplayTimer);
      roleplayTimer = null;
    }
    try { rec?.abort(); } catch (e) {}
    cleanupAudioCapture(false);
    if (shouldRender) rerender();
  }

  function getRecordingLabel(lineId) {
    const scoreAttempt = scoreAttemptByLine.get(lineId);
    return scoreAttempt && scoreAttempt !== clipAttemptByLine.get(lineId)
      ? 'Bản ghi khác lượt chấm'
      : 'Giọng của bạn';
  }

  function applyLineEvaluation(lineId, spokenTranscript, evalOptions) {
    const line = findLineById(lineId);
    if (!line) return null;
    const opts = Object.assign({ targetRubyHtml: line.jp }, evalOptions || {});
    const evalResult = evaluatePronunciation(line.rawJp || line.jp, spokenTranscript, line.pitchCurve, line.endPitch, opts);
    if (!state.progress.scores) state.progress.scores = {};
    if (!state.progress.evalData) state.progress.evalData = {};
    state.progress.scores[lineId] = evalResult.score;
    state.progress.evalData[lineId] = evalResult;
    // Không tự động bung khung chi tiết sau khi chấm (tránh che câu thoại tiếp theo)
    state.openEvalByLine[lineId] = false;
    state.recordingLineId = null;
    state.stoppingRecordingLineId = null;
    saveProgress();
    rerender();
    return evalResult;
  }

  function recordLine(lineId, onComplete) {
    const line = findLineById(lineId);
    if (!line) {
      if (typeof onComplete === 'function') onComplete(null);
      return null;
    }

    if (state.recordingLineId === lineId) {
      if (state.stoppingRecordingLineId === lineId) {
        activeForceStopRecording?.();
      } else {
        activeFinishRecording?.();
      }
      return null;
    }
    if (activeRecording) {
      if (typeof onComplete === 'function') {
        onComplete(null);
        return null;
      }
      cancelRecording(false);
    }

    root.stopVoiceSearchForRecording?.();
    state.recordingLineId = lineId;
    state.stoppingRecordingLineId = null;
    state.isPlayingAll = false;
    state.playingLineId = null;
    state.loopingLineId = null;
    clearTimeout(masterTimer);
    stopAllKaiwaAudio();
    if (activeUserAudio) {
      try { activeUserAudio.pause(); } catch (e) {}
      activeUserAudio = null;
      state.playingUserVoiceLineId = null;
    }
    capturedPitchSamples = [];
    const recordStartTime = Date.now();
    rerender();

    const SpeechRec = root.SpeechRecognition || root.webkitSpeechRecognition;
    const mediaDevices = root.navigator?.mediaDevices;
    const canRecord = typeof root.MediaRecorder === 'function' && typeof mediaDevices?.getUserMedia === 'function';
    const ua = root.navigator?.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua) ||
      (/Macintosh/i.test(ua) && root.navigator?.maxTouchPoints > 1);
    const mobile = /Android/i.test(ua) || isIOS;
    const loc = root.location;
    const isInsecureHttp = root.isSecureContext === false &&
      !(loc && (loc.hostname === 'localhost' || loc.hostname === '127.0.0.1'));
    const lessonId = state.currentLessonId;
    const recordingKey = lessonId + ':' + lineId;
    const recognitionOnly = mobile && recognitionOnlyLines.delete(recordingKey);
    const attempt = { key: recordingKey };
    let rec = null;
    try { if (SpeechRec) rec = new SpeechRec(); } catch (e) {}
    if (isInsecureHttp || (!rec && !canRecord)) {
      state.recordingLineId = null;
      root.showToast?.(isInsecureHttp || root.isSecureContext === false
        ? 'Micro cần kết nối HTTPS. Hãy mở trang qua HTTPS để thu âm.'
        : 'Trình duyệt này không hỗ trợ thu âm hoặc nhận giọng.');
      rerender();
      onComplete?.(null);
      return null;
    }
    activeRecognition = rec;
    activeRecording = attempt;
    latestRecordingByLine.set(recordingKey, attempt);
    const isCurrent = () => activeRecording === attempt;
    const isLatest = () => state.currentLessonId === lessonId && latestRecordingByLine.get(recordingKey) === attempt;
    let pendingOfflineEval = null;
    let latestOfflineReport = null;
    let bestCapturedTranscript = '';
    let bestCapturedAlternatives = [];
    let stopping = false;
    let errorCode = '';
    let recognitionEnded = !rec;
    let recStarted = false;
    let captureError = null;
    let recordingStarted = false;
    let lastVoiceTime = null;
    let firstVoiceTime = null;
    let recognitionEndTime = null;
    let recordStopTime = null;
    const samples = capturedPitchSamples;

    function markVoice() {
      lastVoiceTime = Date.now();
      if (firstVoiceTime === null) firstVoiceTime = lastVoiceTime;
      resetSilenceTimer();
    }

    const resetSilenceTimer = function() {
      if (!isCurrent() || stopping) return;
      if (activeSilenceTimer) clearTimeout(activeSilenceTimer);
      activeSilenceTimer = setTimeout(finishRecordingDueToSilence, SILENCE_TIMEOUT_MS);
    };

    const finalizeEvaluation = function() {
      const spokenDuration = latestOfflineReport?.rms?.voicedDurationSec ||
        (firstVoiceTime !== null && lastVoiceTime > firstVoiceTime ? (lastVoiceTime - firstVoiceTime) / 1000 : null);
      const userDurationSec = spokenDuration || (!mobile && recordStartTime
        ? Math.max(0.4, Number((((recordStopTime ?? Date.now()) - recordStartTime) / 1000).toFixed(2)))
        : null);
      const targetDurationSec = (line.time && line.time[1] > line.time[0])
        ? Number((line.time[1] - line.time[0]).toFixed(2))
        : (line.audioDuration || null);

      const targetCleanLen = normalizeJapaneseForCompare(line.rawJp || line.jp).length;
      const capturedCleanLen = normalizeJapaneseForCompare(bestCapturedTranscript || '').length;
      const isTruncatedTranscript = targetCleanLen >= 4 && capturedCleanLen < Math.ceil(targetCleanLen * 0.4);
      const recognitionEndedEarly = mobile && recognitionEndTime !== null && lastVoiceTime !== null &&
        lastVoiceTime - recognitionEndTime > RECOGNITION_TAIL_MS &&
        (!bestCapturedTranscript || isTruncatedTranscript);
      if (!bestCapturedTranscript || recognitionEndedEarly) {
        state.recordingLineId = null;
        state.stoppingRecordingLineId = null;
        const canRetryWithoutRecorder = mobile && Boolean(rec) && canRecord && !recognitionOnly &&
            (!errorCode || errorCode === 'no-speech' || errorCode === 'audio-capture' || errorCode === 'start-failed');
        if (canRetryWithoutRecorder) recognitionOnlyLines.add(recordingKey);
        if (typeof root.showToast === 'function') {
          if (!rec && recordingStarted && !captureError) {
            root.showToast('Đã thu âm. Trình duyệt này không hỗ trợ nhận giọng để chấm điểm.');
          } else if (captureError && !recordingStarted) {
            root.showToast(captureError);
          } else if (errorCode === 'network') {
            root.showToast('Chưa chấm được: dịch vụ nhận giọng không kết nối được. Hãy kiểm tra mạng rồi thử lại.');
          } else if (errorCode === 'not-allowed' || errorCode === 'service-not-allowed') {
            root.showToast('Chưa chấm được: trình duyệt chặn nhận giọng. Hãy kiểm tra quyền micro.');
          } else if (recognitionEndedEarly && canRetryWithoutRecorder) {
            root.showToast('Bộ nhận giọng dừng trước khi bạn đọc xong. Chạm mic đọc lại liền câu để chấm.');
          } else if (canRetryWithoutRecorder) {
            root.showToast('Chưa nhận được lời nói để chấm. Chạm mic đọc lại để chấm ở chế độ chỉ nhận giọng.');
          } else {
            root.showToast('Chưa nhận được lời nói để chấm. Hãy chạm mic và đọc lại.');
          }
        }
        rerender();
        if (typeof onComplete === 'function') onComplete(null);
        return null;
      }

      let bestEval = null;
      let bestRank = 0;
      let bestConf = 0.85;
      const candidates = bestCapturedAlternatives.length > 0
        ? bestCapturedAlternatives
        : [{ transcript: bestCapturedTranscript, confidence: 0.85 }];

      for (let i = 0; i < candidates.length; i++) {
        const candidate = candidates[i] && candidates[i].transcript;
        if (!candidate) continue;
        const candidateConf = typeof candidates[i].confidence === 'number' && candidates[i].confidence > 0
          ? candidates[i].confidence
          : (i === 0 ? 0.84 : 0.72);
        // Hardcore Mode: Ưu tiên tuyệt đối candidate[0] (âm thanh thô đầu tiên mic nghe được).
        // Nếu candidate[0] đã khớp được >= 55% âm vị Mora thì không lấy candidate phụ đã qua đoán ngữ cảnh.
        if (i > 0 && bestEval && bestEval.moraScore >= 55) {
          break;
        }
        const candidateEval = evaluatePronunciation(
          line.rawJp || line.jp,
          candidate,
          line.pitchCurve,
          line.endPitch,
          {
            targetRubyHtml: line.jp,
            measuredPitchSamples: samples,
            acousticReport: latestOfflineReport,
            userDurationSec,
            targetDurationSec,
            candidateRank: i,
            confidence: candidateConf
          }
        );
        if (!bestEval || candidateEval.score > bestEval.score) {
          bestEval = candidateEval;
          bestCapturedTranscript = candidate;
          bestRank = i;
          bestConf = candidateConf;
        }
      }

      const evalOpts = {
        targetRubyHtml: line.jp,
        measuredPitchSamples: samples,
        acousticReport: latestOfflineReport,
        userDurationSec,
        targetDurationSec,
        candidateRank: bestRank,
        confidence: bestConf
      };
      pendingOfflineEval = {
        bestTranscript: bestCapturedTranscript,
        opts: evalOpts
      };

      scoreAttemptByLine.set(lineId, attempt);
      const finalRes = applyLineEvaluation(lineId, bestCapturedTranscript, evalOpts);
      if (typeof onComplete === 'function') onComplete(finalRes);
      return finalRes;
    };

    const completeRecognition = function() {
      if (!isCurrent()) return;
      activeRecognition = null;
      activeRecording = null;
      state.stoppingRecordingLineId = null;
      cleanupAudioCapture(true);
      if (state.currentLessonId === lessonId) return finalizeEvaluation();
      state.recordingLineId = null;
      rerender();
      if (typeof onComplete === 'function') onComplete(null);
    };

    const isFatalRecognitionError = function(code) {
      return code === 'not-allowed' ||
        code === 'service-not-allowed' ||
        code === 'network' ||
        code === 'language-not-supported' ||
        code === 'start-failed';
    };

    const finishRecordingDueToSilence = function() {
      if (!isCurrent() || stopping) return;
      stopping = true;
      recordStopTime = Date.now();
      stopRecorder();
      if (recognitionEnded || (rec && !recStarted) || isFatalRecognitionError(errorCode)) {
        recognitionEnded = true;
        return completeRecognition();
      }
      state.stoppingRecordingLineId = lineId;
      rerender();
      activeForceStopRecording = function() {
        if (!isCurrent()) return;
        recognitionEnded = true;
        completeRecognition();
        try { rec.abort(); } catch (e) {}
      };
      activeRecognitionEndTimer = setTimeout(() => {
        completeRecognition();
        try { rec.abort(); } catch (e) {}
      }, mobile ? 1500 : 1200);
      // stop() can produce a final result before onend.
      try { rec.stop(); } catch (e) { completeRecognition(); }
    };

    activeFinishRecording = function() {
      return finishRecordingDueToSilence();
    };

    const startRecognitionEngine = function() {
      if (!rec || recStarted || !isCurrent() || stopping || recognitionEnded) return;
      recStarted = true;
      try {
        rec.start();
      } catch (e) {
        errorCode = e?.name === 'NotAllowedError' ? 'not-allowed' : 'start-failed';
        recognitionEnded = true;
        if (!canRecord || recognitionOnly || isFatalRecognitionError(errorCode)) completeRecognition();
      }
    };

    const AudioCtxClass = root.AudioContext || root.webkitAudioContext;
    const wantsCapture = !(rec && recognitionOnly) && (canRecord ||
      (!mobile && rec && AudioCtxClass && typeof mediaDevices?.getUserMedia === 'function'));
    const captureFailed = (error) => {
      if (!isCurrent()) return;
      const errName = error?.name || '';
      captureError = (errName === 'NotAllowedError' || errName === 'PermissionDeniedError' || errName === 'SecurityError')
        ? 'Không thể thu âm vì chưa có quyền micro. Vui lòng cho phép Micro trong cài đặt trình duyệt.'
        : (errName === 'NotFoundError' || errName === 'DevicesNotFoundError')
          ? 'Không tìm thấy thiết bị Micro trên máy.'
          : errName === 'NotReadableError'
            ? 'Không thể thu âm. Hãy kiểm tra mic có đang được ứng dụng khác sử dụng.'
            : 'Không thể lưu bản thu âm trên trình duyệt này.';
      if (activeMediaStream) {
        stopStreamTracks(activeMediaStream);
        activeMediaStream = null;
      }
      stopRecorder();
      if (!recStarted) recognitionEnded = true;
      if (recognitionEnded) completeRecognition();
      else root.showToast?.(captureError);
    };
    if (wantsCapture) {
      const shouldUseAudioCtx = Boolean(AudioCtxClass && (!isIOS || !rec));
      if (mobile && shouldUseAudioCtx) {
        try {
          activeAudioCtx = new AudioCtxClass();
          activeAudioCtx.resume?.()?.catch(() => {});
        } catch (e) {}
      }
      let streamRequest;
      try { streamRequest = mediaDevices.getUserMedia({ audio: true }); }
      catch (error) { captureFailed(error); }
      streamRequest?.then(stream => {
        if (!isCurrent() || stopping) {
          stopStreamTracks(stream);
          return;
        }
        activeMediaStream = stream;
        if (shouldUseAudioCtx) {
          try {
            if (activePitchTimer) clearInterval(activePitchTimer);
            if (!activeAudioCtx) activeAudioCtx = new AudioCtxClass();
            activeAudioCtx.resume?.()?.catch(() => {});
            const source = activeAudioCtx.createMediaStreamSource(stream);
            const analyser = activeAudioCtx.createAnalyser();
            analyser.fftSize = 2048;
            source.connect(analyser);
            const timeBuf = new Float32Array(analyser.fftSize);
            activePitchTimer = setInterval(() => {
              if (!activeAudioCtx || !isCurrent() || stopping) return;
              analyser.getFloatTimeDomainData(timeBuf);
              let sumSq = 0;
              for (let s = 0; s < timeBuf.length; s++) {
                sumSq += timeBuf[s] * timeBuf[s];
              }
              const rms = Math.sqrt(sumSq / timeBuf.length);
              const f0 = mobile ? null : detectPitchF0FromBuffer(timeBuf, activeAudioCtx.sampleRate);
              if (f0) capturedPitchSamples.push(f0);
              if (f0 || rms > 0.02) markVoice();
            }, 50);
          } catch (ctxErr) {}
        }

        // 2. Khởi tạo MediaRecorder & Phân tích AudioBuffer Offline khi kết thúc thu âm (5s im lặng)
        if (canRecord) {
          const chunks = [];
          const created = createSafeMediaRecorder(stream, isIOS);
          const mimeType = created.mimeType;
          activeMediaRecorder = created.recorder;

          const recorder = activeMediaRecorder;
          recorder.onerror = event => captureFailed(event.error);
          recorder.ondataavailable = e => { if (e.data && e.data.size > 0) chunks.push(e.data); };
          recorder.onstop = () => {
            pendingRecorderStop = false;
            if (deferredStreamStopTimer) {
              clearTimeout(deferredStreamStopTimer);
              deferredStreamStopTimer = null;
            }
            try {
              if (!isLatest()) return;
              const validChunks = chunks.filter(c => c && c.size > 0);
              if (!validChunks.length) {
                if (!captureError && recordingStarted) root.showToast?.('Bản thu âm không có dữ liệu. Hãy thử ghi lại.');
                return;
              }
              const firstType = validChunks[0] && validChunks[0].type ? validChunks[0].type : '';
              const finalMime = recorder.mimeType || mimeType || firstType;
              const blob = finalMime
                ? new Blob(validChunks, { type: finalMime })
                : new Blob(validChunks);
              if (state.userBlobs[lineId] && typeof URL !== 'undefined' && typeof URL.revokeObjectURL === 'function') {
                try { URL.revokeObjectURL(state.userBlobs[lineId]); } catch (e) {}
              }
              if (typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
                state.userBlobs[lineId] = URL.createObjectURL(blob);
                clipAttemptByLine.set(lineId, attempt);
                rerender();
              }
              // Giải mã AudioBuffer Offline bằng AcousticAnalyzer (YIN + RMS Silence Gap + DTW)
              const analyzer = getAcousticAnalyzer();
              if (analyzer && typeof analyzer.decodeAndAnalyzeBlob === 'function' && validChunks.length > 0) {
                const targetHiraForLine = extractKanaReadingFromRubyHtml(line.jp) ||
                  katakanaToHiragana(normalizeNumbersToHiragana(normalizeJapaneseForCompare(line.rawJp || line.jp)));
                const targetMorasForLine = splitIntoMoraTokens(targetHiraForLine);
                analyzer.decodeAndAnalyzeBlob(blob, {
                  modelCurve: line.pitchCurve,
                  targetMoras: targetMorasForLine
                }).then(report => {
                  if (!report || !isLatest()) return;
                  latestOfflineReport = report;
                  if (pendingOfflineEval && pendingOfflineEval.bestTranscript) {
                    const opts = Object.assign({}, pendingOfflineEval.opts, {
                      acousticReport: report,
                      userDurationSec: report.rms?.voicedDurationSec || pendingOfflineEval.opts.userDurationSec
                    });
                    state.progress.evalData[lineId] = evaluatePronunciation(
                      line.rawJp || line.jp, pendingOfflineEval.bestTranscript, line.pitchCurve, line.endPitch, opts
                    );
                    state.progress.scores[lineId] = state.progress.evalData[lineId].score;
                    saveProgress();
                    rerender();
                  }
                }).catch(() => {});
              }
            } catch (err) {} finally {
              stopStreamTracks(stream);
              if (activeMediaStream === stream) {
                activeMediaStream = null;
              }
            }
          };
          try {
            recorder.start(250);
          } catch (_sliceErr) {
            recorder.start();
          }
          recordingStarted = true;
          resetSilenceTimer();
        }
        if (mobile && rec) {
          startRecognitionEngine();
        }
      }).catch(captureFailed);
    }

    if (!isCurrent()) return null;
    if (!rec) {
      activeMaxRecordTimer = setTimeout(finishRecordingDueToSilence, MAX_RECORD_TIMEOUT_MS);
      return null;
    }

    rec.lang = 'ja-JP';
    rec.continuous = true;
    if (mobile || recognitionOnly) rec.continuous = false;
    rec.interimResults = true;
    rec.maxAlternatives = 3;

    rec.onspeechstart = function() {
      markVoice();
    };
    rec.onspeechend = function() {
      if (firstVoiceTime !== null) lastVoiceTime = Date.now();
    };

    rec.onaudiostart = function() {
      resetSilenceTimer();
    };

    rec.onsoundstart = function() {
      resetSilenceTimer();
    };

    rec.onresult = function(event) {
      if (!isCurrent() || recognitionEnded) return;
      resetSilenceTimer();
      let currentInterim = '';
      let currentFinal = '';
      const alts = [];

      for (let i = 0; i < event.results.length; ++i) {
        const item = event.results[i];
        if (item.isFinal) {
          currentFinal += (item[0] && item[0].transcript) || '';
          for (let j = 0; j < item.length; ++j) {
            if (item[j] && item[j].transcript) {
              alts.push({
                transcript: item[j].transcript,
                confidence: item[j].confidence || 0.85
              });
            }
          }
        } else {
          currentInterim += (item[0] && item[0].transcript) || '';
          if (item[0] && item[0].transcript) {
            alts.push({
              transcript: item[0].transcript,
              confidence: item[0].confidence || 0.8
            });
          }
        }
      }

      const combined = (currentFinal + currentInterim).trim();
      if (combined) {
        bestCapturedTranscript = combined;
        bestCapturedAlternatives = event.results.length === 1 ? alts : [
          { transcript: combined, confidence: 0.85 }
        ];
      }
    };

    const onRecognitionEnd = () => {
      if (!isCurrent() || recognitionEnded) return;
      recognitionEnded = true;
      recognitionEndTime = Date.now();
      // Lỗi hệ thống / quyền / mạng phải kết thúc & báo ngay cho người dùng trên mobile/tablet
      if (isFatalRecognitionError(errorCode)) {
        return completeRecognition();
      }
      // Android/iOS may end recognition after one phrase while the recorder is still running.
      if (mobile && wantsCapture && !captureError && !stopping) return;
      completeRecognition();
    };
    rec.onerror = function(ev) {
      errorCode = (ev && ev.error) || 'unknown';
      onRecognitionEnd();
    };
    rec.onend = onRecognitionEnd;

    if (!mobile || !wantsCapture) resetSilenceTimer();
    activeMaxRecordTimer = setTimeout(finishRecordingDueToSilence, MAX_RECORD_TIMEOUT_MS);
    if (!mobile || !wantsCapture) {
      startRecognitionEngine();
    }
    return null;
  }

  function playUserVoice(lineId) {
    const blobUrl = state.userBlobs[lineId];
    if (blobUrl && typeof root.Audio !== 'undefined') {
      try {
        if (activeUserAudio) {
          activeUserAudio.pause();
          activeUserAudio.currentTime = 0;
          activeUserAudio = null;
        }
        if (state.playingUserVoiceLineId === lineId) {
          state.playingUserVoiceLineId = null;
          rerender();
          return;
        }

        state.playingUserVoiceLineId = lineId;
        rerender();

        const audio = new root.Audio(blobUrl);
        audio.preload = 'auto';
        if ('playsInline' in audio) audio.playsInline = true;
        activeUserAudio = audio;
        audio.onended = function() {
          if (state.playingUserVoiceLineId === lineId) {
            state.playingUserVoiceLineId = null;
            activeUserAudio = null;
            rerender();
          }
        };
        audio.onerror = function() {
          state.playingUserVoiceLineId = null;
          activeUserAudio = null;
          rerender();
          if (typeof root.showToast === 'function') {
            root.showToast('⚠️ Không thể phát bản ghi âm. Vui lòng bấm Micro thu âm lại nhé.');
          }
        };
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function(err) {
            state.playingUserVoiceLineId = null;
            activeUserAudio = null;
            rerender();
            if (typeof root.showToast === 'function') {
              root.showToast('⚠️ Trình duyệt chặn tự động phát âm thanh. Vui lòng bấm lại nút để nghe.');
            }
          });
        }
        return;
      } catch (e) {
        state.playingUserVoiceLineId = null;
        activeUserAudio = null;
        rerender();
      }
    }

    if (typeof root.showToast === 'function') {
      root.showToast('🎤 Chưa có bản ghi âm giọng nói (hoặc trang vừa tải lại). Bạn hãy chạm vào Micro để đọc lại nhé!');
    }
  }

  function onSpeakerDown(lineId, ev) {
    speakerLongPressTriggered = false;
    if (speakerPressTimer) clearTimeout(speakerPressTimer);
    speakerPressTimer = setTimeout(function() {
      speakerLongPressTriggered = true;
      toggleLoopLine(lineId);
      if (typeof root.triggerHaptic === 'function') root.triggerHaptic(20);
      if (typeof root.showToast === 'function') {
        const isLoop = state.loopingLineId === lineId;
        root.showToast(isLoop ? 'Đã bật lặp câu thoại (Chạm lại loa để dừng)' : 'Đã tắt lặp câu thoại');
      }
    }, 450);
  }

  function onSpeakerUp() {
    if (speakerPressTimer) {
      clearTimeout(speakerPressTimer);
      speakerPressTimer = null;
    }
  }

  function onSpeakerClick(lineId, ev) {
    if (speakerLongPressTriggered) {
      speakerLongPressTriggered = false;
      if (ev && typeof ev.preventDefault === 'function') ev.preventDefault();
      return;
    }
    if (state.loopingLineId === lineId) {
      toggleLoopLine(lineId);
      return;
    }
    playLine(lineId);
  }

  function onBubbleClick(lineId, ev) {
    // Bỏ qua nếu người dùng đang bôi đen chữ để copy hoặc tra từ
    try {
      const sel = (typeof window !== 'undefined' && typeof window.getSelection === 'function')
        ? window.getSelection()
        : null;
      if (sel && String(sel.toString() || '').trim().length > 0) return;
    } catch (e) {}
    if (ev && typeof ev.stopPropagation === 'function') ev.stopPropagation();
    playLine(lineId);
  }

  function onSpeakerContextMenu(lineId, ev) {
    if (ev && typeof ev.preventDefault === 'function') ev.preventDefault();
    if (speakerPressTimer) {
      clearTimeout(speakerPressTimer);
      speakerPressTimer = null;
    }
    if (!speakerLongPressTriggered) {
      speakerLongPressTriggered = true;
      toggleLoopLine(lineId);
      if (typeof root.triggerHaptic === 'function') root.triggerHaptic(20);
      if (typeof root.showToast === 'function') {
        const isLoop = state.loopingLineId === lineId;
        root.showToast(isLoop ? 'Đã bật lặp câu thoại (Chạm lại loa để dừng)' : 'Đã tắt lặp câu thoại');
      }
    }
    return false;
  }

  function toggleEvalPanel(lineId, forceState) {
    const nextState = typeof forceState === 'boolean'
      ? forceState
      : !state.openEvalByLine[lineId];
    if (nextState) {
      // Đóng các khung chi tiết của câu khác để giữ luồng học gọn gàng
      state.openEvalByLine = {};
    }
    state.openEvalByLine[lineId] = nextState;
    rerender();
  }

  function toggleExp(lineId, ev) {
    if (ev) {
      if (typeof ev.stopPropagation === 'function') ev.stopPropagation();
      if (typeof ev.preventDefault === 'function') ev.preventDefault();
    }
    if (state.activeExpLineId === lineId) {
      state.activeExpLineId = null;
      state.openExpByLine = {};
      state.bsExpanded = false;
    } else {
      state.openExpByLine = {};
      state.openExpByLine[lineId] = true;
      state.activeExpLineId = lineId;
      state.bsExpanded = false;
    }
    rerender();
  }

  function closeExpPopover(ev) {
    if (ev) {
      if (typeof ev.stopPropagation === 'function') ev.stopPropagation();
      if (typeof ev.preventDefault === 'function') ev.preventDefault();
    }
    state.activeExpLineId = null;
    state.openExpByLine = {};
    state.bsExpanded = false;
    rerender();
  }

  const closeExpSheet = closeExpPopover;

  function toggleBsExpand() {
    state.bsExpanded = !state.bsExpanded;
    rerender();
  }

  function onBsTouchStart(ev) {
    if (!ev || !ev.touches || !ev.touches[0]) return;
    bsTouchStartY = ev.touches[0].clientY;
    bsTouchCurrentY = bsTouchStartY;
  }

  function onBsTouchMove(ev) {
    if (!ev || !ev.touches || !ev.touches[0]) return;
    bsTouchCurrentY = ev.touches[0].clientY;
  }

  function onBsTouchEnd() {
    const deltaY = bsTouchCurrentY - bsTouchStartY;
    if (deltaY > 48) {
      if (state.bsExpanded) {
        state.bsExpanded = false;
        rerender();
      } else {
        closeExpSheet();
      }
    } else if (deltaY < -36 && !state.bsExpanded) {
      state.bsExpanded = true;
      rerender();
    }
    bsTouchStartY = 0;
    bsTouchCurrentY = 0;
  }

  function toggleFurigana() {
    state.showFurigana = !state.showFurigana;
    rerender();
  }

  function setViewMode(mode) {
    state.viewMode = mode === 'compact' ? 'compact' : 'full';
    rerender();
  }

  function toggleSlowAudio() {
    state.slowAudio = !state.slowAudio;
    const nextRate = state.slowAudio ? 0.78 : 1.0;
    if (activeContinuousAudio) {
      try {
        applyPreservePitch(activeContinuousAudio);
        activeContinuousAudio.playbackRate = nextRate;
      } catch (e) {}
    }
    if (activeSpriteAudio) {
      try {
        applyPreservePitch(activeSpriteAudio);
        activeSpriteAudio.playbackRate = nextRate;
      } catch (e) {}
    }
    const activeContainer = getActiveContainer();
    if ((activeContinuousAudio || activeSpriteAudio) && activeContainer && typeof activeContainer.querySelectorAll === 'function') {
      const slowBtns = activeContainer.querySelectorAll('button[onclick*="toggleSlowAudio"]');
      slowBtns.forEach(btn => btn.classList.toggle('active', state.slowAudio));
      return;
    }
    rerender();
  }

  function toggleHideVi() {
    state.hideVi = !state.hideVi;
    rerender();
  }

  function toggleMaskJp() {
    state.maskJp = !state.maskJp;
    rerender();
  }

  function setTab(tabName) {
    if (['dialogue', 'renshuu'].includes(tabName)) {
      if (state.activeTab !== tabName) {
        cancelRecording(false);
        state.isPlayingAll = false;
        state.playingLineId = null;
        state.loopingLineId = null;
        state.isRoleplaying = false;
        if (masterTimer) {
          clearTimeout(masterTimer);
          masterTimer = null;
        }
        if (roleplayTimer) {
          clearTimeout(roleplayTimer);
          roleplayTimer = null;
        }
        stopKaiwaAudioResources();
      }
      state.activeTab = tabName;
      rerender();
    }
  }

  function stopRoleplaySession() {
    cancelRecording(false);
    state.isRoleplaying = false;
    state.playingLineId = null;
    state.recordingLineId = null;
    if (roleplayTimer) {
      clearTimeout(roleplayTimer);
      roleplayTimer = null;
    }
    stopAllKaiwaAudio();
    rerender();
  }

  function setPracticeMode(mode) {
    cancelRecording(false);
    const normalized = (mode === 'shadowing' || mode === 'roleplay') ? mode : 'free';
    state.practiceMode = normalized;
    state.isPlayingAll = false;
    state.isRoleplaying = false;
    state.playingLineId = null;
    state.loopingLineId = null;
    if (masterTimer) clearTimeout(masterTimer);
    if (roleplayTimer) clearTimeout(roleplayTimer);
    stopAllKaiwaAudio();
    rerender();
  }

  function selectRoleplayCharacter(charId) {
    if (state.isRoleplaying) stopRoleplaySession();
    state.roleplayCharId = charId;
    rerender();
  }

  function startRoleplaySession() {
    if (state.isRoleplaying) {
      stopRoleplaySession();
      return;
    }
    const lessonData = getLessonData(state.currentLessonId);
    if (!lessonData || !lessonData.dialogue) return;
    state.isRoleplaying = true;
    rerender();
    let idx = 0;

    function nextTurn() {
      if (!state.isRoleplaying || state.practiceMode !== 'roleplay' || idx >= lessonData.dialogue.length) {
        state.isRoleplaying = false;
        state.playingLineId = null;
        rerender();
        return;
      }
      const line = lessonData.dialogue[idx++];
      if (line.speakerId === state.roleplayCharId) {
        let turnAdvanced = false;
        const advanceOnce = () => {
          if (turnAdvanced || !state.isRoleplaying) return;
          turnAdvanced = true;
          roleplayTimer = setTimeout(nextTurn, 400);
        };
        recordLine(line.id, advanceOnce);
      } else {
        playLine(line.id, function() {
          if (!state.isRoleplaying) return;
          roleplayTimer = setTimeout(nextTurn, 350);
        });
      }
    }

    nextTurn();
  }

  function selectRenshuuSub(rcId, subIdx) {
    cancelRecording(false);
    stopAllKaiwaAudio();
    state.rcSubIndex[rcId] = subIdx;
    rerender();
  }

  function speakRawText(encodedText, speakerId) {
    const text = decodeURIComponent(encodedText || '');
    const spkId = speakerId || 'sato';
    const prof = (root.AudioEngine && typeof root.AudioEngine.getCharacterVoiceProfile === 'function')
      ? root.AudioEngine.getCharacterVoiceProfile(spkId)
      : null;
    speakJapanese(
      text,
      prof ? prof.pitch : 1.02,
      null,
      prof ? prof.gender : 'female',
      spkId,
      prof ? prof.rate : 0.96
    );
  }

  function answerQuiz(questionId, optionIdx) {
    state.quizAnswers[questionId] = optionIdx;
    rerender();
  }

  root.addEventListener?.('pagehide', () => cancelRecording(false));
  root.document?.addEventListener?.('visibilitychange', () => {
    if (root.document.hidden) cancelRecording();
  });

  return {
    state,
    renderKaiwaModule,
    buildKaiwaHtml,
    buildNaturalSpeechText,
    renderSceneSvg,
    renderPitchChartSvg,
    evaluatePronunciation,
    renderHighlightedJapanese,
    applyRenshuuSubstitution,
    playLine,
    playVoiceSample,
    playSpriteSegment,
    stopAllKaiwaAudio,
    resolveActiveLineIndexAtTime,
    getDialogueTimeBounds,
    cancelRecording,
    seekMasterPlayer,
    toggleLoopLine,
    onSpeakerDown,
    onSpeakerUp,
    onSpeakerClick,
    onBubbleClick,
    onSpeakerContextMenu,
    togglePlayAll,
    recordLine,
    applyLineEvaluation,
    playUserVoice,
    toggleEvalPanel,
    toggleExp,
    closeExpPopover,
    closeExpSheet,
    buildExpPopoverHtml,
    toggleBsExpand,
    onBsTouchStart,
    onBsTouchMove,
    onBsTouchEnd,
    toggleFurigana,
    setViewMode,
    toggleSlowAudio,
    toggleHideVi,
    toggleMaskJp,
    setTab,
    setPracticeMode,
    selectRoleplayCharacter,
    startRoleplaySession,
    stopRoleplaySession,
    selectRenshuuSub,
    speakRawText,
    answerQuiz,
    reloadUserProgress
  };
});
