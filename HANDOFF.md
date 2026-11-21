# HANDOFF.md — Tối Ưu Bố Cục Thẻ Từ Vựng Di Động: Compact 2-Line Row View (`v20261111_12`)

## 1. Mục Tiêu & Trạng Thái Hệ Thống
- **Trạng thái**: **ĐÃ TRIỂN KHAI & XÁC THỰC 100% (VICTORY CONFIRMED, 33/33 Test Suites PASS, 653/653 CDP Viewport Tests PASS — ALL GREEN)**.
- **Mã phát hành (Release ID)**: `REL-20261111-VOCAB12`.
- **Tính năng triển khai**:
  - **Tối ưu Bố Cục Thẻ Từ Vựng Di Động (Compact 2-Line Row View)**:
    + Tái cấu trúc `@media (max-width: 680px)` trong [`style.css`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/style.css): Thay thế dạng thẻ dọc 3 tầng phân mảnh bằng bố cục 2 dòng tinh gọn, hiện đại.
    + Dòng 1: [Loa phát âm $\ge 44$px touch area] + [Tiếng Nhật in đậm 17.5px] (kèm Hiragana đọc phụ 12.5px màu cam bên dưới khi có Kanji) + [Huy hiệu Từ loại neo góc phải].
    + Dòng 2: Thay nét đứt thô bằng đường viền siêu mảnh mờ nhẹ `solid 0.5px` (`border-top: 1px solid var(--border-card-subtle)`), theo sau là Nghĩa tiếng Việt rõ nét (14.5px).
    + Tăng gấp đôi mật độ thông tin: Hiển thị 6–7 từ vựng cùng lúc trên màn hình thay vì 3–4 từ như trước.
    + Không ảnh hưởng đến giao diện máy tính để bàn (Desktop 3-column table view nguyên vẹn 100%).
  - **Cache-Busting & Mobile Web Guardrails**:
    + Đồng bộ toàn bộ 30 tham chiếu phiên bản lên `v=20261111_12` trên [`index.html`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/index.html), [`sw.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/sw.js) (`minna-pwa-v20261111_12`), [`src/kaiwa_engine.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/src/kaiwa_engine.js), [`src/exam_engine.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/src/exam_engine.js).
    + Vùng chạm $\ge 44$px theo chuẩn Apple & Google, cân bằng ngoặc CSS tuyệt đối (delta = 0: 1879 mở, 1879 đóng).

## 2. Các Tệp Then Chốt Đã Cập Nhật
- [`style.css`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/style.css): Tái cấu trúc `.vocab-table tbody tr`, `.vocab-col-kanji`, `.speak-btn-mobile`, `.vocab-term-group`, `.vocab-col-meaning` cho mobile.
- [`index.html`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/index.html): Đồng bộ phiên bản cache-busting `20261111_12`.
- [`sw.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/sw.js): Nâng phiên bản cache `minna-pwa-v20261111_12`.
- [`src/kaiwa_engine.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/src/kaiwa_engine.js): Đồng bộ `ASSET_VERSION = '20261111_12'`.
- [`src/exam_engine.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/src/exam_engine.js): Đồng bộ `ASSET_VERSION = '20261111_12'`.

## 3. Hướng Dẫn Tiếp Theo
- Đẩy toàn bộ thay đổi lên Git / Cloudflare Pages:
  ```bash
  git add .
  git commit -m "feat(mobile): compact 2-line row view for vocabulary cards (v20261111_12)"
  git push origin main
  ```
