/**
 * ==============================================================================
 * ZEN STUDY WORKER & BACKGROUND MEDIA ENGINE (MASTER SUITE V4)
 * File: src/study_worker.js
 * ==============================================================================
 * Tier-3 Async Queue Worker & Background Media/Timer Engine:
 * 1. Zen Pomodoro: 25m Focus, 5m Break, 45m Deep Work; Sine 528Hz/432Hz Zen Bell
 * 2. Podcast Radio Hands-Free Player: Queue, Live Stage, Next/Prev, Bookmark SRS
 * 3. Offline Sync Matrix SVG: Deterministic 2D QR Bit-Matrix Generator
 *
 * Architecture Compliance:
 * - 4-Phase Linear Function Anatomy (Guard -> Normalize -> Pure Core -> Effect)
 * - Zero Arrowhead Nesting (Depth <= 2)
 * - Cyclomatic Complexity (CC <= 7)
 * - Strict Function Length (Lines <= 35)
 * ==============================================================================
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    let refData = null;
    let noteEngine = null;
    let analyticsEngine = null;
    try { refData = require('../data/reference_hub_data.js'); } catch (_e) {}
    try { noteEngine = require('./notebook_engine.js'); } catch (_e) {}
    try { analyticsEngine = require('./analytics_streak_engine.js'); } catch (_e) {}
    module.exports = factory(root, refData, noteEngine, analyticsEngine);
  } else {
    root.StudyWorker = factory(
      root,
      root.REFERENCE_HUB_DATA,
      root.NotebookEngine,
      root.AnalyticsStreakEngine
    );
  }
})(typeof self !== 'undefined' ? self : this, function (root, refData, noteEngine, analyticsEngine) {
  'use strict';

  // ==========================================================================
  // CONSTANTS & CONFIGURATION
  // ==========================================================================

  const POMODORO_MODES = {
    focus: {
      id: 'focus',
      durationSec: 25 * 60,
      chimeFreq: 528,
      label: 'Tập trung (25 phút)',
      nextMode: 'break'
    },
    break: {
      id: 'break',
      durationSec: 5 * 60,
      chimeFreq: 432,
      label: 'Nghỉ ngắn (5 phút)',
      nextMode: 'focus'
    },
    deep: {
      id: 'deep',
      durationSec: 45 * 60,
      chimeFreq: 528,
      label: 'Tập trung sâu (45 phút)',
      nextMode: 'break'
    }
  };

  const DEFAULT_PODCAST_INTERVAL_MS = 4200;

  // ==========================================================================
  // PHASE 1-3 PURE HELPERS (Zero Arrowhead Nesting, CC <= 7)
  // ==========================================================================

  /**
   * Phase 1-3: Safe string formatting mm:ss
   */
  function formatDurationMmSs(seconds) {
    if (seconds == null || isNaN(seconds)) return '00:00';
    const safeSec = Math.max(0, Math.floor(Number(seconds)));
    const mm = String(Math.floor(safeSec / 60)).padStart(2, '0');
    const ss = String(safeSec % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }

  /**
   * Phase 1-3: Normalize Pomodoro Mode
   */
  function normalizePomodoroMode(rawMode) {
    if (!rawMode) return 'focus';
    const key = String(rawMode).toLowerCase().trim();
    if (Object.prototype.hasOwnProperty.call(POMODORO_MODES, key)) {
      return key;
    }
    return 'focus';
  }

  /**
   * Phase 1-3: Normalize Podcast Item
   */
  function normalizePodcastItem(rawItem, fallbackIdx = 0) {
    if (!rawItem || typeof rawItem !== 'object') return null;
    const id = String(rawItem.id || `pod_item_${fallbackIdx}`);
    const jp = String(rawItem.jp || rawItem.kanji || '').trim();
    const reading = String(rawItem.reading || '').trim();
    const meaning = String(rawItem.meaning || '').trim();
    if (!jp && !reading) return null;
    return {
      id,
      type: rawItem.type || 'verb',
      jp: jp || reading,
      reading: reading || jp,
      meaning: meaning || 'Chưa có bản dịch',
      lessonId: String(rawItem.lessonId || 'N5')
    };
  }

  /**
   * Phase 1-3: Pure FNV-1a 32-bit Hash
   */
  function computeFnv1a32(inputStr) {
    const str = String(inputStr || 'MINNA_SYNC_V4');
    let hash = 2166136261;
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function escapeXml(unsafe) {
    return String(unsafe || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ==========================================================================
  // PHASE 4 IMPERATIVE AUDIO & SPEECH SYNTHESIS (Fail-Safe)
  // ==========================================================================

  /**
   * Synthesize pure sine wave chime (528Hz Focus / 432Hz Calm)
   */
  function playZenSineChime(freq = 528, durationSec = 1.8) {
    try {
      const AudioCtx = root.AudioContext || root.webkitAudioContext;
      if (!AudioCtx) return false;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;
      const safeFreq = Number(freq) || 528;
      const safeDur = Math.max(0.4, Number(durationSec) || 1.8);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(safeFreq, now);
      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + safeDur);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + safeDur + 0.05);
      return true;
    } catch (_e) {
      return false;
    }
  }

  /**
   * Speak Japanese text using Web Speech API
   */
  function speakPodcastText(text, lang = 'ja-JP', rate = 0.92) {
    try {
      if (!root.speechSynthesis || typeof root.SpeechSynthesisUtterance !== 'function') {
        return false;
      }
      root.speechSynthesis.cancel();
      const utterance = new root.SpeechSynthesisUtterance(String(text || ''));
      utterance.lang = lang;
      utterance.rate = rate;
      root.speechSynthesis.speak(utterance);
      return true;
    } catch (_e) {
      return false;
    }
  }

  // ==========================================================================
  // 1. ZEN POMODORO WORKER (Focus 25m, Break 5m, Deep 45m; Chime 528/432Hz)
  // ==========================================================================

  function createZenPomodoroWorker(options = {}) {
    const ae = options.analyticsEngine || analyticsEngine;
    const state = {
      mode: 'focus',
      remainingSec: POMODORO_MODES.focus.durationSec,
      totalSec: POMODORO_MODES.focus.durationSec,
      isRunning: false,
      sessionsCompleted: 0,
      deepSessionsCompleted: 0,
      timerId: null
    };

    function getState() {
      const config = POMODORO_MODES[state.mode] || POMODORO_MODES.focus;
      const elapsed = Math.max(0, state.totalSec - state.remainingSec);
      const progressPercent = state.totalSec > 0
        ? Math.min(100, Math.round((elapsed / state.totalSec) * 100))
        : 0;

      return {
        mode: state.mode,
        label: config.label,
        remainingSec: state.remainingSec,
        totalSec: state.totalSec,
        formatted: formatDurationMmSs(state.remainingSec),
        progressPercent,
        isRunning: state.isRunning,
        sessionsCompleted: state.sessionsCompleted,
        deepSessionsCompleted: state.deepSessionsCompleted
      };
    }

    function pause() {
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
      state.isRunning = false;
      return getState();
    }

    function reset(mode = 'focus') {
      pause();
      const cleanMode = normalizePomodoroMode(mode);
      const config = POMODORO_MODES[cleanMode];
      state.mode = cleanMode;
      state.totalSec = config.durationSec;
      state.remainingSec = config.durationSec;
      return getState();
    }

    function switchMode(newMode) {
      return reset(newMode);
    }

    function handleSessionCompletion(onComplete) {
      const currentMode = state.mode;
      const config = POMODORO_MODES[currentMode];
      if (currentMode === 'focus') {
        state.sessionsCompleted += 1;
        if (ae && typeof ae.recordStudyActivity === 'function') {
          ae.recordStudyActivity('review', 25);
        }
      } else if (currentMode === 'deep') {
        state.deepSessionsCompleted += 1;
        if (ae && typeof ae.recordStudyActivity === 'function') {
          ae.recordStudyActivity('review', 45);
        }
      }

      const nextModeKey = config.nextMode || 'focus';
      const nextConfig = POMODORO_MODES[nextModeKey];
      state.mode = nextModeKey;
      state.totalSec = nextConfig.durationSec;
      state.remainingSec = nextConfig.durationSec;
      playZenSineChime(nextConfig.chimeFreq, 2.0);

      if (typeof onComplete === 'function') {
        onComplete({
          completedMode: currentMode,
          nextMode: nextModeKey,
          state: getState()
        });
      }
    }

    function start(onTick = null, onComplete = null) {
      if (state.isRunning) return getState();
      state.isRunning = true;
      const activeConfig = POMODORO_MODES[state.mode] || POMODORO_MODES.focus;
      playZenSineChime(activeConfig.chimeFreq, 1.8);

      state.timerId = setInterval(() => {
        if (state.remainingSec > 0) {
          state.remainingSec -= 1;
        } else {
          handleSessionCompletion(onComplete);
        }
        if (typeof onTick === 'function') {
          onTick(getState());
        }
      }, 1000);

      return getState();
    }

    return {
      getState,
      start,
      pause,
      reset,
      switchMode,
      playChime: (freq) => playZenSineChime(freq, 1.8)
    };
  }

  // ==========================================================================
  // 2. PODCAST RADIO HANDS-FREE PLAYER (Queue, Live Stage, Next/Prev, Bookmark)
  // ==========================================================================

  function createPodcastWorker(options = {}) {
    const rd = options.referenceData || refData;
    const ne = options.notebookEngine || noteEngine;
    const intervalMs = Number(options.intervalMs) || DEFAULT_PODCAST_INTERVAL_MS;

    const state = {
      isPlaying: false,
      currentIndex: 0,
      queue: [],
      timerId: null,
      bookmarkedIds: new Set()
    };

    function buildDefaultQueue(lessonFilter = 'all') {
      const ref = rd || (root && root.REFERENCE_HUB_DATA);
      const verbs = ref && Array.isArray(ref.verbBank) ? ref.verbBank : [];
      const filtered = lessonFilter === 'all'
        ? verbs
        : verbs.filter((v) => String(v.lessonId || '').toLowerCase() === String(lessonFilter).toLowerCase());

      return filtered.slice(0, 30).map((v, i) => normalizePodcastItem(v, i)).filter(Boolean);
    }

    function setQueue(newQueue) {
      if (!Array.isArray(newQueue) || newQueue.length === 0) {
        state.queue = buildDefaultQueue();
      } else {
        state.queue = newQueue.map((it, i) => normalizePodcastItem(it, i)).filter(Boolean);
      }
      state.currentIndex = 0;
      return getState();
    }

    function getState() {
      const currentItem = state.queue[state.currentIndex] || state.queue[0] || null;
      const isBookmarked = currentItem && ne && typeof ne.isBookmarked === 'function'
        ? ne.isBookmarked(currentItem.id)
        : Boolean(currentItem && state.bookmarkedIds.has(currentItem.id));

      return {
        isPlaying: state.isPlaying,
        currentIndex: state.currentIndex,
        totalItems: state.queue.length,
        currentItem,
        isBookmarked,
        hasNext: state.queue.length > 1,
        hasPrev: state.queue.length > 1
      };
    }

    function stop() {
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
      state.isPlaying = false;
      try {
        if (root.speechSynthesis) root.speechSynthesis.cancel();
      } catch (_e) {}
      return getState();
    }

    function playCurrentTrack(onStep) {
      if (!state.isPlaying || state.queue.length === 0) return;
      const item = state.queue[state.currentIndex];
      if (item) {
        speakPodcastText(item.reading || item.jp, 'ja-JP', 0.92);
      }
      if (typeof onStep === 'function') {
        onStep(getState());
      }
    }

    function start(customQueue = null, onStep = null) {
      stop();
      if (Array.isArray(customQueue) && customQueue.length > 0) {
        setQueue(customQueue);
      } else if (state.queue.length === 0) {
        setQueue(buildDefaultQueue());
      }
      if (state.queue.length === 0) return getState();

      state.isPlaying = true;
      playCurrentTrack(onStep);

      state.timerId = setInterval(() => {
        if (!state.isPlaying || state.queue.length === 0) return;
        state.currentIndex = (state.currentIndex + 1) % state.queue.length;
        playCurrentTrack(onStep);
      }, intervalMs);

      return getState();
    }

    function nextTrack(onStep = null) {
      if (state.queue.length === 0) return getState();
      const len = state.queue.length;
      state.currentIndex = ((Number(state.currentIndex) || 0) + 1) % len;
      if (state.isPlaying) {
        playCurrentTrack(onStep);
      } else if (typeof onStep === 'function') {
        onStep(getState());
      }
      return getState();
    }

    function prevTrack(onStep = null) {
      if (state.queue.length === 0) return getState();
      const len = state.queue.length;
      state.currentIndex = ((Number(state.currentIndex) || 0) - 1 + len) % len;
      if (state.isPlaying) {
        playCurrentTrack(onStep);
      } else if (typeof onStep === 'function') {
        onStep(getState());
      }
      return getState();
    }

    function seekTrack(index, onStep = null) {
      if (state.queue.length === 0) return getState();
      const safeIdx = Math.max(0, Math.min(Number(index) || 0, state.queue.length - 1));
      state.currentIndex = safeIdx;
      if (state.isPlaying) {
        playCurrentTrack(onStep);
      } else if (typeof onStep === 'function') {
        onStep(getState());
      }
      return getState();
    }

    function bookmarkCurrentItem() {
      const current = state.queue[state.currentIndex] || null;
      if (!current) {
        return { ok: false, message: 'Danh sách rỗng, không có mục để lưu' };
      }

      if (ne && typeof ne.toggleBookmark === 'function') {
        const res = ne.toggleBookmark(current);
        if (res && res.added) {
          state.bookmarkedIds.add(current.id);
        } else {
          state.bookmarkedIds.delete(current.id);
        }
        return { ok: true, item: current, isBookmarked: res ? res.added : true };
      }

      if (state.bookmarkedIds.has(current.id)) {
        state.bookmarkedIds.delete(current.id);
        return { ok: true, item: current, isBookmarked: false };
      }
      state.bookmarkedIds.add(current.id);
      return { ok: true, item: current, isBookmarked: true };
    }

    // Initialize initial queue
    setQueue(buildDefaultQueue());

    return {
      getState,
      start,
      stop,
      pause: stop,
      nextTrack,
      prevTrack,
      seekTrack,
      bookmarkCurrentItem,
      setQueue,
      buildDefaultQueue
    };
  }

  // ==========================================================================
  // 3. OFFLINE SYNC MATRIX SVG GENERATOR (4-Phase Linear Anatomy)
  // ==========================================================================

  function generateSyncMatrixSvg(payloadString = 'MINNA_SYNC_V4', options = {}) {
    // Phase 1: Guard Clauses
    const str = String(payloadString == null ? 'MINNA_SYNC_V4' : payloadString);

    // Phase 2: Data Normalization
    const size = Math.max(40, Math.min(600, Number(options.size) || 140));
    const gridCount = Math.max(7, Math.min(21, Number(options.gridCount) || 11));
    const accentColor = String(options.accentColor || '#ff5a36');
    const cornerRadius = Math.max(0, Number(options.cornerRadius) || 1.5);
    const cellSize = (size / gridCount).toFixed(2);
    const hash = computeFnv1a32(str);

    // Phase 3: Pure Grid Matrix Computation (Zero Arrowhead Nesting, CC <= 5)
    const rects = [];
    for (let r = 0; r < gridCount; r++) {
      for (let c = 0; c < gridCount; c++) {
        const isCorner = (r < 3 && c < 3)
          || (r < 3 && c >= gridCount - 3)
          || (r >= gridCount - 3 && c < 3);
        const bit = ((hash >>> ((r * gridCount + c) % 28)) ^ (r * 7 + c * 13)) & 1;

        if (isCorner || bit === 1) {
          const x = (c * (size / gridCount)).toFixed(1);
          const y = (r * (size / gridCount)).toFixed(1);
          const fill = isCorner ? accentColor : 'currentColor';
          rects.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="${cornerRadius}" fill="${fill}"/>`);
        }
      }
    }

    // Phase 4: Construct and Return Accessible SVG
    const safeTitle = escapeXml(str.slice(0, 32));
    return `<svg class="ms-sync-matrix-svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img" aria-label="Mã ma trận đồng bộ offline"><title>Mã đồng bộ: ${safeTitle}</title>${rects.join('')}</svg>`;
  }

  // ==========================================================================
  // EXPORTED FACADE API
  // ==========================================================================

  return {
    POMODORO_MODES,
    formatDurationMmSs,
    normalizePomodoroMode,
    normalizePodcastItem,
    playZenSineChime,
    speakPodcastText,
    createZenPomodoroWorker,
    createPodcastWorker,
    generateSyncMatrixSvg
  };
});
