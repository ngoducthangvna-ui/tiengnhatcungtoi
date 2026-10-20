const fs = require('fs');

const lessons_36_40 = [
  // BÀI 36
  {
    id: "bai-36",
    title: "Bài 36: Mục Đích Với 〜ように & Thay Đổi Thói Quen 〜ようになる",
    level: "Minna no Nihongo N4 (Bài 36)",
    badge: "Mục đích ように & Biến đổi",
    description: "Làm chủ cấu trúc chỉ mục đích 〜ように (đi với động từ không ý chí, thể khả năng hoặc thể phủ định), cấu trúc diễn tả sự biến đổi năng lực 〜ように なりました, và nỗ lực duy trì thói quen 〜ように しています.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>合<rt>あ</rt></ruby>います</span>", hiragana: "あいます", meaning: "Vừa vặn, hợp [kích cỡ, màu sắc] (サイズが〜)", type: "Động từ nhóm 1", example: "この 靴は サイズが 合います。(Đôi giày này vừa kích cỡ.)" },
      { kanji: "<span class=\"furigana\"><ruby>貯金<rt>ちょきん</rt></ruby>します</span>", hiragana: "ちょきんします", meaning: "Tiết kiệm tiền, gửi tiền tiết kiệm", type: "Động từ nhóm 3", example: "将来の ために 貯金します。(Tiết kiệm tiền vì tương lai.)" },
      { kanji: "<span class=\"furigana\"><ruby>過<rt>す</rt></ruby>ぎます</span>", hiragana: "すぎます", meaning: "Quá, trôi qua [giờ hẹn] (7時を〜)", type: "Động từ nhóm 2", example: "約束の 時間を 過ぎました。(Đã quá giờ hẹn.)" },
      { kanji: "<span class=\"furigana\"><ruby>慣<rt>な</rt></ruby>れます</span>", hiragana: "なれます", meaning: "Quen thuộc với [cuộc sống, công việc] (生活に〜)", type: "Động từ nhóm 2", example: "日本の 生活に 慣れました。(Tôi đã quen với cuộc sống ở Nhật.)" },
      { kanji: "<span class=\"furigana\"><ruby>腐<rt>くさ</rt></ruby>ります</span>", hiragana: "くさります", meaning: "Bị thiu, hỏng, ôi thiu [thức ăn]", type: "Động từ nhóm 1", example: "魚が 腐りやすいです。(Cá rất dễ bị ươn.)" },
      { kanji: "<span class=\"furigana\"><ruby>太<rt>ふと</rt></ruby>ります</span>", hiragana: "ふとります", meaning: "Béo lên, tăng cân", type: "Động từ nhóm 1", example: "最近 少し 太りました。(Gần đây tôi béo lên một chút.)" },
      { kanji: "<span class=\"furigana\">やせます</span>", hiragana: "やせます", meaning: "Gầy đi, giảm cân", type: "Động từ nhóm 2", example: "運動して やせました。(Tập thể dục nên đã giảm cân.)" },
      { kanji: "<span class=\"furigana\"><ruby>硬<rt>かた</rt></ruby>い</span>", hiragana: "かたい", meaning: "Cứng, rắn chắc", type: "Tính từ đuôi い", example: "この 肉は 硬いです。(Thịt này dai/cứng.)" },
      { kanji: "<span class=\"furigana\"><ruby>軟<rt>やわ</rt></ruby>らかい</span>", hiragana: "やわらかい", meaning: "Mềm mại, dẻo", type: "Tính từ đuôi い", example: "柔らかい パンを 食べます。(Ăn bánh mì mềm.)" },
      { kanji: "<span class=\"furigana\"><ruby>剣道<rt>けんどう</rt></ruby></span>", hiragana: "けんどう", meaning: "Kiếm đạo Nhật Bản", type: "Danh từ", example: "剣道を 習って います。(Tôi đang học kiếm đạo.)" },
      { kanji: "<span class=\"furigana\"><ruby>水泳<rt>すいえい</rt></ruby></span>", hiragana: "すいえい", meaning: "Môn bơi lội", type: "Danh từ", example: "水泳は 健康に いいです。(Bơi lội rất tốt cho sức khỏe.)" },
      { kanji: "<span class=\"furigana\">ラッシュ</span>", hiragana: "ラッシュ", meaning: "Giờ cao điểm tắc đường/đông đúc (rush hour)", type: "Danh từ", example: "朝の ラッシュは 大変です。(Giờ cao điểm buổi sáng thật vất vả.)" },
      { kanji: "<span class=\"furigana\"><ruby>宇宙<rt>うちゅう</rt></ruby></span>", hiragana: "うちゅう", meaning: "Vũ trụ", type: "Danh từ", example: "宇宙の 神秘を 研究します。(Nghiên cứu sự bí ẩn của vũ trụ.)" },
      { kanji: "<span class=\"furigana\"><ruby>電子<rt>でんし</rt></ruby></span>", hiragana: "でんし", meaning: "Điện tử (電子辞書, 電子メール)", type: "Danh từ", example: "電子辞書を 使います。(Dùng từ điển điện tử.)" },
      { kanji: "<span class=\"furigana\"><ruby>工場<rt>こうじょう</rt></ruby></span>", hiragana: "こうじょう", meaning: "Nhà máy, công xưởng sản xuất", type: "Danh từ", example: "自動車の 工場で 働きます。(Làm việc ở nhà máy ô tô.)" },
      { kanji: "<span class=\"furigana\"><ruby>健康<rt>けんこう</rt></ruby></span>", hiragana: "けんこう", meaning: "Sức khỏe", type: "Danh từ", example: "健康の ために 走ります。(Chạy bộ vì sức khỏe.)" },
      { kanji: "<span class=\"furigana\">やっと</span>", hiragana: "やっと", meaning: "Cuối cùng thì (sau bao gian khổ nỗ lực)", type: "Phó từ", example: "やっと 自転車に 乗れるように なりました。(Cuối cùng thì tôi cũng biết đi xe đạp.)" },
      { kanji: "<span class=\"furigana\"><ruby>必<rt>かなら</rt></ruby>ず</span>", hiragana: "かならず", meaning: "Nhất định, chắc chắn sẽ làm", type: "Phó từ", example: "必ず 約束を 守ります。(Nhất định tôi sẽ giữ lời hứa.)" },
      { kanji: "<span class=\"furigana\"><ruby>絶対<rt>ぜったい</rt></ruby>に</span>", hiragana: "ぜったいに", meaning: "Tuyệt đối (thường đi với phủ định)", type: "Phó từ", example: "絶対に うそを つきません。(Tuyệt đối tôi không nói dối.)" },
      { kanji: "<span class=\"furigana\"><ruby>上手<rt>じょうず</rt></ruby>に</span>", hiragana: "じょうずに", meaning: "Một cách giỏi giang, thành thạo", type: "Phó từ", example: "上手に 話せるように なりました。(Tôi đã có thể nói chuyện lưu loát.)" },
      { kanji: "<span class=\"furigana\">できるだけ</span>", hiragana: "できるだけ", meaning: "Cố gắng hết sức có thể", type: "Phó từ", example: "できるだけ 早く 来てください。(Hãy đến càng sớm càng tốt nhé.)" },
      { kanji: "<span class=\"furigana\">このごろ</span>", hiragana: "このごろ", meaning: "Dạo này, dạo gần đây", type: "Danh từ / Phó từ", example: "このごろ 寒く なりました。(Dạo này trời trở lạnh rồi.)" }
    ],
    grammar: [
      {
        structure: "1. V1-る / V1-ない + ように、V2 (Mục đích hướng tới trạng thái)",
        explanation: "Dùng để diễn tả hành động V2 được thực hiện nhằm đạt được mục đích hoặc phòng tránh trạng thái ở V1.\n• V1 là ĐỘNG TỪ KHÔNG CÓ Ý CHÍ (tự động từ, động từ khả năng) hoặc ĐỘNG TỪ THỂ PHỦ ĐỊNH (V-ない ように).\n• Khác với 〜ために (chỉ đi với động từ ý chí: 買うために).",
        caution: "Để không quên dùng: 忘れないように (V-ない + ように). Để nhìn rõ dùng: 見えるように (thể khả năng + ように).",
        examples: [
          {
            type: "sentence",
            context: "Ghi chép vào sổ tay để khỏi quên",
            jp: "<span class=\"furigana\"><ruby>忘<rt>わす</rt></ruby>れないように</span>、手帳に メモして おきます。",
            rawJp: "忘れないように、手帳にメモしておきます。",
            vi: "Để không bị quên, tôi ghi chú sẵn vào sổ tay."
          },
          {
            type: "sentence",
            context: "Nói to để người phía sau cũng nghe được",
            jp: "<span class=\"furigana\"><ruby>後<rt>うし</rt></ruby>ろの</span> <span class=\"furigana\"><ruby>人<rt>ひと</rt></ruby>にも</span> <span class=\"furigana\"><ruby>聞<rt>き</rt></ruby>こえるように</span>、<span class=\"furigana\"><ruby>大<rt>おお</rt></ruby>きな</span> <span class=\"furigana\"><ruby>声<rt>こえ</rt></ruby>で</span> <span class=\"furigana\"><ruby>話<rt>はな</rt></ruby>します</span>。",
            rawJp: "後ろの人にも聞こえるように、大きな声で話します。",
            vi: "Tôi nói to để người ngồi phía sau cũng có thể nghe thấy."
          }
        ]
      },
      {
        structure: "2. V-る / V-ない + ように なりました (Biến đổi năng lực & thói quen)",
        explanation: "Biểu thị sự biến đổi trạng thái: từ chỗ trước đây không thể làm được, nay đã trở nên có thể làm được việc gì, hoặc bắt đầu hình thành một thói quen mới.",
        caution: "Đi với thể khả năng (話せるように なりました) hoặc tự động từ.",
        examples: [
          {
            type: "sentence",
            context: "Khả năng nói tiếng Nhật tiến bộ",
            jp: "<span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>の <span class=\"furigana\"><ruby>新聞<rt>しんぶん</rt></ruby></span>が <span class=\"furigana\"><ruby>読<rt>よ</rt></ruby>めるように</span> なりました。",
            rawJp: "日本語の新聞が読めるようになりました。",
            vi: "Tôi đã trở nên có thể đọc được báo tiếng Nhật."
          }
        ]
      },
      {
        structure: "3. V-る / V-ない + ように して います (Cố gắng duy trì thói quen tốt)",
        explanation: "Biểu thị sự nỗ lực, quyết tâm của người nói trong việc cố gắng duy trì một thói quen có lợi hoặc kiêng cữ một điều có hại một cách đều đặn mỗi ngày.",
        caution: "Khác với 習慣, cấu trúc này nhấn mạnh vào Ý THỨC NỖ LỰC rèn luyện của bản thân.",
        examples: [
          {
            type: "sentence",
            context: "Cố gắng ăn nhiều rau vì sức khỏe",
            jp: "<span class=\"furigana\"><ruby>毎日<rt>まいにち</rt></ruby></span> <span class=\"furigana\"><ruby>野菜<rt>やさい</rt></ruby></span>を たくさん <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べるように</span> して います。",
            rawJp: "毎日野菜をたくさん食べるようにしています。",
            vi: "Tôi luôn cố gắng ăn nhiều rau củ mỗi ngày."
          }
        ]
      },
      {
        structure: "4. V-る / V-ない + ように して ください (Lời khuyên nhủ ân cần / Kiêng cữ)",
        explanation: "Dùng để đưa ra lời nhắc nhở, khuyên nhủ người nghe hãy cố gắng thực hiện hoặc tránh làm điều gì một cách mềm mỏng, gián tiếp hơn so với 〜てください.",
        caution: "Không dùng để yêu cầu thực hiện ngay hành động tức thời trước mắt.",
        examples: [
          {
            type: "sentence",
            context: "Bác sĩ dặn dò uống thuốc đúng giờ",
            jp: "<span class=\"furigana\"><ruby>時間<rt>じかん</rt></ruby></span>どおりに <span class=\"furigana\"><ruby>薬<rt>くすり</rt></ruby></span>を <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>むように</span> して ください。",
            rawJp: "時間どおりに薬を飲むようにしてください。",
            vi: "Xin bác hãy cố gắng uống thuốc đúng giờ nhé."
          }
        ]
      }
    ]
  },

  // BÀI 37
  {
    id: "bai-37",
    title: "Bài 37: Thể Bị Động (受身形: うけみけい)",
    level: "Minna no Nihongo N4 (Bài 37)",
    badge: "Thể bị động 受身形",
    description: "Nắm vững quy tắc chia thể bị động cho 3 nhóm động từ, phân biệt bị động trực tiếp và bị động gián tiếp (gây phiền toái), và cách dùng 〜によって khi đề cập tác giả phát minh, công trình nổi tiếng.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>褒<rt>ほ</rt></ruby>めます</span>", hiragana: "ほめます", meaning: "Khen ngợi, tán thưởng", type: "Động từ nhóm 2", example: "先生に 褒められました。(Tôi được cô giáo khen ngợi.)" },
      { kanji: "<span class=\"furigana\"><ruby>叱<rt>しか</rt></ruby>ります</span>", hiragana: "しかります", meaning: "Mắng mỏ, la rầy", type: "Động từ nhóm 1", example: "母に 叱られました。(Tôi bị mẹ mắng.)" },
      { kanji: "<span class=\"furigana\"><ruby>誘<rt>さそ</rt></ruby>います</span>", hiragana: "さそいます", meaning: "Mời mọc, rủ rê [đi chơi, ăn uống]", type: "Động từ nhóm 1", example: "友達を 映画に 誘います。(Rủ bạn đi xem phim.)" },
      { kanji: "<span class=\"furigana\"><ruby>起<rt>お</rt></ruby>こします</span>", hiragana: "おこします", meaning: "Đánh thức ai dậy", type: "Động từ nhóm 1 (Tha)", example: "朝 弟を 起こします。(Đánh thức em trai dậy vào buổi sáng.)" },
      { kanji: "<span class=\"furigana\"><ruby>頼<rt>たの</rt></ruby>みます</span>", hiragana: "たのみます", meaning: "Nhờ vả, yêu cầu", type: "Động từ nhóm 1", example: "仕事を 頼まれました。(Tôi được nhờ làm công việc.)" },
      { kanji: "<span class=\"furigana\"><ruby>踏<rt>ふ</rt></ruby>みます</span>", hiragana: "ふみます", meaning: "Dẫm lên, giẫm vào [chân]", type: "Động từ nhóm 1", example: "電車で 足を 踏まれました。(Tôi bị giẫm vào chân trên tàu điện.)" },
      { kanji: "<span class=\"furigana\"><ruby>壊<rt>こわ</rt></ruby>します</span>", hiragana: "こわします", meaning: "Làm hỏng, phá vỡ", type: "Động từ nhóm 1 (Tha)", example: "弟に パソコンを 壊されました。(Tôi bị em trai làm hỏng máy tính.)" },
      { kanji: "<span class=\"furigana\"><ruby>汚<rt>よご</rt></ruby>します</span>", hiragana: "よごします", meaning: "Làm bẩn, vấy bẩn", type: "Động từ nhóm 1 (Tha)", example: "服を 汚されました。(Tôi bị làm bẩn quần áo.)" },
      { kanji: "<span class=\"furigana\"><ruby>行<rt>おこな</rt></ruby>います</span>", hiragana: "おこないます", meaning: "Tổ chức, tiến hành [hội nghị, sự kiện]", type: "Động từ nhóm 1", example: "会議が 行われます。(Cuộc họp được tổ chức.)" },
      { kanji: "<span class=\"furigana\"><ruby>輸出<rt>ゆしゅつ</rt></ruby>します</span>", hiragana: "ゆしゅつします", meaning: "Xuất khẩu [hàng hóa]", type: "Động từ nhóm 3", example: "車を 海外へ 輸出します。(Xuất khẩu ô tô ra nước ngoài.)" },
      { kanji: "<span class=\"furigana\"><ruby>輸入<rt>ゆにゅう</rt></ruby>します</span>", hiragana: "ゆにゅうします", meaning: "Nhập khẩu [nguyên liệu]", type: "Động từ nhóm 3", example: "石油を 輸入します。(Nhập khẩu dầu mỏ.)" },
      { kanji: "<span class=\"furigana\"><ruby>翻訳<rt>ほんやく</rt></ruby>します</span>", hiragana: "ほんやくします", meaning: "Dịch thuật, biên dịch văn bản", type: "Động từ nhóm 3", example: "小説を ベトナム語に 翻訳します。(Dịch tiểu thuyết sang tiếng Việt.)" },
      { kanji: "<span class=\"furigana\"><ruby>発明<rt>はつめい</rt></ruby>します</span>", hiragana: "はつめいします", meaning: "Phát minh ra [máy móc, công nghệ mới]", type: "Động từ nhóm 3", example: "新しい 機械を 発明しました。(Phát minh ra máy móc mới.)" },
      { kanji: "<span class=\"furigana\"><ruby>発見<rt>はっけん</rt></ruby>します</span>", hiragana: "はっけんします", meaning: "Phát hiện ra, tìm thấy [vùng đất, di tích]", type: "Động từ nhóm 3", example: "新しい 星を 発見しました。(Phát hiện ra ngôi sao mới.)" },
      { kanji: "<span class=\"furigana\"><ruby>米<rt>こめ</rt></ruby></span>", hiragana: "こめ", meaning: "Gạo, hạt gạo", type: "Danh từ", example: "日本は 米を 大切に します。(Người Nhật rất trân trọng hạt gạo.)" },
      { kanji: "<span class=\"furigana\"><ruby>麦<rt>むぎ</rt></ruby></span>", hiragana: "むぎ", meaning: "Lúa mì, mạch", type: "Danh từ", example: "麦から ビールを 作ります。(Làm bia từ lúa mạch.)" },
      { kanji: "<span class=\"furigana\"><ruby>石油<rt>せきゆ</rt></ruby></span>", hiragana: "せきゆ", meaning: "Dầu mỏ, dầu hỏa", type: "Danh từ", example: "石油は 貴重な 資源です。(Dầu mỏ là tài nguyên quý giá.)" },
      { kanji: "<span class=\"furigana\"><ruby>原料<rt>げんりょう</rt></ruby></span>", hiragana: "げんりょう", meaning: "Nguyên liệu thô (đã biến đổi chất)", type: "Danh từ", example: "ビールの 原料は 麦です。(Nguyên liệu của bia là lúa mạch.)" },
      { kanji: "<span class=\"furigana\"><ruby>泥棒<rt>どろぼう</rt></ruby></span>", hiragana: "どろぼう", meaning: "Kẻ trộm, tên trộm", type: "Danh từ", example: "泥棒に お金を 盗まれました。(Tôi bị kẻ trộm lấy cắp tiền.)" },
      { kanji: "<span class=\"furigana\"><ruby>警官<rt>けいかん</rt></ruby></span>", hiragana: "けいかん", meaning: "Cảnh sát viên", type: "Danh từ", example: "警官が 泥棒を 捕まえました。(Cảnh sát bắt giữ tên trộm.)" },
      { kanji: "<span class=\"furigana\"><ruby>建築家<rt>けんちくか</rt></ruby></span>", hiragana: "けんちくか", meaning: "Kiến trúc sư", type: "Danh từ", example: "有名な 建築家が 設計しました。(Kiến trúc sư nổi tiếng đã thiết kế.)" },
      { kanji: "<span class=\"furigana\"><ruby>科学者<rt>かがくしゃ</rt></ruby></span>", hiragana: "かがくしゃ", meaning: "Nhà khoa học", type: "Danh từ", example: "科学者が 新薬を 開発しました。(Nhà khoa học đã phát triển thuốc mới.)" },
      { kanji: "<span class=\"furigana\"><ruby>漫画<rt>まんが</rt></ruby></span>", hiragana: "まんが", meaning: "Truyện tranh Manga", type: "Danh từ", example: "日本の 漫画は 世界中で 読まれて います。(Truyện tranh Nhật được đọc khắp thế giới.)" },
      { kanji: "<span class=\"furigana\">〜によって</span>", hiragana: "〜によって", meaning: "Bởi 〜 (chỉ tác giả sáng tạo, phát minh)", type: "Cụm trợ từ", example: "電話は ベルによって 発明されました。(Điện thoại được phát minh bởi Bell.)" }
    ],
    grammar: [
      {
        structure: "1. Thể bị động (受身形: うけみけい) - Quy tắc chia",
        explanation: "• Nhóm 1: Chuyển hàng [i] trước ます sang hàng [a] rồi thêm れます (書きます -> 書かれます, 褒めます -> 褒められます, 叱ります -> 叱られます).\n• Nhóm 2: Bỏ ます thêm られます (食べます -> 食べられます, 見ます -> 見られます).\n• Nhóm 3: します -> されます, 来ます(きます) -> 来られます(こられます).",
        caution: "Tất cả các động từ sau khi chia sang bị động đều biến thành ĐỘNG TỪ NHÓM 2.",
        examples: [
          {
            type: "sentence",
            context: "Được sếp khen ngợi",
            jp: "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は <span class=\"furigana\"><ruby>部長<rt>ぶちょう</rt></ruby></span>に <span class=\"furigana\"><ruby>褒<rt>ほ</rt></ruby>められました</span>。",
            rawJp: "私は部長に褒められました。",
            vi: "Tôi đã được trưởng phòng khen ngợi."
          }
        ]
      },
      {
        structure: "2. Bị động trực tiếp: Người B は Người A に V-(bị động)",
        explanation: "Diễn tả việc người B nhận một hành vi tác động trực tiếp từ người A (A là chủ thể gây ra hành động, đi với trợ từ に).",
        caution: "Nếu mang hàm ý biết ơn vì được ai giúp việc gì thì dùng 〜てもらいました thay vì thể bị động.",
        examples: [
          {
            type: "sentence",
            context: "Được bạn rủ đi xem phim",
            jp: "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は <span class=\"furigana\"><ruby>友達<rt>ともだち</rt></ruby></span>に パーティーに <span class=\"furigana\"><ruby>誘<rt>さそ</rt></ruby>われました</span>。",
            rawJp: "私は友達にパーティーに誘われました。",
            vi: "Tôi được bạn bè rủ đi dự tiệc."
          }
        ]
      },
      {
        structure: "3. Bị động gián tiếp (Tổn hại): B は A に [Đồ vật] を V-(bị động)",
        explanation: "Diễn tả việc người A thực hiện hành vi lên đồ vật thuộc quyền sở hữu của người B, và hành vi đó gây phiền toái, thiệt hại, khó chịu cho người B.",
        caution: "Không được nói: 私の足は 踏まれました (SAI). Phải nói: 私は 足を 踏まれました (ĐÚNG).",
        examples: [
          {
            type: "sentence",
            context: "Bị kẻ trộm móc mất ví",
            jp: "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は <span class=\"furigana\"><ruby>泥棒<rt>どろぼう</rt></ruby></span>に <span class=\"furigana\"><ruby>財布<rt>さいふ</rt></ruby></span>を <span class=\"furigana\"><ruby>盗<rt>ぬす</rt></ruby>まれました</span>。",
            rawJp: "私は泥棒に財布を盗まれました。",
            vi: "Tôi bị kẻ trộm đánh cắp mất ví tiền."
          }
        ]
      },
      {
        structure: "4. Vật は / が V-(bị động) (Bị động vô nhân xưng)",
        explanation: "Dùng khi thông báo về một sự vật, sự kiện được phát minh, xây dựng, xuất khẩu, tổ chức mà không cần nêu rõ chủ thể hành động là ai.",
        caution: "Thường dùng trong các bản tin báo chí, tài liệu lịch sử.",
        examples: [
          {
            type: "sentence",
            context: "Hội nghị quốc tế được tổ chức tại Tokyo",
            jp: "<span class=\"furigana\"><ruby>東京<rt>とうきょう</rt></ruby></span>で <span class=\"furigana\"><ruby>国際会議<rt>こくさいかいぎ</rt></ruby></span>が <span class=\"furigana\"><ruby>行<rt>おこな</rt></ruby>われました</span>。",
            rawJp: "東京で国際会議が行われました。",
            vi: "Hội nghị quốc tế đã được tổ chức tại Tokyo."
          }
        ]
      },
      {
        structure: "5. Vật は Người nổi tiếng + によって V-(bị động)",
        explanation: "Khi muốn nêu rõ danh tính tác giả, kiến trúc sư hoặc nhà khoa học đã tạo ra tác phẩm hoặc công trình vĩ đại, ta dùng cụm 〜によって.",
        caution: "Không dùng trợ từ に đơn thuần mà phải dùng によって.",
        examples: [
          {
            type: "sentence",
            context: "Mì ăn liền được phát minh bởi Ando Momofuku",
            jp: "インスタントラーメンは <span class=\"furigana\"><ruby>安藤百福<rt>あんどうももふく</rt></ruby></span><span class=\"furigana\">によって</span> <span class=\"furigana\"><ruby>発明<rt>はつめい</rt></ruby>されました</span>。",
            rawJp: "インスタントラーメンは安藤百福によって発明されました。",
            vi: "Mì ăn liền được phát minh bởi ông Ando Momofuku."
          }
        ]
      }
    ]
  },

  // BÀI 38
  {
    id: "bai-38",
    title: "Bài 38: Danh Từ Hóa Động Từ Bằng の (〜のは / 〜のを)",
    level: "Minna no Nihongo N4 (Bài 38)",
    badge: "Danh từ hóa bằng の",
    description: "Thành thạo kỹ thuật danh từ hóa mệnh đề bằng trợ từ の để biến một hành động thành chủ ngữ (〜のは), tân ngữ (〜のを), hoặc tạo mẫu câu nhấn mạnh thông tin (〜のは...です).",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>参加<rt>さんか</rt></ruby>します</span>", hiragana: "さんかします", meaning: "Tham gia, tham dự (đi với に)", type: "Động từ nhóm 3", example: "ボランティアに 参加します。(Tham gia hoạt động tình nguyện.)" },
      { kanji: "<span class=\"furigana\"><ruby>育<rt>そだ</rt></ruby>てます</span>", hiragana: "そだてます", meaning: "Nuôi nấng [con cái], trồng trọt [cây cảnh]", type: "Động từ nhóm 2", example: "花を 育てます。(Trồng hoa chăm bón cây.)" },
      { kanji: "<span class=\"furigana\"><ruby>運<rt>はこ</rt></ruby>びます</span>", hiragana: "はこびます", meaning: "Vận chuyển, bê vác đồ", type: "Động từ nhóm 1", example: "重い 荷物を 運びます。(Khuân vác hành lý nặng.)" },
      { kanji: "<span class=\"furigana\"><ruby>入院<rt>にゅういん</rt></ruby>します</span>", hiragana: "にゅういんします", meaning: "Nhập viện, nằm viện điều trị", type: "Động từ nhóm 3", example: "病院に 入院します。(Nhập viện điều trị.)" },
      { kanji: "<span class=\"furigana\"><ruby>退院<rt>たいいん</rt></ruby>します</span>", hiragana: "たいいんします", meaning: "Xuất viện", type: "Động từ nhóm 3", example: "来週 退院します。(Tuần sau xuất viện.)" },
      { kanji: "<span class=\"furigana\"><ruby>入<rt>い</rt></ruby>れます</span>", hiragana: "いれます", meaning: "Bật [công tắc nguồn] (電源を〜)", type: "Động từ nhóm 2", example: "電源を 入れます。(Bật nguồn điện.)" },
      { kanji: "<span class=\"furigana\"><ruby>切<rt>き</rt></ruby>ります</span>", hiragana: "きります", meaning: "Tắt [công tắc nguồn] (電源を〜)", type: "Động từ nhóm 1", example: "電源を 切ります。(Ngắt nguồn điện.)" },
      { kanji: "<span class=\"furigana\"><ruby>掛<rt>か</rt></ruby>けます</span>", hiragana: "かけます", meaning: "Khóa [ổ khóa] (鍵を〜)", type: "Động từ nhóm 2", example: "鍵を 掛けます。(Khóa cửa lại.)" },
      { kanji: "<span class=\"furigana\"><ruby>気持<rt>きも</rt></ruby>ちが いい</span>", hiragana: "きもちがいい", meaning: "Cảm giác khoan khoái, dễ chịu", type: "Cụm tính từ", example: "朝の 風は 気持ちが いいです。(Gió buổi sáng thật khoan khoái.)" },
      { kanji: "<span class=\"furigana\"><ruby>気持<rt>きも</rt></ruby>ちが <ruby>悪<rt>わる</rt></ruby>い</span>", hiragana: "きもちがわるい", meaning: "Cảm giác tởm lợm, khó chịu", type: "Cụm tính từ", example: "気分が 悪いです。(Trong người khó chịu.)" },
      { kanji: "<span class=\"furigana\"><ruby>大<rt>おお</rt></ruby>きな</span>", hiragana: "おおきな", meaning: "To lớn (định từ: 大きな〜)", type: "Liên thể từ", example: "大きな 声で 話します。(Nói bằng giọng to.)" },
      { kanji: "<span class=\"furigana\"><ruby>小<rt>ちい</rt></ruby>さな</span>", hiragana: "ちいさな", meaning: "Nhỏ bé (định từ: 小さな〜)", type: "Liên thể từ", example: "小さな 鳥を 見ました。(Thấy một chú chim nhỏ.)" },
      { kanji: "<span class=\"furigana\"><ruby>赤<rt>あか</rt></ruby>ちゃん</span>", hiragana: "あかちゃん", meaning: "Em bé sơ sinh", type: "Danh từ", example: "赤ちゃんが 笑って います。(Em bé đang mỉm cười.)" },
      { kanji: "<span class=\"furigana\"><ruby>海岸<rt>かいがん</rt></ruby></span>", hiragana: "かいがん", meaning: "Bờ biển, bãi biển", type: "Danh từ", example: "海岸を 散歩します。(Đi dạo dọc bờ biển.)" },
      { kanji: "<span class=\"furigana\"><ruby>指輪<rt>ゆびわ</rt></ruby></span>", hiragana: "ゆびわ", meaning: "Nhẫn đeo tay", type: "Danh từ", example: "結婚指輪を はめます。(Đeo nhẫn cưới.)" },
      { kanji: "<span class=\"furigana\"><ruby>電源<rt>でんげん</rt></ruby></span>", hiragana: "でんげん", meaning: "Nguồn điện, nút nguồn", type: "Danh từ", example: "電源を 切って ください。(Xin hãy tắt nguồn điện.)" }
    ],
    grammar: [
      {
        structure: "1. V-る + のは + Tính từ です (Danh từ hóa làm chủ ngữ)",
        explanation: "Dùng để biến một cụm hành động thành chủ ngữ trong câu để nhận định hoặc đánh giá tính chất của việc đó.\n• Thường đi kèm các tính từ như: おもしろい、難しい、楽しい、大変だ...",
        caution: "Bắt buộc phải có trợ từ の đứng sau thể từ điển V-る để biến cụm động từ thành danh từ.",
        examples: [
          {
            type: "sentence",
            context: "Nhận định việc học chữ Hán là khó",
            jp: "<span class=\"furigana\"><ruby>漢字<rt>かんじ</rt></ruby></span>を <span class=\"furigana\"><ruby>覚<rt>おぼ</rt></ruby>える</span><span class=\"furigana\">のは</span> <span class=\"furigana\"><ruby>難<rt>むずか</rt></ruby>しいです</span>。",
            rawJp: "漢字を覚えるのは難しいです。",
            vi: "Việc ghi nhớ chữ Hán rất là khó."
          }
        ]
      },
      {
        structure: "2. V-る + のが + Tính từ です (Sở thích / Năng khiếu)",
        explanation: "Dùng để diễn tả sở thích, năng khiếu, sự nhanh nhẹn hoặc vụng về đối với một hoạt động cụ thể.\n• Đi với các tính từ: 好き、嫌い、上手、下手、速い、遅い...",
        caution: "Tân ngữ sở thích đi với trợ từ が.",
        examples: [
          {
            type: "sentence",
            context: "Sở thích chụp ảnh phong cảnh",
            jp: "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は <span class=\"furigana\"><ruby>写真<rt>しゃしん</rt></ruby></span>を <span class=\"furigana\"><ruby>撮<rt>と</rt></ruby>る</span><span class=\"furigana\">のが</span> <span class=\"furigana\"><ruby>好<rt>す</rt></ruby>きです</span>。",
            rawJp: "私は写真を撮るのが好きです。",
            vi: "Tôi rất thích việc chụp ảnh."
          }
        ]
      },
      {
        structure: "3. V-る + のを 忘れました (Quên mất việc phải làm)",
        explanation: "Dùng khi người nói đã lơ đễnh quên không thực hiện một việc mà đáng lẽ ra mình phải làm.",
        caution: "Khác với「傘を 忘れました」(quên vật chất):「傘を 持って 来るのを 忘れました」(quên hành động mang theo ô).",
        examples: [
          {
            type: "sentence",
            context: "Quên mua sữa khi ghé siêu thị",
            jp: "<span class=\"furigana\"><ruby>牛乳<rt>ぎゅうにゅう</rt></ruby></span>を <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>う</span><span class=\"furigana\">のを</span> <span class=\"furigana\"><ruby>忘<rt>わす</rt></ruby>れました</span>。",
            rawJp: "牛乳を買うのを忘れました。",
            vi: "Tôi quên mất việc phải mua sữa bò rồi."
          }
        ]
      },
      {
        structure: "4. Thể thông thường + のを 知って いますか (Bạn có biết việc... hay không?)",
        explanation: "Dùng để hỏi xem đối phương đã biết về một sự thật hoặc tin tức nào đó hay chưa.",
        caution: "Nếu chưa biết, câu trả lời bắt buộc là:「いいえ、知りませんでした」(Dạ, tôi chưa từng biết chuyện đó).",
        examples: [
          {
            type: "dialogue",
            context: "Hỏi về tin tức anh Tanaka sắp lấy vợ",
            lines: [
              { speaker: "A", jp: "<span class=\"furigana\"><ruby>田中<rt>たなか</rt></ruby>さん</span>が <span class=\"furigana\"><ruby>結婚<rt>けっこん</rt></ruby>する</span><span class=\"furigana\">のを</span> <span class=\"furigana\"><ruby>知<rt>し</rt></ruby>って</span> いますか。", rawJp: "田中さんが結婚するのを知っていますか。", vi: "Bạn có biết việc anh Tanaka sắp kết hôn không?" },
              { speaker: "B", jp: "いいえ、<span class=\"furigana\"><ruby>知<rt>し</rt></ruby>りませんでした</span>。", rawJp: "いいえ、知りませんでした。", vi: "Chưa, tôi không biết chuyện đó." }
            ]
          }
        ]
      },
      {
        structure: "5. Thể thông thường + のは N です (Mẫu câu nhấn mạnh thông tin)",
        explanation: "Dùng để nhấn mạnh danh từ N ở cuối câu (về thời gian, địa điểm, con người, nguyên nhân).",
        caution: "Đưa thông tin phụ lên đầu câu danh từ hóa bằng のは, phần cần nhấn mạnh đặt ngay trước です.",
        examples: [
          {
            type: "sentence",
            context: "Nhấn mạnh nơi mình được sinh ra",
            jp: "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>が <span class=\"furigana\"><ruby>生<rt>う</rt></ruby>まれた</span><span class=\"furigana\">のは</span> ベトナムの ハノイ<span class=\"furigana\">です</span>。",
            rawJp: "私が生まれたのはベトナムのハノイです。",
            vi: "Nơi tôi được sinh ra chính là thủ đô Hà Nội, Việt Nam."
          }
        ]
      }
    ]
  },

  // BÀI 39
  {
    id: "bai-39",
    title: "Bài 39: Nguyên Nhân & Lý Do Với 〜て / 〜で / 〜ので",
    level: "Minna no Nihongo N4 (Bài 39)",
    badge: "Nguyên nhân lý do",
    description: "Nắm vững cách biểu đạt nguyên nhân khách quan, cảm xúc tự nhiên bằng thể V-て / V-なくて / A-くて / Na-で, nguyên nhân thiên tai dịch bệnh bằng N で, và cách dùng 〜ので lịch sự nhẹ nhàng.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>答<rt>こた</rt></ruby>えます</span>", hiragana: "こたえます", meaning: "Trả lời [câu hỏi] (質問に〜)", type: "Động từ nhóm 2", example: "質問に 答えます。(Trả lời câu hỏi.)" },
      { kanji: "<span class=\"furigana\"><ruby>倒<rt>たお</rt></ruby>れます</span>", hiragana: "たおれます", meaning: "Đổ, ngã [cây, nhà cửa] (木が〜)", type: "Động từ nhóm 2 (Tự)", example: "台風で 木が 倒れました。(Cây bị đổ do bão.)" },
      { kanji: "<span class=\"furigana\"><ruby>焼<rt>や</rt></ruby>けます</span>", hiragana: "やけます", meaning: "Cháy, nướng chín [bánh, nhà bị cháy]", type: "Động từ nhóm 2 (Tự)", example: "パンが 焼けました。(Bánh mì đã nướng chín.)" },
      { kanji: "<span class=\"furigana\"><ruby>通<rt>とお</rt></ruby>ります</span>", hiragana: "とおれます", meaning: "Đi qua, chạy qua [đường]", type: "Động từ nhóm 1", example: "道を 通ります。(Đi ngang qua con đường.)" },
      { kanji: "<span class=\"furigana\"><ruby>死<rt>し</rt></ruby>にます</span>", hiragana: "しにます", meaning: "Chết, qua đời", type: "Động từ nhóm 1", example: "ペットが 死んで 悲しいです。(Vật nuôi chết nên tôi rất buồn.)" },
      { kanji: "<span class=\"furigana\">びっくりします</span>", hiragana: "びっくりします", meaning: "Giật mình, bất ngờ, kinh ngạc", type: "Động từ nhóm 3", example: "大きな 音に びっくりしました。(Giật mình vì tiếng động lớn.)" },
      { kanji: "<span class=\"furigana\">がっかりします</span>", hiragana: "がっかりします", meaning: "Thất vọng, chán nản", type: "Động từ nhóm 3", example: "試験に 落ちて がっかりしました。(Thi trượt nên rất thất vọng.)" },
      { kanji: "<span class=\"furigana\"><ruby>安心<rt>あんしん</rt></ruby>します</span>", hiragana: "あんしんします", meaning: "Yên tâm, thanh thản", type: "Động từ nhóm 3", example: "無事だと 聞いて 安心しました。(Nghe tin bình an tôi đã rất yên tâm.)" },
      { kanji: "<span class=\"furigana\"><ruby>遅刻<rt>ちこく</rt></ruby>します</span>", hiragana: "ちこくします", meaning: "Đến muộn, trễ giờ", type: "Động từ nhóm 3", example: "授業に 遅刻しました。(Bị muộn giờ học.)" },
      { kanji: "<span class=\"furigana\"><ruby>早退<rt>そうたい</rt></ruby>します</span>", hiragana: "そうたいします", meaning: "Về sớm [trước giờ tan sở]", type: "Động từ nhóm 3", example: "体調が 悪いので 早退します。(Vì người mệt nên tôi xin về sớm.)" },
      { kanji: "<span class=\"furigana\"><ruby>喧嘩<rt>けんか</rt></ruby>します</span>", hiragana: "けんかします", meaning: "Cãi cọ, đánh nhau", type: "Động từ nhóm 3", example: "兄弟で けんかしました。(Anh em cãi nhau.)" },
      { kanji: "<span class=\"furigana\"><ruby>離婚<rt>りこん</rt></ruby>します</span>", hiragana: "りこんします", meaning: "Ly hôn", type: "Động từ nhóm 3", example: "両親が 離婚しました。(Bố mẹ ly hôn.)" },
      { kanji: "<span class=\"furigana\"><ruby>複雑<rt>ふくざつ</rt></ruby>[な]</span>", hiragana: "ふくざつ[な]", meaning: "Phức tạp, rắc rối", type: "Tính từ đuôi な", example: "道が 複雑で 迷いました。(Đường xá phức tạp nên bị lạc.)" },
      { kanji: "<span class=\"furigana\"><ruby>邪魔<rt>じゃま</rt></ruby>[な]</span>", hiragana: "じゃま[な]", meaning: "Cản trở, vướng víu, làm phiền", type: "Tính từ đuôi な", example: "荷物が 邪魔です。(Hành lý vướng víu quá.)" },
      { kanji: "<span class=\"furigana\"><ruby>汚<rt>きたな</rt></ruby>い</span>", hiragana: "きたない", meaning: "Bẩn thỉu, nhếch nhác", type: "Tính từ đuôi い", example: "手が 汚いので 洗います。(Tay bẩn nên đi rửa.)" },
      { kanji: "<span class=\"furigana\"><ruby>嬉<rt>うれ</rt></ruby>しい</span>", hiragana: "うれしい", meaning: "Vui sướng, hạnh phúc", type: "Tính từ đuôi い", example: "合格して とても 嬉しいです。(Thi đỗ tôi rất đỗi vui mừng.)" },
      { kanji: "<span class=\"furigana\"><ruby>悲<rt>かな</rt></ruby>しい</span>", hiragana: "かなしい", meaning: "Buồn bã, đau lòng", type: "Tính từ đuôi い", example: "別れは 悲しいです。(Chia ly thật buồn.)" },
      { kanji: "<span class=\"furigana\"><ruby>恥<rt>は</rt></ruby>ずかしい</span>", hiragana: "はずかしい", meaning: "Xấu hổ, ngượng ngùng", type: "Tính từ đuôi い", example: "失敗して 恥ずかしかったです。(Bị hỏng việc nên tôi thấy rất xấu hổ.)" },
      { kanji: "<span class=\"furigana\"><ruby>地震<rt>じしん</rt></ruby></span>", hiragana: "じしん", meaning: "Động đất", type: "Danh từ", example: "地震で 家が 揺れました。(Nhà rung lắc vì động đất.)" },
      { kanji: "<span class=\"furigana\"><ruby>台風<rt>たいふう</rt></ruby></span>", hiragana: "たいふう", meaning: "Cơn bão nhiệt đới", type: "Danh từ", example: "台風が 近づいて います。(Bão đang tiến lại gần.)" },
      { kanji: "<span class=\"furigana\"><ruby>火事<rt>かじ</rt></ruby></span>", hiragana: "かじ", meaning: "Hỏa hoạn, vụ cháy", type: "Danh từ", example: "火事で ビルが 燃えました。(Tòa nhà bị cháy do hỏa hoạn.)" },
      { kanji: "<span class=\"furigana\"><ruby>事故<rt>じこ</rt></ruby></span>", hiragana: "じこ", meaning: "Tai nạn giao thông", type: "Danh từ", example: "交通事故に 気をつけます。(Cẩn thận với tai nạn giao thông.)" }
    ],
    grammar: [
      {
        structure: "1. V-て / V-なくて / A-くて / Na-で、〜 (Nguyên nhân khách quan)",
        explanation: "Dùng để diễn tả nguyên nhân, lý do của vế trước dẫn đến kết quả ở vế sau.\n• Vế sau KHÔNG ĐƯỢC CHỨA Ý CHÍ, nguyện vọng (〜たい), mệnh lệnh (〜てください), hay rủ rê (〜ましょう).\n• Thường là các động từ chỉ cảm xúc (びっくりした、安心した、がっかりした) hoặc tình huống bất khả kháng.",
        caution: "Nếu muốn đưa ra yêu cầu hoặc rủ rê ở vế sau, bắt buộc phải dùng から.",
        examples: [
          {
            type: "sentence",
            context: "Nghe tin người thân bình an nên thấy yên lòng",
            jp: "<span class=\"furigana\"><ruby>家族<rt>かぞく</rt></ruby></span>の <span class=\"furigana\"><ruby>声<rt>こえ</rt></ruby></span>を <span class=\"furigana\"><ruby>聞<rt>き</rt></ruby>いて</span>、<span class=\"furigana\"><ruby>安心<rt>あんしん</rt></ruby>しました</span>。",
            rawJp: "家族の声を聞いて、安心しました。",
            vi: "Nghe được giọng nói của gia đình, tôi đã rất yên tâm."
          },
          {
            type: "sentence",
            context: "Không hiểu tin tức báo chí vì từ ngữ quá phức tạp",
            jp: "<span class=\"furigana\"><ruby>言葉<rt>ことば</rt></ruby></span>が <span class=\"furigana\"><ruby>複雑<rt>ふくざつ</rt></ruby>で</span>、よく <span class=\"furigana\"><ruby>分<rt>わ</rt></ruby>かりませんでした</span>。",
            rawJp: "言葉が複雑で、よく分かりませんでした。",
            vi: "Vì từ ngữ quá phức tạp nên tôi không hiểu rõ lắm."
          }
        ]
      },
      {
        structure: "2. Danh từ (thiên tai, biến cố) + で (Nguyên nhân sự cố)",
        explanation: "Danh từ chỉ các hiện tượng thiên tai (地震、台風、大雨、大雪), hỏa hoạn (火事), tai nạn (事故), dịch bệnh (病気) đi với trợ từ で để biểu thị nguyên nhân gây ra thiệt hại.",
        caution: "Vế sau thường là các sự kiện tiêu cực như: nhà đổ, tàu ngừng chạy, người chết...",
        examples: [
          {
            type: "sentence",
            context: "Tàu điện ngừng chạy do bão",
            jp: "<span class=\"furigana\"><ruby>台風<rt>たいふう</rt></ruby></span><span class=\"furigana\">で</span> <span class=\"furigana\"><ruby>電車<rt>でんしゃ</rt></ruby></span>が <span class=\"furigana\"><ruby>止<rt>と</rt></ruby>まりました</span>。",
            rawJp: "台風で電車が止まりました。",
            vi: "Tàu điện đã bị ngừng chạy do bão."
          }
        ]
      },
      {
        structure: "3. Thể thông thường + ので、〜 (Bởi vì - Khách quan, lịch sự)",
        explanation: "Cấu trúc 〜ので diễn tả mối quan hệ nhân quả một cách tự nhiên, khách quan, giảm bớt tính chủ quan áp đặt của người nói so với から. Rất thích hợp khi xin phép hoặc từ chối lịch sự.\n• Tính từ đuôi な / Danh từ: Thêm な trước ので (病気なので、暇なので).",
        caution: "Khi xin nghỉ làm hoặc nhờ vả cấp trên, luôn ưu tiên dùng ので thay cho から.",
        examples: [
          {
            type: "sentence",
            context: "Xin phép về sớm vì trong người khó chịu",
            jp: "<span class=\"furigana\"><ruby>気分<rt>きぶん</rt></ruby></span>が <span class=\"furigana\"><ruby>悪<rt>わる</rt></ruby>いので</span>、<span class=\"furigana\"><ruby>早退<rt>そうたい</rt></ruby>させて</span> いただけませんか。",
            rawJp: "気分が悪いので、早退させていただけませんか。",
            vi: "Vì trong người thấy khó chịu nên tôi xin phép được về sớm có được không ạ?"
          }
        ]
      }
    ]
  },

  // BÀI 40
  {
    id: "bai-40",
    title: "Bài 40: Câu Nghi Vấn Lồng (間接疑問文) & Thử Làm Gì 〜てみる",
    level: "Minna no Nihongo N4 (Bài 40)",
    badge: "Câu nghi vấn lồng & てみる",
    description: "Nắm vững cách lồng một câu hỏi có từ nghi vấn (〜か) hoặc câu hỏi Có/Không (〜かどうか) vào làm bổ ngữ cho động từ trong câu, cách dùng V-てみます để làm thử hành động, và tiếp vĩ từ さ tạo danh từ đo lường.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>数<rt>かぞ</rt></ruby>えます</span>", hiragana: "かぞえます", meaning: "Đếm [số lượng, tiền bạc]", type: "Động từ nhóm 2", example: "人数を 数えます。(Đếm số lượng người.)" },
      { kanji: "<span class=\"furigana\"><ruby>測<rt>はか</rt></ruby>ります / <ruby>量<rt>はか</rt></ruby>ります</span>", hiragana: "はかります", meaning: "Đo, cân [chiều dài, cân nặng, nhiệt độ]", type: "Động từ nhóm 1", example: "荷物の 重さを 測ります。(Cân trọng lượng hành lý.)" },
      { kanji: "<span class=\"furigana\"><ruby>確<rt>たし</rt></ruby>かめます</span>", hiragana: "たしかめます", meaning: "Xác nhận, kiểm tra lại cho chắc", type: "Động từ nhóm 2", example: "時間を 確かめます。(Xác nhận lại thời gian.)" },
      { kanji: "<span class=\"furigana\"><ruby>合<rt>あ</rt></ruby>います</span>", hiragana: "あいます", meaning: "Vừa [kích cỡ] (サイズが〜)", type: "Động từ nhóm 1", example: "サイズが 合いません。(Kích cỡ không vừa.)" },
      { kanji: "<span class=\"furigana\"><ruby>出発<rt>しゅっぱつ</rt></ruby>します</span>", hiragana: "しゅっぱつします", meaning: "Khởi hành, xuất phát", type: "Động từ nhóm 3", example: "朝 8時に 出発します。(Khởi hành lúc 8 giờ sáng.)" },
      { kanji: "<span class=\"furigana\"><ruby>到着<rt>とうちゃく</rt></ruby>します</span>", hiragana: "とうちゃくします", meaning: "Đến nơi, cập bến", type: "Động từ nhóm 3", example: "空港に 到着しました。(Đã đến sân bay.)" },
      { kanji: "<span class=\"furigana\"><ruby>酔<rt>よ</rt></ruby>います</span>", hiragana: "よいます", meaning: "Say [rượu, tàu xe] (お酒に〜 / 乗り物に〜)", type: "Động từ nhóm 1", example: "船に 酔って しまいました。(Bị say sóng tàu.)" },
      { kanji: "<span class=\"furigana\"><ruby>危険<rt>きけん</rt></ruby>[な]</span>", hiragana: "きけん[な]", meaning: "Nguy hiểm", type: "Tính từ đuôi な", example: "夜道は 危険です。(Đường đêm rất nguy hiểm.)" },
      { kanji: "<span class=\"furigana\"><ruby>必要<rt>ひつよう</rt></ruby>[な]</span>", hiragana: "ひつよう[な]", meaning: "Cần thiết", type: "Tính từ đuôi な", example: "パスポートが 必要です。(Hộ chiếu là cần thiết.)" },
      { kanji: "<span class=\"furigana\"><ruby>忘年会<rt>ぼうねんかい</rt></ruby></span>", hiragana: "ぼうねんかい", meaning: "Tiệc tất niên cuối năm", type: "Danh từ", example: "忘年会で 楽しく 飲みます。(Uống vui vẻ trong tiệc tất niên.)" },
      { kanji: "<span class=\"furigana\"><ruby>新年会<rt>しんねんかい</rt></ruby></span>", hiragana: "しんねんかい", meaning: "Tiệc tân niên mừng năm mới", type: "Danh từ", example: "新年会を 開きます。(Tổ chức tiệc đầu năm.)" },
      { kanji: "<span class=\"furigana\"><ruby>二次会<rt>にじかい</rt></ruby></span>", hiragana: "にじかい", meaning: "Tăng hai (bữa nhậu tiếp theo sau bữa tiệc chính)", type: "Danh từ", example: "二次会は カラオケに 行きます。(Tăng hai đi hát karaoke.)" },
      { kanji: "<span class=\"furigana\"><ruby>大会<rt>たいかい</rt></ruby></span>", hiragana: "たいかい", meaning: "Đại hội, giải đấu lớn", type: "Danh từ", example: "スピーチ大会に 出場します。(Tham gia cuộc thi hùng biện.)" },
      { kanji: "<span class=\"furigana\">マラソン</span>", hiragana: "マラソン", meaning: "Cuộc thi chạy việt dã marathon", type: "Danh từ", example: "マラソンに 参加します。(Tham gia chạy marathon.)" },
      { kanji: "<span class=\"furigana\">コンテスト</span>", hiragana: "コンテスト", meaning: "Cuộc thi tài năng, contest", type: "Danh từ", example: "歌の コンテストで 優勝しました。(Vô địch cuộc thi hát.)" },
      { kanji: "<span class=\"furigana\"><ruby>表<rt>おもて</rt></ruby></span>", hiragana: "おもて", meaning: "Mặt trước, bề mặt", type: "Danh từ", example: "表の ページを 見てください。(Hãy nhìn trang mặt trước.)" },
      { kanji: "<span class=\"furigana\"><ruby>裏<rt>うら</rt></ruby></span>", hiragana: "うら", meaning: "Mặt sau, mặt trái", type: "Danh từ", example: "裏に 名前を 書きます。(Viết tên vào mặt sau.)" },
      { kanji: "<span class=\"furigana\"><ruby>返事<rt>へんじ</rt></ruby></span>", hiragana: "へんじ", meaning: "Câu trả lời, hồi đáp", type: "Danh từ", example: "手紙の 返事を 待ちます。(Chờ hồi âm bức thư.)" },
      { kanji: "<span class=\"furigana\"><ruby>傷<rt>きず</rt></ruby></span>", hiragana: "きず", meaning: "Vết xước, vết trầy, vết thương", type: "Danh từ", example: "車に 傷が つきました。(Xe bị xước một vết.)" },
      { kanji: "<span class=\"furigana\"><ruby>長<rt>なが</rt></ruby>さ</span>", hiragana: "ながさ", meaning: "Chiều dài", type: "Danh từ", example: "長さを 測ります。(Đo chiều dài.)" },
      { kanji: "<span class=\"furigana\"><ruby>重<rt>おも</rt></ruby>さ</span>", hiragana: "おもさ", meaning: "Trọng lượng, độ nặng", type: "Danh từ", example: "重さを 量ります。(Cân độ nặng.)" },
      { kanji: "<span class=\"furigana\"><ruby>高<rt>たか</rt></ruby>さ</span>", hiragana: "たかさ", meaning: "Độ cao, chiều cao", type: "Danh từ", example: "富士山の 高さは 3776メートルです。(Độ cao của núi Phú Sĩ là 3776m.)" },
      { kanji: "<span class=\"furigana\"><ruby>大<rt>おお</rt></ruby>きさ</span>", hiragana: "おおきさ", meaning: "Kích cỡ, độ lớn", type: "Danh từ", example: "大きさを 比べます。(So sánh kích cỡ.)" }
    ],
    grammar: [
      {
        structure: "1. Từ nghi vấn + Thể thông thường + か、〜 (Câu hỏi lồng gián tiếp)",
        explanation: "Dùng để lồng một câu hỏi có chứa từ nghi vấn (như だれ, 何, いつ, どこ, どう) vào trong một câu nói phức lớn hơn.\n• Tính từ đuôi な / Danh từ: Bỏ だ (何歳か、何時か).",
        caution: "Vế sau thường là các động từ nhận thức như: 分かりません、教えてください、確かめます、知っています.",
        examples: [
          {
            type: "sentence",
            context: "Kiểm tra giờ tàu chạy",
            jp: "<span class=\"furigana\"><ruby>電車<rt>でんしゃ</rt></ruby></span>が <span class=\"furigana\"><ruby>何時<rt>なんじ</rt></ruby>に</span> <span class=\"furigana\"><ruby>発車<rt>はっしゃ</rt></ruby>するか</span>、<span class=\"furigana\"><ruby>確<rt>たし</rt></ruby>かめて</span> ください。",
            rawJp: "電車が何時に発車するか、確かめてください。",
            vi: "Xin hãy kiểm tra xem mấy giờ thì tàu điện khởi hành."
          }
        ]
      },
      {
        structure: "2. Thể thông thường + かどうか、〜 (Câu hỏi Có/Không lồng trong câu)",
        explanation: "Dùng khi câu hỏi được lồng ghép là dạng câu hỏi Có hay Không (chọn giữa hai khả năng xảy ra hay không xảy ra).\n• Tính từ đuôi な / Danh từ: Bỏ だ (本当かどうか、暇かどうか).",
        caution: "Nghĩa là: ... hay không (ví dụ: Được hay không, đúng hay không).",
        examples: [
          {
            type: "sentence",
            context: "Hỏi xem bạn có đến dự tiệc được hay không",
            jp: "<span class=\"furigana\"><ruby>彼<rt>かれ</rt></ruby></span>が <span class=\"furigana\"><ruby>来<rt>こ</rt></ruby>られる</span><span class=\"furigana\">かどうか</span>、<span class=\"furigana\"><ruby>聞<rt>き</rt></ruby>いて</span> みます。",
            rawJp: "彼が来られるかどうか、聞いてみます。",
            vi: "Tôi sẽ thử hỏi xem anh ấy có đến được hay không."
          }
        ]
      },
      {
        structure: "3. V-て みます (Làm thử hành động để xem thế nào)",
        explanation: "Biểu thị hành động làm thử một việc gì đó chưa từng làm bao giờ để xem trải nghiệm hoặc kết quả thực tế ra sao.",
        caution: "Thường đi kèm dạng mời mọc: 〜てみてください (Hãy thử làm xem).",
        examples: [
          {
            type: "sentence",
            context: "Mặc thử quần áo trước khi mua",
            jp: "この ズボンを <span class=\"furigana\"><ruby>履<rt>は</rt></ruby>いて</span> <span class=\"furigana\">みても</span> いいですか。",
            rawJp: "このズボンを履いてみてもいいですか。",
            vi: "Tôi có thể mặc thử chiếc quần này được không ạ?"
          }
        ]
      },
      {
        structure: "4. A-い (bỏ い) + さ (Danh từ hóa tính từ chỉ kích thước, độ đo)",
        explanation: "Biến một tính từ đuôi い thành một danh từ chỉ độ đo lường hoặc mức độ cụ thể.\n• 高い -> 高さ (chiều cao), 長い -> 長さ (chiều dài), 重い -> 重さ (trọng lượng), 広い -> 広さ (diện tích).",
        caution: "Ví dụ: 富士山の 高さは 3,776メートルです.",
        examples: [
          {
            type: "sentence",
            context: "Đo chiều cao của cây cầu",
            jp: "この <span class=\"furigana\"><ruby>橋<rt>はし</rt></ruby></span>の <span class=\"furigana\"><ruby>高<rt>たか</rt></ruby>さ</span>は どのくらいですか。",
            rawJp: "この橋の高さはどのくらいですか。",
            vi: "Độ cao của cây cầu này khoảng bao nhiêu?"
          }
        ]
      }
    ]
  }
];

// Write out to data/lessons_36_40.js
const fileContent = `// Lessons 36 to 40: Minna no Nihongo Shokyuu II (N4 Standard Curriculum)
const lessons_36_40 = ${JSON.stringify(lessons_36_40, null, 2)};
`;

fs.writeFileSync('data/lessons_36_40.js', fileContent, 'utf8');
console.log('Successfully updated data/lessons_36_40.js with full textbook vocabulary and grammar!');
