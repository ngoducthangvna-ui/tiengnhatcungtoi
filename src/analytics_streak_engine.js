/**
 * Gamification Daily Streak, 365-Day Heatmap, Daily Quests & 5-Axis Radar Analytics Engine
 * Strictly adheres to 4-Phase Linear Function Anatomy (Zero Arrowhead Nesting, CC <= 7).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AnalyticsStreakEngine = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const STREAK_KEY = 'minna_daily_streak_v1';
  const HEATMAP_KEY = 'minna_study_heatmap_v1';
  const QUESTS_KEY = 'minna_daily_quests_v1';
  const memCache = {};

  function readJson(key, fallback) {
    try {
      if (typeof localStorage !== 'undefined' && localStorage !== null) {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      }
    } catch (_e) {
      // Fallback
    }
    return memCache[key] !== undefined ? memCache[key] : fallback;
  }

  function writeJson(key, value) {
    memCache[key] = value;
    try {
      if (typeof localStorage !== 'undefined' && localStorage !== null) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (_e) {
      // Ignore storage error
    }
    return value;
  }

  function formatDateKey(dateInput = new Date()) {
    if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateInput.trim())) {
      return dateInput.trim();
    }
    const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (Number.isNaN(d.getTime())) return formatDateKey(new Date());
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  function diffDaysBetweenKeys(prevKey, nextKey) {
    if (!prevKey || !nextKey) return null;
    const d1 = new Date(`${prevKey}T00:00:00Z`);
    const d2 = new Date(`${nextKey}T00:00:00Z`);
    if (Number.isNaN(d1.getTime()) || Number.isNaN(d2.getTime())) return null;
    return Math.round((d2.getTime() - d1.getTime()) / 86400000);
  }

  function getStreakSummary() {
    const raw = readJson(STREAK_KEY, null);
    if (!raw || typeof raw !== 'object') {
      return { currentStreak: 0, longestStreak: 0, lastActiveDate: null, totalXp: 0, totalActivities: 0 };
    }
    return {
      currentStreak: Number(raw.currentStreak) || 0,
      longestStreak: Number(raw.longestStreak) || 0,
      lastActiveDate: raw.lastActiveDate || null,
      totalXp: Number(raw.totalXp) || 0,
      totalActivities: Number(raw.totalActivities) || 0
    };
  }

  function getDefaultQuestsForDate(dateKey) {
    return {
      dateKey,
      quests: [
        { id: 'q_lesson', title: 'Hoàn thành hoặc ôn tập 1 bài học', target: 1, progress: 0, xpReward: 20, completed: false },
        { id: 'q_conjugation', title: 'Luyện 5 câu phản xạ Chia Thể / Đếm Số', target: 5, progress: 0, xpReward: 30, completed: false },
        { id: 'q_review', title: 'Ôn tập Sổ Tay / Sửa lỗi sai / Flashcard', target: 1, progress: 0, xpReward: 25, completed: false }
      ]
    };
  }

  function getDailyQuests(dateInput = new Date()) {
    const dateKey = formatDateKey(dateInput);
    const saved = readJson(QUESTS_KEY, null);
    if (saved && saved.dateKey === dateKey && Array.isArray(saved.quests)) {
      return saved;
    }
    const fresh = getDefaultQuestsForDate(dateKey);
    return writeJson(QUESTS_KEY, fresh);
  }

  function updateQuestsForActivity(activityType, dateKey) {
    const state = getDailyQuests(dateKey);
    let bonusXp = 0;
    for (const q of state.quests) {
      const isMatch = (activityType === 'lesson' && q.id === 'q_lesson') ||
        (activityType === 'conjugation' && q.id === 'q_conjugation') ||
        ((activityType === 'review' || activityType === 'quiz' || activityType === 'srs') && q.id === 'q_review');
      if (isMatch && !q.completed) {
        q.progress = Math.min(q.target, (Number(q.progress) || 0) + 1);
        if (q.progress >= q.target) {
          q.completed = true;
          bonusXp += q.xpReward;
        }
      }
    }
    writeJson(QUESTS_KEY, state);
    return bonusXp;
  }

  function recordStudyActivity(activityType = 'lesson', xpEarned = 10, customDate = new Date()) {
    // Phase 1 & 2: Normalize inputs
    const dateKey = formatDateKey(customDate);
    const safeXp = Math.max(1, Number(xpEarned) || 10);
    const streak = getStreakSummary();
    const heatmap = readJson(HEATMAP_KEY, {});

    // Phase 3: Compute streak transition
    const gap = diffDaysBetweenKeys(streak.lastActiveDate, dateKey);
    if (gap === null || gap > 1 || gap < 0) {
      streak.currentStreak = 1;
    } else if (gap === 1) {
      streak.currentStreak += 1;
    } else if (streak.currentStreak === 0) {
      streak.currentStreak = 1;
    }
    streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak);
    streak.lastActiveDate = dateKey;
    const questBonus = updateQuestsForActivity(activityType, dateKey);
    streak.totalXp += safeXp + questBonus;
    streak.totalActivities += 1;

    // Phase 4: Update heatmap & persist
    const dayEntry = heatmap[dateKey] || { count: 0, xp: 0 };
    heatmap[dateKey] = { count: dayEntry.count + 1, xp: dayEntry.xp + safeXp + questBonus };
    writeJson(STREAK_KEY, streak);
    writeJson(HEATMAP_KEY, heatmap);
    return { streak, todayHeatmap: heatmap[dateKey], dateKey };
  }

  function getHeatmapGrid(days = 84, anchorDate = new Date()) {
    const safeDays = Math.max(7, Math.min(365, Number(days) || 84));
    const heatmap = readJson(HEATMAP_KEY, {});
    const end = anchorDate instanceof Date ? new Date(anchorDate.getTime()) : new Date();
    const grid = [];

    for (let i = safeDays - 1; i >= 0; i--) {
      const d = new Date(end.getTime() - i * 86400000);
      const key = formatDateKey(d);
      const cell = heatmap[key] || { count: 0, xp: 0 };
      const level = cell.count === 0 ? 0 : (cell.count === 1 ? 1 : (cell.count <= 3 ? 2 : (cell.count <= 6 ? 3 : 4)));
      grid.push({ dateKey: key, count: cell.count, xp: cell.xp, level });
    }
    return grid;
  }

  function computeCompetencyRadar(metricsInput = null) {
    const m = metricsInput && typeof metricsInput === 'object' ? metricsInput : {};
    const streak = getStreakSummary();
    const baseBoost = Math.min(35, streak.totalActivities * 3);
    const clamp = (v) => Math.max(15, Math.min(100, Math.round(Number(v) || 0)));

    return {
      vocabulary: clamp(m.vocabulary !== undefined ? m.vocabulary : 45 + baseBoost),
      grammar: clamp(m.grammar !== undefined ? m.grammar : 50 + baseBoost),
      kanji: clamp(m.kanji !== undefined ? m.kanji : 40 + baseBoost),
      listening: clamp(m.listening !== undefined ? m.listening : 38 + baseBoost),
      reading: clamp(m.reading !== undefined ? m.reading : 42 + baseBoost)
    };
  }

  function getJlptRankProfile(totalXp = 0) {
    const xp = Math.max(0, Number(totalXp) || 0);
    if (xp < 100) {
      return {
        rankTitle: 'Tân Binh Nhập Môn N5',
        badgeIcon: '🔰',
        level: 1,
        currentXp: xp,
        nextLevelXp: 100,
        progressPercent: Math.min(100, Math.round((xp / 100) * 100))
      };
    }
    if (xp < 300) {
      return {
        rankTitle: 'Kiếm Khách Ngữ Pháp N5',
        badgeIcon: '⚔️',
        level: 2,
        currentXp: xp,
        nextLevelXp: 300,
        progressPercent: Math.min(100, Math.round(((xp - 100) / 200) * 100))
      };
    }
    if (xp < 700) {
      return {
        rankTitle: 'Võ Sĩ Đạo Kanji N4',
        badgeIcon: '🛡️',
        level: 3,
        currentXp: xp,
        nextLevelXp: 700,
        progressPercent: Math.min(100, Math.round(((xp - 300) / 400) * 100))
      };
    }
    return {
      rankTitle: 'Đại Kiện Tướng JLPT',
      badgeIcon: '👑',
      level: 4,
      currentXp: xp,
      nextLevelXp: 700,
      progressPercent: 100
    };
  }

  function getRadarDiagnostics(scoresInput = null) {
    const scores = computeCompetencyRadar(scoresInput);
    const axes = [
      { key: 'vocabulary', label: 'Từ vựng', score: scores.vocabulary },
      { key: 'grammar', label: 'Ngữ pháp', score: scores.grammar },
      { key: 'kanji', label: 'Kanji', score: scores.kanji },
      { key: 'listening', label: 'Nghe/Kaiwa', score: scores.listening },
      { key: 'reading', label: 'Đọc hiểu', score: scores.reading }
    ];

    const sum = axes.reduce((acc, a) => acc + a.score, 0);
    const averageScore = Math.round(sum / axes.length);

    const sorted = axes.slice().sort((a, b) => b.score - a.score);
    const strongestAxis = { label: sorted[0].label, score: sorted[0].score };
    const weakestAxis = { label: sorted[sorted.length - 1].label, score: sorted[sorted.length - 1].score };

    let recommendation = `Bạn đang làm chủ rất tốt trục [${strongestAxis.label}] (${strongestAxis.score}%). `;
    recommendation += `Nên tập trung luyện thêm trục [${weakestAxis.label}] (${weakestAxis.score}%) thông qua bài tập phản xạ và sổ tay để sớm chinh phục JLPT toàn diện!`;

    return {
      averageScore,
      strongestAxis,
      weakestAxis,
      recommendation
    };
  }

  function renderRadarSvg(scoresInput = null, size = 250) {
    const safeSize = Number(size) || 250;
    const scores = computeCompetencyRadar(scoresInput);
    const axes = [
      { key: 'vocabulary', label: 'Từ vựng', val: scores.vocabulary },
      { key: 'grammar', label: 'Ngữ pháp', val: scores.grammar },
      { key: 'kanji', label: 'Kanji', val: scores.kanji },
      { key: 'listening', label: 'Nghe/Kaiwa', val: scores.listening },
      { key: 'reading', label: 'Đọc hiểu', val: scores.reading }
    ];
    const cx = safeSize / 2;
    const cy = safeSize / 2;
    const maxR = safeSize * 0.34;
    const toPoint = (idx, ratio) => {
      const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / 5;
      const x = (cx + maxR * ratio * Math.cos(angle)).toFixed(1);
      const y = (cy + maxR * ratio * Math.sin(angle)).toFixed(1);
      return `${x},${y}`;
    };

    const gridRings = [0.25, 0.5, 0.75, 1].map((r) => {
      const pts = axes.map((_, i) => toPoint(i, r)).join(' ');
      return `<polygon points="${pts}" fill="none" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/>`;
    }).join('');

    const dataPts = axes.map((a, i) => toPoint(i, a.val / 100)).join(' ');
    const vertexCircles = axes.map((a, i) => {
      const [vx, vy] = toPoint(i, a.val / 100).split(',');
      return `<circle cx="${vx}" cy="${vy}" r="4" fill="#ff5a36" stroke="#ffffff" stroke-width="1.5"/>`;
    }).join('');
    const centerCircle = `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3.5" fill="#ff5a36" fill-opacity="0.5"/>`;

    const labels = axes.map((a, i) => {
      const [lx, ly] = toPoint(i, 1.24).split(',');
      return `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="currentColor">${a.label} (${a.val}%)</text>`;
    }).join('');

    return `<svg class="ms-radar-svg" viewBox="0 0 ${safeSize} ${safeSize}" width="${safeSize}" height="${safeSize}" role="img" aria-label="Biểu đồ năng lực 5 trục JLPT">${gridRings}<polygon points="${dataPts}" fill="rgba(255, 90, 54, 0.28)" stroke="#ff5a36" stroke-width="2.2"/>${centerCircle}${vertexCircles}${labels}</svg>`;
  }

  return {
    STREAK_KEY,
    HEATMAP_KEY,
    QUESTS_KEY,
    formatDateKey,
    getStreakSummary,
    recordStudyActivity,
    getHeatmapGrid,
    getDailyQuests,
    computeCompetencyRadar,
    renderRadarSvg,
    getJlptRankProfile,
    getRadarDiagnostics
  };
});
