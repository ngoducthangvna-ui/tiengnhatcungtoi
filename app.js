
// ZONE 01: GLOBAL CONSTANTS, STATE REGISTRY & SECURITY GUARDS (FNV-1a Checksum & Anti-Scraping)

const STORAGE_COMPLETED_KEY = 'minna_completed_modules';
const STORAGE_PRACTICE_KEY = 'minna_practice_answers';
const STORAGE_DOKKAI_KEY = 'minna_dokkai_answers_v1';
const STORAGE_ENTERED_KEY = 'minna_has_entered';
const STORAGE_LAST_ACTIVE_KEY = 'minna_last_active_id';
const STORAGE_FURIGANA_KEY = 'minna_show_furigana';
const STORAGE_DEVICE_SETTINGS_KEY = 'minna_device_settings';
const STORAGE_AUTO_ADVANCE_KEY = 'minna_quiz_auto_advance';


const _rootScope = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : {}));
if (typeof _rootScope.lessonsData === 'undefined') _rootScope.lessonsData = [];
if (typeof _rootScope.practiceQuizData === 'undefined') _rootScope.practiceQuizData = {};
if (typeof _rootScope.dokkaiData === 'undefined') _rootScope.dokkaiData = [];
if (typeof _rootScope.radicalsData === 'undefined') _rootScope.radicalsData = [];
if (typeof _rootScope.kanjiLessonsData === 'undefined') _rootScope.kanjiLessonsData = [];







function _fnv1aHash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h.toString(36);
}


function _csKey(storageKey) {
  return storageKey + '_cs';
}


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

  document.addEventListener('contextmenu', function(e) {
    if (isProtectedTarget(e.target)) {
      e.preventDefault();
      return false;
    }
  }, true);

  document.addEventListener('copy', function(e) {
    if (isProtectedTarget(document.activeElement) || isProtectedTarget(
      window.getSelection && window.getSelection().anchorNode &&
      window.getSelection().anchorNode.parentElement
    )) {
      const sel = window.getSelection ? window.getSelection().toString() : '';

      if (sel.length > 30) {
        e.preventDefault();
        return false;
      }
    }
  }, true);

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('beforeprint', function() {
      if (document && document.body) document.body.setAttribute('data-print-blocked', 'true');
    });
    window.addEventListener('afterprint', function() {
      if (document && document.body) document.body.removeAttribute('data-print-blocked');
    });
  }

  if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
    document.addEventListener('keydown', function(e) {
    const isMac = navigator.platform && navigator.platform.includes('Mac');
    const ctrl = isMac ? e.metaKey : e.ctrlKey;

    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }

    if (ctrl && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      return false;
    }

    if (ctrl && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      return false;
    }

    if (ctrl && (e.key === 'P' || e.key === 'p')) {
      e.preventDefault();
      return false;
    }
  }, true);
  }
})();

// ZONE 02: STORAGE & SANITIZATION FACADE (StorageEngine DELEGATION & XSS/PROTOTYPE POLLUTION GUARDS)

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

function isSafeObjectKey(key) {
  return typeof key === 'string' && key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
}

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

// ZONE 03: DEVICE PERSONALIZATION, THERMAL SAVER, FURIGANA & COMPLETION TRACKING

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

try {
  applyDeviceSettings(getDeviceSettings());
} catch (e) {}

function initDeviceSettings() {
  const settings = getDeviceSettings();
  applyDeviceSettings(settings);

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

    document.querySelectorAll('#device-mode-selector .device-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === (cfg.mode || 'auto'));
    });

    document.querySelectorAll('#device-font-selector .device-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-font') === (cfg.fontSize || 'normal'));
    });

    document.querySelectorAll('#device-density-selector .device-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-density') === (cfg.density || 'normal'));
    });

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
      if (window.ExamEngine && typeof window.ExamEngine.syncFuriganaState === 'function') {
        window.ExamEngine.syncFuriganaState();
      }
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

    document.addEventListener('click', (e) => {
      if (!document.body || !document.body.classList.contains('hide-furigana')) return;
      const ruby = e.target && e.target.closest ? e.target.closest('ruby') : null;
      if (ruby) {
        ruby.classList.toggle('furigana-revealed');
      } else {
        const revealed = document.querySelectorAll('ruby.furigana-revealed');
        if (revealed && revealed.length > 0) {
          revealed.forEach(r => r.classList.remove('furigana-revealed'));
        }
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
let moduleNavigationToken = 0;
let pendingModuleId = null;
let contentTransitionToken = 0;
let contentTransitionTimer = null;
let lastAnimatedRouteId = null;

function extractLessonNumber(id) {
  if (!id) return null;
  const m = String(id).match(/^(?:bai|quiz|kaiwa|dokkai|kanji|kanji-flashcard)-(\d+)$/);
  return m ? parseInt(m[1], 10) : null;
}

function getCompletedModules() {
  return secureGetJsonStorage(STORAGE_COMPLETED_KEY, [], Array.isArray);
}

function isModuleCompleted(id) {
  return getCompletedModules().includes(id);
}

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

// ZONE 04: DATA SYNCHRONIZATION, ON-DEMAND CHUNK LOADER & IDLE PREFETCH PIPELINE (NavigationEngine DAG)

const TOTAL_CURRICULUM_MODULES = 217; // 50 Bài Minna + 50 Trắc nghiệm + 50 Đọc hiểu + 50 Chữ Hán + 17 Nhóm bộ thủ

function syncLoadedData() {
  const root = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : {}));

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

  if (typeof dokkaiData !== 'undefined' && Array.isArray(dokkaiData) && dokkaiData.length) {
    root.dokkaiData = dokkaiData;
  }

  if (typeof radicalsData !== 'undefined' && Array.isArray(radicalsData) && radicalsData.length) {
    root.radicalsData = radicalsData;
  }

  const kanjiChunks = [
    typeof kanji_1_5 !== 'undefined' ? kanji_1_5 : null,
    typeof kanji_6_10 !== 'undefined' ? kanji_6_10 : null,
    typeof kanji_11_15 !== 'undefined' ? kanji_11_15 : null,
    typeof kanji_16_20 !== 'undefined' ? kanji_16_20 : null,
    typeof kanji_21_25 !== 'undefined' ? kanji_21_25 : null,
    typeof kanji_26_30 !== 'undefined' ? kanji_26_30 : null,
    typeof kanji_31_35 !== 'undefined' ? kanji_31_35 : null,
    typeof kanji_36_40 !== 'undefined' ? kanji_36_40 : null,
    typeof kanji_41_45 !== 'undefined' ? kanji_41_45 : null,
    typeof kanji_46_50 !== 'undefined' ? kanji_46_50 : null
  ];
  const kanjiMap = new Map();
  const existingK = Array.isArray(root.kanjiLessonsData) ? root.kanjiLessonsData : [];
  existingK.forEach(k => { if (k && (k.id || k.lesson)) kanjiMap.set(k.id || `kanji-${k.lesson}`, k); });
  if (typeof kanjiLessonsData !== 'undefined' && Array.isArray(kanjiLessonsData)) {
    kanjiLessonsData.forEach(k => { if (k && (k.id || k.lesson)) kanjiMap.set(k.id || `kanji-${k.lesson}`, k); });
  }
  kanjiChunks.forEach(chunk => {
    if (Array.isArray(chunk)) {
      chunk.forEach(k => { if (k && (k.id || k.lesson)) kanjiMap.set(k.id || `kanji-${k.lesson}`, k); });
    }
  });
  if (kanjiMap.size > 0) {
    root.kanjiLessonsData = Array.from(kanjiMap.values()).sort((a, b) => (a.lesson || 0) - (b.lesson || 0));
    if (typeof window !== 'undefined') window.kanjiLessonsData = root.kanjiLessonsData;
  }

  const kaiwaChunks = [
    typeof kaiwa_1_10 !== 'undefined' ? kaiwa_1_10 : null,
    typeof kaiwa_11_20 !== 'undefined' ? kaiwa_11_20 : null,
    typeof kaiwa_21_30 !== 'undefined' ? kaiwa_21_30 : null,
    typeof kaiwa_31_40 !== 'undefined' ? kaiwa_31_40 : null,
    typeof kaiwa_41_50 !== 'undefined' ? kaiwa_41_50 : null
  ];
  if (!root.KAIWA_DATA || typeof root.KAIWA_DATA !== 'object') {
    root.KAIWA_DATA = {};
  }
  kaiwaChunks.forEach(chunk => {
    if (chunk && typeof chunk === 'object') {
      Object.assign(root.KAIWA_DATA, chunk);
    }
  });
}

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
  const kaiwaMatch = id.match(/^kaiwa-(\d+)$/);
  if (kaiwaMatch) {
    const num = parseInt(kaiwaMatch[1], 10);
    const start = Math.floor((num - 1) / 10) * 10 + 1;
    const end = start + 9;
    return `data/kaiwa_${start}_${end}.js`;
  }
  if (id.startsWith('dokkai')) {
    return 'data/dokkai.js';
  }
  if (id.startsWith('radicals')) {
    return 'data/radicals_data.js';
  }
  const kanjiMatch = id.match(/^(?:kanji)[^\d]*(\d+)/i);
  if (kanjiMatch) {
    const num = parseInt(kanjiMatch[1], 10);
    const start = Math.floor((num - 1) / 5) * 5 + 1;
    const end = start + 4;
    return `data/kanji_${start}_${end}.js`;
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
  const kwm = id.match(/^kaiwa-(\d+)$/);
  if (kwm) {
    const kMap = root.KAIWA_DATA || {};
    return Boolean(kMap[id] && Array.isArray(kMap[id].dialogue) && kMap[id].dialogue.length > 0);
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
    const km = id.match(/^(?:kanji)[^\d]*(\d+)/i);
    if (km) {
      const num = parseInt(km[1], 10);
      return kList.some(k => k && (k.lesson === num || k.id === id || k.id === `kanji-${num}`));
    }
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
    : id.startsWith('kaiwa-') ? 'Hội thoại & Luyện tập C'
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
    'data/radicals_data.js',
    'data/kanji_1_5.js', 'data/kanji_6_10.js', 'data/kanji_11_15.js',
    'data/kanji_16_20.js', 'data/kanji_21_25.js', 'data/kanji_26_30.js',
    'data/kanji_31_35.js', 'data/kanji_36_40.js', 'data/kanji_41_45.js',
    'data/kanji_46_50.js'
  ];

  let i = 0;
  const scheduleNextSearch = () => {
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(loadNext);
    } else {
      setTimeout(loadNext, 120);
    }
  };
  function loadNext() {
    if (i >= allUrls.length) return;
    const quietFor = Date.now() - lastMobileNavInteraction;
    if (document.hidden || quietFor < 900) {
      setTimeout(scheduleNextSearch, document.hidden ? 1000 : 900 - quietFor);
      return;
    }
    const url = allUrls[i++];
    loadScriptAsync(url).then(scheduleNextSearch);
  }
  scheduleNextSearch();
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
    'data/kanji_1_5.js',
    'data/kanji_6_10.js',
    'data/kanji_11_15.js',
    'data/kanji_16_20.js',
    'data/kanji_21_25.js',
    'data/kanji_26_30.js',
    'data/kanji_31_35.js',
    'data/kanji_36_40.js',
    'data/kanji_41_45.js',
    'data/kanji_46_50.js'
  ];

  let queueIdx = 0;
  const scheduleNextIdle = () => {
    if (queueIdx >= idleQueue.length) return;
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(processNextIdle);
    } else {
      setTimeout(processNextIdle, 600);
    }
  };
  function processNextIdle() {
    if (queueIdx >= idleQueue.length) return;
    const quietFor = Date.now() - lastMobileNavInteraction;
    if (document.hidden || quietFor < 900) {
      setTimeout(scheduleNextIdle, document.hidden ? 1000 : 900 - quietFor);
      return;
    }
    const nextUrl = idleQueue[queueIdx++];
    loadScriptAsync(nextUrl).then(() => setTimeout(scheduleNextIdle, 300));
  }

  setTimeout(scheduleNextIdle, 2500);
}

function updateHeaderProgress() {
  const completed = getCompletedModules();
  const total = TOTAL_CURRICULUM_MODULES;
  const count = completed.length;
  const percent = total > 0 ? Math.min(100, Math.round((count / total) * 100)) : 0;

  const sub = document.getElementById('header-goal-subtitle');
  const fill = document.getElementById('header-progress-fill');
  const wrap = document.getElementById('header-progress-wrap');
  const progressText = `Tiến độ: ${count}/${total} mục (${percent}%)`;
  if (sub) sub.textContent = progressText;
  if (fill) fill.style.width = `${percent}%`;
  if (wrap) wrap.title = `Tiến độ hoàn thành khóa học: ${count}/${total} mục (${percent}%)`;

  if (typeof renderUserAccountChips === 'function') {
    renderUserAccountChips();
  }
}

// ZONE 05: JAPANESE SPEECH, DIALOGUE VOICES & PROSODY ENGINE (AudioEngine DELEGATION)

const DIALOGUE_DEFAULT_SPEAKER = 'sato'; // Giọng mặc định: chị Sato (Nanami, nữ công sở chuẩn Tokyo)
const DIALOGUE_SPEAKER_ALIASES = { a: 'sato', b: 'yamada', c: 'miller', d: 'karina', e: 'santos' };
const DIALOGUE_FALLBACK_PROFILES = {
  sato:   { id: 'sato',   gender: 'female', speechGenVoice: 'Nanami', pitch: 1.02, rate: 0.96 },
  yamada: { id: 'yamada', gender: 'male',   speechGenVoice: 'Keita',  pitch: 1.00, rate: 0.96 }
};
const SPEECHGEN_VOICE = DIALOGUE_FALLBACK_PROFILES[DIALOGUE_DEFAULT_SPEAKER].speechGenVoice;
const SPEECHGEN_MODEL = 'ja-JP-NanamiNeural';
const DEFAULT_USER_SPEED = 0.96;
const DEFAULT_USER_PITCH = 1.00;

const speechAudioCache = new Map();
let currentSpeechAudio = null;
let cachedLedaVoice = null; // Cache giọng hội thoại mặc định (giữ tên biến cũ để tương thích)
let currentAudioSessionId = 0; // Epoch Counter chống Race Condition phát lặp đa giọng
let activeOnlineAudioAbort = null; // Bộ dọn dẹp tiến trình Online Audio (Google/Youdao) đang chờ/retry
let activeSpeechSafetyTimer = null; // Quản lý Timer bảo vệ trạng thái nút bấm
let lastSpeechClickTime = 0; // Debounce bảo vệ chống spam click phần cứng
let lastSpeechText = '';


function resolveDialogueSpeakerId(speakerKey) {
  const raw = String(speakerKey || '').toLowerCase().replace(/[^a-z0-9_]/g, '');
  if (!raw) return DIALOGUE_DEFAULT_SPEAKER;
  if (raw === 'rotate') return 'rotate';
  if (DIALOGUE_SPEAKER_ALIASES[raw]) return DIALOGUE_SPEAKER_ALIASES[raw];
  const profiles = (typeof AudioEngine !== 'undefined' && AudioEngine.CHARACTER_VOICE_PROFILES) || DIALOGUE_FALLBACK_PROFILES;
  return profiles[raw] ? raw : DIALOGUE_DEFAULT_SPEAKER;
}


function getDialogueVoiceProfile(speakerKey) {
  const id = resolveDialogueSpeakerId(speakerKey);
  const targetId = id === 'rotate' ? DIALOGUE_DEFAULT_SPEAKER : id;
  if (typeof AudioEngine !== 'undefined' && typeof AudioEngine.getCharacterVoiceProfile === 'function') {
    const p = AudioEngine.getCharacterVoiceProfile(targetId);
    if (p) return Object.assign({ id: targetId }, p);
  }
  return DIALOGUE_FALLBACK_PROFILES[targetId] || DIALOGUE_FALLBACK_PROFILES[DIALOGUE_DEFAULT_SPEAKER];
}


function computeDialogueProsody(profile, cfg, speechText) {
  const userSpeed = (cfg && cfg.speed) || DEFAULT_USER_SPEED;
  const userPitch = (cfg && cfg.pitch) || DEFAULT_USER_PITCH;
  let baseRate = profile.rate || 0.96;
  let basePitch = profile.pitch || 1.0;

  if (speechText && typeof AudioEngine !== 'undefined' && typeof AudioEngine.computeExpressiveProsody === 'function') {
    const exp = AudioEngine.computeExpressiveProsody(speechText, profile.id || DIALOGUE_DEFAULT_SPEAKER, false);
    if (exp) {
      baseRate = exp.rate;
      basePitch = exp.pitch;
    }
  }

  const rate = Math.max(0.6, Math.min(1.4, baseRate * (userSpeed / DEFAULT_USER_SPEED)));
  const pitch = Math.max(0.72, Math.min(1.28, basePitch * (userPitch / DEFAULT_USER_PITCH)));
  return { rate: Number(rate.toFixed(3)), pitch: Number(pitch.toFixed(3)) };
}

function cleanSpeechText(text) {
  if (typeof AudioEngine !== 'undefined' && typeof AudioEngine.cleanSpeechText === 'function') {
    return AudioEngine.cleanSpeechText(text);
  }
  return String(text || '')
    .replace(/<ruby[^>]*>\s*([A-Z]{2,})\s*<rt[^>]*>(.*?)<\/rt>\s*<\/ruby>/g, '$2')
    .replace(/<ruby[^>]*>\s*何\s*<rt[^>]*>(いく)<\/rt>\s*<\/ruby>/g, '$1')
    .replace(/<rt>.*?<\/rt>/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[\(（]\s*な\s*[\)）]/g, '')
    .replace(/^[～~]+|[～~]+$/g, '')
    .replace(/['"\\]/g, ' ')
    .trim();
}

function formatJapaneseGrammarSpeech(text) {
  if (typeof AudioEngine !== 'undefined' && typeof AudioEngine.applyProsody === 'function') {
    return AudioEngine.applyProsody(text);
  }
  if (!text) return '';
  let str = String(text).trim();

  str = str
    .replace(/<ruby[^>]*>\s*([A-Z]{2,})\s*<rt[^>]*>(.*?)<\/rt>\s*<\/ruby>/g, '$2')
    .replace(/<ruby[^>]*>\s*何\s*<rt[^>]*>(いく)<\/rt>\s*<\/ruby>/g, '$1')
    .replace(/<rt>.*?<\/rt>/g, '')
    .replace(/<[^>]*>/g, '');
  str = str.replace(/['"\\]/g, ' ');

  str = str.replace(/,/g, '、')
           .replace(/\.(?!\d)/g, '。')
           .replace(/\?/g, '？')
           .replace(/!/g, '！')
           .replace(/;/g, '、')
           .replace(/:/g, '：');

  str = str.replace(/([、。！？])\s+/g, '$1')
           .replace(/\s+([、。！？])/g, '$1');

  const rawClean = str.replace(/[、。！？\s]/g, '');
  const isQuestion = /(?:か|ですか|ますか|でしょうか)$/.test(rawClean);
  const hasMultipleClausesOrParticles = /[ぁ-んァ-ヶ一-龥]+(?:は|が|を|に|で|へ|と|も)\s*[ぁ-んァ-ヶ一-龥]+/.test(str);
  const hasSpaces = /\s/.test(str);

  if (rawClean.length <= 6 && !isQuestion && !hasMultipleClausesOrParticles && !hasSpaces && !/[、。！？]/.test(str)) {
    return str;
  }

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

  // Khử khoảng trắng sách giáo khoa giữa các ký tự tiếng Nhật để đọc liền mạch chuẩn Kaiwa
  str = str.replace(/([ぁ-んァ-ヶー一-龯々。、！？「」『』（）])\s+(?=[ぁ-んァ-ヶー一-龯々0-9A-Za-z「『（])/g, '$1')
           .replace(/([0-9A-Za-z])\s+(?=[ぁ-んァ-ヶー一-龯々])/g, '$1');

  str = str.replace(/、+/g, '、')
           .replace(/。+/g, '。')
           .replace(/、([。！？])/g, '$1')
           .replace(/([。！？])、/g, '$1')
           .replace(/\s+/g, ' ')
           .trim();

  // Tự động chuyển dấu chấm ở cuối câu hỏi (か。 -> か？) để kích hoạt ngữ điệu hỏi vút lên ↗
  str = str.replace(/([^。！？]+(?:ですか|ますか|でしょうか|ませんか|ましょうか|んですか|のですか|どこですか|何ですか|だれですか|どなたですか|いくらですか|いくつですか|どうですか|どうでしたか))。/g, '$1？');

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
    const speed = parseFloat(safeGetStorage('speechgen_speed') || String(DEFAULT_USER_SPEED));
    const pitch = parseFloat(safeGetStorage('speechgen_pitch') || String(DEFAULT_USER_PITCH));
    const speaker = safeGetStorage('speechgen_speaker') || 'rotate';
    const profile = getDialogueVoiceProfile(speaker);
    return { token, email, speed, pitch, speaker, voice: profile.speechGenVoice || SPEECHGEN_VOICE };
  } catch (e) {
    return { token: '', email: '', speed: DEFAULT_USER_SPEED, pitch: DEFAULT_USER_PITCH, speaker: 'rotate', voice: SPEECHGEN_VOICE };
  }
}

function setSpeechGenConfig(cfg) {
  try {
    if (cfg.token !== undefined) safeSetStorage('speechgen_token', cfg.token.trim());
    if (cfg.email !== undefined) safeSetStorage('speechgen_email', cfg.email.trim());
    if (cfg.speed !== undefined) safeSetStorage('speechgen_speed', String(cfg.speed));
    if (cfg.pitch !== undefined) safeSetStorage('speechgen_pitch', String(cfg.pitch));
    if (cfg.speaker !== undefined) safeSetStorage('speechgen_speaker', String(cfg.speaker));
    const targetSpk = cfg.speaker === 'rotate' ? DIALOGUE_DEFAULT_SPEAKER : (cfg.speaker || DIALOGUE_DEFAULT_SPEAKER);
    cachedLedaVoice = findDialogueJpVoice(targetSpk);
  } catch (e) {}
}
window.setSpeechGenConfig = setSpeechGenConfig;
window.getSpeechGenConfig = getSpeechGenConfig;

function stopAllSpeechAudio() {

  currentAudioSessionId++;

  if (activeSpeechSafetyTimer) {
    clearTimeout(activeSpeechSafetyTimer);
    activeSpeechSafetyTimer = null;
  }

  if (typeof activeOnlineAudioAbort === 'function') {
    try {
      activeOnlineAudioAbort();
    } catch (e) {}
    activeOnlineAudioAbort = null;
  }

  if (currentSpeechAudio) {
    try {
      currentSpeechAudio.pause();
      currentSpeechAudio.currentTime = 0;
      currentSpeechAudio.src = '';
    } catch (e) {}
    currentSpeechAudio = null;
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }

  if (typeof document !== 'undefined' && document.querySelectorAll) {
    document.querySelectorAll('.is-speaking').forEach(b => {
      if (b && b.classList) b.classList.remove('is-speaking');
    });
  }

  if (typeof window !== 'undefined' && window.KaiwaEngine && typeof window.KaiwaEngine.stopAllKaiwaAudio === 'function') {
    if (!window._suppressKaiwaCrossStop) {
      try {
        window._suppressKaiwaCrossStop = true;
        window.KaiwaEngine.stopAllKaiwaAudio();
      } catch (e) {
      } finally {
        window._suppressKaiwaCrossStop = false;
      }
    }
  }
}
window.stopAllSpeechAudio = stopAllSpeechAudio;


function findDialogueJpVoice(speakerKey) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const profile = getDialogueVoiceProfile(speakerKey);
  const speakerId = resolveDialogueSpeakerId(speakerKey);
  if (typeof AudioEngine !== 'undefined' && typeof AudioEngine.selectBestJapaneseVoice === 'function') {
    const best = AudioEngine.selectBestJapaneseVoice(voices, profile.gender || null, speakerId);
    if (best) return best;
  }

  const isJa = v => v.lang === 'ja-JP' || (v.lang && v.lang.startsWith('ja'));
  const genderRe = profile.gender === 'male' ? /(keita|otoya|ichiro|male)/i : /(nanami|kyoko|haruka|female)/i;
  return voices.find(v => isJa(v) && genderRe.test(v.name)) || voices.find(isJa) || null;
}

function findLedaJpVoice() {
  return findDialogueJpVoice(DIALOGUE_DEFAULT_SPEAKER);
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedLedaVoice = findLedaJpVoice();
  };
}

async function fetchSpeechGenAudio(speechText, cfg, speakerId, fallbackPlainText) {
  const spk = speakerId || (cfg && cfg.speaker) || DIALOGUE_DEFAULT_SPEAKER;
  const profile = getDialogueVoiceProfile(spk);
  const sgVoice = profile.speechGenVoice || (cfg && cfg.voice) || SPEECHGEN_VOICE;
  const cacheKey = spk + '|' + sgVoice + '|' + speechText;
  if (speechAudioCache.has(cacheKey)) {
    return speechAudioCache.get(cacheKey);
  }

  const pitchVal = Math.round((cfg.pitch - 1.0) * 10);

  if (typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.startsWith('http')) {
    try {
      const proxyRes = await fetch('/api/speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'MinnaApp'
        },
        body: JSON.stringify({
          text: speechText,
          speaker: spk,
          voice: sgVoice,
          speed: cfg.speed || 0.92,
          pitch: pitchVal
        })
      });
      if (proxyRes.ok) {
        const data = await proxyRes.json();
        if (data && (data.audioUrl || data.file || data.file_cors)) {
          const audioUrl = data.audioUrl || data.file_cors || data.file;
          speechAudioCache.set(cacheKey, audioUrl);
          return audioUrl;
        }
      }
    } catch (proxyErr) {

    }
  }

  if (!cfg.token || !cfg.email) return null;

  const rawTextForSpeechGen = (typeof speechText === 'string' && speechText.startsWith('<speak') && fallbackPlainText)
    ? fallbackPlainText
    : speechText;

  const bodyData = new URLSearchParams({
    token: cfg.token,
    email: cfg.email,
    voice: sgVoice,
    text: rawTextForSpeechGen,
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
    speechAudioCache.set(cacheKey, audioUrl);
    return audioUrl;
  }
  throw new Error((data && data.error) || 'SpeechGen generation failed');
}

function playOnlineJapaneseAudio(text, stopRelay, safetyTimer, forcedSessionId) {
  const sessionId = typeof forcedSessionId === 'number' ? forcedSessionId : currentAudioSessionId;
  const clean = formatJapaneseGrammarSpeech(text) || cleanSpeechText(text);
  if (!clean) {
    if (safetyTimer) clearTimeout(safetyTimer);
    if (stopRelay) stopRelay();
    return;
  }

  const shortText = clean.length > 180 ? clean.substring(0, 180) : clean;
  const encoded = encodeURIComponent(shortText);



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
  let sourceTimer = null;
  let activeAudio = null;

  activeOnlineAudioAbort = function() {
    finished = true;
    if (sourceTimer) {
      clearTimeout(sourceTimer);
      sourceTimer = null;
    }
    if (activeAudio) {
      try {
        activeAudio.pause();
        activeAudio.currentTime = 0;
        activeAudio.src = '';
      } catch (e) {}
      activeAudio = null;
    }
  };

  function endPlayback() {
    if (finished) return;
    finished = true;
    if (sourceTimer) {
      clearTimeout(sourceTimer);
      sourceTimer = null;
    }
    if (safetyTimer) clearTimeout(safetyTimer);
    if (stopRelay) stopRelay();
    if (currentSpeechAudio === activeAudio) currentSpeechAudio = null;
    if (activeAudio) activeAudio = null;
    activeOnlineAudioAbort = null;
  }

  function tryNextSource() {
    if (finished || sessionId !== currentAudioSessionId) return;
    if (srcIdx >= sources.length) {
      endPlayback();
      return;
    }

    const src = sources[srcIdx++];
    const audio = new Audio();
    activeAudio = audio;
    currentSpeechAudio = audio;

    if (src.noReferrer) {
      try {
        audio.referrerPolicy = 'no-referrer';
        audio.setAttribute('referrerpolicy', 'no-referrer');
      } catch (e) {}
    }
    audio.preload = 'auto';
    audio.src = src.url;

    sourceTimer = setTimeout(() => {
      if (finished || sessionId !== currentAudioSessionId) return;

      if (!finished && (audio.paused || audio.readyState < 2)) {
        try { audio.pause(); } catch (e) {}
        tryNextSource();
      }
    }, 4500);

    audio.onended = () => {
      if (sourceTimer) clearTimeout(sourceTimer);
      if (finished || sessionId !== currentAudioSessionId) return;
      endPlayback();
    };

    audio.onerror = () => {
      if (sourceTimer) clearTimeout(sourceTimer);
      if (finished || sessionId !== currentAudioSessionId) return;
      tryNextSource();
    };

    const p = audio.play();
    if (p !== undefined) {
      p.then(() => {
        if (sourceTimer) clearTimeout(sourceTimer);
      }).catch(() => {
        if (sourceTimer) clearTimeout(sourceTimer);
        if (finished || sessionId !== currentAudioSessionId) return;
        tryNextSource();
      });
    }
  }

  tryNextSource();
}

function speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg, onFallback, speakerKey, forcedSessionId) {
  const sessionId = typeof forcedSessionId === 'number' ? forcedSessionId : currentAudioSessionId;

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (sessionId !== currentAudioSessionId) return;
    if (onFallback) {
      onFallback();
    } else {
      clearTimeout(safetyTimer);
      stopRelay();
    }
    return;
  }

  const isDefaultSpeaker = resolveDialogueSpeakerId(speakerKey) === DIALOGUE_DEFAULT_SPEAKER;
  const voice = isDefaultSpeaker
    ? (cachedLedaVoice || findLedaJpVoice())
    : (findDialogueJpVoice(speakerKey) || cachedLedaVoice || findLedaJpVoice());
  if (!voice) {
    if (sessionId !== currentAudioSessionId) return;
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
    // Đảm bảo Web Speech API luôn nhận văn bản tiếng Nhật tự nhiên, không dính thẻ XML SSML
    let cleanUtteranceText = speechText;
    if (typeof cleanUtteranceText === 'string' && (cleanUtteranceText.includes('<speak') || /<[^>]+>/.test(cleanUtteranceText))) {
      cleanUtteranceText = (typeof AudioEngine !== 'undefined' && typeof AudioEngine.cleanSpeechText === 'function')
        ? AudioEngine.cleanSpeechText(cleanUtteranceText)
        : cleanUtteranceText.replace(/<[^>]+>/g, '');
      cleanUtteranceText = cleanUtteranceText.replace(/<[^>]+>/g, '').trim();
    }
    const prosody = computeDialogueProsody(getDialogueVoiceProfile(speakerKey), cfg, cleanUtteranceText);
    const utterance = new SpeechSynthesisUtterance(cleanUtteranceText);
    utterance.lang = 'ja-JP';
    utterance.voice = voice;
    utterance.rate = prosody.rate;
    utterance.pitch = prosody.pitch;

    utterance.onend = () => {
      if (sessionId !== currentAudioSessionId) return;
      clearTimeout(safetyTimer);
      stopRelay();
    };

    utterance.onerror = (err) => {

      if (sessionId !== currentAudioSessionId) return;


      const errType = (err && err.error) || '';
      if (errType === 'interrupted' || errType === 'canceled') {
        clearTimeout(safetyTimer);
        stopRelay();
        return;
      }

      console.warn('Web Speech API phát âm lỗi (mã: ' + errType + '), chuyển sang online audio fallback:', err);
      if (onFallback) {
        onFallback();
      } else {
        clearTimeout(safetyTimer);
        stopRelay();
      }
    };

    setTimeout(() => {
      if (sessionId !== currentAudioSessionId) return;
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window.speechSynthesis.speak(utterance);
      } catch (innerErr) {
        if (sessionId === currentAudioSessionId && onFallback) {
          onFallback();
        } else {
          clearTimeout(safetyTimer);
          stopRelay();
        }
      }
    }, 16);

  } catch (err) {
    if (sessionId !== currentAudioSessionId) return;
    if (onFallback) {
      onFallback();
    } else {
      clearTimeout(safetyTimer);
      stopRelay();
    }
  }
}


async function speakJapanese(text, btnElement, ev, speakerKey, cfgOverride) {
  if (ev && ev.stopPropagation) {
    ev.stopPropagation();
  }

  const now = Date.now();
  if (lastSpeechClickTime && (now - lastSpeechClickTime < 160) && text === lastSpeechText) {
    return;
  }
  lastSpeechClickTime = now;
  lastSpeechText = text;

  let btn = btnElement;
  if (!btn && typeof window !== 'undefined' && window.event) {
    const target = window.event.currentTarget || window.event.target;
    if (target) {
      btn = target.closest ? target.closest('.speak-btn, .speak-btn-mini, .btn-test-voice, .kcard-audio-btn, .btn-tool, button') : target;
    }
  }

  stopAllSpeechAudio();
  const sessionId = ++currentAudioSessionId;

  const cleanText = cleanSpeechText(text);
  if (!cleanText) {
    if (btn && btn.classList) btn.classList.remove('is-speaking');
    return;
  }

  const speechText = formatJapaneseGrammarSpeech(text) || formatJapaneseGrammarSpeech(cleanText);

  if (btn && btn.classList) {
    btn.classList.add('is-speaking');
  }

  const stopRelay = () => {
    if (sessionId !== currentAudioSessionId) return;
    if (btn && btn.classList) {
      btn.classList.remove('is-speaking');
    }
  };

  const dynamicDuration = Math.max(6500, cleanText.length * 280);
  const safetyTimer = setTimeout(stopRelay, dynamicDuration);
  activeSpeechSafetyTimer = safetyTimer;

  const appCfg = Object.assign({}, getSpeechGenConfig(), cfgOverride || {});
  let candidateSpeaker = speakerKey || appCfg.speaker || 'rotate';
  if (candidateSpeaker === 'rotate') {
    candidateSpeaker = (typeof AudioEngine !== 'undefined' && typeof AudioEngine.getRotatingSpeaker === 'function')
      ? AudioEngine.getRotatingSpeaker(speechText || cleanText)
      : DIALOGUE_DEFAULT_SPEAKER;
  }
  const speakerToUse = resolveDialogueSpeakerId(candidateSpeaker);
  const voiceProfile = getDialogueVoiceProfile(speakerToUse);
  const cfg = Object.assign({}, appCfg, { voice: voiceProfile.speechGenVoice || SPEECHGEN_VOICE });

  const jpVoice = findDialogueJpVoice(speakerToUse) || cachedLedaVoice || findLedaJpVoice();

  const canTryCloudSpeech = (cfg.token && cfg.email) || (typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.startsWith('http'));
  if (canTryCloudSpeech) {
    try {
      const ssmlPayload = (typeof AudioEngine !== 'undefined' && typeof AudioEngine.buildExpressiveSSML === 'function')
        ? AudioEngine.buildExpressiveSSML(cleanText, speakerToUse, cfg.speed, cfg.pitch)
        : speechText;
      const audioUrl = await fetchSpeechGenAudio(ssmlPayload, cfg, speakerToUse, speechText);

      if (sessionId !== currentAudioSessionId) {
        return; // Người dùng đã bấm từ khác trong lúc đang tải mạng, hủy bỏ ngay!
      }
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        currentSpeechAudio = audio;
        audio.onended = () => {
          if (sessionId !== currentAudioSessionId) return;
          clearTimeout(safetyTimer);
          stopRelay();
          if (currentSpeechAudio === audio) currentSpeechAudio = null;
        };
        audio.onerror = () => {
          if (sessionId !== currentAudioSessionId) return;
          if (jpVoice) {
            speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg, () => playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer, sessionId), speakerToUse, sessionId);
          } else {
            playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer, sessionId);
          }
        };
        const p = audio.play();
        if (p !== undefined) {
          p.catch(() => {
            if (sessionId !== currentAudioSessionId) return;
            if (jpVoice) {
              speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg, () => playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer, sessionId), speakerToUse, sessionId);
            } else {
              playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer, sessionId);
            }
          });
        }
        return;
      }
    } catch (apiErr) {
      console.warn('SpeechGen Cloud API chuyển hướng:', apiErr.message);
    }
  }

  const hasSpeechSynth = typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';

  if (jpVoice && hasSpeechSynth) {
    speakWithLedaWebSpeech(speechText, stopRelay, safetyTimer, cfg, () => {
      playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer, sessionId);
    }, speakerToUse, sessionId);
    return;
  }

  if (!window._warnedNoJpVoice) {
    window._warnedNoJpVoice = true;
    if (typeof showToast === 'function') {
      showToast("Đang phát âm thanh trực tuyến (Điện thoại chưa cài gói giọng tiếng Nhật ja-JP).");
    }
  }
  playOnlineJapaneseAudio(cleanText, stopRelay, safetyTimer, sessionId);
}

window.speakJapanese = speakJapanese;
window.getDialogueVoiceProfile = getDialogueVoiceProfile;


const _playOnlineJapaneseAudioCore = playOnlineJapaneseAudio;
window.playOnlineJapaneseAudio = function(text, onEnd, safetyTimer) {
  _playOnlineJapaneseAudioCore(text, typeof onEnd === 'function' ? onEnd : null, safetyTimer || null);
};

const SPEAKER_ICON_HTML = `<svg class="speaker-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;


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
                const speakerKey = String(line.speaker || '').toLowerCase().replace(/[^a-z0-9_]/g, '');
                return `
                  <div class="dialogue-line dialogue-speaker-${line.speaker.toLowerCase()}">
                    <div class="speaker-badge speaker-${line.speaker.toLowerCase()}">${line.speaker}</div>
                    <div class="dialogue-bubble">
                      <div class="dialogue-jp">
                        <button class="speak-btn" onclick="speakJapanese('${cleanSpeech}', this, event, '${speakerKey}')" title="Nghe câu này (giọng hội thoại)">${SPEAKER_ICON_HTML}</button>
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
                <button class="speak-btn" onclick="speakJapanese('${cleanSpeech}', this, event)" title="Nghe câu này (giọng hội thoại)">${SPEAKER_ICON_HTML}</button>
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

// ZONE 06: SIDEBAR SINGLE-ACCORDION, SYNC BAR & LESSON VIEW RENDERER (50 MINNA LESSONS)

function renderSidebar() {
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (!sidebarMenu) return;


  const isInitialLoad = !sidebarMenu.children || sidebarMenu.children.length === 0;
  if (!isInitialLoad && sidebarMenu.querySelector && sidebarMenu.querySelector('.accordion-group')) {
    const allItemBtns = sidebarMenu.querySelectorAll ? sidebarMenu.querySelectorAll('.menu-item-btn') : [];
    if (allItemBtns && allItemBtns.length > 0) {
      allItemBtns.forEach(btn => {
        const id = btn.getAttribute('data-id');
        if (!id) return;
        const isComp = isModuleCompleted(id);
        const isCur = (id === currentActiveId) ||
          (id === 'conjugation-lab' && currentActiveId === 'master-hub') ||
          (id === 'analytics-hub' && currentActiveId === 'streak-zen');
        btn.classList.toggle('active', isCur);
        const tag = btn.querySelector ? btn.querySelector('.item-tag') : null;
        if (tag) {
          tag.className = isComp ? 'item-tag completed' : (isCur ? 'item-tag current' : 'item-tag');
          if (isComp) {
            tag.textContent = 'Đã xong';
          }
        }
      });
      const maziiBtn = sidebarMenu.querySelector ? sidebarMenu.querySelector('.sidebar-mazii-btn') : null;
      if (maziiBtn && maziiBtn.classList) {
        maziiBtn.classList.toggle('active', currentActiveId === 'mazii-dict');
      }
      const examBtn = sidebarMenu.querySelector ? sidebarMenu.querySelector('.sidebar-exam-btn') : null;
      if (examBtn && examBtn.classList) {
        examBtn.classList.toggle('active', currentActiveId === 'exam' || String(currentActiveId).startsWith('exam-'));
      }
      return;
    }
  }

  const openGroupIds = new Set();
  try {
    if (sidebarMenu.querySelectorAll) {
      const openEls = sidebarMenu.querySelectorAll('.accordion-group.open');
      if (openEls && openEls.length) {

        const lastOpen = openEls[openEls.length - 1];
        if (lastOpen && lastOpen.id) openGroupIds.add(lastOpen.id);
      }
    }
  } catch (e) {}

  sidebarMenu.innerHTML = '';
  const fragment = (typeof document !== 'undefined' && document.createDocumentFragment) ? document.createDocumentFragment() : null;

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
  if (fragment) {
    fragment.appendChild(maziiQuickEl);
  } else {
    sidebarMenu.appendChild(maziiQuickEl);
  }

  const examQuickEl = document.createElement('div');
  examQuickEl.className = 'sidebar-exam-quick';
  examQuickEl.innerHTML = `
    <button type="button" class="sidebar-exam-btn ${(currentActiveId === 'exam' || String(currentActiveId).startsWith('exam-')) ? 'active' : ''}" onclick="switchModule('exam')" title="Luyện thi JLPT N5 &amp; N4: 50 đề thi chuẩn">
      <span class="exam-quick-left">
        <span class="exam-icon">${(typeof APP_ICONS !== 'undefined' && APP_ICONS.torii) ? APP_ICONS.torii : '<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6C8 7.2 16 7.2 21 6 M4.5 9H19.5 M12 6.8V9 M7.5 9V21 M16.5 9V21 M6.5 21H8.5 M15.5 21H17.5"></path></svg>'}</span>
        <span class="exam-text-col">
          <span class="exam-title-main">Luyện Thi JLPT</span>
          <span class="exam-title-sub">N5 &bull; N4</span>
        </span>
      </span>
      <span class="exam-badge">50 Đề</span>
    </button>
  `;
  if (fragment) {
    fragment.appendChild(examQuickEl);
  } else {
    sidebarMenu.appendChild(examQuickEl);
  }

  const masterHubQuickEl = document.createElement('div');
  masterHubQuickEl.className = 'sidebar-mazii-quick';
  masterHubQuickEl.innerHTML = `
    <button type="button" class="sidebar-mazii-btn ${currentActiveId === 'master-hub' ? 'active' : ''}" onclick="switchModule('master-hub')" title="Đấu trường Chia Thể, Sổ Tay Cá Nhân, Lượng Từ &amp; Chuỗi Ngày Học">
      <span class="mazii-quick-left">
        <span class="mazii-icon">${APP_ICONS.bolt || '<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 2.5L5.5 13.5H12L10.5 21.5L18.5 10.5H12L13.5 2.5Z"></path></svg>'}</span>
        <span class="mazii-title">Phòng Lab &amp; Sổ Tay</span>
      </span>
      <span class="mazii-badge">Master V4</span>
    </button>
  `;
  if (fragment) {
    fragment.appendChild(masterHubQuickEl);
  } else {
    sidebarMenu.appendChild(masterHubQuickEl);
  }

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
      icon: APP_ICONS.book || '',
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
      id: "group-kaiwa",
      title: "Hội Thoại",
      icon: (window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.stats && window.ACCOUNT_WA_ICONS.stats.kaiwa) || APP_ICONS.kaiwaWave || APP_ICONS.speaker || '',
      isOpenDefault: false,
      items: Array.from({ length: 50 }, (_, i) => {
        const num = i + 1;
        const kwId = `kaiwa-${num}`;
        const kwMap = root.KAIWA_DATA || {};
        const kw = kwMap[kwId];
        return {
          id: kwId,
          label: kw ? `Hội thoại Bài ${num}: ${kw.titleVi}` : `Hội thoại Bài ${num}`,
          sub: "Kaiwa • 練習C",
          isCurrent: kwId === currentActiveId
        };
      })
    },
    {
      id: "group-quiz",
      title: "Bài Tập",
      icon: APP_ICONS.bolt || '',
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
      icon: APP_ICONS.newspaper || APP_ICONS.dokkai || '',
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
      icon: APP_ICONS.pen || '',
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
      icon: (window.MASTER_SUITE_ICONS && window.MASTER_SUITE_ICONS.reference) || APP_ICONS.radicalsGrid || APP_ICONS.kanjiBadge || '',
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
    },
    {
      id: "group-master-suite",
      title: "Trung Tâm Phản Xạ & Sổ Tay",
      icon: (window.MASTER_SUITE_ICONS && window.MASTER_SUITE_ICONS.torii) || APP_ICONS.torii || '',
      isOpenDefault: false,
      items: [
        {
          id: 'conjugation-lab',
          label: 'Đấu Trường Chia Thể',
          sub: '10 Thể V/A',
          icon: (window.MASTER_SUITE_ICONS && window.MASTER_SUITE_ICONS.bolt) || APP_ICONS.bolt || '',
          isCurrent: currentActiveId === 'conjugation-lab' || (currentActiveId === 'master-hub' && (!window.StudyToolsEngine || !window.StudyToolsEngine.state || window.StudyToolsEngine.state.activeTab === 'conjugation'))
        },
        {
          id: 'mistake-notebook',
          label: 'Sổ Tay & Kho Câu Sai',
          sub: 'SRS Phục Thù',
          icon: (window.MASTER_SUITE_ICONS && window.MASTER_SUITE_ICONS.notebook) || APP_ICONS.exercise || '',
          isCurrent: currentActiveId === 'mistake-notebook' || (currentActiveId === 'master-hub' && window.StudyToolsEngine && window.StudyToolsEngine.state && window.StudyToolsEngine.state.activeTab === 'notebook')
        },
        {
          id: 'reference-hub',
          label: 'Bảng Tra Cứu Toàn Thư',
          sub: '5 Chuyên Đề',
          icon: (window.MASTER_SUITE_ICONS && window.MASTER_SUITE_ICONS.reference) || APP_ICONS.radicalsGrid || '',
          isCurrent: currentActiveId === 'reference-hub' || (currentActiveId === 'master-hub' && window.StudyToolsEngine && window.StudyToolsEngine.state && window.StudyToolsEngine.state.activeTab === 'reference')
        },
        {
          id: 'analytics-hub',
          label: 'Streak, Radar & Zen',
          sub: 'Streak & Zen',
          icon: (window.MASTER_SUITE_ICONS && window.MASTER_SUITE_ICONS.flame) || APP_ICONS.streakComet || '',
          isCurrent: currentActiveId === 'analytics-hub' || currentActiveId === 'streak-zen' || (currentActiveId === 'master-hub' && window.StudyToolsEngine && window.StudyToolsEngine.state && window.StudyToolsEngine.state.activeTab === 'analytics')
        }
      ]
    },
    {
      id: "group-exam",
      title: "Luyện Thi JLPT",
      icon: APP_ICONS.torii || '',
      isOpenDefault: false,
      items: (root.EXAMS_MANIFEST && Array.isArray(root.EXAMS_MANIFEST.exams) ? root.EXAMS_MANIFEST.exams : []).map(ex => {
        const isCur = (currentActiveId === ex.id || currentActiveId === `exam-${ex.code.toLowerCase()}`);
        return {
          id: ex.id,
          label: `${ex.code}: ${ex.title.replace(/^Đề\s+[Nn][45]-\d+:\s*/, '').split('—')[0].trim()}`,
          sub: `${ex.level} • 20 câu`,
          isCurrent: isCur
        };
      })
    }
  ];

  groups.forEach(group => {

    const isOpen = openGroupIds.has(group.id);

    const groupEl = document.createElement('div');
    groupEl.className = `accordion-group ${isOpen ? 'open' : ''}`;
    groupEl.id = group.id;

    groupEl.innerHTML = `
      <button class="accordion-header" aria-expanded="${isOpen}">
        <div class="accordion-header-left">
          <span class="accordion-group-icon" aria-hidden="true">${group.icon || ''}</span>
          <span>${group.title}</span>
        </div>
        <div class="accordion-header-right">
          <span class="accordion-badge">${group.items.length}</span>
          <svg class="accordion-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div class="accordion-body">
        <ul class="accordion-menu-list">
          ${group.items.map(it => {
            const isComp = isModuleCompleted(it.id);
            const isCur = (it.id === currentActiveId) ||
              (it.id === 'conjugation-lab' && currentActiveId === 'master-hub') ||
              (it.id === 'analytics-hub' && currentActiveId === 'streak-zen');
            const activeClass = isCur ? 'active' : '';
            const tagClass = isComp ? 'item-tag completed' : (isCur ? 'item-tag current' : 'item-tag');
            const tagLabel = isComp ? 'Đã xong' : it.sub;

            return `
              <li>
                <button class="menu-item-btn ${activeClass}" data-id="${it.id}">
                  <div class="item-left-content">
                    ${it.icon ? `<span class="menu-item-icon" aria-hidden="true">${it.icon}</span>` : ''}
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

    if (fragment) {
      fragment.appendChild(groupEl);
    } else {
      sidebarMenu.appendChild(groupEl);
    }
  });

  if (fragment) {
    sidebarMenu.appendChild(fragment);
  }
}


let currentKanjiTab = (typeof window !== 'undefined' && window.currentKanjiTab) ? window.currentKanjiTab : 'list';
if (typeof window !== 'undefined') window.currentKanjiTab = currentKanjiTab;

function renderModuleSyncBar(lessonNum, activeMode) {
  const num = parseInt(lessonNum, 10) || 1;
  const prevNum = num > 1 ? num - 1 : null;
  const nextNum = num < 50 ? num + 1 : null;
  const modePrefix = activeMode === 'quiz' ? 'quiz' : (activeMode === 'kaiwa' ? 'kaiwa' : (activeMode === 'dokkai' ? 'dokkai' : (activeMode === 'kanji' ? 'kanji' : 'bai')));
  const isKanji = activeMode === 'kanji';
  const isFcTab = isKanji && (typeof currentKanjiTab !== 'undefined' && currentKanjiTab === 'flashcard');
  const isListTab = isKanji && !isFcTab;

  return `
    <div class="module-sync-bar" aria-label="Chuyển nhanh chế độ học Bài ${num}">
      <div class="module-sync-tabs">
        <button type="button" class="sync-tab-btn ${activeMode === 'lesson' ? 'active' : ''}" onclick="switchModule('bai-${num}')" title="Lý thuyết Bài ${num}" aria-label="Lý thuyết Bài ${num}">
          <span class="sync-tab-icon">${APP_ICONS.book}</span>
          <span class="sync-tab-label">Lý thuyết</span>
        </button>
        <button type="button" class="sync-tab-btn ${activeMode === 'kaiwa' ? 'active' : ''}" onclick="switchModule('kaiwa-${num}')" title="Hội thoại Bài ${num}" aria-label="Hội thoại Bài ${num}">
          <span class="sync-tab-icon">${APP_ICONS.speaker || APP_ICONS.book}</span>
          <span class="sync-tab-label">Hội thoại</span>
        </button>
        <button type="button" class="sync-tab-btn ${isListTab ? 'active' : ''}" onclick="switchKanjiModule('${num}', 'list')" title="Mẹo nhớ Kanji Bài ${num}" aria-label="Mẹo nhớ Kanji Bài ${num}">
          <span class="sync-tab-icon">${APP_ICONS.lightbulb}</span>
          <span class="sync-tab-label">Mẹo nhớ Kanji</span>
        </button>
        <button type="button" class="sync-tab-btn ${isFcTab ? 'active' : ''}" onclick="switchKanjiModule('${num}', 'flashcard')" title="Kiểm tra Flashcard Bài ${num}" aria-label="Kiểm tra Flashcard Bài ${num}">
          <span class="sync-tab-icon">${APP_ICONS.cards}</span>
          <span class="sync-tab-label">Kiểm tra Flashcard</span>
        </button>
        <button type="button" class="sync-tab-btn ${activeMode === 'quiz' ? 'active' : ''}" onclick="switchModule('quiz-${num}')" title="Trắc nghiệm Bài ${num} (70 câu)" aria-label="Trắc nghiệm Bài ${num} (70 câu)">
          <span class="sync-tab-icon">${APP_ICONS.pen}</span>
          <span class="sync-tab-label">Trắc nghiệm</span>
        </button>
        <button type="button" class="sync-tab-btn ${activeMode === 'dokkai' ? 'active' : ''}" onclick="switchModule('dokkai-${num}')" title="Đọc hiểu Bài ${num}" aria-label="Đọc hiểu Bài ${num}">
          <span class="sync-tab-icon">${APP_ICONS.exercise}</span>
          <span class="sync-tab-label">Đọc hiểu</span>
        </button>
      </div>
      <div class="module-step-nav">
        <button type="button" class="step-nav-btn btn-icon-only" ${prevNum ? `onclick="switchModule('${modePrefix}-${prevNum}')"` : 'disabled'} title="${prevNum ? `Về Bài ${prevNum}` : 'Đang ở bài đầu tiên'}" aria-label="${prevNum ? `Về Bài ${prevNum}` : 'Bài đầu tiên'}">
          ${APP_ICONS.arrowLeft}
          <span class="sr-only">${prevNum ? `Về Bài ${prevNum}` : 'Bài đầu tiên'}</span>
        </button>
        <span class="step-nav-indicator">Bài ${num}/50</span>
        <button type="button" class="step-nav-btn btn-icon-only" ${nextNum ? `onclick="switchModule('${modePrefix}-${nextNum}')"` : 'disabled'} title="${nextNum ? `Sang Bài ${nextNum}` : 'Đang ở bài cuối'}" aria-label="${nextNum ? `Sang Bài ${nextNum}` : 'Bài cuối cùng'}">
          ${APP_ICONS.arrowRight}
          <span class="sr-only">${nextNum ? `Sang Bài ${nextNum}` : 'Bài cuối cùng'}</span>
        </button>
      </div>
    </div>
  `;
}
if (typeof window !== 'undefined') window.renderModuleSyncBar = renderModuleSyncBar;

function renderModuleFooterNav(lessonNum, activeMode) {
  const num = parseInt(lessonNum, 10) || 1;
  const prevNum = num > 1 ? num - 1 : null;
  const nextNum = num < 50 ? num + 1 : null;
  const modePrefix = activeMode === 'quiz' ? 'quiz' : (activeMode === 'kaiwa' ? 'kaiwa' : (activeMode === 'dokkai' ? 'dokkai' : (activeMode === 'kanji' ? 'kanji' : 'bai')));
  const isFc = (typeof currentKanjiTab !== 'undefined' && currentKanjiTab === 'flashcard');

  return `
    <div class="module-footer-nav">
      <div class="footer-next-steps">
        ${activeMode === 'lesson' ? `
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('kaiwa-${num}')">
            <span class="footer-cta-tag">Nghe &amp; nói</span>
            <strong class="footer-cta-title">Hội thoại Bài ${num} →</strong>
          </button>
          <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiModule('${num}', 'list')">
            <span class="footer-cta-tag">Chữ Hán</span>
            <strong class="footer-cta-title">Mẹo nhớ Kanji Bài ${num} →</strong>
          </button>
          <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
            <span class="footer-cta-tag">Bài tập</span>
            <strong class="footer-cta-title">Trắc nghiệm Bài ${num} →</strong>
          </button>
          <button type="button" class="footer-cta-card accent-emerald" onclick="switchModule('dokkai-${num}')">
            <span class="footer-cta-tag">Đọc hiểu</span>
            <strong class="footer-cta-title">Dokkai Bài ${num} →</strong>
          </button>
        ` : activeMode === 'kaiwa' ? `
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('bai-${num}')">
            <span class="footer-cta-tag">Lý thuyết</span>
            <strong class="footer-cta-title">← Lý thuyết Bài ${num}</strong>
          </button>
          <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
            <span class="footer-cta-tag">Bài tập</span>
            <strong class="footer-cta-title">Trắc nghiệm Bài ${num} →</strong>
          </button>
          <button type="button" class="footer-cta-card accent-emerald" onclick="switchModule('dokkai-${num}')">
            <span class="footer-cta-tag">Đọc hiểu</span>
            <strong class="footer-cta-title">Dokkai Bài ${num} →</strong>
          </button>
        ` : activeMode === 'quiz' ? `
          <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiModule('${num}', 'flashcard')">
            <span class="footer-cta-tag">Flashcard</span>
            <strong class="footer-cta-title">Flashcard Kanji Bài ${num} →</strong>
          </button>
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('bai-${num}')">
            <span class="footer-cta-tag">Lý thuyết</span>
            <strong class="footer-cta-title">← Lý thuyết Bài ${num}</strong>
          </button>
          <button type="button" class="footer-cta-card accent-emerald" onclick="switchModule('dokkai-${num}')">
            <span class="footer-cta-tag">Đọc hiểu</span>
            <strong class="footer-cta-title">Dokkai Bài ${num} →</strong>
          </button>
        ` : activeMode === 'dokkai' ? `
          <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiModule('${num}', 'list')">
            <span class="footer-cta-tag">Chữ Hán</span>
            <strong class="footer-cta-title">Mẹo nhớ Kanji Bài ${num} →</strong>
          </button>
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('bai-${num}')">
            <span class="footer-cta-tag">Lý thuyết</span>
            <strong class="footer-cta-title">← Lý thuyết Bài ${num}</strong>
          </button>
          <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
            <span class="footer-cta-tag">Bài tập</span>
            <strong class="footer-cta-title">Trắc nghiệm Bài ${num} →</strong>
          </button>
        ` : `
          ${isFc ? `
            <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiTab('list', true)">
              <span class="footer-cta-tag">Chiết tự</span>
              <strong class="footer-cta-title">← Mẹo nhớ Kanji Bài ${num}</strong>
            </button>
            <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
              <span class="footer-cta-tag">Bài tập</span>
              <strong class="footer-cta-title">Trắc nghiệm Bài ${num} →</strong>
            </button>
          ` : `
            <button type="button" class="footer-cta-card accent-amber" onclick="switchKanjiTab('flashcard', true)">
              <span class="footer-cta-tag">Flashcard</span>
              <strong class="footer-cta-title">Flashcard Bài ${num} →</strong>
            </button>
            <button type="button" class="footer-cta-card accent-sky" onclick="switchModule('quiz-${num}')">
              <span class="footer-cta-tag">Bài tập</span>
              <strong class="footer-cta-title">Trắc nghiệm Bài ${num} →</strong>
            </button>
          `}
          <button type="button" class="footer-cta-card accent-sakura" onclick="switchModule('bai-${num}')">
            <span class="footer-cta-tag">Lý thuyết</span>
            <strong class="footer-cta-title">← Lý thuyết Bài ${num}</strong>
          </button>
          <button type="button" class="footer-cta-card accent-emerald" onclick="switchModule('dokkai-${num}')">
            <span class="footer-cta-tag">Đọc hiểu</span>
            <strong class="footer-cta-title">Dokkai Bài ${num} →</strong>
          </button>
        `}
      </div>
      <div class="footer-lesson-pager">
        ${prevNum ? `
          <button type="button" class="pager-btn pager-prev" onclick="switchModule('${modePrefix}-${prevNum}')">
            <span>← Bài ${prevNum}</span>
          </button>
        ` : `<div></div>`}
        ${nextNum ? `
          <button type="button" class="pager-btn pager-next" onclick="switchModule('${modePrefix}-${nextNum}')">
            <span>Bài ${nextNum} →</span>
          </button>
        ` : `<div></div>`}
      </div>
    </div>
  `;
}
if (typeof window !== 'undefined') window.renderModuleFooterNav = renderModuleFooterNav;


function renderContent(id) {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  currentActiveId = id;
  if (pendingModuleId === id) pendingModuleId = null;

  const isExamRunnerRoute = (String(id).startsWith('exam-') || String(id).startsWith('de-thi-') || String(id).includes('/'));
  if (!isExamRunnerRoute) {
    if (window.ExamEngine && typeof window.ExamEngine.cleanup === 'function') {
      window.ExamEngine.cleanup();
    }
  }

  if (!String(id).startsWith('quiz-')) {
    if (typeof removeQuizMiniTimerWidget === 'function') {
      removeQuizMiniTimerWidget();
    }
  }

  const extractedNum = extractLessonNumber(id);
  if (extractedNum) {
    lastLessonNumber = extractedNum;
  } else if (String(id).startsWith('radicals-')) {
    lastRadicalId = id;
  }

  syncMobileBottomNav(id);

  if (!isModuleDataReady(id)) {
    renderLazyLoader(id);
    const navigationToken = moduleNavigationToken;
    ensureModuleDataLoaded(id).then(() => {
      if (navigationToken !== moduleNavigationToken || currentActiveId !== id) return;
      renderContent(id);
      updateHeaderProgress();
    }).catch(err => {
      console.warn('[LazyLoader] Lỗi tải dữ liệu module:', id, err);
      renderContent(id);
    });
    return;
  }

  const transitionToken = ++contentTransitionToken;
  if (contentTransitionTimer) clearTimeout(contentTransitionTimer);
  content.classList.remove('content-entering');
  if (lastAnimatedRouteId !== id) {
    lastAnimatedRouteId = id;
    safeRAF(() => {
      if (transitionToken !== contentTransitionToken) return;
      content.classList.add('content-entering');
      contentTransitionTimer = setTimeout(() => {
        if (transitionToken === contentTransitionToken) content.classList.remove('content-entering');
        contentTransitionTimer = null;
      }, 400);
    });
  }

  const isCompleted = isModuleCompleted(id);

  if (id === 'master-hub' || id === 'conjugation-lab' || id === 'mistake-notebook' || id === 'reference-hub' || id === 'analytics-hub' || id === 'streak-zen' || String(id).startsWith('master-hub-')) {
    let initialTab = 'conjugation';
    if (id === 'mistake-notebook' || id === 'master-hub-notebook') {
      initialTab = 'notebook';
    } else if (id === 'reference-hub' || id === 'master-hub-reference') {
      initialTab = 'reference';
    } else if (id === 'analytics-hub' || id === 'streak-zen' || id === 'master-hub-analytics') {
      initialTab = 'analytics';
    }
    if (typeof StudyToolsEngine !== 'undefined' && typeof StudyToolsEngine.renderMasterHub === 'function') {
      StudyToolsEngine.renderMasterHub(content, initialTab);
    }
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  if (id.startsWith('kaiwa-')) {
    if (typeof KaiwaEngine !== 'undefined' && typeof KaiwaEngine.renderKaiwaModule === 'function') {
      KaiwaEngine.renderKaiwaModule(id, content);
    }
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

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
            <span class="badge badge-sakura">${lesson.badge || `Bài ${lessonNum}`}</span>
            <span class="badge badge-green">${lesson.vocabulary.length} từ</span>
            <span class="badge badge-primary">${lesson.grammar.length} ngữ pháp</span>
          </div>
          <button class="btn-complete-icon ${isCompleted ? 'is-completed' : ''}" 
                  onclick="toggleLessonComplete('${lesson.id}')"
                  aria-label="Đánh dấu hoàn thành bài này"
                  title="${isCompleted ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành bài này'}">
            <span class="complete-icon-mark">${isCompleted ? '✓' : '○'}</span>
          </button>
        </div>
        <h2 class="lesson-title">${lesson.title}</h2>
      </div>

      <!-- KHỐI LUYỆN TẬP TƯƠNG TÁC NHANH: FLASHCARD & KANJI MINI-QUIZ -->
      <div id="lesson-practice-mount"></div>

      <!-- PHẦN 1: TỪ VỰNG CHUẨN SÁCH GIÁO KHOA -->
      <section class="section-card">
        <div class="section-header vocab-section-header">
          <div class="section-title-group">
            <h3 class="section-title">Bảng Từ Vựng Trọng Tâm (${lesson.vocabulary.length} Từ)</h3>
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
                    <button class="speak-btn speak-btn-desktop" onclick="speakJapanese('${speechTarget}', this, event)" title="Phát âm từ này (giọng hội thoại)">${SPEAKER_ICON_HTML}</button>
                    <span class="vocab-hira-text">${v.hiragana}</span>
                  </td>
                  <td class="vocab-col-kanji ${isLongWord ? 'vocab-is-long' : ''}">
                    <button class="speak-btn speak-btn-mobile" onclick="speakJapanese('${speechTarget}', this, event)" title="Phát âm từ này (giọng hội thoại)">${SPEAKER_ICON_HTML}</button>
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
        <div class="section-header grammar-section-header">
          <div class="section-title-group">
            <h3 class="section-title">Cấu Trúc Ngữ Pháp & Lưu Ý Phòng Thi (${lesson.grammar.length} Chủ điểm)</h3>
          </div>
          <button type="button" class="btn-tool btn-expand-pill btn-expand-all-grammar" onclick="toggleAllGrammarCards(this)" aria-expanded="false" title="Mở hoặc thu gọn tất cả chủ điểm ngữ pháp">
            ${APP_ICONS.chevronsDown || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>'}
            <span>Mở tất cả</span>
          </button>
        </div>
        <div class="grammar-list">
          ${lesson.grammar.map((g, gIdx) => `
            <div class="grammar-item-card ${gIdx === 0 ? 'is-open' : 'is-collapsed'}" id="grammar-card-${gIdx}">
              <div class="grammar-formula-bar" role="button" tabindex="0" aria-expanded="${gIdx === 0 ? 'true' : 'false'}" onclick="toggleGrammarCard(${gIdx}, this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleGrammarCard(${gIdx}, this);}">
                <span class="grammar-index-pill">Ngữ pháp ${String(gIdx + 1).padStart(2, '0')}</span>
                <div class="grammar-formula">${g.structure || g.pattern || g.title || ''}</div>
                <span class="grammar-accordion-arrow" aria-hidden="true">${APP_ICONS.chevronDown || '<svg class="icon-svg accordion-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>'}</span>
              </div>
              <div class="grammar-card-body">
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

    try {
      const mount = document.getElementById('lesson-practice-mount');
      if (mount && typeof mount.appendChild === 'function' && typeof document.createElement === 'function') {
        renderLessonPractice(lesson.vocabulary, '#lesson-practice-mount');
      }
    } catch (e) {}
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  if (id.startsWith('quiz-')) {
    const quizList = practiceQuizData[id] || [];
    const lessonNum = id.replace('quiz-', '');
    const lessonTitle = `Bài Tập - Bài ${lessonNum} Minna`;
    const lessonDesc = `Bộ ${quizList.length} câu trắc nghiệm trọng tâm Bài ${lessonNum}. Hãy chọn đáp án cho từng câu và bấm "Nộp Bài" ở cuối trang để xem kết quả và giải thích!`;

    const isAutoAdvanceActive = typeof window.isQuizAutoAdvanceEnabled === 'function' ? window.isQuizAutoAdvanceEnabled() : true;

    content.innerHTML = `
      ${renderModuleSyncBar(lessonNum, 'quiz')}

      <div class="lesson-hero-card">
        <div class="hero-meta">
          <span class="badge badge-sakura">Luyện Tập JLPT</span>
          <span class="badge badge-primary">${quizList.length} Câu Hỏi</span>
          <button class="btn-redo" onclick="resetPracticeProgress('${id}')" title="Làm lại ${quizList.length} câu trắc nghiệm này">
            <span>↻ Làm lại bài</span>
          </button>
        </div>
        <h2 class="lesson-title">${lessonTitle}</h2>
      </div>

      <!-- THANH ĐIỀU HƯỚNG CÂU HỎI & CÔNG CỤ LÀM BÀI HỢP NHẤT (DẠNG ICON GỌN GÀNG 1 HÀNG) -->
      <div class="quiz-top-bar" id="quizStickyBar">
        <div class="quiz-controls-wrap">
          <button id="btn-pause-timer" class="quiz-palette-toggle-btn btn-icon-only" onclick="toggleQuizTimer()" title="Tạm dừng hoặc tiếp tục tính giờ" aria-label="Tạm dừng tính giờ">Tạm dừng</button>
          <button id="btn-toggle-autoadvance" 
                  class="quiz-palette-toggle-btn btn-autoadvance btn-icon-only ${isAutoAdvanceActive ? 'active' : ''}" 
                  onclick="toggleQuizAutoAdvance()" 
                  title="Tự động chuyển câu khi chọn đáp án (${isAutoAdvanceActive ? 'Đang BẬT' : 'Đang TẮT'})"
                  aria-label="Tự chuyển câu">
            <span class="autoadvance-icon"><svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></span>
            <span class="btn-label-text">Tự chuyển</span>
            <strong class="autoadvance-status" id="autoadvance-status-label">${isAutoAdvanceActive ? 'BẬT' : 'TẮT'}</strong>
          </button>
          <button class="quiz-palette-toggle-btn btn-palette-toggle btn-icon-only" onclick="togglePaletteView()" title="Ẩn/Hiện Bảng câu hỏi (1-${quizList.length})" aria-label="Bảng câu hỏi">
            <svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span class="btn-label-text">Bảng câu hỏi</span>
          </button>
        </div>

        <div class="quiz-topbar-actions" id="quizTopBarActions">
          <div class="mini-timer-pill" id="quizMiniTimerPill" onclick="toggleQuizTimer()" title="Đồng hồ làm bài - Bấm để tạm dừng/tiếp tục" aria-label="Đồng hồ đếm ngược">
            <span class="mini-timer-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </span>
            <strong class="mini-timer-val" id="quizMiniClockText">30:00</strong>
            <span class="quiz-timer-display" id="quiz-timer-clock" style="display:none;" aria-hidden="true">30:00</span>
          </div>
          <button type="button" class="mini-btn-submit btn-icon-only" onclick="submitPracticeQuiz('${id}')" title="Nộp bài và xem kết quả" aria-label="Nộp bài">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="btn-label-text">Nộp bài</span>
          </button>
        </div>
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
      if (typeof ensureQuizMiniTimerWidget === 'function') {
        ensureQuizMiniTimerWidget(id);
      }
      if (typeof setupQuizScrollObserver === 'function') {
        setupQuizScrollObserver(id);
      }
    } else {
      if (typeof removeQuizMiniTimerWidget === 'function') {
        removeQuizMiniTimerWidget();
      }
      const topActions = document.getElementById('quizTopBarActions');
      if (topActions) topActions.style.display = 'none';
      const clockEl = document.getElementById('quiz-timer-clock');
      const pauseBtn = document.getElementById('btn-pause-timer');
      if (clockEl) {
        clockEl.textContent = 'Đã hoàn thành';
        clockEl.classList.add('timer-finished');
      }
      if (pauseBtn) pauseBtn.style.display = 'none';
    }
    restorePracticeAnswers(id);
    initScrollReveal();
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  if (id.startsWith('dokkai-')) {
    renderDokkaiRoom(id);
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  if (id.startsWith('kanji-')) {
    const isFc = id.startsWith('kanji-flashcard-');
    renderKanjiSection(id, isFc ? 'flashcard' : null);
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  if (id.startsWith('radicals-')) {
    const isFc = id.startsWith('radicals-flashcard-');
    renderRadicalSection(id, isFc ? 'flashcard' : null);
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  if (id === 'mazii-dict' || id.startsWith('mazii-dict')) {
    const qMatch = id.match(/mazii-dict\?(?:q=([^&]*))?(?:&type=([^&]*))?/);
    const initialQuery = qMatch && qMatch[1] ? decodeURIComponent(qMatch[1]) : '';
    const initialType = qMatch && qMatch[2] ? decodeURIComponent(qMatch[2]) : 'word';
    renderMaziiDictSection(initialQuery, initialType);
    restoreScrollPosition(getModuleScroll(id));
    return;
  }

  if (id === 'exam' || id.startsWith('exam-') || id.startsWith('de-thi') || id.startsWith('exam/')) {
    if (typeof ExamEngine !== 'undefined' && typeof ExamEngine.render === 'function') {
      ExamEngine.render(content, id);
    }
    restoreScrollPosition(getModuleScroll(id));
    return;
  }
}

// ZONE 07: KANJI STUDY, KANA-ANCHOR FURIGANA & 3D MNEMONIC FLASHCARDS (KanjiEngine & QuizEngine)

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

function formatKanjiExampleSentence(rawExample, wordOrItem) {
  if (!rawExample || typeof rawExample !== 'string') return '';
  let parsed = null;
  if (typeof KanjiEngine !== 'undefined' && typeof KanjiEngine.formatExample === 'function') {
    parsed = KanjiEngine.formatExample(rawExample, wordOrItem);
  }
  if (!parsed) {
    const trimmed = rawExample.trim();
    if (!trimmed) return '';
    let jpPart = trimmed;
    let viPart = '';
    const match = trimmed.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
    if (match) {
      jpPart = match[1].trim();
      viPart = match[2].trim();
    }
    const isObj = wordOrItem && typeof wordOrItem === 'object';
    const rawWord = isObj
      ? String(wordOrItem.word || wordOrItem.kanji || '')
      : (typeof wordOrItem === 'string' ? wordOrItem : '');
    const cleanWord = rawWord.replace(/^[～~/]+|[～~/]+$/g, '').replace(/（.*?）|\(.*?\)/g, '').trim();
    const rawReading = isObj ? String(wordOrItem.reading || '') : '';
    const primaryRead = rawReading.replace(/（.*?）|\(.*?\)/g, '').replace(/^[～~/]+|[～~/]+$/g, '').split(/[．.／/]/)[0].replace(/[\s、,]+/g, '');
    const targetKanjis = Array.from(cleanWord).filter(ch => /[\u4e00-\u9faf]/.test(ch));

    let highlightedJp = jpPart;
    if (cleanWord && highlightedJp.includes(cleanWord)) {
      const inner = primaryRead && /[\u4e00-\u9faf]/.test(cleanWord)
        ? `<ruby>${cleanWord}<rt>${primaryRead}</rt></ruby>`
        : cleanWord;
      highlightedJp = highlightedJp.split(cleanWord).join(`<strong class="kcard-example-highlight">${inner}</strong>`);
    } else if (targetKanjis.length > 0) {
      for (const kCh of targetKanjis) {
        if (highlightedJp.includes(kCh)) {
          highlightedJp = highlightedJp.split(kCh).join(`<strong class="kcard-example-highlight"><ruby>${kCh}<rt>${primaryRead || ''}</rt></ruby></strong>`);
          break;
        }
      }
    }
    parsed = { jpRaw: jpPart, jpHtml: highlightedJp, viText: viPart };
  }
  const safeAudioText = String(parsed.jpRaw || '')
    .replace(/（.*?）/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/'/g, "\\'")
    .trim();

  return `
    <div class="kcard-example-box">
      <div class="kcard-example-main">
        <span class="kcard-example-tag">VD:</span>
        <span class="kcard-example-jp">${parsed.jpHtml}</span>
        <button type="button" class="kcard-audio-btn btn-icon-only kcard-example-audio" onclick="speakJapanese('${safeAudioText}', this, event)" title="Nghe phát âm câu ví dụ" aria-label="Nghe phát âm câu ví dụ">
          <span class="audio-btn-icon">${SPEAKER_ICON_HTML}</span>
        </button>
      </div>
      ${parsed.viText ? `<div class="kcard-example-vi">${parsed.viText}</div>` : ''}
    </div>
  `;
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
          <span class="badge badge-primary">${lesson.items.length} Kanji</span>
          ${learnedCount > 0 ? `<span class="badge badge-amber">Đã nhớ: ${learnedCount}/${lesson.items.length}</span>` : ''}
        </div>
        <button class="btn-complete-icon ${isCompleted ? 'is-completed' : ''}" 
                onclick="toggleLessonComplete('${lesson.id}')"
                aria-label="Đánh dấu hoàn thành phần này"
                title="${isCompleted ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành phần này'}">
          <span class="complete-icon-mark">${isCompleted ? '✓' : '○'}</span>
        </button>
      </div>
      <h2 class="lesson-title">${lesson.title}</h2>
    </div>

    <!-- THANH ĐIỀU HƯỚNG 2 THẺ RIÊNG BIỆT: DANH SÁCH MẸO NHỚ & BÀI KIỂM TRA FLASHCARD (ẨN THEO YÊU CẦU NGƯỜI DÙNG) -->
    <div class="kanji-tab-nav-wrapper" style="display: none !important;" aria-hidden="true">
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
        <div class="kanji-view-stats" style="display:flex;align-items:center;gap:8px;">
          <span id="kanji-count-badge" class="badge badge-primary">Hiển thị: ${lesson.items.length}/${lesson.items.length}</span>
          <button type="button" class="btn-tool btn-expand-pill btn-expand-all-kanji" onclick="toggleAllKanjiCards(this)" aria-expanded="false" title="Mở hoặc thu gọn tất cả mẹo nhớ chữ Hán">
            ${APP_ICONS.chevronsDown || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>'}
            <span>Mở hết mẹo nhớ</span>
          </button>
        </div>
      </div>

      <!-- Danh sách các thẻ từ vựng: BỐ TRÍ TẬP TRUNG VÀO TỪ VỰNG & MẸO GHI NHỚ (THU GỌN / BUNG RA) -->
      <div class="kanji-cards-container" id="kanji-cards-list">
        ${lesson.items.map((item, idx) => `
          <article class="kanji-study-card is-collapsed" id="kcard-${item.id}" data-word="${item.word}" data-reading="${item.reading || ''}" data-kanji="${item.kanji || item.word}" data-hanviet="${item.hanViet}" data-meaning="${item.meaning}">
            
            <!-- DÒNG TRÊN: TIÊU ĐỀ TỪ VỰNG CHỮ HÁN, ÂM HÁN VIỆT & NGHĨA -->
            <div class="kcard-top-section" role="button" tabindex="0" aria-expanded="false" onclick="toggleKanjiCardDetail('${item.id}', event)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleKanjiCardDetail('${item.id}', event);}">
              <div class="kcard-header-bar">
                <div class="kcard-title-group">
                  <h3 class="kcard-word-kanji">${item.word}</h3>
                  <strong class="kcard-word-hanviet">${item.hanViet}</strong>
                </div>
                <div class="kcard-meta-group">
                  ${item.type ? `<span class="badge badge-subtle kcard-type-badge">${item.type}</span>` : ''}
                  <button type="button" class="kcard-audio-btn btn-icon-only" onclick="speakJapanese('${(item.reading || item.word).replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim()}', this, event)" title="Nghe phát âm từ: ${item.word}" aria-label="Nghe phát âm từ: ${item.word}">
                    <span class="audio-btn-icon">${SPEAKER_ICON_HTML}</span>
                  </button>
                  <button type="button" class="kcard-expand-btn" title="Xem Mẹo nhớ &amp; Ví dụ" aria-label="Xem Mẹo nhớ và Ví dụ">
                    <span class="kcard-expand-icon">${APP_ICONS.lightbulb}</span>
                    <span class="kcard-expand-label">Mẹo nhớ</span>
                    <span class="kcard-expand-arrow" aria-hidden="true">${APP_ICONS.chevronDown || '<svg class="icon-svg accordion-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>'}</span>
                  </button>
                </div>
              </div>
              <div class="kcard-body-bar">
                ${item.reading ? `<span class="kcard-word-reading">${item.reading}</span>` : ''}
                ${item.reading && item.meaning ? `<span class="kcard-reading-dot">•</span>` : ''}
                <span class="kcard-word-meaning-text">${item.meaning}</span>
              </div>
            </div>

            <!-- DÒNG BÊN DƯỚI: TRỌNG TÂM MẸO GHI NHỚ, CẤU THÀNH & CÂU TIẾNG NHẬT GỢI NHỚ -->
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
              ${item.example ? formatKanjiExampleSentence(item.example, item) : ''}
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

  initKanjiFlashcardStudio(lesson);
}


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
    const target = (currentKanjiTab === 'flashcard' ? document.getElementById('kanji-tab-pane-flashcard') : document.getElementById('kanji-tab-pane-list')) || document.querySelector('.lesson-hero-card');
    if (target && target.scrollIntoView) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <button type="button" class="kcard-audio-btn btn-icon-only" onclick="speakJapanese('${(item.reading || item.word).replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim()}', this, event)" title="Nghe phát âm: ${item.word}" aria-label="Nghe phát âm: ${item.word}">
            <span class="audio-btn-icon">${SPEAKER_ICON_HTML}</span>
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

      ${item.example ? `
        <div class="kfc-back-example">
          ${formatKanjiExampleSentence(item.example, item)}
        </div>
      ` : ''}

      <div class="kfc-flip-hint">
        <span style="display:inline-flex;align-items:center;gap:5px;">${APP_ICONS.flip} <span>Chạm để quay lại mặt trước</span></span>
      </div>
    `;

  } else {

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
          <button type="button" class="kcard-audio-btn btn-icon-only" onclick="speakJapanese('${(item.reading || item.word).replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim()}', this, event)" title="Nghe phát âm: ${item.word}" aria-label="Nghe phát âm: ${item.word}">
            <span class="audio-btn-icon">${SPEAKER_ICON_HTML}</span>
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
          ${formatKanjiExampleSentence(item.example, item)}
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



const KANJI_LOOKALIKES_MAP = (typeof window !== 'undefined' && window.KANJI_LOOKALIKES_MAP)
  || (typeof global !== 'undefined' && global.KANJI_LOOKALIKES_MAP)
  || {};

function getLookalikeKanjiDistractors(item, lessonItems) {
  if (typeof QuizEngine !== 'undefined' && typeof QuizEngine.getLookalikeKanjiDistractors === 'function') {
    return QuizEngine.getLookalikeKanjiDistractors(item, lessonItems);
  }
  const distractors = [];
  const word = (item.word || item.kanji || '').trim();
  const kanjis = Array.isArray(item.kanjis) && item.kanjis.length > 0 
    ? item.kanjis 
    : Array.from(word).filter(ch => /[\u4e00-\u9faf]/.test(ch));

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

  if (distractors.length < 3 && Array.isArray(lessonItems)) {
    for (const other of lessonItems) {
      const oWord = (other.word || other.kanji || '').trim();
      if (oWord && oWord !== word && !distractors.includes(oWord)) {
        distractors.push(oWord);
        if (distractors.length >= 3) break;
      }
    }
  }

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

  const TARGET_QUIZ_COUNT = 25;
  const half1 = Math.ceil(TARGET_QUIZ_COUNT / 2); // 13 câu
  const half2 = TARGET_QUIZ_COUNT - half1; // 12 câu

  const shuffledPool1 = [...items].sort(() => Math.random() - 0.5);
  const shuffledPool2 = [...items].sort(() => Math.random() - 0.5);

  const k2mItems = [];
  for (let i = 0; i < half1; i++) {
    k2mItems.push(shuffledPool1[i % shuffledPool1.length]);
  }

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
          <h4>Trắc Nghiệm Phản Xạ: ${modeTitle}</h4>
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
              <div style="margin-top: 10px;">
                ${formatKanjiExampleSentence(item.example, item)}
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

      const scorePill = quizStage.querySelector('.practice-counter-pill');
      if (scorePill) scorePill.textContent = `Đúng: ${kfcQuizScore}/${kfcQuizDeck.length}`;

      if (revealBox) revealBox.style.display = 'block';

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
    countBadge.textContent = `Hiển thị: ${visibleCount}/${cards.length}`;
  }
};

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

// ZONE 08: 191 RADICALS STUDY & SPACED REPETITION (SRS) ENGINE

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
          <span class="badge badge-sakura">Bộ Thủ</span>
          <span class="badge badge-green">${group.items.length} bộ</span>
        </div>
        <button class="btn-complete-icon ${isCompleted ? 'is-completed' : ''}" 
                onclick="toggleLessonComplete('${group.id}')"
                aria-label="Đánh dấu hoàn thành phần này"
                title="${isCompleted ? 'Đã hoàn thành (Bấm để hủy)' : 'Đánh dấu hoàn thành phần này'}">
          <span class="complete-icon-mark">${isCompleted ? '✓' : '○'}</span>
        </button>
      </div>
      <h2 class="lesson-title">${group.title}</h2>
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
      <div class="radical-filter-bar" style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
        <input type="text" 
               id="radical-filter-input"
               class="vocab-search-input radical-search-input" 
               style="flex:1;min-width:220px;"
               placeholder="Tìm nhanh bộ thủ trong nhóm này (tên, nghĩa, chữ Hán...)" 
               oninput="filterRadicalsInGroup(this.value)">
        <button type="button" class="btn-tool btn-expand-pill btn-expand-all-radicals" onclick="toggleAllRadicalCards(this)" aria-expanded="false" title="Mở hoặc thu gọn tất cả ứng dụng bộ thủ">
          ${APP_ICONS.chevronsDown || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>'}
          <span>Mở hết ứng dụng</span>
        </button>
      </div>

      <!-- Danh sách các bộ thủ tuân thủ cùng 1 format chuẩn -->
      <div class="radicals-container">
        ${group.items.map(item => `
          <article class="radical-card is-collapsed" id="card-${item.id}" data-id="${item.id}" data-strokes="${item.strokeCount}">
            
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

              <!-- NÚT BUNG ỨNG DỤNG & CHỮ HÁN VÍ DỤ -->
              <button type="button" class="radical-expand-toggle" aria-expanded="false" onclick="toggleRadicalCardDetail('${item.id}', this)">
                <span class="radical-expand-icon">${APP_ICONS.lightbulb}</span>
                <span class="radical-expand-text">Xem ứng dụng &amp; Ví dụ Kanji (${(item.examples || []).length})</span>
                <span class="radical-expand-arrow" aria-hidden="true">${APP_ICONS.chevronDown || '<svg class="icon-svg accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>'}</span>
              </button>

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
          <h4>Trắc Nghiệm Phản Xạ: ${modeTitle}</h4>
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

    if (svg.addEventListener) {
      svg.style.cursor = 'pointer';
      svg.setAttribute('title', 'Chạm để xem hoạt họa thứ tự viết nét');
      svg.addEventListener('click', (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        playStrokesOnce();
      });
    }

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

// ZONE 09: PRACTICE QUIZ (3,500 QUESTIONS) & DOKKAI READING COMPREHENSION (50 PASSAGES)

function renderDokkaiRoom(dokkaiId) {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  const dokkai = dokkaiData.find(d => d.id === dokkaiId);
  if (!dokkai) return;
  const lessonNum = dokkaiId.replace('dokkai-', '');
  const isAutoAdvanceActive = typeof window.isQuizAutoAdvanceEnabled === 'function' ? window.isQuizAutoAdvanceEnabled() : true;

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
          <div class="section-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <h3 class="section-title">Câu Hỏi Đọc Hiểu (5 Câu)</h3>
            <button id="btn-dokkai-toggle-autoadvance" 
                    class="quiz-palette-toggle-btn btn-autoadvance btn-icon-only ${isAutoAdvanceActive ? 'active' : ''}" 
                    onclick="toggleQuizAutoAdvance()" 
                    title="Tự động chuyển câu (${isAutoAdvanceActive ? 'Đang BẬT' : 'Đang TẮT'})"
                    aria-label="Tự chuyển câu">
              <span class="autoadvance-icon"><svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></span>
              <span class="btn-label-text">Tự chuyển:</span>
              <strong class="autoadvance-status" id="dokkai-autoadvance-status-label">${isAutoAdvanceActive ? 'BẬT' : 'TẮT'}</strong>
            </button>
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
  if (typeof removeQuizMiniTimerWidget === 'function') {
    removeQuizMiniTimerWidget();
  }
  const topActions = document.getElementById('quizTopBarActions');
  if (topActions) topActions.style.display = 'inline-flex';

  if (typeof stopMaziiVoiceSearch === 'function') {
    try { stopMaziiVoiceSearch(true); } catch (e) {}
  }
  quizSecondsLeft = 30 * 60;
  isQuizTimerPaused = false;

  const clockEl = document.getElementById('quiz-timer-clock');
  const pauseBtn = document.getElementById('btn-pause-timer');
  const miniClock = document.getElementById('quizMiniClockText');
  const miniPill = document.getElementById('quizMiniTimerPill');
  if (clockEl) {
    clockEl.textContent = '30:00';
    clockEl.classList.remove('timer-warning');
    clockEl.classList.remove('timer-finished');
  }
  if (miniClock) {
    miniClock.textContent = '30:00';
  }
  if (miniPill) {
    miniPill.classList.remove('timer-warning');
  }
  if (pauseBtn) {
    pauseBtn.textContent = 'Tạm dừng';
    if (pauseBtn.classList) {
      pauseBtn.classList.remove('is-paused');
    }
    pauseBtn.style.display = 'inline-flex';
  }

  quizTimerInterval = setInterval(() => {
    if (isQuizTimerPaused) return;

    quizSecondsLeft--;
    if (quizSecondsLeft <= 0) {
      clearInterval(quizTimerInterval);
      quizTimerInterval = null;
      if (clockEl) clockEl.textContent = '00:00';
      if (miniClock) miniClock.textContent = '00:00';
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
    const curMiniClock = document.getElementById('quizMiniClockText');
    const curMiniPill = document.getElementById('quizMiniTimerPill');
    if (curMiniClock) {
      curMiniClock.textContent = timeStr;
    }
    if (curMiniPill) {
      curMiniPill.classList.toggle('timer-warning', quizSecondsLeft <= 300);
    }
  }, 1000);
  if (quizTimerInterval && typeof quizTimerInterval.unref === 'function') quizTimerInterval.unref();
};


window.ensureQuizMiniTimerWidget = function(quizId) {
  if (typeof document === 'undefined') return null;
  removeQuizMiniTimerWidget();
  const bar = document.getElementById('quizStickyBar') || document.querySelector('.quiz-top-bar');
  return bar || null;
};

window.removeQuizMiniTimerWidget = function() {
  if (typeof document === 'undefined') return;
  const widget = document.getElementById('quizMiniTimerWidget');
  if (widget && widget.parentNode && widget.parentNode === document.body) {
    widget.parentNode.removeChild(widget);
  }
};

window.setupQuizScrollObserver = function(quizId) {

  removeQuizMiniTimerWidget();
};

window.toggleQuizTimer = function() {
  const pauseBtn = document.getElementById('btn-pause-timer');
  isQuizTimerPaused = !isQuizTimerPaused;
  if (pauseBtn) {
    pauseBtn.textContent = isQuizTimerPaused ? 'Tiếp tục' : 'Tạm dừng';
    if (typeof pauseBtn.setAttribute === 'function') {
      pauseBtn.setAttribute('title', isQuizTimerPaused ? 'Tiếp tục tính giờ' : 'Tạm dừng tính giờ');
      pauseBtn.setAttribute('aria-label', isQuizTimerPaused ? 'Tiếp tục' : 'Tạm dừng');
    }
    if (pauseBtn.classList) {
      pauseBtn.classList.toggle('is-paused', isQuizTimerPaused);
    }
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

let quizAutoAdvanceTimeout = null;

window.isQuizAutoAdvanceEnabled = function() {
  const saved = safeGetStorage(STORAGE_AUTO_ADVANCE_KEY, 'true');
  return saved !== 'false';
};

window.toggleQuizAutoAdvance = function() {
  const current = window.isQuizAutoAdvanceEnabled();
  const next = !current;
  safeSetStorage(STORAGE_AUTO_ADVANCE_KEY, String(next));

  const allBtns = document.querySelectorAll('.btn-autoadvance');
  const allLabels = document.querySelectorAll('.autoadvance-status');
  allBtns.forEach(btn => {
    btn.classList.toggle('active', next);
    if (typeof btn.setAttribute === 'function') {
      btn.setAttribute('title', next ? 'Tự chuyển câu: Đang BẬT' : 'Tự chuyển câu: Đang TẮT');
      btn.setAttribute('aria-label', next ? 'Tự chuyển câu: Đang BẬT' : 'Tự chuyển câu: Đang TẮT');
    }
  });
  allLabels.forEach(lbl => {
    lbl.textContent = next ? 'BẬT' : 'TẮT';
  });

  showToast(next ? 'Đã BẬT tự chuyển câu' : 'Đã TẮT tự chuyển câu');
};

window.triggerQuizAutoAdvance = function(moduleId, questionId, isDokkai = false) {
  let questions = [];
  if (isDokkai) {
    const dokkai = (typeof dokkaiData !== 'undefined' && Array.isArray(dokkaiData)) 
      ? dokkaiData.find(d => d.id === moduleId) 
      : null;
    if (dokkai) questions = dokkai.questions || [];
  } else {
    questions = (typeof practiceQuizData !== 'undefined') ? (practiceQuizData[moduleId] || []) : [];
  }

  if (!Array.isArray(questions) || questions.length === 0) return;

  const currentIdx = questions.findIndex(q => q.id === questionId);
  if (currentIdx === -1) return;

  const state = isDokkai ? getDokkaiState(moduleId) : getPracticeQuizState(moduleId);
  if (state && state.submitted) return;

  const selections = (state && state.selections) || {};

  let nextTargetQuestion = null;

  if (currentIdx + 1 < questions.length) {
    const nextQ = questions[currentIdx + 1];
    if (selections[nextQ.id] === undefined) {
      nextTargetQuestion = nextQ;
    } else {

      for (let i = currentIdx + 2; i < questions.length; i++) {
        if (selections[questions[i].id] === undefined) {
          nextTargetQuestion = questions[i];
          break;
        }
      }
    }
  }

  if (!nextTargetQuestion) {
    for (let i = 0; i < currentIdx; i++) {
      if (selections[questions[i].id] === undefined) {
        nextTargetQuestion = questions[i];
        break;
      }
    }
  }

  if (nextTargetQuestion) {
    window.scrollToQuestion(nextTargetQuestion.id);
  } else {
    const submitSection = document.getElementById('quiz-bottom-panel') || document.getElementById('quiz-submit-section');
    if (submitSection && submitSection.scrollIntoView) {
      submitSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('Bạn đã chọn đủ tất cả câu hỏi! Hãy nhấn Nộp Bài để xem kết quả.');
    }
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
    card.classList.add('card-just-answered');
    setTimeout(() => {
      if (card) card.classList.remove('card-just-answered');
    }, 400);
  }

  if (!isDokkai) {
    const palBtn = document.getElementById(`palette-btn-${questionId}`);
    if (palBtn) {
      palBtn.classList.add('answered');
    }
  }

  updateSubmitBarProgress(moduleId, isDokkai);

  if (quizAutoAdvanceTimeout) {
    clearTimeout(quizAutoAdvanceTimeout);
    quizAutoAdvanceTimeout = null;
  }

  if (typeof window.isQuizAutoAdvanceEnabled === 'function' && window.isQuizAutoAdvanceEnabled()) {
    quizAutoAdvanceTimeout = setTimeout(() => {
      if (typeof window.triggerQuizAutoAdvance === 'function') {
        window.triggerQuizAutoAdvance(moduleId, questionId, isDokkai);
      }
    }, 350);
  }
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
  if (typeof removeQuizMiniTimerWidget === 'function') {
    removeQuizMiniTimerWidget();
  }
  const topActions = document.getElementById('quizTopBarActions');
  if (topActions) topActions.style.display = 'none';

  let correctCount = 0;
  const totalCount = quizList.length;

  quizList.forEach(q => {
    const selectedIdx = selections[q.id];
    const isCorrect = (selectedIdx !== undefined && selectedIdx === q.correctIdx);
    if (isCorrect) {
      correctCount++;
    } else if (typeof NotebookEngine !== 'undefined' && typeof NotebookEngine.recordMistake === 'function') {
      NotebookEngine.recordMistake({
        id: `${quizId}_${q.id}`,
        question: q.question,
        correctAnswer: Array.isArray(q.options) ? q.options[q.correctIdx] : String(q.correctIdx),
        userAnswer: (selectedIdx !== undefined && Array.isArray(q.options)) ? q.options[selectedIdx] : '',
        category: 'quiz',
        lessonId: quizId,
        options: q.options || []
      });
    }

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
    if (isCorrect) {
      correctCount++;
    } else if (typeof NotebookEngine !== 'undefined' && typeof NotebookEngine.recordMistake === 'function') {
      NotebookEngine.recordMistake({
        id: `${quizId}_${q.id}`,
        question: q.question,
        correctAnswer: Array.isArray(q.options) ? q.options[q.correctIdx] : String(q.correctIdx),
        userAnswer: (selectedIdx !== undefined && Array.isArray(q.options)) ? q.options[selectedIdx] : '',
        category: 'quiz',
        lessonId: quizId,
        options: q.options || []
      });
    }

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
    'Bạn có chắc muốn làm lại bộ câu hỏi trắc nghiệm này không?\nToàn bộ đáp án đã chọn sẽ được xóa để bạn làm lại từ đầu.',
    () => {
      const wrapper = document.querySelector ? document.querySelector('.quiz-wrapper') : null;
      if (wrapper && wrapper.classList) wrapper.classList.add('quiz-fade-reset');
      if (typeof removeQuizMiniTimerWidget === 'function') {
        removeQuizMiniTimerWidget();
      }

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
      if (typeof removeQuizMiniTimerWidget === 'function') {
        removeQuizMiniTimerWidget();
      }

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

// ZONE 10: SCROLL MEMORY, MODULE ROUTER (switchModule), THEME, COVER PAGE & MODALS

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

  if (typeof SEARCH_INDEX !== 'undefined' && Array.isArray(SEARCH_INDEX)) {
    const loadedLessonIds = new Set((Array.isArray(lessonsData) ? lessonsData : []).map(l => l.id));
    SEARCH_INDEX.forEach(([type, lessonId, text1, text2, meaning]) => {
      if (loadedLessonIds.has(lessonId)) return;
      const lessonNum = lessonId.replace('bai-', '');
      if (type === 'v') {
        const matchMean = normalizeSearch(meaning).includes(query);
        const matchHira = text2.toLowerCase().includes(raw);
        const matchKanji = text1.toLowerCase().includes(raw);
        if (matchMean || matchHira || matchKanji) {
          const displayTitle = text1 ? `${text1} (${text2})` : text2;
          results.push({ category: "Từ Vựng", title: displayTitle, sub: `${meaning} • Bài ${lessonNum}`, targetId: lessonId, highlight: raw });
        }
      } else if (type === 'g') {
        if (normalizeSearch(text1).includes(query) || normalizeSearch(meaning).includes(query)) {
          results.push({ category: "Ngữ Pháp", title: text1, sub: `${meaning.slice(0, 45)}... • Bài ${lessonNum}`, targetId: lessonId, highlight: raw });
        }
      }
    });
  }

  return results;
}

function initQuickSearch() {
  const container = document.getElementById('header-search-container');
  const input = document.getElementById('quick-search-input');
  const dropdown = document.getElementById('search-dropdown');
  const list = document.getElementById('search-results-list');
  const label = document.getElementById('search-count-label');
  const clearBtn = document.getElementById('search-clear-btn');
  const voiceBtn = document.getElementById('search-voice-btn');
  const hwBtn = document.getElementById('search-dropdown-hw-btn');
  if (!input || !dropdown || !list) return;

  let headerSpeechRecognition = null;
  let isHeaderVoiceListening = false;
  let headerSilenceTimer = null;

  const resetHeaderSilenceTimer = () => {
    if (headerSilenceTimer) clearTimeout(headerSilenceTimer);
    headerSilenceTimer = setTimeout(() => {
      stopHeaderVoiceSearch();
    }, 5000);
  };

  const stopHeaderVoiceSearch = () => {
    isHeaderVoiceListening = false;
    if (headerSilenceTimer) {
      clearTimeout(headerSilenceTimer);
      headerSilenceTimer = null;
    }
    if (voiceBtn) {
      voiceBtn.classList.remove('listening');
      voiceBtn.title = 'Tra cứu bằng giọng nói (Tiếng Nhật / Tiếng Việt)';
    }
    if (headerSpeechRecognition) {
      try {
        headerSpeechRecognition.onend = null;
        headerSpeechRecognition.onerror = null;
        headerSpeechRecognition.onresult = null;
        headerSpeechRecognition.stop();
      } catch (err) {}
      headerSpeechRecognition = null;
    }
  };

  const startHeaderVoiceSearch = () => {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      alert('Trình duyệt của bạn chưa hỗ trợ Web Speech API. Bạn có thể sử dụng biểu tượng Micro trên bàn phím ảo hoặc trình duyệt Chrome/Edge.');
      return;
    }

    stopHeaderVoiceSearch();

    try {
      headerSpeechRecognition = new SpeechRec();
      headerSpeechRecognition.lang = 'ja-JP';
      headerSpeechRecognition.continuous = true;
      headerSpeechRecognition.interimResults = true;
      headerSpeechRecognition.maxAlternatives = 3;

      isHeaderVoiceListening = true;
      if (voiceBtn) {
        voiceBtn.classList.add('listening');
        voiceBtn.title = 'Đang lắng nghe... Bấm để dừng';
      }

      if (container && window.innerWidth <= 768) {
        container.classList.add('mobile-active');
      }

      headerSpeechRecognition.onresult = (event) => {
        resetHeaderSilenceTimer();
        let interim = '';
        let final = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const item = event.results[i];
          if (item.isFinal) {
            final += item[0].transcript;
          } else {
            interim += item[0].transcript;
          }
        }
        const text = (final || interim).trim();
        if (text) {
          input.value = text;
          if (clearBtn) clearBtn.style.display = 'inline-flex';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      };

      headerSpeechRecognition.onerror = (event) => {
        console.warn('[HeaderVoiceSearch] Lỗi nhận diện:', event.error);
        if (event.error === 'no-speech') {
          return;
        }
        stopHeaderVoiceSearch();
      };

      headerSpeechRecognition.onend = () => {
        stopHeaderVoiceSearch();
      };

      headerSpeechRecognition.start();
      resetHeaderSilenceTimer();
    } catch (err) {
      console.warn('[HeaderVoiceSearch] Không thể khởi động mic:', err);
      stopHeaderVoiceSearch();
    }
  };

  if (voiceBtn && voiceBtn.addEventListener) {
    voiceBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isHeaderVoiceListening) {
        stopHeaderVoiceSearch();
      } else {
        startHeaderVoiceSearch();
      }
    });
  }

  if (hwBtn && hwBtn.addEventListener) {
    hwBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stopHeaderVoiceSearch();
      dropdown.classList.remove('active');
      if (container) container.classList.remove('mobile-active');
      const curVal = input.value.trim();
      if (typeof openMaziiWithQuery === 'function') {
        openMaziiWithQuery(curVal, 'kanji', true);
      } else if (typeof switchModule === 'function') {
        switchModule('mazii-dict');
      }
    });
  }

  if (input.addEventListener) {
    input.addEventListener('focus', () => {
      if (typeof SEARCH_INDEX === 'undefined' && typeof NavigationEngine !== 'undefined') {
        NavigationEngine.loadScriptAsync('data/search_index.js');
      }
      prefetchRemainingDataForSearch();
      if (window.innerWidth <= 768 && container) {
        container.classList.add('mobile-active');
      }

      if (input.value.trim()) {
        dropdown.classList.add('active');
      } else {
        dropdown.classList.remove('active');
      }
    });

    input.addEventListener('blur', () => {
      setTimeout(() => {
        if (!input.value.trim() && container && !dropdown.classList.contains('active')) {
          container.classList.remove('mobile-active');
        }
      }, 200);
    });
  }

  if (clearBtn && clearBtn.addEventListener) {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stopHeaderVoiceSearch();
      input.value = '';
      clearBtn.style.display = 'none';
      dropdown.classList.remove('active');
      list.innerHTML = '';
      if (label) label.textContent = 'Nhập từ khóa để tra cứu';
      input.focus();
    });
  }

  let searchTimer = null;
  let selectedIndex = -1;
  let searchRequestId = 0;

  const triggerSearchAutoTranslate = (queryText, reqId) => {
    if (typeof DictionaryEngine === 'undefined' || typeof DictionaryEngine.translateText !== 'function') {
      return;
    }
    DictionaryEngine.translateText(queryText).then(trans => {
      if (reqId !== searchRequestId) return;
      if (!trans || !trans.translated) return;

      const safeQuery = queryText.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const meanEl = list.querySelector(`.search-dict-auto-mean[data-query="${safeQuery}"]`);
      if (meanEl) {
        let meanHtml = `<span class="search-dict-trans-result" style="color:var(--accent-primary, #ff5a36);font-weight:600;font-size:13.5px;">${escapeHtml(trans.translated)}</span>`;
        if (trans.transliteration) {
          meanHtml += `<div style="font-size:11.5px;color:var(--text-muted);margin-top:2px;">Phiên âm: ${escapeHtml(trans.transliteration)}</div>`;
        }
        meanEl.innerHTML = meanHtml;

        const card = meanEl.closest('.search-dict-card');
        if (card) {
          const audioBtn = card.querySelector('.search-dict-audio-btn');
          if (audioBtn) {
            // Luôn ưu tiên phát âm tiếng Nhật chuẩn (nếu dịch sang Nhật thì phát câu dịch, nếu dịch sang Việt thì phát câu gốc)
            const isJapaneseTarget = trans.targetLang === 'ja';
            const speakWord = isJapaneseTarget ? trans.translated : trans.original;
            audioBtn.setAttribute('data-speak-word', speakWord);
            audioBtn.setAttribute('data-speak-lang', 'ja');
            audioBtn.setAttribute('title', `Phát âm tiếng Nhật: ${speakWord}`);
            audioBtn.style.display = 'inline-flex';
          }
        }
      }
    }).catch(err => {
      if (reqId !== searchRequestId) return;
      const safeQuery = queryText.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const meanEl = list.querySelector(`.search-dict-auto-mean[data-query="${safeQuery}"]`);
      if (meanEl) {
        meanEl.innerHTML = `<span style="color:var(--text-muted);font-size:12px;">Tra cứu nghĩa đầy đủ, chữ Hán &amp; ngữ pháp trực tuyến</span>`;
      }
    });
  };

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

      const audioBtn = e.target.closest ? e.target.closest('.search-dict-audio-btn') : null;
      if (audioBtn) {
        e.stopPropagation();
        const wordToSpeak = audioBtn.getAttribute('data-speak-word');
        const speakLang = audioBtn.getAttribute('data-speak-lang');
        if (speakLang === 'vi') {
          if (typeof window !== 'undefined' && window.speechSynthesis) {
            try {
              window.speechSynthesis.cancel();
              const u = new SpeechSynthesisUtterance(wordToSpeak);
              u.lang = 'vi-VN';
              window.speechSynthesis.speak(u);
            } catch (err) {
              console.warn('[Search] TTS Vi error:', err);
            }
          }
        } else if (wordToSpeak && typeof speakJapanese === 'function') {
          speakJapanese(wordToSpeak, audioBtn, e);
        }
        return;
      }

      const dictOpenBtn = e.target.closest ? e.target.closest('.search-dict-open-btn') : null;
      const dictCard = e.target.closest ? e.target.closest('.search-dict-card') : null;
      if (dictOpenBtn || dictCard) {
        const query = (dictOpenBtn && dictOpenBtn.getAttribute('data-mazii-query'))
          || (dictCard && dictCard.getAttribute('data-dict-word'))
          || input.value.trim();
        dropdown.classList.remove('active');
        if (container) container.classList.remove('mobile-active');
        if (typeof openMaziiWithQuery === 'function') {
          openMaziiWithQuery(query);
        } else {
          switchModule('mazii-dict');
        }
        return;
      }

      const item = e.target.closest ? e.target.closest('.search-result-item') : null;
      if (!item) return;

      const maziiQuery = item.getAttribute('data-mazii-query');
      if (maziiQuery) {
        dropdown.classList.remove('active');
        if (container) container.classList.remove('mobile-active');
        if (typeof openMaziiWithQuery === 'function') {
          openMaziiWithQuery(maziiQuery);
        } else {
          switchModule('mazii-dict');
        }
        return;
      }

      const targetId = item.getAttribute('data-target');
      const highlight = decodeURIComponent(item.getAttribute('data-highlight') || '');
      if (container) container.classList.remove('mobile-active');
      handleSearchClick(targetId, highlight);
    });
  }

  if (input.addEventListener) {
    input.addEventListener('input', (e) => {
      clearTimeout(searchTimer);
      const val = e.target.value.trim();
      selectedIndex = -1;

      if (clearBtn) {
        clearBtn.style.display = val ? 'inline-flex' : 'none';
      }

      if (!val) {
        dropdown.classList.remove('active');
        list.innerHTML = '';
        if (label) label.textContent = 'Nhập từ khóa để tra cứu';
        return;
      }

      searchTimer = setTimeout(() => {
        const currentReqId = ++searchRequestId;

        let dictWords = [];
        let dictKanjis = [];
        if (typeof searchInternalDictionary === 'function') {
          const dictRes = searchInternalDictionary(val, 'word');
          if (dictRes && Array.isArray(dictRes.data)) {
            dictWords = dictRes.data.slice(0, 3);
          }
          const kanjiRes = searchInternalDictionary(val, 'kanji');
          if (kanjiRes && Array.isArray(kanjiRes.data)) {
            dictKanjis = kanjiRes.data.slice(0, 2);
          }
        }

        const lessonResults = searchEverything(val);

        dropdown.classList.add('active');

        const isPhraseOrSentence = /\s+/.test(val) || val.length >= 8;
        let needAutoTranslate = false;

        const totalMatches = dictWords.length + dictKanjis.length + lessonResults.length + (isPhraseOrSentence ? 1 : 0);
        if (label) {
          label.textContent = totalMatches > 0
            ? `Tìm thấy ${totalMatches} kết quả cho "${val}":`
            : `Kết quả cho "${val}":`;
        }

        let html = '';

        html += `
          <div class="search-section-divider">
            <div class="search-section-title">
              <span class="search-section-icon">${APP_ICONS.book || '📖'}</span>
              <span>Tra Cứu Từ Điển Nhật - Việt</span>
            </div>
          </div>
        `;

        // Nếu là cụm từ hoặc câu văn (có khoảng trắng hoặc dài >= 8 ký tự): Luôn đưa thẻ dịch tự động lên đầu tiên
        if (isPhraseOrSentence) {
          needAutoTranslate = true;
          html += `
            <div class="search-dict-card" data-dict-word="${escapeHtml(val)}">
              <div class="search-dict-main-row">
                <div class="search-dict-term-wrap">
                  <span class="search-dict-term">${escapeHtml(val)}</span>
                </div>
                <div class="search-dict-actions">
                  <button type="button" class="search-dict-audio-btn" data-speak-word="" title="Phát âm" aria-label="Phát âm" style="display:none;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  </button>
                  <button type="button" class="search-dict-open-btn" data-mazii-query="${escapeHtml(val)}" title="Xem chi tiết &amp; nét viết trong Từ điển">Mở từ điển →</button>
                </div>
              </div>
              <div class="search-dict-mean-row search-dict-auto-mean" data-query="${escapeHtml(val)}">
                <span style="color:var(--text-muted);font-style:italic;">Đang dịch...</span>
              </div>
            </div>
          `;
        }

        if (dictWords.length > 0 || dictKanjis.length > 0) {
          dictWords.forEach(dw => {
            const primaryMean = (dw.means && dw.means[0] && dw.means[0].mean) || '';
            const kindTag = (dw.means && dw.means[0] && dw.means[0].kind && dw.means[0].kind !== 'Từ vựng') ? `[${dw.means[0].kind}] ` : '';
            html += `
              <div class="search-dict-card" data-dict-word="${escapeHtml(dw.word)}">
                <div class="search-dict-main-row">
                  <div class="search-dict-term-wrap">
                    <span class="search-dict-term">${escapeHtml(dw.word)}</span>
                    ${dw.phonetic && dw.phonetic !== dw.word ? `<span class="search-dict-phonetic">${escapeHtml(dw.phonetic)}</span>` : ''}
                    ${dw.han ? `<span class="search-dict-han">[${escapeHtml(dw.han)}]</span>` : ''}
                  </div>
                  <div class="search-dict-actions">
                    <button type="button" class="search-dict-audio-btn" data-speak-word="${escapeHtml(dw.word)}" title="Phát âm tiếng Nhật" aria-label="Phát âm">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                    </button>
                    <button type="button" class="search-dict-open-btn" data-mazii-query="${escapeHtml(dw.word)}" title="Xem chi tiết &amp; nét viết trong Từ điển">Mở từ điển →</button>
                  </div>
                </div>
                ${primaryMean ? `<div class="search-dict-mean-row">${escapeHtml(kindTag + primaryMean)}</div>` : ''}
              </div>
            `;
          });

          dictKanjis.forEach(dk => {
            html += `
              <div class="search-dict-card" data-dict-word="${escapeHtml(dk.kanji)}">
                <div class="search-dict-main-row">
                  <div class="search-dict-term-wrap">
                    <span class="search-dict-term" style="color:var(--accent-primary);font-size:18px;">${escapeHtml(dk.kanji)}</span>
                    <span class="search-dict-han">Hán-Việt: ${escapeHtml(dk.mean || '')}</span>
                    ${dk.on ? `<span class="search-dict-phonetic">Âm On: ${escapeHtml(dk.on)}</span>` : ''}
                  </div>
                  <div class="search-dict-actions">
                    <button type="button" class="search-dict-audio-btn" data-speak-word="${escapeHtml(dk.kanji)}" title="Phát âm tiếng Nhật" aria-label="Phát âm">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                    </button>
                    <button type="button" class="search-dict-open-btn" data-mazii-query="${escapeHtml(dk.kanji)}" title="Xem cách viết Hán tự trong Từ điển">Nét viết →</button>
                  </div>
                </div>
              </div>
            `;
          });
        } else if (!isPhraseOrSentence) {
          // Từ đơn lẻ không có trong từ điển nội bộ: kích hoạt dịch tự động cho từ đơn
          needAutoTranslate = true;
          html += `
            <div class="search-dict-card" data-dict-word="${escapeHtml(val)}">
              <div class="search-dict-main-row">
                <div class="search-dict-term-wrap">
                  <span class="search-dict-term">${escapeHtml(val)}</span>
                </div>
                <div class="search-dict-actions">
                  <button type="button" class="search-dict-audio-btn" data-speak-word="" title="Phát âm" aria-label="Phát âm" style="display:none;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  </button>
                  <button type="button" class="search-dict-open-btn" data-mazii-query="${escapeHtml(val)}" title="Xem chi tiết &amp; nét viết trong Từ điển">Mở từ điển →</button>
                </div>
              </div>
              <div class="search-dict-mean-row search-dict-auto-mean" data-query="${escapeHtml(val)}">
                <span style="color:var(--text-muted);font-style:italic;">Đang dịch...</span>
              </div>
            </div>
          `;
        }

        if (lessonResults.length > 0) {
          html += `
            <div class="search-section-divider">
              <div class="search-section-title">
                <span class="search-section-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                <span>Bài Học &amp; Ngữ Pháp Liên Quan (${lessonResults.length})</span>
              </div>
            </div>
          `;

          html += lessonResults.slice(0, 15).map((r, idx) => `
            <div class="search-result-item" data-index="${idx}" data-target="${escapeHtml(r.targetId)}" data-highlight="${encodeURIComponent(r.highlight || '')}">
              <div class="search-item-left">
                <div class="search-item-main">${escapeHtml(r.title)}</div>
                <div class="search-item-sub">${escapeHtml(r.sub)}</div>
              </div>
              <span class="search-badge">${escapeHtml(r.category)}</span>
            </div>
          `).join('');
        } else {
          html += `
            <div class="search-empty-sub">Không có bài học giáo trình nào chứa "${escapeHtml(val)}"</div>
          `;
        }

        list.innerHTML = html;

        if (needAutoTranslate) {
          triggerSearchAutoTranslate(val, currentReqId);
        }
      }, 120);
    });

    input.addEventListener('keydown', (e) => {
      const items = list.querySelectorAll ? list.querySelectorAll('.search-result-item, .search-dict-card') : [];
      if (!dropdown.classList.contains('active') || items.length === 0) {
        if (e.key === 'Enter') {
          const rawVal = input.value.trim();
          if (rawVal) {
            e.preventDefault();
            dropdown.classList.remove('active');
            if (container) container.classList.remove('mobile-active');
            if (typeof openMaziiWithQuery === 'function') {
              openMaziiWithQuery(rawVal);
            }
          }
        }
        return;
      }

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
        } else {
          const rawVal = input.value.trim();
          if (rawVal) {
            dropdown.classList.remove('active');
            if (container) container.classList.remove('mobile-active');
            if (typeof openMaziiWithQuery === 'function') {
              openMaziiWithQuery(rawVal);
            }
          }
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
        stopHeaderVoiceSearch();
        dropdown.classList.remove('active');
        if (container) container.classList.remove('mobile-active');
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target && e.target.closest && !e.target.closest('.header-search-container')) {
        stopHeaderVoiceSearch();
        dropdown.classList.remove('active');
        if (container && (!input.value.trim() || window.innerWidth > 768)) {
          container.classList.remove('mobile-active');
        }
      }
    });
  }
}

window.handleSearchClick = function(targetId, highlightText = '') {
  const dropdown = document.getElementById('search-dropdown');
  const input = document.getElementById('quick-search-input');
  const container = document.getElementById('header-search-container');
  const clearBtn = document.getElementById('search-clear-btn');
  if (dropdown) dropdown.classList.remove('active');
  if (container) container.classList.remove('mobile-active');
  if (clearBtn) clearBtn.style.display = 'none';
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

let mobileNavPillStep = 0;
let lastMobileNavInteraction = 0;
let mobileNavNavigationTimer = null;
let mobileNavNavigationToken = 0;
const MOBILE_NAV_TRANSITION = 'transform 0.14s cubic-bezier(0.22, 1, 0.36, 1)';

function setMobileNavVisualIndex(idx, animate = true) {
  const nav = document.getElementById('mobile-bottom-nav');
  if (!nav || idx < 0 || idx > 4) return;
  const oldIndex = nav.getAttribute ? nav.getAttribute('data-active-index') : null;
  if (oldIndex === String(idx)) return;
  nav.setAttribute('data-active-index', String(idx));
  if (nav.style && nav.style.setProperty) nav.style.setProperty('--slider-index', idx);
  const items = nav.querySelectorAll ? nav.querySelectorAll('.mobile-nav-item') : [];
  if (items && items.forEach) items.forEach((btn, i) => btn.classList.toggle('active', i === idx));
  const pill = document.getElementById('mobile-nav-slider-pill');
  if (pill && pill.style) {
    pill.style.transition = animate ? MOBILE_NAV_TRANSITION : 'none';
    if (mobileNavPillStep && pill.style.setProperty) {
      pill.style.setProperty('--pill-x', `${idx * mobileNavPillStep}px`);
    }
  }
}

function syncMobileBottomNav(activeId) {
  const id = String(activeId || currentActiveId || 'bai-1');
  const isExamRunner = id.startsWith('exam-') || id.startsWith('de-thi') || id === 'exam/runner';
  const nav = document.getElementById('mobile-bottom-nav');

  if (typeof document !== 'undefined' && document.body) {
    document.body.classList.toggle('exam-mode-active', isExamRunner);
  }

  if (isExamRunner) {
    if (nav && nav.style) nav.style.display = 'none';
    return;
  } else {
    if (nav && nav.style && nav.style.display === 'none') {
      nav.style.display = '';
    }
  }

  const num = extractLessonNumber(id) || lastLessonNumber || 1;

  const lessonLabel = document.getElementById('mnav-label-lesson');
  const kanjiLabel = document.getElementById('mnav-label-kanji');
  const quizLabel = document.getElementById('mnav-label-quiz');
  const dokkaiLabel = document.getElementById('mnav-label-dokkai');
  const examLabel = document.getElementById('mnav-label-exam');
  const radicalsLabel = document.getElementById('mnav-label-radicals');
  if (lessonLabel) lessonLabel.textContent = `Bài ${num}`;
  if (kanjiLabel) kanjiLabel.textContent = `Kanji ${num}`;
  if (quizLabel) quizLabel.textContent = `Đề ${num}`;
  if (dokkaiLabel) dokkaiLabel.textContent = `Đọc ${num}`;
  if (examLabel) examLabel.textContent = `Thi JLPT`;
  if (radicalsLabel) radicalsLabel.textContent = `Bộ Thủ`;

  let activeIndex = 0;
  if (id.startsWith('kanji-')) activeIndex = 1;
  else if (id.startsWith('quiz-')) activeIndex = 2;
  else if (id.startsWith('dokkai-')) activeIndex = 3;
  else if (id === 'exam' || id.startsWith('exam-') || id.startsWith('de-thi') || id.startsWith('radicals-')) activeIndex = 4;

  setMobileNavVisualIndex(activeIndex);
  if (!mobileNavPillStep) updateMobileNavSlider(false);
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
      const width = nav.clientWidth || 0;
      if (width > 0 && nav.setAttribute) {
        mobileNavPillStep = width / 5;
        nav.setAttribute('data-motion-ready', 'true');
      }
      if (mobileNavPillStep && pill.style.setProperty) {
        pill.style.setProperty('--pill-x', `${idx * mobileNavPillStep}px`);
      }
      pill.style.transition = animate ? MOBILE_NAV_TRANSITION : 'none';
    }
  }
}

function initMobileBottomNavSliderTouch() {
  const nav = document.getElementById('mobile-bottom-nav');
  if (!nav || !nav.addEventListener) return;

  const navTypes = ['lesson', 'kanji', 'quiz', 'dokkai', 'exam'];
  let isDragging = false;
  let lastHoveredIndex = -1;
  let startIndex = -1;
  let touchNavRect = null;

  const getIndexFromTouch = (touch) => {
    if (!touch) return -1;
    const rect = touchNavRect || nav.getBoundingClientRect();
    if (!rect || rect.width <= 0) return -1;
    const relativeX = touch.clientX - rect.left;
    if (relativeX < 0 || relativeX > rect.width) return -1;
    const tabWidth = rect.width / 5;
    const idx = Math.floor(relativeX / tabWidth);
    return Math.max(0, Math.min(4, idx));
  };

  const previewPillAtIndex = (idx, animate = true) => {
    if (idx < 0 || idx > 4) return;
    setMobileNavVisualIndex(idx, animate);
  };

  nav.addEventListener('touchstart', (e) => {
    if (!e.touches || e.touches.length === 0) return;
    lastMobileNavInteraction = Date.now();
    touchNavRect = nav.getBoundingClientRect();
    const idx = getIndexFromTouch(e.touches[0]);
    if (idx >= 0) {
      isDragging = true;
      startIndex = idx;
      lastHoveredIndex = idx;
      previewPillAtIndex(idx, false);
    }
  }, { passive: true });

  nav.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || e.touches.length === 0) return;
    lastMobileNavInteraction = Date.now();
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
    touchNavRect = null;
    if (lastHoveredIndex >= 0 && lastHoveredIndex < navTypes.length && lastHoveredIndex !== startIndex) {
      const targetType = navTypes[lastHoveredIndex];
      e.preventDefault();
      if (typeof handleMobileBottomNav === 'function') {
        handleMobileBottomNav(targetType);
      }
    }
    startIndex = -1;
    if (typeof triggerHaptic === 'function') triggerHaptic(14);
  }, { passive: false });

  nav.addEventListener('touchcancel', () => {
    isDragging = false;
    touchNavRect = null;
    startIndex = -1;
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
  let targetId = null;
  if (targetType === 'lesson') {
    targetId = `bai-${num}`;
  } else if (targetType === 'kanji') {
    targetId = `kanji-${num}`;
  } else if (targetType === 'quiz') {
    targetId = `quiz-${num}`;
  } else if (targetType === 'dokkai') {
    targetId = `dokkai-${num}`;
  } else if (targetType === 'radicals') {
    targetId = lastRadicalId || 'radicals-1';
  } else if (targetType === 'exam') {
    targetId = 'exam';
  }
  if (!targetId) return;

  lastMobileNavInteraction = Date.now();
  ++moduleNavigationToken;
  syncMobileBottomNav(targetId);
  closeMobileSidebar();
  clearTimeout(mobileNavNavigationTimer);
  const navigationToken = ++mobileNavNavigationToken;
  const reduceMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  mobileNavNavigationTimer = setTimeout(() => {
    if (navigationToken !== mobileNavNavigationToken) return;
    mobileNavNavigationTimer = null;
    switchModule(targetId);
  }, reduceMotion ? 0 : 150);
};



const STORAGE_SCROLL_POSITIONS_KEY = 'minna_module_scroll_pos';
const moduleScrollPositions = {};
let isRestoringScroll = false;
let scrollRestoreRafId = null;
let scrollRestoreTimeouts = [];
let scrollRestoreOriginalBehavior = null;

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

function cancelScrollRestoration() {
  if (scrollRestoreRafId) {
    if (typeof cancelAnimationFrame === 'function') cancelAnimationFrame(scrollRestoreRafId);
    scrollRestoreRafId = null;
  }
  if (Array.isArray(scrollRestoreTimeouts)) {
    scrollRestoreTimeouts.forEach(t => clearTimeout(t));
  }
  scrollRestoreTimeouts = [];
  if (scrollRestoreOriginalBehavior !== null) {
    const main = document.getElementById('main-content');
    if (main && main.style) main.style.scrollBehavior = scrollRestoreOriginalBehavior;
    scrollRestoreOriginalBehavior = null;
  }
  isRestoringScroll = false;
}

function restoreScrollPosition(targetScroll) {
  const scrollVal = Math.max(0, Math.round(targetScroll || 0));
  cancelScrollRestoration();

  isRestoringScroll = true;

  const scrollContainer = document.getElementById('main-content');
  if (scrollContainer && scrollContainer.style) {
    if (scrollRestoreOriginalBehavior === null) {
      scrollRestoreOriginalBehavior = scrollContainer.style.scrollBehavior;
    }
    scrollContainer.style.scrollBehavior = 'auto';
  }

  const applyPos = () => {
    const main = scrollContainer;
    if (main) {
      main.scrollTop = scrollVal;
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

  applyPos();

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
    if (scrollContainer && scrollContainer.style && scrollRestoreOriginalBehavior !== null) {
      scrollContainer.style.scrollBehavior = scrollRestoreOriginalBehavior;
      scrollRestoreOriginalBehavior = null;
    }
    isRestoringScroll = false;
  }, 260);

  scrollRestoreTimeouts.push(t1, t2, t3);
}

window.switchModule = function(targetId, updateHash = true) {
  if (!targetId) return;
  clearTimeout(mobileNavNavigationTimer);
  mobileNavNavigationTimer = null;
  ++mobileNavNavigationToken;
  const navigationToken = ++moduleNavigationToken;
  pendingModuleId = targetId;

  if (currentActiveId && currentActiveId !== targetId) {
    const mainContent = document.getElementById('main-content');
    const curScroll = mainContent ? mainContent.scrollTop : (window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0);
    saveModuleScroll(currentActiveId, curScroll);
  }

  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
  if (typeof removeQuizMiniTimerWidget === 'function') {
    removeQuizMiniTimerWidget();
  }
  const topActions = document.getElementById('quizTopBarActions');
  if (topActions) topActions.style.display = 'none';

  if (window.ExamEngine && window.ExamEngine.state && window.ExamEngine.state.activeExamCode) {
    const activeExam = window.ExamEngine.state.activeExamCode;
    const isSubmitted = window.ExamEngine.state.submittedExams && window.ExamEngine.state.submittedExams[activeExam];
    const cleanTarget = String(targetId).toLowerCase().replace(/^exam-/, '').replace(/^de-thi-/, '');
    const isSameExam = cleanTarget === activeExam.toLowerCase();
    if (!isSubmitted && !isSameExam) {
      if (typeof window.ExamEngine.autoSubmitOnExit === 'function') {
        window.ExamEngine.autoSubmitOnExit(activeExam, 'user_exit_internal_nav');
      }
    }
  }

  const isExamRunnerTarget = (String(targetId).startsWith('exam-') || String(targetId).startsWith('de-thi-') || String(targetId).includes('/'));
  if (!isExamRunnerTarget) {
    if (window.ExamEngine && typeof window.ExamEngine.cleanup === 'function') {
      window.ExamEngine.cleanup();
    }
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
      const bid = b.getAttribute('data-id');
      const isTarget = (bid === targetId) ||
        (targetId === 'master-hub' && bid === 'conjugation-lab') ||
        (targetId === 'streak-zen' && bid === 'analytics-hub');
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

  if (!isModuleDataReady(targetId)) {
    renderLazyLoader(targetId);
    ensureModuleDataLoaded(targetId).then(() => {
      if (navigationToken !== moduleNavigationToken) return;
      renderContent(targetId);
      updateHeaderProgress();
    }).catch(err => {
      if (navigationToken !== moduleNavigationToken) return;
      console.warn('[LazyLoader] Lỗi chuyển module:', targetId, err);
      renderContent(targetId);
    });
    return;
  }

  renderContent(targetId);
};

if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
  const handleExamBrowserNav = (newHash) => {
    if (window.ExamEngine && window.ExamEngine.state && window.ExamEngine.state.activeExamCode) {
      const activeExam = window.ExamEngine.state.activeExamCode;
      const isSubmitted = window.ExamEngine.state.submittedExams && window.ExamEngine.state.submittedExams[activeExam];
      const cleanTarget = String(newHash || '').toLowerCase().replace(/^exam-/, '').replace(/^de-thi-/, '');
      const isSameExam = cleanTarget === activeExam.toLowerCase();
      if (!isSubmitted && !isSameExam) {
        if (typeof window.ExamEngine.autoSubmitOnExit === 'function') {
          window.ExamEngine.autoSubmitOnExit(activeExam, 'browser_nav_back_forward');
        }
      }
    }
  };

  window.addEventListener('hashchange', () => {
    const newHash = (window.location && window.location.hash ? window.location.hash : '').replace('#', '');
    handleExamBrowserNav(newHash);
    if (newHash && newHash !== currentActiveId && newHash !== pendingModuleId) {
      switchModule(newHash, false);
    }
  });

  window.addEventListener('popstate', () => {
    const newHash = (window.location && window.location.hash ? window.location.hash : '').replace('#', '');
    handleExamBrowserNav(newHash);
  });
}


function applyTheme(themeName) {
  if (document.documentElement && document.documentElement.classList) {
    document.documentElement.classList.add('theme-switching');
    document.documentElement.setAttribute('data-theme', themeName);
  }
  safeSetStorage('minna_theme', themeName);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', themeName === 'dark' ? '#070b14' : '#faf8f5');
  }

  const label = document.getElementById('theme-label-text');
  if (label) {
    label.textContent = themeName === 'dark' ? 'Giao diện: Tối (Đêm)' : 'Giao diện: Sáng (Ngày)';
  }

  const sLightBtn = document.getElementById('msheet-theme-light');
  const sDarkBtn = document.getElementById('msheet-theme-dark');
  if (sLightBtn && sDarkBtn) {
    sLightBtn.classList.toggle('active', themeName !== 'dark');
    sDarkBtn.classList.toggle('active', themeName === 'dark');
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
  const saved = safeGetStorage('minna_theme', 'light') || 'light';
  applyTheme(saved);

  const btn = document.getElementById('theme-toggle-btn');
  if (btn && btn.addEventListener) {
    btn.addEventListener('click', (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      const nxt = cur === 'dark' ? 'light' : 'dark';
      applyTheme(nxt);
      showToast(nxt === 'dark' ? 'Đã chuyển sang Giao diện Tối' : 'Đã chuyển sang Giao diện Sáng');
    });
  }
}


function toggleTheme() {
  const cur = (document.documentElement && document.documentElement.getAttribute('data-theme')) || 'light';
  const nxt = cur === 'dark' ? 'light' : 'dark';
  applyTheme(nxt);
  if (typeof showToast === 'function') {
    showToast(nxt === 'dark' ? 'Đã chuyển sang Giao diện Tối' : 'Đã chuyển sang Giao diện Sáng');
  }
}

function toggleFurigana() {
  const isCurrentlyHidden = document.body && document.body.classList.contains('hide-furigana');
  const willHide = !isCurrentlyHidden;
  if (document.body && document.body.classList) {
    document.body.classList.toggle('hide-furigana', willHide);
  }
  safeSetStorage(STORAGE_FURIGANA_KEY, willHide ? 'false' : 'true');
  if (typeof showToast === 'function') {
    showToast(willHide ? "Đã ẩn Furigana (Chạm/rê chuột lên Kanji để xem)" : "Đã bật hiển thị Furigana");
  }
  if (window.ExamEngine && typeof window.ExamEngine.syncFuriganaState === 'function') {
    window.ExamEngine.syncFuriganaState();
  }
}

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

  if (overlay && overlay.addEventListener) {
    const handleOverlayDismiss = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      closeMobileSidebar();
    };
    overlay.addEventListener('click', handleOverlayDismiss);
    overlay.addEventListener('touchstart', handleOverlayDismiss, { passive: false });
    overlay.addEventListener('touchend', handleOverlayDismiss, { passive: false });
  }

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

  window.enterApp(targetHash);
};

window.enterAppAt = function(targetHash, el, label) {
  window.enterApp(targetHash);
};

window.returnToCoverPage = function() {
  try {
    sessionStorage.removeItem('minna_cover_closed');
  } catch (e) {}
  const cover = document.getElementById('cover-page-slide');
  if (cover) {
    cover.style.display = 'flex';
    cover.style.pointerEvents = 'auto';
    cover.style.opacity = '1';
    cover.classList.remove('hide-cover');
    cover.scrollTop = 0;
  }
  try {
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } else {
      window.location.hash = '';
    }
  } catch (e) {}
};

function initCoverPage() {
  const cover = document.getElementById('cover-page-slide');
  const btnEnter = document.getElementById('btn-enter-app');
  const coverThemeBtn = document.getElementById('cover-theme-toggle');

  if (!cover) return;

  let isClosedInSession = false;
  try {
    isClosedInSession = sessionStorage.getItem('minna_cover_closed') === 'true';
  } catch (e) {}

  if (isClosedInSession) {
    cover.classList.add('hide-cover');
    cover.style.display = 'none';
    cover.style.pointerEvents = 'none';
  } else {

    cover.classList.remove('hide-cover');
    cover.style.display = 'flex';
    cover.style.pointerEvents = 'auto';
    cover.style.opacity = '1';

    if (window.location && window.location.hash && window.location.hash.length > 2) {
      selectedCoverTarget = window.location.hash;
    }
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
  let pendingScrollTop = 0;
  let scrollPersistPending = false;

  const handleScroll = (top) => {
    const shouldBeVisible = top > 350;
    if (shouldBeVisible !== isVisible) {
      isVisible = shouldBeVisible;
      btn.classList.toggle('visible', isVisible);
    }
    isTicking = false;
  };

  const scheduleScroll = (top) => {
    pendingScrollTop = top;
    if (!isTicking) {
      isTicking = true;
      safeRAF(() => handleScroll(pendingScrollTop));
    }
  };

  const updateCurrentScroll = (val) => {
    if (currentActiveId && !isRestoringScroll) {
      moduleScrollPositions[currentActiveId] = Math.max(0, Math.round(val || 0));
      if (!scrollPersistPending) {
        scrollPersistPending = true;
        setTimeout(() => {
          scrollPersistPending = false;
          persistScrollPositions();
        }, 160);
      }
    }
  };

  if (mainContent && mainContent.addEventListener) {
    mainContent.addEventListener('scroll', () => {
      const pos = mainContent.scrollTop;
      scheduleScroll(pos);
      updateCurrentScroll(pos);
    }, { passive: true });

    const onUserScrollStart = () => {
      if (isRestoringScroll) cancelScrollRestoration();
    };
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
  const testBtn = document.getElementById('btn-test-voice-sample');

  if (!modal) return;

  const syncCharacterPills = (speakerId) => {
    const curSpeaker = speakerId || 'rotate';
    document.querySelectorAll('#voice-character-selector .device-pill').forEach(btn => {
      const isActive = btn.getAttribute('data-speaker') === curSpeaker;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  };

  const openModal = () => {
    const cfg = getSpeechGenConfig();
    syncCharacterPills(cfg.speaker || 'rotate');
    if (speedSlider) {
      speedSlider.value = cfg.speed || DEFAULT_USER_SPEED;
      if (speedVal) speedVal.textContent = (cfg.speed || DEFAULT_USER_SPEED) + 'x';
    }
    if (pitchSlider) {
      pitchSlider.value = cfg.pitch || DEFAULT_USER_PITCH;
      if (pitchVal) pitchVal.textContent = (cfg.pitch || DEFAULT_USER_PITCH) + 'x';
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

  const getLivePreviewCfg = () => ({
    speed: speedSlider ? parseFloat(speedSlider.value) : DEFAULT_USER_SPEED,
    pitch: pitchSlider ? parseFloat(pitchSlider.value) : DEFAULT_USER_PITCH
  });

  const getActiveSpeaker = () => {
    const activePill = document.querySelector('#voice-character-selector .device-pill.active');
    return activePill ? activePill.getAttribute('data-speaker') : 'rotate';
  };

  const charSelector = document.getElementById('voice-character-selector');
  if (charSelector && charSelector.addEventListener) {
    charSelector.addEventListener('click', (e) => {
      const pill = e.target.closest('.device-pill');
      if (!pill) return;
      const spk = pill.getAttribute('data-speaker');
      syncCharacterPills(spk);
      triggerHaptic(15);
      previewVoiceCharacter(spk, getLivePreviewCfg(), testBtn, e);
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

  if (testBtn && testBtn.addEventListener) {
    testBtn.addEventListener('click', (e) => {
      previewVoiceCharacter(getActiveSpeaker(), getLivePreviewCfg(), testBtn, e);
    });
  }

  if (saveBtn && saveBtn.addEventListener) {
    saveBtn.addEventListener('click', () => {
      const activePill = document.querySelector('#voice-character-selector .device-pill.active');
      const chosenSpeaker = activePill ? activePill.getAttribute('data-speaker') : DIALOGUE_DEFAULT_SPEAKER;
      const newSpeed = speedSlider ? parseFloat(speedSlider.value) : DEFAULT_USER_SPEED;
      const newPitch = pitchSlider ? parseFloat(pitchSlider.value) : DEFAULT_USER_PITCH;

      setSpeechGenConfig({
        speaker: chosenSpeaker,
        speed: newSpeed,
        pitch: newPitch
      });

      closeModal();
      triggerHaptic(20);
      showToast('Đã lưu cài đặt giọng đọc Hội thoại thành công!');
    });
  }
}


/**
 * Nghe thử giọng nhân vật (Phương án 2): ưu tiên mẫu MP3 Studio Neural thật cắt từ Audio Sprite Kaiwa,
 * áp dụng tốc độ thanh trượt theo thời gian thực; fallback sang Web Speech với Tốc độ/Cao độ đang kéo.
 */
function previewVoiceCharacter(speakerId, liveCfg, btn, ev) {
  // Phase 1: Guard & Phase 2: Normalize
  const spk = resolveDialogueSpeakerId(speakerId);
  const cfg = liveCfg || {};
  const sample = (typeof AudioEngine !== 'undefined' && typeof AudioEngine.getVoicePreviewSample === 'function')
    ? AudioEngine.getVoicePreviewSample(spk) : null;
  const fallback = () => speakJapanese(sample ? sample.text : 'こんにちは！今日も一緒に楽しく勉強しましょう。', btn, ev, spk, cfg);
  if (!sample || typeof Audio === 'undefined') return fallback();
  const rate = Math.max(0.6, Math.min(1.6, (cfg.speed || DEFAULT_USER_SPEED) / DEFAULT_USER_SPEED));
  const durationMs = Math.max(300, Math.round(((sample.end - sample.start) / rate) * 1000) + 80);

  // Phase 4: Imperative shell
  stopAllSpeechAudio();
  const sessionId = ++currentAudioSessionId;
  const audio = new Audio(sample.src);
  currentSpeechAudio = audio;
  audio.playbackRate = rate;
  try { audio.currentTime = sample.start; } catch (e) {}
  if (btn && btn.classList) btn.classList.add('is-speaking');
  let stopTimer = null;
  const finish = () => {
    if (stopTimer) { clearTimeout(stopTimer); stopTimer = null; }
    try { audio.pause(); } catch (e) {}
    if (btn && btn.classList) btn.classList.remove('is-speaking');
    if (currentSpeechAudio === audio) currentSpeechAudio = null;
  };
  stopTimer = setTimeout(() => { if (sessionId === currentAudioSessionId) finish(); }, durationMs);
  audio.addEventListener('loadedmetadata', () => { try { audio.currentTime = sample.start; } catch (e) {} });
  audio.addEventListener('timeupdate', () => { if (sessionId !== currentAudioSessionId || audio.currentTime >= sample.end) finish(); });
  audio.addEventListener('ended', finish);
  audio.addEventListener('error', () => { if (sessionId === currentAudioSessionId) { finish(); fallback(); } });
  const p = audio.play();
  if (p && p.catch) p.catch(() => { if (sessionId === currentAudioSessionId) { finish(); fallback(); } });
}
window.previewVoiceCharacter = previewVoiceCharacter;

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

// ZONE 11: IN-LESSON PRACTICE HUB (3D VOCABULARY FLASHCARD + 25 REFLEX QUIZ) & PROGRESSIVE DISCLOSURE

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
  hub.className = 'practice-hub is-collapsed';

  hub.innerHTML = `
    <div class="practice-hub-accordion-bar" role="button" tabindex="0" aria-expanded="false" onclick="toggleLessonPracticeHub(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleLessonPracticeHub(this);}">
      <div class="practice-hub-bar-left">
        <span class="practice-icon-badge accent-amber">${APP_ICONS.bolt}</span>
        <span class="practice-hub-bar-title">Luyện phản xạ nhanh từ vựng bài này</span>
      </div>
      <div class="practice-hub-bar-right">
        <span class="practice-hub-toggle-pill">Bấm để mở</span>
        <span class="practice-hub-arrow" aria-hidden="true">${APP_ICONS.chevronDown || '<svg class="icon-svg accordion-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>'}</span>
      </div>
    </div>
    <div class="practice-hub-body">
    <div class="practice-box">
      <div class="practice-box-header">
        <div class="practice-box-title">
          <span class="practice-icon-badge accent-sky">${APP_ICONS.cards}</span>
          <h4>Flashcard Ghi Nhớ Từ Mới</h4>
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
          <h4>Phản Xạ Chữ Hán & Từ Vựng</h4>
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

    const TARGET_QUIZ_COUNT = 25;
    const half1 = Math.ceil(TARGET_QUIZ_COUNT / 2); // 13 câu
    const half2 = TARGET_QUIZ_COUNT - half1; // 12 câu

    const shuffledPool1 = [...sourcePool].sort(() => Math.random() - 0.5);
    const shuffledPool2 = [...sourcePool].sort(() => Math.random() - 0.5);

    const k2mItems = [];
    for (let i = 0; i < half1; i++) {
      k2mItems.push(shuffledPool1[i % shuffledPool1.length]);
    }

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


window.toggleLessonPracticeHub = function(barEl) {
  const hub = document.getElementById('lesson-practice-hub');
  if (!hub) return;
  const isCollapsed = hub.classList.toggle('is-collapsed');
  const isOpen = !isCollapsed;
  hub.classList.toggle('is-open', isOpen);
  if (barEl && barEl.setAttribute) {
    barEl.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    const pill = barEl.querySelector ? barEl.querySelector('.practice-hub-toggle-pill') : null;
    if (pill) pill.textContent = isOpen ? 'Thu gọn' : 'Bấm để mở';
  }
  triggerHaptic(8);
};

window.toggleGrammarCard = function(gIdx, barEl) {
  const card = document.getElementById(`grammar-card-${gIdx}`);
  if (!card) return;
  const isCollapsed = card.classList.toggle('is-collapsed');
  const isOpen = !isCollapsed;
  card.classList.toggle('is-open', isOpen);
  if (barEl && barEl.setAttribute) {
    barEl.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
  triggerHaptic(8);
};

window.toggleAllGrammarCards = function(btn) {
  const cards = document.querySelectorAll ? document.querySelectorAll('.grammar-item-card') : [];
  if (!cards.length) return;
  const anyCollapsed = Array.from(cards).some(c => c.classList.contains('is-collapsed'));
  cards.forEach(c => {
    c.classList.toggle('is-collapsed', !anyCollapsed);
    c.classList.toggle('is-open', anyCollapsed);
    const bar = c.querySelector ? c.querySelector('.grammar-formula-bar') : null;
    if (bar && bar.setAttribute) bar.setAttribute('aria-expanded', anyCollapsed ? 'true' : 'false');
  });
  if (btn) {
    btn.classList.toggle('is-open', anyCollapsed);
    btn.setAttribute('aria-expanded', anyCollapsed ? 'true' : 'false');
    const icon = anyCollapsed
      ? (APP_ICONS.chevronsUp || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 11 12 6 17 11"></polyline><polyline points="7 18 12 13 17 18"></polyline></svg>')
      : (APP_ICONS.chevronsDown || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>');
    btn.innerHTML = `${icon}<span>${anyCollapsed ? 'Thu gọn tất cả' : 'Mở tất cả'}</span>`;
  }
  triggerHaptic(10);
};

window.toggleKanjiCardDetail = function(itemId, ev) {
  if (ev && ev.target && ev.target.closest && ev.target.closest('.kcard-audio-btn')) {
    return;
  }
  const card = document.getElementById(`kcard-${itemId}`);
  if (!card) return;
  const isCollapsed = card.classList.toggle('is-collapsed');
  const isOpen = !isCollapsed;
  card.classList.toggle('is-open', isOpen);
  const topSec = card.querySelector ? card.querySelector('.kcard-top-section') : null;
  if (topSec && topSec.setAttribute) {
    topSec.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
  triggerHaptic(8);
};

window.toggleAllKanjiCards = function(btn) {
  const cards = document.querySelectorAll ? document.querySelectorAll('.kanji-study-card') : [];
  if (!cards.length) return;
  const anyCollapsed = Array.from(cards).some(c => c.classList.contains('is-collapsed'));
  cards.forEach(c => {
    c.classList.toggle('is-collapsed', !anyCollapsed);
    c.classList.toggle('is-open', anyCollapsed);
    const topSec = c.querySelector ? c.querySelector('.kcard-top-section') : null;
    if (topSec && topSec.setAttribute) topSec.setAttribute('aria-expanded', anyCollapsed ? 'true' : 'false');
  });
  if (btn) {
    btn.classList.toggle('is-open', anyCollapsed);
    btn.setAttribute('aria-expanded', anyCollapsed ? 'true' : 'false');
    const icon = anyCollapsed
      ? (APP_ICONS.chevronsUp || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 11 12 6 17 11"></polyline><polyline points="7 18 12 13 17 18"></polyline></svg>')
      : (APP_ICONS.chevronsDown || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>');
    btn.innerHTML = `${icon}<span>${anyCollapsed ? 'Thu gọn mẹo nhớ' : 'Mở hết mẹo nhớ'}</span>`;
  }
  triggerHaptic(10);
};

window.toggleRadicalCardDetail = function(itemId, btn) {
  const card = document.getElementById(`card-${itemId}`);
  if (!card) return;
  const isCollapsed = card.classList.toggle('is-collapsed');
  const isOpen = !isCollapsed;
  card.classList.toggle('is-open', isOpen);
  if (btn && btn.setAttribute) {
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
  triggerHaptic(8);
};

window.toggleAllRadicalCards = function(btn) {
  const cards = document.querySelectorAll ? document.querySelectorAll('.radical-card') : [];
  if (!cards.length) return;
  const anyCollapsed = Array.from(cards).some(c => c.classList.contains('is-collapsed'));
  cards.forEach(c => {
    c.classList.toggle('is-collapsed', !anyCollapsed);
    c.classList.toggle('is-open', anyCollapsed);
    const toggleBtn = c.querySelector ? c.querySelector('.radical-expand-toggle') : null;
    if (toggleBtn && toggleBtn.setAttribute) toggleBtn.setAttribute('aria-expanded', anyCollapsed ? 'true' : 'false');
  });
  if (btn) {
    btn.classList.toggle('is-open', anyCollapsed);
    btn.setAttribute('aria-expanded', anyCollapsed ? 'true' : 'false');
    const icon = anyCollapsed
      ? (APP_ICONS.chevronsUp || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 11 12 6 17 11"></polyline><polyline points="7 18 12 13 17 18"></polyline></svg>')
      : (APP_ICONS.chevronsDown || '<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>');
    btn.innerHTML = `${icon}<span>${anyCollapsed ? 'Thu gọn ứng dụng' : 'Mở hết ứng dụng'}</span>`;
  }
  triggerHaptic(10);
};

// ZONE 12: MAZII DICTIONARY STUDIO, AI HANDWRITING RECOGNITION & UNIFIED APPLICATION BOOTSTRAP (DOMContentLoaded)


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

let hwStrokes = [];
let hwCurrentStroke = null;
let hwIsDrawing = false;
let hwCanvas = null;
let hwCtx = null;
let hwDpr = 1;
let hwTimer = null;
let hwStartTime = 0;


function romajiToHiragana(input) {
  if (typeof DictionaryEngine !== 'undefined' && typeof DictionaryEngine.romajiToHiragana === 'function') {
    return DictionaryEngine.romajiToHiragana(input);
  }
  if (!input || typeof input !== 'string') return '';
  let str = input.toLowerCase();

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


function initHandwritingPad() {
  hwCanvas = document.getElementById('mazii-canvas');
  if (!hwCanvas) return;

  hwCtx = hwCanvas.getContext('2d');
  hwDpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? window.devicePixelRatio : 1;

  const rect = hwCanvas.getBoundingClientRect();
  const parentWidth = hwCanvas.parentElement ? hwCanvas.parentElement.clientWidth : 0;
  const cssWidth = Math.round(rect.width || parentWidth || 340);
  const cssHeight = Math.round(rect.height || 360);
  hwCanvas.width = Math.round(cssWidth * hwDpr);
  hwCanvas.height = Math.round(cssHeight * hwDpr);

  drawHandwritingGrid();

  if (typeof window !== 'undefined' && !window.__maziiPadResizeBound) {
    window.__maziiPadResizeBound = true;
    window.addEventListener('resize', () => {
      if (maziiIsHwOpen && hwCanvas) {
        initHandwritingPad();
        redrawHandwritingCanvas();
      }
    });
  }

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



function getCanvasImageBase64() {
  if (!hwCanvas || hwStrokes.length === 0) return null;
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = hwCanvas.width || 300;
  tempCanvas.height = hwCanvas.height || 280;
  const tempCtx = tempCanvas.getContext('2d');

  tempCtx.fillStyle = '#ffffff';
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

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

        if (/^[\u4e00-\u9faf]$/.test(char) && maziiCurrentTab === 'grammar') {
          switchMaziiTab('kanji');
        }
        executeMaziiSearch(input.value);
      }
    };
  });
}


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


function searchInternalDictionary(q, type = 'word') {
  if (!q || typeof q !== 'string') return { status: 200, data: [], isInternal: true };
  const query = q.trim();
  if (!query) return { status: 200, data: [], isInternal: true };
  const queryLower = query.toLowerCase();
  const queryNoTone = removeVietnameseTones(query);
  const hasTone = queryLower !== queryNoTone;
  const candidates = [];
  const seen = new Set();

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

    const lList = (typeof lessonsData !== 'undefined' && Array.isArray(lessonsData)) ? lessonsData : [];
    for (const l of lList) {
      if (!l.vocabulary) continue;
      for (const v of l.vocabulary) {
        const rawW = stripRubyText(v.kanji) || v.hiragana;
        evaluateWord(rawW, v.hiragana, '', v.meaning, v.type);
      }
    }

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

  let hasWordResults = wordData && Array.isArray(wordData.data) && wordData.data.length > 0;
  if (!hasWordResults) {
    const internalWords = searchInternalDictionary(query, 'word');
    if (internalWords && Array.isArray(internalWords.data) && internalWords.data.length > 0) {
      wordData = internalWords;
      hasWordResults = true;
    }
  }

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


function formatKanjiCompactCard(k, query) {
  if (!k || typeof k !== 'object') return '';
  const char = safeTrim(k.kanji || k.word || '');

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


function renderCombinedMaziiResults(wordData, kanjiData, query) {
  const resultsBox = document.getElementById('mazii-results-container');
  if (!resultsBox) return;

  const isInternal = (wordData && wordData.isInternal) || (kanjiData && kanjiData.isInternal);
  const sourceBadgeHtml = ''; // Đã xóa ô tra cứu ngoại tuyến theo yêu cầu người dùng

  const words = (wordData && Array.isArray(wordData.data)) ? wordData.data : [];
  const rawKanjis = (kanjiData && (Array.isArray(kanjiData.results) ? kanjiData.results : (Array.isArray(kanjiData.data) ? kanjiData.data : []))) || [];


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



  const isSingleKanji = /^[\u4e00-\u9faf]$/.test(query);
  const sectionsHtml = isSingleKanji ? (kanjiHtml + wordHtml) : (wordHtml + kanjiHtml);

  resultsBox.innerHTML = sourceBadgeHtml + sectionsHtml;
}


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


function toggleMaziiVoiceSearch() {
  if (maziiIsVoiceListening || maziiShouldKeepListening) {
    if (maziiLastVoiceText) {
      commitVoiceSearchResult(maziiLastVoiceText, []);
    } else {
      stopMaziiVoiceSearch(true);
    }
  } else {
    startMaziiVoiceSearch(maziiVoiceLang);
  }
}


function toggleMaziiVoiceModalMic() {
  if (maziiIsVoiceListening || maziiShouldKeepListening) {

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

    startMaziiVoiceSearch(maziiVoiceLang);
  }
}


async function retryMicrophonePermission() {
  const titleEl = document.getElementById('mazii-voice-title');
  const transcriptEl = document.getElementById('mazii-voice-transcript');
  if (transcriptEl) transcriptEl.textContent = 'Đang yêu cầu cấp quyền Micro... Vui lòng bấm [Cho phép] trên thông báo trình duyệt.';

  const isFile = typeof window !== 'undefined' && window.location && window.location.protocol === 'file:';
  const isInsecure = typeof window !== 'undefined' && window.isSecureContext === false && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

  if (isFile) {
    if (transcriptEl) transcriptEl.innerHTML = 'Chrome chặn Micro khi mở file://. Vui lòng chạy qua web server cục bộ (Live Server, Node.js) hoặc Cloudflare.';
    return;
  }

  if (isInsecure) {
    if (transcriptEl) transcriptEl.innerHTML = 'Micro yêu cầu kết nối bảo mật HTTPS (trình duyệt chặn Micro trên HTTP mạng LAN). Vui lòng truy cập qua tên miền HTTPS.';
    return;
  }

  if (typeof navigator !== 'undefined' && navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      if (titleEl) titleEl.textContent = maziiVoiceLang === 'ja-JP' ? 'Đang nghe tiếng Nhật...' : 'Đang nghe tiếng Việt...';
      startMaziiVoiceSearch(maziiVoiceLang);
    } catch (err) {
      console.warn('[VoiceSearch] getUserMedia bị từ chối:', err);
      if (titleEl) titleEl.textContent = 'Micrô đang bị chặn';
      if (transcriptEl) {
        transcriptEl.innerHTML = 'Micro vẫn đang bị chặn. Vui lòng bấm vào <b>biểu tượng Cài đặt trang web / Khóa 🔒</b> trên thanh địa chỉ của trình duyệt &gt; <b>Quyền</b> &gt; <b>Micro: Cho phép</b>, sau đó tải lại trang.<br><button type="button" class="mazii-voice-retry-perm-btn" onclick="retryMicrophonePermission()">🔄 Thử lại quyền Micro</button>';
      }
    }
  } else {
    try {
      startMaziiVoiceSearch(maziiVoiceLang);
    } catch (e) {
      alert('Vui lòng mở Cài đặt trình duyệt trên điện thoại/máy tính > Quyền riêng tư > Micro > Cho phép.');
    }
  }
}


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

  startMaziiVoiceSearch(maziiVoiceLang);
}


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

  if (panel) {
    const btns = panel.querySelectorAll('.mazii-voice-lang-btn');
    btns.forEach(b => {
      const isCurrent = (maziiVoiceLang === 'ja-JP' && b.innerText.includes('Nhật')) ||
                        (maziiVoiceLang === 'vi-VN' && b.innerText.includes('Việt'));
      b.classList.toggle('active', isCurrent);
    });
  }

  setVoiceMicActiveVisual(true);

  maziiSilenceHintTimer = setTimeout(() => {
    if (maziiShouldKeepListening && !maziiLastVoiceText && transcriptEl) {
      stopMaziiVoiceSearch(false);
      transcriptEl.textContent = 'Đã tắt mic do không phát hiện giọng nói trong 5 giây. Chạm vào Micro để nói lại.';
    }
  }, 5000);

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

        // Cơ chế 5 giây im lặng: Dù là isFinal hay interim, reset bộ đếm 5 giây
        // Chỉ khi người dùng ngừng nói từ 5 giây trở lên mới tự động chốt kết quả và tắt mic
        clearTimeout(maziiFinalizeTimer);
        maziiFinalizeTimer = setTimeout(() => {
          if (maziiShouldKeepListening && maziiLastVoiceText) {
            commitVoiceSearchResult(maziiLastVoiceText, alternatives);
          }
        }, 5000);
      },
      onError: (err) => {
        console.warn('[VoiceSearch] Thông báo:', err && err.code ? err.code : err);

        if (err && err.code === 'no-speech') {
          if (maziiShouldKeepListening && !maziiIsVoiceListening) {
            scheduleVoiceRestart(maziiVoiceLang);
            return;
          }
        }
        if (err && err.code === 'aborted') {
          return;
        }

        if (err && (err.code === 'not-allowed' || (err.message && (err.message.includes('not-allowed') || err.message.includes('quyền Micro'))))) {
          maziiShouldKeepListening = false;
          maziiIsVoiceListening = false;
          setVoiceMicActiveVisual(false);
          if (titleEl) titleEl.textContent = 'Micrô đang bị chặn';
          if (transcriptEl) {
            const isFile = typeof window !== 'undefined' && window.location && window.location.protocol === 'file:';
            const isInsecure = typeof window !== 'undefined' && window.isSecureContext === false && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
            if (isFile) {
              transcriptEl.innerHTML = 'Chrome chặn Micro khi mở file trực tiếp (file://). Hãy mở qua HTTP/HTTPS (Live Server, Cloudflare).';
            } else if (isInsecure) {
              transcriptEl.innerHTML = 'Micro yêu cầu kết nối bảo mật HTTPS. Trình duyệt chặn Micro trên HTTP mạng nội bộ LAN.';
            } else {
              transcriptEl.innerHTML = 'Trang web chưa được cấp quyền Micro. <button type="button" class="mazii-voice-retry-perm-btn" onclick="retryMicrophonePermission()">🔓 Yêu cầu cấp quyền Micro</button>';
            }
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

        if (maziiShouldKeepListening) {
          scheduleVoiceRestart(maziiVoiceLang);
        } else {
          setVoiceMicActiveVisual(false);
        }
      }
    };

    if (typeof DictionaryEngine !== 'undefined' && typeof DictionaryEngine.createVoiceRecognition === 'function') {
      maziiVoiceRecognition = DictionaryEngine.createVoiceRecognition(callbacks, maziiVoiceLang, { maxAlternatives: 5, continuous: true });
    } else {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SpeechRecognition();
      rec.lang = maziiVoiceLang || 'ja-JP';
      rec.continuous = true;
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
      rec.onerror = (e) => {
        const err = new Error(e.error === 'not-allowed' ? 'Chưa cấp quyền Micro.' : (e.error || 'Lỗi giọng nói'));
        err.code = e.error;
        callbacks.onError(err);
      };
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


function renderVoiceCandidates(alternatives, currentQuery) {
  const container = document.getElementById('mazii-voice-candidates');
  const panel = document.getElementById('mazii-voice-panel');
  if (!container || !panel) return;

  const topRow = panel.querySelector('.mazii-voice-top-row');

  const rawList = Array.isArray(alternatives) ? alternatives : [];
  const uniqueList = [];
  rawList.forEach(item => {
    const trimmed = (item || '').trim();
    if (trimmed && !uniqueList.some(u => u.toLowerCase() === trimmed.toLowerCase())) {
      uniqueList.push(trimmed);
    }
  });

  if (uniqueList.length <= 1) {
    container.innerHTML = '';
    container.style.display = 'none';
    panel.style.display = 'none';
    return;
  }

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
      <span class="mazii-voice-minimal-label">${(window.MASTER_SUITE_ICONS && window.MASTER_SUITE_ICONS.sparkles) || ''} Gợi ý:</span>
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


window.openMaziiWithQuery = function(query, type = 'word', autoOpenHw = false) {
  if (typeof switchModule === 'function') {
    switchModule('mazii-dict', true);
    setTimeout(() => {
      switchMaziiTab(type);
      const input = document.getElementById('mazii-search-input');
      if (input && query) input.value = query;
      if (query) executeMaziiSearch(query);
      if (autoOpenHw && typeof toggleHandwritingPanel === 'function') {
        toggleHandwritingPanel(true);
      }
    }, 60);
  }
};

window.toggleMaziiVoiceSearch = toggleMaziiVoiceSearch;
window.startMaziiVoiceSearch = startMaziiVoiceSearch;
window.stopMaziiVoiceSearch = stopMaziiVoiceSearch;
window.setMaziiVoiceLang = setMaziiVoiceLang;
window.renderVoiceCandidates = renderVoiceCandidates;
window.selectVoiceCandidate = selectVoiceCandidate;
window.toggleMaziiVoiceModalMic = toggleMaziiVoiceModalMic;
window.retryMicrophonePermission = retryMicrophonePermission;

// ZONE 13: MULTI-ACCOUNT AUTH UI, ACHIEVEMENTS DASHBOARD & LEADERBOARD CONTROLLER (WORKER 3)

let authCurrentTab = 'profile';
let authFormMode = 'register'; // 'register' | 'login'
let authSelectedRegisterAvatar = 'daruma';
let authSelectedEditAvatar = 'daruma';
let _pinModalConfirmCallback = null;


function getWaAccountIcon(category, key) {
  if (window.ACCOUNT_WA_ICONS) {
    if (category && window.ACCOUNT_WA_ICONS[category]) {
      return window.ACCOUNT_WA_ICONS[category][key] || '';
    }
    return window.ACCOUNT_WA_ICONS[key] || '';
  }
  return '';
}


function getRankCrestSvg(rankBadge) {
  const icons = window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.ranks ? window.ACCOUNT_WA_ICONS.ranks : null;
  if (!icons) return rankBadge || '';
  if (rankBadge === '🌱' || rankBadge === 'sprout') return icons.sprout;
  if (rankBadge === '📖' || rankBadge === 'scroll') return icons.scroll;
  if (rankBadge === '⚔️' || rankBadge === 'katana') return icons.katana;
  if (rankBadge === '🏯' || rankBadge === 'castle') return icons.castle;
  if (rankBadge === '👑' || rankBadge === 'crown') return icons.crown;
  return icons.sprout;
}


function getAvatarPreset(avatarId) {
  const presets = (window.AuthEngine && Array.isArray(window.AuthEngine.AVATAR_PRESETS))
    ? window.AuthEngine.AVATAR_PRESETS
    : [
        { id: 'daruma', icon: '🎯', name: 'Daruma May Mắn' },
        { id: 'samurai', icon: '⚔️', name: 'Võ Sĩ Samurai' },
        { id: 'sakura', icon: '🌸', name: 'Hoa Anh Đào' },
        { id: 'kitsune', icon: '🦊', name: 'Cáo Kitsune' },
        { id: 'neko', icon: '🐱', name: 'Mèo Thần Tài' },
        { id: 'ninja', icon: '🥷', name: 'Ninja Ám Ảnh' },
        { id: 'fuji', icon: '🗻', name: 'Núi Phú Sĩ' },
        { id: 'tanuki', icon: '🦝', name: 'Gấu Trúc Tanuki' }
      ];
  const found = presets.find(p => p.id === avatarId);
  const target = found || presets[0];
  const svg = (window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.avatars && window.ACCOUNT_WA_ICONS.avatars[target.id])
    ? window.ACCOUNT_WA_ICONS.avatars[target.id]
    : (target.svg || target.icon);
  return { ...target, svg };
}


function renderAvatarGrid(containerId, selectedId, onSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const presets = (window.AuthEngine && Array.isArray(window.AuthEngine.AVATAR_PRESETS))
    ? window.AuthEngine.AVATAR_PRESETS
    : [];

  container.innerHTML = presets.map(p => {
    const isSelected = p.id === selectedId;
    const svgIcon = (window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.avatars && window.ACCOUNT_WA_ICONS.avatars[p.id])
      ? window.ACCOUNT_WA_ICONS.avatars[p.id]
      : (p.svg || p.icon);
    return `
      <button type="button" class="avatar-preset-item ${isSelected ? 'is-selected' : ''}" data-avatar-id="${p.id}" title="${escapeHtml(p.name)}">
        <span class="preset-icon" aria-hidden="true">${svgIcon}</span>
        <span class="preset-name">${escapeHtml(p.name.split(' ')[0])}</span>
      </button>
    `;
  }).join('');

  if (typeof onSelect === 'function') {
    const btns = container.querySelectorAll('.avatar-preset-item');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const avId = btn.getAttribute('data-avatar-id');
        onSelect(avId);
      });
    });
  }
}


function renderUserAccountChips() {
  const user = (window.AuthEngine && typeof window.AuthEngine.getCurrentUser === 'function')
    ? window.AuthEngine.getCurrentUser()
    : null;
  const uid = user ? user.uid : 'guest';
  const stats = (window.AuthEngine && typeof window.AuthEngine.calculateUserStats === 'function')
    ? window.AuthEngine.calculateUserStats(uid)
    : { totalXp: 0, rankBadge: '🌱', rankTitle: 'Tân Binh' };

  const avatarId = user ? user.avatar : 'guest';
  const isGuest = !user;
  const guestSvg = (window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.avatars && window.ACCOUNT_WA_ICONS.avatars.guest)
    ? window.ACCOUNT_WA_ICONS.avatars.guest
    : '<svg class="wa-avatar-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="8.5" r="3"></circle><path d="M6.5 18c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5"></path></svg>';
  
  const avatarPreset = isGuest ? { svg: guestSvg, icon: '👤' } : getAvatarPreset(avatarId);
  const rankSvg = getRankCrestSvg(stats.rankBadge || '🌱');

  const hAvatar = document.getElementById('header-account-avatar');
  const hName = document.getElementById('header-account-name');
  const hBadge = document.getElementById('header-account-badge');

  if (hAvatar) hAvatar.innerHTML = avatarPreset.svg || avatarPreset.icon;
  if (hName) hName.textContent = user ? user.displayName : 'Khách';
  if (hBadge) {
    hBadge.innerHTML = `<span class="header-account-rank-icon" aria-hidden="true">${rankSvg}</span><span class="header-account-xp-text">${stats.totalXp || 0} XP</span>`;
  }

  const msAvatar = document.getElementById('msheet-account-avatar');
  const msName = document.getElementById('msheet-account-name');
  const msBadge = document.getElementById('msheet-account-badge');
  if (msAvatar) msAvatar.innerHTML = avatarPreset.svg || avatarPreset.icon;
  if (msName) msName.textContent = user ? (user.displayName || user.username || 'Khách') : 'Khách';
  if (msBadge) msBadge.textContent = `${stats.totalXp || 0} XP`;

  const cAvatar = document.getElementById('cover-account-avatar');
  const cName = document.getElementById('cover-account-name');
  const cXp = document.getElementById('cover-account-xp');

  if (cAvatar) cAvatar.innerHTML = avatarPreset.svg || avatarPreset.icon;
  if (cName) cName.textContent = user ? user.displayName : 'Tài khoản';
  if (cXp) cXp.textContent = `${stats.totalXp || 0} XP`;

  const mBadge = document.getElementById('account-status-badge');
  if (mBadge) {
    mBadge.textContent = user ? `Học viên: @${user.username}` : 'Chế độ Khách';
  }
}


function initUserAccountUI() {

  if (window.AuthEngine && typeof window.AuthEngine.onAuthChange === 'function') {
    window.AuthEngine.onAuthChange((newUser) => {
      refreshAppOnAccountChange(newUser);
    });
  }

  const accModal = document.getElementById('user-account-modal');
  if (accModal) {
    accModal.addEventListener('click', (e) => {
      if (e.target === accModal) {
        closeUserAccountModal();
      }
    });
  }

  const pinModal = document.getElementById('account-pin-modal');
  if (pinModal) {
    pinModal.addEventListener('click', (e) => {
      if (e.target === pinModal) {
        closeAccountPinModal();
      }
    });
  }

  const pinInput = document.getElementById('pin-modal-input');
  if (pinInput) {
    pinInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const btn = document.getElementById('pin-modal-confirm-btn');
        if (btn) btn.click();
      }
    });
  }

  renderUserAccountChips();
}


function openUserAccountModal(initialTab = 'profile') {
  const modal = document.getElementById('user-account-modal');
  if (!modal) return;
  modal.classList.add('show-modal');
  modal.setAttribute('aria-hidden', 'false');
  switchAccountModalTab(initialTab);
  renderUserAccountUI();
}


function closeUserAccountModal() {
  const modal = document.getElementById('user-account-modal');
  if (!modal) return;
  modal.classList.remove('show-modal');
  modal.setAttribute('aria-hidden', 'true');
  toggleProfileEditDrawer(false);
}


function computeXpProgressPercent(totalXp) {

  if (typeof totalXp !== 'number' || isNaN(totalXp) || totalXp <= 0) {
    return 5;
  }

  const xp = Math.max(0, Math.floor(totalXp));

  let pct = 0;
  if (xp >= 10000) {
    pct = 100;
  } else if (xp >= 5000) {
    pct = Math.round(75 + ((xp - 5000) / 5000) * 25);
  } else if (xp >= 2000) {
    pct = Math.round(50 + ((xp - 2000) / 3000) * 25);
  } else if (xp >= 500) {
    pct = Math.round(25 + ((xp - 500) / 1500) * 25);
  } else {
    pct = Math.round(5 + (xp / 500) * 20);
  }

  return Math.min(100, Math.max(5, pct));
}


function toggleAuthFormDrawer(forceOpen) {

  const container = document.getElementById('auth-form-container');
  const btn = document.getElementById('btn-toggle-auth-form');
  if (!container) return;

  const isCurrentlyCollapsed = container.classList.contains('is-collapsed');
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : isCurrentlyCollapsed;

  container.classList.toggle('is-collapsed', !shouldOpen);
  if (btn) {
    btn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    btn.classList.toggle('active', shouldOpen);
  }
}


function toggleSyncPasteInput(forceOpen) {

  const drawer = document.getElementById('import-code-drawer');
  const btn = document.getElementById('btn-toggle-paste-input');
  if (!drawer) return;

  const isCurrentlyCollapsed = drawer.classList.contains('is-collapsed');
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : isCurrentlyCollapsed;

  drawer.classList.toggle('is-collapsed', !shouldOpen);
  if (btn) {
    btn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    btn.classList.toggle('active', shouldOpen);
  }
}


function switchAccountModalTab(tabId) {
  const validTabs = ['profile', 'accounts', 'leaderboard', 'sync'];
  const targetTab = validTabs.includes(tabId) ? tabId : 'profile';
  authCurrentTab = targetTab;

  const tabBtns = document.querySelectorAll('.account-tab-btn');
  tabBtns.forEach(btn => {
    const isCur = btn.getAttribute('data-tab') === targetTab;
    btn.classList.toggle('active', isCur);
    btn.setAttribute('aria-selected', isCur ? 'true' : 'false');
  });

  const panels = document.querySelectorAll('.account-tab-panel');
  panels.forEach(p => {
    p.classList.remove('active');
  });

  const curPanel = document.getElementById(`account-tab-${targetTab}`);
  if (curPanel) curPanel.classList.add('active');

  if (targetTab === 'profile') {
    renderProfileTab();
  } else if (targetTab === 'accounts') {
    const accounts = (window.AuthEngine && typeof window.AuthEngine.listAccounts === 'function')
      ? window.AuthEngine.listAccounts()
      : [];
    toggleAuthFormDrawer(accounts.length === 0);
    renderAccountsTab();
  } else if (targetTab === 'leaderboard') {
    renderLeaderboardTab();
  } else if (targetTab === 'sync') {
    renderSyncTab();
  }
}


function renderUserAccountUI() {
  renderUserAccountChips();
  switchAccountModalTab(authCurrentTab || 'profile');
}


function renderProfileTab() {
  const user = (window.AuthEngine && typeof window.AuthEngine.getCurrentUser === 'function')
    ? window.AuthEngine.getCurrentUser()
    : null;
  const uid = user ? user.uid : 'guest';
  const stats = (window.AuthEngine && typeof window.AuthEngine.calculateUserStats === 'function')
    ? window.AuthEngine.calculateUserStats(uid)
    : { totalXp: 0, rankTitle: 'Tân Binh Nhập Môn', rankBadge: '🌱' };

  const isGuest = !user;
  const guestSvg = (window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.avatars && window.ACCOUNT_WA_ICONS.avatars.guest)
    ? window.ACCOUNT_WA_ICONS.avatars.guest
    : '<svg class="wa-avatar-svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="8.5" r="3"></circle><path d="M6.5 18c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5"></path></svg>';

  const avatarPreset = isGuest ? { svg: guestSvg, icon: '👤' } : getAvatarPreset(user.avatar || 'daruma');
  const rankSvg = getRankCrestSvg(stats.rankBadge || '🌱');

  const avEl = document.getElementById('profile-display-avatar');
  const nameEl = document.getElementById('profile-display-name');
  const userEl = document.getElementById('profile-display-username');
  const levelEl = document.getElementById('profile-display-level');
  const rankEl = document.getElementById('profile-display-rank');
  const xpEl = document.getElementById('profile-display-xp');

  if (avEl) avEl.innerHTML = avatarPreset.svg || avatarPreset.icon;
  if (nameEl) nameEl.textContent = user ? user.displayName : 'Học viên Khách';
  if (userEl) userEl.textContent = user ? `@${user.username}` : '@guest';
  if (levelEl) levelEl.textContent = `JLPT ${user ? user.levelGoal : 'N5'}`;
  if (rankEl) {
    rankEl.innerHTML = `${rankSvg} <span>${escapeHtml(stats.rankTitle || 'Tân Binh Nhập Môn')}</span>`;
  }
  if (xpEl) xpEl.textContent = `${stats.totalXp || 0} XP`;

  const progressFill = document.getElementById('profile-xp-progress-fill');
  if (progressFill) {
    const pct = computeXpProgressPercent(stats.totalXp || 0);
    progressFill.style.width = `${pct}%`;
  }

  const guestNotice = document.getElementById('guest-welcome-notice');
  if (guestNotice) guestNotice.style.display = user ? 'none' : 'flex';

  const slEl = document.getElementById('stat-lessons-count');
  const skEl = document.getElementById('stat-kanji-count');
  const srEl = document.getElementById('stat-radicals-count');
  const sqEl = document.getElementById('stat-quiz-count');
  const skwEl = document.getElementById('stat-kaiwa-count');
  const seEl = document.getElementById('stat-exam-count');

  if (slEl) slEl.textContent = `${stats.completedModulesCount || 0} / 150`;
  if (skEl) skEl.textContent = `${stats.learnedKanjiCount || 0} chữ`;
  if (srEl) srEl.textContent = `${stats.learnedRadicalsCount || 0} / 191`;
  if (sqEl) sqEl.textContent = `${stats.quizCompletedCount || 0} bài (${stats.quizAvgScore || 0}%)`;

  const starSvg = (window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.starMini)
    ? window.ACCOUNT_WA_ICONS.starMini
    : '<svg class="inline-star-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
  if (skwEl) skwEl.innerHTML = `${stats.kaiwaPracticedCount || 0} câu (${starSvg} ${stats.kaiwaStars || 0})`;
  if (seEl) seEl.textContent = `${stats.examsTakenCount || 0} đề (${stats.bestExamScore || 0}/20)`;

  const editBtn = document.getElementById('btn-edit-profile-open');
  const logoutBtn = document.getElementById('btn-logout-account');
  if (editBtn) editBtn.style.display = user ? 'inline-flex' : 'none';
  if (logoutBtn) logoutBtn.style.display = user ? 'inline-flex' : 'none';
}


function toggleProfileEditDrawer(show) {
  const drawer = document.getElementById('profile-edit-drawer');
  if (!drawer) return;

  if (!show) {
    drawer.style.display = 'none';
    return;
  }

  const user = (window.AuthEngine && typeof window.AuthEngine.getCurrentUser === 'function')
    ? window.AuthEngine.getCurrentUser()
    : null;
  if (!user) {
    showToast('Chỉ có thể chỉnh sửa hồ sơ khi đã đăng nhập.');
    return;
  }

  drawer.style.display = 'flex';
  const nameInput = document.getElementById('edit-profile-name');
  const goalSelect = document.getElementById('edit-profile-goal');

  if (nameInput) nameInput.value = user.displayName || '';
  if (goalSelect) goalSelect.value = user.levelGoal || 'N5';
  authSelectedEditAvatar = user.avatar || 'daruma';

  renderAvatarGrid('edit-avatar-grid', authSelectedEditAvatar, (newAv) => {
    authSelectedEditAvatar = newAv;
    renderAvatarGrid('edit-avatar-grid', authSelectedEditAvatar, null);
  });
}


function saveProfileChanges() {
  const user = (window.AuthEngine && typeof window.AuthEngine.getCurrentUser === 'function')
    ? window.AuthEngine.getCurrentUser()
    : null;
  if (!user) return;

  const nameInput = document.getElementById('edit-profile-name');
  const goalSelect = document.getElementById('edit-profile-goal');

  const newDisplayName = nameInput ? nameInput.value.trim() : '';
  const newGoal = goalSelect ? goalSelect.value : 'N5';

  if (!newDisplayName) {
    showToast('Tên hiển thị không được để trống.');
    return;
  }

  if (window.AuthEngine && typeof window.AuthEngine.updateProfile === 'function') {
    const res = window.AuthEngine.updateProfile(user.uid, {
      displayName: newDisplayName,
      avatar: authSelectedEditAvatar,
      levelGoal: newGoal
    });

    if (res && res.success) {
      toggleProfileEditDrawer(false);
      renderUserAccountUI();
      showToast('Đã lưu thay đổi hồ sơ thành công!');
    } else {
      showToast(`Lỗi: ${res ? res.error : 'Không thể cập nhật hồ sơ'}`);
    }
  }
}


function renderAccountsTab() {
  const listEl = document.getElementById('account-switcher-list');
  const countBadge = document.getElementById('accounts-count-badge');
  if (!listEl) return;

  const accounts = (window.AuthEngine && typeof window.AuthEngine.listAccounts === 'function')
    ? window.AuthEngine.listAccounts()
    : [];
  const currentUser = (window.AuthEngine && typeof window.AuthEngine.getCurrentUser === 'function')
    ? window.AuthEngine.getCurrentUser()
    : null;

  if (countBadge) {
    countBadge.textContent = `${accounts.length} tài khoản`;
  }

  let html = '';

  accounts.forEach(acc => {
    const isActive = currentUser && currentUser.uid === acc.uid;
    const preset = getAvatarPreset(acc.avatar);
    const stats = acc.stats || {};
    const rankSvg = getRankCrestSvg(stats.rankBadge || '🌱');

    html += `
      <div class="account-switch-item ${isActive ? 'is-active' : ''}">
        <div class="switch-item-left">
          <span class="switch-item-avatar" aria-hidden="true">${preset.svg || preset.icon}</span>
          <div class="switch-item-info">
            <div class="switch-item-name">${escapeHtml(acc.displayName)} <span style="font-size:11px;font-weight:normal;color:var(--text-muted);">(@${escapeHtml(acc.username)})</span></div>
            <div class="switch-item-meta">
              <span>${rankSvg} ${escapeHtml(stats.rankTitle || 'Tân Binh')}</span>
              <span>•</span>
              <span style="color:var(--accent-primary);font-weight:700;">${stats.totalXp || 0} XP</span>
            </div>
          </div>
        </div>
        <div class="switch-item-actions">
          ${isActive ? `
            <span class="active-check-badge">Đang dùng ✓</span>
          ` : `
            <button type="button" class="btn-switch-account" onclick="handleQuickSwitchAccount('${acc.uid}')">Chuyển sang</button>
            <button type="button" class="btn-delete-account" onclick="handleDeleteAccountPrompt('${acc.uid}', '${escapeHtml(acc.displayName)}')" title="Xóa tài khoản này">Xóa</button>
          `}
        </div>
      </div>
    `;
  });

  const isGuestActive = !currentUser;
  const guestStats = (window.AuthEngine && typeof window.AuthEngine.calculateUserStats === 'function')
    ? window.AuthEngine.calculateUserStats('guest')
    : { totalXp: 0, rankBadge: '🌱', rankTitle: 'Khách' };
  const guestAvatarSvg = (window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.avatars && window.ACCOUNT_WA_ICONS.avatars.guest)
    ? window.ACCOUNT_WA_ICONS.avatars.guest
    : '<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="8.5" r="3"></circle><path d="M6.5 18c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5"></path></svg>';

  html += `
    <div class="account-switch-item ${isGuestActive ? 'is-active' : ''}">
      <div class="switch-item-left">
        <span class="switch-item-avatar" aria-hidden="true">${guestAvatarSvg}</span>
        <div class="switch-item-info">
          <div class="switch-item-name">Học viên Khách (Guest)</div>
          <div class="switch-item-meta">
            <span>Tiến độ cục bộ tạm thời</span>
            <span>•</span>
            <span style="color:var(--accent-primary);font-weight:700;">${guestStats.totalXp || 0} XP</span>
          </div>
        </div>
      </div>
      <div class="switch-item-actions">
        ${isGuestActive ? `
          <span class="active-check-badge">Đang dùng ✓</span>
        ` : `
          <button type="button" class="btn-switch-account" onclick="handleQuickSwitchAccount('guest')">Chuyển về Khách</button>
        `}
      </div>
    </div>
  `;

  listEl.innerHTML = html;

  renderAvatarGrid('register-avatar-grid', authSelectedRegisterAvatar, (newAv) => {
    authSelectedRegisterAvatar = newAv;
    renderAvatarGrid('register-avatar-grid', authSelectedRegisterAvatar, null);
  });
}


function setAuthFormMode(mode) {
  authFormMode = mode;
  const btnReg = document.getElementById('btn-mode-register');
  const btnLog = document.getElementById('btn-mode-login');
  const mainForm = document.getElementById('auth-main-form');
  const groupName = document.getElementById('group-auth-displayname');
  const groupAvatar = document.getElementById('group-auth-avatar');
  const groupGoal = document.getElementById('group-auth-goal');
  const groupMigrate = document.getElementById('group-auth-migrate');
  const submitBtn = document.getElementById('btn-auth-submit');
  const errorAlert = document.getElementById('auth-error-alert');

  if (errorAlert) {
    errorAlert.textContent = '';
    errorAlert.style.display = 'none';
  }

  if (btnReg) btnReg.classList.toggle('active', mode === 'register');
  if (btnLog) btnLog.classList.toggle('active', mode === 'login');

  const isReg = mode === 'register';
  if (mainForm) mainForm.classList.toggle('is-login', !isReg);
  if (groupName) groupName.style.display = isReg ? 'flex' : 'none';
  if (groupAvatar) groupAvatar.style.display = isReg ? 'flex' : 'none';
  if (groupGoal) groupGoal.style.display = isReg ? 'flex' : 'none';
  if (groupMigrate) groupMigrate.style.display = isReg ? 'block' : 'none';

  if (submitBtn) {
    submitBtn.innerHTML = isReg
      ? `<span>Đăng Ký &amp; Vào Học Ngay</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>`
      : `<span>Đăng Nhập Ngay</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
  }
}


function handleAuthFormSubmit(event) {
  if (event && event.preventDefault) event.preventDefault();

  const errorEl = document.getElementById('auth-error-alert');
  const usernameInput = document.getElementById('auth-input-username');
  const pinInput = document.getElementById('auth-input-pin');
  const displayNameInput = document.getElementById('auth-input-displayname');
  const goalSelect = document.getElementById('auth-input-goal');
  const migrateCheck = document.getElementById('auth-check-migrate');

  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }

  const username = usernameInput ? usernameInput.value.trim() : '';
  const pin = pinInput ? pinInput.value.trim() : '';

  if (!username || !pin) {
    if (errorEl) {
      errorEl.textContent = 'Vui lòng điền đầy đủ tên đăng nhập và mã PIN.';
      errorEl.style.display = 'block';
    }
    return;
  }

  if (!window.AuthEngine) {
    if (errorEl) {
      errorEl.textContent = 'Động cơ tài khoản chưa sẵn sàng.';
      errorEl.style.display = 'block';
    }
    return;
  }

  if (authFormMode === 'register') {
    const displayName = displayNameInput ? displayNameInput.value.trim() : '';
    const levelGoal = goalSelect ? goalSelect.value : 'N5';
    const migrateGuestData = migrateCheck ? migrateCheck.checked : true;
    const avatar = authSelectedRegisterAvatar || 'daruma';

    const res = window.AuthEngine.registerAccount({
      username,
      displayName,
      secretPin: pin,
      avatar,
      levelGoal,
      migrateGuestData
    });

    if (res && res.success) {
      if (usernameInput) usernameInput.value = '';
      if (pinInput) pinInput.value = '';
      if (displayNameInput) displayNameInput.value = '';
      switchAccountModalTab('profile');
      showToast(`Đăng ký thành công! Chào mừng ${res.user.displayName}`);
    } else {
      if (errorEl) {
        errorEl.textContent = res ? res.error : 'Đăng ký thất bại.';
        errorEl.style.display = 'block';
      }
    }
  } else {

    const res = window.AuthEngine.loginAccount(username, pin);
    if (res && res.success) {
      if (usernameInput) usernameInput.value = '';
      if (pinInput) pinInput.value = '';
      switchAccountModalTab('profile');
      showToast(`Đăng nhập thành công! Chào mừng trở lại ${res.user.displayName}`);
    } else {
      if (errorEl) {
        errorEl.textContent = res ? res.error : 'Tên đăng nhập hoặc mã PIN không chính xác.';
        errorEl.style.display = 'block';
      }
    }
  }
}


function openAccountPinModal(title, desc, onConfirm) {
  const modal = document.getElementById('account-pin-modal');
  const titleEl = document.getElementById('pin-modal-title');
  const descEl = document.getElementById('pin-modal-desc');
  const inputEl = document.getElementById('pin-modal-input');
  const errorEl = document.getElementById('pin-modal-error');
  const confirmBtn = document.getElementById('pin-modal-confirm-btn');

  if (!modal || !inputEl) return;

  if (titleEl) titleEl.textContent = title || 'Xác Nhận Mã PIN';
  if (descEl) descEl.textContent = desc || 'Vui lòng nhập mã PIN bảo mật:';
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }

  inputEl.value = '';
  _pinModalConfirmCallback = onConfirm;

  if (confirmBtn) {
    confirmBtn.onclick = () => {
      const pin = inputEl.value.trim();
      if (!pin) {
        if (errorEl) {
          errorEl.textContent = 'Vui lòng nhập mã PIN.';
          errorEl.style.display = 'block';
        }
        return;
      }
      if (typeof _pinModalConfirmCallback === 'function') {
        _pinModalConfirmCallback(pin);
      }
    };
  }

  modal.classList.add('show-modal');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => inputEl.focus(), 100);
}


function closeAccountPinModal() {
  const modal = document.getElementById('account-pin-modal');
  if (modal) {
    modal.classList.remove('show-modal');
    modal.setAttribute('aria-hidden', 'true');
  }
  _pinModalConfirmCallback = null;
}


function handleQuickSwitchAccount(uid) {
  if (!uid || uid === 'guest') {
    if (window.AuthEngine && typeof window.AuthEngine.logoutToGuest === 'function') {
      window.AuthEngine.logoutToGuest();
    }
    return;
  }

  const accounts = (window.AuthEngine && typeof window.AuthEngine.listAccounts === 'function')
    ? window.AuthEngine.listAccounts()
    : [];
  const acc = accounts.find(a => a.uid === uid);
  const targetName = acc ? acc.displayName : 'tài khoản';

  openAccountPinModal(
    'Chuyển Đổi Tài Khoản',
    `Nhập mã PIN bảo mật để đăng nhập vào tài khoản "${escapeHtml(targetName)}":`,
    (pin) => {
      if (!window.AuthEngine || typeof window.AuthEngine.switchAccount !== 'function') return;
      const res = window.AuthEngine.switchAccount(uid, pin);
      if (res && res.success) {
        closeAccountPinModal();
      } else {
        const errEl = document.getElementById('pin-modal-error');
        if (errEl) {
          errEl.textContent = res ? res.error : 'Mã PIN không đúng.';
          errEl.style.display = 'block';
        }
      }
    }
  );
}


function handleDeleteAccountPrompt(uid, name) {
  openAccountPinModal(
    'Xóa Tài Khoản',
    `CẢNH BÁO: Bạn có chắc chắn muốn xóa tài khoản "${escapeHtml(name)}"? Toàn bộ tiến độ học tập và thành tích sẽ bị xóa vĩnh viễn. Nhập mã PIN để xác nhận:`,
    (pin) => {
      if (!window.AuthEngine || typeof window.AuthEngine.deleteAccount !== 'function') return;
      const res = window.AuthEngine.deleteAccount(uid, pin);
      if (res && res.success) {
        closeAccountPinModal();
        showToast(`Đã xóa tài khoản "${name}" thành công.`);
        renderAccountsTab();
      } else {
        const errEl = document.getElementById('pin-modal-error');
        if (errEl) {
          errEl.textContent = res ? res.error : 'Mã PIN không chính xác.';
          errEl.style.display = 'block';
        }
      }
    }
  );
}


function handleLogoutAccount() {
  if (window.AuthEngine && typeof window.AuthEngine.logoutToGuest === 'function') {
    window.AuthEngine.logoutToGuest();
  }
}


function renderLeaderboardTab() {
  const listEl = document.getElementById('multi-user-leaderboard-list');
  if (!listEl) return;

  if (!window.AuthEngine || typeof window.AuthEngine.getMultiUserLeaderboard !== 'function') {
    listEl.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-muted);">Đang tải bảng xếp hạng...</div>';
    return;
  }

  const leaderboard = window.AuthEngine.getMultiUserLeaderboard();
  const currentUser = (typeof window.AuthEngine.getCurrentUser === 'function')
    ? window.AuthEngine.getCurrentUser()
    : null;

  if (!leaderboard || leaderboard.length === 0) {
    listEl.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-muted);">Chưa có dữ liệu học tập nào trên thiết bị.</div>';
    return;
  }

  listEl.innerHTML = leaderboard.map((item, idx) => {
    const isCurrent = (currentUser && currentUser.uid === item.uid) || (!currentUser && item.isGuest);
    const isGuest = item.isGuest;
    const guestSvg = (window.ACCOUNT_WA_ICONS && window.ACCOUNT_WA_ICONS.avatars && window.ACCOUNT_WA_ICONS.avatars.guest)
      ? window.ACCOUNT_WA_ICONS.avatars.guest
      : '<svg class="wa-avatar-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="8.5" r="3"></circle><path d="M6.5 18c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5"></path></svg>';
    const preset = isGuest ? { svg: guestSvg, icon: '👤' } : getAvatarPreset(item.avatar);
    const stats = item.stats || {};
    const rankSvg = getRankCrestSvg(stats.rankBadge || '🌱');

    let rankHtml = `${idx + 1}`;
    let rankClass = '';
    const medals = window.ACCOUNT_WA_ICONS || {};
    if (idx === 0) { rankHtml = medals.medal1 || '🥇'; rankClass = 'top-1'; }
    else if (idx === 1) { rankHtml = medals.medal2 || '🥈'; rankClass = 'top-2'; }
    else if (idx === 2) { rankHtml = medals.medal3 || '🥉'; rankClass = 'top-3'; }

    return `
      <div class="leaderboard-row ${isCurrent ? 'is-current-user' : ''}">
        <div class="col-rank">
          <span class="rank-badge ${rankClass}">${rankHtml}</span>
        </div>
        <div class="col-user">
          <div class="user-cell">
            <span class="user-cell-avatar" aria-hidden="true">${preset.svg || preset.icon}</span>
            <div class="user-cell-info">
              <span class="user-cell-name">
                ${escapeHtml(item.displayName)}
                ${isCurrent ? ' <span style="font-size:11px;color:var(--accent-primary);font-weight:700;">(Bạn)</span>' : ''}
              </span>
              <span class="user-cell-title">${rankSvg} ${escapeHtml(stats.rankTitle || 'Tân Binh')} • JLPT ${escapeHtml(item.levelGoal || 'N5')}</span>
            </div>
          </div>
        </div>
        <div class="col-stats stats-cell">
          <div class="stat-pill-group">
            <span class="stat-mini-pill">Bài: ${escapeHtml(String(stats.completedModulesCount || 0))}</span>
            <span class="stat-mini-pill">Hán tự: ${escapeHtml(String(stats.learnedKanjiCount || 0))}</span>
            <span class="stat-mini-pill">Thi: ${escapeHtml(String(stats.bestExamScore || 0))}/20</span>
          </div>
        </div>
        <div class="col-xp xp-cell">
          ${stats.totalXp || 0} XP
        </div>
      </div>
    `;
  }).join('');
}


function renderSyncTab() {
  const statusEl = document.getElementById('cloud-sync-status');
  if (statusEl && statusEl.textContent === 'Đang kết nối máy chủ...') {
    statusEl.textContent = 'Chưa đồng bộ';
  }
}


async function handleCloudSync() {
  const statusEl = document.getElementById('cloud-sync-status');
  const syncBtn = document.getElementById('btn-cloud-sync');

  if (statusEl) {
    statusEl.className = 'sync-status-label';
    statusEl.textContent = 'Đang kết nối máy chủ...';
  }
  if (syncBtn) syncBtn.disabled = true;

  try {
    if (window.AuthEngine && typeof window.AuthEngine.syncWithServer === 'function') {
      const res = await window.AuthEngine.syncWithServer();
      if (res && res.success) {
        if (statusEl) {
          statusEl.className = 'sync-status-label success';
          statusEl.textContent = `✓ Đã đồng bộ lúc ${new Date().toLocaleTimeString()}`;
        }
        showToast('Đồng bộ tiến độ học tập với máy chủ thành công!');
        updateHeaderProgress();
      } else {
        if (statusEl) {
          statusEl.className = 'sync-status-label error';
          statusEl.textContent = `⚠️ ${res.error || 'Lỗi kết nối máy chủ'}`;
        }
        showToast(`Đồng bộ máy chủ: ${res.error || 'Chế độ ngoại tuyến'}`);
      }
    }
  } catch (err) {
    if (statusEl) {
      statusEl.className = 'sync-status-label error';
      statusEl.textContent = '⚠️ Ngoại lệ kết nối máy chủ';
    }
  } finally {
    if (syncBtn) syncBtn.disabled = false;
  }
}


function handleExportSyncCode() {
  if (!window.AuthEngine || typeof window.AuthEngine.exportSyncCode !== 'function') return;
  const user = window.AuthEngine.getCurrentUser();
  const uid = user ? user.uid : 'guest';
  const code = window.AuthEngine.exportSyncCode(uid);

  const wrapper = document.getElementById('export-code-wrapper');
  const output = document.getElementById('sync-code-output');

  if (output) output.value = code;
  if (wrapper) wrapper.style.display = 'flex';

  showToast('Đã tạo mã sao lưu di động thành công!');
}


function handleDownloadBackupFile() {
  const user = (window.AuthEngine && typeof window.AuthEngine.getCurrentUser === 'function')
    ? window.AuthEngine.getCurrentUser()
    : null;
  const uid = user ? user.uid : 'guest';
  const se = (typeof StorageEngine !== 'undefined') ? StorageEngine : null;
  const snapshot = se && typeof se.exportUserProgressSnapshot === 'function'
    ? se.exportUserProgressSnapshot(uid)
    : { data: {} };

  const backupData = {
    app: 'MinnaNoNihongo_JLPT',
    version: 1,
    exportedAt: new Date().toISOString(),
    user: user || { uid: 'guest', username: 'guest', displayName: 'Học viên Khách', avatar: 'tanuki', levelGoal: 'N5' },
    snapshot: snapshot
  };

  const jsonStr = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `minna_backup_${user ? user.username : 'guest'}_${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);

  showToast('Đã tải file sao lưu (.json) thành công!');
}


function handleBackupFileSelected(event) {
  const file = event.target && event.target.files ? event.target.files[0] : null;
  const nameLabel = document.getElementById('selected-file-name');
  if (!file) return;

  if (nameLabel) nameLabel.textContent = file.name;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = String(e.target.result || '').trim();
    const inputArea = document.getElementById('sync-code-input');
    if (text.startsWith('MINNA_SYNC_V1:')) {
      if (inputArea) inputArea.value = text;
    } else {
      try {
        const parsed = JSON.parse(text);
        if (parsed.snapshot && window.StorageEngine && typeof window.StorageEngine.importUserProgressSnapshot === 'function') {
          const user = (window.AuthEngine && typeof window.AuthEngine.getCurrentUser === 'function')
            ? window.AuthEngine.getCurrentUser()
            : null;
          const targetUid = user ? user.uid : 'guest';
          const res = window.StorageEngine.importUserProgressSnapshot(targetUid, parsed.snapshot, true);
          showToast(`Đã nhập trực tiếp ${res.count || 0} mục tiến độ từ file JSON!`);
          refreshAppOnAccountChange(user);
          const statusEl = document.getElementById('import-sync-status');
          if (statusEl) {
            statusEl.className = 'sync-status-label success';
            statusEl.textContent = `✓ Đã nhập thành công ${res.count || 0} mục`;
          }
        }
      } catch (err) {
        showToast('File JSON không đúng định dạng sao lưu Minna.');
      }
    }
  };
  reader.readAsText(file);
}


function handleImportSyncData() {
  const input = document.getElementById('sync-code-input');
  const statusEl = document.getElementById('import-sync-status');
  const rawCode = input ? input.value.trim() : '';

  if (!rawCode) {
    if (statusEl) {
      statusEl.className = 'sync-status-label error';
      statusEl.textContent = 'Vui lòng dán mã MINNA_SYNC_V1:...';
    }
    showToast('Chưa nhập mã sao lưu.');
    return;
  }

  if (!window.AuthEngine || typeof window.AuthEngine.importSyncCode !== 'function') {
    showToast('Động cơ AuthEngine chưa sẵn sàng.');
    return;
  }

  const res = window.AuthEngine.importSyncCode(rawCode, true);
  if (res && res.success) {
    if (statusEl) {
      statusEl.className = 'sync-status-label success';
      statusEl.textContent = `✓ Đã nhập thành công ${res.importedKeys} mục tiến độ!`;
    }
    showToast(`Nhập tiến độ thành công! Đã gộp ${res.importedKeys} mục.`);
    if (input) input.value = '';
    const user = window.AuthEngine.getCurrentUser();
    refreshAppOnAccountChange(user);
  } else {
    if (statusEl) {
      statusEl.className = 'sync-status-label error';
      statusEl.textContent = `⚠️ ${res ? res.error : 'Nhập thất bại'}`;
    }
    showToast(`Lỗi nhập tiến độ: ${res ? res.error : 'Không hợp lệ'}`);
  }
}


function copySyncCodeToClipboard() {
  const output = document.getElementById('sync-code-output');
  if (!output || !output.value) {
    showToast('Chưa có mã sao lưu để sao chép.');
    return;
  }
  if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(output.value)
      .then(() => showToast('Đã sao chép mã sao lưu vào bộ nhớ tạm!'))
      .catch(() => {
        output.select();
        document.execCommand('copy');
        showToast('Đã sao chép mã sao lưu!');
      });
  } else {
    output.select();
    document.execCommand('copy');
    showToast('Đã sao chép mã sao lưu!');
  }
}


function refreshAppOnAccountChange(newUser) {
  const user = newUser || (window.AuthEngine && typeof window.AuthEngine.getCurrentUser === 'function' ? window.AuthEngine.getCurrentUser() : null);

  if (typeof renderSidebar === 'function') {
    renderSidebar();
  }

  if (typeof updateHeaderProgress === 'function') {
    updateHeaderProgress();
  }

  if (typeof switchModule === 'function' && typeof currentActiveId !== 'undefined') {
    switchModule(currentActiveId, false);
  }

  renderUserAccountUI();

  const displayName = user ? user.displayName : 'Học viên Khách';
  showToast(`Đã chuyển sang: ${displayName}`);
}

window.toggleTheme = toggleTheme;
window.toggleFurigana = toggleFurigana;
window.openUserAccountModal = openUserAccountModal;
window.closeUserAccountModal = closeUserAccountModal;
window.switchAccountModalTab = switchAccountModalTab;
window.toggleProfileEditDrawer = toggleProfileEditDrawer;
window.saveProfileChanges = saveProfileChanges;
window.setAuthFormMode = setAuthFormMode;
window.handleAuthFormSubmit = handleAuthFormSubmit;
window.handleQuickSwitchAccount = handleQuickSwitchAccount;
window.handleDeleteAccountPrompt = handleDeleteAccountPrompt;
window.closeAccountPinModal = closeAccountPinModal;
window.handleLogoutAccount = handleLogoutAccount;
window.handleCloudSync = handleCloudSync;
window.handleExportSyncCode = handleExportSyncCode;
window.handleDownloadBackupFile = handleDownloadBackupFile;
window.handleBackupFileSelected = handleBackupFileSelected;
window.handleImportSyncData = handleImportSyncData;
window.copySyncCodeToClipboard = copySyncCodeToClipboard;
window.renderUserAccountChips = renderUserAccountChips;
window.renderUserAccountUI = renderUserAccountUI;
window.refreshAppOnAccountChange = refreshAppOnAccountChange;
window.computeXpProgressPercent = computeXpProgressPercent;
window.toggleAuthFormDrawer = toggleAuthFormDrawer;
window.toggleSyncPasteInput = toggleSyncPasteInput;


if (document && document.addEventListener) {
  document.addEventListener('DOMContentLoaded', () => {

    if (window.AuthEngine && typeof window.AuthEngine.init === 'function') {
      try {
        window.AuthEngine.init();
      } catch (e) {
        console.warn('[Bootstrap] Ngoại lệ khởi tạo AuthEngine:', e);
      }
    }

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
    initUserAccountUI();

    renderSidebar();
    updateHeaderProgress();

    const hashId = (typeof window !== 'undefined' && window.location && window.location.hash ? window.location.hash : '').replace('#', '');
    const savedLastActive = safeGetStorage(STORAGE_LAST_ACTIVE_KEY);
    const initialId = hashId || savedLastActive || 'bai-1';

    switchModule(initialId, false);
    startIdlePrefetch();

    if (typeof StudyToolsEngine !== 'undefined' && typeof StudyToolsEngine.initTapToLookup === 'function') {
      try { StudyToolsEngine.initTapToLookup(); } catch (_e) {}
    }
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && window.location && /^https?:/.test(window.location.protocol)) {
      try { navigator.serviceWorker.register('./sw.js').catch(() => {}); } catch (_e) {}
    }
  });
}


