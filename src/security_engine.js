/**
 * ==============================================================================
 * ENTERPRISE SECURITY ENGINE (src/security_engine.js)
 * ------------------------------------------------------------------------------
 * Động cơ an ninh cốt lõi (Core Defense Engine) theo tiêu chuẩn OWASP Top 10:2021
 * và NIST SP 800-53 Rev. 5, hoạt động độc lập trên cả Trình duyệt (Browser) & Node.js:
 * 
 * 1. XÁC THỰC & PHÂN QUYỀN (Auth & Access Control):
 *    - enforceOwnership: Ngăn chặn triệt để lỗ hổng vượt quyền trực tiếp (IDOR)
 *    - generateCSPRNGToken: Bộ sinh token ngẫu nhiên mật mã 256-bit
 *    - hashToken: Mã băm SHA-256 an toàn một chiều cho Token reset & Session
 *    - timingSafeEqual: So sánh chuỗi hằng số thời gian chống Timing Attacks
 *    - validatePasswordStrength: Tiêu chuẩn NIST SP 800-63B cho mật khẩu
 * 
 * 2. LỖ HỔNG ĐẦU VÀO DỮ LIỆU (Input Sanitization & Injection Defense):
 *    - sanitizeUrl: Vô hiệu hóa tấn công Pseudo-protocol (javascript:, data:, vbscript:)
 *    - escapeHtml & escapeAttrValue: Bộ lọc Context-Aware Encoding chống XSS
 *    - validateFileUpload: Thẩm định Magic Bytes (File Signatures) chống Web Shell/Malware
 * 
 * 3. BẢO MẬT API & TRAFFIC (Rate Limiting & Data Protection):
 *    - SlidingWindowRateLimiter: Bộ điều phối tần suất truy vấn chống Brute-force/DoS
 * ==============================================================================
 */

(function(root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    // Node.js CommonJS
    const crypto = require('crypto');
    module.exports = factory(crypto);
  } else {
    // Browser global / UMD
    root.SecurityEngine = factory(root.crypto || (typeof window !== 'undefined' ? window.crypto : null));
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function(cryptoModule) {
  'use strict';

  // Chữ ký nhị phân (Magic Bytes / File Signatures) cho các loại tệp hợp lệ
  const MAGIC_BYTES_TABLE = {
    jpeg: [0xFF, 0xD8, 0xFF],
    png: [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A],
    webp: [0x52, 0x49, 0x46, 0x46], // Tiếp theo là RIFF....WEBP (offset 8)
    pdf: [0x25, 0x50, 0x44, 0x46],   // %PDF
    mp3: [0x49, 0x44, 0x33],         // ID3 header hoặc 0xFF, 0xFB (MPEG frame)
    mp3_raw: [0xFF, 0xFB]
  };

  // Danh mục phần mở rộng bị cấm tuyệt đối (Blacklisted Extensions)
  const DANGEROUS_EXTENSIONS = new Set([
    'exe', 'bat', 'cmd', 'sh', 'php', 'phtml', 'php3', 'php4', 'php5', 'phps',
    'asp', 'aspx', 'jsp', 'jspx', 'cgi', 'pl', 'py', 'rb', 'jar', 'vbs',
    'com', 'scr', 'msi', 'dll', 'so', 'dylib', 'html', 'htm', 'xhtml'
  ]);

  const SecurityEngine = {
    // =========================================================================
    // 1. XÁC THỰC & PHÂN QUYỀN (AUTHENTICATION & ACCESS CONTROL)
    // =========================================================================

    /**
     * Ngăn chặn IDOR (Insecure Direct Object Reference)
     * Thẩm định quyền sở hữu tài nguyên nghiêm ngặt giữa người dùng đang đăng nhập và chủ sở hữu tài nguyên
     * @param {Object} currentUser Người dùng hiện tại { id, role }
     * @param {string|number} resourceOwnerId ID của người sở hữu bản ghi
     * @param {Array<string>} [privilegedRoles] Các vai trò quản trị được miễn trừ
     * @returns {boolean} true nếu hợp lệ, false nếu là hành vi vượt quyền
     */
    enforceOwnership(currentUser, resourceOwnerId, privilegedRoles = ['admin', 'SYSTEM_ADMIN']) {
      if (!currentUser || typeof currentUser !== 'object') return false;
      if (resourceOwnerId === null || resourceOwnerId === undefined) return false;

      // 1. Cho phép nếu người dùng là Quản trị viên cấp cao
      if (currentUser.role && privilegedRoles.includes(currentUser.role)) {
        return true;
      }

      // 2. Ép kiểu chuỗi nghiêm ngặt để tránh bypass qua type coercion (ví dụ 1024 vs "1024")
      const currentIdStr = String(currentUser.id || '').trim();
      const ownerIdStr = String(resourceOwnerId).trim();

      if (!currentIdStr || !ownerIdStr) return false;
      return currentIdStr === ownerIdStr;
    },

    /**
     * Sinh chuỗi Token ngẫu nhiên mật mã an toàn cao (CSPRNG)
     * @param {number} bytes Số bytes ngẫu nhiên (mặc định 32 bytes = 256 bits)
     * @returns {string} Chuỗi token dạng Hex
     */
    generateCSPRNGToken(bytes = 32) {
      if (cryptoModule && typeof cryptoModule.randomBytes === 'function') {
        // Môi trường Node.js
        return cryptoModule.randomBytes(bytes).toString('hex');
      }
      if (cryptoModule && typeof cryptoModule.getRandomValues === 'function') {
        // Môi trường Browser Web Cryptography API
        const array = new Uint8Array(bytes);
        cryptoModule.getRandomValues(array);
        return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
      }
      // Failsafe nếu không có Web Crypto (không khuyến nghị cho production)
      throw new Error('[SecurityEngine] Môi trường thiếu CSPRNG mật mã (crypto API).');
    },

    /**
     * Băm chuỗi Token bằng SHA-256 (One-way hash)
     * Phục vụ lưu trữ an toàn token reset mật khẩu & session identifiers
     * @param {string} token Chuỗi token thô
     * @returns {Promise<string>|string} Chuỗi hash SHA-256 dạng hex
     */
    hashToken(token) {
      if (!token || typeof token !== 'string') return '';
      if (cryptoModule && typeof cryptoModule.createHash === 'function') {
        // Node.js đồng bộ
        return cryptoModule.createHash('sha256').update(token, 'utf8').digest('hex');
      }
      // Trình duyệt (trả về Promise qua SubtleCrypto hoặc tính toán fallback)
      if (cryptoModule && cryptoModule.subtle && typeof cryptoModule.subtle.digest === 'function') {
        const encoder = new TextEncoder();
        const data = encoder.encode(token);
        return cryptoModule.subtle.digest('SHA-256', data).then(buf => {
          return Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('');
        });
      }
      return '';
    },

    /**
     * So sánh chuỗi với thời gian cố định (Constant-time string comparison)
     * Vô hiệu hóa hoàn toàn tấn công kênh phụ đo thời gian (Timing Attacks)
     * @param {string} a Chuỗi thứ nhất
     * @param {string} b Chuỗi thứ hai
     * @returns {boolean} true nếu 2 chuỗi trùng khớp tuyệt đối
     */
    timingSafeEqual(a, b) {
      if (typeof a !== 'string' || typeof b !== 'string') return false;
      if (cryptoModule && typeof cryptoModule.timingSafeEqual === 'function') {
        const bufA = Buffer.from(a, 'utf8');
        const bufB = Buffer.from(b, 'utf8');
        if (bufA.length !== bufB.length) return false;
        return cryptoModule.timingSafeEqual(bufA, bufB);
      }
      // Triển khai Constant-time thủ công cho môi trường Browser
      if (a.length !== b.length) return false;
      let mismatch = 0;
      for (let i = 0; i < a.length; i++) {
        mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
      }
      return mismatch === 0;
    },

    /**
     * Thẩm định độ mạnh của mật khẩu theo chuẩn NIST SP 800-63B
     * @param {string} password Mật khẩu cần kiểm tra
     * @returns {{ isValid: boolean, errors: Array<string> }}
     */
    validatePasswordStrength(password) {
      const errors = [];
      if (!password || typeof password !== 'string') {
        return { isValid: false, errors: ['Mật khẩu không được để trống.'] };
      }
      if (password.length < 10) {
        errors.push('Độ dài mật khẩu tối thiểu phải từ 10 ký tự.');
      }
      if (password.length > 128) {
        errors.push('Mật khẩu không được vượt quá 128 ký tự để chống DoS.');
      }
      if (!/[A-Z]/.test(password)) {
        errors.push('Mật khẩu phải chứa ít nhất một chữ cái in hoa (A-Z).');
      }
      if (!/[a-z]/.test(password)) {
        errors.push('Mật khẩu phải chứa ít nhất một chữ cái thường (a-z).');
      }
      if (!/[0-9]/.test(password)) {
        errors.push('Mật khẩu phải chứa ít nhất một chữ số (0-9).');
      }
      if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        errors.push('Mật khẩu phải chứa ít nhất một ký tự đặc biệt.');
      }
      // Chặn các mật khẩu phổ biến thường bị dò quét
      const commonWeak = ['password123', 'admin12345', '1234567890', 'qwertyuiop', 'minna12345'];
      if (commonWeak.includes(password.toLowerCase())) {
        errors.push('Mật khẩu nằm trong danh sách phổ biến dễ đoán.');
      }

      return {
        isValid: errors.length === 0,
        errors: errors
      };
    },

    // =========================================================================
    // 2. LỖ HỔNG ĐẦU VÀO DỮ LIỆU (INPUT SANITIZATION & INJECTION DEFENSE)
    // =========================================================================

    /**
     * Vệ sinh URL, ngăn chặn triệt để tấn công Pseudo-protocol XSS (javascript:, data:, vbscript:)
     * @param {string} rawUrl URL cần làm sạch
     * @param {string} [fallback] Giá trị an toàn trả về khi URL không hợp lệ
     * @returns {string} URL đã được xác thực an toàn
     */
    sanitizeUrl(rawUrl, fallback = 'about:blank') {
      if (!rawUrl || typeof rawUrl !== 'string') return fallback;
      const trimmed = rawUrl.trim();

      // 1. Chặn đứng các scheme nguy hiểm thực thi mã JavaScript trong href / src
      const dangerousScheme = /^(javascript|data|vbscript|file):/i;
      if (dangerousScheme.test(trimmed)) {
        console.warn('[SecurityEngine] Phát hiện URL độc hại bị chặn:', trimmed.slice(0, 30));
        return fallback;
      }

      // 2. Chỉ cho phép các giao thức an toàn (https, http, mailto, tel) hoặc đường dẫn tương đối (/, #, ?)
      const safePattern = /^(https?:\/\/|mailto:|tel:|\/|#|\?)/i;
      if (!safePattern.test(trimmed)) {
        return fallback;
      }

      // 3. Encode các ký tự đặc biệt trong URL
      return trimmed.replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },

    /**
     * Context-aware Attribute Value Escaping
     * Đảm bảo giá trị khi chèn vào HTML attributes hoặc inline handlers không thể bẻ thoát context
     */
    escapeAttrValue(str) {
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
     * Thẩm định tệp tải lên theo chữ ký Magic Bytes & Phần mở rộng
     * Ngăn chặn tải lên Web Shell, mã độc, Path Traversal hoặc tấn công MIME Spoofing
     * @param {Uint8Array|Buffer|Array<number>} bytes Dữ liệu nhị phân của tệp (hoặc tối thiểu 16 bytes đầu)
     * @param {string} originalFilename Tên tệp do client cung cấp
     * @param {number} maxSizeBytes Giới hạn kích thước tệp tối đa (mặc định 5MB)
     * @returns {{ isValid: boolean, safeFilename: string, mime: string, error?: string }}
     */
    validateFileUpload(bytes, originalFilename, maxSizeBytes = 5 * 1024 * 1024) {
      if (!bytes || bytes.length === 0) {
        return { isValid: false, safeFilename: '', mime: '', error: 'Tệp không có dữ liệu nội dung.' };
      }

      if (bytes.length > maxSizeBytes) {
        return { isValid: false, safeFilename: '', mime: '', error: `Kích thước tệp vượt quá giới hạn tối đa ${(maxSizeBytes / (1024 * 1024)).toFixed(1)}MB.` };
      }

      if (!originalFilename || typeof originalFilename !== 'string') {
        return { isValid: false, safeFilename: '', mime: '', error: 'Tên tệp không hợp lệ.' };
      }

      // 1. Chống Path Traversal và Null-byte Injection trong tên file
      const cleanName = originalFilename.replace(/[\/\\]/g, '').replace(/\0/g, '').trim();
      const dotIndex = cleanName.lastIndexOf('.');
      if (dotIndex === -1 || dotIndex === cleanName.length - 1) {
        return { isValid: false, safeFilename: '', mime: '', error: 'Tệp phải có phần mở rộng (extension).' };
      }

      const ext = cleanName.slice(dotIndex + 1).toLowerCase();

      // 2. Chặn toàn bộ phần mở rộng nguy hiểm
      if (DANGEROUS_EXTENSIONS.has(ext)) {
        return { isValid: false, safeFilename: '', mime: '', error: `Phần mở rộng .${ext} bị cấm vì lý do an ninh hệ thống.` };
      }

      // 3. Thẩm định Magic Bytes thực tế của dữ liệu
      const headerBytes = Array.from(bytes.slice(0, 16));
      let detectedType = null;

      // Check JPEG
      if (headerBytes[0] === 0xFF && headerBytes[1] === 0xD8 && headerBytes[2] === 0xFF) {
        detectedType = 'jpeg';
      }
      // Check PNG
      else if (headerBytes[0] === 0x89 && headerBytes[1] === 0x50 && headerBytes[2] === 0x4E && headerBytes[3] === 0x47) {
        detectedType = 'png';
      }
      // Check WEBP (RIFF....WEBP)
      else if (headerBytes[0] === 0x52 && headerBytes[1] === 0x49 && headerBytes[2] === 0x46 && headerBytes[3] === 0x46 &&
               headerBytes[8] === 0x57 && headerBytes[9] === 0x45 && headerBytes[10] === 0x42 && headerBytes[11] === 0x50) {
        detectedType = 'webp';
      }
      // Check PDF
      else if (headerBytes[0] === 0x25 && headerBytes[1] === 0x50 && headerBytes[2] === 0x44 && headerBytes[3] === 0x46) {
        detectedType = 'pdf';
      }
      // Check MP3
      else if ((headerBytes[0] === 0x49 && headerBytes[1] === 0x44 && headerBytes[2] === 0x33) ||
               (headerBytes[0] === 0xFF && (headerBytes[1] & 0xE0) === 0xE0)) {
        detectedType = 'mp3';
      }

      if (!detectedType) {
        return { isValid: false, safeFilename: '', mime: '', error: 'Dữ liệu tệp không khớp với chữ ký nhị phân được phép (Magic Bytes Mismatch).' };
      }

      // 4. Đối chiếu Extension và Magic Bytes (chống giả mạo extension)
      const allowedExtMap = {
        jpeg: ['jpg', 'jpeg'],
        png: ['png'],
        webp: ['webp'],
        pdf: ['pdf'],
        mp3: ['mp3']
      };

      if (!allowedExtMap[detectedType].includes(ext)) {
        return {
          isValid: false,
          safeFilename: '',
          mime: '',
          error: `Phần mở rộng .${ext} không khớp với định dạng tệp thực tế (${detectedType.toUpperCase()}).`
        };
      }

      // 5. Đổi tên tệp ngẫu nhiên bằng UUIDv4 để chống xung đột và thực thi tên file gốc
      const randomUuid = SecurityEngine.generateCSPRNGToken(16);
      const safeFilename = `${randomUuid}.${ext}`;

      const mimeTypes = {
        jpeg: 'image/jpeg',
        png: 'image/png',
        webp: 'image/webp',
        pdf: 'application/pdf',
        mp3: 'audio/mpeg'
      };

      return {
        isValid: true,
        safeFilename: safeFilename,
        mime: mimeTypes[detectedType],
        detectedType: detectedType
      };
    },

    // =========================================================================
    // 3. GIỚI HẠN TẦN SUẤT TRUY VẤN (RATE LIMITING SLIDING WINDOW)
    // =========================================================================

    /**
     * Tạo một bộ điều phối tần suất truy vấn cửa sổ trượt (Sliding Window Rate Limiter)
     * @param {number} maxRequests Số lượng request tối đa trong cửa sổ
     * @param {number} windowMs Thời lượng cửa sổ tính bằng mili-giây
     */
    createRateLimiter(maxRequests = 20, windowMs = 60000) {
      const records = new Map();

      return {
        /**
         * Kiểm tra và ghi nhận lượt truy vấn của một khóa định danh (IP hoặc UserID)
         * @param {string} key Khóa định danh
         * @returns {{ isAllowed: boolean, remaining: number, resetMs: number }}
         */
        check(key) {
          const now = Date.now();
          if (!records.has(key)) {
            records.set(key, []);
          }

          const timestamps = records.get(key);
          // Loại bỏ các mốc thời gian ngoài cửa sổ
          const validTimestamps = timestamps.filter(ts => now - ts < windowMs);

          if (validTimestamps.length >= maxRequests) {
            const oldestInWindow = validTimestamps[0];
            const resetMs = windowMs - (now - oldestInWindow);
            records.set(key, validTimestamps);
            return {
              isAllowed: false,
              remaining: 0,
              resetMs: Math.max(0, resetMs)
            };
          }

          validTimestamps.push(now);
          records.set(key, validTimestamps);

          return {
            isAllowed: true,
            remaining: maxRequests - validTimestamps.length,
            resetMs: windowMs
          };
        },

        /**
         * Xóa bộ nhớ định danh (Reset)
         */
        reset(key) {
          if (key) records.delete(key);
          else records.clear();
        }
      };
    },

    // =========================================================================
    // 4. XÁC THỰC TIẾN ĐỘ & ĐIỂM SỐ KÝ SỐ MẬT MÃ (SEC-04 ATTESTATION)
    // =========================================================================

    /**
     * Tạo chứng chỉ ký số điểm số / hoàn thành bài học (Cryptographic Attestation)
     * Chống can thiệp LocalStorage hoặc F12 giả mạo tiến độ học tập
     * @param {string} moduleId Mã bài học (e.g. 'bai-1', 'quiz-5')
     * @param {string} userId ID học viên
     * @param {number} score Điểm số đạt được (0 - 100)
     * @param {string} secretKey Khóa bí mật máy chủ
     * @returns {string} Chuỗi Attestation Token an toàn
     */
    generateQuizAttestation(moduleId, userId, score, secretKey = 'minna_default_edge_secret_2026') {
      const timestamp = Date.now();
      const nonce = SecurityEngine.generateCSPRNGToken(8);
      const payloadString = `${moduleId}:${userId}:${score}:${timestamp}:${nonce}`;

      let signature = '';
      if (cryptoModule && typeof cryptoModule.createHmac === 'function') {
        signature = cryptoModule.createHmac('sha256', secretKey).update(payloadString).digest('hex');
      } else {
        // Fallback FNV băm kết hợp nếu chạy trong môi trường client không có HMAC
        signature = SecurityEngine.hashToken(payloadString + secretKey);
      }

      const attestationObj = {
        m: moduleId,
        u: userId,
        s: score,
        t: timestamp,
        n: nonce,
        sig: signature
      };

      const rawJson = JSON.stringify(attestationObj);
      if (typeof Buffer !== 'undefined') {
        return Buffer.from(rawJson).toString('base64url');
      }
      return btoa(rawJson).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    },

    /**
     * Xác minh tính toàn vẹn của chứng chỉ điểm số (Attestation Verification)
     * @param {string} token Chuỗi token attestation
     * @param {string} secretKey Khóa bí mật máy chủ
     * @param {number} maxAgeMs Thời hạn tối đa của chứng chỉ (mặc định 30 ngày)
     * @returns {{ isValid: boolean, data?: object, reason?: string }}
     */
    verifyQuizAttestation(token, secretKey = 'minna_default_edge_secret_2026', maxAgeMs = 30 * 24 * 3600 * 1000) {
      if (!token || typeof token !== 'string') {
        return { isValid: false, reason: 'TOKEN_EMPTY' };
      }

      try {
        let jsonStr = '';
        if (typeof Buffer !== 'undefined') {
          jsonStr = Buffer.from(token, 'base64url').toString('utf8');
        } else {
          const base64 = token.replace(/-/g, '+').replace(/_/g, '/');
          jsonStr = atob(base64);
        }

        const data = JSON.parse(jsonStr);
        if (!data || !data.m || !data.sig || data.s === undefined) {
          return { isValid: false, reason: 'PAYLOAD_MALFORMED' };
        }

        // 1. Kiểm tra thời hạn hiệu lực của chứng chỉ
        const now = Date.now();
        if (now - data.t > maxAgeMs) {
          return { isValid: false, reason: 'ATTESTATION_EXPIRED' };
        }

        // 2. Tái tạo chữ ký và so sánh bằng constant-time
        const payloadString = `${data.m}:${data.u}:${data.s}:${data.t}:${data.n}`;
        let expectedSignature = '';
        if (cryptoModule && typeof cryptoModule.createHmac === 'function') {
          expectedSignature = cryptoModule.createHmac('sha256', secretKey).update(payloadString).digest('hex');
        } else {
          expectedSignature = SecurityEngine.hashToken(payloadString + secretKey);
        }

        if (!SecurityEngine.timingSafeEqual(data.sig, expectedSignature)) {
          return { isValid: false, reason: 'SIGNATURE_INVALID_TAMPERING_DETECTED' };
        }

        return {
          isValid: true,
          data: {
            moduleId: data.m,
            userId: data.u,
            score: data.s,
            timestamp: data.t
          }
        };
      } catch (err) {
        return { isValid: false, reason: 'DECODE_ERROR', error: err.message };
      }
    },

    // =========================================================================
    // 5. MÃ HÓA CẤP TRƯỜNG DỮ LIỆU NHẠY CẢM AT-REST (SEC-09 AES-256-GCM)
    // =========================================================================

    /**
     * Mã hóa dữ liệu nhạy cảm bằng AES-256-GCM (Authenticated Encryption)
     * @param {string} plainText Dữ liệu gốc
     * @param {string} keyHex Khóa mã hóa 256-bit (32 bytes = 64 ký tự Hex)
     * @returns {string} Chuỗi JSON đóng gói iv, authTag và ciphertext
     */
    encryptField(plainText, keyHex) {
      if (!cryptoModule || typeof cryptoModule.createCipheriv !== 'function') {
        throw new Error('[SecurityEngine] Môi trường không hỗ trợ createCipheriv.');
      }
      if (!plainText || typeof plainText !== 'string') return '';
      if (!keyHex || keyHex.length !== 64) {
        throw new Error('Khóa mã hóa phải đúng 64 ký tự Hex (256-bit key).');
      }

      const key = Buffer.from(keyHex, 'hex');
      const iv = cryptoModule.randomBytes(12); // Chuẩn NIST 96-bit IV cho GCM
      const cipher = cryptoModule.createCipheriv('aes-256-gcm', key, iv);

      let encrypted = cipher.update(plainText, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      const authTag = cipher.getAuthTag().toString('hex');

      return JSON.stringify({
        iv: iv.toString('hex'),
        tag: authTag,
        data: encrypted
      });
    },

    /**
     * Giải mã dữ liệu cấp trường với thẩm định toàn vẹn AuthTag (AES-256-GCM)
     * @param {string} encryptedJson Chuỗi JSON mã hóa
     * @param {string} keyHex Khóa giải mã 256-bit
     * @returns {string} Dữ liệu đã giải mã nguyên bản
     */
    decryptField(encryptedJson, keyHex) {
      if (!cryptoModule || typeof cryptoModule.createDecipheriv !== 'function') {
        throw new Error('[SecurityEngine] Môi trường không hỗ trợ createDecipheriv.');
      }
      if (!encryptedJson || typeof encryptedJson !== 'string') return '';
      if (!keyHex || keyHex.length !== 64) {
        throw new Error('Khóa giải mã phải đúng 64 ký tự Hex.');
      }

      const parsed = JSON.parse(encryptedJson);
      const key = Buffer.from(keyHex, 'hex');
      const iv = Buffer.from(parsed.iv, 'hex');
      const tag = Buffer.from(parsed.tag, 'hex');

      const decipher = cryptoModule.createDecipheriv('aes-256-gcm', key, iv);
      decipher.setAuthTag(tag);

      let decrypted = decipher.update(parsed.data, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    },

    // =========================================================================
    // 6. BĂM MẬT KHẨU AN TOÀN KÈM MUỐI (SEC-09 PBKDF2)
    // =========================================================================

    /**
     * Băm mật khẩu bằng PBKDF2-HMAC-SHA256 với Salt độc nhất
     * @param {string} password Mật khẩu gốc
     * @param {string} [saltHex] Muối dạng Hex (nếu null, tự động sinh 16 bytes CSPRNG)
     * @param {number} [iterations] Số vòng lặp (mặc định 100,000 vòng theo NIST)
     * @returns {{ hash: string, salt: string, iterations: number }}
     */
    hashPasswordPBKDF2(password, saltHex = null, iterations = 100000) {
      if (!cryptoModule || typeof cryptoModule.pbkdf2Sync !== 'function') {
        throw new Error('[SecurityEngine] Môi trường không hỗ trợ pbkdf2Sync.');
      }
      const salt = saltHex ? Buffer.from(saltHex, 'hex') : cryptoModule.randomBytes(16);
      const derivedKey = cryptoModule.pbkdf2Sync(password, salt, iterations, 32, 'sha256');

      return {
        hash: derivedKey.toString('hex'),
        salt: salt.toString('hex'),
        iterations: iterations
      };
    },

    /**
     * Xác minh mật khẩu với bản băm đã lưu trữ
     */
    verifyPasswordPBKDF2(password, storedHash, saltHex, iterations = 100000) {
      const computed = SecurityEngine.hashPasswordPBKDF2(password, saltHex, iterations);
      return SecurityEngine.timingSafeEqual(computed.hash, storedHash);
    },

    // =========================================================================
    // 7. LỌC BỎ DỮ LIỆU NHẠY CẢM TRONG PHẢN HỒI (SEC-08 DATA MASKING)
    // =========================================================================

    /**
     * Loại bỏ toàn bộ các trường bảo mật nhạy cảm trước khi trả dữ liệu về Client/Log
     */
    maskSensitiveData(data) {
      if (!data || typeof data !== 'object') return data;
      if (Array.isArray(data)) {
        return data.map(item => SecurityEngine.maskSensitiveData(item));
      }

      const SENSITIVE_FIELDS = new Set([
        'password', 'password_hash', 'pass', 'salt', 'token',
        'authTag', 'tag', 'secret', 'apiKey', 'credit_card', 'cvv'
      ]);

      const sanitized = {};
      for (const [key, value] of Object.entries(data)) {
        if (SENSITIVE_FIELDS.has(key.toLowerCase())) {
          sanitized[key] = '[REDACTED_SENSITIVE]';
        } else if (typeof value === 'object' && value !== null) {
          sanitized[key] = SecurityEngine.maskSensitiveData(value);
        } else {
          sanitized[key] = value;
        }
      }
      return sanitized;
    }
  };

  return SecurityEngine;
});
