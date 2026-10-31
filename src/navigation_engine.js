/**
 * DYNAMIC NAVIGATION & ON-DEMAND LAZY-LOADING ENGINE
 * src/navigation_engine.js
 * --------------------------------------------------------------------------
 * Động cơ điều hướng và nạp module theo nhu cầu (On-demand Lazy Loading):
 * 1. Nạp tệp dữ liệu bất đồng bộ an toàn (loadScriptAsync)
 * 2. Xác thực trạng thái sẵn sàng của 217 module IDs (isModuleDataReady)
 * 3. Tự động liên kết URL gói dữ liệu và đồng bộ hóa (ensureModuleDataLoaded)
 * 4. Quản lý và bảo lưu vị trí cuộn trang (ScrollTracker)
 * 5. Bóc tách số bài học và phân loại module (extractLessonNumber, getModuleCategory)
 */
(function(root) {
  'use strict';

  const _loadedScriptUrls = new Set();
  const _loadingScriptPromises = new Map();
  const _moduleScrollPositions = new Map();
  let _scrollRestoreTimeouts = [];
  let _isRestoringScroll = false;

  const NavigationEngine = {
    /**
     * Nạp một file script bất đồng bộ (tránh trùng lặp, hỗ trợ Promise)
     */
    loadScriptAsync(src, onSync) {
      if (!src) return Promise.resolve();
      if (_loadedScriptUrls.has(src)) return Promise.resolve();
      if (_loadingScriptPromises.has(src)) return _loadingScriptPromises.get(src);

      const promise = new Promise((resolve) => {
        if (typeof document === 'undefined' || !document.createElement) {
          _loadedScriptUrls.add(src);
          if (typeof onSync === 'function') onSync();
          resolve();
          return;
        }

        const existing = document.querySelector(`script[src*="${src}"]`);
        if (existing) {
          _loadedScriptUrls.add(src);
          if (typeof onSync === 'function') onSync();
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
          _loadedScriptUrls.add(src);
          _loadingScriptPromises.delete(src);
          if (typeof onSync === 'function') onSync();
          resolve();
        };
        script.onerror = (err) => {
          _loadingScriptPromises.delete(src);
          console.warn(`[NavigationEngine] Không thể nạp script ${src}:`, err);
          resolve();
        };
        document.head.appendChild(script);
      });

      _loadingScriptPromises.set(src, promise);
      return promise;
    },

    /**
     * Bóc tách số thứ tự bài học từ chuỗi định danh (bai-1, quiz-25, dokkai-50, kanji-30)
     */
    extractLessonNumber(id) {
      if (!id || typeof id !== 'string') return 1;
      const m = id.match(/^(?:bai|lesson|quiz|dokkai|kanji|radicals)[^\d]*(\d+)/i);
      return m ? parseInt(m[1], 10) : 1;
    },

    /**
     * Phân loại danh mục module
     */
    getModuleCategory(id) {
      if (!id || typeof id !== 'string') return 'unknown';
      if (id.startsWith('bai-') || id.startsWith('lesson-')) return 'lesson';
      if (id.startsWith('quiz-')) return 'quiz';
      if (id.startsWith('dokkai-')) return 'dokkai';
      if (id.startsWith('kanji-')) return 'kanji';
      if (id.startsWith('radicals-')) return 'radicals';
      if (id === 'mazii-dict') return 'mazii';
      return 'other';
    },

    /**
     * Kiểm tra xem dữ liệu của module đã có sẵn trong bộ nhớ RAM hay chưa
     */
    isModuleDataReady(id, context) {
      if (!id || typeof id !== 'string') return true;
      const ctx = context || root;

      const lm = id.match(/^(?:bai|lesson)-(\d+)$/);
      if (lm) {
        const list = Array.isArray(ctx.lessonsData) ? ctx.lessonsData : [];
        return list.some(l => l && (l.id === `bai-${lm[1]}` || l.id === `lesson-${lm[1]}`));
      }

      const qm = id.match(/^quiz-(\d+)$/);
      if (qm) {
        const map = ctx.practiceQuizData || {};
        return Boolean(map[id] && Array.isArray(map[id]) && map[id].length > 0);
      }

      if (id.startsWith('dokkai')) {
        const dList = Array.isArray(ctx.dokkaiData) ? ctx.dokkaiData : [];
        return dList.length > 0;
      }

      if (id.startsWith('radicals')) {
        const rList = Array.isArray(ctx.radicalsData) ? ctx.radicalsData : [];
        return rList.length > 0;
      }

      if (id.startsWith('kanji')) {
        const kList = Array.isArray(ctx.kanjiLessonsData) ? ctx.kanjiLessonsData : [];
        const km = id.match(/^(?:kanji)[^\d]*(\d+)/i);
        if (km) {
          const num = parseInt(km[1], 10);
          return kList.some(k => k && (k.lesson === num || k.id === id || k.id === `kanji-${num}`));
        }
        return kList.length > 0;
      }

      return true;
    },

    /**
     * Đảm bảo gói dữ liệu của module đã được tải và sẵn sàng
     */
    ensureModuleDataLoaded(id, options = {}) {
      if (this.isModuleDataReady(id, options.context)) {
        return Promise.resolve();
      }

      let url = null;
      if (typeof options.getUrl === 'function') {
        url = options.getUrl(id);
      } else if (root.CURRICULUM_MANIFEST && typeof root.CURRICULUM_MANIFEST.resolveChunkUrl === 'function') {
        url = root.CURRICULUM_MANIFEST.resolveChunkUrl(id);
      }

      if (!url) {
        return Promise.resolve();
      }

      return this.loadScriptAsync(url, options.onSync);
    },

    /**
     * Lưu vị trí cuộn trang của module
     */
    saveModuleScroll(moduleId, scrollY) {
      if (!moduleId) return;
      _moduleScrollPositions.set(moduleId, Math.max(0, scrollY || 0));
    },

    /**
     * Lấy vị trí cuộn trang đã lưu của module
     */
    getModuleScroll(moduleId) {
      if (!moduleId) return 0;
      return _moduleScrollPositions.get(moduleId) || 0;
    },

    /**
     * Xóa toàn bộ lịch sử cuộn
     */
    clearScrollPositions() {
      _moduleScrollPositions.clear();
    },

    /**
     * Khôi phục vị trí cuộn mượt mà với cơ chế đa nhịp (multi-tick delay)
     */
    restoreScrollPosition(targetScroll, customElements = {}) {
      _scrollRestoreTimeouts.forEach(t => clearTimeout(t));
      _scrollRestoreTimeouts = [];

      const mainContent = customElements.mainContent || (typeof document !== 'undefined' ? document.getElementById('main-content') : null);
      const win = customElements.window || (typeof window !== 'undefined' ? window : null);
      const safeScroll = Math.max(0, targetScroll || 0);

      _isRestoringScroll = true;

      const applyPos = () => {
        if (mainContent) {
          mainContent.scrollTop = safeScroll;
        }
        if (win && typeof win.scrollTo === 'function') {
          win.scrollTo({ top: safeScroll, behavior: 'instant' });
        } else if (typeof document !== 'undefined' && document.documentElement) {
          document.documentElement.scrollTop = safeScroll;
        }
      };

      applyPos();
      const t1 = setTimeout(() => { applyPos(); }, 30);
      const t2 = setTimeout(() => { applyPos(); }, 120);
      const t3 = setTimeout(() => {
        applyPos();
        _isRestoringScroll = false;
      }, 260);

      _scrollRestoreTimeouts.push(t1, t2, t3);
    },

    /**
     * Kiểm tra xem hệ thống có đang trong tiến trình phục hồi vị trí cuộn hay không
     */
    isRestoringScroll() {
      return _isRestoringScroll;
    }
  };

  // Xuất bản đa môi trường UMD
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationEngine;
  }
  if (root) {
    root.NavigationEngine = NavigationEngine;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
