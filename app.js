/**
 * ==========================================================================
 * TỰ HỌC TIẾNG NHẬT - MINNA NO NIHONGO (BÀI 1 ĐẾN BÀI 50: N5 & N4)
 * File Logic Chính: app.js (Vanilla JavaScript thuần, Data-Driven, Mobile-First)
 * Dữ liệu nạp từ các file module trong thư mục data/:
 *  - data/lessons.js (50 Bài học Minna no Nihongo đầy đủ chuẩn SGK)
 *  - data/dokkai.js (50 Bài đọc hiểu & 250 câu hỏi)
 *  - data/quiz-master.js (50 Bài tập trắc nghiệm 50 câu = 2.500 câu)
 *  - data/radicals_data.js (191 Bộ thủ Kanji kèm hoạt họa nét viết)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. CẤU HÌNH & KHỞI TẠO TIẾN ĐỘ (SAFE LOCALSTORAGE WRAPPERS)
// --------------------------------------------------------------------------
const STORAGE_COMPLETED_KEY = 'minna_completed_modules';
const STORAGE_PRACTICE_KEY = 'minna_practice_answers';
const STORAGE_DOKKAI_KEY = 'minna_dokkai_answers_v1';
const STORAGE_ENTERED_KEY = 'minna_has_entered';
const STORAGE_LAST_ACTIVE_KEY = 'minna_last_active_id';
const STORAGE_FURIGANA_KEY = 'minna_show_furigana';

function safeGetStorage(key, fallback = null) {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem) {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    }
  } catch (e) {}
  return fallback;
}

function safeSetStorage(key, value) {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.setItem) {
      localStorage.setItem(key, value);
    }
  } catch (e) {}
}

function safeRemoveStorage(key) {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.removeItem) {
      localStorage.removeItem(key);
    }
  } catch (e) {}
}

function initFuriganaToggle() {
  const btn = document.getElementById('btn-toggle-furigana');
  const saved = safeGetStorage(STORAGE_FURIGANA_KEY);
  const showFurigana = (saved !== 'false'); // Mặc định bật

  if (document.body && document.body.classList) {
    document.body.classList.toggle('hide-furigana', !showFurigana);
  }

  if (btn && btn.addEventListener) {
    btn.addEventListener('click', (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      const isCurrentlyHidden = document.body.classList.contains('hide-furigana');
      const willHide = !isCurrentlyHidden;
      document.body.classList.toggle('hide-furigana', willHide);
      safeSetStorage(STORAGE_FURIGANA_KEY, willHide ? 'false' : 'true');
      showToast(willHide ? "Đã ẩn Furigana (Chạm/rê chuột lên Kanji để xem)" : "Đã bật hiển thị Furigana");
    });
  }

  if (document && document.addEventListener) {
    document.addEventListener('keydown', (e) => {
      if (!e || !e.target) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (btn && btn.click) btn.click();
      }
    });
  }
}

const safeRAF = (typeof window !== 'undefined' && window.requestAnimationFrame)
  ? window.requestAnimationFrame.bind(window)
  : (typeof requestAnimationFrame === 'function' ? requestAnimationFrame : (cb => setTimeout(cb, 16)));

let currentActiveId = 'bai-1';
let lastLessonNumber = 1;
let lastRadicalId = 'radicals-1';

function extractLessonNumber(id) {
  if (!id) return null;
  const m = String(id).match(/^(?:bai|quiz|dokkai|kanji)-(\d+)$/);
  return m ? parseInt(m[1], 10) : null;
}

function getCompletedModules() {
  try {
    const raw = safeGetStorage(STORAGE_COMPLETED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function isModuleCompleted(id) {
  return getCompletedModules().includes(id);
}

// Hộp thoại xác nhận hiện đại trong trang (Thay thế confirm() của trình duyệt, tương thích 100% Canvas & Mobile)
function showAppConfirm(title, message, onConfirm) {
  const modal = document.getElementById('app-confirm-modal');
  const titleEl = document.getElementById('confirm-modal-title');
  const msgEl = document.getElementById('confirm-modal-message');
  const okBtn = document.getElementById('confirm-modal-ok');
  const cancelBtn = document.getElementById('confirm-modal-cancel');
  const closeBtn = document.getElementById('confirm-modal-close');

  if (!modal || !okBtn || !cancelBtn || !titleEl || !msgEl) {
    if (typeof onConfirm === 'function') onConfirm();
    return;
  }

  titleEl.textContent = title || 'Xác nhận thao tác';
  msgEl.innerHTML = String(message || '').replace(/\n/g, '<br>');
  modal.classList.add('show-modal');
  modal.setAttribute('aria-hidden', 'false');

  const cleanup = () => {
    modal.classList.remove('show-modal');
    modal.setAttribute('aria-hidden', 'true');
    okBtn.onclick = null;
    cancelBtn.onclick = null;
    if (closeBtn) closeBtn.onclick = null;
  };

  okBtn.onclick = () => {
    cleanup();
    if (typeof onConfirm === 'function') onConfirm();
  };
  cancelBtn.onclick = cleanup;
  if (closeBtn) closeBtn.onclick = cleanup;
  modal.onclick = (e) => {
    if (e.target === modal) cleanup();
  };
}
window.showAppConfirm = showAppConfirm;

window.toggleLessonComplete = function(id) {
  let list = getCompletedModules();
  const exists = list.includes(id);

  if (exists) {
    list = list.filter(item => item !== id);
    showToast("Đã hủy đánh dấu hoàn thành");
  } else {
    list.push(id);
    showToast("🎉 Đã ghi nhận hoàn thành bài học!");
  }

  safeSetStorage(STORAGE_COMPLETED_KEY, JSON.stringify(list));

  const sidebarBtn = document.querySelector ? document.querySelector(`.menu-item-btn[data-id="${id}"]`) : null;
  if (sidebarBtn && sidebarBtn.querySelector) {
    const tag = sidebarBtn.querySelector('.item-tag');
    if (tag) {
      const isNow = !exists;
      if (isNow) {
        tag.className = 'item-tag completed';
        tag.textContent = 'Đã xong';
      } else {
        const isCurrent = (id === currentActiveId);
        tag.className = isCurrent ? 'item-tag current' : 'item-tag';
        tag.textContent = isCurrent ? 'Đang học' : 'Minna';
      }
    }
  } else {
    renderSidebar();
  }
  updateHeaderProgress();

  const completeBtn = document.getElementById('btn-complete-lesson');
  if (completeBtn) {
    const isNow = !exists;
    completeBtn.className = `btn-complete-lesson ${isNow ? 'is-completed' : ''} btn-pulse`;
    completeBtn.innerHTML = isNow
      ? '✓ Đã hoàn thành (Bấm để hủy)'
      : '○ Đánh dấu hoàn thành bài này';
    setTimeout(() => {
      if (completeBtn.classList) completeBtn.classList.remove('btn-pulse');
    }, 450);
  }
};

function updateHeaderProgress() {
  const completed = getCompletedModules();
  const radCount = (typeof radicalsData !== 'undefined' && Array.isArray(radicalsData)) ? radicalsData.length : 0;
  const kanjiCount = (typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) ? kanjiLessonsData.length : 0;
  const total = lessonsData.length + Object.keys(practiceQuizData).length + dokkaiData.length + radCount + kanjiCount;
  const count = completed.length;
  const percent = total > 0 ? Math.min(100, Math.round((count / total) * 100)) : 0;

  const sub = document.getElementById('header-goal-subtitle');
  const fill = document.getElementById('header-progress-fill');
  if (sub) sub.textContent = `Tiến độ: ${count}/${total} mục (${percent}%)`;
  if (fill) fill.style.width = `${percent}%`;
}

// --------------------------------------------------------------------------
// 2. HỆ THỐNG PHÁT ÂM TIẾNG NHẬT — GIỌNG LEDA JP (SPEECHGEN.IO / CHIRP3-HD)
// --------------------------------------------------------------------------
const SPEECHGEN_VOICE = 'Leda JP';
const SPEECHGEN_MODEL = 'ja-JP-Chirp3-HD-Leda';

const speechAudioCache = new Map();
let currentSpeechAudio = null;
let cachedLedaVoice = null;

function cleanSpeechText(text) {
  return String(text || '')
    .replace(/<rt>.*?<\/rt>/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/['"\\]/g, ' ')
    .trim();
}

// Hàm chuẩn hóa và tạo nhịp ngắt nghỉ tự nhiên theo ngữ pháp tiếng Nhật (Prosody & Syntactic Phrasing)
function formatJapaneseGrammarSpeech(text) {
  if (!text) return '';
  let str = String(text).trim();

  // 1. Loại bỏ các thẻ HTML / Ruby furigana và ký tự escape
  str = str.replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]*>/g, '');
  str = str.replace(/['"\\]/g, ' ');

  // 2. Chuẩn hóa dấu câu half-width sang full-width tiếng Nhật chuẩn
  str = str.replace(/,/g, '、')
           .replace(/\.(?!\d)/g, '。')
           .replace(/\?/g, '？')
           .replace(/!/g, '！')
           .replace(/;/g, '、')
           .replace(/:/g, '：');

  // Chuẩn hóa khoảng trắng quanh dấu câu
  str = str.replace(/([、。！？])\s+/g, '$1')
           .replace(/\s+([、。！？])/g, '$1');

  const rawClean = str.replace(/[、。！？\s]/g, '');
  const isQuestion = /(?:か|ですか|ますか|でしょうか)$/.test(rawClean);
  const hasMultipleClausesOrParticles = /[ぁ-んァ-ヶ一-龥]+(?:は|が|を|に|で|へ|と|も)\s*[ぁ-んァ-ヶ一-龥]+/.test(str);
  const hasSpaces = /\s/.test(str);

  if (rawClean.length <= 6 && !isQuestion && !hasMultipleClausesOrParticles && !hasSpaces && !/[、。！？]/.test(str)) {
    return str;
  }

  // 3. Ngắt nghỉ sau liên từ / thán từ ở đầu câu hoặc sau dấu chấm câu
  const discourseWords = [
    'そして', 'それから', 'それに', 'それで', 'ですから', 'だから',
    'しかし', 'でも', 'けれども', 'だけど', 'また', 'あるいは', 'または',
    'では', 'それでは', 'じゃ', 'ところで', 'たとえば', '例えば',
    '実は', 'じつは', 'まず', 'つぎに', '次に', 'さいごに', '最後に',
    'はい', 'いいえ', 'ええ', 'すみません', 'すいません', 'ごめんなさい',
    'おはようございます', 'こんにちは', 'こんばんは', 'はじめまして',
    'どうぞ', 'あのう', 'ええと'
  ];
  const discoursePattern = new RegExp(
    `(^|[。！？\\n])\\s*(${discourseWords.join('|')})(?:\\s*|(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]))(?!([、。！？』」）\\)]|$))`,
    'g'
  );
  str = str.replace(discoursePattern, '$1$2、');

  // 4. Ngắt nghỉ sau các liên từ nối mệnh đề phụ
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たら|だら)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
  str = str.replace(/(?!さようなら|さよなら)([ぁ-んァ-ヶ一-龥]{2,})(なら)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+)(えば|けば|せば|てば|ねば|べば|めば|れば|いれば|ければ)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ときは|ときに|とき|場合は|場合))(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]{3,})/g, '$1、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ます|です|ました|でした|だ|た|かった|ない|たい|る|う|く|い))から(?!(?:です|だ|でした|だろう|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1から、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ので(?!(?:す|すか|だ|である|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1ので、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})のに(?!(?:に|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1のに、');
  str = str.replace(/(?<![ぁ-んァ-ヶ一-龥])(?!いつでも|どこでも|だれでも|誰でも|何でも|なんでも|どちらでも|どれでも|いくらでも|そうでも)([ぁ-んァ-ヶ一-龥]{2,})(ても|でも)(?!(?:も|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{3,})(ても|でも)(?!(?:も|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, (match, p1, p2) => {
    if (/^(?:いつでも|どこでも|だれでも|誰でも|何でも|なんでも|どちらでも|どれでも|いくらでも|そうでも)$/.test(p1 + p2)) {
      return match;
    }
    return p1 + p2 + '、';
  });
  str = str.replace(/(けど|けれど|けれども)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ですが|ますが|でしたが|ましたが|思いますが))(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ながら(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1ながら、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(てから|でから)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たり|だり)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥]+(?:たり|だり))/g, '$1$2、');
  str = str.replace(/(については|というのは|にとっては|に対しては|においては)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]{3,})/g, '$1、');
  str = str.replace(/([」』])と(?!(?:[、。！？』」）\\)]|$))(?=(?:言い|いい|聞き|きき|思い|おもい|答え|こたえ|書い|かい|話|叫び))/g, '$1と、');

  str = str.replace(/、+/g, '、')
           .replace(/。+/g, '。')
           .replace(/、([。！？])/g, '$1')
           .replace(/([。！？])、/g, '$1')
           .replace(/\s+/g, ' ')
           .trim();

  if (!/[。！？]$/.test(str)) {
    if (/(?:か|でしょうか|ですか|ますか|のか|かい)$/.test(str)) {
      str += '？';
    } else if (str.length >= 6 || /(?:です|ます|だ|でした|ました|ません|だった|ではない|じゃない|ですよ|ですね|ますよ|ますね|のだ|んだ)$/.test(str)) {
      str += '。';
    }
  }

  return str;
}
window.formatJapaneseGrammarSpeech = formatJapaneseGrammarSpeech;

function hasKanjiCharacter(text) {
  if (!text) return false;
  const clean = String(text).replace(/<[^>]*>/g, '');
  return /[\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]/.test(clean);
}

function isVocabTermLong(v) {
  if (!v) return false;
  const cleanKanji = cleanSpeechText(v.kanji || '');
  const cleanHira = cleanSpeechText(v.hiragana || '');
  if (cleanKanji.includes('/') || cleanHira.includes('/')) return true;
  if (cleanKanji.length >= 8 || cleanHira.length >= 8) return true;
  return false;
}

function getSpeechGenConfig() {
  try {
    const token = safeGetStorage('speechgen_token') || (typeof window !== 'undefined' && window.SPEECHGEN_CONFIG && window.SPEECHGEN_CONFIG.token) || '';
    const email = safeGetStorage('speechgen_email') || (typeof window !== 'undefined' && window.SPEECHGEN_CONFIG && window.SPEECHGEN_CONFIG.email) || '';
    const speed = parseFloat(safeGetStorage('speechgen_speed') || '0.92');
    const pitch = parseFloat(safeGetStorage('speechgen_pitch') || '1.04');
    return { token, email, speed, pitch, voice: SPEECHGEN_VOICE };
  } catch (e) {
    return { token: '', email: '', speed: 0.92, pitch: 1.04, voice: SPEECHGEN_VOICE };
  }
}

function setSpeechGenConfig(cfg) {
  try {
    if (cfg.token !== undefined) safeSetStorage('speechgen_token', cfg.token.trim());
    if (cfg.email !== undefined) safeSetStorage('speechgen_email', cfg.email.trim());
    if (cfg.speed !== undefined) safeSetStorage('speechgen_speed', String(cfg.speed));
    if (cfg.pitch !== undefined) safeSetStorage('speechgen_pitch', String(cfg.pitch));
  } catch (e) {}
}
window.setSpeechGenConfig = setSpeechGenConfig;
window.getSpeechGenConfig = getSpeechGenConfig;

function stopAllSpeechAudio() {
  if (document && document.querySelectorAll) {
    document.querySelectorAll('.speak-btn.is-speaking, .speak-btn-mini.is-speaking, .btn-test-voice.is-speaking').forEach(b => {
      if (b && b.classList) b.classList.remove('is-speaking');
    });
  }
  if (currentSpeechAudio) {
    try {
      currentSpeechAudio.pause();
      currentSpeechAudio.currentTime = 0;
    } catch (e) {}
    currentSpeechAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

function findLedaJpVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  let match = voices.find(v => /leda/i.test(v.name) || /leda/i.test(v.voiceURI));
  if (match) return match;

  match = voices.find(v => /chirp/i.test(v.name) || /chirp/i.test(v.voiceURI));
  if (match) return match;

  match = voices.find(v => (v.lang === 'ja-JP' || v.lang.startsWith('ja')) && /(nanami|keiko|kyoko|otoya|natural.*female|female)/i.test(v.name));
  if (match) return match;

  match = voices.find(v => (v.lang === 'ja-JP' || v.lang.startsWith('ja')) && /google/i.test(v.name));
  if (match) return match;

  return voices.find(v => v.lang === 'ja-JP' || v.lang.startsWith('ja')) || null;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedLedaVoice = findLedaJpVoice();
  };
}

async function fetchSpeechGenAudio(speechText, cfg) {
  if (!cfg.token || !cfg.email) return null;
  if (speechAudioCache.has(speechText)) {
    return speechAudioCache.get(speechText);
  }

  const pitchVal = Math.round((cfg.pitch - 1.0) * 10);
  const bodyData = new URLSearchParams({
    token: cfg.token,
    email: cfg.email,
    voice: SPEECHGEN_VOICE,
    text: speechText,
    format: 'mp3',
    speed: String(cfg.speed || 0.92),
    pitch: String(pitchVal),
    pause_sentence: '350',
    pause_paragraph: '500'
  });

  const response = await fetch('https://speechgen.io/index.php?r=api/text', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: bodyData.toString()
  });

  if (!response.ok) throw new Error('SpeechGen HTTP error: ' + response.status);
  const data = await response.json();
  if (data && (data.status === 1 || data.status === '1') && (data.file || data.file_cors)) {
    const audioUrl = data.file_cors || data.file;
    speechAudioCache.set(speechText, audioUrl);
    return audioUrl;
  }
  throw new Error((data && data.error) || 'SpeechGen generation failed');
}

function speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    clearTimeout(safetyTimer);
    stopRelay();
    return;
  }

  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'ja-JP';

    const voice = cachedLedaVoice || findLedaJpVoice();
    if (voice) {
      utterance.voice = voice;
    } else if (!window._warnedNoJpVoice) {
      window._warnedNoJpVoice = true;
      showToast("Gợi ý: Cài đặt gói ngôn ngữ tiếng Nhật (ja-JP) trên máy để có giọng đọc tự nhiên nhất.");
    }

    utterance.rate = cfg && cfg.speed ? cfg.speed : 0.92;
    utterance.pitch = cfg && cfg.pitch ? cfg.pitch : 1.04;

    utterance.onend = () => {
      clearTimeout(safetyTimer);
      stopRelay();
    };
    utterance.onerror = () => {
      clearTimeout(safetyTimer);
      stopRelay();
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    clearTimeout(safetyTimer);
    stopRelay();
  }
}

async function speakJapanese(text, btnElement, ev) {
  if (ev && ev.stopPropagation) {
    ev.stopPropagation();
  }

  let btn = btnElement;
  if (!btn && typeof window !== 'undefined' && window.event) {
    const target = window.event.currentTarget || window.event.target;
    if (target) {
      btn = target.closest ? target.closest('.speak-btn, .speak-btn-mini, .btn-test-voice, button') : target;
    }
  }

  stopAllSpeechAudio();

  const cleanText = cleanSpeechText(text);
  if (!cleanText) {
    if (btn && btn.classList) btn.classList.remove('is-speaking');
    return;
  }

  const speechText = formatJapaneseGrammarSpeech(cleanText);

  if (btn && btn.classList) {
    btn.classList.add('is-speaking');
  }

  const stopRelay = () => {
    if (btn && btn.classList) {
      btn.classList.remove('is-speaking');
    }
  };

  const dynamicDuration = Math.max(6500, cleanText.length * 280);
  const safetyTimer = setTimeout(stopRelay, dynamicDuration);
  const cfg = getSpeechGenConfig();

  // Trên smartphone/tablet (iOS Safari & Android Chrome), ưu tiên phát âm trực tiếp qua Web Speech API
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0));
  const hasSpeechSynth = typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';

  if (isTouchDevice && hasSpeechSynth && (!cfg.token || !cfg.email)) {
    speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg);
    return;
  }

  if (cfg.token && cfg.email) {
    try {
      const audioUrl = await fetchSpeechGenAudio(speechText, cfg);
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        currentSpeechAudio = audio;
        audio.onended = () => {
          clearTimeout(safetyTimer);
          stopRelay();
          if (currentSpeechAudio === audio) currentSpeechAudio = null;
        };
        audio.onerror = () => {
          speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg);
        };
        const p = audio.play();
        if (p !== undefined) {
          p.catch(() => {
            speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg);
          });
        }
        return;
      }
    } catch (apiErr) {
      console.warn('SpeechGen Cloud API chuyển hướng sang Leda JP Neural:', apiErr.message);
    }
  }

  speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg);
}

window.speakJapanese = speakJapanese;

const SPEAKER_ICON_HTML = `<svg class="speaker-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;

function getWordCategoryKey(type) {
  const raw = String(type || '').trim();
  if (/nhóm\s*1|nhóm\s*2|nhóm\s*3|nhóm\s*i|đt|động\s*từ/i.test(raw)) return 'verb';
  if (/danh\s*từ|\bdt\b|đại\s*từ/i.test(raw)) return 'noun';
  if (/tính\s*từ|đuôi\s*i|đuôi\s*na|\btt\b/i.test(raw)) return 'adj';
  return 'other';
}

function formatWordTypeBadge(type) {
  if (!type) return '-';
  const raw = String(type).trim();
  let shortText = raw;
  let fullTitle = raw;
  let colorClass = 'type-default';

  if (/nhóm\s*1|nhóm\s*i\b|đt\s*\(?1\)?|đt\s*\(?i\)?/i.test(raw)) {
    shortText = 'ĐT (I)';
    fullTitle = 'Động từ nhóm 1';
    colorClass = 'type-verb1';
  } else if (/nhóm\s*2|nhóm\s*ii\b|đt\s*\(?2\)?|đt\s*\(?ii\)?/i.test(raw)) {
    shortText = 'ĐT (II)';
    fullTitle = 'Động từ nhóm 2';
    colorClass = 'type-verb2';
  } else if (/nhóm\s*3|nhóm\s*iii\b|đt\s*\(?3\)?|đt\s*\(?iii\)?/i.test(raw)) {
    shortText = 'ĐT (III)';
    fullTitle = 'Động từ nhóm 3';
    colorClass = 'type-verb3';
  } else if (/danh\s*từ|\bdt\b/i.test(raw)) {
    shortText = 'Danh từ';
    fullTitle = 'Danh từ';
    colorClass = 'type-noun';
  } else if (/phó\s*từ|\bpt\b/i.test(raw)) {
    shortText = 'Phó từ';
    fullTitle = 'Phó từ';
    colorClass = 'type-adverb';
  } else if (/cụm\s*từ/i.test(raw)) {
    shortText = 'Cụm từ';
    fullTitle = 'Cụm từ';
    colorClass = 'type-phrase';
  } else if (/đuôi\s*i/i.test(raw)) {
    shortText = 'Tính từ (i)';
    fullTitle = 'Tính từ đuôi i';
    colorClass = 'type-adj';
  } else if (/đuôi\s*na/i.test(raw)) {
    shortText = 'Tính từ (na)';
    fullTitle = 'Tính từ đuôi na';
    colorClass = 'type-adj';
  }

  return `<span class="type-pill ${colorClass}" title="${fullTitle}">${shortText}</span>`;
}

function renderGrammarExamples(examples, fallbackHtml) {
  if (examples && Array.isArray(examples) && examples.length > 0) {
    return examples.map((ex, idx) => {
      const exNum = idx + 1;
      if (ex.type === 'dialogue') {
        return `
          <div class="example-card example-card-dialogue">
            <div class="example-card-badge">
              <span class="ex-badge-num">Ví dụ ${exNum}</span>
              <span class="ex-badge-tag dialogue-tag">Hội thoại thực tế</span>
              ${ex.context ? `<span class="ex-badge-context">${ex.context}</span>` : ''}
            </div>
            <div class="dialogue-lines">
              ${(ex.lines || ex.dialogue || []).map(line => {
                const cleanSpeech = cleanSpeechText(line.rawJp || line.jp);
                return `
                  <div class="dialogue-line dialogue-speaker-${line.speaker.toLowerCase()}">
                    <div class="speaker-badge speaker-${line.speaker.toLowerCase()}">${line.speaker}</div>
                    <div class="dialogue-bubble">
                      <div class="dialogue-jp">
                        <button class="speak-btn" onclick="speakJapanese('${cleanSpeech}', this, event)" title="Nghe câu này (Leda JP)">${SPEAKER_ICON_HTML}</button>
                        <span class="jp-sentence">${line.jp}</span>
                      </div>
                      <div class="dialogue-vi">${line.vi}</div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      } else {
        const cleanSpeech = cleanSpeechText(ex.rawJp || ex.jp);
        return `
          <div class="example-card example-card-sentence">
            <div class="example-card-badge">
              <span class="ex-badge-num">Ví dụ ${exNum}</span>
              <span class="ex-badge-tag sentence-tag">Mẫu câu</span>
              ${ex.context ? `<span class="ex-badge-context">${ex.context}</span>` : ''}
            </div>
            <div class="sentence-box">
              <div class="sentence-jp">
                <button class="speak-btn" onclick="speakJapanese('${cleanSpeech}', this, event)" title="Nghe câu này (Leda JP)">${SPEAKER_ICON_HTML}</button>
                <span class="jp-sentence">${ex.jp}</span>
              </div>
              <div class="sentence-vi">
                <span class="vi-text">${ex.vi}</span>
              </div>
            </div>
          </div>
        `;
      }
    }).join('');
  }

  if (fallbackHtml) {
    return `<div class="example-box"><div class="example-jp">${fallbackHtml}</div></div>`;
  }

  return `<div class="example-empty">Chưa có ví dụ</div>`;
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.innerHTML = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// --------------------------------------------------------------------------
// 2B. HOẠT ẢNH CUỘN TRANG (SCROLL REVEAL BẰNG INTERSECTION OBSERVER)
// --------------------------------------------------------------------------
let quizScrollObserver = null;

function initScrollReveal() {
  if (quizScrollObserver) {
    quizScrollObserver.disconnect();
    quizScrollObserver = null;
  }

  const cards = document.querySelectorAll ? document.querySelectorAll('.quiz-card') : [];
  if (!cards || cards.length === 0) return;

  if (typeof IntersectionObserver !== 'undefined') {
    quizScrollObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: document.getElementById('main-content') || null,
      rootMargin: '250px 0px',
      threshold: 0.01
    });

    cards.forEach(card => {
      quizScrollObserver.observe(card);
    });
  } else {
    cards.forEach(card => card.classList.add('revealed'));
  }
}

// --------------------------------------------------------------------------
// 3. LOGIC RENDER SIDEBAR (BÀI HỌC 1-50, BÀI TẬP 1-50, ĐỌC HIỂU 1-50, BỘ THỦ)
// --------------------------------------------------------------------------
function renderSidebar() {
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (!sidebarMenu) return;

  const openGroupIds = new Set();
  try {
    if (sidebarMenu.querySelectorAll) {
      const openEls = sidebarMenu.querySelectorAll('.accordion-group.open');
      if (openEls && openEls.length) {
        openEls.forEach(el => {
          if (el && el.id) openGroupIds.add(el.id);
        });
      }
    }
  } catch (e) {}

  const isInitialLoad = !sidebarMenu.children || sidebarMenu.children.length === 0;
  sidebarMenu.innerHTML = '';

  const groups = [
    {
      id: "group-lessons",
      title: "Bài Học",
      isOpenDefault: false,
      items: lessonsData.map((l, idx) => ({
        id: l.id,
        label: l.title.split(':')[0],
        sub: l.id === currentActiveId ? 'Đang học' : (idx < 25 ? 'Minna N5' : 'Minna N4'),
        isCurrent: l.id === currentActiveId
      }))
    },
    {
      id: "group-quiz",
      title: "Bài Tập",
      isOpenDefault: false,
      items: Object.keys(practiceQuizData).map(qId => {
        const num = qId.replace('quiz-', '');
        const count = practiceQuizData[qId] ? practiceQuizData[qId].length : 50;
        return {
          id: qId,
          label: `Bài Tập Bài ${num}`,
          sub: `${count} Câu`,
          isCurrent: qId === currentActiveId
        };
      })
    },
    {
      id: "group-dokkai",
      title: "Đọc Hiểu",
      isOpenDefault: false,
      items: dokkaiData.map(d => ({
        id: d.id,
        label: d.title.replace('Bài Đọc Hiểu - ', ''),
        sub: "1 Bài • 5 Câu",
        isCurrent: d.id === currentActiveId
      }))
    },
    {
      id: "group-kanji",
      title: "Mẹo Nhớ Kanji",
      isOpenDefault: false,
      items: (typeof kanjiLessonsData !== 'undefined' ? kanjiLessonsData : []).map(k => ({
        id: k.id,
        label: `Bài ${k.lesson} Chữ Hán`,
        sub: `${k.items.length} Từ vựng • Mẹo nhớ`,
        isCurrent: k.id === currentActiveId
      }))
    },
    {
      id: "group-radicals",
      title: "Bộ Thủ",
      isOpenDefault: false,
      items: (typeof radicalsData !== 'undefined' ? radicalsData : []).map(r => ({
        id: r.id,
        label: r.title,
        sub: `${r.items.length} Bộ`,
        isCurrent: r.id === currentActiveId
      }))
    }
  ];

  groups.forEach(group => {
    const containsActive = group.items.some(it => it.id === currentActiveId);
    const isOpen = isInitialLoad ? (containsActive || Boolean(group.isOpenDefault)) : (containsActive || openGroupIds.has(group.id));

    const groupEl = document.createElement('div');
    groupEl.className = `accordion-group ${isOpen ? 'open' : ''}`;
    groupEl.id = group.id;

    groupEl.innerHTML = `
      <button class="accordion-header" aria-expanded="${isOpen}">
        <div class="accordion-header-left">
          <span>${group.title}</span>
        </div>
        <div class="accordion-header-right">
          <span class="accordion-badge">${group.items.length}</span>
          <svg class="accordion-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div class="accordion-body">
        <ul class="accordion-menu-list">
          ${group.items.map(it => {
            const isComp = isModuleCompleted(it.id);
            const activeClass = (it.id === currentActiveId) ? 'active' : '';
            const tagClass = isComp ? 'item-tag completed' : (it.isCurrent ? 'item-tag current' : 'item-tag');
            const tagLabel = isComp ? 'Đã xong' : it.sub;

            return `
              <li>
                <button class="menu-item-btn ${activeClass}" data-id="${it.id}">
                  <div class="item-left-content">
                    <span>${it.label}</span>
                  </div>
                  <span class="${tagClass}">${tagLabel}</span>
                </button>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    `;

    const headerBtn = groupEl.querySelector('.accordion-header');
    if (headerBtn && headerBtn.addEventListener) {
      headerBtn.addEventListener('click', () => {
        const willBeOpen = !groupEl.classList.contains('open');
        groupEl.classList.toggle('open', willBeOpen);
        headerBtn.setAttribute('aria-expanded', willBeOpen);
      });
    }

    const itemBtns = groupEl.querySelectorAll ? groupEl.querySelectorAll('.menu-item-btn') : [];
    itemBtns.forEach(btn => {
      if (btn && btn.addEventListener) {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-id');
          switchModule(targetId);
        });
      }
    });

    sidebarMenu.appendChild(groupEl);
  });
}

// --------------------------------------------------------------------------
// 3B. THANH ĐỒNG BỘ 4 CHẾ ĐỘ HỌC TẬP THEO TỪNG BÀI (BÀI HỌC - TRẮC NGHIỆM - ĐỌC HIỂU - MẸO NHỚ KANJI)
// --------------------------------------------------------------------------
function renderModuleSyncBar(lessonNum, activeMode) {
  const num = parseInt(lessonNum, 10) || 1;
  const prevNum = num > 1 ? num - 1 : null;
  const nextNum = num < 50 ? num + 1 : null;
  const modePrefix = activeMode === 'quiz' ? 'quiz' : (activeMode === 'dokkai' ? 'dokkai' : (activeMode === 'kanji' ? 'kanji' : 'bai'));

  return `
    <div class="module-sync-bar" aria-label="Chuyển nhanh chế độ học Bài ${num}">
      <div class="module-sync-tabs">
        <button type="button" class="sync-tab-btn ${activeMode === 'lesson' ? 'active' : ''}" onclick="switchModule('bai-${num}')">
          <span class="sync-tab-icon">📖</span>
          <span>Lý thuyết Bài ${num}</span>
        </button>
        <button type="button" class="sync-tab-btn ${activeMode === 'kanji' ? 'active' : ''}" onclick="switchModule('kanji-${num}')">
          <span class="sync-tab-icon">💡</span>
          <span>Mẹo nhớ Kanji</span>
        </button>
        <button type="button" class="sync-tab-btn ${activeMode === 'quiz' ? 'active' : ''}" onclick="switchModule('quiz-${num}')">
          <span class="sync-tab-icon">✍️</span>
          <span>Trắc nghiệm (50 câu)</span>
        </button>
        <button type="button" class="sync-tab-btn ${activeMode === 'dokkai' ? 'active' : ''}" onclick="switchModule('dokkai-${num}')">
          <span class="sync-tab-icon">📜</span>
          <span>Đọc hiểu Bài ${num}</span>
        </button>
      </div>
      <div class="module-step-nav">
        <button type="button" class="step-nav-btn" ${prevNum ? `onclick="switchModule('${modePrefix}-${prevNum}')"` : 'disabled'} title="${prevNum ? `Về Bài ${prevNum}` : 'Đang ở bài đầu tiên'}">
          <span>← Bài ${prevNum || 1}</span>
        </button>
        <span class="step-nav-indicator">Bài ${num}/50</span>
        <button type="button" class="step-nav-btn" ${nextNum ? `onclick="switchModule('${modePrefix}-${nextNum}')"` : 'disabled'} title="${nextNum ? `Sang Bài ${nextNum}` : 'Đang ở bài cuối'}">
          <span>Bài ${nextNum || 50} →</span>
        </button>
      </div>
    </div>
  `;
}

function renderModuleFooterNav(lessonNum, activeMode) {
  const num = parseInt(lessonNum, 10) || 1;
  const prevNum = num > 1 ? num - 1 : null;
  const nextNum = num < 50 ? num + 1 : null;
  const modePrefix = activeMode === 'quiz' ? 'quiz' : (activeMode === 'dokkai' ? 'dokkai' : (activeMode === 'kanji' ? 'kanji' : 'bai'));

  return `
    <div class="module-footer-nav">
      <div class="footer-next-steps">
        ${activeMode === 'lesson' ? `
          <button type="button" class="footer-cta-card accent-amber" onclick="switchModule('kanji-${num}')">
            <span class="footer-cta-tag">Ghi nhớ chữ Hán</span>
            <strong class="footer-cta-title">Mẹo nhớ Kanji Bài ${num} →</strong>
            <span class="footer-cta-sub">Chiết tự & mẹo nhớ chữ Hán xuất hiện trong bài</span>
          </button>
          <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
            <span class="footer-cta-tag">Bước tiếp theo</span>
            <strong class="footer-cta-title">Làm 50 câu Trắc nghiệm Bài ${num} →</strong>
            <span class="footer-cta-sub">Kiểm tra ngay từ vựng & ngữ pháp vừa học</span>
          </button>
          <button type="button" class="footer-cta-card accent-emerald" onclick="switchModule('dokkai-${num}')">
            <span class="footer-cta-tag">Luyện kỹ năng đọc</span>
            <strong class="footer-cta-title">Đọc hiểu Dokkai Bài ${num} →</strong>
            <span class="footer-cta-sub">Đoạn văn thực tế kèm 100% Furigana & âm thanh</span>
          </button>
        ` : activeMode === 'quiz' ? `
          <button type="button" class="footer-cta-card accent-amber" onclick="switchModule('kanji-${num}')">
            <span class="footer-cta-tag">Củng cố Kanji</span>
            <strong class="footer-cta-title">Mẹo nhớ Kanji Bài ${num} →</strong>
            <span class="footer-cta-sub">Chiết tự & mẹo nhớ giúp làm tốt phần chữ Hán</span>
          </button>
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('bai-${num}')">
            <span class="footer-cta-tag">Ôn lại kiến thức</span>
            <strong class="footer-cta-title">← Xem lại Lý thuyết Bài ${num}</strong>
            <span class="footer-cta-sub">Bảng từ vựng, cấu trúc ngữ pháp & ví dụ</span>
          </button>
          <button type="button" class="footer-cta-card accent-emerald" onclick="switchModule('dokkai-${num}')">
            <span class="footer-cta-tag">Bước tiếp theo</span>
            <strong class="footer-cta-title">Luyện Đọc hiểu Bài ${num} →</strong>
            <span class="footer-cta-sub">Áp dụng ngữ pháp vào bài đọc thực tế</span>
          </button>
        ` : activeMode === 'dokkai' ? `
          <button type="button" class="footer-cta-card accent-amber" onclick="switchModule('kanji-${num}')">
            <span class="footer-cta-tag">Học chữ Hán bài này</span>
            <strong class="footer-cta-title">Mẹo nhớ Kanji Bài ${num} →</strong>
            <span class="footer-cta-sub">Chiết tự dễ thuộc & từ vựng bài đọc</span>
          </button>
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('bai-${num}')">
            <span class="footer-cta-tag">Ôn tập lý thuyết</span>
            <strong class="footer-cta-title">← Xem Lý thuyết Bài ${num}</strong>
            <span class="footer-cta-sub">Tra cứu lại từ vựng & ngữ pháp Bài ${num}</span>
          </button>
          <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
            <span class="footer-cta-tag">Luyện đề JLPT</span>
            <strong class="footer-cta-title">Làm 50 câu Bài tập Bài ${num} →</strong>
            <span class="footer-cta-sub">Củng cố toàn diện kiến thức Bài ${num}</span>
          </button>
        ` : `
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('bai-${num}')">
            <span class="footer-cta-tag">Lý thuyết chính</span>
            <strong class="footer-cta-title">← Lý thuyết Bài ${num}</strong>
            <span class="footer-cta-sub">Học từ vựng và cấu trúc ngữ pháp</span>
          </button>
          <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
            <span class="footer-cta-tag">Luyện đề</span>
            <strong class="footer-cta-title">Làm 50 câu Trắc nghiệm Bài ${num} →</strong>
            <span class="footer-cta-sub">Kiểm tra khả năng nhận diện Kanji & ngữ pháp</span>
          </button>
          <button type="button" class="footer-cta-card accent-emerald" onclick="switchModule('dokkai-${num}')">
            <span class="footer-cta-tag">Đọc hiểu</span>
            <strong class="footer-cta-title">Đọc hiểu Dokkai Bài ${num} →</strong>
            <span class="footer-cta-sub">Đoạn văn thực tế với Furigana và âm thanh</span>
          </button>
        `}
      </div>
      <div class="footer-lesson-pager">
        ${prevNum ? `
          <button type="button" class="pager-btn pager-prev" onclick="switchModule('${modePrefix}-${prevNum}')">
            <span>← Bài trước (Bài ${prevNum})</span>
          </button>
        ` : `<div></div>`}
        ${nextNum ? `
          <button type="button" class="pager-btn pager-next" onclick="switchModule('${modePrefix}-${nextNum}')">
            <span>Bài tiếp theo (Bài ${nextNum}) →</span>
          </button>
        ` : `<div></div>`}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 4. LOGIC RENDER NỘI DUNG CHÍNH (MAIN CONTENT)
// --------------------------------------------------------------------------
function renderContent(id) {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  currentActiveId = id;
  const extractedNum = extractLessonNumber(id);
  if (extractedNum) {
    lastLessonNumber = extractedNum;
  } else if (String(id).startsWith('radicals-')) {
    lastRadicalId = id;
  }

  syncMobileBottomNav(id);

  const mainContent = document.getElementById('main-content');
  if (mainContent) mainContent.scrollTop = 0;

  content.classList.remove('content-entering');
  safeRAF(() => {
    content.classList.add('content-entering');
  });

  const isCompleted = isModuleCompleted(id);

  // 1. TRƯỜNG HỢP: BÀI HỌC MINNA NO NIHONGO (bai-1 đến bai-50)
  if (id.startsWith('bai-')) {
    const lesson = lessonsData.find(l => l.id === id);
    if (!lesson) return;
    const lessonNum = id.replace('bai-', '');

    content.innerHTML = `
      ${renderModuleSyncBar(lessonNum, 'lesson')}

      <!-- Hero Header -->
      <div class="lesson-hero-card">
        <div class="hero-meta">
          <span class="badge badge-sakura">${lesson.badge || `Bài ${lessonNum} Minna`}</span>
          <span class="badge badge-green">${lesson.vocabulary.length} Từ vựng chuẩn SGK</span>
          <span class="badge badge-primary">${lesson.grammar.length} Cấu trúc ngữ pháp</span>
          <button id="btn-complete-lesson" 
                  class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${lesson.id}')">
            ${isCompleted ? '✓ Đã hoàn thành (Bấm để hủy)' : '○ Đánh dấu hoàn thành bài này'}
          </button>
        </div>
        <h2 class="lesson-title">${lesson.title}</h2>
        <p class="lesson-desc">${lesson.description}</p>
      </div>

      <!-- KHỐI LUYỆN TẬP TƯƠNG TÁC NHANH: FLASHCARD & KANJI MINI-QUIZ -->
      <div id="lesson-practice-mount"></div>

      <!-- PHẦN 1: TỪ VỰNG CHUẨN SÁCH GIÁO KHOA -->
      <section class="section-card">
        <div class="section-header vocab-section-header">
          <div class="section-title-group">
            <h3 class="section-title">Bảng Từ Vựng Trọng Tâm (${lesson.vocabulary.length} Từ)</h3>
            <span class="section-subtitle">Chạm vào biểu tượng loa để nghe phát âm chuẩn giọng Tokyo</span>
          </div>
          <div class="vocab-toolbar">
            <div class="vocab-filter-search">
              <input type="text"
                     id="vocab-inline-search"
                     class="vocab-search-input"
                     placeholder="Lọc nhanh từ vựng trong bài..."
                     oninput="filterLessonVocab(this.value)">
            </div>
            <div class="vocab-category-chips" role="tablist" aria-label="Lọc theo từ loại">
              <button type="button" class="vocab-cat-chip active" data-cat="all" onclick="filterLessonVocabByCategory('all', this)">Tất cả</button>
              <button type="button" class="vocab-cat-chip" data-cat="noun" onclick="filterLessonVocabByCategory('noun', this)">Danh từ</button>
              <button type="button" class="vocab-cat-chip" data-cat="verb" onclick="filterLessonVocabByCategory('verb', this)">Động từ</button>
              <button type="button" class="vocab-cat-chip" data-cat="adj" onclick="filterLessonVocabByCategory('adj', this)">Tính từ</button>
            </div>
          </div>
        </div>
        <div class="table-container">
          <table class="vocab-table">
            <thead>
              <tr>
                <th>Chữ Hán & Furigana</th>
                <th>Hiragana</th>
                <th>Từ loại</th>
                <th>Ý Nghĩa Tiếng Việt</th>
              </tr>
            </thead>
            <tbody id="vocab-table-body">
              ${lesson.vocabulary.map(v => {
                const hasKanji = hasKanjiCharacter(v.kanji);
                const speechTarget = cleanSpeechText(v.hiragana || v.kanji);
                const displayKanji = hasKanji ? v.kanji : (v.kanji || v.hiragana);
                const showSubReading = hasKanji && v.hiragana && cleanSpeechText(v.hiragana) !== cleanSpeechText(v.kanji);
                const isLongWord = isVocabTermLong(v);
                const catKey = getWordCategoryKey(v.type);
                return `
                <tr class="vocab-row" data-cat="${catKey}">
                  <td class="vocab-col-kanji ${isLongWord ? 'vocab-is-long' : ''}">
                    <button class="speak-btn" onclick="speakJapanese('${speechTarget}', this, event)" title="Phát âm từ này (Leda JP)">${SPEAKER_ICON_HTML}</button>
                    <div class="vocab-term-group">
                      <strong class="vocab-term-main">${displayKanji}</strong>
                      ${showSubReading ? `<span class="vocab-mobile-hira">${v.hiragana}</span>` : ''}
                    </div>
                    <div class="vocab-mobile-type">
                      ${formatWordTypeBadge(v.type)}
                    </div>
                  </td>
                  <td class="vocab-col-hira">${hasKanji ? v.hiragana : `<span class="vocab-no-kanji">—</span>`}</td>
                  <td class="vocab-col-type">${formatWordTypeBadge(v.type)}</td>
                  <td class="vocab-col-meaning">${v.meaning}</td>
                </tr>
              `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- PHẦN 2: CẤU TRÚC NGỮ PHÁP CHUẨN SÁCH & BẪY PHÒNG THI -->
      <section class="section-card">
        <div class="section-header">
          <div class="section-title-group">
            <h3 class="section-title">Cấu Trúc Ngữ Pháp & Lưu Ý Phòng Thi (${lesson.grammar.length} Chủ điểm)</h3>
            <span class="section-subtitle">Giải thích chi tiết cách dùng, mẹo tránh bẫy JLPT và hội thoại thực tế</span>
          </div>
        </div>
        <div class="grammar-list">
          ${lesson.grammar.map((g, gIdx) => `
            <div class="grammar-item-card">
              <div class="grammar-formula-bar">
                <span class="grammar-index-pill">Ngữ pháp ${String(gIdx + 1).padStart(2, '0')}</span>
                <div class="grammar-formula">${g.structure}</div>
              </div>
              <div class="grammar-usage">
                <div class="usage-title"><strong>💡 Ý nghĩa & Cách dùng:</strong></div>
                <div class="usage-text">${g.explanation.replace(/\n/g, '<br>')}</div>
              </div>
              ${g.caution ? `
                <div class="grammar-note">
                  <div class="note-title"><strong>⚠️ Lưu ý tránh bẫy trong đề thi:</strong></div>
                  <div class="note-text">${g.caution.replace(/\n/g, '<br>')}</div>
                </div>
              ` : ''}
              
              <div class="grammar-examples-section">
                <div class="examples-header">
                  <span class="examples-header-title">VÍ DỤ MINH HỌA CHUẨN SÁCH:</span>
                </div>
                <div class="example-cards-list">
                  ${renderGrammarExamples(g.examples, g.example_html)}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      ${renderModuleFooterNav(lessonNum, 'lesson')}
    `;

    // Khởi tạo bộ công cụ Flashcard & Kiểm tra Kanji nhanh trong bài (nếu môi trường trình duyệt thực)
    try {
      const mount = document.getElementById('lesson-practice-mount');
      if (mount && typeof mount.appendChild === 'function' && typeof document.createElement === 'function') {
        renderLessonPractice(lesson.vocabulary, '#lesson-practice-mount');
      }
    } catch (e) {}
    return;
  }

  // 2. TRƯỜNG HỢP: BÀI TẬP (50 CÂU TỪ QUIZ-1 ĐẾN QUIZ-50)
  if (id.startsWith('quiz-')) {
    const quizList = practiceQuizData[id] || [];
    const lessonNum = id.replace('quiz-', '');
    const lessonTitle = `Bài Tập - Bài ${lessonNum} Minna`;
    const lessonDesc = `Bộ 50 câu trắc nghiệm trọng tâm Bài ${lessonNum}. Hãy chọn đáp án cho từng câu và bấm "Nộp Bài" ở cuối trang để xem kết quả và giải thích!`;

    content.innerHTML = `
      ${renderModuleSyncBar(lessonNum, 'quiz')}

      <div class="lesson-hero-card">
        <div class="hero-meta">
          <span class="badge badge-sakura">Luyện Tập JLPT</span>
          <span class="badge badge-primary">50 Câu Hỏi</span>
          <button class="btn-redo" onclick="resetPracticeProgress('${id}')" title="Làm lại 50 câu trắc nghiệm này">
            <span>↻ Làm lại bài</span>
          </button>
        </div>
        <h2 class="lesson-title">${lessonTitle}</h2>
        <p class="lesson-desc">${lessonDesc}</p>
      </div>

      <!-- THANH ĐIỀU HƯỚNG CÂU HỎI & ĐỒNG HỒ ĐẾM NGƯỢC 30 PHÚT -->
      <div class="quiz-top-bar">
        <div class="quiz-timer-wrap">
          <span>⏱ Thời gian:</span>
          <span class="quiz-timer-display" id="quiz-timer-clock">30:00</span>
          <button id="btn-pause-timer" class="quiz-palette-toggle-btn" onclick="toggleQuizTimer()">Tạm dừng</button>
        </div>
        <button class="quiz-palette-toggle-btn" onclick="togglePaletteView()">
          <span>Ẩn/Hiện Bảng câu hỏi (1-${quizList.length})</span>
        </button>
      </div>

      <!-- BẢNG MA TRẬN 50 CÂU HỎI ĐỂ NHẢY NHANH -->
      <div class="quiz-palette-container" id="quiz-palette-container">
        <div class="quiz-palette-grid">
          ${quizList.map((q, idx) => `
            <button class="q-palette-btn" id="palette-btn-${q.id}" data-qid="${q.id}" onclick="scrollToQuestion('${q.id}')" title="Nhảy tới Câu ${idx + 1}">
              ${idx + 1}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="quiz-wrapper">
        ${quizList.map((q, qIdx) => `
          <div class="quiz-card" id="card-${q.id}">
            <div class="quiz-question-title">
              <strong>Câu ${qIdx + 1}:</strong> ${q.question}
              <button class="speak-btn-mini" onclick="speakQuizQuestion('${id}', '${q.id}', this, event)" title="Nghe câu hỏi này" style="margin-left: 8px;">
                ${SPEAKER_ICON_HTML}
              </button>
            </div>
            <div class="options-grid">
              ${q.options.map((opt, optIdx) => `
                <button class="option-btn" 
                        id="btn-${q.id}-${optIdx}" 
                        onclick="handleSelectOption('${id}', '${q.id}', ${optIdx}, false)">
                  <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
            <div class="quiz-feedback" id="feedback-${q.id}"></div>
          </div>
        `).join('')}
      </div>

      <!-- KHUNG NỘP BÀI / KẾT QUẢ Ở CUỐI BÀI TẬP -->
      <div id="quiz-bottom-panel">
        <div class="quiz-submit-section" id="quiz-submit-section">
          <div class="submit-progress-info">
            <div class="submit-progress-badge">
              <span id="submit-progress-count">Đã chọn: 0/${quizList.length} câu</span>
            </div>
            <div class="submit-progress-bar">
              <div class="submit-progress-fill" id="submit-progress-fill" style="width: 0%"></div>
            </div>
          </div>
          <button id="btn-submit-exam" class="btn-submit-exam" onclick="submitPracticeQuiz('${id}')">
            <span>Nộp Bài & Xem Kết Quả</span>
          </button>
        </div>
      </div>

      ${renderModuleFooterNav(lessonNum, 'quiz')}
    `;

    const state = getPracticeQuizState(id);
    if (!state.submitted) {
      initQuizTimer();
    }
    restorePracticeAnswers(id);
    initScrollReveal();
    return;
  }

  // 3. TRƯỜNG HỢP: ĐỌC HIỂU TỪNG BÀI (dokkai-1 đến dokkai-50)
  if (id.startsWith('dokkai-')) {
    renderDokkaiRoom(id);
    return;
  }

  // 4. TRƯỜNG HỢP: MẸO NHỚ CHỮ HÁN 50 BÀI (kanji-1 đến kanji-50)
  if (id.startsWith('kanji-')) {
    renderKanjiSection(id);
    return;
  }

  // 5. TRƯỜNG HỢP: BỘ THỦ TIẾNG NHẬT (radicals-1 đến radicals-17)
  if (id.startsWith('radicals-')) {
    renderRadicalSection(id);
    return;
  }
}

// --------------------------------------------------------------------------
// 4C. MODULE MẸO NHỚ CHỮ HÁN 50 BÀI HỌC (KANJI MNEMONICS)
// Bố trí chuẩn: Chữ Hán bên trên - Mẹo nhớ ở dòng bên dưới
// --------------------------------------------------------------------------
function renderKanjiSection(sectionId) {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  if (typeof kanjiLessonsData === 'undefined' || !kanjiLessonsData.length) {
    content.innerHTML = `<div class="lesson-hero-card"><h2 class="lesson-title">Đang tải dữ liệu Từ vựng Chữ Hán...</h2></div>`;
    return;
  }

  const lesson = kanjiLessonsData.find(k => k.id === sectionId) || kanjiLessonsData[0];
  if (!lesson) return;

  const lessonNum = lesson.lesson;
  const isCompleted = isModuleCompleted(sectionId);

  content.innerHTML = `
    ${renderModuleSyncBar(lessonNum, 'kanji')}

    <!-- Hero Header -->
    <div class="lesson-hero-card">
      <div class="hero-meta">
        <span class="badge badge-sakura">${lesson.level}</span>
        <span class="badge badge-primary">${lesson.items.length} Từ Vựng Chữ Hán</span>
        <span class="badge badge-green">100% Kèm Mẹo Nhớ & Cấu Thành</span>
        <button id="btn-complete-lesson" 
                class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                onclick="toggleLessonComplete('${lesson.id}')">
          ${isCompleted ? '✓ Đã hoàn thành (Bấm để hủy)' : '○ Đánh dấu hoàn thành bài này'}
        </button>
      </div>
      <h2 class="lesson-title">${lesson.title}</h2>
      <p class="lesson-desc">${lesson.description}</p>
    </div>

    <!-- Thanh tìm kiếm lọc nhanh từ vựng trong bài này -->
    <div class="kanji-search-toolbar">
      <div class="vocab-filter-search" style="flex: 1; max-width: 520px;">
        <input type="text"
               id="kanji-inline-search"
               class="vocab-search-input"
               placeholder="Tìm nhanh từ vựng, âm Hán Việt, cách đọc, mẹo nhớ trong bài này..."
               oninput="filterLessonKanji(this.value)">
      </div>
      <div class="kanji-view-stats">
        <span id="kanji-count-badge" class="badge badge-primary">Hiển thị: ${lesson.items.length}/${lesson.items.length} từ vựng</span>
      </div>
    </div>

    <!-- Danh sách các thẻ từ vựng: BỐ TRÍ CHỮ HÁN BÊN TRÊN - MẸO NHỚ Ở DÒNG BÊN DƯỚI -->
    <div class="kanji-cards-container" id="kanji-cards-list">
      ${lesson.items.map((item, idx) => `
        <article class="kanji-study-card" id="kcard-${item.id}" data-word="${item.word}" data-reading="${item.reading || ''}" data-kanji="${item.kanji || item.word}" data-hanviet="${item.hanViet}" data-meaning="${item.meaning}">
          
          <!-- DÒNG TRÊN: TỪ VỰNG CHỮ HÁN & THÔNG TIN HÁN TỰ -->
          <div class="kcard-top-section">
            <div class="kcard-char-display">
              <div class="kcard-char-box" onclick="speakJapanese('${(item.reading || item.word).replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim()}', this, event)" role="button" tabindex="0" title="Chạm để nghe phát âm: ${item.word}">
                <span class="kcard-kanji">${item.word}</span>
                ${item.reading ? `<span class="kcard-reading-sub">${item.reading}</span>` : ''}
                <span class="kcard-audio-pill">🔊 Nghe</span>
              </div>
              <span class="kcard-stroke-badge">${item.kanjiCount > 1 ? `${item.kanjiCount} chữ Hán • ${item.strokes} nét` : `${item.strokes} nét`}</span>
            </div>

            <div class="kcard-main-meta">
              <div class="kcard-header-row">
                <div class="kcard-hv-badge-wrap">
                  <span class="kcard-hv-tag">Hán Việt</span>
                  <strong class="kcard-hanviet">${item.hanViet}</strong>
                </div>
                <div class="kcard-meaning-wrap">
                  <span class="badge ${item.kanjiCount > 1 ? 'badge-primary' : 'badge-sakura'}">
                    ${item.kanjiCount > 1 ? `${item.kanjiCount} Chữ Hán ghép` : 'Chữ Hán đơn'}
                  </span>
                  ${item.type ? `<span class="badge badge-subtle">${item.type}</span>` : ''}
                  <div class="kcard-meaning-text">${item.meaning}</div>
                </div>
              </div>

              <!-- Phân tích chữ Hán cấu thành (cho từ ghép) hoặc Bộ thủ & On/Kun (cho từ đơn) -->
              ${item.kanjiCount > 1 ? `
                <div class="kcard-components-row">
                  <span class="components-label">Chữ Hán cấu thành từ này:</span>
                  <div class="components-pills-list">
                    ${item.components.map(c => `
                      <span class="comp-item-pill" title="Bộ: ${c.radical} • ${c.strokes} nét">
                        <strong class="comp-kanji">${c.kanji}</strong>
                        <span class="comp-hv">[${c.hanViet}]</span>
                        <span class="comp-mean">${c.meaning}</span>
                      </span>
                    `).join('')}
                  </div>
                </div>
              ` : `
                <div class="kcard-readings-row">
                  <div class="kcard-reading-col">
                    <span class="reading-type on">Âm On:</span>
                    <span class="reading-val on">${item.components[0].onyomi || '—'}</span>
                  </div>
                  <div class="kcard-reading-col">
                    <span class="reading-type kun">Âm Kun:</span>
                    <span class="reading-val kun">${item.components[0].kunyomi || '—'}</span>
                  </div>
                </div>
                <div class="kcard-radicals-row">
                  <span class="radical-title">Bộ thủ:</span>
                  <span class="radical-content">${item.components[0].radical || 'Cơ bản'}</span>
                </div>
              `}
            </div>
          </div>

          <!-- DÒNG BÊN DƯỚI: MẸO GHI NHỚ TỪ VỰNG NỔI BẬT & CÂU VÍ DỤ -->
          <div class="kcard-bottom-section">
            <!-- Hộp mẹo ghi nhớ cho TỪ ĐÓ trong 1 ô duy nhất -->
            <div class="kcard-mnemonic-box">
              <div class="mnemonic-badge-header">
                <span class="mnemonic-icon">💡</span>
                <strong class="mnemonic-title">${item.kanjiCount > 1 ? 'Mẹo Nhớ Từ Vựng Ghép:' : 'Mẹo Nhớ Chiết Tự:'}</strong>
              </div>
              <div class="mnemonic-story">${(item.mnemonic || '')
                .replace(/【Cấu thành】:/g, '<span class="mnemonic-tag mnemonic-tag-breakdown">【Cấu thành】:</span>')
                .replace(/【Chiết tự】:/g, '<span class="mnemonic-tag mnemonic-tag-breakdown">【Chiết tự】:</span>')
                .replace(/【Mẹo nhớ từ】:/g, '<span class="mnemonic-tag mnemonic-tag-story">【Mẹo nhớ từ】:</span>')
                .replace(/【Mẹo nhớ】:/g, '<span class="mnemonic-tag mnemonic-tag-story">【Mẹo nhớ】:</span>')}</div>
            </div>

            <!-- Câu ví dụ thực tế trong bài Minna -->
            ${item.example ? `
              <div class="kcard-example-pill" onclick="speakJapanese('${item.example.replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim()}', this, event)" role="button" tabindex="0" title="Chạm để nghe câu ví dụ">
                <span class="ex-label">Ví dụ Minna:</span>
                <strong class="ex-word">${item.example}</strong>
                <span class="ex-speaker">🔊</span>
              </div>
            ` : ''}
          </div>

        </article>
      `).join('')}
    </div>

    ${renderModuleFooterNav(lessonNum, 'kanji')}
  `;
}

window.filterLessonKanji = function(query) {
  const q = normalizeSearch(query || '');
  const raw = String(query || '').trim().toLowerCase();
  const cards = document.querySelectorAll ? document.querySelectorAll('.kanji-study-card') : [];
  let visibleCount = 0;
  cards.forEach(card => {
    const text = normalizeSearch(card.textContent || '');
    const word = (card.getAttribute('data-word') || '').toLowerCase();
    const reading = (card.getAttribute('data-reading') || '').toLowerCase();
    const kanji = (card.getAttribute('data-kanji') || '').toLowerCase();
    const hanviet = normalizeSearch(card.getAttribute('data-hanviet') || '');
    const meaning = normalizeSearch(card.getAttribute('data-meaning') || '');
    
    const isMatch = !q || text.includes(q) || word.includes(raw) || reading.includes(raw) || kanji.includes(raw) || hanviet.includes(q) || meaning.includes(q);
    card.style.display = isMatch ? '' : 'none';
    if (isMatch) visibleCount++;
  });
  const countBadge = document.getElementById('kanji-count-badge');
  if (countBadge) {
    countBadge.textContent = `Hiển thị: ${visibleCount}/${cards.length} từ vựng`;
  }
};

// Bộ lọc nhanh từ vựng ngay trong bài học
let activeVocabCat = 'all';
window.filterLessonVocab = function(query) {
  const q = normalizeSearch(query || '');
  const raw = String(query || '').trim().toLowerCase();
  const rows = document.querySelectorAll ? document.querySelectorAll('#vocab-table-body .vocab-row') : [];
  rows.forEach(row => {
    const catMatch = (activeVocabCat === 'all') || (row.getAttribute('data-cat') === activeVocabCat);
    const text = row.textContent || '';
    const textMatch = !q || normalizeSearch(text).includes(q) || text.toLowerCase().includes(raw);
    row.style.display = (catMatch && textMatch) ? '' : 'none';
  });
};

window.filterLessonVocabByCategory = function(cat, btn) {
  activeVocabCat = cat || 'all';
  if (document.querySelectorAll) {
    document.querySelectorAll('.vocab-cat-chip').forEach(c => {
      c.classList.toggle('active', c === btn || c.getAttribute('data-cat') === activeVocabCat);
    });
  }
  const input = document.getElementById('vocab-inline-search');
  window.filterLessonVocab(input ? input.value : '');
};

// --------------------------------------------------------------------------
// 4B. MODULE BỘ THỦ TIẾNG NHẬT (KANJI RADICALS) - NGỌC TIỆP MINATO
// --------------------------------------------------------------------------
let activeRadicalSession = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function renderRadicalSection(sectionId) {
  activeRadicalSession++;
  const currentSession = activeRadicalSession;

  const content = document.getElementById('lesson-content');
  if (!content) return;

  if (typeof radicalsData === 'undefined') return;
  const group = radicalsData.find(g => g.id === sectionId) || radicalsData[0];
  if (!group) return;

  const isCompleted = isModuleCompleted(sectionId);

  content.innerHTML = `
    <!-- Thanh chọn nhanh 17 nhóm số nét Bộ thủ -->
    <div class="radical-group-tabs" aria-label="Chọn nhóm bộ thủ theo số nét">
      ${radicalsData.map(g => {
        const strokeNum = g.id.replace('radicals-', '');
        const isActive = g.id === group.id;
        return `
          <button type="button" class="radical-group-pill ${isActive ? 'active' : ''}" onclick="switchModule('${g.id}')">
            <span>${strokeNum} nét</span>
            <small>(${g.items.length})</small>
          </button>
        `;
      }).join('')}
    </div>

    <!-- Hero Header -->
    <div class="lesson-hero-card">
      <div class="hero-meta">
        <span class="badge badge-sakura">Bộ Thủ Tiếng Nhật</span>
        <span class="badge badge-primary">${group.title}</span>
        <span class="badge badge-green">${group.items.length} Bộ thủ chuẩn</span>
        <button id="btn-complete-lesson" 
                class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                onclick="toggleLessonComplete('${group.id}')">
          ${isCompleted ? '✓ Đã hoàn thành (Bấm để hủy)' : '○ Đánh dấu hoàn thành phần này'}
        </button>
      </div>
      <h2 class="lesson-title">${group.title}</h2>
      <p class="lesson-desc">${group.description}</p>
    </div>

    <!-- TÌM KIẾM BỘ THỦ TRONG PHẦN NÀY -->
    <div class="radical-filter-bar">
      <input type="text" 
             id="radical-filter-input"
             class="vocab-search-input radical-search-input" 
             placeholder="Tìm nhanh bộ thủ trong nhóm này (tên, nghĩa, chữ Hán...)" 
             oninput="filterRadicalsInGroup(this.value)">
    </div>

    <!-- Danh sách các bộ thủ tuân thủ cùng 1 format chuẩn -->
    <div class="radicals-container">
      ${group.items.map(item => `
        <article class="radical-card" id="card-${item.id}" data-id="${item.id}" data-strokes="${item.strokeCount}">
          
          <!-- 1. CÁCH VIẾT: Ô ĐỦ LỚN & CÁC NÉT TỰ ĐỘNG VIẾT LẶP ĐI LẶP LẠI -->
          <div class="radical-writing-section">
            <div class="writing-label">
              <span class="label-title">Cách viết (${item.strokeCount} nét)</span>
            </div>
            
            <div class="radical-stroke-box">
              <!-- Lưới chữ điền mễ tự cách 田 -->
              <div class="stroke-grid-lines" aria-hidden="true">
                <div class="grid-line grid-line-h"></div>
                <div class="grid-line grid-line-v"></div>
              </div>
              
              <!-- SVG hiển thị nét chữ chuẩn vector KanjiVG -->
              <svg class="radical-stroke-svg" viewBox="0 0 109 109" data-id="${item.id}">
                <!-- Lớp nét phác thảo mờ ở nền (Ghost strokes) -->
                <g class="ghost-strokes">
                  ${item.paths.map(p => `<path d="${p}" />`).join('')}
                </g>
                <!-- Lớp nét vẽ động tuần hoàn lặp đi lặp lại -->
                <g class="animated-strokes">
                  ${item.paths.map((p, idx) => `<path class="stroke-path" data-stroke="${idx}" d="${p}" />`).join('')}
                </g>
              </svg>
            </div>
          </div>

          <!-- THÔNG TIN BỘ THỦ -->
          <div class="radical-info-body">
            
            <!-- 2. TÊN CỦA BỘ ĐÓ -->
            <div class="radical-field radical-name-field">
              <div class="field-label">Tên bộ:</div>
              <div class="field-value radical-name-value">
                <span class="radical-main-char">${item.character}</span>
                <span class="radical-full-name">${item.name}</span>
              </div>
            </div>

            <!-- 3. Ý NGHĨA CỦA BỘ THỦ ĐÓ -->
            <div class="radical-field radical-meaning-field">
              <div class="field-label">Ý nghĩa của bộ thủ:</div>
              <div class="field-value radical-meaning-value">
                ${item.meaning}
              </div>
            </div>

            <!-- 4. Ý NGHĨA CỦA BỘ THỦ ĐÓ TRONG KANJI -->
            <div class="radical-field radical-kanji-meaning-field">
              <div class="field-label">Ý nghĩa của bộ thủ trong Kanji:</div>
              <div class="field-value radical-kanji-meaning-value">
                <p class="kanji-meaning-desc">${item.kanjiMeaning}</p>
                ${item.examples && item.examples.length > 0 ? `
                  <div class="radical-examples-wrap">
                    <span class="examples-tag">Chữ Hán ví dụ (Chạm để nghe):</span>
                    <div class="kanji-example-chips">
                      ${item.examples.map(ex => `
                        <div class="kanji-chip" onclick="speakJapanese('${ex.kanji}', this, event)" role="button" tabindex="0" title="Chạm để nghe phát âm chữ ${ex.kanji}">
                          <span class="chip-char">${ex.kanji}</span>
                          <span class="chip-han">${ex.amHan}</span>
                          <span class="chip-mean">${ex.nghia}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>

          </div>

        </article>
      `).join('')}
    </div>
  `;

  initRadicalStrokeLoops(currentSession);
}

window.filterRadicalsInGroup = function(query) {
  const val = (query || '').trim().toLowerCase();
  const cards = document.querySelectorAll ? document.querySelectorAll('.radical-card') : [];
  cards.forEach(c => {
    if (!val) {
      c.style.display = '';
      return;
    }
    const text = (c.textContent || '').toLowerCase();
    c.style.display = text.includes(val) ? '' : 'none';
  });
};

function initRadicalStrokeLoops(currentSession) {
  const cards = document.querySelectorAll ? document.querySelectorAll('.radical-card') : [];

  cards.forEach(card => {
    const svg = card.querySelector ? card.querySelector('.radical-stroke-svg') : null;
    if (!svg) return;

    const strokePaths = svg.querySelectorAll ? svg.querySelectorAll('.animated-strokes .stroke-path') : [];
    if (!strokePaths || strokePaths.length === 0) return;

    const lengths = [];
    strokePaths.forEach(p => {
      let len = 100;
      try { len = p.getTotalLength() || 100; } catch (e) { len = 100; }
      lengths.push(len);
      p.style.strokeDasharray = `${len} ${len}`;
      p.style.strokeDashoffset = `${len}`;
    });

    let isVisible = false;
    let cancelCurrent = false;

    async function runLoop() {
      while (currentSession === activeRadicalSession && document.body && document.body.contains && document.body.contains(svg) && isVisible) {
        cancelCurrent = false;

        strokePaths.forEach((p, i) => {
          p.style.transition = 'none';
          p.style.strokeDashoffset = `${lengths[i]}`;
          p.style.opacity = '1';
        });

        await sleep(250);
        if (cancelCurrent || currentSession !== activeRadicalSession || !document.body.contains(svg) || !isVisible) break;

        for (let i = 0; i < strokePaths.length; i++) {
          if (cancelCurrent || currentSession !== activeRadicalSession || !document.body.contains(svg) || !isVisible) break;
          const p = strokePaths[i];
          const len = lengths[i];
          const duration = Math.max(350, Math.min(750, Math.round(len * 5.2)));
          p.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
          p.style.strokeDashoffset = '0';
          await sleep(duration + 90);
        }

        if (cancelCurrent || currentSession !== activeRadicalSession || !document.body.contains(svg) || !isVisible) break;

        await sleep(1400);
        if (cancelCurrent || currentSession !== activeRadicalSession || !document.body.contains(svg) || !isVisible) break;

        strokePaths.forEach(p => {
          p.style.transition = 'opacity 300ms ease';
          p.style.opacity = '0';
        });
        await sleep(350);
      }
    }

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              runLoop();
            }
          } else {
            isVisible = false;
            cancelCurrent = true;
          }
        });
      }, { rootMargin: '120px' });
      observer.observe(card);
    } else {
      isVisible = true;
      runLoop();
    }
  });
}

// --------------------------------------------------------------------------
// 5. PHÒNG ĐỌC HIỂU (MỖI BÀI 1 BÀI ĐỌC & 5 CÂU HỎI ĐI KÈM)
// --------------------------------------------------------------------------
function renderDokkaiRoom(dokkaiId) {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  const dokkai = dokkaiData.find(d => d.id === dokkaiId);
  if (!dokkai) return;
  const lessonNum = dokkaiId.replace('dokkai-', '');

  content.innerHTML = `
    ${renderModuleSyncBar(lessonNum, 'dokkai')}

    <div class="lesson-hero-card">
      <div class="hero-meta">
        <span class="badge badge-sakura">Luyện Đọc Hiểu</span>
        <span class="badge badge-primary">1 Bài Đọc</span>
        <span class="badge badge-green">5 Câu Hỏi Đi Kèm</span>
        <button class="btn-redo" onclick="resetDokkaiProgress('${dokkai.id}')" title="Làm lại bài đọc hiểu này">
          <span>↻ Làm lại bài</span>
        </button>
      </div>
      <h2 class="lesson-title">${dokkai.title}</h2>
      <p class="lesson-desc"><strong>Chủ đề:</strong> ${dokkai.subTitle}. ${dokkai.description}</p>
    </div>

    <div class="dokkai-split-view">
      <!-- CỘT TRÁI: NỘI DUNG BÀI ĐỌC (CỐ ĐỊNH KHI CUỘN TRÊN DESKTOP) -->
      <div class="dokkai-passage-col">
        <section class="section-card dokkai-passage-sticky-card">
          <div class="section-header">
            <h3 class="section-title">Nội Dung Bài Đọc</h3>
          </div>
          <div class="dokkai-passage">${dokkai.passage}</div>
          <div class="dokkai-actions-bar">
            <button class="btn-dokkai-tool" onclick="speakDokkaiPassage('${dokkai.id}', this, event)" title="Nghe phát âm toàn bài đọc">
              ${SPEAKER_ICON_HTML} <span>Nghe Bài Đọc</span>
            </button>
            <button class="btn-dokkai-tool" onclick="toggleDokkaiTranslation('${dokkai.id}', this)" title="Xem bản dịch nghĩa Tiếng Việt đầy đủ">
              <span>📖 Xem Dịch Nghĩa</span>
            </button>
          </div>
          <div id="dokkai-trans-${dokkai.id}" class="dokkai-translation-box" style="display: none;">
            <div class="dokkai-trans-header">
              <span class="dokkai-trans-title">Bản Dịch Tiếng Việt Chi Tiết</span>
            </div>
            <div class="dokkai-trans-body">${dokkai.translation || dokkai.description}</div>
          </div>
        </section>
      </div>

      <!-- CỘT PHẢI: 5 CÂU HỎI ĐỌC HIỂU ĐI KÈM -->
      <div class="dokkai-questions-col">
        <section class="section-card">
          <div class="section-header">
            <h3 class="section-title">Câu Hỏi Đọc Hiểu (5 Câu)</h3>
          </div>
          <div class="quiz-wrapper">
            ${dokkai.questions.map((q, qIdx) => `
              <div class="quiz-card" id="card-${q.id}">
                <div class="quiz-question-title">
                  <strong>Câu ${qIdx + 1}:</strong> ${q.question}
                  <button class="speak-btn-mini" onclick="speakDokkaiQuestion('${dokkai.id}', '${q.id}', this, event)" title="Nghe câu hỏi này" style="margin-left: 8px;">
                    ${SPEAKER_ICON_HTML}
                  </button>
                </div>
                <div class="options-grid">
                  ${q.options.map((opt, optIdx) => `
                    <button class="option-btn" 
                            id="btn-${q.id}-${optIdx}" 
                            onclick="handleSelectOption('${dokkai.id}', '${q.id}', ${optIdx}, true)">
                      <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
                      <span>${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div class="quiz-feedback" id="feedback-${q.id}"></div>
              </div>
            `).join('')}
          </div>

          <!-- KHUNG NỘP BÀI / KẾT QUẢ ĐỌC HIỂU -->
          <div id="quiz-bottom-panel">
            <div class="quiz-submit-section" id="quiz-submit-section">
              <div class="submit-progress-info">
                <div class="submit-progress-badge">
                  <span id="submit-progress-count">Đã chọn: 0/5 câu</span>
                </div>
                <div class="submit-progress-bar">
                  <div class="submit-progress-fill" id="submit-progress-fill" style="width: 0%"></div>
                </div>
              </div>
              <button id="btn-submit-exam" class="btn-submit-exam" onclick="submitDokkai('${dokkai.id}')">
                <span>Nộp Bài & Xem Kết Quả</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>

    ${renderModuleFooterNav(lessonNum, 'dokkai')}
  `;

  restoreDokkaiAnswers(dokkai.id);
  initScrollReveal();
}

window.toggleDokkaiTranslation = function(dokkaiId, btn) {
  const box = document.getElementById(`dokkai-trans-${dokkaiId}`);
  if (box) {
    const isHidden = (box.style.display === 'none');
    box.style.display = isHidden ? 'block' : 'none';
    if (btn) {
      btn.innerHTML = isHidden ? '<span>🙈 Ẩn Dịch Nghĩa</span>' : '<span>📖 Xem Dịch Nghĩa</span>';
    }
  }
};

window.speakDokkaiPassage = function(dokkaiId, btn, ev) {
  const dokkai = dokkaiData.find(d => d.id === dokkaiId);
  if (dokkai && dokkai.passage) {
    speakJapanese(cleanSpeechText(dokkai.passage), btn, ev);
  }
};

window.speakDokkaiQuestion = function(dokkaiId, qId, btn, ev) {
  const dokkai = dokkaiData.find(d => d.id === dokkaiId);
  if (dokkai && dokkai.questions) {
    const q = dokkai.questions.find(item => item.id === qId);
    if (q && q.question) {
      speakJapanese(cleanSpeechText(q.question), btn, ev);
    }
  }
};

// --------------------------------------------------------------------------
// 6. QUẢN LÝ LÀM BÀI, NỘP BÀI & GIẢI THÍCH (PRACTICE QUIZ & DOKKAI)
// --------------------------------------------------------------------------
function getPracticeQuizState(quizId) {
  try {
    const raw = safeGetStorage(STORAGE_PRACTICE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    return all[quizId] || { submitted: false, selections: {}, score: null };
  } catch (e) {
    return { submitted: false, selections: {}, score: null };
  }
}

function savePracticeQuizState(quizId, state) {
  try {
    const raw = safeGetStorage(STORAGE_PRACTICE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    all[quizId] = state;
    safeSetStorage(STORAGE_PRACTICE_KEY, JSON.stringify(all));
  } catch (e) {}
}

function getDokkaiState(dokkaiId) {
  try {
    const raw = safeGetStorage(STORAGE_DOKKAI_KEY);
    const all = raw ? JSON.parse(raw) : {};
    return all[dokkaiId] || { submitted: false, selections: {}, score: null };
  } catch (e) {
    return { submitted: false, selections: {}, score: null };
  }
}

function saveDokkaiState(dokkaiId, state) {
  try {
    const raw = safeGetStorage(STORAGE_DOKKAI_KEY);
    const all = raw ? JSON.parse(raw) : {};
    all[dokkaiId] = state;
    safeSetStorage(STORAGE_DOKKAI_KEY, JSON.stringify(all));
  } catch (e) {}
}

let quizTimerInterval = null;
let quizSecondsLeft = 30 * 60;
let isQuizTimerPaused = false;

window.initQuizTimer = function() {
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
  quizSecondsLeft = 30 * 60;
  isQuizTimerPaused = false;

  const clockEl = document.getElementById('quiz-timer-clock');
  const pauseBtn = document.getElementById('btn-pause-timer');
  if (clockEl) {
    clockEl.textContent = '30:00';
    clockEl.classList.remove('timer-warning');
  }
  if (pauseBtn) pauseBtn.textContent = 'Tạm dừng';

  quizTimerInterval = setInterval(() => {
    if (isQuizTimerPaused) return;

    quizSecondsLeft--;
    if (quizSecondsLeft <= 0) {
      clearInterval(quizTimerInterval);
      quizTimerInterval = null;
      if (clockEl) clockEl.textContent = '00:00';
      showToast('Đã hết 30 phút làm bài! Hệ thống đang tự động nộp bài...');
      if (typeof finalizePracticeQuizSubmission === 'function') {
        finalizePracticeQuizSubmission(currentActiveId);
      }
      return;
    }

    const mins = Math.floor(quizSecondsLeft / 60);
    const secs = quizSecondsLeft % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (clockEl) {
      clockEl.textContent = timeStr;
      if (quizSecondsLeft <= 300) {
        clockEl.classList.add('timer-warning');
      }
    }
  }, 1000);
  if (quizTimerInterval && typeof quizTimerInterval.unref === 'function') quizTimerInterval.unref();
};

window.toggleQuizTimer = function() {
  const pauseBtn = document.getElementById('btn-pause-timer');
  isQuizTimerPaused = !isQuizTimerPaused;
  if (pauseBtn) {
    pauseBtn.textContent = isQuizTimerPaused ? 'Tiếp tục' : 'Tạm dừng';
  }
  showToast(isQuizTimerPaused ? 'Đã tạm dừng thời gian làm bài' : 'Tiếp tục tính giờ làm bài');
};

window.togglePaletteView = function() {
  const container = document.getElementById('quiz-palette-container');
  if (container) {
    container.classList.toggle('collapsed');
  }
};

window.scrollToQuestion = function(qId) {
  const card = document.getElementById(`card-${qId}`);
  if (card && card.scrollIntoView) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.remove('unanswered-pulse');
    setTimeout(() => {
      card.classList.add('unanswered-pulse');
      setTimeout(() => card.classList.remove('unanswered-pulse'), 1200);
    }, 50);
  }
};

window.speakQuizQuestion = function(quizId, qId, btn, ev) {
  const list = practiceQuizData[quizId] || [];
  const q = list.find(item => item.id === qId);
  if (q && q.question) {
    speakJapanese(cleanSpeechText(q.question), btn, ev);
  }
};

window.handleSelectOption = function(moduleId, questionId, optIdx, isDokkai = false) {
  const state = isDokkai ? getDokkaiState(moduleId) : getPracticeQuizState(moduleId);
  if (state.submitted) {
    return;
  }

  state.selections = state.selections || {};
  state.selections[questionId] = optIdx;

  if (isDokkai) {
    saveDokkaiState(moduleId, state);
  } else {
    savePracticeQuizState(moduleId, state);
  }

  const card = document.getElementById(`card-${questionId}`);
  if (card && card.querySelectorAll) {
    const buttons = card.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
      btn.classList.toggle('selected', idx === optIdx);
    });
    card.classList.remove('unanswered-pulse');
  }

  if (!isDokkai) {
    const palBtn = document.getElementById(`palette-btn-${questionId}`);
    if (palBtn) {
      palBtn.classList.add('answered');
    }
  }

  updateSubmitBarProgress(moduleId, isDokkai);
};

function updateSubmitBarProgress(moduleId, isDokkai = false) {
  let questions = [];
  if (isDokkai) {
    const dokkai = dokkaiData.find(d => d.id === moduleId);
    if (dokkai) questions = dokkai.questions;
  } else {
    questions = practiceQuizData[moduleId] || [];
  }

  const total = questions.length;
  if (total === 0) return;

  const state = isDokkai ? getDokkaiState(moduleId) : getPracticeQuizState(moduleId);
  const selections = state.selections || {};
  const answeredCount = Object.keys(selections).length;

  const countEl = document.getElementById('submit-progress-count');
  const fillEl = document.getElementById('submit-progress-fill');
  if (countEl) countEl.textContent = `Đã chọn: ${answeredCount}/${total} câu`;
  if (fillEl) {
    const pct = Math.round((answeredCount / total) * 100);
    fillEl.style.width = `${pct}%`;
  }
}

function renderResultBanner(moduleId, isDokkai, correctCount, totalCount, percentage) {
  const panel = document.getElementById('quiz-bottom-panel');
  if (!panel) return;

  const isPass = percentage >= 60;
  const heading = percentage >= 80 ? 'Xuất Sắc!' : (isPass ? 'Đạt Yêu Cầu!' : 'Cần Ôn Tập Thêm!');
  const redoFn = isDokkai ? `resetDokkaiProgress('${moduleId}')` : `resetPracticeProgress('${moduleId}')`;
  const wrongCount = totalCount - correctCount;

  panel.innerHTML = `
    <div class="quiz-result-banner ${isPass ? 'pass' : 'fail'}" id="quiz-result-banner">
      <div class="result-left">
        <div class="result-score-circle">
          <span class="score-main">${correctCount}/${totalCount}</span>
          <span class="score-percent">${percentage}%</span>
        </div>
        <div class="result-text">
          <h3 class="result-heading">${heading}</h3>
          <p class="result-subtext">
            Bạn làm đúng <strong>${correctCount}</strong> câu, sai <strong>${wrongCount}</strong> câu.
            ${wrongCount > 0 ? '(Xem giải thích chi tiết các câu sai bên dưới)' : '(Tất cả câu trả lời đều chính xác!)'}
          </p>
        </div>
      </div>
      <div class="result-actions">
        <button class="btn-redo-result" onclick="${redoFn}">
          <span>↻ Làm Lại Bài</span>
        </button>
      </div>
    </div>
  `;
}

function finalizePracticeQuizSubmission(quizId) {
  const quizList = practiceQuizData[quizId] || [];
  const state = getPracticeQuizState(quizId);
  const selections = state.selections || {};

  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }

  let correctCount = 0;
  const totalCount = quizList.length;

  quizList.forEach(q => {
    const selectedIdx = selections[q.id];
    const isCorrect = (selectedIdx !== undefined && selectedIdx === q.correctIdx);
    if (isCorrect) correctCount++;

    const buttons = document.querySelectorAll ? document.querySelectorAll(`[id^="btn-${q.id}-"]`) : [];
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove('selected');
      if (idx === q.correctIdx) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong', 'incorrect');
      }
    });

    const fb = document.getElementById(`feedback-${q.id}`);
    if (fb) {
      if (!isCorrect) {
        fb.className = 'quiz-feedback show feedback-wrong';
        fb.innerHTML = `
          <strong>✗ Chưa chính xác! (Đáp án đúng: ${String.fromCharCode(65 + q.correctIdx)})</strong>
          <div class="feedback-explanation"><em>Giải thích:</em> ${q.explanation}</div>
        `;
      } else {
        fb.className = 'quiz-feedback show feedback-correct';
        fb.innerHTML = `
          <strong>✓ Chính xác! (Đáp án đúng: ${String.fromCharCode(65 + q.correctIdx)})</strong>
          <div class="feedback-explanation"><em>Giải thích:</em> ${q.explanation}</div>
        `;
      }
    }

    const palBtn = document.getElementById(`palette-btn-${q.id}`);
    if (palBtn) {
      palBtn.classList.remove('answered');
      palBtn.classList.toggle('correct', isCorrect);
      palBtn.classList.toggle('wrong', !isCorrect);
    }
  });

  const percentage = Math.round((correctCount / totalCount) * 100);
  state.submitted = true;
  state.score = { correct: correctCount, total: totalCount, percentage };
  savePracticeQuizState(quizId, state);

  if (percentage >= 60) {
    const list = getCompletedModules();
    if (!list.includes(quizId)) {
      list.push(quizId);
      safeSetStorage(STORAGE_COMPLETED_KEY, JSON.stringify(list));
      renderSidebar();
      updateHeaderProgress();
    }
  }

  renderResultBanner(quizId, false, correctCount, totalCount, percentage);
  showToast(`Đã nộp bài! Kết quả: ${correctCount}/${totalCount} câu (${percentage}%).`);
}

window.submitPracticeQuiz = function(quizId) {
  const quizList = practiceQuizData[quizId] || [];
  const state = getPracticeQuizState(quizId);
  const selections = state.selections || {};

  const missing = quizList.filter(q => selections[q.id] === undefined);
  if (missing.length > 0) {
    showAppConfirm(
      'Nộp bài sớm?',
      `Bạn còn ${missing.length} câu chưa chọn đáp án.\nBạn có muốn nộp bài ngay bây giờ không? (Các câu chưa trả lời sẽ được tính 0 điểm)`,
      () => finalizePracticeQuizSubmission(quizId)
    );
    const firstMissing = document.getElementById(`card-${missing[0].id}`);
    if (firstMissing && firstMissing.scrollIntoView) {
      firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstMissing.classList.remove('unanswered-pulse');
      safeRAF(() => {
        firstMissing.classList.add('unanswered-pulse');
      });
    }
    return;
  }

  finalizePracticeQuizSubmission(quizId);
};

function finalizeDokkaiSubmission(dokkaiId) {
  const dokkai = dokkaiData.find(d => d.id === dokkaiId);
  if (!dokkai) return;
  const questions = dokkai.questions || [];
  const state = getDokkaiState(dokkaiId);
  const selections = state.selections || {};

  let correctCount = 0;
  const totalCount = questions.length;

  questions.forEach(q => {
    const selectedIdx = selections[q.id];
    const isCorrect = (selectedIdx !== undefined && selectedIdx === q.correctIdx);
    if (isCorrect) correctCount++;

    const buttons = document.querySelectorAll ? document.querySelectorAll(`[id^="btn-${q.id}-"]`) : [];
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove('selected');
      if (idx === q.correctIdx) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong', 'incorrect');
      }
    });

    const fb = document.getElementById(`feedback-${q.id}`);
    if (fb) {
      if (!isCorrect) {
        fb.className = 'quiz-feedback show feedback-wrong';
        fb.innerHTML = `
          <strong>✗ Chưa chính xác! (Đáp án đúng: ${String.fromCharCode(65 + q.correctIdx)})</strong>
          <div class="feedback-explanation"><em>Giải thích:</em> ${q.explanation}</div>
        `;
      } else {
        fb.className = 'quiz-feedback show feedback-correct';
        fb.innerHTML = `
          <strong>✓ Chính xác! (Đáp án đúng: ${String.fromCharCode(65 + q.correctIdx)})</strong>
          <div class="feedback-explanation"><em>Giải thích:</em> ${q.explanation}</div>
        `;
      }
    }
  });

  const percentage = Math.round((correctCount / totalCount) * 100);
  state.submitted = true;
  state.score = { correct: correctCount, total: totalCount, percentage };
  saveDokkaiState(dokkaiId, state);

  if (percentage >= 60) {
    const list = getCompletedModules();
    if (!list.includes(dokkaiId)) {
      list.push(dokkaiId);
      safeSetStorage(STORAGE_COMPLETED_KEY, JSON.stringify(list));
      renderSidebar();
      updateHeaderProgress();
    }
  }

  renderResultBanner(dokkaiId, true, correctCount, totalCount, percentage);
  showToast(`Đã nộp bài đọc hiểu! Kết quả: ${correctCount}/${totalCount} câu (${percentage}%).`);
}

window.submitDokkai = function(dokkaiId) {
  const dokkai = dokkaiData.find(d => d.id === dokkaiId);
  if (!dokkai) return;
  const questions = dokkai.questions || [];
  const state = getDokkaiState(dokkaiId);
  const selections = state.selections || {};

  const missing = questions.filter(q => selections[q.id] === undefined);
  if (missing.length > 0) {
    showAppConfirm(
      'Nộp bài đọc hiểu?',
      `Bạn còn ${missing.length} câu chưa chọn đáp án.\nBạn có muốn nộp bài đọc hiểu ngay không? (Các câu chưa trả lời sẽ được tính 0 điểm)`,
      () => finalizeDokkaiSubmission(dokkaiId)
    );
    const firstMissing = document.getElementById(`card-${missing[0].id}`);
    if (firstMissing && firstMissing.scrollIntoView) {
      firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstMissing.classList.remove('unanswered-pulse');
      safeRAF(() => {
        firstMissing.classList.add('unanswered-pulse');
      });
    }
    return;
  }

  finalizeDokkaiSubmission(dokkaiId);
};

function restorePracticeAnswers(quizId) {
  const quizList = practiceQuizData[quizId] || [];
  const state = getPracticeQuizState(quizId);
  const selections = state.selections || {};

  if (!state.submitted) {
    quizList.forEach(q => {
      if (selections[q.id] !== undefined) {
        const btn = document.getElementById(`btn-${q.id}-${selections[q.id]}`);
        if (btn) btn.classList.add('selected');
        const palBtn = document.getElementById(`palette-btn-${q.id}`);
        if (palBtn) palBtn.classList.add('answered');
      }
    });
    updateSubmitBarProgress(quizId, false);
  } else {
    let correctCount = 0;
    quizList.forEach(q => {
      const selectedIdx = selections[q.id];
      const isCorrect = (selectedIdx !== undefined && selectedIdx === q.correctIdx);
      if (isCorrect) correctCount++;

      const buttons = document.querySelectorAll ? document.querySelectorAll(`[id^="btn-${q.id}-"]`) : [];
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIdx) {
          btn.classList.add('correct');
        } else if (idx === selectedIdx) {
          btn.classList.add('wrong', 'incorrect');
        }
      });

      const fb = document.getElementById(`feedback-${q.id}`);
      if (fb) {
        if (!isCorrect) {
          fb.className = 'quiz-feedback show feedback-wrong';
          fb.innerHTML = `
            <strong>✗ Chưa chính xác! (Đáp án đúng: ${String.fromCharCode(65 + q.correctIdx)})</strong>
            <div class="feedback-explanation"><em>Giải thích:</em> ${q.explanation}</div>
          `;
        } else {
          fb.className = 'quiz-feedback show feedback-correct';
          fb.innerHTML = `
            <strong>✓ Chính xác! (Đáp án đúng: ${String.fromCharCode(65 + q.correctIdx)})</strong>
            <div class="feedback-explanation"><em>Giải thích:</em> ${q.explanation}</div>
          `;
        }
      }

      const palBtn = document.getElementById(`palette-btn-${q.id}`);
      if (palBtn) {
        palBtn.classList.remove('answered');
        palBtn.classList.toggle('correct', isCorrect);
        palBtn.classList.toggle('wrong', !isCorrect);
      }
    });

    const totalCount = quizList.length;
    const percentage = state.score ? state.score.percentage : Math.round((correctCount / totalCount) * 100);
    renderResultBanner(quizId, false, correctCount, totalCount, percentage);
  }
}

function restoreDokkaiAnswers(dokkaiId) {
  const dokkai = dokkaiData.find(d => d.id === dokkaiId);
  if (!dokkai) return;
  const questions = dokkai.questions || [];
  const state = getDokkaiState(dokkaiId);
  const selections = state.selections || {};

  if (!state.submitted) {
    questions.forEach(q => {
      if (selections[q.id] !== undefined) {
        const btn = document.getElementById(`btn-${q.id}-${selections[q.id]}`);
        if (btn) btn.classList.add('selected');
      }
    });
    updateSubmitBarProgress(dokkaiId, true);
  } else {
    let correctCount = 0;
    questions.forEach(q => {
      const selectedIdx = selections[q.id];
      const isCorrect = (selectedIdx !== undefined && selectedIdx === q.correctIdx);
      if (isCorrect) correctCount++;

      const buttons = document.querySelectorAll ? document.querySelectorAll(`[id^="btn-${q.id}-"]`) : [];
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIdx) {
          btn.classList.add('correct');
        } else if (idx === selectedIdx) {
          btn.classList.add('wrong', 'incorrect');
        }
      });

      const fb = document.getElementById(`feedback-${q.id}`);
      if (fb) {
        if (!isCorrect) {
          fb.className = 'quiz-feedback show feedback-wrong';
          fb.innerHTML = `
            <strong>✗ Chưa chính xác! (Đáp án đúng: ${String.fromCharCode(65 + q.correctIdx)})</strong>
            <div class="feedback-explanation"><em>Giải thích:</em> ${q.explanation}</div>
          `;
        } else {
          fb.className = 'quiz-feedback show feedback-correct';
          fb.innerHTML = `
            <strong>✓ Chính xác! (Đáp án đúng: ${String.fromCharCode(65 + q.correctIdx)})</strong>
            <div class="feedback-explanation"><em>Giải thích:</em> ${q.explanation}</div>
          `;
        }
      }
    });

    const totalCount = questions.length;
    const percentage = state.score ? state.score.percentage : Math.round((correctCount / totalCount) * 100);
    renderResultBanner(dokkaiId, true, correctCount, totalCount, percentage);
  }
}

window.resetPracticeProgress = function(quizId = currentActiveId) {
  const targetId = quizId || currentActiveId;
  showAppConfirm(
    'Làm lại bài trắc nghiệm?',
    'Bạn có chắc muốn làm lại bộ 50 câu trắc nghiệm này không?\nToàn bộ đáp án đã chọn sẽ được xóa để bạn làm lại từ đầu.',
    () => {
      const wrapper = document.querySelector ? document.querySelector('.quiz-wrapper') : null;
      if (wrapper && wrapper.classList) wrapper.classList.add('quiz-fade-reset');

      try {
        const raw = safeGetStorage(STORAGE_PRACTICE_KEY);
        const all = raw ? JSON.parse(raw) : {};
        delete all[targetId];
        safeSetStorage(STORAGE_PRACTICE_KEY, JSON.stringify(all));
      } catch (e) {}

      setTimeout(() => {
        renderContent(targetId);
        showToast("Đã đặt lại bài tập! Bạn có thể làm lại từ đầu.");
      }, 180);
    }
  );
};

window.resetDokkaiProgress = function(dokkaiId) {
  showAppConfirm(
    'Làm lại bài đọc hiểu?',
    'Bạn có chắc muốn làm lại bài đọc hiểu này không?\nCác đáp án đã chọn sẽ được xóa để bạn làm lại từ đầu.',
    () => {
      const wrapper = document.querySelector ? document.querySelector('.quiz-wrapper') : null;
      if (wrapper && wrapper.classList) wrapper.classList.add('quiz-fade-reset');

      try {
        const raw = safeGetStorage(STORAGE_DOKKAI_KEY);
        const all = raw ? JSON.parse(raw) : {};
        delete all[dokkaiId];
        safeSetStorage(STORAGE_DOKKAI_KEY, JSON.stringify(all));
      } catch (e) {}

      setTimeout(() => {
        renderDokkaiRoom(dokkaiId);
        showToast("Đã đặt lại bài đọc hiểu! Bạn có thể làm lại từ đầu.");
      }, 180);
    }
  );
};

// --------------------------------------------------------------------------
// 7. TÌM KIẾM NHANH CTRL + K TOÀN DIỆN TRÊN TOÀN BỘ 50 BÀI
// --------------------------------------------------------------------------
function normalizeSearch(str) {
  if (!str) return '';
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim();
}

function searchEverything(keyword) {
  const query = normalizeSearch(keyword);
  const raw = keyword.trim().toLowerCase();
  if (!query) return [];

  const results = [];

  lessonsData.forEach(l => {
    if (normalizeSearch(l.title).includes(query)) {
      results.push({ category: "Bài Học", title: l.title, sub: l.level, targetId: l.id, highlight: raw });
    }
    l.vocabulary.forEach(v => {
      const matchMean = normalizeSearch(v.meaning).includes(query);
      const matchHira = v.hiragana.toLowerCase().includes(raw);
      const matchKanji = cleanSpeechText(v.kanji).toLowerCase().includes(raw);
      if (matchMean || matchHira || matchKanji) {
        const hasKanji = hasKanjiCharacter(v.kanji);
        const displayTitle = hasKanji ? `${v.kanji.replace(/<[^>]*>?/gm, '')} (${v.hiragana})` : v.hiragana;
        results.push({ category: "Từ Vựng", title: displayTitle, sub: `${v.meaning} • ${l.title.split(':')[0]}`, targetId: l.id, highlight: raw });
      }
    });
    l.grammar.forEach(g => {
      if (normalizeSearch(g.structure).includes(query) || normalizeSearch(g.explanation).includes(query)) {
        results.push({ category: "Ngữ Pháp", title: g.structure, sub: `${g.explanation.slice(0, 45)}...`, targetId: l.id, highlight: raw });
      } else if (g.examples && Array.isArray(g.examples)) {
        for (const ex of g.examples) {
          if (ex.type === 'dialogue') {
            const foundLine = ex.lines.find(line => normalizeSearch(line.vi).includes(query) || (line.rawJp && line.rawJp.toLowerCase().includes(raw)));
            if (foundLine) {
              results.push({ category: "Ví Dụ Ngữ Pháp", title: foundLine.rawJp || foundLine.jp.replace(/<[^>]*>?/gm, ''), sub: `${foundLine.vi} • ${g.structure.split(' ')[1] || g.structure}`, targetId: l.id, highlight: raw });
              break;
            }
          } else {
            if (normalizeSearch(ex.vi).includes(query) || (ex.rawJp && ex.rawJp.toLowerCase().includes(raw))) {
              results.push({ category: "Ví Dụ Ngữ Pháp", title: ex.rawJp || ex.jp.replace(/<[^>]*>?/gm, ''), sub: `${ex.vi} • ${g.structure.split(' ')[1] || g.structure}`, targetId: l.id, highlight: raw });
              break;
            }
          }
        }
      }
    });
  });

  dokkaiData.forEach(d => {
    const matchTitle = normalizeSearch(d.title).includes(query) || normalizeSearch(d.subTitle).includes(query);
    const matchPassage = d.passage && normalizeSearch(d.passage).includes(query);
    const matchTrans = d.translation && normalizeSearch(d.translation).includes(query);
    if (matchTitle || matchPassage || matchTrans) {
      let snippet = d.subTitle;
      if (matchPassage && d.passage) {
        snippet = d.passage.replace(/<[^>]*>?/gm, '').slice(0, 50) + '...';
      } else if (matchTrans && d.translation) {
        snippet = d.translation.slice(0, 50) + '...';
      }
      results.push({ category: "Đọc Hiểu", title: d.title, sub: snippet, targetId: d.id, highlight: raw });
    }
  });

  if (typeof practiceQuizData !== 'undefined') {
    Object.keys(practiceQuizData).forEach(qId => {
      const i = qId.replace('quiz-', '');
      const qList = practiceQuizData[qId] || [];
      if ("bai tap".includes(query) || "quiz".includes(query) || "luyen tap".includes(query) || `bai ${i}`.includes(query)) {
        results.push({ category: "Luyện Tập", title: `Bài Tập Trắc Nghiệm Bài ${i}`, sub: `${qList.length} câu • Trọng tâm bài ${i}`, targetId: qId, highlight: raw });
      } else {
        for (let idx = 0; idx < qList.length; idx++) {
          const q = qList[idx];
          const matchQ = (q.question && normalizeSearch(q.question).includes(query)) || (q.explanation && normalizeSearch(q.explanation).includes(query));
          if (matchQ) {
            results.push({ category: "Câu Hỏi Trắc Nghiệm", title: `Bài ${i} - Câu ${idx + 1}`, sub: (q.question || '').slice(0, 50) + '...', targetId: qId, highlight: raw });
            break;
          }
        }
      }
    });
  }

  if (typeof radicalsData !== 'undefined') {
    radicalsData.forEach(group => {
      if (normalizeSearch(group.title).includes(query) || "bo thu".includes(query)) {
        results.push({ category: "Bộ Thủ", title: group.title, sub: `${group.items.length} bộ thủ chuẩn`, targetId: group.id, highlight: raw });
      }
      group.items.forEach(rad => {
        const matchName = normalizeSearch(rad.name).includes(query);
        const matchMean = normalizeSearch(rad.meaning).includes(query);
        const matchChar = rad.character.includes(raw);
        const matchEx = rad.examples && rad.examples.some(ex => normalizeSearch(ex.amHan).includes(query) || normalizeSearch(ex.nghia).includes(query) || ex.kanji.includes(raw));
        if (matchName || matchMean || matchChar || matchEx) {
          results.push({ category: "Bộ Thủ", title: `${rad.name} - ${rad.meaning}`, sub: `${group.title} • ${(rad.kanjiMeaning || '').slice(0, 45)}...`, targetId: group.id, highlight: raw });
        }
      });
    });
  }

  if (typeof kanjiLessonsData !== 'undefined') {
    kanjiLessonsData.forEach(kl => {
      if (normalizeSearch(kl.title).includes(query) || "chu han".includes(query) || "kanji".includes(query) || "meo nho".includes(query)) {
        results.push({
          category: "Chữ Hán & Mẹo Nhớ",
          title: kl.title,
          sub: `${kl.items.length} chữ Hán • ${kl.level}`,
          targetId: kl.id,
          highlight: raw
        });
      }
      kl.items.forEach(item => {
        const itemWord = item.word || item.kanji || '';
        const matchChar = itemWord.includes(raw) || (item.kanji && item.kanji.includes(raw));
        const matchReading = item.reading && (item.reading.toLowerCase().includes(raw) || normalizeSearch(item.reading).includes(query));
        const matchHV = normalizeSearch(item.hanViet).includes(query);
        const matchMean = normalizeSearch(item.meaning).includes(query);
        const matchMnemonic = normalizeSearch(item.mnemonic).includes(query);
        const matchOn = (item.onyomi || '').toLowerCase().includes(raw);
        const matchKun = (item.kunyomi || '').toLowerCase().includes(raw);
        if (matchChar || matchReading || matchHV || matchMean || matchMnemonic || matchOn || matchKun) {
          const displayWord = item.word || item.kanji;
          const displayReading = item.reading ? ` [${item.reading}]` : '';
          const cleanMnemonic = (item.mnemonic || '').replace(/【.*?】\s*:?/g, '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
          results.push({
            category: "Chữ Hán & Mẹo Nhớ",
            title: `${displayWord}${displayReading} (${item.hanViet}) - ${item.meaning.slice(0, 35)}`,
            sub: `💡 Mẹo nhớ: ${cleanMnemonic.slice(0, 50)}... • Bài ${kl.lesson}`,
            targetId: kl.id,
            highlight: raw
          });
        }
      });
    });
  }

  return results;
}

function initQuickSearch() {
  const input = document.getElementById('quick-search-input');
  const dropdown = document.getElementById('search-dropdown');
  const list = document.getElementById('search-results-list');
  const label = document.getElementById('search-count-label');
  if (!input || !dropdown || !list) return;

  let searchTimer = null;
  let selectedIndex = -1;

  const updateSelectedIndex = (items) => {
    items.forEach((item, idx) => {
      const isSelected = idx === selectedIndex;
      item.classList.toggle('keyboard-selected', isSelected);
      if (isSelected && item.scrollIntoView) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  };

  if (list.addEventListener) {
    list.addEventListener('click', (e) => {
      const item = e.target.closest ? e.target.closest('.search-result-item') : null;
      if (!item) return;
      const targetId = item.getAttribute('data-target');
      const highlight = decodeURIComponent(item.getAttribute('data-highlight') || '');
      handleSearchClick(targetId, highlight);
    });
  }

  if (input.addEventListener) {
    input.addEventListener('input', (e) => {
      clearTimeout(searchTimer);
      const val = e.target.value.trim();
      selectedIndex = -1;
      if (!val) {
        dropdown.classList.remove('active');
        return;
      }

      searchTimer = setTimeout(() => {
        const res = searchEverything(val);
        dropdown.classList.add('active');

        if (res.length === 0) {
          label.textContent = "Không có kết quả phù hợp";
          list.innerHTML = `<div class="search-empty">Không tìm thấy cho "<strong>${val}</strong>". Thử tìm: "tabemasu", "an", "xin phep", "bai 1"...</div>`;
          return;
        }

        label.textContent = `Tìm thấy ${res.length} kết quả:`;
        list.innerHTML = res.slice(0, 30).map((r, idx) => `
          <div class="search-result-item" data-index="${idx}" data-target="${r.targetId}" data-highlight="${encodeURIComponent(r.highlight || '')}">
            <div class="search-item-left">
              <div class="search-item-main">${r.title}</div>
              <div class="search-item-sub">${r.sub}</div>
            </div>
            <span class="search-badge">${r.category}</span>
          </div>
        `).join('');
      }, 120);
    });

    input.addEventListener('keydown', (e) => {
      const items = list.querySelectorAll ? list.querySelectorAll('.search-result-item') : [];
      if (!dropdown.classList.contains('active') || items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelectedIndex(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelectedIndex(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          items[selectedIndex].click();
        } else if (items.length > 0) {
          items[0].click();
        }
      }
    });
  }

  if (document && document.addEventListener) {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        if (input.focus) input.focus();
        if (input.select) input.select();
      }
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target && e.target.closest && !e.target.closest('.header-search-container')) {
        dropdown.classList.remove('active');
      }
    });
  }
}

window.handleSearchClick = function(targetId, highlightText = '') {
  const dropdown = document.getElementById('search-dropdown');
  const input = document.getElementById('quick-search-input');
  if (dropdown) dropdown.classList.remove('active');
  if (input) {
    input.value = '';
    if (input.blur) input.blur();
  }

  switchModule(targetId);

  if (highlightText && highlightText.trim().length > 1) {
    const rawTarget = highlightText.trim().toLowerCase();
    setTimeout(() => {
      const mainContainer = document.getElementById('main-content');
      if (!mainContainer || !mainContainer.querySelectorAll) return;
      const candidates = mainContainer.querySelectorAll('tr, .grammar-item-card, .radical-card, .kanji-study-card, .quiz-card, .example-card, .dokkai-passage-sticky-card');
      let foundEl = null;
      for (const el of candidates) {
        if ((el.textContent || '').toLowerCase().includes(rawTarget)) {
          foundEl = el;
          break;
        }
      }
      if (foundEl && foundEl.scrollIntoView) {
        foundEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
        foundEl.classList.add('search-highlight-target');
        setTimeout(() => {
          foundEl.classList.remove('search-highlight-target');
        }, 3200);
      }
    }, 300);
  }
};

// Đồng bộ thanh điều hướng dưới cùng trên điện thoại (Mobile Bottom Bar)
function syncMobileBottomNav(activeId) {
  const id = String(activeId || currentActiveId || 'bai-1');
  const num = extractLessonNumber(id) || lastLessonNumber || 1;

  const lessonLabel = document.getElementById('mnav-label-lesson');
  const kanjiLabel = document.getElementById('mnav-label-kanji');
  const quizLabel = document.getElementById('mnav-label-quiz');
  const dokkaiLabel = document.getElementById('mnav-label-dokkai');
  if (lessonLabel) lessonLabel.textContent = `Bài ${num}`;
  if (kanjiLabel) kanjiLabel.textContent = `Kanji ${num}`;
  if (quizLabel) quizLabel.textContent = `Đề ${num}`;
  if (dokkaiLabel) dokkaiLabel.textContent = `Đọc ${num}`;

  let activeNav = 'lesson';
  if (id.startsWith('kanji-')) activeNav = 'kanji';
  else if (id.startsWith('quiz-')) activeNav = 'quiz';
  else if (id.startsWith('dokkai-')) activeNav = 'dokkai';
  else if (id.startsWith('radicals-')) activeNav = 'radicals';

  if (document && document.querySelectorAll) {
    document.querySelectorAll('.mobile-nav-item').forEach(btn => {
      const navType = btn.getAttribute('data-nav');
      if (navType !== 'menu') {
        btn.classList.toggle('active', navType === activeNav);
      }
    });
  }
}

window.handleMobileBottomNav = function(targetType) {
  const num = lastLessonNumber || 1;
  if (targetType === 'menu') {
    const menuBtn = document.getElementById('menu-toggle-btn');
    if (menuBtn && menuBtn.click) menuBtn.click();
    return;
  }
  closeMobileSidebar();
  if (targetType === 'lesson') {
    switchModule(`bai-${num}`);
  } else if (targetType === 'kanji') {
    switchModule(`kanji-${num}`);
  } else if (targetType === 'quiz') {
    switchModule(`quiz-${num}`);
  } else if (targetType === 'dokkai') {
    switchModule(`dokkai-${num}`);
  } else if (targetType === 'radicals') {
    switchModule(lastRadicalId || 'radicals-1');
  }
};

window.switchModule = function(targetId, updateHash = true) {
  if (!targetId) return;

  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }

  if (updateHash && typeof window !== 'undefined' && window.location && window.location.hash.replace('#', '') !== targetId) {
    window.location.hash = targetId;
  }
  safeSetStorage(STORAGE_LAST_ACTIVE_KEY, targetId);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    closeMobileSidebar();
  }

  let targetBtn = null;
  if (document && document.querySelectorAll) {
    document.querySelectorAll('.menu-item-btn').forEach(b => {
      const isTarget = (b.getAttribute('data-id') === targetId);
      b.classList.toggle('active', isTarget);
      if (isTarget) targetBtn = b;
    });
  }

  if (targetBtn && targetBtn.closest) {
    const parentGroup = targetBtn.closest('.accordion-group');
    if (parentGroup && !parentGroup.classList.contains('open')) {
      parentGroup.classList.add('open');
    }
    setTimeout(() => {
      if (targetBtn.scrollIntoView) {
        targetBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }, 50);
  }

  renderContent(targetId);
};

if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
  window.addEventListener('hashchange', () => {
    const newHash = (window.location && window.location.hash ? window.location.hash : '').replace('#', '');
    if (newHash && newHash !== currentActiveId) {
      switchModule(newHash, false);
    }
  });
}

// --------------------------------------------------------------------------
// 8. KHỞI CHẠY GIAO DIỆN & SỰ KIỆN
// --------------------------------------------------------------------------
function applyTheme(themeName) {
  if (document.documentElement && document.documentElement.classList) {
    document.documentElement.classList.add('theme-switching');
    document.documentElement.setAttribute('data-theme', themeName);
  }
  safeSetStorage('minna_theme', themeName);

  safeRAF(() => {
    safeRAF(() => {
      if (document.documentElement && document.documentElement.classList) {
        document.documentElement.classList.remove('theme-switching');
      }
    });
  });
}

function initThemeToggle() {
  const saved = safeGetStorage('minna_theme', 'dark') || 'dark';
  if (document.documentElement && document.documentElement.setAttribute) {
    document.documentElement.setAttribute('data-theme', saved);
  }

  const btn = document.getElementById('theme-toggle-btn');
  if (btn && btn.addEventListener) {
    btn.addEventListener('click', (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const nxt = cur === 'dark' ? 'light' : 'dark';
      applyTheme(nxt);
      showToast(nxt === 'dark' ? '🌙 Đã đổi sang giao diện Tối' : '☀️ Đã đổi sang giao diện Sáng');
    });
  }
}

function initResetProgress() {
  const btn = document.getElementById('btn-reset-progress');
  if (!btn || !btn.addEventListener) return;

  btn.addEventListener('click', () => {
    showAppConfirm(
      'Đặt lại toàn bộ tiến độ?',
      'Bạn có chắc chắn muốn xóa toàn bộ tiến độ học tập, bài tập và bài đọc hiểu đã lưu không?\nThao tác này không thể hoàn tác.',
      () => {
        safeRemoveStorage(STORAGE_COMPLETED_KEY);
        safeRemoveStorage(STORAGE_PRACTICE_KEY);
        safeRemoveStorage(STORAGE_DOKKAI_KEY);

        try {
          if (typeof localStorage !== 'undefined') {
            Object.keys(localStorage).forEach(key => {
              if ((key.startsWith('minna_') || key.startsWith('jlpt_') || key.startsWith('dokkai_')) && key !== 'minna_theme') {
                safeRemoveStorage(key);
              }
            });
          }
        } catch (e) {}

        renderSidebar();
        updateHeaderProgress();
        renderContent(currentActiveId);
        showToast("Đã đặt lại toàn bộ tiến độ thành công!");
      }
    );
  });
}

function updateMenuButtonState() {
  const btn = document.getElementById('menu-toggle-btn');
  const sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  if (isMobile) {
    const isMobileOpen = sidebar.classList.contains('mobile-open');
    btn.classList.toggle('is-mobile-open', isMobileOpen);
    btn.classList.remove('is-collapsed');
    btn.setAttribute('aria-expanded', isMobileOpen ? 'true' : 'false');
    btn.setAttribute('title', isMobileOpen ? 'Đóng menu bài học' : 'Mở menu bài học');
  } else {
    const isCollapsed = sidebar.classList.contains('collapsed');
    btn.classList.toggle('is-collapsed', isCollapsed);
    btn.classList.remove('is-mobile-open');
    btn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
    btn.setAttribute('title', isCollapsed ? 'Mở menu bài học (Ctrl + B)' : 'Thu gọn menu bài học (Ctrl + B)');
  }
}

function initMenuToggle() {
  const btn = document.getElementById('menu-toggle-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!btn || !sidebar) return;

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  if (!isMobile) {
    const savedCollapsed = safeGetStorage('minna_sidebar_collapsed');
    if (savedCollapsed === 'true') {
      sidebar.classList.add('collapsed');
    } else {
      sidebar.classList.remove('collapsed');
    }
  }
  updateMenuButtonState();

  const toggleMenu = () => {
    const currentIsMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (currentIsMobile) {
      const isOpen = sidebar.classList.toggle('mobile-open');
      if (overlay) overlay.classList.toggle('active', isOpen);
      if (document.body && document.body.classList) {
        document.body.classList.toggle('sidebar-open-lock', isOpen);
      }
    } else {
      const isCollapsed = sidebar.classList.toggle('collapsed');
      safeSetStorage('minna_sidebar_collapsed', isCollapsed ? 'true' : 'false');
    }
    updateMenuButtonState();
  };

  if (btn.addEventListener) {
    btn.addEventListener('click', toggleMenu);
  }

  const closeSidebarBtn = document.getElementById('close-sidebar-btn');
  if (closeSidebarBtn && closeSidebarBtn.addEventListener) {
    closeSidebarBtn.addEventListener('click', closeMobileSidebar);
    closeSidebarBtn.addEventListener('touchstart', (e) => {
      if (e && e.preventDefault) e.preventDefault();
      closeMobileSidebar();
    }, { passive: false });
  }

  if (overlay && overlay.addEventListener) {
    overlay.addEventListener('click', closeMobileSidebar);
    overlay.addEventListener('touchstart', (e) => {
      if (e && e.preventDefault) e.preventDefault();
      closeMobileSidebar();
    }, { passive: false });
  }

  if (document && document.addEventListener) {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
        e.preventDefault();
        toggleMenu();
      } else if (e.key === 'Escape') {
        if (sidebar.classList.contains('mobile-open')) {
          closeMobileSidebar();
        }
      }
    });
  }

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('resize', () => {
      updateMenuButtonState();
      if (window.innerWidth > 768) {
        if (overlay) overlay.classList.remove('active');
        sidebar.classList.remove('mobile-open');
        if (document.body && document.body.classList) {
          document.body.classList.remove('sidebar-open-lock');
        }
      }
    });
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (overlay) overlay.classList.remove('active');
  if (document.body && document.body.classList) {
    document.body.classList.remove('sidebar-open-lock');
  }
  updateMenuButtonState();
}

// --------------------------------------------------------------------------
// 9. TRANG BÌA GIỚI THIỆU PHONG CÁCH NHẬT BẢN (COVER SLIDE SCREEN)
// --------------------------------------------------------------------------
let selectedCoverTarget = null;

function initCoverPage() {
  const cover = document.getElementById('cover-page-slide');
  const btnEnter = document.getElementById('btn-enter-app');
  const brandHomeBtn = document.getElementById('brand-home-btn');
  const coverThemeBtn = document.getElementById('cover-theme-toggle');

  if (!cover) return;

  cover.classList.remove('hide-cover');

  if (document && document.querySelectorAll) {
    document.querySelectorAll('.cover-feature-card').forEach(card => {
      if (card.addEventListener) {
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
          }
        });
      }
    });
  }

  if (btnEnter && btnEnter.addEventListener) {
    const handleEnter = (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      cover.classList.add('hide-cover');

      const targetHash = selectedCoverTarget || (window.location && window.location.hash) || '#bai-1';
      const cleanId = targetHash.replace('#', '');

      if (window.location && window.location.hash === targetHash) {
        if (typeof switchModule === 'function') {
          switchModule(cleanId, false);
        }
      } else if (window.location) {
        window.location.hash = targetHash;
      }
    };
    btnEnter.addEventListener('click', handleEnter);
  }

  if (brandHomeBtn && brandHomeBtn.addEventListener) {
    brandHomeBtn.addEventListener('click', () => {
      cover.classList.remove('hide-cover');
      if (cover.scrollTo) cover.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (coverThemeBtn && coverThemeBtn.addEventListener) {
    coverThemeBtn.addEventListener('click', () => {
      const mainThemeBtn = document.getElementById('theme-toggle-btn');
      if (mainThemeBtn && mainThemeBtn.click) {
        mainThemeBtn.click();
      } else {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        const nxt = cur === 'dark' ? 'light' : 'dark';
        applyTheme(nxt);
      }
    });
  }
}

window.selectCoverTarget = function(targetHash, el, label) {
  selectedCoverTarget = targetHash;

  if (document && document.querySelectorAll) {
    document.querySelectorAll('.cover-feature-card, .target-chip').forEach(item => {
      item.classList.remove('active-target', 'active');
    });
  }

  if (el && el.classList) {
    el.classList.add('active-target', 'active');
  }

  if (targetHash && document && document.querySelectorAll) {
    document.querySelectorAll(`.cover-feature-card[data-target="${targetHash}"], .target-chip[data-target="${targetHash}"]`).forEach(item => {
      item.classList.add('active-target', 'active');
    });
  }

  let targetTitle = label;
  if (!targetTitle && el) {
    const titleEl = el.querySelector ? el.querySelector('.feature-title') : null;
    targetTitle = titleEl ? titleEl.textContent.trim() : (el.textContent || '').trim();
  }
  targetTitle = targetTitle || 'Mục tiêu đã chọn';

  const hintEl = document.querySelector ? document.querySelector('.cover-sub-hint') : null;
  if (hintEl) {
    hintEl.innerHTML = `Đã chọn: <strong style="color:var(--accent-primary);">${targetTitle}</strong> • Bấm <em>"Bắt Đầu Học Ngay"</em> để vào học!`;
  }

  const btnEnter = document.getElementById('btn-enter-app');
  if (btnEnter && btnEnter.classList) {
    btnEnter.classList.remove('pulse-highlight');
    void btnEnter.offsetWidth;
    btnEnter.classList.add('pulse-highlight');
  }

  if (typeof showToast === 'function') {
    showToast(`Đã chọn: ${targetTitle}. Bấm "Bắt Đầu Học Ngay" để bắt đầu!`);
  }
};

window.enterAppAt = function(targetHash, el, label) {
  window.selectCoverTarget(targetHash, el, label);
};

window.speakTokyoGreeting = function(btn, ev) {
  if (ev && ev.stopPropagation) ev.stopPropagation();
  speakJapanese("こんにちは！日本語の世界へようこそ。", btn, ev);
};

window.speakCoverQuote = function(quoteText, btn, ev) {
  if (ev && ev.stopPropagation) ev.stopPropagation();
  speakJapanese(quoteText, btn, ev);
};

function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  const mainContent = document.getElementById('main-content');
  if (!btn) return;

  const handleScroll = (top) => {
    if (top > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  if (mainContent && mainContent.addEventListener) {
    mainContent.addEventListener('scroll', () => {
      handleScroll(mainContent.scrollTop);
    }, { passive: true });
  }

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('scroll', () => {
      handleScroll(window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0);
    }, { passive: true });
  }

  const scrollToTop = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (mainContent && mainContent.scrollTo) mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (btn.addEventListener) {
    btn.addEventListener('click', scrollToTop);
    btn.addEventListener('touchend', scrollToTop, { passive: false });
  }
}

function initVoiceSettingsModal() {
  const triggerBtn = document.getElementById('voice-settings-btn');
  const modal = document.getElementById('voice-settings-modal');
  const closeBtn = document.getElementById('close-voice-modal-btn');
  const speedSlider = document.getElementById('voice-speed-slider');
  const speedVal = document.getElementById('voice-speed-val');
  const pitchSlider = document.getElementById('voice-pitch-slider');
  const pitchVal = document.getElementById('voice-pitch-val');
  const saveBtn = document.getElementById('save-voice-modal-btn');

  if (!modal) return;

  const openModal = () => {
    const cfg = getSpeechGenConfig();
    if (speedSlider) {
      speedSlider.value = cfg.speed || 0.92;
      if (speedVal) speedVal.textContent = (cfg.speed || 0.92) + 'x';
    }
    if (pitchSlider) {
      pitchSlider.value = cfg.pitch || 1.04;
      if (pitchVal) pitchVal.textContent = (cfg.pitch || 1.04) + 'x';
    }

    modal.classList.add('show-modal');
    modal.setAttribute('aria-hidden', 'false');
    if (document.body && document.body.style) document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('show-modal');
    modal.setAttribute('aria-hidden', 'true');
    if (document.body && document.body.style) document.body.style.overflow = '';
  };

  if (triggerBtn && triggerBtn.addEventListener) triggerBtn.addEventListener('click', openModal);
  if (closeBtn && closeBtn.addEventListener) closeBtn.addEventListener('click', closeModal);

  if (modal.addEventListener) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (document && document.addEventListener) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show-modal')) {
        closeModal();
      }
    });
  }

  if (speedSlider && speedVal && speedSlider.addEventListener) {
    speedSlider.addEventListener('input', () => {
      speedVal.textContent = speedSlider.value + 'x';
    });
  }

  if (pitchSlider && pitchVal && pitchSlider.addEventListener) {
    pitchSlider.addEventListener('input', () => {
      pitchVal.textContent = pitchSlider.value + 'x';
    });
  }

  if (saveBtn && saveBtn.addEventListener) {
    saveBtn.addEventListener('click', () => {
      const newSpeed = speedSlider ? parseFloat(speedSlider.value) : 0.92;
      const newPitch = pitchSlider ? parseFloat(pitchSlider.value) : 1.04;

      setSpeechGenConfig({
        speed: newSpeed,
        pitch: newPitch
      });

      closeModal();
      showToast('Đã lưu cài đặt giọng đọc thành công!');
    });
  }
}

if (document && document.addEventListener) {
  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initFuriganaToggle();
    initCoverPage();
    initMenuToggle();
    initQuickSearch();
    initResetProgress();
    initBackToTop();
    initVoiceSettingsModal();

    renderSidebar();
    updateHeaderProgress();

    const hashId = (typeof window !== 'undefined' && window.location && window.location.hash ? window.location.hash : '').replace('#', '');
    const savedLastActive = safeGetStorage(STORAGE_LAST_ACTIVE_KEY);
    const initialId = hashId || savedLastActive || 'bai-1';

    switchModule(initialId, false);
  });
}

// --------------------------------------------------------------------------
// 10. STUDIO LUYỆN TẬP NHANH TRONG BÀI: FLASHCARD 3D & PHẢN XẠ CHỮ HÁN
// --------------------------------------------------------------------------
function renderLessonPractice(vocabList, containerSelector = '#lesson-practice-mount') {
  if (!Array.isArray(vocabList) || vocabList.length === 0) return;
  if (!document || !document.querySelector) return;

  const container = document.querySelector(containerSelector);
  if (!container || typeof container.appendChild !== 'function') return;

  const oldHub = document.getElementById('lesson-practice-hub');
  if (oldHub && oldHub.remove) oldHub.remove();

  const cleanVocab = vocabList.map(item => ({
    kanji: cleanSpeechText(item.kanji || item.word || ''),
    hiragana: cleanSpeechText(item.hiragana || item.kana || item.reading || ''),
    meaning: (item.meaning || item.vi || '').trim(),
    type: item.type || ''
  })).filter(v => v.hiragana && v.meaning);

  if (cleanVocab.length === 0) return;

  const kanjiRegex = /[\u4e00-\u9faf]/;
  const kanjiList = cleanVocab.filter(v => kanjiRegex.test(v.kanji));

  const hub = document.createElement('section');
  hub.id = 'lesson-practice-hub';
  hub.className = 'practice-hub';

  hub.innerHTML = `
    <div class="practice-box">
      <div class="practice-box-header">
        <div class="practice-box-title">
          <span class="practice-icon-badge accent-sky">🗂️</span>
          <div>
            <h4>Flashcard Ghi Nhớ Từ Mới</h4>
            <span class="practice-sub">Chạm vào thẻ để lật xem nghĩa & chữ Hán</span>
          </div>
        </div>
        <span class="practice-counter-pill" id="fc-counter">1 / ${cleanVocab.length}</span>
      </div>
      <div class="fc-card" id="fc-card" role="button" tabindex="0" title="Chạm để lật thẻ">
        <div class="fc-face fc-front">
          <span class="fc-mode-tag">Từ vựng Tiếng Nhật</span>
          <div class="fc-hiragana" id="fc-kana"></div>
          <div class="fc-kanji-sub" id="fc-kanji-front"></div>
          <div class="fc-hint">👆 Chạm để lật xem nghĩa Tiếng Việt</div>
        </div>
        <div class="fc-face fc-back">
          <span class="fc-mode-tag accent-emerald">Ý nghĩa Tiếng Việt</span>
          <div class="fc-meaning" id="fc-vi"></div>
          <div class="fc-kanji-back" id="fc-kanji-back"></div>
          <div class="fc-hint">👆 Chạm để quay lại mặt trước</div>
        </div>
      </div>
      <div class="fc-controls">
        <button type="button" class="btn-tool" id="fc-prev" title="Từ trước">← Trước</button>
        <button type="button" class="btn-tool btn-tool-primary" id="fc-speak" title="Nghe phát âm">🔊 Nghe</button>
        <button type="button" class="btn-tool" id="fc-shuffle" title="Trộn ngẫu nhiên">🔀 Trộn</button>
        <button type="button" class="btn-tool" id="fc-next" title="Từ tiếp theo">Tiếp →</button>
      </div>
    </div>

    <div class="practice-box">
      <div class="practice-box-header">
        <div class="practice-box-title">
          <span class="practice-icon-badge accent-sakura">⚡</span>
          <div>
            <h4>Phản Xạ Chữ Hán & Từ Vựng</h4>
            <span class="practice-sub">Kiểm tra nhanh từ vựng ngay trong bài</span>
          </div>
        </div>
        <span class="practice-counter-pill accent-emerald" id="kq-score">Đúng: 0/${kanjiList.length || cleanVocab.length}</span>
      </div>
      <div class="kq-body" id="kq-body"></div>
      <div class="kq-controls">
        <button type="button" class="btn-tool" id="kq-mode-btn">Chế độ: Kanji ➔ Hiragana</button>
        <button type="button" class="btn-tool" id="kq-reset-btn">↻ Đổi bộ câu hỏi</button>
      </div>
    </div>
  `;

  container.appendChild(hub);

  let fcDeck = [...cleanVocab];
  let fcIndex = 0;
  const fcCard = hub.querySelector('#fc-card');
  const fcKana = hub.querySelector('#fc-kana');
  const fcKanjiFront = hub.querySelector('#fc-kanji-front');
  const fcKanjiBack = hub.querySelector('#fc-kanji-back');
  const fcVi = hub.querySelector('#fc-vi');
  const fcCounter = hub.querySelector('#fc-counter');

  function updateFlashcard() {
    const item = fcDeck[fcIndex];
    if (!item) return;
    fcCard.classList.remove('flipped');
    fcKana.textContent = item.hiragana;
    const hasK = item.kanji && item.kanji !== item.hiragana;
    fcKanjiFront.textContent = hasK ? `Chữ Hán: ${item.kanji}` : 'Từ thuần Hiragana / Katakana';
    fcVi.textContent = item.meaning;
    fcKanjiBack.textContent = hasK ? `${item.kanji} (${item.hiragana})` : item.hiragana;
    fcCounter.textContent = `${fcIndex + 1} / ${fcDeck.length}`;
  }

  if (fcCard) {
    fcCard.onclick = () => fcCard.classList.toggle('flipped');
  }
  const prevBtn = hub.querySelector('#fc-prev');
  const nextBtn = hub.querySelector('#fc-next');
  const shufBtn = hub.querySelector('#fc-shuffle');
  const spkBtn = hub.querySelector('#fc-speak');

  if (prevBtn) {
    prevBtn.onclick = () => {
      fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length;
      updateFlashcard();
    };
  }
  if (nextBtn) {
    nextBtn.onclick = () => {
      fcIndex = (fcIndex + 1) % fcDeck.length;
      updateFlashcard();
    };
  }
  if (shufBtn) {
    shufBtn.onclick = () => {
      fcDeck.sort(() => Math.random() - 0.5);
      fcIndex = 0;
      updateFlashcard();
      showToast("Đã trộn ngẫu nhiên bộ thẻ Flashcard!");
    };
  }
  if (spkBtn) {
    spkBtn.onclick = (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      const item = fcDeck[fcIndex];
      if (item) speakJapanese(item.hiragana, spkBtn, e);
    };
  }
  updateFlashcard();

  const kqBody = hub.querySelector('#kq-body');
  const kqScoreEl = hub.querySelector('#kq-score');
  const kqModeBtn = hub.querySelector('#kq-mode-btn');
  const kqResetBtn = hub.querySelector('#kq-reset-btn');
  let quizMode = 'hiragana';
  let kqDeck = [];
  let kqIndex = 0;
  let kqCorrect = 0;
  const sourcePool = kanjiList.length >= 4 ? kanjiList : cleanVocab;

  function startKanjiQuiz() {
    if (sourcePool.length < 2) {
      kqBody.innerHTML = `<p class="kq-empty">Bài này đang cập nhật câu hỏi phản xạ nhanh.</p>`;
      return;
    }
    kqDeck = [...sourcePool].sort(() => Math.random() - 0.5).slice(0, 10);
    kqIndex = 0;
    kqCorrect = 0;
    renderKanjiQuestion();
  }

  function renderKanjiQuestion() {
    kqScoreEl.textContent = `Đúng: ${kqCorrect}/${kqDeck.length}`;
    if (kqIndex >= kqDeck.length) {
      kqBody.innerHTML = `
        <div class="kq-finish-box">
          <div class="kq-finish-title">🎉 Hoàn thành lượt luyện phản xạ!</div>
          <div class="kq-finish-sub">Kết quả: <strong>${kqCorrect} / ${kqDeck.length}</strong> câu chính xác</div>
        </div>`;
      return;
    }

    const current = kqDeck[kqIndex];
    const answerKey = quizMode === 'hiragana' ? 'hiragana' : 'meaning';
    const promptText = (current.kanji && current.kanji !== current.hiragana) ? current.kanji : current.hiragana;
    const wrongPool = cleanVocab
      .filter(v => v[answerKey] !== current[answerKey])
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [current, ...wrongPool].sort(() => Math.random() - 0.5);

    kqBody.innerHTML = `
      <div class="kq-question-wrap">
        <span class="kq-step-tag">Câu ${kqIndex + 1}/${kqDeck.length}</span>
        <div class="kq-question">${promptText}</div>
      </div>
      <div class="kq-options">
        ${options.map(opt => `
          <button type="button" class="kq-opt" data-ans="${opt[answerKey].replace(/"/g, '&quot;')}">${opt[answerKey]}</button>
        `).join('')}
      </div>
    `;

    const optBtns = kqBody.querySelectorAll('.kq-opt');
    optBtns.forEach(btn => {
      btn.onclick = () => {
        optBtns.forEach(b => b.disabled = true);
        if (btn.dataset.ans === current[answerKey]) {
          btn.classList.add('correct');
          kqCorrect++;
        } else {
          btn.classList.add('wrong');
          optBtns.forEach(b => {
            if (b.dataset.ans === current[answerKey]) b.classList.add('correct');
          });
        }
        kqScoreEl.textContent = `Đúng: ${kqCorrect}/${kqDeck.length}`;
        setTimeout(() => {
          kqIndex++;
          renderKanjiQuestion();
        }, 750);
      };
    });
  }

  if (kqModeBtn) {
    kqModeBtn.onclick = () => {
      quizMode = quizMode === 'hiragana' ? 'meaning' : 'hiragana';
      kqModeBtn.textContent = quizMode === 'hiragana'
        ? 'Chế độ: Kanji ➔ Hiragana'
        : 'Chế độ: Kanji ➔ Nghĩa Việt';
      startKanjiQuiz();
    };
  }
  if (kqResetBtn) {
    kqResetBtn.onclick = startKanjiQuiz;
  }

  startKanjiQuiz();
}
window.renderLessonPractice = renderLessonPractice;
