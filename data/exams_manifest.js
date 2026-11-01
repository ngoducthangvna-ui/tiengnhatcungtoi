/**
 * DANH MỤC METADATA 50 ĐỀ THI JLPT N5 & N4 (EXAMS MANIFEST)
 * data/exams_manifest.js
 * --------------------------------------------------------------------------
 * Cung cấp danh sách metadata siêu nhẹ cho toàn bộ 50 đề thi, nạp tức thì
 * vào trang chủ mà không làm tăng dung lượng tải trang.
 */
(function(root) {
  'use strict';

  const EXAMS_MANIFEST = {
  "totalExams": 50,
  "n5Count": 25,
  "n4Count": 25,
  "totalQuestions": 1000,
  "defaultTimeLimitMinutes": 30,
  "passBenchmarkPercent": 60,
  "exams": [
    {
      "id": "exam-n5-01",
      "code": "N5-01",
      "level": "N5",
      "index": 1,
      "title": "Đề N5-01: Trợ từ cơ bản は‧の‧も‧か  & Câu danh từ (Bài 1–2) — Nguồn: Nihongo Quiz N5 & JLPT",
      "minnaLesson": "1–2",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-02",
      "code": "N5-02",
      "level": "N5",
      "index": 2,
      "title": "Đề N5-02: Chỉ định từ ここ‧そこ‧あそこ  & Thời gian に‧から‧まで  (Bài 3–4) — Nguồn: Nihongo NET",
      "minnaLesson": "3–4",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-03",
      "code": "N5-03",
      "level": "N5",
      "index": 3,
      "title": "Đề N5-03: Phương tiện で , Phương hướng へ  & Đồng hành と  (Bài 5) — Nguồn: GoJapan N5 Đề 2",
      "minnaLesson": "5",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-04",
      "code": "N5-04",
      "level": "N5",
      "index": 4,
      "title": "Đề N5-04: Tân ngữ を , Nơi hành động で  & Rủ rê ませんか‧ましょう  (Bài 6) — Nguồn: Nihongo NET Part",
      "minnaLesson": "6",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-05",
      "code": "N5-05",
      "level": "N5",
      "index": 5,
      "title": "Đề N5-05: Công cụ で  & Cho – Nhận あげます‧もらいます  (Bài 7) — Nguồn: Nihongo NET Part 3",
      "minnaLesson": "7",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-06",
      "code": "N5-06",
      "level": "N5",
      "index": 6,
      "title": "Đề N5-06: Tính từ đuôi い  và Tính từ đuôi な  (Bài 8) — Nguồn: Nihongo Quiz N5",
      "minnaLesson": "8",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-07",
      "code": "N5-07",
      "level": "N5",
      "index": 7,
      "title": "Đề N5-07: Sở thích 好き‧上⼿ , Nguyên nhân から  & Phó từ mức độ (Bài 9) — Nguồn: Nihongo NET Part",
      "minnaLesson": "9",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-08",
      "code": "N5-08",
      "level": "N5",
      "index": 8,
      "title": "Đề N5-08: Tồn tại あります‧います , Vị trí & Liệt kê や‧など  (Bài 10) — Nguồn: JLPT Official N5-",
      "minnaLesson": "10",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-09",
      "code": "N5-09",
      "level": "N5",
      "index": 9,
      "title": "Đề N5-09: Lượng từ đếm まい‧にん‧さつ‧ひき  & Khoảng thời gian (Bài 11) — Nguồn: Nihongo Quiz",
      "minnaLesson": "11",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-10",
      "code": "N5-10",
      "level": "N5",
      "index": 10,
      "title": "Đề N5-10: Quá khứ Tính từ & So sánh より‧ほうが‧いちばん  (Bài 12) — Nguồn: Nihongo NET Part 5",
      "minnaLesson": "12",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-11",
      "code": "N5-11",
      "level": "N5",
      "index": 11,
      "title": "Đề N5-11: Mong muốn ほしい‧たいです  & Mục đích に⾏きます  (Bài 13) — Nguồn: JLPT Official N5-",
      "minnaLesson": "13",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-12",
      "code": "N5-12",
      "level": "N5",
      "index": 12,
      "title": "Đề N5-12: Chia thể て , Yêu cầu てください  & Tiếp diễn ています  (Bài 14) — Nguồn: GoJapan N5 Đề 8",
      "minnaLesson": "14",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-13",
      "code": "N5-13",
      "level": "N5",
      "index": 13,
      "title": "Đề N5-13: Xin phép てもいいですか  & Cấm đoán てはいけません  (Bài 15) — Nguồn: Nihongo NET Part 6",
      "minnaLesson": "15",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-14",
      "code": "N5-14",
      "level": "N5",
      "index": 14,
      "title": "Đề N5-14: Nối câu bằng V て‧ A くて‧で  & Trình tự てから  (Bài 16) — Nguồn: Nihongo Quiz N5",
      "minnaLesson": "16",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-15",
      "code": "N5-15",
      "level": "N5",
      "index": 15,
      "title": "Đề N5-15: Thể ない , Yêu cầu ないでください  & なければなりません  (Bài 17) — Nguồn: GoJapan N5 Đề 8",
      "minnaLesson": "17",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-16",
      "code": "N5-16",
      "level": "N5",
      "index": 16,
      "title": "Đề N5-16: Thể từ điển V る , ことができます  & Trước khi まえに  (Bài 18) — Nguồn: Nihongo Quiz N5",
      "minnaLesson": "18",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-17",
      "code": "N5-17",
      "level": "N5",
      "index": 17,
      "title": "Đề N5-17: Thể た , Kinh nghiệm たことがあります  & Liệt kê たり〜たり  (Bài 19) — Nguồn: GoJapan N5 Đề",
      "minnaLesson": "19",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-18",
      "code": "N5-18",
      "level": "N5",
      "index": 18,
      "title": "Đề N5-18: Thể thông thường ( 普通形 ) & Đàm thoại thân mật (Bài 20) — Nguồn: Nihongo NET Part 7",
      "minnaLesson": "20",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-19",
      "code": "N5-19",
      "level": "N5",
      "index": 19,
      "title": "Đề N5-19: Trích dẫn と思います‧と⾔いました  & Xác nhận でしょう  (Bài 21) — Nguồn: Nihongo NET",
      "minnaLesson": "21",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-20",
      "code": "N5-20",
      "level": "N5",
      "index": 20,
      "title": "Đề N5-20: Mệnh đề định ngữ bổ nghĩa danh từ ( 連体修飾  — Bài 22) — Nguồn: Nihongo NET Part 9",
      "minnaLesson": "",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-21",
      "code": "N5-21",
      "level": "N5",
      "index": 21,
      "title": "Đề N5-21: Mệnh đề thời gian とき  & Điều kiện tất yếu と  (Bài 23) — Nguồn: Nihongo NET Part 10",
      "minnaLesson": "23",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-22",
      "code": "N5-22",
      "level": "N5",
      "index": 22,
      "title": "Đề N5-22: Cho – Nhận Hành Động てあげます‧てくれます‧てもらいます  (Bài 24) — Nguồn: Nihongo",
      "minnaLesson": "24",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-23",
      "code": "N5-23",
      "level": "N5",
      "index": 23,
      "title": "Đề N5-23: Giả định たら  & Nhượng bộ ても‧でも  (Bài 25) — Nguồn: Nihongo NET Part 12",
      "minnaLesson": "25",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-24",
      "code": "N5-24",
      "level": "N5",
      "index": 24,
      "title": "Đề N5-24: Tổng ôn Ngữ pháp N5 — Đề Thi Thực Chiến Quốc Tế Số 1 — Nguồn: JLPT Official N5G",
      "minnaLesson": "",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n5-25",
      "code": "N5-25",
      "level": "N5",
      "index": 25,
      "title": "Đề N5-25: Tổng ôn Ngữ pháp N5 — Đề Thi Thực Chiến Quốc Tế Số 2 — Nguồn: Uno Japano N5 (D03)",
      "minnaLesson": "",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-01",
      "code": "N4-01",
      "level": "N4",
      "index": 26,
      "title": "Đề N4-01: Cấu trúc giải thích のです‧んです  & たらいいですか  (Bài 26) — Nguồn: Nihongo NET N4 Part",
      "minnaLesson": "26",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-02",
      "code": "N4-02",
      "level": "N4",
      "index": 27,
      "title": "Đề N4-02: Động từ khả năng ( 可能動詞 ) & みえます‧きこえます  (Bài 27) — Nguồn: Nihongo NET N4",
      "minnaLesson": "27",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-03",
      "code": "N4-03",
      "level": "N4",
      "index": 28,
      "title": "Đề N4-03: Hành động song song ながら , Thói quen ています  & し  (Bài 28) — Nguồn: Nihongo NET N4",
      "minnaLesson": "28",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-04",
      "code": "N4-04",
      "level": "N4",
      "index": 29,
      "title": "Đề N4-04: Trạng thái Tự động từ ています  & Hoàn tất てしまいました  (Bài 29) — Nguồn: Nihongo NET",
      "minnaLesson": "29",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-05",
      "code": "N4-05",
      "level": "N4",
      "index": 30,
      "title": "Đề N4-05: Trạng thái có chủ đích てあります  & Chuẩn bị ておきます  (Bài 30) — Nguồn: Nihongo NET N4",
      "minnaLesson": "30",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-06",
      "code": "N4-06",
      "level": "N4",
      "index": 31,
      "title": "Đề N4-06: Thể ý chí ( 意向形 ), Dự định と思っています  & つもりです  (Bài 31) — Nguồn: Nihongo NET N4",
      "minnaLesson": "31",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-07",
      "code": "N4-07",
      "level": "N4",
      "index": 32,
      "title": "Đề N4-07: Lời khuyên ほうがいいです  & Suy đoán でしょう‧かもしれません  (Bài 32) — Nguồn: Nihongo",
      "minnaLesson": "32",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-08",
      "code": "N4-08",
      "level": "N4",
      "index": 33,
      "title": "Đề N4-08: Thể mệnh lệnh, Cấm chỉ & Định nghĩa という‧という意味  (Bài 33) — Nguồn: Nihongo NET",
      "minnaLesson": "33",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-09",
      "code": "N4-09",
      "level": "N4",
      "index": 34,
      "title": "Đề N4-09: Làm theo とおりに  & Sau khi たあとで‧ないで  (Bài 34) — Nguồn: Nihongo NET N4 Part 9",
      "minnaLesson": "34",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-10",
      "code": "N4-10",
      "level": "N4",
      "index": 35,
      "title": "Đề N4-10: Thể điều kiện ( 条件形  〜ば‧〜なら ) & ば〜ほど  (Bài 35) — Nguồn: Nihongo NET N4 Part 10",
      "minnaLesson": "35",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-11",
      "code": "N4-11",
      "level": "N4",
      "index": 36,
      "title": "Đề N4-11: Mục đích ように  & Biến đổi năng lực ようになりました  (Bài 36) — Nguồn: Nihongo NET N4",
      "minnaLesson": "36",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-12",
      "code": "N4-12",
      "level": "N4",
      "index": 37,
      "title": "Đề N4-12: Thể bị động ( 受⾝動詞  — Trực tiếp & Sở hữu — Bài 37) — Nguồn: Nihongo NET N4 Part 12",
      "minnaLesson": "",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-13",
      "code": "N4-13",
      "level": "N4",
      "index": 38,
      "title": "Đề N4-13: Danh hóa mệnh đề bằng の  ( 〜のは‧〜のが‧〜のを  — Bài 38) — Nguồn: Nihongo NET N4",
      "minnaLesson": "",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-14",
      "code": "N4-14",
      "level": "N4",
      "index": 39,
      "title": "Đề N4-14: Nguyên nhân て‧くて‧で  & Liên từ ので  (Bài 39) — Nguồn: Nihongo NET N4 Part 14",
      "minnaLesson": "39",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-15",
      "code": "N4-15",
      "level": "N4",
      "index": 40,
      "title": "Đề N4-15: Câu hỏi gián tiếp か‧かどうか  & Làm thử てみます  (Bài 40) — Nguồn: Nihongo NET N4 Part",
      "minnaLesson": "40",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-16",
      "code": "N4-16",
      "level": "N4",
      "index": 41,
      "title": "Đề N4-16: Cho – Nhận Kính Ngữ いただきます‧くださいます‧やります  (Bài 41) — Nguồn: Nihongo NET",
      "minnaLesson": "41",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-17",
      "code": "N4-17",
      "level": "N4",
      "index": 42,
      "title": "Đề N4-17: Mục đích ために  & Công dụng のに  (Bài 42) — Nguồn: Nihongo NET N4 Part 17",
      "minnaLesson": "42",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-18",
      "code": "N4-18",
      "level": "N4",
      "index": 43,
      "title": "Đề N4-18: Suy đoán thị giác そうです  & Đi rồi quay lại てきます  (Bài 43) — Nguồn: Nihongo NET N4 Part",
      "minnaLesson": "43",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-19",
      "code": "N4-19",
      "level": "N4",
      "index": 44,
      "title": "Đề N4-19: Quá mức すぎる , Dễ/Khó やすい‧にくい  & Làm cho く / にします  (Bài 44) — Nguồn: Nihongo",
      "minnaLesson": "44",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-20",
      "code": "N4-20",
      "level": "N4",
      "index": 45,
      "title": "Đề N4-20: Trường hợp 場合は  & Trái kỳ vọng のに  (Bài 45) — Nguồn: Nihongo NET N4 Part 20",
      "minnaLesson": "45",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-21",
      "code": "N4-21",
      "level": "N4",
      "index": 46,
      "title": "Đề N4-21: Thời điểm ところだ , Vừa mới たばかり  & Chắc chắn はずだ  (Bài 46) — Nguồn: Nihongo NET",
      "minnaLesson": "46",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-22",
      "code": "N4-22",
      "level": "N4",
      "index": 47,
      "title": "Đề N4-22: Nghe nói そうです  & Hình như ようです  (Bài 47) — Nguồn: Nihongo NET N4 Part 22",
      "minnaLesson": "47",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-23",
      "code": "N4-23",
      "level": "N4",
      "index": 48,
      "title": "Đề N4-23: Thể sai khiến ( 使役動詞 ) & Xin phép させてください  (Bài 48) — Nguồn: Nihongo NET N4 Part",
      "minnaLesson": "48",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-24",
      "code": "N4-24",
      "level": "N4",
      "index": 49,
      "title": "Đề N4-24: Tôn Kính Ngữ ( 尊敬語  — お〜になります‧ Đặc biệt — Bài 49) — Nguồn: Nihongo NET N4 Part",
      "minnaLesson": "",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    },
    {
      "id": "exam-n4-25",
      "code": "N4-25",
      "level": "N4",
      "index": 50,
      "title": "Đề N4-25: Khiêm Nhường Ngữ ( 謙譲語 ) & Quyết Định ことになった  (Bài 50) — Nguồn: Nihongo NET N4",
      "minnaLesson": "50",
      "timeLimitMinutes": 30,
      "questionCount": 20,
      "hasPassage": true
    }
  ]
};

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EXAMS_MANIFEST;
  } else {
    root.EXAMS_MANIFEST = EXAMS_MANIFEST;
  }
})(typeof window !== 'undefined' ? window : global);
