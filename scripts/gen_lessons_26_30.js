const fs = require('fs');

const lessons_26_30 = [
  // BÀI 26
  {
    "id": "bai-26",
    "title": "Bài 26: Giải Thích Lý Do & Nhờ Vả Với 〜んです",
    "level": "Minna no Nihongo N4 (Bài 26)",
    "badge": "Lý do & Thuyết minh",
    "description": "Nhấn mạnh, thuyết minh lý do hoặc bối cảnh với thể thông thường + 〜んです (〜んですか / 〜んですが), cách nhờ vả lịch sự với 〜んですが、〜て いただけませんか và xin lời khuyên với 〜たら いいですか.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>見<rt>み</rt></ruby>ます</span>",
        "hiragana": "みます",
        "meaning": "Xem, khám bệnh (bác sĩ khám)",
        "type": "Động từ nhóm 2",
        "example": "医者に 診て もらいます。(Nhờ bác sĩ khám bệnh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>探<rt>さが</rt></ruby>します</span>",
        "hiragana": "さがします",
        "meaning": "Tìm kiếm (vật bị mất, đồ đạc)",
        "type": "Động từ nhóm 1",
        "example": "鍵を 探して います。(Đang tìm chìa khóa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>遅<rt>おく</rt></ruby>れます</span>",
        "hiragana": "おくれます",
        "meaning": "Muộn, chậm trễ (đi với に)",
        "type": "Động từ nhóm 2",
        "example": "時間に 遅れました。(Đã bị muộn giờ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>います</span>",
        "hiragana": "まにあいます",
        "meaning": "Kịp giờ (đi với に)",
        "type": "Động từ nhóm 1",
        "example": "電車に 間に合いました。(Đã kịp chuyến tàu điện.)"
      },
      {
        "kanji": "やります",
        "hiragana": "やります",
        "meaning": "Làm, thực hiện",
        "type": "Động từ nhóm 1",
        "example": "宿題を やります。(Làm bài tập về nhà.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>拾<rt>ひろ</rt></ruby>います</span>",
        "hiragana": "ひろいます",
        "meaning": "Nhặt lên, lượm",
        "type": "Động từ nhóm 1",
        "example": "財布を 拾いました。(Nhặt được ví tiền.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>連絡<rt>れんらく</rt></ruby>します</span>",
        "hiragana": "れんらくします",
        "meaning": "Liên lạc, thông báo",
        "type": "Động từ nhóm 3",
        "example": "先生に 連絡します。(Liên lạc với giáo viên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>気分<rt>きぶん</rt></ruby>が いい</span>",
        "hiragana": "きぶんがいい",
        "meaning": "Tâm trạng thoải mái, sảng khoái, khỏe khoắn",
        "type": "Cụm tính từ",
        "example": "朝起きて、気分が いいです。(Sáng thức dậy thấy rất khoan khoái.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>気分<rt>きぶん</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>い</span>",
        "hiragana": "きぶんがわるい",
        "meaning": "Khó chịu trong người, buồn nôn, mệt mỏi",
        "type": "Cụm tính từ",
        "example": "熱があって、気分が 悪いです。(Bị sốt nên người thấy khó chịu.)"
      },
      {
        "kanji": "ごみ",
        "hiragana": "ごみ",
        "meaning": "Rác rưởi",
        "type": "Danh từ",
        "example": "ごみを 捨てます。(Vứt rác.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>燃<rt>も</rt></ruby>えるごみ</span>",
        "hiragana": "もえるごみ",
        "meaning": "Rác cháy được",
        "type": "Danh từ",
        "example": "燃えるごみの 日 (Ngày thu gom rác cháy được)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>燃<rt>も</rt></ruby>えないごみ</span>",
        "hiragana": "もえないごみ",
        "meaning": "Rác không cháy được",
        "type": "Danh từ",
        "example": "燃えないごみを 分別します。(Phân loại rác không cháy.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby></span>",
        "hiragana": "おきば",
        "meaning": "Nơi để, chỗ cất đồ",
        "type": "Danh từ",
        "example": "自転車の 置き場 (Bãi đỗ xe đạp)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>横<rt>よこ</rt></ruby></span>",
        "hiragana": "よこ",
        "meaning": "Bên cạnh, bề ngang",
        "type": "Danh từ",
        "example": "机の 横 (Bên cạnh bàn)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>瓶<rt>びん</rt></ruby></span>",
        "hiragana": "びん",
        "meaning": "Chai lọ thủy tinh",
        "type": "Danh từ",
        "example": "ビールの 瓶 (Chai bia)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>缶<rt>かん</rt></ruby></span>",
        "hiragana": "かん",
        "meaning": "Lon kim loại, hộp thiếc",
        "type": "Danh từ",
        "example": "ジュースの 缶 (Lon nước hoa quả)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>宇宙<rt>うちゅう</rt></ruby></span>",
        "hiragana": "うちゅう",
        "meaning": "Vũ trụ",
        "type": "Danh từ",
        "example": "宇宙へ 行きたいです。(Muốn bay vào vũ trụ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>宇宙船<rt>うちゅうせん</rt></ruby></span>",
        "hiragana": "うちゅうせん",
        "meaning": "Tàu vũ trụ",
        "type": "Danh từ",
        "example": "宇宙船に 乗ります。(Lên tàu vũ trụ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>怖<rt>こわ</rt></ruby>い</span>",
        "hiragana": "こわい",
        "meaning": "Sợ hãi, đáng sợ",
        "type": "Tính từ (i)",
        "example": "地震は 怖いです。(Động đất rất đáng sợ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>別<rt>べつ</rt></ruby>の</span>",
        "hiragana": "べつの",
        "meaning": "Khác, riêng biệt",
        "type": "Liên từ/Từ bổ nghĩa",
        "example": "別の 日に しましょう。(Hẹn vào ngày khác nhé.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Thể thông thường + んです (〜んですか / 〜んですが)",
        "explanation": "〜んです là dạng văn nói của 〜のです, dùng để nhấn mạnh tâm lý, giải thích nguyên nhân lý do, hoặc mở đầu tình huống thuyết minh.\n• Động từ/Tính từ đuôi い: Thể thông thường + んです.\n• Tính từ đuôi な/Danh từ: Thêm な trước んです (きれいなんです、病気なんです).\n• 〜んですか: Dùng để hỏi khi thấy sự việc khác thường và muốn người đối diện giải thích.",
        "caution": "Không dùng 〜んです để trả lời các sự thật đơn thuần hoặc khi không có nhu cầu giải thích bối cảnh.",
        "examples": [
          {
            "type": "dialogue",
            "context": "Hỏi lý do khi thấy bạn mang vali",
            "lines": [
              {
                "speaker": "A",
                "jp": "どこへ <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>く</span>んですか。",
                "rawJp": "どこへ行くんですか。",
                "vi": "Bạn đi đâu thế? (nhìn thấy bạn chuẩn bị hành lý)"
              },
              {
                "speaker": "B",
                "jp": "<span class=\"furigana\"><ruby>旅行<rt>りょこう</rt></ruby></span>に <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>く</span>んです。",
                "rawJp": "旅行に行くんです。",
                "vi": "Tôi chuẩn bị đi du lịch đấy."
              }
            ]
          }
        ]
      },
      {
        "structure": "2. 〜んですが、〜て いただけませんか (Nhờ vả lịch sự)",
        "explanation": "〜んですが đặt ở đầu câu để nêu hoàn cảnh, sau đó dùng 〜て いただけませんか để đưa ra lời nhờ vả một cách khéo léo, lịch sự.",
        "caution": "Mức độ lịch sự cao hơn 〜てください và 〜てくれませんか.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhờ người khác dạy tiếng Nhật",
            "jp": "<span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>を <span class=\"furigana\"><ruby>勉強<rt>べんきょう</rt></ruby>したい</span>んですが、いい <span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>を <span class=\"furigana\"><ruby>紹介<rt>しょうかい</rt></ruby>して</span> いただけませんか。",
            "rawJp": "日本語を勉強したいんですが、いい先生を紹介していただけませんか。",
            "vi": "Tôi muốn học tiếng Nhật, bạn có thể giới thiệu cho tôi một giáo viên tốt được không?"
          }
        ]
      },
      {
        "structure": "3. Từ để hỏi + 〜たら いいですか (Xin lời khuyên)",
        "explanation": "Dùng khi người nói gặp khó khăn và muốn xin chỉ dẫn, lời khuyên nên làm gì từ người khác.",
        "caution": "Trước たら là thể quá khứ ngắn (thể た).",
        "examples": [
          {
            "type": "sentence",
            "context": "Hỏi nơi mua đồ",
            "jp": "カメラを <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>いたい</span>んですが、どこで <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>ったら</span> いいですか。",
            "rawJp": "カメラを買いたいんですが、どこで買ったらいいですか。",
            "vi": "Tôi muốn mua máy ảnh, vậy tôi nên mua ở đâu thì tốt ạ?"
          }
        ]
      }
    ]
  },

  // BÀI 27
  {
    "id": "bai-27",
    "title": "Bài 27: Động Từ Thể Khả Năng (可能形)",
    "level": "Minna no Nihongo N4 (Bài 27)",
    "badge": "Thể khả năng",
    "description": "Cách chia và sử dụng động từ thể khả năng (可能形), chuyển trợ từ を sang が, phân biệt 見える vs 見られる, 聞こえる vs 聞ける, và cách dùng できます.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>飼<rt>か</rt></ruby>います</span>",
        "hiragana": "かいます",
        "meaning": "Nuôi (thú cưng, động vật)",
        "type": "Động từ nhóm 1",
        "example": "犬を 飼って います。(Đang nuôi một chú chó.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>建<rt>た</rt></ruby>てます</span>",
        "hiragana": "たてます",
        "meaning": "Xây dựng, dựng lên",
        "type": "Động từ nhóm 2",
        "example": "家を 建てます。(Xây nhà mới.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>走<rt>はし</rt></ruby>ります</span>",
        "hiragana": "はしります",
        "meaning": "Chạy (trên đường)",
        "type": "Động từ nhóm 1",
        "example": "道を 走ります。(Chạy trên đường.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>見<rt>み</rt></ruby>えます</span>",
        "hiragana": "みえます",
        "meaning": "Nhìn thấy, lọt vào tầm mắt",
        "type": "Động từ nhóm 2",
        "example": "富士山が 見えます。(Có thể nhìn thấy núi Phú Sĩ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>聞<rt>き</rt></ruby>こえます</span>",
        "hiragana": "きこえます",
        "meaning": "Nghe thấy, âm thanh lọt vào tai",
        "type": "Động từ nhóm 2",
        "example": "波の 音が 聞こえます。(Nghe thấy tiếng sóng biển.)"
      },
      {
        "kanji": "できます",
        "hiragana": "できます",
        "meaning": "Được xây xong, hoàn thành, làm được",
        "type": "Động từ nhóm 2",
        "example": "駅前に スーパーが できました。(Trước nhà ga mới mở một siêu thị.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>開<rt>ひら</rt></ruby>きます</span>",
        "hiragana": "ひらきます",
        "meaning": "Mở (lớp học, cuộc họp, cửa hàng)",
        "type": "Động từ nhóm 1",
        "example": "教室を 開きます。(Mở lớp học.)"
      },
      {
        "kanji": "ペット",
        "hiragana": "ペット",
        "meaning": "Thú cưng, vật nuôi",
        "type": "Danh từ",
        "example": "ペットを 飼います。(Nuôi thú cưng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>鳥<rt>とり</rt></ruby></span>",
        "hiragana": "とり",
        "meaning": "Con chim",
        "type": "Danh từ",
        "example": "鳥の 声 (Tiếng chim hót)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>声<rt>こえ</rt></ruby></span>",
        "hiragana": "こえ",
        "meaning": "Giọng nói, tiếng phát ra từ sinh vật",
        "type": "Danh từ",
        "example": "大きな 声で 話します。(Nói bằng giọng to.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>波<rt>なみ</rt></ruby></span>",
        "hiragana": "なみ",
        "meaning": "Con sóng, sóng biển",
        "type": "Danh từ",
        "example": "波が 高いです。(Sóng lớn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>花火<rt>はなび</rt></ruby></span>",
        "hiragana": "はなび",
        "meaning": "Pháo hoa",
        "type": "Danh từ",
        "example": "花火大会 (Lễ hội pháo hoa)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>景色<rt>けしき</rt></ruby></span>",
        "hiragana": "けしき",
        "meaning": "Phong cảnh, cảnh sắc",
        "type": "Danh từ",
        "example": "きれいな 景色 (Phong cảnh đẹp)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>昔<rt>むかし</rt></ruby></span>",
        "hiragana": "むかし",
        "meaning": "Ngày xưa, ngày trước",
        "type": "Danh từ",
        "example": "昔の 話 (Câu chuyện ngày xưa)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>道具<rt>どうぐ</rt></ruby></span>",
        "hiragana": "どうぐ",
        "meaning": "Dụng cụ, công cụ",
        "type": "Danh từ",
        "example": "料理の 道具 (Dụng cụ nấu ăn)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>台所<rt>だいどころ</rt></ruby></span>",
        "hiragana": "だいどころ",
        "meaning": "Nhà bếp",
        "type": "Danh từ",
        "example": "台所で 料理します。(Nấu ăn trong bếp.)"
      },
      {
        "kanji": "マンション",
        "hiragana": "マンション",
        "meaning": "Chung cư cao cấp",
        "type": "Danh từ",
        "example": "マンションに 住みます。(Sống trong chung cư.)"
      },
      {
        "kanji": "しか〜ません",
        "hiragana": "しか〜ません",
        "meaning": "Chỉ có... (đi với phủ định, biểu thị ít ỏi)",
        "type": "Trợ từ",
        "example": "100円しか ありません。(Tôi chỉ có đúng 100 yên.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Cách chia Động từ Thể khả năng (可能形)",
        "explanation": "• Nhóm 1: Chuyển âm cột [i] sang cột [e] + る (書く -> 書ける, 飲む -> 飲める, 話す -> 話せる).\n• Nhóm 2: Bỏ る thêm られる (食べる -> 食べられる, 見る -> 見られる).\n• Nhóm 3: くる -> こられる, する -> できる.",
        "caution": "Trong thể khả năng, tân ngữ đi với trợ từ が thay cho を (日本語を話す -> 日本語が話せる).",
        "examples": [
          {
            "type": "sentence",
            "context": "Khả năng đọc chữ Hán",
            "jp": "わたしは <span class=\"furigana\"><ruby>漢字<rt>かんじ</rt></ruby></span>が <span class=\"furigana\"><ruby>読<rt>よ</rt></ruby>めます</span>。",
            "rawJp": "わたしは漢字が読めます。",
            "vi": "Tôi có thể đọc được chữ Hán."
          }
        ]
      },
      {
        "structure": "2. Phân biệt: 見える vs 見られる, 聞こえる vs 聞ける",
        "explanation": "• 見える / 聞こえる: Khả năng tự nhiên, âm thanh/hình ảnh tự lọt vào mắt/tai không cần nỗ lực.\n• 見られる / 聞ける: Khả năng do có điều kiện, cơ hội hoặc trang bị mới xem/nghe được.",
        "caution": "見える và 聞こえる luôn đi với trợ từ が cho đối tượng lọt vào tầm mắt/tai.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nghe tiếng chim tự nhiên",
            "jp": "<span class=\"furigana\"><ruby>窓<rt>まど</rt></ruby></span>から <span class=\"furigana\"><ruby>鳥<rt>とり</rt></ruby></span>の <span class=\"furigana\"><ruby>声<rt>こえ</rt></ruby></span>が <span class=\"furigana\"><ruby>聞<rt>き</rt></ruby>こえます</span>。",
            "rawJp": "窓から鳥の声が聞こえます。",
            "vi": "Từ cửa sổ nghe thấy tiếng chim hót."
          }
        ]
      }
    ]
  },

  // BÀI 28
  {
    "id": "bai-28",
    "title": "Bài 28: Hành Động Song Song Với 〜ながら & Liệt Kê Lý Do 〜し",
    "level": "Minna no Nihongo N4 (Bài 28)",
    "badge": "Song song & Lý do",
    "description": "Biểu thị 2 hành động diễn ra cùng lúc (V1-bỏ ます + ながら V2), thói quen trong thời gian dài với 〜ています, và liệt kê nhiều lý do dẫn đến kết luận với 〜し、〜し.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>売<rt>う</rt></ruby>れます</span>",
        "hiragana": "うれます",
        "meaning": "Bán chạy (đi với が)",
        "type": "Động từ nhóm 2",
        "example": "この本は よく 売れています。(Cuốn sách này bán rất chạy.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>踊<rt>おど</rt></ruby>ります</span>",
        "hiragana": "おどります",
        "meaning": "Nhảy múa, khiêu vũ",
        "type": "Động từ nhóm 1",
        "example": "盆踊りを 踊ります。(Nhảy điệu múa Bon.)"
      },
      {
        "kanji": "かみます",
        "hiragana": "かみます",
        "meaning": "Nhai, cắn",
        "type": "Động từ nhóm 1",
        "example": "ガムを かみます。(Nhai kẹo cao su.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>選<rt>えら</rt></ruby>びます</span>",
        "hiragana": "えらびます",
        "meaning": "Chọn lựa, tuyển chọn",
        "type": "Động từ nhóm 1",
        "example": "好きな 物を 選びます。(Chọn thứ mình thích.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>通<rt>かよ</rt></ruby>います</span>",
        "hiragana": "かよいます",
        "meaning": "Đi lại thường xuyên (đi học, đi làm - đi với に)",
        "type": "Động self nhóm 1",
        "example": "大学に 通って います。(Đang theo học đại học.)"
      },
      {
        "kanji": "メモします",
        "hiragana": "メモします",
        "meaning": "Ghi chép nhanh, take note",
        "type": "Động từ nhóm 3",
        "example": "手帳に メモします。(Ghi chú vào sổ tay.)"
      },
      {
        "kanji": "まじめな",
        "hiragana": "まじめな",
        "meaning": "Nghiêm túc, chăm chỉ, đứng đắn",
        "type": "Tính từ (na)",
        "example": "まじめな 学生 (Sinh viên nghiêm túc)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>熱心<rt>ねっしん</rt></ruby>な</span>",
        "hiragana": "ねっしんな",
        "meaning": "Nhiệt tình, hăng hái",
        "type": "Tính từ (na)",
        "example": "熱心に 勉強します。(Học tập nhiệt tình.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>偉<rt>えら</rt></ruby>い</span>",
        "hiragana": "えらい",
        "meaning": "Vĩ đại, đáng ngưỡng mộ",
        "type": "Tính từ (i)",
        "example": "偉い 人 (Người vĩ đại)"
      },
      {
        "kanji": "ちょうどいい",
        "hiragana": "ちょうどいい",
        "meaning": "Vừa vặn, vừa vặn đúng lúc",
        "type": "Tính từ (i)",
        "example": "サイズが ちょうどいいです。(Kích cỡ vừa vặn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>習慣<rt>しゅうかん</rt></ruby></span>",
        "hiragana": "しゅうかん",
        "meaning": "Tập quán, thói quen phong tục",
        "type": "Danh từ",
        "example": "日本の 習慣 (Tập quán của người Nhật)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>経験<rt>けいけん</rt></ruby></span>",
        "hiragana": "けいけん",
        "meaning": "Kinh nghiệm thực tế",
        "type": "Danh từ",
        "example": "いい 経験に なりました。(Đã trở thành kinh nghiệm quý báu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>人気<rt>にんき</rt></ruby></span>",
        "hiragana": "にんき",
        "meaning": "Sự yêu thích, hâm mộ",
        "type": "Danh từ",
        "example": "若い人に 人気があります。(Rất được người trẻ hâm mộ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>給料<rt>きゅうりょう</rt></ruby></span>",
        "hiragana": "きゅうりょう",
        "meaning": "Tiền lương",
        "type": "Danh từ",
        "example": "給料を もらいます。(Nhận lương.)"
      },
      {
        "kanji": "ボーナス",
        "hiragana": "ボーナス",
        "meaning": "Tiền thưởng cuối năm/giữa năm",
        "type": "Danh từ",
        "example": "ボーナスが 出ます。(Có tiền thưởng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>番組<rt>ばんぐみ</rt></ruby></span>",
        "hiragana": "ばんぐみ",
        "meaning": "Chương trình truyền hình",
        "type": "Danh từ",
        "example": "テレビの 番組 (Chương trình tivi)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>歌手<rt>かしゅ</rt></ruby></span>",
        "hiragana": "かしゅ",
        "meaning": "Ca sĩ",
        "type": "Danh từ",
        "example": "有名な 歌手 (Ca sĩ nổi tiếng)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>小説<rt>しょうせつ</rt></ruby></span>",
        "hiragana": "しょうせつ",
        "meaning": "Tiểu thuyết",
        "type": "Danh từ",
        "example": "小説を 読みます。(Đọc tiểu thuyết.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V1 (bỏ ます) + ながら, V2 (Vừa làm V1 vừa làm V2)",
        "explanation": "Biểu thị một người thực hiện cùng lúc 2 hành động, trong đó hành động V2 là hành động chính.",
        "caution": "Chủ ngữ của V1 và V2 phải là cùng một người.",
        "examples": [
          {
            "type": "sentence",
            "context": "Vừa nghe nhạc vừa học bài",
            "jp": "<span class=\"furigana\"><ruby>音楽<rt>おんがく</rt></ruby></span>を <span class=\"furigana\"><ruby>聞<rt>き</rt></ruby>きながら</span>、<span class=\"furigana\"><ruby>勉強<rt>べんきょう</rt></ruby>します</span>。",
            "rawJp": "音楽を聞きながら、勉強します。",
            "vi": "Tôi vừa nghe nhạc vừa học bài."
          }
        ]
      },
      {
        "structure": "2. [Thể thông thường] + し、[Thể thông thường] + し (Liệt kê lý do)",
        "explanation": "Dùng để liệt kê từ 2 lý do trở lên cùng tính chất (cùng khen hoặc cùng chê) để đưa ra đánh giá, kết luận.",
        "caution": "Với Tính từ đuôi な và Danh từ ở hiện tại khẳng định, phải thêm だ trước し (親切だし、熱心だし).",
        "examples": [
          {
            "type": "sentence",
            "context": "Khen ngợi quán ăn",
            "jp": "この <span class=\"furigana\"><ruby>店<rt>みせ</rt></ruby></span>は <span class=\"furigana\"><ruby>安<rt>やす</rt></ruby>い</span>し、おいしいし、いつも ここで <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べます</span>。",
            "rawJp": "この店は安いし、おいしいし、いつもここで食べます。",
            "vi": "Quán này vừa rẻ, lại vừa ngon nên tôi thường xuyên ăn ở đây."
          }
        ]
      }
    ]
  },

  // BÀI 29
  {
    "id": "bai-29",
    "title": "Bài 29: Tự Động Từ (自動詞) & Hành Động Hối Tiếc 〜てしまう",
    "level": "Minna no Nihongo N4 (Bài 29)",
    "badge": "Tự động từ & Hối tiếc",
    "description": "Phân biệt Tự động từ & Tha động từ, miêu tả trạng thái kết quả của sự vật với N が V-ています, và biểu thị hành động hoàn thành trọn vẹn hoặc hối tiếc với 〜て しまいました.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>開<rt>あ</rt></ruby>きます</span>",
        "hiragana": "あきます",
        "meaning": "Mở ra (tự động từ, cửa tự mở)",
        "type": "Động từ nhóm 1",
        "example": "ドアが 開きます。(Cửa mở.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>閉<rt>し</rt></ruby>まります</span>",
        "hiragana": "しまります",
        "meaning": "Đóng lại (tự động từ, cửa tự đóng)",
        "type": "Động từ nhóm 1",
        "example": "ドアが 閉まります。(Cửa đóng.)"
      },
      {
        "kanji": "つきます",
        "hiragana": "つきます",
        "meaning": "Bật sáng (tự động từ, đèn tự bật)",
        "type": "Động từ nhóm 1",
        "example": "電気が つきます。(Đèn sáng lên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>消<rt>き</rt></ruby>えます</span>",
        "hiragana": "きえます",
        "meaning": "Tắt ngấm (tự động từ, đèn tự tắt)",
        "type": "Động từ nhóm 2",
        "example": "電気が 消えます。(Đèn tắt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>壊<rt>こわ</rt></ruby>れます</span>",
        "hiragana": "こわれます",
        "meaning": "Hỏng, vỡ nát (tự động từ)",
        "type": "Động từ nhóm 2",
        "example": "椅子が 壊れました。(Cái ghế bị hỏng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>割<rt>わ</rt></ruby>れます</span>",
        "hiragana": "われます",
        "meaning": "Bị vỡ (đĩa, cốc, bát thủy tinh - tự động từ)",
        "type": "Động từ nhóm 2",
        "example": "コップが 割れました。(Cái cốc bị vỡ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>折<rt>お</rt></ruby>れます</span>",
        "hiragana": "おれます",
        "meaning": "Bị gãy (cành cây, xương - tự động từ)",
        "type": "Động từ nhóm 2",
        "example": "枝が 折れました。(Cành cây bị gãy.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>破<rt>やぶ</rt></ruby>れます</span>",
        "hiragana": "やぶれます",
        "meaning": "Bị rách (giấy, túi - tự động từ)",
        "type": "Động từ nhóm 2",
        "example": "紙が 破れました。(Tờ giấy bị rách.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>汚<rt>よご</rt></ruby>れます</span>",
        "hiragana": "よごれます",
        "meaning": "Bị bẩn (quần áo - tự động từ)",
        "type": "Động từ nhóm 2",
        "example": "服が 汚れました。(Quần áo bị lấm bẩn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>外<rt>はず</rt></ruby>れます</span>",
        "hiragana": "はずれます",
        "meaning": "Bị tuột, bung ra (cúc áo - tự động từ)",
        "type": "Động từ nhóm 2",
        "example": "ボタンが 外れました。(Cúc áo bị tuột.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>止<rt>と</rt></ruby>まります</span>",
        "hiragana": "とまります",
        "meaning": "Dừng lại (xe cộ, đồng hồ - tự động từ)",
        "type": "Động từ nhóm 1",
        "example": "車が 止まりました。(Xe ô tô dừng lại.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>落<rt>お</rt></ruby>とします</span>",
        "hiragana": "おとします",
        "meaning": "Đánh rơi (tha động từ)",
        "type": "Động từ nhóm 1",
        "example": "財布を 落としました。(Đánh rơi ví tiền.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>掛<rt>か</rt></ruby>かります</span>",
        "hiragana": "かかります",
        "meaning": "Khóa lại (chìa khóa - tự động từ)",
        "type": "Động từ nhóm 1",
        "example": "鍵が 掛かって います。(Cửa đang khóa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>皿<rt>さら</rt></ruby></span>",
        "hiragana": "さら",
        "meaning": "Cái đĩa",
        "type": "Danh từ",
        "example": "お皿を 洗います。(Rửa đĩa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>茶碗<rt>ちゃわん</rt></ruby></span>",
        "hiragana": "ちゃわん",
        "meaning": "Cái bát ăn cơm",
        "type": "Danh từ",
        "example": "ご飯茶碗 (Bát xới cơm)"
      },
      {
        "kanji": "コップ",
        "hiragana": "コップ",
        "meaning": "Cái cốc thủy tinh",
        "type": "Danh từ",
        "example": "コップに 水を 入れます。(Rót nước vào cốc.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>袋<rt>ふくろ</rt></ruby></span>",
        "hiragana": "ふくろ",
        "meaning": "Cái túi bọc",
        "type": "Danh từ",
        "example": "ビニール袋 (Túi nilon)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>枝<rt>えだ</rt></ruby></span>",
        "hiragana": "えだ",
        "meaning": "Cành cây",
        "type": "Danh từ",
        "example": "木の 枝 (Cành cây)"
      }
    ],
    "grammar": [
      {
        "structure": "1. N が V (Tự động từ) - ています (Trạng thái của sự vật)",
        "explanation": "Dùng tự động từ ở thể 〜ています để miêu tả trạng thái hiện tại là kết quả của một biến đổi đã diễn ra trước đó.",
        "caution": "Chủ thể trạng thái đi với trợ từ が (窓が 割れています). Nếu đưa lên làm chủ đề thì dùng は (この窓は 割れています).",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhìn thấy cửa phòng đang mở",
            "jp": "ドアが <span class=\"furigana\"><ruby>開<rt>あ</rt></ruby>いて</span> います。",
            "rawJp": "ドアが開いています。",
            "vi": "Cửa phòng đang mở."
          }
        ]
      },
      {
        "structure": "2. V-て しまいました (Hoàn thành / Hối tiếc)",
        "explanation": "• Ý nghĩa 1: Biểu thị một hành động đã được hoàn tất trọn vẹn trong quá khứ hoặc sẽ dứt điểm xong trong tương lai.\n• Ý nghĩa 2: Biểu thị tâm trạng hối tiếc, ân hận vì đã lỡ làm một việc không mong muốn ngoài ý muốn.",
        "caution": "Văn nói thân mật thường rút gọn thành 〜ちゃった hoặc 〜じゃった.",
        "examples": [
          {
            "type": "sentence",
            "context": "Lỡ làm mất hộ chiếu",
            "jp": "パスポートを <span class=\"furigana\"><ruby>無<rt>な</rt></ruby>くして</span> しまいました。",
            "rawJp": "パスポートを無くしてしまいました。",
            "vi": "Tôi đã lỡ đánh mất hộ chiếu mất rồi."
          }
        ]
      }
    ]
  },

  // BÀI 30
  {
    "id": "bai-30",
    "title": "Bài 30: Trạng Thái Có Chủ Đích 〜てあります & Chuẩn Bị 〜ておきます",
    "level": "Minna no Nihongo N4 (Bài 30)",
    "badge": "Mục đích & Chuẩn bị",
    "description": "Biểu thị trạng thái kết quả của hành động có chủ ý với N が V-tha động từ-てあります, và 3 cách dùng chuẩn bị sẵn sàng trước với V-て おきます.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>貼<rt>は</rt></ruby>ります</span>",
        "hiragana": "はります",
        "meaning": "Dán (áp phích, tem)",
        "type": "Động từ nhóm 1",
        "example": "壁に ポスターを 貼ります。(Dán áp phích lên tường.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>掛<rt>か</rt></ruby>けます</span>",
        "hiragana": "かけます",
        "meaning": "Treo (lịch, tranh lên tường)",
        "type": "Động từ nhóm 2",
        "example": "カレンダーを 掛けます。(Treo tờ lịch lên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>飾<rt>かざ</rt></ruby>ります</span>",
        "hiragana": "かざります",
        "meaning": "Trang trí, bày biện",
        "type": "Động từ nhóm 1",
        "example": "部屋に 花を 飾ります。(Trang trí hoa trong phòng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>並<rt>なら</rt></ruby>べます</span>",
        "hiragana": "ならべます",
        "meaning": "Xếp thành hàng, bày ra",
        "type": "Động từ nhóm 2",
        "example": "本を 並べます。(Xếp sách thành hàng ngay ngắn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>植<rt>う</rt></ruby>えます</span>",
        "hiragana": "うえます",
        "meaning": "Trồng (cây, hoa)",
        "type": "Động từ nhóm 2",
        "example": "庭に 木を 植えます。(Trồng cây trong vườn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>戻<rt>もど</rt></ruby>します</span>",
        "hiragana": "もどします",
        "meaning": "Đưa về chỗ cũ, trả lại",
        "type": "Động từ nhóm 1",
        "example": "使った 後で、元の 所に 戻します。(Sau khi dùng xong, để lại chỗ cũ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>片<rt>かた</rt></ruby>づけます</span>",
        "hiragana": "かたづけます",
        "meaning": "Dọn dẹp, thu dọn",
        "type": "Động từ nhóm 2",
        "example": "部屋を 片づけます。(Dọn dẹp phòng ốc.)"
      },
      {
        "kanji": "しまいます",
        "hiragana": "しまいます",
        "meaning": "Cất vào trong, cất đi",
        "type": "Động từ nhóm 1",
        "example": "引き出しに しまいます。(Cất vào ngăn kéo.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>決<rt>き</rt></ruby>めます</span>",
        "hiragana": "きめます",
        "meaning": "Quyết định",
        "type": "Động từ nhóm 2",
        "example": "日程を 決めます。(Quyết định lịch trình.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>予習<rt>よしゅう</rt></ruby>します</span>",
        "hiragana": "よしゅうします",
        "meaning": "Chuẩn bị bài mới trước ở nhà",
        "type": "Động từ nhóm 3",
        "example": "明日の 授業を 予習します。(Chuẩn bị trước bài học ngày mai.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>復習<rt>ふくしゅう</rt></ruby>します</span>",
        "hiragana": "ふくしゅうします",
        "meaning": "Ôn tập lại bài cũ",
        "type": "Động từ nhóm 3",
        "example": "習った 文法を 復習します。(Ôn lại ngữ pháp đã học.)"
      },
      {
        "kanji": "そのままにします",
        "hiragana": "そのままにします",
        "meaning": "Để nguyên như thế",
        "type": "Cụm động từ",
        "example": "道具は そのままに して おいてください。(Dụng cụ hãy cứ để nguyên như vậy.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>予定<rt>よてい</rt></ruby></span>",
        "hiragana": "よてい",
        "meaning": "Dự định, kế hoạch lịch trình",
        "type": "Danh từ",
        "example": "今週の 予定 (Lịch trình tuần này)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>知<rt>し</rt></ruby>らせ</span>",
        "hiragana": "しらせ",
        "meaning": "Thông báo, tin báo",
        "type": "Danh từ",
        "example": "合格の 知らせ (Thông báo đỗ kỳ thi)"
      },
      {
        "kanji": "ポスター",
        "hiragana": "ポスター",
        "meaning": "Tấm áp phích, poster",
        "type": "Danh từ",
        "example": "ポスターを 貼ります。(Dán poster.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>箱<rt>はこ</rt></ruby></span>",
        "hiragana": "はこ",
        "meaning": "Cái hộp, thùng",
        "type": "Danh từ",
        "example": "ごみ箱 (Thùng rác)"
      }
    ],
    "grammar": [
      {
        "structure": "1. N が V (Tha động từ) - てあります (Trạng thái có chủ đích)",
        "explanation": "Diễn tả trạng thái hiện tại của đồ vật là kết quả của một hành động do con người cố ý thực hiện vì một mục đích nào đó.",
        "caution": "Động từ bắt buộc phải là tha động từ, và tân ngữ đổi thành trợ từ が (壁に カレンダーが かけてあります).",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhìn thấy chữ viết trên bảng",
            "jp": "<span class=\"furigana\"><ruby>黒板<rt>こくばん</rt></ruby></span>に <span class=\"furigana\"><ruby>字<rt>じ</rt></ruby></span>が <span class=\"furigana\"><ruby>書<rt>か</rt></ruby>いて</span> あります。",
            "rawJp": "黒板に字が書いてあります。",
            "vi": "Trên bảng có viết chữ (ai đó đã cố ý viết lên)."
          }
        ]
      },
      {
        "structure": "2. V-て おきます (Làm trước để chuẩn bị)",
        "explanation": "• Ý nghĩa 1 (Chuẩn bị trước): Làm sẵn hành động trước thời điểm diễn ra sự việc (旅行の まえに、切符を 買って おきます).\n• Ý nghĩa 2 (Sau khi dùng): Đưa sự vật về vị trí cũ hoặc xử lý sau khi làm xong (使ったら、元の 所に 戻して おきます).\n• Ý nghĩa 3 (Giữ nguyên hiện trạng): Cứ để nguyên tình trạng như thế (そのままに して おいてください).",
        "caution": "Văn nói thân mật thường nói tắt thành 〜とく (買っておく -> 買っとく).",
        "examples": [
          {
            "type": "sentence",
            "context": "Đặt phòng khách sạn trước khi đi du lịch",
            "jp": "<span class=\"furigana\"><ruby>旅行<rt>りょこう</rt></ruby></span>の <span class=\"furigana\"><ruby>前<rt>まえ</rt></ruby></span>に、ホテルを <span class=\"furigana\"><ruby>予約<rt>よやく</rt></ruby>して</span> おきます。",
            "rawJp": "旅行の前に、ホテルを予約しておきます。",
            "vi": "Trước khi đi du lịch, tôi sẽ đặt phòng khách sạn trước."
          }
        ]
      }
    ]
  }
];

fs.writeFileSync('data/lessons_26_30.js', `// Lessons 26 to 30 (Minna no Nihongo N4)\nconst lessons_26_30 = ${JSON.stringify(lessons_26_30, null, 2)};\n`, 'utf8');
console.log('Successfully generated data/lessons_26_30.js');
