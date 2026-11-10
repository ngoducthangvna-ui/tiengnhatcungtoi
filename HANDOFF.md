# HANDOFF.md — Chuẩn Hóa Phương Án 2: Modular Floating Cards Architecture

## 1. Core Goal & System Status
- **Status**: **COMPLETED & VERIFIED (32/32 Regression Test Suites PASS — 100% All Green)**.
- **Tính năng triển khai**:
  - Thực thi theo **Phương án 2 (Modular Floating Cards Architecture — 1 Nền Base + 1 Nền Bao Quanh Từng Đơn Vị Nội Dung)**:
    - **Lớp 1 (Base Canvas)**: Nền toàn cảnh website (`--bg-primary`: `#070b14` trên Dark, `#f8fafc` trên Light).
    - **Lớp 2 (Modular Floating Surface)**: Từng chủ điểm ngữ pháp (`.grammar-item-card`), bảng từ vựng (`.table-container`), thẻ bài đọc (`.dokkai-passage`), bài tập (`.quiz-card`) và hội thoại (`.kaiwa-stage-card`) là các thẻ nổi độc lập duy nhất trực tiếp trên nền Base.
    - **Khử triệt để Khung Mẹ bọc ngoài (Zero Outer Shell Boxing)**: Phẳng hóa hoàn toàn `.section-card` và `.kaiwa-shell` (`background: transparent; border: none; padding: 0; box-shadow: none;`).
    - **Khử triệt để Hộp Con lồng bên trong (Zero Inner Nested Boxing)**: Toàn bộ công thức, ghi chú, thẻ ví dụ, bong bóng thoại, nút lựa chọn đều phẳng hóa (`transparent`, hairline border).
  - **Đồng bộ Cache-Busting & Service Worker PWA**:
    - Nâng cấp `CACHE_VERSION = 'minna-pwa-v20261111_03'` trong `sw.js`.
    - Đồng bộ mã phiên bản `?v=20261111_03` trong `index.html`, `src/kaiwa_engine.js`, `src/exam_engine.js`.
    - Cập nhật các bộ kiểm thử Suite 22, 24, 32.
  - Cân bằng ngoặc CSS hoàn hảo: `style.css` (1875/1875, $\Delta = 0$), `src/kaiwa_style.css` (274/274, $\Delta = 0$).

## 2. Key Files Modified & Verified
- [`style.css`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/style.css): Phẳng hóa `.section-card`, giữ `.grammar-item-card` làm thẻ bề mặt duy nhất. Cân bằng ngoặc 1875/1875 ($\Delta = 0$).
- [`src/kaiwa_style.css`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/src/kaiwa_style.css): Phẳng hóa `.kaiwa-shell`. Cân bằng ngoặc 274/274 ($\Delta = 0$).
- [`sw.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/sw.js): Cập nhật `minna-pwa-v20261111_03`.
- [`index.html`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/index.html): Đồng bộ Cache-Busting `20261111_03`.
- [`src/kaiwa_engine.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/src/kaiwa_engine.js) & [`src/exam_engine.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/src/exam_engine.js): Cập nhật version `20261111_03`.
- [`scripts/test_two_layer_design_system.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/scripts/test_two_layer_design_system.js): Suite 32 kiểm định Phương án 2.
- [`scripts/test_cover_topbar_mobile.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/scripts/test_cover_topbar_mobile.js) & [`scripts/test_user_account_ui_integration.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/scripts/test_user_account_ui_integration.js): Đồng bộ version `20261111_03`.
- [`scripts/run_all_regression_tests.js`](file:///d:/Ngo_Duc_Thang/Antigravity/日本語/So_7.2/scripts/run_all_regression_tests.js): 32/32 Test Suites PASS 100% All Green.

## 3. Immediate Next Task
- Bàn giao kết quả chuẩn hóa Phương án 2 và hướng dẫn người dùng làm mới trình duyệt (Ctrl+F5) để kiểm tra.
