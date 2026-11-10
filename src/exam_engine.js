/**
 * JLPT N5 & N4 EXAM ENGINE (HỆ THỐNG KHẢO THÍ & LUYỆN ĐỀ ĐỘC LẬP)
 * src/exam_engine.js
 * --------------------------------------------------------------------------
 * Động cơ điều khiển toàn bộ quy trình thi cử, chấm điểm và bảng xếp hạng:
 * 1. Nạp on-demand dữ liệu đề thi (data/exams_manifest.js, exams_n5.js, exams_n4.js, exam_furigana.js)
 * 2. Đổi 3 chế độ Hán tự: Bật Furigana ➔ Ẩn Furigana (rê chuột để xem) ➔ Chuyển toàn bộ sang Hiragana
 * 3. Đồng bộ 100% bộ icon vector SVG theo chuẩn Wa-Modern / Feather / Lucide
 * 4. Thanh HUD đồng hồ đếm ngược thiết kế thu gọn: Khi cuộn trang tự động gập thành badge góc trên bên phải
 * 5. Chống rò rỉ đáp án (Anti-cheat): Giữ đáp án trong RAM, không render ra DOM trước khi nộp
 * 6. Chấm điểm tự động, tỷ lệ % và chuẩn đỗ JLPT (>= 60% = 12/20 câu)
 * 7. Bảng xếp hạng (Leaderboard) & Lịch sử bài làm lưu trữ an toàn qua StorageEngine
 */
(function(root) {
  'use strict';

  // HỆ THỐNG BIỂU TƯỢNG VECTOR SVG ĐỒNG BỘ THEO DESIGN SYSTEM BÀI HỌC
  const EXAM_ICONS = {
    arrowLeft: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    clock: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5A1.5 1.5 0 0 1 13.5 4H10.5A1.5 1.5 0 0 1 12 2.5Z M7 10C7 6.8 9.2 4.5 12 4.5C14.8 4.5 17 6.8 17 10L18.5 17.5H5.5L7 10Z M4.5 17.5H19.5 M6.5 14H17.5 M10.5 17.5A1.5 1.5 0 0 0 13.5 17.5"></path></svg>`,
    search: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    trophy: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"></path><path d="M6 4h12v7a6 6 0 0 1-12 0V4z"></path></svg>`,
    history: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>`,
    check: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    refresh: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="21 4 21 10 15 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L21 10"></path></svg>`,
    play: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    book: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6C10 4.5 6.5 4.2 3 5V18.2C6.5 17.4 10 17.7 12 19.2C14 17.7 17.5 17.4 21 18.2V5C17.5 4.2 14 4.5 12 6Z M12 6V20.5 M2.5 19.8C6.2 19.0 9.8 19.3 12 20.6C14.2 19.3 17.8 19.0 21.5 19.8 M5.2 8.2C6.8 7.9 8.4 8.0 9.8 8.5 M5.2 10.6C6.8 10.3 8.4 10.4 9.8 10.9 M5.2 13.0C6.8 12.7 8.4 12.8 9.8 13.3 M5.2 15.4C6.8 15.1 8.4 15.2 9.8 15.7 M14.2 8.5C15.6 8.0 17.2 7.9 18.8 8.2 M14.2 10.9C15.6 10.4 17.2 10.3 18.8 10.6 M14.2 13.3C15.6 12.8 17.2 12.7 18.8 13.0 M14.2 15.7C15.6 15.2 17.2 15.1 18.8 15.4"></path></svg>`,
    lightbulb: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path></svg>`,
    kanjiBadge: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3H21V21H3Z M3 9H21 M3 15H21 M9 3V21 M15 3V21 M5 5.5H7 M6 4.5V7.5 M11 5.5H13 M12 4.5V7.5 M17 5.5H19 M5 11.5H7 M11 11.5H13 M17 11.5H19 M5 17.5H7 M11 17.5H13 M17 17.5H19"></path></svg>`,
    torii: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6C8 7.2 16 7.2 21 6L20.2 8C15.5 9 8.5 9 3.8 8Z M4.2 11H19.8 M4.2 12.5H19.8 M12 8.7V11 M7 8.5V21 M8.6 8.6V21 M15.4 8.6V21 M17 8.5V21 M6.2 21H9.4 M14.6 21H17.8"></path></svg>`,
    alert: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L2.2 18a2 2 0 0 0 1.71 3h16.18a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    zap: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13.5 2.5 5.5 13.5 12 13.5 10.5 21.5 18.5 10.5 12 10.5 13.5 2.5"></polygon></svg>`
  };

  // Trạng thái phiên thi cử runtime
  const state = {
    currentLevel: 'N5',
    activeExamCode: null,
    activeExamData: null,
    activeSessionId: null,
    examMode: 'timed', // 'timed' (30 phút đếm ngược) hoặc 'practice' (không giới hạn)
    furiganaMode: 'on', // 'on' (Kanji + Furigana), 'hide' (Ẩn Furigana), 'hiragana' (Chuyển sang Hiragana)
    timeRemainingSeconds: 1800, // 30 phút * 60
    timerInterval: null,
    scrollListenerAttached: false,
    userAnswers: {}, // { [examCode]: { [qId]: optionNum } }
    submittedExams: {}, // { [examCode]: resultObj }
    lockedSessions: {}, // { [examCode]: sessionObj }
    filterQuery: '',
    isBarCollapsed: false, // Thu gọn thanh Top Bar thành mini widget góc trên phải khi làm bài
    isAutoSubmitting: false,
    autoAdvanceTimeout: null
  };

  /**
   * Khởi tạo chế độ Furigana từ LocalStorage hoặc Class của Body
   */
  function initFuriganaState() {
    if (typeof document === 'undefined') return;
    if (root.StorageEngine) {
      const saved = root.StorageEngine.safeGet('minna_furigana_setting', null);
      if (saved) {
        state.furiganaMode = saved;
      } else if (document.body.classList.contains('kanji-as-hiragana')) {
        state.furiganaMode = 'hiragana';
      } else if (document.body.classList.contains('hide-furigana')) {
        state.furiganaMode = 'hide';
      } else {
        state.furiganaMode = 'on';
      }
    }
    applyFuriganaClassesToBody();
  }

  function applyFuriganaClassesToBody() {
    if (typeof document === 'undefined' || !document.body) return;
    if (state.furiganaMode === 'on') {
      document.body.classList.remove('hide-furigana');
      document.body.classList.remove('kanji-as-hiragana');
    } else if (state.furiganaMode === 'hide') {
      document.body.classList.add('hide-furigana');
      document.body.classList.remove('kanji-as-hiragana');
    } else if (state.furiganaMode === 'hiragana') {
      document.body.classList.add('hide-furigana');
      document.body.classList.add('kanji-as-hiragana');
    }
  }

  /**
   * Chuẩn hóa mã đề (VD: 'exam-n5-01' -> 'N5-01', 'n5-01' -> 'N5-01')
   */
  function normalizeExamCode(code) {
    if (!code) return 'N5-01';
    let clean = String(code).trim().toUpperCase();
    clean = clean.replace(/^EXAM-/, '').replace(/^DE-THI-/, '');
    return clean;
  }

  /**
   * Nạp CSS on-demand cho phân hệ khảo thí
   */
  function ensureExamStylesLoaded() {
    if (typeof document === 'undefined' || !document.createElement) return;
    if (document.getElementById('exam-engine-styles')) return;
    const link = document.createElement('link');
    link.id = 'exam-engine-styles';
    link.rel = 'stylesheet';
    link.href = 'src/exam_style.css?v=20261111_06';
    document.head.appendChild(link);
  }

  /**
   * Nạp từ điển Furigana on-demand
   */
  function ensureFuriganaMapLoaded() {
    if (root.EXAM_FURIGANA && typeof root.EXAM_FURIGANA === 'object') return Promise.resolve();
    if (root.NavigationEngine && typeof root.NavigationEngine.loadScriptAsync === 'function') {
      return root.NavigationEngine.loadScriptAsync('data/exam_furigana.js?v=20261111_06');
    }
    return new Promise((resolve) => {
      if (typeof document === 'undefined') return resolve();
      const s = document.createElement('script');
      s.src = 'data/exam_furigana.js?v=20261111_06';
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
  }

  /**
   * Nạp gói dữ liệu N5 hoặc N4 nếu chưa có trong RAM
   */
  function ensureExamDataLoaded(level) {
    const isN5 = level === 'N5';
    const hasData = isN5 
      ? (root.EXAMS_N5_DATA && Array.isArray(root.EXAMS_N5_DATA) && root.EXAMS_N5_DATA.length > 0)
      : (root.EXAMS_N4_DATA && Array.isArray(root.EXAMS_N4_DATA) && root.EXAMS_N4_DATA.length > 0);

    const promises = [ensureFuriganaMapLoaded(), ensureExamStylesLoaded()];

    if (hasData) {
      return Promise.all(promises);
    }

    const scriptUrl = isN5 ? 'data/exams_n5.js?v=20261111_06' : 'data/exams_n4.js?v=20261111_06';
    if (root.NavigationEngine && typeof root.NavigationEngine.loadScriptAsync === 'function') {
      promises.push(root.NavigationEngine.loadScriptAsync(scriptUrl));
      return Promise.all(promises);
    }

    promises.push(new Promise((resolve) => {
      if (typeof document === 'undefined') return resolve();
      const s = document.createElement('script');
      s.src = scriptUrl;
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    }));

    return Promise.all(promises);
  }

  /**
   * Lấy dữ liệu đầy đủ của một đề thi theo mã đề
   */
  function getExamByCode(code) {
    const norm = normalizeExamCode(code);
    const isN5 = norm.startsWith('N5');
    const source = isN5 ? (root.EXAMS_N5_DATA || []) : (root.EXAMS_N4_DATA || []);
    return source.find(e => e.code === norm) || null;
  }

  // Escape HTML an toàn
  function esc(str) {
    if (root.StorageEngine && typeof root.StorageEngine.escapeHtml === 'function') {
      return root.StorageEngine.escapeHtml(str);
    }
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * XỬ LÝ VĂN BẢN TIẾNG NHẬT: GẮN RUBY FURIGANA ĐỒNG BỘ
   * Tự động bao bọc các từ chứa Hán tự vào thẻ <ruby> có 3 lớp (.k-text, rt.r-text, .h-text)
   */
  let cachedFuriganaRegex = null;
  let cachedFuriganaKeys = 0;

  function getFuriganaRegex(fmap) {
    const keys = Object.keys(fmap);
    if (cachedFuriganaRegex && cachedFuriganaKeys === keys.length) {
      return cachedFuriganaRegex;
    }
    const sorted = keys.sort((a, b) => b.length - a.length || a.localeCompare(b));
    const pattern = sorted.map(s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
    cachedFuriganaRegex = new RegExp(pattern, 'g');
    cachedFuriganaKeys = keys.length;
    return cachedFuriganaRegex;
  }

  function renderJapaneseText(text) {
    if (!text || typeof text !== 'string') return '';
    const fmap = root.EXAM_FURIGANA || {};
    let str = text.normalize('NFKC');

    // 1. Bảo vệ các ký hiệu ô trống đề thi và định dạng đặc biệt
    const placeholders = [];
    let processed = str.replace(/【\s*\d+\s*】|[（(][\s\S]*?[)）]|＿＿＿|＿★＿|★|^\d+\.\s*/gm, (match) => {
      const idx = placeholders.length;
      placeholders.push(match);
      return `___PH_${idx}___`;
    });

    // 2. Thay thế các từ Hán tự theo thứ tự độ dài giảm dần bằng Single-Pass Regex
    if (Object.keys(fmap).length > 0) {
      const regex = getFuriganaRegex(fmap);
      processed = processed.replace(regex, (match) => {
        const h = fmap[match];
        if (!h) return match;
        return `<ruby class="furigana-ruby" data-kanji="${esc(match)}" data-hiragana="${esc(h)}"><span class="k-text">${esc(match)}</span><rt class="r-text">${esc(h)}</rt><span class="h-text">${esc(h)}</span></ruby>`;
      });
    }

    // 3. Phục hồi lại các ký hiệu đề thi
    for (let i = 0; i < placeholders.length; i++) {
      let ph = placeholders[i];
      if (/^【\s*\d+\s*】$/.test(ph.trim())) {
        ph = `<span class="passage-blank">${esc(ph)}</span>`;
      } else {
        ph = esc(ph);
      }
      processed = processed.replace(`___PH_${i}___`, ph);
    }

    return processed;
  }

  /**
   * Lược bỏ tiền tố số thứ tự lặp (ví dụ: "1. だれ" -> "だれ", "1 だれ" -> "だれ")
   * và khử các ký tự ngắt dòng vô tình xen lẫn giữa từ ngữ trong cơ sở dữ liệu.
   * Giữ lại một định dạng badge số duy nhất (choice-num).
   */
  function cleanOptionText(text) {
    if (!text) return '';
    return String(text)
      .replace(/^[0-9①-④A-Da-d]+[\.\:\s、\)\-]\s*/, '')
      .replace(/\r?\n\s*/g, '')
      .trim();
  }

  /**
   * Khởi động đồng hồ đếm ngược
   */
  function startTimer(examCode) {
    clearInterval(state.timerInterval); state.timerInterval = null;
    if (state.examMode !== 'timed') return;

    state.timerInterval = setInterval(() => {
      if (state.timeRemainingSeconds > 0) {
        state.timeRemainingSeconds--;
        updateTimerDisplay();
        if (state.timeRemainingSeconds === 0) {
          clearInterval(state.timerInterval); state.timerInterval = null;
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
          if (root.showToast) root.showToast('⏰ Đã hết 30 phút làm bài! Hệ thống đang tự động nộp bài...');
          ExamEngine.submitExam(examCode, true);
        }
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    if (typeof document !== 'undefined') {
      const runnerView = document.getElementById('examRunnerView');
      if (!runnerView || !document.body.classList.contains('exam-mode-active')) {
        removeMiniTimerWidget();
        return;
      }
    }

    const timerEls = document.querySelectorAll('.exam-timer-val');
    const timerBoxes = document.querySelectorAll('.hud-timer-box, .mini-timer-pill');
    if (!timerEls.length) return;

    if (state.examMode !== 'timed') {
      timerEls.forEach(el => { el.textContent = 'Tự do'; });
      timerBoxes.forEach(box => { box.classList.remove('timer-warning'); });
      return;
    }

    const m = Math.floor(state.timeRemainingSeconds / 60);
    const s = state.timeRemainingSeconds % 60;
    const str = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    timerEls.forEach(el => {
      el.textContent = str;
    });

    const isWarning = state.timeRemainingSeconds <= 300; // Dưới 5 phút
    timerBoxes.forEach(box => {
      box.classList.toggle('timer-warning', isWarning);
    });
  }

  /**
   * ĐỒNG HỒ MINI NỔI GẮN TRỰC TIẾP VÀO document.body
   * Đảm bảo không bao giờ bị cuộn mất bởi overflow của main-content hay transform của lesson-content
   * TUYỆT ĐỐI CHỈ XUẤT HIỆN KHI ĐANG LÀM BÀI THI (#examRunnerView & .exam-mode-active)
   */
  function ensureMiniTimerWidget(examCode) {
    if (typeof document === 'undefined') return null;
    removeMiniTimerWidget();
    return null;
  }

  function removeMiniTimerWidget() {
    if (typeof document === 'undefined') return;
    const widget = document.getElementById('examMiniTimerWidget');
    if (widget && widget.parentNode) {
      widget.parentNode.removeChild(widget);
    }
  }

  /**
   * GẮN BỘ LẮNG NGHE CUỘN TRANG CHO THANH TIMER STICKY
   * Khi cuộn trang, thanh runnerStickyHud luôn cố định sticky ở đỉnh màn hình
   */
  function setupStickyHudScrollObserver() {
    const handleScroll = () => {
      // KIỂM TRA TUYỆT ĐỐI: Chỉ xử lý khi đang ở trong màn hình làm bài thi (examRunnerView & exam-mode-active)
      const runnerView = document.getElementById('examRunnerView');
      const isExamActive = Boolean(document.body && document.body.classList.contains('exam-mode-active'));
      if (!runnerView || !isExamActive) {
        removeMiniTimerWidget();
        return;
      }

      const hud = document.getElementById('runnerStickyHud');
      removeMiniTimerWidget();
      if (!hud) return;

      const mainContent = document.getElementById('main-content') || document.querySelector('.main-content');
      const scrollY = (mainContent ? mainContent.scrollTop : 0) || (window.pageYOffset || document.documentElement.scrollTop || 0);

      if (hud) {
        if (scrollY > 20) {
          hud.classList.add('is-scrolled');
        } else {
          hud.classList.remove('is-scrolled');
        }
      }
    };

    const mainContent = document.getElementById('main-content') || document.querySelector('.main-content');
    if (mainContent && !mainContent._hasExamScrollListener) {
      mainContent._hasExamScrollListener = true;
      mainContent.addEventListener('scroll', handleScroll, { passive: true });
    }
    if (!window._hasExamScrollListener) {
      window._hasExamScrollListener = true;
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    handleScroll();
  }

  /**
   * Lấy lịch sử và kết quả thi từ StorageEngine
   */
  function getExamHistory() {
    if (root.StorageEngine && root.StorageEngine.KEYS) {
      return root.StorageEngine.secureGetJson(root.StorageEngine.KEYS.EXAM_HISTORY, []) || [];
    }
    try {
      const raw = localStorage.getItem('jlpt_exam_history');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveExamResultToStorage(result) {
    const history = getExamHistory();
    history.unshift(result);
    const trimmed = history.slice(0, 50);

    if (root.StorageEngine && root.StorageEngine.KEYS) {
      root.StorageEngine.secureSet(root.StorageEngine.KEYS.EXAM_HISTORY, JSON.stringify(trimmed));
      const bests = root.StorageEngine.secureGetJson(root.StorageEngine.KEYS.EXAM_BESTS, {}) || {};
      const curBest = bests[result.examCode] || 0;
      if (result.score > curBest) {
        bests[result.examCode] = result.score;
        root.StorageEngine.secureSet(root.StorageEngine.KEYS.EXAM_BESTS, JSON.stringify(bests));
      }
    } else {
      try {
        localStorage.setItem('jlpt_exam_history', JSON.stringify(trimmed));
      } catch (e) {}
    }
  }

  function getBestScores() {
    if (root.StorageEngine && root.StorageEngine.KEYS) {
      return root.StorageEngine.secureGetJson(root.StorageEngine.KEYS.EXAM_BESTS, {}) || {};
    }
    return {};
  }

  function getLeaderboard() {
    if (root.StorageEngine && root.StorageEngine.KEYS) {
      return root.StorageEngine.secureGetJson(root.StorageEngine.KEYS.EXAM_LEADERBOARD, [
        { name: 'Trần Minh Đức', score: 20, timeSeconds: 860, date: '2026-10-28', level: 'N5' },
        { name: 'Nguyễn Thu Hà', score: 20, timeSeconds: 965, date: '2026-10-29', level: 'N5' },
        { name: 'Lê Hoàng Nam', score: 19, timeSeconds: 910, date: '2026-10-30', level: 'N4' },
        { name: 'Phạm Quỳnh Chi', score: 19, timeSeconds: 1040, date: '2026-10-31', level: 'N5' },
        { name: 'Vũ Quốc Bảo', score: 18, timeSeconds: 1120, date: '2026-11-01', level: 'N4' }
      ]) || [];
    }
    return [];
  }

  function addLeaderboardEntry(entry) {
    const lb = getLeaderboard();
    lb.push(entry);
    lb.sort((a, b) => b.score - a.score || a.timeSeconds - b.timeSeconds);
    const top = lb.slice(0, 30);
    if (root.StorageEngine && root.StorageEngine.KEYS) {
      root.StorageEngine.secureSet(root.StorageEngine.KEYS.EXAM_LEADERBOARD, JSON.stringify(top));
    }
    return top;
  }

  /**
   * Quản lý phiên làm bài thi bị khóa chống gian lận (Anti-Cheat Locked Sessions)
   */
  function getLockedSessions() {
    if (root.StorageEngine && root.StorageEngine.KEYS) {
      return root.StorageEngine.secureGetJson(root.StorageEngine.KEYS.EXAM_LOCKED_SESSIONS, {}) || {};
    }
    try {
      const raw = localStorage.getItem('jlpt_exam_locked_sessions');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveLockedSessions(map) {
    if (root.StorageEngine && root.StorageEngine.KEYS) {
      root.StorageEngine.secureSet(root.StorageEngine.KEYS.EXAM_LOCKED_SESSIONS, JSON.stringify(map));
    } else {
      try {
        localStorage.setItem('jlpt_exam_locked_sessions', JSON.stringify(map));
      } catch (e) {}
    }
  }

  function isExamSessionLocked(examCode) {
    const code = normalizeExamCode(examCode);
    const locked = getLockedSessions();
    if (locked && locked[code] && locked[code].locked) {
      return locked[code];
    }
    return null;
  }

  function unlockExamSession(examCode) {
    const code = normalizeExamCode(examCode);
    const locked = getLockedSessions();
    if (locked && locked[code]) {
      delete locked[code];
      saveLockedSessions(locked);
    }
  }

  /**
   * Đảm bảo truyền dữ liệu nộp bài tin cậy qua navigator.sendBeacon() hoặc fetch keepalive: true
   */
  function transmitExamSubmissionBeacon(payload) {
    const url = '/api/exam/submit';
    const jsonStr = JSON.stringify(payload);
    let sent = false;

    // 1. Phương thức chính: navigator.sendBeacon() với Blob application/json
    try {
      if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
        const blob = (typeof Blob !== 'undefined') ? new Blob([jsonStr], { type: 'application/json' }) : jsonStr;
        sent = navigator.sendBeacon(url, blob);
      }
    } catch (e) {
      sent = false;
    }

    // 2. Phương thức dự phòng: fetch với keepalive: true (đảm bảo gói tin không bị drop khi tắt tab)
    if (!sent && typeof fetch === 'function') {
      try {
        fetch(url, {
          method: 'POST',
          body: jsonStr,
          headers: { 'Content-Type': 'application/json' },
          keepalive: true
        }).catch(() => {});
        sent = true;
      } catch (e) {}
    }

    return sent;
  }

  function getVietnameseExitReason(reason) {
    switch (reason) {
      case 'user_exit_internal_nav':
        return 'Bấm nút Thoát ra Hub hoặc điều hướng nội bộ';
      case 'browser_nav_back_forward':
        return 'Thao tác điều hướng trình duyệt (nút Back/Forward/đổi URL)';
      case 'visibility_hidden_app_switch':
        return 'Chuyển sang ứng dụng khác trên điện thoại hoặc ẩn trình duyệt';
      case 'pagehide_tab_closed':
        return 'Đóng tab hoặc tắt trình duyệt';
      case 'beforeunload':
        return 'Tải lại trang hoặc đóng cửa sổ';
      default:
        return 'Rời khỏi giao diện làm bài thi';
    }
  }

  /**
   * TỰ ĐỘNG ĐÓNG BÀI THI & NỘP BÀI KHI RỜI GIAO DIỆN (ANTI-CHEAT AUTO SUBMIT)
   */
  function autoSubmitOnExit(examCode, reason) {
    const code = normalizeExamCode(examCode);
    if (!code) return null;
    if (state.submittedExams[code] || state.isAutoSubmitting) {
      return state.submittedExams[code] || null;
    }

    state.isAutoSubmitting = true;

    // 1. Dừng ngay lập tức đồng hồ đếm ngược
    if (state.timerInterval) {
      clearInterval(state.timerInterval); state.timerInterval = null;
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
      state.timerInterval = null;
    }
    removeMiniTimerWidget();
    state.isBarCollapsed = false;

    const exam = state.activeExamData || getExamByCode(code);
    const answers = state.userAnswers[code] || {};

    // 2. Chấm điểm: toàn bộ đáp án đã tích chọn tính đến thời điểm thoát; các câu chưa chọn tính 0 điểm
    let correctCount = 0;
    if (exam && Array.isArray(exam.questions)) {
      exam.questions.forEach(q => {
        if (answers[q.id] === q.correct) {
          correctCount++;
        }
      });
    }

    const elapsedSeconds = state.examMode === 'timed' 
      ? (1800 - state.timeRemainingSeconds) 
      : 900;

    const sessionId = state.activeSessionId || `sess_${code}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

    const resultObj = {
      examCode: code,
      sessionId,
      level: exam ? exam.level : (code.startsWith('N5') ? 'N5' : 'N4'),
      score: correctCount,
      total: 20,
      timeSeconds: Math.max(10, elapsedSeconds),
      date: new Date().toISOString().split('T')[0],
      status: 'SUBMITTED',
      locked: true,
      reason: reason || 'exit_trigger',
      autoSubmitted: true,
      submittedAt: Date.now(),
      answers
    };

    // 3. Ghi nhận kết quả và khóa phiên trên database/storage
    state.submittedExams[code] = resultObj;
    saveExamResultToStorage(resultObj);

    const lockedMap = getLockedSessions();
    lockedMap[code] = resultObj;
    saveLockedSessions(lockedMap);

    // 4. Đảm bảo truyền dữ liệu lên server bằng sendBeacon() hoặc fetch keepalive: true
    transmitExamSubmissionBeacon({
      sessionId,
      examCode: code,
      status: 'SUBMITTED',
      locked: true,
      reason: reason || 'exit_trigger',
      answers,
      clientScore: correctCount,
      timestamp: Date.now()
    });

    state.isAutoSubmitting = false;

    // 5. Cập nhật giao diện sang trạng thái đã khóa & đã nộp nếu vẫn đang ở màn hình làm bài
    if (typeof document !== 'undefined') {
      const runnerView = document.getElementById('examRunnerView');
      const container = document.getElementById('lesson-content');
      if (runnerView && container && state.activeExamCode === code) {
        ExamEngine.renderRunnerUI(container, exam, true);
      }
    }

    return resultObj;
  }

  // =========================================================================
  // EXAM ENGINE CORE OBJECT
  // =========================================================================
  const ExamEngine = {
    state,
    ICONS: EXAM_ICONS,

    render(container, routeId) {
      ensureExamStylesLoaded();
      initFuriganaState();
      if (!container) return;

      const norm = routeId ? String(routeId).trim() : 'exam';
      if (norm === 'exam' || norm === 'exam-hub' || norm === 'de-thi') {
        ExamEngine.renderHub(container);
      } else {
        const code = normalizeExamCode(norm);
        ExamEngine.renderRunner(container, code);
      }
    },

    /**
     * MÀN HÌNH 1: EXAM HUB & DASHBOARD
     */
    renderHub(container) {
      if (typeof document !== 'undefined' && document.body) {
        document.body.classList.remove('exam-mode-active');
      }
      clearInterval(state.timerInterval); state.timerInterval = null;
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
      state.activeExamCode = null;
      removeMiniTimerWidget();

      const manifest = root.EXAMS_MANIFEST || { exams: [] };
      const allExams = manifest.exams || [];
      const bests = getBestScores();
      const history = getExamHistory();
      const leaderboard = getLeaderboard();

      const n5Exams = allExams.filter(e => e.level === 'N5');
      const n4Exams = allExams.filter(e => e.level === 'N4');

      const currentList = (state.currentLevel === 'N5' ? n5Exams : n4Exams).filter(e => {
        if (!state.filterQuery) return true;
        const q = state.filterQuery.toLowerCase();
        return e.code.toLowerCase().includes(q) || 
               e.title.toLowerCase().includes(q) ||
               (e.minnaLesson && e.minnaLesson.includes(q));
      });

      const n5Done = n5Exams.filter(e => bests[e.code] !== undefined).length;
      const n4Done = n4Exams.filter(e => bests[e.code] !== undefined).length;

      let html = `
        <div class="exam-hub-container">
          <!-- 1. Hero Banner phong cách Wa-Modern -->
          <div class="exam-hero-card">
            <div class="exam-hero-badge">
              <span class="zen-pulse-dot"></span>
              <span>TRUNG TÂM KHẢO THÍ &amp; LUYỆN ĐỀ JLPT CHUẨN QUỐC TẾ</span>
            </div>
            <h1 class="exam-hero-title">
              <span class="exam-hero-jp">日本語能力試験 • 模擬試験</span>
              <span class="exam-hero-vi">50 Đề Thi Ngữ Pháp &amp; Đọc Điền JLPT N5 &amp; N4</span>
            </h1>

            <div class="exam-hero-stats">
              <div class="exam-stat-chip ${state.currentLevel === 'N5' ? 'active' : ''}" 
                   onclick="window.ExamEngine.switchLevel('N5')"
                   onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.ExamEngine.switchLevel('N5');}"
                   role="button" 
                   tabindex="0" 
                   title="Xem danh sách 25 đề JLPT N5">
                <span class="stat-badge">JLPT N5</span>
                <span class="stat-info">25 Đề (Bài 1–25) • Đã làm: <strong>${n5Done}/25</strong></span>
              </div>
              <div class="exam-stat-chip ${state.currentLevel === 'N4' ? 'active' : ''}" 
                   onclick="window.ExamEngine.switchLevel('N4')"
                   onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.ExamEngine.switchLevel('N4');}"
                   role="button" 
                   tabindex="0" 
                   title="Xem danh sách 25 đề JLPT N4">
                <span class="stat-badge accent-indigo">JLPT N4</span>
                <span class="stat-info">25 Đề (Bài 26–50) • Đã làm: <strong>${n4Done}/25</strong></span>
              </div>
            </div>
          </div>

          <!-- 2. Khu vực Lịch Sử Thi Gần Đây -->
          <div class="exam-widgets-grid">
            <!-- Lịch Sử Thi Gần Đây -->
            <div class="exam-widget-card history-widget">
              <div class="widget-header">
                <div class="widget-title">
                  <span class="widget-icon">${EXAM_ICONS.history}</span>
                  <h3>Lịch Sử Thi Gần Đây Của Bạn</h3>
                </div>
                <span class="widget-tag">${history.length} lượt thi</span>
              </div>
              <div class="history-list">
                ${history.length === 0 ? `
                  <div class="empty-history-tip">
                    <p>Bạn chưa làm đề thi nào.</p>
                    <span>Hãy chọn một đề thi bên dưới để bắt đầu thử sức và kiểm tra kết quả!</span>
                  </div>
                ` : history.slice(0, 4).map(h => {
                  const isPass = h.score >= 12;
                  return `
                    <div class="history-item">
                      <div class="hist-left">
                        <span class="hist-code">${h.examCode}</span>
                        <span class="hist-date">${h.date || ''}</span>
                      </div>
                      <div class="hist-right">
                        <span class="hist-status ${isPass ? 'pass' : 'fail'}">${isPass ? 'ĐẠT ✓' : 'CHƯA ĐẠT'}</span>
                        <strong class="hist-score">${h.score}/20</strong>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- 3. Danh Sách Thẻ Đề Thi (Bento Cards Grid) -->
          <div class="exam-section-heading">
            <div class="section-title-wrap">
              <span class="section-badge">${state.currentLevel}</span>
              <h2>Danh Sách Đề Thi ${state.currentLevel} (${currentList.length} Đề Phù Hợp)</h2>
            </div>
          </div>

          <div class="exam-cards-grid">
            ${currentList.map(ex => {
              const best = bests[ex.code];
              const isDone = best !== undefined;
              const cleanTitle = ex.title.replace(/^Đề\s+[Nn][45]-\d+:\s*/, '').split('—')[0].trim();

              return `
                <article class="exam-card ${isDone ? 'is-completed' : ''}" id="card-${ex.code}">
                  <div class="exam-card-top">
                    <span class="exam-level-tag ${ex.level === 'N5' ? 'tag-n5' : 'tag-n4'}">${ex.code}</span>
                    ${isDone ? `
                      <span class="exam-status-tag done">Điểm cao: ${best}/20 ✓</span>
                    ` : `
                      <span class="exam-status-tag new">Chưa làm</span>
                    `}
                  </div>

                  <h3 class="exam-card-title jp-text">${renderJapaneseText(cleanTitle)}</h3>
                  
                  <div class="exam-card-meta">
                    <span class="meta-item">
                      ${EXAM_ICONS.book}
                      ${ex.minnaLesson ? 'Minna ' + esc(ex.minnaLesson) : 'Tổng hợp'}
                    </span>
                    <span class="meta-item">
                      ${EXAM_ICONS.clock}
                      30 phút • 20 câu
                    </span>
                  </div>

                  <div class="exam-card-actions">
                    <button type="button" class="btn-start-exam" onclick="window.ExamEngine.startExam('${ex.code}')">
                      ${isDone ? EXAM_ICONS.refresh : EXAM_ICONS.play}
                      <span>${isDone ? 'Thi Lại Đề Này' : 'Bắt Đầu Làm Bài'}</span>
                    </button>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      `;

      container.innerHTML = html;
      container.scrollTop = 0;
    },

    /**
     * MÀN HÌNH 2: EXAM RUNNER SCREEN
     */
    renderRunner(container, examCode) {
      if (typeof document !== 'undefined' && document.body) {
        document.body.classList.add('exam-mode-active');
      }
      const code = normalizeExamCode(examCode);
      const isN5 = code.startsWith('N5');
      const level = isN5 ? 'N5' : 'N4';

      const mainContent = document.getElementById('main-content') || document.querySelector('.main-content');
      if (mainContent) mainContent.scrollTop = 0;
      if (typeof window !== 'undefined') window.scrollTo(0, 0);

      container.innerHTML = `
        <div class="exam-loading-box">
          <div class="exam-spinner"></div>
          <p>Đang chuẩn bị đề thi ${code} và hệ thống phiên âm Furigana...</p>
        </div>
      `;

      ensureExamDataLoaded(level).then(() => {
        const exam = getExamByCode(code);
        if (!exam) {
          container.innerHTML = `
            <div class="exam-error-card">
              <h3>Không tìm thấy đề thi ${esc(code)}</h3>
              <p>Đề thi này không tồn tại hoặc dữ liệu chưa được cập nhật.</p>
              <button class="btn-back-hub" onclick="window.switchModule('exam')">
                ${EXAM_ICONS.arrowLeft}
                <span>Quay lại danh sách đề thi</span>
              </button>
            </div>
          `;
          return;
        }

        state.activeExamCode = code;
        state.activeExamData = exam;

        // KIỂM TRA KHÓA PHIÊN (ANTI-CHEAT LOCK GUARD):
        // Ngăn chặn việc người dùng dùng phím Back hoặc mở lại link để tiếp tục làm bài cũ
        const lockedRec = isExamSessionLocked(code);
        if (lockedRec) {
          state.submittedExams[code] = lockedRec;
          state.activeSessionId = lockedRec.sessionId;
          if (lockedRec.answers) {
            state.userAnswers[code] = Object.assign({}, lockedRec.answers);
          }
          state.timeRemainingSeconds = 0;
          clearInterval(state.timerInterval); state.timerInterval = null;
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
          state.timerInterval = null;
          removeMiniTimerWidget();

          const lessonEl = document.getElementById('lesson-content');
          if (lessonEl) {
            lessonEl.style.transform = 'none';
            lessonEl.style.willChange = 'auto';
          }
          if (typeof document !== 'undefined' && document.body) {
            document.body.classList.add('exam-mode-active');
          }

          ExamEngine.renderRunnerUI(container, exam, true);
          setupStickyHudScrollObserver();

          if (mainContent) mainContent.scrollTop = 0;
          if (typeof window !== 'undefined') window.scrollTo(0, 0);
          return;
        }

        state.activeSessionId = `sess_${code}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
        if (!state.userAnswers[code]) state.userAnswers[code] = {};
        state.timeRemainingSeconds = 1800; // Reset 30 phút

        const isSub = Boolean(state.submittedExams[code]);
        state.isBarCollapsed = (Object.keys(state.userAnswers[code] || {}).length > 0 && !isSub);
        if (!isSub && state.examMode === 'timed') {
          startTimer(code);
        }

        const lessonEl = document.getElementById('lesson-content');
        if (lessonEl) {
          lessonEl.style.transform = 'none';
          lessonEl.style.willChange = 'auto';
        }

        if (typeof document !== 'undefined' && document.body) {
          document.body.classList.add('exam-mode-active');
        }

        ExamEngine.renderRunnerUI(container, exam, isSub);
        setupStickyHudScrollObserver();

        if (mainContent) mainContent.scrollTop = 0;
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
      });
    },

    renderRunnerUI(container, exam, isSubmitted) {
      if (!container || !exam || !Array.isArray(exam.questions)) return;
      const code = exam.code;
      const answers = state.userAnswers[code] || {};
      const answeredCount = Object.keys(answers).length;
      const isCollapsed = Boolean(state.isBarCollapsed && !isSubmitted);
      const isAutoAdvance = ExamEngine.isAutoAdvanceEnabled();

      let html = `
        <div class="exam-runner-container" id="examRunnerView">
          <!-- Thanh điều khiển tối giản (Minimal Sticky Bar) -->
          <div class="runner-unified-bar ${isCollapsed ? 'is-collapsed' : ''}" id="runnerStickyHud">
            <div class="runner-bar-main-row">
              <div class="runner-bar-left">
                <button type="button" class="btn-nav-back" onclick="window.ExamEngine.exitExam()" title="Thoát ra Hub">
                  ${EXAM_ICONS.arrowLeft}
                </button>
                <span class="runner-code-pill">${exam.code}</span>
              </div>

              <div class="runner-bar-right">
                <!-- Đồng hồ đếm ngược -->
                <div class="hud-timer-badge hud-timer-box ${state.timeRemainingSeconds <= 300 ? 'timer-warning' : ''}" 
                     id="examCountdownBox"
                     onclick="window.ExamEngine.toggleExamMode('${code}')"
                     title="Nhấn để đổi chế độ bấm giờ / tự do">
                  <span class="hud-timer-icon">${EXAM_ICONS.clock}</span>
                  <strong class="hud-timer-val exam-timer-val" id="examCountdownText">
                    ${state.examMode === 'timed' ? '30:00' : 'Tự do'}
                  </strong>
                </div>

                <!-- Tiến độ rút gọn -->
                <strong class="runner-progress-val" id="hudAnsweredCount">${answeredCount}/20</strong>

                <!-- Nút Nộp Bài / Thi Lại -->
                <div class="hud-actions">
                  ${isSubmitted ? `
                    <button type="button" class="btn-hud-reset btn-icon-only" onclick="window.ExamEngine.resetExam('${code}')" title="Thi lại đề này" aria-label="Thi lại đề này">
                      ${EXAM_ICONS.refresh}
                    </button>
                  ` : `
                    <button type="button" class="btn-hud-autoadvance btn-autoadvance btn-icon-only ${isAutoAdvance ? 'active' : ''}" id="btnExamAutoAdvance" onclick="window.ExamEngine.toggleAutoAdvance()" title="Tự động chuyển câu khi chọn đáp án (${isAutoAdvance ? 'Đang BẬT' : 'Đang TẮT'})" aria-label="Tự động chuyển câu hỏi">
                      ${EXAM_ICONS.zap}
                      <span class="sr-only">Tự chuyển</span>
                    </button>
                    <button type="button" class="btn-hud-submit btn-icon-only" id="btnExamSubmit" onclick="window.ExamEngine.submitExam('${code}')" title="Nộp bài và xem kết quả" aria-label="Nộp bài">
                      ${EXAM_ICONS.check}
                      <span class="sr-only">Nộp bài</span>
                    </button>
                  `}
                </div>
              </div>
            </div>
            <!-- runner-mobile-title-row (ẩn bằng CSS, giữ lại cho tương thích) -->
            <div class="runner-mobile-title-row"></div>
          </div>

          <!-- 2. WIDGET MINI NỔI GÓC TRÊN BÊN PHẢI (gắn trực tiếp document.body qua ensureMiniTimerWidget) -->

          <!-- 3. Khu Vực Hiển Thị Kết Quả Sau Khi Nộp Bài (Nếu đã nộp) -->
          <div id="examResultBanner" class="exam-result-banner ${isSubmitted ? 'show' : ''}">
            ${isSubmitted ? ExamEngine.buildResultBannerHtml(code) : ''}
          </div>

          <!-- 4. Danh Sách Câu Hỏi -->
          <div class="exam-questions-flow" id="examQuestionsFlow">
            <div class="mondai-group-header">
              <span class="mondai-group-badge">PHẦN I</span>
              <h3>Ngữ Pháp Câu Đơn &amp; Sắp Xếp Dấu Sao ★ (Câu 1 – 15)</h3>
            </div>

            ${exam.questions.slice(0, 15).map(q => ExamEngine.buildQuestionCardHtml(q, code, isSubmitted, answers[q.id])).join('')}

            <div class="mondai-group-header" style="margin-top: 40px;">
              <span class="mondai-group-badge accent-sakura">PHẦN II</span>
              <h3>Ngữ Pháp Trong Đoạn Văn Điền Khuyết (Câu 16 – 20)</h3>
            </div>

            <!-- Khối Đoạn Văn & Câu Hỏi Mondai 3 (Split-Passage Desktop & Drawer Mobile) -->
            ${exam.passage ? `
              <div class="exam-mondai3-layout">
                <div class="exam-mondai3-passage-col">
                  <div class="passage-card jp-text" id="mondaiPassageCard">
                    <div class="passage-header-bar">
                      <div class="passage-title">
                        <span class="passage-icon">${EXAM_ICONS.book}</span>
                        <span>ĐOẠN VĂN BÀI ĐỌC (Mondai 3)</span>
                      </div>
                      <span class="passage-badge">Điền vào 5 ô trống: 【 16 】 – 【 20 】</span>
                    </div>
                    <div class="passage-content" id="mondaiPassageContent">
                      ${renderJapaneseText(exam.passage)}
                    </div>
                  </div>
                </div>
                <div class="exam-mondai3-questions-col">
                  ${exam.questions.slice(15, 20).map(q => ExamEngine.buildQuestionCardHtml(q, code, isSubmitted, answers[q.id])).join('')}
                </div>
              </div>
            ` : `
              ${exam.questions.slice(15, 20).map(q => ExamEngine.buildQuestionCardHtml(q, code, isSubmitted, answers[q.id])).join('')}
            `}

            ${exam.passage && !isSubmitted ? `
              <!-- Nút Nổi Mở Nhanh Đoạn Văn Trên Mobile (Mondai 3) -->
              <button type="button" class="btn-exam-passage-drawer-toggle" id="btnExamPassageDrawer" onclick="window.ExamEngine.togglePassageDrawer(true)" aria-label="Xem lại đoạn văn bài đọc Mondai 3" title="Xem đoạn văn">
                <span class="passage-drawer-btn-icon">${EXAM_ICONS.book}</span>
                <span class="passage-drawer-btn-text">Xem Đoạn Văn</span>
              </button>

              <!-- Bottom Sheet Drawer Xem Lại Đoạn Văn Mobile -->
              <div id="examPassageDrawerModal" class="exam-passage-drawer-backdrop" onclick="window.ExamEngine.togglePassageDrawer(false)" aria-hidden="true">
                <div class="exam-passage-drawer-sheet" onclick="event.stopPropagation()">
                  <div class="passage-drawer-sheet-header">
                    <div class="passage-drawer-sheet-title">
                      <span class="drawer-header-icon">${EXAM_ICONS.book}</span>
                      <span>Đoạn Văn Bài Đọc (Câu 16 – 20)</span>
                    </div>
                    <button type="button" class="btn-passage-drawer-close" onclick="window.ExamEngine.togglePassageDrawer(false)" aria-label="Đóng">&times;</button>
                  </div>
                  <div class="passage-drawer-sheet-body jp-text">
                    ${renderJapaneseText(exam.passage)}
                  </div>
                </div>
              </div>
            ` : ''}

            ${!isSubmitted ? `
              <div class="exam-bottom-submit-card" id="examBottomSubmitCard">
                <div class="bottom-submit-info">
                  <h4 class="bottom-submit-title">Hoàn thành Đề Thi JLPT ${exam.code}</h4>
                  <p class="bottom-submit-desc">Bạn đã trả lời được <strong id="bottomAnsweredCount">${answeredCount}</strong>/20 câu hỏi. Sẵn sàng nộp bài để xem điểm số &amp; giải thích?</p>
                </div>
                <button type="button" class="btn-exam-bottom-submit" onclick="window.ExamEngine.submitExam('${code}')" title="Nộp bài và nhận đánh giá năng lực">
                  ${EXAM_ICONS.check}
                  <span>Nộp Bài &amp; Xem Kết Quả</span>
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      `;

      container.innerHTML = html;
      if (!isSubmitted) {
        ensureMiniTimerWidget(code);
      } else {
        removeMiniTimerWidget();
      }
      updateTimerDisplay();
      const mainContent = document.getElementById('main-content') || document.querySelector('.main-content');
      if (mainContent) mainContent.scrollTop = 0;
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
      container.scrollTop = 0;
    },

    buildQuestionCardHtml(q, examCode, isSubmitted, userChoice) {
      let statusBadge = '';
      if (isSubmitted) {
        if (userChoice === q.correct) {
          statusBadge = `<span class="q-result-tag correct">${EXAM_ICONS.check} Đúng</span>`;
        } else if (userChoice !== undefined) {
          statusBadge = `<span class="q-result-tag wrong">${EXAM_ICONS.alert} Sai</span>`;
        } else {
          statusBadge = `<span class="q-result-tag unanswered">Chưa làm</span>`;
        }
      }

      let mLabel = 'Mondai ' + q.mondai;
      if (q.mondai === 2) mLabel += ' (Dấu sao ★)';
      if (q.mondai === 3) mLabel += ' (Điền đoạn văn)';

      let prompt = q.question;
      if (q.mondai === 3 && /^【\s*\d+\s*】$/.test(q.question.trim())) {
        prompt = 'Chọn từ thích hợp điền vào vị trí ô trống ' + q.question.trim() + ' trong đoạn văn trên:';
      }

      return `
        <article class="exam-question-card ${isSubmitted ? 'results-mode' : ''}" id="q-card-${q.id}">
          <div class="q-card-header">
            <div class="q-card-left">
              <span class="q-num-badge">Câu ${q.id}</span>
              <span class="q-mondai-badge">${mLabel}</span>
            </div>
            ${statusBadge}
          </div>

          <div class="q-prompt-text jp-text">${renderJapaneseText(prompt)}</div>

          <div class="q-options-grid">
            ${q.options.map((opt, idx) => {
              const optNum = idx + 1;
              const isSelected = userChoice === optNum;
              let optClass = 'option-choice-btn';
              if (isSelected) optClass += ' selected';

              if (isSubmitted) {
                if (optNum === q.correct) {
                  optClass += ' is-correct';
                } else if (isSelected && optNum !== q.correct) {
                  optClass += ' is-wrong';
                }
              }

              const cleanedOpt = cleanOptionText(opt);

              return `
                <label class="${optClass}" onclick="window.ExamEngine.selectOption('${examCode}', ${q.id}, ${optNum}, event)">
                  <input type="radio" 
                         name="q_${examCode}_${q.id}" 
                         value="${optNum}" 
                         ${isSelected ? 'checked' : ''} 
                         ${isSubmitted ? 'disabled' : ''} 
                         class="option-radio-native">
                  <span class="choice-num">${optNum}</span>
                  <span class="choice-text jp-text">${renderJapaneseText(cleanedOpt)}</span>
                </label>
              `;
            }).join('')}
          </div>

          ${isSubmitted ? `
            <div class="q-explanation-box">
              <div class="exp-correct-heading">
                <span class="exp-icon">${EXAM_ICONS.lightbulb}</span>
                <span>Đáp án đúng: <strong>${q.correct} (${esc(q.correctText)})</strong></span>
              </div>
              <div class="exp-body">
                <strong>Phân tích ngữ pháp:</strong> ${renderJapaneseText(q.explanation)}
              </div>
            </div>
          ` : ''}
        </article>
      `;
    },

    buildResultBannerHtml(examCode) {
      const res = state.submittedExams[examCode];
      if (!res) return '';

      const isPass = res.score >= 12;
      const pct = Math.round((res.score / 20) * 100);
      const m = Math.floor(res.timeSeconds / 60);
      const s = res.timeSeconds % 60;
      const timeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

      const isLocked = Boolean(res.locked || res.autoSubmitted);
      const lockedHtml = isLocked ? `
        <div class="exam-locked-notice">
          <div class="locked-icon-badge">${EXAM_ICONS.alert}</div>
          <div class="locked-text-wrap">
            <h4 class="locked-heading">PHIÊN THI ĐÃ BỊ ĐÓNG & KHÓA (ANTI-CHEAT SESSION LOCK)</h4>
            <p class="locked-desc">
              Hệ thống giám sát thi tự động ghi nhận bạn đã rời khỏi giao diện làm bài (${esc(getVietnameseExitReason(res.reason))}). 
              Toàn bộ bài thi đã được tự động kết thúc và nộp tính điểm ở thời điểm thoát. Các câu chưa chọn tính là 0 điểm.
            </p>
            <div class="locked-meta-row">
              <span class="locked-meta-item">Mã phiên: <code>${esc(res.sessionId || 'SESSION-LOCK')}</code></span>
              <span class="locked-meta-item">Trạng thái: <strong class="text-danger">SUBMITTED (Nộp do thoát giao diện)</strong></span>
              <span class="locked-meta-item">Điểm ghi nhận: <strong>${res.score}/20 câu</strong></span>
            </div>
          </div>
        </div>
      ` : '';

      return `
        ${lockedHtml}
        <div class="result-banner-card ${isPass ? 'pass-theme' : 'fail-theme'}">
          <div class="result-ring-column">
            <div class="zen-score-ring">
              <span class="ring-score-num">${res.score}</span>
              <span class="ring-total">/ 20 câu</span>
            </div>
            <span class="ring-pct-tag">${pct}%</span>
          </div>

          <div class="result-info-column">
            <div class="result-status-badge ${isPass ? 'pass' : 'fail'}">
              ${isPass ? `${EXAM_ICONS.check} 合格 • ĐẠT CHUẨN JLPT` : `${EXAM_ICONS.alert} 不合格 • CHƯA ĐẠT CHUẨN`}
            </div>
            <h3 class="result-title">
              ${isPass ? 'Chúc mừng bạn đã hoàn thành xuất sắc đề thi!' : 'Cần ôn luyện thêm các cấu trúc ngữ pháp còn sai.'}
            </h3>
            <div class="result-metrics-row">
              <span class="metric-item">${EXAM_ICONS.clock} Thời gian: <strong>${timeStr}</strong></span>
              <span class="metric-item">${EXAM_ICONS.check} Đúng: <strong>${res.score}/20</strong></span>
              <span class="metric-item">Sai: <strong>${20 - res.score}/20</strong></span>
            </div>
          </div>
        </div>
      `;
    },

    // =======================================================================
    // TƯƠNG TÁC NGƯỜI DÙNG & CHUYỂN ĐỔI CHẾ ĐỘ
    // =======================================================================
    toggleFuriganaMode() {
      if (state.furiganaMode === 'on') {
        state.furiganaMode = 'hide';
        if (root.showToast) root.showToast('Đã ẩn Furigana (Chạm hoặc rê chuột lên chữ Hán để xem)');
      } else if (state.furiganaMode === 'hide') {
        state.furiganaMode = 'hiragana';
        if (root.showToast) root.showToast('Đã chuyển toàn bộ chữ Hán sang Hiragana tương ứng');
      } else {
        state.furiganaMode = 'on';
        if (root.showToast) root.showToast('Đã bật hiển thị đầy đủ chữ Hán kèm Furigana');
      }

      applyFuriganaClassesToBody();
      ExamEngine.updateFuriganaButtonLabel();

      if (root.StorageEngine) {
        root.StorageEngine.safeSet('minna_furigana_setting', state.furiganaMode);
      }
    },

    updateFuriganaButtonLabel() {
      const label = document.getElementById('examFuriganaLabel');
      const btn = document.getElementById('examFuriganaToggleBtn');
      if (!label) return;

      if (state.furiganaMode === 'on') {
        label.textContent = 'Furigana: BẬT';
        if (btn) btn.classList.add('active');
      } else if (state.furiganaMode === 'hide') {
        label.textContent = 'Chỉ hiện Hán tự';
        if (btn) btn.classList.remove('active');
      } else if (state.furiganaMode === 'hiragana') {
        label.textContent = 'Thuần Hiragana';
        if (btn) btn.classList.add('active');
      }
    },

    syncFuriganaState() {
      if (typeof document === 'undefined' || !document.body) return;
      if (document.body.classList.contains('kanji-as-hiragana')) {
        state.furiganaMode = 'hiragana';
      } else if (document.body.classList.contains('hide-furigana')) {
        state.furiganaMode = 'hide';
      } else {
        state.furiganaMode = 'on';
      }
      ExamEngine.updateFuriganaButtonLabel();
    },

    selectOption(examCode, qId, optNum, evt) {
      if (evt && evt.preventDefault) evt.preventDefault();
      if (state.submittedExams[examCode]) return;

      if (!state.userAnswers[examCode]) state.userAnswers[examCode] = {};
      state.userAnswers[examCode][qId] = optNum;

      // 1. TRẠNG THÁI KÍCH HOẠT: Khi bắt đầu click chọn đáp án đầu tiên, tự động co thanh công cụ thành mini widget nổi
      if (!state.isBarCollapsed) {
        ExamEngine.collapseBar();
      }

      const card = document.getElementById(`q-card-${qId}`);
      if (card) {
        card.querySelectorAll('.option-choice-btn').forEach((btn, idx) => {
          btn.classList.toggle('selected', (idx + 1) === optNum);
          const radio = btn.querySelector('input[type="radio"]');
          if (radio) radio.checked = (idx + 1) === optNum;
        });
      }

      const count = Object.keys(state.userAnswers[examCode]).length;
      const countEl = document.getElementById('hudAnsweredCount');
      if (countEl) countEl.textContent = `${count}/20`;
      const bottomCountEl = document.getElementById('bottomAnsweredCount');
      if (bottomCountEl) bottomCountEl.textContent = count;

      if (root.triggerHaptic) root.triggerHaptic(15);

      // 2. TỰ ĐỘNG CHUYỂN CÂU HỎI (SMART AUTO-ADVANCE)
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
      if (ExamEngine.isAutoAdvanceEnabled()) {
        state.autoAdvanceTimeout = setTimeout(() => {
          ExamEngine.triggerAutoAdvance(examCode, qId);
        }, 450);
      }
    },

    submitExam(examCode, isAuto = false) {
      const code = normalizeExamCode(examCode);
      if (state.submittedExams[code]) return;

      const exam = state.activeExamData || getExamByCode(code);
      if (!exam) return;

      const answers = state.userAnswers[code] || {};
      const count = Object.keys(answers).length;

      if (!isAuto && count < 20) {
        const confirmMsg = `Bạn mới trả lời ${count}/20 câu hỏi.\nBạn có chắc chắn muốn nộp bài để xem điểm và đáp án ngay không?`;
        if (typeof confirm === 'function' && !confirm(confirmMsg)) return;
      }

      const bCard = document.getElementById('examBottomSubmitCard');
      if (bCard) bCard.style.display = 'none';
      const drawerBtn = document.getElementById('btnExamPassageDrawer');
      if (drawerBtn) drawerBtn.style.display = 'none';
      ExamEngine.togglePassageDrawer(false);

      if (typeof document !== 'undefined' && document.body) {
        document.body.classList.remove('exam-mode-active');
      }
      clearInterval(state.timerInterval); state.timerInterval = null;
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
      state.isBarCollapsed = false;
      removeMiniTimerWidget();

      let correctCount = 0;
      exam.questions.forEach(q => {
        if (answers[q.id] === q.correct) correctCount++;
      });

      const elapsedSeconds = state.examMode === 'timed' 
        ? (1800 - state.timeRemainingSeconds) 
        : 900;

      const sessionId = state.activeSessionId || `sess_${code}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      const resultObj = {
        examCode: code,
        sessionId,
        level: exam.level,
        score: correctCount,
        total: 20,
        timeSeconds: Math.max(10, elapsedSeconds),
        date: new Date().toISOString().split('T')[0],
        status: 'SUBMITTED',
        locked: true,
        reason: isAuto ? 'timer_timeout' : 'user_manual_submit',
        answers
      };

      state.submittedExams[code] = resultObj;
      saveExamResultToStorage(resultObj);

      const lockedMap = getLockedSessions();
      lockedMap[code] = resultObj;
      saveLockedSessions(lockedMap);

      transmitExamSubmissionBeacon({
        sessionId,
        examCode: code,
        status: 'SUBMITTED',
        locked: true,
        reason: resultObj.reason,
        answers,
        clientScore: correctCount,
        timestamp: Date.now()
      });

      const container = document.getElementById('lesson-content');
      if (container) {
        ExamEngine.renderRunnerUI(container, exam, true);
        const mainContent = document.getElementById('main-content') || document.querySelector('.main-content');
        if (mainContent) mainContent.scrollTop = 0;
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
      }

      if (root.showToast) {
        root.showToast(`🎉 Nộp bài thành công! Bạn đạt ${correctCount}/20 câu (${Math.round((correctCount / 20) * 100)}%).`);
      }
    },

    resetExam(examCode) {
      const code = normalizeExamCode(examCode);
      if (typeof confirm === 'function') {
        if (!confirm(`Bạn có muốn xóa toàn bộ kết quả của ${code} để làm lại từ đầu không?`)) return;
      }
      unlockExamSession(code);
      delete state.userAnswers[code];
      delete state.submittedExams[code];
      state.timeRemainingSeconds = 1800;
      state.isBarCollapsed = false;
      state.activeSessionId = `sess_${code}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      if (typeof document !== 'undefined' && document.body) {
        document.body.classList.add('exam-mode-active');
      }
      removeMiniTimerWidget();

      const container = document.getElementById('lesson-content');
      if (container) {
        const exam = state.activeExamData || getExamByCode(code);
        if (exam) {
          if (state.examMode === 'timed') startTimer(code);
          ExamEngine.renderRunnerUI(container, exam, false);
          const mainContent = document.getElementById('main-content') || document.querySelector('.main-content');
          if (mainContent) mainContent.scrollTop = 0;
          if (typeof window !== 'undefined') window.scrollTo(0, 0);
        }
      }
    },

    collapseBar() {
      // Giữ thanh runnerStickyHud luôn hiển thị sticky gọn gàng ở đỉnh, loại bỏ 2 ô mini widget nổi trùng lặp
      state.isBarCollapsed = false;
      const bar = document.getElementById('runnerStickyHud');
      if (bar) {
        bar.classList.remove('is-collapsed');
        bar.classList.remove('is-peeked');
      }
      removeMiniTimerWidget();
    },

    expandBar() {
      state.isBarCollapsed = false;
      const bar = document.getElementById('runnerStickyHud');
      if (bar) {
        bar.classList.remove('is-collapsed');
        bar.classList.remove('is-peeked');
      }
      removeMiniTimerWidget();
    },

    /**
     * TỰ ĐỘNG CHUYỂN CÂU HỎI (SMART AUTO-ADVANCE)
     */
    scrollToQuestion(qId) {
      const card = document.getElementById(`q-card-${qId}`);
      if (card && card.scrollIntoView) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('auto-focused');
        setTimeout(() => {
          card.classList.remove('auto-focused');
        }, 1200);
      }
    },

    isAutoAdvanceEnabled() {
      if (typeof root.isQuizAutoAdvanceEnabled === 'function') {
        return root.isQuizAutoAdvanceEnabled();
      }
      try {
        const val = localStorage.getItem('minna_quiz_auto_advance');
        return val !== 'false';
      } catch (e) {
        return true;
      }
    },

    toggleAutoAdvance() {
      if (typeof root.toggleQuizAutoAdvance === 'function') {
        root.toggleQuizAutoAdvance();
      } else {
        const cur = ExamEngine.isAutoAdvanceEnabled();
        const next = !cur;
        try {
          localStorage.setItem('minna_quiz_auto_advance', String(next));
        } catch (e) {}
        if (root.showToast) {
          root.showToast(next ? '⚡ Đã BẬT tự chuyển câu' : 'Đã TẮT tự chuyển câu');
        }
      }
      ExamEngine.updateAutoAdvanceButtonState();
    },

    updateAutoAdvanceButtonState() {
      const isEnabled = ExamEngine.isAutoAdvanceEnabled();
      const btns = document.querySelectorAll('.btn-hud-autoadvance');
      btns.forEach(btn => {
        btn.classList.toggle('active', isEnabled);
        btn.setAttribute('title', isEnabled ? 'Tự động chuyển câu khi chọn đáp án (Đang BẬT)' : 'Tự động chuyển câu khi chọn đáp án (Đang TẮT)');
        btn.setAttribute('aria-label', isEnabled ? 'Tự chuyển câu: Đang BẬT' : 'Tự chuyển câu: Đang TẮT');
      });
    },

    triggerAutoAdvance(examCode, currentQId) {
      if (state.submittedExams[examCode]) return;
      const code = normalizeExamCode(examCode);
      const answers = state.userAnswers[code] || state.userAnswers[examCode] || {};
      const answeredCount = Object.keys(answers).length;

      // Nếu đã hoàn thành tất cả 20 câu
      if (answeredCount >= 20) {
        const bottomCard = document.getElementById('examBottomSubmitCard');
        if (bottomCard && bottomCard.scrollIntoView) {
          bottomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (root.showToast) {
            root.showToast('🎉 Bạn đã chọn đủ 20 câu hỏi! Hãy nhấn Nộp Bài để xem kết quả.');
          }
        }
        return;
      }

      // Tìm câu hỏi kế tiếp chưa trả lời
      let targetQId = null;

      // 1. Ưu tiên câu ngay sau câu hiện tại nếu chưa làm
      const nextQId = currentQId + 1;
      if (nextQId <= 20 && answers[nextQId] === undefined) {
        targetQId = nextQId;
      } else {
        // Tìm tiếp từ currentQId + 2 đến câu 20
        for (let i = currentQId + 2; i <= 20; i++) {
          if (answers[i] === undefined) {
            targetQId = i;
            break;
          }
        }
      }

      // 2. Nếu từ currentQId đến 20 đã làm hết, vòng lại tìm câu chưa làm từ câu 1 đến currentQId - 1
      if (!targetQId) {
        for (let i = 1; i < currentQId; i++) {
          if (answers[i] === undefined) {
            targetQId = i;
            break;
          }
        }
      }

      if (targetQId) {
        ExamEngine.scrollToQuestion(targetQId);
      }
    },

    toggleBarCollapse(fromMini = false) {
      ExamEngine.expandBar();
    },

    submitToLeaderboard(examCode) {
      const input = document.getElementById('candidateNameInput');
      if (!input) return;
      const name = input.value.trim();
      if (!name) {
        if (root.showToast) root.showToast('Vui lòng nhập tên của bạn trước khi lưu Bảng Vàng!');
        input.focus();
        return;
      }

      const res = state.submittedExams[examCode];
      if (!res) return;

      addLeaderboardEntry({
        name: name,
        score: res.score,
        timeSeconds: res.timeSeconds,
        date: res.date,
        level: res.level
      });

      const box = document.getElementById('leaderboardSubmitBox');
      if (box) {
        box.innerHTML = `
          <div class="lb-saved-success">
            ${EXAM_ICONS.check}
            <span>Đã ghi danh <strong>${esc(name)}</strong> thành công lên Bảng Vàng Top Học Viên!</span>
          </div>
        `;
      }
      if (root.showToast) root.showToast('Đã lưu thành tích lên Bảng Vàng!');
    },

    startExam(examCode) {
      const code = normalizeExamCode(examCode).toLowerCase();
      if (root.saveModuleScroll) {
        root.saveModuleScroll(`exam-${code}`, 0);
      }
      const mainContent = document.getElementById('main-content') || document.querySelector('.main-content');
      if (mainContent) mainContent.scrollTop = 0;
      if (typeof window !== 'undefined') window.scrollTo(0, 0);

      if (root.switchModule) {
        root.switchModule(`exam-${code}`);
      } else {
        window.location.hash = `exam/${code}`;
      }
    },

    togglePassageDrawer(open) {
      if (typeof document === 'undefined') return;
      const modal = document.getElementById('examPassageDrawerModal');
      if (!modal) return;
      const willOpen = (open !== undefined) ? !!open : (modal.classList && typeof modal.classList.contains === 'function' ? !modal.classList.contains('active') : false);
      if (modal.classList && typeof modal.classList.toggle === 'function') {
        modal.classList.toggle('active', willOpen);
      }
      if (typeof modal.setAttribute === 'function') {
        modal.setAttribute('aria-hidden', String(!willOpen));
      }
      if (document.body && document.body.classList && typeof document.body.classList.toggle === 'function') {
        document.body.classList.toggle('exam-passage-drawer-open', willOpen);
      }
    },

    exitExam() {
      ExamEngine.togglePassageDrawer(false);
      const activeCode = state.activeExamCode;
      if (activeCode && !state.submittedExams[activeCode]) {
        ExamEngine.autoSubmitOnExit(activeCode, 'user_exit_internal_nav');
      }
      if (typeof document !== 'undefined' && document.body) {
        document.body.classList.remove('exam-mode-active');
      }
      clearInterval(state.timerInterval); state.timerInterval = null;
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
      state.activeExamCode = null;
      state.isBarCollapsed = false;
      removeMiniTimerWidget();
      if (root.switchModule) {
        root.switchModule('exam');
      } else {
        window.location.hash = 'exam';
      }
    },

    cleanup() {
      const activeCode = state.activeExamCode;
      if (activeCode && !state.submittedExams[activeCode]) {
        ExamEngine.autoSubmitOnExit(activeCode, 'user_exit_internal_nav');
      }
      if (typeof document !== 'undefined' && document.body) {
        document.body.classList.remove('exam-mode-active');
      }
      clearInterval(state.timerInterval); state.timerInterval = null;
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
      state.activeExamCode = null;
      state.isBarCollapsed = false;
      removeMiniTimerWidget();
    },

    switchLevel(level) {
      state.currentLevel = level;
      const container = document.getElementById('lesson-content');
      if (container) ExamEngine.renderHub(container);
    },

    toggleExamMode(examCode) {
      state.examMode = state.examMode === 'timed' ? 'practice' : 'timed';
      const container = document.getElementById('lesson-content');
      if (container) {
        const exam = state.activeExamData || getExamByCode(examCode);
        if (exam) {
          if (state.examMode === 'timed') {
            startTimer(examCode);
          } else {
            clearInterval(state.timerInterval); state.timerInterval = null;
      if (state.autoAdvanceTimeout) {
        clearTimeout(state.autoAdvanceTimeout);
        state.autoAdvanceTimeout = null;
      }
          }
          ExamEngine.renderRunnerUI(container, exam, Boolean(state.submittedExams[examCode]));
        }
      }
      if (root.showToast) {
        root.showToast(state.examMode === 'timed' ? 'Đã bật chế độ thi 30 phút tiêu chuẩn' : 'Đã chuyển sang chế độ tự do (không bấm giờ)');
      }
    },

    onSearchInput(val) {
      state.filterQuery = val || '';
      const grid = document.querySelector('.exam-cards-grid');
      const heading = document.querySelector('.exam-section-heading');
      if (!grid) return;

      const manifest = root.EXAMS_MANIFEST || { exams: [] };
      const allExams = manifest.exams || [];
      const bests = getBestScores();
      const currentList = allExams.filter(e => e.level === state.currentLevel).filter(e => {
        if (!state.filterQuery) return true;
        const q = state.filterQuery.toLowerCase();
        return e.code.toLowerCase().includes(q) || 
               e.title.toLowerCase().includes(q) ||
               (e.minnaLesson && e.minnaLesson.includes(q));
      });

      if (heading) {
        heading.innerHTML = `
          <div class="section-title-wrap">
            <span class="section-badge">${state.currentLevel}</span>
            <h2>Danh Sách Đề Thi ${state.currentLevel} (${currentList.length} Đề Phù Hợp)</h2>
          </div>
        `;
      }

      grid.innerHTML = currentList.map(ex => {
        const best = bests[ex.code];
        const isDone = best !== undefined;
        const cleanTitle = ex.title.replace(/^Đề\s+[Nn][45]-\d+:\s*/, '').split('—')[0].trim();
        return `
          <article class="exam-card ${isDone ? 'is-completed' : ''}" id="card-${ex.code}">
            <div class="exam-card-top">
              <span class="exam-level-tag ${ex.level === 'N5' ? 'tag-n5' : 'tag-n4'}">${ex.code}</span>
              ${isDone ? `<span class="exam-status-tag done">Điểm cao: ${best}/20 ✓</span>` : `<span class="exam-status-tag new">Chưa làm</span>`}
            </div>
            <h3 class="exam-card-title jp-text">${renderJapaneseText(cleanTitle)}</h3>
            <div class="exam-card-meta">
              <span class="meta-item">${EXAM_ICONS.book} ${ex.minnaLesson ? 'Minna ' + esc(ex.minnaLesson) : 'Tổng hợp'}</span>
              <span class="meta-item">${EXAM_ICONS.clock} 30 phút • 20 câu</span>
            </div>
            <div class="exam-card-actions">
              <button type="button" class="btn-start-exam" onclick="window.ExamEngine.startExam('${ex.code}')">
                ${isDone ? EXAM_ICONS.refresh : EXAM_ICONS.play}
                <span>${isDone ? 'Thi Lại Đề Này' : 'Bắt Đầu Làm Bài'}</span>
              </button>
            </div>
          </article>
        `;
      }).join('');
    },

    clearSearch() {
      state.filterQuery = '';
      const input = document.getElementById('examSearchInput');
      if (input) input.value = '';
      const container = document.getElementById('lesson-content');
      if (container) ExamEngine.renderHub(container);
    },

    cleanOptionText,
    autoSubmitOnExit,
    isExamSessionLocked,
    unlockExamSession,
    getLockedSessions,
    saveLockedSessions,
    transmitExamSubmissionBeacon,
    getVietnameseExitReason
  };

  // LẮNG NGHE CÁC SỰ KIỆN RỜI GIAO DIỆN (EXIT TRIGGERS CHỐNG GIAN LẬN)
  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    // Kích hoạt: Ẩn tab hoặc chuyển sang ứng dụng khác trên điện thoại (visibilitychange)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        const activeCode = state.activeExamCode;
        if (activeCode && !state.submittedExams[activeCode]) {
          ExamEngine.autoSubmitOnExit(activeCode, 'visibility_hidden_app_switch');
        }
      }
    });

    // Kích hoạt: Đóng tab, đóng trình duyệt hoặc điều hướng (pagehide)
    window.addEventListener('pagehide', () => {
      const activeCode = state.activeExamCode;
      if (activeCode && !state.submittedExams[activeCode]) {
        ExamEngine.autoSubmitOnExit(activeCode, 'pagehide_tab_closed');
      }
    });

    // Kích hoạt: Tải lại trang (F5) hoặc đóng cửa sổ (beforeunload)
    window.addEventListener('beforeunload', () => {
      const activeCode = state.activeExamCode;
      if (activeCode && !state.submittedExams[activeCode]) {
        ExamEngine.autoSubmitOnExit(activeCode, 'beforeunload');
      }
    });
  }

  // Lắng nghe sự kiện bàn phím phím 'F' để đổi chế độ Furigana
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('keydown', (e) => {
      if (!e || !e.target) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (state.activeExamCode) {
          ExamEngine.toggleFuriganaMode();
        }
      }
    });
  }

  // Xuất bản UMD
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExamEngine;
  }
  if (root) {
    root.ExamEngine = ExamEngine;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
