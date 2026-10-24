const fs = require('fs');

const lessons_46_50 = [
  // BÀI 46
  {
    "id": "bai-46",
    "title": "Bài 46: Thời Điểm Của Hành Động (〜ところ / 〜ばかり) & Chắc Chắn 〜はず",
    "level": "Minna no Nihongo N4 (Bài 46)",
    "badge": "Thời điểm & Chắc chắn",
    "description": "Các giai đoạn của hành động với V-る ところ (sắp sửa), V-ている ところ (đang lúc), V-た ところ (vừa mới xong), vừa hoàn thành theo cảm nhận với V-た ばかり, và phán đoán chắc chắn với 〜はずです.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>渡<rt>わた</rt></ruby>します</span>",
        "hiragana": "わたします",
        "meaning": "Trao tận tay, đưa cho",
        "type": "Động từ nhóm 1",
        "example": "先生に レポートを 渡します。(Trao báo cáo tận tay thầy giáo.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>帰<rt>かえ</rt></ruby>って <ruby>来<rt>き</rt></ruby>ます</span>",
        "hiragana": "かえってきます",
        "meaning": "Quay trở về nơi xuất phát",
        "type": "Động từ nhóm 3",
        "example": "母が 帰って 来ました。(Mẹ đã về đến nhà rồi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出<rt>で</rt></ruby>ます</span>",
        "hiragana": "でます",
        "meaning": "Khởi hành, xuất phát (xe buýt - バスが〜)",
        "type": "Động từ nhóm 2",
        "example": "バスが 出ます。(Xe buýt chuẩn bị lăn bánh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>焼<rt>や</rt></ruby>きます</span>",
        "hiragana": "やきます",
        "meaning": "Nướng (bánh mì, thịt - tha động từ)",
        "type": "Động từ nhóm 1",
        "example": "パンを 焼きます。(Nướng bánh mì.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>焼<rt>や</rt></ruby>けます</span>",
        "hiragana": "やけます",
        "meaning": "Chín, nướng xong (bánh chín - tự động từ)",
        "type": "Động từ nhóm 2",
        "example": "パンが 焼けました。(Bánh mì đã nướng chín vàng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>留守<rt>るす</rt></ruby></span>",
        "hiragana": "るす",
        "meaning": "Vắng nhà",
        "type": "Danh từ",
        "example": "留守の 間に 荷物が 届きました。(Hàng giao đến trong lúc vắng nhà.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>宅配便<rt>たくはいびん</rt></ruby></span>",
        "hiragana": "たくはいびん",
        "meaning": "Dịch vụ chuyển phát nhanh tận nhà",
        "type": "Danh từ",
        "example": "宅配便で 送ります。(Gửi bằng dịch vụ chuyển phát nhanh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>原因<rt>げんいん</rt></ruby></span>",
        "hiragana": "げんいん",
        "meaning": "Nguyên nhân gốc rễ",
        "type": "Danh từ",
        "example": "事故の 原因 (Nguyên nhân xảy ra tai nạn)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>半年<rt>はんとし</rt></ruby></span>",
        "hiragana": "はんとし",
        "meaning": "Nửa năm, 6 tháng",
        "type": "Danh từ",
        "example": "半年 まえに 来ました。(Đã đến đây nửa năm trước.)"
      },
      {
        "kanji": "ちょうど",
        "hiragana": "ちょうど",
        "meaning": "Vừa đúng lúc, đúng boong",
        "type": "Phó từ",
        "example": "ちょうど 今 終わりました。(Đúng lúc vừa mới xong.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>今<rt>いま</rt></ruby>いいですか</span>",
        "hiragana": "いまいいですか",
        "meaning": "Bây giờ có tiện nói chuyện không?",
        "type": "Câu giao tiếp",
        "example": "すみません、今いいですか。(Xin lỗi, bây giờ anh có tiện nói chuyện một chút không ạ?)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-る / V-ている / V-た + ところです (Các thời điểm hành động)",
        "explanation": "• V-る ところです: Đang chuẩn bị, sắp sửa thực hiện ngay lập tức (今から 出かけるところです).\n• V-ている ところです: Đang ngay trong quá trình thực hiện hành động (今 調べているところです).\n• V-た ところです: Vừa mới dứt điểm xong hành động trong tích tắc (たった今 終わったところです).",
        "caution": "V-た ところです chỉ dùng cho việc vừa diễn ra cách vài giây/vài phút.",
        "examples": [
          {
            "type": "sentence",
            "context": "Vừa chuẩn bị ăn cơm thì có điện thoại",
            "jp": "これから ご飯を <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べる</span>ところです。",
            "rawJp": "これからご飯を食べるところです。",
            "vi": "Tôi đang chuẩn bị ăn cơm đây."
          }
        ]
      },
      {
        "structure": "2. V-た ばかりです (Vừa mới làm gì theo cảm nhận)",
        "explanation": "Diễn tả hành động đã hoàn tất nhưng người nói cảm thấy thời gian trôi qua chưa lâu (có thể là vài ngày, vài tuần hay vài tháng).",
        "caution": "Phân biệt với V-た ところ (thời gian thực tế cực ngắn trong vài phút), V-た ばかり dựa vào cảm nhận chủ quan.",
        "examples": [
          {
            "type": "sentence",
            "context": "Mới sang Nhật được 3 tháng",
            "jp": "3か<span class=\"furigana\"><ruby>月<rt>げつ</rt></ruby></span>まえに <span class=\"furigana\"><ruby>日本<rt>にほん</rt></ruby></span>へ <span class=\"furigana\"><ruby>来<rt>き</rt></ruby>た</span>ばかりです。",
            "rawJp": "3か月まえに日本へ来たばかりです。",
            "vi": "Tôi mới sang Nhật được 3 tháng thôi."
          }
        ]
      },
      {
        "structure": "3. [Thể thông thường] + はずです (Chắc chắn là...)",
        "explanation": "Diễn tả sự phán đoán của người nói với độ tin cậy chắc chắn gần như 100% dựa trên căn cứ, lý do hoặc lịch trình cụ thể.",
        "caution": "Tính từ đuôi な thêm な, Danh từ thêm の trước はずです (休みなはず、病気のはず).",
        "examples": [
          {
            "type": "sentence",
            "context": "Bạn hẹn là người đúng giờ",
            "jp": "ミラーさんは もう <span class=\"furigana\"><ruby>来<rt>く</rt></ruby>る</span>はずです。",
            "rawJp": "ミラーさんはもう来るはずです。",
            "vi": "Chắc chắn là anh Miller sẽ đến ngay bây giờ thôi."
          }
        ]
      }
    ]
  },

  // BÀI 47
  {
    "id": "bai-47",
    "title": "Bài 47: Truyền Đạt Tin Đồn 〜そうです & Cảm Nhận Suy Đoán 〜ようです",
    "level": "Minna no Nihongo N4 (Bài 47)",
    "badge": "Truyền đạt & Giác quan",
    "description": "Truyền đạt lại thông tin nghe được gián tiếp với [Thể thông thường] + そうです (kèm nguồn tin 〜によると), và phán đoán dựa trên cảm nhận giác quan với [Thể thông thường] + ようです.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>集<rt>あつ</rt></ruby>まります</span>",
        "hiragana": "あつまります",
        "meaning": "Tập hợp lại, tụ tập (người tập trung - 人が〜)",
        "type": "Động từ nhóm 1",
        "example": "駅前に 人が 集まります。(Mọi người tập trung trước ga.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>別<rt>わか</rt></ruby>れます</span>",
        "hiragana": "わかれます",
        "meaning": "Chia tay, ly biệt (người chia tay - 人が〜)",
        "type": "Động từ nhóm 2",
        "example": "友だちと 別れました。(Đã chia tay bạn bè.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>長生<rt>ながい</rt></ruby>きします</span>",
        "hiragana": "ながいきします",
        "meaning": "Sống lâu, thọ",
        "type": "Động từ nhóm 3",
        "example": "おじいさんは 長生きしました。(Ông tôi đã sống rất thọ.)"
      },
      {
        "kanji": "します",
        "hiragana": "します",
        "meaning": "Phát ra (mùi hương, âm thanh - 音/声/におい/味が〜)",
        "type": "Động từ nhóm 3",
        "example": "いい においが します。(Có mùi thơm tỏa ra.)"
      },
      {
        "kanji": "さします",
        "hiragana": "さします",
        "meaning": "Che ô, giương ô (傘を〜)",
        "type": "Động từ nhóm 1",
        "example": "傘を さして 歩きます。(Che ô đi bộ.)"
      },
      {
        "kanji": "ひどい",
        "hiragana": "ひどい",
        "meaning": "Kinh khủng, tồi tệ",
        "type": "Tính từ (i)",
        "example": "ひどい 雨 (Trận mưa kinh hoàng)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>天気予報<rt>てんきよほう</rt></ruby></span>",
        "hiragana": "てんきよほう",
        "meaning": "Bản tin dự báo thời tiết",
        "type": "Danh từ",
        "example": "天気予報に よると (Theo như bản tin dự báo thời tiết)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>発表<rt>はっぴょう</rt></ruby></span>",
        "hiragana": "はっぴょう",
        "meaning": "Bản phát biểu, báo cáo thuyết trình",
        "type": "Danh từ",
        "example": "研究の 発表 (Báo cáo kết quả nghiên cứu)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>人口<rt>じんこう</rt></ruby></span>",
        "hiragana": "じんこう",
        "meaning": "Dân số",
        "type": "Danh từ",
        "example": "日本の 人口 (Dân số Nhật Bản)"
      },
      {
        "kanji": "におい",
        "hiragana": "におい",
        "meaning": "Mùi hương, mùi vị",
        "type": "Danh từ",
        "example": "花の におい (Mùi hương của hoa)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby></span>",
        "hiragana": "きゅうきゅうしゃ",
        "meaning": "Xe cứu thương",
        "type": "Danh từ",
        "example": "救急車を 呼びます。(Gọi xe cứu thương cấp cứu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>賛成<rt>さんせい</rt></ruby></span>",
        "hiragana": "さんせい",
        "meaning": "Tán thành, đồng ý",
        "type": "Danh từ",
        "example": "意見に 賛成します。(Đồng tình với ý kiến.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>反対<rt>はんたい</rt></ruby></span>",
        "hiragana": "はんたい",
        "meaning": "Phản đối, đối nghịch",
        "type": "Danh từ",
        "example": "計画に 反対です。(Phản đối kế hoạch.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. [Thể thông thường] + そうです (Nghe nói là - Truyền đạt)",
        "explanation": "Dùng để truyền đạt lại nguyên vẹn thông tin mà người nói đã nghe được từ người khác hoặc qua truyền thông (báo đài, tivi).",
        "caution": "Khác với 〜そうです (trông có vẻ ở Bài 43 bỏ ます/い), 〜そうです truyền đạt giữ nguyên thể thông thường (kể cả だ đối với Tính từ đuôi な và Danh từ: 雨だそうです、きれいだそうです). Thường đi với 〜によると (theo như).",
        "examples": [
          {
            "type": "sentence",
            "context": "Theo dự báo thời tiết thì mai có mưa",
            "jp": "<span class=\"furigana\"><ruby>天気予報<rt>てんきよほう</rt></ruby></span>に よると、<span class=\"furigana\"><ruby>明日<rt>あした</rt></ruby></span>は <span class=\"furigana\"><ruby>雨<rt>あめ</rt></ruby></span>が <span class=\"furigana\"><ruby>降<rt>ふ</rt></ruby>る</span>そうです。",
            "rawJp": "天気予報によると、明日は雨が降るそうです。",
            "vi": "Theo dự báo thời tiết thì nghe nói ngày mai trời sẽ mưa."
          }
        ]
      },
      {
        "structure": "2. [Thể thông thường] + ようです (Hình như là - Suy đoán giác quan)",
        "explanation": "Diễn tả sự suy đoán của người nói dựa trên những gì trực tiếp cảm nhận được từ các giác quan (nhìn, nghe, ngửi mùi...).",
        "caution": "Tính từ đuôi な thêm な, Danh từ thêm の trước ようです (病気のようです、静かなようです).",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhìn bên ngoài thấy người đi lại mặc áo ấm",
            "jp": "<span class=\"furigana\"><ruby>外<rt>そと</rt></ruby></span>は <span class=\"furigana\"><ruby>寒<rt>さむ</rt></ruby>い</span>ようです。",
            "rawJp": "外は寒いようです。",
            "vi": "Hình như bên ngoài trời rất lạnh."
          }
        ]
      }
    ]
  },

  // BÀI 48
  {
    "id": "bai-48",
    "title": "Bài 48: Thể Sai Khiến (使役形: しえきけい)",
    "level": "Minna no Nihongo N4 (Bài 48)",
    "badge": "Thể sai khiến",
    "description": "Cách chia và sử dụng Động từ thể sai khiến (使役形: 行かせる、食べさせる), phân biệt sai khiến với nội động từ (Aは Bを V-使役) và ngoại động từ (Aは Bに Nを V-使役), và cách xin phép lịch sự 〜させて いただけませんか.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>降<rt>お</rt></ruby>ろします</span>",
        "hiragana": "おろします",
        "meaning": "Bốc dỡ, hạ hàng hóa xuống (荷物を〜)",
        "type": "Động từ nhóm 1",
        "example": "トラックから 荷物を 降ろします。(Dỡ hàng xuống khỏi xe tải.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>届<rt>とど</rt></ruby>けます</span>",
        "hiragana": "とどけます",
        "meaning": "Giao hàng tận nơi (tha động từ)",
        "type": "Động từ nhóm 2",
        "example": "荷物を 届けます。(Giao bưu kiện đến tận nơi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>世話<rt>せわ</rt></ruby>を します</span>",
        "hiragana": "せわをします",
        "meaning": "Chăm sóc, trông nom",
        "type": "Cụm động từ",
        "example": "犬の 世話を します。(Chăm sóc cho chú chó.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>録音<rt>ろくおん</rt></ruby>します</span>",
        "hiragana": "ろくおんします",
        "meaning": "Thu âm, ghi âm tiếng",
        "type": "Động từ nhóm 3",
        "example": "声を 録音します。(Thu âm giọng nói.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>嫌<rt>いや</rt></ruby>な</span>",
        "hiragana": "いやな",
        "meaning": "Ghét, khó chịu, không ưa",
        "type": "Tính từ (na)",
        "example": "嫌な 仕事 (Công việc khó chịu)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>厳<rt>きび</rt></ruby>しい</span>",
        "hiragana": "きびしい",
        "meaning": "Nghiêm khắc, khắt khe",
        "type": "Tính từ (i)",
        "example": "厳しい 先生 (Thầy giáo nghiêm khắc)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>塾<rt>じゅく</rt></ruby></span>",
        "hiragana": "じゅく",
        "meaning": "Lò luyện thi, lớp học thêm",
        "type": "Danh từ",
        "example": "塾に 通います。(Đi học ở lò luyện thi.)"
      },
      {
        "kanji": "スケジュール",
        "hiragana": "スケジュール",
        "meaning": "Lịch trình công tác, thời gian biểu",
        "type": "Danh từ",
        "example": "スケジュールを 確認します。(Xác nhận lại lịch trình.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>生徒<rt>せいと</rt></ruby></span>",
        "hiragana": "せいと",
        "meaning": "Học sinh (cấp 2, cấp 3)",
        "type": "Danh từ",
        "example": "学校の 生徒 (Học sinh của trường)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>自由<rt>じゆう</rt></ruby>に</span>",
        "hiragana": "じゆうに",
        "meaning": "Tự do, thoải mái",
        "type": "Phó từ",
        "example": "自由に使ってください。(Hãy sử dụng một cách thoải mái.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Cách chia Động từ Thể sai khiến (使役形)",
        "explanation": "• Nhóm 1: Chuyển âm cuối cột [u] sang cột [a] + せる (書く -> 書かせる、行く -> 行かせる、飲む -> 飲ませる).\n• Nhóm 2: Bỏ る thêm させる (食べる -> 食べさせる、見る -> 見させる).\n• Nhóm 3: くる -> こさせる, する -> させる.",
        "caution": "Sau khi chia, tất cả động từ thể sai khiến đều trở thành động từ nhóm 2.",
        "examples": [
          {
            "type": "sentence",
            "context": "Bắt con ăn rau xanh",
            "jp": "<span class=\"furigana\"><ruby>子<rt>こ</rt></ruby>ども</span>に <span class=\"furigana\"><ruby>野菜<rt>やさい</rt></ruby></span>を <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べさせます</span>。",
            "rawJp": "子どもに野菜を食べさせます。",
            "vi": "Tôi bắt con tôi phải ăn rau xanh."
          }
        ]
      },
      {
        "structure": "2. Phân biệt Trợ từ: Nội động từ (〜を) vs Ngoại động từ (〜に)",
        "explanation": "• Với nội động từ (không có tân ngữ): Người bị sai khiến đi với を (妹を 買い物に 行かせます).\n• Với ngoại động từ (có tân ngữ を): Người bị sai khiến đi với に (子どもに 本を 読ませます).",
        "caution": "Tránh lặp lại hai trợ từ を trong cùng một câu đơn.",
        "examples": [
          {
            "type": "sentence",
            "context": "Cho con đi du học",
            "jp": "<span class=\"furigana\"><ruby>息子<rt>むすこ</rt></ruby></span>を アメリカへ <span class=\"furigana\"><ruby>留学<rt>りゅうがく</rt></ruby>させます</span>。",
            "rawJp": "息子をアメリカへ留学させます。",
            "vi": "Tôi cho con trai tôi đi du học ở Mỹ."
          }
        ]
      },
      {
        "structure": "3. V-使役-て いただけませんか (Xin phép cho tôi được làm gì)",
        "explanation": "Mẫu câu xin phép vô cùng lịch sự trong môi trường công sở: Hãy cho phép tôi được làm việc gì đó.",
        "caution": "Hành động thực hiện là do bản thân người nói làm (không phải người nghe làm).",
        "examples": [
          {
            "type": "sentence",
            "context": "Xin phép về sớm vì ốm",
            "jp": "<span class=\"furigana\"><ruby>今日<rt>きょう</rt></ruby></span>は <span class=\"furigana\"><ruby>早<rt>はや</rt></ruby>く</span> <span class=\"furigana\"><ruby>帰<rt>かえ</rt></ruby>らせて</span> いただけませんか。",
            "rawJp": "今日は早く帰らせていただけませんか。",
            "vi": "Hôm nay xin phép cho tôi được về sớm có được không ạ?"
          }
        ]
      }
    ]
  },

  // BÀI 49
  {
    "id": "bai-49",
    "title": "Bài 49: Tôn Kính Ngữ (尊敬語: そんけいご)",
    "level": "Minna no Nihongo N4 (Bài 49)",
    "badge": "Tôn kính ngữ",
    "description": "Các hình thức nâng cao vị thế của người đối thoại: Động từ tôn kính đặc biệt (いらっしゃる、召し上がる...), công thức quy tắc お/ご〜になります, thể bị động dùng làm tôn kính, và lời mời lịch sự お/ご〜ください.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>勤<rt>つと</rt></ruby>めます</span>",
        "hiragana": "つとめます",
        "meaning": "Làm việc, cống hiến tại (công ty - 会社に〜)",
        "type": "Động từ nhóm 2",
        "example": "銀行に 勤めて います。(Làm việc tại ngân hàng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>休<rt>やす</rt></ruby>みます</span>",
        "hiragana": "やすみます",
        "meaning": "Nghỉ ngơi, ngủ",
        "type": "Động từ nhóm 1",
        "example": "ゆっくり 休んでください。(Hãy nghỉ ngơi thong thả nhé.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>過<rt>す</rt></ruby>ごします</span>",
        "hiragana": "すごします",
        "meaning": "Trải qua thời gian",
        "type": "Động từ nhóm 1",
        "example": "週末を 楽しく 過ごしました。(Đã trải qua ngày cuối tuần thật vui vẻ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>寄<rt>よ</rt></ruby>ります</span>",
        "hiragana": "よります",
        "meaning": "Ghé qua tạt vào (ngân hàng - 銀行に〜)",
        "type": "Động từ nhóm 1",
        "example": "帰りに スーパーに 寄ります。(Trên đường về ghé vào siêu thị.)"
      },
      {
        "kanji": "いらっしゃいます",
        "hiragana": "いらっしゃいます",
        "meaning": "Đi, đến, ở (tôn kính của 行きます、来ます、います)",
        "type": "Động từ nhóm 1",
        "example": "先生は 教室に いらっしゃいます。(Thầy giáo đang ở trong lớp học.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がります</span>",
        "hiragana": "めしあがります",
        "meaning": "Ăn, uống (tôn kính của 食べます、飲みます)",
        "type": "Động từ nhóm 1",
        "example": "何を 召し上がりますか。(Ngài dùng món gì ạ?)"
      },
      {
        "kanji": "おっしゃいます",
        "hiragana": "おっしゃいます",
        "meaning": "Nói (tôn kính của 言います)",
        "type": "Động từ nhóm 1",
        "example": "社長が そう おっしゃいました。(Giám đốc đã nói như thế ạ.)"
      },
      {
        "kanji": "なさいます",
        "hiragana": "なさいます",
        "meaning": "Làm (tôn kính của します)",
        "type": "Động từ nhóm 1",
        "example": "テニスを なさいますか。(Ngài có chơi tennis không ạ?)"
      },
      {
        "kanji": "ご<span class=\"furigana\"><ruby>覧<rt>らん</rt></ruby>に なります</span>",
        "hiragana": "ごらんになります",
        "meaning": "Xem, nhìn (tôn kính của 見ます)",
        "type": "Cụm động từ",
        "example": "この 資料を ご覧に なりましたか。(Ngài đã xem tài liệu này chưa ạ?)"
      },
      {
        "kanji": "ご<span class=\"furigana\"><ruby>存<rt>ぞん</rt></ruby>じです</span>",
        "hiragana": "ごぞんじです",
        "meaning": "Biết (tôn kính của 知っています)",
        "type": "Cụm danh từ",
        "example": "先生の 電話番号を ご存じですか。(Ngài có biết số điện thoại của thầy không ạ?)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>旅館<rt>りょかん</rt></ruby></span>",
        "hiragana": "りょかん",
        "meaning": "Khách sạn/nhà trọ truyền thống kiểu Nhật",
        "type": "Danh từ",
        "example": "京都の 旅館 (Nhà trọ truyền thống ở Kyoto)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>会場<rt>かいじょう</rt></ruby></span>",
        "hiragana": "かいじょう",
        "meaning": "Hội trường tổ chức sự kiện",
        "type": "Danh từ",
        "example": "結婚式の 会場 (Hội trường tiệc cưới)"
      },
      {
        "kanji": "〜<span class=\"furigana\"><ruby>様<rt>さま</rt></ruby></span>",
        "hiragana": "〜さま",
        "meaning": "Ngài, quý khách (cách xưng hô trang trọng hơn 〜さん)",
        "type": "Hậu tố xưng hô",
        "example": "お客様 (Kính thưa quý khách)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Động từ Tôn kính đặc biệt",
        "explanation": "• 行く / 来る / いる -> いらっしゃる\n• 食べる / 飲む -> 召し上がる (めしあがる)\n• 言う -> おっしゃる\n• する -> なさる\n• 見る -> ご覧になる (ごらんになる)\n• 知っている -> ご存じだ (ごぞんじだ).",
        "caution": "Tuyệt đối không dùng tôn kính ngữ cho hành động của chính bản thân mình.",
        "examples": [
          {
            "type": "sentence",
            "context": "Hỏi giám đốc đã ăn trưa chưa",
            "jp": "<span class=\"furigana\"><ruby>社長<rt>しゃちょう</rt></ruby></span>は もう お<span class=\"furigana\"><ruby>昼<rt>ひる</rt></ruby></span>ご<span class=\"furigana\"><ruby>飯<rt>はん</rt></ruby></span>を <span class=\"furigana\"><ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりました</span>か。",
            "rawJp": "社長はもうお昼ご飯を召し上がりましたか。",
            "vi": "Giám đốc đã dùng bữa trưa chưa ạ?"
          }
        ]
      },
      {
        "structure": "2. お + V (Nhóm 1, 2 bỏ ます) + に なります (Tôn kính quy tắc)",
        "explanation": "Với các động từ không có dạng đặc biệt, ta thêm tiền tố お phía trước gốc động từ và thêm に なります phía sau để biến thành câu tôn kính.",
        "caution": "Với động từ nhóm 3 (dạng Hán tự + します) thì dùng: ご + Danh từ + に なります (ご出席に なります).",
        "examples": [
          {
            "type": "sentence",
            "context": "Thầy giáo đang đọc báo",
            "jp": "<span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>は <span class=\"furigana\"><ruby>新聞<rt>しんぶん</rt></ruby></span>を お<span class=\"furigana\"><ruby>読<rt>よ</rt></ruby>みに</span> なって います。",
            "rawJp": "先生は新聞をお読みになっています。",
            "vi": "Thầy giáo đang đọc báo ạ."
          }
        ]
      },
      {
        "structure": "3. お / ご + V (bỏ ます) + ください (Lời mời lịch sự)",
        "explanation": "Dùng để đưa ra lời mời hoặc đề nghị lịch sự với khách hàng hoặc người trên.",
        "caution": "Lịch sự và trang trọng hơn rất nhiều so với 〜てください.",
        "examples": [
          {
            "type": "sentence",
            "context": "Mời khách ngồi vào ghế",
            "jp": "どうぞ こちらに お<span class=\"furigana\"><ruby>掛<rt>か</rt></ruby>け</span> ください。",
            "rawJp": "どうぞこちらにお掛けください。",
            "vi": "Kính mời quý khách ngồi vào ghế phía bên này ạ."
          }
        ]
      }
    ]
  },

  // BÀI 50
  {
    "id": "bai-50",
    "title": "Bài 50: Khiêm Nhường Ngữ (謙譲語: けんじょうご) & Thể Lịch Sự",
    "level": "Minna no Nihongo N4 (Bài 50)",
    "badge": "Khiêm nhường & Lịch sự",
    "description": "Các hình thức hạ mình khiêm tốn của người nói để tôn vinh người nghe: Động từ khiêm nhường đặc biệt (参る、おる、申す、いたす...), công thức quy tắc お/ご〜します, và các từ ngữ lịch sự trang trọng (ございます、よろしいでしょうか).",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>参<rt>まい</rt></ruby>ります</span>",
        "hiragana": "まいります",
        "meaning": "Đi, đến (khiêm nhường của 行きます、来ます)",
        "type": "Động từ nhóm 1",
        "example": "明日 10時に 参ります。(Ngày mai đúng 10 giờ tôi xin phép có mặt.)"
      },
      {
        "kanji": "おります",
        "hiragana": "おります",
        "meaning": "Ở, có mặt (khiêm nhường của います)",
        "type": "Động từ nhóm 1",
        "example": "東京に おります。(Tôi hiện đang ở Tokyo.)"
      },
      {
        "kanji": "いただきます",
        "hiragana": "いただきます",
        "meaning": "Ăn, uống, nhận (khiêm nhường của 食べます、飲みます、もらいます)",
        "type": "Động từ nhóm 1",
        "example": "美味しく いただきます。(Tôi xin phép dùng bữa thật ngon miệng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>申<rt>もう</rt></ruby>します</span>",
        "hiragana": "もうします",
        "meaning": "Nói, tên là (khiêm nhường của 言います)",
        "type": "Động từ nhóm 1",
        "example": "ミラーと 申します。(Tôi tên là Miller.)"
      },
      {
        "kanji": "いたします",
        "hiragana": "いたします",
        "meaning": "Làm (khiêm nhường của します)",
        "type": "Động từ nhóm 1",
        "example": "わたしが いたします。(Tôi xin phép được làm việc đó.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>拝見<rt>はいけん</rt></ruby>します</span>",
        "hiragana": "はいけんします",
        "meaning": "Xem, nhìn (khiêm nhường của 見ます)",
        "type": "Động từ nhóm 3",
        "example": "資料を 拝見します。(Tôi xin phép được xem tài liệu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>存<rt>ぞん</rt></ruby>じて おります</span>",
        "hiragana": "ぞんじております",
        "meaning": "Biết (khiêm nhường của 知っています)",
        "type": "Cụm động từ",
        "example": "その件は よく 存じて おります。(Việc đó tôi biết rất rõ ạ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>伺<rt>うかが</rt></ruby>います</span>",
        "hiragana": "うかがいます",
        "meaning": "Đến thăm, hỏi, nghe (khiêm nhường của 聞きます、行きます)",
        "type": "Động từ nhóm 1",
        "example": "お宅へ 伺います。(Tôi xin phép ghé thăm nhà quý vị.)"
      },
      {
        "kanji": "お<span class=\"furigana\"><ruby>目<rt>め</rt></ruby>に かかります</span>",
        "hiragana": "おめにかかります",
        "meaning": "Gặp mặt (khiêm nhường của 会います)",
        "type": "Cụm động từ",
        "example": "先生に お目に かかります。(Được diện kiến gặp mặt thầy.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>私<rt>わたくし</rt></ruby></span>",
        "hiragana": "わたくし",
        "meaning": "Tôi (cách nói khiêm tốn của わたし)",
        "type": "Đại từ",
        "example": "わたくしが 担当します。(Tôi xin chịu trách nhiệm phụ trách.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>用意<rt>ようい</rt></ruby>します</span>",
        "hiragana": "よういします",
        "meaning": "Chuẩn bị sẵn sàng",
        "type": "Động từ nhóm 3",
        "example": "資料を 用意します。(Chuẩn bị sẵn tài liệu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>感謝<rt>かんしゃ</rt></ruby>します</span>",
        "hiragana": "かんしゃします",
        "meaning": "Cảm tạ, biết ơn sâu sắc",
        "type": "Động từ nhóm 3",
        "example": "心から 感謝します。(Biết ơn sâu sắc từ tận đáy lòng.)"
      },
      {
        "kanji": "ございます",
        "hiragana": "ございます",
        "meaning": "Có (thể lịch sự trang trọng của あります)",
        "type": "Động từ",
        "example": "電話の 横に ございます。(Điện thoại nằm ở ngay bên cạnh ạ.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Động từ Khiêm nhường đặc biệt",
        "explanation": "• 行く / 来る -> 参る (まいる)\n• いる -> おる\n• 食べる / 飲む / もらう -> いただく\n• 言う -> 申す (もうす)\n• する -> いたす\n• 見る -> 拝見する (はいけんする)\n• 聞く / 訪問する -> 伺う (うかがう)\n• 会う -> お目にかかる (おめにかかる)\n• 知っている -> 存じている (ぞんじている).",
        "caution": "Chỉ dùng cho hành động của người nói hoặc người trong nhóm mình (công ty mình, gia đình mình).",
        "examples": [
          {
            "type": "sentence",
            "context": "Tự giới thiệu bản thân trước đối tác",
            "jp": "IMCの マイク・ミラーと <span class=\"furigana\"><ruby>申<rt>もう</rt></ruby>します</span>。",
            "rawJp": "IMCのマイク・ミラーと申します。",
            "vi": "Tôi tên là Mike Miller, đến từ công ty IMC ạ."
          }
        ]
      },
      {
        "structure": "2. お / ご + V (bỏ ます) + します (Khiêm nhường quy tắc)",
        "explanation": "Dùng khi người nói thực hiện hành động liên quan đến người nghe hoặc người thứ ba được tôn kính để tỏ lòng kính trọng.",
        "caution": "Động từ nhóm 1, 2 dùng お; Động từ nhóm 3 dạng Hán tự dùng ご (ご案内します、ご説明します).",
        "examples": [
          {
            "type": "sentence",
            "context": "Xách hành lý giúp khách hàng",
            "jp": "<span class=\"furigana\"><ruby>重<rt>おも</rt></ruby>そう</span>ですね。お<span class=\"furigana\"><ruby>荷物<rt>にもつ</rt></ruby></span>を お<span class=\"furigana\"><ruby>持<rt>も</rt></ruby>ち</span>します。",
            "rawJp": "重そうですね。お荷物をお持ちします。",
            "vi": "Trông có vẻ nặng quá nhỉ. Tôi xin phép được xách hành lý giúp ngài ạ."
          }
        ]
      },
      {
        "structure": "3. 〜で ございます / よろしいでしょうか (Ngôn ngữ lịch sự cao cấp)",
        "explanation": "• ございます: Dạng lịch sự của あります.\n• 〜で ございます: Dạng lịch sự của です.\n• よろしいでしょうか: Dạng lịch sự của いいですか.",
        "caution": "Thường dùng trong dịch vụ khách hàng, nhà hàng, khách sạn và giao tiếp thương mại Nhật Bản.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhân viên trả lời điện thoại",
            "jp": "はい、パワー<span class=\"furigana\"><ruby>電気<rt>でんき</rt></ruby></span>で ございます。",
            "rawJp": "はい、パワー電気でございます。",
            "vi": "Vâng, xin kính chào quý khách, đây là công ty điện lực Power ạ."
          }
        ]
      }
    ]
  }
];

fs.writeFileSync('data/lessons_46_50.js', `// Lessons 46 to 50 (Minna no Nihongo N4)\nconst lessons_46_50 = ${JSON.stringify(lessons_46_50, null, 2)};\n`, 'utf8');
console.log('Successfully generated data/lessons_46_50.js');
