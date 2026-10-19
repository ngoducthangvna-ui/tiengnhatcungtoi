/**
 * ==========================================================================
 * TỰ HỌC TIẾNG NHẬT - MINNA NO NIHONGO (BÀI 1 ĐẾN BÀI 15)
 * File Logic Chính: app.js (Vanilla JavaScript thuần, Data-Driven)
 * Dữ liệu nạp từ các file module trong thư mục data/:
 *  - data/lessons.js (15 Bài học Minna no Nihongo đầy đủ chuẩn SGK)
 *  - data/dokkai.js (15 Bài đọc hiểu & 75 câu hỏi)
 *  - data/quiz-master.js (15 Bài tập trắc nghiệm 50 câu thuần ngữ pháp = 750 câu)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. CẤU HÌNH & KHỞI TẠO TIẾN ĐỘ
// --------------------------------------------------------------------------
const STORAGE_COMPLETED_KEY = 'minna_completed_modules';
const STORAGE_PRACTICE_KEY = 'minna_practice_answers';
const STORAGE_DOKKAI_KEY = 'minna_dokkai_answers_v1';
const STORAGE_ENTERED_KEY = 'minna_has_entered';
const STORAGE_LAST_ACTIVE_KEY = 'minna_last_active_id';
const STORAGE_FURIGANA_KEY = 'minna_show_furigana';

function initFuriganaToggle() {
  const btn = document.getElementById('btn-toggle-furigana');
  const saved = localStorage.getItem(STORAGE_FURIGANA_KEY);
  const showFurigana = (saved !== 'false'); // Mặc định bật

  document.body.classList.toggle('hide-furigana', !showFurigana);

  if (btn) {
    btn.addEventListener('click', (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      const isCurrentlyHidden = document.body.classList.contains('hide-furigana');
      const willHide = !isCurrentlyHidden;
      document.body.classList.toggle('hide-furigana', willHide);
      localStorage.setItem(STORAGE_FURIGANA_KEY, willHide ? 'false' : 'true');
      showToast(willHide ? "Đã ẩn Furigana (Rê chuột lên Kanji để xem)" : "Đã bật hiển thị Furigana");
    });
  }

  // Phím tắt thông minh: 'F' để Bật/Ẩn Furigana (khi không trong ô input)
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      if (btn) btn.click();
    }
  });
}

const safeRAF = (typeof window !== 'undefined' && window.requestAnimationFrame)
  ? window.requestAnimationFrame.bind(window)
  : (typeof requestAnimationFrame === 'function' ? requestAnimationFrame : (cb => setTimeout(cb, 16)));

let currentActiveId = 'bai-1';

function getCompletedModules() {
  try {
    const raw = localStorage.getItem(STORAGE_COMPLETED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function isModuleCompleted(id) {
  return getCompletedModules().includes(id);
}

window.toggleLessonComplete = function(id) {
  let list = getCompletedModules();
  const exists = list.includes(id);

  if (exists) {
    list = list.filter(item => item !== id);
    showToast("Đã hủy đánh dấu hoàn thành");
  } else {
    list.push(id);
    showToast("Đã ghi nhận hoàn thành bài học!");
  }

  localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(list));

  // Cập nhật trực tiếp thẻ trạng thái trong sidebar thay vì re-render lại toàn bộ cây DOM
  const sidebarBtn = document.querySelector(`.menu-item-btn[data-id="${id}"]`);
  if (sidebarBtn) {
    const tag = sidebarBtn.querySelector('.item-tag');
    if (tag) {
      const isNow = !exists;
      if (isNow) {
        tag.className = 'item-tag completed';
        tag.textContent = 'Đã xong';
      } else {
        const isCurrent = (id === currentActiveId);
        tag.className = isCurrent ? 'item-tag current' : 'item-tag';
        tag.textContent = isCurrent ? 'Đang học' : 'Minna N5';
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
    completeBtn.innerHTML = isNow ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành bài này';
    setTimeout(() => {
      completeBtn.classList.remove('btn-pulse');
    }, 450);
  }
};

function updateHeaderProgress() {
  const completed = getCompletedModules();
  const total = lessonsData.length + Object.keys(practiceQuizData).length + dokkaiData.length; 
  const count = completed.length;
  const percent = Math.min(100, Math.round((count / total) * 100));

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

// Bộ nhớ đệm âm thanh (Audio URL Cache) để tránh gọi lặp lại API tốn tài nguyên
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

  // Đơn từ rất ngắn (từ vựng đơn lẻ <= 6 ký tự không phải câu ghép hay câu hỏi): giữ nguyên phát âm chuẩn từ vựng
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

  // 4. Ngắt nghỉ sau các liên từ nối mệnh đề phụ (Subordinate clause conjunctions)
  // 4.1. Điều kiện: 〜たら / 〜だら
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たら|だら)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

  // 4.2. Điều kiện: 〜なら (loại trừ さようなら, さよなら)
  str = str.replace(/(?!さようなら|さよなら)([ぁ-んァ-ヶ一-龥]{2,})(なら)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

  // 4.3. Điều kiện thể 〜ば
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+)(えば|けば|せば|てば|ねば|べば|めば|れば|いれば|ければ)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

  // 4.4. Mốc thời gian / hoàn cảnh: 〜ときは / 〜時は / 〜場合は (ưu tiên chuỗi dài hơn trước)
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ときは|ときに|とき|場合は|場合))(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]{3,})/g, '$1、');

  // 4.5. Nguyên nhân: 〜から (sau vị ngữ thể ngắn hoặc です/ます), loại trừ からです / からだ
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ます|です|ました|でした|だ|た|かった|ない|たい|る|う|く|い))から(?!(?:です|だ|でした|だろう|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1から、');

  // 4.6. Nguyên nhân: 〜ので (loại trừ のです / のですか / のだ)
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ので(?!(?:す|すか|だ|である|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1ので、');

  // 4.7. Trái ngược / nhượng bộ: 〜のに (mặc dù)
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})のに(?!(?:に|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1のに、');

  // 4.8. Trái ngược / nhượng bộ: 〜ても / 〜でも (loại trừ đại từ phiếm chỉ: いつでも, どこでも, だれでも, なんでも...)
  str = str.replace(/(?<![ぁ-んァ-ヶ一-龥])(?!いつでも|どこでも|だれでも|誰でも|何でも|なんでも|どちらでも|どれでも|いくらでも|そうでも)([ぁ-んァ-ヶ一-龥]{2,})(ても|でも)(?!(?:も|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{3,})(ても|でも)(?!(?:も|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, (match, p1, p2) => {
    if (/^(?:いつでも|どこでも|だれでも|誰でも|何でも|なんでも|どちらでも|どれでも|いくらでも|そうでも)$/.test(p1 + p2)) {
      return match;
    }
    return p1 + p2 + '、';
  });

  // 4.9. Nhượng bộ ngắn: 〜けど / 〜けれど / 〜けれども
  str = str.replace(/(けど|けれど|けれども)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1、');

  // 4.10. Liên kết nhượng bộ lịch sự: 〜ですが / 〜ますが / 〜ましたが
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ですが|ますが|でしたが|ましたが|思いますが))(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1、');

  // 4.11. Hành động đồng thời: 〜ながら
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ながら(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1ながら、');

  // 4.12. Hành động tuần tự: 〜てから / 〜でから
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(てから|でから)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

  // 4.13. Liệt kê hành động: 〜たり、〜たり
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たり|だり)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥]+(?:たり|だり))/g, '$1$2、');

  // 5. Ngắt sau cấu trúc chủ đề phức hợp (compound topic markers)
  str = str.replace(/(については|というのは|にとっては|に対しては|においては)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]{3,})/g, '$1、');

  // 6. Ngắt sau dấu trích dẫn「...」với trợ từ trích dẫn と
  str = str.replace(/([」』])と(?!(?:[、。！？』」）\\)]|$))(?=(?:言い|いい|聞き|きき|思い|おもい|答え|こたえ|書い|かい|話|叫び))/g, '$1と、');

  // 7. Dọn dẹp dấu trùng lặp và khoảng trắng dư
  str = str.replace(/、+/g, '、')
           .replace(/。+/g, '。')
           .replace(/、([。！？])/g, '$1')
           .replace(/([。！？])、/g, '$1')
           .replace(/\s+/g, ' ')
           .trim();

  // 8. Thêm dấu câu ngắt câu tự nhiên ở cuối nếu là câu hoàn chỉnh
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
    const token = localStorage.getItem('speechgen_token') || (typeof window !== 'undefined' && window.SPEECHGEN_CONFIG && window.SPEECHGEN_CONFIG.token) || '';
    const email = localStorage.getItem('speechgen_email') || (typeof window !== 'undefined' && window.SPEECHGEN_CONFIG && window.SPEECHGEN_CONFIG.email) || '';
    const speed = parseFloat(localStorage.getItem('speechgen_speed') || '0.92');
    const pitch = parseFloat(localStorage.getItem('speechgen_pitch') || '1.04');
    return { token, email, speed, pitch, voice: SPEECHGEN_VOICE };
  } catch (e) {
    return { token: '', email: '', speed: 0.92, pitch: 1.04, voice: SPEECHGEN_VOICE };
  }
}

function setSpeechGenConfig(cfg) {
  try {
    if (cfg.token !== undefined) localStorage.setItem('speechgen_token', cfg.token.trim());
    if (cfg.email !== undefined) localStorage.setItem('speechgen_email', cfg.email.trim());
    if (cfg.speed !== undefined) localStorage.setItem('speechgen_speed', String(cfg.speed));
    if (cfg.pitch !== undefined) localStorage.setItem('speechgen_pitch', String(cfg.pitch));
  } catch (e) {}
}
window.setSpeechGenConfig = setSpeechGenConfig;
window.getSpeechGenConfig = getSpeechGenConfig;

function stopAllSpeechAudio() {
  document.querySelectorAll('.speak-btn.is-speaking, .speak-btn-mini.is-speaking, .btn-test-voice.is-speaking').forEach(b => {
    b.classList.remove('is-speaking');
  });
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

// Tìm giọng nói nữ tự nhiên tiếng Nhật gần nhất với Leda JP trong trình duyệt
function findLedaJpVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Khớp trực tiếp tên Leda hoặc Chirp3
  let match = voices.find(v => /leda/i.test(v.name) || /leda/i.test(v.voiceURI));
  if (match) return match;

  match = voices.find(v => /chirp/i.test(v.name) || /chirp/i.test(v.voiceURI));
  if (match) return match;

  // 2. Các giọng nữ Neural tự nhiên tiếng Nhật chuẩn Tokyo
  match = voices.find(v => (v.lang === 'ja-JP' || v.lang.startsWith('ja')) && /(nanami|keiko|kyoko|otoya|natural.*female|female)/i.test(v.name));
  if (match) return match;

  // 3. Giọng Google Japanese Neural (nền tảng của Google Chirp HD trên Chrome/Android)
  match = voices.find(v => (v.lang === 'ja-JP' || v.lang.startsWith('ja')) && /google/i.test(v.name));
  if (match) return match;

  // 4. Giọng tiếng Nhật bất kỳ
  return voices.find(v => v.lang === 'ja-JP' || v.lang.startsWith('ja')) || null;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedLedaVoice = findLedaJpVoice();
  };
}

// Gọi API SpeechGen.io chính thức để tạo file âm thanh giọng Leda JP
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

// Phát âm qua Web Speech API với profile âm học được tinh chỉnh tương đương Leda JP
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

    // Tinh chỉnh âm học mô phỏng giọng nữ Leda JP (Chirp3-HD):
    // Nhịp độ 0.92x tự nhiên, độ cao thanh thoát 1.04x
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

// Hàm phát âm chính toàn ứng dụng (Đồng bộ giọng Leda JP & Ngắt nghỉ chuẩn ngữ pháp)
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

  // Dừng mọi phát âm đang chạy
  stopAllSpeechAudio();

  const cleanText = cleanSpeechText(text);
  if (!cleanText) {
    if (btn && btn.classList) btn.classList.remove('is-speaking');
    return;
  }

  // Tự động phân tích ngữ pháp, ngắt nghỉ mệnh đề & nhịp thở tiếng Nhật (Bunsetsu prosodic pauses)
  const speechText = formatJapaneseGrammarSpeech(cleanText);

  if (btn && btn.classList) {
    btn.classList.add('is-speaking');
  }

  const stopRelay = () => {
    if (btn && btn.classList) {
      btn.classList.remove('is-speaking');
    }
  };

  // Tính toán thời lượng timeout an toàn linh động theo độ dài câu văn (chống tự ngắt tiếng khi đọc câu dài)
  const dynamicDuration = Math.max(6500, cleanText.length * 280);
  const safetyTimer = setTimeout(stopRelay, dynamicDuration);
  const cfg = getSpeechGenConfig();

  // Trên smartphone/tablet (iOS Safari & Android Chrome), ưu tiên phát âm trực tiếp qua Web Speech API
  // đồng bộ ngay trong chuỗi thao tác người dùng (user gesture) để tránh bị WebKit/Safari chặn âm thanh
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || (navigator && navigator.maxTouchPoints > 0));
  const hasSpeechSynth = typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';

  if (isTouchDevice && hasSpeechSynth && (!cfg.token || !cfg.email)) {
    speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg);
    return;
  }

  // Tier 1: Nếu người dùng đã cài đặt API Token SpeechGen.io -> phát trực tiếp file Leda JP từ SpeechGen
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

  // Tier 2: Phát âm qua bộ tổng hợp Leda JP Neural Engine (hỗ trợ 100% di động, máy tính, offline)
  speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg);
}

// Luôn gán vào window để sự kiện inline onclick trên điện thoại nhận 100%
window.speakJapanese = speakJapanese;

const SPEAKER_ICON_HTML = `<svg class="speaker-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;

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

  const cards = document.querySelectorAll('.quiz-card');
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
// 3. LOGIC RENDER SIDEBAR (BÀI HỌC 1-15, BÀI TẬP 1-15, ĐỌC HIỂU 1-15)
// --------------------------------------------------------------------------
function renderSidebar() {
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (!sidebarMenu) return;

  // Ghi nhận các nhóm đang mở (nếu sidebar đã được hiển thị trước đó trong phiên học)
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
      items: lessonsData.map(l => ({
        id: l.id,
        label: l.title.split(':')[0],
        sub: l.id === currentActiveId ? 'Đang học' : 'Minna N5',
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
    // Tự động mở accordion nhóm chứa bài học hiện tại để người học không bị mất phương hướng
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
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="accordion-badge">${group.items.length}</span>
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
    if (headerBtn) {
      headerBtn.addEventListener('click', () => {
        const willBeOpen = !groupEl.classList.contains('open');
        groupEl.classList.toggle('open', willBeOpen);
        headerBtn.setAttribute('aria-expanded', willBeOpen);
      });
    }

    groupEl.querySelectorAll('.menu-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-id');
        switchModule(targetId);
      });
    });

    sidebarMenu.appendChild(groupEl);
  });
}

// --------------------------------------------------------------------------
// 4. LOGIC RENDER NỘI DUNG CHÍNH (MAIN CONTENT)
// --------------------------------------------------------------------------
function renderContent(id) {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  currentActiveId = id;
  const mainContent = document.getElementById('main-content');
  if (mainContent) mainContent.scrollTop = 0;

  // Kích hoạt hiệu ứng chuyển mạch nội dung: fade-in mượt mà không gây giật khung hình
  content.classList.remove('content-entering');
  safeRAF(() => {
    content.classList.add('content-entering');
  });

  const isCompleted = isModuleCompleted(id);

  // 1. TRƯỜNG HỢP: BÀI HỌC MINNA NO NIHONGO (bai-1 đến bai-15)
  if (id.startsWith('bai-')) {
    const lesson = lessonsData.find(l => l.id === id);
    if (!lesson) return;

    content.innerHTML = `
      <!-- Hero Header -->
      <div class="lesson-hero-card">
        <div class="hero-meta">
          <span class="badge badge-sakura">${lesson.badge || 'Bài học Minna'}</span>
          <span class="badge badge-green">${lesson.vocabulary.length} Từ vựng chuẩn SGK</span>
          <span class="badge badge-primary">${lesson.grammar.length} Cấu trúc ngữ pháp</span>
          <button id="btn-complete-lesson" 
                  class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${lesson.id}')">
            ${isCompleted ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành bài này'}
          </button>
        </div>
        <h2 class="lesson-title">${lesson.title}</h2>
        <p class="lesson-desc">${lesson.description}</p>
      </div>

      <!-- PHẦN 1: TỪ VỰNG CHUẨN SÁCH GIÁO KHOA -->
      <section class="section-card">
        <div class="section-header">
          <h3 class="section-title">Bảng Từ Vựng Trọng Tâm (${lesson.vocabulary.length} Từ)</h3>
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
            <tbody>
              ${lesson.vocabulary.map(v => {
                const hasKanji = hasKanjiCharacter(v.kanji);
                const speechTarget = cleanSpeechText(v.hiragana || v.kanji);
                const displayKanji = hasKanji ? v.kanji : (v.kanji || v.hiragana);
                const showSubReading = hasKanji && v.hiragana && cleanSpeechText(v.hiragana) !== cleanSpeechText(v.kanji);
                const isLongWord = isVocabTermLong(v);
                return `
                <tr>
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
          <h3 class="section-title">Cấu Trúc Ngữ Pháp & Lưu Ý Phòng Thi</h3>
        </div>
        <div class="grammar-list">
          ${lesson.grammar.map((g, gIdx) => `
            <div class="grammar-item-card">
              <div class="grammar-formula-bar">
                <div class="grammar-formula">${g.structure}</div>
              </div>
              <div class="grammar-usage">
                <div class="usage-title"><strong>Ý nghĩa & Cách dùng:</strong></div>
                <div class="usage-text">${g.explanation.replace(/\n/g, '<br>')}</div>
              </div>
              ${g.caution ? `
                <div class="grammar-note">
                  <div class="note-title"><strong>Lưu ý tránh bẫy trong đề thi:</strong></div>
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
    `;
    return;
  }

  // 2. TRƯỜNG HỢP: BÀI TẬP (50 CÂU TỪ QUIZ-1 ĐẾN QUIZ-50)
  if (id.startsWith('quiz-')) {
    const quizList = practiceQuizData[id] || [];
    const lessonNum = id.replace('quiz-', '');
    const lessonTitle = `Bài Tập - Bài ${lessonNum} Minna`;
    const lessonDesc = `Bộ 50 câu trắc nghiệm trọng tâm Bài ${lessonNum}. Hãy chọn đáp án cho từng câu và bấm "Nộp Bài" ở cuối trang để xem kết quả và giải thích!`;

    content.innerHTML = `
      <div class="lesson-hero-card">
        <div class="hero-meta">
          <span class="badge badge-sakura">Luyện Tập</span>
          <span class="badge badge-primary">50 Câu Hỏi</span>
          <button class="btn-redo" onclick="resetPracticeProgress('${id}')" title="Làm lại 50 câu trắc nghiệm này">
            <span>Làm lại bài</span>
          </button>
        </div>
        <h2 class="lesson-title">${lessonTitle}</h2>
        <p class="lesson-desc">${lessonDesc}</p>
      </div>

      <!-- THANH ĐIỀU HƯỚNG CÂU HỎI & ĐỒNG HỒ ĐẾM NGƯỢC 30 PHÚT -->
      <div class="quiz-top-bar">
        <div class="quiz-timer-wrap">
          <span>Thời gian:</span>
          <span class="quiz-timer-display" id="quiz-timer-clock">30:00</span>
          <button id="btn-pause-timer" class="quiz-palette-toggle-btn" onclick="toggleQuizTimer()">Tạm dừng</button>
        </div>
        <button class="quiz-palette-toggle-btn" onclick="togglePaletteView()">
          <span>Bảng câu hỏi (1-${quizList.length})</span>
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

      <!-- KHUNG NỘP BÀI / KẾT QUẢ Ở CUỐI BÀI TẬP (THU GỌN) -->
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

  // 4. TRƯỜNG HỢP: BỘ THỦ TIẾNG NHẬT (radicals-1 đến radicals-7)
  if (id.startsWith('radicals-')) {
    renderRadicalSection(id);
    return;
  }
}

// --------------------------------------------------------------------------
// 4B. MODULE BỘ THỦ TIẾNG NHẬT (KANJI RADICALS) - NGỌC TIỆP MINATO
// Khung chữ điền kích thước lớn, các nét tự động viết lặp đi lặp lại tuần hoàn
// Format chuẩn 4 mục: Cách viết, Tên bộ, Ý nghĩa bộ thủ, Ý nghĩa trong Kanji
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
    <!-- Hero Header -->
    <div class="lesson-hero-card">
      <div class="hero-meta">
        <span class="badge badge-sakura">Bộ Thủ Tiếng Nhật</span>
        <span class="badge badge-primary">${group.title}</span>
        <span class="badge badge-green">${group.items.length} Bộ thủ chuẩn</span>
        <button id="btn-complete-lesson" 
                class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                onclick="toggleLessonComplete('${group.id}')">
          ${isCompleted ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành phần này'}
        </button>
      </div>
      <h2 class="lesson-title">${group.title}</h2>
      <p class="lesson-desc">${group.description}</p>
    </div>

    <!-- TÌM KIẾM BỘ THỦ TRONG PHẦN NÀY -->
    <div class="radical-filter-bar" style="margin-bottom: 20px;">
      <input type="text" 
             id="radical-filter-input"
             class="quick-search-input" 
             placeholder="Tìm nhanh bộ thủ trong phần này (ví dụ: tên, nghĩa, chữ Hán...)" 
             oninput="filterRadicalsInGroup(this.value)"
             style="max-width: 440px; padding: 7px 14px; font-size: 13.5px; border-radius: var(--radius-sm);">
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
                    <span class="examples-tag">Chữ Hán ví dụ:</span>
                    <div class="kanji-example-chips">
                      ${item.examples.map(ex => `
                        <div class="kanji-chip">
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

  // Khởi chạy hoạt ảnh viết nét thông minh (tự động tối ưu bằng IntersectionObserver)
  initRadicalStrokeLoops(currentSession);
}

window.filterRadicalsInGroup = function(query) {
  const val = (query || '').trim().toLowerCase();
  const cards = document.querySelectorAll('.radical-card');
  cards.forEach(c => {
    if (!val) {
      c.style.display = '';
      return;
    }
    const text = c.textContent.toLowerCase();
    c.style.display = text.includes(val) ? '' : 'none';
  });
};


function initRadicalStrokeLoops(currentSession) {
  const cards = document.querySelectorAll('.radical-card');

  cards.forEach(card => {
    const radicalId = card.getAttribute('data-id');
    const svg = card.querySelector('.radical-stroke-svg');
    if (!svg) return;

    const strokePaths = svg.querySelectorAll('.animated-strokes .stroke-path');
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
      while (currentSession === activeRadicalSession && document.body.contains(svg) && isVisible) {
        cancelCurrent = false;

        // 1. Reset ẩn toàn bộ nét
        strokePaths.forEach((p, i) => {
          p.style.transition = 'none';
          p.style.strokeDashoffset = `${lengths[i]}`;
          p.style.opacity = '1';
        });

        await sleep(250);
        if (cancelCurrent || currentSession !== activeRadicalSession || !document.body.contains(svg) || !isVisible) break;

        // 2. Viết lần lượt từng nét theo thứ tự bút thuận
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

        // 3. Dừng lại 1.4s để người học ngắm nhìn đầy đủ cấu trúc chữ
        await sleep(1400);
        if (cancelCurrent || currentSession !== activeRadicalSession || !document.body.contains(svg) || !isVisible) break;

        // 4. Mờ dần nét chữ trước khi tự động lặp lại chu kỳ mới
        strokePaths.forEach(p => {
          p.style.transition = 'opacity 300ms ease';
          p.style.opacity = '0';
        });
        await sleep(350);
      }
    }


    // Tối ưu hóa bằng IntersectionObserver: CHỈ CHẠY HOẠT HỌA KHI THẺ NẰM TRONG TẦM MẮT (TIẾT KIỆM PIN & CPU 100%)
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

  content.innerHTML = `
    <div class="lesson-hero-card">
      <div class="hero-meta">
        <span class="badge badge-sakura">Luyện Đọc Hiểu</span>
        <span class="badge badge-primary">1 Bài Đọc</span>
        <span class="badge badge-green">5 Câu Hỏi Đi Kèm</span>
        <button class="btn-redo" onclick="resetDokkaiProgress('${dokkai.id}')" title="Làm lại bài đọc hiểu này">
          <span>Làm lại bài</span>
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
              <span>Dịch nghĩa</span>
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

          <!-- KHUNG NỘP BÀI / KẾT QUẢ ĐỌC HIỂU (THU GỌN) -->
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
      btn.textContent = isHidden ? 'Ẩn dịch nghĩa' : 'Dịch nghĩa';
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
    const raw = localStorage.getItem(STORAGE_PRACTICE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    return all[quizId] || { submitted: false, selections: {}, score: null };
  } catch (e) {
    return { submitted: false, selections: {}, score: null };
  }
}

function savePracticeQuizState(quizId, state) {
  try {
    const raw = localStorage.getItem(STORAGE_PRACTICE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    all[quizId] = state;
    localStorage.setItem(STORAGE_PRACTICE_KEY, JSON.stringify(all));
  } catch (e) {}
}

function getDokkaiState(dokkaiId) {
  try {
    const raw = localStorage.getItem(STORAGE_DOKKAI_KEY);
    const all = raw ? JSON.parse(raw) : {};
    return all[dokkaiId] || { submitted: false, selections: {}, score: null };
  } catch (e) {
    return { submitted: false, selections: {}, score: null };
  }
}

function saveDokkaiState(dokkaiId, state) {
  try {
    const raw = localStorage.getItem(STORAGE_DOKKAI_KEY);
    const all = raw ? JSON.parse(raw) : {};
    all[dokkaiId] = state;
    localStorage.setItem(STORAGE_DOKKAI_KEY, JSON.stringify(all));
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
      if (typeof submitPracticeQuiz === 'function') {
        submitPracticeQuiz(currentActiveId);
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
  if (card) {
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

// Chọn đáp án (chưa chấm điểm, chưa giải thích cho tới khi nộp bài)
window.handleSelectOption = function(moduleId, questionId, optIdx, isDokkai = false) {
  const state = isDokkai ? getDokkaiState(moduleId) : getPracticeQuizState(moduleId);
  if (state.submitted) {
    return; // Đã nộp bài thì không sửa được nữa, phải bấm "Làm lại bài"
  }

  state.selections = state.selections || {};
  state.selections[questionId] = optIdx;

  if (isDokkai) {
    saveDokkaiState(moduleId, state);
  } else {
    savePracticeQuizState(moduleId, state);
  }

  // Cập nhật giao diện nút được chọn nhanh trong phạm vi thẻ câu hỏi
  const card = document.getElementById(`card-${questionId}`);
  if (card) {
    const buttons = card.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
      btn.classList.toggle('selected', idx === optIdx);
    });
    card.classList.remove('unanswered-pulse');
  }

  // Cập nhật ô số tương ứng trong ma trận câu hỏi
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
          <span>Làm Lại Bài</span>
        </button>
      </div>
    </div>
  `;
}

// Nộp bài 50 câu trắc nghiệm
window.submitPracticeQuiz = function(quizId) {
  const quizList = practiceQuizData[quizId] || [];
  const state = getPracticeQuizState(quizId);
  const selections = state.selections || {};

  // Kiểm tra nếu chưa chọn hết đáp án -> Cho phép nộp sớm với hộp thoại xác nhận thân thiện
  const missing = quizList.filter(q => selections[q.id] === undefined);
  if (missing.length > 0) {
    const confirmEarly = confirm(
      `Bạn còn ${missing.length} câu chưa chọn đáp án.\n\n` +
      `Bạn có muốn nộp bài ngay bây giờ không?\n` +
      `(Các câu chưa trả lời sẽ được tính 0 điểm)`
    );
    if (!confirmEarly) {
      showToast(`Còn ${missing.length} câu chưa làm.`);
      const firstMissing = document.getElementById(`card-${missing[0].id}`);
      if (firstMissing) {
        firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstMissing.classList.remove('unanswered-pulse');
        safeRAF(() => {
          firstMissing.classList.add('unanswered-pulse');
        });
      }
      return;
    }
  }

  // Dừng đồng hồ đếm ngược
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    isTimerRunning = false;
  }

  // Chấm điểm toàn bộ câu hỏi và HIỂN THỊ GIẢI THÍCH ĐẦY ĐỦ (CẢ CÂU ĐÚNG & CÂU SAI)
  let correctCount = 0;
  const totalCount = quizList.length;

  quizList.forEach(q => {
    const selectedIdx = selections[q.id];
    const isCorrect = (selectedIdx !== undefined && selectedIdx === q.correctIdx);
    if (isCorrect) correctCount++;

    const buttons = document.querySelectorAll(`[id^="btn-${q.id}-"]`);
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

    // Cập nhật trạng thái màu sắc trên Bảng ma trận câu hỏi (Palette)
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

  // Đánh dấu hoàn thành nếu đạt >= 60%
  if (percentage >= 60) {
    const list = getCompletedModules();
    if (!list.includes(quizId)) {
      list.push(quizId);
      localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(list));
      renderSidebar();
      updateHeaderProgress();
    }
  }

  renderResultBanner(quizId, false, correctCount, totalCount, percentage);
  showToast(`Đã nộp bài! Kết quả: ${correctCount}/${totalCount} câu (${percentage}%).`);
};

// Nộp bài 5 câu Đọc hiểu
window.submitDokkai = function(dokkaiId) {
  const dokkai = dokkaiData.find(d => d.id === dokkaiId);
  if (!dokkai) return;
  const questions = dokkai.questions || [];
  const state = getDokkaiState(dokkaiId);
  const selections = state.selections || {};

  const missing = questions.filter(q => selections[q.id] === undefined);
  if (missing.length > 0) {
    const confirmEarly = confirm(
      `Bạn còn ${missing.length} câu chưa chọn đáp án.\n\n` +
      `Bạn có muốn nộp bài đọc hiểu ngay không?\n` +
      `(Các câu chưa trả lời sẽ được tính 0 điểm)`
    );
    if (!confirmEarly) {
      showToast(`Còn ${missing.length} câu chưa làm.`);
      const firstMissing = document.getElementById(`card-${missing[0].id}`);
      if (firstMissing) {
        firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstMissing.classList.remove('unanswered-pulse');
        safeRAF(() => {
          firstMissing.classList.add('unanswered-pulse');
        });
      }
      return;
    }
  }

  let correctCount = 0;
  const totalCount = questions.length;

  questions.forEach(q => {
    const selectedIdx = selections[q.id];
    const isCorrect = (selectedIdx !== undefined && selectedIdx === q.correctIdx);
    if (isCorrect) correctCount++;

    const buttons = document.querySelectorAll(`[id^="btn-${q.id}-"]`);
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
      localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(list));
      renderSidebar();
      updateHeaderProgress();
    }
  }

  renderResultBanner(dokkaiId, true, correctCount, totalCount, percentage);
  showToast(`Đã nộp bài đọc hiểu! Kết quả: ${correctCount}/${totalCount} câu (${percentage}%).`);
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

      const buttons = document.querySelectorAll(`[id^="btn-${q.id}-"]`);
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

      const buttons = document.querySelectorAll(`[id^="btn-${q.id}-"]`);
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
  const ok = confirm("Bạn có chắc muốn làm lại bộ 50 câu trắc nghiệm này không?\nToàn bộ đáp án đã chọn sẽ được xóa để bạn làm lại từ đầu.");
  if (!ok) return;

  const wrapper = document.querySelector('.quiz-wrapper');
  if (wrapper) wrapper.classList.add('quiz-fade-reset');

  try {
    const raw = localStorage.getItem(STORAGE_PRACTICE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    delete all[targetId];
    localStorage.setItem(STORAGE_PRACTICE_KEY, JSON.stringify(all));
  } catch (e) {}

  setTimeout(() => {
    renderContent(targetId);
    showToast("Đã đặt lại bài tập! Bạn có thể làm lại từ đầu.");
  }, 180);
};

window.resetDokkaiProgress = function(dokkaiId) {
  const ok = confirm("Bạn có chắc muốn làm lại bài đọc hiểu này không?\nCác đáp án đã chọn sẽ được xóa để bạn làm lại từ đầu.");
  if (!ok) return;

  const wrapper = document.querySelector('.quiz-wrapper');
  if (wrapper) wrapper.classList.add('quiz-fade-reset');

  try {
    const raw = localStorage.getItem(STORAGE_DOKKAI_KEY);
    const all = raw ? JSON.parse(raw) : {};
    delete all[dokkaiId];
    localStorage.setItem(STORAGE_DOKKAI_KEY, JSON.stringify(all));
  } catch (e) {}

  setTimeout(() => {
    renderDokkaiRoom(dokkaiId);
    showToast("Đã đặt lại bài đọc hiểu! Bạn có thể làm lại từ đầu.");
  }, 180);
};

  // --------------------------------------------------------------------------
  // 7. TÌM KIẾM NHANH CTRL + K TOÀN DIỆN TRÊN TOÀN BỘ 15 BÀI
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

    // Tìm trong Bài Học (Từ vựng, Ngữ pháp, Ví dụ)
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

    // Tìm trong Đọc hiểu (Tiêu đề, đoạn văn, bản dịch)
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

    // Tìm trong Bài tập trắc nghiệm (Tên bài, nội dung câu hỏi)
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

    // Tìm trong Bộ Thủ
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
        if (isSelected) {
          item.scrollIntoView({ block: 'nearest' });
        }
      });
    };

    list.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (!item) return;
      const targetId = item.getAttribute('data-target');
      const highlight = decodeURIComponent(item.getAttribute('data-highlight') || '');
      handleSearchClick(targetId, highlight);
    });

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

    // Hỗ trợ phím mũi tên lên/xuống và Enter trong ô tìm kiếm
    input.addEventListener('keydown', (e) => {
      const items = list.querySelectorAll('.search-result-item');
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

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        input.focus();
        input.select();
      }
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search-container')) {
        dropdown.classList.remove('active');
      }
    });
  }

  window.handleSearchClick = function(targetId, highlightText = '') {
    const dropdown = document.getElementById('search-dropdown');
    const input = document.getElementById('quick-search-input');
    if (dropdown) dropdown.classList.remove('active');
    if (input) {
      input.value = '';
      input.blur();
    }

    switchModule(targetId);

    // Cuộn tới phần tử trùng khớp và nhấp nháy làm nổi bật
    if (highlightText && highlightText.trim().length > 1) {
      const rawTarget = highlightText.trim().toLowerCase();
      setTimeout(() => {
        const mainContainer = document.getElementById('main-content');
        if (!mainContainer) return;
        const candidates = mainContainer.querySelectorAll('tr, .grammar-card, .kanji-card, .quiz-question-card, .example-row, .dokkai-passage-sticky-card');
        let foundEl = null;
        for (const el of candidates) {
          if (el.textContent.toLowerCase().includes(rawTarget)) {
            foundEl = el;
            break;
          }
        }
        if (foundEl) {
          foundEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
          foundEl.classList.add('search-highlight-target');
          setTimeout(() => {
            foundEl.classList.remove('search-highlight-target');
          }, 3200);
        }
      }, 300);
    }
  };

  window.switchModule = function(targetId, updateHash = true) {
    if (!targetId) return;

    if (quizTimerInterval) {
      clearInterval(quizTimerInterval);
      quizTimerInterval = null;
    }

    // Cập nhật hash trên URL để hỗ trợ bookmark & F5
    if (updateHash && window.location.hash.replace('#', '') !== targetId) {
      window.location.hash = targetId;
    }
    try {
      localStorage.setItem(STORAGE_LAST_ACTIVE_KEY, targetId);
    } catch (e) {}

    // Tự động đóng sidebar mobile mượt mà khi người dùng đã chọn bài
    if (window.innerWidth <= 768) {
      closeMobileSidebar();
    }

    let targetBtn = null;
    document.querySelectorAll('.menu-item-btn').forEach(b => {
      const isTarget = (b.getAttribute('data-id') === targetId);
      b.classList.toggle('active', isTarget);
      if (isTarget) targetBtn = b;
    });

    if (targetBtn) {
      const parentGroup = targetBtn.closest('.accordion-group');
      if (parentGroup && !parentGroup.classList.contains('open')) {
        parentGroup.classList.add('open');
      }
      setTimeout(() => {
        targetBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }, 50);
    }

    renderContent(targetId);
  };

  // Lắng nghe thay đổi URL Hash để hỗ trợ các thao tác Back / Forward trình duyệt
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.replace('#', '');
    if (newHash && newHash !== currentActiveId) {
      switchModule(newHash, false);
    }
  });

// --------------------------------------------------------------------------
// 8. KHỞI CHẠY GIAO DIỆN & SỰ KIỆN
// --------------------------------------------------------------------------
function applyTheme(themeName) {
  // Thêm class theme-switching để vô hiệu hóa mọi transition nặng nề gây lag trên điện thoại
  document.documentElement.classList.add('theme-switching');
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('minna_theme', themeName);

  // Sau khi DOM repaint màu mới xong thì gỡ bỏ class
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('theme-switching');
    });
  });
}

function initThemeToggle() {
  const saved = localStorage.getItem('minna_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const nxt = cur === 'dark' ? 'light' : 'dark';
      applyTheme(nxt);
      showToast(nxt === 'dark' ? 'Đã đổi sang giao diện Tối' : 'Đã đổi sang giao diện Sáng');
    });
  }
}

function initResetProgress() {
  const btn = document.getElementById('btn-reset-progress');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const ok = confirm(
      "CẢNH BÁO ĐẶT LẠI TIẾN ĐỘ:\n\n" +
      "Bạn có chắc chắn muốn xóa toàn bộ tiến độ học tập, bài tập và bài đọc hiểu đã lưu không?\n\n" +
      "Bấm OK để xác nhận, hoặc Hủy để giữ nguyên."
    );
    if (!ok) return;

    localStorage.removeItem(STORAGE_COMPLETED_KEY);
    localStorage.removeItem(STORAGE_PRACTICE_KEY);
    localStorage.removeItem(STORAGE_DOKKAI_KEY);

    try {
      Object.keys(localStorage).forEach(key => {
        if ((key.startsWith('minna_') || key.startsWith('jlpt_') || key.startsWith('dokkai_')) && key !== 'minna_theme') {
          localStorage.removeItem(key);
        }
      });
    } catch (e) {
      // Ignored
    }

    renderSidebar();
    updateHeaderProgress();
    renderContent(currentActiveId);
    showToast("Đã đặt lại toàn bộ tiến độ thành công!");
  });
}

function updateMenuButtonState() {
  const btn = document.getElementById('menu-toggle-btn');
  const sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  const isMobile = window.innerWidth <= 768;
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

  // Khởi tạo trạng thái thu gọn thanh menu:
  // Mặc định trên Desktop là mở (chỉ thu gọn nếu người dùng chủ động lưu 'true')
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) {
    const savedCollapsed = localStorage.getItem('minna_sidebar_collapsed');
    if (savedCollapsed === 'true') {
      sidebar.classList.add('collapsed');
    } else {
      sidebar.classList.remove('collapsed');
    }
  }
  updateMenuButtonState();

  const toggleMenu = () => {
    const currentIsMobile = window.innerWidth <= 768;
    if (currentIsMobile) {
      const isOpen = sidebar.classList.toggle('mobile-open');
      if (overlay) overlay.classList.toggle('active', isOpen);
      document.body.classList.toggle('sidebar-open-lock', isOpen);
    } else {
      const isCollapsed = sidebar.classList.toggle('collapsed');
      localStorage.setItem('minna_sidebar_collapsed', isCollapsed ? 'true' : 'false');
    }
    updateMenuButtonState();
  };

  btn.addEventListener('click', toggleMenu);

  const closeSidebarBtn = document.getElementById('close-sidebar-btn');
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeMobileSidebar);
    closeSidebarBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      closeMobileSidebar();
    }, { passive: false });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMobileSidebar);
    overlay.addEventListener('touchstart', (e) => {
      e.preventDefault();
      closeMobileSidebar();
    }, { passive: false });
  }

  // Phím tắt thông minh: Ctrl + B để đóng/mở menu, ESC để đóng mobile drawer
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

  // Tự động đồng bộ trạng thái nút khi thay đổi kích thước cửa sổ trình duyệt (responsive resize)
  window.addEventListener('resize', () => {
    updateMenuButtonState();
    if (window.innerWidth > 768) {
      if (overlay) overlay.classList.remove('active');
      sidebar.classList.remove('mobile-open');
      document.body.classList.remove('sidebar-open-lock');
    }
  });
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (overlay) overlay.classList.remove('active');
  document.body.classList.remove('sidebar-open-lock');
  updateMenuButtonState();
}

// --------------------------------------------------------------------------
// 9. TRANG BÌA GIỚI THIỆU PHONG CÁCH NHẬT BẢN (COVER SLIDE SCREEN)
// --------------------------------------------------------------------------
let selectedCoverTarget = null;

function initCoverPage() {
  const cover = document.getElementById('cover-page-slide');
  const btnEnter = document.getElementById('btn-enter-app');
  const btnShowCover = document.getElementById('btn-show-cover');
  const brandHomeBtn = document.getElementById('brand-home-btn');
  const coverThemeBtn = document.getElementById('cover-theme-toggle');

  if (!cover) return;

  // Luôn đảm bảo trang bìa hiển thị khi tải hoặc làm mới trang
  cover.classList.remove('hide-cover');

  // Hỗ trợ phím bấm Enter / Space cho các thẻ mục tiêu trên trang bìa
  document.querySelectorAll('.cover-feature-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Khi bấm "Bắt Đầu Học Ngay": Đây là thao tác DUY NHẤT để vào trang nội dung!
  if (btnEnter) {
    const handleEnter = (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      cover.classList.add('hide-cover');

      const targetHash = selectedCoverTarget || window.location.hash || '#bai-1';
      const cleanId = targetHash.replace('#', '');

      if (window.location.hash === targetHash) {
        if (typeof switchModule === 'function') {
          switchModule(cleanId, false);
        } else {
          window.dispatchEvent(new Event('hashchange'));
        }
      } else {
        window.location.hash = targetHash;
      }
    };
    btnEnter.addEventListener('click', handleEnter);
  }

  // Khi bấm xem lại trang bìa ở Header hoặc Logo
  if (btnShowCover) {
    btnShowCover.addEventListener('click', () => {
      cover.classList.remove('hide-cover');
      cover.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (brandHomeBtn) {
    brandHomeBtn.addEventListener('click', () => {
      cover.classList.remove('hide-cover');
      cover.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Đổi giao diện Sáng / Tối trực tiếp trên Trang Bìa
  if (coverThemeBtn) {
    coverThemeBtn.addEventListener('click', () => {
      const mainThemeBtn = document.getElementById('theme-toggle-btn');
      if (mainThemeBtn) {
        mainThemeBtn.click();
      } else {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        const nxt = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nxt);
        localStorage.setItem('minna_theme', nxt);
      }
    });
  }
}

// Hàm chọn mục tiêu trên trang bìa: KHÔNG thoát trang bìa, chỉ highlight và chờ bấm "Bắt Đầu Học Ngay"
window.selectCoverTarget = function(targetHash, el, label) {
  selectedCoverTarget = targetHash;

  // Gỡ bỏ class active cũ
  document.querySelectorAll('.cover-feature-card, .target-chip').forEach(item => {
    item.classList.remove('active-target', 'active');
  });

  // Gắn class active vào phần tử vừa click
  if (el) {
    el.classList.add('active-target', 'active');
  }

  // Đồng bộ trạng thái active với các phần tử khác cùng targetHash
  if (targetHash) {
    document.querySelectorAll(`.cover-feature-card[data-target="${targetHash}"], .target-chip[data-target="${targetHash}"]`).forEach(item => {
      item.classList.add('active-target', 'active');
    });
  }

  // Xác định tên nhãn để hiển thị gợi ý
  let targetTitle = label;
  if (!targetTitle && el) {
    const titleEl = el.querySelector('.feature-title');
    targetTitle = titleEl ? titleEl.textContent.trim() : el.textContent.trim();
  }
  targetTitle = targetTitle || 'Mục tiêu đã chọn';

  // Cập nhật thông điệp hướng dẫn rõ ràng ngay dưới nút CTA
  const hintEl = document.querySelector('.cover-sub-hint');
  if (hintEl) {
    hintEl.innerHTML = `Đã chọn: <strong style="color:var(--accent-primary);">${targetTitle}</strong> • Bấm <em>"Bắt Đầu Học Ngay"</em> để vào học!`;
  }

  // Kích hoạt hiệu ứng pulse trên nút "Bắt Đầu Học Ngay" để điều hướng mắt người dùng
  const btnEnter = document.getElementById('btn-enter-app');
  if (btnEnter) {
    btnEnter.classList.remove('pulse-highlight');
    void btnEnter.offsetWidth; // Force reflow
    btnEnter.classList.add('pulse-highlight');
  }

  if (typeof showToast === 'function') {
    showToast(`Đã chọn: ${targetTitle}. Hãy bấm "Bắt Đầu Học Ngay" để vào bài học!`);
  }
};

// Tương thích ngược: Nếu bất kỳ đâu gọi enterAppAt thì vẫn chỉ chọn mục tiêu chứ không tự ý ẩn trang bìa
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

  if (mainContent) {
    mainContent.addEventListener('scroll', () => {
      handleScroll(mainContent.scrollTop);
    }, { passive: true });
  }

  window.addEventListener('scroll', () => {
    handleScroll(window.scrollY || document.documentElement.scrollTop);
  }, { passive: true });

  const scrollToTop = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  btn.addEventListener('click', scrollToTop);
  btn.addEventListener('touchend', scrollToTop, { passive: false });
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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('show-modal');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (triggerBtn) triggerBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show-modal')) {
      closeModal();
    }
  });

  if (speedSlider && speedVal) {
    speedSlider.addEventListener('input', () => {
      speedVal.textContent = speedSlider.value + 'x';
    });
  }

  if (pitchSlider && pitchVal) {
    pitchSlider.addEventListener('input', () => {
      pitchVal.textContent = pitchSlider.value + 'x';
    });
  }

  if (saveBtn) {
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

  // Xác định bài học mở đầu: ưu tiên hash URL -> bài học mở gần nhất -> mặc định 'bai-1'
  const hashId = (window.location.hash || '').replace('#', '');
  const savedLastActive = localStorage.getItem(STORAGE_LAST_ACTIVE_KEY);
  const initialId = hashId || savedLastActive || 'bai-1';

  switchModule(initialId, false);
});
/* ==========================================================================
   MODULE TỐI ƯU HIỆU NĂNG & NÂNG CẤP TRẢI NGHIỆM HỌC TẬP (UX BOOSTER)
   ========================================================================== */

(function () {
  // 1. Bộ nạp dữ liệu thông minh (Lazy Script Loader có bộ nhớ đệm)
  const loadedScripts = new Set();

  window.loadDataChunk = function (scriptPath) {
    if (loadedScripts.has(scriptPath)) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${scriptPath}"]`);
      if (existing) {
        loadedScripts.add(scriptPath);
        return resolve();
      }
      const script = document.createElement('script');
      script.src = scriptPath;
      script.async = true;
      script.onload = () => {
        loadedScripts.add(scriptPath);
        resolve();
      };
      script.onerror = () => reject(new Error(`Không thể tải dữ liệu: ${scriptPath}`));
      document.body.appendChild(script);
    });
  };

  // 2. Tự động lưu và khôi phục bài học gần nhất (Hash Persistence)
  window.addEventListener('hashchange', () => {
    if (window.location.hash) {
      localStorage.setItem('nihongo_last_hash', window.location.hash);
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    const savedHash = localStorage.getItem('nihongo_last_hash');
    if (!window.location.hash && savedHash) {
      window.location.hash = savedHash;
    }

    // Đảm bảo thẻ meta viewport chuẩn trên mọi trình duyệt di động (kể cả Zalo WebView)
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  });

  // 3. Phím tắt Ctrl + K / Cmd + K để nhảy nhanh vào ô Tìm kiếm
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const searchInput = document.querySelector('input[type="search"], input[type="text"]');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });
})();
function renderLessonPractice(vocabList, containerSelector = 'main') {
  if (!Array.isArray(vocabList) || vocabList.length === 0) return;

  const container = document.querySelector(containerSelector);
  if (!container) return;

  // Xóa khối cũ nếu chuyển bài
  const oldHub = document.getElementById('lesson-practice-hub');
  if (oldHub) oldHub.remove();

  // 1. Chuẩn hóa dữ liệu từ vựng (Chỉ lấy Hiragana cho Flashcard, lọc Kanji cho Quiz)
  const cleanVocab = vocabList.map(item => ({
    kanji: (item.kanji || item.word || '').trim(),
    hiragana: (item.hiragana || item.kana || item.reading || '').trim(),
    meaning: (item.meaning || item.vi || '').trim()
  })).filter(v => v.hiragana && v.meaning);

  const kanjiRegex = /[\u4e00-\u9faf]/;
  const kanjiList = cleanVocab.filter(v => kanjiRegex.test(v.kanji));

  const hub = document.createElement('section');
  hub.id = 'lesson-practice-hub';
  hub.className = 'practice-hub';

  hub.innerHTML = `
    <!-- KHỐI 1: FLASHCARD CHỈ HIRAGANA -->
    <div class="practice-box">
      <h3>
        <span>🗂️ Flashcard Từ Mới (Chỉ Hiragana)</span>
        <span id="fc-counter">1 / ${cleanVocab.length}</span>
      </h3>
      <div class="fc-card" id="fc-card">
        <div class="fc-hiragana" id="fc-kana"></div>
        <div class="fc-meaning" id="fc-vi"></div>
        <div class="fc-hint">Bấm vào thẻ để lật xem nghĩa tiếng Việt</div>
      </div>
      <div class="fc-controls">
        <button class="btn-tool" id="fc-prev">⬅ Trước</button>
        <button class="btn-tool" id="fc-speak">🔊 Nghe</button>
        <button class="btn-tool" id="fc-shuffle">🔀 Trộn</button>
        <button class="btn-tool" id="fc-next">Tiếp ➡</button>
      </div>
    </div>

    <!-- KHỐI 2: KIỂM TRA CHỮ HÁN TỪNG BÀI -->
    <div class="practice-box">
      <h3>
        <span>✍️ Kiểm Tra Chữ Hán Trong Bài</span>
        <span id="kq-score">Đúng: 0/${kanjiList.length}</span>
      </h3>
      <div id="kq-body"></div>
      <div class="kq-controls">
        <button class="btn-tool" id="kq-mode-btn">Chế độ: Kanji ➔ Hiragana</button>
        <button class="btn-tool" id="kq-reset-btn">🔄 Làm mới đề</button>
      </div>
    </div>
  `;

  container.prepend(hub);

  // --- LOGIC FLASHCARD (CHỈ HIRAGANA) ---
  let fcDeck = [...cleanVocab];
  let fcIndex = 0;
  const fcCard = hub.querySelector('#fc-card');
  const fcKana = hub.querySelector('#fc-kana');
  const fcVi = hub.querySelector('#fc-vi');
  const fcCounter = hub.querySelector('#fc-counter');

  function updateFlashcard() {
    const item = fcDeck[fcIndex];
    fcCard.classList.remove('flipped');
    fcKana.textContent = item.hiragana; // Chỉ hiển thị Hiragana
    fcVi.textContent = item.meaning;
    fcCounter.textContent = `${fcIndex + 1} / ${fcDeck.length}`;
  }

  fcCard.onclick = () => fcCard.classList.toggle('flipped');
  hub.querySelector('#fc-prev').onclick = () => {
    fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length;
    updateFlashcard();
  };
  hub.querySelector('#fc-next').onclick = () => {
    fcIndex = (fcIndex + 1) % fcDeck.length;
    updateFlashcard();
  };
  hub.querySelector('#fc-shuffle').onclick = () => {
    fcDeck.sort(() => Math.random() - 0.5);
    fcIndex = 0;
    updateFlashcard();
  };
  hub.querySelector('#fc-speak').onclick = (e) => {
    e.stopPropagation();
    const utter = new SpeechSynthesisUtterance(fcDeck[fcIndex].hiragana);
    utter.lang = 'ja-JP';
    speechSynthesis.speak(utter);
  };
  updateFlashcard();

  // --- LOGIC KIỂM TRA CHỮ HÁN (KANJI QUIZ) ---
  const kqBody = hub.querySelector('#kq-body');
  const kqScoreEl = hub.querySelector('#kq-score');
  const kqModeBtn = hub.querySelector('#kq-mode-btn');
  let quizMode = 'hiragana'; // 'hiragana' hoặc 'meaning'
  let kqDeck = [];
  let kqIndex = 0;
  let kqCorrect = 0;

  function startKanjiQuiz() {
    if (kanjiList.length < 2) {
      kqBody.innerHTML = `<p style="text-align:center;color:#94a3b8;">Bài này không có đủ chữ Hán để tạo trắc nghiệm.</p>`;
      return;
    }
    kqDeck = [...kanjiList].sort(() => Math.random() - 0.5);
    kqIndex = 0;
    kqCorrect = 0;
    renderKanjiQuestion();
  }

  function renderKanjiQuestion() {
    kqScoreEl.textContent = `Đúng: ${kqCorrect}/${kqDeck.length}`;
    if (kqIndex >= kqDeck.length) {
      kqBody.innerHTML = `
        <div class="kq-question" style="font-size:20px;color:#4ade80;">
          🎉 Hoàn thành! Kết quả: ${kqCorrect} / ${kqDeck.length} câu đúng
        </div>`;
      return;
    }

    const current = kqDeck[kqIndex];
    const answerKey = quizMode === 'hiragana' ? 'hiragana' : 'meaning';
    const wrongPool = cleanVocab
      .filter(v => v[answerKey] !== current[answerKey])
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [current, ...wrongPool].sort(() => Math.random() - 0.5);

    kqBody.innerHTML = `
      <div class="kq-question">${current.kanji}</div>
      <div class="kq-options">
        ${options.map(opt => `
          <button class="kq-opt" data-ans="${opt[answerKey]}">${opt[answerKey]}</button>
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
        }, 900);
      };
    });
  }

  kqModeBtn.onclick = () => {
    quizMode = quizMode === 'hiragana' ? 'meaning' : 'hiragana';
    kqModeBtn.textContent = quizMode === 'hiragana' 
      ? 'Chế độ: Kanji ➔ Hiragana' 
      : 'Chế độ: Kanji ➔ Nghĩa Việt';
    startKanjiQuiz();
  };
  hub.querySelector('#kq-reset-btn').onclick = startKanjiQuiz;

  startKanjiQuiz();
}
