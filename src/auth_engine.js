/**
 * ==============================================================================
 * CORE MULTI-ACCOUNT AUTH & PROGRESS SYNC ENGINE (src/auth_engine.js)
 * ------------------------------------------------------------------------------
 * Hệ thống Quản lý Đa tài khoản & Đồng bộ Tiến độ học tập Ngoại tuyến / Trực tuyến:
 * 1. Phân lập dữ liệu hoàn toàn giữa các tài khoản (Namespace Isolation u_<uid>_*)
 * 2. Bảo mật mật mã: Salted PIN Hashing & Timing-Safe Verification chống Timing Attacks
 * 3. Chống Prototype Pollution & XSS trên hồ sơ người dùng
 * 4. Hệ thống Huy hiệu & Tính toán XP Danh hiệu học viên chuẩn hóa
 * 5. Xuất/Nhập Mã đồng bộ Di động (Mobile Sync Code Base64URL)
 * 6. Tự động đồng bộ 2 chiều với máy chủ (/api/auth/sync)
 * ==============================================================================
 */

(function(root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    // Node.js CommonJS
    module.exports = factory(root);
  } else {
    // Browser global / UMD
    root.AuthEngine = factory(root);
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this), function(root) {
  'use strict';

  // Khóa lưu trữ toàn cục cho tài khoản và phiên đăng nhập
  const STORAGE_KEYS = {
    ACCOUNTS: 'minna_auth_accounts_v1',
    ACTIVE_SESSION: 'minna_auth_active_session_v1'
  };

  // Muối bí mật chống giả mạo mã đồng bộ
  const SYNC_CODE_SALT = ':MINNA_SYNC_V1_SALT_2026';

  /**
   * Bộ sưu tập 8 hình đại diện (Avatar) truyền thống Nhật Bản (Wa-Modern Vector SVG)
   */
  const AVATAR_PRESETS = [
    { id: 'daruma', icon: '🎯', name: 'Daruma May Mắn', description: 'Kiên trì bất khuất, ngã 7 lần đứng dậy 8 lần', svg: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3C16.8 3 19.5 6.2 19.5 12C19.5 17.8 16.8 21 12 21C7.2 21 4.5 17.8 4.5 12C4.5 6.2 7.2 3 12 3Z M7.5 9.5C7.5 7 9.4 5.5 12 5.5C14.6 5.5 16.5 7 16.5 9.5C16.5 11.4 14.6 12.5 12 12.5C9.4 12.5 7.5 11.4 7.5 9.5Z M9.5 8.8H10.2 M13.8 8.8H14.5 M10 11C11 10.3 13 10.3 14 11 M10.5 15H13.5V18.5H10.5Z M10.5 16.8H13.5 M8 15C7.8 16.5 8.2 18 9 18.8 M16 15C16.2 16.5 15.8 18 15 18.8"></path></svg>` },
    { id: 'samurai', icon: '⚔️', name: 'Võ Sĩ Samurai', description: 'Kỷ luật thép, tinh thần võ sĩ đạo Nhật Bản', svg: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9L5 3.5C4.5 6.5 6.5 9.5 9.5 10.5 M12 9L19 3.5C19.5 6.5 17.5 9.5 14.5 10.5 M6 12C6 8.5 8.7 6 12 6C15.3 6 18 8.5 18 12L20 17.5H4L6 12Z M4.5 15H19.5 M9 17.5V20.5H15V17.5 M9.5 13H14.5"></path></svg>` },
    { id: 'sakura', icon: '🌸', name: 'Hoa Anh Đào', description: 'Thanh tao, tươi mới và tràn đầy năng lượng', svg: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1.8"></circle><path d="M12 9.8c-1.5-3-3.2-4.5-1.5-6.5 2.5 1 2.5 3 3 0 1.7 2 0 3.5-1.5 6.5z"></path><path d="M14.1 11.3c2.9-.9 5.2-.8 5.6 1.4-1.7 1.8-3.3.9-2.6 2.6-2.5-.2-3.1-1.7-4.2-2.7a1.3 1.3 0 0 1 1.2-1.3z"></path><path d="M13.3 13.8c1.8 2.5 2.9 4.3 1 5.9-2.2-.8-2-2.6-3.2-1.5-.7-2.4.6-3.7 1.4-4.8a1.3 1.3 0 0 1 1.8.4z"></path><path d="M10.7 13.8c-1.8 2.5-2.9 4.3-1 5.9 2.2-.8 2-2.6 3.2-1.5.7-2.4-.6-3.7-1.4-4.8a1.3 1.3 0 0 0-1.8.4z"></path><path d="M9.9 11.3c-2.9-.9-5.2-.8-5.6 1.4 1.7 1.8 3.3.9 2.6 2.6 2.5-.2 3.1-1.7 4.2-2.7a1.3 1.3 0 0 0-1.2-1.3z"></path><path d="M12 12L12 9 M12 12L14.8 11.1 M12 12L13.8 14.4 M12 12L10.2 14.4 M12 12L9.2 11.1"></path></svg>` },
    { id: 'kitsune', icon: '🦊', name: 'Cáo Kitsune', description: 'Thông minh, sắc sảo và biến hóa khôn lường', svg: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4L10 7.5H14L19 4L18.5 13C18.5 16.8 15.5 20.5 12 21.5C8.5 20.5 5.5 16.8 5.5 13L5 4Z M8 12.5L10.5 13.5 M16 12.5L13.5 13.5 M6.5 16L9 16.5 M17.5 16L15 16.5 M12 7.5V11 M11.5 18H12.5"></path></svg>` },
    { id: 'neko', icon: '🐱', name: 'Mèo Thần Tài', description: 'Chiêu tài đắc lộc, học tập may mắn thuận buồm', svg: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18c0-4.4 2.7-8 6-8s6 3.6 6 8"></path><path d="M7 10L6 4l5 3M17 10l1-6-5 3"></path><path d="M4 19h16"></path><path d="M9 13.5l-2-.5M15 13.5l2-.5"></path><circle cx="12" cy="18" r="1.5"></circle></svg>` },
    { id: 'ninja', icon: '🥷', name: 'Ninja Ám Ảnh', description: 'Nhanh nhẹn, tập trung cao độ vượt mọi thử thách', svg: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z"></path><circle cx="12" cy="11" r="2.2"></circle><circle cx="12" cy="11" r="6" stroke-dasharray="2 2"></circle></svg>` },
    { id: 'fuji', icon: '🗻', name: 'Núi Phú Sĩ', description: 'Vững chãi như thái sơn, đỉnh cao tiếng Nhật N1', svg: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 12.5A6 6 0 1 1 17.5 12.5 M3 20L9.5 9.5H14.5L21 20 M8.2 11.6L10.2 13L12 11L13.8 13L15.8 11.6 M2 20H22"></path></svg>` },
    { id: 'tanuki', icon: '🦝', name: 'Gấu Trúc Tanuki', description: 'Hóm hỉnh, lạc quan yêu đời trên bước đường học', svg: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="14" r="7"></circle><path d="M6 10l-2-3 4 1M18 10l2-3-4 1"></path><ellipse cx="9" cy="13.5" rx="2" ry="1.2"></ellipse><ellipse cx="15" cy="13.5" rx="2" ry="1.2"></ellipse><circle cx="9" cy="13.5" r="0.6"></circle><circle cx="15" cy="13.5" r="0.6"></circle><path d="M12 7c-2-2.5 0-4.5 2-4.5s2 2 0 4.5"></path><path d="M10.5 17c1 .6 2 .6 3 0"></path></svg>` }
  ];

  // Trạng thái người dùng đang hoạt động trong bộ nhớ RAM
  let _currentUser = null;

  // Tập hợp các hàm lắng nghe sự kiện thay đổi phiên đăng nhập
  const _authChangeListeners = new Set();

  /**
   * Lấy tham chiếu StorageEngine an toàn đa môi trường
   */
  function _getStorageEngine() {
    if (root && root.StorageEngine) return root.StorageEngine;
    if (typeof require === 'function') {
      try {
        const mod = require('./storage_engine.js');
        if (root) root.StorageEngine = mod;
        return mod;
      } catch (e) {}
    }
    return null;
  }

  /**
   * Lọc chuỗi chống XSS
   */
  function _escapeText(str) {
    if (str === null || str === undefined) return '';
    const se = _getStorageEngine();
    if (se && typeof se.escapeHtml === 'function') {
      return se.escapeHtml(str);
    }
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Sinh chuỗi Hex ngẫu nhiên an toàn mật mã CSPRNG
   */
  function _generateRandomHex(hexLength = 8) {
    if (root && root.SecurityEngine && typeof root.SecurityEngine.generateCSPRNGToken === 'function') {
      try {
        return root.SecurityEngine.generateCSPRNGToken(Math.ceil(hexLength / 2)).slice(0, hexLength);
      } catch (e) {}
    }
    if (typeof require === 'function') {
      try {
        const crypto = require('crypto');
        if (crypto && typeof crypto.randomBytes === 'function') {
          return crypto.randomBytes(Math.ceil(hexLength / 2)).toString('hex').slice(0, hexLength);
        }
      } catch (e) {}
    }
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
      const arr = new Uint8Array(Math.ceil(hexLength / 2));
      crypto.getRandomValues(arr);
      return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('').slice(0, hexLength);
    }
    // Thuật toán Failsafe toán học
    let out = '';
    while (out.length < hexLength) {
      out += Math.random().toString(16).slice(2);
    }
    return out.slice(0, hexLength);
  }

  /**
   * Băm mã định danh bí mật (PIN) đa tầng kèm Salt (Không lưu chuỗi gốc)
   */
  function _hashSecretPin(pinInput, credentialSalt) {
    if (!pinInput || typeof pinInput !== 'string') return '';
    const saltStr = String(credentialSalt || 'minna_default_salt');
    const combinedStr = saltStr + ':' + pinInput + ':minna_salt_v1';

    // 1. Thử dùng Node.js crypto PBKDF2 nếu có
    if (typeof require === 'function') {
      try {
        const crypto = require('crypto');
        if (crypto && typeof crypto.pbkdf2Sync === 'function') {
          return crypto.pbkdf2Sync(pinInput, saltStr, 1000, 24, 'sha256').toString('hex');
        }
      } catch (e) {}
    }

    // 2. Thử dùng SecurityEngine.hashToken nếu là hàm đồng bộ
    if (root && root.SecurityEngine && typeof root.SecurityEngine.hashToken === 'function') {
      try {
        const res = root.SecurityEngine.hashToken(combinedStr);
        if (typeof res === 'string' && res.length > 0) return res;
      } catch (e) {}
    }

    // 3. Thuật toán Pure JS đa vòng FNV-1a 128-bit có Salt (Luôn cho ra chuỗi hex 32 ký tự)
    let h1 = 0x811c9dc5;
    let h2 = 0x9e3779b9;
    let h3 = 0x85ebca6b;
    let h4 = 0xc2b2ae35;
    for (let round = 0; round < 64; round++) {
      const roundStr = combinedStr + '#' + round;
      for (let i = 0; i < roundStr.length; i++) {
        const code = roundStr.charCodeAt(i);
        h1 = Math.imul(h1 ^ code, 0x01000193) >>> 0;
        h2 = Math.imul(h2 ^ ((code << 5) | (code >>> 27)), 0x5bd1e995) >>> 0;
        h3 = Math.imul(h3 ^ ((code << 7) | (code >>> 25)), 0x1b873593) >>> 0;
        h4 = Math.imul(h4 ^ ((code << 11) | (code >>> 21)), 0xcc9e2d51) >>> 0;
      }
    }
    return h1.toString(16).padStart(8, '0') +
           h2.toString(16).padStart(8, '0') +
           h3.toString(16).padStart(8, '0') +
           h4.toString(16).padStart(8, '0');
  }

  /**
   * Đảm bảo chuỗi credentialHash gửi lên Server luôn có độ dài >= 32 ký tự hex
   */
  function _normalizeServerCredHash(pinHash, credentialSalt) {
    let raw = String(pinHash || '').trim();
    if (raw.length < 32) {
      const combined = (raw + ':' + (credentialSalt || 'minna') + ':credential_ext').repeat(2);
      let h1 = 0x811c9dc5, h2 = 0x9e3779b9;
      for (let i = 0; i < combined.length; i++) {
        const c = combined.charCodeAt(i);
        h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0;
        h2 = Math.imul(h2 ^ ((c << 5) | (c >>> 27)), 0x5bd1e995) >>> 0;
      }
      raw = raw + h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');
      while (raw.length < 32) {
        raw += raw;
      }
    }
    return raw.slice(0, 64);
  }

  /**
   * Xác minh mã định danh bí mật với thời gian hằng số (Timing-Safe)
   */
  function _verifySecretPin(candidatePin, credentialSalt, storedPinHash) {
    if (!candidatePin || !credentialSalt || !storedPinHash) return false;
    const computedHash = _hashSecretPin(candidatePin, credentialSalt);

    if (root && root.SecurityEngine && typeof root.SecurityEngine.timingSafeEqual === 'function') {
      try {
        return root.SecurityEngine.timingSafeEqual(computedHash, storedPinHash);
      } catch (e) {}
    }

    // Triển khai thủ công Constant-time comparison
    if (computedHash.length !== storedPinHash.length) return false;
    let mismatch = 0;
    for (let i = 0; i < computedHash.length; i++) {
      mismatch |= computedHash.charCodeAt(i) ^ storedPinHash.charCodeAt(i);
    }
    return mismatch === 0;
  }

  /**
   * Đọc danh sách tài khoản thô từ StorageEngine
   */
  function _loadAccounts() {
    const se = _getStorageEngine();
    if (!se || typeof se.secureGetJsonRaw !== 'function') return [];
    return se.secureGetJsonRaw(STORAGE_KEYS.ACCOUNTS, []) || [];
  }

  /**
   * Ghi danh sách tài khoản thô vào StorageEngine
   */
  function _saveAccounts(accounts) {
    const se = _getStorageEngine();
    if (!se || typeof se.secureSetRaw !== 'function') return;
    se.secureSetRaw(STORAGE_KEYS.ACCOUNTS, JSON.stringify(accounts));
  }

  /**
   * Đọc phiên đăng nhập hiện tại từ StorageEngine
   */
  function _loadActiveSession() {
    const se = _getStorageEngine();
    if (!se || typeof se.secureGetJsonRaw !== 'function') return null;
    return se.secureGetJsonRaw(STORAGE_KEYS.ACTIVE_SESSION, null);
  }

  /**
   * Ghi hoặc xóa phiên đăng nhập hiện tại
   */
  function _saveActiveSession(sessionUser) {
    const se = _getStorageEngine();
    if (!se) return;
    if (sessionUser) {
      se.secureSetRaw(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(sessionUser));
    } else {
      se.safeRemoveRaw(STORAGE_KEYS.ACTIVE_SESSION);
    }
  }

  /**
   * Lọc bỏ các trường nhạy cảm trước khi trả thông tin tài khoản ra ngoài
   */
  function _sanitizeUserPublic(account) {
    if (!account || typeof account !== 'object') return null;
    return {
      uid: account.uid,
      username: account.username,
      displayName: account.displayName || account.username,
      avatar: account.avatar || 'daruma',
      levelGoal: account.levelGoal || 'N5',
      createdAt: account.createdAt || Date.now(),
      lastLoginAt: account.lastLoginAt || Date.now(),
      syncToken: account.syncToken || ''
    };
  }

  /**
   * Phát sự kiện thông báo thay đổi phiên đăng nhập
   */
  function _notifyAuthChange(user) {
    const userCopy = user ? Object.assign({}, user) : null;
    for (const listener of _authChangeListeners) {
      try {
        listener(userCopy);
      } catch (e) {
        console.warn('[AuthEngine] Ngoại lệ trong listener onAuthChange:', e);
      }
    }
  }

  const AuthEngine = {
    AVATAR_PRESETS: AVATAR_PRESETS,
    STORAGE_KEYS: STORAGE_KEYS,

    // =========================================================================
    // 1. KHỞI TẠO & QUẢN LÝ PHIÊN (SESSION LIFECYCLE)
    // =========================================================================

    /**
     * Khởi tạo AuthEngine, khôi phục phiên từ LocalStorage
     * @returns {Object|null} Thông tin người dùng đang đăng nhập hoặc null
     */
    init() {
      // Phase 1: Guard Clauses
      const se = _getStorageEngine();
      if (!se) return null;

      // Phase 2: Data Normalization
      const session = _loadActiveSession();
      if (!session || !session.uid) {
        _currentUser = null;
        se.setActiveUserNamespace('');
        return null;
      }

      // Phase 3: Pure Logic
      const accounts = _loadAccounts();
      const matched = accounts.find(a => a.uid === session.uid);

      // Phase 4: Side Effects
      if (matched) {
        _currentUser = _sanitizeUserPublic(matched);
        se.setActiveUserNamespace(matched.uid);
      } else {
        _currentUser = null;
        _saveActiveSession(null);
        se.setActiveUserNamespace('');
      }

      if (root.KaiwaEngine && typeof root.KaiwaEngine.reloadUserProgress === 'function') {
        try {
          root.KaiwaEngine.reloadUserProgress();
        } catch (e) {}
      }

      return _currentUser ? Object.assign({}, _currentUser) : null;
    },

    /**
     * Lấy thông tin tài khoản đang đăng nhập hiện tại
     * @returns {Object|null}
     */
    getCurrentUser() {
      return _currentUser ? Object.assign({}, _currentUser) : null;
    },

    /**
     * Đăng ký callback khi đổi tài khoản
     * @param {Function} listener
     * @returns {Function} Hàm hủy đăng ký (unsubscribe)
     */
    onAuthChange(listener) {
      if (typeof listener !== 'function') return () => {};
      _authChangeListeners.add(listener);
      return () => _authChangeListeners.delete(listener);
    },

    // =========================================================================
    // 2. TÍNH TOÁN THÀNH TÍCH & BẢNG XẾP HẠNG (STATS & LEADERBOARD)
    // =========================================================================

    /**
     * Tính toán toàn diện thành tích học tập của người dùng
     * @param {string} uid ID tài khoản hoặc 'guest' / ''
     * @returns {Object} Thống kê chi tiết & danh hiệu
     */
    calculateUserStats(uid) {
      // Phase 1: Guard Clauses & Fail-Fast
      const se = _getStorageEngine();
      const cleanUid = (!uid || uid === 'guest') ? 'guest' : String(uid).trim().replace(/[^a-zA-Z0-9_-]/g, '');
      const getPhysicalKey = (k) => (cleanUid === 'guest' ? k : ('u_' + cleanUid + '_' + k));

      if (!se || typeof se.secureGetJsonRaw !== 'function') {
        return {
          uid: cleanUid,
          completedModulesCount: 0,
          learnedKanjiCount: 0,
          learnedRadicalsCount: 0,
          quizCompletedCount: 0,
          quizAvgScore: 0,
          dokkaiCompletedCount: 0,
          kaiwaPracticedCount: 0,
          kaiwaStars: 0,
          examsTakenCount: 0,
          bestExamScore: 0,
          totalXp: 0,
          rankTitle: 'Tân Binh Nhập Môn',
          rankBadge: '🌱'
        };
      }

      // Phase 2: Data Normalization
      const completedModules = se.secureGetJsonRaw(getPhysicalKey('minna_completed_modules'), []) || [];
      const radicals = se.secureGetJsonRaw(getPhysicalKey('minna_rfc_learned_ids'), []) || [];
      const practice = se.secureGetJsonRaw(getPhysicalKey('minna_practice_answers'), {}) || {};
      const dokkai1 = se.secureGetJsonRaw(getPhysicalKey('minna_dokkai_answers_v1'), {}) || {};
      const dokkai2 = se.secureGetJsonRaw(getPhysicalKey('minna_dokkai_answers'), {}) || {};
      const kaiwa = se.secureGetJsonRaw(getPhysicalKey('minna_kaiwa_progress_v1'), { scores: {}, evalData: {} }) || {};
      const examHistory = se.secureGetJsonRaw(getPhysicalKey('jlpt_exam_history'), []) || [];
      const examBests = se.secureGetJsonRaw(getPhysicalKey('jlpt_exam_bests'), {}) || {};

      // Phase 3: Pure Logic
      const completedModulesCount = Array.isArray(completedModules) ? completedModules.length : 0;
      const learnedRadicalsCount = Array.isArray(radicals) ? radicals.length : 0;

      let learnedKanjiCount = 0;
      for (let i = 1; i <= 50; i++) {
        const kfc = se.secureGetJsonRaw(getPhysicalKey('minna_kfc_learned_l' + i), []);
        if (Array.isArray(kfc)) {
          learnedKanjiCount += kfc.length;
        }
      }

      let quizCompletedCount = 0;
      let quizTotalScore = 0;
      for (const qk of Object.keys(practice)) {
        const item = practice[qk];
        if (item && (item.submitted || typeof item.score === 'number')) {
          quizCompletedCount++;
          quizTotalScore += Number(item.score || 0);
        }
      }
      const quizAvgScore = quizCompletedCount > 0 ? Math.round(quizTotalScore / quizCompletedCount) : 0;

      const dokkaiSet = new Set([...Object.keys(dokkai1), ...Object.keys(dokkai2)]);
      let dokkaiCompletedCount = 0;
      for (const dk of dokkaiSet) {
        const dItem = dokkai1[dk] || dokkai2[dk];
        if (dItem && (dItem.submitted || typeof dItem.score === 'number')) {
          dokkaiCompletedCount++;
        }
      }

      const kaiwaScores = (kaiwa && kaiwa.scores) ? kaiwa.scores : {};
      const kaiwaPracticedCount = Object.keys(kaiwaScores).length;
      let kaiwaStars = 0;
      for (const kKey of Object.keys(kaiwaScores)) {
        const sc = Number(kaiwaScores[kKey] || 0);
        if (sc >= 85) kaiwaStars += 3;
        else if (sc >= 60) kaiwaStars += 2;
        else if (sc > 0) kaiwaStars += 1;
      }

      const examsTakenCount = Array.isArray(examHistory) ? examHistory.length : 0;
      let bestExamScore = 0;
      for (const bk of Object.keys(examBests)) {
        const val = examBests[bk];
        const sc = Number((val && typeof val === 'object') ? (val.score || val.scorePercent || 0) : (val || 0));
        if (sc > bestExamScore) bestExamScore = sc;
      }
      if (Array.isArray(examHistory)) {
        for (const h of examHistory) {
          const sc = Number(h && h.score ? h.score : 0);
          if (sc > bestExamScore) bestExamScore = sc;
        }
      }

      // Công thức tính XP chuẩn hóa
      const totalXp = (
        completedModulesCount * 50 +
        learnedKanjiCount * 10 +
        learnedRadicalsCount * 15 +
        quizCompletedCount * 40 +
        dokkaiCompletedCount * 45 +
        kaiwaPracticedCount * 20 +
        examsTakenCount * 100
      );

      // Danh hiệu học viên theo mức XP
      let rankTitle = 'Tân Binh Nhập Môn';
      let rankBadge = '🌱';
      if (totalXp >= 10000) {
        rankTitle = 'Đại Sư Tiếng Nhật';
        rankBadge = '👑';
      } else if (totalXp >= 5000) {
        rankTitle = 'Cao Thủ N4';
        rankBadge = '🏯';
      } else if (totalXp >= 2000) {
        rankTitle = 'Kiếm Khách N5';
        rankBadge = '⚔️';
      } else if (totalXp >= 500) {
        rankTitle = 'Học Giả Chăm Chỉ';
        rankBadge = '📖';
      }

      // Phase 4: Output
      return {
        uid: cleanUid,
        completedModulesCount,
        learnedKanjiCount,
        learnedRadicalsCount,
        quizCompletedCount,
        quizAvgScore,
        dokkaiCompletedCount,
        kaiwaPracticedCount,
        kaiwaStars,
        examsTakenCount,
        bestExamScore,
        totalXp,
        rankTitle,
        rankBadge
      };
    },

    /**
     * Danh sách tất cả tài khoản trên máy kèm thống kê thành tích
     * @returns {Array<Object>}
     */
    listAccounts() {
      const accounts = _loadAccounts();
      return accounts.map(acc => {
        const safeUser = _sanitizeUserPublic(acc);
        const stats = AuthEngine.calculateUserStats(acc.uid);
        return Object.assign({}, safeUser, { stats });
      });
    },

    /**
     * Lấy Bảng Xếp Hạng Đa Người Dùng sắp xếp giảm dần theo tổng XP
     * @returns {Array<Object>}
     */
    getMultiUserLeaderboard() {
      const accounts = AuthEngine.listAccounts();
      const list = accounts.map(a => ({
        uid: a.uid,
        username: a.username,
        displayName: a.displayName,
        avatar: a.avatar,
        levelGoal: a.levelGoal,
        isGuest: false,
        stats: a.stats
      }));

      // Bổ sung tài khoản Khách nếu đã có điểm học tập
      const guestStats = AuthEngine.calculateUserStats('guest');
      if (guestStats && guestStats.totalXp > 0) {
        list.push({
          uid: 'guest',
          username: 'guest',
          displayName: 'Học viên Khách',
          avatar: 'tanuki',
          levelGoal: 'N5',
          isGuest: true,
          stats: guestStats
        });
      }

      list.sort((a, b) => (b.stats.totalXp || 0) - (a.stats.totalXp || 0));
      return list;
    },

    // =========================================================================
    // 3. ĐĂNG KÝ, ĐĂNG NHẬP & CHUYỂN TÀI KHOẢN (ACCOUNT ACTIONS)
    // =========================================================================

    /**
     * Đăng ký tài khoản mới trên thiết bị
     * @param {Object} params { username, displayName, secretPin, avatar, levelGoal, migrateGuestData }
     * @returns {Object} { success, user, error }
     */
    registerAccount({ username, displayName, secretPin, avatar, levelGoal, migrateGuestData } = {}) {
      // Phase 1: Guard Clauses
      if (!username || typeof username !== 'string') {
        return { success: false, error: 'Tên đăng nhập không được để trống.' };
      }
      const cleanUsername = username.trim();
      if (!/^[a-zA-Z0-9_.-]{3,24}$/.test(cleanUsername)) {
        return { success: false, error: 'Tên đăng nhập từ 3-24 ký tự chữ, số hoặc dấu . _ -' };
      }
      if (!secretPin || typeof secretPin !== 'string' || secretPin.length < 4) {
        return { success: false, error: 'Mã PIN bảo mật tối thiểu phải từ 4 ký tự.' };
      }

      const accounts = _loadAccounts();
      const isDuplicate = accounts.some(a => a.username.toLowerCase() === cleanUsername.toLowerCase());
      if (isDuplicate) {
        return { success: false, error: 'Tên người dùng này đã tồn tại trên thiết bị.' };
      }

      // Phase 2: Data Normalization
      const cleanDisplayName = _escapeText((displayName && typeof displayName === 'string' ? displayName.trim() : cleanUsername).slice(0, 40));
      const cleanAvatar = AVATAR_PRESETS.some(p => p.id === avatar) ? avatar : 'daruma';
      const cleanLevelGoal = (levelGoal === 'N4' || levelGoal === 'n4') ? 'N4' : 'N5';
      const uid = 'usr_' + Date.now().toString(36) + '_' + _generateRandomHex(6);
      const credentialSalt = _generateRandomHex(8);
      const pinHash = _hashSecretPin(secretPin, credentialSalt);

      const newAccount = {
        uid,
        username: cleanUsername,
        displayName: cleanDisplayName,
        avatar: cleanAvatar,
        levelGoal: cleanLevelGoal,
        pinHash,
        credentialSalt,
        createdAt: Date.now(),
        lastLoginAt: Date.now(),
        syncToken: _generateRandomHex(16)
      };

      // Phase 3: Pure Logic / Migration
      const se = _getStorageEngine();
      if (migrateGuestData === true && se) {
        const guestSnapshot = se.exportUserProgressSnapshot('guest');
        se.importUserProgressSnapshot(uid, guestSnapshot, false);
      }

      // Phase 4: Side Effects
      accounts.push(newAccount);
      _saveAccounts(accounts);

      if (se) se.setActiveUserNamespace(uid);
      _currentUser = _sanitizeUserPublic(newAccount);
      _saveActiveSession(_currentUser);

      if (root.KaiwaEngine && typeof root.KaiwaEngine.reloadUserProgress === 'function') {
        try {
          root.KaiwaEngine.reloadUserProgress();
        } catch (e) {}
      }

      _notifyAuthChange(_currentUser);
      return { success: true, user: _currentUser };
    },

    /**
     * Đăng nhập vào tài khoản
     * @param {string} username
     * @param {string} secretPin
     * @returns {Object} { success, user, error }
     */
    loginAccount(username, secretPin) {
      // Phase 1: Guard Clauses
      if (!username || typeof username !== 'string' || !secretPin || typeof secretPin !== 'string') {
        return { success: false, error: 'Vui lòng cung cấp đầy đủ tên đăng nhập và mã PIN.' };
      }

      // Phase 2: Data Normalization
      const cleanUsername = username.trim();
      const accounts = _loadAccounts();
      const acc = accounts.find(a => a.username.toLowerCase() === cleanUsername.toLowerCase());
      if (!acc) {
        return { success: false, error: 'Tên đăng nhập hoặc mã PIN không chính xác.' };
      }

      // Phase 3: Pure Logic (Verify PIN)
      const isValid = _verifySecretPin(secretPin, acc.credentialSalt, acc.pinHash);
      if (!isValid) {
        return { success: false, error: 'Tên đăng nhập hoặc mã PIN không chính xác.' };
      }

      // Phase 4: Side Effects
      acc.lastLoginAt = Date.now();
      _saveAccounts(accounts);

      const se = _getStorageEngine();
      if (se) se.setActiveUserNamespace(acc.uid);

      _currentUser = _sanitizeUserPublic(acc);
      _saveActiveSession(_currentUser);

      if (root.KaiwaEngine && typeof root.KaiwaEngine.reloadUserProgress === 'function') {
        try {
          root.KaiwaEngine.reloadUserProgress();
        } catch (e) {}
      }

      _notifyAuthChange(_currentUser);
      return { success: true, user: _currentUser };
    },

    /**
     * Chuyển đổi nhanh tài khoản
     * @param {string} uid ID tài khoản hoặc 'guest' / ''
     * @param {string|null} secretPin Mã PIN (nếu tài khoản yêu cầu xác minh lại)
     * @returns {Object} { success, user, error }
     */
    switchAccount(uid, secretPin = null) {
      // Phase 1: Guard Clauses
      if (!uid || uid === 'guest') {
        return AuthEngine.logoutToGuest();
      }

      const accounts = _loadAccounts();
      const acc = accounts.find(a => a.uid === uid);
      if (!acc) {
        return { success: false, error: 'Không tìm thấy tài khoản cần chuyển đổi.' };
      }

      // Phase 2: Pure Logic
      if (secretPin !== null && secretPin !== undefined && secretPin !== '') {
        const isValid = _verifySecretPin(secretPin, acc.credentialSalt, acc.pinHash);
        if (!isValid) {
          return { success: false, error: 'Mã PIN bảo mật không chính xác.' };
        }
      }

      // Phase 3 & 4: Side Effects
      acc.lastLoginAt = Date.now();
      _saveAccounts(accounts);

      const se = _getStorageEngine();
      if (se) se.setActiveUserNamespace(acc.uid);

      _currentUser = _sanitizeUserPublic(acc);
      _saveActiveSession(_currentUser);

      if (root.KaiwaEngine && typeof root.KaiwaEngine.reloadUserProgress === 'function') {
        try {
          root.KaiwaEngine.reloadUserProgress();
        } catch (e) {}
      }

      _notifyAuthChange(_currentUser);
      return { success: true, user: _currentUser };
    },

    /**
     * Đăng xuất trở về chế độ Khách (Guest)
     */
    logoutToGuest() {
      _saveActiveSession(null);
      const se = _getStorageEngine();
      if (se) se.setActiveUserNamespace('');
      _currentUser = null;

      if (root.KaiwaEngine && typeof root.KaiwaEngine.reloadUserProgress === 'function') {
        try {
          root.KaiwaEngine.reloadUserProgress();
        } catch (e) {}
      }

      _notifyAuthChange(null);
      return { success: true };
    },

    /**
     * Cập nhật thông tin hồ sơ tài khoản
     * @param {string} uid
     * @param {Object} updates { displayName, avatar, levelGoal }
     */
    updateProfile(uid, { displayName, avatar, levelGoal } = {}) {
      if (!uid) return { success: false, error: 'Thiếu mã định danh người dùng.' };

      const accounts = _loadAccounts();
      const acc = accounts.find(a => a.uid === uid);
      if (!acc) return { success: false, error: 'Không tìm thấy tài khoản.' };

      if (displayName && typeof displayName === 'string') {
        acc.displayName = _escapeText(displayName.trim().slice(0, 40));
      }
      if (avatar && AVATAR_PRESETS.some(p => p.id === avatar)) {
        acc.avatar = avatar;
      }
      if (levelGoal) {
        acc.levelGoal = (levelGoal === 'N4' || levelGoal === 'n4') ? 'N4' : 'N5';
      }

      _saveAccounts(accounts);

      if (_currentUser && _currentUser.uid === uid) {
        _currentUser = _sanitizeUserPublic(acc);
        _saveActiveSession(_currentUser);
        _notifyAuthChange(_currentUser);
      }

      return { success: true, user: _sanitizeUserPublic(acc) };
    },

    /**
     * Xóa tài khoản và giải phóng toàn bộ dữ liệu tiến độ
     * @param {string} uid
     * @param {string} secretPin
     */
    deleteAccount(uid, secretPin) {
      if (!uid) return { success: false, error: 'Thiếu mã định danh tài khoản.' };

      const accounts = _loadAccounts();
      const idx = accounts.findIndex(a => a.uid === uid);
      if (idx === -1) return { success: false, error: 'Không tìm thấy tài khoản cần xóa.' };

      const acc = accounts[idx];
      if (!_verifySecretPin(secretPin, acc.credentialSalt, acc.pinHash)) {
        return { success: false, error: 'Mã PIN bảo mật không chính xác. Không thể xóa tài khoản.' };
      }

      // Xóa khỏi danh sách tài khoản
      accounts.splice(idx, 1);
      _saveAccounts(accounts);

      // Xóa sạch các khóa tiến độ u_<uid>_*
      const se = _getStorageEngine();
      if (se && Array.isArray(se.PROGRESS_KEY_PATTERNS)) {
        for (const k of se.PROGRESS_KEY_PATTERNS) {
          se.safeRemoveRaw('u_' + uid + '_' + k);
        }
      }

      if (_currentUser && _currentUser.uid === uid) {
        AuthEngine.logoutToGuest();
      }

      return { success: true };
    },

    // =========================================================================
    // 4. MÃ ĐỒNG BỘ DI ĐỘNG & ĐỒNG BỘ MÁY CHỦ (SYNC ENGINE)
    // =========================================================================

    /**
     * Xuất mã đồng bộ di động Base64URL để sao chép sang thiết bị khác
     * @param {string} uid ID tài khoản hoặc 'guest'
     * @returns {string} Chuỗi mã MINNA_SYNC_V1:...
     */
    exportSyncCode(uid) {
      const targetUid = (!uid || uid === 'guest') ? 'guest' : String(uid).trim();
      let userProfile = {
        uid: 'guest',
        username: 'guest',
        displayName: 'Học viên Khách',
        avatar: 'tanuki',
        levelGoal: 'N5'
      };

      if (targetUid !== 'guest') {
        const accounts = _loadAccounts();
        const acc = accounts.find(a => a.uid === targetUid);
        if (acc) userProfile = _sanitizeUserPublic(acc);
      }

      const se = _getStorageEngine();
      const snapshot = se ? se.exportUserProgressSnapshot(targetUid) : { data: {} };

      const payload = {
        version: 1,
        user: userProfile,
        snapshot: snapshot,
        exportedAt: Date.now()
      };

      const jsonStr = JSON.stringify(payload);
      const signature = se ? se.hash(jsonStr + SYNC_CODE_SALT) : '0';
      const container = { sig: signature, body: jsonStr };
      const rawContainer = JSON.stringify(container);

      let base64Code = '';
      if (typeof Buffer !== 'undefined') {
        base64Code = Buffer.from(rawContainer, 'utf8').toString('base64');
      } else if (typeof btoa !== 'undefined') {
        base64Code = btoa(unescape(encodeURIComponent(rawContainer)));
      }

      return 'MINNA_SYNC_V1:' + base64Code;
    },

    /**
     * Nhập mã đồng bộ di động từ chuỗi MINNA_SYNC_V1:...
     * @param {string} syncCodeString
     * @param {boolean} mergeMode Gộp thông minh hay ghi đè
     */
    importSyncCode(syncCodeString, mergeMode = true) {
      // Phase 1: Guard Clauses & Decode
      if (!syncCodeString || typeof syncCodeString !== 'string') {
        return { success: false, error: 'Mã đồng bộ không được để trống.' };
      }
      const prefix = 'MINNA_SYNC_V1:';
      if (!syncCodeString.startsWith(prefix)) {
        return { success: false, error: 'Định dạng mã không hợp lệ (Phải bắt đầu bằng MINNA_SYNC_V1:).' };
      }
      const encoded = syncCodeString.slice(prefix.length).trim();

      let jsonRaw = '';
      try {
        if (typeof Buffer !== 'undefined') {
          jsonRaw = Buffer.from(encoded, 'base64').toString('utf8');
        } else if (typeof atob !== 'undefined') {
          jsonRaw = decodeURIComponent(escape(atob(encoded)));
        }
      } catch (e) {
        return { success: false, error: 'Giải mã Base64 thất bại.' };
      }

      // Phase 2: Checksum & Signature Validation
      let container = null;
      try {
        container = JSON.parse(jsonRaw);
      } catch (e) {
        return { success: false, error: 'Định dạng dữ liệu JSON bị hỏng.' };
      }

      if (!container || !container.sig || !container.body) {
        return { success: false, error: 'Gói đồng bộ thiếu chữ ký xác thực toàn vẹn.' };
      }

      const se = _getStorageEngine();
      const expectedSig = se ? se.hash(container.body + SYNC_CODE_SALT) : '';
      if (container.sig !== expectedSig) {
        return { success: false, error: 'Chữ ký toàn vẹn không hợp lệ (Dữ liệu có dấu hiệu bị can thiệp).' };
      }

      // Phase 3: Pure Logic
      let payload = null;
      try {
        payload = JSON.parse(container.body);
      } catch (e) {
        return { success: false, error: 'Nội dung tiến độ không hợp lệ.' };
      }

      if (!payload || !payload.snapshot) {
        return { success: false, error: 'Thiếu snapshot tiến độ trong gói đồng bộ.' };
      }

      const incomingUser = payload.user || {};
      const targetUid = (incomingUser.uid && incomingUser.uid !== 'guest')
        ? incomingUser.uid
        : (_currentUser ? _currentUser.uid : 'guest');

      // Nếu là tài khoản chưa có trên máy, tự động tạo hồ sơ tài khoản
      if (incomingUser.uid && incomingUser.uid !== 'guest') {
        const accounts = _loadAccounts();
        const existing = accounts.find(a => a.uid === incomingUser.uid);
        if (!existing) {
          const credentialSalt = _generateRandomHex(8);
          const pinHash = _hashSecretPin('0000', credentialSalt); // PIN mặc định 0000 cho tài khoản nhập
          accounts.push({
            uid: incomingUser.uid,
            username: incomingUser.username || ('user_' + incomingUser.uid.slice(-4)),
            displayName: _escapeText(incomingUser.displayName || incomingUser.username || 'Học viên Mới'),
            avatar: incomingUser.avatar || 'daruma',
            levelGoal: incomingUser.levelGoal || 'N5',
            pinHash,
            credentialSalt,
            createdAt: incomingUser.createdAt || Date.now(),
            lastLoginAt: Date.now(),
            syncToken: _generateRandomHex(16)
          });
          _saveAccounts(accounts);
        }
      }

      // Phase 4: Side Effects
      const importRes = se ? se.importUserProgressSnapshot(targetUid, payload.snapshot, mergeMode) : { count: 0 };

      if (root.KaiwaEngine && typeof root.KaiwaEngine.reloadUserProgress === 'function') {
        try {
          root.KaiwaEngine.reloadUserProgress();
        } catch (e) {}
      }

      return {
        success: true,
        targetUid,
        user: incomingUser,
        importedKeys: importRes.count || 0
      };
    },

    /**
     * Đồng bộ hai chiều với máy chủ /api/auth/sync
     * @param {string} apiBaseUrl Đường dẫn gốc API máy chủ
     * @returns {Promise<Object>}
     */
    async syncWithServer(apiBaseUrl = '') {
      // Phase 1: Guard Clauses & Fail-Fast
      if (typeof fetch === 'undefined') {
        return { success: false, error: 'Môi trường hiện tại không hỗ trợ fetch API.' };
      }

      const se = _getStorageEngine();
      if (!se) {
        return { success: false, error: 'StorageEngine chưa sẵn sàng.' };
      }

      // Phase 2: Data Normalization
      const accounts = _loadAccounts();
      const currentUid = _currentUser ? _currentUser.uid : null;
      let account = accounts.find(a => a.uid === currentUid) || null;

      if (!account) {
        return { success: false, error: 'Cần đăng nhập tài khoản trước khi đồng bộ lên máy chủ.' };
      }

      const targetUid = account.uid;
      const snapshot = se.exportUserProgressSnapshot(targetUid);
      const serverCredHash = _normalizeServerCredHash(account.pinHash, account.credentialSalt);
      const baseUrl = apiBaseUrl ? apiBaseUrl.replace(/\/$/, '') : '';

      // Phase 3: Ensure syncToken from Server (Đăng ký/lấy token lần đầu nếu chưa có)
      if (!account.syncToken || account.syncToken.length < 32 || !account.syncToken.includes('.')) {
        try {
          const regResp = await fetch(baseUrl + '/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: account.username,
              displayName: account.displayName,
              avatar: account.avatar,
              levelGoal: account.levelGoal,
              credentialHash: serverCredHash,
              action: 'register'
            })
          });

          if (regResp.ok) {
            const regData = await regResp.json();
            if (regData && regData.syncToken) {
              account.syncToken = regData.syncToken;
              _saveAccounts(accounts);
              if (_currentUser && _currentUser.uid === targetUid) {
                _currentUser.syncToken = regData.syncToken;
                _saveActiveSession(_currentUser);
              }
            }
          }
        } catch (e) {
          // Bỏ qua ngoại lệ register, tiếp tục gọi sync
        }
      }

      // Phase 4: Sync Progress via POST /api/auth/sync
      const syncPayload = {
        uid: account.uid,
        username: account.username,
        displayName: account.displayName,
        avatar: account.avatar,
        levelGoal: account.levelGoal,
        credentialHash: serverCredHash,
        syncToken: account.syncToken || '',
        progress: (snapshot && snapshot.data) ? snapshot.data : {},
        stats: AuthEngine.calculateUserStats(account.uid)
      };

      const syncHeaders = { 'Content-Type': 'application/json' };
      if (account.syncToken) {
        syncHeaders['Authorization'] = 'Bearer ' + account.syncToken;
      }

      try {
        const response = await fetch(baseUrl + '/api/auth/sync', {
          method: 'POST',
          headers: syncHeaders,
          body: JSON.stringify(syncPayload)
        });

        if (!response.ok) {
          return { success: false, status: response.status, error: `Máy chủ phản hồi mã lỗi ${response.status}` };
        }

        const data = await response.json();

        // Kiểm tra cả data.progress lẫn data.mergedSnapshot
        if (data) {
          if (data.progress) {
            se.importUserProgressSnapshot(targetUid, { version: 1, uid: targetUid, data: data.progress }, true);
          } else if (data.mergedSnapshot) {
            se.importUserProgressSnapshot(targetUid, data.mergedSnapshot, true);
          }

          if (data.syncToken && data.syncToken !== account.syncToken) {
            account.syncToken = data.syncToken;
            _saveAccounts(accounts);
            if (_currentUser && _currentUser.uid === targetUid) {
              _currentUser.syncToken = data.syncToken;
              _saveActiveSession(_currentUser);
            }
          }

          if (root.KaiwaEngine && typeof root.KaiwaEngine.reloadUserProgress === 'function') {
            try {
              root.KaiwaEngine.reloadUserProgress();
            } catch (e) {}
          }
        }

        return { success: true, data };
      } catch (err) {
        return { success: false, error: err && err.message ? err.message : 'Lỗi kết nối máy chủ' };
      }
    },

    /**
     * Tải Bảng Xếp Hạng từ máy chủ và hợp nhất với danh sách trên máy cục bộ
     * @param {string} apiBaseUrl Đường dẫn gốc API máy chủ
     * @returns {Promise<Array<Object>>} Danh sách bảng xếp hạng hợp nhất
     */
    async fetchServerLeaderboard(apiBaseUrl = '') {
      const localLeaderboard = AuthEngine.getMultiUserLeaderboard();
      if (typeof fetch === 'undefined') {
        return localLeaderboard;
      }

      const baseUrl = apiBaseUrl ? apiBaseUrl.replace(/\/$/, '') : '';
      const endpoint = baseUrl + '/api/auth/leaderboard';

      try {
        const resp = await fetch(endpoint, {
          method: 'GET',
          headers: { 'Accept': 'application/json' }
        });

        if (!resp.ok) return localLeaderboard;

        const resData = await resp.json();
        const serverItems = (resData && Array.isArray(resData.leaderboard)) ? resData.leaderboard : [];

        // Hợp nhất serverItems với localLeaderboard (deduplicate theo username/uid)
        const map = new Map();

        // 1. Nạp các tài khoản local
        for (const loc of localLeaderboard) {
          const key = String(loc.username || loc.uid || '').toLowerCase();
          if (key) map.set(key, loc);
        }

        // 2. Nạp hoặc cập nhật từ serverItems
        for (const srv of serverItems) {
          const key = String(srv.username || srv.uid || '').toLowerCase();
          if (!key) continue;

          const existing = map.get(key);
          if (!existing) {
            map.set(key, {
              uid: srv.uid || key,
              username: srv.username,
              displayName: srv.displayName || srv.username,
              avatar: srv.avatar || 'daruma',
              levelGoal: srv.levelGoal || 'N5',
              isGuest: false,
              isServer: true,
              stats: {
                totalXp: Number(srv.totalXp || 0),
                completedModulesCount: Number(srv.completedModulesCount || 0),
                learnedKanjiCount: Number(srv.learnedKanjiCount || 0),
                bestExamScore: Number(srv.bestExamScore || 0),
                rankTitle: srv.rankTitle || 'Tân Binh Nhập Môn'
              }
            });
          } else {
            // Giữ điểm XP cao nhất giữa local và server
            const existingXp = (existing.stats && existing.stats.totalXp) || 0;
            const srvXp = Number(srv.totalXp || (srv.stats && srv.stats.totalXp) || 0);
            if (srvXp > existingXp) {
              if (!existing.stats) existing.stats = {};
              existing.stats.totalXp = srvXp;
              if (srv.rankTitle) existing.stats.rankTitle = srv.rankTitle;
              if (srv.bestExamScore) existing.stats.bestExamScore = Math.max(existing.stats.bestExamScore || 0, srv.bestExamScore);
            }
          }
        }

        const merged = Array.from(map.values());
        merged.sort((a, b) => {
          const xpA = (a.stats && a.stats.totalXp) || 0;
          const xpB = (b.stats && b.stats.totalXp) || 0;
          return xpB - xpA;
        });

        return merged;
      } catch (err) {
        return localLeaderboard;
      }
    }
  };

  return AuthEngine;
});
