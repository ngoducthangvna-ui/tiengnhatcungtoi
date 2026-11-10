/**
 * KANJI MNEMONICS & STRUCTURE ENGINE
 * src/kanji_engine.js
 * --------------------------------------------------------------------------
 * Động cơ phân tích chiết tự và tạo thẻ ghi nhớ chữ Hán:
 * 1. Định dạng chiết tự bộ thủ & mẹo nhớ câu chuyện trực quan (formatMnemonic)
 * 2. Nhận diện & bóc tách ký tự chữ Hán CJK (hasKanji, extractKanjiCharacters)
 * 3. Quản lý trạng thái đã học / chưa học qua StorageEngine (loadLearnedSet, saveLearnedSet)
 * 4. Tra cứu chữ Hán tương đồng gây nhiễu (extractLookalikes)
 */
(function(root) {
  'use strict';

  const KANJI_REGEX = /[\u4e00-\u9faf]/;
  const KANJI_GLOBAL_REGEX = /[\u4e00-\u9faf]/g;
  const KANJI_BLOCK_REGEX = /([\u4e00-\u9faf々ヶ]+)/g;

  let _cachedDictRef = null;
  let _cachedDictKeyCount = 0;
  let _cachedDictRegex = null;

  /**
   * Lấy biểu thức chính quy Single-Pass đã biên dịch và lưu đệm từ EXAM_FURIGANA
   */
  function getCompiledFuriganaRegex(fmap) {
    if (!fmap || typeof fmap !== 'object') return null;
    const keys = Object.keys(fmap);
    if ( keys.length === 0 ) return null;
    if (_cachedDictRef === fmap && _cachedDictKeyCount === keys.length && _cachedDictRegex) {
      return _cachedDictRegex;
    }
    const sorted = keys.slice().sort((a, b) => b.length - a.length || a.localeCompare(b));
    const escaped = sorted.map(k => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    _cachedDictRegex = new RegExp(escaped.join('|'), 'g');
    _cachedDictRef = fmap;
    _cachedDictKeyCount = keys.length;
    return _cachedDictRegex;
  }

  /**
   * Làm sạch chuỗi cách đọc Hiragana để lấy âm đọc chính đầu tiên
   */
  function normalizePrimaryReading(rawReading) {
    if (!rawReading || typeof rawReading !== 'string') return '';
    let r = rawReading
      .replace(/（.*?）|\(.*?\)/g, '')
      .replace(/^[～~/]+|[～~/]+$/g, '')
      .trim();
    const parts = r.split(/[．.／/]/).map(s => s.trim()).filter(Boolean);
    return (parts[0] || '').replace(/[\s、,]+/g, '');
  }

  /**
   * Thuật toán Kana-Anchor Alignment:
   * Tách bề mặt từ vựng (surface) và âm đọc (reading) thành các khối Kanji và Okurigana chuẩn xác.
   * Ví dụ: ("考えて", "かんがえて") -> [{ text: "考", reading: "かんが", isKanji: true }, { text: "えて", reading: null, isKanji: false }]
   *        ("売り場", "うりば") -> [{ text: "売", reading: "う", isKanji: true }, { text: "り", reading: null, isKanji: false }, { text: "場", reading: "ば", isKanji: true }]
   */
  function splitKanjiOkurigana(surface, reading) {
    if (!surface || typeof surface !== 'string') return [];
    const cleanRead = normalizePrimaryReading(reading);
    if (!cleanRead || !KANJI_REGEX.test(surface)) {
      return [{ text: surface, reading: null, isKanji: false }];
    }

    // Trường hợp đặc biệt quán ngữ có kính ngữ ẩn
    if (surface.includes('よろしくお願いします') && cleanRead.includes('おねがいします')) {
      const parts = surface.split('願');
      return [
        { text: parts[0], reading: null, isKanji: false },
        { text: '願', reading: 'ねが', isKanji: true },
        { text: parts.slice(1).join('願'), reading: null, isKanji: false }
      ];
    }

    const rawTokens = surface.split(KANJI_BLOCK_REGEX).filter(Boolean);
    if (rawTokens.length === 1 && KANJI_REGEX.test(rawTokens[0])) {
      return [{ text: surface, reading: cleanRead, isKanji: true }];
    }

    const segments = [];
    let rPos = 0;

    for (let i = 0; i < rawTokens.length; i++) {
      const tok = rawTokens[i];
      const isK = KANJI_REGEX.test(tok);

      if (!isK) {
        const nkClean = tok.replace(/[\s、。！？～~・]/g, '');
        if (nkClean) {
          if (cleanRead.startsWith(nkClean, rPos)) {
            rPos += nkClean.length;
          } else {
            const foundIdx = cleanRead.indexOf(nkClean, rPos);
            if (foundIdx !== -1) {
              rPos = foundIdx + nkClean.length;
            } else {
              // Tiền tố là chữ số hoặc ký tự đặc biệt có phát âm nằm trong cleanRead (vd: "5匹" -> "ごひき")
              return [{ text: surface, reading: cleanRead, isKanji: true }];
            }
          }
        }
        segments.push({ text: tok, reading: null, isKanji: false });
      } else {
        const nextTok = i + 1 < rawTokens.length ? rawTokens[i + 1] : null;
        if (!nextTok) {
          const rem = cleanRead.slice(rPos);
          segments.push({ text: tok, reading: rem || cleanRead, isKanji: true });
          rPos = cleanRead.length;
        } else {
          const anchorClean = nextTok.replace(/[\s、。！？～~・]/g, '');
          const isLastAnchor = (i + 1 === rawTokens.length - 1);

          if (!anchorClean) {
            const rem = cleanRead.slice(rPos);
            segments.push({ text: tok, reading: rem || cleanRead, isKanji: true });
          } else if (isLastAnchor && cleanRead.slice(rPos).endsWith(anchorClean) && (cleanRead.length - anchorClean.length > rPos)) {
            const kRead = cleanRead.slice(rPos, cleanRead.length - anchorClean.length);
            segments.push({ text: tok, reading: kRead, isKanji: true });
            rPos = cleanRead.length - anchorClean.length;
          } else {
            const anchorIdx = cleanRead.indexOf(anchorClean, rPos + 1);
            if (anchorIdx !== -1) {
              const kRead = cleanRead.slice(rPos, anchorIdx);
              segments.push({ text: tok, reading: kRead, isKanji: true });
              rPos = anchorIdx;
            } else {
              const rem = cleanRead.slice(rPos);
              segments.push({ text: tok, reading: rem || cleanRead, isKanji: true });
              rPos = cleanRead.length;
            }
          }
        }
      }
    }

    return segments;
  }

  const KanjiEngine = {
    /**
     * Kiểm tra xem chuỗi có chứa ít nhất một chữ Hán CJK hay không
     */
    hasKanji(text) {
      if (!text || typeof text !== 'string') return false;
      return KANJI_REGEX.test(text);
    },

    /**
     * Bóc tách toàn bộ các chữ Hán riêng lẻ trong chuỗi văn bản
     */
    extractKanjiCharacters(text) {
      if (!text || typeof text !== 'string') return [];
      return Array.from(text).filter(ch => KANJI_REGEX.test(ch));
    },

    /**
     * Định dạng chuỗi mẹo nhớ thô thành HTML hiển thị cấu trúc đẹp mắt
     * Phân tách rõ ràng giữa 【Chiết tự】 và 【Mẹo nhớ】
     */
    formatMnemonic(raw) {
      if (!raw) {
        return '<div class="mnemonic-row"><span class="mnemonic-text">Đang cập nhật mẹo nhớ...</span></div>';
      }
      const lines = String(raw).split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length === 0) {
        return '<div class="mnemonic-row"><span class="mnemonic-text">Đang cập nhật mẹo nhớ...</span></div>';
      }

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
    },

    /**
     * Định dạng câu ví dụ tiếng Nhật kèm nghĩa tiếng Việt bên dưới mẹo nhớ chữ Hán.
     * Tự động gắn phiên âm Furigana (<ruby>...<rt>...</rt></ruby>) cho toàn bộ chữ Hán trong câu
     * và làm nổi bật (highlight) chính xác chữ Hán mục tiêu của thẻ kể cả khi chia thể.
     *
     * @param {string} rawExample Chuỗi câu ví dụ thô: "Tiếng Nhật (Nghĩa tiếng Việt)"
     * @param {string|object} wordOrItem Từ vựng mục tiêu (string) hoặc đối tượng item đầy đủ
     */
    formatExample(rawExample, wordOrItem) {
      if (!rawExample || typeof rawExample !== 'string') return '';
      const trimmed = rawExample.trim();
      if (!trimmed) return '';

      let jpPart = trimmed;
      let viPart = '';

      // Tách phần câu tiếng Nhật và phần dịch nghĩa tiếng Việt trong ngoặc cuối câu: "... (Nghĩa...)"
      const match = trimmed.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
      if (match) {
        jpPart = match[1].trim();
        viPart = match[2].trim();
      }

      const fmap = (typeof root !== 'undefined' && root.EXAM_FURIGANA)
        || (typeof window !== 'undefined' && window.EXAM_FURIGANA)
        || {};

      const isObj = wordOrItem && typeof wordOrItem === 'object';
      const rawWord = isObj
        ? String(wordOrItem.word || wordOrItem.kanji || '')
        : (typeof wordOrItem === 'string' ? wordOrItem : '');
      const cleanWord = rawWord
        .replace(/^[～~/]+|[～~/]+$/g, '')
        .replace(/（.*?）|\(.*?\)/g, '')
        .trim();

      let rawReading = isObj ? String(wordOrItem.reading || '') : '';
      if (!rawReading && cleanWord && fmap[cleanWord]) {
        rawReading = fmap[cleanWord];
      }
      const primaryReading = normalizePrimaryReading(rawReading);

      // Tập hợp các ký tự Hán tự mục tiêu của thẻ này
      const targetKanjiChars = new Set(this.extractKanjiCharacters(cleanWord));
      if (targetKanjiChars.size === 0 && isObj && Array.isArray(wordOrItem.kanjis)) {
        wordOrItem.kanjis.forEach(k => {
          if (k && KANJI_REGEX.test(k)) targetKanjiChars.add(k);
        });
      }

      // Xây dựng bản đồ ánh xạ ưu tiên cục bộ từ chính từ vựng của thẻ
      const localMap = {};
      const localMultiKeys = [];
      if (cleanWord && primaryReading && KANJI_REGEX.test(cleanWord)) {
        localMap[cleanWord] = primaryReading;
        if (cleanWord.length >= 2) localMultiKeys.push(cleanWord);

        const wSegs = splitKanjiOkurigana(cleanWord, primaryReading);
        for (let i = 0; i < wSegs.length; i++) {
          const seg = wSegs[i];
          if (seg.isKanji && seg.reading) {
            localMap[seg.text] = seg.reading;
            if (seg.text.length >= 2 && !localMultiKeys.includes(seg.text)) {
              localMultiKeys.push(seg.text);
            }
            // Sinh thêm các gốc chia thể (stem prefixes) nếu theo sau là Okurigana
            const nextSeg = i + 1 < wSegs.length ? wSegs[i + 1] : null;
            if (nextSeg && !nextSeg.isKanji && nextSeg.text) {
              const okuri = nextSeg.text.replace(/[\s、。！？～~・]/g, '');
              for (let len = okuri.length; len >= 1; len--) {
                const stemSurf = seg.text + okuri.slice(0, len);
                const stemRead = seg.reading + okuri.slice(0, len);
                localMap[stemSurf] = stemRead;
                if (stemSurf.length >= 2 && !localMultiKeys.includes(stemSurf)) {
                  localMultiKeys.push(stemSurf);
                }
              }
            }
          }
        }
      }

      localMultiKeys.sort((a, b) => b.length - a.length || a.localeCompare(b));

      // Bước 1: Đặt placeholder cho các cụm từ mục tiêu đa ký tự (ưu tiên số 1)
      const tokenStore = [];
      let workingText = jpPart;

      if (localMultiKeys.length > 0) {
        const escapedLocal = localMultiKeys.map(k => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        const localRegex = new RegExp(escapedLocal.join('|'), 'g');
        workingText = workingText.replace(localRegex, (m) => {
          const r = localMap[m];
          if (!r) return m;
          const idx = tokenStore.length;
          tokenStore.push({ surface: m, reading: r, fromLocalTarget: true });
          return `\uE000TK_${idx}\uE001`;
        });
      }

      // Bước 2: Quét từ điển Furigana toàn cục trên phần câu còn lại
      const dictRegex = getCompiledFuriganaRegex(fmap);
      if (dictRegex) {
        workingText = workingText.replace(dictRegex, (m) => {
          const r = (m.length === 1 && localMap[m]) ? localMap[m] : fmap[m];
          if (!r) return m;
          const idx = tokenStore.length;
          const isSingleTarget = (m.length === 1 && Boolean(localMap[m]));
          tokenStore.push({ surface: m, reading: r, fromLocalTarget: isSingleTarget });
          return `\uE000TK_${idx}\uE001`;
        });
      }

      // Bước 3: Quét vét các chữ Hán đơn trong localMap nếu từ điển toàn cục chưa nạp
      const singleLocalKeys = Object.keys(localMap).filter(k => k.length === 1);
      if (singleLocalKeys.length > 0) {
        const singleRegex = new RegExp(singleLocalKeys.map(k => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), 'g');
        workingText = workingText.replace(singleRegex, (m) => {
          const idx = tokenStore.length;
          tokenStore.push({ surface: m, reading: localMap[m], fromLocalTarget: true });
          return `\uE000TK_${idx}\uE001`;
        });
      }

      // Bước 4: Giải mã chuỗi thành danh sách các segment để xét Highlight và xuất HTML
      const allSegments = [];
      const placeholderSplitRegex = /(\uE000TK_\d+\uE001)/g;
      const parts = workingText.split(placeholderSplitRegex).filter(Boolean);

      for (const part of parts) {
        const phMatch = part.match(/^\uE000TK_(\d+)\uE001$/);
        if (phMatch) {
          const entry = tokenStore[Number(phMatch[1])];
          const subSegs = splitKanjiOkurigana(entry.surface, entry.reading);
          for (const s of subSegs) {
            allSegments.push({
              text: s.text,
              reading: s.reading,
              isKanji: s.isKanji,
              fromLocalTarget: Boolean(entry.fromLocalTarget && s.isKanji),
              isHighlighted: false
            });
          }
        } else {
          // Nếu masih còn chữ Hán chưa có trong từ điển (khi chạy độc lập không nạp EXAM_FURIGANA)
          const subParts = part.split(KANJI_BLOCK_REGEX).filter(Boolean);
          for (const sp of subParts) {
            const isK = KANJI_REGEX.test(sp);
            allSegments.push({
              text: sp,
              reading: isK ? (localMap[sp] || null) : null,
              isKanji: isK,
              fromLocalTarget: Boolean(isK && localMap[sp]),
              isHighlighted: false
            });
          }
        }
      }

      // Bước 5: Xác định các segment chữ Hán cần làm nổi bật (Target Kanji Highlight)
      if (targetKanjiChars.size > 0) {
        let highlightedCount = 0;

        // Ưu tiên 1: Các segment chữ Hán khớp trực tiếp từ từ vựng mục tiêu (localTarget)
        for (const seg of allSegments) {
          if (seg.isKanji && seg.fromLocalTarget) {
            const kChars = this.extractKanjiCharacters(seg.text);
            if (kChars.length > 0 && kChars.every(ch => targetKanjiChars.has(ch))) {
              seg.isHighlighted = true;
              highlightedCount++;
            }
          }
        }

        // Ưu tiên 2: Các segment chữ Hán mà mọi Hán tự bên trong đều thuộc targetKanjiChars
        if (highlightedCount === 0) {
          for (const seg of allSegments) {
            if (seg.isKanji) {
              const kChars = this.extractKanjiCharacters(seg.text);
              if (kChars.length > 0 && kChars.every(ch => targetKanjiChars.has(ch))) {
                seg.isHighlighted = true;
                highlightedCount++;
              }
            }
          }
        }

        // Ưu tiên 3 (Fallback): Các segment chữ Hán có chứa ít nhất 1 Hán tự thuộc targetKanjiChars
        if (highlightedCount === 0) {
          for (const seg of allSegments) {
            if (seg.isKanji) {
              const kChars = this.extractKanjiCharacters(seg.text);
              if (kChars.some(ch => targetKanjiChars.has(ch))) {
                seg.isHighlighted = true;
                highlightedCount++;
              }
            }
          }
        }
      }

      // Bước 6: Kết xuất HTML kết hợp thẻ <ruby> và <strong class="kcard-example-highlight">
      let highlightedJp = allSegments.map(seg => {
        if (!seg.isKanji) return seg.text;
        const innerHtml = seg.reading
          ? `<ruby>${seg.text}<rt>${seg.reading}</rt></ruby>`
          : seg.text;
        return seg.isHighlighted
          ? `<strong class="kcard-example-highlight">${innerHtml}</strong>`
          : innerHtml;
      }).join('');

      // Dự phòng nếu từ mục tiêu là thuần Kana (không chứa Kanji)
      if (targetKanjiChars.size === 0 && cleanWord && highlightedJp.includes(cleanWord)) {
        highlightedJp = highlightedJp.split(cleanWord).join(`<strong class="kcard-example-highlight">${cleanWord}</strong>`);
      }

      return {
        jpRaw: jpPart,
        jpHtml: highlightedJp,
        viText: viPart
      };
    },

    /**
     * Tạo khóa lưu trữ cho bài học Kanji
     */
    getLearnedStorageKey(lessonNum) {
      return `minna_kfc_learned_l${lessonNum}`;
    },

    /**
     * Tải danh sách chữ Hán đã đánh dấu là "Đã học" của một bài học
     */
    loadLearnedSet(lessonNum, storageEngine) {
      const storage = storageEngine || (typeof root !== 'undefined' && root.StorageEngine);
      const key = this.getLearnedStorageKey(lessonNum);
      if (storage && typeof storage.getItem === 'function') {
        const raw = storage.getItem(key, '[]');
        try {
          const parsed = JSON.parse(raw);
          return new Set(Array.isArray(parsed) ? parsed : []);
        } catch (e) {
          return new Set();
        }
      }
      return new Set();
    },

    /**
     * Lưu danh sách chữ Hán đã học vào bộ nhớ bảo mật
     */
    saveLearnedSet(lessonNum, learnedSet, storageEngine) {
      const storage = storageEngine || (typeof root !== 'undefined' && root.StorageEngine);
      const key = this.getLearnedStorageKey(lessonNum);
      const arr = Array.from(learnedSet || []);
      if (storage && typeof storage.setItem === 'function') {
        storage.setItem(key, JSON.stringify(arr));
      }
    },

    /**
     * Lấy các chữ Hán tương tự gây nhiễu cho 1 chữ Hán cụ thể
     */
    extractLookalikes(kanjiChar, customMap) {
      if (!kanjiChar || typeof kanjiChar !== 'string') return [];
      const map = customMap
        || (typeof root !== 'undefined' && root.KANJI_LOOKALIKES_MAP)
        || {};
      return Array.isArray(map[kanjiChar]) ? [...map[kanjiChar]] : [];
    }
  };

  // Xuất bản đa môi trường UMD
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = KanjiEngine;
  }
  if (root) {
    root.KanjiEngine = KanjiEngine;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
