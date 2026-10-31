# Chính Sách An Toàn & Bảo Mật Hệ Thống (Security Policy)

Hệ thống cam kết duy trì chuẩn mực an toàn thông tin cao nhất theo khuyến nghị của **OWASP Top 10** và **NIST Cybersecurity Framework**.

## 1. Các Phiên Bản Được Hỗ Trợ (Supported Versions)

Chúng tôi cung cấp các bản vá bảo mật khẩn cấp cho các phiên bản đang hoạt động:

| Phiên bản | Tình trạng hỗ trợ |
| :--- | :--- |
| Production (`main` branch) |  Được hỗ trợ vá lỗi bảo mật liên tục |
| Release Tags (`v2026.*`) |  Được hỗ trợ cập nhật Hotfix |

## 2. Quy Trình Báo Cáo Lỗ Hổng (Reporting a Vulnerability)

Nếu bạn phát hiện bất kỳ lỗ hổng bảo mật hoặc nguy cơ rò rỉ dữ liệu nào trong hệ thống:
1. **KHÔNG** tạo Issue công khai trên GitHub hoặc mạng xã hội.
2. Vui lòng gửi email trực tiếp tới Ban Bảo Mật: **`security@tiengnhat-minna.pages.dev`** kèm theo:
   - Mô tả chi tiết kịch bản tấn công (Proof-of-Concept an toàn).
   - Môi trường, endpoint hoặc tệp mã nguồn bị ảnh hưởng.
   - Đánh giá sơ bộ mức độ nghiêm trọng theo thang đo CVSS v3.1.
3. Ban Kỹ thuật sẽ phản hồi xác nhận tiếp nhận trong vòng **24 giờ** và cung cấp bản vá trong vòng **48 giờ** đối với các lỗ hổng Critical / High.

## 3. Các Biện Pháp Phòng Thủ Cốt Lõi Đang Hoạt Động (Active Defenses)

* **Phân quyền & Chống IDOR:** Xác thực quyền sở hữu nghiêm ngặt tại `src/security_engine.js`.
* **Ký số Điểm số & Tiến độ:** Cryptographic Attestation Token ngăn chặn can thiệp F12.
* **Mã hóa Dữ liệu:** AES-256-GCM cho dữ liệu nhạy cảm At-Rest, TLS 1.3 và HSTS Preload khi truyền tải.
* **Bảo vệ Biên & Máy chủ (Server-Level 9 Security Headers):** 100% phản hồi HTTP từ Web Server / Reverse Proxy (Nginx, Caddy, Cloudflare Worker/Pages, Node.js) đều được áp đặt: HSTS 2-Yr Preload, X-Frame-Options DENY, X-Content-Type-Options nosniff, Permissions-Policy, CSP, v.v., đạt chuẩn Mozilla Observatory A+ và Qualys SSL Labs A+.
* **Bẫy Bot Honeypot (/hidden-crawler-trap/):** Tự động phát hiện bot cào trộm, gán cờ `X-Crawler-Detected`, trả về HTTP 403 Forbidden kèm Tarpit CPU Delay, loại bỏ hoàn toàn mã lỗi 404.
* **Secure API Proxy (/api/speech):** Reverse proxy an toàn giấu kín Secret Token, hỗ trợ đầy đủ POST/GET/OPTIONS, ngăn chặn rò rỉ token và gián đoạn kết nối.
* **Kiểm thử Hồi quy 100%:** Mọi thay đổi đều phải vượt qua 12 bộ kiểm thử tự động tại `scripts/run_all_regression_tests.js`.
