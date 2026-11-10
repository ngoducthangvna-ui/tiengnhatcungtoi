/**
 * STORAGE SECURITY & INTEGRITY ENGINE
 * src/storage_engine.js
 * --------------------------------------------------------------------------
 * Động cơ quản lý lưu trữ cục bộ (LocalStorage) với các tầng bảo vệ:
 * 1. Chống XSS (escapeHtml & escapeAttrValue sanitization)
 * 2. Chống ô nhiễm nguyên mẫu (Prototype Pollution Guard & sanitizeDeepObject)
 * 3. Chống gian lận điểm số & tiến độ bằng mã xác thực (Tamper-proof Checksum FNV-1a)
 * 4. Bắt lỗi tràn dung lượng Storage Quota & Tự động thích ứng chế độ ẩn danh (Private Mode)
 * 5. Phân lập Không gian tên Đa tài khoản (Multi-Account Namespace Isolation)
 * 6. Xuất/Nhập và Gộp tiến độ học tập thông minh (Progress Snapshot & Smart Merge)
 */
(function(root) {
  'use strict';

  // Hằng số định danh lưu trữ mặc định
  const STORAGE_KEYS = {
    COMPLETED: 'minna_completed_modules',
    PRACTICE: 'minna_practice_answers',
    DOKKAI: 'minna_dokkai_answers',
    LAST_ACTIVE: 'minna_last_active',
    EXAM_HISTORY: 'jlpt_exam_history',
    EXAM_BESTS: 'jlpt_exam_bests',
    EXAM_DRAFT: 'jlpt_exam_draft',
    EXAM_LEADERBOARD: 'jlpt_exam_leaderboard',
    EXAM_LOCKED_SESSIONS: 'jlpt_exam_locked_sessions'
  };

  // Quản lý Không gian tên Người dùng (Multi-Account Namespace Isolation)
  // Mặc định rỗng '' = Khách / Guest (Tương thích 100% với toàn bộ hệ thống hiện hành)
  let _activeUserNamespace = '';

  // Danh sách các khóa toàn cục KHÔNG gắn tiền tố namespace người dùng
  const GLOBAL_EXEMPT_KEYS = new Set([
    'minna_auth_accounts_v1',
    'minna_auth_active_session_v1',
    'minna_theme',
    'minna_device_settings',
    'minna_voice_settings'
  ]);

  /**
   * Danh sách đầy đủ các khóa dữ liệu tiến độ người dùng
   */
  const PROGRESS_KEY_PATTERNS = [
    'minna_completed_modules',
    'minna_practice_answers',
    'minna_dokkai_answers',
    'minna_dokkai_answers_v1',
    'minna_kaiwa_progress_v1',
    'minna_rfc_learned_ids',
    'jlpt_exam_history',
    'jlpt_exam_bests',
    'jlpt_exam_draft',
    'jlpt_exam_locked_sessions',
    'minna_last_active_id',
    'minna_module_scroll_pos',
    'minna_bookmarks_v1',
    'minna_mistake_bank_v1',
    'minna_daily_streak_v1',
    'minna_study_heatmap_v1',
    'minna_daily_quests_v1'
  ];
  for (let i = 1; i <= 50; i++) {
    PROGRESS_KEY_PATTERNS.push('minna_kfc_learned_l' + i);
  }

  /**
   * Tạo checksum FNV-1a hash 32-bit từ chuỗi dữ liệu
   */
  function _fnv1aHash(str) {
    if (str === null || str === undefined) return '0';
    const s = String(str);
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h * 0x01000193) >>> 0;
    }
    return h.toString(36);
  }

  function _csKey(storageKey) {
    return storageKey + '_cs';
  }

  /**
   * Hàm thuần ánh xạ khóa logic sang khóa vật lý theo namespace tài khoản đang hoạt động
   */
  function _resolveKey(key) {
    if (!key || typeof key !== 'string') return '';
    const trimmed = key.trim();
    if (!trimmed) return '';
    if (
      !_activeUserNamespace ||
      _activeUserNamespace === 'guest' ||
      GLOBAL_EXEMPT_KEYS.has(trimmed) ||
      trimmed.startsWith('minna_auth_') ||
      trimmed.startsWith('u_')
    ) {
      return trimmed;
    }
    return 'u_' + _activeUserNamespace + '_' + trimmed;
  }

  /**
   * Bộ nhớ RAM tạm thời khi trình duyệt chặn LocalStorage (Safari Private Browsing)
   */
  const _inMemoryFallbackStore = new Map();

  function isLocalStorageAvailable() {
    try {
      if (typeof localStorage === 'undefined' || !localStorage.getItem) return false;
      const testK = '__test_storage_probe__';
      localStorage.setItem(testK, '1');
      localStorage.removeItem(testK);
      return true;
    } catch (e) {
      return false;
    }
  }

  const StorageEngine = {
    KEYS: STORAGE_KEYS,
    PROGRESS_KEY_PATTERNS: PROGRESS_KEY_PATTERNS,
    GLOBAL_EXEMPT_KEYS: GLOBAL_EXEMPT_KEYS,
    hash: _fnv1aHash,

    // =========================================================================
    // 1. PHÂN LẬP KHÔNG GIAN TÊN ĐA NGƯỜI DÙNG (NAMESPACE ISOLATION)
    // =========================================================================

    /**
     * Thiết lập namespace cho người dùng đang đăng nhập
     * @param {string} uid Mã định danh người dùng (chỉ giữ ký tự [a-zA-Z0-9_-])
     */
    setActiveUserNamespace(uid) {
      if (!uid || typeof uid !== 'string') {
        _activeUserNamespace = '';
        return _activeUserNamespace;
      }
      const normalized = String(uid).trim().replace(/[^a-zA-Z0-9_-]/g, '');
      if (!normalized || normalized.toLowerCase() === 'guest') {
        _activeUserNamespace = '';
      } else {
        _activeUserNamespace = normalized;
      }
      return _activeUserNamespace;
    },

    /**
     * Lấy namespace người dùng hiện tại
     */
    getActiveUserNamespace() {
      return _activeUserNamespace;
    },

    /**
     * Ánh xạ khóa logic sang khóa vật lý
     */
    resolveKey(key) {
      return _resolveKey(key);
    },

    // =========================================================================
    // 2. VỆ SINH & BẢO VỆ CHỐNG TẤN CÔNG XSS / PROTOTYPE POLLUTION
    // =========================================================================

    /**
     * Vệ sinh chuỗi HTML chống tiêm mã độc XSS
     */
    escapeHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    /**
     * Vệ sinh URL chống tấn công Pseudo-protocol XSS (javascript:, data:, vbscript:)
     */
    sanitizeUrl(rawUrl, fallback = 'about:blank') {
      if (root.SecurityEngine && typeof root.SecurityEngine.sanitizeUrl === 'function') {
        return root.SecurityEngine.sanitizeUrl(rawUrl, fallback);
      }
      if (!rawUrl || typeof rawUrl !== 'string') return fallback;
      const trimmed = rawUrl.trim();
      if (/^(javascript|data|vbscript|file):/i.test(trimmed)) return fallback;
      if (!/^(https?:\/\/|mailto:|tel:|\/|#|\?)/i.test(trimmed)) return fallback;
      return trimmed.replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },

    /**
     * Context-aware Attribute Value Escaping
     */
    escapeAttrValue(str) {
      if (root.SecurityEngine && typeof root.SecurityEngine.escapeAttrValue === 'function') {
        return root.SecurityEngine.escapeAttrValue(str);
      }
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/`/g, '&#096;')
        .replace(/\\/g, '&#092;');
    },

    /**
     * Kiểm tra khóa an toàn chống Prototype Pollution
     */
    isSafeObjectKey(key) {
      if (typeof key !== 'string') return false;
      const dangerous = ['__proto__', 'constructor', 'prototype'];
      return !dangerous.includes(key.trim());
    },

    /**
     * Lọc sạch toàn bộ các thuộc tính nguy hiểm trong object lồng nhau
     */
    sanitizeDeepObject(obj) {
      if (!obj || typeof obj !== 'object') return obj;
      if (Array.isArray(obj)) {
        return obj.map(item => StorageEngine.sanitizeDeepObject(item));
      }
      const safe = {};
      for (const k of Object.keys(obj)) {
        if (StorageEngine.isSafeObjectKey(k)) {
          safe[k] = StorageEngine.sanitizeDeepObject(obj[k]);
        }
      }
      return safe;
    },

    // =========================================================================
    // 3. THAO TÁC TRỰC TIẾP KHÓA VẬT LÝ (RAW PHYSICAL OPERATIONS)
    // =========================================================================

    /**
     * Ghi trực tiếp khóa vật lý có xác thực Checksum (không qua resolveKey)
     */
    secureSetRaw(rawKey, value) {
      if (!rawKey || typeof rawKey !== 'string') return;
      try {
        const strVal = String(value);
        const cs = _fnv1aHash(strVal + rawKey);
        if (isLocalStorageAvailable()) {
          localStorage.setItem(rawKey, strVal);
          localStorage.setItem(_csKey(rawKey), cs);
        } else {
          _inMemoryFallbackStore.set(rawKey, strVal);
          _inMemoryFallbackStore.set(_csKey(rawKey), cs);
        }
      } catch (e) {
        console.warn('[StorageEngine] Ghi dữ liệu thô thất bại:', rawKey, e && e.name);
      }
    },

    /**
     * Đọc trực tiếp khóa vật lý có xác thực Checksum toàn vẹn
     */
    secureGetRaw(rawKey, fallback = null) {
      if (!rawKey || typeof rawKey !== 'string') return fallback;
      try {
        let value = null;
        let storedCs = null;

        if (isLocalStorageAvailable()) {
          value = localStorage.getItem(rawKey);
          storedCs = localStorage.getItem(_csKey(rawKey));
        } else {
          value = _inMemoryFallbackStore.get(rawKey) || null;
          storedCs = _inMemoryFallbackStore.get(_csKey(rawKey)) || null;
        }

        if (value === null) return fallback;

        if (storedCs !== null) {
          const expectedCs = _fnv1aHash(String(value) + rawKey);
          if (storedCs !== expectedCs) {
            console.warn('[StorageEngine] ⚠️ Phát hiện dữ liệu bị can thiệp tại khóa vật lý:', rawKey);
            StorageEngine.safeRemoveRaw(rawKey);
            return fallback;
          }
        }
        return value;
      } catch (e) {
        return fallback;
      }
    },

    /**
     * Đọc JSON an toàn từ khóa vật lý trực tiếp
     */
    secureGetJsonRaw(rawKey, fallback = null, validator = null) {
      try {
        const raw = StorageEngine.secureGetRaw(rawKey, null);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        const clean = StorageEngine.sanitizeDeepObject(parsed);
        if (typeof validator === 'function') {
          return validator(clean) ? clean : fallback;
        }
        return (clean !== null && clean !== undefined) ? clean : fallback;
      } catch (e) {
        return fallback;
      }
    },

    /**
     * Xóa trực tiếp khóa vật lý kèm Checksum
     */
    safeRemoveRaw(rawKey) {
      if (!rawKey || typeof rawKey !== 'string') return;
      try {
        if (isLocalStorageAvailable()) {
          localStorage.removeItem(rawKey);
          localStorage.removeItem(_csKey(rawKey));
        }
        _inMemoryFallbackStore.delete(rawKey);
        _inMemoryFallbackStore.delete(_csKey(rawKey));
      } catch (e) {}
    },

    // =========================================================================
    // 4. THAO TÁC CÓ ÁNH XẠ NAMESPACE (NAMESPACED SECURE OPERATIONS)
    // =========================================================================

    /**
     * Ghi dữ liệu vào localStorage có ánh xạ Namespace & Checksum
     */
    secureSet(key, value) {
      const effectiveKey = StorageEngine.resolveKey(key);
      if (!effectiveKey) return;
      StorageEngine.secureSetRaw(effectiveKey, value);
    },

    /**
     * Đọc dữ liệu từ localStorage có ánh xạ Namespace & xác minh Checksum
     */
    secureGet(key, fallback = null) {
      const effectiveKey = StorageEngine.resolveKey(key);
      if (!effectiveKey) return fallback;
      return StorageEngine.secureGetRaw(effectiveKey, fallback);
    },

    /**
     * Đọc JSON an toàn có ánh xạ Namespace & Schema Validator
     */
    secureGetJson(key, fallback = null, validator = null) {
      try {
        const raw = StorageEngine.secureGet(key, null);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        const clean = StorageEngine.sanitizeDeepObject(parsed);
        if (typeof validator === 'function') {
          return validator(clean) ? clean : fallback;
        }
        return (clean !== null && clean !== undefined) ? clean : fallback;
      } catch (e) {
        return fallback;
      }
    },

    /**
     * Ghi dữ liệu thông thường (Ủy quyền qua secureSet)
     */
    safeSet(key, value) {
      StorageEngine.secureSet(key, value);
    },

    /**
     * Đọc dữ liệu thông thường (Ủy quyền qua secureGet)
     */
    safeGet(key, fallback = null) {
      return StorageEngine.secureGet(key, fallback);
    },

    /**
     * Đọc JSON an toàn (Ủy quyền qua secureGetJson)
     */
    safeGetJson(key, fallback = null, validator = null) {
      return StorageEngine.secureGetJson(key, fallback, validator);
    },

    /**
     * Xóa khóa dữ liệu an toàn có ánh xạ Namespace
     */
    safeRemove(key) {
      const effectiveKey = StorageEngine.resolveKey(key);
      if (!effectiveKey) return;
      StorageEngine.safeRemoveRaw(effectiveKey);
    },

    // =========================================================================
    // 5. XUẤT, NHẬP & GỘP TIẾN ĐỘ THÔNG MINH (PROGRESS SYNC ENGINE)
    // =========================================================================

    /**
     * Xuất toàn bộ tiến độ học tập của người dùng thành Snapshot
     * @param {string} uid ID tài khoản hoặc 'guest' / ''
     * @returns {Object} Snapshot tiến độ chuẩn hóa
     */
    exportUserProgressSnapshot(uid) {
      const cleanUid = (!uid || uid === 'guest') ? 'guest' : String(uid).trim().replace(/[^a-zA-Z0-9_-]/g, '');
      const data = {};

      for (const k of PROGRESS_KEY_PATTERNS) {
        const physicalKey = (cleanUid === 'guest') ? k : ('u_' + cleanUid + '_' + k);
        const rawVal = StorageEngine.secureGetRaw(physicalKey, null);
        if (rawVal === null || rawVal === undefined) continue;

        try {
          const parsed = JSON.parse(rawVal);
          data[k] = StorageEngine.sanitizeDeepObject(parsed);
        } catch (e) {
          data[k] = rawVal;
        }
      }

      return {
        version: 1,
        uid: cleanUid,
        exportedAt: Date.now(),
        data: data
      };
    },

    /**
     * Hàm thuần gộp tiến độ học tập giữa 2 tập dữ liệu
     * @param {Object} localData Dữ liệu hiện tại
     * @param {Object} remoteData Dữ liệu mới / từ máy chủ / từ file import
     * @returns {Object} Dữ liệu đã gộp tối ưu
     */
    mergeProgressData(localData, remoteData) {
      const safeLocal = (localData && typeof localData === 'object') ? localData : {};
      const safeRemote = (remoteData && typeof remoteData === 'object') ? remoteData : {};

      const result = {};
      const allKeys = new Set([...Object.keys(safeLocal), ...Object.keys(safeRemote)]);

      for (const k of allKeys) {
        const valA = safeLocal[k];
        const valB = safeRemote[k];

        if (valA === undefined) {
          result[k] = StorageEngine.sanitizeDeepObject(valB);
          continue;
        }
        if (valB === undefined) {
          result[k] = StorageEngine.sanitizeDeepObject(valA);
          continue;
        }

        // 1. Gộp mảng danh sách hoàn thành (completed modules, kanji, radicals, locked sessions)
        if (Array.isArray(valA) || Array.isArray(valB)) {
          const arrA = Array.isArray(valA) ? valA : [];
          const arrB = Array.isArray(valB) ? valB : [];

          if (k === 'jlpt_exam_history') {
            // Lịch sử thi JLPT: gộp theo sessionId hoặc examCode + date + score, lấy mới nhất tối đa 50 bài
            const seen = new Set();
            const combined = [];
            for (const item of [...arrB, ...arrA]) {
              if (!item || typeof item !== 'object') continue;
              const dedupeKey = item.sessionId || `${item.examCode || ''}_${item.date || item.timestamp || ''}_${item.score || 0}`;
              if (!seen.has(dedupeKey)) {
                seen.add(dedupeKey);
                combined.push(StorageEngine.sanitizeDeepObject(item));
              }
            }
            combined.sort((a, b) => (b.date || b.timestamp || 0) - (a.date || a.timestamp || 0));
            result[k] = combined.slice(0, 50);
          } else {
            // Danh sách ID duy nhất
            result[k] = Array.from(new Set([...arrA, ...arrB]));
          }
          continue;
        }

        // 2. Kỷ lục điểm thi JLPT cao nhất (jlpt_exam_bests)
        if (k === 'jlpt_exam_bests') {
          const bestsA = (valA && typeof valA === 'object') ? valA : {};
          const bestsB = (valB && typeof valB === 'object') ? valB : {};
          const mergedBests = {};
          const examCodes = new Set([...Object.keys(bestsA), ...Object.keys(bestsB)]);
          for (const code of examCodes) {
            const itemA = bestsA[code];
            const itemB = bestsB[code];
            if (typeof itemA === 'number' && typeof itemB === 'number') {
              mergedBests[code] = Math.max(itemA, itemB);
            } else {
              const scoreA = Number((itemA && typeof itemA === 'object') ? (itemA.score || itemA.scorePercent || 0) : (itemA || 0));
              const scoreB = Number((itemB && typeof itemB === 'object') ? (itemB.score || itemB.scorePercent || 0) : (itemB || 0));
              mergedBests[code] = scoreB >= scoreA ? StorageEngine.sanitizeDeepObject(itemB) : StorageEngine.sanitizeDeepObject(itemA);
            }
          }
          result[k] = mergedBests;
          continue;
        }

        // 3. Bài trắc nghiệm & Đọc hiểu (minna_practice_answers, minna_dokkai_answers, minna_dokkai_answers_v1)
        if (k === 'minna_practice_answers' || k === 'minna_dokkai_answers' || k === 'minna_dokkai_answers_v1') {
          const dictA = (valA && typeof valA === 'object') ? valA : {};
          const dictB = (valB && typeof valB === 'object') ? valB : {};
          const mergedDict = {};
          const lessonIds = new Set([...Object.keys(dictA), ...Object.keys(dictB)]);
          for (const id of lessonIds) {
            const recA = dictA[id];
            const recB = dictB[id];
            if (!recA) {
              mergedDict[id] = StorageEngine.sanitizeDeepObject(recB);
            } else if (!recB) {
              mergedDict[id] = StorageEngine.sanitizeDeepObject(recA);
            } else {
              const scoreA = Number(recA && recA.score ? recA.score : 0);
              const scoreB = Number(recB && recB.score ? recB.score : 0);
              if (scoreB > scoreA) {
                mergedDict[id] = StorageEngine.sanitizeDeepObject(recB);
              } else if (scoreA > scoreB) {
                mergedDict[id] = StorageEngine.sanitizeDeepObject(recA);
              } else {
                mergedDict[id] = (recB && recB.submitted) ? StorageEngine.sanitizeDeepObject(recB) : StorageEngine.sanitizeDeepObject(recA);
              }
            }
          }
          result[k] = mergedDict;
          continue;
        }

        // 4. Hội thoại Kaiwa (minna_kaiwa_progress_v1)
        if (k === 'minna_kaiwa_progress_v1') {
          const kaiwaA = (valA && typeof valA === 'object') ? valA : { scores: {}, evalData: {} };
          const kaiwaB = (valB && typeof valB === 'object') ? valB : { scores: {}, evalData: {} };
          const scoresA = kaiwaA.scores || {};
          const scoresB = kaiwaB.scores || {};
          const mergedScores = {};
          for (const sk of new Set([...Object.keys(scoresA), ...Object.keys(scoresB)])) {
            mergedScores[sk] = Math.max(Number(scoresA[sk] || 0), Number(scoresB[sk] || 0));
          }
          const evalA = kaiwaA.evalData || {};
          const evalB = kaiwaB.evalData || {};
          const mergedEval = {};
          for (const ek of new Set([...Object.keys(evalA), ...Object.keys(evalB)])) {
            const evA = evalA[ek];
            const evB = evalB[ek];
            if (!evA) mergedEval[ek] = StorageEngine.sanitizeDeepObject(evB);
            else if (!evB) mergedEval[ek] = StorageEngine.sanitizeDeepObject(evA);
            else {
              const scA = Number(evA.score || evA.overallScore || 0);
              const scB = Number(evB.score || evB.overallScore || 0);
              mergedEval[ek] = scB >= scA ? StorageEngine.sanitizeDeepObject(evB) : StorageEngine.sanitizeDeepObject(evA);
            }
          }
          result[k] = { scores: mergedScores, evalData: mergedEval };
          continue;
        }

        // 5. Đối tượng chung hoặc giá trị nguyên thủy
        if (typeof valB === 'object' && valB !== null && typeof valA === 'object' && valA !== null) {
          result[k] = Object.assign({}, StorageEngine.sanitizeDeepObject(valA), StorageEngine.sanitizeDeepObject(valB));
        } else {
          result[k] = StorageEngine.sanitizeDeepObject(valB !== undefined ? valB : valA);
        }
      }

      return result;
    },

    /**
     * Gộp hai snapshot hoàn chỉnh thành một snapshot mới
     */
    mergeProgressSnapshots(snapA, snapB) {
      const dataA = (snapA && snapA.data) ? snapA.data : {};
      const dataB = (snapB && snapB.data) ? snapB.data : {};
      const merged = StorageEngine.mergeProgressData(dataA, dataB);
      return {
        version: 1,
        uid: (snapB && snapB.uid) || (snapA && snapA.uid) || 'guest',
        exportedAt: Date.now(),
        data: merged
      };
    },

    /**
     * Nhập Snapshot tiến độ vào không gian tên của người dùng
     * @param {string} uid ID tài khoản nhận dữ liệu
     * @param {Object} snapshotData Dữ liệu snapshot
     * @param {boolean} mergeMode true để gộp thông minh, false để ghi đè
     */
    importUserProgressSnapshot(uid, snapshotData, mergeMode = true) {
      if (!snapshotData || typeof snapshotData !== 'object' || !snapshotData.data) {
        return { success: false, error: 'Dữ liệu snapshot không hợp lệ.' };
      }

      const cleanUid = (!uid || uid === 'guest') ? 'guest' : String(uid).trim().replace(/[^a-zA-Z0-9_-]/g, '');
      let finalData = snapshotData.data;

      if (mergeMode) {
        const currentSnapshot = StorageEngine.exportUserProgressSnapshot(cleanUid);
        finalData = StorageEngine.mergeProgressData(currentSnapshot.data || {}, snapshotData.data || {});
      }

      let writtenCount = 0;
      for (const k of Object.keys(finalData)) {
        const val = finalData[k];
        if (val === null || val === undefined) continue;
        const physicalKey = (cleanUid === 'guest') ? k : ('u_' + cleanUid + '_' + k);
        const strVal = (typeof val === 'object') ? JSON.stringify(val) : String(val);
        StorageEngine.secureSetRaw(physicalKey, strVal);
        writtenCount++;
      }

      return {
        success: true,
        uid: cleanUid,
        count: writtenCount,
        data: finalData
      };
    },

    // =========================================================================
    // 6. CÁC BÍ DANH TƯƠNG THÍCH GIAO DIỆN STORAGE TIÊU CHUẨN
    // =========================================================================
    setItem(key, value) { return this.safeSet(key, value); },
    getItem(key, fallback = null) { return this.safeGet(key, fallback); },
    getJson(key, fallback = null, validator = null) { return this.safeGetJson(key, fallback, validator); },
    removeItem(key) { return this.safeRemove(key); },
    secureSetItem(key, value) { return this.secureSet(key, value); },
    secureGetItem(key, fallback = null) { return this.secureGet(key, fallback); },
    secureRemoveItem(key) { return this.safeRemove(key); }
  };

  // Bảo đảm tương thích toàn cầu UMD
  if (typeof window !== 'undefined') window.StorageEngine = StorageEngine;
  if (typeof global !== 'undefined') global.StorageEngine = StorageEngine;
  if (typeof module !== 'undefined' && module.exports) module.exports = StorageEngine;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
