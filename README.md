# Nền Tảng Tự Học Tiếng Nhật Minna no Nihongo & Luyện Thi JLPT N5 - N4

Ứng dụng web tự học tiếng Nhật toàn diện, tối ưu trải nghiệm di động cao cấp với kiến trúc phân tầng độc lập (**Decoupled Data-Logic Architecture**) và lá chắn bảo mật doanh nghiệp (**Enterprise Defense Architecture**).

---

## 🌟 TÍNH NĂNG NỔI BẬT

* 📚 **50 Bài Học Chuẩn SGK Minna no Nihongo:** Đầy đủ Từ vựng, Ngữ pháp giải thích chi tiết, Mẫu câu & Hội thoại.
* ✍️ **50 Bài Chữ Hán (Kanji) & Mẹo Nhớ:** 191 Bộ thủ có phát âm giọng Tokyo và hoạt họa thứ tự nét bút.
* 📖 **50 Bài Đọc Hiểu (Dokkai):** Kèm bản dịch đối chiếu và từ vựng trọng tâm.
* 🎯 **2.500 Câu Hỏi Trắc Nghiệm Phản Xạ:** Thuật toán sinh phương án nhiễu thông minh (Lookalike Kanji Distractors).
* 🎴 **Flashcard 3D & Lặp Lại Ngắt Quãng (SRS):** Tối ưu hóa ghi nhớ từ vựng dài hạn.
* 🔍 **Từ Điển Mazii & AI Nhận Diện Chữ Viết Tay:** Tích hợp tra cứu đa năng và nhận diện nét vẽ trực quan trên Canvas.
* 🛡️ **Bảo Mật Doanh Nghiệp (Defense-in-Depth):** Chống IDOR, XSS, CSRF, ký số Attestation điểm số chống sửa F12, mã hóa AES-256-GCM và 9 HTTP Security Headers trên Cloudflare Worker.

---

## 🛠️ KIẾN TRÚC & CÔNG NGHỆ

* **Frontend:** HTML5, CSS3 hiện đại (Fluid Typography, Glassmorphism, Zero Flex-shrink), Vanilla ES6 JavaScript (Zero Framework Dependency).
* **Edge & Proxy:** Cloudflare Workers (`_worker.js`) với 5 tầng bảo vệ, chống Hotlink, bẫy Honeypot và ẩn Secret Token.
* **Testing:** Hệ thống kiểm thử hồi quy tự động 11 bộ bài test (`scripts/run_all_regression_tests.js`).

---

## 🚀 HƯỚNG DẪN KHỞI CHẠY & KIỂM THỬ

### 1. Khởi chạy ứng dụng
Chỉ cần mở tệp `index.html` trực tiếp trên trình duyệt hoặc chạy qua bất kỳ static web server nào:
```bash
# Sử dụng Python HTTP server
python -m http.server 8080

# Hoặc sử dụng Node.js npx serve
npx serve .
```

### 2. Khởi chạy bộ kiểm thử hồi quy tự động (Master Regression Harness)
```bash
node scripts/run_all_regression_tests.js
```

### 3. Quét tĩnh bảo mật & Secret Leaks (SAST Scan)
```bash
node scripts/run_security_audit_scan.js
```

---

## 🔒 CHÍNH SÁCH BẢO MẬT & ĐÓNG GÓP

* Xem chi tiết chính sách an toàn thông tin tại [SECURITY.md](SECURITY.md).
* Quy trình xử lý sự cố an ninh tại [INCIDENT_RESPONSE_RUNBOOK.md](INCIDENT_RESPONSE_RUNBOOK.md).
