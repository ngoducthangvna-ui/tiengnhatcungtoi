const fs = require('fs');

const lessons_31_35 = [
  // BÀI 31
  {
    "id": "bai-31",
    "title": "Bài 31: Thể Ý Chí (意向形) & Dự Định Với 〜と思っています",
    "level": "Minna no Nihongo N4 (Bài 31)",
    "badge": "Ý chí & Kế hoạch",
    "description": "Cách chia và sử dụng Động từ thể ý chí (意向形: 行こう、食べよう、しよう), biểu thị dự định của bản thân với 〜と 思っています, lịch trình định sẵn với 〜予定です, và trạng thái chưa làm với まだ〜ていません.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>始<rt>はじ</rt></ruby>まります</span>",
        "hiragana": "はじまります",
        "meaning": "Bắt đầu (tự động từ, đi với が)",
        "type": "Động từ nhóm 1",
        "example": "式が 始まります。(Buổi lễ bắt đầu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>続<rt>つづ</rt></ruby>けます</span>",
        "hiragana": "つづけます",
        "meaning": "Tiếp tục (tha động từ, đi với を)",
        "type": "Động từ nhóm 2",
        "example": "仕事を 続けます。(Tiếp tục công việc.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>見<rt>み</rt></ruby>つけます</span>",
        "hiragana": "みつけます",
        "meaning": "Tìm thấy, phát hiện ra",
        "type": "Động từ nhóm 2",
        "example": "いい アパートを 見つけました。(Đã tìm thấy một căn hộ tốt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>受<rt>う</rt></ruby>けます</span>",
        "hiragana": "うけます",
        "meaning": "Dự thi (kỳ thi - đi với を)",
        "type": "Động từ nhóm 2",
        "example": "試験を 受けます。(Tham dự kỳ thi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>入学<rt>にゅうがく</rt></ruby>します</span>",
        "hiragana": "にゅうがくします",
        "meaning": "Nhập học (vào trường - đi với に)",
        "type": "Động từ nhóm 3",
        "example": "大学に 入学します。(Nhập học vào trường đại học.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>卒業<rt>そつぎょう</rt></ruby>します</span>",
        "hiragana": "そつぎょうします",
        "meaning": "Tốt nghiệp (rời trường - đi với を)",
        "type": "Động từ nhóm 3",
        "example": "大学を 卒業します。(Tốt nghiệp đại học.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出席<rt>しゅっせき</rt></ruby>します</span>",
        "hiragana": "しゅっせきします",
        "meaning": "Có mặt, tham dự (cuộc họp - đi với に)",
        "type": "Động từ nhóm 3",
        "example": "会議に 出席します。(Tham dự cuộc họp.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>休憩<rt>きゅうけい</rt></ruby>します</span>",
        "hiragana": "きゅうけいします",
        "meaning": "Nghỉ giải lao một lát",
        "type": "Động từ nhóm 3",
        "example": "少し 休憩しましょう。(Nghỉ giải lao một lát nào.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>連休<rt>れんきゅう</rt></ruby></span>",
        "hiragana": "れんきゅう",
        "meaning": "Kỳ nghỉ dài ngày liên tiếp",
        "type": "Danh từ",
        "example": "5月の 連休 (Kỳ nghỉ lễ dài vào tháng 5)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>作文<rt>さくぶん</rt></ruby></span>",
        "hiragana": "さくぶん",
        "meaning": "Bài văn, đoạn văn tập làm",
        "type": "Danh từ",
        "example": "作文を 書きます。(Viết bài văn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>展覧会<rt>てんらんかい</rt></ruby></span>",
        "hiragana": "てんらんかい",
        "meaning": "Triển lãm tranh ảnh",
        "type": "Danh từ",
        "example": "美術の 展覧会 (Triển lãm mỹ thuật)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>結婚式<rt>けっこんしき</rt></ruby></span>",
        "hiragana": "けっこんしき",
        "meaning": "Lễ cưới, hôn lễ",
        "type": "Danh từ",
        "example": "友だちの 結婚式 (Lễ cưới của bạn thân)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>葬式<rt>そうしき</rt></ruby></span>",
        "hiragana": "そうしき",
        "meaning": "Tang lễ, đám tang",
        "type": "Danh từ",
        "example": "お葬式に 参列します。(Dự đám tang.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>本社<rt>ほんしゃ</rt></ruby></span>",
        "hiragana": "ほんしゃ",
        "meaning": "Trụ sở chính công ty",
        "type": "Danh từ",
        "example": "本社の ビル (Tòa nhà trụ sở chính)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>支店<rt>してん</rt></ruby></span>",
        "hiragana": "してん",
        "meaning": "Chi nhánh công ty",
        "type": "Danh từ",
        "example": "大阪の 支店 (Chi nhánh Osaka)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>温泉<rt>おんせん</rt></ruby></span>",
        "hiragana": "おんせん",
        "meaning": "Suối nước nóng onsen",
        "type": "Danh từ",
        "example": "温泉に 入ります。(Ngâm mình trong suối nước nóng.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Động từ Thể ý chí (意向形)",
        "explanation": "Thể ý chí là dạng ngắn (thông thường) của 〜ましょう.\n• Nhóm 1: Chuyển âm cuối cột [i] sang cột [o] rồi thêm う (書く -> 書こう, 行く -> 行こう, 飲む -> 飲もう).\n• Nhóm 2: Bỏ る thêm よう (食べる -> 食べよう, 見る -> 見よう).\n• Nhóm 3: くる -> こよう, する -> しよう.",
        "caution": "Dùng trong giao tiếp thân mật giữa bạn bè để rủ rê cùng làm gì (行こう！).",
        "examples": [
          {
            "type": "sentence",
            "context": "Rủ bạn đi ăn cơm",
            "jp": "ちょっと <span class=\"furigana\"><ruby>休<rt>やす</rt></ruby>もう</span>。",
            "rawJp": "ちょっと休もう。",
            "vi": "Nghỉ một chút nào!"
          }
        ]
      },
      {
        "structure": "2. V (Thể ý chí) + と 思っています (Dự định của bản thân)",
        "explanation": "Dùng để bày tỏ ý định, dự tính mà người nói đã ấp ủ từ trước thời điểm nói.",
        "caution": "Khác với 〜と 思います (quyết định vừa nảy ra tại thời điểm nói), 〜と 思っています biểu thị dự định đã có sẵn từ trước.",
        "examples": [
          {
            "type": "sentence",
            "context": "Dự định mua ô tô",
            "jp": "<span class=\"furigana\"><ruby>来年<rt>らいねん</rt></ruby></span> <span class=\"furigana\"><ruby>車<rt>くるま</rt></ruby></span>を <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>おう</span>と <span class=\"furigana\"><ruby>思<rt>おも</rt></ruby>って</span> います。",
            "rawJp": "来年車を買おうと思っています。",
            "vi": "Tôi dự định sang năm sẽ mua ô tô."
          }
        ]
      },
      {
        "structure": "3. V-る / Nの + 予定です (Lịch trình đã định sẵn)",
        "explanation": "Dùng để diễn tả kế hoạch, lịch trình đã được quyết định cụ thể từ trước (lịch thi, chuyến bay, công tác...).",
        "caution": "Trước 予定です là Động từ thể từ điển hoặc Danh từ + の.",
        "examples": [
          {
            "type": "sentence",
            "context": "Lịch công tác nước ngoài",
            "jp": "<span class=\"furigana\"><ruby>来週<rt>らいしゅう</rt></ruby></span> アメリカへ <span class=\"furigana\"><ruby>出張<rt>しゅっちょう</rt></ruby>する</span> <span class=\"furigana\"><ruby>予定<rt>よてい</rt></ruby></span>です。",
            "rawJp": "来週アメリカへ出張する予定です。",
            "vi": "Theo kế hoạch thì tuần sau tôi sẽ đi công tác ở Mỹ."
          }
        ]
      }
    ]
  },

  // BÀI 32
  {
    "id": "bai-32",
    "title": "Bài 32: Lời Khuyên Nên/Không Nên & Phỏng Đoán 〜でしょう / 〜かもしれません",
    "level": "Minna no Nihongo N4 (Bài 32)",
    "badge": "Khuyên bảo & Phỏng đoán",
    "description": "Cách đưa ra lời khuyên với V-た ほうがいいです / V-ない ほうがいいです, và diễn tả mức độ phỏng đoán tương lai với 〜でしょう (xác suất cao ~75%) và 〜かもしれません (có thể ~50%).",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>運動<rt>うんどう</rt></ruby>します</span>",
        "hiragana": "うんどうします",
        "meaning": "Tập thể dục, vận động thân thể",
        "type": "Động từ nhóm 3",
        "example": "毎日 運動します。(Tập thể dục mỗi ngày.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>成功<rt>せいこう</rt></ruby>します</span>",
        "hiragana": "せいこうします",
        "meaning": "Thành công (đi với に)",
        "type": "Động từ nhóm 3",
        "example": "実験に 成功しました。(Thí nghiệm đã thành công.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>失敗<rt>しっぱい</rt></ruby>します</span>",
        "hiragana": "しっぱいします",
        "meaning": "Thất bại (đi với に)",
        "type": "Động từ nhóm 3",
        "example": "試験に 失敗しました。(Thi trượt thất bại.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>合格<rt>ごうかく</rt></ruby>します</span>",
        "hiragana": "ごうかくします",
        "meaning": "Thi đỗ, vượt qua (đi với に)",
        "type": "Động từ nhóm 3",
        "example": "N4に 合格しました。(Đã đỗ chứng chỉ N4.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>晴<rt>は</rt></ruby>れます</span>",
        "hiragana": "はれます",
        "meaning": "Trời nắng ráo, trời quang đãng",
        "type": "Động từ nhóm 2",
        "example": "明日は 晴れます。(Ngày mai trời sẽ nắng ráo.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>曇<rt>くも</rt></ruby>ります</span>",
        "hiragana": "くもります",
        "meaning": "Trời nhiều mây, u ám",
        "type": "Động từ nhóm 1",
        "example": "午後から 曇ります。(Từ chiều trời sẽ nhiều mây.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>吹<rt>ふ</rt></ruby>きます</span>",
        "hiragana": "ふきます",
        "meaning": "Thổi (gió thổi - 風が〜)",
        "type": "Động từ nhóm 1",
        "example": "強い 風が 吹いて います。(Gió mạnh đang thổi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>治<rt>なお</rt></ruby>ります</span>",
        "hiragana": "なおります",
        "meaning": "Khỏi bệnh, lành bệnh",
        "type": "Động từ nhóm 1",
        "example": "風邪が 治りました。(Đã khỏi cảm cúm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>冷<rt>ひ</rt></ruby>やします</span>",
        "hiragana": "ひやします",
        "meaning": "Làm lạnh, chườm lạnh",
        "type": "Động từ nhóm 1",
        "example": "ビールを 冷やします。(Làm lạnh bia.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>心配<rt>しんぱい</rt></ruby>な</span>",
        "hiragana": "しんぱいな",
        "meaning": "Lo lắng, bồn chồn",
        "type": "Tính từ (na)",
        "example": "体の ことが 心配です。(Lo lắng cho sức khỏe.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>十分<rt>じゅうぶん</rt></ruby>な</span>",
        "hiragana": "じゅうぶんな",
        "meaning": "Đầy đủ, sung túc",
        "type": "Tính từ (na)",
        "example": "十分な 睡眠 (Ngủ đủ giấc)"
      },
      {
        "kanji": "おかしい",
        "hiragana": "おかしい",
        "meaning": "Kỳ lạ, kỳ quặc, buồn cười",
        "type": "Tính từ (i)",
        "example": "音が おかしいです。(Âm thanh có vẻ kỳ lạ.)"
      },
      {
        "kanji": "うるさい",
        "hiragana": "うるさい",
        "meaning": "Ồn ào, phiền phức",
        "type": "Tính từ (i)",
        "example": "隣が うるさいです。(Phòng bên cạnh ồn ào quá.)"
      },
      {
        "kanji": "やけど",
        "hiragana": "やけど",
        "meaning": "Vết bỏng nước/lửa",
        "type": "Danh từ",
        "example": "やけどを します。(Bị bỏng.)"
      },
      {
        "kanji": "けが",
        "hiragana": "けが",
        "meaning": "Vết thương ngoài da",
        "type": "Danh từ",
        "example": "足に けがを しました。(Bị thương ở chân.)"
      },
      {
        "kanji": "せき",
        "hiragana": "せき",
        "meaning": "Cơn ho",
        "type": "Danh từ",
        "example": "せきが 出ます。(Bị ho.)"
      },
      {
        "kanji": "インフルエンザ",
        "hiragana": "インフルエンザ",
        "meaning": "Bệnh cúm mùa",
        "type": "Danh từ",
        "example": "インフルエンザに かかります。(Bị nhiễm cúm mùa.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-た ほうが いいです / V-ない ほうが いいです (Khuyên nên / không nên)",
        "explanation": "Dùng để đưa ra lời khuyên nhủ cụ thể cho người nghe về những việc nên hoặc không nên thực hiện.",
        "caution": "Lời khuyên nên làm dùng thể quá khứ V-た (không dùng V-る). Lời khuyên không nên làm dùng V-ない.",
        "examples": [
          {
            "type": "sentence",
            "context": "Khuyên bạn bị sốt nên đi viện",
            "jp": "<span class=\"furigana\"><ruby>熱<rt>ねつ</rt></ruby></span>が あるなら、<span class=\"furigana\"><ruby>病院<rt>びょういん</rt></ruby></span>へ <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>った</span> ほうが いいですよ。",
            "rawJp": "熱があるなら、病院へ行ったほうがいいですよ。",
            "vi": "Nếu bạn bị sốt thì nên đi khám bác sĩ ngay đi."
          }
        ]
      },
      {
        "structure": "2. [Thể thông thường] + でしょう (Phỏng đoán xác suất cao ~75%)",
        "explanation": "Người nói dựa vào tình hình thực tế, dự báo thời tiết hoặc kiến thức để phỏng đoán sự việc có xác suất xảy ra cao.",
        "caution": "Tính từ đuôi な và Danh từ không đi với だ (雨でしょう, 暇でしょう).",
        "examples": [
          {
            "type": "sentence",
            "context": "Dự báo thời tiết ngày mai",
            "jp": "<span class=\"furigana\"><ruby>明日<rt>あした</rt></ruby></span>は <span class=\"furigana\"><ruby>雨<rt>あめ</rt></ruby></span>が <span class=\"furigana\"><ruby>降<rt>ふ</rt></ruby>る</span>でしょう。",
            "rawJp": "明日は雨が降るでしょう。",
            "vi": "Có lẽ ngày mai trời sẽ mưa đấy."
          }
        ]
      },
      {
        "structure": "3. [Thể thông thường] + かもしれません (Có thể, có lẽ ~50%)",
        "explanation": "Diễn tả sự suy đoán không chắc chắn, chỉ khoảng 50% khả năng xảy ra.",
        "caution": "Tính từ đuôi な và Danh từ cũng bỏ だ trước かもしれません (病気かもしれません).",
        "examples": [
          {
            "type": "sentence",
            "context": "Lo lắng muộn giờ hẹn",
            "jp": "<span class=\"furigana\"><ruby>約束<rt>やくそく</rt></ruby></span>の <span class=\"furigana\"><ruby>時間<rt>じかん</rt></ruby></span>に <span class=\"furigana\"><ruby>遅<rt>おく</rt></ruby>れる</span>かもしれません。",
            "rawJp": "約束の時間に遅れるかもしれません。",
            "vi": "Có thể tôi sẽ bị muộn giờ hẹn mất."
          }
        ]
      }
    ]
  },

  // BÀI 33
  {
    "id": "bai-33",
    "title": "Bài 33: Thể Mệnh Lệnh (命令形) & Thể Cấm Chỉ (禁止形)",
    "level": "Minna no Nihongo N4 (Bài 33)",
    "badge": "Mệnh lệnh & Cấm chỉ",
    "description": "Cách chia và sử dụng Thể mệnh lệnh (命令形: 走れ、見ろ) và Thể cấm chỉ (禁止形: 走るな), giải thích ý nghĩa biển báo với 〜という意味です và truyền đạt lại lời nói với 〜と言っていました.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>逃<rt>に</rt></ruby>げます</span>",
        "hiragana": "にげます",
        "meaning": "Chạy trốn, đào tẩu",
        "type": "Động từ nhóm 2",
        "example": "犯人が 逃げました。(Hung thủ đã bỏ trốn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>騒<rt>さわ</rt></ruby>ぎます</span>",
        "hiragana": "さわぎます",
        "meaning": "Làm ồn ào, làm huyên náo",
        "type": "Động từ nhóm 1",
        "example": "教室で 騒ぎます。(Làm ồn trong lớp.)"
      },
      {
        "kanji": "あきらめます",
        "hiragana": "あきらめます",
        "meaning": "Từ bỏ, buông xuôi",
        "type": "Động từ nhóm 2",
        "example": "夢を あきらめません。(Không từ bỏ ước mơ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>投<rt>な</rt></ruby>げます</span>",
        "hiragana": "なげます",
        "meaning": "Ném (quả bóng, đồ vật)",
        "type": "Động từ nhóm 2",
        "example": "ボールを 投げます。(Ném bóng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>守<rt>まも</rt></ruby>ります</span>",
        "hiragana": "まもります",
        "meaning": "Tuân thủ, giữ gìn (lời hứa, luật lệ)",
        "type": "Động từ nhóm 1",
        "example": "約束を 守ります。(Giữ đúng lời hứa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>伝<rt>つた</rt></ruby>えます</span>",
        "hiragana": "つたえます",
        "meaning": "Truyền đạt, nhắn lại",
        "type": "Động từ nhóm 2",
        "example": "先生に 伝えます。(Nhắn lại với thầy cô.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>注意<rt>ちゅうい</rt></ruby>します</span>",
        "hiragana": "ちゅういします",
        "meaning": "Chú ý, nhắc nhở (xe cộ - 車に〜)",
        "type": "Động từ nhóm 3",
        "example": "車に 注意してください。(Hãy chú ý xe cộ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>外<rt>はず</rt></ruby>します</span>",
        "hiragana": "はずします",
        "meaning": "Rời vị trí (席を〜)",
        "type": "Động từ nhóm 1",
        "example": "席を 外して います。(Anh ấy đang rời khỏi chỗ ngồi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>席<rt>せき</rt></ruby></span>",
        "hiragana": "せき",
        "meaning": "Chỗ ngồi, ghế ngồi",
        "type": "Danh từ",
        "example": "席に 座ります。(Ngồi vào chỗ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>規則<rt>きそく</rt></ruby></span>",
        "hiragana": "きそく",
        "meaning": "Quy tắc, nội quy",
        "type": "Danh từ",
        "example": "寮の 規則 (Nội quy ký túc xá)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>使用禁止<rt>しようきんし</rt></ruby></span>",
        "hiragana": "しようきんし",
        "meaning": "Cấm sử dụng",
        "type": "Danh từ/Biển báo",
        "example": "エレベーターは 使用禁止です。(Thang máy cấm sử dụng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>立入禁止<rt>たちいりきんし</rt></ruby></span>",
        "hiragana": "たちいりきんし",
        "meaning": "Cấm vào, không phận sự miễn vào",
        "type": "Danh từ/Biển báo",
        "example": "工事現場は 立入禁止です。(Công trường cấm vào.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>営業中<rt>えいぎょうちゅう</rt></ruby></span>",
        "hiragana": "えいぎょうちゅう",
        "meaning": "Đang mở cửa kinh doanh",
        "type": "Danh từ/Biển báo",
        "example": "店は 営業中です。(Cửa hàng đang mở cửa đón khách.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>割引<rt>わりびき</rt></ruby></span>",
        "hiragana": "わりびき",
        "meaning": "Giảm giá, chiết khấu",
        "type": "Danh từ",
        "example": "学生の 割引 (Giảm giá dành cho học sinh)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Thể mệnh lệnh (命令形) & Thể cấm chỉ (禁止形)",
        "explanation": "• Thể mệnh lệnh: Nhóm 1 chuyển cột [u] sang [e] (書け、走れ); Nhóm 2 bỏ る thêm ろ (食べろ、見ろ); Nhóm 3 くる -> こい, する -> しろ.\n• Thể cấm chỉ: Động từ thể từ điển (V-る) + な (書くな、走るな、食べるな、来るな、するな).",
        "caution": "Mang sắc thái ra lệnh trực tiếp, áp đặt nên chỉ dùng trong cổ vũ thể thao, tình huống khẩn cấp cứu hộ, hoặc biển báo cấm.",
        "examples": [
          {
            "type": "sentence",
            "context": "Cổ vũ trên khán đài",
            "jp": "<span class=\"furigana\"><ruby>走<rt>はし</rt></ruby>れ</span>！<span class=\"furigana\"><ruby>頑張<rt>がんば</rt></ruby>れ</span>！",
            "rawJp": "走れ！頑張れ！",
            "vi": "Chạy nhanh lên! Cố lên!"
          }
        ]
      },
      {
        "structure": "2. 〜という 意味です (Có nghĩa là...)",
        "explanation": "Dùng để giải thích định nghĩa hoặc ý nghĩa của một từ ngữ, biển báo hay ký hiệu.",
        "caution": "Khi hỏi ý nghĩa dùng: 〜は どういう 意味ですか.",
        "examples": [
          {
            "type": "sentence",
            "context": "Giải thích biển báo cấm đỗ xe",
            "jp": "あの マークは「ここに <span class=\"furigana\"><ruby>車<rt>くるま</rt></ruby></span>を <span class=\"furigana\"><ruby>止<rt>と</rt></ruby>めるな</span>」という <span class=\"furigana\"><ruby>意味<rt>いみ</rt></ruby></span>です。",
            "rawJp": "あのマークは「ここに車を止めるな」という意味です。",
            "vi": "Ký hiệu kia có nghĩa là 'Cấm đỗ xe ô tô ở đây'."
          }
        ]
      },
      {
        "structure": "3. [Thể thông thường] + と 言っていました (Nhắn lại lời người khác)",
        "explanation": "Dùng để truyền đạt lại lời nói hoặc tin nhắn của người thứ ba cho người nghe.",
        "caution": "Lời trích dẫn dùng thể thông thường trước と 言っていました.",
        "examples": [
          {
            "type": "sentence",
            "context": "Truyền đạt lại lời nhắn của thầy giáo",
            "jp": "<span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>は「あした <span class=\"furigana\"><ruby>休<rt>やす</rt></ruby>みだ</span>」と <span class=\"furigana\"><ruby>言<rt>い</rt></ruby>って</span> いました。",
            "rawJp": "先生は「あした休みだ」と言っていました。",
            "vi": "Thầy giáo đã nhắn rằng ngày mai được nghỉ học đấy."
          }
        ]
      }
    ]
  },

  // BÀI 34
  {
    "id": "bai-34",
    "title": "Bài 34: Thực Hiện Theo Chỉ Dẫn 〜とおりに & Thứ Tự Hành Động 〜あとで",
    "level": "Minna no Nihongo N4 (Bài 34)",
    "badge": "Chỉ dẫn & Thứ tự",
    "description": "Làm việc gì theo đúng chỉ dẫn với V1-た / Nの + とおりに、V2; Trình tự trước sau với V1-た / Nの + あとで、V2; và làm V2 trong trạng thái V1 với V1-て / V1-ないで.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>磨<rt>みが</rt></ruby>きます</span>",
        "hiragana": "みがきます",
        "meaning": "Đánh bóng, đánh răng (歯を〜)",
        "type": "Động từ nhóm 1",
        "example": "歯を 磨きます。(Đánh răng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てます</span>",
        "hiragana": "くみたてます",
        "meaning": "Lắp ráp (đồ gỗ, mô hình)",
        "type": "Động từ nhóm 2",
        "example": "家具を 組み立てます。(Lắp ráp đồ gỗ nội thất.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>折<rt>お</rt></ruby>ります</span>",
        "hiragana": "おります",
        "meaning": "Gấp lại, bẻ gãy (tha động từ)",
        "type": "Động từ nhóm 1",
        "example": "紙を 折ります。(Gấp giấy origami.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>気<rt>き</rt></ruby>が つきます</span>",
        "hiragana": "きがつきます",
        "meaning": "Nhận ra, để ý thấy (đi với に)",
        "type": "Cụm động từ",
        "example": "間違いに 気が つきました。(Đã nhận ra chỗ sai.)"
      },
      {
        "kanji": "つけます",
        "hiragana": "つけます",
        "meaning": "Chấm, tra nước sốt (しょうゆを〜)",
        "type": "Động từ nhóm 2",
        "example": "しょうゆを つけて 食べます。(Chấm nước tương rồi ăn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>見<rt>み</rt></ruby>つかります</span>",
        "hiragana": "みつかります",
        "meaning": "Được tìm thấy (tự động từ, đi với が)",
        "type": "Động từ nhóm 1",
        "example": "鍵が 見つかりました。(Chìa khóa đã được tìm thấy.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>質問<rt>しつもん</rt></ruby>します</span>",
        "hiragana": "しつもんします",
        "meaning": "Đặt câu hỏi, chất vấn",
        "type": "Động từ nhóm 3",
        "example": "先生に 質問します。(Đặt câu hỏi cho thầy cô.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>細<rt>ほそ</rt></ruby>い</span>",
        "hiragana": "ほそい",
        "meaning": "Thon nhỏ, mảnh khảnh",
        "type": "Tính từ (i)",
        "example": "細い 線 (Nét vẽ thanh mảnh)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>太<rt>ふと</rt></ruby>い</span>",
        "hiragana": "ふとい",
        "meaning": "To, dày, mập",
        "type": "Tính từ (i)",
        "example": "太い 腕 (Cánh tay to khỏe)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>家具<rt>かぐ</rt></ruby></span>",
        "hiragana": "かぐ",
        "meaning": "Đồ nội thất gia đình",
        "type": "Danh từ",
        "example": "家具を 買います。(Mua đồ nội thất.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>説明書<rt>せつめいしょ</rt></ruby></span>",
        "hiragana": "せつめいしょ",
        "meaning": "Bản sách hướng dẫn sử dụng",
        "type": "Danh từ",
        "example": "説明書を 読みます。(Đọc sách hướng dẫn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>矢印<rt>やじるし</rt></ruby></span>",
        "hiragana": "やじるし",
        "meaning": "Dấu mũi tên chỉ hướng",
        "type": "Danh từ",
        "example": "矢印の 方向に 進みます。(Đi theo hướng mũi tên.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V1-た / Nの + とおりに、V2 (Làm theo đúng như...)",
        "explanation": "Diễn tả hành động V2 được tiến hành đúng y hệt theo những gì đã được nhìn, nghe hoặc hướng dẫn ở V1.",
        "caution": "Nếu đi với Danh từ thì có の (説明書の とおりに). Với dạng gốc N-どおり thì không có の (予定どおり).",
        "examples": [
          {
            "type": "sentence",
            "context": "Lắp ráp đồ theo bản vẽ",
            "jp": "<span class=\"furigana\"><ruby>説明書<rt>せつめいしょ</rt></ruby></span>の <span class=\"furigana\"><ruby>通<rt>とお</rt></ruby>りに</span>、<span class=\"furigana\"><ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てます</span>。",
            "rawJp": "説明書のとおりに、組み立てます。",
            "vi": "Tôi lắp ráp theo đúng như sách hướng dẫn."
          }
        ]
      },
      {
        "structure": "2. V1-た / Nの + あとで、V2 (Sau khi làm V1 thì làm V2)",
        "explanation": "Diễn tả sự tiếp nối thứ tự thời gian: hoàn tất V1 rồi mới đến V2.",
        "caution": "Động từ V1 luôn ở thể quá khứ (V-た), không chia thời gian ở mệnh đề đầu.",
        "examples": [
          {
            "type": "sentence",
            "context": "Uống cà phê sau bữa ăn",
            "jp": "ご飯を <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べた</span> <span class=\"furigana\"><ruby>後<rt>あと</rt></ruby>で</span>、コーヒーを <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>みます</span>。",
            "rawJp": "ご飯を食べた後で、コーヒーを飲みます。",
            "vi": "Sau khi ăn cơm xong, tôi sẽ uống cà phê."
          }
        ]
      },
      {
        "structure": "3. V1-ないで、V2 (Làm V2 mà không làm V1)",
        "explanation": "Biểu thị hành động V2 được thực hiện trong trạng thái bỏ qua hoặc không tiến hành V1.",
        "caution": "Khác với 〜なくて (chỉ nguyên nhân), 〜ないで chỉ cách thức thực hiện hành động.",
        "examples": [
          {
            "type": "sentence",
            "context": "Uống cà phê không đường",
            "jp": "<span class=\"furigana\"><ruby>砂糖<rt>さとう</rt></ruby></span>を <span class=\"furigana\"><ruby>入<rt>い</rt></ruby>れないで</span>、コーヒーを <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>みます</span>。",
            "rawJp": "砂糖を入れないで、コーヒーを飲みます。",
            "vi": "Tôi uống cà phê mà không cho đường."
          }
        ]
      }
    ]
  },

  // BÀI 35
  {
    "id": "bai-35",
    "title": "Bài 35: Thể Điều Kiện (条件形: ば形) & Cấu Trúc Càng... Càng...",
    "level": "Minna no Nihongo N4 (Bài 35)",
    "badge": "Thể điều kiện ば",
    "description": "Cách chia và sử dụng thể điều kiện (ば形: 行けば、安ければ、静かなら), mẫu câu càng... càng... với 〜ば〜ほど, và cách hỏi xin lời khuyên với Từ nghi vấn + 〜ばいいですか.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>咲<rt>さ</rt></ruby>きます</span>",
        "hiragana": "さきます",
        "meaning": "Nở (hoa nở - 花が〜)",
        "type": "Động từ nhóm 1",
        "example": "桜が 咲きました。(Hoa anh đào đã nở rộ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>変<rt>か</rt></ruby>わります</span>",
        "hiragana": "かわります",
        "meaning": "Thay đổi, biến đổi (tự động từ)",
        "type": "Động từ nhóm 1",
        "example": "色が 変わります。(Màu sắc thay đổi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>困<rt>こま</rt></ruby>ります</span>",
        "hiragana": "こまります",
        "meaning": "Khó khăn, bối rối, phiền toái",
        "type": "Động từ nhóm 1",
        "example": "道が わからなくて 困りました。(Không biết đường nên rất khốn đốn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>楽<rt>らく</rt></ruby>な</span>",
        "hiragana": "らくな",
        "meaning": "Nhàn nhã, thoải mái, dễ chịu",
        "type": "Tính từ (na)",
        "example": "楽な 仕事 (Công việc nhàn nhã)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>正<rt>ただ</rt></ruby>しい</span>",
        "hiragana": "ただしい",
        "meaning": "Đúng đắn, chuẩn xác",
        "type": "Tính từ (i)",
        "example": "正しい 答え (Đáp án chính xác)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>珍<rt>めずら</rt></ruby>しい</span>",
        "hiragana": "めずらしい",
        "meaning": "Hiếm có, lạ lẫm",
        "type": "Tính từ (i)",
        "example": "珍しい 果物 (Trái cây hiếm có)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>島<rt>しま</rt></ruby></span>",
        "hiragana": "しま",
        "meaning": "Hòn đảo",
        "type": "Danh từ",
        "example": "南の 島 (Hòn đảo phía nam)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>港<rt>みなと</rt></ruby></span>",
        "hiragana": "みなと",
        "meaning": "Bến cảng",
        "type": "Danh từ",
        "example": "船が 港に 着きました。(Tàu đã cập bến cảng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>近所<rt>きんじょ</rt></ruby></span>",
        "hiragana": "きんじょ",
        "meaning": "Hàng xóm láng giềng, khu vực lân cận",
        "type": "Danh từ",
        "example": "近所の人 (Người hàng xóm)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>屋上<rt>おくじょう</rt></ruby></span>",
        "hiragana": "おくじょう",
        "meaning": "Sân thượng tòa nhà",
        "type": "Danh từ",
        "example": "屋上に 上がります。(Lên sân thượng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>機会<rt>きかい</rt></ruby></span>",
        "hiragana": "きかい",
        "meaning": "Cơ hội, dịp thuận lợi",
        "type": "Danh từ",
        "example": "日本へ 行く 機会 (Cơ hội được sang Nhật Bản)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>許可<rt>きょか</rt></ruby></span>",
        "hiragana": "きょか",
        "meaning": "Sự cho phép, cấp phép",
        "type": "Danh từ",
        "example": "先生の 許可を もらいます。(Xin phép giáo viên.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Cách chia Thể điều kiện (ば形)",
        "explanation": "• Nhóm 1: Chuyển âm cuối cột [u] sang cột [e] + ば (行けば、話せば、飲めば).\n• Nhóm 2: Bỏ る thêm れば (食べれば、見れば).\n• Nhóm 3: くる -> くれば, する -> すれば.\n• Tính từ đuôi い: Bỏ い + ければ (安ければ、良ければ).\n• Tính từ đuôi な / Danh từ: Thêm なら (きれいなら、雨なら).",
        "caution": "Vế sau thể điều kiện không dùng câu mệnh lệnh, ý chí nếu cả hai vế cùng một chủ ngữ.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhấn nút để lấy vé",
            "jp": "ボタンを <span class=\"furigana\"><ruby>押<rt>お</rt></ruby>せば</span>、切符が <span class=\"furigana\"><ruby>出<rt>で</rt></ruby>ます</span>。",
            "rawJp": "ボタンを押せば、切符が出ます。",
            "vi": "Nếu bạn ấn nút thì vé sẽ chạy ra."
          }
        ]
      },
      {
        "structure": "2. 〜ば 〜ほど (Càng... càng...)",
        "explanation": "Diễn tả sự tăng tiến tỷ lệ thuận: sự việc ở vế 1 biến đổi thì mức độ ở vế 2 cũng thay đổi theo tương ứng.",
        "caution": "Lặp lại cùng 1 động từ/tính từ ở dạng ば và ほど (読めば読むほど、安ければ安いほど).",
        "examples": [
          {
            "type": "sentence",
            "context": "Càng học càng thấy tiếng Nhật thú vị",
            "jp": "<span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>は <span class=\"furigana\"><ruby>勉強<rt>べんきょう</rt></ruby>すれば</span> <span class=\"furigana\"><ruby>勉強<rt>べんきょう</rt></ruby>するほど</span>、おもしろくなります。",
            "rawJp": "日本語は勉強すれば勉強するほど、おもしろくなります。",
            "vi": "Tiếng Nhật càng học lại càng thấy thú vị."
          }
        ]
      }
    ]
  }
];

fs.writeFileSync('data/lessons_31_35.js', `// Lessons 31 to 35 (Minna no Nihongo N4)\nconst lessons_31_35 = ${JSON.stringify(lessons_31_35, null, 2)};\n`, 'utf8');
console.log('Successfully generated data/lessons_31_35.js');
