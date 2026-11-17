/**
 * Study Tools, Zen Pomodoro, Hands-Free Podcast, Sync Matrix & Master Hub UI Engine
 * Strictly adheres to 4-Phase Linear Function Anatomy (Zero Arrowhead Nesting, CC <= 7).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    let refData = null;
    let conjEngine = null;
    let noteEngine = null;
    let analyticsEngine = null;
    let studyWorker = null;
    let domainServices = null;
    const iconCatalog = require('../data/ui_icons.js');
    try { refData = require('../data/reference_hub_data.js'); } catch (_e) {}
    try { conjEngine = require('./conjugation_engine.js'); } catch (_e) {}
    try { noteEngine = require('./notebook_engine.js'); } catch (_e) {}
    try { analyticsEngine = require('./analytics_streak_engine.js'); } catch (_e) {}
    try { studyWorker = require('./study_worker.js'); } catch (_e) {}
    try { domainServices = require('./domain_services.js'); } catch (_e) {}
    module.exports = factory(root, refData, conjEngine, noteEngine, analyticsEngine, studyWorker, domainServices, iconCatalog);
  } else {
    root.StudyToolsEngine = factory(
      root,
      root.REFERENCE_HUB_DATA,
      root.ConjugationEngine,
      root.NotebookEngine,
      root.AnalyticsStreakEngine,
      root.StudyWorker,
      root.DomainServices
    );
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : this), function (root, refData, conjEngine, noteEngine, analyticsEngine, studyWorker, domainServices, iconCatalog) {
  'use strict';

  const pomodoroState = {
    mode: 'focus',
    remainingSec: 25 * 60,
    totalSec: 25 * 60,
    isRunning: false,
    sessionsCompleted: 0,
    timerId: null
  };

  const podcastState = {
    isPlaying: false,
    currentIndex: 0,
    queue: [],
    timerId: null
  };

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatMmSs(seconds) {
    const safe = Math.max(0, Math.floor(Number(seconds) || 0));
    const mm = String(Math.floor(safe / 60)).padStart(2, '0');
    const ss = String(safe % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }

  const jlptRankIcons = ['sprout', 'katana', 'castle', 'crown'];

  function getMsIcon(name, category) {
    return (iconCatalog || root.APP_ICONS)?.getIcon?.(name, category) || '';
  }

  function getPomodoroState() {
    return {
      mode: pomodoroState.mode,
      remainingSec: pomodoroState.remainingSec,
      totalSec: pomodoroState.totalSec,
      formatted: formatMmSs(pomodoroState.remainingSec),
      isRunning: pomodoroState.isRunning,
      sessionsCompleted: pomodoroState.sessionsCompleted
    };
  }

  function playZenChime(freq = 528) {
    try {
      const AudioCtx = root.AudioContext || root.webkitAudioContext;
      if (!AudioCtx) return false;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(Number(freq) || 528, ctx.currentTime);
      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.85);
      return true;
    } catch (_e) {
      return false;
    }
  }

  function startPomodoro(onTick = null) {
    if (pomodoroState.isRunning) return getPomodoroState();
    pomodoroState.isRunning = true;
    playZenChime(pomodoroState.mode === 'break' ? 432 : 528);
    pomodoroState.timerId = setInterval(() => {
      if (pomodoroState.remainingSec > 0) {
        pomodoroState.remainingSec -= 1;
      } else {
        let nextMode = 'focus';
        let duration = 25 * 60;
        let chimeFreq = 528;

        if (pomodoroState.mode === 'focus') {
          pomodoroState.sessionsCompleted += 1;
          if (analyticsEngine && typeof analyticsEngine.recordStudyActivity === 'function') {
            analyticsEngine.recordStudyActivity('review', 25);
          }
          nextMode = 'break';
          duration = 5 * 60;
          chimeFreq = 432;
        } else if (pomodoroState.mode === 'deep') {
          pomodoroState.sessionsCompleted += 1;
          if (analyticsEngine && typeof analyticsEngine.recordStudyActivity === 'function') {
            analyticsEngine.recordStudyActivity('review', 45);
          }
          nextMode = 'break';
          duration = 5 * 60;
          chimeFreq = 432;
        } else {
          nextMode = 'focus';
          duration = 25 * 60;
          chimeFreq = 528;
        }

        pomodoroState.mode = nextMode;
        pomodoroState.totalSec = duration;
        pomodoroState.remainingSec = duration;
        playZenChime(chimeFreq);
      }
      if (typeof onTick === 'function') onTick(getPomodoroState());
    }, 1000);
    return getPomodoroState();
  }

  function pausePomodoro() {
    if (pomodoroState.timerId) {
      clearInterval(pomodoroState.timerId);
      pomodoroState.timerId = null;
    }
    pomodoroState.isRunning = false;
    return getPomodoroState();
  }

  function resetPomodoro(mode = 'focus') {
    pausePomodoro();
    let cleanMode = 'focus';
    let duration = 25 * 60;
    if (mode === 'break') {
      cleanMode = 'break';
      duration = 5 * 60;
    } else if (mode === 'deep') {
      cleanMode = 'deep';
      duration = 45 * 60;
    }
    pomodoroState.mode = cleanMode;
    pomodoroState.totalSec = duration;
    pomodoroState.remainingSec = duration;
    return getPomodoroState();
  }

  function buildPodcastQueue(lessonId = 'all', customList = null) {
    if (Array.isArray(customList) && customList.length > 0) {
      return customList.slice(0, 30);
    }
    const ref = refData || root.REFERENCE_HUB_DATA;
    const baseVerbs = ref && Array.isArray(ref.verbBank) ? ref.verbBank : [];
    return baseVerbs.slice(0, 20).map((v) => ({
      id: v.id,
      type: 'verb',
      jp: v.kanji,
      reading: v.reading,
      meaning: v.meaning,
      lessonId: lessonId || 'N5'
    }));
  }

  function speakItem(text, lang = 'ja-JP', btnEl = null, ev = null) {
    // Phase 1: Fail-fast guard
    const raw = String(text || '').trim();
    if (!raw) return false;

    // Phase 2 & 3: Delegate to unified Kaiwa-grade pipeline when speakJapanese is active
    if (lang === 'ja-JP' && typeof root.speakJapanese === 'function') {
      root.speakJapanese(raw, btnEl, ev);
      return true;
    }

    // Phase 4: Web Speech fallback with AudioEngine prosody & Neural voice selection
    try {
      if (root.speechSynthesis && typeof root.SpeechSynthesisUtterance === 'function') {
        root.speechSynthesis.cancel();
        const ae = root.AudioEngine || null;
        const normalized = (lang === 'ja-JP' && ae && typeof ae.buildNaturalSpeechText === 'function')
          ? ae.buildNaturalSpeechText(raw)
          : raw;
        const u = new root.SpeechSynthesisUtterance(normalized);
        u.lang = lang;
        if (lang === 'ja-JP' && ae && typeof ae.computeExpressiveProsody === 'function') {
          const prosody = ae.computeExpressiveProsody(normalized, 'sato', false);
          u.rate = prosody ? prosody.rate : 0.96;
          u.pitch = prosody ? prosody.pitch : 1.02;
        } else {
          u.rate = lang === 'ja-JP' ? 0.96 : 1.0;
        }
        if (lang === 'ja-JP' && ae && typeof ae.selectBestJapaneseVoice === 'function' && typeof root.speechSynthesis.getVoices === 'function') {
          const voices = root.speechSynthesis.getVoices() || [];
          const bestVoice = ae.selectBestJapaneseVoice(voices, 'female', 'sato');
          if (bestVoice) u.voice = bestVoice;
        }
        root.speechSynthesis.speak(u);
        return true;
      }
    } catch (_e) {
      // Fallback
    }
    return false;
  }

  function startPodcast(customQueue = null, onStep = null) {
    stopPodcast();
    podcastState.queue = Array.isArray(customQueue) && customQueue.length > 0
      ? customQueue
      : buildPodcastQueue();
    if (podcastState.queue.length === 0) return getPodcastState();

    podcastState.isPlaying = true;
    podcastState.currentIndex = 0;
    const playCurrent = () => {
      if (!podcastState.isPlaying || podcastState.queue.length === 0) return;
      const item = podcastState.queue[podcastState.currentIndex];
      speakItem(item.reading || item.jp, 'ja-JP');
      if (typeof onStep === 'function') onStep(getPodcastState());
      podcastState.currentIndex = (podcastState.currentIndex + 1) % podcastState.queue.length;
    };
    playCurrent();
    podcastState.timerId = setInterval(playCurrent, 4200);
    return getPodcastState();
  }

  function stopPodcast() {
    if (podcastState.timerId) {
      clearInterval(podcastState.timerId);
      podcastState.timerId = null;
    }
    podcastState.isPlaying = false;
    try {
      if (root.speechSynthesis) root.speechSynthesis.cancel();
    } catch (_e) {}
    return getPodcastState();
  }

  function getPodcastState() {
    if (!Array.isArray(podcastState.queue) || podcastState.queue.length === 0) {
      podcastState.queue = buildPodcastQueue();
    }
    const currentItem = podcastState.queue[podcastState.currentIndex] || podcastState.queue[0] || null;
    return {
      isPlaying: podcastState.isPlaying,
      currentIndex: podcastState.currentIndex,
      totalItems: podcastState.queue.length,
      currentItem
    };
  }

  function nextPodcastItem(onStep = null) {
    if (!Array.isArray(podcastState.queue) || podcastState.queue.length === 0) {
      podcastState.queue = buildPodcastQueue();
    }
    if (podcastState.queue.length === 0) return getPodcastState();
    const len = podcastState.queue.length;
    podcastState.currentIndex = ((Number(podcastState.currentIndex) || 0) + 1) % len;
    const item = podcastState.queue[podcastState.currentIndex];
    if (item && podcastState.isPlaying) {
      speakItem(item.reading || item.jp, 'ja-JP');
    }
    const state = getPodcastState();
    if (typeof onStep === 'function') onStep(state);
    return state;
  }

  function prevPodcastItem(onStep = null) {
    if (!Array.isArray(podcastState.queue) || podcastState.queue.length === 0) {
      podcastState.queue = buildPodcastQueue();
    }
    if (podcastState.queue.length === 0) return getPodcastState();
    const len = podcastState.queue.length;
    podcastState.currentIndex = ((Number(podcastState.currentIndex) || 0) - 1 + len) % len;
    const item = podcastState.queue[podcastState.currentIndex];
    if (item && podcastState.isPlaying) {
      speakItem(item.reading || item.jp, 'ja-JP');
    }
    const state = getPodcastState();
    if (typeof onStep === 'function') onStep(state);
    return state;
  }

  function bookmarkCurrentPodcastItem() {
    if (!Array.isArray(podcastState.queue) || podcastState.queue.length === 0) {
      podcastState.queue = buildPodcastQueue();
    }
    if (podcastState.queue.length === 0) {
      return { ok: false, message: 'Danh sách rỗng' };
    }
    const safeIdx = Math.max(0, Math.min(Number(podcastState.currentIndex) || 0, podcastState.queue.length - 1));
    const item = podcastState.queue[safeIdx] || null;
    if (!item) return { ok: false, message: 'Danh sách rỗng' };
    const ne = noteEngine || root.NotebookEngine;
    if (ne && typeof ne.toggleBookmark === 'function') {
      const res = ne.toggleBookmark(item);
      return { ok: true, item, isBookmarked: res ? res.added : true };
    }
    return { ok: true, item, isBookmarked: true };
  }

  function generateSyncMatrixSvg(payloadString = 'MINNA_SYNC_V4', size = 140) {
    const str = String(payloadString || 'MINNA_SYNC_V4');
    const gridCount = 11;
    const cellSize = (size / gridCount).toFixed(2);
    let hash = 2166136261;
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }

    const rects = [];
    for (let r = 0; r < gridCount; r++) {
      for (let c = 0; c < gridCount; c++) {
        const isCorner = (r < 3 && c < 3) || (r < 3 && c >= gridCount - 3) || (r >= gridCount - 3 && c < 3);
        const bit = ((hash >>> ((r * gridCount + c) % 28)) ^ (r * 7 + c * 13)) & 1;
        if (isCorner || bit === 1) {
          const x = (c * (size / gridCount)).toFixed(1);
          const y = (r * (size / gridCount)).toFixed(1);
          rects.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="1.5" fill="${isCorner ? '#ff5a36' : 'currentColor'}"/>`);
        }
      }
    }
    return `<svg class="ms-sync-matrix-svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img" aria-label="Mã đồng bộ tiến độ">${rects.join('')}</svg>`;
  }

  function initHubState(initialTab) {
    const validTabs = ['conjugation', 'notebook', 'reference', 'analytics'];
    const safeTab = validTabs.includes(initialTab) ? initialTab : 'conjugation';
    return {
      activeTab: safeTab,
      conjMode: 'all',
      conjIndex: 0,
      conjScore: 0,
      conjCombo: 0,
      conjStreak: 0,
      conjFeedback: null,
      conjDrills: null,
      matrixWordType: 'verb',
      matrixWordId: 'v01',
      expandAllFormulas: false,
      nbQuery: '',
      nbFilter: 'all',
      nbSection: 'bookmarks',
      showAddBookmark: false,
      refSubTab: 'kana',
      timeSection: 'timeline',
      checkedInToday: false
    };
  }

  const hubTabs = [
    { id: 'conjugation', icon: 'bolt', label: 'Phản xạ', title: 'Trung tâm phản xạ' },
    { id: 'notebook', icon: 'notebook', label: 'Sổ tay', title: 'Sổ tay cá nhân' },
    { id: 'reference', icon: 'reference', label: 'Tra cứu', title: 'Tra cứu tiếng Nhật' },
    { id: 'analytics', icon: 'radar', label: 'Phân tích JLPT', title: 'Phân tích JLPT' }
  ];

  function renderTabsNav(activeTab) {
    const buttons = hubTabs.map((t) => (
      `<button type="button" class="ms-tab-btn ${activeTab === t.id ? 'is-active' : ''}" data-ms-tab="${t.id}" aria-pressed="${activeTab === t.id}">${getMsIcon(t.icon)} <span>${t.label}</span></button>`
    )).join('');
    return `<nav class="ms-tabs-nav" aria-label="Công cụ học tập">${buttons}</nav>`;
  }

  function renderConjModeBar(activeMode) {
    const modes = [
      { id: 'all', label: 'Tổng Hợp', icon: 'target' },
      { id: 'verb', label: '10 Thể Động Từ', icon: 'bolt' },
      { id: 'adj', label: 'Tính Từ (い/な)', icon: 'star' },
      { id: 'counter', label: 'Đếm Lượng Từ', icon: 'reference' }
    ];
    const chips = modes.map((m) => (
      `<button type="button" class="ms-mode-chip ${activeMode === m.id ? 'is-active' : ''}" data-ms-action="set-drill-mode" data-mode="${m.id}" aria-pressed="${activeMode === m.id}">${getMsIcon(m.icon)} ${m.label}</button>`
    )).join('');
    return `<div class="ms-mode-bar ms-drill-modes" role="group" aria-label="Dạng bài luyện">${chips}</div>`;
  }

  function formatPromptWithJapanese(prompt) {
    if (!prompt) return '';
    const escaped = escapeHtml(prompt);
    return escaped
      .replace(/「(.*?)」/g, '「<span class="ms-jp-text ms-prompt-highlight">$1</span>」')
      .replace(/(Thể\s+)([^\s(:（]+)/g, '$1<span class="ms-jp-text ms-prompt-form">$2</span>');
  }

  function renderConjReflexCard(state, current, totalCount) {
    const rawOptions = (current && Array.isArray(current.options)) ? current.options : [(current && current.answer) || ''].filter(Boolean);
    const optionsHtml = rawOptions.map((opt) => (
      `<button type="button" class="ms-option-btn" data-ms-action="answer-conj" data-answer="${escapeHtml(opt)}">${escapeHtml(opt)}</button>`
    )).join('');

    const combo = state.conjStreak || state.conjCombo || 0;
    const comboHtml = `<span class="ms-badge-crimson">${getMsIcon('flame')} Combo x${combo}</span>`;

    const feedbackHtml = state.conjFeedback
      ? `<div class="ms-feedback-banner ${state.conjFeedback.ok ? 'is-ok' : 'is-err'}">${escapeHtml(state.conjFeedback.msg)}</div>`
      : '';

    const groupInfo = current.isRedemption
      ? '• Câu sai SRS cần phục thù'
      : (current.group ? `• Nhóm ${current.group}` : '');
    const adjInfo = current.adjType ? `• Tính từ đuôi ${String(current.adjType).toUpperCase()}` : '';
    const jlptBadge = current.jlpt ? `<span class="ms-badge-indigo" style="font-size:0.75rem;padding:0.15rem 0.5rem;">JLPT ${current.jlpt}</span>` : '';
    const wordBadge = current.isRedemption
      ? `<span class="ms-badge-crimson" style="font-size:0.75rem;padding:0.15rem 0.5rem;">${getMsIcon('flame')} Phục Thù Câu Sai SRS</span>`
      : (current.group ? `<span class="ms-badge-indigo" style="font-size:0.75rem;padding:0.15rem 0.5rem;">Nhóm ${current.group}</span>` : (current.adjType ? `<span class="ms-badge-indigo" style="font-size:0.75rem;padding:0.15rem 0.5rem;">Đuôi ${String(current.adjType).toUpperCase()}</span>` : ''));
    const ruleTip = current.ruleExplanation || current.explanation || 'Ghi nhớ quy tắc chuyển đuôi và các dạng biến âm bất quy tắc.';
    const sourceWord = current.reading || current.kanji || current.dict || '';

    return `
      <section class="ms-card ms-drill-card" aria-labelledby="ms-drill-heading">
        <div class="ms-card-header">
          <h3 class="ms-section-subtitle" id="ms-drill-heading">Luyện phản xạ</h3>
          <div class="ms-drill-status">
            <span class="ms-subtext">Câu ${state.conjIndex + 1}/${totalCount}</span>
            ${comboHtml}
            <span class="ms-score-pill">Điểm: ${state.conjScore || 0}/${totalCount}</span>
          </div>
        </div>
        <h4 class="ms-question-title">${formatPromptWithJapanese(current.prompt || current.question || '')}</h4>
        <p class="ms-subtext">Ý nghĩa: <strong>${escapeHtml(current.meaning || '')}</strong> ${groupInfo} ${adjInfo}</p>
        <div class="ms-drill-status">
          ${wordBadge}
          ${jlptBadge}
          ${sourceWord ? `<button type="button" class="ms-audio-mini-btn" data-ms-action="speak-jp" data-jp="${escapeHtml(sourceWord)}" aria-label="Nghe từ gốc" title="Nghe từ gốc">${getMsIcon('speaker')}</button>` : ''}
        </div>
        <div class="ms-options-grid">${optionsHtml}</div>
        ${feedbackHtml}
        <details class="ms-details-drawer">
          <summary class="ms-details-summary">Xem quy tắc chia thể</summary>
          <div class="ms-details-body">${escapeHtml(ruleTip)}</div>
        </details>
        <button type="button" class="ms-action-btn-sm ms-refresh-drill" data-ms-action="refresh-drills">${getMsIcon('refresh')} Đổi bộ câu hỏi</button>
      </section>
    `;
  }

  function splitFormLabel(label) {
    if (!label) return { main: '', sub: '' };
    const str = String(label).trim();
    const match = str.match(/^([^(]+)(?:\((.*)\))?$/);
    if (!match) return { main: str, sub: '' };
    return {
      main: (match[1] || '').trim(),
      sub: (match[2] || '').trim()
    };
  }

  function extractContextualFormula(currentWord, formObj, isVerb, ce) {
    if (!formObj) return '';
    const word = currentWord || {};
    if (ce && typeof ce.getContextualFormula === 'function') {
      const res = ce.getContextualFormula(word, formObj.key, isVerb);
      if (res) return res;
    }
    if (isVerb && ce && typeof ce.getVerbFormulaDetail === 'function') {
      const detail = ce.getVerbFormulaDetail(word.reading, word.group, formObj.key);
      if (detail && detail.rule) return detail.rule;
    }
    const formula = String(formObj.formula || '').trim();
    if (!formula.includes('|')) return formula;
    const segments = formula.split('|').map((s) => s.trim());
    if (isVerb) {
      const target = `Nhóm ${word.group || 1}`;
      const found = segments.find((s) => s.includes(target));
      return found || segments[0] || formula;
    }
    const type = word.type || word.adjType || 'i';
    const target = type === 'na' ? 'Tính từ な' : 'Tính từ い';
    const found = segments.find((s) => s.includes(target) || s.includes(`-${type}`));
    return found || segments[0] || formula;
  }

  function renderConjMatrixCard(state) {
    const ce = conjEngine || root.ConjugationEngine;
    const ref = refData || root.REFERENCE_HUB_DATA;
    const isVerb = state.matrixWordType !== 'adj';

    let currentWord = null;
    if (isVerb) {
      currentWord = (ref && typeof ref.getVerbById === 'function' && ref.getVerbById(state.matrixWordId))
        || (ref && ref.verbBank && ref.verbBank.find((v) => v.id === state.matrixWordId))
        || (ref && ref.verbBank && ref.verbBank[0])
        || { kanji: '書く', reading: 'かく', group: 1, id: 'v01' };
    } else {
      currentWord = (ref && typeof ref.getAdjectiveById === 'function' && ref.getAdjectiveById(state.matrixWordId))
        || (ref && ref.adjectiveBank && ref.adjectiveBank.find((a) => a.id === state.matrixWordId))
        || (ref && ref.adjectiveBank && ref.adjectiveBank[0])
        || { kanji: '高い', reading: 'たかい', type: 'i', id: 'a01' };
    }

    if (currentWord && currentWord.id && state.matrixWordId !== currentWord.id) {
      state.matrixWordId = currentWord.id;
    }

    const verbPills = [
      { type: 'verb', id: 'v01', label: '書く (Nhóm 1)' },
      { type: 'verb', id: 'v03', label: '行く (Bất quy tắc)' },
      { type: 'verb', id: 'v19', label: '食べる (Nhóm 2)' },
      { type: 'verb', id: 'v20', label: '見る (Nhóm 2)' },
      { type: 'verb', id: 'v24', label: '来る (Nhóm 3)' },
      { type: 'verb', id: 'v25', label: 'する (Nhóm 3)' }
    ];

    const adjPills = [
      { type: 'adj', id: 'a01', label: '高い (い)' },
      { type: 'adj', id: 'a04', label: 'いい (Bất quy tắc)' },
      { type: 'adj', id: 'a05', label: '静か (な)' },
      { type: 'adj', id: 'a08', label: 'きれい (な)' }
    ];

    const activePills = isVerb ? verbPills : adjPills;
    const quickPills = activePills.map((p) => {
      const isActive = state.matrixWordType === p.type && state.matrixWordId === p.id;
      return `<button type="button" class="ms-verb-pill ${isActive ? 'is-active' : ''}" data-ms-action="select-matrix-word" data-type="${p.type}" data-id="${p.id}">${escapeHtml(p.label)}</button>`;
    }).join('');

    const verbOptions = (ref && ref.verbBank ? ref.verbBank : []).map((v) => (
      `<option value="verb:${v.id}" ${isVerb && state.matrixWordId === v.id ? 'selected' : ''}>[Động từ] ${escapeHtml(v.kanji)} (${escapeHtml(v.reading)})</option>`
    )).join('');

    const adjOptions = (ref && ref.adjectiveBank ? ref.adjectiveBank : []).map((a) => (
      `<option value="adj:${a.id}" ${!isVerb && state.matrixWordId === a.id ? 'selected' : ''}>[Tính từ] ${escapeHtml(a.kanji)} (${escapeHtml(a.reading)})</option>`
    )).join('');

    let tableRows = '';
    if (isVerb && ce) {
      const forms = ce.conjugateVerb(currentWord.reading, currentWord.group) || {};
      tableRows = (ce.VERB_FORMS || []).map((f) => {
        const val = forms[f.key] || '';
        const labelParts = splitFormLabel(f.label);
        const contextFormula = extractContextualFormula(currentWord, f, true, ce);
        return `<tr role="row">
          <td class="ms-col-form" role="cell">
            <span class="ms-form-label-main">${escapeHtml(labelParts.main)}</span>
            ${labelParts.sub ? `<span class="ms-form-label-sub">(${escapeHtml(labelParts.sub)})</span>` : ''}
          </td>
          <td class="ms-col-result" role="cell">
            <div class="ms-result-cell">
              <strong class="ms-jp-text">${escapeHtml(val)}</strong>
              <button type="button" class="ms-audio-mini-btn" data-ms-action="speak-jp" data-jp="${escapeHtml(val)}" title="Nghe phát âm">${getMsIcon('speaker')}</button>
            </div>
          </td>
          <td class="ms-col-formula" role="cell">
            <span class="ms-formula-tag">${escapeHtml(contextFormula)}</span>
            <details class="ms-details-drawer" ${state.expandAllFormulas ? 'open' : ''}>
              <summary class="ms-details-summary">▸ Cách dùng &amp; Quy tắc 3 nhóm</summary>
              <div class="ms-details-body">
                <p class="ms-subtext" style="margin-bottom:0.25rem;"><strong>Ý nghĩa:</strong> ${escapeHtml(f.usageTip || f.desc || '')}</p>
                ${f.formula ? `<div class="ms-subtext" style="font-size:0.75rem;color:var(--ms-muted);"><strong>Công thức tổng quát:</strong> ${escapeHtml(f.formula)}</div>` : ''}
              </div>
            </details>
          </td>
        </tr>`;
      }).join('');
    } else if (ce) {
      const forms = ce.conjugateAdjective(currentWord.reading, currentWord.type || currentWord.adjType || 'i') || {};
      tableRows = (ce.ADJ_FORMS || []).map((f) => {
        const val = forms[f.key] || '';
        const labelParts = splitFormLabel(f.label);
        const contextFormula = extractContextualFormula(currentWord, f, false, ce);
        return `<tr role="row">
          <td class="ms-col-form" role="cell">
            <span class="ms-form-label-main">${escapeHtml(labelParts.main)}</span>
            ${labelParts.sub ? `<span class="ms-form-label-sub">(${escapeHtml(labelParts.sub)})</span>` : ''}
          </td>
          <td class="ms-col-result" role="cell">
            <div class="ms-result-cell">
              <strong class="ms-jp-text">${escapeHtml(val)}</strong>
              <button type="button" class="ms-audio-mini-btn" data-ms-action="speak-jp" data-jp="${escapeHtml(val)}" title="Nghe phát âm">${getMsIcon('speaker')}</button>
            </div>
          </td>
          <td class="ms-col-formula" role="cell">
            <span class="ms-formula-tag">${escapeHtml(contextFormula)}</span>
            <details class="ms-details-drawer" ${state.expandAllFormulas ? 'open' : ''}>
              <summary class="ms-details-summary">▸ Cách dùng &amp; Quy tắc</summary>
              <div class="ms-details-body">
                <p class="ms-subtext" style="margin-bottom:0.25rem;"><strong>Ý nghĩa:</strong> ${escapeHtml(f.usageTip || '')}</p>
                ${f.formula ? `<div class="ms-subtext" style="font-size:0.75rem;color:var(--ms-muted);"><strong>Công thức tổng quát:</strong> ${escapeHtml(f.formula)}</div>` : ''}
              </div>
            </details>
          </td>
        </tr>`;
      }).join('');
    }

    const wordTitleJp = `${currentWord.kanji} (${currentWord.reading})`;
    const wordTitleSuffix = isVerb
      ? ` - Nhóm ${currentWord.group}`
      : ` - Đuôi ${String(currentWord.type || currentWord.adjType || 'i').toUpperCase()}`;

    return `
      <div class="ms-card">
        <div class="ms-card-header">
          <span class="ms-badge-indigo">${getMsIcon('notebook')} Bảng Quy Tắc: <span class="ms-jp-text">${escapeHtml(wordTitleJp)}</span>${escapeHtml(wordTitleSuffix)}</span>
          <div class="ms-mode-bar" style="margin:0;">
            <button type="button" class="ms-mode-chip ${isVerb ? 'is-active' : ''}" data-ms-action="set-matrix-type" data-type="verb">${getMsIcon('bolt')} Động từ (10 thể)</button>
            <button type="button" class="ms-mode-chip ${!isVerb ? 'is-active' : ''}" data-ms-action="set-matrix-type" data-type="adj">${getMsIcon('star')} Tính từ (6 thể)</button>
          </div>
        </div>
        <div class="ms-matrix-toolbar">
          <div class="ms-verb-quick-pills">${quickPills}</div>
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <select id="ms-matrix-word-select" class="ms-select-input" data-ms-action="select-matrix-word" aria-label="Chọn từ tra cứu">
              <optgroup label="Động từ N5-N4 (${(ref && ref.verbBank) ? ref.verbBank.length : 0} từ)">${verbOptions}</optgroup>
              <optgroup label="Tính từ N5-N4 (${(ref && ref.adjectiveBank) ? ref.adjectiveBank.length : 0} từ)">${adjOptions}</optgroup>
            </select>
            <button type="button" class="ms-action-btn-sm" data-ms-action="toggle-matrix-details">${state.expandAllFormulas ? '▾ Thu gọn giải thích' : '▸ Mở rộng tất cả công thức'}</button>
          </div>
        </div>
        <div class="ms-table-wrap ms-matrix-wrap">
          <table class="ms-table ms-matrix-table" role="table" aria-label="Bảng chia thể">
            <thead role="rowgroup">
              <tr role="row">
                <th class="ms-col-form" scope="col" role="columnheader">Thể chia</th>
                <th class="ms-col-result" scope="col" role="columnheader">Kết quả &amp; Nghe</th>
                <th class="ms-col-formula" scope="col" role="columnheader">Công thức áp dụng &amp; Chi tiết</th>
              </tr>
            </thead>
            <tbody role="rowgroup">${tableRows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function buildConjugationTabHtml(state) {
    const ce = conjEngine || root.ConjugationEngine;
    if (!state.conjDrills) {
      state.conjDrills = ce && typeof ce.generateMasterReflexDrill === 'function'
        ? ce.generateMasterReflexDrill(10, state.conjMode || 'all')
        : (ce ? ce.generateConjugationDrill(8) : []);
    }
    const drills = state.conjDrills;
    const current = drills[state.conjIndex || 0] || drills[0];
    if (!current) return '<div class="ms-empty">Không có dữ liệu luyện chia thể.</div>';

    return `
      ${renderConjModeBar(state.conjMode || 'all')}
      <div class="ms-panel-stack">
        ${renderConjReflexCard(state, current, drills.length)}
        ${renderConjMatrixCard(state)}
      </div>
    `;
  }

  function renderNotebookStatsBar(stats) {
    const safeBm = stats && Number.isFinite(stats.totalBookmarks) ? stats.totalBookmarks : 0;
    const safeActive = stats && Number.isFinite(stats.activeMistakesCount) ? stats.activeMistakesCount : 0;
    const safeMastered = stats && Number.isFinite(stats.masteredMistakesCount) ? stats.masteredMistakesCount : 0;
    const safeRate = stats && Number.isFinite(stats.masteryRatePercent)
      ? stats.masteryRatePercent
      : (stats && Number.isFinite(stats.readinessScore) ? stats.readinessScore : 100);

    return `
      <div class="ms-hero-kpis" style="margin-top:0;padding-top:0;border-top:none;">
        <div class="ms-kpi-pill">${getMsIcon('star')} Từ đã lưu <strong>${safeBm}</strong></div>
        <div class="ms-kpi-pill">${getMsIcon('flame')} Câu cần ôn <strong>${safeActive}</strong></div>
        <div class="ms-kpi-pill">${getMsIcon('checkCircle')} Câu đã thuộc <strong>${safeMastered}</strong></div>
        <div class="ms-kpi-pill">${getMsIcon('target')} Tỷ lệ đã thuộc <strong>${safeRate}%</strong></div>
      </div>
    `;
  }

  function renderNotebookToolbar(state, activeMistakesCount) {
    return `
      <div class="ms-notebook-toolbar">
        <input type="search" class="ms-search-input" data-ms-action="search-notebook" aria-label="Tìm trong sổ tay" placeholder="Tìm từ hoặc câu sai" value="${escapeHtml(state.nbQuery || '')}">
        <div class="ms-notebook-actions">
          <button type="button" class="ms-action-btn-sm" data-ms-action="toggle-add-bookmark-form" aria-expanded="${state.showAddBookmark}">${state.showAddBookmark ? 'Đóng biểu mẫu' : '+ Thêm từ'}</button>
          <button type="button" class="ms-primary-btn" data-ms-action="start-redemption-quiz" ${activeMistakesCount === 0 ? 'disabled' : ''}>${getMsIcon('bolt')} Luyện lại (${activeMistakesCount})</button>
        </div>
      </div>
    `;
  }

  function renderAddBookmarkForm(showAddBookmark) {
    if (!showAddBookmark) return '';
    return `
      <div class="ms-card" style="border:1px dashed var(--ms-crimson);">
        <div class="ms-card-header">
          <strong class="ms-section-subtitle">${getMsIcon('star')} Thêm Ghi Chú Từ Vựng Mới Vào Sổ Tay</strong>
        </div>
        <div class="ms-bookmark-fields">
          <input type="text" id="ms-bm-jp" class="ms-search-input" aria-label="Từ Kanji hoặc Kana" placeholder="Từ Kanji / Kana (VD: 勉強)" required>
          <input type="text" id="ms-bm-reading" class="ms-search-input" aria-label="Cách đọc" placeholder="Cách đọc (VD: べんきょう)">
          <input type="text" id="ms-bm-meaning" class="ms-search-input" aria-label="Nghĩa tiếng Việt" placeholder="Nghĩa tiếng Việt">
          <button type="button" class="ms-primary-btn ms-action-btn-sm" data-ms-action="add-custom-bookmark">+ Thêm ghi chú</button>
        </div>
      </div>
    `;
  }

  function renderBookmarkList(bookmarks, query, filter) {
    const cleanQ = String(query || '').toLowerCase().trim();
    const cleanFilter = filter || 'all';
    const list = Array.isArray(bookmarks) ? bookmarks.filter(Boolean) : [];
    const filtered = list.filter((b) => {
      if (!b) return false;
      if (cleanFilter !== 'all' && b.type !== cleanFilter) return false;
      if (!cleanQ) return true;
      return (
        String(b.jp || '').toLowerCase().includes(cleanQ) ||
        String(b.reading || '').toLowerCase().includes(cleanQ) ||
        String(b.meaning || '').toLowerCase().includes(cleanQ)
      );
    });

    if (filtered.length === 0) {
      return '<div class="ms-empty">Chưa có mục đánh dấu nào phù hợp. Hãy thêm từ vựng hoặc nạp Bộ Dữ Liệu Tinh Hoa!</div>';
    }

    return filtered.map((b) => `
      <div class="ms-list-item">
        <div>
          <div style="display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;">
            <strong class="ms-jp-text">${escapeHtml(b.jp)}</strong>
            <span class="ms-reading">(${escapeHtml(b.reading)})</span>
            <button type="button" class="ms-audio-mini-btn" data-ms-action="speak-jp" data-jp="${escapeHtml(b.reading || b.jp)}" title="Phát âm">${getMsIcon('speaker')}</button>
            <span class="ms-badge-indigo" style="font-size:0.7rem;padding:0.1rem 0.4rem;">${escapeHtml(b.type || 'vocab')}</span>
          </div>
          <p class="ms-meaning" style="margin-top:0.2rem;">${escapeHtml(b.meaning)}</p>
        </div>
        <button type="button" class="ms-icon-btn" data-ms-action="remove-bookmark" data-id="${escapeHtml(b.id)}" aria-label="Xóa khỏi sổ tay">${getMsIcon('trash')}</button>
      </div>
    `).join('');
  }

  function renderMistakesList(mistakes, query) {
    const cleanQ = String(query || '').toLowerCase().trim();
    const list = Array.isArray(mistakes) ? mistakes.filter(Boolean) : [];
    const filtered = cleanQ
      ? list.filter((m) => (
          m && (
            String(m.question || '').toLowerCase().includes(cleanQ) ||
            String(m.correctAnswer || '').toLowerCase().includes(cleanQ)
          )
        ))
      : list;

    if (filtered.length === 0) {
      return '<div class="ms-empty">Tuyệt vời! Không có câu sai nào tồn đọng trong Kho Phục Thù SRS.</div>';
    }

    return filtered.map((m) => {
      const streak = Math.max(0, Math.min(2, Number(m.consecutiveCorrect) || 0));
      const streakPct = streak * 50;
      const isMastered = streak >= 2;
      const ruleBox = m.explanation ? `
        <details class="ms-details-drawer" style="margin:0.25rem 0;">
          <summary class="ms-details-summary" style="font-size:0.8rem;">▸ Xem giải thích quy tắc</summary>
          <div class="ms-details-body">
            <div class="ms-rule-box" style="margin:0.25rem 0;font-size:0.8rem;">${getMsIcon('lightbulb')} ${escapeHtml(m.explanation)}</div>
          </div>
        </details>
      ` : '';

      return `
        <div class="ms-list-item is-mistake">
          <div style="flex:1;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;">
              <strong>${formatPromptWithJapanese(m.question)}</strong>
              <span class="ms-badge-crimson" style="font-size:0.75rem;">Sai ${m.wrongCount} lần</span>
            </div>
            <p class="ms-meaning" style="margin-top:0.2rem;">Đáp án chuẩn: <strong class="ms-jp-text">${escapeHtml(m.correctAnswer)}</strong></p>
            ${ruleBox}
            <div class="ms-srs-bar" aria-label="Thanh Tiến Độ SRS"><div class="ms-srs-fill" style="width:${streakPct}%;"></div></div>
            <span class="ms-subtext">Thanh Tiến Độ SRS: <strong>${streak}/2</strong> ${isMastered ? `${getMsIcon('checkCircle')} Đã Mastered` : 'Cần thêm ' + (2 - streak) + ' lần đúng liên tiếp'}</span>
          </div>
          <div class="ms-mistake-actions">
            <button type="button" class="ms-audio-mini-btn" data-ms-action="speak-jp" data-jp="${escapeHtml(m.correctAnswer)}" title="Nghe phát âm">${getMsIcon('speaker')}</button>
            <button type="button" class="ms-action-btn-sm" data-ms-action="resolve-mistake" data-id="${escapeHtml(m.id)}">${getMsIcon('checkCircle')} Đánh dấu ôn đúng</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function buildNotebookTabHtml(state) {
    const ne = noteEngine || root.NotebookEngine;
    const bookmarks = ne ? ne.getBookmarks() : [];
    const mistakes = ne ? ne.getMistakes(false) : [];
    const analytics = ne && typeof ne.getNotebookAnalytics === 'function'
      ? ne.getNotebookAnalytics()
      : { totalBookmarks: bookmarks.length, activeMistakesCount: mistakes.length, masteredMistakesCount: 0, readinessScore: 100 };

    const reviewing = state.nbSection === 'mistakes';
    return `
      <div class="ms-panel-stack">
        ${renderNotebookToolbar(state, mistakes.length)}
        ${renderAddBookmarkForm(state.showAddBookmark)}
        <div class="ms-notebook-sections" role="group" aria-label="Nội dung sổ tay">
          <button type="button" class="ms-mode-chip ${reviewing ? '' : 'is-active'}" data-ms-action="show-notebook-section" data-section="bookmarks" aria-pressed="${!reviewing}">Từ đã lưu (${bookmarks.length})</button>
          <button type="button" class="ms-mode-chip ${reviewing ? 'is-active' : ''}" data-ms-action="show-notebook-section" data-section="mistakes" aria-pressed="${reviewing}">Câu sai (${mistakes.length})</button>
        </div>
        <section class="ms-card" aria-label="${reviewing ? 'Câu sai cần ôn' : 'Từ đã lưu'}">
          ${reviewing ? '' : `<div class="ms-mode-bar ms-bookmark-filters">
            <button type="button" class="ms-mode-chip ${(!state.nbFilter || state.nbFilter === 'all') ? 'is-active' : ''}" data-ms-action="filter-bookmarks" data-filter="all">Tất cả</button>
            <button type="button" class="ms-mode-chip ${state.nbFilter === 'vocab' ? 'is-active' : ''}" data-ms-action="filter-bookmarks" data-filter="vocab">Từ vựng</button>
            <button type="button" class="ms-mode-chip ${state.nbFilter === 'verb' ? 'is-active' : ''}" data-ms-action="filter-bookmarks" data-filter="verb">Động từ</button>
            <button type="button" class="ms-mode-chip ${state.nbFilter === 'grammar' ? 'is-active' : ''}" data-ms-action="filter-bookmarks" data-filter="grammar">Ngữ pháp</button>
          </div>`}
          <div class="ms-list-stack" data-ms-notebook-results>${reviewing ? renderMistakesList(mistakes, state.nbQuery) : renderBookmarkList(bookmarks, state.nbQuery, state.nbFilter)}</div>
        </section>
        <details class="ms-details-drawer">
          <summary class="ms-details-summary">Thống kê ôn tập</summary>
          <div class="ms-details-body">${renderNotebookStatsBar(analytics)}</div>
        </details>
        <details class="ms-details-drawer">
          <summary class="ms-details-summary">Dữ liệu mẫu</summary>
          <div class="ms-details-body ms-notebook-extras">
            <button type="button" class="ms-action-btn-sm" data-ms-action="seed-starter-pack">Nạp bộ dữ liệu N5–N4</button>
            <button type="button" class="ms-action-btn-sm" data-ms-action="seed-sample-bookmark">Lưu từ mẫu</button>
            <button type="button" class="ms-action-btn-sm" data-ms-action="seed-sample-mistake">Thêm câu sai mẫu</button>
          </div>
        </details>
      </div>
    `;
  }

  function renderReferenceSubTabsNav(activeSub) {
    const subs = [
      { id: 'kana', label: '五十音 Kana & Biến Âm (150)' },
      { id: 'counters', label: '助数詞 Lượng Từ (10 nhóm)' },
      { id: 'particles', label: '⚡ Trợ Từ Đối Chiếu (16 cặp)' },
      { id: 'time', label: 'Thời gian &amp; 5W1H' },
      { id: 'keigo', label: 'Tự–tha động từ &amp; Kính ngữ' }
    ];
    const buttons = subs.map((s) => (
      `<button type="button" class="ms-subtab-btn ${activeSub === s.id ? 'is-active' : ''}" data-ms-action="ref-subtab" data-sub="${s.id}">${s.label}</button>`
    )).join('');
    return `<div class="ms-subtab-bar">${buttons}</div>`;
  }

  function renderKanaTopic(ref) {
    const hiraCards = (ref.hiragana || []).map((k) => (
      `<button type="button" class="ms-kana-cell" data-ms-action="speak-jp" data-jp="${escapeHtml(k.char)}" title="${escapeHtml(k.strokeHint || '')}"><span class="ms-kana-char">${escapeHtml(k.char)}</span><span class="ms-kana-romaji">${escapeHtml(k.romaji)}</span></button>`
    )).join('');
    const kataCards = (ref.katakana || []).map((k) => (
      `<button type="button" class="ms-kana-cell" data-ms-action="speak-jp" data-jp="${escapeHtml(k.char)}" title="${escapeHtml(k.strokeHint || '')}"><span class="ms-kana-char">${escapeHtml(k.char)}</span><span class="ms-kana-romaji">${escapeHtml(k.romaji)}</span></button>`
    )).join('');
    const dakuonCards = (ref.dakuon || []).map((k) => {
      const charLabel = k.char || `${k.hira} / ${k.kata}`;
      const speakText = k.char || k.hira || '';
      const hint = k.strokeHint || (k.sampleJp ? `${k.sampleJp} (${k.sampleReading}) - ${k.sampleVi}` : '');
      const sampleText = k.sampleJp ? `<small style="font-size:0.68rem;color:var(--ms-muted);display:block;margin-top:2px;">${escapeHtml(k.sampleJp)}</small>` : '';
      return `<button type="button" class="ms-kana-cell" data-ms-action="speak-jp" data-jp="${escapeHtml(speakText)}" title="${escapeHtml(hint)}"><span class="ms-kana-char" style="font-size:0.95rem;">${escapeHtml(charLabel)}</span><span class="ms-kana-romaji">${escapeHtml(k.romaji || '')}</span>${sampleText}</button>`;
    }).join('');
    const yoonCards = (ref.yoon || []).map((k) => {
      const charLabel = k.char || `${k.hira} / ${k.kata}`;
      const speakText = k.char || k.hira || '';
      const hint = k.strokeHint || (k.sampleJp ? `${k.sampleJp} (${k.sampleReading}) - ${k.sampleVi}` : '');
      const sampleText = k.sampleJp ? `<small style="font-size:0.68rem;color:var(--ms-muted);display:block;margin-top:2px;">${escapeHtml(k.sampleJp)}</small>` : '';
      return `<button type="button" class="ms-kana-cell" data-ms-action="speak-jp" data-jp="${escapeHtml(speakText)}" title="${escapeHtml(hint)}"><span class="ms-kana-char" style="font-size:0.95rem;">${escapeHtml(charLabel)}</span><span class="ms-kana-romaji">${escapeHtml(k.romaji || '')}</span>${sampleText}</button>`;
    }).join('');

    return `
      <div class="ms-grid-2col">
        <div class="ms-card"><h4 class="ms-section-subtitle">Bảng Hiragana (46 chữ cơ bản - Chạm để nghe)</h4><div class="ms-kana-grid">${hiraCards}</div></div>
        <div class="ms-card"><h4 class="ms-section-subtitle">Bảng Katakana (46 chữ cơ bản - Chạm để nghe)</h4><div class="ms-kana-grid">${kataCards}</div></div>
        <div class="ms-card"><h4 class="ms-section-subtitle">Bảng Đục Âm Dakuon / Handakuon (25 chữ - Kèm từ mẫu)</h4><div class="ms-kana-grid">${dakuonCards}</div></div>
        <div class="ms-card"><h4 class="ms-section-subtitle">Bảng Ảo Âm Yoon (33 chữ ghép - Kèm từ mẫu)</h4><div class="ms-kana-grid">${yoonCards}</div></div>
      </div>
    `;
  }

  function renderCountersTopic(ref) {
    const phoneticData = (ref && (ref.counterPhoneticRules || ref.rendakuRules)) || null;
    let phoneticHtml = '';
    if (phoneticData && Array.isArray(phoneticData.rules) && phoneticData.rules.length > 0) {
      const ruleItems = phoneticData.rules.map((r) => {
        const title = r.title || '';
        const counter = r.counter || '';
        const reading = r.reading ? ` (${r.reading})` : '';
        const base = r.baseSound || r.phonetics || '';
        const changes = r.changes || r.formula || '';
        const mnemonic = r.mnemonic || r.condition || '';
        return `
          <div class="ms-rule-box" style="margin-top:0.35rem;padding:0.45rem 0.6rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.4rem;flex-wrap:wrap;">
              <strong>${escapeHtml(title)}</strong>
              ${counter ? `<span class="ms-formula-tag">${escapeHtml(counter)}${escapeHtml(reading)}</span>` : ''}
            </div>
            <div style="font-size:0.8rem;color:var(--ms-crimson);font-weight:600;margin-top:2px;">${escapeHtml(changes)}</div>
            ${base ? `<div class="ms-subtext" style="font-size:0.75rem;">Gốc: ${escapeHtml(base)} • Mẹo: ${escapeHtml(mnemonic)}</div>` : ''}
          </div>
        `;
      }).join('');

      phoneticHtml = `
        <div class="ms-card ms-phonetic-rules-card" style="grid-column: 1 / -1;margin-bottom:0.5rem;">
          <details class="ms-details-drawer" open>
            <summary class="ms-details-summary" style="padding:0.2rem 0;font-size:0.95rem;font-weight:700;">
              <span class="ms-badge-crimson" style="display:inline-flex;">${getMsIcon('lightbulb')} ${escapeHtml(phoneticData.title || 'Hộp Quy Tắc Biến Âm Rendaku')}</span>
            </summary>
            <div class="ms-details-body" style="padding-top:0.4rem;">
              ${phoneticData.summary ? `<p class="ms-subtext" style="margin-bottom:0.4rem;">${escapeHtml(phoneticData.summary)}</p>` : ''}
              <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:0.4rem;">
                ${ruleItems}
              </div>
            </div>
          </details>
        </div>
      `;
    }

    const cards = (ref.counters || []).map((c) => {
      const chips = (c.items || []).map((it) => (
        `<button type="button" class="ms-counter-chip ${it.isIrregular ? 'is-irregular' : ''}" data-ms-action="speak-jp" data-jp="${escapeHtml(it.reading)}"><strong>${escapeHtml(it.kanji)}</strong><span>${escapeHtml(it.reading)}</span></button>`
      )).join('');

      return `
        <div class="ms-card">
          <div class="ms-card-header">
            <strong class="ms-jp-text">${escapeHtml(c.kanji)} (${escapeHtml(c.reading)})</strong>
            <span class="ms-badge-indigo">${escapeHtml(c.meaning)}</span>
          </div>
          <p class="ms-subtext">${escapeHtml(c.usage || '')}</p>
          <div class="ms-counter-chips">${chips}</div>
        </div>
      `;
    }).join('');
    return `<div class="ms-grid-2col">${phoneticHtml}${cards}</div>`;
  }

  function renderParticlesTopic(ref) {
    const rawPool = [
      ...(ref.particles || []),
      ...(ref.extraParticles || []),
      ...(ref.focusedAdvancedParticles || [])
    ];
    const seen = new Set();
    const uniqueParticles = [];
    for (const p of rawPool) {
      if (!p) continue;
      const idKey = String(p.id || '').trim().toLowerCase();
      const normPair = String(p.pairTitle || p.pair || idKey).replace(/\s+/g, '').toLowerCase();
      if (idKey && seen.has(idKey)) continue;
      if (normPair && seen.has(normPair)) continue;
      if (idKey) seen.add(idKey);
      if (normPair) seen.add(normPair);
      uniqueParticles.push(p);
    }

    const cards = uniqueParticles.map((p) => {
      const p1Desc = p.p1 ? `<div class="ms-subtext" style="margin-bottom:2px;"><strong class="ms-badge-indigo" style="font-size:0.75rem;padding:0.1rem 0.4rem;margin-right:0.3rem;">${escapeHtml(p.p1.name)}</strong>${escapeHtml(p.p1.coreRole || '')}</div>` : '';
      const p2Desc = p.p2 ? `<div class="ms-subtext" style="margin-bottom:2px;"><strong class="ms-badge-crimson" style="font-size:0.75rem;padding:0.1rem 0.4rem;margin-right:0.3rem;">${escapeHtml(p.p2.name)}</strong>${escapeHtml(p.p2.coreRole || '')}</div>` : '';
      const formulaHtml = p.formula ? `<div class="ms-formula-tag" style="margin:0.35rem 0;">${escapeHtml(p.formula)}</div>` : '';

      const examplesHtml = (p.examples || []).map((ex) => {
        const speakText = ex.reading || ex.jp || '';
        return `
          <div class="ms-example-item" style="padding:0.35rem 0.5rem;background:rgba(255,255,255,0.03);border-radius:6px;margin-top:0.35rem;display:flex;align-items:flex-start;justify-content:space-between;gap:0.5rem;">
            <div>
              <div class="ms-jp-text" style="font-size:0.95rem;font-weight:600;">${escapeHtml(ex.jp || '')}</div>
              <div class="ms-subtext" style="font-size:0.8rem;color:var(--ms-muted);">${escapeHtml(ex.reading || '')}</div>
              <div style="font-size:0.85rem;margin-top:2px;">${escapeHtml(ex.vi || '')}</div>
            </div>
            ${speakText ? `<button type="button" class="ms-action-btn-sm" data-ms-action="speak-jp" data-jp="${escapeHtml(speakText)}" title="Nghe câu ví dụ" style="flex-shrink:0;">${getMsIcon('speaker')}</button>` : ''}
          </div>
        `;
      }).join('');

      const count = (p.examples || []).length;

      return `
        <div class="ms-card">
          <div class="ms-card-header"><strong class="ms-jp-text">${escapeHtml(p.pairTitle)}</strong></div>
          ${formulaHtml}
          ${p1Desc}
          ${p2Desc}
          <div class="ms-rule-box" style="margin:0.4rem 0;">${getMsIcon('lightbulb')} <strong>Quy tắc cốt lõi:</strong> ${escapeHtml(p.keyRule || '')}</div>
          ${examplesHtml ? `
            <details class="ms-details-drawer" open>
              <summary class="ms-details-summary">▸ Ví dụ song ngữ (${count} câu)</summary>
              <div class="ms-details-body">
                <div class="ms-example-list">${examplesHtml}</div>
              </div>
            </details>
          ` : ''}
        </div>
      `;
    }).join('');
    return `<div class="ms-grid-2col">${cards}</div>`;
  }

  const timeSections = [
    { id: 'timeline', label: 'Mốc thời gian' },
    { id: 'adverbs', label: 'Phó từ' },
    { id: 'questions', label: 'Từ hỏi 5W1H' }
  ];

  function renderReferenceAudio(text, label) {
    if (!text) return '';
    return `<button type="button" class="ms-audio-mini-btn" data-ms-action="speak-jp" data-jp="${escapeHtml(text)}" aria-label="${escapeHtml(label)}">${getMsIcon('speaker')}</button>`;
  }

  function renderReferenceTerm(jp, reading, meaning) {
    return `
      <div class="ms-reference-term">
        <div>
          <strong class="ms-jp-text" lang="ja">${escapeHtml(jp)}</strong>
          ${reading && reading !== jp ? `<span class="ms-reference-reading" lang="ja">${escapeHtml(reading)}</span>` : ''}
          ${meaning ? `<span class="ms-time-meaning">${escapeHtml(meaning)}</span>` : ''}
        </div>
        ${renderReferenceAudio(reading || jp, `Nghe ${jp}`)}
      </div>
    `;
  }

  function renderTimeGroup(row, index) {
    const cells = [row.twoAgo || row.past2, row.oneAgo || row.past1, row.current || row.present, row.oneAhead || row.future1, row.twoAhead || row.future2];
    const entries = cells.map((cell, position) => {
      if (!cell) return '';
      const term = typeof cell === 'object' ? cell : { kanji: String(cell) };
      return `<li class="ms-reference-entry ${position === 2 ? 'is-current' : ''}">${renderReferenceTerm(term.kanji, term.reading, term.vi)}</li>`;
    }).join('');
    return `
      <details class="ms-details-drawer ms-time-group" name="ms-time-units" ${index === 0 ? 'open' : ''}>
        <summary class="ms-details-summary">${escapeHtml(row.rowTitle || row.dimension || 'Mốc thời gian')}</summary>
        <ul class="ms-time-list ms-time-timeline">${entries}</ul>
      </details>
    `;
  }

  function renderTimeVocabulary(entry) {
    const usage = entry.usage || entry.usageNote || '';
    const example = entry.exampleJp || entry.example;
    return `
      <li class="ms-reference-entry">
        ${renderReferenceTerm(entry.jp, entry.reading, entry.meaning)}
        ${usage ? `<p class="ms-time-usage">${escapeHtml(usage)}</p>` : ''}
        ${example ? `<details class="ms-details-drawer ms-reference-example">
          <summary class="ms-details-summary">Ví dụ</summary>
          <div class="ms-reference-term">
            <div>
              <p lang="ja">${escapeHtml(example)}</p>
              ${entry.exampleVi ? `<p class="ms-time-usage">${escapeHtml(entry.exampleVi)}</p>` : ''}
            </div>
            ${renderReferenceAudio(entry.exampleJp, `Nghe ví dụ cho ${entry.jp}`)}
          </div>
        </details>` : ''}
      </li>
    `;
  }

  function renderTimeTopic(ref, activeSection) {
    const matrix = ref.timeAdverbsMatrix || {};
    const sectionContent = {
      timeline: (matrix.timeTable || []).map(renderTimeGroup).join(''),
      adverbs: `<ul class="ms-time-list">${(matrix.frequencyAdverbs || []).map(renderTimeVocabulary).join('')}</ul>`,
      questions: `<ul class="ms-time-list">${(matrix.questionWords || []).map(renderTimeVocabulary).join('')}</ul>`
    };
    const tabs = timeSections.map(({ id, label }) => (
      `<button type="button" class="ms-mode-chip" data-ms-action="time-section" data-section="${id}" aria-pressed="${id === activeSection}" aria-controls="ms-time-${id}">${label}</button>`
    )).join('');
    const panels = timeSections.map(({ id, label }) => (
      `<section id="ms-time-${id}" data-ms-time-panel="${id}" aria-label="${label}" ${id === activeSection ? '' : 'hidden'}>${sectionContent[id]}</section>`
    )).join('');
    return `
      <div class="ms-time-topic">
        <div class="ms-time-switch" role="group" aria-label="Nội dung Thời gian và 5W1H">${tabs}</div>
        ${panels}
      </div>
    `;
  }

  function renderTransitivitySide(side, label) {
    const term = side && typeof side === 'object' ? side : { jp: side || '—' };
    return `
      <section class="ms-reference-entry">
        <h4 class="ms-transitivity-label">${label}
          ${term.particle ? `<span class="ms-formula-tag" lang="ja">${escapeHtml(term.particle)}</span>` : ''}
        </h4>
        ${renderReferenceTerm(term.jp, term.reading)}
        ${term.example ? `
          <details class="ms-details-drawer ms-reference-example">
            <summary class="ms-details-summary">Ví dụ</summary>
            <div class="ms-reference-term">
              <p lang="ja">${escapeHtml(term.example)}</p>
              ${renderReferenceAudio(term.example, `Nghe ví dụ cho ${term.jp}`)}
            </div>
          </details>` : ''}
      </section>
    `;
  }

  function renderKeigoTopic(ref) {
    const keigoRows = (ref.keigoTable || []).map((k) => {
      const plain = k.dict || k.plain || '';
      const egHtml = k.exampleJp
        ? `<div style="font-size:0.78rem;color:var(--ms-muted);margin-top:2px;">
            VD: <span class="ms-jp-text">${escapeHtml(k.exampleJp)}</span>
            ${k.exampleVi ? `<br><span style="color:var(--ms-text);">${escapeHtml(k.exampleVi)}</span>` : ''}
            <button type="button" class="ms-action-btn-sm" data-ms-action="speak-jp" data-jp="${escapeHtml(k.exampleJp)}" style="padding:1px 4px;font-size:0.68rem;">${getMsIcon('speaker')}</button>
          </div>`
        : '';
      return `
        <tr>
          <td class="ms-jp-text"><strong>${escapeHtml(plain)}</strong></td>
          <td class="ms-jp-text" style="color:var(--ms-crimson);"><strong>${escapeHtml(k.sonkeigo || '')}</strong></td>
          <td class="ms-jp-text" style="color:var(--ms-indigo);"><strong>${escapeHtml(k.kenjougo || '')}</strong></td>
          <td class="ms-jp-text">${escapeHtml(k.teineigo || '')}</td>
          <td>
            <strong>${escapeHtml(k.meaning || '')}</strong>
            ${egHtml}
          </td>
        </tr>
      `;
    }).join('');

    const transCards = (ref.transitivityPairs || []).map((t) => {
      const ruleText = t.ruleHint || t.note || '';
      return `
        <li class="ms-card ms-transitivity-card">
          <h3 class="ms-section-subtitle">${escapeHtml(t.meaning || 'Cặp động từ')}</h3>
          <div class="ms-transitivity-sides">
            ${renderTransitivitySide(t.intransitive, 'Tự động từ')}
            ${renderTransitivitySide(t.transitive, 'Tha động từ')}
          </div>
          ${ruleText ? `<p class="ms-time-usage">${escapeHtml(ruleText)}</p>` : ''}
        </li>
      `;
    }).join('');

    return `
      <div class="ms-panel-stack">
        <details class="ms-details-drawer ms-reference-example">
          <summary class="ms-details-summary">Bảng kính ngữ N4</summary>
          <div class="ms-table-wrap">
            <table class="ms-table">
              <thead><tr><th>Thể thường</th><th>Tôn kính ngữ (Sonkeigo)</th><th>Khiêm nhường ngữ (Kenjougo)</th><th>Lịch sự (Teineigo)</th><th>Ý nghĩa &amp; Câu ví dụ</th></tr></thead>
              <tbody>${keigoRows}</tbody>
            </table>
          </div>
        </details>
        <ul class="ms-transitivity-list" aria-label="Các cặp tự động từ và tha động từ">${transCards}</ul>
      </div>
    `;
  }

  function buildReferenceTabHtml(state) {
    const ref = refData || root.REFERENCE_HUB_DATA || { hiragana: [], katakana: [], counters: [], particles: [] };
    const sub = state.refSubTab || 'kana';

    let bodyHtml = '';
    if (sub === 'kana') bodyHtml = renderKanaTopic(ref);
    else if (sub === 'counters') bodyHtml = renderCountersTopic(ref);
    else if (sub === 'particles') bodyHtml = renderParticlesTopic(ref);
    else if (sub === 'time') bodyHtml = renderTimeTopic(ref, state.timeSection);
    else bodyHtml = renderKeigoTopic(ref);

    return `
      ${renderReferenceSubTabsNav(sub)}
      <div style="margin-top:0.75rem;">${bodyHtml}</div>
    `;
  }

  function renderGamificationStreakCard(streak, questsState, heatmap, rankProfile, state) {
    const questsHtml = (questsState.quests || []).map((q) => {
      const pct = q.target > 0 ? Math.min(100, Math.round((q.progress / q.target) * 100)) : 0;
      return `
        <div class="ms-quest-row ${q.completed ? 'is-done' : ''}">
          <div style="flex:1;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.4rem;">
              <span>${q.completed ? getMsIcon('checkCircle') : getMsIcon('target')} ${escapeHtml(q.title)} (${q.progress}/${q.target})</span>
              <span class="ms-xp-tag">+${q.xpReward} XP</span>
            </div>
            <div class="ms-quest-progress"><div class="ms-quest-progress-fill" style="width:${pct}%"></div></div>
          </div>
        </div>
      `;
    }).join('');

    const heatmapCells = (heatmap || []).map((cell) => (
      `<span class="ms-heat-cell lv-${cell.level}" title="${escapeHtml(cell.dateKey)}: ${cell.count} hoạt động (${cell.xp} XP)"></span>`
    )).join('');

    const checkinButton = state.checkedInToday
      ? `<span class="ms-badge-emerald">${getMsIcon('checkCircle')} Đã điểm danh hôm nay (+15 XP)</span>`
      : `<button type="button" class="ms-action-btn-sm" data-ms-action="quick-checkin">${getMsIcon('sparkles')} Điểm danh học tập (+15 XP)</button>`;

    const safeRank = rankProfile || {};
    const rankTitle = safeRank.rankTitle || safeRank.title || 'Tân Binh N5';
    const nextXp = safeRank.nextLevelXp || safeRank.nextXp || 100;
    const xpProgress = safeRank.progressPercent ?? safeRank.progressPct ?? 0;
    const level = safeRank.level || 1;

    return `
      <div class="ms-card">
        <div class="ms-rank-banner">
          <div class="ms-rank-top">
            <div style="display:flex;align-items:center;gap:0.65rem;flex:1 1 220px;min-width:0;">
              <span class="ms-rank-emblem" aria-hidden="true">${getMsIcon(jlptRankIcons[level - 1] || jlptRankIcons[0], 'ranks')}</span>
              <div class="ms-rank-title-wrap">
                <strong class="ms-rank-name">${escapeHtml(rankTitle)} <span class="ms-badge-indigo" style="font-size:0.75rem;padding:0.15rem 0.5rem;margin-left:0.25rem;">Level ${level}</span></strong>
                <p class="ms-subtext" style="margin:3px 0 0 0;">Tiến độ cấp độ: <strong>${streak.totalXp} / ${nextXp} XP</strong> (${xpProgress}%)</p>
              </div>
            </div>
            <div style="flex-shrink:0;max-width:100%;">${checkinButton}</div>
          </div>
          <div class="ms-srs-bar" style="margin:0;height:8px;width:100%;"><div class="ms-srs-fill" style="width:${xpProgress}%;"></div></div>
        </div>
        <div class="ms-card-header" style="margin-top:0.75rem;">
          <span class="ms-badge-crimson">${getMsIcon('streakComet')} Chuỗi Học: ${streak.currentStreak} ngày (Kỷ lục: ${streak.longestStreak})</span>
          <span class="ms-score-pill">${getMsIcon('sparkles')} ${streak.totalXp} XP</span>
        </div>
        <h4 class="ms-section-subtitle">Nhiệm vụ hôm nay</h4>
        <div class="ms-quest-list">${questsHtml}</div>
        <h4 class="ms-section-subtitle">Lịch học 12 tuần</h4>
        <div class="ms-heatmap-grid">${heatmapCells}</div>
        <div style="display:flex;align-items:center;justify-content:flex-end;gap:5px;font-size:0.75rem;color:var(--ms-muted);">
          <span>Từ Ít</span>
          <span class="ms-heat-cell" style="width:12px;height:12px;display:inline-block;"></span>
          <span class="ms-heat-cell lv-1" style="width:12px;height:12px;display:inline-block;"></span>
          <span class="ms-heat-cell lv-2" style="width:12px;height:12px;display:inline-block;"></span>
          <span class="ms-heat-cell lv-3" style="width:12px;height:12px;display:inline-block;"></span>
          <span class="ms-heat-cell lv-4" style="width:12px;height:12px;display:inline-block;"></span>
          <span>Nhiều</span>
        </div>
      </div>
    `;
  }

  function renderRadarDiagnosticsCard(radarSvg, diag, syncSvg) {
    const strongScore = diag && diag.strongestAxis ? (diag.strongestAxis.score ?? diag.strongestAxis.val ?? 0) : 0;
    const weakScore = diag && diag.weakestAxis ? (diag.weakestAxis.score ?? diag.weakestAxis.val ?? 0) : 0;
    const strongBadge = diag && diag.strongestAxis
      ? `<span class="ms-badge-emerald">Điểm mạnh nhất: ${escapeHtml(diag.strongestAxis.label)} (${strongScore}%)</span>`
      : '';
    const weakBadge = diag && diag.weakestAxis
      ? `<span class="ms-badge-crimson">Kỹ năng cần bù đắp: ${escapeHtml(diag.weakestAxis.label)} (${weakScore}%)</span>`
      : '';
    const recText = diag && diag.recommendation
      ? diag.recommendation
      : 'Cân bằng thời gian học giữa từ vựng và luyện phản xạ chia thể.';

    return `
      <section class="ms-card ms-diagnostics" aria-labelledby="ms-radar-heading">
        <h3 class="ms-section-subtitle" id="ms-radar-heading">${getMsIcon('radar')} Năng lực JLPT</h3>
        <div class="ms-diagnostics-grid">
          <div class="ms-diagnostics-copy">
            <div class="ms-drill-status">${strongBadge}${weakBadge}</div>
            <div class="ms-rule-box is-indigo">${getMsIcon('lightbulb')} <strong>Gợi ý ôn tập:</strong> ${escapeHtml(recText)}</div>
          </div>
          <div class="ms-radar-box">${radarSvg}</div>
        </div>
        <details class="ms-details-drawer">
          <summary class="ms-details-summary">Mã đồng bộ tiến độ</summary>
          <div class="ms-sync-box">
            ${syncSvg}
          </div>
        </details>
      </section>
    `;
  }

  function renderPomodoroCard(pomo) {
    const isFocus25 = pomo.mode === 'focus' && pomo.totalSec === 1500;
    const isBreak = pomo.mode === 'break';
    const isDeep = pomo.mode === 'deep' || pomo.totalSec === 2700;
    const pct = Math.max(0, Math.min(100, Math.round(((pomo.totalSec - pomo.remainingSec) / (pomo.totalSec || 1)) * 100)));

    return `
      <div class="ms-card">
        <div class="ms-card-header">
          <span class="ms-badge-crimson">${getMsIcon('timer')} Đồng Hồ Thiền Zen Pomodoro (528Hz/432Hz)</span>
          <span class="ms-subtext">Đã xong: <strong>${pomo.sessionsCompleted} hiệp</strong></span>
        </div>
        <div class="ms-mode-bar" style="justify-content:center;">
          <button type="button" class="ms-mode-chip ${isFocus25 ? 'is-active' : ''}" data-ms-action="pomo-mode" data-mode="focus">25p Tập trung</button>
          <button type="button" class="ms-mode-chip ${isBreak ? 'is-active' : ''}" data-ms-action="pomo-mode" data-mode="break">5p Nghỉ ngắn</button>
          <button type="button" class="ms-mode-chip ${isDeep ? 'is-active' : ''}" data-ms-action="pomo-mode" data-mode="deep">45p Deep Work</button>
        </div>
        <div class="ms-pomodoro-display" id="ms-pomo-timer">${escapeHtml(pomo.formatted)}</div>
        <div class="ms-srs-bar" aria-label="Tiến trình phiên Pomodoro"><div class="ms-srs-fill" style="width:${pct}%;"></div></div>
        <div class="ms-btn-row">
          <button type="button" class="ms-primary-btn" data-ms-action="pomo-toggle">${pomo.isRunning ? `${getMsIcon('pause')} Tạm dừng` : `${getMsIcon('play')} Bắt đầu`}</button>
          <button type="button" class="ms-secondary-btn" data-ms-action="pomo-reset">${getMsIcon('refresh')} Đặt lại</button>
          <button type="button" class="ms-secondary-btn" data-ms-action="zen-chime" title="Nghe chuông Zen 528Hz">${getMsIcon('timer')} Chuông Zen 528Hz</button>
        </div>
      </div>
    `;
  }

  function renderPodcastRadioCard(pod) {
    const safePod = pod || getPodcastState();
    const item = safePod.currentItem || { jp: '日本語', reading: 'にほんご', meaning: 'Tiếng Nhật', id: 'default' };
    const waveBars = safePod.isPlaying
      ? '<div class="ms-wave-bars"><span class="ms-wave-bar"></span><span class="ms-wave-bar"></span><span class="ms-wave-bar"></span><span class="ms-wave-bar"></span></div>'
      : '<span class="ms-subtext">[Đang tạm dừng]</span>';
    const ne = noteEngine || root.NotebookEngine;
    const isBookmarked = Boolean(item && item.id && ne && typeof ne.isBookmarked === 'function' && ne.isBookmarked(item.id));
    const bmLabel = isBookmarked ? `${getMsIcon('star')} Đã lưu vào Sổ tay` : `${getMsIcon('star')} Lưu vào Sổ tay`;

    return `
      <div class="ms-card">
        <div class="ms-card-header">
          <span class="ms-badge-indigo">${getMsIcon('headphones')} Đài Radio Từ Vựng Rảnh Tay (Hands-Free Podcast)</span>
          <span class="ms-subtext">Vị trí: ${(safePod.currentIndex || 0) + 1} / ${safePod.totalItems || 0}</span>
        </div>
        <div class="ms-now-playing-stage">
          ${waveBars}
          <strong class="ms-jp-text" style="font-size:1.6rem;line-height:1.2;">${escapeHtml(item.jp)}</strong>
          <span class="ms-reading" style="font-size:1.05rem;">(${escapeHtml(item.reading || '')})</span>
          <p class="ms-meaning" style="font-size:0.95rem;color:var(--ms-crimson);font-weight:700;margin-top:0.3rem;">${escapeHtml(item.meaning || '')}</p>
        </div>
        <div class="ms-btn-row">
          <button type="button" class="ms-secondary-btn" data-ms-action="podcast-prev" title="Từ trước">${getMsIcon('chevronLeft')} Trước</button>
          <button type="button" class="ms-primary-btn" data-ms-action="podcast-toggle">${safePod.isPlaying ? `${getMsIcon('square')} Dừng Radio` : `${getMsIcon('headphones')} Phát / Dừng Radio`}</button>
          <button type="button" class="ms-secondary-btn" data-ms-action="podcast-next" title="Từ tiếp theo">Tiếp theo ${getMsIcon('chevronRight')}</button>
          <button type="button" class="ms-secondary-btn" data-ms-action="speak-jp" data-jp="${escapeHtml(item.reading || item.jp)}" title="Đọc lại từ này">${getMsIcon('speaker')} Đọc lại từ này</button>
          <button type="button" class="ms-secondary-btn" data-ms-action="podcast-bookmark" title="Lưu từ đang phát vào Sổ tay">${bmLabel}</button>
        </div>
      </div>
    `;
  }

  function buildAnalyticsToolsTabHtml(state) {
    const ae = analyticsEngine || root.AnalyticsStreakEngine;
    const streak = ae ? ae.getStreakSummary() : { currentStreak: 0, longestStreak: 0, totalXp: 0 };
    const questsState = ae ? ae.getDailyQuests() : { quests: [] };
    const heatmap = ae ? ae.getHeatmapGrid(84) : [];
    const radarSvg = ae ? ae.renderRadarSvg() : '';
    const rankProfile = ae && typeof ae.getJlptRankProfile === 'function'
      ? ae.getJlptRankProfile(streak.totalXp)
      : { level: 1, title: 'N5 Khởi Đầu', nextXp: 150, progressPct: 0 };
    const diag = ae && typeof ae.getRadarDiagnostics === 'function'
      ? ae.getRadarDiagnostics()
      : null;
    const pomo = getPomodoroState();
    const pod = getPodcastState();
    const syncSvg = generateSyncMatrixSvg(`STREAK_${streak.currentStreak}_XP_${streak.totalXp}`);

    return `
      <div class="ms-panel-stack">
        ${renderRadarDiagnosticsCard(radarSvg, diag, syncSvg)}
        ${renderGamificationStreakCard(streak, questsState, heatmap, rankProfile, state)}
        <h3 class="ms-section-subtitle">Công cụ hỗ trợ học</h3>
        <div class="ms-grid-2col">
          ${renderPomodoroCard(pomo)}
          ${renderPodcastRadioCard(pod)}
        </div>
      </div>
    `;
  }

  function handleTabSwitch(e, state, updateView, container) {
    const tabBtn = e.target && e.target.closest ? e.target.closest('[data-ms-tab]') : null;
    if (!tabBtn) return false;
    const targetTab = tabBtn.getAttribute('data-ms-tab');
    const validTabs = ['conjugation', 'notebook', 'reference', 'analytics'];
    if (!validTabs.includes(targetTab)) return false;
    if (state.activeTab === targetTab) return true;
    state.activeTab = targetTab;
    state.conjFeedback = null;
    updateView();
    container.querySelector?.(`[data-ms-tab="${targetTab}"]`)?.focus?.({ preventScroll: true });

    const tabToId = {
      conjugation: 'conjugation-lab',
      notebook: 'mistake-notebook',
      reference: 'reference-hub',
      analytics: 'analytics-hub'
    };
    const modId = tabToId[targetTab];
    if (modId) {
      if (typeof root.currentActiveId !== 'undefined') {
        root.currentActiveId = modId;
      }
      if (typeof root.safeSetStorage === 'function') {
        root.safeSetStorage('minna_last_active_id', modId);
      }
      if (typeof window !== 'undefined' && window.location) {
        try { window.location.hash = modId; } catch (_err) {}
      }
      if (typeof document !== 'undefined' && document.querySelectorAll) {
        const itemBtns = document.querySelectorAll('.menu-item-btn');
        itemBtns.forEach(btn => {
          const bid = btn.getAttribute('data-id');
          if (bid) {
            btn.classList.toggle('active', bid === modId);
          }
        });
      }
    }
    return true;
  }

  function handleConjAction(action, actionBtn, state, updateView) {
    const ce = conjEngine || root.ConjugationEngine;
    if (action === 'answer-conj') {
      const chosen = actionBtn.getAttribute('data-answer');
      const current = state.conjDrills[state.conjIndex || 0];
      const isCorrect = String(chosen || '').trim().toLowerCase() === String(current.answer || '').trim().toLowerCase();
      const ne = noteEngine || root.NotebookEngine;
      if (isCorrect) {
        state.conjScore = (state.conjScore || 0) + 1;
        state.conjCombo = (state.conjCombo || 0) + 1;
        state.conjStreak = (state.conjStreak || 0) + 1;
        state.conjFeedback = { ok: true, msg: `Chính xác! ${current.kanji || current.prompt || current.question || ''} → ${current.answer}` };
        if (analyticsEngine) analyticsEngine.recordStudyActivity('conjugation', 15);
        if (ne && (current.isRedemption || String(current.id || '').indexOf('m_') === 0)) {
          ne.resolveMistake(current.id, true);
        }
      } else {
        state.conjCombo = 0;
        state.conjStreak = 0;
        state.conjFeedback = { ok: false, msg: `Chưa chuẩn! Đáp án là: ${current.answer}` };
        if (ne && (current.isRedemption || String(current.id || '').indexOf('m_') === 0)) {
          ne.resolveMistake(current.id, false);
        } else if (ne) {
          ne.recordMistake({
            id: current.id,
            question: current.prompt || current.question || '',
            correctAnswer: current.answer,
            userAnswer: chosen,
            category: 'conjugation',
            options: current.options,
            explanation: current.ruleExplanation || current.explanation || ''
          });
        }
      }
      state.conjIndex = ((state.conjIndex || 0) + 1) % state.conjDrills.length;
      updateView();
      return true;
    }
    if ((action === 'set-drill-mode' || action === 'set-conj-mode') && ce) {
      state.conjMode = actionBtn.getAttribute('data-mode') || 'all';
      state.conjDrills = ce.generateMasterReflexDrill
        ? ce.generateMasterReflexDrill(10, state.conjMode)
        : ce.generateConjugationDrill(8);
      state.conjIndex = 0;
      state.conjScore = 0;
      state.conjCombo = 0;
      state.conjStreak = 0;
      state.conjFeedback = null;
      updateView();
      return true;
    }
    if (action === 'refresh-drills' && ce) {
      state.conjDrills = ce.generateMasterReflexDrill
        ? ce.generateMasterReflexDrill(10, state.conjMode || 'all')
        : ce.generateConjugationDrill(8);
      state.conjIndex = 0;
      state.conjScore = 0;
      state.conjCombo = 0;
      state.conjStreak = 0;
      state.conjFeedback = null;
      updateView();
      return true;
    }
    if (action === 'set-matrix-type') {
      const type = actionBtn.getAttribute('data-type') || 'verb';
      const safeType = type === 'adj' ? 'adj' : 'verb';
      if (state.matrixWordType === safeType) return true;
      state.matrixWordType = safeType;
      state.matrixWordId = safeType === 'verb' ? 'v01' : 'a01';
      updateView();
      return true;
    }
    if (action === 'select-matrix-word' || action === 'select-verb-pill') {
      const tagName = actionBtn.tagName ? actionBtn.tagName.toUpperCase() : '';
      if (tagName === 'SELECT' || tagName === 'OPTION') return false;
      state.matrixWordType = actionBtn.getAttribute('data-type') || state.matrixWordType || 'verb';
      state.matrixWordId = actionBtn.getAttribute('data-id') || (state.matrixWordType === 'verb' ? 'v01' : 'a01');
      updateView();
      return true;
    }
    if (action === 'toggle-matrix-details') {
      state.expandAllFormulas = !state.expandAllFormulas;
      updateView();
      return true;
    }
    return false;
  }

  function handleNotebookAction(action, actionBtn, state, updateView, container) {
    const ne = noteEngine || root.NotebookEngine;
    if (action === 'show-notebook-section') {
      const section = actionBtn.getAttribute('data-section') === 'mistakes' ? 'mistakes' : 'bookmarks';
      if (state.nbSection === section) return true;
      state.nbSection = section;
      updateView();
      const nextButton = container.querySelector?.(`[data-section="${section}"]`);
      nextButton?.focus?.({ preventScroll: true });
      return true;
    }
    if (action === 'seed-starter-pack' && ne) {
      ne.seedStarterPack();
      updateView();
      return true;
    }
    if (action === 'seed-sample-bookmark' && ne) {
      ne.toggleBookmark({ id: `bm_${Date.now()}`, type: 'vocab', jp: '一生懸命', reading: 'いっしょうけんめい', meaning: 'Chăm chỉ hết mình', lessonId: 'N4' });
      state.nbSection = 'bookmarks';
      updateView();
      return true;
    }
    if (action === 'remove-bookmark' && ne) {
      ne.removeBookmark(actionBtn.getAttribute('data-id'));
      updateView();
      return true;
    }
    if (action === 'seed-sample-mistake' && ne) {
      ne.recordMistake({ id: `err_${Date.now()}`, question: 'Chia thể て của động từ 行く (いく):', correctAnswer: 'いって', userAnswer: 'いいて', category: 'conjugation', explanation: '行く đổi đuôi bất quy tắc sang いって' });
      state.nbSection = 'mistakes';
      updateView();
      return true;
    }
    if (action === 'resolve-mistake' && ne) {
      ne.resolveMistake(actionBtn.getAttribute('data-id'), true);
      if (analyticsEngine) analyticsEngine.recordStudyActivity('review', 15);
      updateView();
      return true;
    }
    if (action === 'filter-bookmarks') {
      const filter = actionBtn.getAttribute('data-filter') || 'all';
      if (state.nbFilter === filter) return true;
      state.nbFilter = filter;
      updateView();
      return true;
    }
    if (action === 'add-custom-bookmark') {
      const jpInput = container ? (container.querySelector('#ms-bm-jp') || container.querySelector('#ms-custom-jp')) : null;
      const readingInput = container ? (container.querySelector('#ms-bm-reading') || container.querySelector('#ms-custom-reading')) : null;
      const meaningInput = container ? (container.querySelector('#ms-bm-meaning') || container.querySelector('#ms-custom-meaning')) : null;
      const jp = jpInput ? jpInput.value.trim() : '';
      const reading = readingInput ? readingInput.value.trim() : '';
      const meaning = meaningInput ? meaningInput.value.trim() : '';
      if (!jp) return true;
      if (ne) {
        ne.toggleBookmark({
          id: `custom_${Date.now()}`,
          type: 'vocab',
          jp,
          reading: reading || jp,
          meaning: meaning || 'Ghi chú tự thêm',
          lessonId: 'custom'
        });
        state.showAddBookmark = false;
        state.nbSection = 'bookmarks';
        updateView();
      }
      return true;
    }
    if (action === 'start-redemption-quiz' && ne) {
      const quiz = ne.buildRedemptionQuiz(10);
      if (quiz.length > 0) {
        state.activeTab = 'conjugation';
        state.conjDrills = quiz;
        state.conjIndex = 0;
        state.conjScore = 0;
        state.conjCombo = 0;
        state.conjStreak = 0;
        state.conjFeedback = null;
      }
      updateView();
      return true;
    }
    if (action === 'toggle-add-bookmark-form') {
      state.showAddBookmark = !state.showAddBookmark;
      updateView();
      return true;
    }
    return false;
  }

  function handleToolsAction(action, actionBtn, state, updateView, container) {
    if (action === 'time-section') {
      const section = actionBtn.getAttribute('data-section');
      if (!timeSections.some(item => item.id === section) || state.timeSection === section) return true;
      state.timeSection = section;
      container.querySelectorAll('[data-ms-action="time-section"]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.section === section));
      });
      container.querySelectorAll('[data-ms-time-panel]').forEach(panel => {
        panel.hidden = panel.dataset.msTimePanel !== section;
      });
      return true;
    }
    if (action === 'ref-subtab') {
      const sub = actionBtn.getAttribute('data-sub') || 'kana';
      const validSubs = ['kana', 'counters', 'particles', 'time', 'keigo'];
      const safeSub = validSubs.includes(sub) ? sub : 'kana';
      if (state.refSubTab === safeSub) return true;
      state.refSubTab = safeSub;
      updateView();
      return true;
    }
    if (action === 'speak-jp') {
      speakItem(actionBtn.getAttribute('data-jp'), 'ja-JP', actionBtn);
      return true;
    }
    if (action === 'pomo-mode' || action === 'pomo-set-mode') {
      const m = actionBtn.getAttribute('data-mode') || 'focus';
      if (pomodoroState.mode === m && !pomodoroState.isRunning) return true;
      resetPomodoro(m);
      updateView();
      return true;
    }
    if (action === 'pomo-toggle') {
      if (pomodoroState.isRunning) pausePomodoro();
      else startPomodoro((st) => {
        const el = container ? container.querySelector('#ms-pomo-timer') : null;
        if (el) el.textContent = st.formatted;
      });
      updateView();
      return true;
    }
    if (action === 'pomo-reset') {
      resetPomodoro(pomodoroState.mode || 'focus');
      updateView();
      return true;
    }
    if (action === 'pomo-reset-focus') {
      resetPomodoro('focus');
      updateView();
      return true;
    }
    if (action === 'pomo-reset-break') {
      resetPomodoro('break');
      updateView();
      return true;
    }
    if (action === 'pomo-reset-deep') {
      resetPomodoro('deep');
      updateView();
      return true;
    }
    if (action === 'zen-chime') {
      playZenChime(528);
      return true;
    }
    if (action === 'podcast-toggle') {
      if (podcastState.isPlaying) {
        stopPodcast();
      } else {
        startPodcast(null, () => {
          if (state.activeTab === 'analytics') updateView();
        });
      }
      updateView();
      return true;
    }
    if (action === 'podcast-next') {
      nextPodcastItem();
      updateView();
      return true;
    }
    if (action === 'podcast-prev') {
      prevPodcastItem();
      updateView();
      return true;
    }
    if (action === 'podcast-bookmark') {
      bookmarkCurrentPodcastItem();
      updateView();
      return true;
    }
    if (action === 'quick-checkin' || action === 'analytics-checkin') {
      if (analyticsEngine) analyticsEngine.recordStudyActivity('review', 15);
      state.checkedInToday = true;
      updateView();
      return true;
    }
    return false;
  }

  function handleContainerClick(e, state, updateView, container) {
    if (handleTabSwitch(e, state, updateView, container)) return;
    const actionBtn = e.target && e.target.closest ? e.target.closest('[data-ms-action]') : null;
    if (!actionBtn) return;
    const tagName = actionBtn.tagName ? actionBtn.tagName.toUpperCase() : '';
    if (tagName === 'SELECT' || tagName === 'OPTION') return;
    const action = actionBtn.getAttribute('data-ms-action');
    if (handleConjAction(action, actionBtn, state, updateView)) return;
    if (handleNotebookAction(action, actionBtn, state, updateView, container)) return;
    handleToolsAction(action, actionBtn, state, updateView, container);
  }

  function handleContainerChange(e, state, updateView) {
    const select = e.target && e.target.closest ? e.target.closest('[data-ms-action="select-matrix-word"]') : null;
    if (!select) return;
    const rawVal = String(select.value || '').trim();
    if (!rawVal) return;
    const parts = rawVal.split(':');
    const type = parts[0] === 'adj' ? 'adj' : 'verb';
    const id = parts[1] || (type === 'verb' ? 'v01' : 'a01');
    state.matrixWordType = type;
    state.matrixWordId = id;
    updateView();
  }

  function handleContainerInput(e, state, container) {
    const input = e.target && e.target.closest ? e.target.closest('[data-ms-action="search-notebook"]') : null;
    if (!input) return;
    state.nbQuery = input.value;
    const results = container.querySelector?.('[data-ms-notebook-results]');
    const ne = noteEngine || root.NotebookEngine;
    if (!results) return;
    results.innerHTML = state.nbSection === 'mistakes'
      ? renderMistakesList(ne ? ne.getMistakes(false) : [], state.nbQuery)
      : renderBookmarkList(ne ? ne.getBookmarks() : [], state.nbQuery, state.nbFilter);
  }

  function handleContainerSubmit(e, state, updateView, container) {
    const form = e.target && e.target.closest ? e.target.closest('[data-ms-action="submit-bookmark"]') : null;
    if (!form) return;
    e.preventDefault();
    const jpInput = container ? container.querySelector('#ms-custom-jp') : null;
    const readingInput = container ? container.querySelector('#ms-custom-reading') : null;
    const meaningInput = container ? container.querySelector('#ms-custom-meaning') : null;
    const jp = jpInput ? jpInput.value.trim() : '';
    const reading = readingInput ? readingInput.value.trim() : '';
    const meaning = meaningInput ? meaningInput.value.trim() : '';
    if (!jp) return;
    const ne = noteEngine || root.NotebookEngine;
    if (ne) {
      ne.toggleBookmark({
        id: `custom_${Date.now()}`,
        type: 'vocab',
        jp,
        reading: reading || jp,
        meaning: meaning || 'Từ tự thêm',
        lessonId: 'Custom'
      });
      state.showAddBookmark = false;
      updateView();
    }
  }

  function renderMasterHub(container, initialTab = 'conjugation') {
    if (!container) return null;
    const state = initHubState(initialTab);
    const updateView = () => {
      let tabContent = '';
      if (state.activeTab === 'conjugation') tabContent = buildConjugationTabHtml(state);
      else if (state.activeTab === 'notebook') tabContent = buildNotebookTabHtml(state);
      else if (state.activeTab === 'reference') tabContent = buildReferenceTabHtml(state);
      else tabContent = buildAnalyticsToolsTabHtml(state);

      container.innerHTML = `
        <section class="ms-hub-wrapper" aria-labelledby="ms-hub-title">
          <h2 class="ms-hub-title" id="ms-hub-title">${hubTabs.find(tab => tab.id === state.activeTab).title}</h2>
          ${renderTabsNav(state.activeTab)}
          <div class="ms-tab-panel">${tabContent}</div>
        </section>
      `;
    };

    container.onclick = (e) => handleContainerClick(e, state, updateView, container);
    container.onchange = (e) => handleContainerChange(e, state, updateView);
    container.oninput = (e) => handleContainerInput(e, state, container);
    container.onsubmit = (e) => handleContainerSubmit(e, state, updateView, container);

    updateView();
    return state;
  }

  function initTapToLookup() {
    if (typeof document === 'undefined' || !document.body) return false;
    if (document.getElementById('ms-tap-lookup-popover')) return true;

    const popover = document.createElement('div');
    popover.id = 'ms-tap-lookup-popover';
    popover.className = 'ms-tap-popover';
    popover.setAttribute('aria-live', 'polite');
    popover.style.display = 'none';
    document.body.appendChild(popover);

    document.addEventListener('mouseup', () => {
      if (!root.getSelection) return;
      const sel = String(root.getSelection().toString() || '').trim();
      if (!sel || sel.length > 20 || !/[\u3040-\u30ff\u4e00-\u9faf]/.test(sel)) {
        popover.style.display = 'none';
        return;
      }
      const ne = noteEngine || root.NotebookEngine;
      const hits = ne ? ne.lookupSelectionText(sel) : [];
      const top = hits[0] || { id: `sel_${sel}`, jp: sel, reading: sel, meaning: 'Tra nhanh & Lưu vào Sổ Tay' };
      popover.innerHTML = `
        <div class="ms-popover-inner">
          <div>
            <strong class="ms-jp-text">${escapeHtml(top.jp)}</strong>
            ${top.reading ? `<span class="ms-reading">(${escapeHtml(top.reading)})</span>` : ''}
            <div class="ms-meaning">${escapeHtml(top.meaning)}</div>
          </div>
          <div class="ms-popover-actions">
            <button type="button" class="ms-action-btn-sm" id="ms-pop-speak">${getMsIcon('speaker')} Nghe</button>
            <button type="button" class="ms-action-btn-sm" id="ms-pop-save">${getMsIcon('star')} Lưu Sổ Tay</button>
          </div>
        </div>
      `;
      popover.style.display = 'block';

      const speakBtn = document.getElementById('ms-pop-speak');
      if (speakBtn) speakBtn.onclick = (ev) => speakItem(top.reading || top.jp, 'ja-JP', speakBtn, ev);
      const saveBtn = document.getElementById('ms-pop-save');
      if (saveBtn && ne) {
        saveBtn.onclick = () => {
          ne.toggleBookmark(top);
          saveBtn.innerHTML = `${getMsIcon('checkCircle')} Đã lưu`;
        };
      }
    });

    return true;
  }

  return {
    formatMmSs,
    escapeHtml,
    getPomodoroState,
    startPomodoro,
    pausePomodoro,
    resetPomodoro,
    playZenChime,
    buildPodcastQueue,
    startPodcast,
    stopPodcast,
    getPodcastState,
    nextPodcastItem,
    prevPodcastItem,
    bookmarkCurrentPodcastItem,
    generateSyncMatrixSvg,
    renderMasterHub,
    initTapToLookup,
    Worker: studyWorker || (root && root.StudyWorker)
  };
});
