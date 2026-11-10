/**
 * HỆ THỐNG BIỂU TƯỢNG VECTOR SVG TỐI GIẢN (MODERN MINIMALIST ICONS)
 * data/ui_icons.js
 * --------------------------------------------------------------------------
 * Chuẩn Feather / Lucide style: stroke-width: 1.5, round caps/joins,
 * 100% 1.5px Pure Hairline Wireframe (fill="none", zero fill-opacity),
 * sử dụng currentColor tương thích hoàn hảo cả Dark Mode và Light Mode.
 * Safe live area bounds: [2, 2] đến [22, 22], zero SVG text elements.
 */
(function(root) {
  'use strict';

  const APP_ICONS = {
    // Sách / Tra từ điển / Lý thuyết (Curved pages & text lines)
    book: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6C10 4.5 6.5 4.2 3 5V18.2C6.5 17.4 10 17.7 12 19.2C14 17.7 17.5 17.4 21 18.2V5C17.5 4.2 14 4.5 12 6Z M12 6V20.5 M2.5 19.8C6.2 19.0 9.8 19.3 12 20.6C14.2 19.3 17.8 19.0 21.5 19.8 M5.2 8.2C6.8 7.9 8.4 8.0 9.8 8.5 M5.2 10.6C6.8 10.3 8.4 10.4 9.8 10.9 M5.2 13.0C6.8 12.7 8.4 12.8 9.8 13.3 M5.2 15.4C6.8 15.1 8.4 15.2 9.8 15.7 M14.2 8.5C15.6 8.0 17.2 7.9 18.8 8.2 M14.2 10.9C15.6 10.4 17.2 10.3 18.8 10.6 M14.2 13.3C15.6 12.8 17.2 12.7 18.8 13.0 M14.2 15.7C15.6 15.2 17.2 15.1 18.8 15.4"></path></svg>`,
    
    // Đọc Hiểu / Tờ báo & Bản tin đọc hiểu Dokkai (Folded newspaper & article lines - Đồng bộ Mobile Bottom Nav)
    newspaper: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4 M19 17V5a2 2 0 0 0-2-2H4 M15 8h-5 M15 12h-5"></path></svg>`,
    dokkai: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4 M19 17V5a2 2 0 0 0-2-2H4 M15 8h-5 M15 12h-5"></path></svg>`,
    
    // Kính lúp / Tìm kiếm
    search: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    
    // Micro / Tìm kiếm giọng nói (Voice Search)
    mic: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1"></path><line x1="12" y1="18" x2="12" y2="22"></line><line x1="8" y1="22" x2="16" y2="22"></line></svg>`,
    micOff: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="2" y1="2" x2="22" y2="22"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V5a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="18" x2="12" y2="22"></line><line x1="8" y1="22" x2="16" y2="22"></line></svg>`,
    
    // Dấu X xóa nội dung
    clear: `<svg class="icon-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    
    // Bút lông thư pháp Nhật & Chữ Hán (Calligraphy Brush & Kanji)
    pen: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.8 4.2L4.6 4.8 M3.5 6.2L4.4 6.8 M3.8 8.8L4.6 7.6 M5.6 4.2H9.4 M6.6 3.5V4.8 M8.4 3.5V4.8 M5.8 5.6H9.2V7.0H5.8Z M5.4 8.0H9.6 M7.5 5.6C7.5 7.6 6.6 8.8 5.4 9.4 M7.5 7.6C8.2 8.4 8.9 9.0 9.6 9.4 M6.8 10.6V11.5 M4.5 11.5H9.2V12.6 M4.5 11.5V12.6 M5.5 12.8H8.0L6.8 14.0V15.8C6.8 16.2 6.3 16.2 5.9 16.0 M4.4 14.4H9.4 M12.2 14.6L19.8 6.2C20.6 5.3 20.6 4.2 19.9 3.5C19.2 2.8 18.1 2.8 17.2 3.6L9.6 12.0Z M10.4 11.2L13.0 13.8 M9.6 12.0C8.0 13.2 7.2 14.8 6.8 16.8C6.4 18.4 5.4 19.6 4.2 20.2C5.8 20.0 7.6 19.2 9.0 18.2C10.6 17.0 11.4 15.8 12.2 14.6"></path></svg>`,
    
    // Hoàn tác / Xóa nét vừa vẽ
    undo: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></svg>`,
    
    // Thùng rác / Xóa hết nét vẽ
    trash: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    
    // Xóa ký tự lùi (Backspace)
    backspace: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 4H8L2 12l6 8h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>`,
    
    // Trí tuệ Nhân tạo AI
    robot: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>`,
    
    // Bóng đèn / Mẹo nhớ Kanji
    lightbulb: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path></svg>`,
    
    // Thẻ Flashcard 3D
    cards: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    
    // Bài tập trắc nghiệm / Sổ tay SRS Notebook với ngôi sao & tabs
    exercise: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 3H17.5A2 2 0 0 1 19.5 5V19A2 2 0 0 1 17.5 21H5.5A1.5 1.5 0 0 1 4 19.5V4.5A1.5 1.5 0 0 1 5.5 3Z M2.5 6.2H5.5 M2.5 9.1H5.5 M2.5 12.0H5.5 M2.5 14.9H5.5 M2.5 17.8H5.5 M12.2 8.2L13.3 10.6L15.9 11.0L14.0 12.8L14.5 15.4L12.2 14.1L9.9 15.4L10.4 12.8L8.5 11.0L11.1 10.6Z"></path><path d="M19.5 5.5H21.2V8.5H19.5" stroke="#e11d48"></path><path d="M19.5 9.8H21.2V12.8H19.5" stroke="#6366f1"></path><path d="M19.5 14.1H21.2V17.1H19.5" stroke="#f59e0b"></path></svg>`,
    
    // Tia sét / Phản xạ nhanh (Lightning Reflex)
    bolt: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 2.5L5.5 13.5H12L10.5 21.5L18.5 10.5H12L13.5 2.5Z"></path></svg>`,
    
    // Trộn ngẫu nhiên (Shuffle)
    shuffle: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>`,
    
    // Làm lại / Làm mới (Refresh)
    refresh: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 4 22 10 16 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L22 10"></path></svg>`,
    
    // Cảnh báo / Lưu ý bẫy đề thi
    alert: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L2 18a2 2 0 0 0 1.72 3h16.56a2 2 0 0 0 1.72-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    
    // Dấu tích hoàn thành
    check: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    
    // Tích tròn (Đã nhớ)
    checkCircle: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    
    // X tròn (Chưa nhớ)
    xCircle: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    
    // Lật mặt thẻ
    flip: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="2 4 2 10 8 10"></polyline><polyline points="22 20 22 14 16 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L2 10m20 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>`,
    
    // Mũi tên trái & phải
    arrowLeft: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    arrowRight: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    
    // Mắt xem / Ẩn dịch nghĩa
    eye: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-8 10-8 10 8 10 8-3.6 8-10 8-10-8-10-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    eyeOff: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-6 0-10-8-10-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>`,
    
    // Chữ Hán badge / 3x3 Kana/Kanji matrix
    kanjiBadge: `<svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3H21V21H3Z M3 9H21 M3 15H21 M9 3V21 M15 3V21 M4.5 5.0H7.5 M6.0 4.0V7.6 M7.2 5.6C6.6 7.2 4.6 7.6 4.4 6.5C4.2 5.4 6.2 5.0 7.3 5.8C7.8 6.2 7.8 7.3 6.8 7.7 M10.3 5.3H12.6C12.6 6.8 12.3 7.6 11.7 7.6 M11.5 4.2C11.3 5.8 10.8 7.0 10.3 7.7 M13.2 4.8L13.8 6.4 M16.8 4.0V7.8 M16.2 5.4L17.4 4.8L16.3 6.8C17.4 5.2 19.5 5.2 19.5 6.6C19.5 7.5 18.6 7.8 17.8 7.6 M4.3 11.0H6.3 M5.4 10.1C5.2 11.2 4.8 12.2 4.3 13.0 M7.0 10.4L7.7 11.0 M6.6 11.4V13.3C6.6 13.8 5.6 13.8 5.6 13.2C5.6 12.7 6.8 12.7 7.6 13.3 M10.8 10.1V13.8 M10.2 11.4L11.3 10.8L10.3 12.8C11.4 11.0 13.4 11.0 13.4 12.5C13.4 13.4 12.4 13.6 12.4 13.0C12.4 12.5 13.2 12.6 13.8 13.3 M16.5 10.3C16.3 11.5 16.3 12.7 16.5 13.7 M17.4 11.2H19.6 M18.6 10.2V13.3C18.6 13.8 17.5 13.8 17.5 13.2C17.5 12.6 18.8 12.7 19.6 13.4 M4.4 17.0H7.6 M4.6 18.1H7.4 M6.1 16.1V19.4C6.1 19.9 4.9 19.9 4.9 19.3C4.9 18.8 6.4 18.8 7.5 19.5 M10.2 18.4L11.6 16.8L13.8 18.8 M16.6 16.4H19.0L16.8 18.2C18.0 17.6 19.5 18.0 19.5 19.0C19.5 19.7 18.4 19.9 17.3 19.6"></path></svg>`,

    // Cổng Torii Nhật Bản tối giản (Curved double-roof Kasagi, center strut & tie bars)
    torii: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6C8 7.2 16 7.2 21 6L20.2 8C15.5 9 8.5 9 3.8 8Z M4.2 11H19.8 M4.2 12.5H19.8 M12 8.7V11 M7 8.5V21 M8.6 8.6V21 M15.4 8.6V21 M17 8.5V21 M6.2 21H9.4 M14.6 21H17.8"></path></svg>`,

    // Loa phát âm chuẩn SGK Tokyo (Speaker)
    speaker: `<svg class="icon-svg speaker-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`,

    // Thông tin / Giải thích ngữ pháp & từ vựng (Info)
    info: `<svg class="icon-svg info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,

    // Lặp câu thoại / Vòng lặp tuần hoàn (Repeat / Loop)
    repeat: `<svg class="icon-svg repeat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 2 21 6 17 10"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 22 3 18 7 14"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`,

    // Phát âm thanh (Play)
    play: `<svg class="icon-svg play-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,

    // Tạm dừng phát âm (Pause)
    pause: `<svg class="icon-svg pause-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,

    // Đóng popup / bottom sheet (Close)
    close: `<svg class="icon-svg close-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,

    // Mũi tên mở rộng / Accordion & Dropdown Chevron tối giản
    chevronDown: `<svg class="icon-svg accordion-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>`,

    // Mũi tên kép đóng / mở tất cả (Pill Expand / Collapse Chevrons)
    chevronsDown: `<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>`,
    chevronsUp: `<svg class="icon-svg pill-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 11 12 6 17 11"></polyline><polyline points="7 18 12 13 17 18"></polyline></svg>`,

    // Sóng âm hội thoại Kaiwa (9 cột đối xứng chuẩn Proposal 4)
    kaiwaWave: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5V20.5 M10.1 7.5V16.5 M13.9 7.5V16.5 M8.2 5.5V18.5 M15.8 5.5V18.5 M6.3 8.5V15.5 M17.7 8.5V15.5 M4.4 10.2V13.8 M19.6 10.2V13.8 M2.5 11.3V12.7 M21.5 11.3V12.7"></path></svg>`,

    // Ma trận Bộ thủ / 3x3 Radicals Grid
        radicalsGrid: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3H21V21H3Z M3 9H21 M3 15H21 M9 3V21 M15 3V21 M4.5 5.0H7.5 M6.0 4.0V7.6 M7.2 5.6C6.6 7.2 4.6 7.6 4.4 6.5C4.2 5.4 6.2 5.0 7.3 5.8C7.8 6.2 7.8 7.3 6.8 7.7 M10.3 5.3H12.6C12.6 6.8 12.3 7.6 11.7 7.6 M11.5 4.2C11.3 5.8 10.8 7.0 10.3 7.7 M13.2 4.8L13.8 6.4 M16.8 4.0V7.8 M16.2 5.4L17.4 4.8L16.3 6.8C17.4 5.2 19.5 5.2 19.5 6.6C19.5 7.5 18.6 7.8 17.8 7.6 M4.3 11.0H6.3 M5.4 10.1C5.2 11.2 4.8 12.2 4.3 13.0 M7.0 10.4L7.7 11.0 M6.6 11.4V13.3C6.6 13.8 5.6 13.8 5.6 13.2C5.6 12.7 6.8 12.7 7.6 13.3 M10.8 10.1V13.8 M10.2 11.4L11.3 10.8L10.3 12.8C11.4 11.0 13.4 11.0 13.4 12.5C13.4 13.4 12.4 13.6 12.4 13.0C12.4 12.5 13.2 12.6 13.8 13.3 M16.5 10.3C16.3 11.5 16.3 12.7 16.5 13.7 M17.4 11.2H19.6 M18.6 10.2V13.3C18.6 13.8 17.5 13.8 17.5 13.2C17.5 12.6 18.8 12.7 19.6 13.4 M4.4 17.0H7.6 M4.6 18.1H7.4 M6.1 16.1V19.4C6.1 19.9 4.9 19.9 4.9 19.3C4.9 18.8 6.4 18.8 7.5 19.5 M10.2 18.4L11.6 16.8L13.8 18.8 M16.6 16.4H19.0L16.8 18.2C18.0 17.6 19.5 18.0 19.5 19.0C19.5 19.7 18.4 19.9 17.3 19.6"></path></svg>`
  };

  /**
   * HỆ THỐNG BIỂU TƯỢNG VECTOR SVG WA-MODERN MINIMALIST (ACCOUNT & ACHIEVEMENTS)
   * 100% 1.5px Pure Hairline Wireframe (fill="none", zero fill-opacity).
   */
  const ACCOUNT_WA_ICONS = {
    // Header & Tabs
    headerEmblem: `<svg class="wa-icon wa-emblem" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 8.5 6"></path><path d="M12 7v10M7 12h10"></path><path d="M12 9.5c0 1.38-1.12 2.5-2.5 2.5 1.38 0 2.5 1.12 2.5 2.5 0-1.38 1.12-2.5 2.5-2.5-1.38 0-2.5-1.12-2.5-2.5z"></path></svg>`,
    tabProfile: `<svg class="wa-icon wa-tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="7" r="4"></circle><path d="M3 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"></path><path d="M19 8c0 .7-.3 1.3-1 1.3.7 0 1 .6 1 1.3 0-.7.3-1.3 1-1.3-.7 0-1-.6-1-1.3z"></path></svg>`,
    tabAccounts: `<svg class="wa-icon wa-tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="14" rx="3"></rect><path d="M8 2h10a3 3 0 0 1 3 3v10"></path><path d="M6 13h6M6 16h4"></path></svg>`,
    tabLeaderboard: `<svg class="wa-icon wa-tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6-6 6 6-3 10H9L6 9z"></path><path d="M4 19h16"></path><circle cx="12" cy="11" r="1.5"></circle></svg>`,
    tabSync: `<svg class="wa-icon wa-tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 1-15.3 6.3L3 16"></path><path d="M3 21v-5h5"></path><path d="M3 12a9 9 0 0 1 15.3-6.3L21 8"></path><path d="M21 3v5h-5"></path></svg>`,

    // 9 Wa-Modern Kamon Avatars (Section 2 & Master Optical Grid)
    avatars: {
      daruma: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.8C16.6 3.8 19.4 7.0 19.4 12.6C19.4 17.6 16.5 20.4 12 20.4C7.5 20.4 4.6 17.6 4.6 12.6C4.6 7.0 7.4 3.8 12 3.8Z M7.1 11.2C6.8 7.5 8.8 5.2 12 5.2C15.2 5.2 17.2 7.5 16.9 11.2 M7.5 9.5C7.5 6.8 9.4 5.5 12 5.5C14.6 5.5 16.5 6.8 16.5 9.5C16.5 11.5 14.8 12.4 12 12.4C9.2 12.4 7.5 11.5 7.5 9.5Z M8.6 7.4C9.5 8.3 10.6 8.3 11.3 7.5 M15.4 7.4C14.5 8.3 13.4 8.3 12.7 7.5 M9.5 11.3C10.8 10.3 13.2 10.3 14.5 11.3 M6.7 14.4C6.4 16.1 7.1 17.8 8.3 18.6 M8.4 14.9C8.2 16.1 8.6 17.3 9.4 18.0 M17.3 14.4C17.6 16.1 16.9 17.8 15.7 18.6 M15.6 14.9C15.8 16.1 15.4 17.3 14.6 18.0 M10.5 14.4H13.5V18.6H10.5Z M10.5 16.5H13.5"></path><circle cx="9.8" cy="9.2" r="1.1"></circle><circle cx="14.2" cy="9.2" r="1.1"></circle></svg>`,
      samurai: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 10.2L4.2 3.6C4.0 6.8 6.2 9.8 9.6 10.8 M12 10.2L19.8 3.6C20.0 6.8 17.8 9.8 14.4 10.8 M12 7.5L13.2 9.2L12 10.8L10.8 9.2Z M6.5 12.2C6.5 8.8 8.9 6.5 12 6.5C15.1 6.5 17.5 8.8 17.5 12.2L20.5 17.2L17.8 18.8L16.2 15.2 M7.8 15.2L6.2 18.8L3.5 17.2L6.5 12.2 M4.8 14.8H7.5 M16.5 14.8H19.2 M8.2 12.2H15.8L15.0 19.2L12 20.8L9.0 19.2Z M9.2 14.2L11.0 14.8 M14.8 14.2L13.0 14.8 M9.6 17.4C10.8 16.6 13.2 16.6 14.4 17.4 M10.4 19.0H13.6"></path></svg>`,
      sakura: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1.6"></circle><path d="M12 10.4C10.2 7.6 9.2 5.0 10.6 3.2L12 4.6L13.4 3.2C14.8 5.0 13.8 7.6 12 10.4Z M13.5 11.5C16.2 9.8 18.8 9.0 20.4 10.6L18.8 11.8L20.2 13.4C18.2 14.6 15.8 13.4 13.5 11.5Z M13.0 13.3C15.4 15.4 16.8 17.8 15.6 19.8L14.0 18.5L12.8 20.2C11.2 18.6 11.8 15.8 13.0 13.3Z M11.0 13.3C12.2 15.8 12.8 18.6 11.2 20.2L10.0 18.5L8.4 19.8C7.2 17.8 8.6 15.4 11.0 13.3Z M10.5 11.5C8.2 13.4 5.8 14.6 3.8 13.4L5.2 11.8L3.6 10.6C5.2 9.0 7.8 9.8 10.5 11.5Z M12 10.4V7.2 M13.5 11.5L16.5 10.5 M13.0 13.3L14.8 15.8 M11.0 13.3L9.2 15.8 M10.5 11.5L7.5 10.5"></path></svg>`,
      kitsune: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 3.8L10.2 7.8H13.8L18.5 3.8L19.0 11.8C19.0 16.2 15.8 19.6 12 20.8C8.2 19.6 5.0 16.2 5.0 11.8L5.5 3.8Z M6.8 6.2L9.2 8.2L7.0 10.2Z M17.2 6.2L14.8 8.2L17.0 10.2Z M12 8.8L13.0 10.6L12 12.4L11.0 10.6Z M7.5 13.0C8.6 12.2 10.0 12.5 10.6 13.6C9.6 14.2 8.2 14.0 7.5 13.0Z M16.5 13.0C15.4 12.2 14.0 12.5 13.4 13.6C14.4 14.2 15.8 14.0 16.5 13.0Z M6.2 15.4L9.2 16.0 M6.8 17.0L9.4 17.2 M17.8 15.4L14.8 16.0 M17.2 17.0L14.6 17.2 M11.0 17.8L12 18.8L13.0 17.8Z"></path></svg>`,
      neko: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18c0-4.4 2.7-8 6-8s6 3.6 6 8"></path><path d="M7 10L6 4l5 3M17 10l1-6-5 3"></path><path d="M4 19h16"></path><path d="M9 13.5l-2-.5M15 13.5l2-.5"></path><circle cx="12" cy="18" r="1.5"></circle></svg>`,
      ninja: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z"></path><circle cx="12" cy="11" r="2.2"></circle><circle cx="12" cy="11" r="6" stroke-dasharray="2 2"></circle></svg>`,
      fuji: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.2 14.8A7.2 7.2 0 1 1 18.8 14.8 M3 19.5C6.2 16.2 8.4 12.8 9.8 9.5H14.2C15.6 12.8 17.8 16.2 21 19.5 M8.5 12.3L10.3 13.6L12 11.8L13.7 13.6L15.5 12.3 M12 11.8V14.2"></path></svg>`,
      tanuki: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="14" r="7"></circle><path d="M6 10l-2-3 4 1M18 10l2-3-4 1"></path><ellipse cx="9" cy="13.5" rx="2" ry="1.2"></ellipse><ellipse cx="15" cy="13.5" rx="2" ry="1.2"></ellipse><circle cx="9" cy="13.5" r="0.6"></circle><circle cx="15" cy="13.5" r="0.6"></circle><path d="M12 7c-2-2.5 0-4.5 2-4.5s2 2 0 4.5"></path><path d="M10.5 17c1 .6 2 .6 3 0"></path></svg>`,
      guest: `<svg class="wa-avatar-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="8.5" r="3"></circle><path d="M6.5 18c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5"></path></svg>`
    },

    // 5 Rank Crests (Pure Hairline Wireframe)
    ranks: {
      sprout: `<svg class="wa-rank-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21v-8"></path><path d="M12 13c-3-4-7-3-8 1 3 1 7-1 8-1z"></path><path d="M12 10c3-4 7-3 8 1-3 1-7-1-8-1z"></path></svg>`,
      scroll: `<svg class="wa-rank-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 4H8a4 4 0 0 0-4 4v10a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"></path><path d="M6 18a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12"></path><line x1="8" y1="10" x2="14" y2="10"></line><line x1="8" y1="14" x2="12" y2="14"></line></svg>`,
      katana: `<svg class="wa-rank-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="20" x2="18" y2="6"></line><line x1="18" y1="6" x2="20" y2="4"></line><line x1="16" y1="4" x2="20" y2="8"></line><line x1="20" y1="20" x2="6" y2="6"></line><line x1="6" y1="6" x2="4" y2="4"></line><line x1="8" y1="4" x2="4" y2="8"></line></svg>`,
      castle: `<svg class="wa-rank-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 21V9l8-6 8 6v12H4z"></path><path d="M2 9h20M6 13h12M9 17h6M12 3v3"></path></svg>`,
      crown: `<svg class="wa-rank-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18h18v2H3zM4 16l2-10 4 5 2-6 2 6 4-5 2 10H4z"></path><circle cx="12" cy="5" r="1.5"></circle></svg>`
    },

    // 6 Thẻ Thành Tích (Section 2 Optical Grid Wireframe)
    stats: {
      lessons: `<svg class="wa-stat-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6.2C9.8 4.6 6.2 4.3 2.5 5.2V18.2C6.2 17.3 9.8 17.6 12 19.2C14.2 17.6 17.8 17.3 21.5 18.2V5.2C17.8 4.3 14.2 4.6 12 6.2Z M12 6.2V20.5 M2.5 19.8C6.2 19.0 9.8 19.3 12 20.8C14.2 19.3 17.8 19.0 21.5 19.8 M5.2 8.2C6.8 7.8 8.4 7.9 9.6 8.4 M5.2 10.6C6.8 10.2 8.4 10.3 9.6 10.8 M5.2 13.0C6.8 12.6 8.4 12.7 9.6 13.2 M5.2 15.4C6.8 15.0 8.4 15.1 9.6 15.6 M14.4 8.4C15.6 7.9 17.2 7.8 18.8 8.2 M14.4 10.8C15.6 10.3 17.2 10.2 18.8 10.6 M14.4 13.2C15.6 12.7 17.2 12.6 18.8 13.0 M14.4 15.6C15.6 15.1 17.2 15.0 18.8 15.4"></path></svg>`,
      kanji: `<svg class="wa-stat-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 5.2L4.3 5.8 M3.2 7.2L4.1 7.8 M3.3 10.5L4.4 8.8 M5.2 4.2H9.8 M6.4 3.3V5.2 M8.6 3.3V5.2 M5.8 5.6H9.2V7.0H5.8Z M5.4 8.2H9.6 M5.0 9.6H10.0 M7.5 5.6V9.6C7.5 10.6 6.8 11.2 5.6 11.5 M7.7 9.6C8.3 10.4 9.1 11.0 10.1 11.4 M6.5 12.3V13.3 M4.2 13.3H8.8V14.6 M5.2 14.6H7.6L6.6 15.8V18.8C6.6 19.4 6.1 19.6 5.4 19.4 M4.0 16.8H9.2 M12.2 14.6L19.8 6.2C20.5 5.4 21.4 6.3 20.6 7.1L13.5 15.8Z M11.4 15.4L12.7 16.6 M12.2 14.6C10.6 15.2 9.4 16.6 8.8 18.6C8.4 19.8 7.6 20.4 6.8 20.8C8.6 20.6 10.4 19.8 11.6 18.4C12.6 17.3 13.1 16.4 13.5 15.8"></path></svg>`,
      radicals: `<svg class="wa-stat-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3H21V21H3Z M3 9H21 M3 15H21 M9 3V21 M15 3V21 M4.5 5.0H7.5 M6.0 4.0V7.6 M7.2 5.6C6.6 7.2 4.6 7.6 4.4 6.5C4.2 5.4 6.2 5.0 7.3 5.8C7.8 6.2 7.8 7.3 6.8 7.7 M10.3 5.3H12.6C12.6 6.8 12.3 7.6 11.7 7.6 M11.5 4.2C11.3 5.8 10.8 7.0 10.3 7.7 M13.2 4.8L13.8 6.4 M16.8 4.0V7.8 M16.2 5.4L17.4 4.8L16.3 6.8C17.4 5.2 19.5 5.2 19.5 6.6C19.5 7.5 18.6 7.8 17.8 7.6 M4.3 11.0H6.3 M5.4 10.1C5.2 11.2 4.8 12.2 4.3 13.0 M7.0 10.4L7.7 11.0 M6.6 11.4V13.3C6.6 13.8 5.6 13.8 5.6 13.2C5.6 12.7 6.8 12.7 7.6 13.3 M10.8 10.1V13.8 M10.2 11.4L11.3 10.8L10.3 12.8C11.4 11.0 13.4 11.0 13.4 12.5C13.4 13.4 12.4 13.6 12.4 13.0C12.4 12.5 13.2 12.6 13.8 13.3 M16.5 10.3C16.3 11.5 16.3 12.7 16.5 13.7 M17.4 11.2H19.6 M18.6 10.2V13.3C18.6 13.8 17.5 13.8 17.5 13.2C17.5 12.6 18.8 12.7 19.6 13.4 M4.4 17.0H7.6 M4.6 18.1H7.4 M6.1 16.1V19.4C6.1 19.9 4.9 19.9 4.9 19.3C4.9 18.8 6.4 18.8 7.5 19.5 M10.2 18.4L11.6 16.8L13.8 18.8 M16.6 16.4H19.0L16.8 18.2C18.0 17.6 19.5 18.0 19.5 19.0C19.5 19.7 18.4 19.9 17.3 19.6"></path></svg>`,
      quiz: `<svg class="wa-stat-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.8"></circle><path d="M19 5l-5 5"></path><path d="M19 5h-4M19 5v4"></path></svg>`,
      kaiwa: `<svg class="wa-stat-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5V20.5 M10.1 7.5V16.5 M13.9 7.5V16.5 M8.2 5.5V18.5 M15.8 5.5V18.5 M6.3 8.5V15.5 M17.7 8.5V15.5 M4.4 10.2V13.8 M19.6 10.2V13.8 M2.5 11.3V12.7 M21.5 11.3V12.7"></path></svg>`,
      exam: `<svg class="wa-stat-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6C8 7.2 16 7.2 21 6L20.2 8C15.5 9 8.5 9 3.8 8Z M4.2 11H19.8 M4.2 12.5H19.8 M12 8.7V11 M7 8.5V21 M8.6 8.6V21 M15.4 8.6V21 M17 8.5V21 M6.2 21H9.4 M14.6 21H17.8"></path></svg>`
    },

    // Utilities & Sync (100% Hairline Wireframe, zero fill)
    sparkleBulb: `<svg class="wa-util-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path><circle cx="12" cy="12" r="5"></circle></svg>`,
    sectionChart: `<svg class="wa-util-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="4"></line><line x1="12" y1="20" x2="12" y2="10"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    editPen: `<svg class="wa-util-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>`,
    logoutDoor: `<svg class="wa-util-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    deviceCards: `<svg class="wa-util-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    crownBanner: `<svg class="wa-util-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 7l4 12h12l4-12-6 5-4-8-4 8z"></path></svg>`,
    medal1: `<svg class="wa-medal-svg medal-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="14" r="7"></circle><path d="M8.5 2.5L12 9l3.5-6.5"></path><path d="M12 11.5v5"></path></svg>`,
    medal2: `<svg class="wa-medal-svg medal-silver" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="14" r="7"></circle><path d="M8.5 2.5L12 9l3.5-6.5"></path><path d="M10.5 12.5h3l-3 4h3"></path></svg>`,
    medal3: `<svg class="wa-medal-svg medal-bronze" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="14" r="7"></circle><path d="M8.5 2.5L12 9l3.5-6.5"></path><path d="M10.5 12h3l-1.5 2 1.5 2h-3"></path></svg>`,
    starMini: `<svg class="inline-star-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    cloudSync: `<svg class="wa-sync-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"></path><path d="M12 13v6m-3-3l3 3 3-3"></path></svg>`,
    boltZap: `<svg class="wa-util-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 2.5L5.5 13.5H12L10.5 21.5L18.5 10.5H12L13.5 2.5Z"></path></svg>`,
    exportBox: `<svg class="wa-util-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
    keyHash: `<svg class="wa-util-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 2l-2 2m-1.5 1.5L14 9a5 5 0 1 0 3 3l2-2v-2h2v-2h2V4l-2-2z"></path></svg>`,
    downloadJson: `<svg class="wa-util-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>`,
    copyClip: `<svg class="wa-util-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    importBox: `<svg class="wa-util-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    folderFile: `<svg class="wa-util-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`
  };

  /**
   * HỆ THỐNG BIỂU TƯỢNG MASTER SUITE V4 (Section 3: Feature Suite Vector Icons)
   * 100% 1.5px Pure Hairline Wireframe, giới hạn [2, 2] đến [22, 22].
   * Hỗ trợ đầy đủ bộ alias cho tương thích tối đa.
   */
  const MASTER_SUITE_ICONS = {
    // 1. Torii Gate (JLPT)
    torii: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6C8 7.2 16 7.2 21 6L20.2 8C15.5 9 8.5 9 3.8 8Z M4.2 11H19.8 M4.2 12.5H19.8 M12 8.7V11 M7 8.5V21 M8.6 8.6V21 M15.4 8.6V21 M17 8.5V21 M6.2 21H9.4 M14.6 21H17.8"></path></svg>`,
    toriiGate: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6C8 7.2 16 7.2 21 6L20.2 8C15.5 9 8.5 9 3.8 8Z M4.2 11H19.8 M4.2 12.5H19.8 M12 8.7V11 M7 8.5V21 M8.6 8.6V21 M15.4 8.6V21 M17 8.5V21 M6.2 21H9.4 M14.6 21H17.8"></path></svg>`,

    // 2. Lightning Reflex (Conjugation Drill)
    bolt: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 2.5L5.5 13.5H12L10.5 21.5L18.5 10.5H12L13.5 2.5Z"></path></svg>`,
    boltLab: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 2.5L5.5 13.5H12L10.5 21.5L18.5 10.5H12L13.5 2.5Z"></path></svg>`,

    // 3. SRS Notebook (Spiral Notebook with Star & Index Tabs)
    notebook: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 3H17.5A2 2 0 0 1 19.5 5V19A2 2 0 0 1 17.5 21H5.5A1.5 1.5 0 0 1 4 19.5V4.5A1.5 1.5 0 0 1 5.5 3Z M2.5 6.2H5.5 M2.5 9.1H5.5 M2.5 12.0H5.5 M2.5 14.9H5.5 M2.5 17.8H5.5 M12.2 8.2L13.3 10.6L15.9 11.0L14.0 12.8L14.5 15.4L12.2 14.1L9.9 15.4L10.4 12.8L8.5 11.0L11.1 10.6Z"></path><path d="M19.5 5.5H21.2V8.5H19.5" stroke="#e11d48"></path><path d="M19.5 9.8H21.2V12.8H19.5" stroke="#6366f1"></path><path d="M19.5 14.1H21.2V17.1H19.5" stroke="#f59e0b"></path></svg>`,

    // 4. 50-Sound Kana Matrix (Reference Hub 3x3)
    reference: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3H21V21H3Z M3 9H21 M3 15H21 M9 3V21 M15 3V21 M4.5 5.0H7.5 M6.0 4.0V7.6 M7.2 5.6C6.6 7.2 4.6 7.6 4.4 6.5C4.2 5.4 6.2 5.0 7.3 5.8C7.8 6.2 7.8 7.3 6.8 7.7 M10.3 5.3H12.6C12.6 6.8 12.3 7.6 11.7 7.6 M11.5 4.2C11.3 5.8 10.8 7.0 10.3 7.7 M13.2 4.8L13.8 6.4 M16.8 4.0V7.8 M16.2 5.4L17.4 4.8L16.3 6.8C17.4 5.2 19.5 5.2 19.5 6.6C19.5 7.5 18.6 7.8 17.8 7.6 M4.3 11.0H6.3 M5.4 10.1C5.2 11.2 4.8 12.2 4.3 13.0 M7.0 10.4L7.7 11.0 M6.6 11.4V13.3C6.6 13.8 5.6 13.8 5.6 13.2C5.6 12.7 6.8 12.7 7.6 13.3 M10.8 10.1V13.8 M10.2 11.4L11.3 10.8L10.3 12.8C11.4 11.0 13.4 11.0 13.4 12.5C13.4 13.4 12.4 13.6 12.4 13.0C12.4 12.5 13.2 12.6 13.8 13.3 M16.5 10.3C16.3 11.5 16.3 12.7 16.5 13.7 M17.4 11.2H19.6 M18.6 10.2V13.3C18.6 13.8 17.5 13.8 17.5 13.2C17.5 12.6 18.8 12.7 19.6 13.4 M4.4 17.0H7.6 M4.6 18.1H7.4 M6.1 16.1V19.4C6.1 19.9 4.9 19.9 4.9 19.3C4.9 18.8 6.4 18.8 7.5 19.5 M10.2 18.4L11.6 16.8L13.8 18.8 M16.6 16.4H19.0L16.8 18.2C18.0 17.6 19.5 18.0 19.5 19.0C19.5 19.7 18.4 19.9 17.3 19.6"></path></svg>`,
    kanaGrid: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3H21V21H3Z M3 9H21 M3 15H21 M9 3V21 M15 3V21 M4.5 5.0H7.5 M6.0 4.0V7.6 M7.2 5.6C6.6 7.2 4.6 7.6 4.4 6.5C4.2 5.4 6.2 5.0 7.3 5.8C7.8 6.2 7.8 7.3 6.8 7.7 M10.3 5.3H12.6C12.6 6.8 12.3 7.6 11.7 7.6 M11.5 4.2C11.3 5.8 10.8 7.0 10.3 7.7 M13.2 4.8L13.8 6.4 M16.8 4.0V7.8 M16.2 5.4L17.4 4.8L16.3 6.8C17.4 5.2 19.5 5.2 19.5 6.6C19.5 7.5 18.6 7.8 17.8 7.6 M4.3 11.0H6.3 M5.4 10.1C5.2 11.2 4.8 12.2 4.3 13.0 M7.0 10.4L7.7 11.0 M6.6 11.4V13.3C6.6 13.8 5.6 13.8 5.6 13.2C5.6 12.7 6.8 12.7 7.6 13.3 M10.8 10.1V13.8 M10.2 11.4L11.3 10.8L10.3 12.8C11.4 11.0 13.4 11.0 13.4 12.5C13.4 13.4 12.4 13.6 12.4 13.0C12.4 12.5 13.2 12.6 13.8 13.3 M16.5 10.3C16.3 11.5 16.3 12.7 16.5 13.7 M17.4 11.2H19.6 M18.6 10.2V13.3C18.6 13.8 17.5 13.8 17.5 13.2C17.5 12.6 18.8 12.7 19.6 13.4 M4.4 17.0H7.6 M4.6 18.1H7.4 M6.1 16.1V19.4C6.1 19.9 4.9 19.9 4.9 19.3C4.9 18.8 6.4 18.8 7.5 19.5 M10.2 18.4L11.6 16.8L13.8 18.8 M16.6 16.4H19.0L16.8 18.2C18.0 17.6 19.5 18.0 19.5 19.0C19.5 19.7 18.4 19.9 17.3 19.6"></path></svg>`,

    // 5. Streak Meteor Comet
    streakComet: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.8 3.2C16.8 4.8 14.5 7.2 13.2 9.4C14.8 9.2 16.5 8.4 18.2 7.0C16.6 10.2 14.8 12.6 13.6 14.0C15.0 13.8 16.4 13.0 17.6 11.8C15.8 15.6 12.8 18.8 9.6 20.2C6.8 21.4 3.8 19.8 3.2 16.8C2.6 13.8 4.4 10.2 7.8 7.6C11.2 5.0 15.6 3.6 19.8 3.2Z M15.2 2.8L13.6 4.4 M21.2 7.2L19.6 8.8 M19.4 14.8L17.8 16.4" stroke="#e11d48"></path></svg>`,

    // 6. Symmetrical Double-Contour Flame Streak
    flame: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.5 2.5C13.8 5.6 16.8 7.8 17.6 11.2C18.4 10.2 18.8 8.8 18.6 7.5C20.2 9.8 20.5 13.2 19.2 16.2C17.8 19.4 15.0 21.2 12.0 21.2C9.0 21.2 6.2 19.4 4.8 16.2C3.6 13.4 4.2 10.0 6.2 7.6C6.0 9.0 6.6 10.2 7.6 10.8C7.2 7.4 9.6 4.4 12.5 2.5Z M12.2 11.2C13.4 12.8 15.2 14.2 15.2 16.6C15.2 18.6 13.8 20.0 12.0 20.0C10.2 20.0 8.8 18.6 8.8 16.6C8.8 14.6 10.6 13.0 12.2 11.2Z"></path></svg>`,
    flameStreak: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.5 2.5C13.8 5.6 16.8 7.8 17.6 11.2C18.4 10.2 18.8 8.8 18.6 7.5C20.2 9.8 20.5 13.2 19.2 16.2C17.8 19.4 15.0 21.2 12.0 21.2C9.0 21.2 6.2 19.4 4.8 16.2C3.6 13.4 4.2 10.0 6.2 7.6C6.0 9.0 6.6 10.2 7.6 10.8C7.2 7.4 9.6 4.4 12.5 2.5Z M12.2 11.2C13.4 12.8 15.2 14.2 15.2 16.6C15.2 18.6 13.8 20.0 12.0 20.0C10.2 20.0 8.8 18.6 8.8 16.6C8.8 14.6 10.6 13.0 12.2 11.2Z"></path></svg>`,

    // 7. Star Bookmark Ribbon
    star: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"></path><polygon points="12 7 13.2 9.5 16 9.8 14 11.7 14.5 14.5 12 13.2 9.5 14.5 10 11.7 8 9.8 10.8 9.5 12 7"></polygon></svg>`,
    starBookmark: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"></path><polygon points="12 7 13.2 9.5 16 9.8 14 11.7 14.5 14.5 12 13.2 9.5 14.5 10 11.7 8 9.8 10.8 9.5 12 7"></polygon></svg>`,

    // 8. 5-Axis Radar Pentagon
    radar: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5L21 9.0L17.6 19.8H6.4L3 9.0Z" stroke="#e5c178"></path><path d="M12 7.2L16.5 10.5L14.8 15.9H9.2L7.5 10.5Z M12 12V2.5 M12 12L21 9.0 M12 12L17.6 19.8 M12 12L6.4 19.8 M12 12L3 9.0"></path><path d="M12 4.8L18.8 9.8L15.8 18.2H8.2L5.2 9.8Z" stroke="#e11d48"></path></svg>`,
    radarPentagon: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5L21 9.0L17.6 19.8H6.4L3 9.0Z" stroke="#e5c178"></path><path d="M12 7.2L16.5 10.5L14.8 15.9H9.2L7.5 10.5Z M12 12V2.5 M12 12L21 9.0 M12 12L17.6 19.8 M12 12L6.4 19.8 M12 12L3 9.0"></path><path d="M12 4.8L18.8 9.8L15.8 18.2H8.2L5.2 9.8Z" stroke="#e11d48"></path></svg>`,

    // 9. Zen Bronze Temple Bell (Timer)
    timer: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.4 4.5V3.4A1.6 1.6 0 0 1 13.6 3.4V4.5 M6.8 10.2C6.8 6.8 9.1 4.5 12 4.5C14.9 4.5 17.2 6.8 17.2 10.2L18.6 17.5H5.4L6.8 10.2Z M6.2 13.2H17.8 M5.9 15.0H18.1 M4.2 17.5H19.8 M10.2 17.5A1.8 1.8 0 0 0 13.8 17.5"></path></svg>`,
    zenTimer: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.4 4.5V3.4A1.6 1.6 0 0 1 13.6 3.4V4.5 M6.8 10.2C6.8 6.8 9.1 4.5 12 4.5C14.9 4.5 17.2 6.8 17.2 10.2L18.6 17.5H5.4L6.8 10.2Z M6.2 13.2H17.8 M5.9 15.0H18.1 M4.2 17.5H19.8 M10.2 17.5A1.8 1.8 0 0 0 13.8 17.5"></path></svg>`,

    // 10. Podcast Studio Over-Ear Headphones
    headphones: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14.5V12A8 8 0 0 1 20 12V14.5 M6.2 12.2A5.8 5.8 0 0 1 17.8 12.2 M5.8 13.2C7.2 13.2 8.2 14.4 8.2 16.4C8.2 18.4 7.2 19.6 5.8 19.6C4.4 19.6 3.5 18.4 3.5 16.4C3.5 14.4 4.4 13.2 5.8 13.2Z M6.4 14.6V18.2 M18.2 13.2C19.6 13.2 20.5 14.4 20.5 16.4C20.5 18.4 19.6 19.6 18.2 19.6C16.8 19.6 15.8 18.4 15.8 16.4C15.8 14.4 16.8 13.2 18.2 13.2Z M17.6 14.6V18.2"></path></svg>`,

    // 11. Quest Checkbox
    checkCircle: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="8 12 11 15 16 9"></polyline></svg>`,
    checkQuest: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="8 12 11 15 16 9"></polyline></svg>`,

    // 12. Target Bullseye Quest
    target: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line><line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line></svg>`,
    targetQuest: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line><line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line></svg>`,

    // 13. Lightbulb & Sparkle Hint
    lightbulb: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path></svg>`,
    sparkleHint: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path></svg>`,
    sparkles: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2c.5 4.5 4.5 8.5 9 9-4.5.5-8.5 4.5-9 9-.5-4.5-4.5-8.5-9-9 4.5-.5 8.5-4.5 9-9z"></path><path d="M19 4c.2 1.5 1.5 2.8 3 3-1.5.2-2.8 1.5-3 3-.2-1.5-1.5-2.8-3-3 1.5-.2 2.8-1.5 3-3z"></path></svg>`,

    // 14. Soundwave & Speaker
    volume2: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5V20.5 M10.1 7.5V16.5 M13.9 7.5V16.5 M8.2 5.5V18.5 M15.8 5.5V18.5 M6.3 8.5V15.5 M17.7 8.5V15.5 M4.4 10.2V13.8 M19.6 10.2V13.8 M2.5 11.3V12.7 M21.5 11.3V12.7"></path></svg>`,
    speakerWave: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5V20.5 M10.1 7.5V16.5 M13.9 7.5V16.5 M8.2 5.5V18.5 M15.8 5.5V18.5 M6.3 8.5V15.5 M17.7 8.5V15.5 M4.4 10.2V13.8 M19.6 10.2V13.8 M2.5 11.3V12.7 M21.5 11.3V12.7"></path></svg>`,

    // 15. Fullscreen Focus Mode
    fullscreenFocus: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 8 3 3 8 3"></polyline><polyline points="16 3 21 3 21 8"></polyline><polyline points="3 16 3 21 8 21"></polyline><polyline points="16 21 21 21 21 16"></polyline></svg>`,

    // 16. Reset & Rewind Loop
    rotateCcw: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 2.6-6.4L2.5 8"></path><polyline points="2.5 3 2.5 8 7.5 8"></polyline></svg>`,
    resetLoop: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 2.6-6.4L2.5 8"></path><polyline points="2.5 3 2.5 8 7.5 8"></polyline></svg>`,

    // 17. Stop Square
    square: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="4.5" width="15" height="15" rx="2.5"></rect></svg>`,
    stopSquare: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="4.5" width="15" height="15" rx="2.5"></rect></svg>`,

    // 18. Media Controls (Play, Pause, Close)
    play: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    pause: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
    x: `<svg class="icon-svg master-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
  };

  /**
   * Helper 4-Phase O(1) tra cứu biểu tượng an toàn
   * @param {string} name - Tên định danh biểu tượng (key)
   * @param {string} [category] - Phân nhóm tùy chọn ('account', 'masterSuite', 'avatars', 'ranks', 'stats')
   * @returns {string} Chuỗi SVG hợp lệ hoặc chuỗi rỗng
   */
  APP_ICONS.getIcon = function(name, category) {
    // Phase 1 - Guard Clauses & Fail-Fast
    if (!name || typeof name !== 'string') return '';

    // Phase 2 - Data Normalization
    const key = name.trim();
    const cat = typeof category === 'string' ? category.trim() : '';

    // Phase 3 - Pure Deterministic O(1) Lookup
    let icon = '';
    if (cat === 'masterSuite') {
      icon = MASTER_SUITE_ICONS[key] || '';
    } else if (cat && ACCOUNT_WA_ICONS[cat] && typeof ACCOUNT_WA_ICONS[cat] === 'object') {
      icon = ACCOUNT_WA_ICONS[cat][key] || '';
    } else if (cat === 'account') {
      icon = ACCOUNT_WA_ICONS[key] || '';
    } else {
      icon = APP_ICONS[key] || MASTER_SUITE_ICONS[key] || ACCOUNT_WA_ICONS[key] || '';
    }

    // Phase 4 - Safe Pure Output Return
    return typeof icon === 'string' ? icon : '';
  };

  // Gắn nhóm biểu tượng vào APP_ICONS
  APP_ICONS.account = ACCOUNT_WA_ICONS;
  APP_ICONS.masterSuite = MASTER_SUITE_ICONS;

  // Bảo đảm tương thích toàn cầu (UMD)
  if (typeof window !== 'undefined') {
    window.APP_ICONS = APP_ICONS;
    window.ACCOUNT_WA_ICONS = ACCOUNT_WA_ICONS;
    window.MASTER_SUITE_ICONS = MASTER_SUITE_ICONS;
  }
  if (typeof global !== 'undefined') {
    global.APP_ICONS = APP_ICONS;
    global.ACCOUNT_WA_ICONS = ACCOUNT_WA_ICONS;
    global.MASTER_SUITE_ICONS = MASTER_SUITE_ICONS;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_ICONS;
    module.exports.ACCOUNT_WA_ICONS = ACCOUNT_WA_ICONS;
    module.exports.MASTER_SUITE_ICONS = MASTER_SUITE_ICONS;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
