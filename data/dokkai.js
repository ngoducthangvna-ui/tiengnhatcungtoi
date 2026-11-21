// Dữ liệu 50 bài đọc hiểu theo giáo trình Minna no Nihongo (Bài 1 - 50)
const dokkaiData = [
  {
    "id": "dokkai-1",
    "lessonId": "bai-1",
    "title": "Bài Đọc Hiểu - Bài 1 Minna",
    "subTitle": "Thẻ tự giới thiệu bản thân tại lớp học / công ty (Self-introduction card)",
    "description": "Học viên đọc thông tin trên thẻ giới thiệu của một cá nhân để nắm bắt các thông tin cơ bản như tên, quốc tịch, nghề nghiệp và tuổi.",
    "passage": "<ruby>初<rt>はじ</rt></ruby>めまして。\n<ruby>私<rt>わたし</rt></ruby>は ワンです。<ruby>中国<rt>ちゅうごく</rt></ruby>から <ruby>来<rt>き</rt></ruby>ました。\n<ruby>私<rt>わたし</rt></ruby>は <ruby>富士<rt>ふじ</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です。<ruby>医者<rt>いしゃ</rt></ruby>じゃありません。\n２０<ruby>歳<rt>さい</rt></ruby>です。グプタさんも <ruby>富士<rt>ふじ</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です。インド<ruby>人<rt>じん</rt></ruby>です。２５<ruby>歳<rt>さい</rt></ruby>です。\nどうぞ よろしく お<ruby>願<rt>ねが</rt></ruby>いします。",
    "questions": [
      {
        "id": "dk1-1",
        "question": "ワンさんは どこから <ruby>来<rt>き</rt></ruby>ましたか。",
        "options": [
          "<ruby>中国<rt>ちゅうごく</rt></ruby>",
          "アメリカ",
          "<ruby>日本<rt>にほん</rt></ruby>",
          "イギリス"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Quốc tịch]\n• Dịch nghĩa: Bạn Wang đến từ đâu?\n• Quy tắc & Loại trừ: Trong bài viết rõ 「中国から 来ました」. Các phương án 「日本」, 「アメリカ」, 「イギリス」 không có trong bài."
      },
      {
        "id": "dk1-2",
        "question": "ワンさんは <ruby>何歳<rt>なんさい</rt></ruby>ですか。",
        "options": [
          "２２<ruby>歳<rt>さい</rt></ruby>",
          "２１<ruby>歳<rt>さい</rt></ruby>",
          "２０<ruby>歳<rt>さい</rt></ruby>",
          "１９<ruby>歳<rt>さい</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Tuổi tác]\n• Dịch nghĩa: Bạn Wang bao nhiêu tuổi?\n• Quy tắc & Loại trừ: Bài đọc ghi 「２０歳です」. Các con số khác là phương án nhiễu."
      },
      {
        "id": "dk1-3",
        "question": "ワンさんは <ruby>医者<rt>いしゃ</rt></ruby>ですか。",
        "options": [
          "はい、そうです",
          "いいえ、<ruby>医者<rt>いしゃ</rt></ruby>じゃありません",
          "はい、<ruby>医者<rt>いしゃ</rt></ruby>です",
          "はい、<ruby>学生<rt>がくせい</rt></ruby>です"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định | Độ khó: Trung bình | Trọng tâm: Xác nhận nghề nghiệp]\n• Dịch nghĩa: Bạn Wang có phải là bác sĩ không?\n• Quy tắc & Loại trừ: Bài đọc ghi 「医者じゃありません」 (Không phải bác sĩ). Do đó đáp án đúng là 「いいえ、医者じゃありません」. Các câu trả lời 「はい」 đều sai về mặt logic thông tin."
      },
      {
        "id": "dk1-4",
        "question": "ワンさんと グプタさんについて、どれが <ruby>正<rt>ただ</rt></ruby>しいですか。",
        "options": [
          "ワンさんは <ruby>富士<rt>ふじ</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です",
          "ワンさんは <ruby>銀行員<rt>ぎんこういん</rt></ruby>です",
          "ワンさんは <ruby>先生<rt>せんせい</rt></ruby>です",
          "ワンさんは <ruby>日本<rt>にほん</rt></ruby><ruby>人<rt>じん</rt></ruby>です"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định đúng sai | Độ khó: Trung bình | Trọng tâm: Tổng hợp thông tin]\n• Dịch nghĩa: Câu nào sau đây là đúng?\n• Quy tắc & Loại trừ: Bài đọc xác nhận 「富士大学の 学生です」. Các câu khác sai vì Wang là người Trung Quốc, không phải giáo viên hay nhân viên ngân hàng."
      },
      {
        "id": "dk1-5",
        "question": "ワンさんの <ruby>大学<rt>だいがく</rt></ruby>は どこですか。",
        "options": [
          "さくら<ruby>大学<rt>だいがく</rt></ruby>",
          "AKC<ruby>研究所<rt>けんきゅうじょ</rt></ruby>",
          "IMC<ruby>会社<rt>かいしゃ</rt></ruby>",
          "<ruby>富士<rt>ふじ</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Tên tổ chức]\n• Dịch nghĩa: Trường đại học của Wang là trường nào?\n• Quy tắc & Loại trừ: Bài đọc nêu rõ 「富士大学」. 「さくら大学」 là tên giả định khác, 「IMC」 và 「AKC」 là tên công ty/viện nghiên cứu."
      }
    ],
    "translation": "Rất vui được gặp bạn.\nTôi là Wang. Tôi đến từ Trung Quốc.\nTôi là sinh viên của trường đại học Fuji. Tôi không phải là bác sĩ.\nTôi 20 tuổi. Anh Gupta cũng là sinh viên của trường đại học Fuji. Anh ấy là người Ấn Độ, 25 tuổi.\nRất mong nhận được sự giúp đỡ của bạn."
  },
  {
    "id": "dokkai-2",
    "lessonId": "bai-2",
    "title": "Bài Đọc Hiểu - Bài 2 Minna",
    "subTitle": "Nhãn ghi chú đồ dùng cá nhân trên bàn làm việc (Desk item memo/tag)",
    "description": "Đọc đoạn văn ngắn về các đồ vật trên bàn làm việc và trả lời câu hỏi.",
    "passage": "これは <ruby>私<rt>わたし</rt></ruby>の <ruby>机<rt>つくえ</rt></ruby>です。この <ruby>本<rt>ほん</rt></ruby>と この <ruby>鉛筆<rt>えんぴつ</rt></ruby>は <ruby>私<rt>わたし</rt></ruby>の <ruby>物<rt>もの</rt></ruby>です。その <ruby>英語<rt>えいご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>は <ruby>田中<rt>たなか</rt></ruby>さんの <ruby>辞書<rt>じしょ</rt></ruby>です。あの <ruby>鞄<rt>かばん</rt></ruby>は <ruby>佐藤<rt>さとう</rt></ruby>さんの <ruby>鞄<rt>かばん</rt></ruby>です。それは <ruby>自動車<rt>じどうしゃ</rt></ruby>の <ruby>雑誌<rt>ざっし</rt></ruby>です。<ruby>私<rt>わたし</rt></ruby>の <ruby>雑誌<rt>ざっし</rt></ruby>じゃありません。この <ruby>鍵<rt>かぎ</rt></ruby>も <ruby>私<rt>わたし</rt></ruby>の <ruby>物<rt>もの</rt></ruby>です。",
    "questions": [
      {
        "id": "dk2-1",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんの <ruby>辞書<rt>じしょ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>ですか。",
        "options": [
          "<ruby>自動車<rt>じどうしゃ</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>です",
          "カメラの <ruby>辞書<rt>じしょ</rt></ruby>です",
          "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>です",
          "<ruby>英語<rt>えいご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>です"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Nội dung đồ vật]\n• Dịch nghĩa: Từ điển của anh Tanaka là từ điển gì?\n• Quy tắc & Loại trừ: Đoạn văn ghi rõ 「その英語の辞書は田中さんの辞書です」, nên đó là từ điển tiếng Anh."
      },
      {
        "id": "dk2-2",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby>さんの <ruby>物<rt>もの</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>本<rt>ほん</rt></ruby>です",
          "<ruby>鞄<rt>かばん</rt></ruby>です",
          "<ruby>鍵<rt>かぎ</rt></ruby>です",
          "<ruby>辞書<rt>じしょ</rt></ruby>です"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Xác định chủ sở hữu]\n• Dịch nghĩa: Đồ của chị Sato là cái gì?\n• Quy tắc & Loại trừ: Bài viết 「あの鞄は佐藤さんの鞄です」, nên đồ của chị Sato là cái cặp."
      },
      {
        "id": "dk2-3",
        "question": "その <ruby>自動車<rt>じどうしゃ</rt></ruby>の <ruby>雑誌<rt>ざっし</rt></ruby>は <ruby>私<rt>わたし</rt></ruby>の <ruby>雑誌<rt>ざっし</rt></ruby>ですか。",
        "options": [
          "<ruby>佐藤<rt>さとう</rt></ruby>さんの <ruby>鞄<rt>かばん</rt></ruby>です",
          "はい、そうです",
          "いいえ、<ruby>私<rt>わたし</rt></ruby>の <ruby>雑誌<rt>ざっし</rt></ruby>じゃありません",
          "はい、<ruby>私<rt>わたし</rt></ruby>の <ruby>雑誌<rt>ざっし</rt></ruby>です"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định | Độ khó: Dễ | Trọng tâm: Phủ định sở hữu]\n• Dịch nghĩa: Quyển tạp chí ô tô đó có phải tạp chí của tôi không?\n• Quy tắc & Loại trừ: Bài viết 「私の雑誌じゃありません」 nên đáp án phủ định là chính xác."
      },
      {
        "id": "dk2-4",
        "question": "<ruby>机<rt>つくえ</rt></ruby>と <ruby>鍵<rt>かぎ</rt></ruby>の <ruby>持<rt>も</rt></ruby>ち<ruby>主<rt>ぬし</rt></ruby>について、どれが <ruby>正<rt>ただ</rt></ruby>しいですか。",
        "options": [
          "<ruby>机<rt>つくえ</rt></ruby>と <ruby>鍵<rt>かぎ</rt></ruby>は <ruby>私<rt>わたし</rt></ruby>の <ruby>物<rt>もの</rt></ruby>です",
          "<ruby>本<rt>ほん</rt></ruby>は <ruby>佐藤<rt>さとう</rt></ruby>さんの <ruby>物<rt>もの</rt></ruby>です",
          "<ruby>辞書<rt>じしょ</rt></ruby>は <ruby>私<rt>わたし</rt></ruby>の <ruby>物<rt>もの</rt></ruby>です",
          "<ruby>鞄<rt>かばん</rt></ruby>は <ruby>田中<rt>たなか</rt></ruby>さんの <ruby>物<rt>もの</rt></ruby>です"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Về chủ sở hữu của bàn và chìa khóa, câu nào đúng?\n• Quy tắc & Loại trừ: Bài viết 「これは私の机です」 và 「この鍵も私の物です」, nên câu đầu tiên là đúng."
      },
      {
        "id": "dk2-5",
        "question": "<ruby>私<rt>わたし</rt></ruby>の <ruby>物<rt>もの</rt></ruby>は どれですか。",
        "options": [
          "<ruby>辞書<rt>じしょ</rt></ruby>と <ruby>雑誌<rt>ざっし</rt></ruby>です",
          "<ruby>本<rt>ほん</rt></ruby>と <ruby>鉛筆<rt>えんぴつ</rt></ruby>と <ruby>鍵<rt>かぎ</rt></ruby>です",
          "<ruby>自動車<rt>じどうしゃ</rt></ruby>の <ruby>雑誌<rt>ざっし</rt></ruby>と <ruby>鞄<rt>かばん</rt></ruby>です",
          "<ruby>英語<rt>えいご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>と <ruby>鞄<rt>かばん</rt></ruby>です"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Tổng hợp | Độ khó: Trung bình | Trọng tâm: Liệt kê đồ vật của tôi]\n• Dịch nghĩa: Đồ của tôi là những thứ nào?\n• Quy tắc & Loại trừ: Bài nêu rõ sách, bút chì và chìa khóa là đồ của tôi."
      }
    ],
    "translation": "Đây là bàn của tôi. Quyển sách này và cây bút chì này là đồ của tôi. Quyển từ điển tiếng Anh đó là từ điển của anh Tanaka. Cái cặp kia là cặp của chị Sato. Đó là tạp chí về ô tô. Không phải tạp chí của tôi. Chìa khóa này cũng là đồ của tôi."
  },
  {
    "id": "dokkai-3",
    "lessonId": "bai-3",
    "title": "Bài Đọc Hiểu - Bài 3 Minna",
    "subTitle": "Sơ đồ tầng trung tâm thương mại / tòa nhà (Department store floor directory)",
    "description": "Đọc sơ đồ tầng của một tòa nhà để xác định vị trí các phòng ban và dịch vụ.",
    "passage": "ここは <ruby>研修<rt>けんしゅう</rt></ruby>センターです。<ruby>受付<rt>うけつけ</rt></ruby>と ロビーは <ruby>一<rt>いち</rt></ruby><ruby>階<rt>かい</rt></ruby>です。<ruby>食堂<rt>しょくどう</rt></ruby>は <ruby>地下<rt>ちか</rt></ruby>です。<ruby>会議室<rt>かいぎしつ</rt></ruby>は <ruby>二<rt>に</rt></ruby><ruby>階<rt>かい</rt></ruby>です。<ruby>事務所<rt>じむしょ</rt></ruby>と <ruby>教室<rt>きょうしつ</rt></ruby>は <ruby>三<rt>さん</rt></ruby><ruby>階<rt>かい</rt></ruby>です。<ruby>部屋<rt>へや</rt></ruby>は <ruby>四<rt>よん</rt></ruby><ruby>階<rt>かい</rt></ruby>です。<ruby>電話<rt>でんわ</rt></ruby>は <ruby>受付<rt>うけつけ</rt></ruby>の <ruby>横<rt>よこ</rt></ruby>です。お<ruby>手洗<rt>てあらい</rt></ruby>いは <ruby>階段<rt>かいだん</rt></ruby>の あちらです。",
    "questions": [
      {
        "id": "dk3-1",
        "question": "<ruby>食堂<rt>しょくどう</rt></ruby>は どこですか。",
        "options": [
          "<ruby>一<rt>いち</rt></ruby><ruby>階<rt>かい</rt></ruby>です",
          "<ruby>二<rt>に</rt></ruby><ruby>階<rt>かい</rt></ruby>です",
          "<ruby>三<rt>さん</rt></ruby><ruby>階<rt>かい</rt></ruby>です",
          "<ruby>地下<rt>ちか</rt></ruby>です"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Vị trí]\n• Dịch nghĩa: Nhà ăn ở đâu? - Ở tầng hầm.\n• Quy tắc & Loại trừ: Dựa vào câu 「食堂は地下です」 trong bài đọc."
      },
      {
        "id": "dk3-2",
        "question": "<ruby>会議室<rt>かいぎしつ</rt></ruby>は <ruby>何<rt>なん</rt></ruby><ruby>階<rt>かい</rt></ruby>ですか。",
        "options": [
          "<ruby>地下<rt>ちか</rt></ruby>です",
          "<ruby>一<rt>いち</rt></ruby><ruby>階<rt>かい</rt></ruby>です",
          "<ruby>二<rt>に</rt></ruby><ruby>階<rt>かい</rt></ruby>です",
          "<ruby>三<rt>さん</rt></ruby><ruby>階<rt>かい</rt></ruby>です"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Vị trí]\n• Dịch nghĩa: Phòng họp ở tầng mấy? - Ở tầng 2.\n• Quy tắc & Loại trừ: Dựa vào câu 「会議室は二階です」 trong bài đọc."
      },
      {
        "id": "dk3-3",
        "question": "<ruby>電話<rt>でんわ</rt></ruby>は どこですか。",
        "options": [
          "<ruby>会議室<rt>かいぎしつ</rt></ruby>の<ruby>横<rt>よこ</rt></ruby>です",
          "<ruby>受付<rt>うけつけ</rt></ruby>の<ruby>横<rt>よこ</rt></ruby>です",
          "<ruby>事務所<rt>じむしょ</rt></ruby>の<ruby>横<rt>よこ</rt></ruby>です",
          "<ruby>食堂<rt>しょくどう</rt></ruby>の<ruby>横<rt>よこ</rt></ruby>です"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Vị trí]\n• Dịch nghĩa: Điện thoại ở đâu? - Ở bên cạnh quầy tiếp tân.\n• Quy tắc & Loại trừ: Dựa vào câu 「電話は受付の横です」 trong bài đọc."
      },
      {
        "id": "dk3-4",
        "question": "この <ruby>建物<rt>たてもの</rt></ruby>の <ruby>階<rt>かい</rt></ruby>について、どれが <ruby>正<rt>ただ</rt></ruby>しいですか。",
        "options": [
          "<ruby>事務所<rt>じむしょ</rt></ruby>は<ruby>一<rt>いち</rt></ruby><ruby>階<rt>かい</rt></ruby>です",
          "<ruby>受付<rt>うけつけ</rt></ruby>は<ruby>三<rt>さん</rt></ruby><ruby>階<rt>かい</rt></ruby>です",
          "<ruby>事務所<rt>じむしょ</rt></ruby>は<ruby>三<rt>さん</rt></ruby><ruby>階<rt>かい</rt></ruby>です",
          "<ruby>食堂<rt>しょくどう</rt></ruby>は<ruby>二<rt>に</rt></ruby><ruby>階<rt>かい</rt></ruby>です"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Đối chiếu thông tin]\n• Dịch nghĩa: Câu nào đúng? - Văn phòng ở tầng 3.\n• Quy tắc & Loại trừ: Đối chiếu với bài đọc, chỉ có 「事務所は三階です」 là thông tin chính xác."
      },
      {
        "id": "dk3-5",
        "question": "この<ruby>建物<rt>たてもの</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>研修センター<rt>けんしゅうセンター</rt></ruby>です",
          "<ruby>店<rt>みせ</rt></ruby>です",
          "<ruby>会社<rt>かいしゃ</rt></ruby>です",
          "<ruby>家<rt>いえ</rt></ruby>です"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Nội dung chính]\n• Dịch nghĩa: Tòa nhà này là gì? - Là trung tâm thực tập.\n• Quy tắc & Loại trừ: Dựa vào câu đầu tiên 「ここは研修センターです」."
      }
    ],
    "translation": "Đây là trung tâm thực tập. Quầy tiếp tân và sảnh ở tầng 1. Nhà ăn ở dưới tầng hầm. Phòng họp ở tầng 2. Văn phòng và phòng học ở tầng 3. Các phòng ở tầng 4. Điện thoại ở bên cạnh quầy tiếp tân. Nhà vệ sinh ở phía đằng kia gần cầu thang."
  },
  {
    "id": "dokkai-4",
    "lessonId": "bai-4",
    "title": "Bài Đọc Hiểu - Bài 4 Minna",
    "subTitle": "Bảng giờ mở cửa ngân hàng / bưu điện / thư viện (Facility opening hours notice)",
    "description": "Đọc hiểu thông báo về thời gian hoạt động của các cơ sở công cộng.",
    "passage": "<ruby>銀行<rt>ぎんこう</rt></ruby>は <ruby>午前<rt>ごぜん</rt></ruby> <ruby>九時<rt>くじ</rt></ruby>から <ruby>午後<rt>ごご</rt></ruby> <ruby>三時<rt>さんじ</rt></ruby>までです。<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は <ruby>午前<rt>ごぜん</rt></ruby> <ruby>九時<rt>くじ</rt></ruby>から <ruby>午後<rt>ごご</rt></ruby> <ruby>五時<rt>ごじ</rt></ruby>までです。<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>午前<rt>ごぜん</rt></ruby> <ruby>九時<rt>くじ</rt></ruby>から <ruby>午後<rt>ごご</rt></ruby> <ruby>七時<rt>しちじ</rt></ruby>までです。<ruby>銀行<rt>ぎんこう</rt></ruby>と <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の <ruby>休<rt>やす</rt></ruby>みは <ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby>です。<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>水曜日<rt>すいようび</rt></ruby>が <ruby>休<rt>やす</rt></ruby>みです。",
    "questions": [
      {
        "id": "dk4-1",
        "question": "<ruby>銀行<rt>ぎんこう</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>までですか。",
        "options": [
          "<ruby>五時<rt>ごじ</rt></ruby>までです",
          "<ruby>七時<rt>しちじ</rt></ruby>までです",
          "<ruby>九時<rt>くじ</rt></ruby>までです",
          "<ruby>三時<rt>さんじ</rt></ruby>までです"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Đọc thông tin thời gian]\n• Dịch nghĩa: Ngân hàng mở đến mấy giờ? - Đến 3 giờ.\n• Quy tắc & Loại trừ: Thông tin trong bài ghi rõ ngân hàng đến 3 giờ, các phương án khác là giờ của bưu điện hoặc thư viện."
      },
      {
        "id": "dk4-2",
        "question": "<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>からですか。",
        "options": [
          "<ruby>五時<rt>ごじ</rt></ruby>からです",
          "<ruby>九時<rt>くじ</rt></ruby>からです",
          "<ruby>七時<rt>しちじ</rt></ruby>からです",
          "<ruby>三時<rt>さんじ</rt></ruby>からです"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Đọc thông tin thời gian]\n• Dịch nghĩa: Thư viện mở từ mấy giờ? - Từ 9 giờ.\n• Quy tắc & Loại trừ: Bài ghi thư viện mở từ 9 giờ, các phương án khác sai mốc thời gian."
      },
      {
        "id": "dk4-3",
        "question": "<ruby>土曜日<rt>どようび</rt></ruby>に <ruby>銀行<rt>ぎんこう</rt></ruby>と <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みですか。",
        "options": [
          "いいえ、<ruby>九時<rt>くじ</rt></ruby>からです",
          "いいえ、<ruby>五時<rt>ごじ</rt></ruby>までです",
          "<ruby>水曜日<rt>すいようび</rt></ruby>が <ruby>休<rt>やす</rt></ruby>みです",
          "はい、<ruby>休<rt>やす</rt></ruby>みです"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Xác nhận | Độ khó: Trung bình | Trọng tâm: Đọc thông tin ngày nghỉ]\n• Dịch nghĩa: Thứ Bảy ngân hàng và bưu điện có nghỉ không? - Vâng, nghỉ.\n• Quy tắc & Loại trừ: Bài ghi rõ ngày nghỉ của ngân hàng và bưu điện là thứ Bảy và Chủ Nhật."
      },
      {
        "id": "dk4-4",
        "question": "<ruby>銀行<rt>ぎんこう</rt></ruby>や <ruby>図書館<rt>としょかん</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>について、どれが <ruby>正<rt>ただ</rt></ruby>しいですか。",
        "options": [
          "<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>三時<rt>さんじ</rt></ruby>までです",
          "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は <ruby>七時<rt>しちじ</rt></ruby>までです",
          "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は <ruby>五時<rt>ごじ</rt></ruby>までです",
          "<ruby>銀行<rt>ぎんこう</rt></ruby>は <ruby>五時<rt>ごじ</rt></ruby>までです"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Đối chiếu thông tin]\n• Dịch nghĩa: Câu nào đúng? - Bưu điện đến 5 giờ.\n• Quy tắc & Loại trừ: Thông tin bưu điện đến 5 giờ là chính xác theo bài đọc, các câu khác sai thời gian."
      },
      {
        "id": "dk4-5",
        "question": "<ruby>水曜日<rt>すいようび</rt></ruby>が <ruby>休<rt>やす</rt></ruby>みの ところは どこですか。",
        "options": [
          "<ruby>図書館<rt>としょかん</rt></ruby>",
          "<ruby>銀行<rt>ぎんこう</rt></ruby>と <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>",
          "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>",
          "<ruby>銀行<rt>ぎんこう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Trung bình | Trọng tâm: Tìm địa điểm theo ngày nghỉ]\n• Dịch nghĩa: Nơi nào nghỉ vào thứ Tư? - Thư viện.\n• Quy tắc & Loại trừ: Bài ghi rõ 「図書館は 水曜日が 休みです」."
      }
    ],
    "translation": "Ngân hàng mở cửa từ 9 giờ sáng đến 3 giờ chiều. Bưu điện mở cửa từ 9 giờ sáng đến 5 giờ chiều. Thư viện mở cửa từ 9 giờ sáng đến 7 giờ tối. Ngày nghỉ của ngân hàng và bưu điện là thứ Bảy và Chủ Nhật. Thư viện nghỉ vào thứ Tư."
  },
  {
    "id": "dokkai-5",
    "lessonId": "bai-5",
    "title": "Bài Đọc Hiểu - Bài 5 Minna",
    "subTitle": "Lịch trình tàu điện & phương tiện đi lại cuối tuần (Weekend transit timetable)",
    "description": "Đọc đoạn văn ngắn về lịch trình đi lại trong tuần và cuối tuần để luyện tập các trợ từ chỉ phương hướng, phương tiện và thời gian.",
    "passage": "わたしは <ruby>毎週<rt>まいしゅう</rt></ruby> <ruby>土曜日<rt>どようび</rt></ruby>に <ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>東京<rt>とうきょう</rt></ruby>の <ruby>学校<rt>がっこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>家<rt>いえ</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>ります。どこも <ruby>行<rt>い</rt></ruby>きません。<ruby>月曜日<rt>げつようび</rt></ruby>から <ruby>金曜日<rt>きんようび</rt></ruby>まで <ruby>地下鉄<rt>ちかてつ</rt></ruby>で <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>先月<rt>せんげつ</rt></ruby> <ruby>友達<rt>ともだち</rt></ruby>と <ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>来週<rt>らいしゅう</rt></ruby>も <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。",
    "questions": [
      {
        "id": "dk5-1",
        "question": "<ruby>土曜日<rt>どようび</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "とうきょうの がっこうへ <ruby>行<rt>い</rt></ruby>きます",
          "いえへ <ruby>帰<rt>かえ</rt></ruby>ります",
          "どこも <ruby>行<rt>い</rt></ruby>きません",
          "かいしゃへ <ruby>行<rt>い</rt></ruby>きます"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Xác định địa điểm theo ngày trong tuần]\n• Dịch nghĩa: Thứ Bảy đi đâu?\n• Quy tắc & Loại trừ: Dựa vào câu 「毎週土曜日に電車で東京の学校へ行きます」, đáp án chính xác là 「とうきょうの がっこうへ 行きます」. Các phương án về về nhà, đi công ty hay không đi đâu đều sai mốc thời gian thứ Bảy."
      },
      {
        "id": "dk5-2",
        "question": "<ruby>土曜日<rt>どようび</rt></ruby> <ruby>何<rt>なに</rt></ruby>で <ruby>学校<rt>がっこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "バスで <ruby>行<rt>い</rt></ruby>きます",
          "でんしゃで <ruby>行<rt>い</rt></ruby>きます",
          "ちかてつで <ruby>行<rt>い</rt></ruby>きます",
          "あるいて <ruby>行<rt>い</rt></ruby>きます"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết phương tiện | Độ khó: Dễ | Trọng tâm: Liên kết phương tiện với hoạt động đi lại]\n• Dịch nghĩa: Thứ Bảy đi đến trường bằng gì?\n• Quy tắc & Loại trừ: Trong bài đọc ghi rõ 「電車で東京の学校へ行きます」, nên đáp án đúng là 「でんしゃで 行きます」. Các phương án tàu điện ngầm, đi bộ hay xe buýt không khớp với văn bản."
      },
      {
        "id": "dk5-3",
        "question": "<ruby>日曜日<rt>にちようび</rt></ruby>の ことに ついて、どれが <ruby>正<rt>ただ</rt></ruby>しいですか。",
        "options": [
          "いえに <ruby>帰<rt>かえ</rt></ruby>ります",
          "かいしゃへ <ruby>行<rt>い</rt></ruby>きます",
          "どこも <ruby>行<rt>い</rt></ruby>きません",
          "がっこうへ <ruby>行<rt>い</rt></ruby>きます"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định và ngoại lệ | Độ khó: Trung bình | Trọng tâm: Xác định hành động ngày Chủ nhật]\n• Dịch nghĩa: Về ngày Chủ nhật, câu nào sau đây là đúng?\n• Quy tắc & Loại trừ: Văn bản nêu 「日曜日は家に帰ります」, do đó 「いえに 帰ります」 là đúng. Các phương án khác đi trường học, công ty hoặc không đi đâu đều trái ngược với nội dung."
      },
      {
        "id": "dk5-4",
        "question": "<ruby>月曜日<rt>げつようび</rt></ruby>から <ruby>日曜日<rt>にちようび</rt></ruby>までの ことで、どれが <ruby>正<rt>ただ</rt></ruby>しいですか。",
        "options": [
          "<ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby> <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
          "<ruby>月曜日<rt>げつようび</rt></ruby>から <ruby>金曜日<rt>きんようび</rt></ruby>まで <ruby>学校<rt>がっこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
          "<ruby>金曜日<rt>きんようび</rt></ruby> <ruby>家<rt>いえ</rt></ruby>に <ruby>帰<rt>かえ</rt></ruby>ります",
          "<ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>地下鉄<rt>ちかてつ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định khớp nội dung | Độ khó: Trung bình | Trọng tâm: Kiểm tra độ chính xác toàn văn bản]\n• Dịch nghĩa: Câu nào là câu đúng?\n• Quy tắc & Loại trừ: Câu 「会社へ地下鉄で行きます」 khớp hoàn toàn với câu cuối của bài đọc. Các phương án khác gộp sai mốc thời gian hoặc địa điểm so với thực tế bài viết."
      },
      {
        "id": "dk5-5",
        "question": "<ruby>月曜日<rt>げつようび</rt></ruby>から <ruby>金曜日<rt>きんようび</rt></ruby>まで どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "どこも <ruby>行<rt>い</rt></ruby>きません",
          "がっこうへ <ruby>行<rt>い</rt></ruby>きます",
          "かいしゃへ <ruby>行<rt>い</rt></ruby>きます",
          "いえへ <ruby>帰<rt>かえ</rt></ruby>ります"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính và thông tin khoảng thời gian | Độ khó: Dễ | Trọng tâm: N1 から N2 まで đi với địa điểm]\n• Dịch nghĩa: Từ thứ Hai đến thứ Sáu đi đâu?\n• Quy tắc & Loại trừ: Bài đọc ghi 「月曜日から金曜日まで会社へ行きます」, nên đáp án đúng là 「かいしゃへ 行きます」. Các phương án trường học, về nhà hay không đi đâu sai lệch hoàn toàn."
      }
    ],
    "translation": "Tôi đi đến trường ở Tokyo bằng tàu điện vào mỗi thứ Bảy hàng tuần. Chủ Nhật tôi về nhà. Tôi không đi đâu cả. Từ thứ Hai đến thứ Sáu tôi đi đến công ty bằng tàu điện ngầm. Tháng trước tôi đã đi Osaka cùng bạn bằng tàu Shinkansen. Tuần sau tôi cũng sẽ đi Tokyo."
  },
  {
    "id": "dokkai-6",
    "lessonId": "bai-6",
    "title": "Bài Đọc Hiểu - Bài 6 Minna",
    "subTitle": "Tin nhắn rủ bạn cùng ăn trưa / xem phim (Short invitation message)",
    "description": "Đọc đoạn tin nhắn ngắn rủ bạn đi ăn và xem phim, sau đó trả lời các câu hỏi kiểm tra chi tiết nội dung và ngữ pháp Bài 6.",
    "passage": "<ruby>田中<rt>たなか</rt></ruby>さん、<ruby>明日<rt>あした</rt></ruby> <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べませんか。\n12<ruby>時<rt>じ</rt></ruby>に <ruby>駅<rt>えき</rt></ruby>で <ruby>会<rt>あ</rt></ruby>います。\nそれから、レストランで パンと <ruby>肉<rt>にく</rt></ruby>を <ruby>食<rt>た</rt></ruby>べます。\n<ruby>午後<rt>ごご</rt></ruby>2<ruby>時<rt>じ</rt></ruby>に <ruby>映画館<rt>えいがかん</rt></ruby>で <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます。\n<ruby>午後<rt>ごご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>に <ruby>喫茶店<rt>きっさてん</rt></ruby>で コーヒーを <ruby>飲<rt>の</rt></ruby>みませんか。",
    "questions": [
      {
        "id": "dk6-1",
        "question": "<ruby>明日<rt>あした</rt></ruby>、どこで <ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか。",
        "options": [
          "<ruby>映画館<rt>えいがかん</rt></ruby>",
          "<ruby>庭<rt>にわ</rt></ruby>",
          "レストラン",
          "<ruby>公園<rt>こうえん</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết địa điểm ăn trưa | Độ khó: Dễ | Trọng tâm: Khớp thông tin レストラン trong bài đọc]\n• Dịch nghĩa: Ngày mai ăn trưa ở đâu?\n• Quy tắc & Loại trừ: Bài đọc ghi rõ 「レストランで パンと肉を食べます」, do đó đáp án đúng là 「レストラン」. Các địa điểm 「映画館」, 「公園」, 「庭」 không phải nơi ăn trưa theo nội dung bài."
      },
      {
        "id": "dk6-2",
        "question": "<ruby>午後<rt>ごご</rt></ruby>2<ruby>時<rt>じ</rt></ruby>に <ruby>映画館<rt>えいがかん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を <ruby>見<rt>み</rt></ruby>ますか。",
        "options": [
          "てがみ",
          "<ruby>映画<rt>えいが</rt></ruby>",
          "<ruby>肉<rt>にく</rt></ruby>",
          "パン"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự sự việc với それから | Độ khó: Dễ | Trọng tâm: Xác định hoạt động xem phim sau khi ăn]\n• Dịch nghĩa: Lúc 2 giờ chiều xem gì ở rạp chiếu phim?\n• Quy tắc & Loại trừ: Bài đọc có câu 「午後2時に映画館で映画を見ます」. Do đó chọn 「映画」. Các phương án 「パン」, 「肉」, 「てがみ」 không khớp."
      },
      {
        "id": "dk6-3",
        "question": "<ruby>明日<rt>あした</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか。",
        "options": [
          "くだもの と <ruby>肉<rt>にく</rt></ruby>",
          "<ruby>卵<rt>たまご</rt></ruby>と <ruby>野菜<rt>やさい</rt></ruby>",
          "ごはん と <ruby>魚<rt>さかな</rt></ruby>",
          "パンと <ruby>肉<rt>にく</rt></ruby>"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết thực phẩm | Độ khó: Trung bình | Trọng tâm: Khớp chính xác パンと肉]\n• Dịch nghĩa: Ngày mai ăn những gì?\n• Quy tắc & Loại trừ: Bài đọc nêu rõ 「レストランで パンと肉を食べます」. Do đó phương án 「パンと肉」 hoàn toàn chính xác, các phương án còn lại sai thực phẩm."
      },
      {
        "id": "dk6-4",
        "question": "<ruby>明日<rt>あした</rt></ruby>の <ruby>田中<rt>たなか</rt></ruby>さんの ことで、<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "レストランで <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます。",
          "<ruby>映画館<rt>えいがかん</rt></ruby>で <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます。",
          "<ruby>庭<rt>にわ</rt></ruby>で <ruby>肉<rt>にく</rt></ruby>を <ruby>食<rt>た</rt></ruby>べます。",
          "<ruby>公園<rt>こうえん</rt></ruby>で パンを <ruby>食<rt>た</rt></ruby>べます。"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định khớp nội dung | Độ khó: Trung bình | Trọng tâm: Kiểm tra độ chính xác toàn văn bản]\n• Dịch nghĩa: Về việc của anh Tanaka ngày mai, câu nào đúng?\n• Quy tắc & Loại trừ: Dữ kiện trong bài có 「午後2時に映画館で映画を見ます」, nên câu đầu tiên đúng hoàn toàn. Các câu khác gán sai địa điểm cho hành động."
      },
      {
        "id": "dk6-5",
        "question": "<ruby>明日<rt>あした</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に <ruby>駅<rt>えき</rt></ruby>で <ruby>会<rt>あ</rt></ruby>いますか。",
        "options": [
          "12<ruby>時<rt>じ</rt></ruby>に <ruby>会<rt>あ</rt></ruby>います",
          "10<ruby>時<rt>じ</rt></ruby>に <ruby>会<rt>あ</rt></ruby>います",
          "2<ruby>時<rt>じ</rt></ruby>に <ruby>会<rt>あ</rt></ruby>います",
          "4<ruby>時<rt>じ</rt></ruby>に <ruby>会<rt>あ</rt></ruby>います"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết thời gian hẹn gặp | Độ khó: Trung bình | Trọng tâm: Khớp thời gian và địa điểm gặp gỡ]\n• Dịch nghĩa: Ngày mai mấy giờ gặp nhau ở nhà ga?\n• Quy tắc & Loại trừ: Bài đọc viết rõ 「12時に駅で会います」. Các giờ 2 giờ, 4 giờ, 10 giờ không phải giờ hẹn gặp tại ga."
      }
    ],
    "translation": "Anh Tanaka, ngày mai bạn cùng ăn trưa với tôi nhé? 12 giờ chúng ta gặp nhau ở nhà ga. Sau đó, chúng ta ăn bánh mì và thịt ở nhà hàng. Lúc 2 giờ chiều chúng ta xem phim ở rạp chiếu phim. Lúc 4 giờ chiều chúng ta cùng uống cà phê ở quán nước nhé?"
  },
  {
    "id": "dokkai-7",
    "lessonId": "bai-7",
    "title": "Bài Đọc Hiểu - Bài 7 Minna",
    "subTitle": "Thiệp cảm ơn đính kèm quà tặng (Gift thank-you card)",
    "description": "Đọc đoạn thiệp ngắn cảm ơn món quà từ người quen và trả lời các câu hỏi đọc hiểu kiểm tra từ vựng, trợ từ và nội dung cơ bản Bài 7.",
    "passage": "サントスさんへ。\n<ruby>今日<rt>きょう</rt></ruby>、<ruby>母<rt>はは</rt></ruby>から <ruby>日本<rt>にほん</rt></ruby>の お<ruby>土産<rt>みやげ</rt></ruby>の <ruby>荷物<rt>にもつ</rt></ruby>を もらいました。サントスさんの プレゼントも もらいました。<ruby>日本<rt>にほん</rt></ruby>の シャツと ネクタイです。もう <ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>使<rt>つか</rt></ruby>いました。<ruby>本当<rt>ほんとう</rt></ruby>に どうも ありがとうございました。",
    "questions": [
      {
        "id": "dk7-1",
        "question": "<ruby>誰<rt>だれ</rt></ruby>から <ruby>荷物<rt>にもつ</rt></ruby>を もらいましたか。",
        "options": [
          "サントスさんから もらいました",
          "<ruby>父<rt>ちち</rt></ruby>から もらいました",
          "<ruby>友達<rt>ともだち</rt></ruby>から もらいました",
          "<ruby>母<rt>はは</rt></ruby>から もらいました"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Xác định chủ thể nhận đồ từ ai trong văn bản]\n• Dịch nghĩa: Đã nhận hành lý từ ai?\n• Quy tắc & Loại trừ: Dựa vào câu 「母から 日本のお土産の荷物を もらいました」, người viết đã nhận từ mẹ. Do đó 「母から もらいました」 chính xác. Các phương án khác sai nhân vật."
      },
      {
        "id": "dk7-2",
        "question": "サントスさんから <ruby>何<rt>なに</rt></ruby>を もらいましたか。",
        "options": [
          "<ruby>本<rt>ほん</rt></ruby>と ノート",
          "シャツと ネクタイ",
          "<ruby>切符<rt>きっぷ</rt></ruby>と かばん",
          "<ruby>手紙<rt>てがみ</rt></ruby>と <ruby>切手<rt>きって</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết đối tượng | Độ khó: Dễ | Trọng tâm: Xác định món quà được nhắc đến]\n• Dịch nghĩa: Đã nhận cái gì từ anh Santos?\n• Quy tắc & Loại trừ: Đoạn văn nêu rõ 「サントスさんの プレゼントも もらいました。日本の シャツと ネクタイです」. Do đó chọn 「シャツと ネクタイ」."
      },
      {
        "id": "dk7-3",
        "question": "もう シャツと ネクタイを <ruby>使<rt>つか</rt></ruby>いましたか。",
        "options": [
          "いいえ、まだです",
          "いいえ、<ruby>使<rt>つか</rt></ruby>いません",
          "はい、もう <ruby>使<rt>つか</rt></ruby>いました",
          "はい、<ruby>明日<rt>あした</rt></ruby> <ruby>使<rt>つか</rt></ruby>います"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Xác nhận hoàn thành もう | Độ khó: Trung bình | Trọng tâm: Khớp thông tin もう 会社で 使いました]\n• Dịch nghĩa: Đã dùng áo sơ mi và cà vạt chưa?\n• Quy tắc & Loại trừ: Đoạn văn viết 「もう 会社で 使いました」, nên đáp án đúng là 「はい、もう 使いました」. Các phương án khác sai nội dung."
      },
      {
        "id": "dk7-4",
        "question": "サントスさんの プレゼントについて、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "もう <ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>使<rt>つか</rt></ruby>いました",
          "サントスさんに シャツを あげました",
          "<ruby>今日<rt>きょう</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
          "<ruby>母<rt>はは</rt></ruby>に <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きました"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định khớp nội dung | Độ khó: Trung bình | Trọng tâm: Kiểm tra độ chính xác tổng thể so với bài đọc]\n• Dịch nghĩa: Về món quà của anh Santos, câu nào đúng?\n• Quy tắc & Loại trừ: Câu 「もう 会社で 使いました」 khớp với nội dung bài đọc. Các câu khác mâu thuẫn hoặc không có trong bài."
      },
      {
        "id": "dk7-5",
        "question": "この <ruby>手紙<rt>てがみ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>に <ruby>書<rt>か</rt></ruby>きましたか。",
        "options": [
          "<ruby>先生<rt>せんせい</rt></ruby>に <ruby>書<rt>か</rt></ruby>きました",
          "<ruby>友達<rt>ともだち</rt></ruby>に <ruby>書<rt>か</rt></ruby>きました",
          "サントスさんに <ruby>書<rt>か</rt></ruby>きました",
          "<ruby>母<rt>はは</rt></ruby>に <ruby>書<rt>か</rt></ruby>きました"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính và người nhận thư | Độ khó: Dễ | Trọng tâm: Xác định đối tượng bức thư hướng tới]\n• Dịch nghĩa: Bức thư này viết cho ai?\n• Quy tắc & Loại trừ: Bức thư bắt đầu bằng 「サントスさんへ」 nên được viết gửi cho anh Santos. Do đó 「サントスさんに 書きました」 chính xác."
      }
    ],
    "translation": "Gửi anh Santos.\nHôm nay, tôi đã nhận được kiện hàng quà lưu niệm Nhật Bản từ mẹ. Tôi cũng đã nhận được món quà của anh Santos nữa. Đó là áo sơ mi và cà vạt của Nhật Bản. Tôi đã dùng ở công ty rồi. Thật sự cảm ơn anh rất nhiều."
  },
  {
    "id": "dokkai-8",
    "lessonId": "bai-8",
    "title": "Bài Đọc Hiểu - Bài 8 Minna",
    "subTitle": "Tờ giới thiệu ngắn về thị trấn / khu phố đang sống (Neighborhood mini-profile)",
    "description": "Đọc đoạn văn giới thiệu về thị trấn và trả lời các câu hỏi về tính chất của địa điểm.",
    "passage": "わたしの <ruby>町<rt>まち</rt></ruby>は <ruby>古<rt>ふる</rt></ruby>いですが、<ruby>静<rt>しず</rt></ruby>かな <ruby>町<rt>まち</rt></ruby>です。そして、<ruby>日本<rt>にほん</rt></ruby>で とても <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>町<rt>まち</rt></ruby>です。<ruby>町<rt>まち</rt></ruby>の レストランの <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>は とても おいしいです。でも、あまり <ruby>安<rt>やす</rt></ruby>くないです。<ruby>町<rt>まち</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は とても <ruby>親切<rt>しんせつ</rt></ruby>です。わたしの <ruby>町<rt>まち</rt></ruby>は とても <ruby>便利<rt>べんり</rt></ruby>です。",
    "questions": [
      {
        "id": "dk8-1",
        "question": "<ruby>町<rt>まち</rt></ruby>は どんな <ruby>町<rt>まち</rt></ruby>ですか。",
        "options": [
          "にぎやかな <ruby>町<rt>まち</rt></ruby>です",
          "とても <ruby>安<rt>やす</rt></ruby>い<ruby>町<rt>まち</rt></ruby>です",
          "あまり <ruby>有名<rt>ゆうめい</rt></ruby>じゃないです",
          "<ruby>静<rt>しず</rt></ruby>かな <ruby>町<rt>まち</rt></ruby>です"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Thông tin trực tiếp]\n• Dịch nghĩa: Thị trấn là thị trấn thế nào?\n• Quy tắc & Loại trừ: Đoạn văn viết 「わたしの町は静かな町です」, khớp với phương án đầu tiên."
      },
      {
        "id": "dk8-2",
        "question": "<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>は どうですか。",
        "options": [
          "あまり <ruby>有名<rt>ゆうめい</rt></ruby>じゃないです",
          "とても <ruby>安<rt>やす</rt></ruby>いです",
          "とても おいしいです",
          "あまり おいしくないです"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Thông tin trực tiếp]\n• Dịch nghĩa: Đồ ăn thế nào?\n• Quy tắc & Loại trừ: Đoạn văn viết 「町の食べ物はとてもおいしいです」, khớp với phương án đầu tiên."
      },
      {
        "id": "dk8-3",
        "question": "<ruby>町<rt>まち</rt></ruby>の <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>は <ruby>安<rt>やす</rt></ruby>いですか。",
        "options": [
          "はい、とても <ruby>安<rt>やす</rt></ruby>いです",
          "いいえ、あまり おいしくないです",
          "はい、<ruby>安<rt>やす</rt></ruby>いです",
          "いいえ、あまり <ruby>安<rt>やす</rt></ruby>くないです"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Phủ định | Độ khó: Trung bình | Trọng tâm: Phủ định của tính từ]\n• Dịch nghĩa: Đồ ăn ở thị trấn có rẻ không?\n• Quy tắc & Loại trừ: Đoạn văn viết 「でも、あまり安くないです」, nên chọn phương án phủ định tương ứng."
      },
      {
        "id": "dk8-4",
        "question": "わたしの <ruby>町<rt>まち</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>町<rt>まち</rt></ruby>は とても <ruby>便利<rt>べんり</rt></ruby>です",
          "<ruby>町<rt>まち</rt></ruby>は にぎやかです",
          "<ruby>町<rt>まち</rt></ruby>は あまり おいしくないです",
          "<ruby>町<rt>まち</rt></ruby>は あまり <ruby>有名<rt>ゆうめい</rt></ruby>じゃないです"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng?\n• Quy tắc & Loại trừ: Đoạn văn viết 「わたしの町はとても便利です」, khớp với phương án đầu tiên."
      },
      {
        "id": "dk8-5",
        "question": "<ruby>町<rt>まち</rt></ruby>は <ruby>有名<rt>ゆうめい</rt></ruby>ですか。",
        "options": [
          "いいえ、<ruby>静<rt>しず</rt></ruby>かです",
          "はい、とても <ruby>有名<rt>ゆうめい</rt></ruby>です",
          "いいえ、あまり <ruby>有名<rt>ゆうめい</rt></ruby>じゃないです",
          "はい、とても <ruby>便利<rt>べんり</rt></ruby>です"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Thông tin trực tiếp]\n• Dịch nghĩa: Thị trấn có nổi tiếng không?\n• Quy tắc & Loại trừ: Đoạn văn viết 「そして、とても有名です」, khớp với phương án đầu tiên."
      }
    ],
    "translation": "Thị trấn của tôi tuy cũ nhưng là một thị trấn yên tĩnh. Và nó là một thị trấn rất nổi tiếng ở Nhật Bản. Đồ ăn ở nhà hàng trong thị trấn rất ngon. Nhưng mà, không rẻ lắm. Người dân trong thị trấn rất tốt bụng. Thị trấn của tôi rất tiện lợi."
  },
  {
    "id": "dokkai-9",
    "lessonId": "bai-9",
    "title": "Bài Đọc Hiểu - Bài 9 Minna",
    "subTitle": "Phiếu khảo sát sở thích & thời gian rảnh (Hobby & free-time mini-survey)",
    "description": "Đọc đoạn văn về sở thích của anh Tanaka và trả lời các câu hỏi bên dưới.",
    "passage": "わたしは <ruby>田中<rt>たなか</rt></ruby>です。わたしは <ruby>音楽<rt>おんがく</rt></ruby>が とても <ruby>好<rt>す</rt></ruby>きです。とくに <ruby>歌<rt>うた</rt></ruby>が <ruby>好<rt>す</rt></ruby>きです。でも、<ruby>歌<rt>うた</rt></ruby>は あまり <ruby>上手<rt>じょうず</rt></ruby>じゃ ありません。<ruby>下手<rt>へた</rt></ruby>です。<ruby>明日<rt>あした</rt></ruby>は <ruby>仕事<rt>しごと</rt></ruby>の <ruby>用事<rt>ようじ</rt></ruby>が ありますから、<ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きません。でも、<ruby>今度<rt>こんど</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>時間<rt>じかん</rt></ruby>が あります。",
    "questions": [
      {
        "id": "dk9-1",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
        "options": [
          "<ruby>絵<rt>え</rt></ruby>",
          "<ruby>野球<rt>やきゅう</rt></ruby>",
          "<ruby>音楽<rt>おんがく</rt></ruby>",
          "<ruby>料理<rt>りょうり</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tìm thông tin sở thích]\n• Dịch nghĩa: Anh Tanaka thích cái gì?\n• Quy tắc & Loại trừ: Đoạn văn viết 「私は音楽が好きです」 nên đáp án là 「音楽」."
      },
      {
        "id": "dk9-2",
        "question": "<ruby>明日<rt>あした</rt></ruby> <ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きますか。",
        "options": [
          "いいえ、<ruby>聞<rt>き</rt></ruby>きません",
          "はい、<ruby>聞<rt>き</rt></ruby>きます",
          "はい、<ruby>好<rt>す</rt></ruby>きです",
          "いいえ、<ruby>下手<rt>へた</rt></ruby>です"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do | Độ khó: Trung bình | Trọng tâm: Hiểu mệnh đề nguyên nhân]\n• Dịch nghĩa: Ngày mai anh ấy có nghe nhạc không?\n• Quy tắc & Loại trừ: Đoạn văn viết 「用事がありますから、時間がない」 nên ngày mai anh ấy không nghe nhạc."
      },
      {
        "id": "dk9-3",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>歌<rt>うた</rt></ruby>が <ruby>上手<rt>じょうず</rt></ruby>ですか。",
        "options": [
          "はい、<ruby>上手<rt>じょうず</rt></ruby>です",
          "はい、<ruby>好<rt>す</rt></ruby>きです",
          "いいえ、<ruby>分<rt>わ</rt></ruby>かりません",
          "いいえ、<ruby>下手<rt>へた</rt></ruby>です"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Phủ định | Độ khó: Dễ | Trọng tâm: Xác nhận thông tin]\n• Dịch nghĩa: Anh Tanaka hát có giỏi không?\n• Quy tắc & Loại trừ: Đoạn văn viết 「歌は下手です」 nên đáp án là 「いいえ、下手です」."
      },
      {
        "id": "dk9-4",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんの <ruby>音楽<rt>おんがく</rt></ruby>と <ruby>時間<rt>じかん</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>時間<rt>じかん</rt></ruby>が あります",
          "<ruby>音楽<rt>おんがく</rt></ruby>が <ruby>下手<rt>へた</rt></ruby>です",
          "<ruby>明日<rt>あした</rt></ruby>は <ruby>時間<rt>じかん</rt></ruby>が あります",
          "<ruby>歌<rt>うた</rt></ruby>が <ruby>好<rt>す</rt></ruby>きじゃ ありません"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng?\n• Quy tắc & Loại trừ: Đoạn văn viết 「今度の日曜日は時間があります」 nên phương án này đúng."
      },
      {
        "id": "dk9-5",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きますか。",
        "options": [
          "<ruby>漢字<rt>かんじ</rt></ruby>",
          "<ruby>歌<rt>うた</rt></ruby>",
          "<ruby>料理<rt>りょうり</rt></ruby>",
          "<ruby>用事<rt>ようじ</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Xác định đối tượng hành động]\n• Dịch nghĩa: Anh Tanaka nghe cái gì?\n• Quy tắc & Loại trừ: Anh ấy thích âm nhạc và đặc biệt là bài hát, nên anh ấy nghe 「歌」."
      }
    ],
    "translation": "Tôi là Tanaka. Tôi rất thích âm nhạc. Đặc biệt là tôi thích ca hát. Nhưng tôi hát không giỏi lắm. Tôi hát dở. Ngày mai vì tôi có việc công việc bận nên tôi không nghe nhạc. Nhưng chủ nhật tới thì tôi có thời gian."
  },
  {
    "id": "dokkai-10",
    "lessonId": "bai-10",
    "title": "Bài Đọc Hiểu - Bài 10 Minna",
    "subTitle": "Chỉ dẫn vị trí đồ đạc / tiện ích quanh nhà ga (Station/room layout note)",
    "description": "Đọc đoạn văn ngắn về vị trí các đồ vật và địa điểm để trả lời câu hỏi.",
    "passage": "<ruby>駅<rt>えき</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に <ruby>大<rt>おお</rt></ruby>きい <ruby>公園<rt>こうえん</rt></ruby>が あります。<ruby>公園<rt>こうえん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>木<rt>き</rt></ruby>や <ruby>花<rt>はな</rt></ruby>などが あります。<ruby>公園<rt>こうえん</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>に <ruby>本屋<rt>ほんや</rt></ruby>が あります。<ruby>本屋<rt>ほんや</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>机<rt>つくえ</rt></ruby>と いすが あります。<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>本<rt>ほん</rt></ruby>や <ruby>雑誌<rt>ざっし</rt></ruby>などが あります。<ruby>机<rt>つくえ</rt></ruby>の <ruby>下<rt>した</rt></ruby>に <ruby>白<rt>しろ</rt></ruby>い <ruby>猫<rt>ねこ</rt></ruby>が います。そして、<ruby>本屋<rt>ほんや</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に <ruby>自転車<rt>じてんしゃ</rt></ruby>が 2<ruby>台<rt>だい</rt></ruby> あります。",
    "questions": [
      {
        "id": "dk10-1",
        "question": "<ruby>本屋<rt>ほんや</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>何<rt>なに</rt></ruby>がありますか。",
        "options": [
          "<ruby>机<rt>つくえ</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>",
          "<ruby>猫<rt>ねこ</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Vị trí]\n• Dịch nghĩa: Bên cạnh hiệu sách có gì?\n• Quy tắc & Loại trừ: Đoạn văn nói 「公園の隣に本屋があります」, suy ra bên cạnh hiệu sách là công viên."
      },
      {
        "id": "dk10-2",
        "question": "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>がありますか。",
        "options": [
          "<ruby>本<rt>ほん</rt></ruby>や<ruby>雑誌<rt>ざっし</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>",
          "<ruby>猫<rt>ねこ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Liệt kê]\n• Dịch nghĩa: Trên bàn có gì?\n• Quy tắc & Loại trừ: Đoạn văn ghi 「机の上に本や雑誌などがあります」."
      },
      {
        "id": "dk10-3",
        "question": "<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>何<rt>なに</rt></ruby>がいますか。",
        "options": [
          "<ruby>雑誌<rt>ざっし</rt></ruby>",
          "<ruby>猫<rt>ねこ</rt></ruby>",
          "<ruby>本<rt>ほん</rt></ruby>",
          "<ruby>人<rt>ひと</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Sự tồn tại]\n• Dịch nghĩa: Dưới bàn có con gì?\n• Quy tắc & Loại trừ: Đoạn văn ghi 「机の下に猫がいます」."
      },
      {
        "id": "dk10-4",
        "question": "<ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くと <ruby>本屋<rt>ほんや</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>猫<rt>ねこ</rt></ruby>は<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にいます",
          "<ruby>駅<rt>えき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>公園<rt>こうえん</rt></ruby>があります",
          "<ruby>本屋<rt>ほんや</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>机<rt>つくえ</rt></ruby>があります",
          "<ruby>公園<rt>こうえん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>本屋<rt>ほんや</rt></ruby>があります"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Nội dung]\n• Dịch nghĩa: Câu nào đúng?\n• Quy tắc & Loại trừ: Đoạn văn nói 「本屋の中に机があります」, các câu khác sai vị trí."
      },
      {
        "id": "dk10-5",
        "question": "<ruby>本屋<rt>ほんや</rt></ruby>はどこにありますか。",
        "options": [
          "<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>",
          "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Vị trí]\n• Dịch nghĩa: Hiệu sách ở đâu?\n• Quy tắc & Loại trừ: Đoạn văn ghi 「公園の隣に本屋があります」."
      }
    ],
    "translation": "Trước nhà ga có một công viên lớn. Trong công viên có cây cối, hoa lá v.v. Bên cạnh công viên có một hiệu sách. Trong hiệu sách có bàn và ghế. Trên bàn có sách, tạp chí v.v. Dưới bàn có một con mèo trắng. Và trước hiệu sách có 2 chiếc xe đạp."
  },
  {
    "id": "dokkai-11",
    "lessonId": "bai-11",
    "title": "Bài Đọc Hiểu - Bài 11 Minna",
    "subTitle": "Phiếu thống kê thành viên gia đình / tần suất sinh hoạt (Family & frequency tally)",
    "description": "Đọc đoạn văn về gia đình của anh Tanaka và trả lời các câu hỏi về số lượng thành viên và tần suất hoạt động.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>は <ruby>田中<rt>たなか</rt></ruby>です。<ruby>家族<rt>かぞく</rt></ruby>は <ruby>四人<rt>よにん</rt></ruby>です。<ruby>両親<rt>りょうしん</rt></ruby>と <ruby>姉<rt>あね</rt></ruby>と <ruby>私<rt>わたし</rt></ruby>です。<ruby>姉<rt>あね</rt></ruby>は <ruby>外国<rt>がいこく</rt></ruby>に います。<ruby>一<rt>いち</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>に <ruby>二回<rt>にかい</rt></ruby> <ruby>姉<rt>あね</rt></ruby>に <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きます。<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>で <ruby>切手<rt>きって</rt></ruby>を <ruby>三枚<rt>さんまい</rt></ruby> <ruby>買<rt>か</rt></ruby>います。<ruby>全部<rt>ぜんぶ</rt></ruby>で <ruby>三百円<rt>さんびゃくえん</rt></ruby>です。<ruby>家<rt>いえ</rt></ruby>から <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>まで <ruby>自転車<rt>じてんしゃ</rt></ruby>で 15<ruby>分<rt>ふん</rt></ruby> かかります。<ruby>毎日<rt>まいにち</rt></ruby> <ruby>夜<rt>よる</rt></ruby> <ruby>二時間<rt>にじかん</rt></ruby> <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>します。<ruby>日本語<rt>にほんご</rt></ruby>は <ruby>難<rt>むずか</rt></ruby>しいですが、とても <ruby>楽<rt>たの</rt></ruby>しいです。",
    "questions": [
      {
        "id": "dk11-1",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんの <ruby>家族<rt>かぞく</rt></ruby>は <ruby>何人<rt>なんにん</rt></ruby>ですか。",
        "options": [
          "<ruby>五人<rt>ごにん</rt></ruby>です",
          "<ruby>三人<rt>さんにん</rt></ruby>です",
          "<ruby>四人<rt>よにん</rt></ruby>です",
          "<ruby>二人<rt>ふたり</rt></ruby>です"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Đọc hiểu số lượng]\n• Dịch nghĩa: Gia đình anh Tanaka có mấy người?\n• Quy tắc & Loại trừ: Đoạn văn ghi 「家族は四人です」, nên chọn phương án 4 người."
      },
      {
        "id": "dk11-2",
        "question": "<ruby>姉<rt>あね</rt></ruby>に <ruby>何回<rt>なんかい</rt></ruby> <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きますか。",
        "options": [
          "<ruby>四回<rt>よんかい</rt></ruby>",
          "<ruby>一回<rt>いっかい</rt></ruby>",
          "<ruby>三回<rt>さんかい</rt></ruby>",
          "<ruby>二回<rt>にかい</rt></ruby>"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Đọc hiểu tần suất]\n• Dịch nghĩa: Anh ấy viết thư cho chị gái mấy lần?\n• Quy tắc & Loại trừ: Đoạn văn ghi 「一か月に二回手紙を書きます」, nên chọn 2 lần."
      },
      {
        "id": "dk11-3",
        "question": "<ruby>切手<rt>きって</rt></ruby>は <ruby>全部<rt>ぜんぶ</rt></ruby>で いくらですか。",
        "options": [
          "<ruby>四百円<rt>よんひゃくえん</rt></ruby>",
          "<ruby>百円<rt>ひゃくえん</rt></ruby>",
          "<ruby>三百円<rt>さんびゃくえん</rt></ruby>",
          "<ruby>二百円<rt>にひゃくえん</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Đọc hiểu giá tiền]\n• Dịch nghĩa: Tổng cộng tiền tem là bao nhiêu?\n• Quy tắc & Loại trừ: Đoạn văn ghi 「全部で三百円です」, nên chọn 300 yên."
      },
      {
        "id": "dk11-4",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんの <ruby>家族<rt>かぞく</rt></ruby>や <ruby>毎日<rt>まいにち</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>で、<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>二時間<rt>にじかん</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>します",
          "<ruby>姉<rt>あね</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>に います",
          "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>日本語<rt>にほんご</rt></ruby>が <ruby>下手<rt>へた</rt></ruby>です",
          "<ruby>家族<rt>かぞく</rt></ruby>は <ruby>五人<rt>ごにん</rt></ruby>です"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Kiểm tra nội dung]\n• Dịch nghĩa: Câu nào đúng?\n• Quy tắc & Loại trừ: Đoạn văn ghi 「毎日二時間日本語を勉強します」 là đúng, các câu khác sai về địa điểm chị gái, đánh giá năng lực và số người."
      },
      {
        "id": "dk11-5",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>日本語<rt>にほんご</rt></ruby>を どう <ruby>思<rt>おも</rt></ruby>いますか。",
        "options": [
          "<ruby>簡単<rt>かんたん</rt></ruby>です",
          "<ruby>難<rt>むずか</rt></ruby>しいですが、<ruby>楽<rt>たの</rt></ruby>しいです",
          "<ruby>難<rt>むずか</rt></ruby>しいです",
          "<ruby>楽<rt>たの</rt></ruby>しいです"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Cảm nhận]\n• Dịch nghĩa: Anh Tanaka nghĩ thế nào về tiếng Nhật?\n• Quy tắc & Loại trừ: Đoạn văn ghi 「日本語は難しいですが、楽しいです」, nên chọn phương án đầy đủ nhất."
      }
    ],
    "translation": "Tên tôi là Tanaka. Gia đình tôi có 4 người. Gồm bố mẹ, chị gái và tôi. Chị gái tôi đang ở nước ngoài. Một tháng tôi viết thư cho chị gái 2 lần. Tôi mua 3 con tem ở bưu điện. Tổng cộng là 300 yên. Từ nhà đến bưu điện đi bằng xe đạp mất 15 phút. Mỗi ngày buổi tối tôi học tiếng Nhật 2 tiếng. Tiếng Nhật khó nhưng rất vui."
  },
  {
    "id": "dokkai-12",
    "lessonId": "bai-12",
    "title": "Bài Đọc Hiểu - Bài 12 Minna",
    "subTitle": "Bài viết ngắn so sánh thời tiết hai thành phố (Weather & city comparison note)",
    "description": "Đọc đoạn văn ngắn so sánh thời tiết giữa Tokyo và Sapporo để luyện tập cấu trúc so sánh và thì quá khứ.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>は <ruby>昨日<rt>きのう</rt></ruby> <ruby>東京<rt>とうきょう</rt></ruby>から <ruby>札幌<rt>さっぽろ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>東京<rt>とうきょう</rt></ruby>は <ruby>暖<rt>あたた</rt></ruby>かかったです。<ruby>東京<rt>とうきょう</rt></ruby>の <ruby>天気<rt>てんき</rt></ruby>は <ruby>雨<rt>あめ</rt></ruby>でした。しかし、<ruby>札幌<rt>さっぽろ</rt></ruby>は とても <ruby>寒<rt>さむ</rt></ruby>かったです。<ruby>札幌<rt>さっぽろ</rt></ruby>の <ruby>天気<rt>てんき</rt></ruby>は <ruby>雪<rt>ゆき</rt></ruby>でした。<ruby>札幌<rt>さっぽろ</rt></ruby>は <ruby>東京<rt>とうきょう</rt></ruby>より ずっと <ruby>寒<rt>さむ</rt></ruby>いです。<ruby>札幌<rt>さっぽろ</rt></ruby>の ほうが <ruby>冬<rt>ふゆ</rt></ruby>の <ruby>季節<rt>きせつ</rt></ruby>が <ruby>長<rt>なが</rt></ruby>いです。<ruby>町<rt>まち</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>も とても おいしかったです。ホテルも <ruby>静<rt>しず</rt></ruby>かでした。<ruby>私<rt>わたし</rt></ruby>は <ruby>東京<rt>とうきょう</rt></ruby>より <ruby>札幌<rt>さっぽろ</rt></ruby>の ほうが <ruby>好<rt>す</rt></ruby>きです。",
    "questions": [
      {
        "id": "dk12-1",
        "question": "<ruby>昨日<rt>きのう</rt></ruby>の <ruby>東京<rt>とうきょう</rt></ruby>の <ruby>天気<rt>てんき</rt></ruby>は <ruby>何<rt>なん</rt></ruby>でしたか。",
        "options": [
          "<ruby>雨<rt>あめ</rt></ruby>です",
          "<ruby>暖<rt>あたた</rt></ruby>かいです",
          "<ruby>寒<rt>さむ</rt></ruby>いです",
          "<ruby>雪<rt>ゆき</rt></ruby>です"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tìm thông tin trong bài]\n• Dịch nghĩa: Thời tiết ở Tokyo hôm qua là gì?\n• Quy tắc & Loại trừ: Bài viết ghi rõ 「東京の天気は雨でした」 nên đáp án là 「雨です」."
      },
      {
        "id": "dk12-2",
        "question": "<ruby>札幌<rt>さっぽろ</rt></ruby>と <ruby>東京<rt>とうきょう</rt></ruby>は どちらが <ruby>寒<rt>さむ</rt></ruby>いですか。",
        "options": [
          "どちらも <ruby>寒<rt>さむ</rt></ruby>いです",
          "<ruby>札幌<rt>さっぽろ</rt></ruby>の ほうが <ruby>寒<rt>さむ</rt></ruby>いです",
          "どちらも <ruby>寒<rt>さむ</rt></ruby>くないです",
          "<ruby>東京<rt>とうきょう</rt></ruby>の ほうが <ruby>寒<rt>さむ</rt></ruby>いです"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • So sánh | Độ khó: Dễ | Trọng tâm: Cấu trúc so sánh hơn]\n• Dịch nghĩa: Sapporo và Tokyo, nơi nào lạnh hơn?\n• Quy tắc & Loại trừ: Bài viết ghi 「札幌は東京よりずっと寒いです」, nghĩa là Sapporo lạnh hơn."
      },
      {
        "id": "dk12-3",
        "question": "<ruby>札幌<rt>さっぽろ</rt></ruby>の <ruby>冬<rt>ふゆ</rt></ruby>の <ruby>季節<rt>きせつ</rt></ruby>は どうですか。",
        "options": [
          "<ruby>短<rt>みじか</rt></ruby>いです",
          "<ruby>暖<rt>あたた</rt></ruby>かいです",
          "<ruby>寒<rt>さむ</rt></ruby>くないです",
          "<ruby>長<rt>なが</rt></ruby>いです"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tính từ]\n• Dịch nghĩa: Mùa đông ở Sapporo thế nào?\n• Quy tắc & Loại trừ: Bài viết ghi 「札幌のほうが冬の季節が長いです」 nên đáp án là 「長いです」."
      },
      {
        "id": "dk12-4",
        "question": "<ruby>昨日<rt>きのう</rt></ruby>の <ruby>東京<rt>とうきょう</rt></ruby>と <ruby>札幌<rt>さっぽろ</rt></ruby>の <ruby>天気<rt>てんき</rt></ruby>で、<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>札幌<rt>さっぽろ</rt></ruby>は <ruby>東京<rt>とうきょう</rt></ruby>より <ruby>暖<rt>あたた</rt></ruby>かいです",
          "<ruby>札幌<rt>さっぽろ</rt></ruby>は <ruby>暖<rt>あたた</rt></ruby>かかったです",
          "<ruby>私<rt>わたし</rt></ruby>は <ruby>札幌<rt>さっぽろ</rt></ruby>の ほうが <ruby>好<rt>す</rt></ruby>きです",
          "<ruby>東京<rt>とうきょう</rt></ruby>は <ruby>雪<rt>ゆき</rt></ruby>でした"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng?\n• Quy tắc & Loại trừ: Câu 「私は札幌のほうが好きです」 khớp hoàn toàn với câu cuối của bài viết."
      },
      {
        "id": "dk12-5",
        "question": "この <ruby>人<rt>ひと</rt></ruby>は どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました",
          "<ruby>東京<rt>とうきょう</rt></ruby>と <ruby>札幌<rt>さっぽろ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました",
          "どこも <ruby>行<rt>い</rt></ruby>きませんでした",
          "<ruby>札幌<rt>さっぽろ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nội dung chính | Độ khó: Dễ | Trọng tâm: Hành động]\n• Dịch nghĩa: Người này đã đi đâu?\n• Quy tắc & Loại trừ: Câu đầu bài viết ghi 「私は昨日東京から札幌へ行きました」, hành động chính là đi đến Sapporo."
      }
    ],
    "translation": "Tôi đã đi từ Tokyo đến Sapporo vào ngày hôm qua. Tokyo đã ấm áp. Thời tiết ở Tokyo là mưa. Tuy nhiên, Sapporo thì rất lạnh. Thời tiết ở Sapporo là tuyết. Sapporo lạnh hơn Tokyo rất nhiều. Mùa đông ở Sapporo dài hơn. Món ăn của thị trấn cũng rất ngon. Khách sạn cũng yên tĩnh. Tôi thích Sapporo hơn Tokyo."
  },
  {
    "id": "dokkai-13",
    "lessonId": "bai-13",
    "title": "Bài Đọc Hiểu - Bài 13 Minna",
    "subTitle": "Menu & thực đơn cơm trưa quán ăn (Restaurant lunch menu & order note)",
    "description": "Đọc hiểu thực đơn và ghi chú gọi món tại một nhà hàng Nhật Bản để luyện tập cấu trúc mục đích và mong muốn.",
    "passage": "<ruby>今日<rt>きょう</rt></ruby>の <ruby>昼<rt>ひる</rt></ruby>ごはんは <ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くの <ruby>食堂<rt>しょくどう</rt></ruby>で <ruby>定食<rt>ていしょく</rt></ruby>を <ruby>食<rt>た</rt></ruby>べます。<ruby>牛丼<rt>ぎゅうどん</rt></ruby>は 500<ruby>円<rt>えん</rt></ruby>です。<ruby>魚<rt>さかな</rt></ruby>の <ruby>定食<rt>ていしょく</rt></ruby>は 800<ruby>円<rt>えん</rt></ruby>です。<ruby>私<rt>わたし</rt></ruby>は <ruby>魚<rt>さかな</rt></ruby>が <ruby>食<rt>た</rt></ruby>べたいです。<ruby>友達<rt>ともだち</rt></ruby>は <ruby>牛丼<rt>ぎゅうどん</rt></ruby>が <ruby>食<rt>た</rt></ruby>べたいです。<ruby>二人<rt>ふたり</rt></ruby>で <ruby>店<rt>みせ</rt></ruby>へ <ruby>食事<rt>しょくじ</rt></ruby>に <ruby>行<rt>い</rt></ruby>きます。<ruby>店<rt>みせ</rt></ruby>は とても にぎやかです。<ruby>二人<rt>ふたり</rt></ruby>で <ruby>注文<rt>ちゅうもん</rt></ruby>を します。お<ruby>金<rt>かね</rt></ruby>は <ruby>別々<rt>べつべつ</rt></ruby>に <ruby>払<rt>はら</rt></ruby>います。<ruby>料理<rt>りょうり</rt></ruby>が <ruby>来<rt>き</rt></ruby>ますから、<ruby>少々<rt>しょうしょう</rt></ruby> <ruby>待<rt>ま</rt></ruby>ちます。",
    "questions": [
      {
        "id": "dk13-1",
        "question": "<ruby>魚<rt>さかな</rt></ruby>の <ruby>定食<rt>ていしょく</rt></ruby>は いくらですか。",
        "options": [
          "<ruby>無料<rt>むりょう</rt></ruby>",
          "800<ruby>円<rt>えん</rt></ruby>",
          "500<ruby>円<rt>えん</rt></ruby>",
          "1300<ruby>円<rt>えん</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Thông tin giá cả]\n• Dịch nghĩa: Cơm phần cá giá bao nhiêu?\n• Quy tắc & Loại trừ: Trong bài ghi rõ 「魚の定食は800円です」, nên chọn phương án tương ứng."
      },
      {
        "id": "dk13-2",
        "question": "<ruby>友達<rt>ともだち</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べたいですか。",
        "options": [
          "<ruby>定食<rt>ていしょく</rt></ruby>",
          "<ruby>魚<rt>さかな</rt></ruby>",
          "<ruby>肉<rt>にく</rt></ruby>",
          "<ruby>牛丼<rt>ぎゅうどん</rt></ruby>"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Mong muốn của người khác]\n• Dịch nghĩa: Bạn của tôi muốn ăn gì?\n• Quy tắc & Loại trừ: Bài viết ghi 「友達は牛丼が食べたいです」, khớp với phương án đã chọn."
      },
      {
        "id": "dk13-3",
        "question": "<ruby>二人<rt>ふたり</rt></ruby>は <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>払<rt>はら</rt></ruby>いますか。",
        "options": [
          "いいえ、<ruby>別々<rt>べつべつ</rt></ruby>に <ruby>払<rt>はら</rt></ruby>います",
          "はい、<ruby>払<rt>はら</rt></ruby>います",
          "いいえ、<ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>が <ruby>払<rt>はら</rt></ruby>います",
          "わかりません"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Phủ định | Độ khó: Trung bình | Trọng tâm: Cách thanh toán]\n• Dịch nghĩa: Hai người có trả tiền cùng nhau không?\n• Quy tắc & Loại trừ: Bài viết ghi 「別々に払います」 (trả riêng), nên phủ định câu hỏi và chọn cách trả tiền đúng."
      },
      {
        "id": "dk13-4",
        "question": "<ruby>今日<rt>きょう</rt></ruby>の <ruby>昼<rt>ひる</rt></ruby>ごはんや <ruby>店<rt>みせ</rt></ruby>での <ruby>食事<rt>しょくじ</rt></ruby>で、<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>魚<rt>さかな</rt></ruby>は 500<ruby>円<rt>えん</rt></ruby>です",
          "<ruby>友達<rt>ともだち</rt></ruby>は <ruby>魚<rt>さかな</rt></ruby>を <ruby>食<rt>た</rt></ruby>べたいです",
          "<ruby>二人<rt>ふたり</rt></ruby>で <ruby>店<rt>みせ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
          "<ruby>私<rt>わたし</rt></ruby>は <ruby>牛丼<rt>ぎゅうどん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べます"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng?\n• Quy tắc & Loại trừ: 「二人で店へ行きます」 khớp với nội dung bài. Các câu khác sai về giá hoặc mong muốn của nhân vật."
      },
      {
        "id": "dk13-5",
        "question": "<ruby>二人<rt>ふたり</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を しに <ruby>店<rt>みせ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "<ruby>食事<rt>しょくじ</rt></ruby>に",
          "<ruby>魚<rt>さかな</rt></ruby>を <ruby>買<rt>か</rt></ruby>いに",
          "<ruby>牛丼<rt>ぎゅうどん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>りに",
          "<ruby>散歩<rt>さんぽ</rt></ruby>に"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Mục đích | Độ khó: Dễ | Trọng tâm: Mục đích di chuyển]\n• Dịch nghĩa: Hai người đi đến quán để làm gì?\n• Quy tắc & Loại trừ: Bài viết ghi 「店へ食事に行きます」, nên chọn phương án 「食事に」."
      }
    ],
    "translation": "Bữa trưa hôm nay chúng tôi ăn cơm phần ở nhà ăn gần nhà ga. Cơm bò hầm giá 500 yên. Cơm phần cá giá 800 yên. Tôi muốn ăn cá. Bạn tôi muốn ăn cơm bò hầm. Hai người chúng tôi đi đến quán để dùng bữa. Quán rất náo nhiệt. Hai người chúng tôi gọi món. Tiền thì trả riêng. Vì món ăn sắp ra nên chúng tôi đợi một chút."
  },
  {
    "id": "dokkai-14",
    "lessonId": "bai-14",
    "title": "Bài Đọc Hiểu - Bài 14 Minna",
    "subTitle": "Bảng hướng dẫn quy trình máy bán vé / ATM (Ticket machine step-by-step guide)",
    "description": "Đọc bảng hướng dẫn sử dụng máy bán vé tự động và trả lời câu hỏi về trình tự thao tác.",
    "passage": "<ruby>駅<rt>えき</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>の <ruby>自動<rt>じどう</rt></ruby><ruby>販売機<rt>はんばいき</rt></ruby>の <ruby>案内<rt>あんない</rt></ruby>です。まず、<ruby>上<rt>うえ</rt></ruby>の <ruby>地図<rt>ちず</rt></ruby>を <ruby>見<rt>み</rt></ruby>て、<ruby>行<rt>い</rt></ruby>き<ruby>先<rt>さき</rt></ruby>の <ruby>料金<rt>りょうきん</rt></ruby>を <ruby>確認<rt>かくにん</rt></ruby>して ください。<ruby>次<rt>つぎ</rt></ruby>に、<ruby>画面<rt>がめん</rt></ruby>の <ruby>料金<rt>りょうきん</rt></ruby>ボタンを <ruby>押<rt>お</rt></ruby>して ください。そして、お<ruby>金<rt>かね</rt></ruby>を <ruby>入<rt>い</rt></ruby>れて ください。<ruby>切符<rt>きっぷ</rt></ruby>と <ruby>釣<rt>つ</rt></ruby>り<ruby>銭<rt>せん</rt></ruby>が <ruby>出<rt>で</rt></ruby>て いますから、<ruby>取<rt>と</rt></ruby>って ください。<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>が <ruby>必要<rt>ひつよう</rt></ruby>な <ruby>人<rt>ひと</rt></ruby>は、<ruby>最後<rt>さいご</rt></ruby>に <ruby>領収書<rt>りょうしゅうしょ</rt></ruby>ボタンを <ruby>押<rt>お</rt></ruby>して ください。これで <ruby>終<rt>お</rt></ruby>わりです。",
    "questions": [
      {
        "id": "dk14-1",
        "question": "<ruby>最初<rt>さいしょ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>料金<rt>りょうきん</rt></ruby>を <ruby>確認<rt>かくにん</rt></ruby>します",
          "<ruby>切符<rt>きっぷ</rt></ruby>を <ruby>取<rt>と</rt></ruby>ります",
          "ボタンを <ruby>押<rt>お</rt></ruby>します",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>入<rt>い</rt></ruby>れます"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Trình tự thao tác]\n• Dịch nghĩa: Đầu tiên bạn làm gì? / Xác nhận giá tiền.\n• Quy tắc & Loại trừ: Theo văn bản, bước đầu tiên là nhìn bản đồ và xác nhận giá tiền."
      },
      {
        "id": "dk14-2",
        "question": "<ruby>料金<rt>りょうきん</rt></ruby>ボタンを <ruby>押<rt>お</rt></ruby>した <ruby>後<rt>あと</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>切符<rt>きっぷ</rt></ruby>を <ruby>取<rt>と</rt></ruby>ります",
          "<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>を <ruby>取<rt>と</rt></ruby>ります",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>入<rt>い</rt></ruby>れます",
          "<ruby>地図<rt>ちず</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự | Độ khó: Dễ | Trọng tâm: Trình tự thao tác]\n• Dịch nghĩa: Sau khi nhấn nút giá tiền, bạn làm gì? / Cho tiền vào.\n• Quy tắc & Loại trừ: Văn bản ghi: \"Tiếp theo nhấn nút... Sau đó cho tiền vào\"."
      },
      {
        "id": "dk14-3",
        "question": "<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>が <ruby>押<rt>お</rt></ruby>しますか。",
        "options": [
          "<ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>わない <ruby>人<rt>ひと</rt></ruby>",
          "<ruby>必要<rt>ひつよう</rt></ruby>な <ruby>人<rt>ひと</rt></ruby>",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>入<rt>い</rt></ruby>れない <ruby>人<rt>ひと</rt></ruby>",
          "みんな"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ngoại lệ | Độ khó: Trung bình | Trọng tâm: Đối tượng thực hiện]\n• Dịch nghĩa: Ai nhấn nút hóa đơn? / Người cần nó.\n• Quy tắc & Loại trừ: Văn bản ghi rõ: \"Người cần hóa đơn thì hãy nhấn nút\"."
      },
      {
        "id": "dk14-4",
        "question": "<ruby>切符<rt>きっぷ</rt></ruby>と お<ruby>金<rt>かね</rt></ruby>と <ruby>領収書<rt>りょうしゅうしょ</rt></ruby>の <ruby>案内<rt>あんない</rt></ruby>で、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>切符<rt>きっぷ</rt></ruby>を <ruby>取<rt>と</rt></ruby>って、お<ruby>金<rt>かね</rt></ruby>を <ruby>入<rt>い</rt></ruby>れます",
          "<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>は <ruby>全員<rt>ぜんいん</rt></ruby>が <ruby>取<rt>と</rt></ruby>ります",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>入<rt>い</rt></ruby>れて、ボタンを <ruby>押<rt>お</rt></ruby>します",
          "<ruby>料金<rt>りょうきん</rt></ruby>を <ruby>確認<rt>かくにん</rt></ruby>して、ボタンを <ruby>押<rt>お</rt></ruby>します"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Nội dung bài đọc]\n• Dịch nghĩa: Câu nào đúng với nội dung? / Xác nhận giá tiền rồi nhấn nút.\n• Quy tắc & Loại trừ: Các phương án khác sai trình tự hoặc sai đối tượng."
      },
      {
        "id": "dk14-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>は <ruby>何<rt>なに</rt></ruby>について ですか。",
        "options": [
          "<ruby>駅<rt>えき</rt></ruby>の <ruby>地図<rt>ちず</rt></ruby>の <ruby>案内<rt>あんない</rt></ruby>",
          "<ruby>切符<rt>きっぷ</rt></ruby>の <ruby>自動<rt>じどう</rt></ruby><ruby>販売機<rt>はんばいき</rt></ruby>の <ruby>案内<rt>あんない</rt></ruby>",
          "お<ruby>金<rt>かね</rt></ruby>と <ruby>釣<rt>つ</rt></ruby>り<ruby>銭<rt>せん</rt></ruby>の <ruby>案内<rt>あんない</rt></ruby>",
          "<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>の ボタンの <ruby>案内<rt>あんない</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Chủ đề]\n• Dịch nghĩa: Bài này nói về cái gì? - Hướng dẫn máy bán vé tự động.\n• Quy tắc & Loại trừ: Câu đầu tiên của bài đã nêu rõ đây là hướng dẫn về máy bán vé tự động."
      }
    ],
    "translation": "Đây là hướng dẫn máy bán vé tự động ở nhà ga. Đầu tiên, hãy nhìn bản đồ phía trên và xác nhận giá tiền đến nơi cần đến. Tiếp theo, hãy nhấn nút giá tiền trên màn hình. Sau đó, hãy cho tiền vào. Vé và tiền thừa đang đi ra, nên hãy lấy đi. Người nào cần hóa đơn thì cuối cùng hãy nhấn nút hóa đơn. Như vậy là kết thúc."
  },
  {
    "id": "dokkai-15",
    "lessonId": "bai-15",
    "title": "Bài Đọc Hiểu - Bài 15 Minna",
    "subTitle": "Nội quy thư viện / ký túc xá về điều được phép & bị cấm (Dorm/library rules notice)",
    "description": "Đọc nội quy thư viện và trả lời các câu hỏi về những hành động được phép và bị cấm.",
    "passage": "<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>利用<rt>りよう</rt></ruby>の <ruby>案内<rt>あんない</rt></ruby>です。<ruby>本<rt>ほん</rt></ruby>は <ruby>一人<rt>ひとり</rt></ruby> <ruby>三冊<rt>さんさつ</rt></ruby>まで <ruby>借<rt>か</rt></ruby>りても いいです。<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で <ruby>大<rt>おお</rt></ruby>きい <ruby>声<rt>こえ</rt></ruby>で <ruby>話<rt>はな</rt></ruby>しては いけません。<ruby>携帯電話<rt>けいたいでんわ</rt></ruby>を <ruby>使<rt>つか</rt></ruby>っては いけません。<ruby>資料<rt>しりょう</rt></ruby>を コピーしても いいです。でも、<ruby>本<rt>ほん</rt></ruby>を <ruby>汚<rt>よご</rt></ruby>しては いけません。<ruby>図書館<rt>としょかん</rt></ruby>で <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を <ruby>食<rt>た</rt></ruby>べては いけません。<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>も <ruby>飲<rt>の</rt></ruby>んでは いけません。みなさんが <ruby>毎日<rt>まいにち</rt></ruby> <ruby>利用<rt>りよう</rt></ruby>していますから、<ruby>静<rt>しず</rt></ruby>かに <ruby>勉強<rt>べんきょう</rt></ruby>して ください。",
    "questions": [
      {
        "id": "dk15-1",
        "question": "<ruby>本<rt>ほん</rt></ruby>は <ruby>何冊<rt>なんさつ</rt></ruby>まで <ruby>借<rt>か</rt></ruby>りて いいですか。",
        "options": [
          "<ruby>一<rt>いち</rt></ruby><ruby>冊<rt>さつ</rt></ruby>までです",
          "<ruby>三<rt>さん</rt></ruby><ruby>冊<rt>さつ</rt></ruby>までです",
          "<ruby>四<rt>よん</rt></ruby><ruby>冊<rt>さつ</rt></ruby>までです",
          "<ruby>二<rt>に</rt></ruby><ruby>冊<rt>さつ</rt></ruby>までです"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Lượng từ]\n• Dịch nghĩa: Được mượn tối đa bao nhiêu cuốn sách?\n• Quy tắc & Loại trừ: Văn bản ghi 「三冊まで」, nên chọn phương án tương ứng."
      },
      {
        "id": "dk15-2",
        "question": "<ruby>図書館<rt>としょかん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しては いけませんか。",
        "options": [
          "<ruby>資料<rt>しりょう</rt></ruby>を コピーします",
          "<ruby>勉強<rt>べんきょう</rt></ruby>します",
          "<ruby>携帯<rt>けいたい</rt></ruby><ruby>電話<rt>でんわ</rt></ruby>を <ruby>使<rt>つか</rt></ruby>います",
          "<ruby>本<rt>ほん</rt></ruby>を <ruby>借<rt>か</rt></ruby>ります"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: V-てはいけません]\n• Dịch nghĩa: Không được làm gì trong thư viện?\n• Quy tắc & Loại trừ: Văn bản ghi 「携帯電話を使ってはいけません」."
      },
      {
        "id": "dk15-3",
        "question": "<ruby>図書館<rt>としょかん</rt></ruby>で <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を <ruby>食<rt>た</rt></ruby>べても いいですか。",
        "options": [
          "いいえ、<ruby>食<rt>た</rt></ruby>べてはいけません",
          "はい、いいです",
          "はい、<ruby>食<rt>た</rt></ruby>べてください",
          "いいえ、いけません"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Phủ định | Độ khó: Dễ | Trọng tâm: V-てはいけません]\n• Dịch nghĩa: Có được ăn đồ ăn trong thư viện không?\n• Quy tắc & Loại trừ: Văn bản ghi 「食べてはいけません」, nên câu trả lời là không được."
      },
      {
        "id": "dk15-4",
        "question": "<ruby>図書館<rt>としょかん</rt></ruby>の ルールや <ruby>利用<rt>りよう</rt></ruby>の <ruby>案内<rt>あんない</rt></ruby>で、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>本<rt>ほん</rt></ruby>を <ruby>汚<rt>よご</rt></ruby>しても いいです",
          "<ruby>大<rt>おお</rt></ruby>きい <ruby>声<rt>こえ</rt></ruby>で <ruby>話<rt>はな</rt></ruby>しても いいです",
          "<ruby>資料<rt>しりょう</rt></ruby>を コピーしても いいです",
          "<ruby>携帯<rt>けいたい</rt></ruby><ruby>電話<rt>でんわ</rt></ruby>を <ruby>使<rt>つか</rt></ruby>っても いいです"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài?\n• Quy tắc & Loại trừ: Văn bản ghi 「資料をコピーしてもいいです」 là hành động được phép."
      },
      {
        "id": "dk15-5",
        "question": "<ruby>図書館<rt>としょかん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を して くださいと <ruby>言<rt>い</rt></ruby>っていますか。",
        "options": [
          "<ruby>静<rt>しず</rt></ruby>かに <ruby>勉強<rt>べんきょう</rt></ruby>して ください",
          "<ruby>大<rt>おお</rt></ruby>きい <ruby>声<rt>こえ</rt></ruby>で <ruby>話<rt>はな</rt></ruby>して ください",
          "<ruby>本<rt>ほん</rt></ruby>を <ruby>汚<rt>よご</rt></ruby>して ください",
          "<ruby>携帯<rt>けいたい</rt></ruby><ruby>電話<rt>でんわ</rt></ruby>を <ruby>使<rt>つか</rt></ruby>って ください"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: V-てください]\n• Dịch nghĩa: Bài yêu cầu làm gì trong thư viện?\n• Quy tắc & Loại trừ: Câu cuối văn bản ghi 「静かに勉強してください」."
      }
    ],
    "translation": "Đây là hướng dẫn sử dụng thư viện. Mỗi người được mượn tối đa 3 cuốn sách. Không được nói chuyện lớn tiếng trong thư viện. Không được sử dụng điện thoại di động. Có thể photo tài liệu. Tuy nhiên, không được làm bẩn sách. Không được ăn đồ ăn trong thư viện. Đồ uống cũng không được uống. Vì mọi người sử dụng hàng ngày nên hãy học tập yên tĩnh."
  },
  {
    "id": "dokkai-16",
    "lessonId": "bai-16",
    "title": "Bài Đọc Hiểu - Bài 16 Minna",
    "subTitle": "Lịch trình một ngày đi tham quan thành phố (One-day sightseeing itinerary)",
    "description": "Đọc đoạn văn về lịch trình tham quan và trả lời các câu hỏi về trình tự hành động.",
    "passage": "きょうは <ruby>日曜日<rt>にちようび</rt></ruby>です。<ruby>私<rt>わたし</rt></ruby>は <ruby>朝<rt>あさ</rt></ruby> 8<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きて、<ruby>朝<rt>あさ</rt></ruby><ruby>ご飯<rt>ごはん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。9<ruby>時<rt>じ</rt></ruby>に <ruby>家<rt>いえ</rt></ruby>を <ruby>出<rt>で</rt></ruby>て、<ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。10<ruby>時<rt>じ</rt></ruby>に <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>って、<ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>京都<rt>きょうと</rt></ruby>で <ruby>電車<rt>でんしゃ</rt></ruby>を <ruby>降<rt>お</rt></ruby>りてから、<ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>神社<rt>じんじゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>神社<rt>じんじゃ</rt></ruby>は <ruby>静<rt>しず</rt></ruby>かで、とても きれいでした。12<ruby>時<rt>じ</rt></ruby>に <ruby>お寺<rt>おてら</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くで <ruby>昼<rt>ひる</rt></ruby><ruby>ご飯<rt>ごはん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べて、<ruby>午後<rt>ごご</rt></ruby>は <ruby>町<rt>まち</rt></ruby>を <ruby>歩<rt>ある</rt></ruby>きました。",
    "questions": [
      {
        "id": "dk16-1",
        "question": "<ruby>私<rt>わたし</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>家<rt>いえ</rt></ruby>を <ruby>出<rt>で</rt></ruby>ましたか。",
        "options": [
          "10<ruby>時<rt>じ</rt></ruby>",
          "12<ruby>時<rt>じ</rt></ruby>",
          "9<ruby>時<rt>じ</rt></ruby>",
          "8<ruby>時<rt>じ</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Thông tin thời gian]\n• Dịch nghĩa: Tôi ra khỏi nhà lúc mấy giờ?\n• Quy tắc & Loại trừ: Dựa vào câu 「9時に家を出て」, đáp án là 9 giờ."
      },
      {
        "id": "dk16-2",
        "question": "<ruby>京都<rt>きょうと</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いてから、<ruby>何<rt>なに</rt></ruby>を しましたか。",
        "options": [
          "<ruby>神社<rt>じんじゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました",
          "<ruby>町<rt>まち</rt></ruby>を <ruby>歩<rt>ある</rt></ruby>きました",
          "<ruby>昼<rt>ひる</rt></ruby><ruby>ご飯<rt>ごはん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました",
          "<ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りました"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự | Độ khó: Trung bình | Trọng tâm: V-てから]\n• Dịch nghĩa: Sau khi đến Kyoto, tôi đã làm gì?\n• Quy tắc & Loại trừ: Dựa vào câu 「京都で電車を降りてから、有名な神社へ行きました」, đáp án là đi đến đền."
      },
      {
        "id": "dk16-3",
        "question": "<ruby>神社<rt>じんじゃ</rt></ruby>は どんな <ruby>所<rt>ところ</rt></ruby>でしたか。",
        "options": [
          "<ruby>有名<rt>ゆうめい</rt></ruby>で、きれいでした",
          "<ruby>静<rt>しず</rt></ruby>かくて、きれいでした",
          "<ruby>有名<rt>ゆうめい</rt></ruby>くて、きれいでした",
          "<ruby>静<rt>しず</rt></ruby>かで、きれいでした"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Miêu tả | Độ khó: Trung bình | Trọng tâm: Nối tính từ đuôi な]\n• Dịch nghĩa: Ngôi đền là nơi như thế nào?\n• Quy tắc & Loại trừ: Tính từ đuôi な 「静か」 nối câu thành 「静かで」, đáp án đúng là phương án 1."
      },
      {
        "id": "dk16-4",
        "question": "<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>京都<rt>きょうと</rt></ruby><ruby>旅行<rt>りょこう</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>午後<rt>ごご</rt></ruby>は <ruby>神社<rt>じんじゃ</rt></ruby>で <ruby>休<rt>やす</rt></ruby>みました",
          "<ruby>昼<rt>ひる</rt></ruby><ruby>ご飯<rt>ごはん</rt></ruby>は <ruby>お寺<rt>おてら</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くで <ruby>食<rt>た</rt></ruby>べました",
          "<ruby>朝<rt>あさ</rt></ruby><ruby>ご飯<rt>ごはん</rt></ruby>は <ruby>京都<rt>きょうと</rt></ruby>で <ruby>食<rt>た</rt></ruby>べました",
          "<ruby>神社<rt>じんじゃ</rt></ruby>は <ruby>有名<rt>ゆうめい</rt></ruby>では ありません"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp thông tin]\n• Dịch nghĩa: Câu nào đúng với nội dung bài?\n• Quy tắc & Loại trừ: Dựa vào câu 「12時にお寺の近くで昼ご飯を食べて」, phương án 3 là chính xác."
      },
      {
        "id": "dk16-5",
        "question": "<ruby>私<rt>わたし</rt></ruby>は <ruby>午後<rt>ごご</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を しましたか。",
        "options": [
          "<ruby>朝<rt>あさ</rt></ruby><ruby>ご飯<rt>ごはん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました",
          "<ruby>神社<rt>じんじゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました",
          "<ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りました",
          "<ruby>町<rt>まち</rt></ruby>を <ruby>歩<rt>ある</rt></ruby>きました"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Hành động | Độ khó: Dễ | Trọng tâm: Thông tin cuối bài]\n• Dịch nghĩa: Buổi chiều tôi đã làm gì?\n• Quy tắc & Loại trừ: Dựa vào câu 「午後は町を歩きました」, đáp án là đi dạo quanh thành phố."
      }
    ],
    "translation": "Hôm nay là chủ nhật. Tôi thức dậy lúc 8 giờ sáng và ăn sáng. 9 giờ tôi ra khỏi nhà và đi đến nhà ga. 10 giờ tôi lên tàu điện và đi đến Kyoto. Sau khi xuống tàu ở Kyoto, tôi đi đến một ngôi đền nổi tiếng. Ngôi đền yên tĩnh và rất đẹp. 12 giờ tôi ăn trưa gần ngôi chùa, buổi chiều tôi đi dạo quanh thành phố."
  },
  {
    "id": "dokkai-17",
    "lessonId": "bai-17",
    "title": "Bài Đọc Hiểu - Bài 17 Minna",
    "subTitle": "Phiếu nhắc nhở của bác sĩ / nội quy phòng khám (Clinic reminder slip)",
    "description": "Đọc hiểu nội dung hướng dẫn của bác sĩ dành cho bệnh nhân sau khi khám bệnh.",
    "passage": "<ruby>患者<rt>かんじゃ</rt></ruby>の <ruby>皆様<rt>みなさま</rt></ruby>へ。\n<ruby>今日<rt>きょう</rt></ruby>は <ruby>診察<rt>しんさつ</rt></ruby>に <ruby>来<rt>き</rt></ruby>て、ありがとうございます。<ruby>風邪<rt>かぜ</rt></ruby>を <ruby>引<rt>ひ</rt></ruby>いていますから、<ruby>今日<rt>きょう</rt></ruby>は <ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>て ください。<ruby>薬<rt>くすり</rt></ruby>は <ruby>食後<rt>しょくご</rt></ruby>に <ruby>飲<rt>の</rt></ruby>まなければ なりません。<ruby>明日<rt>あした</rt></ruby>まで <ruby>お風呂<rt>おふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで ください。<ruby>熱<rt>ねつ</rt></ruby>が <ruby>高<rt>たか</rt></ruby>い <ruby>時<rt>とき</rt></ruby>は、<ruby>無理<rt>むり</rt></ruby>を しないで ください。<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んで ください。<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>月曜日<rt>げつようび</rt></ruby>までに <ruby>再<rt>さい</rt></ruby>び <ruby>来<rt>き</rt></ruby>て ください。<ruby>お大事<rt>おだいじ</rt></ruby>に。",
    "questions": [
      {
        "id": "dk17-1",
        "question": "<ruby>薬<rt>くすり</rt></ruby>は いつ <ruby>飲<rt>の</rt></ruby>みますか。",
        "options": [
          "<ruby>食後<rt>しょくご</rt></ruby>に <ruby>飲<rt>の</rt></ruby>みます",
          "いつでも <ruby>飲<rt>の</rt></ruby>みます",
          "<ruby>食前<rt>しょくぜん</rt></ruby>に <ruby>飲<rt>の</rt></ruby>みます",
          "<ruby>寝<rt>ね</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に <ruby>飲<rt>の</rt></ruby>みます"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tìm thông tin thời gian]\n• Dịch nghĩa: Thuốc uống khi nào?\n• Quy tắc & Loại trừ: Trong bài ghi 「薬は食後に飲まなければなりません」, nên chọn 「食後に飲みます」."
      },
      {
        "id": "dk17-2",
        "question": "いつまで <ruby>お風呂<rt>おふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ってはいけませんか。",
        "options": [
          "<ruby>今日<rt>きょう</rt></ruby>まで",
          "<ruby>月曜日<rt>げつようび</rt></ruby>まで",
          "ずっと",
          "<ruby>明日<rt>あした</rt></ruby>まで"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Trung bình | Trọng tâm: Thời hạn]\n• Dịch nghĩa: Không được tắm cho đến khi nào?\n• Quy tắc & Loại trừ: Bài ghi 「明日までお風呂に入らないでください」, nghĩa là không được tắm cho đến ngày mai."
      },
      {
        "id": "dk17-3",
        "question": "<ruby>次<rt>つぎ</rt></ruby>の <ruby>診察<rt>しんさつ</rt></ruby>は いつですか。",
        "options": [
          "<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>月曜日<rt>げつようび</rt></ruby>まで",
          "<ruby>明日<rt>あした</rt></ruby>",
          "<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>火曜日<rt>かようび</rt></ruby>",
          "<ruby>今日<rt>きょう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Trung bình | Trọng tâm: Thời hạn]\n• Dịch nghĩa: Lần khám tiếp theo là khi nào?\n• Quy tắc & Loại trừ: Bài ghi 「来週の月曜日までに再び来てください」, nên chọn thời hạn là thứ Hai tuần sau."
      },
      {
        "id": "dk17-4",
        "question": "<ruby>病院<rt>びょういん</rt></ruby>の <ruby>注意<rt>ちゅうい</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>熱<rt>ねつ</rt></ruby>が <ruby>高<rt>たか</rt></ruby>い <ruby>時<rt>とき</rt></ruby>は <ruby>無理<rt>むり</rt></ruby>を しても いいです",
          "<ruby>熱<rt>ねつ</rt></ruby>が <ruby>高<rt>たか</rt></ruby>い <ruby>時<rt>とき</rt></ruby>は <ruby>無理<rt>むり</rt></ruby>を しないで ください",
          "<ruby>今日<rt>きょう</rt></ruby>は <ruby>遅<rt>おそ</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>て ください",
          "<ruby>薬<rt>くすり</rt></ruby>は <ruby>飲<rt>の</rt></ruby>まなくても いいです"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Đối chiếu nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài?\n• Quy tắc & Loại trừ: Bài ghi 「熱が高い時は、無理をしないでください」, nên phương án cuối cùng là chính xác."
      },
      {
        "id": "dk17-5",
        "question": "<ruby>患者<rt>かんじゃ</rt></ruby>は <ruby>今日<rt>きょう</rt></ruby> <ruby>何<rt>なん</rt></ruby>をしなければなりませんか。",
        "options": [
          "<ruby>お風呂<rt>おふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ります",
          "<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みません",
          "<ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>ます",
          "<ruby>無理<rt>むり</rt></ruby>を します"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Hành động cần làm]\n• Dịch nghĩa: Bệnh nhân phải làm gì hôm nay?\n• Quy tắc & Loại trừ: Bài ghi 「今日は早く寝てください」, nên chọn hành động ngủ sớm."
      }
    ],
    "translation": "Gửi các bệnh nhân. Cảm ơn quý vị đã đến khám hôm nay. Vì quý vị đang bị cảm, hôm nay hãy ngủ sớm. Thuốc phải uống sau bữa ăn. Xin đừng tắm cho đến ngày mai. Khi bị sốt cao, xin đừng làm việc quá sức. Xin hãy uống nhiều nước. Xin hãy đến khám lại trước thứ Hai tuần sau. Chúc quý vị mau khỏe."
  },
  {
    "id": "dokkai-18",
    "lessonId": "bai-18",
    "title": "Bài Đọc Hiểu - Bài 18 Minna",
    "subTitle": "Hồ sơ câu lạc bộ & kỹ năng thành viên (Club profile & member skills)",
    "description": "Đọc đoạn văn về sở thích và khả năng của các thành viên trong câu lạc bộ để trả lời câu hỏi.",
    "passage": "わたしの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>写真<rt>しゃしん</rt></ruby>です。 <ruby>週末<rt>しゅまつ</rt></ruby>、<ruby>公園<rt>こうえん</rt></ruby>で <ruby>動物<rt>どうぶつ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>る ことが できます。 <ruby>田中<rt>たなか</rt></ruby>さんは ピアノを <ruby>弾<rt>ひ</rt></ruby>く ことが できます。 <ruby>彼<rt>かれ</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> <ruby>練習<rt>れんしゅう</rt></ruby>します。 <ruby>佐藤<rt>さとう</rt></ruby>さんは <ruby>車<rt>くるま</rt></ruby>を <ruby>運転<rt>うんてん</rt></ruby>する ことが できます。 <ruby>彼女<rt>かのじょ</rt></ruby>は <ruby>旅行<rt>りょこう</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に、いつも <ruby>車<rt>くるま</rt></ruby>を <ruby>洗<rt>あら</rt></ruby>います。 <ruby>私<rt>わたし</rt></ruby>たちは <ruby>来月<rt>らいげつ</rt></ruby> <ruby>国際<rt>こくさい</rt></ruby> <ruby>交流<rt>こうりゅう</rt></ruby> <ruby>会<rt>かい</rt></ruby>を <ruby>予約<rt>よやく</rt></ruby>します。 ぜひ <ruby>参加<rt>さんか</rt></ruby>して ください。",
    "questions": [
      {
        "id": "dk18-1",
        "question": "<ruby>私<rt>わたし</rt></ruby>は <ruby>週末<rt>しゅまつ</rt></ruby>、どこで <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
        "options": [
          "<ruby>家<rt>いえ</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>",
          "<ruby>会社<rt>かいしゃ</rt></ruby>",
          "<ruby>学校<rt>がっこう</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Thông tin địa điểm]\n• Dịch nghĩa: Tôi chụp ảnh ở đâu vào cuối tuần?\n• Quy tắc & Loại trừ: Dựa vào câu 「週末、公園で動物の写真を撮る」, đáp án là 「公園」."
      },
      {
        "id": "dk18-2",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>を <ruby>毎日<rt>まいにち</rt></ruby> しますか。",
        "options": [
          "ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>します",
          "<ruby>予約<rt>よやく</rt></ruby>します",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ります",
          "<ruby>車<rt>くるま</rt></ruby>を <ruby>洗<rt>あら</rt></ruby>います"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Hành động]\n• Dịch nghĩa: Anh Tanaka làm gì mỗi ngày?\n• Quy tắc & Loại trừ: Câu văn nói 「彼は毎日練習します」 (anh ấy luyện tập mỗi ngày) sau khi nhắc đến việc chơi piano."
      },
      {
        "id": "dk18-3",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby>さんは <ruby>旅行<rt>りょこう</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>車<rt>くるま</rt></ruby>を <ruby>運転<rt>うんてん</rt></ruby>します",
          "<ruby>車<rt>くるま</rt></ruby>を <ruby>洗<rt>あら</rt></ruby>います",
          "ピアノを <ruby>弾<rt>ひ</rt></ruby>きます",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ります"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Trình tự thời gian]\n• Dịch nghĩa: Chị Sato làm gì trước chuyến du lịch?\n• Quy tắc & Loại trừ: Dựa vào câu 「旅行の前に、いつも車を洗います」, đáp án là 「車を洗います」."
      },
      {
        "id": "dk18-4",
        "question": "<ruby>趣味<rt>しゅみ</rt></ruby>と <ruby>国際<rt>こくさい</rt></ruby><ruby>交流<rt>こうりゅう</rt></ruby><ruby>会<rt>かい</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>車<rt>くるま</rt></ruby>を <ruby>運転<rt>うんてん</rt></ruby>する ことが できます",
          "<ruby>私<rt>わたし</rt></ruby>は ピアノを <ruby>弾<rt>ひ</rt></ruby>く ことが できます",
          "<ruby>佐藤<rt>さとう</rt></ruby>さんは <ruby>車<rt>くるま</rt></ruby>を <ruby>洗<rt>あら</rt></ruby>う ことが できます",
          "<ruby>私<rt>わたし</rt></ruby>たちは <ruby>来月<rt>らいげつ</rt></ruby> <ruby>国際<rt>こくさい</rt></ruby> <ruby>交流<rt>こうりゅう</rt></ruby> <ruby>会<rt>かい</rt></ruby>を <ruby>予約<rt>よやく</rt></ruby>します"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài đọc?\n• Quy tắc & Loại trừ: Các phương án khác sai chủ ngữ hoặc hành động. Câu cuối khớp với thông tin 「来月国際交流会を予約します」."
      },
      {
        "id": "dk18-5",
        "question": "<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>車<rt>くるま</rt></ruby>を <ruby>洗<rt>あら</rt></ruby>います",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ります",
          "<ruby>国際<rt>こくさい</rt></ruby> <ruby>交流<rt>こうりゅう</rt></ruby> <ruby>会<rt>かい</rt></ruby>を <ruby>予約<rt>よやく</rt></ruby>します",
          "ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>します"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Kế hoạch]\n• Dịch nghĩa: Tháng sau sẽ làm gì?\n• Quy tắc & Loại trừ: Bài đọc nêu rõ kế hoạch 「来月国際交流会を予約します」."
      }
    ],
    "translation": "Sở thích của tôi là nhiếp ảnh. Cuối tuần, tôi có thể chụp ảnh động vật ở công viên. Anh Tanaka có thể chơi đàn piano. Anh ấy luyện tập mỗi ngày. Chị Sato có thể lái xe ô tô. Trước mỗi chuyến du lịch, chị ấy luôn rửa xe. Chúng tôi sẽ đặt chỗ cho buổi giao lưu quốc tế vào tháng sau. Nhất định hãy tham gia nhé."
  },
  {
    "id": "dokkai-19",
    "lessonId": "bai-19",
    "title": "Bài Đọc Hiểu - Bài 19 Minna",
    "subTitle": "Nhật ký trải nghiệm cuối tuần / chuyến leo núi (Weekend experience diary)",
    "description": "Đọc đoạn văn ngắn về chuyến leo núi và các hoạt động trải nghiệm cuối tuần của Yamada, sau đó trả lời các câu hỏi kiểm tra độ hiểu nội dung.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>は <ruby>先週末<rt>せんしゅうまつ</rt></ruby>、<ruby>友人<rt>ゆうじん</rt></ruby>と <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>高<rt>たか</rt></ruby>い <ruby>山<rt>やま</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りました。<ruby>前<rt>まえ</rt></ruby>に <ruby>一度<rt>いちど</rt></ruby>も <ruby>山<rt>やま</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>った こと が ありませんでしたから、<ruby>少<rt>すこ</rt></ruby>し <ruby>心配<rt>しんぱい</rt></ruby>でした。でも、<ruby>天気<rt>てんき</rt></ruby>が よくて、<ruby>山<rt>やま</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>から <ruby>見<rt>み</rt></ruby>た <ruby>景色<rt>けしき</rt></ruby>は <ruby>本当<rt>ほんとう</rt></ruby>に きれいでした。お<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べたり、<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ったり して、とても たのしかったです。これからは もっと <ruby>体<rt>からだ</rt></ruby>を <ruby>鍛<rt>きた</rt></ruby>えて、いろいろな <ruby>所<rt>ところ</rt></ruby>へ <ruby>旅行<rt>りょこう</rt></ruby>したいです。",
    "questions": [
      {
        "id": "dk19-1",
        "question": "<ruby>主人公<rt>しゅじんこう</rt></ruby>は <ruby>先週末<rt>せんしゅうまつ</rt></ruby>、<ruby>何<rt>なん</rt></ruby>を しましたか。",
        "options": [
          "<ruby>部屋<rt>へや</rt></ruby>の <ruby>掃除<rt>そうじ</rt></ruby>を しました",
          "<ruby>海<rt>うみ</rt></ruby>で <ruby>泳<rt>およ</rt></ruby>ぎました",
          "<ruby>山<rt>やま</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りました",
          "<ruby>外国<rt>がいこく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Xác định hành động chính trong đoạn văn]\n• Dịch nghĩa: Nhân vật chính đã làm gì vào cuối tuần trước? - Đã đi leo núi.\n• Quy tắc & Loại trừ: Đoạn văn mở đầu bằng 「私は先週末、友人と一緒に高い山に登りました」 nên đáp án chính xác là 「山に登りました」. Các phương án về biển, dọn phòng hay đi nước ngoài không được nhắc đến."
      },
      {
        "id": "dk19-2",
        "question": "<ruby>山<rt>やま</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>、<ruby>主人公<rt>しゅじんこう</rt></ruby>は どうでしたか。",
        "options": [
          "とても <ruby>楽<rt>たの</rt></ruby>しみでした",
          "<ruby>少<rt>すこ</rt></ruby>し <ruby>心配<rt>しんぱい</rt></ruby>でした",
          "とても <ruby>寒<rt>さむ</rt></ruby>かったです",
          "<ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>疲<rt>つか</rt></ruby>れませんでした"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do / Trạng thái | Độ khó: Dễ | Trọng tâm: Tìm trạng thái tâm lý trước sự việc]\n• Dịch nghĩa: Trước khi leo núi, nhân vật chính cảm thấy thế nào? - Hơi lo lắng một chút.\n• Quy tắc & Loại trừ: Văn bản viết 「前に一度も山に登ったことがありませんでしたから、少し心配でした」 nên đáp án đúng là 「少し心配でした」. Các phương án khác mâu thuẫn với nội dung."
      },
      {
        "id": "dk19-3",
        "question": "<ruby>山<rt>やま</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>で <ruby>何<rt>なん</rt></ruby>を しましたか。",
        "options": [
          "ごはんを <ruby>食<rt>た</rt></ruby>べたり、<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ったりしました",
          "<ruby>日本<rt>にほん</rt></ruby>の <ruby>歌<rt>うた</rt></ruby>を <ruby>練習<rt>れんしゅう</rt></ruby>したりしました",
          "<ruby>部屋<rt>へや</rt></ruby>の <ruby>掃除<rt>そうじ</rt></ruby>を したり、<ruby>洗濯<rt>せんたく</rt></ruby>を したりしました",
          "<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んだりしました"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết hoạt động | Độ khó: Trung bình | Trọng tâm: Nhận diện cấu trúc liệt kê V-たり、V-たり します]\n• Dịch nghĩa: Đã làm gì ở trên núi? - Ăn cơm, chụp ảnh, v.v.\n• Quy tắc & Loại trừ: Đoạn văn ghi rõ 「お昼ごはんを食べたり、写真を撮ったりして」 nên phương án 「ごはんを食べたり、写真を撮ったりしました」 là chính xác. Các phương án khác nhắc đến dọn phòng, hát hay uống thuốc là sai."
      },
      {
        "id": "dk19-4",
        "question": "<ruby>山登<rt>やまのぼ</rt></ruby>りの <ruby>日記<rt>にっき</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>主人公<rt>しゅじんこう</rt></ruby>は <ruby>一人<rt>ひとり</rt></ruby>で <ruby>山<rt>やま</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りました",
          "<ruby>山<rt>やま</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>で <ruby>何<rt>なん</rt></ruby>も しませんでした",
          "<ruby>主人公<rt>しゅじんこう</rt></ruby>は <ruby>今回<rt>こんかい</rt></ruby>が <ruby>初<rt>はじ</rt></ruby>めての <ruby>山<rt>やま</rt></ruby><ruby>登<rt>のぼ</rt></ruby>りでした",
          "<ruby>天気<rt>てんき</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>くて、<ruby>景色<rt>けしき</rt></ruby>が きれいではありませんでした"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Đánh giá nội dung chung | Độ khó: Trung bình | Trọng tâm: Khớp đối chiếu thông tin đúng sai]\n• Dịch nghĩa: Câu nào sau đây đúng với nội dung bài đọc? - Nhân vật chính đây là lần đầu tiên leo núi.\n• Quy tắc & Loại trừ: Bài đọc nêu rõ 「前に一度も山に登ったことがありませんでした」 nên đây là lần đầu tiên. Các ý đi một mình, thời tiết xấu hay không làm gì đều trái ngược văn bản."
      },
      {
        "id": "dk19-5",
        "question": "<ruby>主人公<rt>しゅじんこう</rt></ruby>は <ruby>今後<rt>こんご</rt></ruby>、どうしたいと <ruby>言<rt>い</rt></ruby>っていますか。",
        "options": [
          "<ruby>外国<rt>がいこく</rt></ruby>へ <ruby>引<rt>ひ</rt></ruby><ruby>越<rt>こ</rt></ruby>したいです",
          "もう <ruby>二度<rt>にど</rt></ruby>と <ruby>山<rt>やま</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りたくないです",
          "<ruby>仕事<rt>しごと</rt></ruby>を やめたいです",
          "いろいろな <ruby>所<rt>ところ</rt></ruby>へ <ruby>旅行<rt>りょこう</rt></ruby>したいです"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính / Nguyện vọng | Độ khó: Dễ | Trọng tâm: Nhận biết mong muốn ở cuối đoạn văn]\n• Dịch nghĩa: Nhân vật chính nói rằng sắp tới muốn làm gì? - Muốn đi du lịch đến nhiều nơi.\n• Quy tắc & Loại trừ: Câu cuối cùng ghi rõ 「いろいろな所へ旅行したいです」 nên đáp án đầu tiên chính xác. Các phương án còn lại không phản ánh nguyện vọng trong văn bản."
      }
    ],
    "translation": "Cuối tuần trước, tôi cùng bạn bè đi leo núi cao. Vì trước đó tôi chưa từng leo núi lần nào nên tôi hơi lo lắng. Nhưng thời tiết rất đẹp, phong cảnh nhìn từ trên núi xuống thực sự rất đẹp. Chúng tôi ăn trưa, chụp ảnh và rất vui vẻ. Từ nay tôi muốn rèn luyện cơ thể hơn nữa và muốn đi du lịch đến nhiều nơi khác nhau."
  },
  {
    "id": "dokkai-20",
    "lessonId": "bai-20",
    "title": "Bài Đọc Hiểu - Bài 20 Minna",
    "subTitle": "Chuỗi tin nhắn chat thân mật giữa hai người bạn (Casual friend chat log)",
    "description": "Đọc đoạn hội thoại giữa hai người bạn về kế hoạch cuối tuần và chọn đáp án đúng.",
    "passage": "A: <ruby>明日<rt>あした</rt></ruby>、<ruby>暇<rt>ひま</rt></ruby>？<ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>かない？\nB: <ruby>明日<rt>あした</rt></ruby>は <ruby>忙<rt>いそが</rt></ruby>しいんだ。<ruby>今月<rt>こんげつ</rt></ruby>の <ruby>終<rt>お</rt></ruby>わりに <ruby>試験<rt>しけん</rt></ruby>が あるから。<ruby>勉強<rt>べんきょう</rt></ruby>を しなきゃ いけないんだ。\nA: そうか。じゃあ、<ruby>今月<rt>こんげつ</rt></ruby>の <ruby>終<rt>お</rt></ruby>わりは <ruby>無理<rt>むり</rt></ruby>？\nB: うん、<ruby>無理<rt>むり</rt></ruby>だよ。<ruby>来月<rt>らいげつ</rt></ruby>の <ruby>初<rt>はじ</rt></ruby>めなら <ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だよ。\nA: わかった。<ruby>来月<rt>らいげつ</rt></ruby>の <ruby>初<rt>はじ</rt></ruby>めに <ruby>行<rt>い</rt></ruby>こう！また <ruby>電話<rt>でんわ</rt></ruby>するね。\nB: うん、<ruby>待<rt>ま</rt></ruby>ってるよ。",
    "questions": [
      {
        "id": "dk20-1",
        "question": "Bは <ruby>明日<rt>あした</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます",
          "<ruby>勉強<rt>べんきょう</rt></ruby>を します",
          "<ruby>友達<rt>ともだち</rt></ruby>と <ruby>会<rt>あ</rt></ruby>います",
          "<ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>きます"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Nội dung bài đọc]\n• Dịch nghĩa: Ngày mai B làm gì?\n• Quy tắc & Loại trừ: Trong bài B nói 「勉強を しなきゃいけないんだ」 (phải học bài), nên chọn 「勉強を します」."
      },
      {
        "id": "dk20-2",
        "question": "<ruby>映画<rt>えいが</rt></ruby>は いつ <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "<ruby>今月<rt>こんげつ</rt></ruby>の <ruby>終<rt>お</rt></ruby>わり",
          "<ruby>来月<rt>らいげつ</rt></ruby>の <ruby>終<rt>お</rt></ruby>わり",
          "<ruby>明日<rt>あした</rt></ruby>",
          "<ruby>来月<rt>らいげつ</rt></ruby>の <ruby>初<rt>はじ</rt></ruby>め"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự | Độ khó: Trung bình | Trọng tâm: Thời gian]\n• Dịch nghĩa: Khi nào họ đi xem phim?\n• Quy tắc & Loại trừ: A chốt lại 「来月の 初めに 行こう！」 (Đầu tháng sau đi nhé), nên chọn 「来月の 初め」."
      },
      {
        "id": "dk20-3",
        "question": "Bは <ruby>今月<rt>こんげつ</rt></ruby>の <ruby>終<rt>お</rt></ruby>わりに <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>く ことが できますか。",
        "options": [
          "いいえ、<ruby>行<rt>い</rt></ruby>く ことが できません",
          "はい、<ruby>行<rt>い</rt></ruby>く ことが できます",
          "はい、<ruby>試験<rt>しけん</rt></ruby>が あります",
          "いいえ、<ruby>映画<rt>えいが</rt></ruby>が ありません"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Phủ định | Độ khó: Trung bình | Trọng tâm: Khả năng]\n• Dịch nghĩa: B có thể đi xem phim vào cuối tháng này không?\n• Quy tắc & Loại trừ: B trả lời 「うん、無理だよ」 (Ừ, không được đâu), nên chọn 「いいえ、行くことができません」."
      },
      {
        "id": "dk20-4",
        "question": "<ruby>映画<rt>えいが</rt></ruby>の <ruby>約束<rt>やくそく</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "Aは <ruby>明日<rt>あした</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>します",
          "Bは <ruby>明日<rt>あした</rt></ruby> <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます",
          "<ruby>二人<rt>ふたり</rt></ruby>は <ruby>今月<rt>こんげつ</rt></ruby>の <ruby>終<rt>お</rt></ruby>わりに <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます",
          "<ruby>二人<rt>ふたり</rt></ruby>は <ruby>来月<rt>らいげつ</rt></ruby>の <ruby>初<rt>はじ</rt></ruby>めに <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Nội dung tổng quát]\n• Dịch nghĩa: Câu nào đúng với nội dung bài?\n• Quy tắc & Loại trừ: Hai người đã thống nhất đi vào đầu tháng sau, nên chọn 「二人は 来月の 初めに 映画を 見ます」."
      },
      {
        "id": "dk20-5",
        "question": "Bは <ruby>今月<rt>こんげつ</rt></ruby>の <ruby>終<rt>お</rt></ruby>わりに <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "options": [
          "<ruby>旅行<rt>りょこう</rt></ruby>",
          "<ruby>映画<rt>えいが</rt></ruby>",
          "<ruby>試験<rt>しけん</rt></ruby>",
          "<ruby>勉強<rt>べんきょう</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Lý do]\n• Dịch nghĩa: Cuối tháng này B có việc gì?\n• Quy tắc & Loại trừ: B nói 「今月の 終わりに 試験が あるから」 (Vì cuối tháng này có bài thi), nên chọn 「試験」."
      }
    ],
    "translation": "A: Ngày mai cậu rảnh không? Đi xem phim không?\nB: Ngày mai tớ bận. Vì cuối tháng này có bài thi. Tớ phải học bài.\nA: Thế à. Vậy cuối tháng này không được à?\nB: Ừ, không được đâu. Nếu đầu tháng sau thì được đấy.\nA: Tớ hiểu rồi. Đầu tháng sau đi nhé! Tớ sẽ gọi điện lại nhé.\nB: Ừ, tớ chờ nhé."
  },
  {
    "id": "dokkai-21",
    "lessonId": "bai-21",
    "title": "Bài Đọc Hiểu - Bài 21 Minna",
    "subTitle": "Góc ý kiến học sinh về quy định trường học (Student opinion board post)",
    "description": "Đọc bài viết trên bảng tin của trường và trả lời các câu hỏi về ý kiến của học sinh.",
    "passage": "わたしは <ruby>学校<rt>がっこう</rt></ruby>の <ruby>規則<rt>きそく</rt></ruby>について <ruby>意見<rt>いけん</rt></ruby>が あります。<ruby>今<rt>いま</rt></ruby>の <ruby>規則<rt>きそく</rt></ruby>は <ruby>少<rt>すこ</rt></ruby>し <ruby>不便<rt>ふべん</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>います。<ruby>特<rt>とく</rt></ruby>に <ruby>携帯電話<rt>けいたいでんわ</rt></ruby>の <ruby>規則<rt>きそく</rt></ruby>です。<ruby>学校<rt>がっこう</rt></ruby>で <ruby>携帯電話<rt>けいたいでんわ</rt></ruby>を <ruby>使<rt>つか</rt></ruby>ってはいけません。でも、<ruby>急<rt>きゅう</rt></ruby>な <ruby>用事<rt>ようじ</rt></ruby>の <ruby>時<rt>とき</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>と <ruby>連絡<rt>れんらく</rt></ruby>が できなくて <ruby>困<rt>こま</rt></ruby>ります。<ruby>他<rt>ほか</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>も <ruby>同<rt>おな</rt></ruby>じだと <ruby>思<rt>おも</rt></ruby>います。<ruby>来週<rt>らいしゅう</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>と <ruby>話<rt>はなし</rt></ruby>を します。<ruby>教室<rt>きょうしつ</rt></ruby>では <ruby>使<rt>つか</rt></ruby>いませんが、<ruby>昼休<rt>ひるやす</rt></ruby>みは <ruby>使<rt>つか</rt></ruby>っても いいと <ruby>言<rt>い</rt></ruby>いたいです。<ruby>規則<rt>きそく</rt></ruby>を <ruby>変<rt>か</rt></ruby>えてほしいと <ruby>言<rt>い</rt></ruby>います。",
    "questions": [
      {
        "id": "dk21-1",
        "question": "この <ruby>学生<rt>がくせい</rt></ruby>は <ruby>何<rt>なに</rt></ruby>について <ruby>意見<rt>いけん</rt></ruby>が ありますか。",
        "options": [
          "<ruby>携帯電話<rt>けいたいでんわ</rt></ruby>の <ruby>値段<rt>ねだん</rt></ruby>",
          "<ruby>先生<rt>せんせい</rt></ruby>の <ruby>話<rt>はなし</rt></ruby>",
          "<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>予定<rt>よてい</rt></ruby>",
          "<ruby>学校<rt>がっこう</rt></ruby>の <ruby>規則<rt>きそく</rt></ruby>"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tìm thông tin chính]\n• Dịch nghĩa: Học sinh này có ý kiến về vấn đề gì? - Quy định của nhà trường.\n• Quy tắc & Loại trừ: Câu đầu tiên của bài viết nêu rõ 「わたしは学校の規則について意見があります」."
      },
      {
        "id": "dk21-2",
        "question": "<ruby>学生<rt>がくせい</rt></ruby>は <ruby>携帯電話<rt>けいたいでんわ</rt></ruby>の <ruby>規則<rt>きそく</rt></ruby>を どう <ruby>思<rt>おも</rt></ruby>っていますか。",
        "options": [
          "<ruby>変<rt>か</rt></ruby>えなくていい",
          "<ruby>少<rt>すこ</rt></ruby>し <ruby>不便<rt>ふべん</rt></ruby>だ",
          "とても <ruby>便利<rt>べんり</rt></ruby>だ",
          "とても <ruby>大切<rt>たいせつ</rt></ruby>だ"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Nội dung | Độ khó: Dễ | Trọng tâm: Hiểu cảm xúc]\n• Dịch nghĩa: Học sinh nghĩ thế nào về quy định điện thoại? - Hơi bất tiện.\n• Quy tắc & Loại trừ: Bài viết ghi 「今の規則は少し不便だと思います」."
      },
      {
        "id": "dk21-3",
        "question": "<ruby>学生<rt>がくせい</rt></ruby>は <ruby>来週<rt>らいしゅう</rt></ruby> <ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>先生<rt>せんせい</rt></ruby>と <ruby>話<rt>はなし</rt></ruby>を します",
          "<ruby>携帯電話<rt>けいたいでんわ</rt></ruby>を <ruby>買<rt>か</rt></ruby>います",
          "<ruby>規則<rt>きそく</rt></ruby>を <ruby>守<rt>まも</rt></ruby>ります",
          "<ruby>他<rt>ほか</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>と <ruby>遊<rt>あそ</rt></ruby>びます"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự | Độ khó: Dễ | Trọng tâm: Hành động tương lai]\n• Dịch nghĩa: Tuần sau học sinh sẽ làm gì? - Nói chuyện với giáo viên.\n• Quy tắc & Loại trừ: Bài viết ghi 「来週、先生と話をします」."
      },
      {
        "id": "dk21-4",
        "question": "<ruby>学校<rt>がっこう</rt></ruby>の <ruby>規則<rt>きそく</rt></ruby>についての <ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>先生<rt>せんせい</rt></ruby>は <ruby>規則<rt>きそく</rt></ruby>を <ruby>変<rt>か</rt></ruby>えました",
          "<ruby>学校<rt>がっこう</rt></ruby>で <ruby>携帯電話<rt>けいたいでんわ</rt></ruby>を <ruby>使<rt>つか</rt></ruby>ってもいいです",
          "<ruby>学生<rt>がくせい</rt></ruby>は <ruby>規則<rt>きそく</rt></ruby>を <ruby>変<rt>か</rt></ruby>えてほしいと <ruby>思<rt>おも</rt></ruby>っています",
          "<ruby>他<rt>ほか</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>は <ruby>規則<rt>きそく</rt></ruby>が <ruby>便利<rt>べんり</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>っています"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài? - Học sinh muốn thay đổi quy định.\n• Quy tắc & Loại trừ: Bài viết ghi 「規則を変えてほしいと言います」, các câu khác trái ngược với nội dung bài."
      },
      {
        "id": "dk21-5",
        "question": "<ruby>学生<rt>がくせい</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>言<rt>い</rt></ruby>いたいですか。",
        "options": [
          "<ruby>規則<rt>きそく</rt></ruby>を <ruby>変<rt>か</rt></ruby>えてほしい",
          "<ruby>携帯電話<rt>けいたいでんわ</rt></ruby>を <ruby>買<rt>か</rt></ruby>ってほしい",
          "<ruby>学校<rt>がっこう</rt></ruby>を <ruby>休<rt>やす</rt></ruby>みたい",
          "<ruby>先生<rt>せんせい</rt></ruby>と <ruby>話<rt>はなし</rt></ruby>をしたくない"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Mục đích bài viết]\n• Dịch nghĩa: Học sinh muốn nói điều gì? - Muốn thay đổi quy định.\n• Quy tắc & Loại trừ: Mục đích chính của bài viết là bày tỏ mong muốn thay đổi quy định hiện tại."
      }
    ],
    "translation": "Tôi có ý kiến về quy định của nhà trường. Tôi nghĩ quy định hiện tại hơi bất tiện. Đặc biệt là quy định về điện thoại di động. Ở trường không được sử dụng điện thoại di động. Nhưng khi có việc gấp, vì không thể liên lạc với gia đình nên tôi rất khó xử. Tôi nghĩ các học sinh khác cũng nghĩ như vậy. Tuần sau, tôi sẽ nói chuyện với giáo viên. Tôi muốn nói rằng trong lớp học thì không dùng, nhưng giờ nghỉ trưa thì có thể dùng. Tôi sẽ nói rằng tôi muốn thay đổi quy định."
  },
  {
    "id": "dokkai-22",
    "lessonId": "bai-22",
    "title": "Bài Đọc Hiểu - Bài 22 Minna",
    "subTitle": "Tin rao tìm phòng trọ / mô tả căn hộ cho thuê (Apartment rental listing)",
    "description": "Đọc đoạn văn ngắn giới thiệu về căn hộ cho thuê và trả lời các câu hỏi đọc hiểu kiểm tra ngữ pháp mệnh đề định ngữ bài 22.",
    "passage": "ここは <ruby>私<rt>わたし</rt></ruby>が <ruby>住<rt>す</rt></ruby>んで いる <ruby>部屋<rt>へや</rt></ruby>です。この <ruby>部屋<rt>へや</rt></ruby>は <ruby>会社<rt>かいしゃ</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ですから、まいにち <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>歩<rt>ある</rt></ruby>いて <ruby>行<rt>い</rt></ruby>きます。<ruby>部屋<rt>へや</rt></ruby>は あまり <ruby>広<rt>ひろ</rt></ruby>くありませんが、<ruby>家賃<rt>やちん</rt></ruby>は <ruby>安<rt>やす</rt></ruby>い です。きのう デパートで <ruby>買<rt>か</rt></ruby>った <ruby>机<rt>つくえ</rt></ruby>と <ruby>椅子<rt>いす</rt></ruby>が あります。あした <ruby>友<rt>とも</rt></ruby>だちが <ruby>来<rt>く</rt></ruby>る <ruby>約束<rt>やくそく</rt></ruby>が ありますが、まだ <ruby>部屋<rt>へや</rt></ruby>の <ruby>掃除<rt>そうじ</rt></ruby>を する <ruby>時間<rt>じかん</rt></ruby>が ありません。でも、とても すてきな <ruby>部屋<rt>へや</rt></ruby>です。",
    "questions": [
      {
        "id": "dk22-1",
        "question": "<ruby>部屋<rt>へや</rt></ruby>と <ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>距離<rt>きょり</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "<ruby>会社<rt>かいしゃ</rt></ruby>まで <ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。",
          "<ruby>会社<rt>かいしゃ</rt></ruby>は ありません。",
          "<ruby>会社<rt>かいしゃ</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>いです。",
          "<ruby>会社<rt>かいしゃ</rt></ruby>から <ruby>遠<rt>とお</rt></ruby>いです。"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Xác định khoảng cách từ phòng đến công ty]\n• Dịch nghĩa: Câu hỏi: Về khoảng cách giữa phòng và công ty, cái nào là đúng? - Phương án đúng: Gần công ty.\n• Quy tắc & Loại trừ: Bài đọc ghi rõ 「この 部屋は 会社から 近い です」 nên chọn 「会社から 近いです」. Các phương án khác trái ngược hoặc không đúng với văn bản."
      },
      {
        "id": "dk22-2",
        "question": "<ruby>話<rt>はなし</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で、<ruby>机<rt>つくえ</rt></ruby>は いつ <ruby>買<rt>か</rt></ruby>いましたか。",
        "options": [
          "<ruby>明日<rt>あした</rt></ruby>",
          "<ruby>昨日<rt>きのう</rt></ruby>",
          "<ruby>今日<rt>きょう</rt></ruby>",
          "<ruby>来週<rt>らいしゅう</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Thời gian hành động | Độ khó: Dễ | Trọng tâm: Xác định thời gian mua bàn]\n• Dịch nghĩa: Câu hỏi: Trong bài, cái bàn được mua khi nào? - Phương án đúng: Hôm qua.\n• Quy tắc & Loại trừ: Mệnh đề định ngữ ghi 「きのう デパートで 買った 机」 nghĩa là chiếc bàn đã mua ngày hôm qua. Do đó chọn 「昨日」."
      },
      {
        "id": "dk22-3",
        "question": "<ruby>部屋<rt>へや</rt></ruby>の <ruby>掃除<rt>そうじ</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "<ruby>掃除<rt>そうじ</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>が ありません。",
          "もう <ruby>掃除<rt>そうじ</rt></ruby>を しました。",
          "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>掃除<rt>そうじ</rt></ruby>を します。",
          "<ruby>掃除<rt>そうじ</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>が あります。"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định / ngoại lệ | Độ khó: Trung bình | Trọng tâm: Trạng thái thời gian dọn dẹp phòng]\n• Dịch nghĩa: Câu hỏi: Về việc dọn dẹp phòng, cái nào là đúng? - Phương án đúng: Không có thời gian dọn dẹp.\n• Quy tắc & Loại trừ: Văn bản nêu rõ 「まだ 部屋の 掃除を する 時間が ありません」 nên chọn 「掃除の時間 が ありません」. Các phương án còn lại mâu thuẫn với bài đọc."
      },
      {
        "id": "dk22-4",
        "question": "この <ruby>部屋<rt>へや</rt></ruby>についての <ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>明日<rt>あした</rt></ruby> <ruby>家族<rt>かぞく</rt></ruby>が <ruby>来<rt>き</rt></ruby>ます。",
          "<ruby>会社<rt>かいしゃ</rt></ruby>まで <ruby>歩<rt>ある</rt></ruby>いて <ruby>行<rt>い</rt></ruby>きます。",
          "<ruby>部屋<rt>へや</rt></ruby>は あまり すてきでは ありません。",
          "<ruby>家賃<rt>やちん</rt></ruby>は <ruby>高<rt>たか</rt></ruby>いです。"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Khớp nội dung | Độ khó: Trung bình | Trọng tâm: Nhận định đúng theo văn bản]\n• Dịch nghĩa: Câu hỏi: Nội dung nào khớp với bài đọc? - Phương án đúng: Đi bộ đến công ty.\n• Quy tắc & Loại trừ: Đoạn văn có câu 「まいにち 会社へ 歩いて 行きます」, khớp với 「会社まで 歩いて 行きます」. Các phương án khác sai (tiền nhà rẻ, ngày mai bạn đến chứ không phải gia đình, phòng rất tuyệt vời)."
      },
      {
        "id": "dk22-5",
        "question": "この <ruby>部屋<rt>へや</rt></ruby>について、<ruby>話<rt>はなし</rt></ruby>して いる <ruby>人<rt>ひと</rt></ruby>は どう <ruby>思<rt>おも</rt></ruby>って いますか。",
        "options": [
          "あまり よく ない <ruby>部屋<rt>へや</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>って いる。",
          "<ruby>早<rt>はや</rt></ruby>く <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>ししたいと <ruby>思<rt>おも</rt></ruby>って いる。",
          "<ruby>家賃<rt>やちん</rt></ruby>が <ruby>高<rt>たか</rt></ruby>いと <ruby>思<rt>おも</rt></ruby>って いる。",
          "とても すてきな <ruby>部屋<rt>へや</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>って いる。"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính bài đọc | Độ khó: Dễ | Trọng tâm: Cảm nhận chung của nhân vật về căn phòng]\n• Dịch nghĩa: Câu hỏi: Người nói nghĩ gì về căn phòng này? - Phương án đúng: Nghĩ rằng đây là một căn phòng rất tuyệt vời.\n• Quy tắc & Loại trừ: Câu cuối cùng của bài là 「でも、とても すてきな 部屋です」, thể hiện cảm nhận tốt. Các phương án còn lại không đúng."
      }
    ],
    "translation": "Đây là căn phòng tôi đang sống. Vì căn phòng này gần công ty nên mỗi ngày tôi đi bộ đến công ty. Phòng tuy không rộng lắm nhưng tiền thuê nhà rẻ. Có chiếc bàn và cái ghế mà tôi đã mua ở trung tâm thương mại ngày hôm qua. Ngày mai tôi có hẹn bạn đến chơi nhưng vẫn chưa có thời gian để dọn dẹp phòng. Tuy nhiên, đây là một căn phòng rất tuyệt vời."
  },
  {
    "id": "dokkai-23",
    "lessonId": "bai-23",
    "title": "Bài Đọc Hiểu - Bài 23 Minna",
    "subTitle": "Hướng dẫn đường đi bộ từ ga đến địa điểm hẹn (Walking directions memo)",
    "description": "Đọc đoạn văn hướng dẫn đường đi và trả lời các câu hỏi về trình tự và vị trí.",
    "passage": "<ruby>駅<rt>えき</rt></ruby>から <ruby>私<rt>わたし</rt></ruby>の <ruby>家<rt>いえ</rt></ruby>までの <ruby>道<rt>みち</rt></ruby>です。<ruby>駅<rt>えき</rt></ruby>を <ruby>出<rt>で</rt></ruby>て、まっすぐ <ruby>歩<rt>ある</rt></ruby>きます。<ruby>二<rt>ふた</rt></ruby>つ <ruby>目<rt>め</rt></ruby>の <ruby>交差点<rt>こうさてん</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がります。<ruby>少<rt>すこ</rt></ruby>し <ruby>歩<rt>ある</rt></ruby>くと、<ruby>大<rt>おお</rt></ruby>きな <ruby>橋<rt>はし</rt></ruby>が あります。<ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>って、また まっすぐ <ruby>歩<rt>ある</rt></ruby>きます。<ruby>左<rt>ひだり</rt></ruby>に <ruby>大<rt>おお</rt></ruby>きな <ruby>公園<rt>こうえん</rt></ruby>が あります。<ruby>公園<rt>こうえん</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>に <ruby>白<rt>しろ</rt></ruby>い <ruby>建物<rt>たてもの</rt></ruby>の <ruby>私<rt>わたし</rt></ruby>の <ruby>家<rt>いえ</rt></ruby>が あります。<ruby>道<rt>みち</rt></ruby>が わからない とき、<ruby>電話<rt>でんわ</rt></ruby>を してください。<ruby>車<rt>くるま</rt></ruby>に <ruby>気<rt>き</rt></ruby>を <ruby>付<rt>つ</rt></ruby>けて <ruby>来<rt>き</rt></ruby>てください。",
    "questions": [
      {
        "id": "dk23-1",
        "question": "<ruby>交差点<rt>こうさてん</rt></ruby>を どうしますか。",
        "options": [
          "<ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>ります",
          "<ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がります",
          "<ruby>左<rt>ひだり</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がります",
          "まっすぐ <ruby>歩<rt>ある</rt></ruby>きます"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Trình tự chỉ đường]\n• Dịch nghĩa: Bạn làm gì ở ngã tư? - Rẽ phải.\n• Quy tắc & Loại trừ: Đoạn văn ghi rõ 「二つ目の交差点を右へ曲がります」, các phương án khác sai hướng hoặc sai hành động."
      },
      {
        "id": "dk23-2",
        "question": "<ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>った あと、どうしますか。",
        "options": [
          "<ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がります",
          "<ruby>公園<rt>こうえん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ります",
          "<ruby>左<rt>ひだり</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がります",
          "また まっすぐ <ruby>歩<rt>ある</rt></ruby>きます"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự | Độ khó: Dễ | Trọng tâm: Trình tự hành động]\n• Dịch nghĩa: Sau khi băng qua cầu, bạn làm gì? - Đi thẳng tiếp.\n• Quy tắc & Loại trừ: Đoạn văn ghi 「橋を渡って、またまっすぐ歩きます」, khớp với phương án đầu tiên."
      },
      {
        "id": "dk23-3",
        "question": "<ruby>家<rt>いえ</rt></ruby>は どこに ありますか。",
        "options": [
          "<ruby>駅<rt>えき</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>",
          "<ruby>橋<rt>はし</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>",
          "<ruby>交差点<rt>こうさてん</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Vị trí | Độ khó: Dễ | Trọng tâm: Xác định vị trí]\n• Dịch nghĩa: Nhà ở đâu? - Cạnh công viên.\n• Quy tắc & Loại trừ: Đoạn văn ghi 「公園の隣に私の家があります」, các phương án khác sai địa điểm."
      },
      {
        "id": "dk23-4",
        "question": "<ruby>駅<rt>えき</rt></ruby>からの <ruby>道<rt>みち</rt></ruby>の <ruby>案内<rt>あんない</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>公園<rt>こうえん</rt></ruby>は <ruby>左<rt>ひだり</rt></ruby>に あります",
          "<ruby>公園<rt>こうえん</rt></ruby>は <ruby>右<rt>みぎ</rt></ruby>に あります",
          "<ruby>橋<rt>はし</rt></ruby>は <ruby>小<rt>ちい</rt></ruby>さいです",
          "<ruby>交差点<rt>こうさてん</rt></ruby>は <ruby>三<rt>みっ</rt></ruby>つ <ruby>目<rt>め</rt></ruby>です"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài? - Công viên ở bên trái.\n• Quy tắc & Loại trừ: Đoạn văn ghi 「左に大きな公園があります」, các phương án khác sai về hướng, kích thước cầu hoặc số thứ tự ngã tư."
      },
      {
        "id": "dk23-5",
        "question": "この <ruby>案内<rt>あんない</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んだ <ruby>人<rt>ひと</rt></ruby>は、<ruby>来<rt>く</rt></ruby>るとき <ruby>何<rt>なに</rt></ruby>に <ruby>気<rt>き</rt></ruby>を <ruby>付<rt>つ</rt></ruby>けますか。",
        "options": [
          "<ruby>駅<rt>えき</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>",
          "<ruby>車<rt>くるま</rt></ruby>",
          "<ruby>橋<rt>はし</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Hành động cần làm]\n• Dịch nghĩa: Khi đến, bạn cần chú ý cái gì? - Xe cộ.\n• Quy tắc & Loại trừ: Câu cuối đoạn văn là 「車に気を付けて来てください」, nên đáp án là xe cộ."
      }
    ],
    "translation": "Đây là đường từ nhà ga đến nhà tôi. Ra khỏi nhà ga, bạn đi thẳng. Rẽ phải ở ngã tư thứ hai. Đi bộ một chút thì có một cây cầu lớn. Băng qua cầu rồi lại đi thẳng tiếp. Ở bên trái có một công viên lớn. Cạnh công viên có ngôi nhà màu trắng của tôi. Khi không biết đường, hãy gọi điện cho tôi. Hãy chú ý xe cộ khi đến nhé."
  },
  {
    "id": "dokkai-24",
    "lessonId": "bai-24",
    "title": "Bài Đọc Hiểu - Bài 24 Minna",
    "subTitle": "Tin nhắn cảm ơn bạn đã dẫn đi tham quan / tặng quà (Gratitude message after outing)",
    "description": "Đọc tin nhắn cảm ơn và xác định các thông tin về hành động cho nhận đã xảy ra.",
    "passage": "ミラーさんへ。\n<ruby>昨日<rt>きのう</rt></ruby>は <ruby>大阪城<rt>おおさかじょう</rt></ruby>を <ruby>案内<rt>あんない</rt></ruby>してくれて、<ruby>本当<rt>ほんとう</rt></ruby>に ありがとう。ミラーさんの <ruby>説明<rt>せつめい</rt></ruby>は とても <ruby>分<rt>わ</rt></ruby>かりやすかったです。お<ruby>昼<rt>ひる</rt></ruby>の <ruby>時<rt>とき</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>に <ruby>美味しい<rt>おいしい</rt></ruby> <ruby>お弁当<rt>おべんとう</rt></ruby>を <ruby>買<rt>か</rt></ruby>ってくれて、<ruby>感謝<rt>かんしゃ</rt></ruby>しています。そのあと、<ruby>駅<rt>えき</rt></ruby>まで <ruby>送<rt>おく</rt></ruby>ってくれて、<ruby>助<rt>たす</rt></ruby>かりました。お<ruby>礼<rt>れい</rt></ruby>に、<ruby>私<rt>わたし</rt></ruby>の <ruby>国<rt>くに</rt></ruby>の <ruby>お菓子<rt>おかし</rt></ruby>を <ruby>送<rt>おく</rt></ruby>ります。また <ruby>今度<rt>こんど</rt></ruby>、<ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>出<rt>で</rt></ruby>かけましょう。サントスより。",
    "questions": [
      {
        "id": "dk24-1",
        "question": "サントスさんは <ruby>昨日<rt>きのう</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を して もらいましたか。",
        "options": [
          "お<ruby>弁当<rt>おべんとう</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って もらいました",
          "お<ruby>菓子<rt>おかし</rt></ruby>を <ruby>買<rt>か</rt></ruby>って もらいました",
          "お<ruby>菓子<rt>おかし</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って もらいました",
          "お<ruby>弁当<rt>おべんとう</rt></ruby>を <ruby>買<rt>か</rt></ruby>って もらいました"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Xác định hành động]\n• Dịch nghĩa: Santos đã được làm gì vào hôm qua? - Được mua cho cơm hộp.\n• Quy tắc & Loại trừ: Trong bài có đoạn 「私に美味しいお弁当を買ってくれて」, nên đáp án là mua cơm hộp."
      },
      {
        "id": "dk24-2",
        "question": "<ruby>駅<rt>えき</rt></ruby>まで <ruby>送<rt>おく</rt></ruby>ってくれた <ruby>人<rt>ひと</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。",
        "options": [
          "サントスさん",
          "ミラーさん",
          "ミラーさんの <ruby>友達<rt>ともだち</rt></ruby>",
          "サントスさんの <ruby>友達<rt>ともだち</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Đại từ | Độ khó: Dễ | Trọng tâm: Xác định chủ thể]\n• Dịch nghĩa: Ai là người đã tiễn ra ga? - Anh Miller.\n• Quy tắc & Loại trừ: Santos viết thư cho Miller và cảm ơn Miller đã tiễn mình, nên Miller là người thực hiện hành động."
      },
      {
        "id": "dk24-3",
        "question": "サントスさんは <ruby>何<rt>なに</rt></ruby>を <ruby>送<rt>おく</rt></ruby>りますか。",
        "options": [
          "お<ruby>菓子<rt>おかし</rt></ruby>",
          "お<ruby>城<rt>しろ</rt></ruby>の <ruby>人形<rt>にんぎょう</rt></ruby>",
          "お<ruby>弁当<rt>おべんとう</rt></ruby>",
          "お<ruby>礼<rt>れい</rt></ruby>の <ruby>手紙<rt>てがみ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Xác định vật tặng]\n• Dịch nghĩa: Santos sẽ gửi cái gì? - Bánh kẹo.\n• Quy tắc & Loại trừ: Bài viết 「私の国のお菓子を送ります」, nên đáp án là bánh kẹo."
      },
      {
        "id": "dk24-4",
        "question": "サントスさんの <ruby>手紙<rt>てがみ</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "サントスさんは <ruby>自分<rt>じぶん</rt></ruby>で <ruby>駅<rt>えき</rt></ruby>まで <ruby>行<rt>い</rt></ruby>きました",
          "ミラーさんは <ruby>説明<rt>せつめい</rt></ruby>が <ruby>難<rt>むずか</rt></ruby>しかったです",
          "ミラーさんは サントスさんに <ruby>お菓子<rt>おかし</rt></ruby>を もらいました",
          "サントスさんは ミラーさんに <ruby>案内<rt>あんない</rt></ruby>を して もらいました"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Hiểu nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài? - Santos được Miller hướng dẫn.\n• Quy tắc & Loại trừ: Các phương án khác sai vì Miller chưa nhận bánh, Santos được tiễn, và lời giải thích dễ hiểu chứ không khó."
      },
      {
        "id": "dk24-5",
        "question": "サントスさんは <ruby>今後<rt>こんご</rt></ruby>、どうしたいと <ruby>言<rt>い</rt></ruby>っていますか。",
        "options": [
          "ミラーさんに <ruby>お弁当<rt>おべんとう</rt></ruby>を <ruby>作<rt>つく</rt></ruby>ってあげたい",
          "また <ruby>大阪城<rt>おおさかじょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きたい",
          "また <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>出<rt>で</rt></ruby>かけたい",
          "ミラーさんに <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えたい"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Mong muốn]\n• Dịch nghĩa: Santos muốn làm gì trong tương lai? - Muốn cùng đi chơi lần nữa.\n• Quy tắc & Loại trừ: Câu cuối bài là 「また今度、一緒に出かけましょう」, thể hiện mong muốn đi chơi cùng nhau."
      }
    ],
    "translation": "Gửi anh Miller. Cảm ơn anh rất nhiều vì hôm qua đã hướng dẫn tôi tham quan thành Osaka. Lời giải thích của anh rất dễ hiểu. Lúc ăn trưa, cảm ơn anh đã mua cơm hộp ngon cho tôi, tôi rất cảm kích. Sau đó, anh còn tiễn tôi ra tận ga, thật là giúp ích cho tôi quá. Để cảm ơn, tôi sẽ gửi tặng anh bánh kẹo của nước tôi. Lần tới chúng ta lại cùng đi chơi nhé. Santos."
  },
  {
    "id": "dokkai-25",
    "lessonId": "bai-25",
    "title": "Bài Đọc Hiểu - Bài 25 Minna",
    "subTitle": "Thư chia tay chuyển công tác & lời nhắn đồng nghiệp (Farewell transfer message)",
    "description": "Đọc hiểu thư chia tay của một nhân viên sắp chuyển công tác và trả lời các câu hỏi về nội dung.",
    "passage": "みなさん、お<ruby>世話<rt>せわ</rt></ruby>に なりました。わたしは <ruby>来月<rt>らいげつ</rt></ruby> <ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>転勤<rt>てんきん</rt></ruby>します。<ruby>東京<rt>とうきょう</rt></ruby>での <ruby>生活<rt>せいかつ</rt></ruby>は とても <ruby>楽<rt>たの</rt></ruby>しかったです。<ruby>困<rt>こま</rt></ruby>ったことが あったら、いつでも <ruby>電話<rt>でんわ</rt></ruby>して ください。<ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>着<rt>つ</rt></ruby>いたら、すぐ <ruby>連絡<rt>れんらく</rt></ruby>します。<ruby>休<rt>やす</rt></ruby>みの <ruby>日<rt>ひ</rt></ruby>に <ruby>時間<rt>じかん</rt></ruby>が あったら、ぜひ <ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>遊<rt>あそ</rt></ruby>びに <ruby>来<rt>き</rt></ruby>て ください。<ruby>仕事<rt>しごと</rt></ruby>が <ruby>忙<rt>いそが</rt></ruby>しくても、<ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>続<rt>つづ</rt></ruby>けて ください。みなさん、どうぞ お<ruby>元気<rt>げんき</rt></ruby>で。",
    "questions": [
      {
        "id": "dk25-1",
        "question": "この <ruby>人<rt>ひと</rt></ruby>は どこへ <ruby>転勤<rt>てんきん</rt></ruby>しますか。",
        "options": [
          "<ruby>大阪<rt>おおさか</rt></ruby>",
          "<ruby>東京<rt>とうきょう</rt></ruby>",
          "<ruby>世界<rt>せかい</rt></ruby>",
          "<ruby>日本<rt>にほん</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Thông tin địa điểm]\n• Dịch nghĩa: Người này chuyển công tác đến đâu?\n• Quy tắc & Loại trừ: Trong bài viết có câu 「大阪へ転勤します」, nên đáp án là Osaka."
      },
      {
        "id": "dk25-2",
        "question": "<ruby>困<rt>こま</rt></ruby>ったとき、どうしますか。",
        "options": [
          "<ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
          "<ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>続<rt>つづ</rt></ruby>けます",
          "<ruby>連絡<rt>れんらく</rt></ruby>を <ruby>待<rt>ま</rt></ruby>ちます",
          "<ruby>電話<rt>でんわ</rt></ruby>を します"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự | Độ khó: Dễ | Trọng tâm: Hành động]\n• Dịch nghĩa: Khi gặp khó khăn thì làm thế nào?\n• Quy tắc & Loại trừ: Bài viết ghi 「困ったことがあったら、いつでも電話してください」, nên đáp án là gọi điện."
      },
      {
        "id": "dk25-3",
        "question": "この <ruby>人<rt>ひと</rt></ruby>は <ruby>大阪<rt>おおさか</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いたら、<ruby>何<rt>なん</rt></ruby>を しますか。",
        "options": [
          "<ruby>電話<rt>でんわ</rt></ruby>を します",
          "<ruby>連絡<rt>れんらく</rt></ruby>を します",
          "<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>ります",
          "<ruby>勉強<rt>べんきょう</rt></ruby>を します"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Trung bình | Trọng tâm: Hành động sau khi đến]\n• Dịch nghĩa: Người này sau khi đến Osaka sẽ làm gì?\n• Quy tắc & Loại trừ: Bài viết ghi 「大阪へ着いたら、すぐ連絡します」, nên đáp án là liên lạc."
      },
      {
        "id": "dk25-4",
        "question": "<ruby>転勤<rt>てんきん</rt></ruby>の <ruby>手紙<rt>てがみ</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>東京<rt>とうきょう</rt></ruby>での <ruby>生活<rt>せいかつ</rt></ruby>は <ruby>大変<rt>たいへん</rt></ruby>でした",
          "<ruby>忙<rt>いそが</rt></ruby>しいから、<ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>止<rt>や</rt></ruby>めます",
          "<ruby>来月<rt>らいげつ</rt></ruby> <ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
          "<ruby>大阪<rt>おおさか</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いたら、<ruby>電話<rt>でんわ</rt></ruby>を <ruby>待<rt>ま</rt></ruby>ちます"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài đọc?\n• Quy tắc & Loại trừ: Bài viết ghi 「来月大阪へ転勤します」, khớp với phương án 2."
      },
      {
        "id": "dk25-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた <ruby>人<rt>ひと</rt></ruby>は、<ruby>同僚<rt>どうりょう</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を <ruby>頼<rt>たの</rt></ruby>みましたか。",
        "options": [
          "<ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>続<rt>つづ</rt></ruby>けて ください",
          "<ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>来<rt>き</rt></ruby>て ください",
          "<ruby>東京<rt>とうきょう</rt></ruby>で <ruby>頑張<rt>がんば</rt></ruby>って ください",
          "<ruby>電話<rt>でんわ</rt></ruby>を かけて ください"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Lời nhắn]\n• Dịch nghĩa: Người này đã nhờ đồng nghiệp điều gì?\n• Quy tắc & Loại trừ: Bài viết ghi 「忙しくても、勉強を続けてください」, nên đáp án là tiếp tục việc học."
      }
    ],
    "translation": "Mọi người, cảm ơn vì đã giúp đỡ tôi. Tháng sau tôi sẽ chuyển công tác đến Osaka. Cuộc sống ở Tokyo rất vui. Nếu có chuyện gì khó khăn, hãy gọi điện cho tôi bất cứ lúc nào. Sau khi đến Osaka, tôi sẽ liên lạc ngay. Nếu ngày nghỉ có thời gian, nhất định hãy đến Osaka chơi nhé. Dù công việc bận rộn, hãy tiếp tục việc học nhé. Mọi người, chúc mọi người luôn mạnh khỏe."
  },
  {
    "id": "dokkai-26",
    "lessonId": "bai-26",
    "title": "Bài Đọc Hiểu - Bài 26 Minna",
    "subTitle": "Thông báo lịch thu gom và phân loại rác khu dân cư (Municipal garbage sorting notice)",
    "description": "Đọc thông báo về quy định đổ rác và trả lời các câu hỏi về thời gian, địa điểm và cách thức phân loại rác.",
    "passage": "わたしたちの <ruby>町<rt>まち</rt></ruby>の ごみの <ruby>出<rt>だ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>について お<ruby>知<rt>し</rt></ruby>らせします。<ruby>燃<rt>も</rt></ruby>えるごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>に <ruby>出<rt>だ</rt></ruby>してください。<ruby>燃<rt>も</rt></ruby>えないごみは <ruby>土曜日<rt>どようび</rt></ruby>です。<ruby>瓶<rt>びん</rt></ruby>や <ruby>缶<rt>かん</rt></ruby>は <ruby>第<rt>だい</rt></ruby>２<ruby>水曜日<rt>すいようび</rt></ruby>に <ruby>出<rt>だ</rt></ruby>してください。<ruby>場所<rt>ばしょ</rt></ruby>は いつもと <ruby>同<rt>おな</rt></ruby>じ <ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby>です。<ruby>瓶<rt>びん</rt></ruby>と <ruby>缶<rt>かん</rt></ruby>は <ruby>中<rt>なか</rt></ruby>を きれいに <ruby>洗<rt>あら</rt></ruby>ってから、<ruby>別<rt>べつ</rt></ruby>の <ruby>袋<rt>ふくろ</rt></ruby>に <ruby>入<rt>い</rt></ruby>れて ください。<ruby>粗大<rt>そだい</rt></ruby>ごみを <ruby>出<rt>だ</rt></ruby>したい <ruby>時<rt>とき</rt></ruby>は、<ruby>直接<rt>ちょくせつ</rt></ruby> <ruby>市役所<rt>しやくしょ</rt></ruby>に <ruby>連絡<rt>れんらく</rt></ruby>して いただけませんか。<ruby>朝<rt>あさ</rt></ruby> ８<ruby>時<rt>じ</rt></ruby>までに <ruby>出<rt>だ</rt></ruby>さないと、<ruby>収集<rt>しゅうしゅう</rt></ruby>に <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>いません。わからない ことが あったら、いつでも <ruby>市役所<rt>しやくしょ</rt></ruby>に <ruby>聞<rt>き</rt></ruby>いて ください。",
    "questions": [
      {
        "id": "dk26-1",
        "question": "<ruby>燃<rt>も</rt></ruby>えるごみは いつ <ruby>出<rt>だ</rt></ruby>しますか。",
        "options": [
          "<ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>水曜日<rt>すいようび</rt></ruby>",
          "<ruby>毎日<rt>まいにち</rt></ruby>",
          "<ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>",
          "<ruby>木曜日<rt>もくようび</rt></ruby>と <ruby>土曜日<rt>どようび</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Lịch đổ rác]\n• Dịch nghĩa: Rác cháy được đổ vào khi nào? 「Thứ Hai và thứ Năm」\n• Quy tắc & Loại trừ: Dựa vào câu 「燃えるごみは 月曜日と 木曜日に 出してください」 trong bài. Các phương án khác sai thứ trong tuần."
      },
      {
        "id": "dk26-2",
        "question": "<ruby>瓶<rt>びん</rt></ruby>や <ruby>缶<rt>かん</rt></ruby>は いつ <ruby>出<rt>だ</rt></ruby>したら いいですか。",
        "options": [
          "<ruby>毎週<rt>まいしゅう</rt></ruby> <ruby>水曜日<rt>すいようび</rt></ruby>",
          "<ruby>第<rt>だい</rt></ruby>２<ruby>水曜日<rt>すいようび</rt></ruby>",
          "<ruby>第<rt>だい</rt></ruby>２<ruby>土曜日<rt>どようび</rt></ruby>",
          "<ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Trung bình | Trọng tâm: Thời gian cụ thể]\n• Dịch nghĩa: Chai và lon nên đổ vào khi nào? 「Thứ Tư tuần thứ 2」\n• Quy tắc & Loại trừ: Bài viết ghi rõ 「第２水曜日に 出してください」. Loại 「毎週 水曜日」 (mỗi tuần thứ Tư) vì sai tần suất."
      },
      {
        "id": "dk26-3",
        "question": "<ruby>粗大<rt>そだい</rt></ruby>ごみを <ruby>出<rt>だ</rt></ruby>したい <ruby>時<rt>とき</rt></ruby>、どうしたら いいですか。",
        "options": [
          "<ruby>市役所<rt>しやくしょ</rt></ruby>に <ruby>連絡<rt>れんらく</rt></ruby>します",
          "<ruby>近<rt>ちか</rt></ruby>くの <ruby>人<rt>ひと</rt></ruby>に <ruby>聞<rt>き</rt></ruby>きます",
          "<ruby>土曜日<rt>どようび</rt></ruby>に <ruby>出<rt>だ</rt></ruby>します",
          "<ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby>に そのまま <ruby>出<rt>だ</rt></ruby>します"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Hành động cần làm | Độ khó: Trung bình | Trọng tâm: Cách xử lý rác cồng kềnh]\n• Dịch nghĩa: Khi muốn đổ rác cồng kềnh thì nên làm thế nào? 「Liên lạc với ủy ban thành phố」\n• Quy tắc & Loại trừ: Bài viết yêu cầu 「直接 市役所に 連絡して いただけませんか」. Các phương án tự ý đổ ra nơi để rác hoặc đổ vào thứ Bảy là sai quy định."
      },
      {
        "id": "dk26-4",
        "question": "<ruby>町<rt>まち</rt></ruby>の ごみの <ruby>出<rt>だ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "ごみは いつでも <ruby>好<rt>す</rt></ruby>きな <ruby>場所<rt>ばしょ</rt></ruby>に <ruby>出<rt>だ</rt></ruby>して いいです。",
          "８<ruby>時<rt>じ</rt></ruby>を <ruby>過<rt>す</rt></ruby>ぎると、ごみを <ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>って もらえません。",
          "<ruby>燃<rt>も</rt></ruby>えないごみは <ruby>月曜日<rt>げつようび</rt></ruby>に <ruby>出<rt>だ</rt></ruby>します。",
          "<ruby>瓶<rt>びん</rt></ruby>と <ruby>缶<rt>かん</rt></ruby>は <ruby>別<rt>べつ</rt></ruby>の <ruby>場所<rt>ばしょ</rt></ruby>に <ruby>出<rt>だ</rt></ruby>します。"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định đúng sai | Độ khó: Khó | Trọng tâm: Tổng hợp thông tin]\n• Dịch nghĩa: Câu nào đúng với nội dung bài văn? 「Nếu quá 8 giờ thì sẽ không được mang rác đi.」\n• Quy tắc & Loại trừ: Bài viết có câu 「８時までに 出さないと、収集に 間に合いません」 (Nếu không đổ trước 8h thì không kịp thu gom). Các câu khác sai về địa điểm, thời gian hoặc quy định."
      },
      {
        "id": "dk26-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>で <ruby>一番<rt>いちばん</rt></ruby> <ruby>大切<rt>たいせつ</rt></ruby>な ことは <ruby>何<rt>なに</rt></ruby>ですか。",
        "options": [
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby>が できたこと",
          "<ruby>市役所<rt>しやくしょ</rt></ruby>の <ruby>電話番号<rt>でんわばんごう</rt></ruby>が <ruby>変<rt>か</rt></ruby>わったこと",
          "<ruby>毎日<rt>まいにち</rt></ruby> ８<ruby>時<rt>じ</rt></ruby>に <ruby>掃除<rt>そうじ</rt></ruby>を すること",
          "ごみの <ruby>種類<rt>しゅるい</rt></ruby>によって <ruby>出<rt>だ</rt></ruby>す <ruby>日<rt>ひ</rt></ruby>が <ruby>決<rt>き</rt></ruby>まっていること"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Mục đích thông báo]\n• Dịch nghĩa: Điều quan trọng nhất trong thông báo này là gì? 「Việc ngày đổ rác được quyết định tùy theo loại rác.」\n• Quy tắc & Loại trừ: Toàn bộ bài viết liệt kê các loại rác đi kèm với thứ/ngày cụ thể. Các phương án về địa điểm mới, số điện thoại hay việc dọn dẹp hàng ngày không có trong bài."
      }
    ],
    "translation": "Chúng tôi xin thông báo về cách đổ rác của thị trấn chúng ta. Rác cháy được hãy đổ vào thứ Hai và thứ Năm. Rác không cháy được là vào thứ Bảy. Chai lọ và lon thiếc hãy đổ vào thứ Tư tuần thứ 2 của tháng. Địa điểm là nơi để rác như mọi khi. Chai lọ và lon thiếc sau khi rửa sạch bên trong hãy bỏ vào túi riêng. Khi bạn muốn đổ rác cồng kềnh, làm ơn hãy liên lạc trực tiếp với ủy ban thành phố được không ạ? Nếu không đổ trước 8 giờ sáng thì sẽ không kịp giờ thu gom. Nếu có điều gì chưa rõ, xin hãy hỏi ủy ban thành phố bất cứ lúc nào."
  },
  {
    "id": "dokkai-27",
    "lessonId": "bai-27",
    "title": "Bài Đọc Hiểu - Bài 27 Minna",
    "subTitle": "Tờ rơi giới thiệu lớp học ngoại khóa / trung tâm thể thao (Evening class flyer)",
    "description": "Đọc tờ rơi giới thiệu về các lớp học buổi tối tại trung tâm văn hóa, kiểm tra thông tin về khả năng tham gia, thời gian và các tiện ích.",
    "passage": "<ruby>未来<rt>みらい</rt></ruby> <ruby>文化<rt>ぶんか</rt></ruby>センターでは、<ruby>夜<rt>よる</rt></ruby>に さまざまな <ruby>教室<rt>きょうしつ</rt></ruby>を <ruby>開<rt>ひら</rt></ruby>きます。<ruby>仕事<rt>しごと</rt></ruby>が <ruby>終<rt>お</rt></ruby>わってから、<ruby>自分<rt>じぶん</rt></ruby>の <ruby>趣味<rt>しゅみ</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>が できます。<ruby>日本語<rt>にほんご</rt></ruby> <ruby>教室<rt>きょうしつ</rt></ruby>では、<ruby>外国人<rt>がいこくじん</rt></ruby>が <ruby>生活<rt>せいかつ</rt></ruby>の <ruby>会話<rt>かいわ</rt></ruby>を <ruby>上手<rt>じょうず</rt></ruby>に <ruby>話<rt>はな</rt></ruby>す ことが できます。<ruby>料理<rt>りょうり</rt></ruby> <ruby>教室<rt>きょうしつ</rt></ruby>では、いろいろな <ruby>国<rt>くに</rt></ruby>の おいしい <ruby>料理<rt>りょうり</rt></ruby>が つくれます。<ruby>平日<rt>へいじつ</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> <ruby>開<rt>ひら</rt></ruby>きますから、いつでも <ruby>来<rt>く</rt></ruby>る ことが できます。<ruby>駅<rt>えき</rt></ruby>から とても <ruby>近<rt>ちか</rt></ruby>くて、<ruby>建物<rt>たてもの</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>から <ruby>海<rt>うみ</rt></ruby>が よく <ruby>見<rt>み</rt></ruby>えます。<ruby>休憩<rt>きゅうけい</rt></ruby> <ruby>時間<rt>じかん</rt></ruby>には、ロビーで おいしい <ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んで、<ruby>海<rt>うみ</rt></ruby>の <ruby>波<rt>なみ</rt></ruby>の <ruby>音<rt>おと</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえます。ぜひ ご<ruby>参加<rt>さんか</rt></ruby> ください。",
    "questions": [
      {
        "id": "dk27-1",
        "question": "<ruby>未来<rt>みらい</rt></ruby> <ruby>文化<rt>ぶんか</rt></ruby>センターでは いつ <ruby>教室<rt>きょうしつ</rt></ruby>を <ruby>開<rt>ひら</rt></ruby>きますか。",
        "options": [
          "<ruby>夜<rt>よる</rt></ruby>",
          "<ruby>昼間<rt>ひるま</rt></ruby>",
          "<ruby>朝<rt>あさ</rt></ruby>",
          "<ruby>日曜日<rt>にちようび</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Xác định thời gian tổ chức]\n• Dịch nghĩa: Trung tâm Văn hóa Mirai mở lớp học khi nào? - Buổi tối.\n• Quy tắc & Loại trừ: Đoạn văn nêu rõ 「夜にさまざまな教室を開きます」. Do đó 「夜」 là đáp án chính xác, loại trừ các mốc thời gian khác."
      },
      {
        "id": "dk27-2",
        "question": "<ruby>日本語<rt>にほんご</rt></ruby> <ruby>教室<rt>きょうしつ</rt></ruby>では <ruby>何<rt>なに</rt></ruby>が できますか。",
        "options": [
          "<ruby>海<rt>うみ</rt></ruby>が <ruby>見<rt>み</rt></ruby>える",
          "<ruby>本棚<rt>ほんだな</rt></ruby>が つくれる",
          "<ruby>上手<rt>じょうず</rt></ruby>に <ruby>話<rt>はな</rt></ruby>せる",
          "いろいろな <ruby>料理<rt>りょうり</rt></ruby>が つくれる"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nội dung chi tiết | Độ khó: Trung bình | Trọng tâm: Mục đích lớp tiếng Nhật]\n• Dịch nghĩa: Ở lớp học tiếng Nhật thì có thể làm được gì? - Có thể nói chuyện giỏi.\n• Quy tắc & Loại trừ: Dữ liệu bài đọc ghi 「日本語教室では、外国人が生活の会話を上手に話すことができます」. Các phương án khác thuộc lớp nấu ăn hoặc cảnh quan xung quanh."
      },
      {
        "id": "dk27-3",
        "question": "<ruby>建物<rt>たてもの</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>から <ruby>何<rt>なん</rt></ruby>が <ruby>見<rt>み</rt></ruby>えますか。",
        "options": [
          "<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>",
          "<ruby>海<rt>うみ</rt></ruby>",
          "<ruby>花火<rt>はなび</rt></ruby>",
          "<ruby>山<rt>やま</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cảnh quan | Độ khó: Dễ | Trọng tâm: Tìm vị trí quan sát]\n• Dịch nghĩa: Từ trước tòa nhà có thể nhìn thấy gì? - Biển.\n• Quy tắc & Loại trừ: Câu văn trong bài 「建物の前から海がよく見えます」 chỉ rõ đối tượng là 「海」. Các phương án núi, máy bán hàng, pháo hoa không xuất hiện ở vị trí này."
      },
      {
        "id": "dk27-4",
        "question": "<ruby>未来<rt>みらい</rt></ruby> <ruby>文化<rt>ぶんか</rt></ruby>センターの <ruby>教室<rt>きょうしつ</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に <ruby>勉強<rt>べんきょう</rt></ruby>が できます",
          "<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby>だけ <ruby>開<rt>ひら</rt></ruby>きます",
          "<ruby>料理<rt>りょうり</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>では <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>話<rt>はな</rt></ruby>します",
          "<ruby>平日<rt>へいじつ</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> <ruby>教室<rt>きょうしつ</rt></ruby>が <ruby>開<rt>ひら</rt></ruby>きます"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định nội dung | Độ khó: Trung bình | Trọng tâm: Khớp thông tin toàn bài]\n• Dịch nghĩa: Phương án nào khớp với nội dung bài đọc? - Buổi tối các ngày trong tuần lớp học mở cửa mỗi ngày.\n• Quy tắc & Loại trừ: Bài đọc ghi 「平日の夜は毎日開きますから」 hoàn toàn khớp với phương án đầu. Các phương án còn lại sai lệch về thời gian hoặc nội dung lớp học."
      },
      {
        "id": "dk27-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んだ <ruby>人<rt>ひと</rt></ruby>は、いつ センターの <ruby>教室<rt>きょうしつ</rt></ruby>へ <ruby>来<rt>く</rt></ruby>ることが できますか。",
        "options": [
          "<ruby>朝<rt>あさ</rt></ruby>だけ",
          "<ruby>日曜日<rt>にちようび</rt></ruby>だけ",
          "いつでも",
          "<ruby>昼間<rt>ひるま</rt></ruby>だけ"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính và suy luận | Độ khó: Trung bình | Trọng tâm: Khả năng tham gia thời gian]\n• Dịch nghĩa: Có thể đến lớp học của trung tâm này vào lúc nào? - Bất cứ lúc nào.\n• Quy tắc & Loại trừ: Bài đọc nêu rõ 「いつでも来ることができます」 vì mở cửa mỗi tối trong tuần. Các phương án giới hạn thời gian đều trái ngược với nội dung."
      }
    ],
    "translation": "Tại Trung tâm Văn hóa Mirai, chúng tôi tổ chức nhiều lớp học khác nhau vào buổi tối. Sau khi công việc kết thúc, bạn có thể học tập sở thích của bản thân. Tại lớp học tiếng Nhật, người nước ngoài có thể nói tốt các đoạn hội thoại đời sống. Tại lớp học nấu ăn, bạn có thể làm các món ăn ngon của nhiều quốc gia. Vì các buổi tối ngày thường mở cửa mỗi ngày nên bạn lúc nào cũng có thể đến. Trung tâm rất gần nhà ga, và từ phía trước tòa nhà có thể nhìn thấy biển rất rõ. Vào giờ nghỉ giải lao, tại sảnh bạn có thể uống đồ uống ngon và nghe thấy tiếng sóng biển. Xin hãy tham gia nhé."
  },
  {
    "id": "dokkai-28",
    "lessonId": "bai-28",
    "title": "Bài Đọc Hiểu - Bài 28 Minna",
    "subTitle": "Bài review đánh giá quán cà phê / siêu thị địa phương (Local shop/cafe review)",
    "description": "Đọc đoạn văn về một quán cà phê địa phương và trả lời các câu hỏi về thói quen, lý do và đặc điểm của quán.",
    "passage": "わたしは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くの <ruby>喫茶店<rt>きっさてん</rt></ruby>に <ruby>通<rt>かよ</rt></ruby>って います。この <ruby>店<rt>みせ</rt></ruby>は いつも お<ruby>客<rt>きゃく</rt></ruby>さんが <ruby>多<rt>おお</rt></ruby>くて <ruby>人気<rt>にんき</rt></ruby>が あります。コーヒーの <ruby>味<rt>あじ</rt></ruby>も いいし、<ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>も <ruby>親切<rt>しんせつ</rt></ruby>ですから。それに、ケーキも パンも とても おいしいです。わたしは いつも <ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きながら、<ruby>小説<rt>しょうせつ</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んで います。この <ruby>店<rt>みせ</rt></ruby>は <ruby>値段<rt>ねだん</rt></ruby>も <ruby>安<rt>やす</rt></ruby>いし、<ruby>静<rt>しず</rt></ruby>かですから、とても <ruby>勉強<rt>べんきょう</rt></ruby>に <ruby>便利<rt>べんり</rt></ruby>です。<ruby>家<rt>いえ</rt></ruby>からも <ruby>歩<rt>ある</rt></ruby>いて ５<ruby>分<rt>ふん</rt></ruby>ぐらいですから、とても <ruby>近<rt>ちか</rt></ruby>いです。それで、これからも <ruby>毎日<rt>まいにち</rt></ruby> この <ruby>店<rt>みせ</rt></ruby>に <ruby>来<rt>き</rt></ruby>たいと <ruby>思<rt>おも</rt></ruby>って います。この <ruby>店<rt>みせ</rt></ruby>は <ruby>私<rt>わたし</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>に <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>場所<rt>ばしょ</rt></ruby>です。",
    "questions": [
      {
        "id": "dk28-1",
        "question": "<ruby>私<rt>わたし</rt></ruby>は <ruby>喫茶店<rt>きっさてん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を して いますか。",
        "options": [
          "コーヒーを <ruby>飲<rt>の</rt></ruby>みながら <ruby>小説<rt>しょうせつ</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んで います。",
          "<ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>と <ruby>話<rt>はなし</rt></ruby>して います。",
          "<ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きながら <ruby>勉強<rt>べんきょう</rt></ruby>して います。",
          "<ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きながら <ruby>小説<rt>しょうせつ</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んで います。"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: V-ながら]\n• Dịch nghĩa: Tôi làm gì ở quán cà phê? - Tôi vừa nghe nhạc vừa đọc tiểu thuyết.\n• Quy tắc & Loại trừ: Thông tin nằm ở câu 「音楽を聴きながら、小説を読んでいます」."
      },
      {
        "id": "dk28-2",
        "question": "この <ruby>店<rt>みせ</rt></ruby>が <ruby>人気<rt>にんき</rt></ruby>が ある <ruby>理由<rt>りゆう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>値段<rt>ねだん</rt></ruby>が <ruby>安<rt>やす</rt></ruby>いし、<ruby>静<rt>しず</rt></ruby>かだからです。",
          "コーヒーの <ruby>味<rt>あじ</rt></ruby>が いいし、<ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>が <ruby>親切<rt>しんせつ</rt></ruby>だからです。",
          "<ruby>音楽<rt>おんがく</rt></ruby>が <ruby>聞<rt>き</rt></ruby>けるし、<ruby>勉強<rt>べんきょう</rt></ruby>できるからです。",
          "<ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くにあるし、<ruby>便利<rt>べんり</rt></ruby>だからです。"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do | Độ khó: Trung bình | Trọng tâm: Liệt kê lý do ～し]\n• Dịch nghĩa: Lý do quán này nổi tiếng là gì? - Vì vị cà phê ngon và nhân viên thân thiện.\n• Quy tắc & Loại trừ: Đoạn văn ghi rõ 「コーヒーの味もいいし、店の人も親切ですから」."
      },
      {
        "id": "dk28-3",
        "question": "<ruby>私<rt>わたし</rt></ruby>が この <ruby>店<rt>みせ</rt></ruby>で <ruby>勉強<rt>べんきょう</rt></ruby>する <ruby>理由<rt>りゆう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>値段<rt>ねだん</rt></ruby>が <ruby>安<rt>やす</rt></ruby>いし、<ruby>静<rt>しず</rt></ruby>かだからです。",
          "<ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>が <ruby>親切<rt>しんせつ</rt></ruby>だし、<ruby>近<rt>ちか</rt></ruby>いからです。",
          "コーヒーが <ruby>美味<rt>おい</rt></ruby>しいし、<ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きだからです。",
          "<ruby>小説<rt>しょうせつ</rt></ruby>が <ruby>多<rt>おお</rt></ruby>いし、<ruby>便利<rt>べんり</rt></ruby>だからです。"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do | Độ khó: Trung bình | Trọng tâm: Liệt kê lý do ～し]\n• Dịch nghĩa: Lý do tôi học bài ở quán này là gì? - Vì giá rẻ và yên tĩnh.\n• Quy tắc & Loại trừ: Đoạn văn ghi rõ 「値段も安いし、静かですから、とても勉強に便利です」."
      },
      {
        "id": "dk28-4",
        "question": "<ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くの <ruby>喫茶店<rt>きっさてん</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>私<rt>わたし</rt></ruby>は <ruby>店<rt>みせ</rt></ruby>で <ruby>音楽<rt>おんがく</rt></ruby>を <ruby>歌<rt>うた</rt></ruby>って います。",
          "<ruby>私<rt>わたし</rt></ruby>は <ruby>店<rt>みせ</rt></ruby>で コーヒーを <ruby>作<rt>つく</rt></ruby>って います。",
          "<ruby>私<rt>わたし</rt></ruby>は <ruby>時々<rt>ときどき</rt></ruby> この <ruby>店<rt>みせ</rt></ruby>に <ruby>行<rt>い</rt></ruby>きます。",
          "<ruby>私<rt>わたし</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> この <ruby>店<rt>みせ</rt></ruby>に <ruby>通<rt>かよ</rt></ruby>って います。"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nội dung | Độ khó: Trung bình | Trọng tâm: Thói quen]\n• Dịch nghĩa: Câu nào đúng với nội dung bài? - Tôi hằng ngày đều lui tới quán này.\n• Quy tắc & Loại trừ: Câu đầu tiên của bài là 「私は毎日駅の近くの喫茶店に通っています」."
      },
      {
        "id": "dk28-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた <ruby>人<rt>ひと</rt></ruby>は、これから どう しますか。",
        "options": [
          "<ruby>時々<rt>ときどき</rt></ruby> <ruby>通<rt>かよ</rt></ruby>いたいと <ruby>思<rt>おも</rt></ruby>って います。",
          "もう <ruby>通<rt>かよ</rt></ruby>いません。",
          "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>通<rt>かよ</rt></ruby>いたいと <ruby>思<rt>おも</rt></ruby>って います。",
          "<ruby>他<rt>ほか</rt></ruby>の <ruby>店<rt>みせ</rt></ruby>に <ruby>行<rt>い</rt></ruby>きます。"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Mong muốn tương lai]\n• Dịch nghĩa: Tôi sẽ làm gì từ bây giờ? - Tôi muốn tiếp tục lui tới hằng ngày.\n• Quy tắc & Loại trừ: Cuối bài ghi rõ 「これからも毎日この店に来たいと思っています」."
      }
    ],
    "translation": "Tôi hằng ngày đều lui tới quán cà phê gần nhà ga. Quán này lúc nào cũng đông khách và rất được yêu thích. Bởi vì vị cà phê ngon, nhân viên lại thân thiện nữa. Thêm vào đó, cả bánh ngọt và bánh mì đều rất ngon. Tôi luôn vừa nghe nhạc vừa đọc tiểu thuyết ở đó. Quán này giá rẻ, lại yên tĩnh nên rất tiện cho việc học tập. Từ nhà tôi đi bộ cũng chỉ mất khoảng 5 phút nên rất gần. Vì vậy, từ nay về sau tôi cũng muốn đến quán này mỗi ngày. Quán này là nơi quan trọng trong cuộc sống của tôi."
  },
  {
    "id": "dokkai-29",
    "lessonId": "bai-29",
    "title": "Bài Đọc Hiểu - Bài 29 Minna",
    "subTitle": "Tin nhắn LINE báo sự cố quên đồ / hỏng thiết bị (Lost-item / equipment issue LINE chat)",
    "description": "Đọc đoạn tin nhắn ngắn giữa các đồng nghiệp về sự cố để quên đồ và thiết bị bị hỏng ở văn phòng, sau đó trả lời các câu hỏi kiểm tra độ hiểu văn bản.",
    "passage": "ミラーさん：<ruby>皆<rt>みな</rt></ruby>さん、おはようございます。<ruby>今朝<rt>けさ</rt></ruby> <ruby>会社<rt>かいしゃ</rt></ruby>に <ruby>来<rt>き</rt></ruby>たら、<ruby>会議室<rt>かいぎしつ</rt></ruby>の <ruby>窓<rt>まど</rt></ruby>が <ruby>開<rt>あ</rt></ruby>いて いましたよ。<ruby>風<rt>かぜ</rt></ruby>が <ruby>強<rt>つよ</rt></ruby>いですから、<ruby>閉<rt>し</rt></ruby>めましょうか。\nサントスさん：あ、それは <ruby>私<rt>わたし</rt></ruby>が さっき <ruby>部屋<rt>へや</rt></ruby>が <ruby>暑<rt>あつ</rt></ruby>かったですから <ruby>開<rt>あ</rt></ruby>けました。すぐ <ruby>閉<rt>し</rt></ruby>めます。\nカリナさん：それから、<ruby>会議室<rt>かいぎしつ</rt></ruby>の テーブルの <ruby>上<rt>うえ</rt></ruby>に <ruby>白<rt>しろ</rt></ruby>い <ruby>封筒<rt>ふうとう</rt></ruby>が <ruby>乗<rt>の</rt></ruby>って います。<ruby>誰<rt>だれ</rt></ruby>の <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>ですか。\nミラーさん：あ、それは <ruby>私<rt>わたし</rt></ruby>の <ruby>書類<rt>しょるい</rt></ruby>です。<ruby>昨日<rt>きのう</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて <ruby>忘<rt>わす</rt></ruby>れて しまいました。\nワットさん：ミラーさん、その <ruby>書類<rt>しょるい</rt></ruby>は <ruby>私<rt>わたし</rt></ruby>が さっき コピー<ruby>機<rt>き</rt></ruby>の そばに きれいに <ruby>片<rt>かた</rt></ruby>づけましたよ。\nミラーさん：あ、そうですか。ありがとうございます！<ruby>助<rt>たす</rt></ruby>かりました。",
    "questions": [
      {
        "id": "dk29-1",
        "question": "<ruby>会議室<rt>かいぎしつ</rt></ruby>の <ruby>窓<rt>まど</rt></ruby>は どうなって いましたか。",
        "options": [
          "こわれていました",
          "しまっていました",
          "よごれていました",
          "あいていました"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Tìm thông tin trực tiếp trong bài]\n• Dịch nghĩa: Cửa sổ phòng họp đã thế nào?\n• Quy tắc & Loại trừ: Dựa vào câu đầu tiên của Miller 「会議室の窓が開いていましたよ」, đáp án đúng là cửa đang mở 「あいていました」. Các phương án đóng, hỏng hay bẩn không khớp với văn bản."
      },
      {
        "id": "dk29-2",
        "question": "サントスさんは どうして <ruby>窓<rt>まど</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けましたか。",
        "options": [
          "<ruby>部屋<rt>へや</rt></ruby>が <ruby>暑<rt>あつ</rt></ruby>かったからです",
          "<ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>ったからです",
          "<ruby>書類<rt>しょるい</rt></ruby>を <ruby>探<rt>さが</rt></ruby>したからです",
          "<ruby>掃除<rt>そうじ</rt></ruby>を したかったからです"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do hành động | Độ khó: Trung bình | Trọng tâm: Xác định nguyên nhân do nhân vật nêu ra]\n• Dịch nghĩa: Tại sao anh Santos lại mở cửa sổ?\n• Quy tắc & Loại trừ: Santos trả lời 「部屋が暑かったですから開けました」 (vì phòng nóng nên đã mở). Các phương án khác không đúng với lý do trong bài."
      },
      {
        "id": "dk29-3",
        "question": "<ruby>白<rt>しろ</rt></ruby>い <ruby>封筒<rt>ふうとう</rt></ruby>は だれの <ruby>物<rt>もの</rt></ruby>ですか。",
        "options": [
          "ワットさんの メモです",
          "カリナさんの ファイルです",
          "ミラーさんの <ruby>書類<rt>しょるい</rt></ruby>です",
          "サントスさんの <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>です"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết đối tượng | Độ khó: Trung bình | Trọng tâm: Liên kết câu hỏi của Karina và câu trả lời của Miller]\n• Dịch nghĩa: Phong bì màu trắng là của ai?\n• Quy tắc & Loại trừ: Karina hỏi về phong bì trên bàn, Miller đáp 「それは私の書類です」 (đó là tài liệu của tôi). Do đó đáp án chính xác là tài liệu của Miller."
      },
      {
        "id": "dk29-4",
        "question": "<ruby>会議室<rt>かいぎしつ</rt></ruby>の <ruby>窓<rt>まど</rt></ruby>や <ruby>封筒<rt>ふうとう</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "ワットさんが ミラーさんの <ruby>書類<rt>しょるい</rt></ruby>を コピー<ruby>機<rt>き</rt></ruby>の そばに <ruby>片<rt>かた</rt></ruby>づけました",
          "サントスさんが コピー<ruby>機<rt>き</rt></ruby>の そばを <ruby>掃除<rt>そうじ</rt></ruby>しました",
          "ミラーさんが <ruby>自分<rt>じぶん</rt></ruby>で <ruby>会議室<rt>かいぎしつ</rt></ruby>の <ruby>窓<rt>まど</rt></ruby>を <ruby>閉<rt>し</rt></ruby>めました",
          "カリナさんが <ruby>白<rt>しろ</rt></ruby>い <ruby>封筒<rt>ふうとう</rt></ruby>を なくして しまいました"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định nội dung | Độ khó: Trung bình | Trọng tâm: Đối chiếu toàn bài đọc]\n• Dịch nghĩa: Phương án nào khớp với nội dung bài đọc?\n• Quy tắc & Loại trừ: Watt nói 「私がさっきコピー機のそばにきれいに片づけましたよ」 nên phương án đầu tiên hoàn toàn chính xác. Các phương án còn lại sai chủ ngữ hoặc nội dung sự việc."
      },
      {
        "id": "dk29-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>から、サントスさんは すぐ どう しますか。",
        "options": [
          "<ruby>書類<rt>しょるい</rt></ruby>を コピーします",
          "<ruby>窓<rt>まど</rt></ruby>を <ruby>閉<rt>し</rt></ruby>めます",
          "<ruby>部屋<rt>へや</rt></ruby>を <ruby>掃除<rt>そうじ</rt></ruby>します",
          "<ruby>封筒<rt>ふうとう</rt></ruby>を <ruby>捨<rt>す</rt></ruby>てます"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Hành động tiếp theo | Độ khó: Dễ | Trọng tâm: Suy luận hành động kế tiếp của nhân vật]\n• Dịch nghĩa: Sau đoạn hội thoại này, anh Santos sẽ làm gì ngay?\n• Quy tắc & Loại trừ: Santos nói 「すぐ閉めます」 (tôi sẽ đóng ngay đây) sau khi Miller nhắc nhở về cửa sổ mở. Do đó đáp án đúng là đóng cửa sổ."
      }
    ],
    "translation": "Miller: Chào buổi sáng mọi người. Sáng nay đến công ty thì thấy cửa sổ phòng họp đang mở đấy. Gió mạnh nên chúng ta đóng lại nhé?\nSantos: À, cái đó lúc nãy vì phòng nóng nên tôi mở. Tôi sẽ đóng lại ngay đây.\nKarina: Hơn nữa, trên bàn phòng họp có một phong bì màu trắng đang nằm ở đó. Đó là đồ bỏ quên của ai vậy?\nMiller: À, đó là tài liệu của tôi. Tối hôm qua tôi lỡ để trên bàn rồi quên mất.\nWatt: Anh Miller, tài liệu đó lúc nãy tôi đã dọn dẹp gọn gàng ở cạnh máy photo rồi đấy.\nMiller: À, thế à. Cảm ơn anh nhé! Tôi được giúp đỡ nhiều rồi."
  },
  {
    "id": "dokkai-30",
    "lessonId": "bai-30",
    "title": "Bài Đọc Hiểu - Bài 30 Minna",
    "subTitle": "Memo dặn dò chuẩn bị trước chuyến đi / sự kiện lớp (Pre-event preparation checklist memo)",
    "description": "Đọc hiểu đoạn ghi chú ngắn về việc chuẩn bị cho chuyến dã ngoại của lớp, ôn tập các mẫu câu trạng thái có chủ đích và chuẩn bị trước.",
    "passage": "<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、クラスの <ruby>皆<rt>みな</rt></ruby>で <ruby>山<rt>やま</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>前<rt>まえ</rt></ruby>に <ruby>先生<rt>せんせい</rt></ruby>と <ruby>相談<rt>そうだん</rt></ruby>して、<ruby>色々<rt>いろいろ</rt></ruby>な <ruby>準備<rt>じゅんび</rt></ruby>を してあります。\nまず、<ruby>切符<rt>きっぷ</rt></ruby>は もう <ruby>買<rt>か</rt></ruby>って あります。<ruby>地図<rt>ちず</rt></ruby>も コピーして、クラスの <ruby>人<rt>ひと</rt></ruby>に <ruby>配<rt>くば</rt></ruby>って あります。お<ruby>弁当<rt>べんとう</rt></ruby>の <ruby>予約<rt>よやく</rt></ruby>も してありますから、<ruby>安心<rt>あんしん</rt></ruby>してください。\nでも、まだ カメラの <ruby>電池<rt>でんち</rt></ruby>は <ruby>買<rt>か</rt></ruby>って いません。<ruby>明日<rt>あした</rt></ruby>、コンビニで <ruby>買<rt>か</rt></ruby>って おきます。\nそれから、<ruby>天気<rt>てんき</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>い ときは、<ruby>部屋<rt>へや</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で ゲームを します。その <ruby>道具<rt>どうぐ</rt></ruby>も もう <ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。<ruby>当日<rt>とうじつ</rt></ruby>は <ruby>朝<rt>あさ</rt></ruby> ８<ruby>時<rt>じ</rt></ruby>に <ruby>駅<rt>えき</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に <ruby>集<rt>あつ</rt></ruby>まりましょう。",
    "questions": [
      {
        "id": "dk30-1",
        "question": "<ruby>切符<rt>きっぷ</rt></ruby>はもうどうなっていますか。",
        "options": [
          "<ruby>先生<rt>せんせい</rt></ruby>が<ruby>買<rt>か</rt></ruby>います",
          "もう<ruby>買<rt>か</rt></ruby>ってあります",
          "まだ<ruby>買<rt>か</rt></ruby>っていません",
          "<ruby>明日<rt>あした</rt></ruby><ruby>買<rt>か</rt></ruby>います"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Tìm thông tin trong bài]\n• Dịch nghĩa: Vé xe đã ở trạng thái như thế nào rồi?\n• Quy tắc & Loại trừ: Dựa vào câu 「まず、切符はもう買ってあります。」 trong đoạn văn, đáp án chính xác là đã được mua sẵn 「もう買ってあります」. Các phương án về chưa mua hoặc ngày mai mua đều sai lệch với thông tin thực tế."
      },
      {
        "id": "dk30-2",
        "question": "カメラの<ruby>電池<rt>でんち</rt></ruby>はいつ<ruby>買<rt>か</rt></ruby>いますか。",
        "options": [
          "<ruby>先週<rt>せんしゅう</rt></ruby><ruby>買<rt>か</rt></ruby>いました",
          "<ruby>買<rt>か</rt></ruby>いません",
          "<ruby>日曜日<rt>にちようび</rt></ruby><ruby>買<rt>か</rt></ruby>います",
          "<ruby>明日<rt>あした</rt></ruby><ruby>買<rt>か</rt></ruby>います"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Thời gian hành động | Độ khó: Dễ | Trọng tâm: Trạng thái chưa làm và kế hoạch làm trước ~ておく]\n• Dịch nghĩa: Pin máy ảnh khi nào sẽ được mua?\n• Quy tắc & Loại trừ: Đoạn văn viết 「明日、コンビニで買っておきます。」 nên ngày mai sẽ mua. Các phương án khác như mua vào chủ nhật, tuần trước hay không mua đều trái với nội dung bài đọc."
      },
      {
        "id": "dk30-3",
        "question": "<ruby>文<rt>ぶん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、まだしていないことはどれですか。",
        "options": [
          "お<ruby>弁当<rt>べんとう</rt></ruby>を <ruby>予約<rt>よやく</rt></ruby>すること",
          "カメラの <ruby>電池<rt>でんち</rt></ruby>を <ruby>買<rt>か</rt></ruby>うこと",
          "<ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>うこと",
          "<ruby>地図<rt>ちず</rt></ruby>を <ruby>配<rt>くば</rt></ruby>ること"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định / ngoại lệ | Độ khó: Trung bình | Trọng tâm: Phân biệt việc đã hoàn thành và chưa hoàn thành]\n• Dịch nghĩa: Trong bài, việc nào vẫn chưa được làm?\n• Quy tắc & Loại trừ: Đoạn văn nêu rõ 「でも、まだカメラの電池は買っていません。」 (vẫn chưa mua pin máy ảnh). Các việc mua vé, phát bản đồ, đặt cơm đều đã hoàn thành từ trước."
      },
      {
        "id": "dk30-4",
        "question": "<ruby>山<rt>やま</rt></ruby>への <ruby>旅行<rt>りょこう</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>天気<rt>てんき</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>い ときは <ruby>山<rt>やま</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。",
          "お<ruby>弁当<rt>べんとう</rt></ruby>の <ruby>予約<rt>よやく</rt></ruby>は <ruby>明日<rt>あした</rt></ruby>します。",
          "ゲームの <ruby>道具<rt>どうぐ</rt></ruby>は もう <ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いてあります。",
          "<ruby>切符<rt>きっぷ</rt></ruby>は まだ <ruby>買<rt>か</rt></ruby>ってありません。"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định khớp nội dung | Độ khó: Khó | Trọng tâm: Đối chiếu toàn bài]\n• Dịch nghĩa: Phương án nào khớp với nội dung bài văn?\n• Quy tắc & Loại trừ: Câu 「その道具ももう机の上に置いてあります。」 khớp hoàn toàn với phương án đầu tiên. Các phương án còn lại mâu thuẫn với thông tin trong bài (như vé đã mua, đặt cơm đã xong, trời xấu thì chơi trong phòng)."
      },
      {
        "id": "dk30-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた <ruby>目的<rt>もくてき</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "クラスの <ruby>山<rt>やま</rt></ruby>への <ruby>旅行<rt>りょこう</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>について <ruby>知<rt>し</rt></ruby>らせること",
          "コンビニの <ruby>電池<rt>でんち</rt></ruby>を <ruby>紹介<rt>しょうかい</rt></ruby>すること",
          "<ruby>新<rt>あたら</rt></ruby>しい ゲームの <ruby>道具<rt>どうぐ</rt></ruby>を <ruby>売<rt>う</rt></ruby>ること",
          "<ruby>先生<rt>せんせい</rt></ruby>と <ruby>相談<rt>そうだん</rt></ruby>することについて <ruby>話<rt>はな</rt></ruby>すこと"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính bài đọc | Độ khó: Trung bình | Trọng tâm: Xác định chủ đề và mục đích văn bản]\n• Dịch nghĩa: Mục đích của đoạn văn này là gì?\n• Quy tắc & Loại trừ: Đoạn văn liệt kê các công việc chuẩn bị cho chuyến đi núi của lớp nhằm thông báo tình hình chuẩn bị. Do đó phương án nói về việc thông báo chuẩn bị cho chuyến du lịch núi của lớp là chính xác. Các ý còn lại không phải chủ đề chính."
      }
    ],
    "translation": "Chủ nhật tuần sau, mọi người trong lớp sẽ đi núi. Trước đó tôi đã bàn bạc với giáo viên và làm sẵn nhiều sự chuẩn bị.\nĐầu tiên, vé đã được mua sẵn rồi. Bản đồ cũng đã được photo và phân phát cho mọi người trong lớp. Việc đặt trước cơm hộp cũng đã xong nên hãy yên tâm nhé.\nTuy nhiên, pin máy ảnh thì vẫn chưa mua. Ngày mai tôi sẽ mua sẵn ở cửa hàng tiện lợi.\nSau đó, khi thời tiết xấu, chúng ta sẽ chơi trò chơi trong phòng. Dụng cụ cho việc đó cũng đã được đặt sẵn ở trên bàn rồi. Ngày hôm đó chúng ta hãy tập trung trước nhà ga lúc 8 giờ sáng nhé."
  },
  {
    "id": "dokkai-31",
    "lessonId": "bai-31",
    "title": "Bài Đọc Hiểu - Bài 31 Minna",
    "subTitle": "Kế hoạch mục tiêu học tập & dự định năm mới (New Year study/career plan)",
    "description": "Đọc đoạn văn ngắn về kế hoạch học tập và dự định trong năm mới của một học viên tiếng Nhật, rèn luyện kỹ năng đọc hiểu ngữ pháp Bài 31.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>は<ruby>来年<rt>らいねん</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>の<ruby>大学院<rt>だいがくいん</rt></ruby>へ<ruby>入学<rt>にゅうがく</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>っています。ですから、<ruby>今年<rt>ことし</rt></ruby>の<ruby>七月<rt>しちがつ</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるつもりです。いま、<ruby>毎日<rt>まいにち</rt></ruby>２<ruby>時間<rt>じかん</rt></ruby>ぐらい<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しています。<ruby>難<rt>むずか</rt></ruby>しい<ruby>漢字<rt>かんじ</rt></ruby>も<ruby>多<rt>おお</rt></ruby>いですが、<ruby>毎日<rt>まいにち</rt></ruby><ruby>少<rt>すこ</rt></ruby>しずつ<ruby>覚<rt>おぼ</rt></ruby>えるつもりです。<ruby>会社<rt>かいしゃ</rt></ruby>のスケジュールでは、<ruby>来月<rt>らいげつ</rt></ruby>から<ruby>大阪<rt>おおさか</rt></ruby>の<ruby>支店<rt>してん</rt></ruby>へ<ruby>出張<rt>しゅっちょう</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>です。<ruby>出張<rt>しゅっちょう</rt></ruby>は<ruby>一週間<rt>いっしゅうかん</rt></ruby>ぐらいですが、まだ<ruby>切符<rt>きっぷ</rt></ruby>を<ruby>買<rt>か</rt></ruby>っていません。<ruby>出張<rt>しゅっちょう</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、しっかりと<ruby>試験<rt>しけん</rt></ruby>の<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みをしようと<ruby>思<rt>おも</rt></ruby>います。そして、<ruby>試験<rt>しけん</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったら、<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>に<ruby>挨拶<rt>あいさつ</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>です。<ruby>将来<rt>しょうらい</rt></ruby>は、<ruby>日本<rt>にほん</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>くつもりです。",
    "questions": [
      {
        "id": "dk31-1",
        "question": "<ruby>私<rt>わたし</rt></ruby>は<ruby>来年<rt>らいねん</rt></ruby>、どうしようと<ruby>思<rt>おも</rt></ruby>っていますか。",
        "options": [
          "<ruby>日本<rt>にほん</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>をやめようと<ruby>思<rt>おも</rt></ruby>っている",
          "<ruby>七月<rt>しちがつ</rt></ruby>に<ruby>国<rt>くに</rt></ruby>へ<ruby>帰<rt>かえ</rt></ruby>ろうと<ruby>思<rt>おも</rt></ruby>っている",
          "<ruby>大阪<rt>おおさか</rt></ruby>の<ruby>支店<rt>してん</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>こうと<ruby>思<rt>おも</rt></ruby>っている",
          "<ruby>日本<rt>にほん</rt></ruby>の<ruby>大学院<rt>だいがくいん</rt></ruby>へ<ruby>入学<rt>にゅうがく</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>っている"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Tìm ý định năm sau]\n• Dịch nghĩa: Tôi dự định năm sau sẽ làm gì?\n• Quy tắc & Loại trừ: Dựa vào câu đầu tiên của đoạn văn 「私は来年、日本の大学院へ入学しようと思っています」, đáp án chính xác là 「日本の大学院へ入学しようと思っている」. Các phương án khác không khớp với nội dung bài đọc."
      },
      {
        "id": "dk31-2",
        "question": "<ruby>私<rt>わたし</rt></ruby>は<ruby>今<rt>いま</rt></ruby>、<ruby>毎日<rt>まいにち</rt></ruby>どのくらい<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>していますか。",
        "options": [
          "<ruby>毎日<rt>まいにち</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>していない",
          "<ruby>毎日<rt>まいにち</rt></ruby>1<ruby>時間<rt>じかん</rt></ruby>ぐらい",
          "<ruby>毎日<rt>まいにち</rt></ruby>2<ruby>時間<rt>じかん</rt></ruby>ぐらい",
          "<ruby>毎日<rt>まいにち</rt></ruby>3<ruby>時間<rt>じかん</rt></ruby>ぐらい"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Thông tin chi tiết | Độ khó: Dễ | Trọng tâm: Thời gian học tiếng Nhật hằng ngày]\n• Dịch nghĩa: Hiện tại tôi học tiếng Nhật mỗi ngày khoảng bao lâu?\n• Quy tắc & Loại trừ: Đoạn văn nêu rõ 「いま、毎日２時間ぐらい日本語を勉強しています」, suy ra đáp án đúng là 「毎日2時間ぐらい」. Các phương án khác sai về thời gian."
      },
      {
        "id": "dk31-3",
        "question": "<ruby>大阪<rt>おおさか</rt></ruby>への<ruby>出張<rt>しゅっちょう</rt></ruby>について、<ruby>私<rt>わたし</rt></ruby>はもう<ruby>何<rt>なに</rt></ruby>をしていませんか。",
        "options": [
          "<ruby>支<rt>し</rt></ruby><ruby>店<rt>みせ</rt></ruby>へ<ruby>連絡<rt>れんらく</rt></ruby>していない",
          "<ruby>切符<rt>きっぷ</rt></ruby>を<ruby>買<rt>か</rt></ruby>っていない",
          "ホテルを<ruby>予約<rt>よやく</rt></ruby>していない",
          "<ruby>予定<rt>よてい</rt></ruby>を<ruby>決<rt>き</rt></ruby>めていない"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định / Ngoại lệ | Độ khó: Trung bình | Trọng tâm: Trạng thái chưa hoàn thành]\n• Dịch nghĩa: Về chuyến công tác Osaka, tôi vẫn chưa làm điều gì?\n• Quy tắc & Loại trừ: Bài đọc ghi rõ 「まだ切符を買っていません」 (vẫn chưa mua vé). Do đó 「切符を買っていない」 là đáp án chính xác."
      },
      {
        "id": "dk31-4",
        "question": "<ruby>私<rt>わたし</rt></ruby>の<ruby>出張<rt>しゅっちょう</rt></ruby>と<ruby>試験<rt>しけん</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>と<ruby>合<rt>あ</rt></ruby>っているものはどれですか。",
        "options": [
          "<ruby>来年<rt>らいねん</rt></ruby>から<ruby>大阪<rt>おおさか</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>くつもりだ",
          "<ruby>今年<rt>ことし</rt></ruby>の<ruby>七月<rt>しちがつ</rt></ruby>に<ruby>大学院<rt>だいがくいん</rt></ruby>へ<ruby>入学<rt>にゅうがく</rt></ruby>する",
          "<ruby>出張<rt>しゅっちょう</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>試験<rt>しけん</rt></ruby>の<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みをしようと<ruby>思<rt>おも</rt></ruby>っている",
          "<ruby>試験<rt>しけん</rt></ruby>の<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みはもう<ruby>終<rt>お</rt></ruby>わった"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định khớp nội dung | Độ khó: Khó | Trọng tâm: Đối chiếu toàn bài]\n• Dịch nghĩa: Câu nào sau đây khớp với nội dung bài đọc?\n• Quy tắc & Loại trừ: Trong bài có câu 「しゅっちょうの前に、しっかりと試験の申し込みをしようと思います」, hoàn toàn khớp với phương án 「出張の前に試験の申し込みをしようと思っている」. Các phương án khác mâu thuẫn với thời gian hoặc sự kiện trong bài."
      },
      {
        "id": "dk31-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>で、<ruby>私<rt>わたし</rt></ruby>の <ruby>将来<rt>しょうらい</rt></ruby>の <ruby>予定<rt>よてい</rt></ruby>について <ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "<ruby>日本<rt>にほん</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>くつもりだ",
          "<ruby>会社<rt>かいしゃ</rt></ruby>をやめて<ruby>留学生<rt>りゅうがくせい</rt></ruby>になるよていだ",
          "<ruby>大阪<rt>おおさか</rt></ruby>の<ruby>支店<rt>してん</rt></ruby>の<ruby>社長<rt>しゃちょう</rt></ruby>になる",
          "<ruby>国<rt>くに</rt></ruby>へ<ruby>帰<rt>かえ</rt></ruby>って<ruby>仕事<rt>しごと</rt></ruby>をするつもりだ"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính / hành động cần làm | Độ khó: Trung bình | Trọng tâm: Dự định tương lai]\n• Dịch nghĩa: Điều nào đúng về dự định tương lai của tôi?\n• Quy tắc & Loại trừ: Câu cuối cùng của bài khẳng định 「将来は、日本の会社で働くつもりです」, do đó 「日本の会社で働くつもりだ」 là đáp án đúng duy nhất."
      }
    ],
    "translation": "Tôi dự định năm sau sẽ vào học cao học ở Nhật Bản. Vì vậy, tôi có ý định sẽ dự thi kỳ thi vào tháng 7 năm nay. Hiện tại, mỗi ngày tôi học tiếng Nhật khoảng 2 tiếng. Dù có nhiều chữ Hán khó nhưng tôi dự định mỗi ngày sẽ nhớ từng chút một. Theo lịch trình của công ty, từ tháng sau tôi dự kiến đi công tác ở chi nhánh Osaka. Chuyến công tác kéo dài khoảng một tuần, nhưng tôi vẫn chưa mua vé. Trước khi đi công tác, tôi nghĩ mình sẽ đăng ký dự thi một cách cẩn thận. Và sau khi thi xong, tôi có kế hoạch đi chào hỏi thầy giáo ở trường đại học. Tương lai tôi dự định sẽ làm việc ở công ty Nhật."
  },
  {
    "id": "dokkai-32",
    "lessonId": "bai-32",
    "title": "Bài Đọc Hiểu - Bài 32 Minna",
    "subTitle": "Bản tin dự báo thời tiết & khuyến cáo sức khỏe (Weather forecast & health advisory)",
    "description": "Đọc bản tin thời tiết và các lời khuyên về sức khỏe để trả lời câu hỏi đọc hiểu.",
    "passage": "<ruby>皆様<rt>みなさま</rt></ruby>、<ruby>今日<rt>きょう</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>と<ruby>健康<rt>けんこう</rt></ruby>についてお<ruby>知<rt>し</rt></ruby>らせします。<ruby>午前中<rt>ごぜんちゅう</rt></ruby>はよく<ruby>晴<rt>は</rt></ruby>れていい<ruby>天気<rt>てんき</rt></ruby>ですが、<ruby>午後<rt>ごご</rt></ruby>から<ruby>北<rt>きた</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>から<ruby>厚<rt>あつ</rt></ruby>い<ruby>雲<rt>くも</rt></ruby>が<ruby>出<rt>で</rt></ruby>て、<ruby>夜<rt>よる</rt></ruby>には<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るかもしれません。<ruby>風<rt>かぜ</rt></ruby>も<ruby>強<rt>つよ</rt></ruby>くなるでしょうから、<ruby>出<rt>で</rt></ruby>かける<ruby>時<rt>とき</rt></ruby>は<ruby>傘<rt>かさ</rt></ruby>を<ruby>持<rt>も</rt></ruby>って<ruby>出<rt>で</rt></ruby>かけたほうがいいです。<ruby>最近<rt>さいきん</rt></ruby>インフルエンザが<ruby>流行<rt>りゅうこう</rt></ruby>していますから、<ruby>外<rt>そと</rt></ruby>から<ruby>帰<rt>かえ</rt></ruby>ったら、すぐ<ruby>石鹸<rt>せっけん</rt></ruby>で<ruby>手<rt>て</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>ったほうがいいです。また、<ruby>暖<rt>あたた</rt></ruby>かい<ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>て、<ruby>栄養<rt>えいよう</rt></ruby>がある<ruby>食事<rt>しょくじ</rt></ruby>をしましょう。<ruby>夜<rt>よる</rt></ruby>は<ruby>無理<rt>むり</rt></ruby>をしないで、<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>たほうがいいですよ。",
    "questions": [
      {
        "id": "dk32-1",
        "question": "<ruby>夜<rt>よる</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>はどうなるかもしれませんか。",
        "options": [
          "<ruby>天気<rt>てんき</rt></ruby>がよくなるかもしれない",
          "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るかもしれない",
          "<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るかもしれない",
          "<ruby>太陽<rt>たいよう</rt></ruby>が<ruby>出<rt>で</rt></ruby>るかもしれない"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Đọc hiểu thông tin thời tiết trong bài]\n• Dịch nghĩa: Thời tiết buổi tối có thể sẽ thế nào? -> Có lẽ trời sẽ mưa.\n• Quy tắc & Loại trừ: Dựa vào câu 「夜には雨が降るかもしれません」 trong bài, đáp án đúng là 「雨が降るかもしれない」. Các phương án còn lại (tuyết rơi, trời đẹp hơn, mặt trời mọc) sai với văn bản."
      },
      {
        "id": "dk32-2",
        "question": "<ruby>外<rt>そと</rt></ruby>から<ruby>帰<rt>かえ</rt></ruby>ったら、どうしたほうがいいですか。",
        "options": [
          "すぐ<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだほうがいい",
          "すぐ<ruby>運動<rt>うんどう</rt></ruby>したほうがいい",
          "すぐ<ruby>寝<rt>ね</rt></ruby>たほうがいい",
          "すぐ<ruby>手<rt>て</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>ったほうがいい"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Đọc hiểu lời khuyên sức khỏe]\n• Dịch nghĩa: Khi từ ngoài về thì nên làm thế nào? -> Nên rửa tay ngay.\n• Quy tắc & Loại trừ: Văn bản nêu rõ 「外から帰ったら、すぐ手を洗ったほうがいいです」. Do đó 「すぐ手を洗ったほうがいい」 là đáp án chính xác. Các phương án khác không được đề cập hoặc sai lệch."
      },
      {
        "id": "dk32-3",
        "question": "<ruby>午前中<rt>ごぜんちゅう</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>は、どんな<ruby>天気<rt>てんき</rt></ruby>ですか。",
        "options": [
          "<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています",
          "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています",
          "いい<ruby>天気<rt>てんき</rt></ruby>です",
          "<ruby>風<rt>かぜ</rt></ruby>がとても<ruby>強<rt>つよ</rt></ruby>いです"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Đọc hiểu thời tiết buổi sáng]\n• Dịch nghĩa: Thời tiết buổi sáng như thế nào? -> Trời đẹp.\n• Quy tắc & Loại trừ: Văn bản ghi 「午前中はよく晴れていい天気ですが」, khớp với 「いい天気です」. Các phương án mưa, tuyết, gió mạnh sai lệch với buổi sáng."
      },
      {
        "id": "dk32-4",
        "question": "<ruby>今日<rt>きょう</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>と<ruby>健康<rt>けんこう</rt></ruby>のアドバイスについて、<ruby>本文<rt>ほんぶん</rt></ruby>と<ruby>合<rt>あ</rt></ruby>っているものはどれですか。",
        "options": [
          "<ruby>夜<rt>よる</rt></ruby>には<ruby>風<rt>かぜ</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>くなる",
          "<ruby>午前中<rt>ごぜんちゅう</rt></ruby>からずっと<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っている",
          "インフルエンザはもう<ruby>流行<rt>りゅうこう</rt></ruby>していない",
          "<ruby>夜<rt>よる</rt></ruby>は<ruby>無理<rt>むり</rt></ruby>をしないで<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>たほうがいい"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Khớp nội dung | Độ khó: Trung bình | Trọng tâm: Đánh giá toàn văn bản]\n• Dịch nghĩa: Câu nào dưới đây khớp với nội dung bài đọc? -> Buổi tối không nên làm quá sức và nên đi ngủ sớm.\n• Quy tắc & Loại trừ: Câu 「夜は無理をしないで、早く寝たほうがいいですよ」 hoàn toàn khớp với phương án đúng. Các phương án khác mâu thuẫn với nội dung văn bản."
      },
      {
        "id": "dk32-5",
        "question": "この<ruby>文章<rt>ぶんしょう</rt></ruby>の<ruby>主<rt>おも</rt></ruby>な<ruby>内容<rt>ないよう</rt></ruby>はどれですか。",
        "options": [
          "<ruby>天気<rt>てんき</rt></ruby>の<ruby>予想<rt>よそう</rt></ruby>と<ruby>健康<rt>けんこう</rt></ruby>のためのアドバイス",
          "<ruby>病院<rt>びょういん</rt></ruby>の<ruby>予約<rt>よやく</rt></ruby>のやり<ruby>方<rt>かた</rt></ruby>",
          "<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>計画<rt>けいかく</rt></ruby>と<ruby>切符<rt>きっぷ</rt></ruby>の<ruby>買<rt>か</rt></ruby>い<ruby>方<rt>かた</rt></ruby>",
          "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>成功<rt>せいこう</rt></ruby>のしかた"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính bài đọc | Độ khó: Trung bình | Trọng tâm: Nắm bắt chủ đề chính]\n• Dịch nghĩa: Nội dung chính của bài văn này là gì? -> Dự báo thời tiết và lời khuyên cho sức khỏe.\n• Quy tắc & Loại trừ: Bài viết nói về thời tiết (mưa, gió) và sức khỏe (cúm, ngủ sớm, rửa tay), nên đáp án 「天気の予想と健康のためのアドバイス」 là chính xác nhất. Các ý về du lịch, bệnh viện, công việc là sai."
      }
    ],
    "translation": "Kính thưa quý vị, tôi xin thông báo về thời tiết và sức khỏe hôm nay. Buổi sáng trời nắng đẹp, nhưng từ chiều mây dày xuất hiện từ phía bắc và đêm có lẽ trời sẽ mưa. Gió cũng sẽ mạnh lên nên khi ra ngoài các bạn nên mang theo ô. Dạo gần đây cúm đang lây lan nên khi từ ngoài về, các bạn nên rửa tay ngay bằng xà phòng. Ngoài ra, hãy mặc quần áo ấm và ăn bữa ăn đầy đủ dinh dưỡng. Buổi tối không nên làm việc quá sức mà nên đi ngủ sớm nhé."
  },
  {
    "id": "dokkai-33",
    "lessonId": "bai-33",
    "title": "Bài Đọc Hiểu - Bài 33 Minna",
    "subTitle": "Biển cảnh báo an toàn công trường / quy định phòng thí nghiệm (Safety & prohibition signage)",
    "description": "Đọc hiểu các quy định an toàn tại công trường và phòng thí nghiệm để nắm bắt các mệnh lệnh và cấm chỉ.",
    "passage": "ここは <ruby>実験室<rt>じっけんしつ</rt></ruby>です。この <ruby>部屋<rt>へや</rt></ruby>には <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>規則<rt>きそく</rt></ruby>が あります。<ruby>皆<rt>みな</rt></ruby>さん、かならず <ruby>守<rt>まも</rt></ruby>って ください。<ruby>第一<rt>だいいち</rt></ruby>に、<ruby>先生<rt>せんせい</rt></ruby>は <ruby>実験<rt>じっけん</rt></ruby>の <ruby>時<rt>とき</rt></ruby>は <ruby>騒<rt>さわ</rt></ruby>ぐなと <ruby>言<rt>い</rt></ruby>っていました。とても <ruby>危<rt>あぶ</rt></ruby>ないからです。<ruby>第二<rt>だいに</rt></ruby>に、<ruby>機械<rt>きかい</rt></ruby>を <ruby>使<rt>つか</rt></ruby>う <ruby>時<rt>とき</rt></ruby>は よく <ruby>注意<rt>ちゅうい</rt></ruby>して ください。<ruby>壁<rt>かべ</rt></ruby>の <ruby>貼<rt>は</rt></ruby>り<ruby>紙<rt>がみ</rt></ruby>に、<ruby>使用中<rt>しようちゅう</rt></ruby>の <ruby>機械<rt>きかい</rt></ruby>には <ruby>触<rt>さわ</rt></ruby>るなと <ruby>書<rt>か</rt></ruby>いて あります。<ruby>第三<rt>だいさん</rt></ruby>に、<ruby>非常口<rt>ひじょうぐち</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>置<rt>お</rt></ruby>くのは <ruby>禁止<rt>きんし</rt></ruby>です。<ruby>火事<rt>かじ</rt></ruby>の <ruby>時<rt>とき</rt></ruby>に みんなが ここから <ruby>外<rt>そと</rt></ruby>へ <ruby>逃<rt>に</rt></ruby>げますから、<ruby>何<rt>なに</rt></ruby>も <ruby>置<rt>お</rt></ruby>かないで ください。<ruby>何<rt>なに</rt></ruby>か あったら、<ruby>先生<rt>せんせい</rt></ruby>に <ruby>伝<rt>つた</rt></ruby>えて いただけませんか。この <ruby>規則<rt>きそく</rt></ruby>を <ruby>守<rt>まも</rt></ruby>って、<ruby>安全<rt>あんぜん</rt></ruby>に <ruby>実験<rt>じっけん</rt></ruby>を してください。",
    "questions": [
      {
        "id": "dk33-1",
        "question": "<ruby>実験<rt>じっけん</rt></ruby>の <ruby>時<rt>とき</rt></ruby>、どうして <ruby>騒<rt>さわ</rt></ruby>いでは いけませんか。",
        "options": [
          "<ruby>規則<rt>きそく</rt></ruby>が ないからです",
          "とても <ruby>危<rt>あぶ</rt></ruby>ないからです",
          "<ruby>先生<rt>せんせい</rt></ruby>が <ruby>怒<rt>おこ</rt></ruby>るからです",
          "<ruby>機械<rt>きかい</rt></ruby>が <ruby>壊<rt>こわ</rt></ruby>れるからです"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tìm thông tin trong bài]\n• Dịch nghĩa: Tại sao khi làm thí nghiệm không được làm ồn?\n• Quy tắc & Loại trừ: Bài viết ghi rõ 「とても危ないからです」."
      },
      {
        "id": "dk33-2",
        "question": "<ruby>使用中<rt>しようちゅう</rt></ruby>の <ruby>機械<rt>きかい</rt></ruby>に ついて、<ruby>何<rt>なん</rt></ruby>と <ruby>書<rt>か</rt></ruby>いて ありますか。",
        "options": [
          "<ruby>触<rt>さわ</rt></ruby>るなと <ruby>書<rt>か</rt></ruby>いて あります",
          "<ruby>守<rt>まも</rt></ruby>れと <ruby>書<rt>か</rt></ruby>いて あります",
          "<ruby>注意<rt>ちゅうい</rt></ruby>しろと <ruby>書<rt>か</rt></ruby>いて あります",
          "<ruby>使<rt>つか</rt></ruby>うなと <ruby>書<rt>か</rt></ruby>いて あります"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Trung bình | Trọng tâm: Trích dẫn]\n• Dịch nghĩa: Về máy móc đang sử dụng, có viết gì?\n• Quy tắc & Loại trừ: Bài viết ghi 「使用中の機械には触るなと書いてあります」."
      },
      {
        "id": "dk33-3",
        "question": "<ruby>非常口<rt>ひじょうぐち</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に <ruby>何<rt>なん</rt></ruby>を しては いけませんか。",
        "options": [
          "<ruby>触<rt>さわ</rt></ruby>っては いけません",
          "<ruby>機械<rt>きかい</rt></ruby>を <ruby>使<rt>つか</rt></ruby>っては いけません",
          "<ruby>騒<rt>さわ</rt></ruby>いでは いけません",
          "<ruby>荷物<rt>にもつ</rt></ruby>を <ruby>置<rt>お</rt></ruby>いては いけません"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Cấm chỉ]\n• Dịch nghĩa: Không được làm gì trước cửa thoát hiểm?\n• Quy tắc & Loại trừ: Bài viết ghi 「非常口の前に荷物を置くのは禁止です」."
      },
      {
        "id": "dk33-4",
        "question": "<ruby>実験室<rt>じっけんしつ</rt></ruby>の <ruby>規則<rt>きそく</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>先生<rt>せんせい</rt></ruby>に <ruby>伝<rt>つた</rt></ruby>えては いけません",
          "<ruby>騒<rt>さわ</rt></ruby>いでも いいです",
          "<ruby>実験室<rt>じっけんしつ</rt></ruby>には <ruby>規則<rt>きそく</rt></ruby>が あります",
          "<ruby>機械<rt>きかい</rt></ruby>は <ruby>触<rt>さわ</rt></ruby>っても いいです"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Hiểu nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài?\n• Quy tắc & Loại trừ: 「実験室には規則があります」 là câu đúng ngay đầu bài."
      },
      {
        "id": "dk33-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んだ <ruby>人<rt>ひと</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>か あったら どう しますか。",
        "options": [
          "<ruby>先生<rt>せんせい</rt></ruby>に <ruby>伝<rt>つた</rt></ruby>えます",
          "<ruby>荷物<rt>にもつ</rt></ruby>を <ruby>置<rt>お</rt></ruby>きます",
          "<ruby>騒<rt>さわ</rt></ruby>ぎます",
          "<ruby>機械<rt>きかい</rt></ruby>を <ruby>使<rt>つか</rt></ruby>います"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Hành động | Độ khó: Trung bình | Trọng tâm: Xử lý tình huống]\n• Dịch nghĩa: Nếu có chuyện gì thì làm thế nào?\n• Quy tắc & Loại trừ: Bài viết ghi 「何かあったら、先生に伝えていただけませんか」."
      }
    ],
    "translation": "Đây là phòng thí nghiệm. Trong phòng này có các quy tắc quan trọng. Mọi người nhất định hãy tuân thủ nhé. Thứ nhất, thầy giáo đã nói rằng khi làm thí nghiệm đừng làm ồn. Vì nó rất nguy hiểm. Thứ hai, khi sử dụng máy móc hãy chú ý kỹ. Trên tờ giấy dán tường có viết là đừng chạm vào máy đang sử dụng. Thứ ba, cấm đặt hành lý trước cửa thoát hiểm. Vì khi có hỏa hoạn mọi người sẽ chạy thoát ra ngoài từ đây nên xin đừng đặt gì cả. Nếu có chuyện gì, làm ơn hãy nhắn lại giúp tôi cho giáo viên. Hãy tuân thủ các quy tắc này và làm thí nghiệm an toàn nhé."
  },
  {
    "id": "dokkai-34",
    "lessonId": "bai-34",
    "title": "Bài Đọc Hiểu - Bài 34 Minna",
    "subTitle": "Hướng dẫn sử dụng thiết bị gia dụng / nấu ăn theo bước (Appliance / recipe instructions)",
    "description": "Đọc đoạn văn hướng dẫn cách nấu món ăn Nhật Bản và thao tác thiết bị theo đúng các bước trình tự và chỉ dẫn.",
    "passage": "<ruby>料理<rt>りょうり</rt></ruby>を <ruby>作<rt>つく</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、<ruby>必<rt>かなら</rt></ruby>ず<ruby>説明書<rt>せつめいしょ</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んでください。<ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>したあとで、<ruby>鍋<rt>なべ</rt></ruby>に <ruby>水<rt>みず</rt></ruby>を <ruby>入<rt>い</rt></ruby>れます。<ruby>次<rt>つぎ</rt></ruby>に、<ruby>野菜<rt>やさい</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>ってから、きれいに<ruby>切<rt>き</rt></ruby>ります。ピーマンは<ruby>細<rt>ほそ</rt></ruby>く<ruby>切<rt>き</rt></ruby>ってください。ニンジンは<ruby>図<rt>ず</rt></ruby>の<ruby>通<rt>とお</rt></ruby>りに<ruby>切<rt>き</rt></ruby>ります。<ruby>調味料<rt>ちょうみりょう</rt></ruby>を<ruby>分量<rt>ぶんりょう</rt></ruby>の<ruby>通<rt>とお</rt></ruby>りに<ruby>入<rt>い</rt></ruby>れたあとで、<ruby>火<rt>ひ</rt></ruby>にかけてください。２０<ruby>分<rt>ぷん</rt></ruby>ぐらい<ruby>煮<rt>に</rt></ruby>てから、<ruby>一度<rt>いちど</rt></ruby> <ruby>味<rt>あじ</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます。<ruby>味<rt>あじ</rt></ruby>を<ruby>見<rt>み</rt></ruby>ないで<ruby>料理<rt>りょうり</rt></ruby>をすると、<ruby>失敗<rt>しっぱい</rt></ruby>しますから、<ruby>気<rt>き</rt></ruby>をつけてください。もし <ruby>薄<rt>うす</rt></ruby>いときは、<ruby>醤油<rt>しょうゆ</rt></ruby>や <ruby>塩<rt>しお</rt></ruby>を <ruby>少<rt>すこ</rt></ruby>し <ruby>足<rt>た</rt></ruby>したほうが いいです。<ruby>最後<rt>さいご</rt></ruby>に、お<ruby>皿<rt>さら</rt></ruby>にのせて<ruby>完成<rt>かんせい</rt></ruby>です。",
    "questions": [
      {
        "id": "dk34-1",
        "question": "<ruby>料理<rt>りょうり</rt></ruby>を <ruby>作<rt>つく</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、まず <ruby>何<rt>なん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>まなければなりませんか。",
        "options": [
          "<ruby>新聞<rt>しんぶん</rt></ruby>",
          "<ruby>地図<rt>ちず</rt></ruby>",
          "<ruby>説明書<rt>せつめいしょ</rt></ruby>",
          "<ruby>雑誌<rt>ざっし</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Đọc hiểu thông tin trực tiếp]\n• Dịch nghĩa: Trước khi nấu ăn, trước tiên phải đọc cái gì?\n• Quy tắc & Loại trừ: Dựa vào câu đầu tiên trong bài 「料理を作る前に、必ず説明書を読んでください」, đáp án đúng là 「説明書」. Các phương án 「新聞」, 「地図」 và 「雑誌」 không được đề cập đến trong ngữ cảnh này."
      },
      {
        "id": "dk34-2",
        "question": "ニンジンは どのように <ruby>切<rt>き</rt></ruby>りますか。",
        "options": [
          "<ruby>切<rt>き</rt></ruby>らないで<ruby>入<rt>い</rt></ruby>れます",
          "<ruby>図<rt>ず</rt></ruby>の<ruby>通<rt>とお</rt></ruby>りに<ruby>切<rt>き</rt></ruby>ります",
          "<ruby>大<rt>おお</rt></ruby>きく<ruby>切<rt>き</rt></ruby>ります",
          "<ruby>細<rt>ほそ</rt></ruby>く<ruby>切<rt>き</rt></ruby>ります"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Trung bình | Trọng tâm: Đối chiếu thông tin chi tiết]\n• Dịch nghĩa: Cắt cà rốt như thế nào?\n• Quy tắc & Loại trừ: Đoạn văn viết 「ニンジンは図の通りに切ります」, do đó chọn 「図の通りに切ります」. Phương án 「細く切ります」 dùng cho ớt chuông (ピーマン), còn 「切らないで入れます」 và 「大きく切ります」 sai lệch với văn bản."
      },
      {
        "id": "dk34-3",
        "question": "<ruby>料理<rt>りょうり</rt></ruby>で <ruby>失敗<rt>しっぱい</rt></ruby>しないときは、どんなことに <ruby>気<rt>き</rt></ruby>をつけなければなりませんか。",
        "options": [
          "<ruby>味<rt>あじ</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます",
          "<ruby>水<rt>みず</rt></ruby>を<ruby>入<rt>い</rt></ruby>れません",
          "<ruby>味<rt>あじ</rt></ruby>を<ruby>見<rt>み</rt></ruby>ないで<ruby>料理<rt>りょうり</rt></ruby>します",
          "<ruby>火<rt>ひ</rt></ruby>にかけません"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định | Độ khó: Trung bình | Trọng tâm: Hiểu rõ cấu trúc phủ định và lời khuyên]\n• Dịch nghĩa: Khi muốn không thất bại trong nấu ăn, phải chú ý điều gì?\n• Quy tắc & Loại trừ: Văn bản nêu rõ 「味を見ないで料理をすると、失敗しますから、気をつけてください」 (Nếu nấu mà không nếm thử vị sẽ thất bại). Do đó, phải nếm thử vị 「味を見ます」. Các phương án khác gây thất bại hoặc sai nội dung."
      },
      {
        "id": "dk34-4",
        "question": "<ruby>料理<rt>りょうり</rt></ruby>の <ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に、<ruby>火<rt>ひ</rt></ruby>にかけます",
          "<ruby>説明書<rt>せつめいしょ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>まないで<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ります",
          "ピーマンを<ruby>図<rt>ず</rt></ruby>の<ruby>通<rt>とお</rt></ruby>りに<ruby>切<rt>き</rt></ruby>ります",
          "<ruby>調味料<rt>ちょうみりょう</rt></ruby>を<ruby>入<rt>い</rt></ruby>れたあとで、<ruby>火<rt>ひ</rt></ruby>にかけます"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Khớp nội dung toàn bài | Độ khó: Khó | Trọng tâm: Đánh giá đúng sai toàn văn bản]\n• Dịch nghĩa: Câu nào sau đây khớp với nội dung bài đọc?\n• Quy tắc & Loại trừ: Đoạn văn có câu 「調味料を入れたあとで、火にかけてください」, hoàn toàn khớp với 「調味料を入れたあとで、火にかけます」. Phương án 「材料を準備する前に...」 sai trình tự thời gian; 「ピーマンを図の通りに」 sai vì ớt chuông cắt nhỏ (細く); 「説明書を読まないで」 mâu thuẫn với câu đầu tiên."
      },
      {
        "id": "dk34-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>では、<ruby>料理<rt>りょうり</rt></ruby>の <ruby>最後<rt>さいご</rt></ruby>の <ruby>作業<rt>さぎょう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>火<rt>ひ</rt></ruby>にかけることです",
          "お<ruby>皿<rt>さら</rt></ruby>にのせることです",
          "<ruby>野菜<rt>やさい</rt></ruby>を<ruby>切<rt>き</rt></ruby>ることです",
          "<ruby>水<rt>みず</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>くことです"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính và kết luận | Độ khó: Dễ | Trọng tâm: Tổng kết bước cuối cùng]\n• Dịch nghĩa: Thao tác cuối cùng của món ăn này là gì?\n• Quy tắc & Loại trừ: Câu cuối cùng của bài viết 「最後に、お皿にのせて完成です」 xác định rõ bước cuối là đặt lên đĩa 「お皿にのせることです」. Các phương án còn lại là các bước thực hiện ở phần đầu hoặc giữa."
      }
    ],
    "translation": "Trước khi nấu ăn, nhất định hãy đọc sách hướng dẫn. Sau khi chuẩn bị nguyên liệu, cho nước vào nồi. Tiếp theo, rửa rau củ rồi cắt gọn gàng. Hãy cắt ớt chuông thành dải nhỏ. Cắt cà rốt đúng theo hình vẽ minh họa. Sau khi cho gia vị vào đúng theo phân lượng, hãy bắc lên bếp đun. Ninh khoảng 20 phút rồi nếm thử vị một lần. Nếu nấu ăn mà không nếm thử vị thì sẽ thất bại, vì vậy hãy chú ý nhé. Nếu vị nhạt, bạn nên thêm một chút nước tương hoặc muối. Cuối cùng, đặt lên đĩa là hoàn thành."
  },
  {
    "id": "dokkai-35",
    "lessonId": "bai-35",
    "title": "Bài Đọc Hiểu - Bài 35 Minna",
    "subTitle": "Cẩm nang tư vấn chọn địa điểm du lịch theo điều kiện (Travel condition guide)",
    "description": "Bài đọc hiểu ngắn hướng dẫn cách lựa chọn địa điểm du lịch phù hợp với sở thích, thời gian và điều kiện thời tiết dựa trên các cấu trúc ngữ pháp bài 35.",
    "passage": "<ruby>旅行<rt>りょこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>くなら、<ruby>目的<rt>もくてき</rt></ruby>や <ruby>予算<rt>よさん</rt></ruby>に <ruby>合<rt>あ</rt></ruby>わせて <ruby>選<rt>えら</rt></ruby>ぶことが <ruby>大切<rt>たいせつ</rt></ruby>です。<ruby>海<rt>うみ</rt></ruby>が <ruby>好<rt>す</rt></ruby>きなら、きれいな <ruby>島<rt>しま</rt></ruby>へ <ruby>行<rt>い</rt></ruby>くと いいです。<ruby>夏<rt>なつ</rt></ruby>なら <ruby>泳<rt>およ</rt></ruby>ぐことも できます。<ruby>時間<rt>じかん</rt></ruby>が あればあるほど、<ruby>遠<rt>とお</rt></ruby>い <ruby>所<rt>ところ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>くことが できます。<ruby>歴史<rt>れきし</rt></ruby>を <ruby>知<rt>し</rt></ruby>りたいなら、<ruby>古<rt>ふる</rt></ruby>い <ruby>町<rt>まち</rt></ruby>へ <ruby>行<rt>い</rt></ruby>けば、いろいろな <ruby>建物<rt>たてもの</rt></ruby>や お<ruby>寺<rt>てら</rt></ruby>を <ruby>見<rt>み</rt></ruby>ることができます。<ruby>季節<rt>きせつ</rt></ruby>が <ruby>変<rt>か</rt></ruby>われば、<ruby>景色<rt>けしき</rt></ruby>も <ruby>変<rt>か</rt></ruby>わります。<ruby>天気<rt>てんき</rt></ruby>が よければ、<ruby>山登<rt>やまのぼ</rt></ruby>りも <ruby>楽<rt>たの</rt></ruby>しいです。<ruby>荷物<rt>にもつ</rt></ruby>は <ruby>少<rt>すく</rt></ruby>なければ <ruby>少<rt>すく</rt></ruby>ないほど、<ruby>楽<rt>らく</rt></ruby>に <ruby>歩<rt>ある</rt></ruby>けます。<ruby>旅行<rt>りょこう</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に しっかり <ruby>計画<rt>けいかく</rt></ruby>を <ruby>立<rt>た</rt></ruby>てれば、<ruby>旅行<rt>りょこう</rt></ruby>は もっと おもしろくなります。",
    "questions": [
      {
        "id": "dk35-1",
        "question": "<ruby>海<rt>うみ</rt></ruby>が <ruby>好き<rt>すき</rt></ruby>な <ruby>人<rt>ひと</rt></ruby>は どこへ <ruby>行<rt>い</rt></ruby>くと いいと <ruby>書<rt>か</rt></ruby>いて ありますか。",
        "options": [
          "きれいな <ruby>島<rt>しま</rt></ruby>",
          "<ruby>高<rt>たか</rt></ruby>い <ruby>山<rt>やま</rt></ruby>",
          "<ruby>古<rt>ふる</rt></ruby>い <ruby>町<rt>まち</rt></ruby>",
          "<ruby>大<rt>おお</rt></ruby>きな <ruby>港<rt>みなと</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Khớp thông tin trong bài]\n• Dịch nghĩa: Bài viết viết người thích biển nên đi đâu?\n• Quy tắc & Loại trừ: Dựa vào câu 「海が好きなら、きれいな島へ行くといいです」, đáp án chính xác là 「きれいな島」. Các phương án khác không khớp với địa điểm dành cho người thích biển trong đoạn văn."
      },
      {
        "id": "dk35-2",
        "question": "<ruby>時間<rt>じかん</rt></ruby>が たくさん あれば、どうなりますか。",
        "options": [
          "<ruby>山<rt>やま</rt></ruby><ruby>登<rt>のぼ</rt></ruby>りが とても <ruby>楽<rt>らく</rt></ruby>になる",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>計画<rt>けいかく</rt></ruby>を <ruby>立<rt>た</rt></ruby>てることが できない",
          "<ruby>遠<rt>とお</rt></ruby>い <ruby>所<rt>ところ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>くことが できる",
          "<ruby>日本<rt>にほん</rt></ruby>の <ruby>歴史<rt>れきし</rt></ruby>が よくわかる"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Quan hệ nhân quả | Độ khó: Trung bình | Trọng tâm: Hiểu ý nghĩa cấu trúc tương quan]\n• Dịch nghĩa: Nếu có nhiều thời gian thì sẽ thế nào?\n• Quy tắc & Loại trừ: Câu văn chỉ rõ 「時間があればあるほど、遠いところへ行くことができます」. Phương án 「遠いところへ行くことができる」 phản ánh chính xác kết quả này. Các ý khác nói về lịch sử hay leo núi không đúng ngữ cảnh thời gian."
      },
      {
        "id": "dk35-3",
        "question": "<ruby>歴史<rt>れきし</rt></ruby>を <ruby>知<rt>し</rt></ruby>りたいときは、どこへ <ruby>行<rt>い</rt></ruby>けば いいですか。",
        "options": [
          "きれいな <ruby>島<rt>しま</rt></ruby>",
          "<ruby>古<rt>ふる</rt></ruby>い <ruby>町<rt>まち</rt></ruby>",
          "<ruby>高<rt>たか</rt></ruby>い <ruby>山<rt>やま</rt></ruby>",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>建物<rt>たてもの</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết mục đích | Độ khó: Dễ | Trọng tâm: Tra cứu thông tin theo điều kiện]\n• Dịch nghĩa: Khi muốn biết về lịch sử thì nên đi đâu?\n• Quy tắc & Loại trừ: Đoạn văn nêu rõ 「歴史を知りたいなら、古い町へ行けば...」. Do đó đáp án là 「古い町」. Các phương án khác không khớp với mục đích tìm hiểu lịch sử."
      },
      {
        "id": "dk35-4",
        "question": "<ruby>旅行<rt>りょこう</rt></ruby>の <ruby>選<rt>えら</rt></ruby>び<ruby>方<rt>かた</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>予算<rt>よさん</rt></ruby>は <ruby>旅行<rt>りょこう</rt></ruby>に あまり <ruby>関係<rt>かんけい</rt></ruby>がない",
          "<ruby>遠<rt>とお</rt></ruby>い <ruby>所<rt>ところ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>くには <ruby>時間<rt>じかん</rt></ruby>が いらない",
          "<ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>れば、<ruby>山<rt>やま</rt></ruby><ruby>登<rt>のぼ</rt></ruby>りが とても <ruby>楽<rt>たの</rt></ruby>しくなる",
          "<ruby>計画<rt>けいかく</rt></ruby>を <ruby>立<rt>た</rt></ruby>てれば、<ruby>旅行<rt>りょこう</rt></ruby>が もっと おもしろくなる"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Khớp nội dung toàn bài | Độ khó: Khó | Trọng tâm: Đánh giá tổng hợp thông tin văn bản]\n• Dịch nghĩa: Câu nào khớp với nội dung bài đọc?\n• Quy tắc & Loại trừ: Câu cuối bài khẳng định 「計画を立てれば、旅行はもっとおもしろくなります」 nên phương án đầu tiên chính xác. Các phương án còn lại bóp méo hoặc mâu thuẫn với nội dung đoạn văn."
      },
      {
        "id": "dk35-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>一番<rt>いちばん</rt></ruby> <ruby>言<rt>い</rt></ruby>いたい ことは <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>天気<rt>てんき</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>ければ <ruby>絶対<rt>ぜったい</rt></ruby>に <ruby>旅行<rt>りょこう</rt></ruby>しては いけない",
          "いつでも <ruby>海<rt>うみ</rt></ruby>の <ruby>近所<rt>きんじょ</rt></ruby>へ <ruby>旅行<rt>りょこう</rt></ruby>したほうが いい",
          "<ruby>目的<rt>もくてき</rt></ruby>や <ruby>条件<rt>じょうけん</rt></ruby>に <ruby>合<rt>あ</rt></ruby>わせて <ruby>旅行<rt>りょこう</rt></ruby>の <ruby>計画<rt>けいかく</rt></ruby>を <ruby>立<rt>た</rt></ruby>てることが <ruby>大切<rt>たいせつ</rt></ruby>だ",
          "<ruby>遠<rt>とお</rt></ruby>い <ruby>島<rt>しま</rt></ruby>へ <ruby>行<rt>い</rt></ruby>くことだけが <ruby>旅行<rt>りょこう</rt></ruby>の <ruby>目的<rt>もくてき</rt></ruby>だ"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính bài đọc | Độ khó: Khó | Trọng tâm: Tổng kết chủ đề văn bản]\n• Dịch nghĩa: Điều muốn truyền tải nhất của bài viết này là gì?\n• Quy tắc & Loại trừ: Câu mở đầu nhấn mạnh việc chọn lựa phù hợp mục đích và ngân sách là quan trọng, và bài viết triển khai các điều kiện du lịch khác nhau. Phương án 「目的や条件に合わせて旅行の計画を立てることが大切だ」 tóm tắt chính xác toàn bài. Các phương án khác diễn giải sai lệch."
      }
    ],
    "translation": "Nếu đi du lịch, việc lựa chọn cho phù hợp với mục đích và ngân sách là rất quan trọng. Nếu thích biển, bạn nên đi đến một hòn đảo đẹp. Nếu là mùa hè thì cũng có thể bơi nữa. Càng có nhiều thời gian, bạn càng có thể đi đến những nơi xa. Nếu muốn biết về lịch sử, nếu đi đến những thị trấn cổ, bạn có thể nhìn ngắm nhiều tòa nhà và ngôi chùa khác nhau. Nếu mùa thay đổi thì phong cảnh cũng thay đổi theo. Nếu thời tiết tốt, việc leo núi cũng rất vui. Hành lý càng ít thì bạn càng đi bộ thoải mái. Nếu lập kế hoạch kỹ trước chuyến đi, chuyến du lịch sẽ trở nên thú vị hơn nữa."
  },
  {
    "id": "dokkai-36",
    "lessonId": "bai-36",
    "title": "Bài Đọc Hiểu - Bài 36 Minna",
    "subTitle": "Nhật ký rèn luyện thói quen sức khỏe & tiết kiệm (Habit-building progress journal)",
    "description": "Đọc đoạn văn về quá trình thay đổi thói quen của một người và trả lời câu hỏi.",
    "passage": "このごろ、<ruby>健康<rt>けんこう</rt></ruby>に <ruby>気<rt>き</rt></ruby>をつけて <ruby>生活<rt>せいかつ</rt></ruby>を <ruby>変<rt>か</rt></ruby>えました。<ruby>前<rt>まえ</rt></ruby>は <ruby>夜<rt>よる</rt></ruby> <ruby>遅<rt>おそ</rt></ruby>くまで <ruby>起<rt>お</rt></ruby>きていましたが、<ruby>今<rt>いま</rt></ruby>は <ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>るように しています。<ruby>毎日<rt>まいにち</rt></ruby> 30<ruby>分<rt>ぷん</rt></ruby>くらい <ruby>歩<rt>ある</rt></ruby>くように して、<ruby>野菜<rt>やさい</rt></ruby>も たくさん <ruby>食<rt>た</rt></ruby>べるように しています。そのおかげで、<ruby>体<rt>からだ</rt></ruby>の <ruby>調子<rt>ちょうし</rt></ruby>が とても <ruby>良<rt>よ</rt></ruby>くなりました。<ruby>毎日<rt>まいにち</rt></ruby> <ruby>元気<rt>げんき</rt></ruby>に <ruby>仕事<rt>しごと</rt></ruby>が できるようになりました。<ruby>貯金<rt>ちょきん</rt></ruby>も <ruby>始<rt>はじ</rt></ruby>めました。<ruby>毎月<rt>まいつき</rt></ruby> <ruby>給料<rt>きゅうりょう</rt></ruby>の 10パーセントを <ruby>貯金<rt>ちょきん</rt></ruby>するように しています。<ruby>将来<rt>しょうらい</rt></ruby>を <ruby>考<rt>かんが</rt></ruby>えて、<ruby>無駄<rt>むだ</rt></ruby>な <ruby>物<rt>もの</rt></ruby>を <ruby>買<rt>か</rt></ruby>わないように しています。また、<ruby>外<rt>そと</rt></ruby>で <ruby>高<rt>たか</rt></ruby>い <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べないで、<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>るように しています。やっと この <ruby>新<rt>あたら</rt></ruby>しい <ruby>生活<rt>せいかつ</rt></ruby>に <ruby>慣<rt>な</rt></ruby>れました。",
    "questions": [
      {
        "id": "dk36-1",
        "question": "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>元気<rt>げんき</rt></ruby>に <ruby>過<rt>す</rt></ruby>ごせるように、<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を していますか。",
        "options": [
          "<ruby>野菜<rt>やさい</rt></ruby>を <ruby>食<rt>た</rt></ruby>べないように する",
          "<ruby>夜<rt>よる</rt></ruby> <ruby>遅<rt>おそ</rt></ruby>くまで <ruby>起<rt>お</rt></ruby>きて、<ruby>歩<rt>ある</rt></ruby>く",
          "<ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>て、<ruby>歩<rt>ある</rt></ruby>いて、<ruby>肉<rt>にく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べる",
          "<ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>て、<ruby>歩<rt>ある</rt></ruby>いて、<ruby>野菜<rt>やさい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べる"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Đọc hiểu thông tin]\n• Dịch nghĩa: Để sống khỏe mạnh mỗi ngày, tác giả đang làm gì? Tôi đang cố gắng đi ngủ sớm, đi bộ và ăn rau.\n• Quy tắc & Loại trừ: Thông tin nằm ở câu 2 và 3 của đoạn văn. Các phương án khác sai lệch về hành động."
      },
      {
        "id": "dk36-2",
        "question": "<ruby>貯金<rt>ちょきん</rt></ruby>は <ruby>毎月<rt>まいつき</rt></ruby> いくら していますか。",
        "options": [
          "<ruby>給料<rt>きゅうりょう</rt></ruby>の 10パーセント",
          "<ruby>給料<rt>きゅうりょう</rt></ruby>の 100パーセント",
          "<ruby>給料<rt>きゅうりょう</rt></ruby>の 1パーセント",
          "<ruby>給料<rt>きゅうりょう</rt></ruby>の 5パーセント"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Đọc hiểu số liệu]\n• Dịch nghĩa: Bạn tiết kiệm bao nhiêu tiền mỗi tháng? 10% tiền lương.\n• Quy tắc & Loại trừ: Thông tin nằm ở câu 7 của đoạn văn. Các phương án khác sai con số."
      },
      {
        "id": "dk36-3",
        "question": "<ruby>将来<rt>しょうらい</rt></ruby>を <ruby>考<rt>かんが</rt></ruby>えて、<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を しないように していますか。",
        "options": [
          "<ruby>野菜<rt>やさい</rt></ruby>を <ruby>買<rt>か</rt></ruby>わない",
          "<ruby>無駄<rt>むだ</rt></ruby>な <ruby>物<rt>もの</rt></ruby>を <ruby>買<rt>か</rt></ruby>う",
          "<ruby>無駄<rt>むだ</rt></ruby>な <ruby>物<rt>もの</rt></ruby>を <ruby>買<rt>か</rt></ruby>わないように する",
          "<ruby>給料<rt>きゅうりょう</rt></ruby>を <ruby>全部<rt>ぜんぶ</rt></ruby> <ruby>使<rt>つか</rt></ruby>う"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Trung bình | Trọng tâm: Đọc hiểu mục đích]\n• Dịch nghĩa: Nghĩ đến tương lai, tác giả cố gắng không làm gì? Tôi đang cố gắng không mua những thứ lãng phí.\n• Quy tắc & Loại trừ: Thông tin nằm ở câu 8 của đoạn văn. Các phương án khác trái ngược hoặc sai nội dung."
      },
      {
        "id": "dk36-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>の <ruby>変化<rt>へんか</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>体調<rt>たいちょう</rt></ruby>は <ruby>悪<rt>わる</rt></ruby>くなりました",
          "<ruby>前<rt>まえ</rt></ruby>は <ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>ていました",
          "<ruby>今<rt>いま</rt></ruby>は <ruby>生活<rt>せいかつ</rt></ruby>に <ruby>慣<rt>な</rt></ruby>れていません",
          "<ruby>今<rt>いま</rt></ruby>は <ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>るように しています"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng về sự thay đổi cuộc sống của tác giả? Bây giờ tôi đang cố gắng đi ngủ sớm.\n• Quy tắc & Loại trừ: Câu 2 của bài xác nhận việc này. Các câu khác sai về thời gian hoặc trạng thái."
      },
      {
        "id": "dk36-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた <ruby>人<rt>ひと</rt></ruby>は、<ruby>今<rt>いま</rt></ruby> どうですか。",
        "options": [
          "まだ <ruby>慣<rt>な</rt></ruby>れるように しています",
          "<ruby>生活<rt>せいかつ</rt></ruby>に <ruby>慣<rt>な</rt></ruby>れました",
          "<ruby>生活<rt>せいかつ</rt></ruby>に <ruby>慣<rt>な</rt></ruby>れていません",
          "<ruby>生活<rt>せいかつ</rt></ruby>を <ruby>変<rt>か</rt></ruby>える <ruby>予定<rt>よてい</rt></ruby>です"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Kết luận]\n• Dịch nghĩa: Hiện tại tác giả thế nào? Đã quen với cuộc sống.\n• Quy tắc & Loại trừ: Câu cuối cùng của bài khẳng định việc đã quen với cuộc sống. Các phương án khác sai về thì hoặc trạng thái."
      }
    ],
    "translation": "Dạo gần đây, tôi đã chú ý đến sức khỏe và thay đổi lối sống. Trước đây tôi thường thức khuya, nhưng bây giờ tôi đang cố gắng đi ngủ sớm. Tôi cố gắng đi bộ khoảng 30 phút mỗi ngày và ăn thật nhiều rau. Nhờ đó, tình trạng cơ thể tôi đã trở nên rất tốt. Tôi đã có thể làm việc khỏe mạnh mỗi ngày. Tôi cũng đã bắt đầu tiết kiệm tiền. Tôi đang cố gắng tiết kiệm 10% tiền lương mỗi tháng. Nghĩ đến tương lai, tôi đang cố gắng không mua những thứ lãng phí. Ngoài ra, tôi không ăn món đắt tiền ở ngoài mà cố gắng tự nấu ăn. Cuối cùng thì tôi cũng đã quen với cuộc sống mới này."
  },
  {
    "id": "dokkai-37",
    "lessonId": "bai-37",
    "title": "Bài Đọc Hiểu - Bài 37 Minna",
    "subTitle": "Tin tức ngắn về sự kiện cộng đồng / công trình địa phương (Local community news brief)",
    "description": "Đọc đoạn văn ngắn về một dự án xây dựng công viên mới tại địa phương và trả lời các câu hỏi liên quan đến thể bị động.",
    "passage": "<ruby>来月<rt>らいげつ</rt></ruby>、この<ruby>町<rt>まち</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>公園<rt>こうえん</rt></ruby>が<ruby>作<rt>つく</rt></ruby>られます。この<ruby>公園<rt>こうえん</rt></ruby>は<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>建築家<rt>けんちくか</rt></ruby>によって<ruby>設計<rt>せっけい</rt></ruby>されました。たくさんの<ruby>木<rt>き</rt></ruby>が<ruby>植<rt>う</rt></ruby>えられますから、<ruby>夏<rt>なつ</rt></ruby>でも<ruby>涼<rt>すず</rt></ruby>しいです。<ruby>公園<rt>こうえん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には、<ruby>子供<rt>こども</rt></ruby>たちが<ruby>遊<rt>あそ</rt></ruby>べる<ruby>場所<rt>ばしょ</rt></ruby>も<ruby>作<rt>つく</rt></ruby>られます。<ruby>広<rt>ひろ</rt></ruby>い<ruby>広場<rt>ひろば</rt></ruby>では、<ruby>週末<rt>しゅうまつ</rt></ruby>に<ruby>様々<rt>さまざま</rt></ruby>な<ruby>音楽<rt>おんがく</rt></ruby><ruby>会<rt>かい</rt></ruby>や<ruby>展示<rt>てんじ</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われる<ruby>予定<rt>よてい</rt></ruby>です。また、<ruby>夜<rt>よる</rt></ruby>は<ruby>美<rt>うつく</rt></ruby>しい<ruby>電気<rt>でんき</rt></ruby>が<ruby>点<rt>つ</rt></ruby>けられますから、<ruby>散歩<rt>さんぽ</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>も<ruby>安心<rt>あんしん</rt></ruby>です。この<ruby>公園<rt>こうえん</rt></ruby>は、<ruby>町<rt>まち</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>たちに<ruby>愛<rt>あい</rt></ruby>される<ruby>場所<rt>ばしょ</rt></ruby>にしたいと<ruby>思<rt>おも</rt></ruby>われています。<ruby>開園<rt>かいえん</rt></ruby>したら、ぜひ<ruby>家族<rt>かぞく</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>びに<ruby>行<rt>い</rt></ruby>ってください。",
    "questions": [
      {
        "id": "dk37-1",
        "question": "この<ruby>公園<rt>こうえん</rt></ruby>は だれに <ruby>設計<rt>せっけい</rt></ruby>されましたか。",
        "options": [
          "<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>建築家<rt>けんちくか</rt></ruby>",
          "<ruby>子供<rt>こども</rt></ruby>たち",
          "<ruby>町<rt>まち</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>たち",
          "<ruby>家族<rt>かぞく</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Xác định tác nhân bị động]\n• Dịch nghĩa: Công viên này được thiết kế bởi ai?\n• Quy tắc & Loại trừ: Dựa vào câu 「この公園は有名な建築家によって設計されました」, chọn phương án 「有名な建築家」."
      },
      {
        "id": "dk37-2",
        "question": "<ruby>夏<rt>なつ</rt></ruby>でも <ruby>涼<rt>すず</rt></ruby>しい <ruby>理由<rt>りゆう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>子供<rt>こども</rt></ruby>たちが<ruby>遊<rt>あそ</rt></ruby>べるから",
          "<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>建築家<rt>けんちくか</rt></ruby>が<ruby>設計<rt>せっけい</rt></ruby>したから",
          "<ruby>夜<rt>よる</rt></ruby>に<ruby>電気<rt>でんき</rt></ruby>があるから",
          "たくさんの<ruby>木<rt>き</rt></ruby>が<ruby>植<rt>う</rt></ruby>えられるから"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do | Độ khó: Trung bình | Trọng tâm: Liên kết nguyên nhân kết quả]\n• Dịch nghĩa: Tại sao mùa hè vẫn mát mẻ?\n• Quy tắc & Loại trừ: Dựa vào câu 「たくさんの木が植えられますから、夏でも涼しいです」, chọn phương án 「たくさんの木が植えられるから」."
      },
      {
        "id": "dk37-3",
        "question": "<ruby>本文<rt>ほんぶん</rt></ruby>に <ruby>書<rt>か</rt></ruby>いていないことは <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>公園<rt>こうえん</rt></ruby>は<ruby>来月<rt>らいげつ</rt></ruby><ruby>作<rt>つく</rt></ruby>られる",
          "<ruby>公園<rt>こうえん</rt></ruby>で<ruby>料理<rt>りょうり</rt></ruby>が<ruby>作<rt>つく</rt></ruby>られる",
          "<ruby>公園<rt>こうえん</rt></ruby>に<ruby>木<rt>き</rt></ruby>が<ruby>植<rt>う</rt></ruby>えられる",
          "<ruby>公園<rt>こうえん</rt></ruby>に<ruby>子供<rt>こども</rt></ruby>の<ruby>遊<rt>あそ</rt></ruby>び<ruby>場<rt>じょう</rt></ruby>がある"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Phủ định | Độ khó: Trung bình | Trọng tâm: Loại trừ thông tin sai]\n• Dịch nghĩa: Điều gì không được viết trong bài?\n• Quy tắc & Loại trừ: Bài không nhắc đến việc nấu ăn trong công viên, các thông tin khác đều có trong bài."
      },
      {
        "id": "dk37-4",
        "question": "<ruby>新<rt>あたら</rt></ruby>しい <ruby>公園<rt>こうえん</rt></ruby>についての <ruby>説明<rt>せつめい</rt></ruby>で、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>公園<rt>こうえん</rt></ruby>は<ruby>町<rt>まち</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>愛<rt>あい</rt></ruby>される<ruby>場所<rt>ばしょ</rt></ruby>になる<ruby>予定<rt>よてい</rt></ruby>です",
          "<ruby>公園<rt>こうえん</rt></ruby>はもう<ruby>完成<rt>かんせい</rt></ruby>しました",
          "<ruby>夜<rt>よる</rt></ruby>は<ruby>暗<rt>くら</rt></ruby>い<ruby>公園<rt>こうえん</rt></ruby>です",
          "<ruby>公園<rt>こうえん</rt></ruby>は<ruby>冬<rt>ふゆ</rt></ruby>だけ<ruby>涼<rt>すず</rt></ruby>しいです"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Hiểu nội dung tổng quát]\n• Dịch nghĩa: Câu nào đúng về công viên mới?\n• Quy tắc & Loại trừ: Dựa vào câu 「町の人たちに愛される場所にしたいと思われています」, chọn phương án 「公園は町の人に愛される場所になる予定です」."
      },
      {
        "id": "dk37-5",
        "question": "この<ruby>公園<rt>こうえん</rt></ruby>について、<ruby>何<rt>なに</rt></ruby>が <ruby>言<rt>い</rt></ruby>われていますか。",
        "options": [
          "<ruby>夜<rt>よる</rt></ruby>は<ruby>行<rt>い</rt></ruby>かないほうがいいです",
          "<ruby>木<rt>き</rt></ruby>は<ruby>植<rt>う</rt></ruby>えられません",
          "<ruby>家族<rt>かぞく</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くといいです",
          "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>行<rt>い</rt></ruby>くべきです"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Lời khuyên trong bài]\n• Dịch nghĩa: Điều gì được nói về công viên này?\n• Quy tắc & Loại trừ: Dựa vào câu cuối 「ぜひ家族と一緒に遊びに行ってください」, chọn phương án 「家族と一緒に行くといいです」."
      }
    ],
    "translation": "Tháng sau, một công viên mới sẽ được xây dựng tại thị trấn này. Công viên này được thiết kế bởi một kiến trúc sư nổi tiếng. Vì nhiều cây xanh sẽ được trồng nên dù là mùa hè cũng rất mát mẻ. Bên trong công viên cũng sẽ được xây dựng nơi để trẻ em vui chơi. Tại quảng trường rộng lớn, nhiều buổi hòa nhạc và triển lãm dự kiến sẽ được tổ chức vào cuối tuần. Ngoài ra, vào ban đêm những ánh đèn đẹp sẽ được thắp sáng nên người đi dạo cũng rất yên tâm. Công viên này được mong đợi sẽ trở thành một nơi được người dân thị trấn yêu mến. Khi công viên mở cửa, nhất định hãy đi chơi cùng với gia đình nhé."
  },
  {
    "id": "dokkai-38",
    "lessonId": "bai-38",
    "title": "Bài Đọc Hiểu - Bài 38 Minna",
    "subTitle": "Bài chia sẻ kinh nghiệm học tiếng Nhật trên blog (Japanese study blog post)",
    "description": "Đọc đoạn văn về kinh nghiệm học tiếng Nhật và trả lời các câu hỏi liên quan đến cấu trúc danh từ hóa động từ.",
    "passage": "みなさん、こんにちは。わたしは <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>するのが <ruby>好<rt>す</rt></ruby>きです。<ruby>毎日<rt>まいにち</rt></ruby> <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えるのは <ruby>大変<rt>たいへん</rt></ruby>ですが、<ruby>新<rt>あたら</rt></ruby>しい <ruby>言葉<rt>ことば</rt></ruby>を <ruby>使<rt>つか</rt></ruby>うのは とても <ruby>楽<rt>たの</rt></ruby>しいです。<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>本屋<rt>ほんや</rt></ruby>で <ruby>新<rt>あたら</rt></ruby>しい <ruby>辞書<rt>じしょ</rt></ruby>を <ruby>買<rt>か</rt></ruby>うのを <ruby>忘<rt>わす</rt></ruby>れましたから、<ruby>明日<rt>あした</rt></ruby>は <ruby>必<rt>かなら</rt></ruby>ず <ruby>買<rt>か</rt></ruby>うように します。<ruby>日本語<rt>にほんご</rt></ruby>で <ruby>話<rt>はな</rt></ruby>すのは まだ <ruby>下手<rt>へた</rt></ruby>ですが、<ruby>毎日<rt>まいにち</rt></ruby> <ruby>声<rt>こえ</rt></ruby>を <ruby>出<rt>だ</rt></ruby>して <ruby>練習<rt>れんしゅう</rt></ruby>するのを <ruby>忘<rt>わす</rt></ruby>れません。わたしが <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>てから ずっと <ruby>勉強<rt>べんきょう</rt></ruby>しているのを <ruby>知<rt>し</rt></ruby>っている <ruby>友達<rt>ともだち</rt></ruby>が、よく <ruby>会話<rt>かいわ</rt></ruby>の <ruby>練習<rt>れんしゅう</rt></ruby>を <ruby>手伝<rt>てつだ</rt></ruby>ってくれます。<ruby>親切<rt>しんせつ</rt></ruby>な <ruby>友達<rt>ともだち</rt></ruby>に <ruby>本当<rt>ほんとう</rt></ruby>に <ruby>感謝<rt>かんしゃ</rt></ruby>しています。",
    "questions": [
      {
        "id": "dk38-1",
        "question": "この <ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れましたか。",
        "options": [
          "<ruby>漢字<rt>かんじ</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えること",
          "<ruby>練習<rt>れんしゅう</rt></ruby>すること",
          "<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>すること",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>辞書<rt>じしょ</rt></ruby>を <ruby>買<rt>か</rt></ruby>うこと"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: V-るのを忘れる]\n• Dịch nghĩa: Người này đã quên việc gì?\n• Quy tắc & Loại trừ: Trong bài có câu 「先週、新しい辞書を買うのを忘れました」, nên đáp án là mua từ điển."
      },
      {
        "id": "dk38-2",
        "question": "<ruby>明日<rt>あした</rt></ruby>、この <ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>漢字<rt>かんじ</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えます",
          "<ruby>辞書<rt>じしょ</rt></ruby>を <ruby>買<rt>か</rt></ruby>います",
          "<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>練習<rt>れんしゅう</rt></ruby>します",
          "<ruby>友達<rt>ともだち</rt></ruby>と <ruby>話<rt>はな</rt></ruby>します"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự | Độ khó: Trung bình | Trọng tâm: V-るようにします]\n• Dịch nghĩa: Ngày mai người này sẽ làm gì?\n• Quy tắc & Loại trừ: Bài viết nói 「明日は買うようにします」 (Ngày mai tôi sẽ cố gắng mua), ám chỉ việc mua từ điển."
      },
      {
        "id": "dk38-3",
        "question": "この <ruby>人<rt>ひと</rt></ruby>の <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>話<rt>はな</rt></ruby>す <ruby>力<rt>ちから</rt></ruby>は どうですか。",
        "options": [
          "まだ <ruby>下手<rt>へた</rt></ruby>です",
          "<ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>話<rt>はな</rt></ruby>せません",
          "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>練習<rt>れんしゅう</rt></ruby>して <ruby>上手<rt>じょうず</rt></ruby>になりました",
          "とても <ruby>上手<rt>じょうず</rt></ruby>です"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định | Độ khó: Dễ | Trọng tâm: Tính từ chỉ năng lực]\n• Dịch nghĩa: Khả năng nói tiếng Nhật của người này thế nào?\n• Quy tắc & Loại trừ: Bài viết ghi rõ 「日本語で話すのはまだ下手です」, nên đáp án là vẫn còn kém."
      },
      {
        "id": "dk38-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>練習<rt>れんしゅう</rt></ruby>するのを <ruby>忘<rt>わす</rt></ruby>れます",
          "<ruby>友達<rt>ともだち</rt></ruby>は <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>していません",
          "<ruby>漢字<rt>かんじ</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えるのは <ruby>楽<rt>たの</rt></ruby>しいですが、<ruby>大変<rt>たいへん</rt></ruby>です",
          "<ruby>辞書<rt>じしょ</rt></ruby>は <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>買<rt>か</rt></ruby>いました"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Nội dung nào đúng với bài đọc?\n• Quy tắc & Loại trừ: Câu đầu tiên khớp với 「毎日漢字を覚えるのは大変ですが、楽しいです」, các câu khác đều sai thông tin."
      },
      {
        "id": "dk38-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた <ruby>人<rt>ひと</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れませんか。",
        "options": [
          "<ruby>漢字<rt>かんじ</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えること",
          "<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>練習<rt>れんしゅう</rt></ruby>すること",
          "<ruby>辞書<rt>じしょ</rt></ruby>を <ruby>買<rt>か</rt></ruby>うこと",
          "<ruby>友達<rt>ともだち</rt></ruby>に <ruby>感謝<rt>かんしゃ</rt></ruby>すること"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Phủ định của quên]\n• Dịch nghĩa: Người này không quên việc gì?\n• Quy tắc & Loại trừ: Bài viết nói 「毎日練習するのを忘れません」, nên đáp án là việc luyện tập mỗi ngày."
      }
    ],
    "translation": "Chào mọi người. Tôi thích học tiếng Nhật. Mỗi ngày việc nhớ Kanji tuy vất vả nhưng việc sử dụng từ mới rất vui. Tuần trước, tôi đã quên mua từ điển mới ở hiệu sách, nên ngày mai tôi nhất định sẽ cố gắng mua. Việc nói tiếng Nhật tôi vẫn còn kém, nhưng tôi không quên việc phát âm thành tiếng và luyện tập mỗi ngày. Những người bạn biết tôi đã luôn học từ khi đến Nhật thường giúp tôi luyện tập hội thoại. Tôi thực sự rất cảm ơn những người bạn tốt bụng ấy."
  },
  {
    "id": "dokkai-39",
    "lessonId": "bai-39",
    "title": "Bài Đọc Hiểu - Bài 39 Minna",
    "subTitle": "Email xin phép đi muộn / nghỉ làm vì lý do cá nhân (Workplace absence/lateness email)",
    "description": "Đọc email xin phép nghỉ làm và trả lời các câu hỏi liên quan đến lý do và nội dung công việc.",
    "passage": "<ruby>佐藤<rt>さとう</rt></ruby><ruby>様<rt>さま</rt></ruby>、お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>です。<ruby>山田<rt>やまだ</rt></ruby>です。<ruby>朝<rt>あさ</rt></ruby><ruby>早<rt>はや</rt></ruby>くにメールを<ruby>送<rt>おく</rt></ruby>ってすみません。<ruby>今日<rt>きょう</rt></ruby>は<ruby>急<rt>きゅう</rt></ruby>な<ruby>用事<rt>ようじ</rt></ruby>ができたので、<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>休<rt>やす</rt></ruby>みます。<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>が<ruby>家<rt>いえ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>急<rt>きゅう</rt></ruby>に<ruby>倒<rt>たお</rt></ruby>れて、<ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby>で<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>連<rt>つ</rt></ruby>れて<ruby>行<rt>い</rt></ruby>かなければなりませんでした。<ruby>今<rt>いま</rt></ruby>は<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>安心<rt>あんしん</rt></ruby>しましたが、<ruby>今日<rt>きょう</rt></ruby>も<ruby>午前中<rt>ごぜんちゅう</rt></ruby>に<ruby>病院<rt>びょういん</rt></ruby>で<ruby>診察<rt>しんさつ</rt></ruby>を<ruby>受<rt>う</rt></ruby>けて、<ruby>先生<rt>せんせい</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かなければなりません。そのため、<ruby>今日<rt>きょう</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>出<rt>で</rt></ruby>ることができません。<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>会議<rt>かいぎ</rt></ruby>なので、とても<ruby>残念<rt>ざんねん</rt></ruby>です。<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>は<ruby>昨日<rt>きのう</rt></ruby>のうちに<ruby>整理<rt>せいり</rt></ruby>して、<ruby>私<rt>わたし</rt></ruby>の<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>置<rt>お</rt></ruby>いてあります。お<ruby>手数<rt>てすう</rt></ruby>ですが、<ruby>田中<rt>たなか</rt></ruby>さんに<ruby>見<rt>み</rt></ruby>せてください。<ruby>明日<rt>あした</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず<ruby>出社<rt>しゅっしゃ</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>です。ご<ruby>迷惑<rt>めいわく</rt></ruby>をかけて、<ruby>本当<rt>ほんとう</rt></ruby>にすみません。よろしくお<ruby>願<rt>ねが</rt></ruby>いします。",
    "questions": [
      {
        "id": "dk39-1",
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんはどうして<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>休<rt>やす</rt></ruby>みますか。",
        "options": [
          "<ruby>家族<rt>かぞく</rt></ruby>が<ruby>倒<rt>たお</rt></ruby>れたから",
          "<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>嫌<rt>いや</rt></ruby>だから",
          "<ruby>自分<rt>じぶん</rt></ruby>が<ruby>病気<rt>びょうき</rt></ruby>だから",
          "<ruby>田中<rt>たなか</rt></ruby>さんと<ruby>喧嘩<rt>けんか</rt></ruby>したから"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tìm lý do trong văn bản]\n• Dịch nghĩa: Tại sao anh Yamada nghỉ làm? - Vì người nhà bị ngã bệnh.\n• Quy tắc & Loại trừ: Văn bản ghi rõ 「家族が急に倒れて」, các phương án khác không khớp nội dung."
      },
      {
        "id": "dk39-2",
        "question": "<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>はどこにありますか。",
        "options": [
          "<ruby>田中<rt>たなか</rt></ruby>さんの<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>",
          "<ruby>山田<rt>やまだ</rt></ruby>さんの<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>",
          "<ruby>病院<rt>びょういん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>",
          "<ruby>佐藤<rt>さとう</rt></ruby>さんの<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Xác định vị trí]\n• Dịch nghĩa: Tài liệu cuộc họp ở đâu? - Trên bàn của anh Yamada.\n• Quy tắc & Loại trừ: Văn bản ghi 「机の上に置いてあります」, ngầm hiểu là bàn của người viết (Yamada)."
      },
      {
        "id": "dk39-3",
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>明日<rt>あした</rt></ruby>どうしますか。",
        "options": [
          "また<ruby>休<rt>やす</rt></ruby>みます",
          "<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます",
          "<ruby>出社<rt>しゅっしゃ</rt></ruby>します",
          "<ruby>会議<rt>かいぎ</rt></ruby>をします"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Xác định kế hoạch]\n• Dịch nghĩa: Ngày mai anh Yamada sẽ làm gì? - Anh ấy sẽ đi làm.\n• Quy tắc & Loại trừ: Văn bản ghi 「明日は出社する予定です」, khớp với phương án đi làm."
      },
      {
        "id": "dk39-4",
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>連絡<rt>れんらく</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>資料<rt>しりょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りました",
          "<ruby>佐藤<rt>さとう</rt></ruby>さんが<ruby>倒<rt>たお</rt></ruby>れました",
          "<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>出<rt>で</rt></ruby>ます",
          "<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>今日<rt>きょう</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>出<rt>で</rt></ruby>られません"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Câu nào đúng với nội dung bài? - Anh Yamada không thể tham gia cuộc họp hôm nay.\n• Quy tắc & Loại trừ: Văn bản ghi 「今日の会議に出ることができません」, các phương án khác sai sự thật."
      },
      {
        "id": "dk39-5",
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>誰<rt>だれ</rt></ruby>に<ruby>資料<rt>しりょう</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてほしいと<ruby>言<rt>い</rt></ruby>っていますか。",
        "options": [
          "<ruby>家族<rt>かぞく</rt></ruby>",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん",
          "<ruby>田中<rt>たなか</rt></ruby>さん",
          "<ruby>病院<rt>びょういん</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Xác định đối tượng]\n• Dịch nghĩa: Anh Yamada muốn ai xem tài liệu? - Anh Tanaka.\n• Quy tắc & Loại trừ: Văn bản ghi 「田中さんに見せてください」, khớp với phương án."
      }
    ],
    "translation": "Gửi anh Sato, anh vất vả rồi. Tôi là Yamada. Xin lỗi vì đã gửi email vào sáng sớm. Hôm nay vì có việc đột xuất nên tôi xin phép nghỉ làm. Tối qua, người nhà tôi đột nhiên ngã trong nhà nên tôi đã phải đưa bằng xe cấp cứu đến bệnh viện. Bây giờ tình hình đã ổn định nên tôi cũng yên tâm hơn rồi, nhưng sáng nay vẫn phải đi khám ở bệnh viện và nghe bác sĩ trao đổi. Vì vậy, tôi không thể tham dự cuộc họp chiều nay. Vì là cuộc họp quan trọng nên tôi rất tiếc. Tài liệu cuộc họp tôi đã sắp xếp từ hôm qua và để sẵn trên bàn của mình. Phiền anh đưa cho anh Tanaka xem giúp tôi nhé. Sáng mai tôi nhất định sẽ đi làm. Thành thật xin lỗi vì đã gây phiền phức cho anh. Rất mong anh giúp đỡ."
  },
  {
    "id": "dokkai-40",
    "lessonId": "bai-40",
    "title": "Bài Đọc Hiểu - Bài 40 Minna",
    "subTitle": "Thông báo xác nhận lịch trình chuyến bay & đoàn tham quan (Flight & tour confirmation notice)",
    "description": "Đọc thông báo về lịch trình chuyến bay và tour du lịch để xác nhận thông tin chi tiết.",
    "passage": "みなさま、<ruby>明日<rt>あした</rt></ruby>の<ruby>出発<rt>しゅっぱつ</rt></ruby>について<ruby>連絡<rt>れんらく</rt></ruby>します。<ruby>飛行機<rt>ひこうき</rt></ruby>の<ruby>便<rt>びん</rt></ruby>は<ruby>八百二<rt>はっぴゃくに</rt></ruby><ruby>号<rt>ごう</rt></ruby>です。<ruby>空港<rt>くうこう</rt></ruby>の<ruby>出発<rt>しゅっぱつ</rt></ruby>ロビーには<ruby>朝<rt>あさ</rt></ruby>の<ruby>八時<rt>はちじ</rt></ruby>までに<ruby>到着<rt>とうちゃく</rt></ruby>してください。<ruby>荷物<rt>にもつ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>数<rt>かぞ</rt></ruby>えて、<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>がないかどうか、<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>確<rt>たし</rt></ruby>かめておいてください。<ruby>重<rt>おも</rt></ruby>い<ruby>荷物<rt>にもつ</rt></ruby>がある<ruby>方<rt>かた</rt></ruby>は、<ruby>早<rt>はや</rt></ruby>めに<ruby>空港<rt>くうこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>って、<ruby>荷物<rt>にもつ</rt></ruby>の<ruby>重<rt>おも</rt></ruby>さを<ruby>量<rt>はか</rt></ruby>ってみてください。<ruby>今回<rt>こんかい</rt></ruby>の<ruby>旅行<rt>りょこう</rt></ruby>では、<ruby>北海道<rt>ほっかいどう</rt></ruby>の<ruby>雪<rt>ゆき</rt></ruby><ruby>祭<rt>まつ</rt></ruby>りにも<ruby>行<rt>い</rt></ruby>きます。<ruby>雪<rt>ゆき</rt></ruby><ruby>祭<rt>まつ</rt></ruby>りの<ruby>会場<rt>かいじょう</rt></ruby>はとても<ruby>広<rt>ひろ</rt></ruby>いですから、<ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、どこへ<ruby>行<rt>い</rt></ruby>くか<ruby>決<rt>き</rt></ruby>めておいてください。<ruby>夜<rt>よる</rt></ruby>はホテルの<ruby>近<rt>ちか</rt></ruby>くの<ruby>店<rt>みせ</rt></ruby>で<ruby>二次会<rt>にじかい</rt></ruby>も<ruby>予定<rt>よてい</rt></ruby>しています。<ruby>参加<rt>さんか</rt></ruby>するかどうかは、<ruby>今日<rt>きょう</rt></ruby>のうちに<ruby>私<rt>わたし</rt></ruby>に<ruby>教<rt>おし</rt></ruby>えてください。<ruby>天気<rt>てんき</rt></ruby>が<ruby>寒<rt>さむ</rt></ruby>いので、<ruby>暖<rt>あたた</rt></ruby>かい<ruby>服<rt>ふく</rt></ruby>も<ruby>忘<rt>わす</rt></ruby>れないでください。<ruby>何<rt>なに</rt></ruby>か<ruby>質問<rt>しつもん</rt></ruby>があれば、<ruby>遠慮<rt>えんりょ</rt></ruby>なく<ruby>私<rt>わたし</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>してください。みんなで<ruby>楽<rt>たの</rt></ruby>しい<ruby>旅行<rt>りょこう</rt></ruby>にしましょう。",
    "questions": [
      {
        "id": "dk40-1",
        "question": "<ruby>飛行機<rt>ひこうき</rt></ruby>の<ruby>便<rt>びん</rt></ruby>は<ruby>何<rt>なん</rt></ruby><ruby>号<rt>ごう</rt></ruby>ですか。",
        "options": [
          "<ruby>八百二<rt>はっぴゃくに</rt></ruby><ruby>便<rt>びん</rt></ruby>",
          "<ruby>八百二<rt>はっぴゃくに</rt></ruby><ruby>号<rt>ごう</rt></ruby>",
          "<ruby>八時<rt>はちじ</rt></ruby><ruby>号<rt>ごう</rt></ruby>",
          "<ruby>八百<rt>はっぴゃく</rt></ruby><ruby>号<rt>ごう</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Đọc hiểu thông tin số liệu]\n• Dịch nghĩa: Chuyến bay là số mấy?\n• Quy tắc & Loại trừ: Trong bài ghi rõ 「飛行機の便は八百二号です」, nên chọn phương án tương ứng."
      },
      {
        "id": "dk40-2",
        "question": "<ruby>荷物<rt>にもつ</rt></ruby>が<ruby>重<rt>おも</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>は、どうしなければなりませんか。",
        "options": [
          "<ruby>早<rt>はや</rt></ruby>めに<ruby>空港<rt>くうこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>って、<ruby>重<rt>おも</rt></ruby>さを<ruby>量<rt>はか</rt></ruby>る",
          "<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>少<rt>すく</rt></ruby>なくする",
          "<ruby>私<rt>わたし</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>する",
          "<ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>て<ruby>決<rt>き</rt></ruby>める"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Trình tự hành động | Độ khó: Trung bình | Trọng tâm: V-てみる]\n• Dịch nghĩa: Người có hành lý nặng phải làm gì?\n• Quy tắc & Loại trừ: Bài viết hướng dẫn 「早めに空港へ行って、荷物の重さを量ってみてください」, khớp với phương án đầu tiên."
      },
      {
        "id": "dk40-3",
        "question": "<ruby>二次会<rt>にじかい</rt></ruby>について、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
        "options": [
          "<ruby>何人<rt>なんにん</rt></ruby><ruby>参加<rt>さんか</rt></ruby>するか<ruby>決<rt>き</rt></ruby>める",
          "<ruby>夜<rt>よる</rt></ruby>の<ruby>八時<rt>はちじ</rt></ruby>までに<ruby>行<rt>い</rt></ruby>く",
          "<ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>て<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>確<rt>たし</rt></ruby>かめる",
          "<ruby>今日<rt>きょう</rt></ruby>のうちに<ruby>参加<rt>さんか</rt></ruby>するかどうか<ruby>教<rt>おし</rt></ruby>える"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Trung bình | Trọng tâm: Câu hỏi Yes/No lồng câu]\n• Dịch nghĩa: Về tăng hai, phải làm gì?\n• Quy tắc & Loại trừ: Bài viết ghi 「参加するかどうかは、今日のうちに教えてください」, khớp với phương án thứ hai."
      },
      {
        "id": "dk40-4",
        "question": "<ruby>明日<rt>あした</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>についての <ruby>案内<rt>あんない</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>雪<rt>ゆき</rt></ruby><ruby>祭<rt>まつ</rt></ruby>りの<ruby>会場<rt>かいじょう</rt></ruby>は<ruby>狭<rt>せま</rt></ruby>いので、<ruby>地図<rt>ちず</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>ありません",
          "<ruby>質問<rt>しつもん</rt></ruby>がある<ruby>人<rt>ひと</rt></ruby>は、<ruby>明日<rt>あした</rt></ruby><ruby>空港<rt>くうこう</rt></ruby>で<ruby>聞<rt>き</rt></ruby>いてください",
          "<ruby>雪<rt>ゆき</rt></ruby><ruby>祭<rt>まつ</rt></ruby>りの<ruby>会場<rt>かいじょう</rt></ruby>では、どこへ<ruby>行<rt>い</rt></ruby>くか<ruby>決<rt>き</rt></ruby>めておく<ruby>必要<rt>ひつよう</rt></ruby>があります",
          "<ruby>空港<rt>くうこう</rt></ruby>には<ruby>八時<rt>はちじ</rt></ruby><ruby>過<rt>す</rt></ruby>ぎに<ruby>到着<rt>とうちゃく</rt></ruby>すればいいです"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định nội dung | Độ khó: Trung bình | Trọng tâm: Đọc hiểu chi tiết]\n• Dịch nghĩa: Câu nào đúng với nội dung bài?\n• Quy tắc & Loại trừ: Bài viết nói hội trường rộng nên cần xem bản đồ và quyết định trước, phương án 3 đúng. Các phương án khác sai về thông tin (hội trường rộng, phải đến trước 8h, liên lạc trước)."
      },
      {
        "id": "dk40-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>に <ruby>書<rt>か</rt></ruby>いて ある <ruby>旅行<rt>りょこう</rt></ruby>の <ruby>目的<rt>もくてき</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>空港<rt>くうこう</rt></ruby>で<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>量<rt>はか</rt></ruby>ること",
          "<ruby>飛行機<rt>ひこうき</rt></ruby>の<ruby>便<rt>びん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>すること",
          "<ruby>二次会<rt>にじかい</rt></ruby>の<ruby>計画<rt>けいかく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てること",
          "<ruby>雪<rt>ゆき</rt></ruby><ruby>祭<rt>まつ</rt></ruby>りに<ruby>行<rt>い</rt></ruby>って<ruby>楽<rt>たの</rt></ruby>しむこと"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Hiểu mục đích chuyến đi]\n• Dịch nghĩa: Mục đích của chuyến đi này là gì?\n• Quy tắc & Loại trừ: Bài viết đề cập đến việc đi lễ hội tuyết và kết thúc bằng câu chúc chuyến đi vui vẻ, nên mục đích chính là đi lễ hội tuyết."
      }
    ],
    "translation": "Chào mọi người, tôi xin thông báo về việc xuất phát ngày mai. Chuyến bay là số 802. Hãy đến sảnh khởi hành của sân bay trước 8 giờ sáng. Trước khi ra khỏi nhà, hãy đếm số hành lý và kiểm tra xem có bỏ quên đồ gì không nhé. Những ai có hành lý nặng, hãy đến sân bay sớm và thử cân trọng lượng hành lý. Trong chuyến đi lần này, chúng ta cũng sẽ đi lễ hội tuyết ở Hokkaido. Vì hội trường lễ hội tuyết rất rộng, hãy xem bản đồ và quyết định trước xem sẽ đi đâu. Buổi tối chúng ta cũng dự định tổ chức tăng hai ở quán gần khách sạn. Hãy cho tôi biết trong ngày hôm nay xem bạn có tham gia hay không. Vì thời tiết lạnh nên đừng quên mang theo quần áo ấm nhé. Nếu có câu hỏi gì, đừng ngại liên lạc với tôi. Chúng ta hãy cùng nhau tạo nên một chuyến đi vui vẻ nhé."
  },
  {
    "id": "dokkai-41",
    "lessonId": "bai-41",
    "title": "Bài Đọc Hiểu - Bài 41 Minna",
    "subTitle": "Thư cảm ơn đối tác / cấp trên đã hỗ trợ dự án (Formal gift/support thank-you letter)",
    "description": "Đọc thư cảm ơn và trả lời câu hỏi về nội dung hỗ trợ và quà tặng.",
    "passage": "<ruby>田中<rt>たなか</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>へ\n\n<ruby>先日<rt>せんじつ</rt></ruby>は、お<ruby>忙<rt>いそが</rt></ruby>しいところ<ruby>新<rt>あたら</rt></ruby>しいプロジェクトの<ruby>資料<rt>しりょう</rt></ruby><ruby>作成<rt>さくせい</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってくださって、<ruby>本当<rt>ほんとう</rt></ruby>にありがとうございました。<ruby>部長<rt>ぶちょう</rt></ruby>の<ruby>親切<rt>しんせつ</rt></ruby>な<ruby>助言<rt>じょげん</rt></ruby>のおかげで、<ruby>昨日<rt>きのう</rt></ruby>の<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>会議<rt>かいぎ</rt></ruby>を<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>終<rt>お</rt></ruby>えることができました。\n\n<ruby>私<rt>わたし</rt></ruby>はもともと<ruby>文法<rt>ぶんぽう</rt></ruby>や<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>整理<rt>せいり</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>し<ruby>苦手<rt>にがて</rt></ruby>ですが、<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>最初<rt>さいしょ</rt></ruby>から<ruby>最後<rt>さいご</rt></ruby>まで<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>教<rt>おし</rt></ruby>えていただいて、とても<ruby>勉強<rt>べんきょう</rt></ruby>になりました。また、<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>後<rt>あと</rt></ruby>で<ruby>私<rt>わたし</rt></ruby>が<ruby>作<rt>つく</rt></ruby>った<ruby>表<rt>ひょう</rt></ruby>も<ruby>見<rt>み</rt></ruby>てくださり、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>感謝<rt>かんしゃ</rt></ruby>しています。<ruby>部長<rt>ぶちょう</rt></ruby>から<ruby>学<rt>まな</rt></ruby>んだことを<ruby>生<rt>い</rt></ruby>かして、<ruby>今度<rt>こんど</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>も<ruby>後輩<rt>こうはい</rt></ruby>の<ruby>社員<rt>しゃいん</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってやりたいと<ruby>思<rt>おも</rt></ruby>います。\n\n<ruby>感謝<rt>かんしゃ</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちとして、<ruby>先日<rt>せんじつ</rt></ruby><ruby>京都<rt>きょうと</rt></ruby>へ<ruby>旅行<rt>りょこう</rt></ruby>した<ruby>時<rt>とき</rt></ruby>に<ruby>見<rt>み</rt></ruby>つけた<ruby>珍<rt>めずら</rt></ruby>しい<ruby>絵葉書<rt>えはがき</rt></ruby>を<ruby>贈<rt>おく</rt></ruby>ります。お<ruby>時間<rt>じかん</rt></ruby>がある<ruby>時<rt>とき</rt></ruby>にぜひ<ruby>見<rt>み</rt></ruby>てください。これから<ruby>寒<rt>さむ</rt></ruby>くなりますので、どうぞお<ruby>体<rt>からだ</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけてください。<ruby>今後<rt>こんご</rt></ruby>とも、どうぞよろしくお<ruby>願<rt>ねが</rt></ruby>いします。\n\n<ruby>佐藤<rt>さとう</rt></ruby>",
    "questions": [
      {
        "id": "dk41-1",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>何<rt>なに</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってもらいましたか。",
        "options": [
          "<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>計画<rt>けいかく</rt></ruby>",
          "<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>",
          "<ruby>資料<rt>しりょう</rt></ruby>の<ruby>作成<rt>さくせい</rt></ruby>",
          "<ruby>絵葉書<rt>えはがき</rt></ruby>の<ruby>選<rt>えら</rt></ruby>び"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tìm thông tin trong văn bản]\n• Dịch nghĩa: Sato đã được giúp đỡ việc gì? - Việc làm tài liệu.\n• Quy tắc & Loại trừ: Văn bản ghi rõ 「資料作成を手伝ってくださって」 nên 「資料の作成」 là đáp án đúng."
      },
      {
        "id": "dk41-2",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>何<rt>なに</rt></ruby>を<ruby>贈<rt>おく</rt></ruby>りましたか。",
        "options": [
          "<ruby>珍<rt>めずら</rt></ruby>しい<ruby>絵葉書<rt>えはがき</rt></ruby>",
          "<ruby>新<rt>あたら</rt></ruby>しい<ruby>資料<rt>しりょう</rt></ruby>",
          "<ruby>文法<rt>ぶんぽう</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>",
          "<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>土産<rt>みやげ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Tìm thông tin]\n• Dịch nghĩa: Sato đã tặng quà gì? - Tặng bưu ảnh quý hiếm.\n• Quy tắc & Loại trừ: Văn bản ghi 「珍しい絵葉書を贈ります」 nên 「珍しい絵葉書」 là đáp án đúng."
      },
      {
        "id": "dk41-3",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>何<rt>なに</rt></ruby>が<ruby>苦手<rt>にがて</rt></ruby>ですか。",
        "options": [
          "<ruby>資料<rt>しりょう</rt></ruby>と<ruby>絵葉書<rt>えはがき</rt></ruby>",
          "<ruby>助言<rt>じょげん</rt></ruby>と<ruby>感謝<rt>かんしゃ</rt></ruby>",
          "<ruby>会議<rt>かいぎ</rt></ruby>と<ruby>旅行<rt>りょこう</rt></ruby>",
          "<ruby>文法<rt>ぶんぽう</rt></ruby>と<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>整理<rt>せいり</rt></ruby>"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Trung bình | Trọng tâm: Hiểu nội dung]\n• Dịch nghĩa: Sato không giỏi việc gì? - Ngữ pháp và sắp xếp thông tin.\n• Quy tắc & Loại trừ: Văn bản ghi 「文法や情報の整理が苦手ですが」 nên đáp án là 「文法と情報の整理」."
      },
      {
        "id": "dk41-4",
        "question": "<ruby>田中<rt>たなか</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>の <ruby>助言<rt>じょげん</rt></ruby>と <ruby>絵葉書<rt>えはがき</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>部長<rt>ぶちょう</rt></ruby>が<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きました。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>資料<rt>しりょう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてもらいました。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>絵葉書<rt>えはがき</rt></ruby>を<ruby>買<rt>か</rt></ruby>ってもらいました。",
          "<ruby>会議<rt>かいぎ</rt></ruby>は<ruby>失敗<rt>しっぱい</rt></ruby>しました。"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Hiểu nội dung tổng quát]\n• Dịch nghĩa: Câu nào đúng với nội dung bài? - Sato được trưởng phòng chỉ dạy tài liệu.\n• Quy tắc & Loại trừ: Các phương án khác sai sự thật: họp thành công, Sato đi du lịch, Sato tự mua bưu ảnh."
      },
      {
        "id": "dk41-5",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>今後<rt>こんご</rt></ruby>どうしたいと<ruby>言<rt>い</rt></ruby>っていますか。",
        "options": [
          "<ruby>今後<rt>こんご</rt></ruby>も<ruby>部長<rt>ぶちょう</rt></ruby>と<ruby>協力<rt>きょうりょく</rt></ruby>したいです。",
          "<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きたいです。",
          "<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>助言<rt>じょげん</rt></ruby>をしたいです。",
          "<ruby>会議<rt>かいぎ</rt></ruby>を<ruby>終<rt>お</rt></ruby>えたいです。"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Hiểu mục đích thư]\n• Dịch nghĩa: Sato muốn làm gì trong tương lai? - Muốn tiếp tục hợp tác với trưởng phòng.\n• Quy tắc & Loại trừ: Câu cuối thư 「今後とも、どうぞよろしくお願いいたします」 thể hiện mong muốn tiếp tục giữ mối quan hệ công việc tốt đẹp."
      }
    ],
    "translation": "Gửi Trưởng phòng Tanaka. Hôm trước, dù đang bận rộn nhưng ông đã giúp tôi làm tài liệu cho dự án mới, tôi xin cảm ơn ông rất nhiều. Nhờ có lời khuyên tận tình của ông mà tôi đã có thể kết thúc cuộc họp quan trọng ngày hôm qua một cách suôn sẻ. Tôi vốn hơi không giỏi về ngữ pháp và sắp xếp thông tin, nhưng nhờ được ông hướng dẫn cẩn thận từ đầu đến cuối nên tôi đã học hỏi được rất nhiều. Ngoài ra, sau cuộc họp ông còn xem giúp bảng biểu tôi làm, tôi thực sự rất biết ơn. Vận dụng những điều đã học từ ông, lần tới tôi cũng muốn giúp đỡ các nhân viên mới. Để bày tỏ lòng biết ơn, tôi xin gửi tặng ông tấm bưu ảnh quý hiếm mà tôi tìm thấy khi đi du lịch Kyoto hôm trước. Khi có thời gian ông hãy xem nhé. Sắp tới trời sẽ lạnh hơn nên mong ông giữ gìn sức khỏe. Rất mong tiếp tục nhận được sự giúp đỡ của ông trong thời gian tới. Sato."
  },
  {
    "id": "dokkai-42",
    "lessonId": "bai-42",
    "title": "Bài Đọc Hiểu - Bài 42 Minna",
    "subTitle": "Bản tin giới thiệu sản phẩm tiện ích & mục đích sử dụng (Product utility feature article)",
    "description": "Học viên đọc bản tin giới thiệu công dụng và mục đích sử dụng của khăn Furoshiki trong đời sống hiện đại để nắm bắt thông tin chi tiết và ý chính.",
    "passage": "「ふろしき」は <ruby>昔<rt>むかし</rt></ruby>から <ruby>日本<rt>にほん</rt></ruby>で <ruby>使<rt>つか</rt></ruby>われている <ruby>四角<rt>しかく</rt></ruby>い <ruby>布<rt>ぬの</rt></ruby>です。<ruby>昔<rt>むかし</rt></ruby>は <ruby>主<rt>おも</rt></ruby>に <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>包<rt>つつ</rt></ruby>んで <ruby>運<rt>はこ</rt></ruby>ぶために <ruby>使<rt>つか</rt></ruby>われていましたが、<ruby>最近<rt>さいきん</rt></ruby>は <ruby>新<rt>あたら</rt></ruby>しい <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が <ruby>人気<rt>にんき</rt></ruby>です。<ruby>大<rt>おお</rt></ruby>きさや デザインも いろいろ ありますから、<ruby>目的<rt>もくてき</rt></ruby>に <ruby>合<rt>あ</rt></ruby>わせて <ruby>選<rt>えら</rt></ruby>ぶことが できます。\n\nたとえば、<ruby>大切<rt>たいせつ</rt></ruby>な <ruby>人<rt>ひと</rt></ruby>への プレゼントや お<ruby>祝<rt>いわ</rt></ruby>いの <ruby>品<rt>しな</rt></ruby>を <ruby>綺麗<rt>きれい</rt></ruby>に <ruby>包<rt>つつ</rt></ruby>むのに<ruby>使<rt>つか</rt></ruby>う <ruby>人<rt>ひと</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>えました。また、スーパーへ <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に <ruby>行<rt>い</rt></ruby>くとき、エコバッグとして <ruby>使<rt>つか</rt></ruby>うことも できます。とても <ruby>丈夫<rt>じょうぶ</rt></ruby>な <ruby>布<rt>ぬの</rt></ruby>で <ruby>作<rt>つく</rt></ruby>られているので、<ruby>重<rt>おも</rt></ruby>い ワインの <ruby>瓶<rt>びん</rt></ruby>や <ruby>缶詰<rt>かんづめ</rt></ruby>、<ruby>厚<rt>あつ</rt></ruby>い <ruby>本<rt>ほん</rt></ruby>などを <ruby>運<rt>はこ</rt></ruby>ぶのにも<ruby>大変<rt>たいへん</rt></ruby> <ruby>便利<rt>べんり</rt></ruby>です。\n\nさらに、<ruby>使<rt>つか</rt></ruby>わないときは <ruby>小<rt>ちい</rt></ruby>さく たたんで かばんに <ruby>入<rt>い</rt></ruby>れることが できるので、<ruby>旅行<rt>りょこう</rt></ruby>の <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>整理<rt>せいり</rt></ruby>するのにも<ruby>役<rt>やく</rt></ruby>に <ruby>立<rt>た</rt></ruby>ちます。プラスチックの <ruby>袋<rt>ふくろ</rt></ruby>を <ruby>減<rt>へ</rt></ruby>らして <ruby>地球<rt>ちきゅう</rt></ruby>の <ruby>環境<rt>かんきょう</rt></ruby>を <ruby>守<rt>まも</rt></ruby>るためにも、<ruby>毎日<rt>まいにち</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>で ふろしきを <ruby>使<rt>つか</rt></ruby>ってみませんか。",
    "questions": [
      {
        "id": "dk42-1",
        "question": "ふろしきは <ruby>昔<rt>むかし</rt></ruby>、<ruby>主<rt>おも</rt></ruby>に <ruby>何<rt>なに</rt></ruby>の ために <ruby>使<rt>つか</rt></ruby>われていましたか。",
        "options": [
          "<ruby>部屋<rt>へや</rt></ruby>を <ruby>掃除<rt>そうじ</rt></ruby>するため",
          "<ruby>時間<rt>じかん</rt></ruby>を <ruby>計算<rt>けいさん</rt></ruby>するため",
          "お<ruby>茶<rt>ちゃ</rt></ruby>や お<ruby>湯<rt>ゆ</rt></ruby>を <ruby>沸<rt>わ</rt></ruby>かすため",
          "<ruby>荷物<rt>にもつ</rt></ruby>を <ruby>包<rt>つつ</rt></ruby>んで <ruby>運<rt>はこ</rt></ruby>ぶため"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Công dụng truyền thống]\n• Dịch nghĩa: Ngày xưa, khăn Furoshiki chủ yếu được dùng để làm gì?\n• Quy tắc & Loại trừ: Đoạn 1 ghi rõ 「昔は主に荷物を包んで運ぶために使われていました」 (Ngày xưa chủ yếu được dùng để gói và mang hành lý). Các công dụng đun nước, tính toán, dọn dẹp không có trong bài."
      },
      {
        "id": "dk42-2",
        "question": "どうして ふろしきは <ruby>重<rt>おも</rt></ruby>い <ruby>物<rt>もの</rt></ruby>を <ruby>運<rt>はこ</rt></ruby>ぶのに<ruby>便利<rt>べんり</rt></ruby>ですか。",
        "options": [
          "<ruby>四角<rt>しかく</rt></ruby>い <ruby>形<rt>かたち</rt></ruby>だから",
          "とても <ruby>丈夫<rt>じょうぶ</rt></ruby>な <ruby>布<rt>ぬの</rt></ruby>で <ruby>作<rt>つく</rt></ruby>られているから",
          "<ruby>小<rt>ちい</rt></ruby>さく たためるから",
          "<ruby>昔<rt>むかし</rt></ruby>から <ruby>日本<rt>にほん</rt></ruby>に あるから"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do / Nguyên nhân | Độ khó: Dễ | Trọng tâm: Đặc tính bền chắc]\n• Dịch nghĩa: Tại sao khăn Furoshiki lại tiện lợi để mang vật nặng?\n• Quy tắc & Loại trừ: Đoạn 2 viết 「とても丈夫な布で作られているので、重いワインの瓶や缶詰、厚い本などを運ぶのにも大変便利です」 (Vì được làm từ vải rất bền nên rất tiện mang đồ nặng). Các lý do còn lại không giải thích khả năng chịu nặng."
      },
      {
        "id": "dk42-3",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>に <ruby>書<rt>か</rt></ruby>いていない ふろしきの <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>は どれですか。",
        "options": [
          "<ruby>冬<rt>ふゆ</rt></ruby>に コートとして <ruby>着<rt>き</rt></ruby>る。",
          "エコバッグとして <ruby>使<rt>つか</rt></ruby>う。",
          "<ruby>旅行<rt>りょこう</rt></ruby>の <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>整理<rt>せいり</rt></ruby>するのに<ruby>使<rt>つか</rt></ruby>う。",
          "プレゼントを <ruby>包<rt>つつ</rt></ruby>むのに<ruby>使<rt>つか</rt></ruby>う。"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Bẫy phủ định / Ngoại lệ | Độ khó: Trung bình | Trọng tâm: Nhận diện thông tin không có]\n• Dịch nghĩa: Cách dùng khăn Furoshiki nào KHÔNG được viết trong bài văn này?\n• Quy tắc & Loại trừ: Bài viết đề cập dùng làm túi sinh thái (エコバッグ), gói quà (プレゼントを包む), và sắp xếp hành lý du lịch (旅行の荷物を整理する). Việc mặc như áo khoác vào mùa đông không hề được nhắc đến."
      },
      {
        "id": "dk42-4",
        "question": "ふろしきの <ruby>特徴<rt>とくちょう</rt></ruby>として、<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "ふろしきは <ruby>一<rt>ひと</rt></ruby>つの <ruby>大<rt>おお</rt></ruby>きさしか <ruby>売<rt>う</rt></ruby>られていません。",
          "ふろしきは <ruby>目的<rt>もくてき</rt></ruby>に <ruby>合<rt>あ</rt></ruby>わせて <ruby>選<rt>えら</rt></ruby>ぶことが できます。",
          "ふろしきは <ruby>軽<rt>かる</rt></ruby>い <ruby>物<rt>もの</rt></ruby>しか <ruby>運<rt>はこ</rt></ruby>ぶことが できません。",
          "ふろしきは <ruby>使<rt>つか</rt></ruby>わないときも <ruby>場所<rt>ばしょ</rt></ruby>を とります。"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Xác nhận nội dung | Độ khó: Trung bình | Trọng tâm: Đọc hiểu tổng quát]\n• Dịch nghĩa: Câu nào đúng với nội dung bài văn?\n• Quy tắc & Loại trừ: Đoạn 1 viết 「大きさやデザインもいろいろありますから、目的に合わせて選ぶことができます」. Ba phương án còn lại đều trái ngược hoàn toàn với bài đọc (có nhiều cỡ, gấp nhỏ gọn được, mang được vật nặng)."
      },
      {
        "id": "dk42-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた <ruby>人<rt>ひと</rt></ruby>が <ruby>一番<rt>いちばん</rt></ruby> <ruby>言<rt>い</rt></ruby>いたい ことは <ruby>何<rt>なに</rt></ruby>ですか。",
        "options": [
          "スーパーへ <ruby>行<rt>い</rt></ruby>くときは プラスチックの <ruby>袋<rt>ふくろ</rt></ruby>を たくさん もらうべきだ。",
          "<ruby>昔<rt>むかし</rt></ruby>の <ruby>日本<rt>にほん</rt></ruby>の <ruby>布<rt>ぬの</rt></ruby>は とても <ruby>高<rt>たか</rt></ruby>いので <ruby>大切<rt>たいせつ</rt></ruby>に してほしい。",
          "<ruby>環境<rt>かんきょう</rt></ruby>を <ruby>守<rt>まも</rt></ruby>るためにも、<ruby>毎日<rt>まいにち</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>で ふろしきを <ruby>使<rt>つか</rt></ruby>ってほしい。",
          "<ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>くときは <ruby>大<rt>おお</rt></ruby>きい かばんを <ruby>買<rt>か</rt></ruby>うほうが いい。"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính / Thông điệp | Độ khó: Dễ | Trọng tâm: Câu kết bài]\n• Dịch nghĩa: Điều người viết bài văn này muốn nói nhất là gì?\n• Quy tắc & Loại trừ: Câu cuối bài kêu gọi 「プラスチックの袋を減らして地球の環境を守るためにも、毎日の生活でふろしきを使ってみませんか」 (Hãy thử dùng Furoshiki để giảm túi nhựa và bảo vệ môi trường). Các phương án khác sai lệch nội dung."
      }
    ],
    "translation": "\"Furoshiki\" là một tấm vải hình vuông được sử dụng ở Nhật Bản từ ngày xưa. Trước đây, nó chủ yếu được dùng để gói và mang hành lý, nhưng gần đây những cách sử dụng mới đang rất được ưa chuộng. Vì có nhiều kích cỡ và thiết kế đa dạng nên bạn có thể lựa chọn phù hợp với mục đích.\n\nVí dụ, ngày càng có nhiều người dùng để gói đẹp những món quà hoặc đồ chúc mừng gửi đến người quan trọng. Ngoài ra, khi đi mua sắm ở siêu thị, bạn cũng có thể dùng nó như một chiếc túi sinh thái. Vì được làm từ loại vải rất bền chắc nên nó cũng rất tiện lợi để mang những vật nặng như chai rượu vang, đồ hộp hay sách dày.\n\nHơn nữa, khi không sử dụng bạn có thể gấp nhỏ lại và cho vào cặp, nên nó cũng giúp ích cho việc sắp xếp hành lý khi đi du lịch. Để giảm túi nhựa và bảo vệ môi trường Trái Đất, bạn hãy thử sử dụng Furoshiki trong cuộc sống hàng ngày nhé?"
  },
  {
    "id": "dokkai-43",
    "lessonId": "bai-43",
    "title": "Bài Đọc Hiểu - Bài 43 Minna",
    "subTitle": "Báo cáo nhanh tình hình biến động số liệu và hàng hóa tại cửa hàng",
    "description": "Đọc báo cáo nhanh tình hình hàng hóa, giá cả tại cửa hàng và trả lời câu hỏi.",
    "passage": "<ruby>今月<rt>こんげつ</rt></ruby>の <ruby>店<rt>みせ</rt></ruby>の <ruby>商品<rt>しょうひん</rt></ruby>に ついて <ruby>報告<rt>ほうこく</rt></ruby>します。<ruby>最近<rt>さいきん</rt></ruby>、ガソリンの <ruby>値段<rt>ねだん</rt></ruby>が <ruby>上<rt>あ</rt></ruby>がって いるので、<ruby>野菜<rt>やさい</rt></ruby>や <ruby>果物<rt>くだもの</rt></ruby>の <ruby>値段<rt>ねだん</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>しずつ <ruby>上<rt>あ</rt></ruby>がりそうです。しかし、<ruby>冷房<rt>れいぼう</rt></ruby>や <ruby>暖房<rt>だんぼう</rt></ruby>の <ruby>季節<rt>きせつ</rt></ruby>が <ruby>近<rt>ちか</rt></ruby>づいて いるため、<ruby>電気製品<rt>でんきせいひん</rt></ruby>の <ruby>注文<rt>ちゅうもん</rt></ruby>は <ruby>先月<rt>せんげつ</rt></ruby>より <ruby>増<rt>ふ</rt></ruby>えて います。<ruby>特<rt>とく</rt></ruby>に、<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が <ruby>楽<rt>らく</rt></ruby>で センスが いい <ruby>商品<rt>しょうひん</rt></ruby>は、すぐに なくなりそうです。<ruby>一方<rt>いっぽう</rt></ruby>、<ruby>古<rt>ふる</rt></ruby>い モデルの テレビは <ruby>値段<rt>ねだん</rt></ruby>が <ruby>下<rt>さ</rt></ruby>がって いますが、まだ あまり <ruby>売<rt>う</rt></ruby>れそうに ありません。それから、<ruby>今朝<rt>けさ</rt></ruby> <ruby>倉庫<rt>そうこ</rt></ruby>で <ruby>大<rt>おお</rt></ruby>きい <ruby>箱<rt>はこ</rt></ruby>の ひもが <ruby>切<rt>き</rt></ruby>れて、<ruby>荷物<rt>にもつ</rt></ruby>が <ruby>下<rt>した</rt></ruby>に <ruby>落<rt>お</rt></ruby>ちました。<ruby>箱<rt>はこ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>の お<ruby>皿<rt>さら</rt></ruby>は <ruby>壊<rt>こわ</rt></ruby>れて いませんでしたが、<ruby>機械<rt>きかい</rt></ruby>の ほうから <ruby>少<rt>すこ</rt></ruby>し <ruby>変<rt>へん</rt></ruby>な <ruby>音<rt>おと</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえました。<ruby>午後<rt>ごご</rt></ruby>は、<ruby>新<rt>あたら</rt></ruby>しい ひもと テープを <ruby>店<rt>みせ</rt></ruby>で <ruby>急<rt>いそ</rt></ruby>いで <ruby>買<rt>か</rt></ruby>って <ruby>来<rt>き</rt></ruby>ます。<ruby>来月<rt>らいげつ</rt></ruby>から <ruby>新<rt>あたら</rt></ruby>しい <ruby>会員<rt>かいいん</rt></ruby>の <ruby>数<rt>かず</rt></ruby>も さらに <ruby>増<rt>ふ</rt></ruby>えそうなので、みんなで <ruby>店<rt>みせ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>を しっかり <ruby>進<rt>すす</rt></ruby>めましょう。",
    "questions": [
      {
        "id": "dk43-1",
        "question": "どうして <ruby>野菜<rt>やさい</rt></ruby>や <ruby>果物<rt>くだもの</rt></ruby>の <ruby>値段<rt>ねだん</rt></ruby>が <ruby>上<rt>あ</rt></ruby>がりそうですか。",
        "options": [
          "ガソリンの <ruby>値段<rt>ねだん</rt></ruby>が <ruby>上<rt>あ</rt></ruby>がって いるからです。",
          "<ruby>会員<rt>かいいん</rt></ruby>の <ruby>数<rt>かず</rt></ruby>が <ruby>減<rt>へ</rt></ruby>って いるからです。",
          "<ruby>倉庫<rt>そうこ</rt></ruby>で <ruby>荷物<rt>にもつ</rt></ruby>が <ruby>落<rt>お</rt></ruby>ちたからです。",
          "<ruby>電気製品<rt>でんきせいひん</rt></ruby>の <ruby>注文<rt>ちゅうもん</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>えたからです。"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nguyên nhân | Độ khó: Dễ | Trọng tâm: Tìm thông tin trực tiếp]\n• Dịch nghĩa: Tại sao giá rau củ và trái cây trông có vẻ sắp tăng? - Vì giá xăng đang tăng.\n• Quy tắc & Loại trừ: Đoạn văn ghi rõ 「ガソリンの値段が上がっているので、野菜や果物の値段も少しずつ上がりそうです」. Các phương án khác không phải nguyên nhân."
      },
      {
        "id": "dk43-2",
        "question": "どんな <ruby>商品<rt>しょうひん</rt></ruby>が すぐに なくなりそうですか。",
        "options": [
          "<ruby>少<rt>すこ</rt></ruby>し <ruby>変<rt>へん</rt></ruby>な <ruby>音<rt>おと</rt></ruby>が する <ruby>機械<rt>きかい</rt></ruby>",
          "<ruby>値段<rt>ねだん</rt></ruby>が <ruby>下<rt>さ</rt></ruby>がった <ruby>古<rt>ふる</rt></ruby>い テレビ",
          "<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が <ruby>楽<rt>らく</rt></ruby>で センスが いい <ruby>商品<rt>しょうひん</rt></ruby>",
          "<ruby>倉庫<rt>そうこ</rt></ruby>に ある <ruby>大<rt>おお</rt></ruby>きい <ruby>箱<rt>はこ</rt></ruby>の お<ruby>皿<rt>さら</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Định vị thông tin]\n• Dịch nghĩa: Sản phẩm như thế nào trông sắp hết hàng ngay? - Sản phẩm dễ dùng và có gu thẩm mỹ.\n• Quy tắc & Loại trừ: Bài đọc nêu 「使い方が楽でセンスがいい商品は、すぐなくなりそうです」. Tivi cũ bán chậm, còn đĩa và máy là đồ trong kho."
      },
      {
        "id": "dk43-3",
        "question": "<ruby>今朝<rt>けさ</rt></ruby>、<ruby>倉庫<rt>そうこ</rt></ruby>で <ruby>何<rt>なに</rt></ruby>が ありましたか。",
        "options": [
          "テレビの <ruby>注文<rt>ちゅうもん</rt></ruby>が たくさん <ruby>来<rt>き</rt></ruby>ました。",
          "<ruby>箱<rt>はこ</rt></ruby>の ひもが <ruby>切<rt>き</rt></ruby>れて、<ruby>荷物<rt>にもつ</rt></ruby>が <ruby>落<rt>お</rt></ruby>ちました。",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>会員<rt>かいいん</rt></ruby>が <ruby>急<rt>きゅう</rt></ruby>に <ruby>増<rt>ふ</rt></ruby>えました。",
          "<ruby>箱<rt>はこ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>の お<ruby>皿<rt>さら</rt></ruby>が <ruby>全部<rt>ぜんぶ</rt></ruby> <ruby>壊<rt>こわ</rt></ruby>れました。"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Sự việc | Độ khó: Dễ | Trọng tâm: Nắm bắt chi tiết sự cố]\n• Dịch nghĩa: Sáng nay trong kho đã xảy ra chuyện gì? - Dây thùng bị đứt và hành lý rơi xuống.\n• Quy tắc & Loại trừ: Văn bản ghi 「今朝倉庫で大きい箱のひもが切れて、荷物が下に落ちました」 và khẳng định đĩa không bị vỡ."
      },
      {
        "id": "dk43-4",
        "question": "<ruby>店<rt>みせ</rt></ruby>の <ruby>今後<rt>こんご</rt></ruby>の <ruby>予定<rt>よてい</rt></ruby>や <ruby>売<rt>う</rt></ruby>れ<ruby>行<rt>ゆ</rt></ruby>きについて <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>来月<rt>らいげつ</rt></ruby>から <ruby>会員<rt>かいいん</rt></ruby>の <ruby>数<rt>かず</rt></ruby>が <ruby>減<rt>へ</rt></ruby>りそうです。",
          "<ruby>電気製品<rt>でんきせいひん</rt></ruby>の <ruby>注文<rt>ちゅうもん</rt></ruby>は <ruby>先月<rt>せんげつ</rt></ruby>より <ruby>減<rt>へ</rt></ruby>って います。",
          "<ruby>古<rt>ふる</rt></ruby>い テレビは <ruby>値段<rt>ねだん</rt></ruby>が <ruby>下<rt>さ</rt></ruby>がって、とても よく <ruby>売<rt>う</rt></ruby>れて います。",
          "<ruby>午後<rt>ごご</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい ひもと テープを <ruby>買<rt>か</rt></ruby>って <ruby>来<rt>き</rt></ruby>ます。"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Đúng/Sai | Độ khó: Trung bình | Trọng tâm: Đối chiếu thông tin]\n• Dịch nghĩa: Câu nào khớp với nội dung bài đọc? - Buổi chiều sẽ đi mua dây buộc và băng dính mới về.\n• Quy tắc & Loại trừ: Bài viết ghi rõ 「午後は、新しいひもとテープを店で急いで買って来ます」. Ba phương án còn lại đều đảo ngược thông tin trong bài."
      },
      {
        "id": "dk43-5",
        "question": "この <ruby>報告<rt>ほうこく</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた <ruby>人<rt>ひと</rt></ruby>は、<ruby>最後<rt>さいご</rt></ruby>に スタッフへ <ruby>何<rt>なに</rt></ruby>を <ruby>呼<rt>よ</rt></ruby>びかけて いますか。",
        "options": [
          "<ruby>冷房<rt>れいぼう</rt></ruby>と <ruby>暖房<rt>だんぼう</rt></ruby>を <ruby>全部<rt>ぜんぶ</rt></ruby> <ruby>止<rt>と</rt></ruby>めること",
          "<ruby>古<rt>ふる</rt></ruby>い テレビを <ruby>倉庫<rt>そうこ</rt></ruby>から <ruby>捨<rt>す</rt></ruby>てること",
          "<ruby>店<rt>みせ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>を みんなで しっかり <ruby>進<rt>すす</rt></ruby>めること",
          "<ruby>野菜<rt>やさい</rt></ruby>と <ruby>果物<rt>くだもの</rt></ruby>の <ruby>値段<rt>ねだん</rt></ruby>を すぐ <ruby>下<rt>さ</rt></ruby>げること"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Trung bình | Trọng tâm: Thông điệp kết bài]\n• Dịch nghĩa: Người viết báo cáo này cuối bài kêu gọi nhân viên làm gì? - Mọi người cùng chuẩn bị cửa hàng thật chu đáo.\n• Quy tắc & Loại trừ: Câu cuối cùng ghi 「みんなで店の準備をしっかり進めましょう」. Các hành động còn lại không có trong bài."
      }
    ],
    "translation": "Tôi xin báo cáo về hàng hóa của cửa hàng trong tháng này. Gần đây, vì giá xăng đang tăng nên giá rau củ và trái cây có vẻ cũng sẽ tăng dần từng chút một. Tuy nhiên, do mùa dùng máy lạnh và máy sưởi đang đến gần nên đơn đặt hàng các thiết bị điện đang tăng hơn so với tháng trước. Đặc biệt, những sản phẩm có cách sử dụng nhẹ nhàng và thiết kế có gu thẩm mỹ có vẻ sẽ hết hàng ngay lập tức. Mặt khác, tivi mẫu cũ dù giá đã giảm xuống nhưng vẫn chưa có vẻ bán chạy lắm. Ngoài ra, sáng nay trong kho dây buộc của một chiếc thùng lớn bị đứt khiến hành lý rơi xuống dưới. Đĩa bên trong thùng không bị vỡ, nhưng từ phía máy móc nghe thấy tiếng động hơi kỳ lạ. Buổi chiều, tôi sẽ vội đi mua dây buộc và băng dính mới ở cửa hàng mang về. Từ tháng sau số lượng hội viên mới có vẻ cũng sẽ tăng thêm nữa nên mọi người hãy cùng nhau chuẩn bị cửa hàng thật chu đáo nhé."
  },
  {
    "id": "dokkai-44",
    "lessonId": "bai-44",
    "title": "Bài Đọc Hiểu - Bài 44 Minna",
    "subTitle": "Tổng hợp phản hồi khách hàng & hướng dẫn chọn sản phẩm (Customer product feedback summary)",
    "description": "Đọc báo cáo phản hồi khách hàng về máy pha trà mới và trả lời các câu hỏi về cải tiến, tính năng và cách chọn mua.",
    "passage": "お<ruby>茶<rt>ちゃ</rt></ruby>メーカーについてのアンケートと<ruby>選<rt>えら</rt></ruby>び<ruby>方<rt>かた</rt></ruby>\n\n<ruby>先月<rt>せんげつ</rt></ruby>、お<ruby>茶<rt>ちゃ</rt></ruby>メーカーを<ruby>買<rt>か</rt></ruby>った<ruby>人<rt>ひと</rt></ruby>にアンケートをしました。<ruby>前<rt>まえ</rt></ruby>の<ruby>商品<rt>しょうひん</rt></ruby>は、お<ruby>湯<rt>ゆ</rt></ruby>が<ruby>熱<rt>あつ</rt></ruby>すぎることや、ボタンが<ruby>小<rt>ちい</rt></ruby>さくて<ruby>押<rt>お</rt></ruby>しにくいことなどの<ruby>意見<rt>いけん</rt></ruby>がありました。また、<ruby>一度<rt>いちど</rt></ruby>に<ruby>作<rt>つく</rt></ruby>る<ruby>量<rt>りょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>すぎるという<ruby>声<rt>こえ</rt></ruby>もありました。\n\nそこで、<ruby>今月<rt>こんげつ</rt></ruby>から<ruby>売<rt>う</rt></ruby>る<ruby>新<rt>あたら</rt></ruby>しい<ruby>商品<rt>しょうひん</rt></ruby>は、いろいろな<ruby>点<rt>てん</rt></ruby>を<ruby>直<rt>なお</rt></ruby>しました。まず、やけどをしないように、もっと<ruby>安全<rt>あんぜん</rt></ruby>にしました。また、ボタンを<ruby>大<rt>おお</rt></ruby>きくして、お<ruby>年寄<rt>としよ</rt></ruby>りにも<ruby>使<rt>つか</rt></ruby>いやすくしました。お<ruby>茶<rt>ちゃ</rt></ruby>の<ruby>濃<rt>こ</rt></ruby>さも<ruby>自分<rt>じぶん</rt></ruby>で<ruby>調節<rt>ちょうせつ</rt></ruby>できますから、<ruby>濃<rt>こ</rt></ruby>いお<ruby>茶<rt>ちゃ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>も<ruby>薄<rt>うす</rt></ruby>いお<ruby>茶<rt>ちゃ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>も、おいしく<ruby>飲<rt>の</rt></ruby>めます。\n\nサイズは<ruby>二<rt>ふた</rt></ruby>つあります。<ruby>一人<rt>ひとり</rt></ruby>で<ruby>使<rt>つか</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>は<ruby>小<rt>ちい</rt></ruby>さいタイプにすると<ruby>便利<rt>べんり</rt></ruby>です。<ruby>家族<rt>かぞく</rt></ruby>で<ruby>使<rt>つか</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>は、<ruby>量<rt>りょう</rt></ruby>が<ruby>二倍<rt>にばい</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きいタイプにするといいでしょう。",
    "questions": [
      {
        "id": "dk44-1",
        "question": "<ruby>前<rt>まえ</rt></ruby>の<ruby>商品<rt>しょうひん</rt></ruby>について、どんな<ruby>意見<rt>いけん</rt></ruby>がありましたか。",
        "options": [
          "お<ruby>湯<rt>ゆ</rt></ruby>がぬるすぎること",
          "<ruby>量<rt>りょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>なすぎること",
          "<ruby>味<rt>あじ</rt></ruby>が<ruby>薄<rt>うす</rt></ruby>すぎること",
          "ボタンが<ruby>押<rt>お</rt></ruby>しにくいこと"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Khai thác ý kiến phản hồi]\n• Dịch nghĩa: Về sản phẩm trước đây, đã có ý kiến như thế nào?\n• Quy tắc & Loại trừ: Đoạn 1 nêu rõ 「ボタンが小さくて押しにくいことなどの意見がありました」. Các chi tiết vị nhạt quá, lượng ít quá hay nước nguội quá đều trái với bài."
      },
      {
        "id": "dk44-2",
        "question": "お<ruby>年寄<rt>としよ</rt></ruby>りにも<ruby>使<rt>つか</rt></ruby>いやすくするために、<ruby>何<rt>なに</rt></ruby>を<ruby>直<rt>なお</rt></ruby>しましたか。",
        "options": [
          "お<ruby>茶<rt>ちゃ</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>を<ruby>二倍<rt>にばい</rt></ruby>にしました",
          "ボタンを<ruby>小<rt>ちい</rt></ruby>さくしました",
          "ボタンを<ruby>大<rt>おお</rt></ruby>きくしました",
          "サイズを<ruby>一<rt>ひと</rt></ruby>つにしました"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Cải tiến | Độ khó: Dễ | Trọng tâm: Nắm bắt điểm sửa đổi]\n• Dịch nghĩa: Để người lớn tuổi cũng dễ sử dụng, người ta đã sửa điểm nào?\n• Quy tắc & Loại trừ: Đoạn 2 ghi 「ボタンを大きくして、お年寄りにも使いやすくしました」. Các phương án thu nhỏ nút, tăng gấp đôi lượng trà hay chỉ làm một kích cỡ đều sai."
      },
      {
        "id": "dk44-3",
        "question": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>商品<rt>しょうひん</rt></ruby>で、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>調節<rt>ちょうせつ</rt></ruby>できるものは<ruby>何<rt>なに</rt></ruby>ですか。",
        "options": [
          "<ruby>商品<rt>しょうひん</rt></ruby>の<ruby>値段<rt>ねだん</rt></ruby>",
          "ボタンの<ruby>大<rt>おお</rt></ruby>きさ",
          "カップの<ruby>数<rt>かず</rt></ruby>",
          "お<ruby>茶<rt>ちゃ</rt></ruby>の<ruby>濃<rt>こ</rt></ruby>さ"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chức năng | Độ khó: Dễ | Trọng tâm: Tính năng mới]\n• Dịch nghĩa: Ở sản phẩm mới, thứ có thể tự điều chỉnh là gì?\n• Quy tắc & Loại trừ: Đoạn 2 nêu 「お茶の濃さも自分で調節できます」. Kích thước nút, số lượng cốc và giá cả không phải là thứ người dùng tự điều chỉnh."
      },
      {
        "id": "dk44-4",
        "question": "<ruby>新<rt>あたら</rt></ruby>しいお<ruby>茶<rt>ちゃ</rt></ruby>メーカーの<ruby>改善点<rt>かいぜんてん</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>新<rt>あたら</rt></ruby>しい<ruby>商品<rt>しょうひん</rt></ruby>のサイズは<ruby>三<rt>みっ</rt></ruby>つあります",
          "<ruby>新<rt>あたら</rt></ruby>しい<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>前<rt>まえ</rt></ruby>より<ruby>安全<rt>あんぜん</rt></ruby>になりました",
          "<ruby>前<rt>まえ</rt></ruby>の<ruby>商品<rt>しょうひん</rt></ruby>はやけどをしにくかったです",
          "<ruby>新<rt>あたら</rt></ruby>しい<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>薄<rt>うす</rt></ruby>いお<ruby>茶<rt>ちゃ</rt></ruby>しか<ruby>作<rt>つく</rt></ruby>れません"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Đối chiếu thông tin đúng sai]\n• Dịch nghĩa: Nội dung nào phù hợp với bài đọc?\n• Quy tắc & Loại trừ: Bài đọc ghi rõ sản phẩm mới đã làm cho an toàn hơn để tránh bị bỏng (もっと安全にしました). Ba nhận định còn lại đều mâu thuẫn với thông tin trong bài."
      },
      {
        "id": "dk44-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んだ <ruby>人<rt>ひと</rt></ruby>のうち、<ruby>家族<rt>かぞく</rt></ruby>で <ruby>使<rt>つか</rt></ruby>う <ruby>人<rt>ひと</rt></ruby>は どんな タイプに したら いいですか。",
        "options": [
          "<ruby>量<rt>りょう</rt></ruby>が<ruby>二倍<rt>にばい</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きいタイプ",
          "<ruby>前<rt>まえ</rt></ruby>に<ruby>売<rt>う</rt></ruby>っていたタイプ",
          "<ruby>量<rt>りょう</rt></ruby>が<ruby>半分<rt>はんぶん</rt></ruby>の<ruby>小<rt>ちい</rt></ruby>さいタイプ",
          "ボタンがないタイプ"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Lựa chọn | Độ khó: Dễ | Trọng tâm: Hướng dẫn chọn sản phẩm]\n• Dịch nghĩa: Người dùng cho gia đình thì nên chọn loại như thế nào?\n• Quy tắc & Loại trừ: Đoạn cuối khuyên rõ 「家族で使う人は、量が二倍の大きいタイプにするといいでしょう」. Loại nhỏ dành cho một người, còn hai phương án còn lại không có trong hướng dẫn."
      }
    ],
    "translation": "Khảo sát và cách chọn máy pha trà.\n\nTháng trước, chúng tôi đã thực hiện khảo sát đối với những người đã mua máy pha trà. Về sản phẩm trước đây, có các ý kiến như nước nóng quá mức hay nút bấm nhỏ nên khó ấn. Ngoài ra, cũng có ý kiến cho rằng lượng trà pha một lần nhiều quá mức.\n\nVì vậy, sản phẩm mới được bán từ tháng này đã sửa lại nhiều điểm. Trước tiên, để không bị bỏng, chúng tôi đã làm cho máy an toàn hơn. Tiếp theo, chúng tôi đã làm nút bấm to hơn để người lớn tuổi cũng dễ sử dụng. Độ đậm của trà cũng có thể tự điều chỉnh, nên dù là người thích trà đậm hay người thích trà nhạt đều có thể uống ngon.\n\nMáy có hai kích cỡ. Người dùng một mình chọn loại nhỏ sẽ rất tiện lợi. Còn người dùng cho gia đình thì nên chọn loại lớn có dung tích gấp đôi."
  },
  {
    "id": "dokkai-45",
    "lessonId": "bai-45",
    "title": "Bài Đọc Hiểu - Bài 45 Minna",
    "subTitle": "Quy trình xử lý tình huống khẩn cấp tại tòa nhà / nơi làm việc (Emergency response procedure)",
    "description": "Đọc hiểu quy trình xử lý tình huống khẩn cấp tại nơi làm việc để nắm bắt các bước cần thực hiện.",
    "passage": "<ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>火事<rt>かじ</rt></ruby>や <ruby>地震<rt>じしん</rt></ruby>が <ruby>起<rt>お</rt></ruby>きた <ruby>場合<rt>ばあい</rt></ruby>、<ruby>次<rt>つぎ</rt></ruby>の <ruby>手順<rt>てじゅん</rt></ruby>で <ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて <ruby>行動<rt>こうどう</rt></ruby>して ください。まず、<ruby>非常<rt>ひじょう</rt></ruby>ベルが <ruby>鳴<rt>な</rt></ruby>ったら、すぐに <ruby>係員<rt>かかりいん</rt></ruby>の <ruby>指示<rt>しじ</rt></ruby>を <ruby>聞<rt>き</rt></ruby>いて ください。<ruby>火事<rt>かじ</rt></ruby>の <ruby>場合<rt>ばあい</rt></ruby>は <ruby>煙<rt>けむり</rt></ruby>が <ruby>多<rt>おお</rt></ruby>い ので、ハンカチで <ruby>口<rt>くち</rt></ruby>と <ruby>鼻<rt>はな</rt></ruby>を <ruby>押<rt>お</rt></ruby>さえて ください。エレベーターは <ruby>使<rt>つか</rt></ruby>ってはいけません。<ruby>途中<rt>とちゅう</rt></ruby>で <ruby>止<rt>と</rt></ruby>まる ことが あるからです。<ruby>必<rt>かなら</rt></ruby>ず <ruby>階段<rt>かいだん</rt></ruby>を <ruby>使<rt>つか</rt></ruby>って <ruby>外<rt>そと</rt></ruby>へ <ruby>避難<rt>ひなん</rt></ruby>して ください。また、<ruby>荷物<rt>にもつ</rt></ruby>を <ruby>持<rt>も</rt></ruby>ってはいけません。とても <ruby>危<rt>あぶ</rt></ruby>ないからです。<ruby>避難<rt>ひなん</rt></ruby>する <ruby>場合<rt>ばあい</rt></ruby>は、<ruby>走<rt>はし</rt></ruby>らないで ください。<ruby>前<rt>まえ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>を <ruby>押<rt>お</rt></ruby>さないで ください。<ruby>非常口<rt>ひじょうぐち</rt></ruby>から <ruby>外<rt>そと</rt></ruby>へ <ruby>出<rt>で</rt></ruby>たら、<ruby>近<rt>ちか</rt></ruby>くの <ruby>広<rt>ひろ</rt></ruby>い <ruby>場所<rt>ばしょ</rt></ruby>に <ruby>集<rt>あつ</rt></ruby>まって ください。<ruby>自分<rt>じぶん</rt></ruby>の <ruby>身<rt>み</rt></ruby>を <ruby>守<rt>まも</rt></ruby>る ことが <ruby>一番<rt>いちばん</rt></ruby> <ruby>大切<rt>たいせつ</rt></ruby>です。もし <ruby>怪我<rt>けが</rt></ruby>を している <ruby>人<rt>ひと</rt></ruby>が いたら、すぐに <ruby>係員<rt>かかりいん</rt></ruby>に <ruby>知<rt>し</rt></ruby>らせて ください。<ruby>毎月<rt>まいつき</rt></ruby> <ruby>練習<rt>れんしゅう</rt></ruby>を しているのに、<ruby>本当<rt>ほんとう</rt></ruby>に <ruby>事故<rt>じこ</rt></ruby>が <ruby>起<rt>お</rt></ruby>きた <ruby>時<rt>とき</rt></ruby>は <ruby>慌<rt>あわ</rt></ruby>てて しまう <ruby>人<rt>ひと</rt></ruby>が <ruby>多<rt>おお</rt></ruby>いです。この ルールを しっかり <ruby>守<rt>まも</rt></ruby>って、<ruby>安全<rt>あんぜん</rt></ruby>に <ruby>避難<rt>ひなん</rt></ruby>して ください。",
    "questions": [
      {
        "id": "dk45-1",
        "question": "<ruby>火事<rt>かじ</rt></ruby>の <ruby>場合<rt>ばあい</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を <ruby>使<rt>つか</rt></ruby>ってはいけませんか。",
        "options": [
          "<ruby>階段<rt>かいだん</rt></ruby>",
          "<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby><ruby>口<rt>くち</rt></ruby>",
          "エレベーター",
          "<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>ベル"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Thông tin cụ thể]\n• Dịch nghĩa: Trong trường hợp hỏa hoạn, không được sử dụng cái gì?\n• Quy tắc & Loại trừ: Văn bản ghi rõ 「エレベーターは使ってはいけません」, nên chọn 「エレベーター」."
      },
      {
        "id": "dk45-2",
        "question": "<ruby>荷物<rt>にもつ</rt></ruby>を <ruby>持<rt>も</rt></ruby>ってはいけない <ruby>理由<rt>りゆう</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
        "options": [
          "<ruby>危<rt>あぶ</rt></ruby>ないからです",
          "<ruby>邪魔<rt>じゃま</rt></ruby>だからです",
          "<ruby>遅<rt>おそ</rt></ruby>くなるからです",
          "<ruby>重<rt>おも</rt></ruby>いからです"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do | Độ khó: Dễ | Trọng tâm: Tìm lý do]\n• Dịch nghĩa: Lý do không được mang theo hành lý là gì?\n• Quy tắc & Loại trừ: Văn bản ghi 「荷物を持ってはいけません。危ないからです」, nên chọn 「危ないからです」."
      },
      {
        "id": "dk45-3",
        "question": "<ruby>避難<rt>ひなん</rt></ruby>する <ruby>場合<rt>ばあい</rt></ruby>、してはいけない <ruby>行動<rt>こうどう</rt></ruby>は どれですか。",
        "options": [
          "<ruby>指示<rt>しじ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くこと",
          "<ruby>走<rt>はし</rt></ruby>ること",
          "<ruby>集<rt>あつ</rt></ruby>まること",
          "<ruby>歩<rt>ある</rt></ruby>くこと"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Phủ định | Độ khó: Dễ | Trọng tâm: Loại trừ hành động sai]\n• Dịch nghĩa: Trong trường hợp sơ tán, hành động nào không được phép làm?\n• Quy tắc & Loại trừ: Văn bản ghi 「避難する場合、走らないでください」, nên chọn 「走ること」."
      },
      {
        "id": "dk45-4",
        "question": "<ruby>避難<rt>ひなん</rt></ruby>する <ruby>際<rt>さい</rt></ruby>の ルールについて、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>避難<rt>ひなん</rt></ruby>する<ruby>時<rt>とき</rt></ruby>は<ruby>階段<rt>かいだん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>います",
          "<ruby>怪我<rt>けが</rt></ruby>をした<ruby>人<rt>ひと</rt></ruby>は<ruby>自分<rt>じぶん</rt></ruby>で<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます",
          "<ruby>非常<rt>ひじょう</rt></ruby>ベルが<ruby>鳴<rt>な</rt></ruby>ったら<ruby>走<rt>はし</rt></ruby>って<ruby>逃<rt>に</rt></ruby>げます",
          "<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>持<rt>も</rt></ruby>って<ruby>避難<rt>ひなん</rt></ruby>します"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Khớp nội dung]\n• Dịch nghĩa: Nội dung nào đúng với bài đọc?\n• Quy tắc & Loại trừ: Văn bản ghi 「階段を使って外へ避難してください」, nên chọn 「避難する時は階段を使います」."
      },
      {
        "id": "dk45-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>では、<ruby>怪我<rt>けが</rt></ruby>を して いる <ruby>人<rt>ひと</rt></ruby>が いたら どう しますか。",
        "options": [
          "<ruby>無視<rt>むし</rt></ruby>します",
          "<ruby>階段<rt>かいだん</rt></ruby>へ<ruby>連<rt>つ</rt></ruby>れて<ruby>行<rt>い</rt></ruby>きます",
          "<ruby>自分<rt>じぶん</rt></ruby>で<ruby>助<rt>たす</rt></ruby>けます",
          "<ruby>係員<rt>かかりいん</rt></ruby>に<ruby>知<rt>し</rt></ruby>らせます"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Hành động | Độ khó: Dễ | Trọng tâm: Xử lý tình huống]\n• Dịch nghĩa: Nếu có người bị thương thì làm thế nào?\n• Quy tắc & Loại trừ: Văn bản ghi 「もし怪我をしている人がいたら、すぐに係員に知らせてください」, nên chọn 「係員に知らせます」."
      }
    ],
    "translation": "Trong trường hợp xảy ra hỏa hoạn hoặc động đất tại công ty, hãy bình tĩnh hành động theo các bước sau. Trước tiên, khi chuông báo động vang lên, hãy nghe theo chỉ dẫn của nhân viên phụ trách ngay lập tức. Trong trường hợp hỏa hoạn có nhiều khói nên hãy dùng khăn tay bịt miệng và mũi. Không được sử dụng thang máy vì có thể bị dừng giữa chừng. Nhất định phải sử dụng cầu thang bộ để sơ tán ra bên ngoài. Ngoài ra, không được mang theo hành lý vì rất nguy hiểm. Trong trường hợp sơ tán, không được chạy và không được xô đẩy người phía trước. Sau khi ra khỏi cửa thoát hiểm, hãy tập trung tại nơi rộng rãi gần đó. Bảo vệ bản thân là điều quan trọng nhất. Nếu có người bị thương, hãy thông báo ngay cho nhân viên phụ trách. Mặc dù hàng tháng đều luyện tập, nhưng khi sự cố thực sự xảy ra vẫn có nhiều người hoảng loạn. Hãy tuân thủ nghiêm ngặt quy tắc này và sơ tán an toàn."
  },
  {
    "id": "dokkai-46",
    "lessonId": "bai-46",
    "title": "Bài Đọc Hiểu - Bài 46 Minna",
    "subTitle": "Thông báo xác nhận giao hàng & thời gian kỹ thuật viên tới (Delivery & technician arrival notice)",
    "description": "Đọc thông báo về việc giao hàng và lịch hẹn kỹ thuật viên để trả lời các câu hỏi về thời gian và hành động.",
    "passage": "お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>へ。\nいつも <ruby>当店<rt>とうてん</rt></ruby>を <ruby>利用<rt>りよう</rt></ruby>して いただき、ありがとうございます。<ruby>注文<rt>ちゅうもん</rt></ruby>された <ruby>商品<rt>しょうひん</rt></ruby>は、<ruby>明日<rt>あした</rt></ruby>の <ruby>午前<rt>ごぜん</rt></ruby> １０<ruby>時<rt>じ</rt></ruby>に <ruby>届<rt>とど</rt></ruby>く <ruby>予定<rt>よてい</rt></ruby>です。<ruby>宅配便<rt>たくはいびん</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>が お<ruby>宅<rt>たく</rt></ruby>まで <ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>ます。<ruby>荷物<rt>にもつ</rt></ruby>は たった <ruby>今<rt>いま</rt></ruby> <ruby>店<rt>みせ</rt></ruby>を <ruby>出<rt>で</rt></ruby>た ばかりですので、<ruby>時間<rt>じかん</rt></ruby>どおりに <ruby>着<rt>つ</rt></ruby>く はずです。<ruby>配達<rt>はいたつ</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に もう<ruby>一度<rt>いちど</rt></ruby> <ruby>電話<rt>でんわ</rt></ruby>します。\n<ruby>商品<rt>しょうひん</rt></ruby>が <ruby>届<rt>とど</rt></ruby>いた <ruby>後<rt>あと</rt></ruby>、<ruby>午後<rt>ごご</rt></ruby> ２<ruby>時<rt>じ</rt></ruby>に <ruby>修理<rt>しゅうり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>が <ruby>向<rt>む</rt></ruby>かいます。<ruby>修理<rt>しゅうり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は ガスレンジの <ruby>具合<rt>ぐあい</rt></ruby>を <ruby>見<rt>み</rt></ruby>て、<ruby>故障<rt>こしょう</rt></ruby>の <ruby>原因<rt>げんいん</rt></ruby>を <ruby>調<rt>しら</rt></ruby>べます。<ruby>修理<rt>しゅうり</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>は ３０<ruby>分<rt>ぷん</rt></ruby>ぐらいです。<ruby>修理<rt>しゅうり</rt></ruby>が <ruby>終<rt>お</rt></ruby>わったら、すぐ <ruby>使<rt>つか</rt></ruby>うことが できる はずです。なお、<ruby>商品<rt>しょうひん</rt></ruby>の <ruby>代金<rt>だいきん</rt></ruby>は <ruby>宅配便<rt>たくはいびん</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>に <ruby>払<rt>はら</rt></ruby>って ください。もし <ruby>留守<rt>るす</rt></ruby>の <ruby>場合<rt>ばあい</rt></ruby>は、<ruby>昼<rt>ひる</rt></ruby>の １２<ruby>時<rt>じ</rt></ruby>までに <ruby>電話<rt>でんわ</rt></ruby>で <ruby>連絡<rt>れんらく</rt></ruby>して ください。<ruby>修理<rt>しゅうり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>今日<rt>きょう</rt></ruby> <ruby>出発<rt>しゅっぱつ</rt></ruby>した ばかりで、<ruby>今<rt>いま</rt></ruby> こちらへ <ruby>向<rt>む</rt></ruby>かっている ところです。どうぞ よろしく お<ruby>願<rt>ねが</rt></ruby>いします。",
    "questions": [
      {
        "id": "dk46-1",
        "question": "<ruby>商品<rt>しょうひん</rt></ruby>は いつ <ruby>届<rt>とど</rt></ruby>きますか。",
        "options": [
          "<ruby>午後<rt>ごご</rt></ruby>",
          "<ruby>明日<rt>あした</rt></ruby>",
          "<ruby>今日<rt>きょう</rt></ruby>",
          "<ruby>明後日<rt>あさって</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Thông tin thời gian]\n• Dịch nghĩa: Sản phẩm khi nào đến? - Ngày mai.\n• Quy tắc & Loại trừ: Trong văn bản ghi rõ 「明日の午前１０時に届く予定です」."
      },
      {
        "id": "dk46-2",
        "question": "<ruby>修理<rt>しゅうり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>を <ruby>見<rt>み</rt></ruby>ますか。",
        "options": [
          "<ruby>荷物<rt>にもつ</rt></ruby>",
          "<ruby>電話<rt>でんわ</rt></ruby>",
          "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>",
          "ガスレンジ"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Dễ | Trọng tâm: Nội dung công việc]\n• Dịch nghĩa: Người sửa chữa sẽ xem cái gì? - Bếp gas.\n• Quy tắc & Loại trừ: Văn bản ghi 「修理の人はガスレンジの具合を見ます」."
      },
      {
        "id": "dk46-3",
        "question": "<ruby>留守<rt>るす</rt></ruby>の <ruby>場合<rt>ばあい</rt></ruby>、どうしますか。",
        "options": [
          "<ruby>電話<rt>でんわ</rt></ruby>で<ruby>連絡<rt>れんらく</rt></ruby>します",
          "<ruby>修理<rt>しゅうり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちます",
          "<ruby>宅配便<rt>たくはいびん</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちます",
          "<ruby>待<rt>ま</rt></ruby>っています"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Xử lý tình huống | Độ khó: Trung bình | Trọng tâm: Hành động cần làm]\n• Dịch nghĩa: Trường hợp vắng nhà thì làm thế nào? - Liên lạc qua điện thoại.\n• Quy tắc & Loại trừ: Văn bản ghi 「もし留守の場合は、電話で連絡してください」."
      },
      {
        "id": "dk46-4",
        "question": "<ruby>本文<rt>ほんぶん</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>修理<rt>しゅうり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>午前<rt>ごぜん</rt></ruby>１０<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ます",
          "<ruby>修理<rt>しゅうり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>午後<rt>ごご</rt></ruby>２<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ます",
          "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby><ruby>届<rt>とど</rt></ruby>きます",
          "<ruby>修理<rt>しゅうり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はまだ<ruby>出<rt>だ</rt></ruby><ruby>発<rt>はつ</rt></ruby>していません"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định | Độ khó: Trung bình | Trọng tâm: Đối chiếu thông tin]\n• Dịch nghĩa: Nội dung nào đúng? - Người sửa chữa đến lúc 2 giờ chiều.\n• Quy tắc & Loại trừ: Văn bản ghi 「午後２時に修理の人が向かいます」, các phương án khác sai về thời gian hoặc trạng thái."
      },
      {
        "id": "dk46-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>では、<ruby>修理<rt>しゅうり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は いつ <ruby>出発<rt>しゅっぱつ</rt></ruby>しましたか。",
        "options": [
          "<ruby>先月<rt>せんげつ</rt></ruby>",
          "<ruby>明日<rt>あした</rt></ruby>",
          "<ruby>今日<rt>きょう</rt></ruby>",
          "<ruby>昨日<rt>きのう</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết | Độ khó: Trung bình | Trọng tâm: Thời điểm hành động]\n• Dịch nghĩa: Người sửa chữa đã xuất phát khi nào? - Hôm nay.\n• Quy tắc & Loại trừ: Văn bản ghi 「修理の人は今日出発したばかりです」."
      }
    ],
    "translation": "Kính gửi quý khách hàng. Cảm ơn quý khách đã luôn sử dụng dịch vụ của cửa hàng chúng tôi. Sản phẩm quý khách đã đặt dự kiến sẽ được giao đến vào 10 giờ sáng mai. Nhân viên chuyển phát nhanh sẽ mang đến tận nhà quý khách. Hàng hóa vừa mới rời khỏi cửa hàng ngay lúc này, nên chắc chắn sẽ đến đúng giờ. Trước khi giao hàng, chúng tôi sẽ gọi điện lại một lần nữa. Sau khi sản phẩm được giao đến, vào lúc 2 giờ chiều, nhân viên kỹ thuật sẽ đến. Nhân viên kỹ thuật sẽ kiểm tra tình trạng của bếp gas và điều tra nguyên nhân hỏng hóc. Thời gian sửa chữa mất khoảng 30 phút. Sau khi sửa xong, chắc chắn quý khách sẽ có thể sử dụng được ngay. Ngoài ra, xin quý khách vui lòng thanh toán tiền hàng cho nhân viên chuyển phát nhanh. Nếu quý khách vắng nhà, xin hãy liên lạc qua điện thoại trước 12 giờ trưa. Nhân viên kỹ thuật vừa mới xuất phát hôm nay và hiện đang trên đường tới đây. Rất mong nhận được sự hợp tác của quý khách."
  },
  {
    "id": "dokkai-47",
    "lessonId": "bai-47",
    "title": "Bài Đọc Hiểu - Bài 47 Minna",
    "subTitle": "Bản tin tổng hợp khảo sát ý kiến & tin đồn thị trường (Survey & news-source digest)",
    "description": "Đọc đoạn văn về kết quả khảo sát và tin đồn liên quan đến thói quen sống và sức khỏe, sau đó trả lời câu hỏi.",
    "passage": "<ruby>最近<rt>さいきん</rt></ruby>の<ruby>調査<rt>ちょうさ</rt></ruby>によると、<ruby>日本<rt>にほん</rt></ruby>の<ruby>平均寿命<rt>へいきんじゅみょう</rt></ruby>は<ruby>長<rt>なが</rt></ruby>くなっているそうです。<ruby>特<rt>とく</rt></ruby>に<ruby>女性<rt>じょせい</rt></ruby>の<ruby>寿命<rt>じゅみょう</rt></ruby>は<ruby>男性<rt>だんせい</rt></ruby>より<ruby>長<rt>なが</rt></ruby>いようです。<ruby>専門家<rt>せんもんか</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>では、<ruby>健康<rt>けんこう</rt></ruby>に<ruby>気<rt>き</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えているそうです。<ruby>毎日<rt>まいにち</rt></ruby><ruby>野菜<rt>やさい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたり、<ruby>運動<rt>うんどう</rt></ruby>したりする<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いようです。また、テレビのニュースによると、<ruby>早寝<rt>はやね</rt></ruby><ruby>早起<rt>はやお</rt></ruby>きをする<ruby>人<rt>ひと</rt></ruby>も<ruby>多<rt>おお</rt></ruby>くなったそうです。<ruby>朝<rt>あさ</rt></ruby>の<ruby>公園<rt>こうえん</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>くと、とてもいい<ruby>気分<rt>きぶん</rt></ruby>がします。<ruby>街<rt>まち</rt></ruby>では、<ruby>新<rt>あたら</rt></ruby>しい<ruby>健康<rt>けんこう</rt></ruby>ドリンクが<ruby>人気<rt>にんき</rt></ruby>だそうです。このドリンクを<ruby>飲<rt>の</rt></ruby>むと、<ruby>元気<rt>げんき</rt></ruby>になるようです。<ruby>私<rt>わたし</rt></ruby>も<ruby>昨日<rt>きのう</rt></ruby><ruby>飲<rt>の</rt></ruby>んでみました。<ruby>少<rt>すこ</rt></ruby>し<ruby>苦<rt>にが</rt></ruby>い<ruby>味<rt>あじ</rt></ruby>がしましたが、<ruby>体<rt>からだ</rt></ruby>に<ruby>良<rt>よ</rt></ruby>さそうです。<ruby>友達<rt>ともだち</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>では、ちょっと<ruby>高<rt>たか</rt></ruby>いですが、<ruby>毎日<rt>まいにち</rt></ruby><ruby>飲<rt>の</rt></ruby>んでいる<ruby>人<rt>ひと</rt></ruby>もいるそうです。<ruby>今後<rt>こんご</rt></ruby>も<ruby>健康<rt>けんこう</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけて、<ruby>長生き<rt>ながいき</rt></ruby>したいと<ruby>思<rt>おも</rt></ruby>います。",
    "questions": [
      {
        "id": "dk47-1",
        "question": "<ruby>日本<rt>にほん</rt></ruby>の<ruby>平均寿命<rt>へいきんじゅみょう</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>ではどう<ruby>言<rt>い</rt></ruby>っていますか。",
        "options": [
          "<ruby>長<rt>なが</rt></ruby>くなっているそうです",
          "<ruby>変<rt>か</rt></ruby>わらないそうです",
          "<ruby>短<rt>みじか</rt></ruby>くなっているそうです",
          "<ruby>男性<rt>だんせい</rt></ruby>のほうが<ruby>長<rt>なが</rt></ruby>いそうです"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Mẫu câu 〜そうです]\n• Dịch nghĩa: Bài viết nói gì về tuổi thọ trung bình của người Nhật?\n• Quy tắc & Loại trừ: Câu đầu tiên của bài viết khẳng định 「平均寿命は長くなっているそうです」."
      },
      {
        "id": "dk47-2",
        "question": "<ruby>健康<rt>けんこう</rt></ruby>ドリンクを<ruby>飲<rt>の</rt></ruby>んだとき、どんな<ruby>味<rt>あじ</rt></ruby>がしましたか。",
        "options": [
          "とても<ruby>甘<rt>あま</rt></ruby>い<ruby>味<rt>あじ</rt></ruby>",
          "<ruby>変<rt>へん</rt></ruby>な<ruby>味<rt>あじ</rt></ruby>",
          "<ruby>苦<rt>にが</rt></ruby>い<ruby>味<rt>あじ</rt></ruby>",
          "<ruby>酸<rt>す</rt></ruby>っぱい<ruby>味<rt>あじ</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Mẫu câu 〜がします]\n• Dịch nghĩa: Khi uống đồ uống sức khỏe, bạn cảm thấy vị như thế nào?\n• Quy tắc & Loại trừ: Bài viết ghi rõ 「少し苦い味がしましたが」, nên đáp án là vị đắng."
      },
      {
        "id": "dk47-3",
        "question": "<ruby>寿命<rt>じゅみょう</rt></ruby>や <ruby>健康<rt>けんこう</rt></ruby>ドリンクの <ruby>話<rt>はなし</rt></ruby>で、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "<ruby>女性<rt>じょせい</rt></ruby>の<ruby>寿命<rt>じゅみょう</rt></ruby>は<ruby>男性<rt>だんせい</rt></ruby>より<ruby>短<rt>みじか</rt></ruby>いようです",
          "<ruby>健康<rt>けんこう</rt></ruby>ドリンクは<ruby>人気<rt>にんき</rt></ruby>がありません",
          "<ruby>私<rt>わたし</rt></ruby>は<ruby>健康<rt>けんこう</rt></ruby>ドリンクを<ruby>飲<rt>の</rt></ruby>んだことがありません",
          "<ruby>毎日<rt>まいにち</rt></ruby><ruby>運動<rt>うんどう</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いようです"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Nhận định nội dung | Độ khó: Trung bình | Trọng tâm: Mẫu câu 〜ようです]\n• Dịch nghĩa: Câu nào đúng với nội dung bài viết?\n• Quy tắc & Loại trừ: Bài viết nói 「毎日運動したりする人が多いようです」, khớp với phương án 3."
      },
      {
        "id": "dk47-4",
        "question": "<ruby>専門家<rt>せんもんか</rt></ruby>の <ruby>話<rt>はなし</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>平均寿命<rt>へいきんじゅみょう</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>",
          "<ruby>新<rt>あたら</rt></ruby>しい<ruby>科学<rt>かがく</rt></ruby>の<ruby>実験<rt>じっけん</rt></ruby>",
          "<ruby>健康<rt>けんこう</rt></ruby>に<ruby>気<rt>き</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>",
          "<ruby>日本<rt>にほん</rt></ruby>の<ruby>人口<rt>じんこう</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Trung bình | Trọng tâm: Mẫu câu 〜そうです]\n• Dịch nghĩa: Chuyên gia đang nói về điều gì?\n• Quy tắc & Loại trừ: Bài viết ghi 「専門家の話では、健康に気を使う人が増えているそうです」."
      },
      {
        "id": "dk47-5",
        "question": "<ruby>私<rt>わたし</rt></ruby>は<ruby>今後<rt>こんご</rt></ruby>どうしたいと<ruby>思<rt>おも</rt></ruby>っていますか。",
        "options": [
          "<ruby>健康<rt>けんこう</rt></ruby>ドリンクを<ruby>売<rt>う</rt></ruby>りたい",
          "<ruby>健康<rt>けんこう</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけて<ruby>長生き<rt>ながいき</rt></ruby>したい",
          "<ruby>運動<rt>うんどう</rt></ruby>を<ruby>止<rt>や</rt></ruby>めたい",
          "<ruby>野菜<rt>やさい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるのをやめたい"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Ý chính | Độ khó: Dễ | Trọng tâm: Mẫu câu 〜たい]\n• Dịch nghĩa: Tác giả muốn làm gì trong tương lai?\n• Quy tắc & Loại trừ: Câu cuối bài viết là 「今後も健康に気をつけて、長生きしたいと思います」."
      }
    ],
    "translation": "Theo khảo sát gần đây, nghe nói tuổi thọ trung bình của người Nhật đang tăng lên. Đặc biệt, tuổi thọ của phụ nữ dường như dài hơn nam giới. Theo lời các chuyên gia, nghe nói số người chú ý đến sức khỏe đang tăng lên. Có vẻ như có nhiều người ăn rau và tập thể dục hàng ngày. Ngoài ra, theo tin tức trên tivi, nghe nói người ngủ sớm dậy sớm cũng nhiều hơn. Khi đi bộ trong công viên buổi sáng sẽ có cảm giác rất dễ chịu. Trên phố, nghe nói một loại đồ uống sức khỏe mới đang rất phổ biến. Hình như uống loại này vào sẽ thấy khỏe khoắn hơn. Tôi cũng đã thử uống vào hôm qua. Nó có vị hơi đắng nhưng có vẻ tốt cho cơ thể. Theo lời bạn tôi, tuy hơi đắt một chút nhưng nghe nói có cả những người uống mỗi ngày. Từ nay về sau tôi cũng muốn chú ý đến sức khỏe và sống thọ."
  },
  {
    "id": "dokkai-48",
    "lessonId": "bai-48",
    "title": "Bài Đọc Hiểu - Bài 48 Minna",
    "subTitle": "Thông báo phân công nhiệm vụ thực tập sinh / nhân sự mới (Task delegation & training memo)",
    "description": "Đọc thông báo phân công công việc cho nhân viên mới sử dụng thể sai khiến và trả lời các câu hỏi bên dưới.",
    "passage": "<ruby>新入社員<rt>しんにゅうしゃいん</rt></ruby>の みなさんへ\n\n<ruby>来週<rt>らいしゅう</rt></ruby>から <ruby>新<rt>あたら</rt></ruby>しい <ruby>仕事<rt>しごと</rt></ruby>が <ruby>始<rt>はじ</rt></ruby>まります。<ruby>最初<rt>さいしょ</rt></ruby>の <ruby>二週間<rt>にしゅうかん</rt></ruby>は、みなさんに いろいろな <ruby>仕事<rt>しごと</rt></ruby>を <ruby>経験<rt>けいけん</rt></ruby>させます。\nまず、<ruby>月曜日<rt>げつようび</rt></ruby>は <ruby>田中<rt>たなか</rt></ruby>さんに <ruby>営業<rt>えいぎょう</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>を <ruby>録音<rt>ろくおん</rt></ruby>させます。<ruby>火曜日<rt>かようび</rt></ruby>は <ruby>鈴木<rt>すずき</rt></ruby>さんに <ruby>新<rt>あたら</rt></ruby>しい <ruby>製品<rt>せいひん</rt></ruby>の <ruby>資料<rt>しりょう</rt></ruby>を <ruby>作<rt>つく</rt></ruby>らせて、<ruby>駅前<rt>えきまえ</rt></ruby>の <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>届<rt>とど</rt></ruby>けさせます。<ruby>水曜日<rt>すいようび</rt></ruby>は <ruby>林<rt>はやし</rt></ruby>さんに <ruby>車<rt>くるま</rt></ruby>の <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>降<rt>お</rt></ruby>ろさせて、<ruby>佐藤<rt>さとう</rt></ruby>さんを <ruby>大阪<rt>おおさか</rt></ruby>の <ruby>工場<rt>こうじょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かせます。<ruby>木曜日<rt>もくようび</rt></ruby>と <ruby>金曜日<rt>きんようび</rt></ruby>は、みなさんに ほかの <ruby>部署<rt>ぶしょ</rt></ruby>を <ruby>自由<rt>じゆう</rt></ruby>に <ruby>見学<rt>けんがく</rt></ruby>させます。それまでに <ruby>分<rt>わ</rt></ruby>からないことが あったら、<ruby>先輩<rt>せんぱい</rt></ruby>に <ruby>聞<rt>き</rt></ruby>いて ください。\n<ruby>少<rt>すこ</rt></ruby>し <ruby>厳<rt>きび</rt></ruby>しい スケジュールですが、みなさんに <ruby>早<rt>はや</rt></ruby>く <ruby>仕事<rt>しごと</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えさせたいと <ruby>思<rt>おも</rt></ruby>います。\nまた、<ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く ために <ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>りたい ときは、「<ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>らせて いただけませんか」と <ruby>前<rt>まえ</rt></ruby>の <ruby>日<rt>ひ</rt></ruby>までに <ruby>言<rt>い</rt></ruby>って ください。<ruby>理由<rt>りゆう</rt></ruby>が あれば かまいません。\nみんなで <ruby>仕事<rt>しごと</rt></ruby>を <ruby>楽<rt>たの</rt></ruby>しんで、がんばりましょう。\n\n<ruby>営業部長<rt>えいぎょうぶちょう</rt></ruby> <ruby>山田<rt>やまだ</rt></ruby>",
    "questions": [
      {
        "id": "dk48-1",
        "question": "<ruby>田中<rt>たなか</rt></ruby>さんは <ruby>月曜日<rt>げつようび</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>大阪<rt>おおさか</rt></ruby>の <ruby>工場<rt>こうじょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
          "<ruby>車<rt>くるま</rt></ruby>の <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>降<rt>お</rt></ruby>ろします",
          "<ruby>資料<rt>しりょう</rt></ruby>を <ruby>駅前<rt>えきまえ</rt></ruby>の <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>届<rt>とど</rt></ruby>けます",
          "<ruby>営業<rt>えいぎょう</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>を <ruby>録音<rt>ろくおん</rt></ruby>します"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Phân công ngày thứ Hai]\n• Dịch nghĩa: Anh Tanaka sẽ làm gì vào thứ Hai?\n• Quy tắc & Loại trừ: Đoạn văn ghi rõ 「月曜日は田中さんに営業の会議を録音させます」, tức là anh Tanaka sẽ ghi âm cuộc họp kinh doanh; các việc khác thuộc về Suzuki, Hayashi và Sato."
      },
      {
        "id": "dk48-2",
        "question": "<ruby>鈴木<rt>すずき</rt></ruby>さんは <ruby>火曜日<rt>かようび</rt></ruby>に どこへ <ruby>資料<rt>しりょう</rt></ruby>を <ruby>届<rt>とど</rt></ruby>けますか。",
        "options": [
          "ほかの <ruby>部署<rt>ぶしょ</rt></ruby>",
          "<ruby>駅前<rt>えきまえ</rt></ruby>の <ruby>会社<rt>かいしゃ</rt></ruby>",
          "<ruby>病院<rt>びょういん</rt></ruby>",
          "<ruby>大阪<rt>おおさか</rt></ruby>の <ruby>工場<rt>こうじょう</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Địa điểm giao tài liệu]\n• Dịch nghĩa: Chị Suzuki sẽ giao tài liệu đến đâu vào thứ Ba?\n• Quy tắc & Loại trừ: Bài viết ghi 「火曜日は鈴木さんに新しい製品の資料を作らせて、駅前の会社へ届けさせます」, nên địa điểm là công ty trước nhà ga."
      },
      {
        "id": "dk48-3",
        "question": "<ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>りたい ときは、いつまでに <ruby>言<rt>い</rt></ruby>わなければ なりませんか。",
        "options": [
          "<ruby>金曜日<rt>きんようび</rt></ruby>まで",
          "<ruby>月曜日<rt>げつようび</rt></ruby>まで",
          "<ruby>前<rt>まえ</rt></ruby>の <ruby>日<rt>ひ</rt></ruby>まで",
          "<ruby>二週間後<rt>にしゅうかんご</rt></ruby>まで"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Quy định thời hạn | Độ khó: Dễ | Trọng tâm: Hạn báo cáo xin về sớm]\n• Dịch nghĩa: Khi muốn về sớm, phải báo trước chậm nhất là khi nào?\n• Quy tắc & Loại trừ: Đoạn văn quy định 「前の日までに言ってください」, tức là phải báo trước đó một ngày; các mốc thời gian khác không có trong quy định này."
      },
      {
        "id": "dk48-4",
        "question": "<ruby>新入社員<rt>しんにゅうしゃいん</rt></ruby>の <ruby>二週間<rt>にしゅうかん</rt></ruby>の <ruby>予定<rt>よてい</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>理由<rt>りゆう</rt></ruby>が あっても <ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>ることが できません。",
          "<ruby>木曜日<rt>もくようび</rt></ruby>に <ruby>車<rt>くるま</rt></ruby>の <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>降<rt>お</rt></ruby>ろします。",
          "<ruby>林<rt>はやし</rt></ruby>さんは <ruby>大阪<rt>おおさか</rt></ruby>の <ruby>工場<rt>こうじょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。",
          "<ruby>木曜日<rt>もくようび</rt></ruby>と <ruby>金曜日<rt>きんようび</rt></ruby>に ほかの <ruby>部署<rt>ぶしょ</rt></ruby>を <ruby>見学<rt>けんがく</rt></ruby>します。"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Xác nhận nội dung | Độ khó: Trung bình | Trọng tâm: Đối chiếu chi tiết toàn bài]\n• Dịch nghĩa: Câu nào đúng với nội dung bài đọc?\n• Quy tắc & Loại trừ: Bài đọc nêu rõ 「木曜日と金曜日は、みなさんにほかの部署を自由に見学させます」. Người đi nhà máy Osaka là Sato, dỡ hàng là vào thứ Tư, và nếu có lý do thì vẫn được về sớm."
      },
      {
        "id": "dk48-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>では、<ruby>山田<rt>やまだ</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>は なぜ みなさんに いろいろな <ruby>仕事<rt>しごと</rt></ruby>を <ruby>経験<rt>けいけん</rt></ruby>させますか。",
        "options": [
          "<ruby>早<rt>はや</rt></ruby>く <ruby>仕事<rt>しごと</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えさせたい からです。",
          "<ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かせたい からです。",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>製品<rt>せいひん</rt></ruby>を <ruby>売<rt>う</rt></ruby>りたい からです。",
          "<ruby>先輩<rt>せんぱい</rt></ruby>が <ruby>休<rt>やす</rt></ruby>みだからです。"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do / Mục đích | Độ khó: Trung bình | Trọng tâm: Mục đích của lịch trình đào tạo]\n• Dịch nghĩa: Tại sao trưởng phòng Yamada lại cho mọi người trải nghiệm nhiều công việc khác nhau?\n• Quy tắc & Loại trừ: Đoạn văn giải thích rõ 「みなさんに早く仕事を覚えさせたいと思います」 (muốn giúp mọi người nhanh chóng ghi nhớ công việc); các phương án còn lại đều sai lý do."
      }
    ],
    "translation": "Gửi các nhân viên mới,\n\nTừ tuần sau công việc mới sẽ bắt đầu. Trong hai tuần đầu tiên, tôi sẽ cho mọi người trải nghiệm nhiều công việc khác nhau.\nTrước hết, thứ Hai tôi sẽ cho anh Tanaka ghi âm cuộc họp kinh doanh. Thứ Ba tôi sẽ cho chị Suzuki làm tài liệu sản phẩm mới và mang đến công ty trước nhà ga. Thứ Tư tôi sẽ cho anh Hayashi dỡ hàng hóa trên xe xuống và cử anh Sato đi đến nhà máy ở Osaka. Thứ Năm và thứ Sáu tôi sẽ cho mọi người tự do tham quan các bộ phận khác. Trước lúc đó, nếu có điều gì chưa hiểu, hãy hỏi các anh chị khóa trước.\nĐây là một lịch trình hơi nghiêm khắc một chút, nhưng tôi muốn giúp mọi người nhanh chóng ghi nhớ công việc.\nNgoài ra, khi muốn về sớm để đi bệnh viện, hãy nói trước hôm đó một ngày rằng: \"Cho phép tôi về sớm có được không ạ?\". Nếu có lý do thì không sao cả.\nChúng ta hãy cùng nhau tận hưởng công việc và cố gắng nhé.\n\nTrưởng phòng kinh doanh Yamada"
  },
  {
    "id": "dokkai-49",
    "lessonId": "bai-49",
    "title": "Bài Đọc Hiểu - Bài 49 Minna",
    "subTitle": "Phỏng vấn tác giả đạt giải thưởng văn học (Respectful interview article with Keigo)",
    "description": "Đọc bài phỏng vấn ngắn nhà văn Nakamura sử dụng tôn kính ngữ và trả lời các câu hỏi về thói quen, công việc và thông điệp của ông.",
    "passage": "きょうは、<ruby>今年<rt>ことし</rt></ruby><ruby>大<rt>おお</rt></ruby>きな<ruby>賞<rt>しょう</rt></ruby>を<ruby>受賞<rt>じゅしょう</rt></ruby>された<ruby>作家<rt>さっか</rt></ruby>の<ruby>中村<rt>なかむら</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>にお<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きます。\n<ruby>記者<rt>きしゃ</rt></ruby>：「<ruby>先生<rt>せんせい</rt></ruby>、<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>が<ruby>先生<rt>せんせい</rt></ruby>の<ruby>作品<rt>さくひん</rt></ruby>をご<ruby>存<rt>ぞん</rt></ruby>じですね。<ruby>毎日<rt>まいにち</rt></ruby>どんなふうに<ruby>時間<rt>じかん</rt></ruby>を<ruby>過<rt>す</rt></ruby>ごされますか。」\n<ruby>中村<rt>なかむら</rt></ruby>：「<ruby>大変<rt>たいへん</rt></ruby>うれしいです。<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>六時<rt>ろくじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きて、<ruby>午前中<rt>ごぜんちゅう</rt></ruby>に<ruby>小説<rt>しょうせつ</rt></ruby>を<ruby>書<rt>か</rt></ruby>きます。<ruby>私<rt>わたし</rt></ruby>は<ruby>目<rt>め</rt></ruby>に<ruby>障害<rt>しょうがい</rt></ruby>がありますが、<ruby>音声<rt>おんせい</rt></ruby>ソフトを<ruby>利用<rt>りよう</rt></ruby>して<ruby>仕事<rt>しごと</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けています。」\n<ruby>記者<rt>きしゃ</rt></ruby>：「お<ruby>忙<rt>いそが</rt></ruby>しい<ruby>毎日<rt>まいにち</rt></ruby>ですね。<ruby>午後<rt>ごご</rt></ruby>や<ruby>休日<rt>きゅうじつ</rt></ruby>には<ruby>何<rt>なに</rt></ruby>をなさいますか。」\n<ruby>中村<rt>なかむら</rt></ruby>：「<ruby>午後<rt>ごご</rt></ruby>は<ruby>大学<rt>だいがく</rt></ruby>の<ruby>講師<rt>こうし</rt></ruby>として<ruby>学生<rt>がくせい</rt></ruby>に<ruby>教<rt>おし</rt></ruby>えています。<ruby>休日<rt>きゅうじつ</rt></ruby>は<ruby>家族<rt>かぞく</rt></ruby>と<ruby>温泉<rt>おんせん</rt></ruby>の<ruby>旅館<rt>りょかん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くこともあります。」\n<ruby>記者<rt>きしゃ</rt></ruby>：「<ruby>先生<rt>せんせい</rt></ruby>は<ruby>甘<rt>あま</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をよく<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がるとおっしゃいましたが、<ruby>本当<rt>ほんとう</rt></ruby>ですか。」\n<ruby>中村<rt>なかむら</rt></ruby>：「ええ、<ruby>仕事<rt>しごと</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>にケーキを<ruby>食<rt>た</rt></ruby>べるのが<ruby>楽<rt>たの</rt></ruby>しみです。」\n<ruby>記者<rt>きしゃ</rt></ruby>：「<ruby>最後<rt>さいご</rt></ruby>に、このインタビューをご<ruby>覧<rt>らん</rt></ruby>になる<ruby>読者<rt>どくしゃ</rt></ruby>にひとことお<ruby>願<rt>ねが</rt></ruby>いします。」\n<ruby>中村<rt>なかむら</rt></ruby>：「<ruby>皆<rt>みな</rt></ruby>さんも<ruby>自分<rt>じぶん</rt></ruby>の<ruby>才能<rt>さいのう</rt></ruby>を<ruby>発揮<rt>はっき</rt></ruby>して、<ruby>毎日<rt>まいにち</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしてください。」",
    "questions": [
      {
        "id": "dk49-1",
        "question": "<ruby>中村<rt>なかむら</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は <ruby>午前中<rt>ごぜんちゅう</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を なさいますか。",
        "options": [
          "<ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みます",
          "<ruby>旅館<rt>りょかん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
          "<ruby>小説<rt>しょうせつ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きます",
          "<ruby>大学<rt>だいがく</rt></ruby>で <ruby>教<rt>おし</rt></ruby>えます"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết công việc | Độ khó: Dễ | Trọng tâm: Hoạt động buổi sáng của nhân vật]\n• Dịch nghĩa: Thầy Nakamura làm gì vào buổi sáng?\n• Quy tắc & Loại trừ: Trong bài thầy trả lời 「毎朝六時に起きて、午前中に小説を書きます」, các hoạt động giảng dạy ở đại học diễn ra vào buổi chiều và đi quán trọ vào ngày nghỉ."
      },
      {
        "id": "dk49-2",
        "question": "<ruby>中村<rt>なかむら</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は どうやって <ruby>仕事<rt>しごと</rt></ruby>を <ruby>続<rt>つづ</rt></ruby>けて いらっしゃいますか。",
        "options": [
          "<ruby>午後<rt>ごご</rt></ruby>だけ <ruby>仕事<rt>しごと</rt></ruby>を します",
          "<ruby>学生<rt>がくせい</rt></ruby>に <ruby>書<rt>か</rt></ruby>いて もらいます",
          "<ruby>家族<rt>かぞく</rt></ruby>に <ruby>読<rt>よ</rt></ruby>んで もらいます",
          "<ruby>音声<rt>おんせい</rt></ruby>ソフトを <ruby>利用<rt>りよう</rt></ruby>します"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Phương thức làm việc | Độ khó: Dễ | Trọng tâm: Thông tin về 利用します]\n• Dịch nghĩa: Thầy Nakamura tiếp tục công việc bằng cách nào?\n• Quy tắc & Loại trừ: Bài viết nêu rõ 「音声ソフトを利用して仕事を続けています」 (sử dụng phần mềm giọng nói); không nhắc đến việc nhờ sinh viên viết hộ hay chỉ làm buổi chiều."
      },
      {
        "id": "dk49-3",
        "question": "<ruby>仕事<rt>しごと</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>の <ruby>先生<rt>せんせい</rt></ruby>の <ruby>楽<rt>たの</rt></ruby>しみは <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "ケーキを <ruby>食<rt>た</rt></ruby>べること",
          "インタビューを <ruby>見<rt>み</rt></ruby>ること",
          "<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ること",
          "<ruby>学生<rt>がくせい</rt></ruby>と <ruby>話<rt>はな</rt></ruby>すこと"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết sở thích | Độ khó: Dễ | Trọng tâm: Thông tin về 召し上がります]\n• Dịch nghĩa: Niềm vui của thầy trước khi làm việc là gì?\n• Quy tắc & Loại trừ: Thầy nói 「仕事の前にケーキを食べるのが楽しみです」 (ăn bánh ngọt trước khi làm việc); suối nước nóng là hoạt động vào ngày nghỉ."
      },
      {
        "id": "dk49-4",
        "question": "<ruby>中村<rt>なかむら</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の <ruby>仕事<rt>しごと</rt></ruby>や <ruby>生活<rt>せいかつ</rt></ruby>について、<ruby>本文<rt>ほんぶん</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "<ruby>先生<rt>せんせい</rt></ruby>は <ruby>去年<rt>きょねん</rt></ruby> <ruby>賞<rt>しょう</rt></ruby>を <ruby>受賞<rt>じゅしょう</rt></ruby>しました",
          "<ruby>先生<rt>せんせい</rt></ruby>は <ruby>休日<rt>きゅうじつ</rt></ruby>に <ruby>旅館<rt>りょかん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>くことが あります",
          "<ruby>先生<rt>せんせい</rt></ruby>は <ruby>甘<rt>あま</rt></ruby>い <ruby>物<rt>もの</rt></ruby>が きらいです",
          "<ruby>先生<rt>せんせい</rt></ruby>は <ruby>午前中<rt>ごぜんちゅう</rt></ruby>に <ruby>大学<rt>だいがく</rt></ruby>で <ruby>教<rt>おし</rt></ruby>えます"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Đối chiếu nội dung | Độ khó: Trung bình | Trọng tâm: Khẳng định đúng với bài đọc]\n• Dịch nghĩa: Câu nào phù hợp với nội dung bài viết?\n• Quy tắc & Loại trừ: Đoạn văn ghi rõ 「休日は家族と温泉の旅館へ行くこともあります」; các phương án còn lại sai buổi dạy (chiều chứ không phải sáng), sai năm (năm nay chứ không phải năm ngoái) và sai sở thích."
      },
      {
        "id": "dk49-5",
        "question": "<ruby>中村<rt>なかむら</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は <ruby>読者<rt>どくしゃ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>と おっしゃいましたか。",
        "options": [
          "<ruby>才能<rt>さいのう</rt></ruby>を <ruby>発揮<rt>はっき</rt></ruby>して <ruby>毎日<rt>まいにち</rt></ruby>を <ruby>大切<rt>たいせつ</rt></ruby>にして ほしい",
          "<ruby>温泉<rt>おんせん</rt></ruby>の <ruby>旅館<rt>りょかん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>って ほしい",
          "<ruby>大学<rt>だいがく</rt></ruby>の <ruby>講師<rt>こうし</rt></ruby>に なって ほしい",
          "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>小説<rt>しょうせつ</rt></ruby>を <ruby>書<rt>か</rt></ruby>いて ほしい"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Thông điệp kết bài | Độ khó: Trung bình | Trọng tâm: Lời nhắn gửi của nhân vật]\n• Dịch nghĩa: Thầy Nakamura đã nhắn nhủ điều gì với độc giả?\n• Quy tắc & Loại trừ: Câu cuối cùng thầy nhắn 「皆さんも自分の才能を発揮して、毎日を大切にしてください」 (hãy phát huy tài năng của bản thân và trân trọng từng ngày)."
      }
    ],
    "translation": "Hôm nay chúng ta sẽ trò chuyện với nhà văn Nakamura, người đã nhận giải thưởng lớn trong năm nay. Phóng viên: \"Thưa thầy, rất nhiều người biết đến tác phẩm của thầy. Hằng ngày thầy dành thời gian như thế nào ạ?\" Nakamura: \"Tôi rất vui ạ. Sáng nào tôi cũng dậy lúc 6 giờ và viết tiểu thuyết vào buổi sáng. Tôi bị khiếm thị ở mắt nhưng vẫn sử dụng phần mềm giọng nói để tiếp tục công việc.\" Phóng viên: \"Ngày nào thầy cũng bận rộn nhỉ. Buổi chiều và ngày nghỉ thầy làm gì ạ?\" Nakamura: \"Buổi chiều tôi dạy sinh viên với tư cách là giảng viên đại học. Ngày nghỉ thỉnh thoảng tôi cũng đi quán trọ suối nước nóng cùng gia đình.\" Phóng viên: \"Nghe thầy nói thầy hay ăn đồ ngọt, có đúng không ạ?\" Nakamura: \"Vâng, việc ăn bánh ngọt trước khi làm việc là niềm vui của tôi.\" Phóng viên: \"Cuối cùng, xin thầy gửi một lời tới các độc giả đang xem buổi phỏng vấn này.\" Nakamura: \"Các bạn cũng hãy phát huy tài năng của bản thân và trân trọng từng ngày nhé.\""
  },
  {
    "id": "dokkai-50",
    "lessonId": "bai-50",
    "title": "Bài Đọc Hiểu - Bài 50 Minna",
    "subTitle": "Email xin hẹn gặp & báo cáo kết quả thăm khách hàng đối tác (Business client visit email with Kenjougo)",
    "description": "Học viên đọc email công việc sử dụng khiêm nhường ngữ để nắm bắt thông tin về thời gian, mục đích và hành động của người gửi đối với đối tác.",
    "passage": "ABC<ruby>株式会社<rt>かぶしきがいしゃ</rt></ruby>\n<ruby>田中<rt>たなか</rt></ruby><ruby>様<rt>さま</rt></ruby>\n\nいつも お<ruby>世話<rt>せわ</rt></ruby>に なって おります。\nIMCの ミラーで ございます。\n\n<ruby>先日<rt>せんじつ</rt></ruby>は お<ruby>忙<rt>いそが</rt></ruby>しいところ、お<ruby>時間<rt>じかん</rt></ruby>を いただき、<ruby>誠<rt>まこと</rt></ruby>に ありがとうございました。\n<ruby>田中<rt>たなか</rt></ruby><ruby>様<rt>さま</rt></ruby>に お<ruby>目<rt>め</rt></ruby>に かかることが できて、<ruby>大変<rt>たいへん</rt></ruby> <ruby>嬉<rt>うれ</rt></ruby>しく <ruby>存<rt>ぞん</rt></ruby>じます。\nお<ruby>話<rt>はなし</rt></ruby>した <ruby>新<rt>あたら</rt></ruby>しい <ruby>機械<rt>きかい</rt></ruby>について、<ruby>社<rt>しゃ</rt></ruby>に <ruby>帰<rt>かえ</rt></ruby>って <ruby>部長<rt>ぶちょう</rt></ruby>に <ruby>報告<rt>ほうこく</rt></ruby>いたしました。\n\nさて、さ<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>月曜日<rt>げつようび</rt></ruby>に また そちらへ <ruby>伺<rt>うかが</rt></ruby>いたいと <ruby>思<rt>おも</rt></ruby>っております。\n<ruby>新<rt>あたら</rt></ruby>しい <ruby>製品<rt>せいひん</rt></ruby>の カタログを お<ruby>持<rt>も</rt></ruby>ちいたします。\nまた、<ruby>先日<rt>せんじつ</rt></ruby> お<ruby>借<rt>か</rt></ruby>りした <ruby>資料<rt>しりょう</rt></ruby>も <ruby>拝見<rt>はいけん</rt></ruby>いたしましたので、そのとき お<ruby>返<rt>かえ</rt></ruby>しいたします。\n14<ruby>時<rt>じ</rt></ruby>ごろは よろしいでしょうか。\nもし ご<ruby>都合<rt>つごう</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>ければ、ほかの <ruby>日<rt>ひ</rt></ruby>に <ruby>参<rt>まい</rt></ruby>ります。\n\nメールか お<ruby>電話<rt>でんわ</rt></ruby>で お<ruby>返事<rt>へんじ</rt></ruby>を お<ruby>待<rt>ま</rt></ruby>ち しております。\nどうぞ よろしく お<ruby>願<rt>ねが</rt></ruby>い いたします。\n\nミラーより",
    "questions": [
      {
        "id": "dk50-1",
        "question": "ミラーさんは いつ <ruby>田中<rt>たなか</rt></ruby>さんに <ruby>会<rt>あ</rt></ruby>いに <ruby>行<rt>い</rt></ruby>きたいと <ruby>言<rt>い</rt></ruby>っていますか。",
        "options": [
          "<ruby>今日<rt>きょう</rt></ruby>の 14<ruby>時<rt>じ</rt></ruby>",
          "さ<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>月曜日<rt>げつようび</rt></ruby>",
          "<ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>月曜日<rt>げつようび</rt></ruby>",
          "<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>月曜日<rt>げつようび</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Chi tiết cụ thể | Độ khó: Dễ | Trọng tâm: Thời gian]\n• Dịch nghĩa: Miller nói muốn đi gặp ông Tanaka vào khi nào?\n• Quy tắc & Loại trừ: Trong bài viết 「さ来週の月曜日にまたそちらへ伺いたい」 (Tôi muốn đến đó vào thứ Hai tuần sau nữa). Do đó 「さ来週の月曜日」 là đáp án đúng."
      },
      {
        "id": "dk50-2",
        "question": "ミラーさんは <ruby>何<rt>なに</rt></ruby>を するために <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "<ruby>新<rt>あたら</rt></ruby>しい カタログを <ruby>届<rt>とど</rt></ruby>けるため",
          "<ruby>製品<rt>せいひん</rt></ruby>を <ruby>買<rt>か</rt></ruby>うため",
          "<ruby>工場<rt>こうじょう</rt></ruby>を <ruby>見学<rt>けんがく</rt></ruby>するため",
          "お<ruby>礼<rt>れい</rt></ruby>を <ruby>言<rt>い</rt></ruby>うため"
        ],
        "correctIdx": 0,
        "explanation": "[Kỹ năng Đọc hiểu • Lý do / Mục đích | Độ khó: Trung bình | Trọng tâm: Mục đích hành động]\n• Dịch nghĩa: Miller đi để làm gì?\n• Quy tắc & Loại trừ: Bài viết có câu 「新しい製品のカタログをお持ちいたします」 (Tôi xin phép mang catalogue sản phẩm mới đến). 「お持ちする」 tương đương với việc mang đến/gửi đến (届ける)."
      },
      {
        "id": "dk50-3",
        "question": "「お<ruby>目<rt>め</rt></ruby>に かかる」とは どういう <ruby>意味<rt>いみ</rt></ruby>ですか。",
        "options": [
          "<ruby>見<rt>み</rt></ruby>る",
          "<ruby>会<rt>あ</rt></ruby>う",
          "<ruby>行<rt>い</rt></ruby>く",
          "<ruby>聞<rt>き</rt></ruby>く"
        ],
        "correctIdx": 1,
        "explanation": "[Kỹ năng Đọc hiểu • Từ vựng kính ngữ | Độ khó: Dễ | Trọng tâm: Nghĩa của khiêm nhường ngữ]\n• Dịch nghĩa: 「お目にかかる」 có nghĩa là gì?\n• Quy tắc & Loại trừ: Đây là khiêm nhường ngữ đặc biệt của động từ 「会う」 (Gặp mặt). 「見る」 là 「拝見する」, 「聞く」 là 「伺う」, 「行く」 là 「参る/伺う」."
      },
      {
        "id": "dk50-4",
        "question": "ミラーさんの メールの <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>っている ものは どれですか。",
        "options": [
          "ミラーさんは もう カタログを <ruby>送<rt>おく</rt></ruby>った。",
          "ミラーさんは <ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>月曜日<rt>げつようび</rt></ruby>に <ruby>行<rt>い</rt></ruby>く。",
          "ミラーさんは <ruby>田中<rt>たなか</rt></ruby>さんの <ruby>家<rt>いえ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きたい。",
          "ミラーさんは <ruby>前<rt>まえ</rt></ruby>にも <ruby>田中<rt>たなか</rt></ruby>さんに <ruby>会<rt>あ</rt></ruby>ったことが ある。"
        ],
        "correctIdx": 3,
        "explanation": "[Kỹ năng Đọc hiểu • Xác nhận nội dung | Độ khó: Trung bình | Trọng tâm: Đọc hiểu tổng quát]\n• Dịch nghĩa: Câu nào đúng với nội dung bài văn?\n• Quy tắc & Loại trừ: Câu đầu 「先日...お時間をいただき」 cho thấy họ đã gặp nhau trước đó. Phương án 「来週」 sai vì bài nói 「さ来週」. Phương án 「家」 sai vì đây là email công việc gửi đến công ty. Phương án 「もう送った」 sai vì Miller định mang đến vào tuần sau nữa."
      },
      {
        "id": "dk50-5",
        "question": "この <ruby>文章<rt>ぶんしょう</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んだ ミラーさんは、メールの <ruby>後<rt>あと</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "すぐに <ruby>田中<rt>たなか</rt></ruby>さんの <ruby>所<rt>ところ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く。",
          "<ruby>新<rt>あたら</rt></ruby>しい カタログを <ruby>作<rt>つく</rt></ruby>る。",
          "<ruby>田中<rt>たなか</rt></ruby>さんの <ruby>返事<rt>へんじ</rt></ruby>を <ruby>待<rt>ま</rt></ruby>つ。",
          "<ruby>電話<rt>でんわ</rt></ruby>で <ruby>田中<rt>たなか</rt></ruby>さんと <ruby>話<rt>はな</rt></ruby>す。"
        ],
        "correctIdx": 2,
        "explanation": "[Kỹ năng Đọc hiểu • Hành động tiếp theo | Độ khó: Dễ | Trọng tâm: Kết thúc email]\n• Dịch nghĩa: Miller sẽ làm gì sau email này?\n• Quy tắc & Loại trừ: Cuối email Miller viết 「お返事をお待ちしております」 (Tôi đang đợi phản hồi của ông). Vì vậy hành động tiếp theo là chờ đợi câu trả lời về lịch hẹn."
      }
    ],
    "translation": "Kính gửi ông Tanaka, công ty cổ phần ABC.\n\nCảm ơn ông đã luôn giúp đỡ chúng tôi.\nTôi là Miller đến từ công ty IMC.\n\nCảm ơn ông rất nhiều vì đã dành thời gian cho tôi dù bận rộn vào ngày hôm trước.\nTôi cảm thấy rất vui khi được gặp mặt ông Tanaka.\nVề chiếc máy mới mà chúng ta đã trao đổi, sau khi về công ty tôi đã báo cáo lại với trưởng phòng.\n\nVề việc tiếp theo, tôi dự định sẽ đến thăm quý công ty vào thứ Hai tuần sau nữa.\nTôi xin phép mang theo danh mục sản phẩm mới đến.\nNgoài ra, tôi cũng đã xem qua tài liệu mượn hôm trước nên lúc đó xin phép gửi trả lại ông.\nKhoảng 14 giờ có được không ạ?\nNếu không tiện cho ông thì tôi sẽ đến vào ngày khác.\n\nTôi xin đợi phản hồi qua email hoặc điện thoại của ông.\nTrân trọng cảm ơn ông.\n\nTừ Miller"
  }
];
