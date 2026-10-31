/**
 * STORAGE SECURITY & INTEGRITY ENGINE
 * src/storage_engine.js
 * --------------------------------------------------------------------------
 * Động cơ quản lý lưu trữ cục bộ (LocalStorage) với 4 tầng bảo vệ:
 * 1. Chống XSS (escapeHtml sanitization)
 * 2. Chống ô nhiễm nguyên mẫu (Prototype Pollution Guard)
 * 3. Chống gian lận điểm số & tiến độ bằng mã xác thực (Tamper-proof Checksum FNV-1a)
 * 4. Bắt lỗi tràn dung lượng Storage Quota & Tự động thích ứng chế độ ẩn danh (Private Mode)
 */
(function(root) {
  'use strict';

  // Hằng số định danh lưu trữ
  const STORAGE_KEYS = {
    COMPLETED: 'minna_completed_modules',
    PRACTICE: 'minna_practice_answers',
    DOKKAI: 'minna_dokkai_answers',
    LAST_ACTIVE: 'minna_last_active'
  };

  /**
   * Tạo checksum đơn giản từ chuỗi dữ liệu (FNV-1a hash 32-bit)
   */
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
    hash: _fnv1aHash,

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

    /**
     * Ghi dữ liệu vào localStorage kèm Checksum xác thực chống sửa điểm
     */
    secureSet(key, value) {
      try {
        const strVal = String(value);
        const cs = _fnv1aHash(strVal + key);
        if (isLocalStorageAvailable()) {
          localStorage.setItem(key, strVal);
          localStorage.setItem(_csKey(key), cs);
        } else {
          _inMemoryFallbackStore.set(key, strVal);
          _inMemoryFallbackStore.set(_csKey(key), cs);
        }
      } catch (e) {
        console.warn('[StorageEngine] Ghi dữ liệu thất bại (vượt quota hoặc bị chặn):', key, e && e.name);
      }
    },

    /**
     * Đọc dữ liệu từ localStorage và xác minh Checksum toàn vẹn
     */
    secureGet(key, fallback = null) {
      try {
        let value = null;
        let storedCs = null;

        if (isLocalStorageAvailable()) {
          value = localStorage.getItem(key);
          storedCs = localStorage.getItem(_csKey(key));
        } else {
          value = _inMemoryFallbackStore.get(key) || null;
          storedCs = _inMemoryFallbackStore.get(_csKey(key)) || null;
        }

        if (value === null) return fallback;

        if (storedCs !== null) {
          const expectedCs = _fnv1aHash(String(value) + key);
          if (storedCs !== expectedCs) {
            console.warn('[StorageEngine] ⚠️ Phát hiện dữ liệu bị can thiệp tại khóa:', key, '→ Đặt lại an toàn.');
            StorageEngine.safeRemove(key);
            StorageEngine.safeRemove(_csKey(key));
            return fallback;
          }
        }
        return value;
      } catch (e) {
        return fallback;
      }
    },

    /**
     * Đọc JSON an toàn có xác thực Checksum và Schema Validator
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
     * Ghi dữ liệu thông thường có bắt lỗi QuotaExceededError
     */
    safeSet(key, value) {
      StorageEngine.secureSet(key, value);
    },

    /**
     * Đọc dữ liệu thông thường
     */
    safeGet(key, fallback = null) {
      return StorageEngine.secureGet(key, fallback);
    },

    /**
     * Đọc JSON an toàn
     */
    safeGetJson(key, fallback = null, validator = null) {
      return StorageEngine.secureGetJson(key, fallback, validator);
    },

    /**
     * Xóa khóa dữ liệu an toàn
     */
    safeRemove(key) {
      try {
        if (isLocalStorageAvailable()) {
          localStorage.removeItem(key);
          localStorage.removeItem(_csKey(key));
        }
        _inMemoryFallbackStore.delete(key);
        _inMemoryFallbackStore.delete(_csKey(key));
      } catch (e) {}
    },

    // Các bí danh tương thích giao diện Storage tiêu chuẩn
    setItem(key, value) { return this.safeSet(key, value); },
    getItem(key, fallback = null) { return this.safeGet(key, fallback); },
    getJson(key, fallback = null, validator = null) { return this.safeGetJson(key, fallback, validator); },
    removeItem(key) { return this.safeRemove(key); },
    secureSetItem(key, value) { return this.secureSet(key, value); },
    secureGetItem(key, fallback = null) { return this.secureGet(key, fallback); },
    secureRemoveItem(key) { return this.safeRemove(key); }
  };

  // Bảo đảm tương thích toàn cầu
  if (typeof window !== 'undefined') window.StorageEngine = StorageEngine;
  if (typeof global !== 'undefined') global.StorageEngine = StorageEngine;
  if (typeof module !== 'undefined' && module.exports) module.exports = StorageEngine;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
