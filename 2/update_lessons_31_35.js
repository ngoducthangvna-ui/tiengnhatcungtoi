const fs = require('fs');

const lessons_31_35 = [
  // BÀI 31
  {
    id: "bai-31",
    title: "Bài 31: Thể Ý Chí (意向形) & Dự Định Với 〜と思っています",
    level: "Minna no Nihongo N4 (Bài 31)",
    badge: "Thể ý chí 意向形",
    description: "Nắm vững cách chia động từ sang thể ý chí (意向形), cách bày tỏ ý định bằng 〜ようと思っています, thể hiện quyết tâm chắc chắn bằng 〜つもりです, và diễn tả lịch trình đã định sẵn bằng 〜予定です.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>始<rt>はじ</rt></ruby>まります</span>", hiragana: "はじまります", meaning: "Bắt đầu [buổi lễ, giờ học] (式が〜)", type: "Động từ nhóm 1 (Tự)", example: "式が 始まります。(Buổi lễ bắt đầu.)" },
      { kanji: "<span class=\"furigana\"><ruby>続<rt>つづ</rt></ruby>けます</span>", hiragana: "つづけます", meaning: "Tiếp tục, duy trì", type: "Động từ nhóm 2", example: "勉強を 続けます。(Tiếp tục việc học.)" },
      { kanji: "<span class=\"furigana\"><ruby>見<rt>み</rt></ruby>つかります</span>", hiragana: "みつかります", meaning: "Được tìm thấy [chìa khóa, đồ vật] (鍵が〜)", type: "Động từ nhóm 1 (Tự)", example: "鍵が 見つかりました。(Chìa khóa đã được tìm thấy.)" },
      { kanji: "<span class=\"furigana\"><ruby>受<rt>う</rt></ruby>けます</span>", hiragana: "うけます", meaning: "Dự thi, thi [kỳ thi] (試験を〜)", type: "Động void nhóm 2", example: "大学の 試験を 受けます。(Dự thi đại học.)" },
      { kanji: "<span class=\"furigana\"><ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みます</span>", hiragana: "もうしこみます", meaning: "Đăng ký [khóa học, tour du lịch]", type: "Động từ nhóm 1", example: "ツアーに 申し込みます。(Đăng ký tour du lịch.)" },
      { kanji: "<span class=\"furigana\"><ruby>休憩<rt>きゅうけい</rt></ruby>します</span>", hiragana: "きゅうけいします", meaning: "Nghỉ giải lao", type: "Động từ nhóm 3", example: "少し 休憩しましょう。(Hãy nghỉ giải lao một chút nhé.)" },
      { kanji: "<span class=\"furigana\"><ruby>連休<rt>れんきゅう</rt></ruby></span>", hiragana: "れんきゅう", meaning: "Kỳ nghỉ dài ngày liên tục", type: "Danh từ", example: "連休に 旅行します。(Đi du lịch vào kỳ nghỉ lễ dài.)" },
      { kanji: "<span class=\"furigana\"><ruby>作文<rt>さくぶん</rt></ruby></span>", hiragana: "さくぶん", meaning: "Bài văn, bài tập làm văn", type: "Danh từ", example: "日本語で 作文を 書きます。(Viết bài văn bằng tiếng Nhật.)" },
      { kanji: "<span class=\"furigana\"><ruby>発表<rt>はっぴょう</rt></ruby></span>", hiragana: "はっぴょう", meaning: "Thuyết trình, phát biểu, công bố", type: "Danh từ", example: "研究の 結果を 発表します。(Thuyết trình kết quả nghiên cứu.)" },
      { kanji: "<span class=\"furigana\"><ruby>展覧会<rt>てんらんかい</rt></ruby></span>", hiragana: "てんらんかい", meaning: "Triển lãm, hội chợ triển lãm", type: "Danh từ", example: "美術の 展覧会に 行きます。(Đi xem triển lãm mỹ thuật.)" },
      { kanji: "<span class=\"furigana\"><ruby>結婚式<rt>けっこんしき</rt></ruby></span>", hiragana: "けっこんしき", meaning: "Lễ cưới, đám cưới", type: "Danh từ", example: "友達の 結婚式に 出席します。(Tham dự đám cưới của bạn.)" },
      { kanji: "<span class=\"furigana\">お<ruby>葬式<rt>そうしき</rt></ruby></span>", hiragana: "おそうしき", meaning: "Tang lễ, đám tang", type: "Danh từ", example: "お葬式に 参列します。(Viếng đám tang.)" },
      { kanji: "<span class=\"furigana\"><ruby>式<rt>しき</rt></ruby></span>", hiragana: "しき", meaning: "Buổi lễ, nghi thức (tốt nghiệp, khai giảng...)", type: "Danh từ", example: "卒業の 式に 出ます。(Tham dự lễ tốt nghiệp.)" },
      { kanji: "<span class=\"furigana\"><ruby>本社<rt>ほんしゃ</rt></ruby></span>", hiragana: "ほんしゃ", meaning: "Trụ sở chính công ty", type: "Danh từ", example: "東京の 本社へ 行きます。(Đến trụ sở chính ở Tokyo.)" },
      { kanji: "<span class=\"furigana\"><ruby>支店<rt>してん</rt></ruby></span>", hiragana: "してん", meaning: "Chi nhánh công ty", type: "Danh từ", example: "大阪の 支店に 転勤します。(Chuyển công tác đến chi nhánh Osaka.)" },
      { kanji: "<span class=\"furigana\"><ruby>教会<rt>きょうかい</rt></ruby></span>", hiragana: "きょうかい", meaning: "Nhà thờ, giáo đường", type: "Danh từ", example: "教会で 結婚式を 挙げます。(Tổ chức đám cưới ở nhà thờ.)" },
      { kanji: "<span class=\"furigana\"><ruby>大学院<rt>だいがくいん</rt></ruby></span>", hiragana: "だいがくいん", meaning: "Cao học, trường đào tạo sau đại học", type: "Danh từ", example: "大学院に 進学します。(Học tiếp lên cao học.)" },
      { kanji: "<span class=\"furigana\"><ruby>動物園<rt>どうぶつえん</rt></ruby></span>", hiragana: "どうぶつえん", meaning: "Sở thú, vườn bách thú", type: "Danh từ", example: "動物園で パンダを 見ます。(Xem gấu trúc ở sở thú.)" },
      { kanji: "<span class=\"furigana\"><ruby>温泉<rt>おんせん</rt></ruby></span>", hiragana: "おんせん", meaning: "Suối nước nóng", type: "Danh từ", example: "温泉に 入って リラックスします。(Ngâm mình suối nước nóng thư giãn.)" },
      { kanji: "<span class=\"furigana\"><ruby>帰<rt>かえ</rt></ruby>り</span>", hiragana: "かえり", meaning: "Chiều về, lúc quay về", type: "Danh từ", example: "仕事の 帰りに 買い物を します。(Tiện đường đi làm về tôi đi mua sắm.)" },
      { kanji: "<span class=\"furigana\">ずっと</span>", hiragana: "ずっと", meaning: "Suốt, liền một mạch, hơn hẳn", type: "Phó từ", example: "日本に ずっと 住みたいです。(Tôi muốn sống suốt ở Nhật.)" },
      { kanji: "<span class=\"furigana\"><ruby>残<rt>のこ</rt></ruby>ります</span>", hiragana: "のこります", meaning: "Còn lại, sót lại", type: "Động từ nhóm 1", example: "料理が 少し 残りました。(Đồ ăn còn thừa lại một ít.)" },
      { kanji: "<span class=\"furigana\"><ruby>入学試験<rt>にゅうがくしけん</rt></ruby></span>", hiragana: "にゅうがくしけん", meaning: "Kỳ thi tuyển sinh đầu vào", type: "Danh từ", example: "入学試験の 勉強を します。(Học ôn thi vào trường.)" },
      { kanji: "<span class=\"furigana\"><ruby>月<rt>つき</rt></ruby>に</span>", hiragana: "つきに", meaning: "Trong một tháng (tần suất)", type: "Cụm từ", example: "月に 2回 映画を 見ます。(Mỗi tháng xem phim 2 lần.)" },
      { kanji: "<span class=\"furigana\"><ruby>村<rt>むら</rt></ruby></span>", hiragana: "むら", meaning: "Ngôi làng, thôn dã", type: "Danh từ", example: "静かな 村で 暮らします。(Sống ở một ngôi làng yên bình.)" },
      { kanji: "<span class=\"furigana\"><ruby>映画館<rt>えいがかん</rt></ruby></span>", hiragana: "えいがかん", meaning: "Rạp chiếu phim", type: "Danh từ", example: "映画館で ポップコーンを 食べます。(Ăn bắp rang bơ ở rạp chiếu phim.)" },
      { kanji: "<span class=\"furigana\"><ruby>閉<rt>と</rt></ruby>じます</span>", hiragana: "とじます", meaning: "Nhắm [mắt], gấp [sách] lại", type: "Động từ nhóm 2", example: "目を 閉じて ください。(Xin hãy nhắm mắt lại.)" },
      { kanji: "<span class=\"furigana\"><ruby>都会<rt>とかい</rt></ruby></span>", hiragana: "とかい", meaning: "Đô thị, thành phố lớn sầm uất", type: "Danh từ", example: "都会の 生活は 忙しいです。(Cuộc sống thành thị rất bận rộn.)" },
      { kanji: "<span class=\"furigana\"><ruby>自由<rt>じゆう</rt></ruby>に</span>", hiragana: "じゆうに", meaning: "Một cách tự do, tùy thích", type: "Phó từ", example: "自由に 意見を 言って ください。(Hãy tự do phát biểu ý kiến.)" },
      { kanji: "<span class=\"furigana\"><ruby>世界中<rt>せかいじゅう</rt></ruby></span>", hiragana: "せかいじゅう", meaning: "Khắp thế giới, trên toàn cầu", type: "Danh từ", example: "世界中を 旅したいです。(Tôi muốn chu du khắp thế giới.)" },
      { kanji: "<span class=\"furigana\"><ruby>集<rt>あつ</rt></ruby>まります</span>", hiragana: "あつまります", meaning: "Tập trung lại, tụ họp", type: "Động từ nhóm 1", example: "人が たくさん 集まりました。(Rất đông người tụ tập lại.)" },
      { kanji: "<span class=\"furigana\"><ruby>美<rt>うつく</rt></ruby>しい</span>", hiragana: "うつくしい", meaning: "Xinh đẹp, tuyệt mỹ", type: "Tính từ đuôi い", example: "美しい 景色に 感動しました。(Xúc động trước cảnh sắc tuyệt đẹp.)" },
      { kanji: "<span class=\"furigana\"><ruby>自然<rt>しぜん</rt></ruby></span>", hiragana: "しぜん", meaning: "Tự nhiên, thiên nhiên", type: "Danh từ", example: "豊かな 自然を 守ります。(Bảo vệ thiên nhiên trù phú.)" },
      { kanji: "<span class=\"furigana\"><ruby>気<rt>き</rt></ruby>が つきます</span>", hiragana: "きがつきます", meaning: "Nhận ra, để ý thấy (đi với に)", type: "Cụm động từ", example: "間違いに 気が つきました。(Tôi đã nhận ra chỗ sai.)" },
      { kanji: "<span class=\"furigana\"><ruby>予定<rt>よてい</rt></ruby></span>", hiragana: "よてい", meaning: "Lịch trình, kế hoạch định sẵn", type: "Danh từ", example: "明日の 予定を 確認します。(Kiểm tra lịch trình ngày mai.)" }
    ],
    grammar: [
      {
        structure: "1. Động từ thể ý chí (意向形: いこうけい)",
        explanation: "Thể ý chí là dạng thông thường (thân mật) của cấu trúc 〜ましょう. Dùng để rủ rê, đề xuất hoặc thể hiện quyết tâm tự nhủ của bản thân.\n• Nhóm 1: Chuyển đuôi hàng [i] trước ます sang hàng [o] rồi thêm う (書きます -> 書こう, 行きます -> 行こう, 読みます -> 読もう).\n• Nhóm 2: Bỏ ます thêm よう (食べます -> 食べよう, 見ます -> 見よう).\n• Nhóm 3: します -> しよう, 来ます(きます) -> 来よう(こよう).",
        caution: "Dùng với bạn bè thân thiết hoặc tự độc thoại với chính mình.",
        examples: [
          {
            type: "dialogue",
            context: "Rủ bạn cùng nghỉ ngơi",
            lines: [
              { speaker: "A", jp: "少し <span class=\"furigana\"><ruby>休<rt>やす</rt></ruby>もう</span>。", rawJp: "少し休もう。", vi: "Nghỉ một chút đi!" },
              { speaker: "B", jp: "うん、そう <span class=\"furigana\"><ruby>しよう</span>。", rawJp: "うん、そうしよう。", vi: "Ừ, làm thế đi!" }
            ]
          }
        ]
      },
      {
        structure: "2. V-(thể ý chí) + と 思って います (Bày tỏ dự định của bản thân)",
        explanation: "Dùng để diễn tả một dự định, ý định mà người nói đã suy nghĩ ấp ủ từ trước thời điểm nói và hiện tại vẫn đang duy trì dự định đó.",
        caution: "Nếu dùng「V-ようと 思います」thì thường là quyết định vừa mới nảy ra ngay tại thời điểm nói.",
        examples: [
          {
            type: "sentence",
            context: "Dự định mua nhà trong tương lai",
            jp: "<span class=\"furigana\"><ruby>将来<rt>しょうらい</rt></ruby></span> <span class=\"furigana\"><ruby>自分<rt>じぶん</rt></ruby></span>の <span class=\"furigana\"><ruby>会社<rt>かいしゃ</rt></ruby></span>を <span class=\"furigana\"><ruby>作<rt>つく</rt></ruby>ろうと</span> <span class=\"furigana\"><ruby>思<rt>おも</rt></ruby>って</span> います。",
            rawJp: "将来自分の会社を作ろうと思っています。",
            vi: "Tôi dự định tương lai sẽ thành lập công ty riêng của mình."
          }
        ]
      },
      {
        structure: "3. V-る / V-ない + つもりです (Dự định chắc chắn / Quyết tâm)",
        explanation: "Biểu thị một dự định có mức độ quyết tâm cao hơn nhiều so với 〜と思っています. Người nói đã có sự chuẩn bị hoặc ý chí dứt khoát sẽ thực hiện hoặc dứt khoát không làm.",
        caution: "Tuyệt đối không dùng để hỏi dự định của người bề trên.",
        examples: [
          {
            type: "sentence",
            context: "Quyết tâm không hút thuốc",
            jp: "<span class=\"furigana\"><ruby>来年<rt>らいねん</rt></ruby></span>から たばこを <span class=\"furigana\"><ruby>吸<rt>す</rt></ruby>わない</span> <span class=\"furigana\">つもりです</span>。",
            rawJp: "来年からたばこを吸わないつもりです。",
            vi: "Từ năm sau tôi quyết tâm sẽ không hút thuốc lá nữa."
          }
        ]
      },
      {
        structure: "4. V-る / N の + 予定です (Lịch trình, kế hoạch đã được ấn định)",
        explanation: "Dùng để thông báo về một kế hoạch, lịch trình đã được cơ quan, đoàn thể hoặc các bên thống nhất ấn định sẵn, ít mang ý chí chủ quan cá nhân.",
        caution: "Danh từ đi với 予定 thì phải có の: N の 予定です.",
        examples: [
          {
            type: "sentence",
            context: "Lịch đi công tác của công ty",
            jp: "<span class=\"furigana\"><ruby>来月<rt>らいげつ</rt></ruby></span> <span class=\"furigana\"><ruby>出張<rt>しゅっちょう</rt></ruby>する</span> <span class=\"furigana\"><ruby>予定<rt>よてい</rt></ruby>です</span>。",
            rawJp: "来月出張する予定です。",
            vi: "Tháng sau theo kế hoạch tôi sẽ đi công tác."
          }
        ]
      },
      {
        structure: "5. まだ + V-て いません (Vẫn chưa thực hiện xong)",
        explanation: "Dùng để diễn tả một hành động tại thời điểm hiện tại vẫn chưa hoàn thành hoặc chưa xảy ra.",
        caution: "Trả lời cho câu hỏi「もう V-ましたか」nếu chưa làm thì nói「いいえ、まだです」hoặc「まだ V-ていません」.",
        examples: [
          {
            type: "dialogue",
            context: "Hỏi về tiến độ làm bài tập",
            lines: [
              { speaker: "A", jp: "もう レポートを <span class=\"furigana\"><ruby>出<rt>だ</rt></ruby>しました</span>か。", rawJp: "もうレポートを出しましたか。", vi: "Bạn đã nộp báo cáo chưa?" },
              { speaker: "B", jp: "いいえ、<span class=\"furigana\">まだ</span> <span class=\"furigana\"><ruby>書<rt>か</rt></ruby>いて</span> いません。", rawJp: "いいえ、まだ書いていません。", vi: "Chưa, tôi vẫn chưa viết xong." }
            ]
          }
        ]
      }
    ]
  },

  // BÀI 32
  {
    id: "bai-32",
    title: "Bài 32: Lời Khuyên Nên/Không Nên & Phỏng Đoán 〜でしょう / 〜かもしれません",
    level: "Minna no Nihongo N4 (Bài 32)",
    badge: "Lời khuyên & Phỏng đoán",
    description: "Thành thạo cách khuyên nhủ ân cần V-たほうがいい / V-ないほうがいい, đưa ra phỏng đoán có căn cứ bằng 〜でしょう, và nhận định tình huống có xác suất xảy ra bằng 〜かもしれません.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>運動<rt>うんどう</rt></ruby>します</span>", hiragana: "うんどうします", meaning: "Vận động, tập thể dục", type: "Động từ nhóm 3", example: "毎朝 運動します。(Mỗi sáng tôi đều tập thể dục.)" },
      { kanji: "<span class=\"furigana\"><ruby>成功<rt>せいこう</rt></ruby>します</span>", hiragana: "せいこうします", meaning: "Thành công [trong công việc, thí nghiệm]", type: "Động từ nhóm 3", example: "実験が 成功しました。(Thí nghiệm đã thành công.)" },
      { kanji: "<span class=\"furigana\"><ruby>失敗<rt>しっぱい</rt></ruby>します</span>", hiragana: "しっぱいします", meaning: "Thất bại, trượt [kỳ thi] (試験に〜)", type: "Động từ nhóm 3", example: "試験に 失敗しました。(Tôi đã thi hỏng.)" },
      { kanji: "<span class=\"furigana\"><ruby>合格<rt>ごうかく</rt></ruby>します</span>", hiragana: "ごうかくします", meaning: "Đỗ, thi đỗ [kỳ thi] (試験に〜)", type: "Động từ nhóm 3", example: "N4に 合格しました。(Tôi đã thi đỗ N4.)" },
      { kanji: "<span class=\"furigana\"><ruby>戻<rt>もど</rt></ruby>ります</span>", hiragana: "もどります", meaning: "Quay lại, trở về", type: "Động từ nhóm 1", example: "席に 戻ります。(Quay trở lại chỗ ngồi.)" },
      { kanji: "<span class=\"furigana\">やみます</span>", hiragana: "やみます", meaning: "Tạnh, ngớt [mưa, tuyết] (雨が〜)", type: "Động từ nhóm 1", example: "雨が やみました。(Mưa đã tạnh.)" },
      { kanji: "<span class=\"furigana\"><ruby>晴<rt>は</rt></ruby>れます</span>", hiragana: "はれます", meaning: "Nắng, trời quang đãng", type: "Động từ nhóm 2", example: "明日は 晴れるでしょう。(Ngày mai trời chắc sẽ nắng đẹp.)" },
      { kanji: "<span class=\"furigana\"><ruby>曇<rt>くも</rt></ruby>ります</span>", hiragana: "くもります", meaning: "Nhiều mây, trời âm u", type: "Động từ nhóm 1", example: "午後から 曇ります。(Từ chiều trời sẽ nhiều mây.)" },
      { kanji: "<span class=\"furigana\"><ruby>吹<rt>ふ</rt></ruby>きます</span>", hiragana: "ふきます", meaning: "Thổi [gió] (風が〜)", type: "Động từ nhóm 1", example: "強い 風が 吹いて います。(Gió đang thổi rất mạnh.)" },
      { kanji: "<span class=\"furigana\"><ruby>治<rt>なお</rt></ruby>ります</span>", hiragana: "なおります", meaning: "Khỏi [bệnh], lành [vết thương] (病気が〜)", type: "Động từ nhóm 1", example: "風邪が 治りました。(Cơn cảm lạnh đã khỏi.)" },
      { kanji: "<span class=\"furigana\"><ruby>冷<rt>ひ</rt></ruby>やします</span>", hiragana: "ひやします", meaning: "Làm mát, chườm lạnh", type: "Động từ nhóm 1", example: "氷で 足を 冷やします。(Chườm lạnh bàn chân bằng đá.)" },
      { kanji: "<span class=\"furigana\"><ruby>心配<rt>しんぱい</rt></ruby>[な]</span>", hiragana: "しんぱい[な]", meaning: "Lo lắng, bất an", type: "Tính từ đuôi な", example: "健康が 心配です。(Tôi lo lắng cho sức khỏe.)" },
      { kanji: "<span class=\"furigana\"><ruby>十分<rt>じゅうぶん</rt></ruby>[な]</span>", hiragana: "じゅうぶん[な]", meaning: "Đầy đủ, sung túc", type: "Tính từ đuôi な", example: "十分な 睡眠を 取ります。(Ngủ đầy đủ giấc.)" },
      { kanji: "<span class=\"furigana\">おかしい</span>", hiragana: "おかしい", meaning: "Kỳ lạ, buồn cười, bất thường", type: "Tính từ đuôi い", example: "機械の 調子が おかしいです。(Tình trạng máy móc có vẻ bất thường.)" },
      { kanji: "<span class=\"furigana\">うるさい</span>", hiragana: "うるさい", meaning: "Ồn ào, phiền toái", type: "Tính từ đuôi い", example: "外の 音が うるさいです。(Tiếng ồn bên ngoài làm phiền quá.)" },
      { kanji: "<span class=\"furigana\">やけど</span>", hiragana: "やけど", meaning: "Bỏng, vết bỏng (やけどを します)", type: "Danh từ", example: "熱湯で やけどを しました。(Bị bỏng nước sôi.)" },
      { kanji: "<span class=\"furigana\">けが</span>", hiragana: "けが", meaning: "Vết thương, chấn thương (けがを します)", type: "Danh từ", example: "足に けがを しました。(Bị thương ở chân.)" },
      { kanji: "<span class=\"furigana\">せき</span>", hiragana: "せき", meaning: "Cơn ho (せきが 出ます)", type: "Danh từ", example: "せきが 止まりません。(Cơn ho không dứt.)" },
      { kanji: "<span class=\"furigana\">インフルエンザ</span>", hiragana: "インフルエンザ", meaning: "Cúm mùa, virus cúm", type: "Danh từ", example: "インフルエンザに かかりました。(Bị nhiễm cúm mùa.)" },
      { kanji: "<span class=\"furigana\"><ruby>太陽<rt>たいよう</rt></ruby></span>", hiragana: "たいよう", meaning: "Mặt trời, thái dương", type: "Danh từ", example: "太陽が 昇ります。(Mặt trời mọc.)" },
      { kanji: "<span class=\"furigana\"><ruby>星<rt>ほし</rt></ruby></span>", hiragana: "ほし", meaning: "Ngôi sao trên bầu trời", type: "Danh từ", example: "星が きれいに 光って います。(Những ngôi sao lấp lánh tuyệt đẹp.)" },
      { kanji: "<span class=\"furigana\"><ruby>風<rt>かぜ</rt></ruby></span>", hiragana: "かぜ", meaning: "Cơn gió", type: "Danh từ", example: "涼しい 風が 吹きます。(Gió mát thổi qua.)" },
      { kanji: "<span class=\"furigana\"><ruby>北<rt>きた</rt></ruby></span>", hiragana: "きた", meaning: "Hướng Bắc", type: "Danh từ", example: "北風が 冷たいです。(Gió bấc lạnh buốt.)" },
      { kanji: "<span class=\"furigana\"><ruby>南<rt>みなみ</rt></ruby></span>", hiragana: "みなみ", meaning: "Hướng Nam", type: "Danh từ", example: "南の 島へ 行きます。(Đi đến hòn đảo phương nam.)" },
      { kanji: "<span class=\"furigana\"><ruby>西<rt>にし</rt></ruby></span>", hiragana: "にし", meaning: "Hướng Tây", type: "Danh từ", example: "太陽は 西に 沈みます。(Mặt trời lặn về hướng tây.)" },
      { kanji: "<span class=\"furigana\"><ruby>東<rt>ひがし</rt></ruby></span>", hiragana: "ひがし", meaning: "Hướng Đông", type: "Danh từ", example: "東から 日が 昇ります。(Mặt trời mọc từ hướng đông.)" },
      { kanji: "<span class=\"furigana\"><ruby>水道<rt>すいどう</rt></ruby></span>", hiragana: "すいどう", meaning: "Nước máy, đường ống nước máy", type: "Danh từ", example: "水道の 水を 飲みます。(Uống nước máy.)" },
      { kanji: "<span class=\"furigana\">エンジン</span>", hiragana: "エンジン", meaning: "Động cơ máy móc, engine", type: "Danh từ", example: "車の エンジンを かけます。(Khởi động máy ô tô.)" },
      { kanji: "<span class=\"furigana\"><ruby>今夜<rt>こんや</rt></ruby></span>", hiragana: "こんや", meaning: "Tối nay, đêm nay", type: "Danh từ", example: "今夜は 涼しいですね。(Tối nay mát mẻ nhỉ.)" },
      { kanji: "<span class=\"furigana\"><ruby>夕方<rt>ゆうがた</rt></ruby></span>", hiragana: "ゆうがた", meaning: "Chiều tà, hoàng hôn", type: "Danh từ", example: "夕方に 雨が 降りました。(Chiều tối trời đã mưa.)" },
      { kanji: "<span class=\"furigana\">こんなに</span>", hiragana: "こんなに", meaning: "Đến mức như thế này", type: "Phó từ", example: "こんなに たくさん 食べられません。(Nhiều thế này tôi không ăn hết được.)" },
      { kanji: "<span class=\"furigana\">もしかしたら</span>", hiragana: "もしかしたら", meaning: "Biết đâu chừng, có thể là", type: "Phó từ", example: "もしかしたら 雨が 降るかもしれません。(Biết đâu chừng trời lại mưa.)" }
    ],
    grammar: [
      {
        structure: "1. V-た / V-ない + ほうが いいです (Khuyên nên / Không nên làm gì)",
        explanation: "Dùng để đưa ra lời khuyên hoặc gợi ý một phương án tốt nhất cho người nghe trong một hoàn cảnh cụ thể.\n• Khuyên nên làm: Động từ chia thể た (V-た ほうが いいです).\n• Khuyên không nên làm: Động từ chia thể ない (V-ない ほうが いいです).",
        caution: "Mẫu câu này mang tính định hướng trực tiếp, nếu nói với cấp trên nên dùng các cách diễn đạt nhẹ nhàng hơn.",
        examples: [
          {
            type: "sentence",
            context: "Khuyên người đang bị sốt nên đi viện",
            jp: "<span class=\"furigana\"><ruby>熱<rt>ねつ</rt></ruby></span>が ありますから、<span class=\"furigana\"><ruby>病院<rt>びょういん</rt></ruby></span>へ <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>った</span> <span class=\"furigana\">ほうが いいです</span>。",
            rawJp: "熱がありますから、病院へ行ったほうがいいです。",
            vi: "Vì bạn bị sốt nên tốt nhất hãy đi bệnh viện khám nhé."
          },
          {
            type: "sentence",
            context: "Khuyên không nên tắm nước lạnh khi ốm",
            jp: "<span class=\"furigana\"><ruby>無理<rt>むり</rt></ruby>を</span> <span class=\"furigana\">しない</span> <span class=\"furigana\">ほうが いいです</span>。",
            rawJp: "無理をしないほうがいいです。",
            vi: "Bạn không nên gắng sức quá làm gì."
          }
        ]
      },
      {
        structure: "2. Thể thông thường + でしょう (Phỏng đoán có căn cứ xác thực)",
        explanation: "Biểu thị sự phỏng đoán của người nói dựa trên một nguồn thông tin khách quan (như dự báo thời tiết, dữ liệu thực tế) với độ chắc chắn cao (khoảng 70-80%).\n• Tính từ đuôi な / Danh từ: Bỏ だ (雨でしょう、暇でしょう).",
        caution: "Khi đọc xuống giọng ở cuối câu mang nghĩa phỏng đoán. Nếu lên giọng thì mang nghĩa hỏi xác nhận từ đối phương.",
        examples: [
          {
            type: "sentence",
            context: "Dự báo thời tiết ngày mai",
            jp: "<span class=\"furigana\"><ruby>明日<rt>あした</rt></ruby></span>は <span class=\"furigana\"><ruby>晴<rt>は</rt></ruby>れる</span> <span class=\"furigana\">でしょう</span>。",
            rawJp: "明日は晴れるでしょう。",
            vi: "Ngày mai chắc là trời sẽ nắng đẹp."
          }
        ]
      },
      {
        structure: "3. Thể thông thường + かもしれません (Có thể, có lẽ)",
        explanation: "Biểu thị khả năng sự việc có thể xảy ra nhưng người nói không dám chắc chắn (xác suất khoảng 50% hoặc thấp hơn).\n• Tính từ đuôi な / Danh từ: Bỏ だ (病気かもしれません).",
        caution: "Thường đi kèm phó từ「もしかしたら」(biết đâu chừng).",
        examples: [
          {
            type: "sentence",
            context: "Phỏng đoán bạn có thể đến muộn vì tắc đường",
            jp: "<span class=\"furigana\"><ruby>道<rt>みち</rt></ruby></span>が <span class=\"furigana\"><ruby>混<rt>こ</rt></ruby>んで</span> いますから、<span class=\"furigana\"><ruby>約束<rt>やくそく</rt></ruby></span>の <span class=\"furigana\"><ruby>時間<rt>じかん</rt></ruby></span>に <span class=\"furigana\"><ruby>遅<rt>おく</rt></ruby>れる</span> <span class=\"furigana\">かもしれません</span>。",
            rawJp: "道が混んでいますから、約束の時間に遅れるかもしれません。",
            vi: "Vì đường đang đông nên có thể tôi sẽ bị trễ giờ hẹn."
          }
        ]
      },
      {
        structure: "4. Lượng từ + で (Giới hạn phạm vi mức giá / Thời gian)",
        explanation: "Trợ từ で đứng sau lượng từ biểu thị mức giới hạn về mặt chi phí, số tiền hoặc thời gian thực hiện.",
        caution: "Ví dụ: 1時間で 終わります (Xong trong vòng 1 tiếng), 3万円で 買えます (Mua được trong mức 3 vạn yên).",
        examples: [
          {
            type: "sentence",
            context: "Chi phí mua máy tính cũ",
            jp: "この パソコンは 3<span class=\"furigana\"><ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby></span><span class=\"furigana\">で</span> <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>えます</span>。",
            rawJp: "このパソコンは3万円で買えます。",
            vi: "Chiếc máy tính này có thể mua được với giá 3 vạn yên."
          }
        ]
      }
    ]
  },

  // BÀI 33
  {
    id: "bai-33",
    title: "Bài 33: Thể Mệnh Lệnh (命令形) & Thể Cấm Chỉ (禁止形)",
    level: "Minna no Nihongo N4 (Bài 33)",
    badge: "Mệnh lệnh & Cấm chỉ",
    description: "Nắm vững cách chia thể mệnh lệnh (命令形) và thể cấm chỉ (禁止形), cách giải thích ý nghĩa biển báo bằng 〜という意味です, và cách truyền đạt thông điệp bằng 〜と言っていました.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>逃<rt>に</rt></ruby>げます</span>", hiragana: "にげます", meaning: "Chạy trốn, đào tẩu", type: "Động từ nhóm 2", example: "泥棒が 逃げました。(Tên trộm đã bỏ trốn.)" },
      { kanji: "<span class=\"furigana\"><ruby>騒<rt>さわ</rt></ruby>ぎます</span>", hiragana: "さわぎます", meaning: "Làm ồn, làm huyên náo", type: "Động từ nhóm 1", example: "教室で 騒がないで ください。(Đừng làm ồn trong lớp.)" },
      { kanji: "<span class=\"furigana\">あきらめます</span>", hiragana: "あきらめます", meaning: "Từ bỏ, bỏ cuộc", type: "Động từ nhóm 2", example: "最後まで あきらめません。(Tôi không bỏ cuộc cho tới phút cuối.)" },
      { kanji: "<span class=\"furigana\"><ruby>投<rt>な</rt></ruby>げます</span>", hiragana: "なげます", meaning: "Ném [bóng, đồ vật]", type: "Động từ nhóm 2", example: "ボールを 投げます。(Ném quả bóng.)" },
      { kanji: "<span class=\"furigana\"><ruby>守<rt>まも</rt></ruby>ります</span>", hiragana: "まもります", meaning: "Tuân thủ, giữ gìn [luật lệ, lời hứa]", type: "Động từ nhóm 1", example: "規則を 守ります。(Tuân thủ quy tắc.)" },
      { kanji: "<span class=\"furigana\"><ruby>上<rt>あ</rt></ruby>げます</span>", hiragana: "あげます", meaning: "Nâng lên, tăng lên [giá cả, nhiệt độ]", type: "Động từ nhóm 2", example: "旗を 上げます。(Kéo cờ lên.)" },
      { kanji: "<span class=\"furigana\"><ruby>下<rt>さ</rt></ruby>げます</span>", hiragana: "さげます", meaning: "Hạ xuống, giảm xuống", type: "Động từ nhóm 2", example: "音量を 下げます。(Hạ âm lượng xuống.)" },
      { kanji: "<span class=\"furigana\"><ruby>伝<rt>つた</rt></ruby>えます</span>", hiragana: "つたえます", meaning: "Truyền đạt, nhắn lại", type: "Động từ nhóm 2", example: "メッセージを 伝えます。(Truyền đạt lại tin nhắn.)" },
      { kanji: "<span class=\"furigana\"><ruby>注意<rt>ちゅうい</rt></ruby>します</span>", hiragana: "ちゅういします", meaning: "Chú ý, nhắc nhở, cẩn thận", type: "Động từ nhóm 3", example: "車に 注意します。(Chú ý xe cộ.)" },
      { kanji: "<span class=\"furigana\"><ruby>外<rt>はず</rt></ruby>します</span>", hiragana: "はずします", meaning: "Rời khỏi [chỗ ngồi] (席を〜)", type: "Động từ nhóm 1", example: "ただ今 席を 外して おります。(Hiện anh ấy đang rời khỏi chỗ.)" },
      { kanji: "<span class=\"furigana\">だめ[な]</span>", hiragana: "だめ[な]", meaning: "Không được, hỏng, vô ích", type: "Tính từ đuôi な", example: "ここでは タバコは だめです。(Ở đây hút thuốc là không được.)" },
      { kanji: "<span class=\"furigana\"><ruby>席<rt>せき</rt></ruby></span>", hiragana: "せき", meaning: "Chỗ ngồi, ghế ngồi", type: "Danh từ", example: "席に 戻って ください。(Xin hãy quay về ghế ngồi.)" },
      { kanji: "<span class=\"furigana\">ファイト</span>", hiragana: "ファイト", meaning: "Cố lên! (tiếng cổ vũ thi đấu)", type: "Thành ngữ", example: "ファイト！頑張れ！(Cố lên! Chiến đấu nào!)" },
      { kanji: "<span class=\"furigana\">マーク</span>", hiragana: "マーク", meaning: "Biểu tượng, ký hiệu, mark", type: "Danh từ", example: "初心者マークを つけます。(Dán ký hiệu lái xe mới.)" },
      { kanji: "<span class=\"furigana\">ボール</span>", hiragana: "ボール", meaning: "Quả bóng", type: "Danh từ", example: "ボールを 蹴ります。(Đá quả bóng.)" },
      { kanji: "<span class=\"furigana\"><ruby>洗濯機<rt>せんたくき</rt></ruby></span>", hiragana: "せんたくき", meaning: "Máy giặt", type: "Danh từ", example: "洗濯機を 回します。(Bật máy giặt.)" },
      { kanji: "<span class=\"furigana\"><ruby>規則<rt>きそく</rt></ruby></span>", hiragana: "きそく", meaning: "Quy tắc, nội quy", type: "Danh từ", example: "工場の 規則を 守ります。(Tuân thủ nội quy nhà xưởng.)" },
      { kanji: "<span class=\"furigana\"><ruby>使用禁止<rt>しようきんし</rt></ruby></span>", hiragana: "しようきんし", meaning: "Cấm sử dụng", type: "Danh từ", example: "この トイレは 使用禁止です。(Nhà vệ sinh này đang cấm sử dụng.)" },
      { kanji: "<span class=\"furigana\"><ruby>立入禁止<rt>たちいりきんし</rt></ruby></span>", hiragana: "たちいりきんし", meaning: "Cấm vào, không phận sự miễn vào", type: "Danh từ", example: "工事現場は 立入禁止です。(Công trường cấm vào.)" },
      { kanji: "<span class=\"furigana\"><ruby>営業中<rt>えいぎょうちゅう</rt></ruby></span>", hiragana: "えいぎょうちゅう", meaning: "Đang mở cửa kinh doanh", type: "Danh từ", example: "ただ今 営業中です。(Cửa hàng hiện đang mở cửa.)" },
      { kanji: "<span class=\"furigana\"><ruby>非常口<rt>ひじょうぐち</rt></ruby></span>", hiragana: "ひじょうぐち", meaning: "Cửa thoát hiểm khẩn cấp", type: "Danh từ", example: "非常口を 確認して おきます。(Kiểm tra sẵn cửa thoát hiểm.)" },
      { kanji: "<span class=\"furigana\"><ruby>無料<rt>むりょう</rt></ruby></span>", hiragana: "むりょう", meaning: "Miễn phí, không mất tiền", type: "Danh từ", example: "入場は 無料です。(Vào cửa miễn phí.)" },
      { kanji: "<span class=\"furigana\"><ruby>割引<rt>わりびき</rt></ruby></span>", hiragana: "わりびき", meaning: "Giảm giá, chiết khấu", type: "Danh từ", example: "学生割引が あります。(Có chế độ giảm giá cho học sinh.)" },
      { kanji: "<span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby></span>", hiragana: "のみほうだい", meaning: "Uống thỏa thích, uống trọn gói không giới hạn", type: "Danh từ", example: "飲み放題の コースを 選びました。(Chọn gói uống thỏa thích.)" },
      { kanji: "<span class=\"furigana\"><ruby>使用中<rt>しようちゅう</rt></ruby></span>", hiragana: "しようちゅう", meaning: "Đang được sử dụng (phòng, máy)", type: "Danh từ", example: "会議室は 使用中です。(Phòng họp đang có người dùng.)" },
      { kanji: "<span class=\"furigana\"><ruby>募集中<rt>ぼしゅうちゅう</rt></ruby></span>", hiragana: "ぼしゅうちゅう", meaning: "Đang tuyển dụng / đang chiêu mộ", type: "Danh từ", example: "アルバイトを 募集中です。(Đang tuyển nhân viên làm thêm.)" },
      { kanji: "<span class=\"furigana\">どういう〜</span>", hiragana: "どういう〜", meaning: "Loại 〜 nào, mang nghĩa thế nào", type: "Định từ", example: "どういう 意味ですか。(Điều đó mang ý nghĩa như thế nào?)" },
      { kanji: "<span class=\"furigana\"><ruby>駐車違反<rt>ちゅうしゃいはん</rt></ruby></span>", hiragana: "ちゅうしゃいはん", meaning: "Vi phạm đỗ xe trái quy định", type: "Danh từ", example: "駐車違反で 罰金を 払いました。(Bị phạt tiền do đỗ xe sai quy định.)" }
    ],
    grammar: [
      {
        structure: "1. Thể mệnh lệnh (命令形: めいれいけい)",
        explanation: "Thể mệnh lệnh dùng để ra lệnh dứt khoát, bắt buộc đối phương phải tuân theo.\n• Nhóm 1: Chuyển hàng [i] trước ます sang hàng [e] (書きます -> 書け, 行きます -> 行け, 走ります -> 走れ).\n• Nhóm 2: Bỏ ます thêm ろ (食べます -> 食べろ, 見ます -> 見ろ, 起きます -> 起きろ).\n• Nhóm 3: します -> しろ, 来ます(きます) -> 来い(こい).",
        caution: "Chỉ dùng trong: huấn luyện quân đội, cổ vũ thể thao (走れ！), hiệu lệnh khẩn cấp khi hỏa hoạn (逃げろ！), hoặc cha mẹ bảo con nhỏ. Tuyệt đối không dùng trong giao tiếp lịch sự.",
        examples: [
          {
            type: "sentence",
            context: "Tiếng cổ vũ trong trận bóng đá",
            jp: "<span class=\"furigana\"><ruby>早<rt>はや</rt></ruby>く</span> <span class=\"furigana\"><ruby>走<rt>はし</rt></ruby>れ</span>！",
            rawJp: "早く走れ！",
            vi: "Chạy nhanh lên!"
          }
        ]
      },
      {
        structure: "2. Thể cấm chỉ (禁止形: きんしけい) - V-る + な",
        explanation: "Biểu thị sự cấm đoán tuyệt đối không được thực hiện hành động.\n• Cách chia cực kỳ đơn giản: Động từ thể từ điển (V-る) + な (飲むな、触るな、入るな).",
        caution: "Thường gặp trên các biển báo khẩn cấp (入るな) hoặc lệnh cấm của công an, cứu hỏa.",
        examples: [
          {
            type: "sentence",
            context: "Biển báo cấm sờ tay vào hiện vật bảo tàng",
            jp: "<span class=\"furigana\"><ruby>手<rt>て</rt></ruby></span>を <span class=\"furigana\"><ruby>触<rt>ふ</rt></ruby>れるな</span>。",
            rawJp: "手を触れるな。",
            vi: "Cấm chạm tay vào!"
          }
        ]
      },
      {
        structure: "3. X は Y という 意味です (X có nghĩa là Y)",
        explanation: "Dùng để giải thích định nghĩa hoặc ý nghĩa của một từ ngữ, biển báo, ký tự viết tắt.",
        caution: "Vế Y có thể là thể mệnh lệnh, cấm chỉ hoặc một câu giải thích hoàn chỉnh.",
        examples: [
          {
            type: "sentence",
            context: "Giải thích ý nghĩa biển báo 立入禁止",
            jp: "あの <span class=\"furigana\"><ruby>漢字<rt>かんじ</rt></ruby></span>は「ここに <span class=\"furigana\"><ruby>入<rt>はい</rt></ruby>るな</span>」<span class=\"furigana\">という <ruby>意味<rt>いみ</rt></ruby>です</span>。",
            rawJp: "あの漢字は「ここに入るな」という意味です。",
            vi: "Chữ Hán kia có nghĩa là 'Cấm vào đây'."
          }
        ]
      },
      {
        structure: "4. 「〜」と 言って いました (Truyền đạt lại lời nhắn của người khác)",
        explanation: "Dùng để thuật lại một thông điệp, câu nói của người thứ ba cho người nghe biết.",
        caution: "Nếu dẫn trực tiếp thì để nguyên trong ngoặc kép「〜」; nếu dẫn gián tiếp thì chuyển về thể thông thường.",
        examples: [
          {
            type: "sentence",
            context: "Nhắn lại lời dặn của thầy giáo",
            jp: "<span class=\"furigana\"><ruby>田中<rt>たなか</rt></ruby>先生</span>は <span class=\"furigana\"><ruby>明日<rt>あした</rt></ruby></span> <span class=\"furigana\"><ruby>休<rt>やす</rt></ruby>むと</span> <span class=\"furigana\"><ruby>言<rt>い</rt></ruby>って</span> いました。",
            rawJp: "田中先生は明日休むと言っていました。",
            vi: "Thầy Tanaka nhắn là ngày mai thầy xin nghỉ."
          }
        ]
      },
      {
        structure: "5. 〜と 伝えて いただけませんか (Nhờ chuyển lời nhắn lịch sự)",
        explanation: "Dùng khi nhờ đối phương chuyển một thông điệp hoặc lời nhắn đến cho người thứ ba một cách lịch sự, trang trọng.",
        caution: "Rất hay dùng trong giao tiếp điện thoại công sở.",
        examples: [
          {
            type: "sentence",
            context: "Nhờ thư ký nhắn lại cho sếp",
            jp: "<span class=\"furigana\"><ruby>部長<rt>ぶちょう</rt></ruby></span>に <span class=\"furigana\"><ruby>後<rt>あと</rt></ruby>で</span> お<span class=\"furigana\"><ruby>電話<rt>でんわ</rt></ruby></span>すると <span class=\"furigana\"><ruby>伝<rt>つた</rt></ruby>えて</span> いただけませんか。",
            rawJp: "部長に後でお電話すると伝えていただけませんか。",
            vi: "Chị làm ơn nhắn lại với trưởng phòng là lát nữa tôi sẽ gọi lại được không ạ?"
          }
        ]
      }
    ]
  },

  // BÀI 34
  {
    id: "bai-34",
    title: "Bài 34: Thực Hiện Theo Chỉ Dẫn 〜とおりに & Thứ Tự Hành Động 〜あとで",
    level: "Minna no Nihongo N4 (Bài 34)",
    badge: "Làm theo chỉ dẫn & Thứ tự",
    description: "Thành thạo mẫu câu làm theo đúng hướng dẫn bằng V-とおりに / N のとおりに, thực hiện hành động sau một mốc thời điểm bằng V-たあとで / N のあとで, và thực hiện việc này trong trạng thái V-て / V-ないで.",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>磨<rt>みが</rt></ruby>きます</span>", hiragana: "みがきます", meaning: "Đánh, chải [răng] (歯を〜)", type: "Động từ nhóm 1", example: "食後に 歯を 磨きます。(Đánh răng sau bữa ăn.)" },
      { kanji: "<span class=\"furigana\"><ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てます</span>", hiragana: "くみたてます", meaning: "Lắp ráp [mô hình, bàn ghế]", type: "Động từ nhóm 2", example: "家具を 組み立てます。(Lắp ráp đồ nội thất.)" },
      { kanji: "<span class=\"furigana\"><ruby>折<rt>お</rt></ruby>ります</span>", hiragana: "おります", meaning: "Gấp, bẻ gập [giấy origami]", type: "Động từ nhóm 1", example: "紙を 折ります。(Gấp giấy origami.)" },
      { kanji: "<span class=\"furigana\"><ruby>気<rt>き</rt></ruby>が つきます</span>", hiragana: "きがつきます", meaning: "Nhận ra, để ý thấy (đi với に)", type: "Cụm động từ", example: "忘れ物に 気が つきました。(Nhận ra mình bỏ quên đồ.)" },
      { kanji: "<span class=\"furigana\"><ruby>付<rt>つ</rt></ruby>けます</span>", hiragana: "つけます", meaning: "Chấm [nước sốt] (しょうゆを〜)", type: "Động từ nhóm 2", example: "しょうゆを 付けて 食べます。(Chấm nước tương rồi ăn.)" },
      { kanji: "<span class=\"furigana\"><ruby>質問<rt>しつもん</rt></ruby>します</span>", hiragana: "しつもんします", meaning: "Đặt câu hỏi, chất vấn", type: "Động từ nhóm 3", example: "先生に 質問します。(Hỏi thầy giáo.)" },
      { kanji: "<span class=\"furigana\">さします</span>", hiragana: "さします", meaning: "Che [ô, dù] (傘を〜)", type: "Động từ nhóm 1", example: "傘を さして 歩きます。(Che ô đi bộ.)" },
      { kanji: "<span class=\"furigana\">お<ruby>城<rt>しろ</rt></ruby></span>", hiragana: "おしろ", meaning: "Lâu đài, thành quách cổ kiểu Nhật", type: "Danh từ", example: "大阪城を 見学しました。(Tham quan thành Osaka.)" },
      { kanji: "<span class=\"furigana\"><ruby>説明書<rt>せつめいしょ</rt></ruby></span>", hiragana: "せつめいしょ", meaning: "Sách hướng dẫn sử dụng", type: "Danh từ", example: "説明書の とおりに 作ります。(Làm theo đúng sách hướng dẫn.)" },
      { kanji: "<span class=\"furigana\"><ruby>図<rt>ず</rt></ruby></span>", hiragana: "ず", meaning: "Hình vẽ minh họa, sơ đồ", type: "Danh từ", example: "図を 見て 組み立てます。(Nhìn sơ đồ rồi lắp ráp.)" },
      { kanji: "<span class=\"furigana\"><ruby>線<rt>せん</rt></ruby></span>", hiragana: "せん", meaning: "Đường kẻ, vạch kẻ", type: "Danh từ", example: "黒い 線を 引きます。(Kẻ một đường màu đen.)" },
      { kanji: "<span class=\"furigana\"><ruby>矢印<rt>やじるし</rt></ruby></span>", hiragana: "やじるし", meaning: "Mũi tên chỉ hướng", type: "Danh từ", example: "矢印の 向きに 進みます。(Đi theo hướng mũi tên.)" },
      { kanji: "<span class=\"furigana\"><ruby>紺<rt>こん</rt></ruby></span>", hiragana: "こん", meaning: "Màu xanh lam đậm, xanh hải quân", type: "Danh từ", example: "紺色の スーツを 着ます。(Mặc bộ vest màu xanh đậm.)" },
      { kanji: "<span class=\"furigana\"><ruby>黄色<rt>きいろ</rt></ruby></span>", hiragana: "きいろ", meaning: "Màu vàng", type: "Danh từ", example: "黄色い 花が 咲きました。(Bông hoa màu vàng nở rộ.)" },
      { kanji: "<span class=\"furigana\">しょうゆ</span>", hiragana: "しょうゆ", meaning: "Xì dầu, nước tương Nhật Bản", type: "Danh từ", example: "すしに しょうゆを つけます。(Chấm sushi vào nước tương.)" },
      { kanji: "<span class=\"furigana\">ソース</span>", hiragana: "ソース", meaning: "Nước xốt sauce", type: "Danh từ", example: "とんかつに ソースを かけます。(Rưới nước xốt lên thịt chiên.)" },
      { kanji: "<span class=\"furigana\"><ruby>茶道<rt>さどう</rt></ruby></span>", hiragana: "さどう", meaning: "Trà đạo Nhật Bản", type: "Danh từ", example: "京都で 茶道を 体験しました。(Trải nghiệm trà đạo tại Kyoto.)" },
      { kanji: "<span class=\"furigana\">お<ruby>茶<rt>ちゃ</rt></ruby>を たてます</span>", hiragana: "おちゃをたてます", meaning: "Đánh trà, khuấy trà đạo", type: "Cụm động từ", example: "先生が お茶を たてます。(Cô giáo đánh trà xanh.)" },
      { kanji: "<span class=\"furigana\"><ruby>先<rt>さき</rt></ruby>に</span>", hiragana: "さきに", meaning: "Trước tiên, làm trước", type: "Phó từ", example: "先に お菓子を 食べます。(Ăn bánh kẹo ngọt trước.)" },
      { kanji: "<span class=\"furigana\"><ruby>載<rt>の</rt></ruby>せます</span>", hiragana: "のせます", meaning: "Đặt lên, xếp lên trên", type: "Động từ nhóm 2", example: "お皿の 上に 載せます。(Đặt lên trên đĩa.)" },
      { kanji: "<span class=\"furigana\"><ruby>苦<rt>にが</rt></ruby>い</span>", hiragana: "にがい", meaning: "Đắng [vị thuốc, trà xanh đậm]", type: "Tính từ đuôi い", example: "良薬は 口に 苦いです。(Thuốc đắng dã tật.)" },
      { kanji: "<span class=\"furigana\"><ruby>材料<rt>ざいりょう</rt></ruby></span>", hiragana: "ざいりょう", meaning: "Nguyên liệu chế biến", type: "Danh từ", example: "料理の 材料を 買います。(Mua nguyên liệu nấu ăn.)" },
      { kanji: "<span class=\"furigana\"><ruby>分量<rt>ぶんりょう</rt></ruby></span>", hiragana: "ぶんりょう", meaning: "Phân lượng, liều lượng", type: "Danh từ", example: "調味料の 分量を 量ります。(Đo lường lượng gia vị.)" },
      { kanji: "<span class=\"furigana\"><ruby>調味料<rt>ちょうみりょう</rt></ruby></span>", hiragana: "ちょうみりょう", meaning: "Gia vị nêm nếm", type: "Danh từ", example: "調味料を 入れます。(Cho gia vị vào.)" },
      { kanji: "<span class=\"furigana\"><ruby>鍋<rt>なべ</rt></ruby></span>", hiragana: "なべ", meaning: "Cái nồi, món lẩu", type: "Danh từ", example: "鍋で スープを 煮ます。(Nấu súp trong nồi.)" },
      { kanji: "<span class=\"furigana\"><ruby>火<rt>ひ</rt></ruby>に かけます</span>", hiragana: "ひにかけます", meaning: "Đặt lên bếp lửa đun", type: "Cụm động từ", example: "鍋を 火に かけます。(Đặt nồi lên bếp đun.)" },
      { kanji: "<span class=\"furigana\"><ruby>煮<rt>に</rt></ruby>ます</span>", hiragana: "にます", meaning: "Nấu, kho, hầm thức ăn", type: "Động từ nhóm 2", example: "野菜を 柔らかく 煮ます。(Hầm mềm rau củ.)" }
    ],
    grammar: [
      {
        structure: "1. V1-る / V1-た + とおりに、V2 (Làm V2 theo đúng như V1)",
        explanation: "Dùng để diễn tả việc thực hiện một hành động V2 theo đúng nguyên văn, chuẩn xác như những gì được thấy, nghe hoặc hướng dẫn ở V1.\n• Nếu hành động chỉ dẫn chưa diễn ra: Dùng thể từ điển V1-る とおりに。\n• Nếu hành động chỉ dẫn đã diễn ra xong: Dùng thể quá khứ V1-た とおりに.",
        caution: "Nhấn mạnh vào tính chuẩn xác từng li từng tí so với mẫu hướng dẫn.",
        examples: [
          {
            type: "sentence",
            context: "Nấu ăn theo chỉ dẫn của giáo viên",
            jp: "<span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>が <span class=\"furigana\"><ruby>教<rt>おし</rt></ruby>えた</span> <span class=\"furigana\">とおりに</span>、<span class=\"furigana\"><ruby>作<rt>つく</rt></ruby>って</span> みました。",
            rawJp: "先生が教えたとおりに、作ってみました。",
            vi: "Tôi đã thử làm theo đúng như những gì cô giáo đã hướng dẫn."
          }
        ]
      },
      {
        structure: "2. N の + とおりに、V (Làm theo đúng như N)",
        explanation: "Khi danh từ đi trước とおりに, bắt buộc phải có trợ từ の.\n• Thường đi kèm với các danh từ như: 説明書 (sách hướng dẫn), 計画 (kế hoạch), 指示 (chỉ thị), 線 (đường kẻ).",
        caution: "Nếu ghép trực tiếp với từ Hán có thể đọc thành 〜どおり (vd: 計画どおり、予想どおり).",
        examples: [
          {
            type: "sentence",
            context: "Lắp ráp mô hình theo sách hướng dẫn",
            jp: "<span class=\"furigana\"><ruby>説明書<rt>せつめいしょ</rt></ruby></span>の <span class=\"furigana\">とおりに</span>、<span class=\"furigana\"><ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てました</span>。",
            rawJp: "説明書のとおりに、組み立てました。",
            vi: "Tôi đã lắp ráp theo đúng sách hướng dẫn."
          }
        ]
      },
      {
        structure: "3. V1-た / N の + あとで、V2 (Làm V2 sau khi xong V1 / N)",
        explanation: "Diễn tả trật tự thời gian: Sau khi sự việc V1 hoặc sự kiện N đã kết thúc trọn vẹn thì mới bắt tay làm việc V2.",
        caution: "So sánh với V-てから: V-てから nhấn mạnh liên hoàn không dứt; còn 〜あとで chỉ đơn thuần nêu thứ tự thời gian trước sau.",
        examples: [
          {
            type: "sentence",
            context: "Đi uống nước sau khi xong công việc",
            jp: "<span class=\"furigana\"><ruby>仕事<rt>しごと</rt></ruby></span>が <span class=\"furigana\"><ruby>終<rt>お</rt></ruby>わった</span> <span class=\"furigana\">あとで</span>、<span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>みに</span> <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>きませんか</span>。",
            rawJp: "仕事が終わったあとで、飲みに行きませんか。",
            vi: "Sau khi tan làm, đi uống chút gì không?"
          }
        ]
      },
      {
        structure: "4. V1-て、V2 (Làm V2 trong trạng thái có V1 đi kèm)",
        explanation: "Dùng để diễn tả một phương thức, trạng thái đi kèm khi thực hiện hành động chính V2.",
        caution: "Ví dụ: Đeo kính đọc sách (眼鏡をかけて 読みます).",
        examples: [
          {
            type: "sentence",
            context: "Nêm nước tương ăn sushi",
            jp: "しょうゆを <span class=\"furigana\"><ruby>付<rt>つ</rt></ruby>けて</span> <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べます</span>。",
            rawJp: "しょうゆを付けて食べます。",
            vi: "Chấm nước tương rồi ăn."
          }
        ]
      },
      {
        structure: "5. V1-ないで、V2 (Làm V2 mà KHÔNG làm V1)",
        explanation: "Diễn tả hành động V2 được thực hiện trong trạng thái không làm hoặc bỏ qua hành động V1 đáng lẽ phải có.",
        caution: "Phân biệt với V-なくて (chỉ nguyên nhân): V-ないで chỉ trạng thái phương thức hành động.",
        examples: [
          {
            type: "sentence",
            context: "Uống cà phê nguyên chất không đường",
            jp: "<span class=\"furigana\"><ruby>砂糖<rt>さとう</rt></ruby></span>を <span class=\"furigana\"><ruby>入<rt>い</rt></ruby>れないで</span>、コーヒーを <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>みます</span>。",
            rawJp: "砂糖を入れないで、コーヒーを飲みます。",
            vi: "Tôi uống cà phê mà không cho đường."
          }
        ]
      }
    ]
  },

  // BÀI 35
  {
    id: "bai-35",
    title: "Bài 35: Thể Điều Kiện (条件形: ば形) & Cấu Trúc Càng... Càng...",
    level: "Minna no Nihongo N4 (Bài 35)",
    badge: "Thể điều kiện ば形",
    description: "Thành thạo quy tắc biến đổi thể điều kiện (ば形) cho mọi từ loại, phân biệt câu điều kiện giả định và thói quen, cách gợi ý bằng N なら, và cấu trúc đặc sắc 'càng... càng...' (〜ば〜ほど).",
    vocabulary: [
      { kanji: "<span class=\"furigana\"><ruby>咲<rt>さ</rt></ruby>きます</span>", hiragana: "さきます", meaning: "Nở [hoa] (花が〜)", type: "Động từ nhóm 1", example: "桜が 咲きました。(Hoa anh đào đã nở.)" },
      { kanji: "<span class=\"furigana\"><ruby>変<rt>か</rt></ruby>わります</span>", hiragana: "かわります", meaning: "Thay đổi, biến đổi [màu sắc, thời tiết] (色が〜)", type: "Động từ nhóm 1 (Tự)", example: "信号の 色が 変わります。(Màu đèn tín hiệu đổi màu.)" },
      { kanji: "<span class=\"furigana\"><ruby>困<rt>こま</rt></ruby>ります</span>", hiragana: "こまります", meaning: "Khó khăn, khốn đốn, phiền toái", type: "Động từ nhóm 1", example: "道に 迷って 困りました。(Lạc đường phiền phức quá.)" },
      { kanji: "<span class=\"furigana\"><ruby>付<rt>つ</rt></ruby>けます</span>", hiragana: "つけます", meaning: "Vẽ [vòng tròn dấu tích] (丸を〜)", type: "Động từ nhóm 2", example: "正しい 答えに 丸を 付けます。(Khoanh tròn vào đáp án đúng.)" },
      { kanji: "<span class=\"furigana\"><ruby>拾<rt>ひろ</rt></ruby>います</span>", hiragana: "ひろいます", meaning: "Nhặt, lượm", type: "Động từ nhóm 1", example: "ごみを 拾います。(Nhặt rác.)" },
      { kanji: "<span class=\"furigana\"><ruby>楽<rt>らく</rt></ruby>[な]</span>", hiragana: "らく[な]", meaning: "An nhàn, thảnh thơi, dễ chịu", type: "Tính từ đuôi な", example: "この 仕事は 体が 楽です。(Công việc này đỡ vất vả tay chân.)" },
      { kanji: "<span class=\"furigana\"><ruby>正<rt>ただ</rt></ruby>しい</span>", hiragana: "ただしい", meaning: "Đúng đắn, chính xác", type: "Tính từ đuôi い", example: "正しい 発音を 練習します。(Luyện tập phát âm chính xác.)" },
      { kanji: "<span class=\"furigana\"><ruby>珍<rt>めずら</rt></ruby>しい</span>", hiragana: "めずらしい", meaning: "Hiếm có, hiếm thấy", type: "Tính từ đuôi い", example: "珍しい 鳥を 見ました。(Tôi đã thấy một loài chim quý hiếm.)" },
      { kanji: "<span class=\"furigana\"><ruby>島<rt>しま</rt></ruby></span>", hiragana: "しま", meaning: "Hòn đảo", type: "Danh từ", example: "船で 近くの 島へ 行きます。(Đi thuyền ra đảo gần đó.)" },
      { kanji: "<span class=\"furigana\"><ruby>港<rt>みなと</rt></ruby></span>", hiragana: "みなと", meaning: "Bến cảng, cảng biển", type: "Danh từ", example: "港に たくさんの 船が 泊まって います。(Trong cảng có nhiều tàu thuyền neo đậu.)" },
      { kanji: "<span class=\"furigana\"><ruby>近所<rt>きんじょ</rt></ruby></span>", hiragana: "きんじょ", meaning: "Hàng xóm láng giềng, khu vực lân cận", type: "Danh từ", example: "近所の 人に 挨拶します。(Chào hỏi hàng xóm láng giềng.)" },
      { kanji: "<span class=\"furigana\"><ruby>屋上<rt>おくじょう</rt></ruby></span>", hiragana: "おくじょう", meaning: "Sân thượng tòa nhà", type: "Danh từ", example: "屋上から 街を 眺めます。(Ngắm phố xá từ sân thượng.)" },
      { kanji: "<span class=\"furigana\"><ruby>海外<rt>かいがい</rt></ruby></span>", hiragana: "かいがい", meaning: "Hải ngoại, nước ngoài", type: "Danh từ", example: "海外旅行に 行きたいです。(Tôi muốn đi du lịch nước ngoài.)" },
      { kanji: "<span class=\"furigana\"><ruby>山登<rt>やまのぼ</rt></ruby>り</span>", hiragana: "やまのぼり", meaning: "Leo núi, bộ môn leo núi dã ngoại", type: "Danh từ", example: "秋は 山登りに いい 季節です。(Mùa thu là mùa đẹp để leo núi.)" },
      { kanji: "<span class=\"furigana\"><ruby>歴史<rt>れきし</rt></ruby></span>", hiragana: "れきし", meaning: "Lịch sử", type: "Danh từ", example: "日本の 歴史を 研究します。(Nghiên cứu lịch sử Nhật Bản.)" },
      { kanji: "<span class=\"furigana\"><ruby>機会<rt>きかい</rt></ruby></span>", hiragana: "きかい", meaning: "Cơ hội, dịp may", type: "Danh từ", example: "いい 機会を 得ました。(Tôi đã có được một cơ hội tốt.)" },
      { kanji: "<span class=\"furigana\"><ruby>許可<rt>きょか</rt></ruby></span>", hiragana: "きょか", meaning: "Sự cho phép, giấy phép", type: "Danh từ", example: "先生の 許可を もらいます。(Xin phép thầy giáo.)" },
      { kanji: "<span class=\"furigana\"><ruby>丸<rt>まる</rt></ruby></span>", hiragana: "まる", meaning: "Hình tròn, dấu tròn", type: "Danh từ", example: "正解に 丸を 描きます。(Vẽ vòng tròn vào câu trả lời đúng.)" },
      { kanji: "<span class=\"furigana\">ふりがな</span>", hiragana: "ふりがな", meaning: "Chữ Furigana ghi phiên âm cách đọc", type: "Danh từ", example: "漢字の 上に ふりがなを つけます。(Ghi furigana lên phía trên chữ Hán.)" },
      { kanji: "<span class=\"furigana\"><ruby>設備<rt>せつび</rt></ruby></span>", hiragana: "せつび", meaning: "Trang thiết bị, cơ sở vật chất", type: "Danh từ", example: "新しい 設備を 導入します。(Trang bị thêm trang thiết bị mới.)" },
      { kanji: "<span class=\"furigana\">レバー</span>", hiragana: "レバー", meaning: "Cần gạt điều khiển, cần phanh", type: "Danh từ", example: "レバーを 引きます。(Kéo cần gạt.)" },
      { kanji: "<span class=\"furigana\">キー</span>", hiragana: "キー", meaning: "Chìa khóa, phím bấm bàn phím", type: "Danh từ", example: "キーボードの キーを 押します。(Bấm phím trên bàn phím.)" },
      { kanji: "<span class=\"furigana\">カーテン</span>", hiragana: "カーテン", meaning: "Rèm cửa, màn che", type: "Danh từ", example: "カーテンを 開けます。(Kéo mở rèm cửa.)" },
      { kanji: "<span class=\"furigana\">ひも</span>", hiragana: "ひも", meaning: "Sợi dây buộc", type: "Danh từ", example: "ひもを 結びます。(Buộc chặt sợi dây lại.)" },
      { kanji: "<span class=\"furigana\"><ruby>炊飯器<rt>すいはんき</rt></ruby></span>", hiragana: "すいはんき", meaning: "Nồi cơm điện", type: "Danh từ", example: "炊飯器で ご飯を 炊きます。(Nấu cơm bằng nồi cơm điện.)" },
      { kanji: "<span class=\"furigana\"><ruby>葉<rt>は</rt></ruby></span>", hiragana: "は", meaning: "Chiếc lá cây", type: "Danh từ", example: "秋に なると 葉が 赤く なります。(Sang thu lá cây chuyển màu đỏ.)" },
      { kanji: "<span class=\"furigana\">もっと</span>", hiragana: "もっと", meaning: "Hơn nữa, thêm nữa", type: "Phó từ", example: "もっと 大きい 声で 話して ください。(Xin hãy nói to hơn nữa.)" },
      { kanji: "<span class=\"furigana\">それなら</span>", hiragana: "それなら", meaning: "Nếu thế thì, vậy thì", type: "Liên từ", example: "それなら、この 店が おすすめです。(Nếu vậy thì tôi gợi ý quán này.)" }
    ],
    grammar: [
      {
        structure: "1. Thể điều kiện (条件形: ば形) - Quy tắc chia",
        explanation: "• Động từ Nhóm 1: Chuyển hàng [i] trước ます sang hàng [e] rồi thêm ば (書きます -> 書けば、行きます -> 行けば、飲みます -> 飲めば).\n• Động từ Nhóm 2: Bỏ ます thêm れば (食べます -> 食べれば、見ます -> 見れば).\n• Động từ Nhóm 3: します -> すれば、来ます(きます) -> 来れば(くれば).\n• Tính từ đuôi い: Bỏ い thêm ければ (安ければ、高ければ. Riêng いい -> よければ).\n• Tính từ đuôi な / Danh từ: Thêm なら [ば] (暇なら、雨なら).",
        caution: "Thể phủ định: V-ない -> V-なければ (行かなければ).",
        examples: [
          {
            type: "sentence",
            context: "Nếu có tiền thì sẽ đi du lịch",
            jp: "お<span class=\"furigana\"><ruby>金<rt>かね</rt></ruby></span>が <span class=\"furigana\"><ruby>有<rt>あ</rt></ruby>れば</span>、<span class=\"furigana\"><ruby>旅行<rt>りょこう</rt></ruby></span>に <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>きたいです</span>。",
            rawJp: "お金があれば、旅行に行きたいです。",
            vi: "Nếu có tiền thì tôi muốn đi du lịch."
          }
        ]
      },
      {
        structure: "2. Câu điều kiện 〜ば (Điều kiện giả định & Quy luật hiển nhiên)",
        explanation: "Dùng để nêu một điều kiện mà nếu thỏa mãn thì vế sau sẽ tất yếu xảy ra, hoặc đưa ra giả định về tương lai.",
        caution: "Nếu vế 1 và vế 2 cùng một chủ thể hành động ý chí thì không dùng 〜ば cho mệnh lệnh (dùng 〜たら).",
        examples: [
          {
            type: "sentence",
            context: "Bấm nút này thì nước sẽ chảy ra",
            jp: "この ボタンを <span class=\"furigana\"><ruby>押<rt>お</rt></ruby>せば</span>、お<span class=\"furigana\"><ruby>湯<rt>ゆ</rt></ruby></span>が <span class=\"furigana\"><ruby>出<rt>で</rt></ruby>ます</span>。",
            rawJp: "このボタンを押せば、お湯が出ます。",
            vi: "Nếu bấm nút này thì nước nóng sẽ chảy ra."
          }
        ]
      },
      {
        structure: "3. N + なら、〜 (Nếu là N thì... - Gợi ý đưa lời khuyên)",
        explanation: "Dùng khi tiếp nhận chủ đề mà đối phương vừa nhắc tới, rồi đưa ra lời khuyên, nhận xét hoặc thông tin gợi ý chuyên biệt về chủ đề đó.",
        caution: "Chỉ áp dụng với danh từ hoặc tính từ.",
        examples: [
          {
            type: "dialogue",
            context: "Hỏi địa điểm ngắm hoa anh đào đẹp",
            lines: [
              { speaker: "A", jp: "桜を <span class=\"furigana\"><ruby>見<rt>み</rt></ruby>たいんですが</span>、どこが いいですか。", rawJp: "桜を見たいんですが、どこがいいですか。", vi: "Tôi muốn ngắm hoa anh đào, ở đâu thì đẹp nhỉ?" },
              { speaker: "B", jp: "桜<span class=\"furigana\">なら</span>、<span class=\"furigana\"><ruby>京都<rt>きょうと</rt></ruby></span>が 一番 おすすめですよ。", rawJp: "桜なら、京都が一番おすすめですよ。", vi: "Nếu là hoa anh đào thì Kyoto là gợi ý số một đấy." }
            ]
          }
        ]
      },
      {
        structure: "4. Từ để hỏi + V-ば いいですか (Xin lời chỉ dẫn)",
        explanation: "Tương tự như cấu trúc V-たらいいですか ở Bài 26, dùng để hỏi ý kiến đối phương xem mình nên làm thế nào trong một hoàn cảnh cụ thể.",
        caution: "どうすればいいですか (Tôi nên làm thế nào đây?).",
        examples: [
          {
            type: "sentence",
            context: "Hỏi cách mượn sách ở thư viện",
            jp: "<span class=\"furigana\"><ruby>本<rt>ほん</rt></ruby></span>を <span class=\"furigana\"><ruby>借<rt>か</rt></ruby>りたいんですが</span>、どう <span class=\"furigana\"><ruby>言<rt>い</rt></ruby>えば</span> いいですか。",
            rawJp: "本を借りたいんですが、どう言えばいいですか。",
            vi: "Tôi muốn mượn sách, tôi nên nói như thế nào ạ?"
          }
        ]
      },
      {
        structure: "5. V-れば V-るほど / A-ければ A-いほど (Càng... thì càng...)",
        explanation: "Biểu thị sự tăng tiến tương hỗ: Khi mức độ của vế trước càng tăng lên thì mức độ của vế sau cũng tỉ lệ thuận tăng lên theo.",
        caution: "Lặp lại động từ hoặc tính từ ở hai dạng: thể điều kiện và thể từ điển.",
        examples: [
          {
            type: "sentence",
            context: "Càng học tiếng Nhật thì càng thấy thú vị",
            jp: "<span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>は <span class=\"furigana\"><ruby>勉強<rt>べんきょう</rt></ruby>すれば</span> <span class=\"furigana\"><ruby>勉強<rt>べんきょう</rt></ruby>するほど</span>、おもしろく なります。",
            rawJp: "日本語は勉強すれば勉強するほど、おもしろくなります。",
            vi: "Tiếng Nhật càng học thì lại càng thấy thú vị."
          }
        ]
      }
    ]
  }
];

// Write out to data/lessons_31_35.js
const fileContent = `// Lessons 31 to 35: Minna no Nihongo Shokyuu II (N4 Standard Curriculum)
const lessons_31_35 = ${JSON.stringify(lessons_31_35, null, 2)};
`;

fs.writeFileSync('data/lessons_31_35.js', fileContent, 'utf8');
console.log('Successfully updated data/lessons_31_35.js with full textbook vocabulary and grammar!');
