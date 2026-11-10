/**
 * Smart Personal Notebook, SRS Mistake Bank & Instant Tap-to-Lookup Engine
 * Strictly adheres to 4-Phase Linear Function Anatomy (Zero Arrowhead Nesting, CC <= 7).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(root);
  } else {
    root.NotebookEngine = factory(root);
  }
})(typeof self !== 'undefined' ? self : this, function (root) {
  'use strict';

  const BOOKMARKS_KEY = 'minna_bookmarks_v1';
  const MISTAKES_KEY = 'minna_mistake_bank_v1';
  const memStore = { [BOOKMARKS_KEY]: [], [MISTAKES_KEY]: {} };

  function readStorage(key, fallback) {
    try {
      if (typeof localStorage !== 'undefined' && localStorage !== null) {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      }
    } catch (_e) {
      // Fallback to in-memory store
    }
    return memStore[key] !== undefined ? memStore[key] : fallback;
  }

  function writeStorage(key, value) {
    memStore[key] = value;
    try {
      if (typeof localStorage !== 'undefined' && localStorage !== null) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (_e) {
      // Ignore quota errors in headless mode
    }
    return value;
  }

  function normalizeBookmarkItem(item) {
    if (!item) return null;
    if (typeof item === 'string') {
      const cleanId = item.trim();
      return cleanId ? { id: cleanId, type: 'vocab', jp: cleanId, reading: '', meaning: '', lessonId: 'general', savedAt: Date.now() } : null;
    }
    if (typeof item === 'object' && typeof item.id === 'string' && item.id.trim()) {
      return {
        id: item.id.trim(),
        type: item.type || 'vocab',
        jp: String(item.jp || item.id).trim(),
        reading: String(item.reading || '').trim(),
        meaning: String(item.meaning || '').trim(),
        lessonId: String(item.lessonId || 'general').trim(),
        savedAt: Number(item.savedAt) || Date.now()
      };
    }
    return null;
  }

  function getBookmarks(filterType = null) {
    const rawList = readStorage(BOOKMARKS_KEY, []);
    const list = Array.isArray(rawList) ? rawList.filter(Boolean) : [];
    if (!filterType || filterType === 'all') return list;
    return list.filter((entry) => entry && entry.type === filterType);
  }

  function isBookmarked(id) {
    if (!id) return false;
    const targetId = typeof id === 'object' ? id.id : String(id).trim();
    const list = getBookmarks();
    return list.some((entry) => entry && entry.id === targetId);
  }

  function toggleBookmark(item) {
    const normalized = normalizeBookmarkItem(item);
    if (!normalized) return { added: false, list: getBookmarks() };
    const list = getBookmarks();
    const existingIndex = list.findIndex((entry) => entry && entry.id === normalized.id);
    if (existingIndex >= 0) {
      const updated = list.filter((_, idx) => idx !== existingIndex);
      writeStorage(BOOKMARKS_KEY, updated);
      return { added: false, item: normalized, list: updated };
    }
    const updated = [normalized, ...list];
    writeStorage(BOOKMARKS_KEY, updated);
    return { added: true, item: normalized, list: updated };
  }

  function removeBookmark(id) {
    if (!id) return getBookmarks();
    const targetId = String(id).trim();
    const updated = getBookmarks().filter((entry) => entry && entry.id !== targetId);
    return writeStorage(BOOKMARKS_KEY, updated);
  }

  function searchBookmarks(query = '', filterType = 'all') {
    const list = getBookmarks(filterType);
    if (!query || typeof query !== 'string' || !query.trim()) {
      return list;
    }
    const q = query.trim().toLowerCase();
    return list.filter((item) => {
      if (!item) return false;
      const jp = String(item.jp || '').toLowerCase();
      const rd = String(item.reading || '').toLowerCase();
      const mn = String(item.meaning || '').toLowerCase();
      return jp.includes(q) || rd.includes(q) || mn.includes(q);
    });
  }

  function getMistakeMap() {
    const raw = readStorage(MISTAKES_KEY, {});
    return raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
  }

  function getMistakes(includeMastered = false) {
    const map = getMistakeMap();
    const values = Object.values(map).filter((m) => m && m.id);
    const filtered = includeMastered ? values : values.filter((m) => !m.mastered);
    return filtered.sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0));
  }

  function recordMistake(payload) {
    // Phase 1: Guard Clauses
    if (!payload || typeof payload !== 'object' || !payload.id) return null;
    const id = String(payload.id).trim();
    if (!id) return null;
    if (['__proto__', 'constructor', 'prototype'].includes(id)) return null;

    // Phase 2 & 3: Normalize & Compute
    const map = getMistakeMap();
    const prev = map[id] || { id, wrongCount: 0, consecutiveCorrect: 0, mastered: false };
    const updated = {
      id,
      question: String(payload.question || prev.question || id),
      correctAnswer: String(payload.correctAnswer || prev.correctAnswer || ''),
      userAnswer: String(payload.userAnswer || ''),
      category: String(payload.category || prev.category || 'grammar'),
      lessonId: String(payload.lessonId || prev.lessonId || 'general'),
      options: Array.isArray(payload.options) ? payload.options : (prev.options || []),
      explanation: String(payload.explanation || prev.explanation || ''),
      wrongCount: (Number(prev.wrongCount) || 0) + 1,
      consecutiveCorrect: 0,
      mastered: false,
      updatedAt: Date.now()
    };

    // Phase 4: Persist
    map[id] = updated;
    writeStorage(MISTAKES_KEY, map);
    return updated;
  }

  function resolveMistake(id, isCorrect = true) {
    if (!id) return null;
    const key = String(id).trim();
    if (!key) return null;
    if (['__proto__', 'constructor', 'prototype'].includes(key)) return null;
    const map = getMistakeMap();
    const entry = map[key];
    if (!entry) return null;

    if (isCorrect) {
      entry.consecutiveCorrect = (Number(entry.consecutiveCorrect) || 0) + 1;
      if (entry.consecutiveCorrect >= 2) {
        entry.mastered = true;
      }
    } else {
      entry.wrongCount = (Number(entry.wrongCount) || 0) + 1;
      entry.consecutiveCorrect = 0;
      entry.mastered = false;
    }
    entry.updatedAt = Date.now();
    map[key] = entry;
    writeStorage(MISTAKES_KEY, map);
    return entry;
  }

  function buildRedemptionQuiz(limit = 15) {
    const safeLimit = Math.max(1, Math.min(50, Number(limit) || 15));
    const activeMistakes = getMistakes(false).slice(0, safeLimit);
    return activeMistakes.map((m) => {
      const options = Array.isArray(m.options) && m.options.length >= 2
        ? m.options
        : [m.correctAnswer, m.userAnswer || 'Đáp án khác'].filter(Boolean);
      const srsBox = m.srsBox !== undefined ? m.srsBox : (Number(m.consecutiveCorrect) || 0);

      return {
        id: m.id,
        question: m.question,
        prompt: 'Phục thù SRS: ' + m.question,
        kanji: m.correctAnswer,
        reading: m.source || 'SRS Mistake',
        meaning: m.explanation || 'Ôn tập câu sai trong Sổ tay SRS',
        targetFormLabel: 'Đấu Trường Phục Thù (SRS Box ' + (srsBox || 0) + '/2)',
        options: options,
        answer: m.correctAnswer,
        explanation: m.explanation || '',
        ruleExplanation: m.explanation || 'Trả lời đúng 2 lần liên tiếp để xóa khỏi danh sách câu sai.',
        srsBox: srsBox,
        isRedemption: true,
        category: m.category || 'grammar',
        lessonId: m.lessonId || 'general',
        wrongCount: m.wrongCount,
        consecutiveCorrect: m.consecutiveCorrect
      };
    });
  }

  function getNotebookAnalytics() {
    const bookmarks = getBookmarks();
    const map = getMistakeMap();
    const allMistakes = Object.values(map).filter((m) => m && m.id);
    const activeMistakes = allMistakes.filter((m) => !m.mastered);
    const masteredMistakes = allMistakes.filter((m) => m.mastered);
    const totalEver = allMistakes.length;
    const masteryRate = totalEver > 0 ? Math.round((masteredMistakes.length / totalEver) * 100) : 100;
    const highRisk = activeMistakes
      .slice()
      .sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0))
      .slice(0, 5);

    return {
      totalBookmarks: bookmarks.length,
      activeMistakesCount: activeMistakes.length,
      masteredMistakesCount: masteredMistakes.length,
      totalMistakesEver: totalEver,
      masteryRatePercent: masteryRate,
      highRiskMistakes: highRisk
    };
  }

  function seedStarterPack() {
    const starterBookmarks = [
      { id: 'seed_bm_1', type: 'vocab', jp: '約束', reading: 'やくそく', meaning: 'Lời hứa, cuộc hẹn', lessonId: 'n5_core' },
      { id: 'seed_bm_2', type: 'verb', jp: '頑張る', reading: 'がんばる', meaning: 'Cố gắng hết mình (Nhóm 1)', lessonId: 'n5_verb' },
      { id: 'seed_bm_3', type: 'grammar', jp: '〜てください', reading: '〜てください', meaning: 'Hãy làm... (Yêu cầu lịch sự thể て)', lessonId: 'minna_l14' },
      { id: 'seed_bm_4', type: 'kanji', jp: '新', reading: 'シン / あたら・しい', meaning: 'Tân (Mới mẻ, tươi mới)', lessonId: 'kanji_n5' },
      { id: 'seed_bm_5', type: 'grammar', jp: '〜たことがあります', reading: '〜たことがあります', meaning: 'Đã từng làm gì (Kinh nghiệm quá khứ)', lessonId: 'minna_l19' },
      { id: 'seed_bm_6', type: 'vocab', jp: '木漏れ日', reading: 'こもれび', meaning: 'Ánh nắng len lỏi qua kẽ lá (Từ vựng giàu hình ảnh)', lessonId: 'n4_culture' }
    ];

    const starterMistakes = [
      {
        id: 'seed_err_iku',
        question: 'Chia thể て của động từ 行く (いく):',
        correctAnswer: 'いって',
        userAnswer: 'いいて',
        category: 'conjugation',
        lessonId: 'minna_l14',
        explanation: '行く là trường hợp bất quy tắc duy nhất của đuôi く đổi thành って (không phải いて).',
        options: ['いって', 'いいて', 'いきて', 'いかて']
      },
      {
        id: 'seed_err_ii',
        question: 'Dạng phủ định của tính từ いい (Tốt):',
        correctAnswer: 'よくない',
        userAnswer: 'いくない',
        category: 'adjective',
        lessonId: 'minna_l08',
        explanation: 'Tính từ いい biến đổi gốc thành よ khi chia sang mọi thể phủ định/quá khứ (よくない, よかった).',
        options: ['よくない', 'いくない', 'いいではない', 'よか কতক']
      },
      {
        id: 'seed_err_hitotsu',
        question: 'Cách đọc chuẩn của lượng từ 1 cái 「一つ」:',
        correctAnswer: 'ひとつ',
        userAnswer: 'いちつ',
        category: 'counter',
        lessonId: 'minna_l11',
        explanation: 'Đếm đồ vật thuần Nhật (〜つ) bất quy tắc từ 1 đến 10: ひとつ, ふたつ, みっつ... Không đọc theo âm Hán いちつ.',
        options: ['ひとつ', 'いちつ', 'いっつ', 'ひとこ']
      },
      {
        id: 'seed_err_ni_de',
        question: 'Điền trợ từ: 図書館___本を読みます (Tôi đọc sách ở thư viện):',
        correctAnswer: 'で',
        userAnswer: 'に',
        category: 'grammar',
        lessonId: 'minna_l06',
        explanation: 'Trợ từ で chỉ địa điểm diễn ra hành động động thái (đọc sách, ăn cơm). Trợ từ に chỉ nơi tồn tại (います/あります) hoặc đích đến.',
        options: ['で', 'に', 'へ', 'を']
      }
    ];

    // In-memory batch collection (Zero I/O in loops)
    const currentBookmarks = getBookmarks();
    const existingBmIds = new Set(currentBookmarks.map((b) => b && b.id));
    const newBookmarks = [];
    for (const bm of starterBookmarks) {
      if (!existingBmIds.has(bm.id)) {
        const norm = normalizeBookmarkItem(bm);
        if (norm) {
          newBookmarks.push(norm);
          existingBmIds.add(bm.id);
        }
      }
    }
    if (newBookmarks.length > 0) {
      writeStorage(BOOKMARKS_KEY, [...newBookmarks, ...currentBookmarks]);
    }

    const mistakeMap = Object.assign({}, getMistakeMap());
    let hasNewMistakes = false;
    for (const m of starterMistakes) {
      if (!mistakeMap[m.id]) {
        mistakeMap[m.id] = {
          id: m.id,
          question: String(m.question || m.id),
          correctAnswer: String(m.correctAnswer || ''),
          userAnswer: String(m.userAnswer || ''),
          category: String(m.category || 'grammar'),
          lessonId: String(m.lessonId || 'general'),
          options: Array.isArray(m.options) ? m.options : [],
          explanation: String(m.explanation || ''),
          wrongCount: 1,
          consecutiveCorrect: 0,
          mastered: false,
          updatedAt: Date.now()
        };
        hasNewMistakes = true;
      }
    }
    if (hasNewMistakes) {
      writeStorage(MISTAKES_KEY, mistakeMap);
    }

    return {
      seededBookmarks: starterBookmarks.length,
      seededMistakes: starterMistakes.length,
      analytics: getNotebookAnalytics()
    };
  }

  function lookupVerbBank(refHub, clean, pushUnique) {
    if (!refHub || !Array.isArray(refHub.verbBank)) return;
    for (const v of refHub.verbBank) {
      if (v.kanji.includes(clean) || v.reading.includes(clean) || (v.meaning && v.meaning.toLowerCase().includes(clean.toLowerCase()))) {
        pushUnique({
          id: `verb_${v.id}`,
          type: 'verb',
          found: true,
          term: v.kanji,
          jp: v.kanji,
          reading: v.reading,
          meaning: v.meaning,
          badge: `Nhóm ${v.group}`,
          extra: `Động từ Nhóm ${v.group}`
        });
      }
    }
  }

  function lookupAdjectiveBank(refHub, clean, pushUnique) {
    if (!refHub || !Array.isArray(refHub.adjectiveBank)) return;
    for (const a of refHub.adjectiveBank) {
      if (a.kanji === clean || a.reading === clean || clean.includes(a.kanji) || a.kanji.includes(clean)) {
        const groupLabel = (a.adjType || a.group) === 'i' ? 'い' : 'な';
        pushUnique({
          id: `adj_${a.id || a.kanji}`,
          type: 'adjective',
          found: true,
          term: a.kanji,
          jp: a.kanji,
          reading: a.reading,
          meaning: a.meaning,
          extra: 'Tính từ đuôi ' + groupLabel,
          badge: 'Tính từ đuôi ' + groupLabel
        });
      }
    }
  }

  function lookupKeigoTable(refHub, clean, pushUnique) {
    if (!refHub || !Array.isArray(refHub.keigoTable)) return;
    for (const k of refHub.keigoTable) {
      const plain = k.plain || k.dict || '';
      const match = k.plain === clean || k.sonkeigo === clean || k.kenjougo === clean || k.teineigo === clean
        || plain.includes(clean) || (k.sonkeigo && k.sonkeigo.includes(clean)) || (k.kenjougo && k.kenjougo.includes(clean));
      if (match) {
        pushUnique({
          id: `keigo_${k.id}`,
          type: 'keigo',
          found: true,
          term: clean,
          jp: plain || clean,
          reading: plain + ' → 尊: ' + (k.sonkeigo || '—') + ' / 謙: ' + (k.kenjougo || '—'),
          meaning: k.meaning,
          extra: 'Kính ngữ N4 (Keigo)',
          badge: 'Kính ngữ N4 (Keigo)'
        });
      }
    }
  }

  function lookupTransitivityPairs(refHub, clean, pushUnique) {
    if (!refHub || !Array.isArray(refHub.transitivityPairs)) return;
    for (const t of refHub.transitivityPairs) {
      const iK = (t.intransitive && (t.intransitive.kanji || t.intransitive.jp)) || '';
      const tK = (t.transitive && (t.transitive.kanji || t.transitive.jp)) || '';
      const iR = (t.intransitive && t.intransitive.reading) || '';
      const tR = (t.transitive && t.transitive.reading) || '';
      const match = iK === clean || tK === clean || iR === clean || tR === clean
        || (iK && iK.includes(clean)) || (tK && tK.includes(clean));
      if (match) {
        const iM = (t.intransitive && t.intransitive.meaning) || t.meaning || '';
        const tM = (t.transitive && t.transitive.meaning) || t.meaning || '';
        pushUnique({
          id: `trans_${t.id}`,
          type: 'transitivity',
          found: true,
          term: iK + ' ↔ ' + tK,
          jp: iK + ' ↔ ' + tK,
          reading: iR + ' / ' + tR,
          meaning: iM + ' ↔ ' + tM,
          extra: 'Tự động từ / Tha động từ',
          badge: 'Tự động từ / Tha động từ'
        });
      }
    }
  }

  function lookupFrequencyAdverbs(refHub, clean, pushUnique) {
    if (!refHub || !refHub.timeAdverbsMatrix || !Array.isArray(refHub.timeAdverbsMatrix.frequencyAdverbs)) return;
    for (const f of refHub.timeAdverbsMatrix.frequencyAdverbs) {
      const adv = f.adverb || f.kanji || f.jp || '';
      const match = f.adverb === clean || f.kanji === clean || f.jp === clean || adv === clean
        || (f.reading && f.reading === clean) || (adv && adv.includes(clean));
      if (match) {
        pushUnique({
          id: `adv_${f.id || adv}`,
          type: 'adverb',
          found: true,
          term: f.adverb || adv,
          jp: f.adverb || adv,
          reading: f.reading || f.adverb || adv,
          meaning: f.meaning,
          extra: 'Phó từ tần suất (' + (f.level || f.percentage || 'N5') + ')',
          badge: 'Phó từ tần suất'
        });
      }
    }
  }

  function lookupSelectionText(rawText, customSources = null) {
    // Phase 1: Guard Clauses
    if (typeof rawText !== 'string') return [];
    const query = rawText.trim().slice(0, 30);
    if (!query) return [];

    // Phase 2: Setup Collector & Seen Set
    const results = [];
    const seen = new Set();
    const pushUnique = (item) => {
      const key = (item && (item.term || item.jp || item.id)) + '|' + (item && item.type);
      if (!item || seen.has(key)) return;
      seen.add(key);
      results.push(item);
    };

    // Phase 3: Pure Hierarchical Dictionary Lookups
    const refHub = (customSources && customSources.refHub) || root.REFERENCE_HUB_DATA;
    lookupVerbBank(refHub, query, pushUnique);
    lookupAdjectiveBank(refHub, query, pushUnique);
    lookupKeigoTable(refHub, query, pushUnique);
    lookupTransitivityPairs(refHub, query, pushUnique);
    lookupFrequencyAdverbs(refHub, query, pushUnique);

    // Fallback: SEARCH_INDEX
    const searchIndex = (customSources && customSources.searchIndex) || root.SEARCH_INDEX;
    if (results.length < 8 && Array.isArray(searchIndex)) {
      for (const item of searchIndex) {
        if (!item) continue;
        const textPool = `${item.title || ''} ${item.jp || ''} ${item.vi || ''} ${item.reading || ''}`.toLowerCase();
        if (textPool.includes(query.toLowerCase())) {
          pushUnique({
            id: item.id || `idx_${results.length}`,
            type: item.type || 'vocab',
            found: true,
            term: item.jp || item.title || query,
            jp: item.jp || item.title || query,
            reading: item.reading || '',
            meaning: item.vi || item.desc || '',
            extra: item.type || 'Từ vựng',
            lessonId: item.lessonId || ''
          });
        }
        if (results.length >= 8) break;
      }
    }

    // Phase 4: Output Limit
    return results.slice(0, 8);
  }

  return {
    BOOKMARKS_KEY,
    MISTAKES_KEY,
    getBookmarks,
    isBookmarked,
    toggleBookmark,
    removeBookmark,
    searchBookmarks,
    getMistakes,
    recordMistake,
    resolveMistake,
    buildRedemptionQuiz,
    getNotebookAnalytics,
    seedStarterPack,
    lookupSelectionText
  };
});
