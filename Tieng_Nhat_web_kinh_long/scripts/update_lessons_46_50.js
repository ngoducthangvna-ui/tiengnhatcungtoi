const fs = require('fs');

const lessons_46_50 = [
  // BÀI 46
  {
    id: "bai-46",
    title: "Bài 46: Thời Điểm Của Hành Động (〜ところ / 〜ばかり) & Chắc Chắn 〜はず",
    level: "Minna no Nihongo N4 (Bài 46)",
    badge: "Thời điểm & Chắc chắn",
    description: "Nắm vững các giai đoạn thời điểm của hành động với V-る ところ (sắp sửa bắt đầu), V-ている ところ (đang giữa chừng), V-た ところ (vừa mới xong trong tích tắc), biểu thị hành động vừa hoàn thành theo cảm nhận chủ quan với V-た ばかり, và phán đoán chắc chắn có căn cứ với 〜はずです.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>渡<rt>わた</rt></ruby>します</span>", hiragana: "わたします", meaning: "Trao tận tay, giao cho", type: "Động từ nhóm 1", example: "先生に レポートを 渡します。(Trao báo cáo tận tay cho thầy giáo.)" },
      { kanji: "<span class=\"furigana\"><ruby>帰<rt>かえ</rt></ruby>って <ruby>来<rt>き</rt></ruby>ます</span>", hiragana: "かえってきます", meaning: "Quay trở về nơi xuất phát", type: "Động từ nhóm 3", example: "父が 会社から 帰って 来ました。(Bố tôi đã đi làm về.)" },
      { kanji: "<span class=\"furigana\"><ruby>出発<rt>しゅっぱつ</rt></ruby>します</span>", hiragana: "しゅっぱつします", meaning: "Xuất phát, khởi hành", type: "Động từ nhóm 3", example: "明日の 朝 8時に 出発します。(Sáng mai 8 giờ chúng tôi sẽ xuất phát.)" },
      { kanji: "<span class=\"furigana\"><ruby>出<rt>で</rt></ruby>ます</span>", hiragana: "でます", meaning: "Rời bến, xuất phát [xe buýt - バスが〜]", type: "Động từ nhóm 2", example: "バスが もうすぐ 出ます。(Xe buýt sắp rời bến rồi.)" },
      { kanji: "<span class=\"furigana\"><ruby>届<rt>とど</rt></ruby>きます</span>", hiragana: "とどきます", meaning: "Được chuyển đến, tới tay [hành lý - 荷物が〜]", type: "Động từ nhóm 1", example: "荷物が たった今 届きました。(Bưu kiện vừa mới được giao tới tức thì.)" },
      { kanji: "<span class=\"furigana\"><ruby>届<rt>とど</rt></ruby>けます</span>", hiragana: "とどけます", meaning: "Đưa đến, chuyển phát đến tận nơi", type: "Động từ nhóm 2", example: "書類を 会社へ 届けます。(Tôi đem nộp tài liệu đến công ty.)" },
      { kanji: "<span class=\"furigana\"><ruby>入学<rt>にゅうがく</rt></ruby>します</span>", hiragana: "にゅうがくします", meaning: "Nhập học, vào [đại học - 大学に〜]", type: "Động từ nhóm 3", example: "来年 大学に 入学します。(Năm tới tôi sẽ nhập học đại học.)" },
      { kanji: "<span class=\"furigana\"><ruby>卒業<rt>そつぎょう</rt></ruby>します</span>", hiragana: "そつぎょうします", meaning: "Tốt nghiệp [đại học - 大学を〜]", type: "Động từ nhóm 3", example: "先月 大学を 卒業しました。(Tôi vừa tốt nghiệp đại học tháng trước.)" },
      { kanji: "<span class=\"furigana\"><ruby>焼<rt>や</rt></ruby>きます</span>", hiragana: "やきます", meaning: "Nướng, rán [thịt, bánh mì]", type: "Động từ nhóm 1", example: "フライパンで 肉を 焼きます。(Nướng thịt bằng chảo rán.)" },
      { kanji: "<span class=\"furigana\"><ruby>焼<rt>や</rt></ruby>けます</span>", hiragana: "やけます", meaning: "Chín, được nướng xong [bánh mì chín, thịt chín - tự động từ]", type: "Động từ nhóm 2", example: "パンが おいしそうに 焼けました。(Bánh mì đã nướng chín thơm lừng.)" },
      { kanji: "<span class=\"furigana\"><ruby>留守<rt>るす</rt></ruby></span>", hiragana: "るす", meaning: "Vắng nhà", type: "Danh từ", example: "留守の 間に 荷物が 来ました。(Hàng đến trong lúc vắng nhà.)" },
      { kanji: "<span class=\"furigana\"><ruby>宅配便<rt>たくはいびん</rt></ruby></span>", hiragana: "たくはいびん", meaning: "Dịch vụ chuyển phát nhanh tận nhà", type: "Danh từ", example: "宅配便で プレゼントを 送ります。(Gửi quà bằng chuyển phát nhanh.)" },
      { kanji: "<span class=\"furigana\"><ruby>原因<rt>げんいん</rt></ruby></span>", hiragana: "げんいん", meaning: "Nguyên nhân gốc rễ", type: "Danh từ", example: "事故の 原因を 調べて います。(Đang điều tra nguyên nhân tai nạn.)" },
      { kanji: "<span class=\"furigana\">こちら</span>", hiragana: "こちら", meaning: "Phía này, bên chúng tôi", type: "Đại từ", example: "こちらは 田中先生です。(Đây là thầy Tanaka.)" },
      { kanji: "<span class=\"furigana\">〜の<ruby>所<rt>ところ</rt></ruby></span>", hiragana: "〜のところ", meaning: "Quanh chỗ ~, nơi của ~", type: "Danh từ", example: "駅の 所で 待ち合わせましょう。(Hẹn gặp nhau quanh chỗ nhà ga nhé.)" },
      { kanji: "<span class=\"furigana\"><ruby>半年<rt>はんとし</rt></ruby></span>", hiragana: "はんとし", meaning: "Nửa năm, 6 tháng", type: "Danh từ", example: "半年 日本語を 勉強して います。(Tôi đã học tiếng Nhật được nửa năm.)" },
      { kanji: "<span class=\"furigana\">ちょうど</span>", hiragana: "ちょうど", meaning: "Vừa đúng, đúng lúc, vừa chuẩn", type: "Phó từ", example: "ちょうど 今 終わった ところです。(Vừa đúng lúc xong xuôi.)" },
      { kanji: "<span class=\"furigana\">たった<ruby>今<rt>いま</rt></ruby></span>", hiragana: "たったいま", meaning: "Vừa mới xong tức thì (đi với thể quá khứ)", type: "Phó từ", example: "たった今 帰って 来ました。(Tôi vừa mới về tới nhà xong tức thì.)" },
      { kanji: "<span class=\"furigana\"><ruby>今<rt>いま</rt></ruby>いいですか</span>", hiragana: "いまいいですか", meaning: "Bây giờ có tiện nói chuyện không?", type: "Câu giao tiếp", example: "すみません、今いいですか。(Xin lỗi, bây giờ anh có tiện nói chuyện một chút không ạ?)" },
      { kanji: "<span class=\"furigana\">ガスサービスセンター</span>", hiragana: "ガスサービスセンター", meaning: "Trung tâm dịch vụ khách hàng gas", type: "Danh từ", example: "ガスサービスセンターに 電話します。(Gọi điện cho trung tâm dịch vụ gas.)" },
      { kanji: "<span class=\"furigana\">ガスレンジ</span>", hiragana: "ガスレンジ", meaning: "Bếp gas gia đình", type: "Danh từ", example: "ガスレンジの 火を 消します。(Tắt lửa bếp gas.)" },
      { kanji: "<span class=\"furigana\"><ruby>具合<rt>ぐあい</rt></ruby></span>", hiragana: "ぐあい", meaning: "Tình trạng, trạng thái sức khỏe hoặc máy móc", type: "Danh từ", example: "体の 具合が 悪いです。(Tình trạng sức khỏe không được tốt.)" },
      { kanji: "<span class=\"furigana\"><ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません</span>", hiragana: "もうしわけありません", meaning: "Thành thật vô cùng xin lỗi ngài (rất trang trọng)", type: "Câu giao tiếp", example: "遅れて 申し訳ありません。(Tôi thành thật xin lỗi vì đã đến muộn.)" },
      { kanji: "<span class=\"furigana\">どちら<ruby>様<rt>さま</rt></ruby>でしょうか</span>", hiragana: "どちらさまでしょうか", meaning: "Xin hỏi vị nào đấy ạ? (hỏi tên lịch sự qua điện thoại)", type: "Câu giao tiếp", example: "失礼ですが、どちら様でしょうか。(Xin thất lễ, quý khách là vị nào đấy ạ?)" },
      { kanji: "<span class=\"furigana\">お<ruby>待<rt>ま</rt></ruby>たせしました</span>", hiragana: "おまたせしました", meaning: "Xin lỗi đã để quý khách phải chờ đợi lâu", type: "Câu giao tiếp", example: "大変 お待たせしました。(Thành thật xin lỗi đã để quý khách đợi lâu.)" },
      { kanji: "<span class=\"furigana\"><ruby>向<rt>む</rt></ruby>かいます</span>", hiragana: "むかいます", meaning: "Đi hướng về phía, trực chỉ", type: "Động từ nhóm 1", example: "今 会場へ 向かって います。(Bây giờ tôi đang hướng về hội trường.)" },
      { kanji: "<span class=\"furigana\">ついている</span>", hiragana: "ついている", meaning: "May mắn, gặp vận may đỏ", type: "Cụm từ", example: "今日は ついて います。(Hôm nay tôi thật là may mắn.)" },
      { kanji: "<span class=\"furigana\"><ruby>床<rt>ゆか</rt></ruby></span>", hiragana: "ゆか", meaning: "Sàn nhà", type: "Danh từ", example: "床を きれいに 拭きます。(Lau sạch sàn nhà.)" },
      { kanji: "<span class=\"furigana\"><ruby>転<rt>ころ</rt></ruby>びます</span>", hiragana: "ころびます", meaning: "Trượt ngã, ngã lăn ra đất", type: "Động từ nhóm 1", example: "道で 転んで けがを しました。(Bị ngã trên đường và bị thương.)" },
      { kanji: "<span class=\"furigana\">ベル</span>", hiragana: "ベル", meaning: "Chuông cửa, chuông báo", type: "Danh từ", example: "ベルが 鳴って います。(Chuông đang reo lên kìa.)" },
      { kanji: "<span class=\"furigana\"><ruby>鳴<rt>な</rt></ruby>ります</span>", hiragana: "なります", meaning: "Reo, kêu, vang lên [ベルが〜]", type: "Động từ nhóm 1", example: "電話の ベルが 鳴りました。(Chuông điện thoại reo lên.)" },
      { kanji: "<span class=\"furigana\"><ruby>慌<rt>あわ</rt></ruby>てて</span>", hiragana: "あわてて", meaning: "Vội vàng, luống cuống, hớt hải", type: "Phó từ", example: "慌てて 部屋を 飛び出しました。(Hớt hải lao ra khỏi phòng.)" },
      { kanji: "<span class=\"furigana\"><ruby>順番<rt>じゅんばん</rt></ruby>に</span>", hiragana: "じゅんばんに", meaning: "Theo đúng thứ tự, tuần tự", type: "Phó từ", example: "順番に 並んで ください。(Xin vui lòng xếp hàng theo thứ tự.)" },
      { kanji: "<span class=\"furigana\"><ruby>出来事<rt>できごと</rt></ruby></span>", hiragana: "できごと", meaning: "Biến cố, sự kiện, sự việc xảy ra", type: "Danh từ", example: "不思議な 出来事が ありました。(Đã xảy ra một sự việc kỳ lạ.)" }
    ],
    grammar: [
      {
        structure: "1. V-る / V-ている / V-た + ところです (Các giai đoạn của hành động)",
        explanation: "Mẫu câu dùng để xác định chính xác thời điểm của một hành động diễn ra trong tiến trình thời gian:\n• V-る ところです: Sắp sửa làm, chuẩn bị bắt đầu hành động ngay lập tức. Thường đi cùng các phó từ: これから (từ giờ), 今から (ngay bây giờ).\n• V-ている ところです: Đang ngay trong quá trình thực hiện hành động. Thường đi cùng phó từ 今 (bây giờ).\n• V-た ところです: Vừa mới dứt điểm xong hành động trong tích tắc (vài giây đến vài phút trước). Thường đi cùng phó từ たった今 (vừa mới tức thì).",
        caution: "V-たところです chỉ dùng cho việc vừa mới kết thúc trong một khoảnh khắc vật lý cực ngắn.",
        examples: [
          {
            type: "sentence",
            context: "Chuẩn bị ra ngoài",
            jp: "<span class=\"furigana\">これから <ruby>出<rt>で</rt></ruby>かける</span>ところです。",
            rawJp: "これから出かけるところです。",
            vi: "Tôi đang chuẩn bị đi ra ngoài bây giờ đây."
          },
          {
            type: "dialogue",
            context: "Hỏi tiến độ công việc",
            lines: [
              { speaker: "A", jp: "レポートは もう できましたか。", vi: "Báo cáo đã hoàn thành xong chưa?" },
              { speaker: "B", jp: "いいえ、今 <span class=\"furigana\"><ruby>書<rt>か</rt></ruby>いて</span>いるところです。", vi: "Chưa, bây giờ tôi đang viết dở đây." }
            ]
          },
          {
            type: "sentence",
            context: "Vừa mới về đến nơi",
            jp: "<span class=\"furigana\">たった<ruby>今<rt>いま</rt></ruby> <ruby>帰<rt>かえ</rt></ruby>って</span> <span class=\"furigana\"><ruby>来<rt>き</rt></ruby>た</span>ところです。",
            rawJp: "たった今帰って来たところです。",
            vi: "Tôi vừa mới về đến nhà tức thì xong."
          }
        ]
      },
      {
        structure: "2. V-た + ばかりです (Vừa mới hoàn thành theo cảm nhận chủ quan)",
        explanation: "Biểu thị một hành động vừa mới xảy ra theo cảm nhận chủ quan của người nói. Khoảng thời gian thực tế đã trôi qua có thể ngắn (vừa xong) hoặc rất dài (vài tuần, vài tháng, vài năm), miễn là người nói cảm thấy như mới vừa diễn ra gần đây.",
        caution: "V-たばかり có thể bổ nghĩa trực tiếp cho danh từ theo cấu trúc: V-たばかりの N (ví dụ: 買ったばかりの 車 - chiếc xe vừa mới mua).",
        examples: [
          {
            type: "sentence",
            context: "Mới vào công ty được một tháng",
            jp: "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は <span class=\"furigana\"><ruby>先月<rt>せんげつ</rt></ruby></span> この <span class=\"furigana\"><ruby>会社<rt>かいしゃ</rt></ruby></span>に <span class=\"furigana\"><ruby>入<rt>はい</rt></ruby>った</span>ばかりです。",
            rawJp: "私は先月この会社に入ったばかりです。",
            vi: "Tôi mới vừa vào công ty này tháng trước thôi."
          },
          {
            type: "sentence",
            context: "Vừa mua chiếc máy tính mới tuần trước",
            jp: "<span class=\"furigana\"><ruby>先週<rt>せんしゅう</rt></ruby></span> パソコンを <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>った</span>ばかりなのに、もう <span class=\"furigana\"><ruby>壊<rt>こわ</rt></ruby>れました</span>。",
            rawJp: "先週パソコンを買ったばかりなのに、もう壊れました。",
            vi: "Mới mua chiếc máy tính tuần trước thôi mà đã bị hỏng rồi."
          }
        ]
      },
      {
        structure: "3. So sánh: V-た ところ vs V-た ばかり",
        explanation: "• V-たところ: Thời gian vật lý thực tế bắt buộc phải cực ngắn (vài phút, tức thì). Không đi được với các từ chỉ thời gian dài như 先月, 去年. Thường đi với たった今.\n• V-たばかり: Thời gian thực tế có thể dài, phụ thuộc vào cảm nhận chủ quan của người nói. Có thể đi với 先月, 去年. Có thể đứng trước danh từ: [V-たばかり] の N.",
        caution: "たった今 có thể đi với cả hai mẫu câu, nhưng 先月 hay 去年 chỉ đi được với ばかり.",
        examples: [
          {
            type: "sentence",
            context: "Chỉ được dùng ばかり do thời gian 1 năm",
            jp: "<span class=\"furigana\"><ruby>日本<rt>にほん</rt></ruby></span>へ <span class=\"furigana\"><ruby>来<rt>き</rt></ruby>た</span>ばかりの <span class=\"furigana\"><ruby>時<rt>とき</rt></ruby></span>、<span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>が わかりませんでした。",
            rawJp: "日本へ来たばかりの時、日本語がわかりませんでした。",
            vi: "Hồi mới vừa sang Nhật, tôi hoàn toàn không hiểu tiếng Nhật."
          }
        ]
      },
      {
        structure: "4. 〜はずです / 〜はずがありません (Chắc chắn là... / Chắc chắn không thể...)",
        explanation: "Dùng để diễn đạt sự phán đoán của người nói với mức độ chắc chắn rất cao (gần như 100%), dựa trên căn cứ, lý do xác đáng (lịch trình, giấy hẹn, quy luật khách quan):\n• Động từ: Thể thông thường + はずです\n• Tính từ đuôi い: Giữ nguyên い + はずです\n• Tính từ đuôi な: な + はずです\n• Danh từ: N + の + はずです\n• Phủ định mạnh: 〜はずが ありません (Chắc chắn không thể nào có chuyện...).",
        caution: "Không dùng はずです khi không có căn cứ xác thực, và không dùng cho hành vi có chủ ý của chính bản thân người nói.",
        examples: [
          {
            type: "sentence",
            context: "Hành lý chắc chắn đến hôm nay theo lịch",
            jp: "<span class=\"furigana\"><ruby>荷物<rt>にもつ</rt></ruby></span>は <span class=\"furigana\"><ruby>今日<rt>きょう</rt></ruby></span> <span class=\"furigana\"><ruby>届<rt>とど</rt></ruby>く</span>はずです。",
            rawJp: "荷物は今日届くはずです。",
            vi: "Hành lý chắc chắn sẽ đến trong ngày hôm nay (vì đã có phiếu hẹn gửi)."
          },
          {
            type: "sentence",
            context: "Người chăm chỉ như anh ấy chắc chắn không thể không biết",
            jp: "ミラーさんは この ことを <span class=\"furigana\"><ruby>知<rt>し</rt></ruby>っている</span>はずです。",
            rawJp: "ミラーさんはこのことを知っているはずです。",
            vi: "Chắc chắn là anh Miller biết việc này."
          },
          {
            type: "sentence",
            context: "Chắc chắn không thể nào giả tạo được",
            jp: "そんな はずは ありません。",
            rawJp: "そんなはずはありません。",
            vi: "Không thể nào có chuyện kỳ quặc như thế được đâu!"
          }
        ]
      }
    ]
  },

  // BÀI 47
  {
    id: "bai-47",
    title: "Bài 47: Truyền Đạt Tin Đồn (〜そうです) & Cảm Nhận Giác Quan (〜ようです / 〜がします)",
    level: "Minna no Nihongo N4 (Bài 47)",
    badge: "Nghe nói & Phán đoán",
    description: "Học cách truyền đạt lại thông tin nghe được từ người khác hay truyền thông với 〜そうです (nghe nói là), chỉ rõ nguồn thông tin với 〜によると, suy đoán trực quan dựa trên quan sát với 〜ようです (dường như/hình như), và cảm giác của các giác quan với 〜がします.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>集<rt>あつ</rt></ruby>まります</span>", hiragana: "あつまります", meaning: "Tập hợp, tụ họp lại [người - 人が〜]", type: "Động từ nhóm 1", example: "人が 大勢 集まって います。(Có rất nhiều người đang tụ tập lại.)" },
      { kanji: "<span class=\"furigana\"><ruby>別<rt>わか</rt></ruby>れます</span>", hiragana: "わかれます", meaning: "Chia tay, từ biệt, ly tán [người - 人が〜]", type: "Động từ nhóm 2", example: "駅で 友達と 別れました。(Chia tay bạn bè ở ga tàu.)" },
      { kanji: "<span class=\"furigana\"><ruby>長生<rt>ながい</rt></ruby>きします</span>", hiragana: "ながいきします", meaning: "Sống lâu, thọ", type: "Động từ nhóm 3", example: "祖父は 長生きして 95歳に なりました。(Ông tôi sống thọ được 95 tuổi.)" },
      { kanji: "<span class=\"furigana\">［<ruby>音<rt>おと</rt></ruby>が］します</span>", hiragana: "おとがします", meaning: "Có tiếng động, vang lên âm thanh", type: "Cụm động từ", example: "隣の 部屋から 音が します。(Có tiếng động phát ra từ phòng bên cạnh.)" },
      { kanji: "<span class=\"furigana\">［<ruby>声<rt>こえ</rt></ruby>が］します</span>", hiragana: "こえがします", meaning: "Có tiếng người nói", type: "Cụm động từ", example: "外で 子どもの 声が します。(Ở ngoài có tiếng trẻ con nói.)" },
      { kanji: "<span class=\"furigana\">［<ruby>味<rt>あじ</rt></ruby>が］します</span>", hiragana: "あじがします", meaning: "Có vị [ngọt, chua, đắng...]", type: "Cụm động từ", example: "この スープは 変な 味が します。(Món súp này có vị lạ lắm.)" },
      { kanji: "<span class=\"furigana\">［においが］します</span>", hiragana: "においがします", meaning: "Có mùi [thơm, khét...]", type: "Cụm động từ", example: "台所から いい においが します。(Từ nhà bếp bay ra mùi thơm nức.)" },
      { kanji: "<span class=\"furigana\">さします</span>", hiragana: "さします", meaning: "Che, giương [ô dù - 傘を〜]", type: "Động từ nhóm 1", example: "雨が 降って きたので 傘を さします。(Trời mưa rồi nên tôi giương ô.)" },
      { kanji: "<span class=\"furigana\">ひどい</span>", hiragana: "ひどい", meaning: "Tồi tệ, kinh khủng, ác liệt", type: "Tính từ đuôi い", example: "昨夜は ひどい 雨でした。(Đêm qua trời mưa dữ dội quá.)" },
      { kanji: "<span class=\"furigana\"><ruby>怖<rt>こわ</rt></ruby>い</span>", hiragana: "こわい", meaning: "Đáng sợ, ghê sợ", type: "Tính từ đuôi い", example: "お化け屋敷は とても 怖かったです。(Nhà ma đáng sợ vô cùng.)" },
      { kanji: "<span class=\"furigana\"><ruby>天気予報<rt>てんきよほう</rt></ruby></span>", hiragana: "てんきよほう", meaning: "Bản tin dự báo thời tiết", type: "Danh từ", example: "天気予報に よると、明日は 晴れです。(Theo dự báo thời tiết, ngày mai trời nắng.)" },
      { kanji: "<span class=\"furigana\"><ruby>発表<rt>はっぴょう</rt></ruby></span>", hiragana: "はっぴょう", meaning: "Phát biểu, công bố, thông báo", type: "Danh từ", example: "研究の 発表を します。(Phát biểu kết quả nghiên cứu.)" },
      { kanji: "<span class=\"furigana\"><ruby>実験<rt>じっけん</rt></ruby></span>", hiragana: "じっけん", meaning: "Thực nghiệm, thí nghiệm", type: "Danh từ", example: "理科の 実験を 行います。(Tiến hành thí nghiệm khoa học.)" },
      { kanji: "<span class=\"furigana\">データ</span>", hiragana: "データ", meaning: "Dữ liệu, số liệu thống kê", type: "Danh từ", example: "データを 分析します。(Phân tích dữ liệu.)" },
      { kanji: "<span class=\"furigana\"><ruby>人口<rt>じんこう</rt></ruby></span>", hiragana: "じんこう", meaning: "Dân số", type: "Danh từ", example: "日本の 人口が 減少して います。(Dân số Nhật Bản đang giảm sút.)" },
      { kanji: "<span class=\"furigana\"><ruby>科学<rt>かがく</rt></ruby></span>", hiragana: "かがく", meaning: "Khoa học", type: "Danh từ", example: "科学の 進歩は すばらしいです。(Sự tiến bộ của khoa học thật tuyệt vời.)" },
      { kanji: "<span class=\"furigana\"><ruby>医学<rt>いがく</rt></ruby></span>", hiragana: "いがく", meaning: "Y học", type: "Danh từ", example: "大学で 医学を 学びます。(Học y học tại trường đại học.)" },
      { kanji: "<span class=\"furigana\"><ruby>文学<rt>ぶんがく</rt></ruby></span>", hiragana: "ぶんがく", meaning: "Văn học", type: "Danh từ", example: "日本文学に 興味が あります。(Tôi có hứng thú với văn học Nhật Bản.)" },
      { kanji: "<span class=\"furigana\">パトカー</span>", hiragana: "パトカー", meaning: "Xe tuần tra cảnh sát", type: "Danh từ", example: "パトカーの サイレンが 聞こえます。(Nghe thấy còi xe cảnh sát tuần tra.)" },
      { kanji: "<span class=\"furigana\"><ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby></span>", hiragana: "きゅうきゅうしゃ", meaning: "Xe cứu thương, xe cấp cứu", type: "Danh từ", example: "救急車を 呼んで ください。(Xin hãy gọi xe cấp cứu giúp tôi!)" },
      { kanji: "<span class=\"furigana\"><ruby>賛成<rt>さんせい</rt></ruby></span>", hiragana: "さんせい", meaning: "Tán thành, đồng ý [賛成します]", type: "Danh từ", example: "その 意見に 賛成です。(Tôi hoàn toàn tán thành ý kiến đó.)" },
      { kanji: "<span class=\"furigana\"><ruby>反対<rt>はんたい</rt></ruby></span>", hiragana: "はんたい", meaning: "Phản đối, đối nghịch [反対します]", type: "Danh từ", example: "計画に 反対する 人が 多いです。(Có nhiều người phản đối kế hoạch.)" },
      { kanji: "<span class=\"furigana\"><ruby>男性<rt>だんせい</rt></ruby></span>", hiragana: "だんせい", meaning: "Nam giới, phái nam", type: "Danh từ", example: "男性の 店員 (Nhân viên nam)" },
      { kanji: "<span class=\"furigana\"><ruby>女性<rt>じょせい</rt></ruby></span>", hiragana: "じょせい", meaning: "Nữ giới, phái nữ", type: "Danh từ", example: "女性の 働く 割合が 増えました。(Tỷ lệ phụ nữ đi làm đã tăng lên.)" },
      { kanji: "<span class=\"furigana\">どうも</span>", hiragana: "どうも", meaning: "Dường như, hình như [không rõ thực hư]", type: "Phó từ", example: "どうも 雨が 降る ようです。(Hình như trời sắp mưa.)" },
      { kanji: "<span class=\"furigana\">〜によると</span>", hiragana: "〜によると", meaning: "Theo như nguồn tin ~, căn cứ theo ~", type: "Cụm liên từ", example: "新聞に よると、事故が あったそうです。(Theo báo chí thì nghe nói đã có tai nạn.)" },
      { kanji: "<span class=\"furigana\"><ruby>恋人<rt>こいびと</rt></ruby></span>", hiragana: "こいびと", meaning: "Người yêu, bạn trai / bạn gái", type: "Danh từ", example: "恋人と デートを します。(Hẹn hò với người yêu.)" },
      { kanji: "<span class=\"furigana\"><ruby>婚約<rt>こんやく</rt></ruby>します</span>", hiragana: "こんやくします", meaning: "Đính hôn, hứa hôn", type: "Động từ nhóm 3", example: "二人は 婚約しました。(Hai người họ đã đính hôn rồi.)" },
      { kanji: "<span class=\"furigana\"><ruby>相手<rt>あいて</rt></ruby></span>", hiragana: "あいて", meaning: "Đối phương, người kia, bạn đời", type: "Danh từ", example: "結婚の 相手を 探します。(Tìm đối tượng để kết hôn.)" },
      { kanji: "<span class=\"furigana\"><ruby>知<rt>し</rt></ruby>り<ruby>合<rt>あ</rt></ruby>います</span>", hiragana: "しりあいます", meaning: "Quen biết nhau, làm quen", type: "Động từ nhóm 1", example: "パーティーで 彼女と 知り合いました。(Tôi quen biết cô ấy trong một bữa tiệc.)" },
      { kanji: "<span class=\"furigana\"><ruby>平均寿命<rt>へいきんじゅみょう</rt></ruby></span>", hiragana: "へいきんじゅみょう", meaning: "Tuổi thọ bình quân", type: "Danh từ", example: "日本の 平均寿命は 世界一です。(Tuổi thọ bình quân của Nhật Bản đứng đầu thế giới.)" },
      { kanji: "<span class=\"furigana\"><ruby>比<rt>くら</rt></ruby>べます</span>", hiragana: "くらべます", meaning: "So sánh, đối chiếu", type: "Động từ nhóm 2", example: "去年と 比べて 売り上げが 伸びました。(So với năm ngoái thì doanh thu đã tăng.)" },
      { kanji: "<span class=\"furigana\"><ruby>博士<rt>はかせ</rt></ruby></span>", hiragana: "はかせ", meaning: "Tiến sĩ", type: "Danh từ", example: "山田博士の 講演会 (Buổi diễn thuyết của tiến sĩ Yamada)" },
      { kanji: "<span class=\"furigana\"><ruby>脳<rt>のう</rt></ruby></span>", hiragana: "のう", meaning: "Não bộ", type: "Danh từ", example: "脳の 働きを 調べます。(Nghiên cứu hoạt động của não bộ.)" },
      { kanji: "<span class=\"furigana\">ホルモン</span>", hiragana: "ホルモン", meaning: "Hormone, nội tiết tố", type: "Danh từ", example: "ホルモンの バランス (Cân bằng nội tiết tố)" },
      { kanji: "<span class=\"furigana\"><ruby>化粧品<rt>けしょうひん</rt></ruby></span>", hiragana: "けしょうひん", meaning: "Mỹ phẩm, đồ trang điểm", type: "Danh từ", example: "新しい 化粧品を 買いました。(Tôi đã mua bộ mỹ phẩm mới.)" }
    ],
    grammar: [
      {
        structure: "1. Thể thông thường + そうです (Truyền đạt thông tin: Nghe nói là...)",
        explanation: "Dùng để truyền đạt nguyên văn hoặc tóm tắt thông tin tiếp nhận được từ người khác, truyền thông, báo đài mà không đưa nhận định chủ quan của mình vào:\n• Động từ: Thể thông thường + そうです\n• Tính từ đuôi い: Thể thông thường + そうです\n• Tính từ đuôi な: Thể thông thường (〜だ) + そうです (giữ lại だ)\n• Danh từ: Thể thông thường (〜だ) + そうです (giữ lại だ).",
        caution: "Phân biệt với 〜そうです ở Bài 43 (V-bỏ ます / A-bỏ い + そうです = trông có vẻ, sắp xảy ra dựa trên thị giác trực tiếp). Ở Bài 47, động từ và tính từ giữ nguyên thể thông thường (kể cả đuôi だ của tính từ な và Danh từ).",
        examples: [
          {
            type: "sentence",
            context: "Nghe nói ngày mai trời mưa",
            jp: "<span class=\"furigana\"><ruby>天気予報<rt>てんきよほう</rt></ruby></span>に よると、<span class=\"furigana\"><ruby>明日<rt>あした</rt></ruby></span>は <span class=\"furigana\"><ruby>雨<rt>あめ</rt></ruby></span>が <span class=\"furigana\"><ruby>降<rt>ふ</rt></ruby>る</span>そうです。",
            rawJp: "天気予報によると、明日は雨が降るそうです。",
            vi: "Theo dự báo thời tiết thì nghe nói ngày mai trời sẽ mưa."
          },
          {
            type: "sentence",
            context: "Nghe nói anh Miller rất giỏi tiếng Nhật",
            jp: "ミラーさんは <span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>が <span class=\"furigana\"><ruby>上手<rt>じょうず</rt></ruby>だ</span>そうです。",
            rawJp: "ミラーさんは日本語が上手だそうです。",
            vi: "Nghe nói anh Miller rất giỏi tiếng Nhật."
          }
        ]
      },
      {
        structure: "2. N によると (Theo nguồn tin N / Căn cứ vào N)",
        explanation: "Đứng ở đầu câu hoặc trước vị ngữ để chỉ rõ nguồn gốc, xuất xứ của thông tin được truyền đạt. Cuối câu thường kết hợp với mẫu câu truyền đạt 〜そうです.",
        caution: "N phải là nguồn thông tin xác định (bản tin, người nói, bài báo...): 新聞によると, 先生の話によると...",
        examples: [
          {
            type: "sentence",
            context: "Theo báo chí, giá cả sẽ tăng",
            jp: "<span class=\"furigana\"><ruby>新聞<rt>しんぶん</rt></ruby></span>に よると、<span class=\"furigana\"><ruby>物価<rt>ぶっか</rt></ruby></span>が <span class=\"furigana\"><ruby>上<rt>あ</rt></ruby>がる</span>そうです。",
            rawJp: "新聞によると、物価が上がるそうです。",
            vi: "Theo báo chí thì nghe nói vật giá sắp tăng."
          }
        ]
      },
      {
        structure: "3. Thể thông thường + ようです (Phán đoán dường như / hình như)",
        explanation: "Biểu thị sự suy đoán, nhận định của người nói dựa trên các bằng chứng quan sát trực tiếp được bằng mắt, giác quan hoặc tình huống cụ thể tại hiện trường:\n• Động từ / Tính từ đuôi い: Thể thông thường + ようです\n• Tính từ đuôi な: な + ようです (A-な だ biến thành な)\n• Danh từ: の + ようです (N だ biến thành の)\n• Thường đi kèm phó từ どうも (dường như, không rõ chắc chắn).",
        caution: "Khác với そうです (chỉ nhìn vẻ ngoài trực giác), ようです có cơ sở phán đoán đa chiều dựa trên tình hình, chứng cớ thu thập được.",
        examples: [
          {
            type: "sentence",
            context: "Thấy mọi người giương ô phán đoán trời mưa",
            jp: "<span class=\"furigana\"><ruby>人<rt>ひと</rt></ruby></span>が <span class=\"furigana\"><ruby>傘<rt>かさ</rt></ruby></span>を さして いますから、<span class=\"furigana\"><ruby>雨<rt>あめ</rt></ruby></span>が <span class=\"furigana\"><ruby>降<rt>ふ</rt></ruby>っている</span>ようです。",
            rawJp: "人が傘をさしていますから、雨が降っているようです。",
            vi: "Mọi người đang che ô nên dường như trời đang mưa."
          },
          {
            type: "sentence",
            context: "Nhà tắt đèn phán đoán vắng nhà",
            jp: "<span class=\"furigana\"><ruby>電気<rt>でんき</rt></ruby></span>が 消えて いますから、<span class=\"furigana\"><ruby>留守<rt>るす</rt></ruby></span>の ようです。",
            rawJp: "電気が消えていますから、留守のようです。",
            vi: "Điện tắt hết rồi nên có vẻ như họ vắng nhà."
          }
        ]
      },
      {
        structure: "4. 音 / 声 / 味 / におい + が します (Cảm giác giác quan)",
        explanation: "Dùng để diễn tả các hiện tượng cảm nhận được thông qua các giác quan tự nhiên (thính giác, vị giác, khứu giác) mà không do con người chủ ý tạo ra:\n• 音が します: Nghe thấy có tiếng động vang lên.\n• 声が します: Nghe thấy có tiếng người nói.\n• 味が します: Nếm thấy có vị gì đó (ngọt, đắng, lạ).\n• においが します: Ngửi thấy có mùi (thơm, khét).",
        caution: "Luôn dùng trợ từ が với động từ します trong cấu trúc này.",
        examples: [
          {
            type: "sentence",
            context: "Ngửi thấy mùi khét",
            jp: "どこかで <span class=\"furigana\"><ruby>焦<rt>こ</rt></ruby>げた</span> においが しますよ。",
            rawJp: "どこかで焦げたにおいがしますよ。",
            vi: "Ở đâu đó ngửi thấy có mùi khét đấy!"
          },
          {
            type: "sentence",
            context: "Có tiếng động lạ ngoài sân",
            jp: "<span class=\"furigana\"><ruby>庭<rt>にわ</rt></ruby></span>で <span class=\"furigana\"><ruby>変<rt>へん</rt></ruby>な</span> <span class=\"furigana\"><ruby>音<rt>おと</rt></ruby></span>が します。",
            rawJp: "庭で変な音がします。",
            vi: "Ở ngoài vườn có tiếng động lạ vang lên."
          }
        ]
      }
    ]
  },

  // BÀI 48
  {
    id: "bai-48",
    title: "Bài 48: Động Từ Thể Sai Khiến (使役形 - Cho Phép Hoặc Bắt Buộc Làm)",
    level: "Minna no Nihongo N4 (Bài 48)",
    badge: "Thể Sai khiến",
    description: "Nắm vững quy tắc chia động từ thể sai khiến (使役形 - Shiekikei) cho cả 3 nhóm, cấu trúc câu sai khiến với nội động từ và ngoại động từ, hai sắc thái ý nghĩa (bắt buộc cưỡng chế vs cho phép dung dưỡng), và cách xin phép lịch sự cao độ với 〜させていただけませんか.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>降<rt>お</rt></ruby>ろします</span>", hiragana: "おろします", meaning: "Cho xuống xe, dỡ hàng hóa xuống", type: "Động từ nhóm 1", example: "ここで 荷物を 降ろして ください。(Xin hãy dỡ đồ xuống tại đây.)" },
      { kanji: "<span class=\"furigana\"><ruby>届<rt>とど</rt></ruby>けます</span>", hiragana: "とどけます", meaning: "Chuyển phát đến, đưa đến nơi", type: "Động từ nhóm 2", example: "手紙を 届けます。(Giao chuyển bức thư tới nơi.)" },
      { kanji: "<span class=\"furigana\"><ruby>世話<rt>せわ</rt></ruby>を します</span>", hiragana: "せわをします", meaning: "Chăm sóc, chăm nom, phụng dưỡng", type: "Cụm động từ", example: "犬の 世話を します。(Chăm sóc cho chú chó.)" },
      { kanji: "<span class=\"furigana\"><ruby>録音<rt>ろくおん</rt></ruby>します</span>", hiragana: "ろくおんします", meaning: "Ghi âm, thu âm giọng nói", type: "Động từ nhóm 3", example: "講義を 録音します。(Ghi âm lại bài giảng.)" },
      { kanji: "<span class=\"furigana\"><ruby>嫌<rt>いや</rt></ruby>な</span>", hiragana: "いやな", meaning: "Ghét, khó chịu, không vừa ý", type: "Tính từ đuôi な", example: "嫌な 仕事も やらなければ なりません。(Dù là công việc không thích cũng phải làm.)" },
      { kanji: "<span class=\"furigana\"><ruby>厳<rt>きび</rt></ruby>しい</span>", hiragana: "きびしい", meaning: "Nghiêm khắc, khắt khe", type: "Tính từ đuôi い", example: "厳しい 先生ですが 優しいです。(Thầy giáo nghiêm khắc nhưng rất tốt bụng.)" },
      { kanji: "<span class=\"furigana\"><ruby>塾<rt>じゅく</rt></ruby></span>", hiragana: "じゅく", meaning: "Lò luyện thi, lớp học thêm ngoài giờ", type: "Danh từ", example: "塾に 通います。(Đi học ở lò luyện thi.)" },
      { kanji: "<span class=\"furigana\">スケジュール</span>", hiragana: "スケジュール", meaning: "Lịch trình, thời khóa biểu", type: "Danh từ", example: "スケジュールを 確認します。(Kiểm tra lại lịch trình.)" },
      { kanji: "<span class=\"furigana\"><ruby>生徒<rt>せいと</rt></ruby></span>", hiragana: "せいと", meaning: "Học sinh (tiểu học, trung học cơ sở)", type: "Danh từ", example: "生徒たちが 校庭を 走って います。(Các em học sinh đang chạy ở sân trường.)" },
      { kanji: "<span class=\"furigana\"><ruby>者<rt>もの</rt></ruby></span>", hiragana: "もの", meaning: "Người, kẻ (khiêm xưng phe mình)", type: "Danh từ", example: "私どもの 会社の 者です。(Là người thuộc công ty chúng tôi.)" },
      { kanji: "<span class=\"furigana\"><ruby>入管<rt>にゅうかん</rt></ruby></span>", hiragana: "にゅうかん", meaning: "Cục quản lý xuất nhập cảnh", type: "Danh từ", example: "入管へ ビザの 更新に 行きます。(Đến Cục xuất nhập cảnh để gia hạn visa.)" },
      { kanji: "<span class=\"furigana\"><ruby>再入国<rt>さいにゅうこく</rt></ruby>ビザ</span>", hiragana: "さいにゅうこくビザ", meaning: "Thị thực tái nhập cảnh", type: "Danh từ", example: "再入国ビザを 申請します。(Xin cấp thị thực tái nhập cảnh.)" },
      { kanji: "<span class=\"furigana\"><ruby>自由<rt>じゆう</rt></ruby>に</span>", hiragana: "じゆうに", meaning: "Một cách tự do, thoải mái", type: "Phó từ", example: "自由に 質問して ください。(Xin cứ tự do thoải mái đặt câu hỏi.)" },
      { kanji: "<span class=\"furigana\">〜<ruby>間<rt>かん</rt></ruby></span>", hiragana: "〜かん", meaning: "Trong khoảng [thời gian]", type: "Hậu tố", example: "3日間 休みを もらいました。(Được nghỉ phép trong khoảng 3 ngày.)" },
      { kanji: "<span class=\"furigana\">いいことですね</span>", hiragana: "いいことですね", meaning: "Thật là một điều tốt đẹp nhỉ", type: "Câu giao tiếp", example: "ボランティアを 始めるんですか。いいことですね。(Bạn định làm tình nguyện ư? Điều tốt quá nhỉ!)" },
      { kanji: "<span class=\"furigana\">お<ruby>忙<rt>いそが</rt></ruby>しいですか</span>", hiragana: "おいそがしいですか", meaning: "Anh/chị có đang bận không?", type: "Câu giao tiếp", example: "今 お忙しいですか。(Bây giờ anh có bận không ạ?)" },
      { kanji: "<span class=\"furigana\"><ruby>久<rt>ひさ</rt></ruby>しぶり</span>", hiragana: "ひさしぶり", meaning: "Lâu ngày không gặp", type: "Danh từ / Cụm từ", example: "お久しぶりですね。お元気ですか。(Lâu ngày quá rồi nhỉ. Anh vẫn khỏe chứ?)" },
      { kanji: "<span class=\"furigana\"><ruby>営業<rt>えいぎょう</rt></ruby></span>", hiragana: "えいぎょう", meaning: "Kinh doanh, bán hàng, tiếp thị", type: "Danh từ", example: "営業の 仕事を して います。(Tôi làm công việc tiếp thị kinh doanh.)" },
      { kanji: "<span class=\"furigana\">それまでに</span>", hiragana: "それまでに", meaning: "Trước thời điểm đó, cho đến lúc đó", type: "Phó từ", example: "それまでに 書類を 作成します。(Tôi sẽ hoàn thành tài liệu trước lúc đó.)" },
      { kanji: "<span class=\"furigana\">かまいません</span>", hiragana: "かまいません", meaning: "Không sao đâu, không có hề hấn gì", type: "Câu giao tiếp", example: "ここで 待っても かまいませんよ。(Bạn đợi ở đây cũng không sao đâu.)" },
      { kanji: "<span class=\"furigana\"><ruby>楽<rt>たの</rt></ruby>しむ</span>", hiragana: "たのしむ", meaning: "Tận hưởng, thưởng thức niềm vui", type: "Động từ nhóm 1", example: "休日を 楽しみます。(Tận hưởng ngày nghỉ.)" },
      { kanji: "<span class=\"furigana\"><ruby>親<rt>おや</rt></ruby></span>", hiragana: "おや", meaning: "Bố mẹ, phụ huynh", type: "Danh từ", example: "親の 気持ちを 考えます。(Nghĩ cho tấm lòng của cha mẹ.)" },
      { kanji: "<span class=\"furigana\"><ruby>小学校<rt>しょうがっこう</rt></ruby></span>", hiragana: "しょうがっこう", meaning: "Trường tiểu học", type: "Danh từ", example: "小学校に 通う。(Đi học trường tiểu học.)" },
      { kanji: "<span class=\"furigana\">パーセント</span>", hiragana: "パーセント", meaning: "Phần trăm (%)", type: "Danh từ", example: "合格率は 80パーセントです。(Tỷ lệ thi đỗ là 80%.)" },
      { kanji: "<span class=\"furigana\">その<ruby>次<rt>つぎ</rt></ruby></span>", hiragana: "そのつぎ", meaning: "Kế tiếp, sau đó nữa", type: "Danh từ", example: "その次に やるべき こと (Việc cần làm tiếp sau đó)" },
      { kanji: "<span class=\"furigana\"><ruby>習字<rt>しゅうじ</rt></ruby></span>", hiragana: "しゅうじ", meaning: "Môn luyện chữ đẹp, thư pháp", type: "Danh từ", example: "習字を 習って います。(Đang học luyện viết chữ đẹp.)" },
      { kanji: "<span class=\"furigana\"><ruby>普通<rt>ふつう</rt></ruby>の</span>", hiragana: "ふつうの", meaning: "Bình thường, thông thường", type: "Tính từ đuôi な", example: "普通の 生活を 送りたい。(Muốn sống một cuộc sống bình thường.)" }
    ],
    grammar: [
      {
        structure: "1. Quy tắc chia Động từ Thể Sai khiến (使役形 - Shiekikei)",
        explanation: "Động từ thể sai khiến biểu thị hành động cho phép hoặc bắt buộc người khác thực hiện một hành vi nào đó:\n• Nhóm 1: Chuyển âm cuối hàng [い] sang hàng [あ] rồi thêm せます.\n  - 書きます → 書かせます\n  - 読みます → 読ませます\n  - 行きます → 行かせます\n  - 待ちます → 待たせます\n  - 買います → 買わせます (âm い chuyển thành わ)\n• Nhóm 2: Bỏ ます rồi thêm させます.\n  - 食べます → 食べさせます\n  - 見ます → 見させます\n• Nhóm 3:\n  - します → させます\n  - 来ます (きます) → 来させます (こさせます).",
        caution: "Tất cả các động từ sau khi chuyển sang thể sai khiến đều trở thành động từ Nhóm 2 (chia tiếp te/nai/ta như nhóm 2).",
        examples: [
          {
            type: "sentence",
            context: "Bắt tập luyện nhiều",
            jp: "<span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>は <span class=\"furigana\"><ruby>学生<rt>がくせい</rt></ruby></span>に たくさん <span class=\"furigana\"><ruby>練習<rt>れんしゅう</rt></ruby>させます</span>。",
            rawJp: "先生は学生にたくさん練習させます。",
            vi: "Thầy giáo bắt học sinh phải luyện tập thật nhiều."
          }
        ]
      },
      {
        structure: "2. Cấu trúc câu Sai khiến: Nội động từ và Ngoại động từ",
        explanation: "Có 2 dạng câu sai khiến phụ thuộc vào loại động từ:\n• Trường hợp 1: Nội động từ (không có tân ngữ trực tiếp を):\n  [Người ra lệnh] は [Người nhận lệnh] を V-(sai khiến)\n  Ví dụ: 部長は 田中さんを 大阪へ 出張させます。(Trưởng phòng cử anh Tanaka đi công tác Osaka.)\n• Trường hợp 2: Ngoại động từ (câu đã có tân ngữ N を):\n  [Người ra lệnh] は [Người nhận lệnh] に N を V-(sai khiến)\n  Để tránh 2 trợ từ を trong cùng một câu, người nhận lệnh sẽ đi với trợ từ に.\n  Ví dụ: 母は 子どもに 野菜を 食べさせます。(Mẹ bắt con ăn rau.)",
        caution: "Với các nội động từ chỉ cảm xúc như 喜ぶ (vui), 心配する (lo lắng), 泣く (khóc) thì luôn dùng を cho đối tượng chịu tác động: 妹を 泣かせました (làm em gái khóc).",
        examples: [
          {
            type: "sentence",
            context: "Cho phép con chơi tự do",
            jp: "<span class=\"furigana\"><ruby>親<rt>おや</rt></ruby></span>は <span class=\"furigana\"><ruby>子供<rt>こども</rt></ruby></span>を <span class=\"furigana\"><ruby>自由<rt>じゆう</rt></ruby>に</span> <span class=\"furigana\"><ruby>遊<rt>あそ</rt></ruby>ばせます</span>。",
            rawJp: "親は子供を自由に遊ばせます。",
            vi: "Bố mẹ cho con cái vui chơi một cách tự do."
          },
          {
            type: "sentence",
            context: "Bắt đọc sách tiếng Nhật",
            jp: "<span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>は <span class=\"furigana\"><ruby>学生<rt>がくせい</rt></ruby></span>に <span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>の <span class=\"furigana\"><ruby>本<rt>ほん</rt></ruby></span>を <span class=\"furigana\"><ruby>読<rt>よ</rt></ruby>ませました</span>。",
            rawJp: "先生は学生に日本語の本を読ませました。",
            vi: "Thầy giáo đã bắt học sinh đọc sách tiếng Nhật."
          }
        ]
      },
      {
        structure: "3. V-使役て + いただけませんか (Xin phép lịch sự: Làm ơn cho phép tôi làm...)",
        explanation: "Đây là mẫu câu xin phép với mức độ tôn kính, lịch sự cao nhất, thường dùng khi nói chuyện với cấp trên, thầy cô hoặc người lớn tuổi:\n• Ý nghĩa: 'Làm ơn cho phép tôi được thực hiện hành động này có được không ạ?'.\n• Cách tạo: Động từ chuyển sang thể Sai khiến thể て + いただけませんか.",
        caution: "Chủ ngữ ngầm của hành động chính là 'tôi' (người nói), mong đối phương rộng lòng cho phép.",
        examples: [
          {
            type: "sentence",
            context: "Xin phép về sớm vì bị sốt",
            jp: "<span class=\"furigana\"><ruby>熱<rt>ねつ</rt></ruby></span>が ありますので、<span class=\"furigana\"><ruby>今日<rt>きょう</rt></ruby></span>は <span class=\"furigana\"><ruby>早<rt>はや</rt></ruby>く</span> <span class=\"furigana\"><ruby>帰<rt>かえ</rt></ruby>らせて</span> いただけませんか。",
            rawJp: "熱がありますので、今日は早く帰らせていただけませんか。",
            vi: "Vì bị sốt nên hôm nay ngài cho phép tôi xin về sớm có được không ạ?"
          },
          {
            type: "sentence",
            context: "Xin phép giải thích sự việc",
            jp: "この <span class=\"furigana\"><ruby>件<rt>けん</rt></ruby></span>について <span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>に <span class=\"furigana\"><ruby>説明<rt>せつめい</rt></ruby>させて</span> いただけませんか。",
            rawJp: "この件について私に説明させていただけませんか。",
            vi: "Xin cho phép tôi được giải thích về vụ việc này có được không ạ?"
          }
        ]
      }
    ]
  },

  // BÀI 49
  {
    id: "bai-49",
    title: "Bài 49: Tôn Kính Ngữ (尊敬語 - Nâng Cao Vị Thế Đối Phương)",
    level: "Minna no Nihongo N4 (Bài 49)",
    badge: "Tôn kính ngữ (Sonkeigo)",
    description: "Nắm vững toàn diện hệ thống Tôn kính ngữ (尊敬語 - Sonkeigo): các động từ đặc biệt, công thức chuẩn お V に なります, tôn kính thể bị động, và cách đưa ra lời mời/hướng dẫn lịch sự với お V ください.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>利用<rt>りよう</rt></ruby>します</span>", hiragana: "りようします", meaning: "Sử dụng, tận dụng", type: "Động từ nhóm 3", example: "図書館を 利用します。(Sử dụng thư viện.)" },
      { kanji: "<span class=\"furigana\"><ruby>勤<rt>つと</rt></ruby>めます</span>", hiragana: "つとめます", meaning: "Làm việc, phục vụ tại [công ty - 会社に〜]", type: "Động từ nhóm 2", example: "貿易会社に 勤めて います。(Tôi đang làm việc tại một công ty thương mại.)" },
      { kanji: "<span class=\"furigana\"><ruby>掛<rt>か</rt></ruby>けます</span>", hiragana: "かけます", meaning: "Ngồi [vào ghế - いすに〜]", type: "Động từ nhóm 2", example: "どうぞ いすに お掛け ください。(Xin mời ngài ngồi xuống ghế.)" },
      { kanji: "<span class=\"furigana\"><ruby>過<rt>す</rt></ruby>ごします</span>", hiragana: "すごします", meaning: "Trải qua, sống qua [kỳ nghỉ, thời gian]", type: "Động từ nhóm 1", example: "週末を 楽しく 過ごしました。(Tôi đã trải qua dịp cuối tuần rất vui vẻ.)" },
      { kanji: "<span class=\"furigana\"><ruby>寄<rt>よ</rt></ruby>ります</span>", hiragana: "よります", meaning: "Ghé vào, tạt qua [ngân hàng, cửa hàng]", type: "Động từ nhóm 1", example: "帰りに スーパーに 寄ります。(Trên đường về tôi sẽ tạt qua siêu thị.)" },
      { kanji: "<span class=\"furigana\">いらっしゃいます</span>", hiragana: "いらっしゃいます", meaning: "Ở, đi, đến (tôn kính ngữ của います, 行きます, 来ます)", type: "Động từ nhóm 1", example: "先生は 研究室に いらっしゃいます。(Thầy giáo đang ở trong phòng nghiên cứu.)" },
      { kanji: "<span class=\"furigana\"><ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がります</span>", hiragana: "めしあがります", meaning: "Ăn, uống (tôn kính ngữ của 食べます, 飲みます)", type: "Động từ nhóm 1", example: "どうぞ お茶を 召し上がって ください。(Xin mời ngài dùng trà.)" },
      { kanji: "<span class=\"furigana\">おっしゃいます</span>", hiragana: "おっしゃいます", meaning: "Nói, bảo (tôn kính ngữ của 言います)", type: "Động từ nhóm 1", example: "社長が そう おっしゃいました。(Giám đốc đã nói như thế ạ.)" },
      { kanji: "<span class=\"furigana\">なさいます</span>", hiragana: "なさいます", meaning: "Làm, thực hiện (tôn kính ngữ của します)", type: "Động từ nhóm 1", example: "週末は 何を なさいますか。(Cuối tuần ngài sẽ làm gì ạ?)" },
      { kanji: "<span class=\"furigana\">ご<ruby>覧<rt>らん</rt></ruby>に なります</span>", hiragana: "ごらんになります", meaning: "Xem, nhìn (tôn kính ngữ của 見ます)", type: "Cụm động từ", example: "この 写真を ご覧に なりましたか。(Ngài đã xem bức ảnh này chưa ạ?)" },
      { kanji: "<span class=\"furigana\">ご<ruby>存<rt>ぞん</rt></ruby>じです</span>", hiragana: "ごぞんじです", meaning: "Biết (tôn kính ngữ của 知っています)", type: "Cụm từ", example: "あの方の お名前を ご存じですか。(Ngài có biết tên của vị kia không ạ?)" },
      { kanji: "<span class=\"furigana\">あいさつ</span>", hiragana: "あいさつ", meaning: "Lời chào hỏi, lời chào mừng phát biểu", type: "Danh từ", example: "開会の あいさつを します。(Phát biểu khai mạc.)" },
      { kanji: "<span class=\"furigana\"><ruby>灰皿<rt>はいざら</rt></ruby></span>", hiragana: "はいざら", meaning: "Cái gạt tàn thuốc lá", type: "Danh từ", example: "灰皿は あちらに あります。(Gạt tàn thuốc ở phía đằng kia.)" },
      { kanji: "<span class=\"furigana\"><ruby>旅館<rt>りょかん</rt></ruby></span>", hiragana: "りょかん", meaning: "Quán trọ kiểu truyền thống Nhật Bản", type: "Danh từ", example: "温泉の 旅館に 泊まりました。(Tôi đã trọ lại ở một lữ quán suối nước nóng.)" },
      { kanji: "<span class=\"furigana\"><ruby>会場<rt>かいじょう</rt></ruby></span>", hiragana: "かいじょう", meaning: "Hội trường, địa điểm tổ chức", type: "Danh từ", example: "試験の 会場へ 行きます。(Đến địa điểm thi.)" },
      { kanji: "<span class=\"furigana\">バス<ruby>停<rt>てい</rt></ruby></span>", hiragana: "バスてい", meaning: "Trạm đón xe buýt, bến xe buýt", type: "Danh từ", example: "バス停で 10分 待ちました。(Tôi đợi 10 phút ở trạm xe buýt.)" },
      { kanji: "<span class=\"furigana\"><ruby>貿易<rt>ぼうえき</rt></ruby></span>", hiragana: "ぼうえき", meaning: "Thương mại quốc tế, xuất nhập khẩu", type: "Danh từ", example: "貿易の 仕事に 携わります。(Tham gia làm công việc xuất nhập khẩu.)" },
      { kanji: "<span class=\"furigana\">〜<ruby>様<rt>さま</rt></ruby></span>", hiragana: "〜さま", meaning: "Ngài, quý ông/bà (kính xưng cao của 〜さん)", type: "Hậu tố", example: "田中様、いらっしゃいませ。(Kính chào quý khách Tanaka ạ.)" },
      { kanji: "<span class=\"furigana\"><ruby>帰<rt>かえ</rt></ruby>りに</span>", hiragana: "かえりに", meaning: "Trên đường trở về", type: "Phó từ", example: "仕事の 帰りに 買い物を します。(Tiện đường đi làm về tôi đi mua sắm.)" },
      { kanji: "<span class=\"furigana\">たまに</span>", hiragana: "たまに", meaning: "Thỉnh thoảng, đôi khi", type: "Phó từ", example: "たまに 家族と 外食します。(Thỉnh thoảng tôi đi ăn ngoài với gia đình.)" },
      { kanji: "<span class=\"furigana\">ちっとも</span>", hiragana: "ちっとも", meaning: "Hoàn toàn không, một chút cũng không (đi với phủ định)", type: "Phó từ", example: "ちっとも 寒く ありません。(Trời chẳng lạnh một chút nào cả.)" },
      { kanji: "<span class=\"furigana\"><ruby>遠慮<rt>えんりょ</rt></ruby>なく</span>", hiragana: "えんりょなく", meaning: "Không cần ngần ngại, cứ tự nhiên", type: "Phó từ", example: "どうぞ 遠慮なく 召し上がって ください。(Xin mời quý khách cứ tự nhiên dùng bữa.)" },
      { kanji: "<span class=\"furigana\">〜<ruby>年<rt>ねん</rt></ruby>〜<ruby>組<rt>くみ</rt></ruby></span>", hiragana: "〜ねん〜くみ", meaning: "Lớp ~ năm thứ ~", type: "Danh từ", example: "3年2組の 教室 (Phòng học lớp 2 năm thứ 3)" },
      { kanji: "<span class=\"furigana\">では</span>", hiragana: "では", meaning: "Vậy thì, thế thì (thể trang trọng của じゃ)", type: "Liên từ", example: "では、始めましょう。(Vậy thì, chúng ta bắt đầu thôi.)" },
      { kanji: "<span class=\"furigana\"><ruby>出<rt>だ</rt></ruby>します</span>", hiragana: "だします", meaning: "Bị, phát sốt [熱を〜]", type: "Động từ nhóm 1", example: "子どもが 熱を 出しました。(Cháu bé bị phát sốt.)" },
      { kanji: "<span class=\"furigana\">よろしくお<ruby>伝<rt>つた</rt></ruby>えください</span>", hiragana: "よろしくおつたえください", meaning: "Xin vui lòng chuyển lời hỏi thăm giúp tôi", type: "Câu giao tiếp", example: "奥様に よろしく お伝え ください。(Xin cho tôi gửi lời hỏi thăm đến phu nhân.)" },
      { kanji: "<span class=\"furigana\"><ruby>失礼<rt>しつれい</rt></ruby>いたします</span>", hiragana: "しつれいいたします", meaning: "Tôi xin phép thất lễ (khi tạm biệt hoặc bước vào)", type: "Câu giao tiếp", example: "それでは、失礼いたします。(Vậy thì, tôi xin phép thất lễ xin về trước.)" },
      { kanji: "<span class=\"furigana\"><ruby>講師<rt>こうし</rt></ruby></span>", hiragana: "こうし", meaning: "Giảng viên, người thuyết giảng", type: "Danh từ", example: "大学の 講師を 務めます。(Đảm nhiệm vai trò giảng viên đại học.)" },
      { kanji: "<span class=\"furigana\"><ruby>多<rt>おお</rt></ruby>くの〜</span>", hiragana: "おおくの〜", meaning: "Nhiều ~, phần lớn ~", type: "Định từ", example: "多くの 人々が 集まりました。(Rất đông người đã tụ họp.)" },
      { kanji: "<span class=\"furigana\"><ruby>作品<rt>さくひん</rt></ruby></span>", hiragana: "さくひん", meaning: "Tác phẩm nghệ thuật, công trình sáng tác", type: "Danh từ", example: "有名な 芸術作品 (Tác phẩm nghệ thuật nổi tiếng)" },
      { kanji: "<span class=\"furigana\"><ruby>受賞<rt>じゅしょう</rt></ruby>します</span>", hiragana: "じゅしょうします", meaning: "Được nhận giải thưởng", type: "Động từ nhóm 3", example: "文学賞を 受賞しました。(Đã đoạt được giải thưởng văn học.)" },
      { kanji: "<span class=\"furigana\"><ruby>作家<rt>さっか</rt></ruby></span>", hiragana: "さっか", meaning: "Nhà văn, tác giả sáng tác", type: "Danh từ", example: "大好きな 作家の 新刊 (Tập sách mới của nhà văn tôi mến mộ)" },
      { kanji: "<span class=\"furigana\"><ruby>長男<rt>ちょうなん</rt></ruby></span>", hiragana: "ちょうなん", meaning: "Trưởng nam, con trai cả", type: "Danh từ", example: "長男は もう 大学生です。(Con trai đầu của tôi đã là sinh viên đại học rồi.)" },
      { kanji: "<span class=\"furigana\"><ruby>障害<rt>しょうがい</rt></ruby></span>", hiragana: "しょうがい", meaning: "Khuyết tật, rào cản trở ngại", type: "Danh từ", example: "障害を 乗り越えて 成功しました。(Vượt qua mọi trở ngại để thành công.)" },
      { kanji: "<span class=\"furigana\"><ruby>才能<rt>さいのう</rt></ruby></span>", hiragana: "さいのう", meaning: "Tài năng bẩm sinh", type: "Danh từ", example: "音楽の 才能が あります。(Có tài năng thiên bẩm về âm nhạc.)" },
      { kanji: "<span class=\"furigana\"><ruby>発揮<rt>はっき</rt></ruby>します</span>", hiragana: "はっきします", meaning: "Phát huy năng lực", type: "Động từ nhóm 3", example: "実力を 十分に 発揮します。(Phát huy tối đa thực lực của mình.)" }
    ],
    grammar: [
      {
        structure: "1. Tổng quan về Tôn kính ngữ (尊敬語 - Sonkeigo)",
        explanation: "Tôn kính ngữ dùng để biểu thị sự tôn kính tuyệt đối đối với người nghe hoặc nhân vật thứ ba có vị thế cao hơn người nói (thầy cô, khách hàng, giám đốc, người cao tuổi).\n• QUY TẮC CỐT LÕI: Chỉ dùng cho hành động, trạng thái, đồ vật của ĐỐI PHƯƠNG. Tuyệt đối KHÔNG dùng tôn kính ngữ cho hành động của chính mình hay người trong gia đình/công ty mình (phe mình).",
        caution: "Không bao giờ nói: 私は 召し上がります (sai nghiêm trọng). Phải nói: 私は いただきます.",
        examples: [
          {
            type: "sentence",
            context: "Hỏi khách hàng uống gì",
            jp: "<span class=\"furigana\"><ruby>何<rt>なに</rt></ruby></span>を <span class=\"furigana\"><ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりますか</span>。",
            rawJp: "何を召し上がりますか。",
            vi: "Ngài dùng đồ uống gì ạ?"
          }
        ]
      },
      {
        structure: "2. Các Động từ Tôn kính ngữ Đặc biệt (Bất quy tắc)",
        explanation: "Các động từ thông dụng có dạng tôn kính riêng biệt bắt buộc phải học thuộc lòng:\n• 行きます / 来ます / います → いらっしゃいます\n• 食べます / 飲みます → 召し上がります (めしあがります)\n• 言います → おっしゃいます\n• 知っています → ご存じです (ごぞんじです)\n• 見ます → ご覧になります (ごらんになります)\n• します → なさいます\n• くれます → くださいます.",
        caution: "Chia ở thể て: いらっしゃって, おっしゃって, なさって. Chia thể phủ định: いらっしゃいません, おっしゃいません.",
        examples: [
          {
            type: "sentence",
            context: "Hỏi giám đốc đã về chưa",
            jp: "<span class=\"furigana\"><ruby>社長<rt>しゃちょう</rt></ruby></span>は もう <span class=\"furigana\">お<ruby>帰<rt>かえ</rt></ruby>りに</span> なりましたか。",
            rawJp: "社長はもうお帰りになりましたか。",
            vi: "Giám đốc đã về rồi ạ?"
          },
          {
            type: "sentence",
            context: "Hỏi thầy giáo có biết chuyện đó không",
            jp: "<span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>、その ニュースを <span class=\"furigana\">ご<ruby>存<rt>ぞん</rt></ruby>じですか</span>。",
            rawJp: "先生、そのニュースをご存じですか。",
            vi: "Thưa thầy, thầy có biết tin tức đó không ạ?"
          }
        ]
      },
      {
        structure: "3. Công thức Tôn kính ngữ: お V-(bỏ ます) に なります (Nhóm 1 & 2)",
        explanation: "Với các động từ nhóm 1 và nhóm 2 không có dạng tôn kính đặc biệt, ta sử dụng công thức chuẩn:\n• お + V-(thân ます) + に なります\n• Ví dụ:\n  - 読みます → お読みに なります\n  - 書きます → お書きに なります\n  - 待ちます → お待ちに なります\n  - 帰ります → お帰りに なります.",
        caution: "Không áp dụng cho động từ có 1 âm tiết trước ます (như 見ます, 寝ます) và động từ nhóm 3.",
        examples: [
          {
            type: "sentence",
            context: "Trưởng phòng đọc báo",
            jp: "<span class=\"furigana\"><ruby>部長<rt>ぶちょう</rt></ruby></span>は <span class=\"furigana\"><ruby>新聞<rt>しんぶん</rt></ruby></span>を <span class=\"furigana\">お<ruby>読<rt>よ</rt></ruby>みに</span> なって います。",
            rawJp: "部長は新聞をお読みになっています。",
            vi: "Trưởng phòng đang đọc báo."
          }
        ]
      },
      {
        structure: "4. Tôn kính ngữ dạng Bị động (V-れる / V-られる)",
        explanation: "Chia động từ theo thể Bị động để biểu thị sự kính trọng. Dạng thức này có mức độ trang trọng vừa phải, thường gặp trong hội thoại công sở thông thường (nhẹ nhàng hơn お〜になります):\n• Nhóm 1: 書く → 書かれる (部長は 手紙を 書かれました)\n• Nhóm 2: 食べる → 食べられる (先生は もう 食べられました)\n• Nhóm 3: される / 来られる (こられる).",
        caution: "Ý nghĩa kính trọng phụ thuộc vào ngữ cảnh để tránh nhầm lẫn với câu bị động gây hại.",
        examples: [
          {
            type: "sentence",
            context: "Hỏi thời điểm đến",
            jp: "<span class=\"furigana\"><ruby>社長<rt>しゃちょう</rt></ruby></span>は <span class=\"furigana\"><ruby>何時<rt>なんじ</rt></ruby></span>に <span class=\"furigana\"><ruby>来<rt>こ</rt></ruby>られますか</span>。",
            rawJp: "社長は何時に来られますか。",
            vi: "Giám đốc sẽ đến vào lúc mấy giờ ạ?"
          }
        ]
      },
      {
        structure: "5. Lời đề nghị / Hướng dẫn khách hàng lịch sự: お V-(bỏ ます) ください / ご N ください",
        explanation: "Dùng khi hướng dẫn khách hàng, mời mọc bề trên thực hiện một việc một cách lịch sự, nhã nhặn:\n• Động từ nhóm 1, 2: お + V-(bỏ ます) + ください (お入りください, お座りください, お書きください).\n• Danh từ hành động (hán tự nhóm 3): ご + N + ください (ご注意ください, ご連絡ください, ご確認ください).",
        caution: "Một số từ thuần Nhật dùng お: お電話ください. Tránh dùng cho động từ 1 âm tiết trước ます.",
        examples: [
          {
            type: "sentence",
            context: "Mời khách điền tên vào phiếu",
            jp: "こちらに お<span class=\"furigana\"><ruby>名前<rt>なまえ</rt></ruby></span>を <span class=\"furigana\">お<ruby>書<rt>か</rt></ruby>き</span> ください。",
            rawJp: "こちらにお名前をお書きください。",
            vi: "Xin quý khách vui lòng viết tên vào đây ạ."
          },
          {
            type: "sentence",
            context: "Nhắc nhở chú ý bậc thềm",
            jp: "<span class=\"furigana\"><ruby>足元<rt>あしもと</rt></ruby></span>に <span class=\"furigana\">ご<ruby>注意<rt>ちゅうい</rt></ruby></span> ください。",
            rawJp: "足元にご注意ください。",
            vi: "Xin quý khách vui lòng chú ý dưới chân ạ."
          }
        ]
      }
    ]
  },

  // BÀI 50
  {
    id: "bai-50",
    title: "Bài 50: Khiêm Nhường Ngữ (謙譲語) & Thể Lịch Sự Trang Trọng (丁寧語)",
    level: "Minna no Nihongo N4 (Bài 50)",
    badge: "Khiêm nhường & Trang trọng",
    description: "Hoàn thiện hệ thống Kính ngữ tiếng Nhật: Khiêm nhường ngữ I (hướng đến đối tác tôn kính), Khiêm nhường ngữ II / Đinh trọng ngữ (hạ mình tỏ thái độ lịch thiệp trước người nghe), cùng các thể lịch sự trang trọng bậc nhất ございます, でございます, và よろしいでしょうか.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>参<rt>まい</rt></ruby>ります</span>", hiragana: "まいります", meaning: "Đi, đến (khiêm nhường ngữ của 行きます, 来ます)", type: "Động từ nhóm 1", example: "ただいま 参ります。(Tôi sẽ đến ngay bây giờ ạ.)" },
      { kanji: "<span class=\"furigana\">おります</span>", hiragana: "おります", meaning: "Ở, có mặt (khiêm nhường ngữ của います)", type: "Động từ nhóm 1", example: "父は 今 庭に おります。(Bố tôi hiện đang ở ngoài sân.)" },
      { kanji: "<span class=\"furigana\">いただきます</span>", hiragana: "いただきます", meaning: "Ăn, uống, nhận (khiêm nhường ngữ của 食べます, 飲みます, もらいます)", type: "Động từ nhóm 1", example: "おいしく いただきます。(Tôi xin phép được thưởng thức món ăn.)" },
      { kanji: "<span class=\"furigana\"><ruby>申<rt>もう</rt></ruby>します</span>", hiragana: "もうします", meaning: "Nói, tự xưng tên là (khiêm nhường ngữ của 言います)", type: "Động từ nhóm 1", example: "田中と 申します。(Tôi tên là Tanaka.)" },
      { kanji: "<span class=\"furigana\">いたします</span>", hiragana: "いたします", meaning: "Làm, thực hiện (khiêm nhường ngữ của します)", type: "Động từ nhóm 1", example: "私が 準備を いたします。(Tôi xin phép được chuẩn bị.)" },
      { kanji: "<span class=\"furigana\"><ruby>拝見<rt>はいけん</rt></ruby>します</span>", hiragana: "はいけんします", meaning: "Xem, ngắm nhìn (khiêm nhường ngữ của 見ます)", type: "Động từ nhóm 3", example: "お手紙を 拝見しました。(Tôi đã được vinh hạnh đọc bức thư của ngài.)" },
      { kanji: "<span class=\"furigana\"><ruby>存<rt>ぞん</rt></ruby>じます</span>", hiragana: "ぞんじます", meaning: "Biết, nghĩ (khiêm nhường ngữ của 知っています, 思います)", type: "Động từ nhóm 2", example: "その 方の お名前は 存じません。(Tôi không được biết tên của vị đó ạ.)" },
      { kanji: "<span class=\"furigana\"><ruby>伺<rt>うかが</rt></ruby>います</span>", hiragana: "うかがいます", meaning: "Hỏi, nghe, đến thăm (khiêm nhường ngữ của 聞きます, 行きます, 訪ねます)", type: "Động từ nhóm 1", example: "明日 会社へ 伺います。(Ngày mai tôi xin phép được đến công ty của ngài.)" },
      { kanji: "<span class=\"furigana\">お<ruby>目<rt>め</rt></ruby>に かかります</span>", hiragana: "おめにかかります", meaning: "Gặp mặt (khiêm nhường ngữ của 会います)", type: "Cụm động từ", example: "先生に お目に かかれて うれしいです。(Tôi rất hân hạnh được diện kiến thầy.)" },
      { kanji: "<span class=\"furigana\">ございます</span>", hiragana: "ございます", meaning: "Có, tồn tại (thể lịch sự trang trọng của あります)", type: "Động từ nhóm 1", example: "質問が ございます。(Tôi xin phép có câu hỏi thắc mắc ạ.)" },
      { kanji: "<span class=\"furigana\">〜で ございます</span>", hiragana: "〜でございます", meaning: "Là... (thể lịch sự trang trọng của 〜です)", type: "Trợ động từ", example: "IMCの ミラーで ございます。(Tôi là Miller thuộc công ty IMC ạ.)" },
      { kanji: "<span class=\"furigana\">わたくし</span>", hiragana: "わたくし", meaning: "Tôi, bản thân tôi (khiêm xưng lịch sự cao cấp của わたし)", type: "Đại từ", example: "わたくしが 担当いたします。(Bản thân tôi xin phép được phụ trách.)" },
      { kanji: "<span class=\"furigana\">ガイド</span>", hiragana: "ガイド", meaning: "Hướng dẫn viên du lịch", type: "Danh từ", example: "ツアーガイドの 案内を 聞きます。(Lắng nghe lời thuyết minh của hướng dẫn viên du lịch.)" },
      { kanji: "<span class=\"furigana\">お<ruby>宅<rt>たく</rt></ruby></span>", hiragana: "おたく", meaning: "Tư gia, nhà của ngài (tôn kính)", type: "Danh từ", example: "先生の お宅へ 伺います。(Tôi xin phép đến thăm tư gia của thầy.)" },
      { kanji: "<span class=\"furigana\"><ruby>郊外<rt>こうがい</rt></ruby></span>", hiragana: "こうがい", meaning: "Vùng ngoại ô, ven đô", type: "Danh từ", example: "郊外の 静かな 町に 住んで います。(Tôi sống ở một thị trấn ngoại ô yên bình.)" },
      { kanji: "<span class=\"furigana\">アルバム</span>", hiragana: "アルバム", meaning: "Album lưu giữ ảnh", type: "Danh từ", example: "家族の アルバムを 見せます。(Cho xem album ảnh gia đình.)" },
      { kanji: "<span class=\"furigana\">さ<ruby>来週<rt>らいしゅう</rt></ruby></span>", hiragana: "さらいしゅう", meaning: "Tuần sau nữa", type: "Danh từ", example: "さ来週の 月曜日に 会議が あります。(Thứ hai tuần sau nữa sẽ có cuộc họp.)" },
      { kanji: "<span class=\"furigana\">さ<ruby>来月<rt>らいげつ</rt></ruby></span>", hiragana: "さらいげつ", meaning: "Tháng sau nữa", type: "Danh từ", example: "さ来月 日本へ 行きます。(Tháng sau nữa tôi sẽ đi Nhật.)" },
      { kanji: "<span class=\"furigana\">さ<ruby>来年<rt>らいねん</rt></ruby></span>", hiragana: "さらいねん", meaning: "Năm sau nữa", type: "Danh từ", example: "さ来年 大学を 卒業します。(Năm sau nữa tôi sẽ tốt nghiệp đại học.)" },
      { kanji: "<span class=\"furigana\"><ruby>最初<rt>さいしょ</rt></ruby>に</span>", hiragana: "さいしょに", meaning: "Trước tiên, đầu tiên", type: "Phó từ", example: "最初に 自己紹介を お願いします。(Trước tiên xin mời quý vị giới thiệu bản thân.)" },
      { kanji: "<span class=\"furigana\"><ruby>最後<rt>さいご</rt></ruby>に</span>", hiragana: "さいごに", meaning: "Sau cùng, cuối cùng", type: "Phó từ", example: "最後に 質問は ありますか。(Cuối cùng thì có ai có câu hỏi gì không ạ?)" },
      { kanji: "<span class=\"furigana\">ただいま</span>", hiragana: "ただいま", meaning: "Ngay bây giờ (dạng trang trọng thương mại của 今)", type: "Phó từ", example: "ただいま 戻りました。(Tôi vừa mới quay trở lại văn phòng đây ạ.)" },
      { kanji: "<span class=\"furigana\"><ruby>江戸東京博物館<rt>えどとうきょうはくぶつかん</rt></ruby></span>", hiragana: "えどとうきょうはくぶつかん", meaning: "Bảo tàng Edo-Tokyo", type: "Danh từ riêng", example: "江戸東京博物館を 見学します。(Tham quan bảo tàng Edo-Tokyo.)" },
      { kanji: "<span class=\"furigana\"><ruby>緊張<rt>きんちょう</rt></ruby>します</span>", hiragana: "きんちょうします", meaning: "Căng thẳng, hồi hộp", type: "Động từ nhóm 3", example: "面接で とても 緊張しました。(Tôi đã vô cùng hồi hộp trong buổi phỏng vấn.)" },
      { kanji: "<span class=\"furigana\"><ruby>放送<rt>ほうそう</rt></ruby>します</span>", hiragana: "ほうそうします", meaning: "Phát thanh, phát sóng truyền hình", type: "Động từ nhóm 3", example: "テレビで 試合を 放送します。(Phát sóng trực tiếp trận đấu trên tivi.)" },
      { kanji: "<span class=\"furigana\"><ruby>撮<rt>と</rt></ruby>ります</span>", hiragana: "とります", meaning: "Quay [phim, video - ビデオに〜]", type: "Động từ nhóm 1", example: "ビデオカメラで 思い出を 撮ります。(Dùng máy quay ghi lại những kỷ niệm đẹp.)" },
      { kanji: "<span class=\"furigana\"><ruby>賞金<rt>しょうきん</rt></ruby></span>", hiragana: "しょうきん", meaning: "Tiền thưởng, giải thưởng bằng tiền", type: "Danh từ", example: "大会で 賞金を 獲得しました。(Đoạt được tiền thưởng trong đại hội thi đấu.)" },
      { kanji: "<span class=\"furigana\"><ruby>自然<rt>しぜん</rt></ruby></span>", hiragana: "しぜん", meaning: "Thiên nhiên, tự nhiên", type: "Danh từ", example: "豊かな 自然に 囲まれた 村 (Ngôi làng được bao bọc bởi thiên nhiên phong phú)" },
      { kanji: "<span class=\"furigana\">きりん</span>", hiragana: "きりん", meaning: "Con hươu cao cổ", type: "Danh từ", example: "動物園で きりんを 見ました。(Xem hươu cao cổ ở sở thú.)" },
      { kanji: "<span class=\"furigana\">ぞう</span>", hiragana: "ぞう", meaning: "Con voi", type: "Danh từ", example: "大きな ぞうが 水を 飲んで います。(Chú voi to lớn đang uống nước.)" },
      { kanji: "<span class=\"furigana\">ころ</span>", hiragana: "ころ", meaning: "Hồi, lúc, thời điểm", type: "Danh từ", example: "子供の ころの 夢 (Giấc mơ hồi tấm bé)" },
      { kanji: "<span class=\"furigana\">かないます</span>", hiragana: "かないます", meaning: "Thành hiện thực, đạt được [ước mơ - 夢が〜]", type: "Động từ nhóm 1", example: "長年の 夢が かないました。(Giấc mơ ấp ủ bao năm nay đã thành hiện thực.)" },
      { kanji: "<span class=\"furigana\">ひとことよろしいでしょうか</span>", hiragana: "ひとことよろしいでしょうか", meaning: "Tôi xin phép được nói đôi lời có được không ạ?", type: "Câu giao tiếp", example: "皆様、ひとこと よろしいでしょうか。(Kính thưa quý vị, tôi xin phép được nói đôi lời có được không ạ?)" },
      { kanji: "<span class=\"furigana\"><ruby>心<rt>こころ</rt></ruby>から</span>", hiragana: "こころから", meaning: "Từ tận đáy lòng, thành tâm", type: "Phó từ", example: "心から 感謝いたします。(Tôi xin thành tâm cảm tạ từ tận đáy lòng.)" },
      { kanji: "<span class=\"furigana\"><ruby>感謝<rt>かんしゃ</rt></ruby>します</span>", hiragana: "かんしゃします", meaning: "Biết ơn sâu sắc, cảm tạ", type: "Động từ nhóm 3", example: "皆様の ご支援に 感謝します。(Tôi xin cảm tạ sự hỗ trợ quý báu của quý vị.)" },
      { kanji: "<span class=\"furigana\">お<ruby>礼<rt>れい</rt></ruby></span>", hiragana: "おれい", meaning: "Lời cảm ơn, sự cảm tạ, quà cảm ơn", type: "Danh từ", example: "お礼の 手紙を 書きます。(Viết bức thư cảm ơn.)" },
      { kanji: "<span class=\"furigana\"><ruby>応援<rt>おうえん</rt></ruby>します</span>", hiragana: "おうえんします", meaning: "Cổ vũ, tiếp sức, ủng hộ", type: "Động từ nhóm 3", example: "最後まで チームを 応援します。(Cổ vũ đội tuyển cho tới phút cuối cùng.)" }
    ],
    grammar: [
      {
        structure: "1. Khiêm nhường ngữ I (謙譲語I - Hành động hướng tới đối tác)",
        explanation: "Dùng khi người nói thực hiện một hành động có hướng tới người nghe hoặc nhân vật bề trên được tôn trọng. Bằng cách hạ thấp hành vi của mình, ta gián tiếp nâng cao vị thế của người tiếp nhận hành động:\n• Động từ dạng đặc biệt:\n  - 聞きます / 訪ねます → 伺います (うかがいます)\n  - 見ます → 拝見します (はいけんします)\n  - 言います → 申し上げます (もうしあげます)\n  - 会います → お目に かかります\n• Công thức chuẩn:\n  - Động từ nhóm 1 & 2: お + V-(thân ます) + します / いたします (お持ちします, お手伝いします).\n  - Động từ nhóm 3 (Hán tự): ご + N + します / いたします (ご案内します, ご紹介します, ご説明いたします).",
        caution: "Chỉ dùng khi hành vi của mình có liên quan và hướng tới người bề trên (không dùng お持ちします nếu tự xách cặp của mình).",
        examples: [
          {
            type: "sentence",
            context: "Xách giúp hành lý cho khách",
            jp: "<span class=\"furigana\"><ruby>重<rt>おも</rt></ruby></span>そうですね。<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>が <span class=\"furigana\">お<ruby>持<rt>も</rt></ruby>ち</span> いたします。",
            rawJp: "重そうですね。私が下持ちいたします。",
            vi: "Trông có vẻ nặng quá, xin để tôi xách giúp ngài ạ."
          },
          {
            type: "sentence",
            context: "Dẫn khách đi tham quan hội trường",
            jp: "<span class=\"furigana\"><ruby>会場<rt>かいじょう</rt></ruby></span>を <span class=\"furigana\">ご<ruby>案内<rt>あんない</rt></ruby></span> いたします。",
            rawJp: "会場をご案内いたします。",
            vi: "Tôi xin phép được hướng dẫn quý khách tham quan hội trường ạ."
          }
        ]
      },
      {
        structure: "2. Khiêm nhường ngữ II / Đinh trọng ngữ (丁重語 - Nhã nhặn trước người nghe)",
        explanation: "Dùng để nói về hành động của bản thân hoặc sự việc phe mình nhằm bày tỏ thái độ lịch thiệp, khiêm tốn trước người nghe mà KHÔNG đòi hỏi hành động đó phải hướng tới ai cụ thể:\n• 参ります (まいります - 行く / 来る): まもなく 電車が 参ります.\n• おります (いる): 明日も 事務所に おります.\n• 申します (もうします - 言う / 名乗る): 田中と 申します.\n• いたします (する): これから 準備を いたします.\n• 存じております / 存じます (知っている / 思う): よく 存じて おります.",
        caution: "Phân biệt: 伺います là Khiêm nhường ngữ I (hướng đến đối tác), còn 参ります là Khiêm nhường ngữ II (chỉ bản thân đi đến).",
        examples: [
          {
            type: "sentence",
            context: "Tự giới thiệu xuất thân",
            jp: "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は ベトナムから <span class=\"furigana\"><ruby>参<rt>まい</rt></ruby>りました</span>。",
            rawJp: "私はベトナムから参りました。",
            vi: "Tôi đến từ Việt Nam ạ."
          },
          {
            type: "sentence",
            context: "Xưng tên khi gọi điện thoại",
            jp: "ABC<span class=\"furigana\"><ruby>会社<rt>かいしゃ</rt></ruby></span>の スミスと <span class=\"furigana\"><ruby>申<rt>もう</rt></ruby>します</span>。",
            rawJp: "ABC会社のスミスと申します。",
            vi: "Tôi tên là Smith thuộc công ty ABC ạ."
          }
        ]
      },
      {
        structure: "3. Thể Lịch sự Trang trọng: ございます / でございます",
        explanation: "Thể lịch sự cao nhất thường sử dụng trong tiếp khách, phát thanh, nhà hàng và thương mại:\n• あります → ございます\n• です → でございます\n• いいですか → よろしいでしょうか (Hỏi ý kiến, xin phép khách hàng với sự cung kính cao nhất).",
        caution: "Đây là ngôn ngữ dịch vụ khách hàng tiêu chuẩn của Nhật Bản (Baito Keigo / Business Keigo).",
        examples: [
          {
            type: "sentence",
            context: "Chỉ đường tới nhà vệ sinh cho khách",
            jp: "お<span class=\"furigana\"><ruby>手洗<rt>てあら</rt></ruby>い</span>は 2<span class=\"furigana\"><ruby>階<rt>かい</rt></ruby></span>に <span class=\"furigana\">ございます</span>。",
            rawJp: "お手洗いは2階にございます。",
            vi: "Nhà vệ sinh ở tầng 2 ạ."
          },
          {
            type: "sentence",
            context: "Xác nhận thực đơn",
            jp: "コーヒーで <span class=\"furigana\">よろしいでしょうか</span>。",
            rawJp: "コーヒーでよろしいでしょうか。",
            vi: "Quý khách dùng cà phê có được không ạ?"
          }
        ]
      },
      {
        structure: "4. Tổng kết Đối chiếu Hệ thống Kính ngữ Nhật Bản (3 Chiều)",
        explanation: "Bảng đối chiếu 3 thể giữa Thể Thường, Tôn Kính Ngữ (Sonkeigo) và Khiêm Nhường Ngữ (Kenjougo):\n• 行く/来る: [Tôn kính] いらっしゃる → [Khiêm nhường] 参る / 伺う\n• いる: [Tôn kính] いらっしゃる → [Khiêm nhường] おる\n• 食べる/飲む: [Tôn kính] 召し上がる → [Khiêm nhường] いただく\n• 言う: [Tôn kính] おっしゃる → [Khiêm nhường] 申す / 申し上げる\n• 見る: [Tôn kính] ご覧になる → [Khiêm nhường] 拝見する\n• 聞く: [Tôn kính] お聞きになる → [Khiêm nhường] 伺う\n• 知っている: [Tôn kính] ご存じです → [Khiêm nhường] 存じております\n• する: [Tôn kính] なさる → [Khiêm nhường] いたす\n• 会う: [Tôn kính] お会いになる → [Khiêm nhường] お目にかかる.",
        caution: "Nắm vững nguyên tắc: Đối phương làm → dùng Cột Tôn Kính. Bản thân mình làm → dùng Cột Khiêm Nhường.",
        examples: [
          {
            type: "dialogue",
            context: "Đối thoại công sở chuẩn mực",
            lines: [
              { speaker: "Khách", jp: "社長は いらっしゃいますか。", vi: "Giám đốc có ở đây không ạ?" },
              { speaker: "Nhân viên", jp: "申し訳ありません。社長は ただいま 外出しております。", vi: "Thành thật xin lỗi ngài. Giám đốc chúng tôi hiện đang đi ra ngoài rồi ạ." }
            ]
          }
        ]
      }
    ]
  }
];

const fileContent = `// Lessons 46 to 50 (Minna no Nihongo N4)
const lessons_46_50 = ${JSON.stringify(lessons_46_50, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessons_46_50;
}
`;

fs.writeFileSync('data/lessons_46_50.js', fileContent, 'utf8');
console.log('Successfully updated data/lessons_46_50.js with full textbook vocabulary and grammar!');
