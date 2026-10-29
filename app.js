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
// 1. CẤU HÌNH, BẢO MẬT STORAGE & TIẾN ĐỘ (PROTOTYPE POLLUTION & QUOTA GUARDS)
// --------------------------------------------------------------------------
const STORAGE_COMPLETED_KEY = 'minna_completed_modules';
const STORAGE_PRACTICE_KEY = 'minna_practice_answers';
const STORAGE_DOKKAI_KEY = 'minna_dokkai_answers_v1';
const STORAGE_ENTERED_KEY = 'minna_has_entered';
const STORAGE_LAST_ACTIVE_KEY = 'minna_last_active_id';
const STORAGE_FURIGANA_KEY = 'minna_show_furigana';
const STORAGE_DEVICE_SETTINGS_KEY = 'minna_device_settings';

// --------------------------------------------------------------------------
// 1-ROOT. KHỞI TẠO BIẾN TOÀN CỤC CHỐNG LỖI THAM CHIẾU (GLOBAL SCOPE GUARDS)
// --------------------------------------------------------------------------
const _rootScope = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : {}));
if (typeof _rootScope.lessonsData === 'undefined') _rootScope.lessonsData = [];
if (typeof _rootScope.practiceQuizData === 'undefined') _rootScope.practiceQuizData = {};
if (typeof _rootScope.dokkaiData === 'undefined') _rootScope.dokkaiData = [];
if (typeof _rootScope.radicalsData === 'undefined') _rootScope.radicalsData = [];
if (typeof _rootScope.kanjiLessonsData === 'undefined') _rootScope.kanjiLessonsData = [];

// --------------------------------------------------------------------------
// 1A-SEC. BẢO MẬT LỚP 4: KÝ SỐ CHỐNG GAN LẬN TIẾN ĐỘ (TAMPER-PROOF CHECKSUM)
// Mỗi khi lưu điểm số / tiến độ, hệ thống tạo thêm mã xác thực (Checksum).
// Nếu học viên mở F12 Console tay sửa điểm trong localStorage, checksum sẽ
// không khớp và hệ thống sẽ phục hồi an toàn về giá trị gốc hợp lệ.
// --------------------------------------------------------------------------

/**
 * Tạo checksum đơn giản từ chuỗi dữ liệu (FNV-1a hash 32-bit)
 * Nhanh, không cần crypto API, chạy được cả trên trình duyệt cũ.
 */
function _fnv1aHash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h.toString(36);
}

/** Tên khóa lưu checksum đi kèm mỗi key dữ liệu */
function _csKey(storageKey) {
  return storageKey + '_cs';
}

/**
 * Ghi dữ liệu vào localStorage kèm checksum xác thực.
 * Thay thế trực tiếp safeSetStorage cho các key quan trọng.
 */
function secureSetStorage(key, value) {
  if (typeof StorageEngine !== 'undefined' && typeof StorageEngine.secureSetItem === 'function') {
    StorageEngine.secureSetItem(key, value);
    return;
  }
  try {
    if (typeof localStorage === 'undefined' || !localStorage.setItem) return;
    const cs = _fnv1aHash(String(value) + key);
    localStorage.setItem(key, value);
    localStorage.setItem(_csKey(key), cs);
  } catch (e) {
    console.warn('[SecureStorage] Ghi thất bại:', key, e && e.name);
  }
}

/**
 * Đọc dữ liệu từ localStorage và xác minh checksum.
 * Nếu checksum không khớp (dữ liệu bị can thiệp thủ công),
 * hệ thống trả về giá trị dự phòng (fallback) an toàn thay vì dữ liệu bị hack.
 */
function secureGetStorage(key, fallback = null) {
  if (typeof StorageEngine !== 'undefined' && typeof StorageEngine.secureGetItem === 'function') {
    return StorageEngine.secureGetItem(key, fallback);
  }
  try {
    if (typeof localStorage === 'undefined' || !localStorage.getItem) return fallback;
    const value = localStorage.getItem(key);
    if (value === null) return fallback;
    const storedCs = localStorage.getItem(_csKey(key));
    if (storedCs !== null) {
      const expectedCs = _fnv1aHash(String(value) + key);
      if (storedCs !== expectedCs) {
        // Checksum không khớp → xóa dữ liệu bị can thiệp và trả về fallback
        console.warn('[SecureStorage] ⚠️ Phát hiện dữ liệu bị can thiệp tại khóa:', key, '→ Đặt lại an toàn.');
        localStorage.removeItem(key);
        localStorage.removeItem(_csKey(key));
        return fallback;
      }
    }
    return value;
  } catch (e) {
    return fallback;
  }
}

/**
 * Đọc JSON an toàn từ secureStorage với xác minh checksum + kiểm tra kiểu.
 */
function secureGetJsonStorage(key, fallback = null, validator = null) {
  if (typeof StorageEngine !== 'undefined' && typeof StorageEngine.secureGetJson === 'function') {
    return StorageEngine.secureGetJson(key, fallback, validator);
  }
  try {
    const raw = secureGetStorage(key, null);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    const clean = sanitizeDeepObject(parsed);
    if (typeof validator === 'function') {
      return validator(clean) ? clean : fallback;
    }
    return (clean !== null && clean !== undefined) ? clean : fallback;
  } catch (e) {
    return fallback;
  }
}

// --------------------------------------------------------------------------
// 1B-SEC. BẢO MẬT LỚP 5: BẢO VỆ NỘI DUNG BÀI TẬP & PHÁT HIỆN CAN THIỆP
// - Chặn chuột phải (contextmenu) trên câu hỏi bài tập
// - Chặn in ấn trái phép bằng phím Ctrl+P / Cmd+P
// - Chặn tổ hợp phím tắt devtools nguy hiểm (F12, Ctrl+Shift+I, Ctrl+Shift+J)
// --------------------------------------------------------------------------
(function initContentProtection() {
  'use strict';
  if (typeof document === 'undefined') return;

  const PROTECTED_SELECTORS = [
    '.kq-question-text',
    '.kq-options',
    '.practice-quiz-wrap',
    '.dokkai-passage-box',
    '.quiz-options-grid',
    '#lesson-content'
  ];

  function isProtectedTarget(el) {
    if (!el) return false;
    return PROTECTED_SELECTORS.some(sel => {
      try { return el.closest && el.closest(sel) !== null; } catch (e) { return false; }
    });
  }

  // Chặn chuột phải trên vùng nội dung bài tập
  document.addEventListener('contextmenu', function(e) {
    if (isProtectedTarget(e.target)) {
      e.preventDefault();
      return false;
    }
  }, true);

  // Chặn copy bằng phím tắt Ctrl+C / Cmd+C trên vùng nội dung bài tập
  document.addEventListener('copy', function(e) {
    if (isProtectedTarget(document.activeElement) || isProtectedTarget(
      window.getSelection && window.getSelection().anchorNode &&
      window.getSelection().anchorNode.parentElement
    )) {
      const sel = window.getSelection ? window.getSelection().toString() : '';
      // Chỉ chặn khi đang chọn văn bản trong vùng bảo vệ
      if (sel.length > 30) {
        e.preventDefault();
        return false;
      }
    }
  }, true);

  // Chặn in ấn
  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('beforeprint', function() {
      if (document && document.body) document.body.setAttribute('data-print-blocked', 'true');
    });
    window.addEventListener('afterprint', function() {
      if (document && document.body) document.body.removeAttribute('data-print-blocked');
    });
  }

  // Chặn tổ hợp phím mở DevTools (bảo vệ mã nguồn bài tập)
  if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
    document.addEventListener('keydown', function(e) {
    const isMac = navigator.platform && navigator.platform.includes('Mac');
    const ctrl = isMac ? e.metaKey : e.ctrlKey;

    // F12 → mở DevTools
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I hoặc Ctrl+Shift+J → mở DevTools Console/Inspector
    if (ctrl && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U → xem nguồn trang
    if (ctrl && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      return false;
    }
    // Ctrl+P → in trang
    if (ctrl && (e.key === 'P' || e.key === 'p')) {
      e.preventDefault();
      return false;
    }
  }, true);
  }
})();

// Hàm mã hóa an toàn HTML chống tấn công DOM XSS
function escapeHtml(str) {
  if (typeof StorageEngine !== 'undefined' && typeof StorageEngine.escapeHtml === 'function') {
    return StorageEngine.escapeHtml(str);
  }
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Kiểm tra khóa đối tượng an toàn chống Prototype Pollution
function isSafeObjectKey(key) {
  return typeof key === 'string' && key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
}

// Làm sạch đối tượng JSON loại bỏ hoàn toàn các thuộc tính độc hại
function sanitizeDeepObject(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(sanitizeDeepObject);
  const clean = Object.create(null);
  for (const key of Object.keys(obj)) {
    if (isSafeObjectKey(key)) {
      clean[key] = sanitizeDeepObject(obj[key]);
    }
  }
  return clean;
}

function safeGetStorage(key, fallback = null) {
  if (typeof StorageEngine !== 'undefined' && typeof StorageEngine.getItem === 'function') {
    return StorageEngine.getItem(key, fallback);
  }
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem) {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    }
  } catch (e) {}
  return fallback;
}

function safeSetStorage(key, value) {
  if (typeof StorageEngine !== 'undefined' && typeof StorageEngine.setItem === 'function') {
    StorageEngine.setItem(key, value);
    return;
  }
  try {
    if (typeof localStorage !== 'undefined' && localStorage.setItem) {
      localStorage.setItem(key, value);
    }
  } catch (e) {
    console.warn('[Storage] Ghi dữ liệu thất bại (vượt quota hoặc bị chặn):', key, e && e.name);
  }
}

function safeRemoveStorage(key) {
  if (typeof StorageEngine !== 'undefined' && typeof StorageEngine.removeItem === 'function') {
    StorageEngine.removeItem(key);
    return;
  }
  try {
    if (typeof localStorage !== 'undefined' && localStorage.removeItem) {
      localStorage.removeItem(key);
      localStorage.removeItem(key + '_cs');
    }
  } catch (e) {}
}

// Đọc JSON an toàn với bộ lọc Prototype Pollution và hàm kiểm tra kiểu (Validator)
function safeGetJsonStorage(key, fallback = null, validator = null) {
  if (typeof StorageEngine !== 'undefined' && typeof StorageEngine.getJson === 'function') {
    return StorageEngine.getJson(key, fallback, validator);
  }
  try {
    const raw = safeGetStorage(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    const clean = sanitizeDeepObject(parsed);
    if (typeof validator === 'function') {
      return validator(clean) ? clean : fallback;
    }
    return clean !== null && clean !== undefined ? clean : fallback;
  } catch (e) {
    return fallback;
  }
}

// --------------------------------------------------------------------------
// 1B. CÁ NHÂN HÓA THIẾT BỊ, CỠ CHỮ, MẬT ĐỘ & CHẾ ĐỘ LÀM MÁT (THERMAL SAVER)
// --------------------------------------------------------------------------
const DEFAULT_DEVICE_SETTINGS = {
  mode: 'auto',        // 'auto' | 'mobile' | 'tablet' | 'desktop'
  fontSize: 'normal',  // 'small' | 'normal' | 'large' | 'xlarge'
  density: 'normal',   // 'compact' | 'normal' | 'comfort'
  thermalMode: false,  // true | false (vô hiệu hóa backdrop-filter làm mát GPU điện thoại)
  haptic: true         // true | false (rung phản hồi trên mobile)
};

function detectCurrentDevice() {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || 1200;
  const hasTouch = ('ontouchstart' in window) || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
  if (width < 768) return 'mobile';
  if (width <= 1024 && hasTouch) return 'tablet';
  if (width <= 900) return 'tablet';
  return 'desktop';
}

function getDeviceSettings() {
  return safeGetJsonStorage(STORAGE_DEVICE_SETTINGS_KEY, { ...DEFAULT_DEVICE_SETTINGS }, (data) => {
    return data && typeof data === 'object' && !Array.isArray(data);
  });
}

function saveDeviceSettings(settings) {
  const clean = {
    mode: ['auto', 'mobile', 'tablet', 'desktop'].includes(settings.mode) ? settings.mode : 'auto',
    fontSize: ['small', 'normal', 'large', 'xlarge'].includes(settings.fontSize) ? settings.fontSize : 'normal',
    density: ['compact', 'normal', 'comfort'].includes(settings.density) ? settings.density : 'normal',
    thermalMode: Boolean(settings.thermalMode),
    haptic: settings.haptic !== false
  };
  safeSetStorage(STORAGE_DEVICE_SETTINGS_KEY, JSON.stringify(clean));
  applyDeviceSettings(clean);
  return clean;
}

function applyDeviceSettings(settings) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (!root) return;

  const currentMode = settings.mode || 'auto';
  const detected = detectCurrentDevice();
  const effectiveDevice = currentMode === 'auto' ? detected : currentMode;

  root.setAttribute('data-device', effectiveDevice);
  root.setAttribute('data-device-mode', currentMode);
  root.setAttribute('data-font-size', settings.fontSize || 'normal');
  root.setAttribute('data-density', settings.density || 'normal');
  root.setAttribute('data-thermal-mode', settings.thermalMode ? 'true' : 'false');
  root.setAttribute('data-haptic', settings.haptic ? 'true' : 'false');

  const badge = document.getElementById('detected-device-badge');
  if (badge) {
    const labels = {
      mobile: 'Điện thoại',
      tablet: 'Máy tính bảng',
      desktop: 'Máy tính'
    };
    badge.textContent = (currentMode === 'auto' ? 'Tự động nhận diện: ' : 'Chế độ cố định: ') + (labels[effectiveDevice] || effectiveDevice);
  }
}

function triggerHaptic(duration = 12) {
  try {
    const settings = getDeviceSettings();
    if (!settings.haptic) return;
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(duration);
    }
  } catch (e) {}
}

// Kích hoạt ngay lập tức cấu hình thiết bị khi file app.js được nạp
try {
  applyDeviceSettings(getDeviceSettings());
} catch (e) {}

function initDeviceSettings() {
  const settings = getDeviceSettings();
  applyDeviceSettings(settings);

  // Lắng nghe thay đổi kích thước cửa sổ để cập nhật khi xoay ngang/dọc điện thoại
  if (typeof window !== 'undefined') {
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const cur = getDeviceSettings();
        if (cur.mode === 'auto') {
          applyDeviceSettings(cur);
        }
      }, 200);
    }, { passive: true });
  }

  const btnOpen = document.getElementById('btn-device-settings');
  const modal = document.getElementById('device-settings-modal');
  const btnClose = document.getElementById('close-device-modal-btn');
  const btnSave = document.getElementById('save-device-modal-btn');
  const btnReset = document.getElementById('reset-device-modal-btn');

  if (!btnOpen || !modal) return;

  const syncModalUI = (cfg) => {
    // Mode pills
    document.querySelectorAll('#device-mode-selector .device-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === (cfg.mode || 'auto'));
    });
    // Font pills
    document.querySelectorAll('#device-font-selector .device-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-font') === (cfg.fontSize || 'normal'));
    });
    // Density pills
    document.querySelectorAll('#device-density-selector .device-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-density') === (cfg.density || 'normal'));
    });
    // Switches
    const thermalToggle = document.getElementById('thermal-saver-toggle');
    if (thermalToggle) thermalToggle.checked = Boolean(cfg.thermalMode);
    const hapticToggle = document.getElementById('haptic-toggle');
    if (hapticToggle) hapticToggle.checked = cfg.haptic !== false;
  };

  const openModal = () => {
    const cur = getDeviceSettings();
    syncModalUI(cur);
    modal.classList.add('show-modal');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    modal.classList.remove('show-modal');
    modal.setAttribute('aria-hidden', 'true');
  };

  btnOpen.addEventListener('click', (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    openModal();
  });

  if (btnClose) btnClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Pill selectors
  const setupPills = (containerId, attrName) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.addEventListener('click', (e) => {
      const pill = e.target.closest('.device-pill');
      if (!pill) return;
      container.querySelectorAll('.device-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  };

  setupPills('device-mode-selector', 'data-mode');
  setupPills('device-font-selector', 'data-font');
  setupPills('device-density-selector', 'data-density');

  // Nút Lưu
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const activeModePill = document.querySelector('#device-mode-selector .device-pill.active');
      const activeFontPill = document.querySelector('#device-font-selector .device-pill.active');
      const activeDensityPill = document.querySelector('#device-density-selector .device-pill.active');
      const thermalToggle = document.getElementById('thermal-saver-toggle');
      const hapticToggle = document.getElementById('haptic-toggle');

      const newSettings = {
        mode: activeModePill ? activeModePill.getAttribute('data-mode') : 'auto',
        fontSize: activeFontPill ? activeFontPill.getAttribute('data-font') : 'normal',
        density: activeDensityPill ? activeDensityPill.getAttribute('data-density') : 'normal',
        thermalMode: thermalToggle ? thermalToggle.checked : false,
        haptic: hapticToggle ? hapticToggle.checked : true
      };

      saveDeviceSettings(newSettings);
      closeModal();
      triggerHaptic(20);
      showToast('Đã lưu cấu hình cá nhân hóa thiết bị thành công!');
    });
  }

  // Nút Mặc định
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      saveDeviceSettings({ ...DEFAULT_DEVICE_SETTINGS });
      syncModalUI(DEFAULT_DEVICE_SETTINGS);
      triggerHaptic(15);
      showToast('Đã khôi phục cài đặt thiết bị về mặc định');
    });
  }
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
  const m = String(id).match(/^(?:bai|quiz|dokkai|kanji|kanji-flashcard)-(\d+)$/);
  return m ? parseInt(m[1], 10) : null;
}

function getCompletedModules() {
  return secureGetJsonStorage(STORAGE_COMPLETED_KEY, [], Array.isArray);
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
  // Ngăn chặn DOM XSS bằng cách escape toàn bộ thẻ HTML trong thông điệp trước khi chuyển dấu xuống dòng
  msgEl.innerHTML = escapeHtml(String(message || '')).replace(/\n/g, '<br>');
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
    showToast("Đã ghi nhận hoàn thành bài học!");
  }

  secureSetStorage(STORAGE_COMPLETED_KEY, JSON.stringify(list));

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

  const isNow = !exists;
  const completeButtons = document.querySelectorAll ? document.querySelectorAll('.btn-complete-lesson, #btn-complete-lesson') : [document.getElementById('btn-complete-lesson')].filter(Boolean);
  if (completeButtons && completeButtons.forEach) {
    completeButtons.forEach(btn => {
      if (!btn) return;
      btn.className = `btn-complete-lesson ${isNow ? 'is-completed' : ''} btn-pulse`;
      btn.innerHTML = isNow
        ? '✓ Đã hoàn thành (Bấm để hủy)'
        : '✓ Đánh dấu hoàn thành bài này';
      setTimeout(() => {
        if (btn.classList) btn.classList.remove('btn-pulse');
      }, 450);
    });
  }

  const completeIcons = document.querySelectorAll ? document.querySelectorAll('.btn-complete-icon') : [];
  if (completeIcons && completeIcons.forEach) {
    completeIcons.forEach(btn => {
      if (!btn) return;
      btn.className = `btn-complete-icon ${isNow ? 'is-completed' : ''}`;
      btn.title = isNow ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành';
      btn.innerHTML = `<span class="complete-icon-mark">${isNow ? '✓' : '○'}</span>`;
    });
  }
};

// --------------------------------------------------------------------------
// 1B. KIẾN TRÚC CODE-SPLITTING & DYNAMIC LAZY-LOADING DỮ LIỆU CHUẨN HIỆU NĂNG CAO
// Giảm tải nạp ban đầu từ 5.35MB xuống ~244KB (giảm hơn 95%), tải trang dưới 1s,
// nạp các module còn lại theo nhu cầu (on-demand) hoặc khi rảnh (idle prefetch).
// --------------------------------------------------------------------------
const TOTAL_CURRICULUM_MODULES = 217; // 50 Bài Minna + 50 Trắc nghiệm + 50 Đọc hiểu + 50 Chữ Hán + 17 Nhóm bộ thủ

function syncLoadedData() {
  const root = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : {}));

  // Đồng bộ các chunk bài học Minna (lessons_1_5 đến lessons_46_50)
  const lessonChunks = [
    typeof lessons_1_5 !== 'undefined' ? lessons_1_5 : null,
    typeof lessons_6_10 !== 'undefined' ? lessons_6_10 : null,
    typeof lessons_11_15 !== 'undefined' ? lessons_11_15 : null,
    typeof lessons_16_20 !== 'undefined' ? lessons_16_20 : null,
    typeof lessons_21_25 !== 'undefined' ? lessons_21_25 : null,
    typeof lessons_26_30 !== 'undefined' ? lessons_26_30 : null,
    typeof lessons_31_35 !== 'undefined' ? lessons_31_35 : null,
    typeof lessons_36_40 !== 'undefined' ? lessons_36_40 : null,
    typeof lessons_41_45 !== 'undefined' ? lessons_41_45 : null,
    typeof lessons_46_50 !== 'undefined' ? lessons_46_50 : null
  ];

  const existingLessons = Array.isArray(root.lessonsData) ? root.lessonsData : [];
  const lessonMap = new Map();
  existingLessons.forEach(l => { if (l && l.id) lessonMap.set(l.id, l); });

  lessonChunks.forEach(chunk => {
    if (Array.isArray(chunk)) {
      chunk.forEach(l => {
        if (l && l.id) {
          const norm = (typeof DataNormalizer !== 'undefined' && typeof DataNormalizer.normalizeLesson === 'function')
            ? DataNormalizer.normalizeLesson(l)
            : l;
          lessonMap.set(norm.id, norm);
        }
      });
    }
  });

  root.lessonsData = Array.from(lessonMap.values()).sort((a, b) => {
    const na = parseInt(String(a.id).replace(/^(?:bai|lesson)-/, ''), 10) || 0;
    const nb = parseInt(String(b.id).replace(/^(?:bai|lesson)-/, ''), 10) || 0;
    return na - nb;
  });

  // Đồng bộ các chunk trắc nghiệm (quizzes_1_5 đến quizzes_46_50)
  const quizChunks = [
    typeof quizzes_1_5 !== 'undefined' ? quizzes_1_5 : null,
    typeof quizzes_6_10 !== 'undefined' ? quizzes_6_10 : null,
    typeof quizzes_11_15 !== 'undefined' ? quizzes_11_15 : null,
    typeof quizzes_16_20 !== 'undefined' ? quizzes_16_20 : null,
    typeof quizzes_21_25 !== 'undefined' ? quizzes_21_25 : null,
    typeof quizzes_26_30 !== 'undefined' ? quizzes_26_30 : null,
    typeof quizzes_31_35 !== 'undefined' ? quizzes_31_35 : null,
    typeof quizzes_36_40 !== 'undefined' ? quizzes_36_40 : null,
    typeof quizzes_41_45 !== 'undefined' ? quizzes_41_45 : null,
    typeof quizzes_46_50 !== 'undefined' ? quizzes_46_50 : null
  ];

  if (!root.practiceQuizData || typeof root.practiceQuizData !== 'object') {
    root.practiceQuizData = {};
  }
  quizChunks.forEach(chunk => {
    if (chunk && typeof chunk === 'object') {
      Object.assign(root.practiceQuizData, chunk);
    }
  });

  // Đồng bộ Đọc hiểu Dokkai
  if (typeof dokkaiData !== 'undefined' && Array.isArray(dokkaiData) && dokkaiData.length) {
    root.dokkaiData = dokkaiData;
  }

  // Đồng bộ Bộ thủ Radicals
  if (typeof radicalsData !== 'undefined' && Array.isArray(radicalsData) && radicalsData.length) {
    root.radicalsData = radicalsData;
  }

  // Đồng bộ Kanji Mẹo nhớ
  if (typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData) && kanjiLessonsData.length) {
    root.kanjiLessonsData = kanjiLessonsData;
  }
}

// Khởi chạy đồng bộ ngay khi nạp file
syncLoadedData();

const _loadedScriptUrls = new Set();
const _loadingScriptPromises = new Map();

function getScriptUrlForModule(id) {
  if (typeof CURRICULUM_MANIFEST !== 'undefined' && typeof CURRICULUM_MANIFEST.getScriptUrl === 'function') {
    const manifestUrl = CURRICULUM_MANIFEST.getScriptUrl(id);
    if (manifestUrl) return manifestUrl;
  }
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
  if (id.startsWith('dokkai')) {
    return 'data/dokkai.js';
  }
  if (id.startsWith('radicals')) {
    return 'data/radicals_data.js';
  }
  if (id.startsWith('kanji')) {
    return 'data/kanji_data.js';
  }
  return null;
}

function loadScriptAsync(src) {
  if (typeof NavigationEngine !== 'undefined' && typeof NavigationEngine.loadScriptAsync === 'function') {
    return NavigationEngine.loadScriptAsync(src, syncLoadedData);
  }
  if (!src) return Promise.resolve();
  if (_loadedScriptUrls.has(src)) return Promise.resolve();
  if (_loadingScriptPromises.has(src)) return _loadingScriptPromises.get(src);

  const promise = new Promise((resolve) => {
    if (typeof document === 'undefined' || !document.createElement) {
      _loadedScriptUrls.add(src);
      resolve();
      return;
    }
    const existing = document.querySelector(`script[src*="${src}"]`);
    if (existing) {
      _loadedScriptUrls.add(src);
      syncLoadedData();
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      _loadedScriptUrls.add(src);
      _loadingScriptPromises.delete(src);
      syncLoadedData();
      resolve();
    };
    script.onerror = (err) => {
      _loadingScriptPromises.delete(src);
      console.warn(`[LazyLoader] Không thể nạp file ${src}:`, err);
      resolve();
    };
    document.head.appendChild(script);
  });

  _loadingScriptPromises.set(src, promise);
  return promise;
}

function isModuleDataReady(id) {
  if (typeof NavigationEngine !== 'undefined' && typeof NavigationEngine.isModuleDataReady === 'function') {
    syncLoadedData();
    return NavigationEngine.isModuleDataReady(id);
  }
  if (!id || typeof id !== 'string') return true;
  syncLoadedData();
  const root = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : {}));
  const lm = id.match(/^(?:bai|lesson)-(\d+)$/);
  if (lm) {
    const list = Array.isArray(root.lessonsData) ? root.lessonsData : [];
    return list.some(l => l && (l.id === `bai-${lm[1]}` || l.id === `lesson-${lm[1]}`));
  }
  const qm = id.match(/^quiz-(\d+)$/);
  if (qm) {
    const map = root.practiceQuizData || {};
    return Boolean(map[id] && Array.isArray(map[id]) && map[id].length > 0);
  }
  if (id.startsWith('dokkai')) {
    const dList = (typeof dokkaiData !== 'undefined' && Array.isArray(dokkaiData)) ? dokkaiData : (root.dokkaiData || []);
    return dList.length > 0;
  }
  if (id.startsWith('radicals')) {
    const rList = (typeof radicalsData !== 'undefined' && Array.isArray(radicalsData)) ? radicalsData : (root.radicalsData || []);
    return rList.length > 0;
  }
  if (id.startsWith('kanji')) {
    const kList = (typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) ? kanjiLessonsData : (root.kanjiLessonsData || []);
    return kList.length > 0;
  }
  return true;
}

function ensureModuleDataLoaded(id) {
  if (typeof NavigationEngine !== 'undefined' && typeof NavigationEngine.ensureModuleDataLoaded === 'function') {
    return NavigationEngine.ensureModuleDataLoaded(id, {
      getUrl: getScriptUrlForModule,
      onSync: syncLoadedData
    });
  }
  if (isModuleDataReady(id)) {
    return Promise.resolve();
  }
  const url = getScriptUrlForModule(id);
  if (!url) {
    return Promise.resolve();
  }
  return loadScriptAsync(url).then(() => {
    syncLoadedData();
  });
}

function renderLazyLoader(id) {
  const content = document.getElementById('lesson-content');
  if (!content) return;
  const num = extractLessonNumber(id);
  const typeText = id.startsWith('quiz-') ? 'Bài tập Trắc nghiệm'
    : id.startsWith('dokkai-') ? 'Bài Đọc hiểu'
    : id.startsWith('kanji-') ? 'Chữ Hán & Mẹo nhớ'
    : id.startsWith('radicals-') ? 'Bộ thủ tiếng Nhật'
    : 'Bài học Minna';
  const label = num ? `${typeText} Bài ${num}` : typeText;

  content.innerHTML = `
    <div class="module-lazy-loader" role="status" aria-live="polite">
      <div class="lazy-loader-spinner" aria-hidden="true"></div>
      <div class="lazy-loader-text">Đang tải dữ liệu ${label}...</div>
    </div>
  `;
}

let _searchPrefetchStarted = false;
function prefetchRemainingDataForSearch() {
  if (_searchPrefetchStarted) return;
  _searchPrefetchStarted = true;

  const allUrls = [
    'data/lessons_6_10.js', 'data/lessons_11_15.js', 'data/lessons_16_20.js',
    'data/lessons_21_25.js', 'data/lessons_26_30.js', 'data/lessons_31_35.js',
    'data/lessons_36_40.js', 'data/lessons_41_45.js', 'data/lessons_46_50.js',
    'data/dokkai.js', 'data/quizzes_1_5.js', 'data/quizzes_6_10.js',
    'data/radicals_data.js', 'data/kanji_data.js'
  ];

  let i = 0;
  function loadNext() {
    if (i >= allUrls.length) return;
    const url = allUrls[i++];
    loadScriptAsync(url).then(() => {
      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(loadNext, { timeout: 2000 });
      } else {
        setTimeout(loadNext, 120);
      }
    });
  }
  loadNext();
}

function startIdlePrefetch() {
  if (typeof window === 'undefined') return;
  const idleQueue = [
    'data/lessons_6_10.js',
    'data/quizzes_1_5.js',
    'data/radicals_data.js',
    'data/dokkai.js',
    'data/lessons_11_15.js',
    'data/quizzes_6_10.js',
    'data/lessons_16_20.js',
    'data/lessons_21_25.js',
    'data/lessons_26_30.js',
    'data/lessons_31_35.js',
    'data/lessons_36_40.js',
    'data/lessons_41_45.js',
    'data/lessons_46_50.js',
    'data/quizzes_11_15.js',
    'data/quizzes_16_20.js',
    'data/quizzes_21_25.js',
    'data/quizzes_26_30.js',
    'data/quizzes_31_35.js',
    'data/quizzes_36_40.js',
    'data/quizzes_41_45.js',
    'data/quizzes_46_50.js',
    'data/kanji_data.js'
  ];

  let queueIdx = 0;
  function processNextIdle() {
    if (queueIdx >= idleQueue.length) return;
    const nextUrl = idleQueue[queueIdx++];
    loadScriptAsync(nextUrl).then(() => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(processNextIdle, { timeout: 4000 });
      } else {
        setTimeout(processNextIdle, 600);
      }
    });
  }

  // Chờ 2.5 giây sau khi tải trang xong mới bắt đầu tải ngầm nhẹ nhàng
  setTimeout(() => {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(processNextIdle, { timeout: 3000 });
    } else {
      setTimeout(processNextIdle, 800);
    }
  }, 2500);
}

function updateHeaderProgress() {
  const completed = getCompletedModules();
  const total = TOTAL_CURRICULUM_MODULES;
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
  if (typeof AudioEngine !== 'undefined' && typeof AudioEngine.cleanSpeechText === 'function') {
    return AudioEngine.cleanSpeechText(text);
  }
  return String(text || '')
    .replace(/<rt>.*?<\/rt>/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/['"\\]/g, ' ')
    .trim();
}

// Hàm chuẩn hóa và tạo nhịp ngắt nghỉ tự nhiên theo ngữ pháp tiếng Nhật (Prosody & Syntactic Phrasing)
function formatJapaneseGrammarSpeech(text) {
  if (typeof AudioEngine !== 'undefined' && typeof AudioEngine.applyProsody === 'function') {
    return AudioEngine.applyProsody(text);
  }
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

  // 3. Ngắt nghỉ sau liên từ / thán từ ở đầu câu hoặc sau dấu chấm câu (Nạp từ data/audio_prosody_rules.js)
  const discourseWords = (typeof window !== 'undefined' && window.DISCOURSE_PAUSE_WORDS)
    || (typeof global !== 'undefined' && global.DISCOURSE_PAUSE_WORDS)
    || [
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
  if (typeof KanjiEngine !== 'undefined' && typeof KanjiEngine.hasKanji === 'function') {
    return KanjiEngine.hasKanji(text);
  }
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
  if (typeof document !== 'undefined' && document.querySelectorAll) {
    document.querySelectorAll('.is-speaking').forEach(b => {
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

  let match = voices.find(v => (v.lang === 'ja-JP' || v.lang.startsWith('ja')) && (/leda/i.test(v.name) || /leda/i.test(v.voiceURI)));
  if (match) return match;

  match = voices.find(v => (v.lang === 'ja-JP' || v.lang.startsWith('ja')) && (/chirp/i.test(v.name) || /chirp/i.test(v.voiceURI)));
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
  if (speechAudioCache.has(speechText)) {
    return speechAudioCache.get(speechText);
  }

  const pitchVal = Math.round((cfg.pitch - 1.0) * 10);

  // 1. Ưu tiên gọi qua Secure Edge Proxy (/api/speech) của Cloudflare Worker để chống lộ Token & chống cướp API
  if (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http')) {
    try {
      const proxyRes = await fetch('/api/speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'MinnaApp'
        },
        body: JSON.stringify({
          text: speechText,
          speed: cfg.speed || 0.92,
          pitch: pitchVal
        })
      });
      if (proxyRes.ok) {
        const data = await proxyRes.json();
        if (data && (data.audioUrl || data.file || data.file_cors)) {
          const audioUrl = data.audioUrl || data.file_cors || data.file;
          speechAudioCache.set(speechText, audioUrl);
          return audioUrl;
        }
      }
    } catch (proxyErr) {
      // Bỏ qua lỗi proxy khi chạy môi trường dev local không có Worker
    }
  }

  // 2. Dự phòng: Gọi trực tiếp nếu người dùng có cấu hình token riêng trong trình duyệt
  if (!cfg.token || !cfg.email) return null;

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

function playOnlineJapaneseAudio(text, stopRelay, safetyTimer) {
  const clean = cleanSpeechText(text);
  if (!clean) {
    if (safetyTimer) clearTimeout(safetyTimer);
    if (stopRelay) stopRelay();
    return;
  }

  // Cắt ngắn nếu câu quá dài (> 180 ký tự) để đảm bảo độ trễ tối ưu
  const shortText = clean.length > 180 ? clean.substring(0, 180) : clean;
  const encoded = encodeURIComponent(shortText);

  // Danh sách các nguồn âm thanh tiếng Nhật online chất lượng cao:
  // 1. Google Translate TTS CDN: Giọng đọc chuẩn quốc tế, hỗ trợ mọi câu ngắn & dài
  // 2. Youdao Japanese Audio CDN (NetEase): Tương thích 100% điện thoại nội địa Trung Quốc (Xiaomi, Vivo, Oppo, Realme, Huawei), không bị chặn bởi tường lửa GFW
  const sources = [
    {
      name: 'Google TTS',
      url: `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encoded}`,
      noReferrer: true
    },
    {
      name: 'Youdao JP',
      url: `https://dict.youdao.com/dictvoice?audio=${encoded}&le=jap`,
      noReferrer: false
    }
  ];

  let srcIdx = 0;
  let finished = false;

  function endPlayback() {
    if (finished) return;
    finished = true;
    if (safetyTimer) clearTimeout(safetyTimer);
    if (stopRelay) stopRelay();
    if (currentSpeechAudio) currentSpeechAudio = null;
  }

  function tryNextSource() {
    if (finished) return;
    if (srcIdx >= sources.length) {
      endPlayback();
      return;
    }

    const src = sources[srcIdx++];
    const audio = new Audio();
    if (src.noReferrer) {
      try {
        audio.referrerPolicy = 'no-referrer';
        audio.setAttribute('referrerpolicy', 'no-referrer');
      } catch (e) {}
    }
    audio.preload = 'auto';
    audio.src = src.url;
    currentSpeechAudio = audio;

    let sourceTimer = setTimeout(() => {
      // Nếu sau 4.5s nguồn này chưa phát hoặc bị đơ (thường gặp khi Google bị chặn ở Trung Quốc)
      if (!finished && (audio.paused || audio.readyState < 2)) {
        try { audio.pause(); } catch (e) {}
        tryNextSource();
      }
    }, 4500);

    audio.onended = () => {
      clearTimeout(sourceTimer);
      endPlayback();
    };

    audio.onerror = () => {
      clearTimeout(sourceTimer);
      tryNextSource();
    };

    const p = audio.play();
    if (p !== undefined) {
      p.then(() => {
        clearTimeout(sourceTimer);
      }).catch(() => {
        clearTimeout(sourceTimer);
        tryNextSource();
      });
    }
  }

  tryNextSource();
}

function speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg, onFallback) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onFallback) {
      onFallback();
    } else {
      clearTimeout(safetyTimer);
      stopRelay();
    }
    return;
  }

  const voice = cachedLedaVoice || findLedaJpVoice();
  if (!voice) {
    if (onFallback) {
      onFallback();
    } else {
      clearTimeout(safetyTimer);
      stopRelay();
    }
    return;
  }

  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'ja-JP';
    utterance.voice = voice;
    utterance.rate = cfg && cfg.speed ? cfg.speed : 0.92;
    utterance.pitch = cfg && cfg.pitch ? cfg.pitch : 1.04;

    utterance.onend = () => {
      clearTimeout(safetyTimer);
      stopRelay();
    };
    utterance.onerror = (err) => {
      console.warn('Web Speech API phát âm lỗi, chuyển sang online audio:', err);
      if (onFallback) {
        onFallback();
      } else {
        clearTimeout(safetyTimer);
        stopRelay();
      }
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    if (onFallback) {
      onFallback();
    } else {
      clearTimeout(safetyTimer);
      stopRelay();
    }
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
      btn = target.closest ? target.closest('.speak-btn, .speak-btn-mini, .btn-test-voice, .kcard-audio-btn, .btn-tool, button') : target;
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

  // 1. Kiểm tra xem thiết bị có sẵn gói giọng đọc tiếng Nhật (ja-JP) hay không
  const jpVoice = cachedLedaVoice || findLedaJpVoice();

  // 2. Nếu người dùng có cấu hình tài khoản SpeechGen riêng (token & email)
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
          if (jpVoice) {
            speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg, () => playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer));
          } else {
            playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer);
          }
        };
        const p = audio.play();
        if (p !== undefined) {
          p.catch(() => {
            if (jpVoice) {
              speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg, () => playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer));
            } else {
              playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer);
            }
          });
        }
        return;
      }
    } catch (apiErr) {
      console.warn('SpeechGen Cloud API chuyển hướng:', apiErr.message);
    }
  }

  // 3. Nếu máy CÓ sẵn giọng đọc tiếng Nhật (như iPhone iOS, Android quốc tế, Windows/Mac) -> dùng Web Speech API siêu mượt
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0));
  const hasSpeechSynth = typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';

  if (jpVoice && hasSpeechSynth) {
    speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg, () => {
      playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer);
    });
    return;
  }

  // 4. Nếu máy KHÔNG có gói giọng đọc tiếng Nhật (thường gặp trên điện thoại Android nội địa Trung: Xiaomi, Redmi, Vivo, Oppo, Huawei...)
  // Tự động kích hoạt Bộ phát âm thanh trực tuyến đa tầng (Google Translate TTS + Youdao JP), phát âm thanh ngay lập tức!
  if (!window._warnedNoJpVoice) {
    window._warnedNoJpVoice = true;
    showToast("Đang phát âm thanh trực tuyến (Điện thoại chưa cài gói giọng tiếng Nhật ja-JP).");
  }
  playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer);
}

window.speakJapanese = speakJapanese;

const SPEAKER_ICON_HTML = `<svg class="speaker-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;

/**
 * HỆ THỐNG BIỂU TƯỢNG VECTOR SVG TINH TẾ & TỐI GIẢN (MINIMALIST & REFINED ICONS)
 * Tách biệt tại data/ui_icons.js (Đồng bộ qua window.APP_ICONS kèm fallback an toàn).
 */
const APP_ICONS = (typeof window !== 'undefined' && window.APP_ICONS)
  || (typeof global !== 'undefined' && global.APP_ICONS)
  || {};

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
  toast.innerHTML = escapeHtml(String(message || ''));
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
        // Chỉ lưu tối đa 1 nhóm mở gần nhất để luôn đảm bảo nguyên lý Single-Accordion
        const lastOpen = openEls[openEls.length - 1];
        if (lastOpen && lastOpen.id) openGroupIds.add(lastOpen.id);
      }
    }
  } catch (e) {}

  const isInitialLoad = !sidebarMenu.children || sidebarMenu.children.length === 0;
  sidebarMenu.innerHTML = '';

  // Nút truy cập nhanh Từ Điển trên Sidebar
  const maziiQuickEl = document.createElement('div');
  maziiQuickEl.className = 'sidebar-mazii-quick';
  maziiQuickEl.innerHTML = `
    <button type="button" class="sidebar-mazii-btn ${currentActiveId === 'mazii-dict' ? 'active' : ''}" onclick="switchModule('mazii-dict')" title="Tra cứu từ vựng, chữ Hán và viết tay">
      <span class="mazii-quick-left">
        <span class="mazii-icon">${APP_ICONS.book}</span>
        <span class="mazii-title">Từ Điển &amp; Viết Tay</span>
      </span>
      <span class="mazii-badge">Tra từ</span>
    </button>
  `;
  sidebarMenu.appendChild(maziiQuickEl);

  const root = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : {}));
  const loadedLessons = Array.isArray(root.lessonsData) ? root.lessonsData : (typeof lessonsData !== 'undefined' && Array.isArray(lessonsData) ? lessonsData : []);
  const loadedQuizzes = (root.practiceQuizData && typeof root.practiceQuizData === 'object') ? root.practiceQuizData : (typeof practiceQuizData !== 'undefined' && practiceQuizData ? practiceQuizData : {});
  const loadedDokkai = (typeof dokkaiData !== 'undefined' && Array.isArray(dokkaiData)) ? dokkaiData : (Array.isArray(root.dokkaiData) ? root.dokkaiData : []);
  const loadedKanji = (typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) ? kanjiLessonsData : (Array.isArray(root.kanjiLessonsData) ? root.kanjiLessonsData : []);
  const loadedRadicals = (typeof radicalsData !== 'undefined' && Array.isArray(radicalsData)) ? radicalsData : (Array.isArray(root.radicalsData) ? root.radicalsData : []);

  const groups = [
    {
      id: "group-lessons",
      title: "Bài Học",
      isOpenDefault: false,
      items: Array.from({ length: 50 }, (_, i) => {
        const num = i + 1;
        const id = `bai-${num}`;
        const lesson = loadedLessons.find(l => l && (l.id === id || l.id === `lesson-${num}`));
        return {
          id,
          label: lesson ? lesson.title.split(':')[0] : `Bài ${num}`,
          sub: id === currentActiveId ? 'Đang học' : (num <= 25 ? 'Minna N5' : 'Minna N4'),
          isCurrent: id === currentActiveId
        };
      })
    },
    {
      id: "group-quiz",
      title: "Bài Tập",
      isOpenDefault: false,
      items: Array.from({ length: 50 }, (_, i) => {
        const num = i + 1;
        const qId = `quiz-${num}`;
        const count = (loadedQuizzes[qId] && Array.isArray(loadedQuizzes[qId])) ? loadedQuizzes[qId].length : 50;
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
      items: Array.from({ length: 50 }, (_, i) => {
        const num = i + 1;
        const dId = `dokkai-${num}`;
        const d = loadedDokkai.find(item => item && item.id === dId);
        return {
          id: dId,
          label: d ? d.title.replace('Bài Đọc Hiểu - ', '') : `Bài Đọc Hiểu ${num}`,
          sub: "1 Bài • 5 Câu",
          isCurrent: dId === currentActiveId
        };
      })
    },
    {
      id: "group-kanji",
      title: "Mẹo Nhớ Kanji",
      isOpenDefault: false,
      items: Array.from({ length: 50 }, (_, i) => {
        const num = i + 1;
        const kId = `kanji-${num}`;
        const k = loadedKanji.find(item => item && (item.id === kId || item.lesson === num));
        return {
          id: kId,
          label: `Bài ${num} Chữ Hán`,
          sub: k ? `${k.items.length} Từ vựng • Mẹo nhớ` : 'Mẹo nhớ Chữ Hán',
          isCurrent: kId === currentActiveId
        };
      })
    },
    {
      id: "group-radicals",
      title: "Bộ Thủ",
      isOpenDefault: false,
      items: Array.from({ length: 17 }, (_, i) => {
        const num = i + 1;
        const rId = `radicals-${num}`;
        const r = loadedRadicals.find(item => item && item.id === rId);
        return {
          id: rId,
          label: r ? r.title : `Bộ thủ ${num} nét`,
          sub: r ? `${r.items.length} Bộ` : `Nhóm ${num} nét`,
          isCurrent: rId === currentActiveId
        };
      })
    }
  ];

  groups.forEach(group => {
    // Mặc định khi mới vào trang: toàn bộ 5 nhóm đều đóng gọn gàng (collapsed) theo yêu cầu người dùng
    const isOpen = openGroupIds.has(group.id);

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
      headerBtn.addEventListener('click', (e) => {
        if (e && e.preventDefault) e.preventDefault();
        const isCurrentlyOpen = groupEl.classList.contains('open');

        // Cơ chế Single Accordion nghiêm ngặt: Luôn đóng TẤT CẢ các nhóm trước
        const allGroups = sidebarMenu.querySelectorAll ? sidebarMenu.querySelectorAll('.accordion-group') : [];
        if (allGroups && allGroups.forEach) {
          allGroups.forEach(g => {
            if (g && g.classList) {
              g.classList.remove('open');
              const btn = g.querySelector ? g.querySelector('.accordion-header') : null;
              if (btn && btn.setAttribute) btn.setAttribute('aria-expanded', 'false');
            }
          });
        }

        // Nếu nhóm này trước khi bấm chưa mở thì mở lên
        if (!isCurrentlyOpen) {
          groupEl.classList.add('open');
          headerBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }

    const itemBtns = groupEl.querySelectorAll ? groupEl.querySelectorAll('.menu-item-btn') : [];
    itemBtns.forEach(btn => {
      if (btn && btn.addEventListener) {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-id');
          switchModule(targetId);
          closeMobileSidebar();
        });
      }
    });

    sidebarMenu.appendChild(groupEl);
  });
}

// --------------------------------------------------------------------------
// 3B. THANH ĐỒNG BỘ CÁC CHẾ ĐỘ HỌC TẬP THEO TỪNG BÀI (BÀI HỌC - MẸO NHỚ - FLASHCARD - BÀI TẬP - ĐỌC HIỂU)
// --------------------------------------------------------------------------
let currentKanjiTab = (typeof window !== 'undefined' && window.currentKanjiTab) ? window.currentKanjiTab : 'list';
if (typeof window !== 'undefined') window.currentKanjiTab = currentKanjiTab;

function renderModuleSyncBar(lessonNum, activeMode) {
  const num = parseInt(lessonNum, 10) || 1;
  const prevNum = num > 1 ? num - 1 : null;
  const nextNum = num < 50 ? num + 1 : null;
  const modePrefix = activeMode === 'quiz' ? 'quiz' : (activeMode === 'dokkai' ? 'dokkai' : (activeMode === 'kanji' ? 'kanji' : 'bai'));
  const isKanji = activeMode === 'kanji';
  const isFcTab = isKanji && (typeof currentKanjiTab !== 'undefined' && currentKanjiTab === 'flashcard');
  const isListTab = isKanji && !isFcTab;

  return `
    <div class="module-sync-bar" aria-label="Chuyển nhanh chế độ học Bài ${num}">
      <div class="module-sync-tabs">
        <button type="button" class="sync-tab-btn ${activeMode === 'lesson' ? 'active' : ''}" onclick="switchModule('bai-${num}')">
          <span class="sync-tab-icon">${APP_ICONS.book}</span>
          <span>Lý thuyết Bài ${num}</span>
        </button>
        <button type="button" class="sync-tab-btn ${isListTab ? 'active' : ''}" onclick="switchKanjiModule('${num}', 'list')">
          <span class="sync-tab-icon">${APP_ICONS.lightbulb}</span>
          <span>Mẹo nhớ Kanji</span>
        </button>
        <button type="button" class="sync-tab-btn ${isFcTab ? 'active' : ''}" onclick="switchKanjiModule('${num}', 'flashcard')">
          <span class="sync-tab-icon">${APP_ICONS.cards}</span>
          <span>Kiểm tra Flashcard</span>
        </button>
        <button type="button" class="sync-tab-btn ${activeMode === 'quiz' ? 'active' : ''}" onclick="switchModule('quiz-${num}')">
          <span class="sync-tab-icon">${APP_ICONS.pen}</span>
          <span>Trắc nghiệm (50 câu)</span>
        </button>
        <button type="button" class="sync-tab-btn ${activeMode === 'dokkai' ? 'active' : ''}" onclick="switchModule('dokkai-${num}')">
          <span class="sync-tab-icon">${APP_ICONS.exercise}</span>
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
  const isFc = (typeof currentKanjiTab !== 'undefined' && currentKanjiTab === 'flashcard');

  return `
    <div class="module-footer-nav">
      <div class="footer-next-steps">
        ${activeMode === 'lesson' ? `
          <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiModule('${num}', 'list')">
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
          <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiModule('${num}', 'flashcard')">
            <span class="footer-cta-tag">Củng cố Kanji</span>
            <strong class="footer-cta-title">Kiểm tra Flashcard Kanji Bài ${num} →</strong>
            <span class="footer-cta-sub">Lật thẻ 3D & kiểm tra phản xạ chữ Hán</span>
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
          <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiModule('${num}', 'list')">
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
          ${isFc ? `
            <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiTab('list', true)">
              <span class="footer-cta-tag">Xem lại chiết tự</span>
              <strong class="footer-cta-title">← Bảng Mẹo nhớ Kanji Bài ${num}</strong>
              <span class="footer-cta-sub">Tra cứu chi tiết chiết tự bộ thủ và âm On/Kun</span>
            </button>
            <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
              <span class="footer-cta-tag">Bước tiếp theo</span>
              <strong class="footer-cta-title">Làm 50 câu Trắc nghiệm Bài ${num} →</strong>
              <span class="footer-cta-sub">Kiểm tra khả năng nhận diện Kanji & ngữ pháp</span>
            </button>
          ` : `
            <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiTab('flashcard', true)">
              <span class="footer-cta-tag">Kiểm tra ghi nhớ</span>
              <strong class="footer-cta-title">Kiểm tra Flashcard Bài ${num} →</strong>
              <span class="footer-cta-sub">Lật thẻ 3D kiểm tra phản xạ & đánh giá mức độ nhớ</span>
            </button>
            <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
              <span class="footer-cta-tag">Luyện đề</span>
              <strong class="footer-cta-title">Làm 50 câu Trắc nghiệm Bài ${num} →</strong>
              <span class="footer-cta-sub">Kiểm tra toàn diện từ vựng, ngữ pháp & chữ Hán</span>
            </button>
          `}
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('bai-${num}')">
            <span class="footer-cta-tag">Lý thuyết chính</span>
            <strong class="footer-cta-title">← Lý thuyết Bài ${num}</strong>
            <span class="footer-cta-sub">Học từ vựng và cấu trúc ngữ pháp</span>
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

  // Nếu dữ liệu module chưa sẵn sàng trong bộ nhớ, hiển thị spinner và nạp bất đồng bộ
  if (!isModuleDataReady(id)) {
    renderLazyLoader(id);
    ensureModuleDataLoaded(id).then(() => {
      renderContent(id);
      restoreScrollPosition(getModuleScroll(id));
      updateHeaderProgress();
    }).catch(err => {
      console.warn('[LazyLoader] Lỗi tải dữ liệu module:', id, err);
      renderContent(id);
    });
    return;
  }

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
        <div class="hero-top-row">
          <div class="hero-meta">
            <span class="badge badge-sakura">${lesson.badge || `Bài ${lessonNum} Minna`}</span>
            <span class="badge badge-green">${lesson.vocabulary.length} Từ vựng chuẩn SGK</span>
            <span class="badge badge-primary">${lesson.grammar.length} Cấu trúc ngữ pháp</span>
          </div>
          <button class="btn-complete-icon ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${lesson.id}')"
                  aria-label="Đánh dấu hoàn thành bài này"
                  title="${isCompleted ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành bài này'}">
            <span class="complete-icon-mark">${isCompleted ? '✓' : '○'}</span>
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
                <th>Hiragana</th>
                <th>Chữ Hán & Furigana</th>
                <th>Từ loại</th>
                <th>Ý Nghĩa Tiếng Việt</th>
              </tr>
            </thead>
            <tbody id="vocab-table-body">
              ${lesson.vocabulary.map(v => {
                const hasKanji = hasKanjiCharacter(v.kanji);
                const speechTarget = cleanSpeechText(v.hiragana || v.kanji);
                const showSubReading = hasKanji && v.hiragana && cleanSpeechText(v.hiragana) !== cleanSpeechText(v.kanji);
                const isLongWord = isVocabTermLong(v);
                const catKey = getWordCategoryKey(v.type);
                return `
                <tr class="vocab-row" data-cat="${catKey}">
                  <td class="vocab-col-hira">
                    <button class="speak-btn speak-btn-desktop" onclick="speakJapanese('${speechTarget}', this, event)" title="Phát âm từ này (Leda JP)">${SPEAKER_ICON_HTML}</button>
                    <span class="vocab-hira-text">${v.hiragana}</span>
                  </td>
                  <td class="vocab-col-kanji ${isLongWord ? 'vocab-is-long' : ''}">
                    <button class="speak-btn speak-btn-mobile" onclick="speakJapanese('${speechTarget}', this, event)" title="Phát âm từ này (Leda JP)">${SPEAKER_ICON_HTML}</button>
                    <div class="vocab-term-group">
                      <strong class="vocab-term-main">${hasKanji ? v.kanji : `<span class="vocab-desktop-no-kanji">—</span><span class="vocab-mobile-no-kanji">${v.hiragana}</span>`}</strong>
                      ${showSubReading ? `<span class="vocab-mobile-hira">${v.hiragana}</span>` : ''}
                    </div>
                    <div class="vocab-mobile-type">
                      ${formatWordTypeBadge(v.type)}
                    </div>
                  </td>
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
                <div class="grammar-formula">${g.structure || g.pattern || g.title || ''}</div>
              </div>
              <div class="grammar-usage">
                <div class="usage-title">
                  ${APP_ICONS.lightbulb}
                  <strong>Ý nghĩa &amp; Cách dùng:</strong>
                </div>
                <div class="usage-text">${(g.explanation || '').replace(/\n/g, '<br>')}</div>
              </div>
              ${g.caution ? `
                <div class="grammar-note">
                  <div class="note-title">
                    ${APP_ICONS.alert}
                    <strong>Lưu ý tránh bẫy trong đề thi:</strong>
                  </div>
                  <div class="note-text">${(g.caution || '').replace(/\n/g, '<br>')}</div>
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

      <!-- Khối đánh dấu hoàn thành bài học đặt ở cuối bài sau phần ngữ pháp -->
      <div class="lesson-completion-card">
        <div class="completion-card-inner">
          <div class="completion-text-wrap">
            <h4 class="completion-heading">Hoàn thành Bài ${lessonNum}</h4>
            <p class="completion-sub">Bạn đã nắm vững các từ vựng và cấu trúc ngữ pháp của bài học này?</p>
          </div>
          <button id="btn-complete-lesson" 
                  class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${lesson.id}')">
            ${isCompleted ? '✓ Đã hoàn thành (Bấm để hủy)' : '✓ Đánh dấu hoàn thành bài này'}
          </button>
        </div>
      </div>

      ${renderModuleFooterNav(lessonNum, 'lesson')}
    `;

    // Khởi tạo bộ công cụ Flashcard & Kiểm tra Kanji nhanh trong bài (nếu môi trường trình duyệt thực)
    try {
      const mount = document.getElementById('lesson-practice-mount');
      if (mount && typeof mount.appendChild === 'function' && typeof document.createElement === 'function') {
        renderLessonPractice(lesson.vocabulary, '#lesson-practice-mount');
      }
    } catch (e) {}
    restoreScrollPosition(getModuleScroll(id));
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
          <span style="display:inline-flex;align-items:center;gap:4px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Thời gian:</span>
          </span>
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
              <div class="quiz-q-content">
                <span class="quiz-q-badge">Câu ${qIdx + 1}</span>
                <span class="quiz-q-text">${q.question}</span>
              </div>
              <button class="speak-btn-mini" onclick="speakQuizQuestion('${id}', '${q.id}', this, event)" title="Nghe câu hỏi này">
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
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  // 3. TRƯỜNG HỢP: ĐỌC HIỂU TỪNG BÀI (dokkai-1 đến dokkai-50)
  if (id.startsWith('dokkai-')) {
    renderDokkaiRoom(id);
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  // 4. TRƯỜNG HỢP: MẸO NHỚ CHỮ HÁN 50 BÀI (kanji-1 đến kanji-50 hoặc kanji-flashcard-1 đến kanji-flashcard-50)
  if (id.startsWith('kanji-')) {
    const isFc = id.startsWith('kanji-flashcard-');
    renderKanjiSection(id, isFc ? 'flashcard' : null);
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  // 5. TRƯỜNG HỢP: BỘ THỦ TIẾNG NHẬT (radicals-1 đến radicals-17 hoặc radicals-flashcard-1 đến radicals-flashcard-17)
  if (id.startsWith('radicals-')) {
    const isFc = id.startsWith('radicals-flashcard-');
    renderRadicalSection(id, isFc ? 'flashcard' : null);
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  // 6. TRƯỜNG HỢP: TRA TỪ ĐIỂN MAZII & VIẾT TAY (mazii-dict)
  if (id === 'mazii-dict' || id.startsWith('mazii-dict')) {
    const qMatch = id.match(/mazii-dict\?(?:q=([^&]*))?(?:&type=([^&]*))?/);
    const initialQuery = qMatch && qMatch[1] ? decodeURIComponent(qMatch[1]) : '';
    const initialType = qMatch && qMatch[2] ? decodeURIComponent(qMatch[2]) : 'word';
    renderMaziiDictSection(initialQuery, initialType);
    restoreScrollPosition(getModuleScroll(id));
    return;
  }
}

// --------------------------------------------------------------------------
// 4C. MODULE MẸO NHỚ CHỮ HÁN 50 BÀI HỌC (KANJI MNEMONICS)
// Bố trí hiện đại, tối giản Wa-Modern:
// - Phân tách riêng biệt từng chữ Hán với đầy đủ Âm On, Âm Kun, Bộ thủ, Nét bút
// - Loại bỏ khoảng trống thừa, ôm sát nội dung
// - Nội dung bố trí ngăn nắp, thoáng đãng, tuyệt đối không đè lẫn lên nhau
// --------------------------------------------------------------------------
function formatKanjiMnemonic(raw) {
  if (typeof KanjiEngine !== 'undefined' && typeof KanjiEngine.formatMnemonic === 'function') {
    return KanjiEngine.formatMnemonic(raw);
  }
  if (!raw) return '<div class="mnemonic-row"><span class="mnemonic-text">Đang cập nhật mẹo nhớ...</span></div>';
  const lines = String(raw).split('\n').map(l => l.trim()).filter(Boolean);
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
}

function renderKanjiSection(sectionId, forcedTab = null) {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  if (typeof kanjiLessonsData === 'undefined' || !kanjiLessonsData.length) {
    content.innerHTML = `<div class="lesson-hero-card"><h2 class="lesson-title">Đang tải dữ liệu Từ vựng Chữ Hán...</h2></div>`;
    return;
  }

  const lessonNum = extractLessonNumber(sectionId) || 1;
  const lesson = kanjiLessonsData.find(k => k.lesson === lessonNum || k.id === `kanji-${lessonNum}`) || kanjiLessonsData[0];
  if (!lesson) return;

  currentKfcLesson = lesson;
  const isDirectFc = String(sectionId).startsWith('kanji-flashcard-');
  if (forcedTab) {
    currentKanjiTab = forcedTab;
  } else if (isDirectFc) {
    currentKanjiTab = 'flashcard';
  } else if (!currentKanjiTab) {
    currentKanjiTab = 'list';
  }

  const isCompleted = isModuleCompleted(lesson.id);
  const learnedSet = loadKanjiLearnedSet(lessonNum);
  const learnedCount = (lesson.items || []).filter(it => learnedSet.has(it.id)).length;

  content.innerHTML = `
    ${renderModuleSyncBar(lessonNum, 'kanji')}

    <!-- Hero Header -->
    <div class="lesson-hero-card">
      <div class="hero-top-row">
        <div class="hero-meta">
          <span class="badge badge-sakura">${lesson.level}</span>
          <span class="badge badge-primary">${lesson.items.length} Từ Vựng Chữ Hán</span>
          <span class="badge badge-green">100% Kèm Mẹo Nhớ &amp; Cấu Thành</span>
          ${learnedCount > 0 ? `<span class="badge badge-amber">Đã nhớ: ${learnedCount}/${lesson.items.length} thẻ</span>` : ''}
        </div>
        <button class="btn-complete-icon ${isCompleted ? 'is-completed' : ''}" 
                onclick="toggleLessonComplete('${lesson.id}')"
                aria-label="Đánh dấu hoàn thành phần này"
                title="${isCompleted ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành phần này'}">
          <span class="complete-icon-mark">${isCompleted ? '✓' : '○'}</span>
        </button>
      </div>
      <h2 class="lesson-title">${lesson.title}</h2>
      <p class="lesson-desc">${lesson.description}</p>
    </div>

    <!-- THANH ĐIỀU HƯỚNG 2 THẺ RIÊNG BIỆT: DANH SÁCH MẸO NHỚ & BÀI KIỂM TRA FLASHCARD -->
    <div class="kanji-tab-nav-wrapper">
      <div class="kanji-tab-nav" role="tablist" aria-label="Chế độ học Chữ Hán Bài ${lessonNum}">
        <button type="button" 
                class="kanji-tab-btn ${currentKanjiTab === 'list' ? 'active' : ''}" 
                id="tab-btn-kanji-list" 
                role="tab" 
                aria-selected="${currentKanjiTab === 'list' ? 'true' : 'false'}"
                onclick="switchKanjiTab('list')">
          <span class="kanji-tab-icon">${APP_ICONS.lightbulb}</span>
          <span class="kanji-tab-title">Chiết Tự &amp; Mẹo Nhớ</span>
          <span class="kanji-tab-pill">${lesson.items.length} Chữ Hán</span>
        </button>
        <button type="button" 
                class="kanji-tab-btn ${currentKanjiTab === 'flashcard' ? 'active' : ''}" 
                id="tab-btn-kanji-flashcard" 
                role="tab" 
                aria-selected="${currentKanjiTab === 'flashcard' ? 'true' : 'false'}"
                onclick="switchKanjiTab('flashcard')">
          <span class="kanji-tab-icon">${APP_ICONS.cards}</span>
          <span class="kanji-tab-title">Kiểm Tra Flashcard</span>
          <span class="kanji-tab-pill accent-amber">Luyện Trí Nhớ</span>
        </button>
      </div>
    </div>

    <!-- THẺ 1: DANH SÁCH CHI TIẾT CHIẾT TỰ & MẸO GHI NHỚ -->
    <div id="kanji-tab-pane-list" style="display: ${currentKanjiTab === 'list' ? 'block' : 'none'};">
      
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

      <!-- Danh sách các thẻ từ vựng: BỐ TRÍ TẬP TRUNG VÀO TỪ VỰNG & MẸO GHI NHỚ -->
      <div class="kanji-cards-container" id="kanji-cards-list">
        ${lesson.items.map((item, idx) => `
          <article class="kanji-study-card" id="kcard-${item.id}" data-word="${item.word}" data-reading="${item.reading || ''}" data-kanji="${item.kanji || item.word}" data-hanviet="${item.hanViet}" data-meaning="${item.meaning}">
            
            <!-- DÒNG TRÊN: TIÊU ĐỀ TỪ VỰNG CHỮ HÁN, ÂM HÁN VIỆT & NGHĨA -->
            <div class="kcard-top-section">
              <div class="kcard-header-bar">
                <div class="kcard-title-group">
                  <h3 class="kcard-word-kanji">${item.word}</h3>
                  <strong class="kcard-word-hanviet">${item.hanViet}</strong>
                </div>
                <div class="kcard-meta-group">
                  ${item.type ? `<span class="badge badge-subtle kcard-type-badge">${item.type}</span>` : ''}
                  <button type="button" class="kcard-audio-btn" onclick="speakJapanese('${(item.reading || item.word).replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim()}', this, event)" title="Nghe phát âm từ: ${item.word}">
                    <span class="audio-btn-icon">${SPEAKER_ICON_HTML}</span>
                    <span>Nghe</span>
                  </button>
                </div>
              </div>
              <div class="kcard-body-bar">
                ${item.reading ? `<span class="kcard-word-reading">${item.reading}</span>` : ''}
                ${item.reading && item.meaning ? `<span class="kcard-reading-dot">•</span>` : ''}
                <span class="kcard-word-meaning-text">${item.meaning}</span>
              </div>
            </div>

            <!-- DÒNG BÊN DƯỚI: TRỌNG TÂM MẸO GHI NHỚ & CẤU THÀNH -->
            <div class="kcard-bottom-section">
              <div class="kcard-mnemonic-box">
                <div class="mnemonic-badge-header">
                  <span class="mnemonic-icon">${APP_ICONS.lightbulb}</span>
                  <strong class="mnemonic-title">Mẹo Ghi Nhớ & Cấu Thành</strong>
                </div>
                <div class="mnemonic-content-flow">
                  ${formatKanjiMnemonic(item.mnemonic)}
                </div>
              </div>
            </div>

          </article>
        `).join('')}
      </div>

      <!-- KHỐI GỢI Ý CHUYỂN SANG BÀI KIỂM TRA FLASHCARD -->
      <div class="kcard-switch-cta-box">
        <div class="switch-cta-icon">${APP_ICONS.cards}</div>
        <div class="switch-cta-info">
          <h4 class="switch-cta-title">Sẵn sàng kiểm tra trí nhớ Kanji Bài ${lessonNum}?</h4>
          <p class="switch-cta-desc">Chuyển sang Thẻ Kiểm Tra Flashcard để lật thẻ 3D, kiểm tra phản xạ câu chuyện mẹo nhớ và tự đánh giá xem bạn đã thuộc bao nhiêu chữ Hán!</p>
        </div>
        <button type="button" class="btn-switch-kfc" onclick="switchKanjiTab('flashcard', true)">
          <span>Bắt đầu Kiểm tra Flashcard →</span>
        </button>
      </div>

      <!-- Khối đánh dấu hoàn thành cuối phần Mẹo nhớ Kanji -->
      <div class="lesson-completion-card">
        <div class="completion-card-inner">
          <div class="completion-text-wrap">
            <h4 class="completion-heading">Hoàn thành Mẹo nhớ Kanji Bài ${lessonNum}</h4>
            <p class="completion-sub">Bạn đã ghi nhớ toàn bộ các chữ Hán và mẹo chiết tự của bài này?</p>
          </div>
          <button id="btn-complete-lesson" 
                  class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${lesson.id}')">
            ${isCompleted ? '✓ Đã hoàn thành (Bấm để hủy)' : '✓ Đánh dấu hoàn thành phần này'}
          </button>
        </div>
      </div>

    </div>

    <!-- THẺ 2: BÀI KIỂM TRA FLASHCARD MẸO NHỚ (TÁCH RIÊNG HOÀN TOÀN) -->
    <div id="kanji-tab-pane-flashcard" style="display: ${currentKanjiTab === 'flashcard' ? 'block' : 'none'};">
      <div id="kanji-flashcard-mount"></div>

      <!-- Khối đánh dấu hoàn thành cuối phần Flashcard -->
      <div class="lesson-completion-card">
        <div class="completion-card-inner">
          <div class="completion-text-wrap">
            <h4 class="completion-heading">Hoàn thành Kiểm tra Flashcard Bài ${lessonNum}</h4>
            <p class="completion-sub">Bạn đã thuộc hết bộ thẻ Flashcard và trả lời đúng các câu hỏi phản xạ?</p>
          </div>
          <button class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${lesson.id}')">
            ${isCompleted ? '✓ Đã hoàn thành (Bấm để hủy)' : '✓ Đánh dấu hoàn thành phần này'}
          </button>
        </div>
      </div>
    </div>

    ${renderModuleFooterNav(lessonNum, 'kanji')}
  `;

  // Khởi tạo Studio Flashcard
  initKanjiFlashcardStudio(lesson);
}

// --------------------------------------------------------------------------
// 4D. HỆ THỐNG ĐIỀU KHIỂN & BÀI KIỂM TRA FLASHCARD MẸO NHỚ KANJI
// --------------------------------------------------------------------------
let currentKfcLesson = null;
let kfcDeck = [];
let kfcFilter = 'all'; // 'all' | 'unlearned' | 'learned'
let kfcMode = 'kanji-first'; // 'kanji-first' | 'mnemonic-first' | 'quiz-mode'
let kfcIndex = 0;
let kfcLearnedSet = new Set();
let kfcKeydownAttached = false;
let kfcQuizDeck = [];
let kfcQuizIndex = 0;
let kfcQuizScore = 0;
let kfcQuizAdvanceTimer = null;

function getKanjiLearnedStorageKey(lessonNum) {
  return `minna_kfc_learned_l${lessonNum}`;
}

function loadKanjiLearnedSet(lessonNum) {
  if (typeof KanjiEngine !== 'undefined' && typeof KanjiEngine.loadLearnedSet === 'function') {
    return KanjiEngine.loadLearnedSet(lessonNum);
  }
  const arr = safeGetJsonStorage(getKanjiLearnedStorageKey(lessonNum), [], Array.isArray);
  return new Set(Array.isArray(arr) ? arr : []);
}

function saveKanjiLearnedSet(lessonNum, learnedSet) {
  if (typeof KanjiEngine !== 'undefined' && typeof KanjiEngine.saveLearnedSet === 'function') {
    KanjiEngine.saveLearnedSet(lessonNum, learnedSet);
    return;
  }
  const arr = Array.from(learnedSet);
  safeSetStorage(getKanjiLearnedStorageKey(lessonNum), JSON.stringify(arr));
}

window.switchKanjiTab = function(tabName, shouldScroll = false) {
  currentKanjiTab = tabName === 'flashcard' ? 'flashcard' : 'list';
  if (typeof window !== 'undefined') window.currentKanjiTab = currentKanjiTab;

  const listBtn = document.getElementById('tab-btn-kanji-list');
  const fcBtn = document.getElementById('tab-btn-kanji-flashcard');
  const listPane = document.getElementById('kanji-tab-pane-list');
  const fcPane = document.getElementById('kanji-tab-pane-flashcard');

  if (listBtn) {
    listBtn.classList.toggle('active', currentKanjiTab === 'list');
    listBtn.setAttribute('aria-selected', currentKanjiTab === 'list' ? 'true' : 'false');
  }
  if (fcBtn) {
    fcBtn.classList.toggle('active', currentKanjiTab === 'flashcard');
    fcBtn.setAttribute('aria-selected', currentKanjiTab === 'flashcard' ? 'true' : 'false');
  }

  if (listPane) listPane.style.display = currentKanjiTab === 'list' ? 'block' : 'none';
  if (fcPane) fcPane.style.display = currentKanjiTab === 'flashcard' ? 'block' : 'none';

  // Đồng bộ trạng thái sync-tab trên Desktop
  const syncTabs = document.querySelectorAll ? document.querySelectorAll('.sync-tab-btn') : [];
  syncTabs.forEach(btn => {
    const text = btn.textContent || '';
    if (text.includes('Mẹo nhớ Kanji')) {
      btn.classList.toggle('active', currentKanjiTab === 'list');
    } else if (text.includes('Kiểm tra Flashcard')) {
      btn.classList.toggle('active', currentKanjiTab === 'flashcard');
    }
  });

  if (currentKanjiTab === 'flashcard') {
    if (currentKfcLesson) {
      initKanjiFlashcardStudio(currentKfcLesson);
    }
    triggerHaptic(10);
  }

  if (shouldScroll) {
    const nav = document.querySelector('.kanji-tab-nav-wrapper');
    if (nav && nav.scrollIntoView) {
      nav.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

window.switchKanjiModule = function(lessonNum, tabName = 'list') {
  currentKanjiTab = tabName;
  const targetId = `kanji-${lessonNum}`;
  if (currentActiveId === targetId) {
    switchKanjiTab(tabName, true);
  } else {
    switchModule(targetId);
    setTimeout(() => {
      switchKanjiTab(tabName, true);
    }, 50);
  }
};

function getFilteredKfcDeck() {
  if (kfcFilter === 'learned') {
    return kfcDeck.filter(it => kfcLearnedSet.has(it.id));
  } else if (kfcFilter === 'unlearned') {
    return kfcDeck.filter(it => !kfcLearnedSet.has(it.id));
  }
  return kfcDeck;
}

window.initKanjiFlashcardStudio = function(lesson) {
  if (!lesson) return;

  // Khi chuyển sang bài học khác, tự động đặt lại về chế độ Flashcard mặc định (Chữ Hán ➔ Mẹo nhớ)
  if (!currentKfcLesson || currentKfcLesson.lesson !== lesson.lesson) {
    kfcMode = 'kanji-first';
    kfcFilter = 'all';
  }

  currentKfcLesson = lesson;
  kfcDeck = Array.isArray(lesson.items) ? [...lesson.items] : [];
  kfcLearnedSet = loadKanjiLearnedSet(lesson.lesson);
  kfcIndex = 0;

  const mount = document.getElementById('kanji-flashcard-mount');
  if (!mount) return;

  const total = kfcDeck.length;
  const learnedCount = kfcDeck.filter(it => kfcLearnedSet.has(it.id)).length;
  const unlearnedCount = total - learnedCount;

  mount.innerHTML = `
    <div class="kanji-flashcard-studio">
      
      <!-- Header Studio Kiểm Tra Flashcard -->
      <div class="kfc-header">
        <div class="kfc-header-info">
          <div class="kfc-title-row">
            <span class="kfc-badge-icon">${APP_ICONS.cards}</span>
            <div>
              <h3 class="kfc-title">Kiểm Tra Flashcard Mẹo Nhớ Chữ Hán - Bài ${lesson.lesson}</h3>
              <p class="kfc-subtitle">Chạm thẻ để lật kiểm tra chiết tự, câu chuyện mẹo nhớ, cách đọc và âm Hán Việt</p>
            </div>
          </div>
        </div>
        
        <!-- Bộ lọc trạng thái thẻ: Tất cả / Chưa thuộc / Đã thuộc -->
        <div class="kfc-filter-group" role="tablist" aria-label="Lọc thẻ kiểm tra">
          <button type="button" class="kfc-filter-chip ${kfcFilter === 'all' ? 'active' : ''}" data-filter="all" onclick="filterKfcDeck('all', this)">
            Tất cả (<span id="kfc-count-all">${total}</span>)
          </button>
          <button type="button" class="kfc-filter-chip ${kfcFilter === 'unlearned' ? 'active' : ''}" data-filter="unlearned" onclick="filterKfcDeck('unlearned', this)">
            Chưa thuộc (<span id="kfc-count-unlearned">${unlearnedCount}</span>)
          </button>
          <button type="button" class="kfc-filter-chip ${kfcFilter === 'learned' ? 'active' : ''}" data-filter="learned" onclick="filterKfcDeck('learned', this)">
            Đã thuộc (<span id="kfc-count-learned">${learnedCount}</span>)
          </button>
        </div>
      </div>

      <!-- Thanh tiến độ & Mode Selector -->
      <div class="kfc-toolbar-bar">
        <!-- Progress Bar -->
        <div class="kfc-progress-wrap">
          <div class="kfc-progress-labels">
            <span class="kfc-counter-label" id="kfc-index-label">Thẻ 1 / ${total}</span>
            <span class="kfc-learned-label" id="kfc-learned-label">Đã thuộc: ${learnedCount}/${total} (${Math.round((learnedCount / (total || 1)) * 100)}%)</span>
          </div>
          <div class="kfc-progress-track">
            <div class="kfc-progress-bar" id="kfc-progress-bar" style="width: ${(learnedCount / (total || 1)) * 100}%;"></div>
          </div>
        </div>

        <!-- Mode Selector -->
        <div class="kfc-mode-selector">
          <span class="kfc-mode-title">Chế độ kiểm tra:</span>
          <button type="button" class="kfc-mode-btn ${kfcMode === 'kanji-first' ? 'active' : ''}" id="kfc-mode-kanji" onclick="setKfcMode('kanji-first', this)" title="Mặt trước: Chữ Hán ➔ Mặt sau: Mẹo nhớ &amp; Nghĩa">
            <span>Chữ Hán ➔ Mẹo nhớ</span>
          </button>
          <button type="button" class="kfc-mode-btn ${kfcMode === 'mnemonic-first' ? 'active' : ''}" id="kfc-mode-mnemonic" onclick="setKfcMode('mnemonic-first', this)" title="Mặt trước: Mẹo nhớ ➔ Mặt sau: Chữ Hán">
            <span>Mẹo nhớ ➔ Chữ Hán</span>
          </button>
          <button type="button" class="kfc-mode-btn ${kfcMode === 'quiz-mode' ? 'active' : ''}" id="kfc-mode-quiz" onclick="setKfcMode('quiz-mode', this)" title="Trắc nghiệm phản xạ 25 câu: Trộn lẫn Chữ Hán và Nghĩa, nhận diện mặt chữ gần giống nhau">
            <span style="display:inline-flex;align-items:center;gap:6px;">${APP_ICONS.bolt} <span>Trắc Nghiệm Phản Xạ (25 Câu)</span></span>
          </button>
        </div>
      </div>

      <!-- SÂN KHẤU 1: FLASHCARD CARD 3D -->
      <div class="kfc-card-stage" id="kfc-card-stage" style="display: ${kfcMode === 'quiz-mode' ? 'none' : 'flex'};">
        
        <div class="kfc-flashcard-3d" id="kfc-card" role="button" tabindex="0" title="Chạm để lật thẻ (hoặc phím Space)" onclick="flipKfcCard()">
          <div class="kfc-face kfc-front" id="kfc-face-front"></div>
          <div class="kfc-face kfc-back" id="kfc-face-back"></div>
        </div>

        <!-- BỘ NÚT ĐÁNH GIÁ (SPACED REPETITION) -->
        <div class="kfc-rating-actions" id="kfc-rating-actions">
          <button type="button" class="kfc-btn-rate kfc-rate-unlearned" onclick="rateKfcCurrent(false)" title="Đánh dấu Chưa Thuộc (Phím 1)">
            <span class="rate-icon">${APP_ICONS.xCircle}</span>
            <span>Chưa Nhớ</span>
            <span class="key-shortcut">[1]</span>
          </button>
          <button type="button" class="kfc-btn-rate kfc-rate-flip" onclick="flipKfcCard()" title="Lật thẻ (Phím Space)">
            <span class="rate-icon">${APP_ICONS.flip}</span>
            <span>Lật Thẻ</span>
            <span class="key-shortcut">[Space]</span>
          </button>
          <button type="button" class="kfc-btn-rate kfc-rate-learned" onclick="rateKfcCurrent(true)" title="Đánh dấu Đã Thuộc (Phím 2)">
            <span class="rate-icon">${APP_ICONS.checkCircle}</span>
            <span>Đã Nhớ</span>
            <span class="key-shortcut">[2]</span>
          </button>
        </div>

        <!-- BỘ NÚT ĐIỀU HƯỚNG CÔNG CỤ -->
        <div class="kfc-nav-controls" id="kfc-nav-controls">
          <button type="button" class="btn-tool" onclick="navKfcPrev()" title="Thẻ trước (Phím ←)">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.arrowLeft} <span>Trước</span></span>
          </button>
          <button type="button" class="btn-tool btn-tool-primary" id="kfc-audio-btn" onclick="speakKfcCurrent(event)" title="Phát âm tiếng Nhật chuẩn Tokyo">
            <span style="display:inline-flex;align-items:center;gap:4px;">${SPEAKER_ICON_HTML} <span>Phát Âm</span></span>
          </button>
          <button type="button" class="btn-tool" onclick="shuffleKfcDeck()" title="Trộn ngẫu nhiên bộ thẻ">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.shuffle} <span>Trộn Thẻ</span></span>
          </button>
          <button type="button" class="btn-tool" onclick="resetKfcProgress()" title="Đặt lại đánh giá nhớ của bài này">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Đặt Lại</span></span>
          </button>
          <button type="button" class="btn-tool" onclick="navKfcNext()" title="Thẻ sau (Phím →)">
            <span style="display:inline-flex;align-items:center;gap:4px;"><span>Tiếp</span> ${APP_ICONS.arrowRight}</span>
          </button>
        </div>

      </div>

      <!-- SÂN KHẤU 2: TRẮC NGHIỆM PHẢN XẠ MẸO NHỚ 4 ĐÁP ÁN -->
      <div class="kfc-quiz-stage" id="kfc-quiz-stage" style="display: ${kfcMode === 'quiz-mode' ? 'block' : 'none'};"></div>

    </div>
  `;

  if (kfcMode === 'quiz-mode') {
    startKfcQuiz();
  } else {
    renderKfcCard();
  }

  if (!kfcKeydownAttached && typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('keydown', handleKfcKeydown);
    kfcKeydownAttached = true;
  }
};

function renderKfcCard() {
  const card = document.getElementById('kfc-card');
  const front = document.getElementById('kfc-face-front');
  const back = document.getElementById('kfc-face-back');
  const stage = document.getElementById('kfc-card-stage');
  const ratingActions = document.getElementById('kfc-rating-actions');
  const navControls = document.getElementById('kfc-nav-controls');
  if (!card || !front || !back) return;

  const filtered = getFilteredKfcDeck();
  const totalInFilter = filtered.length;

  // Cập nhật bộ đếm & nhãn tiến độ
  const total = kfcDeck.length;
  const learnedCount = kfcDeck.filter(it => kfcLearnedSet.has(it.id)).length;
  const unlearnedCount = total - learnedCount;

  const countAll = document.getElementById('kfc-count-all');
  const countUnlearned = document.getElementById('kfc-count-unlearned');
  const countLearned = document.getElementById('kfc-count-learned');
  const learnedLabel = document.getElementById('kfc-learned-label');
  const progressBar = document.getElementById('kfc-progress-bar');
  const indexLabel = document.getElementById('kfc-index-label');

  if (countAll) countAll.textContent = String(total);
  if (countUnlearned) countUnlearned.textContent = String(unlearnedCount);
  if (countLearned) countLearned.textContent = String(learnedCount);
  if (learnedLabel) learnedLabel.textContent = `Đã thuộc: ${learnedCount}/${total} (${Math.round((learnedCount / (total || 1)) * 100)}%)`;
  if (progressBar) progressBar.style.width = `${(learnedCount / (total || 1)) * 100}%`;

  if (totalInFilter === 0) {
    card.style.display = 'none';
    if (ratingActions) ratingActions.style.display = 'none';
    if (navControls) navControls.style.display = 'none';
    if (indexLabel) indexLabel.textContent = `0 / 0 thẻ`;

    let emptyHtml = '';
    if (kfcFilter === 'unlearned') {
      emptyHtml = `
        <div class="kfc-empty-box">
          <div class="kfc-empty-icon">${APP_ICONS.checkCircle}</div>
          <h4 class="kfc-empty-title">Xuất Sắc! Bạn Đã Ghi Nhớ Toàn Bộ Chữ Hán!</h4>
          <p class="kfc-empty-desc">Không còn chữ Hán nào chưa thuộc trong Bài ${currentKfcLesson ? currentKfcLesson.lesson : ''}. Bạn đã nắm vững 100% mẹo nhớ và chiết tự!</p>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 10px;">
            <button type="button" class="btn-tool btn-tool-primary" onclick="filterKfcDeck('all')">Xem Tất Cả ${total} Thẻ</button>
            <button type="button" class="btn-tool" onclick="resetKfcProgress()">
              <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Đặt Lại Để Luyện Lại</span></span>
            </button>
          </div>
        </div>
      `;
    } else if (kfcFilter === 'learned') {
      emptyHtml = `
        <div class="kfc-empty-box">
          <div class="kfc-empty-icon">${APP_ICONS.lightbulb}</div>
          <h4 class="kfc-empty-title">Chưa Có Thẻ Nào Được Đánh Dấu "Đã Nhớ"</h4>
          <p class="kfc-empty-desc">Hãy chuyển về danh sách tất cả các thẻ, lật thẻ để kiểm tra và nhấn nút "Đã Nhớ" khi bạn đã thuộc nhé!</p>
          <button type="button" class="btn-tool btn-tool-primary" onclick="filterKfcDeck('all')">Xem Tất Cả ${total} Thẻ</button>
        </div>
      `;
    } else {
      emptyHtml = `
        <div class="kfc-empty-box">
          <div class="kfc-empty-icon">${APP_ICONS.book}</div>
          <h4 class="kfc-empty-title">Chưa Có Dữ Liệu Thẻ Cho Bài Này</h4>
          <p class="kfc-empty-desc">Dữ liệu từ vựng chữ Hán đang được cập nhật.</p>
        </div>
      `;
    }

    const oldEmpty = document.getElementById('kfc-empty-container');
    if (oldEmpty && oldEmpty.remove) oldEmpty.remove();
    else if (oldEmpty && oldEmpty.parentNode) oldEmpty.parentNode.removeChild(oldEmpty);
    const emptyContainer = document.createElement('div');
    emptyContainer.id = 'kfc-empty-container';
    emptyContainer.innerHTML = emptyHtml;
    if (stage && stage.appendChild) stage.appendChild(emptyContainer);
    return;
  }

  const oldEmpty = document.getElementById('kfc-empty-container');
  if (oldEmpty && oldEmpty.remove) oldEmpty.remove();
  else if (oldEmpty && oldEmpty.parentNode) oldEmpty.parentNode.removeChild(oldEmpty);

  card.style.display = 'block';
  if (ratingActions) ratingActions.style.display = 'flex';
  if (navControls) navControls.style.display = 'flex';

  if (kfcIndex >= totalInFilter) kfcIndex = 0;
  if (kfcIndex < 0) kfcIndex = totalInFilter - 1;

  if (indexLabel) indexLabel.textContent = `Thẻ ${kfcIndex + 1} / ${totalInFilter}`;

  const item = filtered[kfcIndex];
  card.classList.remove('flipped');

  const isLearned = kfcLearnedSet.has(item.id);
  const statusPillHtml = `
    <span class="kfc-status-pill ${isLearned ? 'is-learned' : ''}">
      ${isLearned ? '✓ Đã thuộc' : '○ Chưa thuộc'}
    </span>
  `;

  if (kfcMode === 'mnemonic-first') {
    // CHẾ ĐỘ 2: NHÌN MẸO NHỚ ➔ ĐOÁN CHỮ HÁN
    front.innerHTML = `
      ${statusPillHtml}
      <span class="kfc-face-tag accent-amber">THỬ THÁCH MẸO NHỚ</span>
      
      <div class="kfc-mnemonic-card-box" style="margin: 12px 0;">
        <div class="kfc-mnemonic-header">
          <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.lightbulb} <span>Câu chuyện &amp; Chiết tự:</span></span>
        </div>
        <div class="mnemonic-content-flow">
          ${formatKanjiMnemonic(item.mnemonic)}
        </div>
      </div>

      <div class="kfc-chips-row">
        <span class="badge badge-primary">Nghĩa: <strong>${item.meaning}</strong></span>
        ${item.hanViet ? `<span class="badge badge-sakura"><strong>${item.hanViet}</strong></span>` : ''}
      </div>

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Đố bạn đây là Chữ Hán nào? Chạm để lật xem đáp án</span></span>
      </div>
    `;

    back.innerHTML = `
      ${statusPillHtml}
      <span class="kfc-face-tag accent-emerald">ĐÁP ÁN CHỮ HÁN</span>

      <div class="kfc-main-kanji accent-glow">${item.word}</div>

      <div class="kfc-back-top">
        <div class="kfc-back-word-title">
          <span class="kfc-back-reading">${item.reading || ''}</span>
          <strong class="kfc-back-kanji">${item.hanViet}</strong>
          <button type="button" class="kcard-audio-btn" onclick="speakJapanese('${(item.reading || item.word).replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim()}', this, event)">
            ${SPEAKER_ICON_HTML} <span>Nghe</span>
          </button>
        </div>
        <div class="kfc-back-meaning">
          <span>${item.meaning}</span>
        </div>
      </div>

      <div class="kfc-chips-row">
        ${item.radicals ? `<span class="badge badge-subtle">Bộ thủ: ${item.radicals}</span>` : ''}
        ${item.strokes ? `<span class="badge badge-subtle">${item.strokes} nét</span>` : ''}
        ${item.type ? `<span class="badge badge-primary">${item.type}</span>` : ''}
      </div>

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Chạm để quay lại mặt trước</span></span>
      </div>
    `;

  } else {
    // CHẾ ĐỘ 1: NHÌN CHỮ HÁN ➔ ĐOÁN MẸO NHỚ & NGHĨA (MẶC ĐỊNH)
    front.innerHTML = `
      ${statusPillHtml}
      <span class="kfc-face-tag">TỪ VỰNG CHỮ HÁN</span>

      <div class="kfc-main-kanji">${item.word}</div>

      <div class="kfc-hanviet-box">
        <strong class="kfc-hanviet-main">${item.hanViet}</strong>
      </div>

      <div class="kfc-chips-row">
        ${item.strokes ? `<span class="badge badge-subtle">${item.strokes} nét</span>` : ''}
        ${item.type ? `<span class="badge badge-subtle">${item.type}</span>` : ''}
      </div>

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Chạm vào thẻ hoặc bấm phím Space để lật xem Mẹo nhớ &amp; Ý nghĩa</span></span>
      </div>
    `;

    back.innerHTML = `
      ${statusPillHtml}
      <span class="kfc-face-tag accent-emerald">ĐÁP ÁN: MẸO GHI NHỚ &amp; Ý NGHĨA</span>

      <div class="kfc-back-top">
        <div class="kfc-back-word-title">
          <strong class="kfc-back-kanji">${item.word}</strong>
          ${item.reading ? `<span class="kfc-back-reading">${item.reading}</span>` : ''}
          <button type="button" class="kcard-audio-btn" onclick="speakJapanese('${(item.reading || item.word).replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim()}', this, event)">
            ${SPEAKER_ICON_HTML} <span>Nghe</span>
          </button>
        </div>
        <div class="kfc-back-meaning">
          <span>${item.meaning}</span>
        </div>
      </div>

      <div class="kfc-mnemonic-card-box">
        <div class="kfc-mnemonic-header">
          <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.lightbulb} <span>Mẹo Ghi Nhớ &amp; Cấu Thành:</span></span>
        </div>
        <div class="mnemonic-content-flow">
          ${formatKanjiMnemonic(item.mnemonic)}
        </div>
      </div>

      ${item.example ? `
        <div class="kfc-back-example">
          <strong>Ví dụ:</strong> ${item.example}
        </div>
      ` : ''}

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Chạm để quay lại mặt trước</span></span>
      </div>
    `;
  }
}

window.flipKfcCard = function() {
  const card = document.getElementById('kfc-card');
  if (card) {
    triggerHaptic(10);
    card.classList.toggle('flipped');
  }
};

window.rateKfcCurrent = function(isLearned) {
  const filtered = getFilteredKfcDeck();
  if (!filtered.length || !currentKfcLesson) return;

  const item = filtered[kfcIndex];
  if (!item) return;

  if (isLearned) {
    kfcLearnedSet.add(item.id);
    triggerHaptic(15);
    showToast(`Đã nhớ: ${item.word} (${item.hanViet})`);
  } else {
    kfcLearnedSet.delete(item.id);
    triggerHaptic(25);
    showToast(`Cần ôn lại: ${item.word} (${item.hanViet})`);
  }

  saveKanjiLearnedSet(currentKfcLesson.lesson, kfcLearnedSet);

  // Nếu đang lọc theo 'unlearned' hoặc 'learned', danh sách lọc sẽ thay đổi kích thước
  if (kfcFilter !== 'all') {
    const nextFiltered = getFilteredKfcDeck();
    if (kfcIndex >= nextFiltered.length) kfcIndex = 0;
  } else {
    kfcIndex = (kfcIndex + 1) % filtered.length;
  }

  renderKfcCard();
};

window.navKfcNext = function() {
  const filtered = getFilteredKfcDeck();
  if (!filtered.length) return;
  triggerHaptic(10);
  kfcIndex = (kfcIndex + 1) % filtered.length;
  renderKfcCard();
};

window.navKfcPrev = function() {
  const filtered = getFilteredKfcDeck();
  if (!filtered.length) return;
  triggerHaptic(10);
  kfcIndex = (kfcIndex - 1 + filtered.length) % filtered.length;
  renderKfcCard();
};

window.shuffleKfcDeck = function() {
  if (!kfcDeck.length) return;
  triggerHaptic(12);
  kfcDeck.sort(() => Math.random() - 0.5);
  kfcIndex = 0;
  renderKfcCard();
  showToast("Đã trộn ngẫu nhiên bộ thẻ Flashcard!");
};

window.resetKfcProgress = function() {
  if (!currentKfcLesson) return;
  kfcLearnedSet.clear();
  saveKanjiLearnedSet(currentKfcLesson.lesson, kfcLearnedSet);
  kfcIndex = 0;
  triggerHaptic(15);
  renderKfcCard();
  showToast(`Đã đặt lại tiến độ ghi nhớ Bài ${currentKfcLesson.lesson}`);
};

window.filterKfcDeck = function(filterType, btnEl = null) {
  kfcFilter = filterType || 'all';
  kfcIndex = 0;
  triggerHaptic(10);

  const chips = document.querySelectorAll ? document.querySelectorAll('.kfc-filter-chip') : [];
  chips.forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-filter') === kfcFilter);
  });

  // Nếu đang ở quiz-mode mà bấm chọn bộ lọc flashcard (Tất cả / Chưa thuộc / Đã thuộc),
  // tự động quay lại chế độ xem Flashcard tương ứng
  if (kfcMode === 'quiz-mode') {
    setKfcMode('kanji-first');
  } else {
    renderKfcCard();
  }
};

window.setKfcMode = function(mode, btnEl = null) {
  kfcMode = mode || 'kanji-first';
  triggerHaptic(10);

  const btns = document.querySelectorAll ? document.querySelectorAll('.kfc-mode-btn') : [];
  btns.forEach(b => b.classList.remove('active'));
  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    const targetId = kfcMode === 'quiz-mode' ? 'kfc-mode-quiz' :
      kfcMode === 'mnemonic-first' ? 'kfc-mode-mnemonic' : 'kfc-mode-kanji';
    const targetBtn = document.getElementById(targetId);
    if (targetBtn) targetBtn.classList.add('active');
  }

  const cardStage = document.getElementById('kfc-card-stage');
  const quizStage = document.getElementById('kfc-quiz-stage');

  if (kfcMode === 'quiz-mode') {
    if (cardStage) cardStage.style.display = 'none';
    if (quizStage) {
      quizStage.style.display = 'block';
      startKfcQuiz();
    }
  } else {
    if (quizStage) quizStage.style.display = 'none';
    if (cardStage) {
      cardStage.style.display = 'flex';
      renderKfcCard();
    }
  }
};

window.speakKfcCurrent = function(event) {
  if (event && event.stopPropagation) event.stopPropagation();
  const filtered = getFilteredKfcDeck();
  if (!filtered.length) return;
  const item = filtered[kfcIndex];
  if (!item) return;
  const targetText = (item.reading || item.word || '').replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim();
  const btn = document.getElementById('kfc-audio-btn');
  speakJapanese(targetText, btn, event);
};

function handleKfcKeydown(e) {
  const mount = document.getElementById('kanji-flashcard-mount');
  if (!mount) return;
  const fcPane = document.getElementById('kanji-tab-pane-flashcard');
  if (!fcPane || fcPane.style.display === 'none') return;

  const targetTag = (e.target && e.target.tagName) ? e.target.tagName.toUpperCase() : '';
  if (targetTag === 'INPUT' || targetTag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;

  if (kfcMode === 'quiz-mode') return; // Trong chế độ trắc nghiệm không lật flashcard

  if (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault();
    flipKfcCard();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    navKfcNext();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    navKfcPrev();
  } else if (e.key === '1') {
    e.preventDefault();
    rateKfcCurrent(false);
  } else if (e.key === '2') {
    e.preventDefault();
    rateKfcCurrent(true);
  }
}

// --------------------------------------------------------------------------
// 4E. HỆ THỐNG TRẮC NGHIỆM PHẢN XẠ CHỮ HÁN (25 CÂU MIX KANJI & NGHĨA)
// --------------------------------------------------------------------------

// Từ điển ánh xạ các chữ Hán có nét/bộ thủ gần giống nhau (Confusable Look-alike Kanji)
// Tách biệt tại data/kanji_lookalikes.js (Đồng bộ qua window.KANJI_LOOKALIKES_MAP kèm fallback an toàn)
const KANJI_LOOKALIKES_MAP = (typeof window !== 'undefined' && window.KANJI_LOOKALIKES_MAP)
  || (typeof global !== 'undefined' && global.KANJI_LOOKALIKES_MAP)
  || {};

// Hàm sinh 3 chữ Hán gây nhiễu có nét/cách viết gần giống nhau (Look-alike Distractors)
function getLookalikeKanjiDistractors(item, lessonItems) {
  if (typeof QuizEngine !== 'undefined' && typeof QuizEngine.getLookalikeKanjiDistractors === 'function') {
    return QuizEngine.getLookalikeKanjiDistractors(item, lessonItems);
  }
  const distractors = [];
  const word = (item.word || item.kanji || '').trim();
  const kanjis = Array.isArray(item.kanjis) && item.kanjis.length > 0 
    ? item.kanjis 
    : Array.from(word).filter(ch => /[\u4e00-\u9faf]/.test(ch));

  // 1. Thay thế trực tiếp các Hán tự bằng các chữ viết gần giống từ từ điển KANJI_LOOKALIKES_MAP
  for (const k of kanjis) {
    const lookalikes = (typeof KANJI_LOOKALIKES_MAP !== 'undefined' ? KANJI_LOOKALIKES_MAP[k] : (typeof window !== 'undefined' && window.KANJI_LOOKALIKES_MAP && window.KANJI_LOOKALIKES_MAP[k])) || [];
    for (const sim of lookalikes) {
      if (sim !== k) {
        const fakeWord = word.replace(new RegExp(k, 'g'), sim);
        if (fakeWord !== word && !distractors.includes(fakeWord)) {
          distractors.push(fakeWord);
          if (distractors.length >= 3) break;
        }
      }
    }
    if (distractors.length >= 3) break;
  }

  // 2. Nếu chưa đủ 3 đáp án nhiễu, tìm các từ khác trong bài có chứa bộ thủ hoặc chữ gần giống
  if (distractors.length < 3 && Array.isArray(lessonItems)) {
    for (const other of lessonItems) {
      const oWord = (other.word || other.kanji || '').trim();
      if (oWord && oWord !== word && !distractors.includes(oWord)) {
        if (Math.abs(oWord.length - word.length) <= 1) {
          distractors.push(oWord);
          if (distractors.length >= 3) break;
        }
      }
    }
  }

  // 3. Fallback: Nếu vẫn chưa đủ 3, lấy các từ bất kỳ khác trong bài
  if (distractors.length < 3 && Array.isArray(lessonItems)) {
    for (const other of lessonItems) {
      const oWord = (other.word || other.kanji || '').trim();
      if (oWord && oWord !== word && !distractors.includes(oWord)) {
        distractors.push(oWord);
        if (distractors.length >= 3) break;
      }
    }
  }

  // 4. Fallback toàn cục từ các bài khác nếu bài học có quá ít từ
  if (distractors.length < 3 && typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) {
    for (const kl of kanjiLessonsData) {
      if (!kl.items) continue;
      for (const other of kl.items) {
        const oWord = (other.word || other.kanji || '').trim();
        if (oWord && oWord !== word && !distractors.includes(oWord)) {
          distractors.push(oWord);
          if (distractors.length >= 3) break;
        }
      }
      if (distractors.length >= 3) break;
    }
  }

  return distractors.slice(0, 3);
}

// Hàm sinh 3 nghĩa tiếng Việt gây nhiễu cho bài trắc nghiệm
function getMeaningDistractors(item, lessonItems) {
  const correctMeaning = (item.meaning || '').trim();
  const distractors = [];

  const pool = (lessonItems || []).filter(it => (it.meaning || '').trim() && (it.meaning || '').trim() !== correctMeaning);
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);

  for (const other of shuffledPool) {
    const m = (other.meaning || '').trim();
    if (m && m !== correctMeaning && !distractors.includes(m)) {
      distractors.push(m);
      if (distractors.length >= 3) break;
    }
  }

  if (distractors.length < 3 && typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) {
    for (const kl of kanjiLessonsData) {
      if (!kl.items) continue;
      for (const other of kl.items) {
        const m = (other.meaning || '').trim();
        if (m && m !== correctMeaning && !distractors.includes(m)) {
          distractors.push(m);
          if (distractors.length >= 3) break;
        }
      }
      if (distractors.length >= 3) break;
    }
  }

  if (distractors.length < 3 && typeof lessonsData !== 'undefined' && Array.isArray(lessonsData)) {
    for (const l of lessonsData) {
      if (!l.vocabulary) continue;
      for (const other of l.vocabulary) {
        const m = (other.meaning || '').trim();
        if (m && m !== correctMeaning && !distractors.includes(m)) {
          distractors.push(m);
          if (distractors.length >= 3) break;
        }
      }
      if (distractors.length >= 3) break;
    }
  }

  return distractors.slice(0, 3);
}

function startKfcQuiz() {
  if (kfcQuizAdvanceTimer) {
    clearTimeout(kfcQuizAdvanceTimer);
    kfcQuizAdvanceTimer = null;
  }

  const quizStage = document.getElementById('kfc-quiz-stage');
  if (!quizStage) return;

  if (!currentKfcLesson && typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) {
    const num = (typeof lastLessonNumber !== 'undefined' ? lastLessonNumber : 1);
    currentKfcLesson = kanjiLessonsData.find(l => l.lesson === num) || kanjiLessonsData[0];
  }
  if (!currentKfcLesson) return;

  const items = currentKfcLesson.items || [];
  if (items.length < 2) {
    quizStage.innerHTML = `<p class="kq-empty">Bài này đang cập nhật câu hỏi trắc nghiệm phản xạ.</p>`;
    return;
  }

  // TỔNG SỐ LƯỢNG CÂU HỎI: CHUẨN ĐÚNG 25 CÂU
  const TARGET_QUIZ_COUNT = 25;
  const half1 = Math.ceil(TARGET_QUIZ_COUNT / 2); // 13 câu
  const half2 = TARGET_QUIZ_COUNT - half1; // 12 câu

  // Trộn danh sách từ vựng bài học
  const shuffledPool1 = [...items].sort(() => Math.random() - 0.5);
  const shuffledPool2 = [...items].sort(() => Math.random() - 0.5);

  // Chọn 13 từ cho Dạng 1: Chữ Hán ➔ Chọn Nghĩa Tiếng Việt
  const k2mItems = [];
  for (let i = 0; i < half1; i++) {
    k2mItems.push(shuffledPool1[i % shuffledPool1.length]);
  }

  // Chọn 12 từ cho Dạng 2: Nghĩa Tiếng Việt ➔ Chọn Chữ Hán (ưu tiên các từ chưa trùng với Dạng 1)
  const remaining = shuffledPool1.slice(half1);
  const m2kItems = [];
  for (const it of remaining) {
    if (m2kItems.length >= half2) break;
    m2kItems.push(it);
  }
  for (const it of shuffledPool2) {
    if (m2kItems.length >= half2) break;
    if (!m2kItems.includes(it)) m2kItems.push(it);
  }
  while (m2kItems.length < half2 && items.length > 0) {
    m2kItems.push(items[m2kItems.length % items.length]);
  }

  // Xây dựng câu hỏi Dạng 1: Chữ Hán ➔ 4 Nghĩa tiếng Việt
  const questionsType1 = k2mItems.map((item) => {
    const correctMeaning = (item.meaning || '').trim();
    const wrongMeanings = getMeaningDistractors(item, items);
    const options = [
      { text: correctMeaning, isCorrect: true },
      ...wrongMeanings.map(m => ({ text: m, isCorrect: false }))
    ].sort(() => Math.random() - 0.5);

    return {
      item,
      type: 'kanji-to-meaning',
      options
    };
  });

  // Xây dựng câu hỏi Dạng 2: Nghĩa Tiếng Việt ➔ 4 Chữ Hán có nét/cách viết gần giống nhau
  const questionsType2 = m2kItems.map((item) => {
    const correctWord = (item.word || '').trim();
    const wrongKanjiWords = getLookalikeKanjiDistractors(item, items);
    const options = [
      { text: correctWord, isCorrect: true },
      ...wrongKanjiWords.map(w => ({ text: w, isCorrect: false }))
    ].sort(() => Math.random() - 0.5);

    return {
      item,
      type: 'meaning-to-kanji',
      options
    };
  });

  // Trộn lẫn xen kẽ cả 2 dạng câu hỏi để tối đa hóa khả năng nhận diện phản xạ
  kfcQuizDeck = [...questionsType1, ...questionsType2]
    .sort(() => Math.random() - 0.5)
    .slice(0, TARGET_QUIZ_COUNT);

  kfcQuizIndex = 0;
  kfcQuizScore = 0;
  if (typeof window !== 'undefined') window.kfcQuizDeck = kfcQuizDeck;
  renderKfcQuizQuestion();
}

function renderKfcQuizQuestion() {
  if (kfcQuizAdvanceTimer) {
    clearTimeout(kfcQuizAdvanceTimer);
    kfcQuizAdvanceTimer = null;
  }

  const quizStage = document.getElementById('kfc-quiz-stage');
  if (!quizStage) return;

  if (kfcQuizIndex >= kfcQuizDeck.length) {
    const percent = Math.round((kfcQuizScore / kfcQuizDeck.length) * 100);
    quizStage.innerHTML = `
      <div class="kfc-empty-box" style="padding: 36px 20px;">
        <div class="kfc-empty-icon">${percent >= 80 ? APP_ICONS.checkCircle : APP_ICONS.cards}</div>
        <h4 class="kfc-empty-title">Hoàn Thành Bài Kiểm Tra 25 Câu!</h4>
        <p class="kfc-empty-desc">
          Kết quả phản xạ nhận biết: <strong>${kfcQuizScore} / ${kfcQuizDeck.length}</strong> câu chính xác (${percent}%).
        </p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 14px;">
          <button type="button" class="btn-tool btn-tool-primary" onclick="startKfcQuiz()" style="min-height: 44px; padding: 10px 20px;">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Làm Lại Lượt Mới (25 câu)</span></span>
          </button>
          <button type="button" class="btn-tool" onclick="setKfcMode('kanji-first')" style="min-height: 44px; padding: 10px 20px;">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.cards} <span>Quay Lại Lật Flashcard 3D</span></span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  const q = kfcQuizDeck[kfcQuizIndex];
  const item = q.item;
  const isK2M = q.type === 'kanji-to-meaning';

  // Tiêu đề & Thẻ tag nhận diện
  const typeTag = isK2M ? 'Đoán Nghĩa Chữ Hán' : 'Phân Biệt Mặt Chữ Hán';
  const modeTitle = isK2M ? 'Chữ Hán ➔ Nghĩa Tiếng Việt' : 'Nghĩa Tiếng Việt ➔ Chữ Hán';
  const modeSubtitle = isK2M 
    ? 'Quan sát Chữ Hán và chọn đúng Ý nghĩa Tiếng Việt tương ứng' 
    : 'Chọn đúng Chữ Hán tương ứng (chú ý phân biệt các chữ viết gần giống nhau)';

  quizStage.innerHTML = `
    <div class="practice-box" style="padding: 22px;">
      <div class="practice-box-header">
        <div class="practice-box-title">
          <span class="practice-icon-badge ${isK2M ? 'accent-sakura' : 'accent-indigo'}">${APP_ICONS.bolt}</span>
          <div>
            <h4>Trắc Nghiệm Phản Xạ: ${modeTitle}</h4>
            <span class="practice-sub">${modeSubtitle}</span>
          </div>
        </div>
        <span class="practice-counter-pill accent-emerald">Đúng: ${kfcQuizScore}/${kfcQuizDeck.length}</span>
      </div>

      <div class="kq-body" style="min-height: 250px; justify-content: flex-start; gap: 16px;">
        <!-- KHUNG HIỂN THỊ ĐỀ BÀI (HOÀN TOÀN KHÔNG CÓ CHỮ HIRAGANA ĐỂ TRÁNH LỘ ĐÁP ÁN) -->
        <div style="text-align: center; width: 100%;">
          <span class="kq-step-tag">Câu ${kfcQuizIndex + 1}/${kfcQuizDeck.length} • ${typeTag}</span>
          
          ${isK2M ? `
            <!-- DẠNG 1: ĐỀ BÀI LÀ CHỮ HÁN LỚN (KHÔNG CÓ CHỮ HIRAGANA) -->
            <div class="kfc-quiz-main-kanji" style="font-family: var(--font-mincho); font-size: clamp(48px, 6vw, 64px); font-weight: 700; color: var(--text-primary); margin: 10px 0; letter-spacing: 2px;">
              ${item.word}
            </div>
          ` : `
            <!-- DẠNG 2: ĐỀ BÀI LÀ NGHĨA TIẾNG VIỆT (KHÔNG CÓ CHỮ HIRAGANA) -->
            <div class="kfc-quiz-main-meaning">
              "${item.meaning}"
            </div>
          `}
        </div>

        <!-- CÁC ĐÁP ÁN LỰA CHỌN (DẠNG LƯỚI 2x2 CÂN ĐỐI) -->
        <div class="kq-options">
          ${q.options.map((opt, oIdx) => `
            <button type="button" 
                    class="kq-opt" 
                    style="font-size: ${isK2M ? '13.5px' : '17px'}; font-weight: ${isK2M ? '600' : '700'}; ${!isK2M ? 'font-family: var(--font-mincho), serif; letter-spacing: 0.5px;' : ''}" 
                    data-correct="${opt.isCorrect ? 'true' : 'false'}">
              <span style="display: flex; align-items: center; gap: 8px;">
                <strong style="color: var(--accent-primary); font-size: 13.5px; font-family: var(--font-sans); flex-shrink: 0;">${String.fromCharCode(65 + oIdx)}.</strong>
                <span>${opt.text}</span>
              </span>
              <span class="kq-feedback-icon" style="display: none; font-size: 15px; font-weight: 800; font-family: var(--font-sans);"></span>
            </button>
          `).join('')}
        </div>

        <!-- VÙNG HIỂN THỊ MẸO NHỚ & CHI TIẾT ĐẦY ĐỦ CỦNG CỐ SAU KHI CHỌN -->
        <div id="kfc-quiz-mnemonic-reveal" style="display: none; width: 100%; margin-top: 8px;">
          <div class="kfc-mnemonic-card-box" style="margin: 0; background: var(--bg-card-inner); border-left: 4px solid var(--accent-primary);">
            
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
              <span style="font-weight: 800; font-size: 14px; color: var(--text-primary); display: inline-flex; align-items: center; gap: 6px;">${APP_ICONS.book} <span>Thông Tin Từ Vựng &amp; Cách Đọc:</span></span>
              <button type="button" class="kcard-audio-btn" onclick="speakJapanese('${(item.reading || item.word || '').replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim()}', this, event)" style="margin: 0; min-height: 36px; padding: 4px 12px;">
                ${SPEAKER_ICON_HTML} <span>Nghe Phát Âm</span>
              </button>
            </div>

            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; padding-bottom: 10px; border-bottom: 1px dashed var(--border-color);">
              <span style="font-family: var(--font-mincho); font-size: 26px; font-weight: 800; color: var(--text-primary); letter-spacing: 1px;">${item.word}</span>
              ${item.reading ? `<span style="font-family: var(--font-japanese); font-size: 17px; font-weight: 700; color: var(--accent-primary);">${item.reading}</span>` : ''}
              <span style="font-size: 13.5px; font-weight: 700; color: var(--accent-primary); background: var(--bg-tertiary); padding: 3px 10px; border-radius: 6px; border: 1px solid var(--border-color); letter-spacing: 0.5px;">
                ${item.hanViet}
              </span>
              <span style="font-size: 14px; font-weight: 600; color: var(--text-secondary);">
                = <strong>${item.meaning}</strong>
              </span>
            </div>

            <div class="kfc-mnemonic-header">
              <span style="display: inline-flex; align-items: center; gap: 6px;">${APP_ICONS.lightbulb} <span>Mẹo Ghi Nhớ &amp; Phân Tích Bộ Thủ:</span></span>
            </div>
            <div class="mnemonic-content-flow">
              ${formatKanjiMnemonic(item.mnemonic)}
            </div>

            ${item.example ? `
              <div style="margin-top: 10px; padding: 8px 12px; background: var(--bg-tertiary); border-radius: 8px; font-size: 13.5px;">
                <strong>Ví dụ:</strong> <span style="font-family: var(--font-japanese);">${item.example}</span>
              </div>
            ` : ''}

            <div style="margin-top: 14px; text-align: right;">
              <button type="button" class="btn-tool btn-tool-primary" id="kfc-quiz-next-btn" onclick="advanceKfcQuizQuestion()" style="min-height: 44px; padding: 8px 18px; font-size: 14.5px; font-weight: 700; width: 100%; justify-content: center; display: inline-flex; align-items: center; gap: 6px;">
                <span>Câu Tiếp Theo</span> ${APP_ICONS.arrowRight}
              </button>
            </div>
          </div>
        </div>

      </div>

      <div class="kq-controls">
        <button type="button" class="btn-tool" onclick="startKfcQuiz()">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Đổi Bộ Câu Hỏi</span></span>
        </button>
        <button type="button" class="btn-tool" onclick="setKfcMode('kanji-first')">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.cards} <span>Về Thẻ Flashcard 3D</span></span>
        </button>
      </div>
    </div>
  `;

  const optBtns = quizStage.querySelectorAll('.kq-opt');
  const revealBox = quizStage.querySelector('#kfc-quiz-mnemonic-reveal');

  optBtns.forEach(btn => {
    btn.onclick = () => {
      triggerHaptic(10);
      optBtns.forEach(b => b.disabled = true);
      const isCor = btn.getAttribute('data-correct') === 'true';
      const icon = btn.querySelector('.kq-feedback-icon');

      if (isCor) {
        btn.classList.add('correct');
        if (icon) { icon.textContent = '✓'; icon.style.display = 'inline'; }
        kfcQuizScore++;
      } else {
        btn.classList.add('wrong');
        if (icon) { icon.textContent = '✗'; icon.style.display = 'inline'; }
        optBtns.forEach(b => {
          if (b.getAttribute('data-correct') === 'true') {
            b.classList.add('correct');
            const cIcon = b.querySelector('.kq-feedback-icon');
            if (cIcon) { cIcon.textContent = '✓'; cIcon.style.display = 'inline'; }
          }
        });
      }

      // Cập nhật điểm trên thanh tiêu đề
      const scorePill = quizStage.querySelector('.practice-counter-pill');
      if (scorePill) scorePill.textContent = `Đúng: ${kfcQuizScore}/${kfcQuizDeck.length}`;

      // Hiển thị chi tiết cách đọc, Hán Việt, phát âm và mẹo nhớ để củng cố
      if (revealBox) revealBox.style.display = 'block';

      // Tự động chuyển câu sau một khoảng dừng thoải mái hoặc chuyển ngay khi bấm nút Tiếp Theo
      if (kfcQuizAdvanceTimer) clearTimeout(kfcQuizAdvanceTimer);
      kfcQuizAdvanceTimer = setTimeout(() => {
        advanceKfcQuizQuestion();
      }, 1600);
    };
  });
}

function advanceKfcQuizQuestion() {
  if (kfcQuizAdvanceTimer) {
    clearTimeout(kfcQuizAdvanceTimer);
    kfcQuizAdvanceTimer = null;
  }
  kfcQuizIndex++;
  renderKfcQuizQuestion();
}

if (typeof window !== 'undefined') {
  window.startKfcQuiz = startKfcQuiz;
  window.renderKfcQuizQuestion = renderKfcQuizQuestion;
  window.advanceKfcQuizQuestion = advanceKfcQuizQuestion;
  window.kfcQuizDeck = kfcQuizDeck;
  window.KANJI_LOOKALIKES_MAP = KANJI_LOOKALIKES_MAP;
  window.getLookalikeKanjiDistractors = getLookalikeKanjiDistractors;
  window.getMeaningDistractors = getMeaningDistractors;
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

let currentRadicalTab = 'list'; // 'list' | 'flashcard'
let currentRadicalGroup = null;
let rfcScope = 'group'; // 'group' (chỉ nhóm hiện tại) | 'all' (toàn bộ 191 bộ thủ)
let rfcFilter = 'all'; // 'all' | 'unlearned' | 'learned'
let rfcMode = 'char-first'; // 'char-first' | 'meaning-first' | 'quiz-mode'
let rfcIndex = 0;
let rfcDeck = [];
let rfcLearnedSet = new Set();
let rfcKeydownAttached = false;
let rfcQuizDeck = [];
let rfcQuizIndex = 0;
let rfcQuizScore = 0;
let rfcQuizAdvanceTimer = null;

function getRadicalLearnedStorageKey() {
  return 'minna_rfc_learned_ids';
}

function loadRadicalLearnedSet() {
  const arr = safeGetJsonStorage(getRadicalLearnedStorageKey(), [], Array.isArray);
  return new Set(Array.isArray(arr) ? arr : []);
}

function saveRadicalLearnedSet(learnedSet) {
  const arr = Array.from(learnedSet);
  safeSetStorage(getRadicalLearnedStorageKey(), JSON.stringify(arr));
}

function getAllRadicalsList() {
  if (typeof radicalsData === 'undefined' || !Array.isArray(radicalsData)) return [];
  const list = [];
  for (const g of radicalsData) {
    if (Array.isArray(g.items)) {
      list.push(...g.items);
    }
  }
  return list;
}

function getRfcCurrentScopeDeck() {
  if (rfcScope === 'all') {
    return getAllRadicalsList();
  }
  return (currentRadicalGroup && Array.isArray(currentRadicalGroup.items)) ? [...currentRadicalGroup.items] : [];
}

function getFilteredRfcDeck() {
  const base = rfcDeck.length > 0 ? rfcDeck : getRfcCurrentScopeDeck();
  if (rfcFilter === 'learned') {
    return base.filter(it => rfcLearnedSet.has(it.id));
  } else if (rfcFilter === 'unlearned') {
    return base.filter(it => !rfcLearnedSet.has(it.id));
  }
  return base;
}

function renderRadicalSection(sectionId, forcedTab = null) {
  activeRadicalSession++;
  const currentSession = activeRadicalSession;

  const content = document.getElementById('lesson-content');
  if (!content) return;

  if (typeof radicalsData === 'undefined') return;
  const isDirectFc = String(sectionId).startsWith('radicals-flashcard-');
  const cleanId = isDirectFc ? sectionId.replace('radicals-flashcard-', 'radicals-') : sectionId;
  const group = radicalsData.find(g => g.id === cleanId) || radicalsData[0];
  if (!group) return;

  if (forcedTab) {
    currentRadicalTab = forcedTab;
  } else if (isDirectFc) {
    currentRadicalTab = 'flashcard';
  } else if (!currentRadicalTab) {
    currentRadicalTab = 'list';
  }

  const isCompleted = isModuleCompleted(cleanId);
  currentRadicalGroup = group;

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
      <div class="hero-top-row">
        <div class="hero-meta">
          <span class="badge badge-sakura">Bộ Thủ Tiếng Nhật</span>
          <span class="badge badge-primary">${group.title}</span>
          <span class="badge badge-green">${group.items.length} Bộ thủ chuẩn</span>
        </div>
        <button class="btn-complete-icon ${isCompleted ? 'is-completed' : ''}" 
                onclick="toggleLessonComplete('${group.id}')"
                aria-label="Đánh dấu hoàn thành phần này"
                title="${isCompleted ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành phần này'}">
          <span class="complete-icon-mark">${isCompleted ? '✓' : '○'}</span>
        </button>
      </div>
      <h2 class="lesson-title">${group.title}</h2>
      <p class="lesson-desc">${group.description}</p>
    </div>

    <!-- ĐIỀU HƯỚNG TAB: TRA CỨU & NÉT VIẾT vs BÀI KIỂM TRA FLASHCARD -->
    <div class="kanji-tab-nav-wrapper radical-tab-nav-wrapper">
      <div class="kanji-tab-nav" role="tablist" aria-label="Chuyển chế độ học Bộ Thủ">
        <button type="button" 
                class="kanji-tab-btn ${currentRadicalTab === 'list' ? 'active' : ''}" 
                id="tab-btn-radical-list" 
                role="tab" 
                aria-selected="${currentRadicalTab === 'list' ? 'true' : 'false'}"
                onclick="switchRadicalTab('list')">
          <span class="kanji-tab-icon">${APP_ICONS.book}</span>
          <span class="kanji-tab-title">Tra Cứu &amp; Nét Viết</span>
          <span class="kanji-tab-pill">${group.items.length} Bộ thủ</span>
        </button>
        <button type="button" 
                class="kanji-tab-btn ${currentRadicalTab === 'flashcard' ? 'active' : ''}" 
                id="tab-btn-radical-flashcard" 
                role="tab" 
                aria-selected="${currentRadicalTab === 'flashcard' ? 'true' : 'false'}"
                onclick="switchRadicalTab('flashcard')">
          <span class="kanji-tab-icon">${APP_ICONS.cards}</span>
          <span class="kanji-tab-title">Kiểm Tra Flashcard</span>
          <span class="kanji-tab-pill accent-amber">Luyện Trí Nhớ</span>
        </button>
      </div>
    </div>

    <!-- THẺ 1: DANH SÁCH TRA CỨU CHI TIẾT & NÉT VIẾT BỘ THỦ -->
    <div id="radical-tab-pane-list" style="display: ${currentRadicalTab === 'list' ? 'block' : 'none'};">
      
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

      <!-- KHỐI GỢI Ý CHUYỂN SANG BÀI KIỂM TRA FLASHCARD -->
      <div class="kcard-switch-cta-box">
        <div class="switch-cta-icon">${APP_ICONS.cards}</div>
        <div class="switch-cta-info">
          <h4 class="switch-cta-title">Sẵn sàng kiểm tra trí nhớ ${group.title}?</h4>
          <p class="switch-cta-desc">Chuyển sang Thẻ Kiểm Tra Flashcard để lật thẻ 3D, kiểm tra phản xạ tên bộ, ý nghĩa gốc và làm 25 câu trắc nghiệm phản xạ bộ thủ!</p>
        </div>
        <button type="button" class="btn-switch-kfc" onclick="switchRadicalTab('flashcard', true)">
          <span style="display:inline-flex;align-items:center;gap:6px;"><span>Bắt đầu Kiểm tra Flashcard</span> ${APP_ICONS.arrowRight}</span>
        </button>
      </div>

      <!-- Khối đánh dấu hoàn thành cuối phần Bộ thủ -->
      <div class="lesson-completion-card">
        <div class="completion-card-inner">
          <div class="completion-text-wrap">
            <h4 class="completion-heading">Hoàn thành ${group.title}</h4>
            <p class="completion-sub">Bạn đã ghi nhớ toàn bộ các bộ thủ của nhóm này?</p>
          </div>
          <button id="btn-complete-lesson" 
                  class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${group.id}')">
            ${isCompleted ? '✓ Đã hoàn thành (Bấm để hủy)' : '✓ Đánh dấu hoàn thành phần này'}
          </button>
        </div>
      </div>

    </div>

    <!-- THẺ 2: BÀI KIỂM TRA FLASHCARD BỘ THỦ -->
    <div id="radical-tab-pane-flashcard" style="display: ${currentRadicalTab === 'flashcard' ? 'block' : 'none'};">
      <div id="radical-flashcard-mount"></div>

      <!-- Khối đánh dấu hoàn thành cuối phần Flashcard Bộ thủ -->
      <div class="lesson-completion-card">
        <div class="completion-card-inner">
          <div class="completion-text-wrap">
            <h4 class="completion-heading">Hoàn thành Flashcard ${group.title}</h4>
            <p class="completion-sub">Bạn đã thuộc hết bộ thẻ Flashcard và trả lời đúng các câu hỏi phản xạ?</p>
          </div>
          <button class="btn-complete-lesson ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${group.id}')">
            ${isCompleted ? '✓ Đã hoàn thành (Bấm để hủy)' : '✓ Đánh dấu hoàn thành phần này'}
          </button>
        </div>
      </div>
    </div>
  `;

  initRadicalFlashcardStudio(group);
  if (currentRadicalTab === 'list') {
    initRadicalStrokeLoops(currentSession);
  }
}

function switchRadicalTab(tabName, shouldScroll = false) {
  currentRadicalTab = tabName === 'flashcard' ? 'flashcard' : 'list';
  if (typeof window !== 'undefined') window.currentRadicalTab = currentRadicalTab;

  const listBtn = document.getElementById('tab-btn-radical-list');
  const fcBtn = document.getElementById('tab-btn-radical-flashcard');
  const listPane = document.getElementById('radical-tab-pane-list');
  const fcPane = document.getElementById('radical-tab-pane-flashcard');

  if (listBtn) {
    listBtn.classList.toggle('active', currentRadicalTab === 'list');
    listBtn.setAttribute('aria-selected', currentRadicalTab === 'list' ? 'true' : 'false');
  }
  if (fcBtn) {
    fcBtn.classList.toggle('active', currentRadicalTab === 'flashcard');
    fcBtn.setAttribute('aria-selected', currentRadicalTab === 'flashcard' ? 'true' : 'false');
  }

  if (listPane) listPane.style.display = currentRadicalTab === 'list' ? 'block' : 'none';
  if (fcPane) fcPane.style.display = currentRadicalTab === 'flashcard' ? 'block' : 'none';

  if (currentRadicalTab === 'flashcard') {
    if (currentRadicalGroup) {
      initRadicalFlashcardStudio(currentRadicalGroup);
    }
    triggerHaptic(10);
  } else if (currentRadicalTab === 'list') {
    initRadicalStrokeLoops(activeRadicalSession);
  }

  if (shouldScroll) {
    const nav = document.querySelector('.radical-tab-nav-wrapper');
    if (nav && nav.scrollIntoView) {
      nav.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

function initRadicalFlashcardStudio(group) {
  if (!group) return;

  // Khi chuyển sang nhóm bộ thủ khác, reset về chế độ Flashcard mặc định
  if (!currentRadicalGroup || currentRadicalGroup.id !== group.id) {
    rfcMode = 'char-first';
    rfcFilter = 'all';
    rfcScope = 'group';
  }

  currentRadicalGroup = group;
  rfcLearnedSet = loadRadicalLearnedSet();
  rfcDeck = getRfcCurrentScopeDeck();
  rfcIndex = 0;

  const mount = document.getElementById('radical-flashcard-mount');
  if (!mount) return;

  const total = rfcDeck.length;
  const learnedCount = rfcDeck.filter(it => rfcLearnedSet.has(it.id)).length;
  const unlearnedCount = total - learnedCount;

  mount.innerHTML = `
    <div class="kanji-flashcard-studio">
      
      <!-- Header Studio Kiểm Tra Flashcard Bộ Thủ -->
      <div class="kfc-header">
        <div class="kfc-header-info">
          <div class="kfc-title-row">
            <span class="kfc-badge-icon">${APP_ICONS.cards}</span>
            <div>
              <h3 class="kfc-title">Kiểm Tra Flashcard Bộ Thủ - ${rfcScope === 'all' ? 'Toàn Bộ 191 Bộ Thủ' : group.title}</h3>
              <p class="kfc-subtitle">Chạm thẻ để lật kiểm tra tên bộ, ý nghĩa gốc, ý nghĩa trong chữ Hán và các ví dụ</p>
            </div>
          </div>
        </div>
        
        <!-- Chọn phạm vi luyện tập: Nhóm này vs Toàn bộ 191 bộ -->
        <div class="rfc-scope-selector" role="group" aria-label="Phạm vi luyện tập">
          <button type="button" class="rfc-scope-btn ${rfcScope === 'group' ? 'active' : ''}" onclick="setRfcScope('group', this)">
            Nhóm ${group.strokeCount} nét (${group.items.length})
          </button>
          <button type="button" class="rfc-scope-btn ${rfcScope === 'all' ? 'active' : ''}" onclick="setRfcScope('all', this)">
            Toàn bộ 191 Bộ Thủ
          </button>
        </div>

        <!-- Bộ lọc trạng thái thẻ: Tất cả / Chưa thuộc / Đã thuộc -->
        <div class="kfc-filter-group" role="tablist" aria-label="Lọc thẻ kiểm tra">
          <button type="button" class="kfc-filter-chip ${rfcFilter === 'all' ? 'active' : ''}" data-filter="all" onclick="filterRfcDeck('all', this)">
            Tất cả (<span id="rfc-count-all">${total}</span>)
          </button>
          <button type="button" class="kfc-filter-chip ${rfcFilter === 'unlearned' ? 'active' : ''}" data-filter="unlearned" onclick="filterRfcDeck('unlearned', this)">
            Chưa thuộc (<span id="rfc-count-unlearned">${unlearnedCount}</span>)
          </button>
          <button type="button" class="kfc-filter-chip ${rfcFilter === 'learned' ? 'active' : ''}" data-filter="learned" onclick="filterRfcDeck('learned', this)">
            Đã thuộc (<span id="rfc-count-learned">${learnedCount}</span>)
          </button>
        </div>
      </div>

      <!-- Thanh tiến độ & Mode Selector -->
      <div class="kfc-toolbar-bar">
        <!-- Progress Bar -->
        <div class="kfc-progress-wrap">
          <div class="kfc-progress-labels">
            <span class="kfc-counter-label" id="rfc-index-label">Thẻ 1 / ${total}</span>
            <span class="kfc-learned-label" id="rfc-learned-label">Đã thuộc: ${learnedCount}/${total} (${Math.round((learnedCount / (total || 1)) * 100)}%)</span>
          </div>
          <div class="kfc-progress-track">
            <div class="kfc-progress-bar" id="rfc-progress-bar" style="width: ${(learnedCount / (total || 1)) * 100}%;"></div>
          </div>
        </div>

        <!-- Mode Selector -->
        <div class="kfc-mode-selector">
          <span class="kfc-mode-title">Chế độ kiểm tra:</span>
          <button type="button" class="kfc-mode-btn ${rfcMode === 'char-first' ? 'active' : ''}" id="rfc-mode-char" onclick="setRfcMode('char-first', this)" title="Mặt trước: Ký tự Bộ thủ ➔ Mặt sau: Tên &amp; Ý nghĩa">
            <span>Bộ thủ ➔ Tên &amp; Ý nghĩa</span>
          </button>
          <button type="button" class="kfc-mode-btn ${rfcMode === 'meaning-first' ? 'active' : ''}" id="rfc-mode-meaning" onclick="setRfcMode('meaning-first', this)" title="Mặt trước: Tên &amp; Ý nghĩa ➔ Mặt sau: Ký tự Bộ thủ">
            <span>Ý nghĩa ➔ Ký tự Bộ thủ</span>
          </button>
          <button type="button" class="kfc-mode-btn ${rfcMode === 'quiz-mode' ? 'active' : ''}" id="rfc-mode-quiz" onclick="setRfcMode('quiz-mode', this)" title="Trắc nghiệm phản xạ 25 câu: Trộn lẫn Ký tự Bộ thủ và Ý nghĩa">
            <span style="display:inline-flex;align-items:center;gap:6px;">${APP_ICONS.bolt} <span>Trắc Nghiệm Phản Xạ (25 Câu)</span></span>
          </button>
        </div>
      </div>

      <!-- SÂN KHẤU 1: FLASHCARD CARD 3D -->
      <div class="kfc-card-stage" id="rfc-card-stage" style="display: ${rfcMode === 'quiz-mode' ? 'none' : 'flex'};">
        
        <div class="kfc-flashcard-3d" id="rfc-card" role="button" tabindex="0" title="Chạm để lật thẻ (hoặc phím Space)" onclick="flipRfcCard()">
          <div class="kfc-face kfc-front" id="rfc-face-front"></div>
          <div class="kfc-face kfc-back" id="rfc-face-back"></div>
        </div>

        <!-- BỘ NÚT ĐÁNH GIÁ (SPACED REPETITION) -->
        <div class="kfc-rating-actions" id="rfc-rating-actions">
          <button type="button" class="kfc-btn-rate kfc-rate-unlearned" onclick="rateRfcCurrent(false)" title="Đánh dấu Chưa Thuộc (Phím 1)">
            <span class="rate-icon">${APP_ICONS.xCircle}</span>
            <span>Chưa Nhớ</span>
            <span class="key-shortcut">[1]</span>
          </button>
          <button type="button" class="kfc-btn-rate kfc-rate-flip" onclick="flipRfcCard()" title="Lật thẻ (Phím Space)">
            <span class="rate-icon">${APP_ICONS.flip}</span>
            <span>Lật Thẻ</span>
            <span class="key-shortcut">[Space]</span>
          </button>
          <button type="button" class="kfc-btn-rate kfc-rate-learned" onclick="rateRfcCurrent(true)" title="Đánh dấu Đã Thuộc (Phím 2)">
            <span class="rate-icon">${APP_ICONS.checkCircle}</span>
            <span>Đã Nhớ</span>
            <span class="key-shortcut">[2]</span>
          </button>
        </div>

        <!-- BỘ NÚT ĐIỀU HƯỚNG CÔNG CỤ -->
        <div class="kfc-nav-controls" id="rfc-nav-controls">
          <button type="button" class="btn-tool" onclick="navRfcPrev()" title="Thẻ trước (Phím ←)">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.arrowLeft} <span>Trước</span></span>
          </button>
          <button type="button" class="btn-tool btn-tool-primary" id="rfc-audio-btn" onclick="speakRfcCurrent(event)" title="Phát âm tiếng Nhật chuẩn">
            <span style="display:inline-flex;align-items:center;gap:4px;">${SPEAKER_ICON_HTML} <span>Phát Âm</span></span>
          </button>
          <button type="button" class="btn-tool" onclick="shuffleRfcDeck()" title="Trộn ngẫu nhiên bộ thẻ">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.shuffle} <span>Trộn Thẻ</span></span>
          </button>
          <button type="button" class="btn-tool" onclick="resetRfcProgress()" title="Đặt lại đánh giá nhớ của phần này">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Đặt Lại</span></span>
          </button>
          <button type="button" class="btn-tool" onclick="navRfcNext()" title="Thẻ sau (Phím →)">
            <span style="display:inline-flex;align-items:center;gap:4px;"><span>Tiếp</span> ${APP_ICONS.arrowRight}</span>
          </button>
        </div>
          <button type="button" class="btn-tool" onclick="navRfcNext()" title="Thẻ sau (Phím →)">
            <span style="display:inline-flex;align-items:center;gap:4px;"><span>Tiếp</span> ${APP_ICONS.arrowRight}</span>
          </button>
        </div>

      </div>

      <!-- SÂN KHẤU 2: TRẮC NGHIỆM PHẢN XẠ BỘ THỦ 4 ĐÁP ÁN -->
      <div class="kfc-quiz-stage" id="rfc-quiz-stage" style="display: ${rfcMode === 'quiz-mode' ? 'block' : 'none'};"></div>

    </div>
  `;

  if (rfcMode === 'quiz-mode') {
    startRfcQuiz();
  } else {
    renderRfcCard();
  }

  if (!rfcKeydownAttached && typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('keydown', handleRfcKeydown);
    rfcKeydownAttached = true;
  }
};

function renderRfcCard() {
  const card = document.getElementById('rfc-card');
  const front = document.getElementById('rfc-face-front');
  const back = document.getElementById('rfc-face-back');
  const stage = document.getElementById('rfc-card-stage');
  const ratingActions = document.getElementById('rfc-rating-actions');
  const navControls = document.getElementById('rfc-nav-controls');
  if (!card || !front || !back) return;

  const filtered = getFilteredRfcDeck();
  const totalInFilter = filtered.length;

  const total = rfcDeck.length;
  const learnedCount = rfcDeck.filter(it => rfcLearnedSet.has(it.id)).length;
  const unlearnedCount = total - learnedCount;

  const countAll = document.getElementById('rfc-count-all');
  const countUnlearned = document.getElementById('rfc-count-unlearned');
  const countLearned = document.getElementById('rfc-count-learned');
  const learnedLabel = document.getElementById('rfc-learned-label');
  const progressBar = document.getElementById('rfc-progress-bar');
  const indexLabel = document.getElementById('rfc-index-label');

  if (countAll) countAll.textContent = String(total);
  if (countUnlearned) countUnlearned.textContent = String(unlearnedCount);
  if (countLearned) countLearned.textContent = String(learnedCount);
  if (learnedLabel) learnedLabel.textContent = `Đã thuộc: ${learnedCount}/${total} (${Math.round((learnedCount / (total || 1)) * 100)}%)`;
  if (progressBar) progressBar.style.width = `${(learnedCount / (total || 1)) * 100}%`;

  if (totalInFilter === 0) {
    card.style.display = 'none';
    if (ratingActions) ratingActions.style.display = 'none';
    if (navControls) navControls.style.display = 'none';
    if (indexLabel) indexLabel.textContent = `0 / 0 thẻ`;

    let emptyHtml = '';
    if (rfcFilter === 'unlearned') {
      emptyHtml = `
        <div class="kfc-empty-box">
          <div class="kfc-empty-icon">${APP_ICONS.checkCircle}</div>
          <h4 class="kfc-empty-title">Xuất Sắc! Bạn Đã Ghi Nhớ Toàn Bộ Bộ Thủ!</h4>
          <p class="kfc-empty-desc">Không còn bộ thủ nào chưa thuộc trong phần này. Bạn đã nắm vững 100% tên và ý nghĩa bộ thủ!</p>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 10px;">
            <button type="button" class="btn-tool btn-tool-primary" onclick="filterRfcDeck('all')">Xem Tất Cả ${total} Thẻ</button>
            <button type="button" class="btn-tool" onclick="resetRfcProgress()">
              <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Đặt Lại Để Luyện Lại</span></span>
            </button>
          </div>
        </div>
      `;
    } else if (rfcFilter === 'learned') {
      emptyHtml = `
        <div class="kfc-empty-box">
          <div class="kfc-empty-icon">${APP_ICONS.lightbulb}</div>
          <h4 class="kfc-empty-title">Chưa Có Thẻ Nào Được Đánh Dấu "Đã Nhớ"</h4>
          <p class="kfc-empty-desc">Hãy chuyển về danh sách tất cả các thẻ, lật thẻ để kiểm tra và nhấn nút "Đã Nhớ" khi bạn đã thuộc nhé!</p>
          <button type="button" class="btn-tool btn-tool-primary" onclick="filterRfcDeck('all')">Xem Tất Cả ${total} Thẻ</button>
        </div>
      `;
    } else {
      emptyHtml = `
        <div class="kfc-empty-box">
          <div class="kfc-empty-icon">${APP_ICONS.book}</div>
          <h4 class="kfc-empty-title">Chưa Có Dữ Liệu Bộ Thủ</h4>
          <p class="kfc-empty-desc">Dữ liệu bộ thủ đang được cập nhật.</p>
        </div>
      `;
    }

    const oldEmpty = document.getElementById('rfc-empty-container');
    if (oldEmpty && oldEmpty.remove) oldEmpty.remove();
    else if (oldEmpty && oldEmpty.parentNode) oldEmpty.parentNode.removeChild(oldEmpty);
    const emptyContainer = document.createElement('div');
    emptyContainer.id = 'rfc-empty-container';
    emptyContainer.innerHTML = emptyHtml;
    if (stage && stage.appendChild) stage.appendChild(emptyContainer);
    return;
  }

  const oldEmpty = document.getElementById('rfc-empty-container');
  if (oldEmpty && oldEmpty.remove) oldEmpty.remove();
  else if (oldEmpty && oldEmpty.parentNode) oldEmpty.parentNode.removeChild(oldEmpty);

  card.style.display = 'block';
  if (ratingActions) ratingActions.style.display = 'flex';
  if (navControls) navControls.style.display = 'flex';

  if (rfcIndex >= totalInFilter) rfcIndex = 0;
  if (rfcIndex < 0) rfcIndex = totalInFilter - 1;

  if (indexLabel) indexLabel.textContent = `Thẻ ${rfcIndex + 1} / ${totalInFilter}`;

  const item = filtered[rfcIndex];
  if (!item) return;

  const isLearned = rfcLearnedSet.has(item.id);
  const statusPillHtml = isLearned 
    ? `<span class="badge badge-green" style="font-size: 11px; display: inline-flex; align-items: center; gap: 4px;">${APP_ICONS.check} <span>Đã nhớ</span></span>`
    : `<span class="badge badge-sakura" style="font-size: 11px;">Chưa nhớ</span>`;

  card.classList.remove('flipped');

  if (rfcMode === 'char-first') {
    front.innerHTML = `
      <div class="kfc-front-meta">
        <span class="badge badge-primary">Bộ thủ ${item.strokeCount} nét</span>
        ${statusPillHtml}
      </div>

      <div class="kfc-front-center">
        <div class="rfc-main-char">${item.character}</div>
        <div class="rfc-stroke-badge">${item.strokeCount} nét bút</div>
      </div>

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Chạm thẻ để lật xem Tên bộ &amp; Ý nghĩa (hoặc phím Space)</span></span>
      </div>
    `;

    back.innerHTML = `
      ${statusPillHtml}

      <div class="rfc-back-header">
        <span class="rfc-back-char">${item.character}</span>
        <div class="rfc-back-name-wrap">
          <h4 class="rfc-back-name">${item.name}</h4>
          <span class="rfc-back-stroke">${item.strokeCount} nét viết</span>
        </div>
      </div>

      <div class="rfc-info-row">
        <span class="rfc-info-tag">Ý nghĩa của bộ thủ:</span>
        <span class="rfc-info-text">${item.meaning}</span>
      </div>

      <div class="rfc-info-row">
        <span class="rfc-info-tag">Ý nghĩa trong chữ Hán:</span>
        <span class="rfc-info-text">${item.kanjiMeaning}</span>
      </div>

      ${item.examples && item.examples.length > 0 ? `
        <div class="rfc-examples-section">
          <span class="rfc-examples-title">Chữ Hán ví dụ (Chạm để nghe phát âm):</span>
          <div class="kanji-example-chips">
            ${item.examples.slice(0, 5).map(ex => `
              <div class="kanji-chip" onclick="speakJapanese('${ex.kanji}', this, event)" role="button" tabindex="0" title="Chạm nghe phát âm ${ex.kanji}">
                <span class="chip-char">${ex.kanji}</span>
                <span class="chip-han">${ex.amHan}</span>
                <span class="chip-mean">${ex.nghia}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Chạm để quay lại mặt trước</span></span>
      </div>
    `;
  } else {
    // meaning-first mode
    front.innerHTML = `
      <div class="kfc-front-meta">
        <span class="badge badge-primary">Bộ thủ ${item.strokeCount} nét</span>
        ${statusPillHtml}
      </div>

      <div class="kfc-front-center">
        <div class="rfc-main-meaning">"${item.meaning}"</div>
        <div class="rfc-sub-name">${item.name} • ${item.strokeCount} nét</div>
      </div>

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Đố bạn đây là Bộ thủ nào? Chạm để lật xem đáp án</span></span>
      </div>
    `;

    back.innerHTML = `
      ${statusPillHtml}

      <div class="rfc-back-header">
        <span class="rfc-back-char">${item.character}</span>
        <div class="rfc-back-name-wrap">
          <h4 class="rfc-back-name">${item.name}</h4>
          <span class="rfc-back-stroke">${item.strokeCount} nét viết</span>
        </div>
      </div>

      <div class="rfc-info-row">
        <span class="rfc-info-tag">Ý nghĩa trong chữ Hán:</span>
        <span class="rfc-info-text">${item.kanjiMeaning}</span>
      </div>

      ${item.examples && item.examples.length > 0 ? `
        <div class="rfc-examples-section">
          <span class="rfc-examples-title">Chữ Hán ví dụ:</span>
          <div class="kanji-example-chips">
            ${item.examples.slice(0, 5).map(ex => `
              <div class="kanji-chip" onclick="speakJapanese('${ex.kanji}', this, event)" role="button" tabindex="0" title="Chạm nghe phát âm ${ex.kanji}">
                <span class="chip-char">${ex.kanji}</span>
                <span class="chip-han">${ex.amHan}</span>
                <span class="chip-mean">${ex.nghia}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Chạm để quay lại mặt trước</span></span>
      </div>
    `;
  }
}

window.flipRfcCard = function() {
  const card = document.getElementById('rfc-card');
  if (!card) return;
  triggerHaptic(10);
  card.classList.toggle('flipped');
};

window.rateRfcCurrent = function(isLearned) {
  const filtered = getFilteredRfcDeck();
  if (!filtered.length) return;

  const item = filtered[rfcIndex];
  if (!item) return;

  if (isLearned) {
    rfcLearnedSet.add(item.id);
    triggerHaptic(15);
    showToast(`Đã ghi nhớ: ${item.name}`);
  } else {
    rfcLearnedSet.delete(item.id);
    triggerHaptic(10);
  }

  saveRadicalLearnedSet(rfcLearnedSet);

  if (rfcFilter !== 'all') {
    const nextFiltered = getFilteredRfcDeck();
    if (rfcIndex >= nextFiltered.length) rfcIndex = 0;
  } else {
    rfcIndex = (rfcIndex + 1) % filtered.length;
  }

  renderRfcCard();
};

window.navRfcNext = function() {
  const filtered = getFilteredRfcDeck();
  if (!filtered.length) return;
  rfcIndex = (rfcIndex + 1) % filtered.length;
  triggerHaptic(10);
  renderRfcCard();
};

window.navRfcPrev = function() {
  const filtered = getFilteredRfcDeck();
  if (!filtered.length) return;
  rfcIndex = (rfcIndex - 1 + filtered.length) % filtered.length;
  triggerHaptic(10);
  renderRfcCard();
};

window.shuffleRfcDeck = function() {
  rfcDeck.sort(() => Math.random() - 0.5);
  rfcIndex = 0;
  triggerHaptic(15);
  renderRfcCard();
  showToast('Đã xáo trộn ngẫu nhiên bộ thẻ Bộ thủ!');
};

window.resetRfcProgress = function() {
  const deck = getRfcCurrentScopeDeck();
  deck.forEach(it => rfcLearnedSet.delete(it.id));
  saveRadicalLearnedSet(rfcLearnedSet);
  rfcIndex = 0;
  triggerHaptic(15);
  renderRfcCard();
  showToast('Đã đặt lại tiến độ ghi nhớ Bộ thủ!');
};

window.filterRfcDeck = function(filterType, btnEl = null) {
  rfcFilter = filterType || 'all';
  rfcIndex = 0;
  triggerHaptic(10);

  const chips = document.querySelectorAll ? document.querySelectorAll('.kfc-filter-chip') : [];
  chips.forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-filter') === rfcFilter);
  });

  if (rfcMode === 'quiz-mode') {
    setRfcMode('char-first');
  } else {
    renderRfcCard();
  }
};

window.setRfcScope = function(scope, btnEl = null) {
  rfcScope = scope || 'group';
  triggerHaptic(10);

  const btns = document.querySelectorAll ? document.querySelectorAll('.rfc-scope-btn') : [];
  btns.forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  rfcDeck = getRfcCurrentScopeDeck();
  rfcIndex = 0;

  if (rfcMode === 'quiz-mode') {
    startRfcQuiz();
  } else {
    renderRfcCard();
  }
};

window.setRfcMode = function(mode, btnEl = null) {
  rfcMode = mode || 'char-first';
  triggerHaptic(10);

  const btns = document.querySelectorAll ? document.querySelectorAll('.kfc-mode-btn') : [];
  btns.forEach(b => b.classList.remove('active'));
  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    const targetId = rfcMode === 'quiz-mode' ? 'rfc-mode-quiz' :
      rfcMode === 'meaning-first' ? 'rfc-mode-meaning' : 'rfc-mode-char';
    const targetBtn = document.getElementById(targetId);
    if (targetBtn) targetBtn.classList.add('active');
  }

  const cardStage = document.getElementById('rfc-card-stage');
  const quizStage = document.getElementById('rfc-quiz-stage');

  if (rfcMode === 'quiz-mode') {
    if (cardStage) cardStage.style.display = 'none';
    if (quizStage) {
      quizStage.style.display = 'block';
      startRfcQuiz();
    }
  } else {
    if (quizStage) quizStage.style.display = 'none';
    if (cardStage) {
      cardStage.style.display = 'flex';
      renderRfcCard();
    }
  }
};

window.speakRfcCurrent = function(event) {
  if (event && event.stopPropagation) event.stopPropagation();
  const filtered = getFilteredRfcDeck();
  if (!filtered.length) return;
  const item = filtered[rfcIndex];
  if (!item) return;

  const textToSpeak = (item.examples && item.examples[0] && item.examples[0].kanji) ? item.examples[0].kanji : item.character;
  speakJapanese(textToSpeak, null, event);
};

function getRadicalMeaningDistractors(targetItem, allPool) {
  const correctName = (targetItem.name || '').trim();
  const distractors = [];
  const shuffled = [...allPool].sort(() => Math.random() - 0.5);
  for (const other of shuffled) {
    const oName = (other.name || '').trim();
    if (oName && oName !== correctName && !distractors.includes(oName)) {
      distractors.push(oName);
      if (distractors.length >= 3) break;
    }
  }
  return distractors.slice(0, 3);
}

function getRadicalCharDistractors(targetItem, allPool) {
  const correctChar = (targetItem.character || '').trim();
  const distractors = [];
  // Ưu tiên các bộ thủ có cùng hoặc gần số nét
  const sameStroke = allPool.filter(it => it.character !== correctChar && Math.abs(it.strokeCount - targetItem.strokeCount) <= 1);
  const shuffledSame = [...sameStroke].sort(() => Math.random() - 0.5);
  for (const other of shuffledSame) {
    const oChar = (other.character || '').trim();
    if (oChar && oChar !== correctChar && !distractors.includes(oChar)) {
      distractors.push(oChar);
      if (distractors.length >= 3) break;
    }
  }
  if (distractors.length < 3) {
    const shuffledAll = [...allPool].sort(() => Math.random() - 0.5);
    for (const other of shuffledAll) {
      const oChar = (other.character || '').trim();
      if (oChar && oChar !== correctChar && !distractors.includes(oChar)) {
        distractors.push(oChar);
        if (distractors.length >= 3) break;
      }
    }
  }
  return distractors.slice(0, 3);
}

function startRfcQuiz() {
  if (rfcQuizAdvanceTimer) {
    clearTimeout(rfcQuizAdvanceTimer);
    rfcQuizAdvanceTimer = null;
  }

  const quizStage = document.getElementById('rfc-quiz-stage');
  if (!quizStage) return;

  const allPool = getAllRadicalsList();
  const pool = rfcDeck.length > 0 ? rfcDeck : allPool;
  if (pool.length === 0) {
    quizStage.innerHTML = `<p class="kq-empty">Đang cập nhật câu hỏi trắc nghiệm bộ thủ.</p>`;
    return;
  }

  const TARGET_QUIZ_COUNT = Math.min(25, pool.length >= 5 ? 25 : pool.length * 4);
  const half1 = Math.ceil(TARGET_QUIZ_COUNT / 2);
  const half2 = TARGET_QUIZ_COUNT - half1;

  const shuffledPool1 = [...pool].sort(() => Math.random() - 0.5);
  const shuffledPool2 = [...pool].sort(() => Math.random() - 0.5);

  const c2mItems = [];
  for (let i = 0; i < half1; i++) {
    c2mItems.push(shuffledPool1[i % shuffledPool1.length]);
  }

  const m2cItems = [];
  for (let i = 0; i < half2; i++) {
    m2cItems.push(shuffledPool2[i % shuffledPool2.length]);
  }

  // Dạng 1: Ký tự Bộ thủ ➔ 4 Tên & Ý nghĩa
  const q1 = c2mItems.map(item => {
    const correctText = `${item.name}: ${item.meaning.split(';')[0].trim()}`;
    const wrongItems = getRadicalMeaningDistractors(item, allPool);
    const options = [
      { text: correctText, isCorrect: true },
      ...wrongItems.map(w => {
        const matching = allPool.find(r => r.name === w);
        const desc = matching ? matching.meaning.split(';')[0].trim() : '';
        return { text: `${w}: ${desc}`, isCorrect: false };
      })
    ].sort(() => Math.random() - 0.5);

    return {
      item,
      type: 'char-to-name',
      options
    };
  });

  // Dạng 2: Ý nghĩa & Tên Bộ thủ ➔ 4 Ký tự Bộ thủ
  const q2 = m2cItems.map(item => {
    const correctChar = item.character;
    const wrongChars = getRadicalCharDistractors(item, allPool);
    const options = [
      { text: correctChar, isCorrect: true },
      ...wrongChars.map(c => ({ text: c, isCorrect: false }))
    ].sort(() => Math.random() - 0.5);

    return {
      item,
      type: 'name-to-char',
      options
    };
  });

  rfcQuizDeck = [...q1, ...q2].sort(() => Math.random() - 0.5).slice(0, TARGET_QUIZ_COUNT);
  rfcQuizIndex = 0;
  rfcQuizScore = 0;
  if (typeof window !== 'undefined') window.rfcQuizDeck = rfcQuizDeck;
  renderRfcQuizQuestion();
}

function renderRfcQuizQuestion() {
  if (rfcQuizAdvanceTimer) {
    clearTimeout(rfcQuizAdvanceTimer);
    rfcQuizAdvanceTimer = null;
  }

  const quizStage = document.getElementById('rfc-quiz-stage');
  if (!quizStage) return;

  if (rfcQuizIndex >= rfcQuizDeck.length) {
    const percent = Math.round((rfcQuizScore / (rfcQuizDeck.length || 1)) * 100);
    quizStage.innerHTML = `
      <div class="kfc-empty-box" style="padding: 36px 20px;">
        <div class="kfc-empty-icon">${percent >= 80 ? APP_ICONS.checkCircle : APP_ICONS.cards}</div>
        <h4 class="kfc-empty-title">Hoàn Thành Bài Kiểm Tra Bộ Thủ!</h4>
        <p class="kfc-empty-desc">
          Kết quả phản xạ nhận biết: <strong>${rfcQuizScore} / ${rfcQuizDeck.length}</strong> câu chính xác (${percent}%).
        </p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 14px;">
          <button type="button" class="btn-tool btn-tool-primary" onclick="startRfcQuiz()" style="min-height: 44px; padding: 10px 20px;">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Làm Lại Lượt Mới (25 câu)</span></span>
          </button>
          <button type="button" class="btn-tool" onclick="setRfcMode('char-first')" style="min-height: 44px; padding: 10px 20px;">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.cards} <span>Quay Lại Lật Flashcard 3D</span></span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  const q = rfcQuizDeck[rfcQuizIndex];
  const item = q.item;
  const isC2N = q.type === 'char-to-name';

  const typeTag = isC2N ? 'Đoán Tên & Ý Nghĩa Bộ Thủ' : 'Phân Biệt Ký Tự Bộ Thủ';
  const modeTitle = isC2N ? 'Ký Tự Bộ Thủ ➔ Tên & Ý Nghĩa' : 'Ý Nghĩa & Tên ➔ Ký Tự Bộ Thủ';
  const modeSubtitle = isC2N 
    ? 'Quan sát Ký tự Bộ thủ và chọn đúng Tên & Ý nghĩa tương ứng' 
    : 'Đọc Ý nghĩa/Tên và chọn đúng Ký tự Bộ thủ tương ứng';

  quizStage.innerHTML = `
    <div class="practice-box" style="padding: 22px;">
      <div class="practice-box-header">
        <div class="practice-box-title">
          <span class="practice-icon-badge ${isC2N ? 'accent-sakura' : 'accent-indigo'}">${APP_ICONS.bolt}</span>
          <div>
            <h4>Trắc Nghiệm Phản Xạ: ${modeTitle}</h4>
            <span class="practice-sub">${modeSubtitle}</span>
          </div>
        </div>
        <span class="practice-counter-pill accent-emerald">Đúng: ${rfcQuizScore}/${rfcQuizDeck.length}</span>
      </div>

      <div class="kq-body" style="min-height: 250px; justify-content: flex-start; gap: 16px;">
        <!-- KHUNG HIỂN THỊ ĐỀ BÀI -->
        <div style="text-align: center; width: 100%;">
          <span class="kq-step-tag">Câu ${rfcQuizIndex + 1}/${rfcQuizDeck.length} • ${typeTag}</span>
          
          ${isC2N ? `
            <!-- DẠNG 1: ĐỀ BÀI LÀ KÝ TỰ BỘ THỦ LỚN -->
            <div class="rfc-main-char" style="font-size: clamp(56px, 8vw, 76px); margin: 8px 0;">
              ${item.character}
            </div>
            <div style="font-size: 13px; color: var(--text-muted); font-weight: 600;">
              (${item.strokeCount} nét bút)
            </div>
          ` : `
            <!-- DẠNG 2: ĐỀ BÀI LÀ Ý NGHĨA & TÊN BỘ THỦ -->
            <div class="kfc-quiz-main-meaning" style="font-size: clamp(18px, 3.2vw, 24px); margin: 10px auto; max-width: 90%;">
              "${item.meaning}"
            </div>
            <div style="font-size: 14px; color: var(--accent-primary); font-weight: 700; margin-top: 4px;">
              ${item.name} (${item.strokeCount} nét)
            </div>
          `}
        </div>

        <!-- CÁC ĐÁP ÁN LỰA CHỌN (DẠNG LƯỚI 2x2 CÂN ĐỐI) -->
        <div class="kq-options">
          ${q.options.map((opt, oIdx) => `
            <button type="button" 
                    class="kq-opt" 
                    style="font-size: ${isC2N ? '13px' : '20px'}; font-weight: ${isC2N ? '600' : '700'}; ${!isC2N ? 'font-family: var(--font-mincho), serif;' : ''}" 
                    data-correct="${opt.isCorrect ? 'true' : 'false'}">
              <span style="display: flex; align-items: center; gap: 8px;">
                <strong style="color: var(--accent-primary); font-size: 13.5px; font-family: var(--font-sans); flex-shrink: 0;">${String.fromCharCode(65 + oIdx)}.</strong>
                <span>${opt.text}</span>
              </span>
              <span class="kq-feedback-icon" style="display: none; font-size: 15px; font-weight: 800; font-family: var(--font-sans);"></span>
            </button>
          `).join('')}
        </div>

        <!-- VÙNG HIỂN THỊ CHI TIẾT CỦNG CỐ SAU KHI CHỌN ĐÁP ÁN -->
        <div id="rfc-quiz-explain-reveal" style="display: none; width: 100%; margin-top: 8px;">
          <div class="kfc-mnemonic-card-box" style="margin: 0; background: var(--bg-card-inner); border-left: 4px solid var(--accent-primary);">
            
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
              <span style="font-weight: 800; font-size: 14px; color: var(--text-primary); display: inline-flex; align-items: center; gap: 6px;">${APP_ICONS.book} <span>Thông Tin Chi Tiết Bộ Thủ:</span></span>
              <button type="button" class="kcard-audio-btn" onclick="speakJapanese('${item.character}', this, event)" style="margin: 0; min-height: 36px; padding: 4px 12px;">
                ${SPEAKER_ICON_HTML} <span>Nghe Phát Âm</span>
              </button>
            </div>

            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; padding-bottom: 10px; border-bottom: 1px dashed var(--border-color);">
              <span style="font-family: var(--font-mincho); font-size: 32px; font-weight: 800; color: var(--accent-primary);">${item.character}</span>
              <span style="font-size: 16px; font-weight: 700; color: var(--text-primary);">${item.name}</span>
              <span style="font-size: 13px; font-weight: 600; color: var(--text-muted); background: var(--bg-tertiary); padding: 3px 10px; border-radius: 6px; border: 1px solid var(--border-color);">
                ${item.strokeCount} nét
              </span>
            </div>

            <div style="margin-bottom: 8px; font-size: 14px; line-height: 1.5;">
              <strong style="color: var(--accent-primary);">Ý nghĩa gốc:</strong> ${item.meaning}
            </div>

            <div style="margin-bottom: 10px; font-size: 13.5px; line-height: 1.5; color: var(--text-secondary);">
              <strong style="color: var(--text-primary);">Ý nghĩa trong chữ Hán:</strong> ${item.kanjiMeaning}
            </div>

            ${item.examples && item.examples.length > 0 ? `
              <div style="margin-top: 10px; padding: 10px 14px; background: var(--bg-tertiary); border-radius: 8px; font-size: 13px;">
                <strong style="color: var(--text-primary);">Chữ Hán ví dụ:</strong>
                <div class="kanji-example-chips" style="margin-top: 6px;">
                  ${item.examples.slice(0, 5).map(ex => `
                    <div class="kanji-chip" onclick="speakJapanese('${ex.kanji}', this, event)" role="button" tabindex="0">
                      <span class="chip-char">${ex.kanji}</span>
                      <span class="chip-han">${ex.amHan}</span>
                      <span class="chip-mean">${ex.nghia}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div style="margin-top: 14px; text-align: right;">
              <button type="button" class="btn-tool btn-tool-primary" id="rfc-quiz-next-btn" onclick="advanceRfcQuizQuestion()" style="min-height: 44px; padding: 8px 18px; font-size: 14.5px; font-weight: 700; width: 100%; justify-content: center; display: inline-flex; align-items: center; gap: 6px;">
                <span>Câu Tiếp Theo</span> ${APP_ICONS.arrowRight}
              </button>
            </div>
          </div>
        </div>

      </div>

      <div class="kq-controls">
        <button type="button" class="btn-tool" onclick="startRfcQuiz()">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Đổi Bộ Câu Hỏi</span></span>
        </button>
        <button type="button" class="btn-tool" onclick="setRfcMode('char-first')">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.cards} <span>Về Thẻ Flashcard 3D</span></span>
        </button>
      </div>
    </div>
  `;

  const optBtns = quizStage.querySelectorAll('.kq-opt');
  const revealBox = quizStage.querySelector('#rfc-quiz-explain-reveal');

  optBtns.forEach(btn => {
    btn.onclick = () => {
      triggerHaptic(10);
      optBtns.forEach(b => b.disabled = true);
      const isCor = btn.getAttribute('data-correct') === 'true';
      const icon = btn.querySelector('.kq-feedback-icon');

      if (isCor) {
        btn.classList.add('correct');
        if (icon) { icon.textContent = '✓'; icon.style.display = 'inline'; }
        rfcQuizScore++;
      } else {
        btn.classList.add('wrong');
        if (icon) { icon.textContent = '✗'; icon.style.display = 'inline'; }
        optBtns.forEach(b => {
          if (b.getAttribute('data-correct') === 'true') {
            b.classList.add('correct');
            const cIcon = b.querySelector('.kq-feedback-icon');
            if (cIcon) { cIcon.textContent = '✓'; cIcon.style.display = 'inline'; }
          }
        });
      }

      if (revealBox) revealBox.style.display = 'block';

      const counterPill = quizStage.querySelector('.practice-counter-pill');
      if (counterPill) counterPill.textContent = `Đúng: ${rfcQuizScore}/${rfcQuizDeck.length}`;

      const nextBtn = quizStage.querySelector('#rfc-quiz-next-btn');
      if (nextBtn) nextBtn.focus();
    };
  });
}

function advanceRfcQuizQuestion() {
  if (rfcQuizAdvanceTimer) {
    clearTimeout(rfcQuizAdvanceTimer);
    rfcQuizAdvanceTimer = null;
  }
  rfcQuizIndex++;
  renderRfcQuizQuestion();
}

function handleRfcKeydown(e) {
  const mount = document.getElementById('radical-flashcard-mount');
  if (!mount) return;
  const fcPane = document.getElementById('radical-tab-pane-flashcard');
  if (!fcPane || fcPane.style.display === 'none') return;

  const targetTag = (e.target && e.target.tagName) ? e.target.tagName.toUpperCase() : '';
  if (targetTag === 'INPUT' || targetTag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;

  if (rfcMode === 'quiz-mode') return;

  if (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault();
    flipRfcCard();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    navRfcNext();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    navRfcPrev();
  } else if (e.key === '1') {
    e.preventDefault();
    rateRfcCurrent(false);
  } else if (e.key === '2') {
    e.preventDefault();
    rateRfcCurrent(true);
  }
}

if (typeof window !== 'undefined') {
  window.switchRadicalTab = switchRadicalTab;
  window.initRadicalFlashcardStudio = initRadicalFlashcardStudio;
  window.startRfcQuiz = startRfcQuiz;
  window.renderRfcQuizQuestion = renderRfcQuizQuestion;
  window.advanceRfcQuizQuestion = advanceRfcQuizQuestion;
  window.rfcQuizDeck = rfcQuizDeck;
  window.currentRadicalGroup = currentRadicalGroup;
  window.currentRadicalTab = currentRadicalTab;
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

    let isAnimating = false;
    let hasPlayed = false;

    async function playStrokesOnce() {
      if (isAnimating || currentSession !== activeRadicalSession || !document.body || !document.body.contains || !document.body.contains(svg)) return;
      isAnimating = true;

      strokePaths.forEach((p, i) => {
        p.style.transition = 'none';
        p.style.strokeDashoffset = `${lengths[i]}`;
        p.style.opacity = '1';
      });

      await sleep(150);
      if (currentSession !== activeRadicalSession || !document.body.contains(svg)) {
        isAnimating = false;
        return;
      }

      for (let i = 0; i < strokePaths.length; i++) {
        if (currentSession !== activeRadicalSession || !document.body.contains(svg)) break;
        const p = strokePaths[i];
        const len = lengths[i];
        const duration = Math.max(300, Math.min(650, Math.round(len * 4.8)));
        p.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        p.style.strokeDashoffset = '0';
        await sleep(duration + 70);
      }

      isAnimating = false;
    }

    // Cho phép người dùng chạm/bấm vào chữ để xem lại thứ tự nét bất cứ lúc nào (chỉ chạy khi được yêu cầu)
    if (svg.addEventListener) {
      svg.style.cursor = 'pointer';
      svg.setAttribute('title', 'Chạm để xem hoạt họa thứ tự viết nét');
      svg.addEventListener('click', (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        playStrokesOnce();
      });
    }

    // Chỉ chạy hoạt họa nét 1 lần duy nhất khi cuộn tới và tự giải phóng Observer để triệt tiêu tải CPU
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasPlayed) {
            hasPlayed = true;
            playStrokesOnce();
            observer.unobserve(card);
          }
        });
      }, { rootMargin: '80px' });
      observer.observe(card);
    } else {
      hasPlayed = true;
      playStrokesOnce();
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
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Làm lại bài</span></span>
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
              <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.eye} <span>Xem Dịch Nghĩa</span></span>
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
                  <div class="quiz-q-content">
                    <span class="quiz-q-badge">Câu ${qIdx + 1}</span>
                    <span class="quiz-q-text">${q.question}</span>
                  </div>
                  <button class="speak-btn-mini" onclick="speakDokkaiQuestion('${dokkai.id}', '${q.id}', this, event)" title="Nghe câu hỏi này">
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
      btn.innerHTML = isHidden 
        ? `<span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.eyeOff} <span>Ẩn Dịch Nghĩa</span></span>` 
        : `<span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.eye} <span>Xem Dịch Nghĩa</span></span>`;
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
  if (!isSafeObjectKey(quizId)) return { submitted: false, selections: {}, score: null };
  const all = secureGetJsonStorage(STORAGE_PRACTICE_KEY, {}, (d) => typeof d === 'object' && !Array.isArray(d));
  return (all && all[quizId]) || { submitted: false, selections: {}, score: null };
}

function savePracticeQuizState(quizId, state) {
  if (!isSafeObjectKey(quizId)) return;
  const all = secureGetJsonStorage(STORAGE_PRACTICE_KEY, {}, (d) => typeof d === 'object' && !Array.isArray(d));
  all[quizId] = state;
  secureSetStorage(STORAGE_PRACTICE_KEY, JSON.stringify(all));
}

function getDokkaiState(dokkaiId) {
  if (!isSafeObjectKey(dokkaiId)) return { submitted: false, selections: {}, score: null };
  const all = secureGetJsonStorage(STORAGE_DOKKAI_KEY, {}, (d) => typeof d === 'object' && !Array.isArray(d));
  return (all && all[dokkaiId]) || { submitted: false, selections: {}, score: null };
}

function saveDokkaiState(dokkaiId, state) {
  if (!isSafeObjectKey(dokkaiId)) return;
  const all = secureGetJsonStorage(STORAGE_DOKKAI_KEY, {}, (d) => typeof d === 'object' && !Array.isArray(d));
  all[dokkaiId] = state;
  secureSetStorage(STORAGE_DOKKAI_KEY, JSON.stringify(all));
}

let quizTimerInterval = null;
let quizSecondsLeft = 30 * 60;
let isQuizTimerPaused = false;

window.initQuizTimer = function() {
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }

  if (typeof stopMaziiVoiceSearch === 'function' && targetId !== 'mazii-dict') {
    stopMaziiVoiceSearch(true);
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
  triggerHaptic(12);
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

  if (typeof stopMaziiVoiceSearch === 'function' && targetId !== 'mazii-dict') {
    stopMaziiVoiceSearch(true);
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
      secureSetStorage(STORAGE_COMPLETED_KEY, JSON.stringify(list));
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
      secureSetStorage(STORAGE_COMPLETED_KEY, JSON.stringify(list));
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
        const raw = secureGetStorage(STORAGE_PRACTICE_KEY);
        const all = raw ? JSON.parse(raw) : {};
        delete all[targetId];
        secureSetStorage(STORAGE_PRACTICE_KEY, JSON.stringify(all));
      } catch (e) {}

      saveModuleScroll(targetId, 0);

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
        const raw = secureGetStorage(STORAGE_DOKKAI_KEY);
        const all = raw ? JSON.parse(raw) : {};
        delete all[dokkaiId];
        secureSetStorage(STORAGE_DOKKAI_KEY, JSON.stringify(all));
      } catch (e) {}

      saveModuleScroll(dokkaiId, 0);

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

  if (Array.isArray(lessonsData)) {
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
  }

  if (Array.isArray(dokkaiData)) {
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
  }

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
            sub: `Mẹo nhớ: ${cleanMnemonic.slice(0, 50)}... • Bài ${kl.lesson}`,
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
      const maziiQuery = item.getAttribute('data-mazii-query');
      if (maziiQuery) {
        dropdown.classList.remove('active');
        if (typeof openMaziiWithQuery === 'function') {
          openMaziiWithQuery(maziiQuery);
        } else {
          switchModule('mazii-dict');
        }
        return;
      }
      const targetId = item.getAttribute('data-target');
      const highlight = decodeURIComponent(item.getAttribute('data-highlight') || '');
      handleSearchClick(targetId, highlight);
    });
  }

  if (input.addEventListener) {
    input.addEventListener('focus', () => {
      prefetchRemainingDataForSearch();
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
          label.textContent = "Không có trong giáo trình";
          list.innerHTML = `
            <div class="search-empty">Không tìm thấy "<strong>${escapeHtml(val)}</strong>" trong 50 bài học.</div>
            <div class="search-result-item" data-target="mazii-dict" data-mazii-query="${escapeHtml(val)}" style="border-top:1px dashed var(--border-color);margin-top:6px;">
              <div class="search-item-left">
                <div class="search-item-main" style="color:#e05244;font-weight:700;display:inline-flex;align-items:center;gap:6px;">
                  ${APP_ICONS.book}
                  <span>Tra "${escapeHtml(val)}" trên Từ Điển</span>
                  ${APP_ICONS.arrowRight}
                </div>
                <div class="search-item-sub">Tra cứu từ vựng và chữ Hán trực tuyến</div>
              </div>
              <span class="search-badge" style="background:#e05244;color:#fff;">Từ điển</span>
            </div>
          `;
          return;
        }

        label.textContent = `Tìm thấy ${res.length} kết quả:`;
        list.innerHTML = res.slice(0, 30).map((r, idx) => `
          <div class="search-result-item" data-index="${idx}" data-target="${escapeHtml(r.targetId)}" data-highlight="${encodeURIComponent(r.highlight || '')}">
            <div class="search-item-left">
              <div class="search-item-main">${escapeHtml(r.title)}</div>
              <div class="search-item-sub">${escapeHtml(r.sub)}</div>
            </div>
            <span class="search-badge">${escapeHtml(r.category)}</span>
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
  const radicalsLabel = document.getElementById('mnav-label-radicals');
  if (lessonLabel) lessonLabel.textContent = `Bài ${num}`;
  if (kanjiLabel) kanjiLabel.textContent = `Kanji ${num}`;
  if (quizLabel) quizLabel.textContent = `Đề ${num}`;
  if (dokkaiLabel) dokkaiLabel.textContent = `Đọc ${num}`;
  if (radicalsLabel) radicalsLabel.textContent = `Bộ Thủ`;

  let activeNav = 'lesson';
  let activeIndex = 0;
  if (id.startsWith('kanji-')) { activeNav = 'kanji'; activeIndex = 1; }
  else if (id.startsWith('quiz-')) { activeNav = 'quiz'; activeIndex = 2; }
  else if (id.startsWith('dokkai-')) { activeNav = 'dokkai'; activeIndex = 3; }
  else if (id.startsWith('radicals-')) { activeNav = 'radicals'; activeIndex = 4; }

  const nav = document.getElementById('mobile-bottom-nav');
  if (nav) {
    if (nav.setAttribute) nav.setAttribute('data-active-index', String(activeIndex));
    if (nav.style) {
      if (nav.style.setProperty) nav.style.setProperty('--slider-index', activeIndex);
      else nav.style['--slider-index'] = activeIndex;
    }
  }

  if (document && document.querySelectorAll) {
    const items = document.querySelectorAll('.mobile-nav-item');
    if (items && items.forEach) {
      items.forEach(btn => {
        const navType = btn.getAttribute('data-nav');
        btn.classList.toggle('active', navType === activeNav);
      });
    }
  }

  updateMobileNavSlider();
}

function updateMobileNavSlider(animate = true) {
  const nav = document.getElementById('mobile-bottom-nav');
  const pill = document.getElementById('mobile-nav-slider-pill');
  if (!nav) return;

  const activeBtn = nav.querySelector ? nav.querySelector('.mobile-nav-item.active') : null;
  if (!activeBtn) return;

  const items = nav.querySelectorAll ? Array.from(nav.querySelectorAll('.mobile-nav-item')) : [];
  const idx = items.indexOf(activeBtn);
  if (idx >= 0) {
    if (nav.setAttribute) nav.setAttribute('data-active-index', String(idx));
    if (nav.style) {
      if (nav.style.setProperty) nav.style.setProperty('--slider-index', idx);
      else nav.style['--slider-index'] = idx;
    }
    if (pill && pill.style) {
      pill.style.transition = animate ? 'left 0.36s cubic-bezier(0.34, 1.45, 0.64, 1)' : 'none';
    }
  }
}

function initMobileBottomNavSliderTouch() {
  const nav = document.getElementById('mobile-bottom-nav');
  if (!nav || !nav.addEventListener) return;

  const navTypes = ['lesson', 'kanji', 'quiz', 'dokkai', 'radicals'];
  let isDragging = false;
  let lastHoveredIndex = -1;

  const getIndexFromTouch = (touch) => {
    if (!touch) return -1;
    const rect = nav.getBoundingClientRect();
    if (!rect || rect.width <= 0) return -1;
    const relativeX = touch.clientX - rect.left;
    if (relativeX < 0 || relativeX > rect.width) return -1;
    const tabWidth = rect.width / 5;
    const idx = Math.floor(relativeX / tabWidth);
    return Math.max(0, Math.min(4, idx));
  };

  const previewPillAtIndex = (idx) => {
    if (idx < 0 || idx > 4) return;
    if (nav.setAttribute) nav.setAttribute('data-active-index', String(idx));
    if (nav.style) {
      if (nav.style.setProperty) nav.style.setProperty('--slider-index', idx);
      else nav.style['--slider-index'] = idx;
    }
    const items = nav.querySelectorAll ? nav.querySelectorAll('.mobile-nav-item') : [];
    if (items && items.forEach) {
      items.forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
      });
    }
    const pill = document.getElementById('mobile-nav-slider-pill');
    if (pill && pill.style) {
      pill.style.transition = 'left 0.22s cubic-bezier(0.16, 1, 0.3, 1)';
    }
  };

  nav.addEventListener('touchstart', (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const idx = getIndexFromTouch(e.touches[0]);
    if (idx >= 0) {
      isDragging = true;
      lastHoveredIndex = idx;
      previewPillAtIndex(idx);
    }
  }, { passive: true });

  nav.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || e.touches.length === 0) return;
    const idx = getIndexFromTouch(e.touches[0]);
    if (idx >= 0 && idx !== lastHoveredIndex) {
      lastHoveredIndex = idx;
      previewPillAtIndex(idx);
      if (typeof triggerHaptic === 'function') triggerHaptic(8);
    }
  }, { passive: true });

  nav.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    if (lastHoveredIndex >= 0 && lastHoveredIndex < navTypes.length) {
      const targetType = navTypes[lastHoveredIndex];
      if (typeof handleMobileBottomNav === 'function') {
        handleMobileBottomNav(targetType);
      }
      if (typeof triggerHaptic === 'function') triggerHaptic(14);
    }
  }, { passive: true });

  nav.addEventListener('touchcancel', () => {
    isDragging = false;
    syncMobileBottomNav();
  }, { passive: true });

  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('resize', () => {
      updateMobileNavSlider(false);
    }, { passive: true });
    window.addEventListener('orientationchange', () => {
      setTimeout(() => updateMobileNavSlider(false), 150);
    }, { passive: true });
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

// ==========================================================================
// HỆ THỐNG GHI NHỚ VÀ KHÔI PHỤC VỊ TRÍ NỘI DUNG (MODULE SCROLL POSITION PRESERVATION)
// Đảm bảo khi chuyển sang bài/mục khác rồi quay lại, trang giữ y nguyên vị trí nội dung
// ==========================================================================
const STORAGE_SCROLL_POSITIONS_KEY = 'minna_module_scroll_pos';
const moduleScrollPositions = {};
let isRestoringScroll = false;
let scrollRestoreRafId = null;
let scrollRestoreTimeouts = [];

function initModuleScrollPositions() {
  try {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem) {
      const raw = sessionStorage.getItem(STORAGE_SCROLL_POSITIONS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          Object.assign(moduleScrollPositions, parsed);
        }
      }
    }
  } catch (e) {}
}

let persistScrollDebounce = null;
function persistScrollPositions() {
  if (persistScrollDebounce) clearTimeout(persistScrollDebounce);
  persistScrollDebounce = setTimeout(() => {
    try {
      if (typeof sessionStorage !== 'undefined' && sessionStorage.setItem) {
        sessionStorage.setItem(STORAGE_SCROLL_POSITIONS_KEY, JSON.stringify(moduleScrollPositions));
      }
    } catch (e) {}
  }, 200);
}

function saveModuleScroll(moduleId, scrollY) {
  if (typeof NavigationEngine !== 'undefined' && typeof NavigationEngine.saveModuleScroll === 'function') {
    NavigationEngine.saveModuleScroll(moduleId, scrollY);
  }
  if (!moduleId) return;
  const val = Math.max(0, Math.round(scrollY || 0));
  moduleScrollPositions[moduleId] = val;
  persistScrollPositions();
}

function getModuleScroll(moduleId) {
  if (typeof NavigationEngine !== 'undefined' && typeof NavigationEngine.getModuleScroll === 'function') {
    const val = NavigationEngine.getModuleScroll(moduleId);
    if (typeof val === 'number' && val > 0) return val;
  }
  if (!moduleId) return 0;
  if (typeof moduleScrollPositions[moduleId] === 'number') {
    return moduleScrollPositions[moduleId];
  }
  return 0;
}

function restoreScrollPosition(targetScroll) {
  const scrollVal = Math.max(0, Math.round(targetScroll || 0));

  if (scrollRestoreRafId) {
    if (typeof cancelAnimationFrame === 'function') cancelAnimationFrame(scrollRestoreRafId);
    scrollRestoreRafId = null;
  }
  if (Array.isArray(scrollRestoreTimeouts)) {
    scrollRestoreTimeouts.forEach(t => clearTimeout(t));
  }
  scrollRestoreTimeouts = [];

  isRestoringScroll = true;

  const applyPos = () => {
    const main = document.getElementById('main-content');
    if (main) {
      main.scrollTop = scrollVal;
      if (main.style) {
        const prevBehavior = main.style.scrollBehavior;
        main.style.scrollBehavior = 'auto';
        setTimeout(() => {
          if (main && main.style) main.style.scrollBehavior = prevBehavior;
        }, 50);
      }
      if (typeof main.scrollTo === 'function') {
        try { main.scrollTo({ top: scrollVal, behavior: 'instant' }); } catch (e) { main.scrollTop = scrollVal; }
      }
    }
    if (typeof window !== 'undefined' && window.scrollTo) {
      try {
        window.scrollTo({ top: scrollVal, behavior: 'instant' });
      } catch (e) {
        window.scrollTo(0, scrollVal);
      }
    }
  };

  // Áp dụng tức thì ở Frame 0 để loại bỏ hoàn toàn hiện tượng nhảy/chớp trang
  applyPos();

  // Khôi phục tiếp sau chu kỳ layout của trình duyệt (nếu có fonts hoặc images tải chậm)
  if (typeof requestAnimationFrame === 'function') {
    scrollRestoreRafId = requestAnimationFrame(() => {
      applyPos();
      scrollRestoreRafId = null;
    });
  }

  const t1 = setTimeout(() => { applyPos(); }, 40);
  const t2 = setTimeout(() => { applyPos(); }, 120);
  const t3 = setTimeout(() => {
    applyPos();
    isRestoringScroll = false;
  }, 260);

  scrollRestoreTimeouts.push(t1, t2, t3);
}

window.switchModule = function(targetId, updateHash = true) {
  if (!targetId) return;

  // LƯU VỊ TRÍ CUỘN CỦA TRANG HIỆN TẠI TRƯỚC KHI RỜI ĐI
  if (currentActiveId && currentActiveId !== targetId) {
    const mainContent = document.getElementById('main-content');
    const curScroll = mainContent ? mainContent.scrollTop : (window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0);
    saveModuleScroll(currentActiveId, curScroll);
  }

  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }

  if (typeof stopMaziiVoiceSearch === 'function' && targetId !== 'mazii-dict') {
    stopMaziiVoiceSearch(true);
  }

  if (updateHash && typeof window !== 'undefined' && window.location && window.location.hash.replace('#', '') !== targetId) {
    window.location.hash = targetId;
  }
  safeSetStorage(STORAGE_LAST_ACTIVE_KEY, targetId);

  closeMobileSidebar();

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
    if (parentGroup && parentGroup.classList.contains('open')) {
      setTimeout(() => {
        if (targetBtn.scrollIntoView) {
          targetBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }, 50);
    }
  }

  // Nếu dữ liệu chưa sẵn sàng trong bộ nhớ, hiển thị spinner và nạp bất đồng bộ
  if (!isModuleDataReady(targetId)) {
    renderLazyLoader(targetId);
    ensureModuleDataLoaded(targetId).then(() => {
      renderContent(targetId);
      restoreScrollPosition(getModuleScroll(targetId));
      updateHeaderProgress();
    }).catch(err => {
      console.warn('[LazyLoader] Lỗi chuyển module:', targetId, err);
      renderContent(targetId);
    });
    return;
  }

  renderContent(targetId);
  restoreScrollPosition(getModuleScroll(targetId));
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

  const label = document.getElementById('theme-label-text');
  if (label) {
    label.textContent = themeName === 'dark' ? 'Giao diện: Tối (Đêm)' : 'Giao diện: Sáng (Ngày)';
  }

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
  applyTheme(saved);

  const btn = document.getElementById('theme-toggle-btn');
  if (btn && btn.addEventListener) {
    btn.addEventListener('click', (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const nxt = cur === 'dark' ? 'light' : 'dark';
      applyTheme(nxt);
      showToast(nxt === 'dark' ? 'Đã chuyển sang Giao diện Tối' : 'Đã chuyển sang Giao diện Sáng');
    });
  }
}

// Chế độ Toàn màn hình & Xem tập trung (Focus Mode / Zen Mode)
function initFullscreenToggle() {
  const btn = document.getElementById('btn-toggle-fullscreen');
  if (!btn || !btn.addEventListener) return;

  const toggleFocusAndFullscreen = () => {
    triggerHaptic(15);
    const isFocus = document.body.classList.toggle('focus-mode');

    if (isFocus) {
      if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
      showToast('Đã bật chế độ Toàn màn hình / Tập trung');
    } else {
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      showToast('Đã thoát chế độ Toàn màn hình');
    }

    const label = btn.querySelector('.sidebar-action-label');
    if (label) {
      label.textContent = isFocus ? 'Thoát toàn màn hình' : 'Toàn màn hình / Focus';
    }
  };

  btn.addEventListener('click', toggleFocusAndFullscreen);

  if (document && document.addEventListener) {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && document.body.classList.contains('focus-mode')) {
        document.body.classList.remove('focus-mode');
        const label = btn.querySelector('.sidebar-action-label');
        if (label) label.textContent = 'Toàn màn hình / Focus';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('focus-mode')) {
        document.body.classList.remove('focus-mode');
        const label = btn.querySelector('.sidebar-action-label');
        if (label) label.textContent = 'Toàn màn hình / Focus';
      }
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

        for (const k in moduleScrollPositions) delete moduleScrollPositions[k];
        try {
          if (typeof sessionStorage !== 'undefined') sessionStorage.removeItem(STORAGE_SCROLL_POSITIONS_KEY);
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
      if (isOpen) {
        const sidebarMenu = document.getElementById('sidebar-menu');
        if (sidebarMenu) sidebarMenu.scrollTop = 0;
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
    closeSidebarBtn.addEventListener('click', (e) => {
      if (e && e.preventDefault) e.preventDefault();
      closeMobileSidebar();
    });
    closeSidebarBtn.addEventListener('touchstart', (e) => {
      if (e && e.preventDefault) e.preventDefault();
      closeMobileSidebar();
    }, { passive: false });
  }

  // Đóng sidebar khi nhấn hoặc chạm vào lớp phủ backdrop mờ
  if (overlay && overlay.addEventListener) {
    const handleOverlayDismiss = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      closeMobileSidebar();
    };
    overlay.addEventListener('click', handleOverlayDismiss);
    overlay.addEventListener('touchstart', handleOverlayDismiss, { passive: false });
    overlay.addEventListener('touchend', handleOverlayDismiss, { passive: false });
  }

  // Tự động đóng sidebar khi bấm/chạm ra ngoài menu bất kể vị trí nào (Capture phase)
  if (document && document.addEventListener) {
    document.addEventListener('click', (e) => {
      const sb = document.getElementById('sidebar');
      const mBtn = document.getElementById('menu-toggle-btn');
      if (!sb || !sb.classList.contains('mobile-open')) return;
      if (!sb.contains(e.target) && (!mBtn || !mBtn.contains(e.target))) {
        closeMobileSidebar();
      }
    }, true);

    document.addEventListener('touchend', (e) => {
      const sb = document.getElementById('sidebar');
      const mBtn = document.getElementById('menu-toggle-btn');
      if (!sb || !sb.classList.contains('mobile-open')) return;
      if (!sb.contains(e.target) && (!mBtn || !mBtn.contains(e.target))) {
        closeMobileSidebar();
      }
    }, { capture: true, passive: true });

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

  // Đóng sidebar khi bấm các nút chức năng chân menu nếu mở modal
  ['btn-reset-progress', 'voice-settings-btn', 'btn-toggle-fullscreen', 'btn-device-settings'].forEach(actionId => {
    const actionEl = document.getElementById(actionId);
    if (actionEl && actionEl.addEventListener) {
      actionEl.addEventListener('click', () => {
        if (sidebar.classList.contains('mobile-open')) {
          closeMobileSidebar();
        }
      });
    }
  });

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = safeRAF(() => {
        updateMenuButtonState();
        if (window.innerWidth > 768) {
          if (overlay) overlay.classList.remove('active');
          sidebar.classList.remove('mobile-open');
          if (document.body && document.body.classList) {
            document.body.classList.remove('sidebar-open-lock');
          }
        }
      });
    }, { passive: true });
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

window.enterApp = function(targetHash) {
  try {
    const cover = document.getElementById('cover-page-slide');
    if (cover) {
      cover.classList.add('hide-cover');
      cover.style.pointerEvents = 'none';
      cover.style.opacity = '0';
      setTimeout(() => {
        cover.style.display = 'none';
      }, 200);
      try { sessionStorage.setItem('minna_cover_closed', 'true'); } catch (e) {}
    }

    const target = targetHash || selectedCoverTarget || (window.location && window.location.hash) || '#bai-1';
    const cleanId = target.replace('#', '');

    if (typeof switchModule === 'function') {
      switchModule(cleanId, true);
    } else if (window.location) {
      window.location.hash = target;
    }
  } catch (err) {
    const c = document.getElementById('cover-page-slide');
    if (c) c.style.display = 'none';
  }
};
window.handleEnterApp = window.enterApp;

window.selectCoverTarget = function(targetHash, el, label) {
  // Chạm vào bất kỳ thẻ hoặc danh mục nào trên trang bìa là vào thẳng bài học ngay lập tức
  window.enterApp(targetHash);
};

window.enterAppAt = function(targetHash, el, label) {
  window.enterApp(targetHash);
};

function initCoverPage() {
  const cover = document.getElementById('cover-page-slide');
  const btnEnter = document.getElementById('btn-enter-app');
  const coverThemeBtn = document.getElementById('cover-theme-toggle');

  if (!cover) return;

  // Kiểm tra nếu người dùng đã có bài học trong URL hash hoặc đã đóng trang bìa trong phiên làm việc
  let hasHash = false;
  try {
    hasHash = window.location && window.location.hash && window.location.hash.length > 2;
  } catch (e) {}

  let isClosedInSession = false;
  try {
    isClosedInSession = sessionStorage.getItem('minna_cover_closed') === 'true';
  } catch (e) {}

  if (hasHash || isClosedInSession) {
    cover.classList.add('hide-cover');
    cover.style.display = 'none';
    cover.style.pointerEvents = 'none';
  } else {
    cover.classList.remove('hide-cover');
  }

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
    btnEnter.addEventListener('click', (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      window.enterApp();
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

  let isTicking = false;
  let isVisible = false;

  const handleScroll = (top) => {
    const shouldBeVisible = top > 350;
    if (shouldBeVisible !== isVisible) {
      isVisible = shouldBeVisible;
      btn.classList.toggle('visible', isVisible);
    }
    isTicking = false;
  };

  const scheduleScroll = (top) => {
    if (!isTicking) {
      isTicking = true;
      safeRAF(() => handleScroll(top));
    }
  };

  const updateCurrentScroll = (val) => {
    if (currentActiveId && !isRestoringScroll) {
      moduleScrollPositions[currentActiveId] = Math.max(0, Math.round(val || 0));
      persistScrollPositions();
    }
  };

  if (mainContent && mainContent.addEventListener) {
    mainContent.addEventListener('scroll', () => {
      const pos = mainContent.scrollTop;
      scheduleScroll(pos);
      updateCurrentScroll(pos);
    }, { passive: true });

    const onUserScrollStart = () => { isRestoringScroll = false; };
    mainContent.addEventListener('wheel', onUserScrollStart, { passive: true });
    mainContent.addEventListener('touchstart', onUserScrollStart, { passive: true });
  }

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('scroll', () => {
      const wScroll = window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0;
      scheduleScroll(wScroll);
      if (wScroll > 0) {
        updateCurrentScroll(wScroll);
      }
    }, { passive: true });
  }

  const scrollToTop = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (currentActiveId) {
      saveModuleScroll(currentActiveId, 0);
    }
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

/**
 * Khởi tạo menu bánh răng cài đặt và tiện ích thu gọn ở chân Sidebar
 */
function initSidebarGearMenu() {
  if (typeof document === 'undefined') return;
  const gearBtn = document.getElementById('btn-sidebar-gear');
  const gearWrap = document.getElementById('sidebar-bottom-actions') || (gearBtn && gearBtn.closest ? gearBtn.closest('.sidebar-gear-wrap') : null);
  const gearPopup = document.getElementById('sidebar-gear-popup');

  if (!gearBtn || !gearBtn.addEventListener || !gearWrap || !gearWrap.classList) return;

  function closeGearPopup() {
    if (gearWrap.classList.contains('open')) {
      gearWrap.classList.remove('open');
      if (gearBtn.setAttribute) gearBtn.setAttribute('aria-expanded', 'false');
      if (gearPopup && gearPopup.setAttribute) gearPopup.setAttribute('aria-hidden', 'true');
    }
  }

  function toggleGearPopup(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    const isOpen = gearWrap.classList.toggle('open');
    if (gearBtn.setAttribute) gearBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (gearPopup && gearPopup.setAttribute) gearPopup.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  }

  gearBtn.addEventListener('click', toggleGearPopup);

  // Đóng khi click ra ngoài vùng menu bánh răng
  if (document.addEventListener) {
    document.addEventListener('click', (e) => {
      if (gearWrap.classList.contains('open')) {
        if (!gearWrap.contains || !e.target || !gearWrap.contains(e.target)) {
          closeGearPopup();
        }
      }
    });

    document.addEventListener('touchend', (e) => {
      if (gearWrap.classList.contains('open')) {
        if (!gearWrap.contains || !e.target || !gearWrap.contains(e.target)) {
          closeGearPopup();
        }
      }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && gearWrap.classList.contains('open')) {
        closeGearPopup();
        if (typeof gearBtn.focus === 'function') gearBtn.focus();
      }
    });
  }

  // Đóng flyout khi bấm vào bất kỳ tùy chọn nào trong menu
  if (gearPopup && gearPopup.querySelectorAll) {
    const items = gearPopup.querySelectorAll('.gear-menu-item');
    if (items && items.forEach) {
      items.forEach(item => {
        if (item && item.addEventListener) {
          item.addEventListener('click', () => {
            closeGearPopup();
          });
        }
      });
    }
  }
}

if (document && document.addEventListener) {
  document.addEventListener('DOMContentLoaded', () => {
    initModuleScrollPositions();
    initDeviceSettings();
    initThemeToggle();
    initFuriganaToggle();
    initFullscreenToggle();
    initCoverPage();
    initMenuToggle();
    initQuickSearch();
    initResetProgress();
    initBackToTop();
    initVoiceSettingsModal();
    initSidebarGearMenu();
    initMobileBottomNavSliderTouch();

    renderSidebar();
    updateHeaderProgress();

    const hashId = (typeof window !== 'undefined' && window.location && window.location.hash ? window.location.hash : '').replace('#', '');
    const savedLastActive = safeGetStorage(STORAGE_LAST_ACTIVE_KEY);
    const initialId = hashId || savedLastActive || 'bai-1';

    switchModule(initialId, false);
    startIdlePrefetch();
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
          <span class="practice-icon-badge accent-sky">${APP_ICONS.cards}</span>
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
          <div class="fc-hint">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.flip} <span>Chạm để lật xem nghĩa Tiếng Việt</span></span>
          </div>
        </div>
        <div class="fc-face fc-back">
          <span class="fc-mode-tag accent-emerald">Ý nghĩa Tiếng Việt</span>
          <div class="fc-meaning" id="fc-vi"></div>
          <div class="fc-kanji-back" id="fc-kanji-back"></div>
          <div class="fc-hint">
            <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.flip} <span>Chạm để quay lại mặt trước</span></span>
          </div>
        </div>
      </div>
      <div class="fc-controls">
        <button type="button" class="btn-tool" id="fc-prev" title="Từ trước">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.arrowLeft} <span>Trước</span></span>
        </button>
        <button type="button" class="btn-tool btn-tool-primary" id="fc-speak" title="Nghe phát âm">
          <span style="display:inline-flex;align-items:center;gap:4px;">${SPEAKER_ICON_HTML} <span>Nghe</span></span>
        </button>
        <button type="button" class="btn-tool" id="fc-shuffle" title="Trộn ngẫu nhiên">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.shuffle} <span>Trộn</span></span>
        </button>
        <button type="button" class="btn-tool" id="fc-next" title="Từ tiếp theo">
          <span style="display:inline-flex;align-items:center;gap:4px;"><span>Tiếp</span> ${APP_ICONS.arrowRight}</span>
        </button>
      </div>
    </div>

    <div class="practice-box">
      <div class="practice-box-header">
        <div class="practice-box-title">
          <span class="practice-icon-badge accent-sakura">${APP_ICONS.bolt}</span>
          <div>
            <h4>Phản Xạ Chữ Hán & Từ Vựng</h4>
            <span class="practice-sub">Kiểm tra nhanh từ vựng ngay trong bài</span>
          </div>
        </div>
        <span class="practice-counter-pill accent-emerald" id="kq-score">Đúng: 0/25</span>
      </div>
      <div class="kq-body" id="kq-body"></div>
      <div class="kq-controls">
        <button type="button" class="btn-tool" id="kq-reset-btn" title="Làm lại bộ câu hỏi này">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Làm Lại</span></span>
        </button>
        <button type="button" class="btn-tool btn-tool-primary" id="kq-mode-btn" title="Trộn ngẫu nhiên 25 câu hỏi mới">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.shuffle} <span>Đổi Đề Mới (25 câu)</span></span>
        </button>
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
    fcCard.onclick = () => {
      triggerHaptic(10);
      fcCard.classList.toggle('flipped');
    };
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
  let kqDeck = [];
  let kqIndex = 0;
  let kqCorrect = 0;
  let kqAdvanceTimer = null;
  const sourcePool = kanjiList.length >= 2 ? kanjiList : cleanVocab;

  function startKanjiQuiz() {
    if (kqAdvanceTimer) {
      clearTimeout(kqAdvanceTimer);
      kqAdvanceTimer = null;
    }

    if (sourcePool.length < 2) {
      kqBody.innerHTML = `<p class="kq-empty">Bài này đang cập nhật câu hỏi phản xạ nhanh.</p>`;
      return;
    }

    // TỔNG SỐ LƯỢNG CÂU HỎI: CHUẨN 25 CÂU
    const TARGET_QUIZ_COUNT = 25;
    const half1 = Math.ceil(TARGET_QUIZ_COUNT / 2); // 13 câu
    const half2 = TARGET_QUIZ_COUNT - half1; // 12 câu

    const shuffledPool1 = [...sourcePool].sort(() => Math.random() - 0.5);
    const shuffledPool2 = [...sourcePool].sort(() => Math.random() - 0.5);

    // Dạng 1: Chữ Hán ➔ Chọn Nghĩa Tiếng Việt
    const k2mItems = [];
    for (let i = 0; i < half1; i++) {
      k2mItems.push(shuffledPool1[i % shuffledPool1.length]);
    }

    // Dạng 2: Nghĩa Tiếng Việt ➔ Chọn Chữ Hán (ưu tiên các từ chưa trùng)
    const remaining = shuffledPool1.slice(half1);
    const m2kItems = [];
    for (const it of remaining) {
      if (m2kItems.length >= half2) break;
      m2kItems.push(it);
    }
    for (const it of shuffledPool2) {
      if (m2kItems.length >= half2) break;
      if (!m2kItems.includes(it)) m2kItems.push(it);
    }
    while (m2kItems.length < half2 && sourcePool.length > 0) {
      m2kItems.push(sourcePool[m2kItems.length % sourcePool.length]);
    }

    // Tạo câu hỏi Dạng 1: Chữ Hán ➔ 4 Nghĩa Tiếng Việt (KHÔNG CÓ CHỮ HIRAGANA)
    const qType1 = k2mItems.map(item => {
      const correctMeaning = (item.meaning || '').trim();
      const wrongMeanings = getMeaningDistractors(item, cleanVocab);
      const options = [
        { text: correctMeaning, isCorrect: true },
        ...wrongMeanings.map(m => ({ text: m, isCorrect: false }))
      ].sort(() => Math.random() - 0.5);

      return {
        item,
        type: 'kanji-to-meaning',
        options
      };
    });

    // Tạo câu hỏi Dạng 2: Nghĩa Tiếng Việt ➔ 4 Chữ Hán có nét/cách viết gần giống nhau
    const qType2 = m2kItems.map(item => {
      const correctKanji = (item.kanji || item.word || '').trim();
      const wrongKanjis = getLookalikeKanjiDistractors(item, cleanVocab);
      const options = [
        { text: correctKanji, isCorrect: true },
        ...wrongKanjis.map(w => ({ text: w, isCorrect: false }))
      ].sort(() => Math.random() - 0.5);

      return {
        item,
        type: 'meaning-to-kanji',
        options
      };
    });

    // Trộn lẫn xen kẽ cả 2 dạng câu hỏi
    kqDeck = [...qType1, ...qType2]
      .sort(() => Math.random() - 0.5)
      .slice(0, TARGET_QUIZ_COUNT);

    kqIndex = 0;
    kqCorrect = 0;
    if (typeof window !== 'undefined') window.lastLessonPracticeDeck = kqDeck;
    renderKanjiQuestion();
  }

  function renderKanjiQuestion() {
    if (kqAdvanceTimer) {
      clearTimeout(kqAdvanceTimer);
      kqAdvanceTimer = null;
    }

    kqScoreEl.textContent = `Đúng: ${kqCorrect}/${kqDeck.length}`;
    if (kqIndex >= kqDeck.length) {
      const percent = Math.round((kqCorrect / kqDeck.length) * 100);
      kqBody.innerHTML = `
        <div class="kq-finish-box" style="padding: 24px 16px; text-align: center;">
          <div class="kq-finish-title" style="font-size: 20px; font-weight: 800; margin-bottom: 8px; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
            ${percent >= 80 ? APP_ICONS.checkCircle : APP_ICONS.cards} <span>Hoàn thành bài kiểm tra 25 câu!</span>
          </div>
          <div class="kq-finish-sub" style="font-size: 14.5px; color: var(--text-secondary);">Kết quả phản xạ: <strong>${kqCorrect} / ${kqDeck.length}</strong> câu chính xác (${percent}%)</div>
          <div style="margin-top: 14px;">
            <button type="button" class="btn-tool btn-tool-primary" id="kq-retry-finish-btn" style="min-height: 44px; padding: 10px 20px;">
              <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Làm Lại Lượt Mới (25 câu)</span></span>
            </button>
          </div>
        </div>`;
      const retryBtn = kqBody.querySelector('#kq-retry-finish-btn');
      if (retryBtn) retryBtn.onclick = startKanjiQuiz;
      return;
    }

    const q = kqDeck[kqIndex];
    const item = q.item;
    const isK2M = q.type === 'kanji-to-meaning';
    const typeTag = isK2M ? 'Đoán Nghĩa Chữ Hán' : 'Phân Biệt Mặt Chữ Hán';

    kqBody.innerHTML = `
      <div class="kq-question-wrap">
        <span class="kq-step-tag">Câu ${kqIndex + 1}/${kqDeck.length} • ${typeTag}</span>
        ${isK2M ? `
          <div class="kq-question">${item.kanji || item.word}</div>
        ` : `
          <div class="kq-question-meaning">"${item.meaning}"</div>
        `}
      </div>

      <div class="kq-options">
        ${q.options.map((opt, oIdx) => `
          <button type="button" 
                  class="kq-opt" 
                  style="font-size: ${isK2M ? '13.5px' : '17px'}; font-weight: ${isK2M ? '600' : '700'}; ${!isK2M ? 'font-family: var(--font-mincho), serif; letter-spacing: 0.5px;' : ''}"
                  data-correct="${opt.isCorrect ? 'true' : 'false'}">
            <span style="display: flex; align-items: center; gap: 8px;">
              <strong style="color: var(--accent-primary); font-size: 13.5px; font-family: var(--font-sans); flex-shrink: 0;">${String.fromCharCode(65 + oIdx)}.</strong>
              <span>${opt.text}</span>
            </span>
            <span class="kq-feedback-icon" style="display: none; font-size: 15px; font-weight: 800; font-family: var(--font-sans);"></span>
          </button>
        `).join('')}
      </div>
    `;

    const optBtns = kqBody.querySelectorAll('.kq-opt');
    optBtns.forEach(btn => {
      btn.onclick = () => {
        triggerHaptic(10);
        optBtns.forEach(b => b.disabled = true);
        const isCor = btn.getAttribute('data-correct') === 'true';
        const icon = btn.querySelector('.kq-feedback-icon');

        if (isCor) {
          btn.classList.add('correct');
          if (icon) { icon.textContent = '✓'; icon.style.display = 'inline'; }
          kqCorrect++;
        } else {
          btn.classList.add('wrong');
          if (icon) { icon.textContent = '✗'; icon.style.display = 'inline'; }
          optBtns.forEach(b => {
            if (b.getAttribute('data-correct') === 'true') {
              b.classList.add('correct');
              const cIcon = b.querySelector('.kq-feedback-icon');
              if (cIcon) { cIcon.textContent = '✓'; cIcon.style.display = 'inline'; }
            }
          });
        }
        kqScoreEl.textContent = `Đúng: ${kqCorrect}/${kqDeck.length}`;

        kqAdvanceTimer = setTimeout(() => {
          kqIndex++;
          renderKanjiQuestion();
        }, 850);
      };
    });
  }

  if (kqModeBtn) {
    kqModeBtn.onclick = startKanjiQuiz;
  }
  if (kqResetBtn) {
    kqResetBtn.onclick = startKanjiQuiz;
  }

  startKanjiQuiz();
}
window.renderLessonPractice = renderLessonPractice;

// ==========================================================================
// MODULE TỪ ĐIỂN MAZII & NHẬN DIỆN CHỮ HÁN VIẾT TAY (MAZII DICTIONARY STUDIO)
// Kết nối trực tiếp https://mazii.net/vi-VN & Google Handwriting Recognition
// ==========================================================================

let maziiCurrentTab = 'word'; // 'word' | 'kanji' | 'grammar'
let maziiCurrentQuery = '';
let maziiIsHwOpen = false;
let maziiVoiceRecognition = null;
let maziiIsVoiceListening = false;
let maziiShouldKeepListening = false;
let maziiVoiceLang = 'ja-JP';
let maziiVoiceRestartTimer = null;
let maziiFinalizeTimer = null;
let maziiSilenceHintTimer = null;
let maziiLastVoiceText = '';
const maziiCache = new Map();

// Trạng thái Canvas viết tay
let hwStrokes = [];
let hwCurrentStroke = null;
let hwIsDrawing = false;
let hwCanvas = null;
let hwCtx = null;
let hwDpr = 1;
let hwTimer = null;
let hwStartTime = 0;

/**
 * Thuật toán chuyển đổi Romaji sang Hiragana thông minh
 */
function romajiToHiragana(input) {
  if (typeof DictionaryEngine !== 'undefined' && typeof DictionaryEngine.romajiToHiragana === 'function') {
    return DictionaryEngine.romajiToHiragana(input);
  }
  if (!input || typeof input !== 'string') return '';
  let str = input.toLowerCase();

  // Bảng ánh xạ Romaji ➔ Hiragana (Nạp từ data/romaji_kana_map.js kèm fallback)
  const map = (typeof window !== 'undefined' && window.ROMAJI_TO_HIRAGANA_MAP)
    || (typeof global !== 'undefined' && global.ROMAJI_TO_HIRAGANA_MAP)
    || {
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

  str = str.replace(/([bcdfghjklmpqrstvwxyz])(?=\1)/g, 'っ');

  const sortedKeys = Object.keys(map).sort((a, b) => b.length - a.length);
  for (const k of sortedKeys) {
    str = str.split(k).join(map[k]);
  }
  str = str.replace(/n(?=[^aiueoy]|$)/g, 'ん');
  return str;
}

/**
 * Phát âm mẫu chuẩn sử dụng hệ thống speakJapanese của website
 */
function speakMaziiAudio(text, btnElement, ev) {
  if (ev && ev.stopPropagation) ev.stopPropagation();
  if (!text) return;

  let btn = btnElement;
  if (!btn && typeof window !== 'undefined' && window.event) {
    const t = window.event.currentTarget || window.event.target;
    if (t) btn = t.closest ? t.closest('.mazii-audio-btn, .speak-btn-mini, button') : t;
  }

  if (typeof speakJapanese === 'function') {
    speakJapanese(text, btn, ev);
  } else if (typeof window !== 'undefined' && typeof window.speakJapanese === 'function') {
    window.speakJapanese(text, btn, ev);
  } else {
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'ja-JP';
      window.speechSynthesis.speak(utter);
    } catch (e) {
      console.warn('Speech error:', e);
    }
  }
}
window.speakMaziiAudio = speakMaziiAudio;

/**
 * Gọi API Mazii tra cứu Từ vựng, Chữ Hán, Ngữ pháp
 */
async function fetchMaziiSearch(query, type = 'word') {
  if (typeof DictionaryEngine !== 'undefined' && typeof DictionaryEngine.fetchMaziiSearch === 'function') {
    return DictionaryEngine.fetchMaziiSearch(query, type);
  }
  if (!query || !query.trim()) return null;
  const q = query.trim();
  const cacheKey = `${type}_${q}`;
  if (maziiCache.has(cacheKey)) {
    return maziiCache.get(cacheKey);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

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

    // Nếu tìm từ vựng không thấy và từ khóa có dạng romaji -> thử đổi sang hiragana
    if (type === 'word' && (!data.data || data.data.length === 0)) {
      const kanaQ = romajiToHiragana(q);
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
              maziiCache.set(cacheKey, fallbackData);
              return fallbackData;
            }
          }
        } catch (e) {}
      }
    }

    maziiCache.set(cacheKey, data);
    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn('[MaziiAPI] Lỗi tra cứu trực tuyến:', err);
    throw err;
  }
}

/**
 * Quản lý lịch sử tra cứu Mazii trong storage
 */
function getMaziiHistory() {
  try {
    const raw = (typeof safeGetStorage === 'function') ? safeGetStorage('minna_mazii_history') : localStorage.getItem('minna_mazii_history');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveMaziiHistory(query, type) {
  if (!query) return;
  try {
    let list = getMaziiHistory();
    list = list.filter(item => item.query.toLowerCase() !== query.toLowerCase() || item.type !== type);
    list.unshift({ query, type, time: Date.now() });
    if (list.length > 15) list = list.slice(0, 15);
    const json = JSON.stringify(list);
    if (typeof safeSetStorage === 'function') safeSetStorage('minna_mazii_history', json);
    else localStorage.setItem('minna_mazii_history', json);
  } catch (e) {}
}

/**
 * Logic Bảng Viết Tay Canvas & Nhận diện nét bút
 */
function initHandwritingPad() {
  hwCanvas = document.getElementById('mazii-canvas');
  if (!hwCanvas) return;

  hwCtx = hwCanvas.getContext('2d');
  hwDpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? window.devicePixelRatio : 1;

  // Cấu hình kích thước vật lý theo DPI
  const rect = hwCanvas.getBoundingClientRect();
  const parentWidth = hwCanvas.parentElement ? hwCanvas.parentElement.clientWidth : 0;
  const cssWidth = Math.round(rect.width || parentWidth || 340);
  const cssHeight = Math.round(rect.height || 360);
  hwCanvas.width = Math.round(cssWidth * hwDpr);
  hwCanvas.height = Math.round(cssHeight * hwDpr);

  drawHandwritingGrid();

  // Lắng nghe thay đổi kích thước màn hình để tự động căng tràn canvas tối đa
  if (typeof window !== 'undefined' && !window.__maziiPadResizeBound) {
    window.__maziiPadResizeBound = true;
    window.addEventListener('resize', () => {
      if (maziiIsHwOpen && hwCanvas) {
        initHandwritingPad();
        redrawHandwritingCanvas();
      }
    });
  }

  // Bắt sự kiện Pointer (chuột + cảm ứng ngón tay + bút stylus)
  hwCanvas.onpointerdown = (e) => {
    e.preventDefault();
    hwIsDrawing = true;
    try { hwCanvas.setPointerCapture(e.pointerId); } catch(err) {}

    const pt = getCanvasPoint(e);
    hwStartTime = Date.now();
    hwCurrentStroke = [[pt.x], [pt.y], [0]];

    hwCtx.save();
    hwCtx.scale(hwDpr, hwDpr);
    hwCtx.beginPath();
    hwCtx.lineCap = 'round';
    hwCtx.lineJoin = 'round';
    hwCtx.lineWidth = 4;
    hwCtx.strokeStyle = getThemeStrokeColor();
    hwCtx.moveTo(pt.x, pt.y);
  };

  hwCanvas.onpointermove = (e) => {
    if (!hwIsDrawing || !hwCurrentStroke) return;
    e.preventDefault();
    const pt = getCanvasPoint(e);
    const dt = Date.now() - hwStartTime;

    hwCurrentStroke[0].push(pt.x);
    hwCurrentStroke[1].push(pt.y);
    hwCurrentStroke[2].push(dt);

    hwCtx.lineTo(pt.x, pt.y);
    hwCtx.stroke();
  };

  const endDrawing = (e) => {
    if (!hwIsDrawing) return;
    hwIsDrawing = false;
    hwCtx.restore();

    if (hwCurrentStroke && hwCurrentStroke[0].length > 0) {
      hwStrokes.push(hwCurrentStroke);
      hwCurrentStroke = null;
      redrawHandwritingCanvas();

      // Hẹn giờ nhận diện tự động sau 550ms người dùng ngưng vẽ
      clearTimeout(hwTimer);
      hwTimer = setTimeout(() => {
        recognizeHandwritingStrokes();
      }, 550);
    }
  };

  hwCanvas.onpointerup = endDrawing;
  hwCanvas.onpointercancel = endDrawing;
}

function getCanvasPoint(e) {
  const rect = hwCanvas.getBoundingClientRect();
  return {
    x: Math.round(e.clientX - rect.left),
    y: Math.round(e.clientY - rect.top)
  };
}

function getThemeStrokeColor() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  return isDark ? '#f1f5f9' : '#1e293b';
}

function drawHandwritingGrid() {
  if (!hwCtx || !hwCanvas) return;
  const w = hwCanvas.width / hwDpr;
  const h = hwCanvas.height / hwDpr;

  hwCtx.save();
  hwCtx.scale(hwDpr, hwDpr);
  hwCtx.clearRect(0, 0, w, h);

  // Vẽ lưới ô chữ Hán genkouyoushi (dấu thập nét đứt)
  hwCtx.strokeStyle = 'rgba(224, 82, 68, 0.22)';
  hwCtx.lineWidth = 1;
  hwCtx.setLineDash([5, 5]);

  hwCtx.beginPath();
  hwCtx.moveTo(0, h / 2);
  hwCtx.lineTo(w, h / 2);
  hwCtx.moveTo(w / 2, 0);
  hwCtx.lineTo(w / 2, h);
  hwCtx.stroke();
  hwCtx.setLineDash([]);
  hwCtx.restore();
}

function redrawHandwritingCanvas() {
  if (!hwCtx || !hwCanvas) return;
  drawHandwritingGrid();

  const strokeColor = getThemeStrokeColor();
  hwCtx.save();
  hwCtx.scale(hwDpr, hwDpr);
  hwCtx.lineCap = 'round';
  hwCtx.lineJoin = 'round';
  hwCtx.lineWidth = 4;
  hwCtx.strokeStyle = strokeColor;

  for (const stroke of hwStrokes) {
    const xs = stroke[0];
    const ys = stroke[1];
    if (!xs || xs.length === 0) continue;

    hwCtx.beginPath();
    hwCtx.moveTo(xs[0], ys[0]);
    for (let i = 1; i < xs.length; i++) {
      hwCtx.lineTo(xs[i], ys[i]);
    }
    hwCtx.stroke();
  }
  hwCtx.restore();
}

function undoHandwritingStroke() {
  if (hwStrokes.length === 0) return;
  hwStrokes.pop();
  redrawHandwritingCanvas();
  if (hwStrokes.length > 0) {
    recognizeHandwritingStrokes();
  } else {
    renderCandidates([]);
  }
}

function clearHandwritingCanvas() {
  hwStrokes = [];
  hwCurrentStroke = null;
  clearTimeout(hwTimer);
  drawHandwritingGrid();
  renderCandidates([]);
}

/**
 * Gửi nét vẽ lên Google Handwriting Recognition API
 */
/**
 * Chụp hình ảnh nét vẽ trên Canvas sang Base64 PNG (nền trắng nét đen rõ nét cho AI)
 */
function getCanvasImageBase64() {
  if (!hwCanvas || hwStrokes.length === 0) return null;
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = hwCanvas.width || 300;
  tempCanvas.height = hwCanvas.height || 280;
  const tempCtx = tempCanvas.getContext('2d');

  // Vẽ nền trắng tinh
  tempCtx.fillStyle = '#ffffff';
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // Vẽ các nét vẽ của người dùng bằng màu đen đậm rõ nét
  tempCtx.lineCap = 'round';
  tempCtx.lineJoin = 'round';
  tempCtx.lineWidth = Math.round(6 * hwDpr);
  tempCtx.strokeStyle = '#000000';

  for (const stroke of hwStrokes) {
    const xs = stroke[0];
    const ys = stroke[1];
    if (!xs || xs.length === 0) continue;

    tempCtx.beginPath();
    tempCtx.moveTo(xs[0] * hwDpr, ys[0] * hwDpr);
    for (let i = 1; i < xs.length; i++) {
      tempCtx.lineTo(xs[i] * hwDpr, ys[i] * hwDpr);
    }
    tempCtx.stroke();
  }

  const dataUrl = tempCanvas.toDataURL('image/png');
  return dataUrl.replace(/^data:image\/png;base64,/, '');
}

/**
 * Nhận diện nét vẽ chữ Hán & Từ mới qua Trí tuệ Nhân tạo (AI Handwriting Recognition Engine)
 * Tự động 100%, kết nối mạng neural không cần cấu hình khóa API.
 */
async function recognizeHandwritingStrokes() {
  if (hwStrokes.length === 0) {
    if (typeof showToast === 'function') showToast('Vui lòng vẽ chữ lên bảng vẽ trước');
    return;
  }
  const listEl = document.getElementById('mazii-candidates-list');
  if (listEl) {
    listEl.innerHTML = `
      <span class="mazii-candidate-item empty-hint" style="color:#6366f1;display:inline-flex;align-items:center;gap:6px;">
        <span class="mazii-spinner-small"></span>
        <span style="display:inline-flex;align-items:center;gap:6px;">${APP_ICONS.robot} <span>AI đang nhận diện nét vẽ...</span></span>
      </span>
    `;
  }

  if (typeof DictionaryEngine !== 'undefined' && typeof DictionaryEngine.recognizeHandwriting === 'function') {
    try {
      const candidates = await DictionaryEngine.recognizeHandwriting(hwStrokes, {
        width: hwCanvas ? hwCanvas.width : 300,
        height: hwCanvas ? hwCanvas.height : 320,
        dpr: hwDpr || 1
      });
      if (Array.isArray(candidates) && candidates.length > 0) {
        renderCandidates(candidates);
        return;
      }
    } catch (e) {
      console.warn('[Handwriting] Lỗi nhận diện qua DictionaryEngine:', e);
    }
  }

  const payload = {
    app_version: 0.4,
    api_level: '537.36',
    device: '537.36',
    input_type: '0',
    options: 'enable_pre_space',
    requests: [{
      writing_guide: {
        writing_area_width: Math.round(hwCanvas ? hwCanvas.width / hwDpr : 300),
        writing_area_height: Math.round(hwCanvas ? hwCanvas.height / hwDpr : 320)
      },
      pre_context: '',
      max_num_results: 12,
      max_completions: 0,
      language: 'ja',
      ink: hwStrokes
    }]
  };

  const endpoints = [
    'https://inputtools.google.com/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8',
    'https://www.google.com/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8'
  ];

  let candidates = [];
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
      if (data && data[0] === 'SUCCESS' && data[1] && data[1][0] && data[1][0][1]) {
        candidates = data[1][0][1];
        if (Array.isArray(candidates) && candidates.length > 0) {
          break; // Nhận diện thành công
        }
      }
    } catch (err) {
      lastError = err;
      console.warn('[Handwriting AI] Endpoint ' + url + ' thất bại:', err);
    }
  }

  if (candidates.length > 0) {
    renderCandidates(candidates);
    return;
  }

  if (listEl) {
    listEl.innerHTML = `
      <span class="mazii-candidate-item empty-hint" style="color:#ef4444;display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <span>Không thể kết nối máy chủ AI (${escapeHtml(lastError ? lastError.message : 'Lỗi mạng')}).</span>
        <button type="button" class="mazii-hw-btn btn-hw-ai" style="min-height:36px;font-size:12.5px;padding:4px 12px;" onclick="recognizeHandwritingStrokes()">
          <span style="display:inline-flex;align-items:center;gap:4px;">${APP_ICONS.refresh} <span>Thử lại</span></span>
        </button>
      </span>
    `;
  }
}

/**
 * Xóa 1 ký tự cuối cùng trong ô tìm kiếm Mazii
 */
function backspaceSearchChar() {
  const input = document.getElementById('mazii-search-input');
  if (input && input.value) {
    input.value = input.value.slice(0, -1);
    if (input.value.trim()) {
      executeMaziiSearch(input.value);
    } else {
      const resultsBox = document.getElementById('mazii-results-container');
      if (resultsBox) {
        resultsBox.innerHTML = `
          <div class="mazii-empty-state">
            <span class="mazii-empty-icon">${APP_ICONS.book}</span>
            <div class="mazii-empty-title">Tra từ điển Nhật - Việt</div>
            <p class="mazii-empty-desc">Nhập từ vựng, kanji bằng Romaji/Hiragana hoặc vẽ tay chữ Hán</p>
          </div>
        `;
      }
    }
  }
}

function renderCandidates(candidates) {
  const listEl = document.getElementById('mazii-candidates-list');
  if (!listEl) return;

  if (!candidates || candidates.length === 0) {
    listEl.innerHTML = '<span class="mazii-candidate-item empty-hint">Vẽ chữ vào ô phía trên để nhận diện chữ Hán &amp; Từ mới</span>';
    return;
  }

  listEl.innerHTML = candidates.map(char => `
    <button type="button" class="mazii-candidate-item" data-char="${escapeHtml(char)}" title="Chọn chữ ${escapeHtml(char)}">
      ${escapeHtml(char)}
    </button>
  `).join('');

  listEl.querySelectorAll('.mazii-candidate-item').forEach(btn => {
    btn.onclick = () => {
      const char = btn.getAttribute('data-char');
      if (!char) return;
      const input = document.getElementById('mazii-search-input');
      if (input) {
        input.value = (input.value ? input.value + char : char);
        input.focus();
        // Tự động chuyển sang tab Kanji nếu chỉ chọn 1 ký tự chữ Hán
        if (/^[\u4e00-\u9faf]$/.test(char) && maziiCurrentTab === 'grammar') {
          switchMaziiTab('kanji');
        }
        executeMaziiSearch(input.value);
      }
    };
  });
}

/**
 * Tiện ích chuẩn hoá chuỗi & Tra cứu từ điển dự phòng ngoại tuyến
 */
function safeTrim(val) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val.trim();
  if (Array.isArray(val)) return val.map(x => safeTrim(x)).filter(Boolean).join(' ');
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    return safeTrim(val.mean || val.text || val.value || val.kanji || val.kana || '');
  }
  return String(val).trim();
}

function safeKind(kind) {
  if (!kind) return '';
  if (typeof kind === 'string') return kind.toUpperCase();
  if (Array.isArray(kind)) return kind.map(k => safeTrim(k)).filter(Boolean).join(', ').toUpperCase();
  return String(kind).toUpperCase();
}

function removeVietnameseTones(str) {
  if (!str) return '';
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase();
}

function stripRubyText(html) {
  if (!html) return '';
  return html.replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]+>/g, '').trim();
}

function scoreDictMatch(text, query, textNoTone, queryNoTone, hasTone) {
  if (!text) return 0;
  const t = text.toLowerCase();
  if (t === query) return 200;
  if (!hasTone && textNoTone === queryNoTone) return 150;
  if (t.startsWith(query)) return 120;
  if (!hasTone && textNoTone.startsWith(queryNoTone)) return 100;
  
  // Trùng khớp nguyên từ (ví dụ "ăn" trong "ăn cơm", "tôi" trong "của tôi")
  const wordRegex = new RegExp('(?:^|[^a-zà-ỹ0-9])' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '(?:$|[^a-zà-ỹ0-9])', 'i');
  if (wordRegex.test(t)) return 110;

  if (!hasTone) {
    const wordNoToneRegex = new RegExp('(?:^|[^a-z0-9])' + queryNoTone.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '(?:$|[^a-z0-9])', 'i');
    if (wordNoToneRegex.test(textNoTone)) return 80;
  }

  if (t.includes(query)) return 50;
  if (!hasTone && textNoTone.includes(queryNoTone)) return 30;
  return 0;
}

/**
 * Tra cứu kho từ vựng, chữ Hán và ngữ pháp 50 bài Minna SGK nội bộ (Offline Fallback Engine)
 * Hoạt động 100% không cần mạng, phản hồi tức thì dưới 10ms.
 */
function searchInternalDictionary(q, type = 'word') {
  if (!q || typeof q !== 'string') return { status: 200, data: [], isInternal: true };
  const query = q.trim();
  if (!query) return { status: 200, data: [], isInternal: true };
  const queryLower = query.toLowerCase();
  const queryNoTone = removeVietnameseTones(query);
  const hasTone = queryLower !== queryNoTone;
  const candidates = [];
  const seen = new Set();

  // 1. TỪ VỰNG (type: 'word')
  if (type === 'word') {
    function evaluateWord(word, phonetic, han, meaning, pos) {
      if (!word) return;
      const w = safeTrim(word);
      const p = safeTrim(phonetic);
      const h = safeTrim(han);
      const m = safeTrim(meaning);

      const wLower = w.toLowerCase();
      const pLower = p.toLowerCase();
      const hLower = h.toLowerCase();
      const mLower = m.toLowerCase();

      const wNT = removeVietnameseTones(w);
      const pNT = removeVietnameseTones(p);
      const hNT = removeVietnameseTones(h);
      const mNT = removeVietnameseTones(m);

      const sWord = scoreDictMatch(wLower, queryLower, wNT, queryNoTone, hasTone);
      const sPhonetic = scoreDictMatch(pLower, queryLower, pNT, queryNoTone, hasTone);
      const sHan = scoreDictMatch(hLower, queryLower, hNT, queryNoTone, hasTone);
      const sMean = scoreDictMatch(mLower, queryLower, mNT, queryNoTone, hasTone);

      const bestScore = Math.max(sWord * 1.5, sPhonetic * 1.4, sHan * 1.3, sMean);
      if (bestScore >= 30) {
        if (!seen.has(w)) {
          seen.add(w);
          candidates.push({
            score: bestScore,
            item: {
              word: w,
              phonetic: p || '',
              han: h || '',
              means: [{ kind: pos || 'Từ vựng', mean: m || '' }]
            }
          });
        }
      }
    }

    // Tra trong toàn bộ 50 bài học Minna SGK
    const lList = (typeof lessonsData !== 'undefined' && Array.isArray(lessonsData)) ? lessonsData : [];
    for (const l of lList) {
      if (!l.vocabulary) continue;
      for (const v of l.vocabulary) {
        const rawW = stripRubyText(v.kanji) || v.hiragana;
        evaluateWord(rawW, v.hiragana, '', v.meaning, v.type);
      }
    }

    // Tra trong kho 1.806 từ vựng chữ Hán Minna
    const klList = (typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) ? kanjiLessonsData : [];
    for (const kl of klList) {
      if (!kl.items) continue;
      for (const it of kl.items) {
        evaluateWord(it.word || it.kanji, it.reading, it.hanViet, it.meaning, it.type);
      }
    }

    candidates.sort((a, b) => b.score - a.score);
    return { status: 200, data: candidates.slice(0, 20).map(c => c.item), isInternal: true };
  }

  // 2. CHỮ HÁN (type: 'kanji')
  if (type === 'kanji') {
    const klList = (typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) ? kanjiLessonsData : [];
    for (const kl of klList) {
      if (!kl.items) continue;
      for (const it of kl.items) {
        const w = safeTrim(it.word || it.kanji || '');
        const han = safeTrim(it.hanViet || '');
        const mean = safeTrim(it.meaning || '');
        const hanNT = removeVietnameseTones(han);
        const meanNT = removeVietnameseTones(mean);

        const isExactChar = (w === query || (Array.isArray(it.kanjis) && it.kanjis.includes(query)));
        const sChar = isExactChar ? 300 : 0;
        const sHan = scoreDictMatch(han.toLowerCase(), queryLower, hanNT, queryNoTone, hasTone);
        const sMean = scoreDictMatch(mean.toLowerCase(), queryLower, meanNT, queryNoTone, hasTone);
        const score = Math.max(sChar, sHan * 1.3, sMean);

        if (score >= 30) {
          const char = it.kanji || (Array.isArray(it.kanjis) && it.kanjis[0]) || w;
          if (!seen.has(char)) {
            seen.add(char);
            candidates.push({
              score,
              item: {
                kanji: char,
                mean: han || '',
                on: safeTrim(it.reading),
                kun: '',
                stroke_count: it.kanjiCount || '',
                level: kl.level || 'Minna N5'
              }
            });
          }
        }
      }
    }

    // Tra trong 214 Bộ thủ Kanji
    const radList = (typeof radicalsData !== 'undefined' && Array.isArray(radicalsData)) ? radicalsData : [];
    for (const grp of radList) {
      if (!grp.items) continue;
      for (const rad of grp.items) {
        const ch = safeTrim(rad.character);
        const name = safeTrim(rad.name);
        const mean = safeTrim(rad.meaning);
        const nameNT = removeVietnameseTones(name);
        const meanNT = removeVietnameseTones(mean);

        const isExactChar = (ch === query);
        const sChar = isExactChar ? 350 : 0;
        const sName = scoreDictMatch(name.toLowerCase(), queryLower, nameNT, queryNoTone, hasTone);
        const sMean = scoreDictMatch(mean.toLowerCase(), queryLower, meanNT, queryNoTone, hasTone);
        const score = Math.max(sChar, sName * 1.3, sMean);

        if (score >= 30) {
          if (!seen.has(ch)) {
            seen.add(ch);
            candidates.push({
              score,
              item: {
                kanji: ch,
                mean: name || '',
                on: '',
                kun: '',
                stroke_count: rad.strokeCount || grp.strokeCount || '',
                level: 'Bộ thủ'
              }
            });
          }
        }
      }
    }

    candidates.sort((a, b) => b.score - a.score);
    const results = candidates.slice(0, 15).map(c => c.item);
    return { status: 200, results: results, data: results, isInternal: true };
  }

  // 3. NGỮ PHÁP (type: 'grammar')
  if (type === 'grammar') {
    const lList = (typeof lessonsData !== 'undefined' && Array.isArray(lessonsData)) ? lessonsData : [];
    for (const l of lList) {
      if (!l.grammar) continue;
      for (const g of l.grammar) {
        const struct = safeTrim(g.structure);
        const exp = safeTrim(g.explanation);
        const structNT = removeVietnameseTones(struct);
        const expNT = removeVietnameseTones(exp);

        const sStruct = scoreDictMatch(struct.toLowerCase(), queryLower, structNT, queryNoTone, hasTone);
        const sExp = scoreDictMatch(exp.toLowerCase(), queryLower, expNT, queryNoTone, hasTone);
        const score = Math.max(sStruct * 1.5, sExp);

        if (score >= 30) {
          if (!seen.has(struct)) {
            seen.add(struct);
            candidates.push({
              score,
              item: {
                title: struct,
                level: l.level || 'Minna',
                mean: exp
              }
            });
          }
        }
      }
    }

    candidates.sort((a, b) => b.score - a.score);
    const results = candidates.slice(0, 15).map(c => c.item);
    return { status: 200, results: results, data: results, isInternal: true };
  }

  return { status: 200, data: [], isInternal: true };
}

/**
 * Thực thi tìm kiếm Mazii kết hợp cả Từ Vựng và Chữ Hán (Unified Dictionary Engine)
 */
async function executeMaziiSearch(queryOverride = null) {
  const input = document.getElementById('mazii-search-input');
  const query = safeTrim(queryOverride !== null ? queryOverride : (input ? input.value : ''));
  if (!query) return;

  maziiCurrentQuery = query;
  saveMaziiHistory(query, 'word');
  renderHistoryChips();

  const resultsBox = document.getElementById('mazii-results-container');
  if (!resultsBox) return;

  resultsBox.innerHTML = `
    <div class="mazii-status-box">
      <div class="mazii-spinner"></div>
      <div class="mazii-status-title">Đang tra cứu từ điển...</div>
      <div class="mazii-status-desc">Đang tải kết quả cho từ khóa "<strong>${escapeHtml(query)}</strong>"</div>
    </div>
  `;

  let wordData = null;
  let kanjiData = null;
  let onlineFailedCount = 0;

  // 1. Gọi song song cả API Từ Vựng (word) và Chữ Hán (kanji)
  const [wordRes, kanjiRes] = await Promise.allSettled([
    fetchMaziiSearch(query, 'word'),
    fetchMaziiSearch(query, 'kanji')
  ]);

  if (wordRes.status === 'fulfilled' && wordRes.value) {
    wordData = wordRes.value;
  } else {
    onlineFailedCount++;
  }

  if (kanjiRes.status === 'fulfilled' && kanjiRes.value) {
    kanjiData = kanjiRes.value;
  } else {
    onlineFailedCount++;
  }

  // 2. Kiểm tra & Fallback dữ liệu Từ vựng
  let hasWordResults = wordData && Array.isArray(wordData.data) && wordData.data.length > 0;
  if (!hasWordResults) {
    const internalWords = searchInternalDictionary(query, 'word');
    if (internalWords && Array.isArray(internalWords.data) && internalWords.data.length > 0) {
      wordData = internalWords;
      hasWordResults = true;
    }
  }

  // 3. Kiểm tra & Fallback dữ liệu Chữ Hán
  let hasKanjiResults = false;
  if (kanjiData) {
    const rawList = Array.isArray(kanjiData.results) ? kanjiData.results : (Array.isArray(kanjiData.data) ? kanjiData.data : []);
    const validList = rawList.filter(k => k && hasKanjiCharacter(k.kanji || k.word || ''));
    if (validList.length > 0) {
      kanjiData = { ...kanjiData, results: validList, data: validList };
      hasKanjiResults = true;
    } else {
      kanjiData = null;
    }
  }

  if (!hasKanjiResults) {
    const internalKanji = searchInternalDictionary(query, 'kanji');
    if (internalKanji) {
      const rawInt = Array.isArray(internalKanji.results) ? internalKanji.results : (Array.isArray(internalKanji.data) ? internalKanji.data : []);
      const validInt = rawInt.filter(k => k && hasKanjiCharacter(k.kanji || k.word || ''));
      if (validInt.length > 0) {
        kanjiData = { ...internalKanji, results: validInt, data: validInt };
        hasKanjiResults = true;
      }
    }
  }

  // Nếu từ khóa chứa ký tự Hán tự (ví dụ: "食べる", "日本語")
  // ➔ Tự động bóc tách từng chữ Hán trong từ để tra cứu bổ sung đầy đủ chiết tự chữ Hán!
  const kanjiChars = query.match(/[\u4e00-\u9faf]/g);
  if (kanjiChars && kanjiChars.length > 0) {
    const uniqueChars = Array.from(new Set(kanjiChars));
    const extractedKanjis = (kanjiData && (kanjiData.results || kanjiData.data)) ? [...(kanjiData.results || kanjiData.data)] : [];
    const existingChars = new Set(extractedKanjis.map(k => k.kanji));

    for (const char of uniqueChars) {
      if (!existingChars.has(char)) {
        const charKData = searchInternalDictionary(char, 'kanji');
        const charItems = (charKData && (charKData.results || charKData.data)) || [];
        if (charItems.length > 0) {
          extractedKanjis.push(...charItems);
          existingChars.add(char);
        } else {
          try {
            const onlineCharK = await fetchMaziiSearch(char, 'kanji');
            const onlineItems = (onlineCharK && (onlineCharK.results || onlineCharK.data)) || [];
            if (onlineItems.length > 0) {
              extractedKanjis.push(...onlineItems);
              existingChars.add(char);
            }
          } catch(e) {}
        }
      }
    }

    if (extractedKanjis.length > 0) {
      kanjiData = { status: 200, results: extractedKanjis, isInternal: (kanjiData && kanjiData.isInternal) || true };
      hasKanjiResults = true;
    }
  }

  // 4. Nếu cả 2 đều không tìm thấy kết quả
  if (!hasWordResults && !hasKanjiResults) {
    if (onlineFailedCount === 2) {
      resultsBox.innerHTML = `
        <div class="mazii-status-box">
          <div class="mazii-status-icon">${APP_ICONS.alert}</div>
          <div class="mazii-status-title">Không thể kết nối đến máy chủ từ điển</div>
          <div class="mazii-status-desc">Vui lòng kiểm tra kết nối mạng hoặc thử vẽ tay để tra chữ Hán.</div>
          <div style="margin-top:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
            <button type="button" class="mazii-hw-btn btn-hw-primary" onclick="executeMaziiSearch('${escapeHtml(query)}')">
              ${APP_ICONS.refresh} <span>Thử lại</span>
            </button>
            <button type="button" class="mazii-hw-btn" onclick="toggleHandwritingPanel(true)">
              ${APP_ICONS.pen} <span>Bảng viết tay</span>
            </button>
          </div>
        </div>
      `;
    } else {
      resultsBox.innerHTML = `
        <div class="mazii-status-box">
          <div class="mazii-status-icon">${APP_ICONS.search}</div>
          <div class="mazii-status-title">Không tìm thấy từ vựng hoặc chữ Hán phù hợp</div>
          <div class="mazii-status-desc">Không có kết quả cho "<strong>${escapeHtml(query)}</strong>". Bạn có thể thử vẽ tay để tra chữ Hán hoặc kiểm tra lại từ khóa.</div>
          <div style="margin-top:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
            <button type="button" class="mazii-hw-btn btn-hw-primary" onclick="toggleHandwritingPanel(true)">
              ${APP_ICONS.pen} <span>Mở bảng viết tay</span>
            </button>
          </div>
        </div>
      `;
    }
    return;
  }

  // 5. Hiển thị kết quả kết hợp tinh gọn
  try {
    renderCombinedMaziiResults(wordData, kanjiData, query);
  } catch (renderErr) {
    console.error('[Mazii] Lỗi render:', renderErr);
    resultsBox.innerHTML = `
      <div class="mazii-status-box">
        <div class="mazii-status-icon">${APP_ICONS.alert}</div>
        <div class="mazii-status-title">Đã xảy ra lỗi khi hiển thị kết quả</div>
        <div class="mazii-status-desc">Vui lòng thử lại với từ khóa khác.</div>
      </div>
    `;
  }
}

/**
 * Định dạng thẻ Từ Vựng Compact Card
 */
function formatWordCompactCard(w, query) {
  const wordText = safeTrim(w.word || query);
  let phonetic = safeTrim(w.phonetic).split(/\s+/)[0] || '';
  if (!phonetic && Array.isArray(w.pronunciation) && w.pronunciation[0]) {
    phonetic = safeTrim(w.pronunciation[0].kana);
  }
  const han = safeTrim(w.han);
  const rawMeans = Array.isArray(w.means) ? w.means : [];

  const uniqueMeans = [];
  const seen = new Set();
  for (const m of rawMeans) {
    if (!m) continue;
    const kind = safeKind(m.kind);
    const mean = safeTrim(typeof m === 'object' ? (m.mean || m.value) : m);
    if (mean && !seen.has(mean.toLowerCase())) {
      seen.add(mean.toLowerCase());
      uniqueMeans.push({ kind, mean });
      if (uniqueMeans.length >= 2) break;
    }
  }

  if (uniqueMeans.length === 0 && w.short_mean) {
    uniqueMeans.push({ kind: '', mean: safeTrim(w.short_mean) });
  }
  if (uniqueMeans.length === 0) {
    uniqueMeans.push({ kind: '', mean: 'Chưa có định nghĩa' });
  }

  const meansHtml = uniqueMeans.map(m => `
    <div class="dict-meaning-block">
      ${m.kind ? `<div class="dict-pos">${escapeHtml(m.kind)}</div>` : ''}
      <div class="dict-mean-text">${escapeHtml(m.mean)}</div>
    </div>
  `).join('');

  return `
    <div class="dict-compact-card">
      <div class="dict-card-header">
        <div class="dict-card-main-info">
          <span class="dict-word">${escapeHtml(wordText)}</span>
          ${phonetic ? `<span class="dict-phonetic">${escapeHtml(phonetic)}</span>` : ''}
          ${han ? `<span class="dict-hanviet">${escapeHtml(han)}</span>` : ''}
        </div>
        <button type="button" class="dict-audio-btn" onclick="speakMaziiAudio('${escapeHtml(wordText)}', this, event)" title="Nghe phát âm chuẩn website">
          ${typeof SPEAKER_ICON_HTML !== 'undefined' ? SPEAKER_ICON_HTML : '🔊'}
        </button>
      </div>

      <div class="dict-means-container">
        ${meansHtml}
      </div>
    </div>
  `;
}

/**
 * Định dạng thẻ Chữ Hán Compact Card
 */
function formatKanjiCompactCard(k, query) {
  if (!k || typeof k !== 'object') return '';
  const char = safeTrim(k.kanji || k.word || '');
  // Chỉ chấp nhận nếu char thực sự chứa ký tự chữ Hán CJK, tuyệt đối không lấy query tiếng Việt
  if (!char || !hasKanjiCharacter(char)) {
    return '';
  }
  const han = safeTrim(k.mean || '');
  const on = safeTrim(k.on).split(/\s+/).slice(0, 2).join(' ');
  const kun = safeTrim(k.kun).split(/\s+/).slice(0, 2).join(' ');
  const reading = [on, kun].filter(Boolean).join(' • ');
  const strokes = k.stroke_count ? `${safeTrim(k.stroke_count)} Nét` : '';
  const levelVal = Array.isArray(k.level) ? k.level[0] : k.level;
  const level = safeTrim(levelVal);
  const detailInfo = [strokes, level].filter(Boolean).join(' | ');

  return `
    <div class="dict-compact-card">
      <div class="dict-card-header">
        <div class="dict-card-main-info">
          <span class="dict-word">${escapeHtml(char)}</span>
          ${reading ? `<span class="dict-phonetic">${escapeHtml(reading)}</span>` : ''}
          ${han ? `<span class="dict-hanviet">${escapeHtml(han)}</span>` : ''}
        </div>
        <button type="button" class="dict-audio-btn" onclick="speakMaziiAudio('${escapeHtml(char)}', this, event)" title="Nghe phát âm chuẩn website">
          ${typeof SPEAKER_ICON_HTML !== 'undefined' ? SPEAKER_ICON_HTML : '🔊'}
        </button>
      </div>

      <div class="dict-means-container">
        <div class="dict-meaning-block">
          ${detailInfo ? `<div class="dict-pos">${escapeHtml(detailInfo.toUpperCase())}</div>` : ''}
          <div class="dict-mean-text">${escapeHtml(han || 'Chữ Hán')} (Âm On: ${escapeHtml(on || '—')} / Âm Kun: ${escapeHtml(kun || '—')})</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render kết quả tra cứu kết hợp cả Từ Vựng và Chữ Hán
 */
function renderCombinedMaziiResults(wordData, kanjiData, query) {
  const resultsBox = document.getElementById('mazii-results-container');
  if (!resultsBox) return;

  const isInternal = (wordData && wordData.isInternal) || (kanjiData && kanjiData.isInternal);
  const sourceBadgeHtml = ''; // Đã xóa ô tra cứu ngoại tuyến theo yêu cầu người dùng

  const words = (wordData && Array.isArray(wordData.data)) ? wordData.data : [];
  const rawKanjis = (kanjiData && (Array.isArray(kanjiData.results) ? kanjiData.results : (Array.isArray(kanjiData.data) ? kanjiData.data : []))) || [];

  // LỌC CHẶT CHẼ: Bắt buộc mục Chữ Hán phải có chứa ký tự chữ Hán (CJK ideograph)
  // Tuyệt đối loại bỏ các câu ví dụ hoặc chuỗi tiếng Việt mà Mazii trả về trong mục kanji
  const kanjis = rawKanjis.filter(k => {
    if (!k || typeof k !== 'object') return false;
    const char = safeTrim(k.kanji || k.word || '');
    return Boolean(char && hasKanjiCharacter(char));
  });

  if (words.length === 0 && kanjis.length === 0) {
    resultsBox.innerHTML = `
      <div class="mazii-status-box">
        <div class="mazii-status-icon">${APP_ICONS.search}</div>
        <div class="mazii-status-title">Không tìm thấy từ vựng hoặc chữ Hán phù hợp</div>
        <div class="mazii-status-desc">Không có kết quả cho "<strong>${escapeHtml(query)}</strong>". Bạn có thể thử vẽ tay để tra chữ Hán.</div>
        <div style="margin-top:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
          <button type="button" class="mazii-hw-btn btn-hw-primary" onclick="toggleHandwritingPanel(true)">
            ${APP_ICONS.pen} <span>Mở bảng viết tay</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  // Khối HTML chữ Hán
  const kanjiHtml = kanjis.length > 0 ? `
    <div class="dict-results-section">
      <div class="dict-section-header">
        <span class="dict-section-pill pill-kanji">${APP_ICONS.kanjiBadge} <span>Chữ Hán</span></span>
        <span class="dict-section-count">${kanjis.length} kết quả</span>
      </div>
      <div class="dict-section-cards">
        ${kanjis.slice(0, 15).map(k => formatKanjiCompactCard(k, query)).filter(Boolean).join('')}
      </div>
    </div>
  ` : '';

  // Khối HTML từ vựng
  const wordHtml = words.length > 0 ? `
    <div class="dict-results-section">
      <div class="dict-section-header">
        <span class="dict-section-pill pill-word">${APP_ICONS.book} <span>Từ Vựng</span></span>
        <span class="dict-section-count">${words.length} kết quả</span>
      </div>
      <div class="dict-section-cards">
        ${words.slice(0, 20).map(w => formatWordCompactCard(w, query)).join('')}
      </div>
    </div>
  ` : '';

  // Ưu tiên hiển thị:
  // Nếu là 1 chữ Hán đơn lẻ (ví dụ "食", "学"), khối Chữ Hán đứng trước, Từ vựng đứng sau
  // Ngược lại (từ vựng, câu, romaji, tiếng Việt), Từ vựng đứng trước, Chữ Hán đứng sau
  const isSingleKanji = /^[\u4e00-\u9faf]$/.test(query);
  const sectionsHtml = isSingleKanji ? (kanjiHtml + wordHtml) : (wordHtml + kanjiHtml);

  resultsBox.innerHTML = sourceBadgeHtml + sectionsHtml;
}

/**
 * Hàm tương thích ngược render kết quả cũ
 */
function renderMaziiResults(data, query, type) {
  if (type === 'word') {
    renderCombinedMaziiResults(data, null, query);
  } else if (type === 'kanji') {
    renderCombinedMaziiResults(null, data, query);
  } else if (type === 'grammar') {
    renderGrammarResults(data, query);
  } else {
    renderCombinedMaziiResults(data && data.wordData ? data.wordData : data, data && data.kanjiData ? data.kanjiData : null, query);
  }
}

/**
 * Render kết quả Ngữ pháp
 */
function renderGrammarResults(data, query) {
  const resultsBox = document.getElementById('mazii-results-container');
  if (!resultsBox) return;

  const isInternal = data && data.isInternal === true;
  const sourceBadgeHtml = ''; // Đã xóa ô tra cứu ngoại tuyến theo yêu cầu người dùng

  const grammars = (data && (Array.isArray(data.results) ? data.results : (Array.isArray(data.data) ? data.data : []))) || [];
  if (grammars.length === 0) {
    resultsBox.innerHTML = `
      <div class="mazii-status-box">
        <div class="mazii-status-icon">文</div>
        <div class="mazii-status-title">Không tìm thấy Ngữ pháp phù hợp</div>
        <div class="mazii-status-desc">Không tìm thấy cấu trúc ngữ pháp cho "<strong>${escapeHtml(query)}</strong>".</div>
      </div>
    `;
    return;
  }

  resultsBox.innerHTML = sourceBadgeHtml + grammars.slice(0, 15).map(g => {
    const title = safeTrim(g.title || query);
    const level = safeTrim(g.level || '');
    const mean = safeTrim(g.mean || '');

    return `
      <div class="dict-compact-card">
        <div class="dict-card-header">
          <div class="dict-card-main-info">
            <span class="dict-word" style="font-size:18px;">${escapeHtml(title)}</span>
            ${level ? `<span class="dict-hanviet">${escapeHtml(level)}</span>` : ''}
          </div>
          <button type="button" class="dict-audio-btn" onclick="speakMaziiAudio('${escapeHtml(title.split('=>')[0].trim())}', this, event)" title="Nghe mẫu ngữ pháp">
            ${typeof SPEAKER_ICON_HTML !== 'undefined' ? SPEAKER_ICON_HTML : '🔊'}
          </button>
        </div>
        ${mean ? `
        <div class="dict-means-container">
          <div class="dict-meaning-block">
            <div class="dict-mean-text">${escapeHtml(mean)}</div>
          </div>
        </div>` : ''}
      </div>
    `;
  }).join('');
}

/**
 * Chuyển đổi tab Từ vựng / Chữ Hán / Ngữ pháp
 */
function switchMaziiTab(tab) {
  maziiCurrentTab = tab;
  document.querySelectorAll('.mazii-type-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === tab);
  });
  const input = document.getElementById('mazii-search-input');
  if (input && input.value.trim()) {
    executeMaziiSearch(input.value.trim());
  }
}

/**
 * ==========================================================================
 * TÌM KIẾM TỪ ĐIỂN BẰNG GIỌNG NÓI (VOICE SEARCH ENGINE)
 * Hỗ trợ nhận diện giọng nói Tiếng Nhật (ja-JP) & Tiếng Việt (vi-VN)
 * ==========================================================================
 */

/**
 * Bật / Tắt chế độ tìm kiếm bằng giọng nói
 */
/**
 * Cập nhật trạng thái hiển thị giao diện Micro (Đang nghe / Tạm dừng)
 */
function setVoiceMicActiveVisual(isActive) {
  const modalMic = document.getElementById('mazii-voice-modal-mic');
  const voiceBtn = document.getElementById('mazii-btn-voice');
  if (modalMic) {
    modalMic.classList.toggle('paused', !isActive);
    modalMic.setAttribute('title', isActive ? 'Đang nghe... Chạm để tạm dừng' : 'Đã tạm dừng. Chạm vào Micro để nói');
  }
  if (voiceBtn) {
    voiceBtn.classList.toggle('listening', isActive);
    voiceBtn.setAttribute('title', isActive ? 'Đang nghe... Bấm để dừng' : 'Tìm kiếm bằng giọng nói');
  }
}

/**
 * Lên lịch tự động khởi động lại phiên nhận diện trên trình duyệt di động
 * (Khắc phục hiện tượng Chrome Android tự động ngắt kết nối sau 1-2s im lặng)
 */
function scheduleVoiceRestart(lang) {
  if (!maziiShouldKeepListening) return;
  clearTimeout(maziiVoiceRestartTimer);
  maziiVoiceRestartTimer = setTimeout(() => {
    if (maziiShouldKeepListening && !maziiIsVoiceListening) {
      try {
        if (maziiVoiceRecognition) {
          maziiVoiceRecognition.start();
        } else {
          startMaziiVoiceSearch(lang || maziiVoiceLang);
        }
      } catch (err) {
        try {
          startMaziiVoiceSearch(lang || maziiVoiceLang);
        } catch (e) {
          console.warn('[VoiceSearch] Không thể tự khởi động lại:', e);
        }
      }
    }
  }, 120);
}

/**
 * Chốt kết quả nhận diện giọng nói và tự động kích hoạt tra cứu
 */
function commitVoiceSearchResult(transcript, alternatives) {
  if (!transcript) return;
  maziiShouldKeepListening = false;
  clearTimeout(maziiVoiceRestartTimer);
  clearTimeout(maziiFinalizeTimer);
  clearTimeout(maziiSilenceHintTimer);

  stopMaziiVoiceSearch(false);

  const input = document.getElementById('mazii-search-input');
  if (input) {
    input.value = transcript;
    const clearBtn = document.getElementById('mazii-btn-clear');
    if (clearBtn) clearBtn.style.display = 'flex';
  }

  renderVoiceCandidates(alternatives, transcript);
  setTimeout(() => {
    executeMaziiSearch(transcript);
  }, 200);
}

/**
 * Bật / Tắt chế độ tìm kiếm bằng giọng nói từ thanh tra cứu
 */
function toggleMaziiVoiceSearch() {
  if (maziiIsVoiceListening || maziiShouldKeepListening) {
    stopMaziiVoiceSearch(true);
  } else {
    startMaziiVoiceSearch(maziiVoiceLang);
  }
}

/**
 * Chạm vào Micro lớn trong khung Voice Search để bắt đầu / tạm dừng nói
 */
function toggleMaziiVoiceModalMic() {
  if (maziiIsVoiceListening || maziiShouldKeepListening) {
    // Tạm dừng nghe nhưng giữ nguyên khung
    maziiShouldKeepListening = false;
    clearTimeout(maziiVoiceRestartTimer);
    clearTimeout(maziiFinalizeTimer);
    clearTimeout(maziiSilenceHintTimer);
    if (maziiVoiceRecognition) {
      try { maziiVoiceRecognition.abort(); } catch (e) {}
    }
    maziiIsVoiceListening = false;
    setVoiceMicActiveVisual(false);

    const titleEl = document.getElementById('mazii-voice-title');
    const transcriptEl = document.getElementById('mazii-voice-transcript');
    if (titleEl) titleEl.textContent = 'Đã tạm dừng nghe';
    if (transcriptEl) transcriptEl.textContent = 'Chạm vào biểu tượng Micro khi bạn sẵn sàng nói tiếp.';
  } else {
    // Bắt đầu nói lại trực tiếp bằng User Gesture
    startMaziiVoiceSearch(maziiVoiceLang);
  }
}

/**
 * Cấp quyền Micro qua getUserMedia khi Chrome yêu cầu xác nhận
 */
async function retryMicrophonePermission() {
  const transcriptEl = document.getElementById('mazii-voice-transcript');
  if (transcriptEl) transcriptEl.textContent = 'Đang yêu cầu cấp quyền Micro... Vui lòng bấm [Cho phép] trên thông báo trình duyệt.';
  if (typeof navigator !== 'undefined' && navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      startMaziiVoiceSearch(maziiVoiceLang);
    } catch (err) {
      console.warn('[VoiceSearch] getUserMedia bị từ chối:', err);
      if (transcriptEl) {
        transcriptEl.innerHTML = 'Micro vẫn đang bị chặn. Vui lòng bấm vào <b>biểu tượng Cài đặt trang web / Khóa</b> trên thanh địa chỉ của Chrome > <b>Quyền</b> > <b>Micro: Cho phép</b>, sau đó tải lại trang.';
      }
    }
  } else {
    alert('Vui lòng mở Cài đặt trình duyệt Chrome trên điện thoại > Quyền riêng tư > Micro > Cho phép.');
  }
}

/**
 * Thay đổi ngôn ngữ nhận diện giọng nói (ja-JP hoặc vi-VN)
 * Khởi động lại ngay lập tức với User Gesture đồng bộ
 */
function setMaziiVoiceLang(lang) {
  maziiVoiceLang = lang || 'ja-JP';
  const panel = document.getElementById('mazii-voice-panel');
  if (panel) {
    const btns = panel.querySelectorAll('.mazii-voice-lang-btn');
    btns.forEach(b => {
      const isCurrent = (lang === 'ja-JP' && b.innerText.includes('Nhật')) ||
                        (lang === 'vi-VN' && b.innerText.includes('Việt'));
      b.classList.toggle('active', isCurrent);
    });
    const titleEl = document.getElementById('mazii-voice-title');
    if (titleEl) {
      titleEl.textContent = (lang === 'ja-JP')
        ? 'Đang nghe tiếng Nhật...'
        : 'Đang nghe tiếng Việt...';
    }
    const transcriptEl = document.getElementById('mazii-voice-transcript');
    if (transcriptEl) {
      transcriptEl.textContent = 'Hãy nói từ muốn tra...';
      transcriptEl.classList.remove('has-text');
    }
  }

  // Khởi động phiên nhận diện với ngôn ngữ mới ngay trong sự kiện chạm của người dùng
  startMaziiVoiceSearch(maziiVoiceLang);
}

/**
 * Bắt đầu nhận diện giọng nói (Khả năng chịu lỗi cao trên di động)
 */
function startMaziiVoiceSearch(lang = 'ja-JP') {
  maziiVoiceLang = lang || 'ja-JP';
  maziiShouldKeepListening = true;
  maziiLastVoiceText = '';
  clearTimeout(maziiVoiceRestartTimer);
  clearTimeout(maziiFinalizeTimer);
  clearTimeout(maziiSilenceHintTimer);

  const panel = document.getElementById('mazii-voice-panel');
  const titleEl = document.getElementById('mazii-voice-title');
  const transcriptEl = document.getElementById('mazii-voice-transcript');

  // Đóng bảng viết tay nếu đang mở để tránh chồng chéo giao diện
  if (maziiIsHwOpen) {
    toggleHandwritingPanel(false);
  }

  if (panel) {
    panel.style.display = 'flex';
    const topRow = panel.querySelector('.mazii-voice-top-row');
    if (topRow) topRow.style.display = 'flex';
  }
  const candContainer = document.getElementById('mazii-voice-candidates');
  if (candContainer) {
    candContainer.innerHTML = '';
    candContainer.style.display = 'none';
  }

  if (titleEl) {
    titleEl.textContent = (maziiVoiceLang === 'ja-JP')
      ? 'Đang nghe tiếng Nhật...'
      : 'Đang nghe tiếng Việt...';
  }
  if (transcriptEl) {
    transcriptEl.textContent = 'Hãy nói từ muốn tra...';
    transcriptEl.classList.remove('has-text');
  }

  // Cập nhật giao diện nút bấm active
  if (panel) {
    const btns = panel.querySelectorAll('.mazii-voice-lang-btn');
    btns.forEach(b => {
      const isCurrent = (maziiVoiceLang === 'ja-JP' && b.innerText.includes('Nhật')) ||
                        (maziiVoiceLang === 'vi-VN' && b.innerText.includes('Việt'));
      b.classList.toggle('active', isCurrent);
    });
  }

  setVoiceMicActiveVisual(true);

  // Bộ hẹn giờ nhắc nhở nếu người dùng im lặng sau 6 giây
  maziiSilenceHintTimer = setTimeout(() => {
    if (maziiShouldKeepListening && !maziiLastVoiceText && transcriptEl) {
      transcriptEl.textContent = 'Chưa nghe thấy giọng nói. Hãy nói to hơn vào Micro hoặc chạm vào nút Micro để nói lại.';
    }
  }, 6000);

  // Kiểm tra hỗ trợ Web Speech API
  const isSupported = (typeof DictionaryEngine !== 'undefined' && typeof DictionaryEngine.isVoiceSearchSupported === 'function')
    ? DictionaryEngine.isVoiceSearchSupported()
    : Boolean(typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition));

  if (!isSupported) {
    maziiShouldKeepListening = false;
    setVoiceMicActiveVisual(false);
    if (titleEl) titleEl.textContent = 'Trình duyệt chưa hỗ trợ';
    if (transcriptEl) {
      transcriptEl.innerHTML = 'Trình duyệt của bạn chưa hỗ trợ Web Speech API. Bạn có thể sử dụng biểu tượng Micro 🎙️ trên bàn phím ảo của điện thoại hoặc mở <a href="https://translate.google.com/?sl=auto&tl=vi&op=translate" target="_blank" rel="noopener" style="color:#e05244;font-weight:700;">Google Dịch</a>.';
    }
    return;
  }

  try {
    if (maziiVoiceRecognition) {
      try {
        maziiVoiceRecognition.onend = null;
        maziiVoiceRecognition.onerror = null;
        maziiVoiceRecognition.onresult = null;
        maziiVoiceRecognition.abort();
      } catch (e) {}
      maziiVoiceRecognition = null;
    }

    const callbacks = {
      onStart: () => {
        maziiIsVoiceListening = true;
        setVoiceMicActiveVisual(true);
      },
      onResult: ({ transcript, isFinal, alternatives }) => {
        if (!transcript) return;
        maziiLastVoiceText = transcript;
        clearTimeout(maziiSilenceHintTimer);

        if (transcriptEl) {
          transcriptEl.textContent = `"${transcript}"`;
          transcriptEl.classList.add('has-text');
        }

        const input = document.getElementById('mazii-search-input');
        if (input) {
          input.value = transcript;
          const clearBtn = document.getElementById('mazii-btn-clear');
          if (clearBtn) clearBtn.style.display = 'flex';
        }

        // Tự động kích hoạt tìm kiếm khi phát hiện dứt câu
        if (isFinal) {
          commitVoiceSearchResult(transcript, alternatives);
        } else {
          // Cơ chế phòng vệ cho Android Mobile: Tự động hoàn tất sau 1.4 giây ngừng nói
          // nếu trình duyệt không tự gửi cờ isFinal = true
          clearTimeout(maziiFinalizeTimer);
          maziiFinalizeTimer = setTimeout(() => {
            if (maziiShouldKeepListening && maziiLastVoiceText) {
              commitVoiceSearchResult(maziiLastVoiceText, alternatives);
            }
          }, 1400);
        }
      },
      onError: (err) => {
        console.warn('[VoiceSearch] Thông báo:', err && err.code ? err.code : err);
        // Lỗi 'no-speech' trên Android thường xảy ra khi người dùng ngập ngừng hoặc yên lặng
        if (err && err.code === 'no-speech') {
          if (maziiShouldKeepListening && !maziiIsVoiceListening) {
            scheduleVoiceRestart(maziiVoiceLang);
            return;
          }
        }
        if (err && err.code === 'aborted') {
          return;
        }

        if (err && err.code === 'not-allowed') {
          maziiShouldKeepListening = false;
          maziiIsVoiceListening = false;
          setVoiceMicActiveVisual(false);
          if (titleEl) titleEl.textContent = 'Micrô đang bị chặn';
          if (transcriptEl) {
            const isFile = typeof window !== 'undefined' && window.location && window.location.protocol === 'file:';
            transcriptEl.innerHTML = isFile
              ? 'Chrome chặn Micro do mở file trực tiếp (file://). Hãy mở qua HTTP/HTTPS (Live Server, Cloudflare).'
              : 'Trang web chưa được cấp quyền Micro. <button type="button" class="mazii-voice-retry-perm-btn" onclick="retryMicrophonePermission()">🔓 Cấp quyền Micro ngay</button>';
          }
          return;
        }

        if (transcriptEl) {
          transcriptEl.textContent = (err && err.message) || 'Không thể nhận diện giọng nói. Vui lòng chạm vào Micro để thử lại.';
        }
        if (maziiShouldKeepListening) {
          scheduleVoiceRestart(maziiVoiceLang);
        } else {
          setVoiceMicActiveVisual(false);
        }
      },
      onEnd: () => {
        maziiIsVoiceListening = false;
        // Cơ chế giữ nhịp kết nối (Keep-Alive Watchdog): Tự khởi động lại nếu người dùng chưa bấm Dừng
        if (maziiShouldKeepListening) {
          scheduleVoiceRestart(maziiVoiceLang);
        } else {
          setVoiceMicActiveVisual(false);
        }
      }
    };

    if (typeof DictionaryEngine !== 'undefined' && typeof DictionaryEngine.createVoiceRecognition === 'function') {
      maziiVoiceRecognition = DictionaryEngine.createVoiceRecognition(callbacks, maziiVoiceLang, { maxAlternatives: 5 });
    } else {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SpeechRecognition();
      rec.lang = maziiVoiceLang || 'ja-JP';
      rec.continuous = false;
      rec.interimResults = true;
      rec.maxAlternatives = 5;
      rec.onstart = callbacks.onStart;
      rec.onresult = (e) => {
        let interim = '';
        let final = '';
        const alts = [];
        const clean = (s) => (s || '').replace(/[。、.,?!？！]/g, '').trim();
        for (let i = e.resultIndex; i < e.results.length; ++i) {
          if (e.results[i].isFinal) {
            final += e.results[i][0].transcript;
            for (let j = 0; j < e.results[i].length; ++j) {
              const a = clean(e.results[i][j].transcript);
              if (a && !alts.includes(a)) alts.push(a);
            }
          } else {
            interim += e.results[i][0].transcript;
          }
        }
        callbacks.onResult({
          transcript: clean(final) || clean(interim),
          isFinal: Boolean(final),
          interim: clean(interim),
          final: clean(final),
          alternatives: alts
        });
      };
      rec.onerror = (e) => callbacks.onError(new Error(e.error === 'not-allowed' ? 'Chưa cấp quyền Micro.' : (e.error || 'Lỗi giọng nói')));
      rec.onend = callbacks.onEnd;
      maziiVoiceRecognition = rec;
    }

    if (maziiVoiceRecognition) {
      maziiVoiceRecognition.start();
    }
  } catch (err) {
    console.error('[VoiceSearch] Lỗi khởi động:', err);
    maziiShouldKeepListening = false;
    setVoiceMicActiveVisual(false);
    if (transcriptEl) {
      transcriptEl.innerHTML = 'Không thể mở Micro. <button type="button" class="mazii-voice-retry-perm-btn" onclick="retryMicrophonePermission()">🔓 Cấp quyền Micro ngay</button>';
    }
  }
}

/**
 * Dừng nhận diện giọng nói
 */
function stopMaziiVoiceSearch(hidePanel = true) {
  maziiShouldKeepListening = false;
  maziiIsVoiceListening = false;
  clearTimeout(maziiVoiceRestartTimer);
  clearTimeout(maziiFinalizeTimer);
  clearTimeout(maziiSilenceHintTimer);

  if (maziiVoiceRecognition) {
    try {
      maziiVoiceRecognition.onend = null;
      maziiVoiceRecognition.onerror = null;
      maziiVoiceRecognition.onresult = null;
      maziiVoiceRecognition.abort();
    } catch (e) {}
    maziiVoiceRecognition = null;
  }

  setVoiceMicActiveVisual(false);

  const panel = document.getElementById('mazii-voice-panel');
  if (panel && hidePanel) {
    panel.style.display = 'none';
  }
}

/**
 * Hiển thị danh sách ứng viên nhận diện AI tối giản
 */
function renderVoiceCandidates(alternatives, currentQuery) {
  const container = document.getElementById('mazii-voice-candidates');
  const panel = document.getElementById('mazii-voice-panel');
  if (!container || !panel) return;

  const topRow = panel.querySelector('.mazii-voice-top-row');

  // Lọc danh sách ứng viên hợp lệ và loại bỏ trùng lặp
  const rawList = Array.isArray(alternatives) ? alternatives : [];
  const uniqueList = [];
  rawList.forEach(item => {
    const trimmed = (item || '').trim();
    if (trimmed && !uniqueList.some(u => u.toLowerCase() === trimmed.toLowerCase())) {
      uniqueList.push(trimmed);
    }
  });

  // Nếu không có từ 2 ứng viên trở lên, đóng panel để nhường chỗ cho kết quả tra cứu
  if (uniqueList.length <= 1) {
    container.innerHTML = '';
    container.style.display = 'none';
    panel.style.display = 'none';
    return;
  }

  // Ẩn hàng điều khiển nghe, chỉ hiển thị dải gợi ý tối giản
  if (topRow) {
    topRow.style.display = 'none';
  }

  const chipsHtml = uniqueList.map(alt => {
    const isSelected = alt.toLowerCase() === (currentQuery || '').toLowerCase();
    return `
      <button type="button" class="mazii-voice-candidate-chip ${isSelected ? 'active' : ''}" onclick="selectVoiceCandidate('${escapeHtml(alt)}')">
        <span>${escapeHtml(alt)}</span>
      </button>
    `;
  }).join('');

  const gtUrl = `https://translate.google.com/?sl=auto&tl=vi&text=${encodeURIComponent(currentQuery || '')}&op=translate`;

  container.innerHTML = `
    <div class="mazii-voice-minimal-bar">
      <span class="mazii-voice-minimal-label">✨ Gợi ý:</span>
      <div class="mazii-voice-candidates-chips">
        ${chipsHtml}
        <a href="${gtUrl}" target="_blank" rel="noopener" class="mazii-voice-candidate-chip gt-chip" title="Mở trên Google Dịch">
          <span>🌐 Google Dịch ↗</span>
        </a>
      </div>
      <button type="button" class="mazii-voice-close-mini" onclick="stopMaziiVoiceSearch(true)" title="Đóng gợi ý" aria-label="Đóng">✕</button>
    </div>
  `;
  container.style.display = 'block';
  panel.style.display = 'flex';
}

/**
 * Chọn nhanh một ứng viên gợi ý từ Google Translate
 */
function selectVoiceCandidate(text) {
  if (!text) return;
  const input = document.getElementById('mazii-search-input');
  if (input) {
    input.value = text;
    const clearBtn = document.getElementById('mazii-btn-clear');
    if (clearBtn) clearBtn.style.display = 'flex';
  }
  executeMaziiSearch(text);
  const panel = document.getElementById('mazii-voice-panel');
  if (panel) panel.style.display = 'none';
}

/**
 * Bật / tắt bảng vẽ viết tay
 */
function toggleHandwritingPanel(forceOpen = null) {
  const panel = document.getElementById('mazii-hw-panel');
  const btn = document.getElementById('mazii-btn-hw-toggle');
  if (!panel) return;

  if (forceOpen !== null) {
    maziiIsHwOpen = forceOpen;
  } else {
    maziiIsHwOpen = !maziiIsHwOpen;
  }

  panel.classList.toggle('open', maziiIsHwOpen);
  if (btn) {
    btn.classList.toggle('active', maziiIsHwOpen);
  }

  if (maziiIsHwOpen) {
    setTimeout(() => {
      initHandwritingPad();
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        try { panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch(e) {}
      }
    }, 60);
  }
}

/**
 * Render thanh lịch sử tra cứu
 */
function renderHistoryChips() {
  const container = document.getElementById('mazii-history-chips');
  if (!container) return;
  const history = getMaziiHistory();
  if (history.length === 0) {
    container.innerHTML = '<span style="font-size:12px;color:var(--text-muted);">Chưa có lịch sử tra cứu</span>';
    return;
  }

  container.innerHTML = history.slice(0, 10).map(item => `
    <button type="button" class="mazii-tag-chip" onclick="switchMaziiTab('${escapeHtml(item.type)}');executeMaziiSearch('${escapeHtml(item.query)}')">
      <span>${escapeHtml(item.query)}</span>
      <span style="font-size:10px;opacity:0.7;">(${item.type === 'kanji' ? 'Kanji' : (item.type === 'grammar' ? 'Ngữ pháp' : 'Từ')})</span>
    </button>
  `).join('');
}

/**
 * Hàm chính Render Module Mazii Dictionary Studio vào #lesson-content
 */
function renderMaziiDictSection(initialQuery = '', initialType = 'word') {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  if (initialType) maziiCurrentTab = initialType;
  if (initialQuery) maziiCurrentQuery = initialQuery;

  content.innerHTML = `
    <div class="mazii-dict-studio">
      <!-- 1. Header Banner -->
      <div class="mazii-hero-card">
        <div class="mazii-hero-top">
          <div class="mazii-hero-title-wrap">
            <h2>
              ${APP_ICONS.book}
              <span>Từ Điển Nhật - Việt</span>
            </h2>
            <p class="mazii-hero-desc">
              Tra cứu Từ vựng &amp; Chữ Hán bằng bàn phím, giọng nói hoặc Bảng vẽ tay nhận diện AI.
            </p>
          </div>
        </div>
      </div>

      <!-- 2. Thanh tìm kiếm & Bảng vẽ (Cùng 1 dòng, tách làm 2 ô riêng biệt) -->
      <div class="mazii-search-panel">
        <div class="mazii-search-row">
          <!-- Ô 1: Ô tìm kiếm -->
          <div class="mazii-input-wrapper">
            <input type="text"
                   id="mazii-search-input"
                   class="mazii-search-input"
                   placeholder="Tra từ vựng, chữ Hán, Romaji..."
                   value="${escapeHtml(maziiCurrentQuery)}"
                   autocomplete="off"
                   autocorrect="off"
                   spellcheck="false">

            <div class="mazii-input-actions">
              <button type="button" id="mazii-btn-clear" class="mazii-btn-clear" style="display:${maziiCurrentQuery ? 'flex' : 'none'};" title="Xóa nội dung nhập" aria-label="Xóa nội dung">${APP_ICONS.clear}</button>
              <button type="button" id="mazii-btn-voice" class="mazii-btn-voice ${maziiIsVoiceListening ? 'listening' : ''}" onclick="toggleMaziiVoiceSearch()" title="Tìm kiếm bằng giọng nói (Tiếng Nhật / Tiếng Việt)" aria-label="Tìm kiếm giọng nói">
                ${APP_ICONS.mic}
              </button>
              <button type="button" id="mazii-btn-search" class="mazii-btn-search" onclick="executeMaziiSearch()" title="Tra cứu" aria-label="Tra cứu">
                ${APP_ICONS.search}
              </button>
            </div>
          </div>

          <!-- Ô 2: Ô viết tay riêng biệt trên cùng 1 dòng -->
          <button type="button"
                  id="mazii-btn-hw-toggle"
                  class="mazii-hw-box-btn ${maziiIsHwOpen ? 'active' : ''}"
                  onclick="toggleHandwritingPanel()"
                  title="Bật/Tắt bảng vẽ nhận diện chữ viết tay"
                  aria-label="Bảng viết tay">
            <span class="mazii-hw-box-icon">${APP_ICONS.pen}</span>
            <span class="mazii-hw-box-text">Viết tay</span>
          </button>
        </div>

        <!-- Khung trạng thái tìm kiếm giọng nói (Voice Search Panel) -->
        <div id="mazii-voice-panel" class="mazii-voice-panel" style="display:${maziiIsVoiceListening ? 'flex' : 'none'};">
          <div class="mazii-voice-top-row">
            <div class="mazii-voice-status">
              <button type="button" class="mazii-voice-pulse ${maziiIsVoiceListening ? '' : 'paused'}" id="mazii-voice-modal-mic" onclick="toggleMaziiVoiceModalMic()" title="Chạm để tạm dừng hoặc nói tiếp" aria-label="Micro giọng nói">
                <span class="voice-wave wave-1"></span>
                <span class="voice-wave wave-2"></span>
                <span class="voice-mic-icon">${APP_ICONS.mic}</span>
              </button>
              <div class="mazii-voice-info">
                <div class="mazii-voice-title" id="mazii-voice-title">${maziiVoiceLang === 'ja-JP' ? 'Đang nghe tiếng Nhật...' : 'Đang nghe tiếng Việt...'}</div>
                <div class="mazii-voice-transcript" id="mazii-voice-transcript">Hãy nói từ muốn tra...</div>
              </div>
            </div>

            <div class="mazii-voice-actions">
              <div class="mazii-voice-lang-group" role="radiogroup" aria-label="Chọn ngôn ngữ giọng nói">
                <button type="button" class="mazii-voice-lang-btn ${maziiVoiceLang === 'ja-JP' ? 'active' : ''}" onclick="setMaziiVoiceLang('ja-JP')" title="Nói bằng tiếng Nhật">
                  <span>🇯🇵 Nhật</span>
                </button>
                <button type="button" class="mazii-voice-lang-btn ${maziiVoiceLang === 'vi-VN' ? 'active' : ''}" onclick="setMaziiVoiceLang('vi-VN')" title="Nói bằng tiếng Việt">
                  <span>🇻🇳 Việt</span>
                </button>
              </div>
              <button type="button" class="mazii-voice-close-btn" onclick="stopMaziiVoiceSearch(true)" title="Đóng bảng giọng nói" aria-label="Đóng">
                ✕
              </button>
            </div>
          </div>

          <!-- Khu vực hiển thị các ứng viên nhận diện thay thế từ Google Translate -->
          <div id="mazii-voice-candidates" class="mazii-voice-candidates" style="display:none;"></div>
        </div>

        <!-- 3. Bảng viết tay (Handwriting Pad) -->
        <div id="mazii-hw-panel" class="mazii-hw-panel ${maziiIsHwOpen ? 'open' : ''}">
          <div class="mazii-canvas-wrapper">
            <canvas id="mazii-canvas" class="mazii-canvas"></canvas>
          </div>

          <div class="mazii-hw-toolbar">
            <button type="button" class="mazii-hw-btn" onclick="undoHandwritingStroke()" title="Hoàn tác nét vừa vẽ">
              ${APP_ICONS.undo} <span>Xóa nét</span>
            </button>
            <button type="button" class="mazii-hw-btn" onclick="clearHandwritingCanvas()" title="Xóa toàn bộ nét vẽ">
              ${APP_ICONS.trash} <span>Xóa hết</span>
            </button>
            <button type="button" class="mazii-hw-btn btn-hw-ai" style="display:none;" onclick="recognizeHandwritingStrokes()" title="Nhận diện chữ Hán &amp; Từ mới bằng Trí tuệ Nhân tạo (AI)" aria-hidden="true">
              ${APP_ICONS.robot} <span>Nhận diện AI</span>
            </button>
            <button type="button" class="mazii-hw-btn" onclick="backspaceSearchChar()" title="Xóa 1 ký tự cuối trong ô tìm kiếm">
              ${APP_ICONS.backspace} <span>Xóa chữ cuối</span>
            </button>
          </div>

          <div class="mazii-candidates-box">
            <div id="mazii-candidates-list" class="mazii-candidates-list">
              <span class="mazii-candidate-item empty-hint">Vẽ chữ vào khung trên để nhận diện</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Khu vực hiển thị kết quả từ điển -->
      <div id="mazii-results-container" class="mazii-results-container">
        <div class="mazii-status-box">
          <div class="mazii-status-icon">${APP_ICONS.book}</div>
          <div class="mazii-status-title">Tra cứu Từ Điển Nhật - Việt</div>
          <div class="mazii-status-desc">Nhập từ vựng, chữ Hán hoặc vẽ tay trên bảng vẽ để xem nghĩa và phát âm.</div>
        </div>
      </div>
    </div>
  `;

  // Bắt sự kiện bàn phím & input
  const searchInput = document.getElementById('mazii-search-input');
  const clearBtn = document.getElementById('mazii-btn-clear');

  if (searchInput) {
    searchInput.oninput = () => {
      if (clearBtn) {
        clearBtn.style.display = searchInput.value.length > 0 ? 'flex' : 'none';
      }
    };
    searchInput.onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeMaziiSearch();
      }
    };
  }

  if (clearBtn && searchInput) {
    clearBtn.onclick = () => {
      searchInput.value = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
    };
  }

  renderHistoryChips();

  if (maziiIsHwOpen) {
    setTimeout(initHandwritingPad, 50);
  }

  if (initialQuery) {
    executeMaziiSearch(initialQuery);
  }
}

/**
 * Mở Từ Điển Mazii với từ khóa bất kỳ từ Quick Search hoặc nút liên kết
 */
window.openMaziiWithQuery = function(query, type = 'word') {
  if (typeof switchModule === 'function') {
    switchModule('mazii-dict', true);
    setTimeout(() => {
      switchMaziiTab(type);
      const input = document.getElementById('mazii-search-input');
      if (input) input.value = query;
      executeMaziiSearch(query);
    }, 60);
  }
};

// Xuất bản các hàm Voice Search ra Window cho tương tác toàn cục
window.toggleMaziiVoiceSearch = toggleMaziiVoiceSearch;
window.startMaziiVoiceSearch = startMaziiVoiceSearch;
window.stopMaziiVoiceSearch = stopMaziiVoiceSearch;
window.setMaziiVoiceLang = setMaziiVoiceLang;
window.renderVoiceCandidates = renderVoiceCandidates;
window.selectVoiceCandidate = selectVoiceCandidate;
window.toggleMaziiVoiceModalMic = toggleMaziiVoiceModalMic;
window.retryMicrophonePermission = retryMicrophonePermission;

