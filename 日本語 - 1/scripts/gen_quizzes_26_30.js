const fs = require('fs');

// We will construct quiz-26, quiz-27, quiz-28, quiz-29, quiz-30 (50 questions each)
const quizData = {};

function createQuestions(quizNum, prefix, items) {
  return items.map((item, idx) => ({
    id: `${prefix}-${idx + 1}`,
    question: item.q,
    options: item.opts,
    correctIdx: item.correct !== undefined ? item.correct : 0,
    explanation: item.exp
  }));
}

// BÀI 26: 〜んです (〜んですか / 〜んですが), 〜て いただけませんか, 〜たら いいですか
const q26_raw = [
  { q: "どうして 昨日 会社を ........ んですか。", opts: ["休んだ", "休みます", "休んで", "休む"], correct: 0, exp: "[Độ khó: DỄ | Thể thông thường + んですか] Trước んですか là thể thông thường (普通形). Đã nghỉ trong quá khứ dùng 休んだ." },
  { q: "頭が ........ んです。少し 休んでも いいですか。", opts: ["痛い", "痛いだ", "痛くて", "痛く"], correct: 0, exp: "[Độ khó: DỄ | Tính từ i + んです] Tính từ đuôi い giữ nguyên い + んです: 痛いんです." },
  { q: "「きれいな カメラですね」ー 「ええ、誕生日に 父に ........ んです」", opts: ["もらった", "あげた", "くれた", "もらう"], correct: 0, exp: "[Độ khó: DỄ | Thể quá khứ ngắn] Thuyết minh nguồn gốc món đồ: 父に もらったんです (bố đã tặng cho tôi)." },
  { q: "日本語で レポートを 書いたんですが、ちょっと ........ いただけませんか。", opts: ["見て", "見ます", "見たら", "見ない"], correct: 0, exp: "[Độ khó: DỄ | V-て いただけませんか] Cấu trúc nhờ vả lịch sự dùng thể て: 見て いただけませんか." },
  { q: "市役所へ 行きたいんですが、どこで ........ いいですか。", opts: ["降りたら", "降ります", "降りて", "降りる"], correct: 0, exp: "[Độ khó: DỄ | Từ nghi vấn + たらいいですか] Xin lời khuyên dùng thể た + ら: 降りたら いいですか." },
  { q: "「引っ越しを 手伝いましょうか」ー 「ええ、........ んです」", opts: ["助かる", "助かります", "助かって", "助け"], correct: 0, exp: "[Độ khó: DỄ | Động từ + んです] Trước んです là thể từ điển: 助かるんです (thế thì đỡ quá ạ)." },
  { q: "「お茶を もう 一杯 いかがですか」ー 「いいえ、もう ........ んです」", opts: ["お腹が いっぱいな", "お腹が いっぱいの", "お腹が いっぱいだ", "お腹が いっぱいに"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tính từ na + んです] Tính từ đuôi な thêm な trước んです: お腹が いっぱいなんです." },
  { q: "どうして 朝ごはんを 食べないんですか。ー 「時間が ........ んです」", opts: ["ない", "ありません", "なくて", "なかった"], correct: 0, exp: "[Độ khó: DỄ | Phủ định thể ngắn + んです] ないんです = vì không có thời gian." },
  { q: "カメラを 買いたいんですが、どこの 店が ........ ですか。", opts: ["いい", "いいな", "いいだ", "よく"], correct: 0, exp: "[Độ khó: DỄ | Xin lời khuyên tính từ] どこの 店が いいですか." },
  { q: "「明日 パーティーに 来ますか」ー 「すみません、都合が ........ んです」", opts: ["悪い", "悪くて", "悪く", "悪かった"], correct: 0, exp: "[Độ khó: DỄ | Từ chối khéo với んです] 都合が 悪いんです (tôi bận chút việc riêng)." },
  { q: "日本語が とても 上手ですね。ー 「いいえ、まだまだ ........ んです」", opts: ["下手な", "下手だ", "下手の", "下手"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tính từ na + んです] 下手な + んです: 下手なんです." },
  { q: "パスポートを なくしたんですが、どう ........ いいですか。", opts: ["したら", "して", "します", "する"], correct: 0, exp: "[Độ khó: DỄ | どうしたらいいですか] Cụm từ cố định hỏi cách xử lý: どうしたら いいですか." },
  { q: "「どうして 遅刻したんですか」ー 「バスが ........ んです」", opts: ["来なかった", "来ません", "来ない", "来なかったら"], correct: 0, exp: "[Độ khó: DỄ | Giải thích nguyên nhân quá khứ] バスが 来なかったんです (vì xe buýt không tới)." },
  { q: "エアコンが 動かないんですが、ちょっと ........ いただけませんか。", opts: ["調べて", "調べます", "調べたら", "調べる"], correct: 0, exp: "[Độ khó: DỄ | Nhờ kiểm tra giúp] 調べて いただけませんか (nhờ xem qua giúp)." },
  { q: "「どうして カラオケに 行かないんですか」ー 「歌が ........ んです」", opts: ["下手な", "下手だ", "下手の", "下手で"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tính từ na] 歌が 下手なんです (vì tôi hát dở lắm)." },
  { q: "富士山に 登りたいんですが、何月ごろが ........ ですか。", opts: ["いい", "いいな", "よく", "いいだ"], correct: 0, exp: "[Độ khó: DỄ | Hỏi thời điểm thích hợp] 何月ごろが いいですか (khoảng tháng mấy thì được ạ?)." },
  { q: "「荷物が 重そうですね。手伝いましょうか」ー 「すみません、........」", opts: ["お願いします", "手伝います", "重いです", "いいえ"], correct: 0, exp: "[Độ khó: DỄ | Nhận lời giúp đỡ] すみません、お願いします (xin cảm ơn, nhờ anh chị giúp một tay)." },
  { q: "桜の 写真を 撮りたいんですが、どこが ........ ですか。", opts: ["いい", "よかった", "よくて", "いいな"], correct: 0, exp: "[Độ khó: DỄ | Hỏi địa điểm gợi ý] どこが いいですか (chỗ nào thì đẹp ạ?)." },
  { q: "気分が 悪いんですが、少し ........ いただけませんか。", opts: ["休ませて", "休みて", "休んで", "休む"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Xin phép lịch sự] 休ませて いただけませんか (cho phép tôi nghỉ một lát)." },
  { q: "「パーティーの 料理は 自分で 作ったんですか」ー 「いいえ、店で ........ んです」", opts: ["買った", "買います", "買って", "買おう"], correct: 0, exp: "[Độ khó: DỄ | Thuyết minh quá khứ] 買ったんです (mua ở tiệm về)." },
  { q: "Từ「置き場」trong bài 26 có nghĩa là gì?", opts: ["Nơi để, chỗ cất đồ", "Bãi gửi xe", "Thùng rác", "Nhà kho"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng bài 26] 置き場 (おきば) là nơi để, chỗ cất đặt." },
  { q: "Từ「燃えるごみ」có nghĩa là gì?", opts: ["Rác cháy được", "Rác không cháy được", "Rác tái chế", "Rác cồng kềnh"], correct: 0, exp: "[Độ khó: DỄ | Phân loại rác] 燃えるごみ (もえるごみ) là rác cháy được (thức ăn thừa, giấy vụn)." },
  { q: "Từ「燃えないごみ」có nghĩa là gì?", opts: ["Rác không cháy được", "Rác cháy được", "Rác hữu cơ", "Rác độc hại"], correct: 0, exp: "[Độ khó: DỄ | Phân loại rác] 燃えないごみ (もえないごみ) là rác không cháy được (kim loại, thủy tinh, gốm sứ)." },
  { q: "Từ「缶」có nghĩa là gì?", opts: ["Lon kim loại, vỏ hộp thiếc", "Chai thủy tinh", "Túi nilon", "Hộp carton"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 缶 (かん) là lon, hộp bằng kim loại (缶ビール、ジュースの缶)." },
  { q: "Từ「瓶」có nghĩa là gì?", opts: ["Chai lọ thủy tinh", "Lon nhôm", "Thùng gỗ", "Bát sứ"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 瓶 (びん) là chai, bình thủy tinh (ビール瓶)." },
  { q: "Từ「連絡します」có nghĩa là gì?", opts: ["Liên lạc, thông báo", "Gặp mặt", "Gọi điện thoại", "Viết thư"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 連絡します (れんらくします) là liên lạc, báo tin." },
  { q: "Từ「宇宙」có nghĩa là gì?", opts: ["Vũ trụ", "Bầu trời", "Trái đất", "Mặt trăng"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 宇宙 (うちゅう) là vũ trụ, không gian vũ trụ." },
  { q: "Từ「怖い」có nghĩa là gì?", opts: ["Đáng sợ, sợ hãi", "Buồn bã", "Nguy hiểm", "Đau đớn"], correct: 0, exp: "[Độ khó: DỄ | Tính từ] 怖い (こわい) là sợ, đáng sợ." },
  { q: "Từ「間に合います」đi với trợ từ nào để chỉ đúng giờ tàu xe?", opts: ["に", "で", "を", "へ"], correct: 0, exp: "[Độ khó: DỄ | Trợ từ] Kịp giờ gì đi với trợ từ に: 電車に 間に合います (kịp tàu)." },
  { q: "Từ「遅れます」đi với trợ từ nào để chỉ muộn giờ?", opts: ["に", "で", "を", "から"], correct: 0, exp: "[Độ khó: DỄ | Trợ từ] Muộn giờ gì đi với に: 時間に 遅れます." },
  { q: "Chọn câu hỏi xác nhận lý do chuẩn nhất:", opts: ["どうして 来なかったんですか。", "どうして 来なかったですか。", "どうして 来ないでしたか。", "どうして 来ませんんですか。"], correct: 0, exp: "[Độ khó: DỄ | Thể ngắn + んですか] 来なかったんですか." },
  { q: "Chọn câu giải thích lý do chuẩn nhất:", opts: ["熱が あるんです。", "熱が ありますんです。", "熱が あったなんです。", "熱が あるだんです。"], correct: 0, exp: "[Độ khó: DỄ | Động từ + んです] あるんです." },
  { q: "Khi từ chối lời mời khéo léo, người Nhật thường dùng:", opts: ["都合が 悪いんです。", "嫌いです。", "行きたくありません。", "行きません。"], correct: 0, exp: "[Độ khó: DỄ | Giao tiếp lịch sự] 都合が 悪いんです (tôi bận chút việc không tiện)." },
  { q: "「〜んですが」trong câu nhờ vả có tác dụng gì?", opts: ["Mở đầu tạo bối cảnh ngập ngừng, lịch sự", "Kết thúc câu dứt khoát", "Thể hiện sự phản đối gay gắt", "Hỏi giá cả hàng hóa"], correct: 0, exp: "[Độ khó: DỄ | Ngữ dụng] 〜んですが tạo bối cảnh ngập ngừng, nhẹ nhàng trước khi nhờ vả." },
  { q: "Chọn câu ghép chuẩn:「お金を 落とした / どうしたらいいですか」", opts: ["お金を 落としたんですが、どうしたら いいですか。", "お金を 落とすんですが、どうしたら いいですか。", "お金を 落としましたですが、どうしたら いいですか。", "お金を 落としたらですが、どうしたら いいですか。"], correct: 0, exp: "[Độ khó: DỄ | 落としたんですが] Đã đánh rơi tiền trong quá khứ." },
  { q: "Chọn câu đề nghị nhờ sửa giúp chuẩn nhất:", opts: ["パソコンが 壊れたんですが、直して いただけませんか。", "パソコンが 壊れたんですが、直してくださいませんか。", "パソコンが 壊れたんですが、直しますか。", "パソコンが 壊れたんですが、直したらいいですか。"], correct: 0, exp: "[Độ khó: DỄ | 直して いただけませんか] Nhờ vả lịch sự cao nhất." },
  { q: "「生ごみ」trong đời sống Nhật Bản là loại rác gì?", opts: ["Rác hữu cơ, rác nhà bếp dễ phân hủy", "Rác chai nhựa", "Rác đồ điện tử", "Rác pin cũ"], correct: 0, exp: "[Độ khó: DỄ | Văn hóa rác Nhật] 生ごみ (なまごみ) là rác thải nhà bếp tươi, rác hữu cơ." },
  { q: "Chọn cách nói xin chỉ đường đến nhà ga:", opts: ["駅へ 行きたいんですが、道を 教えて いただけませんか。", "駅へ 行くんですが、道を 教えてくださいか。", "駅へ 行ったんですが、道を 教えますか。", "駅へ 行きたいですが、道を 教えたらいいですか。"], correct: 0, exp: "[Độ khó: DỄ | Mẫu câu Bài 26] 行きたいんですが、教えて いただけませんか." },
  { q: "「気分が いい」đồng nghĩa gần nhất với:", opts: ["体調が よくて 元気だ", "お金が たくさん ある", "天気が 晴れている", "部屋が 静かだ"], correct: 0, exp: "[Độ khó: DỄ | Nghĩa cụm từ] 気分がいい là trong người khỏe khoắn, khoan khoái." },
  { q: "「気分が 悪い」thường dùng khi:", opts: ["Bị say xe hoặc mệt mỏi trong người", "Gặp chuyện vui mừng", "Ăn no bụng", "Vừa ngủ dậy tỉnh táo"], correct: 0, exp: "[Độ khó: DỄ | Nghĩa cụm từ] 気分が悪い là khó chịu trong người, buồn nôn, chóng mặt." },
  { q: "Chọn thể đúng:「田中さんは 英語が ........ んですか」(Hỏi khả năng)", opts: ["話せる", "話します", "話して", "話した"], correct: 0, exp: "[Độ khó: DỄ | Động từ thể khả năng + んですか] 話せるんですか." },
  { q: "「どこで 買ったら いいですか」Câu này có ý nghĩa gì?", opts: ["Tôi nên mua ở đâu thì tốt?", "Bạn đã mua ở đâu?", "Ở đâu có bán đồ này?", "Mua ở đâu cũng được."], correct: 0, exp: "[Độ khó: DỄ | Dịch nghĩa câu] Xin lời khuyên nên mua ở đâu thì tốt." },
  { q: "Chọn câu hỏi lý do đi taxi:", opts: ["どうして タクシーで 来たんですか。", "どうして タクシーで 来ますか。", "どうして タクシーで 来たですか。", "どうして タクシーで 来たでしょうか。"], correct: 0, exp: "[Độ khó: DỄ | Đi taxi đến] どうして タクシーで 来たんですか." },
  { q: "Trả lời cho câu hỏi trên:「荷物が ........ からです」", opts: ["多かった", "多い", "多くて", "多く"], correct: 0, exp: "[Độ khó: DỄ | Quá khứ tính từ i] 荷物が 多かったからです (vì hành lý nhiều)." },
  { q: "Trước「んです」là Danh từ ở thì hiện tại khẳng định, ta phải:", opts: ["Thêm な (N な んです)", "Thêm だ (N だ んです)", "Thêm の (N の んです)", "Giữ nguyên Danh từ"], correct: 0, exp: "[Độ khó: DỄ | Quy tắc ngữ pháp] Danh từ + な + んです (病気なんです、休みなんです)." },
  { q: "Trước「んです」là Tính từ đuôi な ở hiện tại khẳng định, ta phải:", opts: ["Thêm な (Aな + な + んです)", "Bỏ な", "Thêm だ", "Thêm に"], correct: 0, exp: "[Độ khó: DỄ | Quy tắc ngữ pháp] Tính từ đuôi な + な + んです (暇なんです、きれいなんです)." },
  { q: "Trước「んです」là Tính từ đuôi い ở hiện tại phủ định, ta chia:", opts: ["A-くない + んです", "A-くないだ + んです", "A-くなくて + んです", "A-くないな + んです"], correct: 0, exp: "[Độ khó: DỄ | Tính từ i phủ định] 寒くないんです、高くないんです." },
  { q: "Trước「んです」là Động từ thể từ điển phủ định, ta chia:", opts: ["V-ない + んです", "V-ないだ + んです", "V-なくて + んです", "V-ないな + んです"], correct: 0, exp: "[Độ khó: DỄ | Động từ phủ định ngắn] 行かないんです、食べないんです." },
  { q: "Cặp thoại nào dùng「〜んです」tự nhiên nhất?", opts: ["A:「どうしたんですか」ー B:「お腹が 痛いんです」", "A:「あなたのお名前は」ー B:「マイク・ミラーなんです」", "A:「今日は何曜日ですか」ー B:「月曜日なんです」", "A:「これは本ですか」ー B:「本なんです」"], correct: 0, exp: "[Độ khó: DỄ | Bối cảnh dùng んです] Hỏi thăm tình trạng và giải thích lý do: どうしたんですか ー お腹が痛いんです." },
  { q: "Tổng kết: Trọng tâm cốt lõi của Bài 26 là gì?", opts: ["Giải thích nguyên nhân, thuyết minh bối cảnh và nhờ vả lịch sự", "Chia thể bị động", "So sánh hơn nhất", "Đếm đồ vật"], correct: 0, exp: "[Độ khó: DỄ | Tổng kết bài 26] 〜んです để giải thích lý do, bối cảnh và 〜ていただけませんか để nhờ vả." }
];

quizData["quiz-26"] = createQuestions(26, "pq26", q26_raw);

console.log(`Generated quiz-26 with ${quizData["quiz-26"].length} questions`);

// BÀI 27: Thể khả năng (可能形), 見える/聞こえる, できます, 〜しか〜ません
const q27_raw = [
  { q: "わたしは 日本語が ........。(Khả năng nói tiếng Nhật)", opts: ["話せます", "話します", "話されます", "話せられます"], correct: 0, exp: "[Độ khó: DỄ | Động từ nhóm 1 thể khả năng] 話す (u -> e) -> 話せる. Đi với trợ từ が: 日本語が 話せます." },
  { q: "漢字を 読む -> Thể khả năng tương ứng là:", opts: ["漢字が 読める", "漢字を 読める", "漢字が 読まれる", "漢字が 読ませる"], correct: 0, exp: "[Độ khó: DỄ | Đổi trợ từ và thể khả năng] 読む -> 読める, trợ từ を chuyển thành が: 漢字が 読める." },
  { q: "一人で 病院へ ........ か。(Có thể tự đi bệnh viện một mình không?)", opts: ["行けます", "行きます", "行かれます", "行かれます"], correct: 0, exp: "[Độ khó: DỄ | Khả năng đi] 行く -> 行ける: 行けますか." },
  { q: "刺身が ........。(Có thể ăn được món cá sống sashimi)", opts: ["食べられます", "食べれます", "食べられます", "食べられます"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 2 thể khả năng] 食べる (bỏ る thêm られる) -> 食べられます." },
  { q: "明日 パーティーに ........ か。(Có thể đến dự tiệc ngày mai không?)", opts: ["来られます", "来ます", "来れます", "来させます"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 3 くる thể khả năng] くる -> こられる: 来られますか." },
  { q: "車を 運転する -> Thể khả năng là:", opts: ["車が 運転できる", "車を 運転できる", "車が 運転される", "車が 運転させる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 3 する] する -> できる: 車が 運転できる." },
  { q: "私の 部屋から 山が ........。(Tự nhiên nhìn thấy ngọn núi)", opts: ["見えます", "見られます", "見ます", "見せます"], correct: 0, exp: "[Độ khó: DỄ | Phân biệt 見える] Núi tự lọt vào tầm mắt dùng 見えます." },
  { q: "映画館で 面白い 映画が ........。(Có điều kiện vào rạp để xem phim)", opts: ["見られます", "見えます", "見ます", "見せられます"], correct: 0, exp: "[Độ khó: DỄ | Phân biệt 見られる] Có điều kiện/mua vé để xem dùng 見られます." },
  { q: "隣の 部屋から ピアノの 音が ........。(Tự nhiên nghe thấy tiếng đàn)", opts: ["聞こえます", "聞けます", "聞きます", "聞かせます"], correct: 0, exp: "[Độ khó: DỄ | Phân biệt 聞こえる] Âm thanh tự lọt vào tai dùng 聞こえます." },
  { q: "ラジオで 日本語の ニュースが ........。(Có radio nên nghe được tin)", opts: ["聞けます", "聞こえます", "聞きます", "聞かれます"], correct: 0, exp: "[Độ khó: DỄ | Phân biệt 聞ける] Có phương tiện/điều kiện để nghe tin tức dùng 聞けます." },
  { q: "駅の 前に 新しい スーパーが ........。(Vừa mới xây xong siêu thị)", opts: ["できました", "建てました", "作りました", "ありました"], correct: 0, exp: "[Độ khó: DỄ | できます] Xây xong, hoàn thành công trình dùng できました." },
  { q: "財布に 100円........ ありません。(Chỉ có đúng 100 yên, rất ít ỏi)", opts: ["しか", "だけ", "も", "は"], correct: 0, exp: "[Độ khó: DỄ | しか〜ません] しか đi với phủ định nhấn mạnh sự ít ỏi: 100円しか ありません." },
  { q: "ひらがな........ 書く ことが できます。(Chỉ viết được mỗi Hiragana)", opts: ["だけ", "しか", "でも", "なら"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | だけ vs しか] Đuôi câu là khẳng định (できます) nên dùng だけ (không dùng しか vì しか đi với phủ định)." },
  { q: "この マンションでは ペットが ........。(Có thể nuôi thú cưng)", opts: ["飼えます", "飼います", "飼われます", "飼わせます"], correct: 0, exp: "[Độ khó: DỄ | Khả năng nuôi] 飼う -> 飼える: ペットが 飼えます." },
  { q: "鳥の 声が ........。(Nghe thấy tiếng chim hót lọt vào tai)", opts: ["聞こえます", "聞けます", "聞きます", "聞こられます"], correct: 0, exp: "[Độ khó: DỄ | Tiếng chim tự nhiên] 鳥の声が 聞こえます." },
  { q: "遠くの 島が ........。(Có thể nhìn thấy hòn đảo đằng xa)", opts: ["見えます", "見られます", "見ます", "見せます"], correct: 0, exp: "[Độ khó: DỄ | Tầm mắt tự nhiên] 島が 見えます." },
  { q: "時計の 修理は いつ ........ か。(Bao giờ thì đồng hồ sửa xong ạ?)", opts: ["できます", "直します", "直ります", "します"], correct: 0, exp: "[Độ khó: DỄ | Xong việc] いつ できますか (khi nào thì xong?)." },
  { q: "時間が ありませんから、パン........ 食べませんでした。(Chỉ ăn mỗi lát bánh mì)", opts: ["しか", "だけ", "も", "は"], correct: 0, exp: "[Độ khó: DỄ | しか đi với 食べませんでした] パンしか 食べませんでした." },
  { q: "英語は 話せますが、フランス語は ........。(Không thể nói tiếng Pháp)", opts: ["話せません", "話しません", "話せます", "話します"], correct: 0, exp: "[Độ khó: DỄ | Đối lập khẳng định - phủ định] は đánh dấu đối lập: フランス語は 話せません." },
  { q: "川で きれいな 魚が ........。(Nhìn thấy cá bơi dưới lòng sông)", opts: ["見えます", "見られます", "見ます", "見せます"], correct: 0, exp: "[Độ khó: DỄ | Lọt vào mắt] 魚が 見えます." },
  { q: "Từ「飼います」có nghĩa là gì?", opts: ["Nuôi (thú cưng, động vật)", "Mua sắm", "Thuê nhà", "Bán đi"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng bài 27] 飼います (かいます) là nuôi động vật." },
  { q: "Từ「波」có nghĩa là gì?", opts: ["Con sóng biển", "Hạt mưa", "Cơn gió", "Đám mây"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 波 (なみ) là con sóng." },
  { q: "Từ「花火」có nghĩa là gì?", opts: ["Pháo hoa", "Ngọn lửa", "Bình hoa", "Hạt giống hoa"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 花火 (はなび) là pháo hoa." },
  { q: "Từ「景色」có nghĩa là gì?", opts: ["Phong cảnh, cảnh sắc", "Màu sắc", "Thời tiết", "Bầu trời"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 景色 (けしき) là phong cảnh." },
  { q: "Từ「昔」có nghĩa là gì?", opts: ["Ngày xưa, quá khứ", "Ngày mai", "Bây giờ", "Tương lai"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 昔 (むかし) là ngày xưa, thuở trước." },
  { q: "Từ「道具」có nghĩa là gì?", opts: ["Dụng cụ, công cụ đồ nghề", "Bàn ghế", "Vũ khí", "Quần áo"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 道具 (どうぐ) là dụng cụ, công cụ." },
  { q: "Từ「台所」có nghĩa là gì?", opts: ["Nhà bếp", "Phòng khách", "Nhà tắm", "Sân thượng"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 台所 (だいどころ) là nhà bếp." },
  { q: "Động từ「泳ぐ」chuyển sang thể khả năng là:", opts: ["泳げる", "泳がれる", "泳ぎられる", "泳がせる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 1] ぐ -> げ: 泳げる (có thể bơi)." },
  { q: "Động từ「待つ」chuyển sang thể khả năng là:", opts: ["待てる", "待たれる", "待ちられる", "待たせる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 1] つ -> て: 待てる (có thể đợi)." },
  { q: "Động từ「買う」chuyển sang thể khả năng là:", opts: ["買える", "買われる", "買いられる", "買わせる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 1] う -> え: 買える (có thể mua)." },
  { q: "Động từ「書く」chuyển sang thể khả năng là:", opts: ["書ける", "書かれる", "書きられる", "書かせる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 1] く -> け: 書ける (có thể viết)." },
  { q: "Động từ「飲む」chuyển sang thể khả năng là:", opts: ["飲める", "飲まれる", "飲みられる", "飲ませる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 1] む -> め: 飲める (có thể uống)." },
  { q: "Động từ「起きる」chuyển sang thể khả năng là:", opts: ["起きられる", "起きれる", "起きる", "起きさせる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 2] 起きる -> 起きられる (có thể dậy)." },
  { q: "Động từ「寝る」chuyển sang thể khả năng là:", opts: ["寝られる", "寝れる", "寝る", "寝させる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 2] 寝る -> 寝られる (có thể ngủ)." },
  { q: "Động từ「する」chuyển sang thể khả năng là:", opts: ["できる", "される", "しられる", "させる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 3] する -> できる." },
  { q: "Động từ「来る」chuyển sang thể khả năng là:", opts: ["来られる", "来れる", "来られる", "来させる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 3] くる -> こられる." },
  { q: "Trong câu thể khả năng, trợ từ nào thường thay thế cho「を」?", opts: ["が", "に", "で", "へ"], correct: 0, exp: "[Độ khó: DỄ | Quy tắc] Trợ từ が thay cho を: 日本語を話す -> 日本語が話せる." },
  { q: "Biển báo cấm câu cá ở đây vì không được phép. Dùng từ nào?", opts: ["釣りが できません", "魚が いません", "海が ありません", "釣りが できます"], correct: 0, exp: "[Độ khó: DỄ | Biểu thị cấm đoán, không thể] 釣りが できません." },
  { q: "「昼間」có nghĩa là gì?", opts: ["Ban ngày", "Buổi tối", "Sáng sớm", "Nửa đêm"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 昼間 (ひるま) là ban ngày." },
  { q: "Khác biệt lớn nhất giữa「だけ」và「しか」là gì?", opts: ["だけ đi với câu khẳng định, しか bắt buộc đi với câu phủ định", "だけ đi với phủ định, しか đi với khẳng định", "Hai từ hoàn toàn giống nhau không khác gì", "しか chỉ dùng cho người"], correct: 0, exp: "[Độ khó: DỄ | Ngữ pháp] だけ + 肯定 (khẳng định); しか + 否定 (phủ định)." },
  { q: "Chọn câu viết đúng ngữ pháp:", opts: ["わたしは 英語しか 話せません。", "わたしは 英語しか 話せます。", "わたしは 英語だけ 話せません。", "わたしは 英語しかを 話せません。"], correct: 0, exp: "[Độ khó: DỄ | しか + phủ định] 英語しか 話せません (tôi chỉ nói được mỗi tiếng Anh)." },
  { q: "Chọn câu biểu thị mở cửa hàng mới:", opts: ["来月 駅前に 喫茶店が できます。", "来月 駅前に 喫茶店を 作ります。", "来月 駅前に 喫茶店が 始まります。", "来月 駅前に 喫茶店が 起きます。"], correct: 0, exp: "[Độ khó: DỄ | できます] Quán cà phê mới hoàn thành/mở cửa: 喫茶店が できます." },
  { q: "「インターネットで 世界中の ニュースが ........」", opts: ["見られます", "見えます", "見ます", "見せます"], correct: 0, exp: "[Độ khó: DỄ | Có internet nên xem được] Điều kiện kỹ thuật dùng 見られます." },
  { q: "「飛行機から 富士山が ........」", opts: ["見えました", "見られました", "見ました", "見せました"], correct: 0, exp: "[Độ khó: DỄ | Từ cửa sổ máy bay lọt vào mắt] 富士山が 見えました." },
  { q: "「テレビが 壊れて 音が ........」", opts: ["聞こえません", "聞けません", "聞きません", "聞こられます"], correct: 0, exp: "[Độ khó: DỄ | Tivi hỏng không phát ra tiếng] 音が 聞こえません." },
  { q: "「忙しくて 1時間しか ........」", opts: ["寝られませんでした", "寝ました", "寝られました", "寝ません"], correct: 0, exp: "[Độ khó: DỄ | しか + phủ định quá khứ] 1時間しか 寝られませんでした (chỉ chợp mắt được có 1 tiếng)." },
  { q: "Từ「クリーニング」có nghĩa là gì?", opts: ["Giặt khô ủi là (tiệm giặt là)", "Dọn vệ sinh phòng", "Nấu ăn", "Sửa xe"], correct: 0, exp: "[Độ khó: DỄ | Từ mượn] クリーニング là dịch vụ giặt là hấp sấy quần áo." },
  { q: "Từ「声」dùng cho đối tượng nào?", opts: ["Tiếng phát ra từ con người và động vật", "Tiếng gió thổi", "Tiếng còi tàu xe", "Tiếng chuông điện thoại"], correct: 0, exp: "[Độ khó: DỄ | Phân biệt 声 vs 音] 声 (こえ) là giọng nói, tiếng của sinh vật sống; còn 音 (おと) là âm thanh đồ vật, tự nhiên." },
  { q: "Chọn thể khả năng của「直す」(sửa chữa):", opts: ["直せる", "直される", "直させる", "直しられる"], correct: 0, exp: "[Độ khó: DỄ | Nhóm 1] す -> せ: 直せる (có thể sửa)." },
  { q: "Tổng kết: Trọng tâm cốt lõi của Bài 27 là gì?", opts: ["Động từ thể khả năng (可能形) và phân biệt 見える/聞こえる", "Cách đếm thời gian", "So sánh bằng", "Câu bị động"], correct: 0, exp: "[Độ khó: DỄ | Tổng kết bài 27] Thể khả năng 可能形 và phân biệt năng lực tự nhiên 見える/聞こえる." }
];

quizData["quiz-27"] = createQuestions(27, "pq27", q27_raw);

console.log(`Generated quiz-27 with ${quizData["quiz-27"].length} questions`);

// BÀI 28: 〜ながら (song song), 〜ています (thói quen), 〜し、〜し (liệt kê lý do)
const q28_raw = [
  { q: "音楽を ........、勉強します。(Vừa nghe nhạc vừa học bài)", opts: ["聞きながら", "聞いて", "聞くながら", "聞いた"], correct: 0, exp: "[Độ khó: DỄ | V1-bỏ ます + ながら] 聞きます -> 聞きながら." },
  { q: "ガムを ........、運転しては いけません。(Không được vừa nhai kẹo vừa lái xe)", opts: ["かみながら", "かんで", "かむながら", "かんだ"], correct: 0, exp: "[Độ khó: DỄ | かみます -> かみながら] Nhai kẹo cao su." },
  { q: "働き........、大学で 勉強して います。(Vừa đi làm vừa học đại học)", opts: ["ながら", "ても", "たり", "ので"], correct: 0, exp: "[Độ khó: DỄ | V1-bỏ ます + ながら] 働きながら (vừa làm vừa học)." },
  { q: "毎朝 ジョギングを ........。(Thói quen chạy bộ đều đặn mỗi sáng)", opts: ["して います", "します", "しました", "する"], correct: 0, exp: "[Độ khó: DỄ | 〜ています chỉ thói quen] Thói quen lặp đi lặp lại nhiều ngày dùng して います." },
  { q: "休みの 日は いつも 絵を ........。(Ngày nghỉ thường vẽ tranh)", opts: ["描いて います", "描きます", "描きました", "描く"], correct: 0, exp: "[Độ khó: DỄ | Thói quen ngày nghỉ] いつも + 〜ています." },
  { q: "この 店は 料理が おいしい........、値段も 安い........、いつも 人が 多いです。", opts: ["し / し", "て / て", "から / から", "ので / ので"], correct: 0, exp: "[Độ khó: DỄ | 〜し、〜し liệt kê lý do] おいしいし、安いし (vừa ngon vừa rẻ)." },
  { q: "鈴木先生は 熱心........、親切........、学生に 人気があります。", opts: ["だし / だし", "し / し", "な / な", "で / で"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tính từ na + だし] 熱心だし、親切だし." },
  { q: "駅から 近い........、部屋も きれい........、この アパートに 決めました。", opts: ["し / だし", "だし / し", "し / し", "て / で"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tính từ i + し, tính từ na + だし] 近いし、きれいだし." },
  { q: "この 店の パンは よく ........ います。(Bán rất chạy)", opts: ["売れて", "売って", "買って", "並んで"], correct: 0, exp: "[Độ khó: DỄ | 売れます bán chạy] よく 売れて います." },
  { q: "毎週 ダンス教室に ........ います。(Đi học nhảy đều đặn hàng tuần)", opts: ["通って", "行って", "来て", "走って"], correct: 0, exp: "[Độ khó: DỄ | 通います đi lại thường xuyên] 通って います." },
  { q: "テレビを ........、ご飯を 食べます。(Vừa xem tivi vừa ăn cơm)", opts: ["見ながら", "見て", "見るながら", "見た"], correct: 0, exp: "[Độ khó: DỄ | 見ます -> 見ながら] Hành động chính là ăn cơm." },
  { q: "お茶を ........、おしゃべりしましょう。(Vừa uống trà vừa tán gẫu)", opts: ["飲みながら", "飲んで", "飲むながら", "飲む"], correct: 0, exp: "[Độ khó: DỄ | 飲みます -> 飲みながら] Vừa uống nước vừa nói chuyện." },
  { q: "大切な ことを 手帳に ........ します。(Ghi chép vào sổ tay)", opts: ["メモ", "ノート", "コピー", "マーク"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] メモします (ghi chép tóm tắt)." },
  { q: "ワット先生は まじめ........、熱心........、素晴らしい 先生です。", opts: ["だし / だし", "し / し", "な / な", "で / で"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tính từ na] まじめだし、熱心だし." },
  { q: "雨も 降っているし、風も 強いし、........ 出かけません。", opts: ["それで", "それに", "しかし", "でも"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Phân biệt それで vs それに] それで = vì thế (kết quả dẫn tới không đi ra ngoài)." },
  { q: "あの レストランは おいしいです。........、値段も 安いです。(Hơn nữa)", opts: ["それに", "それで", "だから", "しかし"], correct: 0, exp: "[Độ khó: DỄ | Thêm vào đó] それに = hơn nữa, thêm vào đó." },
  { q: "盆踊りを ........。(Nhảy điệu múa Bon)", opts: ["踊ります", "歌います", "弾きます", "走ります"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng múa] 踊ります (おどります - nhảy múa)." },
  { q: "好きな 人形を ........ ください。(Hãy chọn con búp bê mình thích)", opts: ["選んで", "並べて", "集めて", "取って"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng chọn lựa] 選びます (えらびます - chọn lựa)." },
  { q: "サイズが ........ いいです。(Kích cỡ vừa vặn chuẩn chỉnh)", opts: ["ちょうど", "あまり", "ぜんぜん", "たいへん"], correct: 0, exp: "[Độ khó: DỄ | Cụm từ] ちょうどいい (vừa vặn đúng lúc)." },
  { q: "日本の 習慣に ........。(Đã quen với tập quán Nhật)", opts: ["慣れました", "知りました", "覚えました", "通いました"], correct: 0, exp: "[Độ khó: DỄ | Quen với] 習慣に 慣れました." },
  { q: "Từ「熱心な」có nghĩa là gì?", opts: ["Nhiệt tình, hăng hái", "Nghiêm túc", "Vĩ đại", "Tử tế"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng bài 28] 熱心な (ねっしんな) là nhiệt tình, hết lòng." },
  { q: "Từ「経験」có nghĩa là gì?", opts: ["Kinh nghiệm", "Kế hoạch", "Thói quen", "Kỷ niệm"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 経験 (けいけん) là kinh nghiệm thực tế." },
  { q: "Từ「給料」có nghĩa là gì?", opts: ["Tiền lương", "Tiền thưởng", "Tiền thuê nhà", "Học phí"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 給料 (きゅうりょう) là tiền lương." },
  { q: "Từ「小説」có nghĩa là gì?", opts: ["Tiểu thuyết", "Báo chí", "Tạp chí", "Thơ ca"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 小説 (しょうせつ) là tiểu thuyết." },
  { q: "Từ「歌手」có nghĩa là gì?", opts: ["Ca sĩ", "Nhạc sĩ", "Họa sĩ", "Diễn viên"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 歌手 (かしゅ) là ca sĩ." },
  { q: "Từ「番組」có nghĩa là gì?", opts: ["Chương trình tivi/truyền hình", "Bài hát", "Kênh truyền hình", "Bộ phim"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 番組 (ばんぐみ) là chương trình phát sóng." },
  { q: "Từ「偉い」có nghĩa là gì?", opts: ["Vĩ đại, đáng ngưỡng mộ", "Thông minh", "Giàu có", "Cao lớn"], correct: 0, exp: "[Độ khó: DỄ | Tính từ] 偉い (えらい) là vĩ đại, đáng nể phục." },
  { q: "Trong câu「V1 ながら V2」, hành động nào là hành động chính?", opts: ["V2 là hành động chính", "V1 là hành động chính", "Hai hành động hoàn toàn ngang nhau", "Không có hành động nào chính"], correct: 0, exp: "[Độ khó: DỄ | Ngữ pháp] V2 đứng sau là hành động chính, V1 là hành động phụ diễn ra đồng thời." },
  { q: "Điều kiện về chủ ngữ của「V1 ながら V2」là gì?", opts: ["Cả hai hành động phải do cùng 1 chủ ngữ thực hiện", "Hai hành động do 2 người khác nhau làm", "Chủ ngữ luôn là ngôi thứ nhất", "Không cần chủ ngữ"], correct: 0, exp: "[Độ khó: DỄ | Quy tắc] Chủ ngữ thực hiện V1 và V2 bắt buộc phải là một người." },
  { q: "Khi muốn liệt kê lý do dẫn đến quyết định mua nhà, ta dùng cấu trúc nào?", opts: ["〜し、〜し、それで〜", "〜ながら、〜ながら", "〜たり、〜たり", "〜ても、〜ても"], correct: 0, exp: "[Độ khó: DỄ | Mẫu câu] Liệt kê nhiều lý do dùng 〜し、〜し、それで." },
  { q: "Chọn câu viết đúng ngữ pháp:", opts: ["彼は 親切だし、頭も いいです。", "彼は 親切し、頭も いいです。", "彼は 親切なし、頭も いいです。", "彼は 親切でし、頭も いいです。"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tính từ na + だし] 親切だし." },
  { q: "Chọn câu diễn đạt thói quen:", opts: ["毎晩 本を 読んで います。", "毎晩 本を 読みました。", "毎晩 本を 読むでしょう。", "毎晩 本を 読みたいです。"], correct: 0, exp: "[Độ khó: DỄ | Thói quen đều đặn] 読んで います." },
  { q: "「息子は 大学に 通って います」nghĩa là gì?", opts: ["Con trai tôi đang theo học đại học", "Con trai tôi vừa tốt nghiệp đại học", "Con trai tôi muốn thi đại học", "Con trai tôi đang đi qua trường đại học"], correct: 0, exp: "[Độ khó: DỄ | 通う đi học thường xuyên] Đang đi học đại học." },
  { q: "「先生の 話を メモしながら 聞きました」nghĩa là:", opts: ["Vừa ghi chú vừa lắng nghe lời thầy giảng", "Nghe xong rồi mới ghi chú", "Ghi chú nhưng không nghe", "Không ghi chép được gì"], correct: 0, exp: "[Độ khó: DỄ | Vừa làm vừa nghe] メモしながら 聞きました." },
  { q: "「味」có nghĩa là gì?", opts: ["Mùi vị, hương vị món ăn", "Màu sắc", "Hình dáng", "Kích cỡ"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 味 (あじ) là mùi vị thức ăn." },
  { q: "「色」có nghĩa là gì?", opts: ["Màu sắc", "Hương vị", "Hình dạng", "Âm thanh"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 色 (いろ) là màu sắc." },
  { q: "「形」có nghĩa là gì?", opts: ["Hình dáng, kiểu dáng", "Màu sắc", "Chất liệu", "Kích thước"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 形 (かたち) là hình dạng." },
  { q: "Điền liên từ:「頭も 痛いし、熱も あるし、........ 今日は 休みます」", opts: ["それで", "それに", "しかし", "でも"], correct: 0, exp: "[Độ khó: DỄ | Kết quả vì thế] それで (vì thế cho nên)." },
  { q: "Điền liên từ:「彼女は 英語が 話せます。........、フランス語も 上手です」", opts: ["それに", "それで", "だから", "ですから"], correct: 0, exp: "[Độ khó: DỄ | Bổ sung thêm] それに (thêm vào đó)." },
  { q: "Động từ「選びます」thuộc nhóm mấy?", opts: ["Nhóm 1", "Nhóm 2", "Nhóm 3", "Động từ đặc biệt"], correct: 0, exp: "[Độ khó: DỄ | Nhóm động từ] えらびます tận cùng bằng び -> Nhóm 1." },
  { q: "Động từ「通います」thuộc nhóm mấy?", opts: ["Nhóm 1", "Nhóm 2", "Nhóm 3", "Động từ đặc biệt"], correct: 0, exp: "[Độ khó: DỄ | Nhóm động từ] かよいます tận cùng bằng い -> Nhóm 1." },
  { q: "Động từ「売れます」thuộc nhóm mấy?", opts: ["Nhóm 2", "Nhóm 1", "Nhóm 3", "Động từ bất quy tắc"], correct: 0, exp: "[Độ khó: DỄ | Nhóm động từ] うれます tận cùng cột え (れ) -> Nhóm 2." },
  { q: "Động từ「踊ります」thuộc nhóm mấy?", opts: ["Nhóm 1", "Nhóm 2", "Nhóm 3", "Động từ bất quy tắc"], correct: 0, exp: "[Độ khó: DỄ | Nhóm động từ] おどります tận cùng bằng り -> Nhóm 1." },
  { q: "Chọn câu chúc mừng công việc thành công:", opts: ["素晴らしいですね！", "残念ですね。", "失礼ですね。", "危ないですね。"], correct: 0, exp: "[Độ khó: DỄ | Khen ngợi] 素晴らしいですね (tuyệt vời quá nhỉ)." },
  { q: "「人気が あります」nghĩa là gì?", opts: ["Rất được mọi người yêu thích, mến mộ", "Có rất nhiều người", "Khí hậu ấm áp", "Có nhiều sinh khí"], correct: 0, exp: "[Độ khó: DỄ | Nghĩa cụm từ] 人気がある là được hâm mộ, ăn khách." },
  { q: "Câu nào sau đây sai quy tắc「ながら」?", opts: ["わたしが 歌いながら、彼が ピアノを 弾きます。", "わたしは 歌いながら、ピアノを 弾きます。", "お茶を 飲みながら、話しましょう。", "歩きながら、電話しては いけません。"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Sai vì khác chủ ngữ] ながら bắt buộc cùng một chủ ngữ, không thể 'tôi hát bạn đánh đàn'." },
  { q: "Chọn câu hoàn chỉnh tự giới thiệu thói quen:", opts: ["休みの日は いつも 家族と ドライブして います。", "休みの日は いつも 家族と ドライブしました。", "休みの日は いつも 家族と ドライブするでした。", "休みの日は いつも 家族と ドライブしますでした。"], correct: 0, exp: "[Độ khó: DỄ | Thói quen 〜ています] ドライブして います." },
  { q: "「給料も 高いし、休みも 多いし、いい 会社ですね」mang sắc thái gì?", opts: ["Khen ngợi toàn diện các mặt tích cực của công ty", "Chê bai công ty nhiều việc", "Nghi ngờ mức lương", "Bàn về giờ làm việc"], correct: 0, exp: "[Độ khó: DỄ | Đánh giá tích cực] Lương cao lại nhiều ngày nghỉ." },
  { q: "Khi dùng「〜し、〜し」với Danh từ ở khẳng định hiện tại, ta thêm gì?", opts: ["Thêm だ (N だ し)", "Thêm な", "Thêm の", "Giữ nguyên N"], correct: 0, exp: "[Độ khó: DỄ | Quy tắc Danh từ] Danh từ + だ + し (休みだし、日曜日だし)." },
  { q: "Tổng kết: Trọng tâm cốt lõi của Bài 28 là gì?", opts: ["Hành động song song (〜ながら) và liệt kê lý do (〜し、〜し)", "Chia thể sai khiến", "Mẫu câu tôn kính", "Đếm số tầng nhà"], correct: 0, exp: "[Độ khó: DỄ | Tổng kết bài 28] Hành động đồng thời ながら, thói quen ています và liệt kê lý do し." }
];

quizData["quiz-28"] = createQuestions(28, "pq28", q28_raw);

console.log(`Generated quiz-28 with ${quizData["quiz-28"].length} questions`);

// BÀI 29: Tự động từ (自動詞), N が V-ています, V-て しまいました
const q29_raw = [
  { q: "風で ドアが ........ います。(Cửa đang mở toang do gió)", opts: ["開いて", "開けて", "閉めて", "閉まって"], correct: 0, exp: "[Độ khó: DỄ | Tự động từ 開く] ドアが 開いています (cửa đang mở)." },
  { q: "窓が ........ います。(Cửa sổ đang đóng kín)", opts: ["閉まって", "閉めて", "開いて", "開けて"], correct: 0, exp: "[Độ khó: DỄ | Tự động từ 閉まる] 窓が 閉まっています." },
  { q: "電気が ........ います。(Đèn đang bật sáng)", opts: ["ついて", "つけて", "消えて", "消して"], correct: 0, exp: "[Độ khó: DỄ | Tự động từ つく] 電気が ついています." },
  { q: "エアコンが ........ います。(Điều hòa đang tắt)", opts: ["消えて", "消して", "ついて", "つけて"], correct: 0, exp: "[Độ khó: DỄ | Tự động từ 消える] エアコンが 消えています." },
  { q: "この 椅子は ........ います。(Cái ghế này đang bị gãy hỏng)", opts: ["壊れて", "壊して", "割れて", "折れて"], correct: 0, exp: "[Độ khó: DỄ | Tự động từ 壊れる] 椅子が 壊れています." },
  { q: "コップが 落っこちて、........ しまいました。(Chiếc cốc rơi vỡ toang)", opts: ["割れて", "割って", "壊れて", "折れて"], correct: 0, exp: "[Độ khó: DỄ | Đồ thủy tinh vỡ 割れる] コップが 割れて しまいました." },
  { q: "強い 風で 木の 枝が ........ います。(Cành cây bị gãy)", opts: ["折れて", "折って", "破れて", "割れて"], correct: 0, exp: "[Độ khó: DỄ | Cành cây gãy 折れる] 枝が 折れています." },
  { q: "袋が ........、中身が 出ました。(Chiếc túi bị rách)", opts: ["破れて", "破って", "壊れて", "割れて"], correct: 0, exp: "[Độ khó: DỄ | Giấy/túi rách 破れる] 袋が 破れて." },
  { q: "服が ........ いますから、洗います。(Quần áo bị lấm bẩn)", opts: ["汚れて", "汚して", "濡れて", "落ちて"], correct: 0, exp: "[Độ khó: DỄ | Bị bẩn 汚れる] 服が 汚れています." },
  { q: "シャツの ボタンが ........ います。(Cúc áo bị tuột ra)", opts: ["外れて", "外して", "取れて", "落ちて"], correct: 0, exp: "[Độ khó: DỄ | Tuột cúc 外れる] ボタンが 外れています." },
  { q: "電車に かばんを ........ しまいました。(Đã lỡ để quên túi trên tàu)", opts: ["忘れて", "落として", "無くして", "置いて"], correct: 0, exp: "[Độ khó: DỄ | Quên đồ 忘れる + しまいました] 忘れて しまいました." },
  { q: "パスポートを ........ しまいました。(Đã lỡ đánh mất hộ chiếu)", opts: ["なくして", "忘れて", "落として", "壊して"], correct: 0, exp: "[Độ khó: DỄ | Đánh mất なくす + しまいました] なくして しまいました." },
  { q: "宿題は もう 全部 ........ しまいました。(Đã hoàn thành toàn bộ bài tập)", opts: ["やって", "やり", "やりて", "やった"], correct: 0, exp: "[Độ khó: DỄ | Hoàn thành trọn vẹn V-てしまいました] やって しまいました." },
  { q: "どこかで 財布を ........ しまいました。(Đã đánh rơi ví ở đâu đó)", opts: ["落として", "落ちて", "なくして", "忘れて"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ đánh rơi 落とす] 財布を 落として しまいました." },
  { q: "車の 鍵が ........ います。(Cửa xe đang bị khóa)", opts: ["掛かって", "掛けて", "閉まって", "止まって"], correct: 0, exp: "[Độ khó: DỄ | Khóa tự động từ 掛かる] 鍵が 掛かって います." },
  { q: "道が ........ いますから、タクシーが 進みません。(Đường đang bị tắc nghẽn)", opts: ["込んで", "空いて", "止まって", "壊れて"], correct: 0, exp: "[Độ khó: DỄ | Tắc đường 込む] 道が 込んで います." },
  { q: "電車が ........ います。(Tàu đang dừng lại)", opts: ["止まって", "止めて", "立って", "休んで"], correct: 0, exp: "[Độ khó: DỄ | Tự động từ 止まる] 電車が 止まって います." },
  { q: "お皿を 洗って いて、一枚 ........ しまいました。(Lỡ làm vỡ một chiếc đĩa)", opts: ["割って", "割れて", "壊して", "折って"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tha động từ 割る] お皿を 割って しまいました." },
  { q: "この 本は もう 読んで ........。(Đã đọc xong xuôi cuốn sách này)", opts: ["しまいました", "ありました", "おきました", "みました"], correct: 0, exp: "[Độ khó: DỄ | Xong dứt điểm] 読んで しまいました." },
  { q: "大切な 約束を ........ しまいました。(Đã lỡ quên mất cuộc hẹn quan trọng)", opts: ["忘れて", "無くして", "落として", "消えて"], correct: 0, exp: "[Độ khó: DỄ | Hối tiếc] 忘れて しまいました." },
  { q: "Từ「お皿」có nghĩa là gì?", opts: ["Cái đĩa đựng thức ăn", "Cái bát ăn cơm", "Cái thìa muỗng", "Cái cốc"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng bài 29] お皿 (おさら) là cái đĩa." },
  { q: "Từ「お茶碗」có nghĩa là gì?", opts: ["Cái bát xới cơm", "Ấm trà", "Tách trà", "Đĩa lót"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] お茶碗 (おちゃわん) là cái bát cơm." },
  { q: "Từ「袋」có nghĩa là gì?", opts: ["Túi đựng, bao bì", "Hộp giấy", "Ví tiền", "Khăn tay"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 袋 (ふくろ) là túi đựng đồ." },
  { q: "Từ「枝」có nghĩa là gì?", opts: ["Cành cây", "Lá cây", "Gốc cây", "Bông hoa"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 枝 (えだ) là cành cây." },
  { q: "Từ「駅員」có nghĩa là gì?", opts: ["Nhân viên nhà ga", "Lái tàu", "Hành khách", "Bảo vệ"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 駅員 (えきいん) là nhân viên trực nhà ga." },
  { q: "Đâu là cặp Tự động từ - Tha động từ tương ứng?", opts: ["開く (tự) - 開ける (tha)", "開ける (tự) - 開く (tha)", "開く (tự) - 閉まる (tha)", "閉める (tự) - 閉まる (tha)"], correct: 0, exp: "[Độ khó: DỄ | Cặp động từ] ドアが 開く (tự) / ドアを 開ける (tha)." },
  { q: "Đâu là cặp Tự động từ - Tha động từ của 'đóng'?", opts: ["閉まる (tự) - 閉める (tha)", "閉める (tự) - 閉まる (tha)", "閉じる (tự) - 開く (tha)", "止まる (tự) - 止める (tha)"], correct: 0, exp: "[Độ khó: DỄ | Cặp động từ] 窓が 閉まる (tự) / 窓を 閉める (tha)." },
  { q: "Đâu là cặp Tự động từ - Tha động từ của 'bật đèn'?", opts: ["つく (tự) - つける (tha)", "つける (tự) - つく (tha)", "消える (tự) - つく (tha)", "つける (tự) - 消す (tha)"], correct: 0, exp: "[Độ khó: DỄ | Cặp động từ] 電気が つく (tự) / 電気を つける (tha)." },
  { q: "Đâu là cặp Tự động từ - Tha động từ của 'tắt đèn'?", opts: ["消える (tự) - 消す (tha)", "消す (tự) - 消える (tha)", "消える (tự) - 壊す (tha)", "消す (tự) - 止める (tha)"], correct: 0, exp: "[Độ khó: DỄ | Cặp động từ] 電気が 消える (tự) / 電気を 消す (tha)." },
  { q: "Đâu là cặp Tự động từ - Tha động từ của 'làm vỡ'?", opts: ["割れる (tự) - 割る (tha)", "割る (tự) - 割れる (tha)", "折れる (tự) - 折る (tha)", "壊れる (tự) - 壊す (tha)"], correct: 0, exp: "[Độ khó: DỄ | Cặp động từ] コップが 割れる (tự) / コップを 割る (tha)." },
  { q: "Cấu trúc「N が V-ています」(với tự động từ) diễn tả điều gì?", opts: ["Trạng thái kết quả hiện tại của sự vật", "Hành động đang tiếp diễn của con người", "Mục đích trong tương lai", "Khả năng của một người"], correct: 0, exp: "[Độ khó: DỄ | Ý nghĩa ngữ pháp] Diễn tả trạng thái hiện tại là kết quả của biến đổi trước đó." },
  { q: "Khi muốn đưa đồ vật lên làm chủ đề bàn luận, ta chuyển trợ từ が thành:", opts: ["は (この窓は 割れています)", "を", "に", "で"], correct: 0, exp: "[Độ khó: DỄ | Chủ đề hóa] この窓は 割れています (Cửa sổ này thì đang bị vỡ)." },
  { q: "Ý nghĩa thứ nhất của「V-て しまいました」là:", opts: ["Đã hoàn thành toàn bộ công việc một cách trọn vẹn", "Đang chuẩn bị làm", "Không muốn làm", "Bắt buộc phải làm"], correct: 0, exp: "[Độ khó: DỄ | Ý nghĩa hoàn tất] 全部 宿題を やってしまいました." },
  { q: "Ý nghĩa thứ hai của「V-て しまいました」là:", opts: ["Tâm trạng hối tiếc, ân hận vì lỡ xảy ra việc không mong muốn", "Vui mừng phấn khởi", "Tự hào hãnh diện", "Mỉa mai trêu chọc"], correct: 0, exp: "[Độ khó: DỄ | Ý nghĩa tiếc nuối] パスポートを なくしてしまいました." },
  { q: "Trong văn nói thân mật,「〜て しまいました」thường rút gọn thành:", opts: ["〜ちゃった / 〜じゃった", "〜とく", "〜なきゃ", "〜ちゃう"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Văn nói thân mật] 忘れちゃった (lỡ quên mất rồi)." },
  { q: "Điền từ:「電車が ........ しまいました。走っても 間に合いません」", opts: ["行って", "行きて", "行き", "行かない"], correct: 0, exp: "[Độ khó: DỄ | Tàu chạy mất tiêu] 行って しまいました." },
  { q: "Điền từ:「お酒を 全部 飲んで ........」", opts: ["しまいました", "ありました", "おきました", "いきました"], correct: 0, exp: "[Độ khó: DỄ | Uống sạch sành sanh] 飲んで しまいました." },
  { q: "Chọn câu nói tự nhiên khi phát hiện áo người đối diện bị bẩn:", opts: ["シャツが 汚れて いますよ。", "シャツを 汚しましたよ。", "シャツが 汚れましたよ。", "シャツを 汚して いますよ。"], correct: 0, exp: "[Độ khó: DỄ | Nhắc nhở trạng thái] シャツが 汚れていますよ." },
  { q: "Điền trợ từ:「ポケットから 鍵________ 落ちました」", opts: ["が", "を", "で", "に"], correct: 0, exp: "[Độ khó: DỄ | Tự động từ 落ちる] 鍵が 落ちました (chìa khóa tự rơi ra)." },
  { q: "Điền trợ từ:「階段で 携帯電話________ 落としました」", opts: ["を", "が", "に", "で"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ 落とす] 携帯電話を 落としました (đánh rơi điện thoại)." },
  { q: "Động từ「壊れます」thuộc nhóm mấy?", opts: ["Nhóm 2", "Nhóm 1", "Nhóm 3", "Đặc biệt"], correct: 0, exp: "[Độ khó: DỄ | Nhóm động từ] こわれます tận cùng cột え (れ) -> Nhóm 2." },
  { q: "Động từ「壊します」thuộc nhóm mấy?", opts: ["Nhóm 1", "Nhóm 2", "Nhóm 3", "Đặc biệt"], correct: 0, exp: "[Độ khó: DỄ | Nhóm động từ] こわします tận cùng す -> Nhóm 1." },
  { q: "Động từ「付きます」(dính, kèm theo) thuộc nhóm mấy?", opts: ["Nhóm 1", "Nhóm 2", "Nhóm 3", "Đặc biệt"], correct: 0, exp: "[Độ khó: DỄ | Nhóm động từ] つきます tận cùng き -> Nhóm 1." },
  { q: "Động từ「外れます」thuộc nhóm mấy?", opts: ["Nhóm 2", "Nhóm 1", "Nhóm 3", "Đặc biệt"], correct: 0, exp: "[Độ khó: DỄ | Nhóm động từ] はずれます tận cùng cột え (れ) -> Nhóm 2." },
  { q: "Chọn câu viết đúng trạng thái túi rách:", opts: ["紙袋が 破れて います。", "紙袋を 破れて います。", "紙袋が 破いて います。", "紙袋を 破れました。"], correct: 0, exp: "[Độ khó: DỄ | Trạng thái rách] 紙袋が 破れています." },
  { q: "Khi vào phòng thấy máy tính bị hỏng, ta nói:", opts: ["パソコンが 壊れて います。", "パソコンが 壊れましたです。", "パソコンを 壊しました。", "パソコンを 壊れて います。"], correct: 0, exp: "[Độ khó: DỄ | Trạng thái hỏng hóc] パソコンが 壊れています." },
  { q: "Cụm từ「お腹を こわします」nghĩa là gì?", opts: ["Bị đau bụng, rối loạn tiêu hóa", "Bị rách bụng", "Bị đói bụng", "Bị no căng"], correct: 0, exp: "[Độ khó: DỄ | Thành ngữ sức khỏe] お腹をこわす là bị tào tháo đuổi, đau bụng." },
  { q: "「財布を どこかで 落としました」Từ「どこかで」nghĩa là:", opts: ["Ở một nơi nào đó (không nhớ rõ cụ thể)", "Ở bất cứ đâu", "Ở khắp mọi nơi", "Không có ở đâu"], correct: 0, exp: "[Độ khó: DỄ | Từ nghi vấn + か] どこかで = ở đâu đó." },
  { q: "Cặp tự tha động từ của 'dừng lại' là:", opts: ["止まる (tự) - 止める (tha)", "止める (tự) - 止まる (tha)", "立つ (tự) - 立てる (tha)", "休む (tự) - 休める (tha)"], correct: 0, exp: "[Độ khó: DỄ | Cặp động từ] 車が 止まる / 車を 止める." },
  { q: "Tổng kết: Trọng tâm cốt lõi của Bài 29 là gì?", opts: ["Tự động từ miêu tả trạng thái (〜ています) và hành động hối tiếc (〜てしまいました)", "Thể khả năng", "Thể ý chí", "Thể bị động"], correct: 0, exp: "[Độ khó: DỄ | Tổng kết bài 29] Tự động từ chỉ trạng thái kết quả và hoàn thành/hối tiếc với てしまう." }
];

quizData["quiz-29"] = createQuestions(29, "pq29", q29_raw);

console.log(`Generated quiz-29 with ${quizData["quiz-29"].length} questions`);

// BÀI 30: Trạng thái có chủ đích (〜てあります), Chuẩn bị trước (〜ておきます)
const q30_raw = [
  { q: "壁に カレンダーが ........ あります。(Lịch đã được treo sẵn trên tường)", opts: ["かけて", "かかって", "かけ", "かけた"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ 掛ける + てあります] 壁に カレンダーが かけてあります." },
  { q: "黒板に 連絡事項が ........ あります。(Thông báo đã được viết sẵn trên bảng)", opts: ["書いて", "書かれて", "書き", "書く"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ 書く + てあります] 字が 書いてあります." },
  { q: "机の 上に メモが ........ あります。(Tờ ghi chú được đặt sẵn trên bàn)", opts: ["置いて", "置かれて", "置き", "置く"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ 置く + てあります] メモが 置いてあります." },
  { q: "部屋に きれいな 花が ........ あります。(Hoa đã được cắm trang trí sẵn)", opts: ["飾って", "飾られて", "飾り", "飾る"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ 飾る + てあります] 花が 飾ってあります." },
  { q: "壁に ポスターが ........ あります。(Áp phích đã được dán sẵn trên tường)", opts: ["貼って", "貼られて", "貼り", "貼る"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ 貼る + てあります] ポスターが 貼ってあります." },
  { q: "旅行の まえに、切符を ........ おきます。(Mua vé sẵn trước chuyến đi)", opts: ["買って", "買い", "買う", "買った"], correct: 0, exp: "[Độ khó: DỄ | Chuẩn bị trước V-ておきます] 切符を 買って おきます." },
  { q: "パーティーの まえに、部屋を ........ おきます。(Dọn dẹp phòng sẵn trước bữa tiệc)", opts: ["掃除して", "掃除し", "掃除する", "掃除した"], correct: 0, exp: "[Độ khó: DỄ | V-ておきます] 掃除して おきます." },
  { q: "会議の まえに、資料を ........ おきます。(Chuẩn bị sẵn tài liệu cuộc họp)", opts: ["コピーして", "コピーし", "コピーする", "コピーした"], correct: 0, exp: "[Độ khó: DỄ | V-ておきます] コピーして おきます." },
  { q: "使ったら、元の 所に ........ おいて ください。(Dùng xong hãy để lại chỗ cũ)", opts: ["戻して", "戻り", "戻す", "戻した"], correct: 0, exp: "[Độ khó: DỄ | Xử lý sau khi dùng V-ておきます] 元の 所に 戻して おいてください." },
  { q: "料理が 終わったら、包丁を ........ おいて ください。(Nấu xong hãy cất dao đi)", opts: ["しまって", "しまい", "しまう", "しまった"], correct: 0, exp: "[Độ khó: DỄ | Cất vào ngăn nắp] しまって おいてください." },
  { q: "まだ 使って いますから、そのままで ........ おいて ください。(Cứ để nguyên như vậy)", opts: ["して", "し", "する", "した"], correct: 0, exp: "[Độ khó: DỄ | Giữ nguyên hiện trạng] そのままに して おいてください." },
  { q: "あした 友達が 来ますから、ビールを 冷蔵庫で ........ おきます。(Ướp lạnh bia sẵn)", opts: ["冷やして", "冷えて", "冷やし", "冷やす"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ 冷やす + ておきます] 冷やして おきます." },
  { q: "まだ 雨が ........ います。(Trời vẫn còn đang mưa)", opts: ["降って", "降り", "降る", "降った"], correct: 0, exp: "[Độ khó: DỄ | まだ + V-ています] まだ 雨が 降っています." },
  { q: "授業の まえに、新しい 言葉を ........ おきます。(Học trước từ mới bài mới)", opts: ["予習して", "復習して", "勉強して", "練習して"], correct: 0, exp: "[Độ khó: DỄ | Chuẩn bị bài trước 予習] 予習して おきます." },
  { q: "授業の あとで、習った 漢字を ........ おきます。(Ôn lại bài cũ sau tiết học)", opts: ["復習して", "予習して", "確認して", "質問して"], correct: 0, exp: "[Độ khó: DỄ | Ôn bài cũ 復習] 復習して おきます." },
  { q: "来週の 予定は もう ........ ありますか。(Lịch trình đã được chốt sẵn chưa?)", opts: ["決めて", "決まって", "決め", "決める"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tha động từ 決める + てあります] 決めて ありますか." },
  { q: "テーブルの 上に グラスが ........ あります。(Ly đã được xếp sẵn trên bàn)", opts: ["並べて", "並んで", "並べ", "並べる"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Tha động từ 並べる + てあります] 並べて あります." },
  { q: "庭に きれいな 桜の 木が ........ あります。(Cây hoa anh đào được trồng sẵn trong vườn)", opts: ["植えて", "植えられて", "植え", "植える"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ 植える + てあります] 植えて あります." },
  { q: "ごみは ごみ箱に ........ おいて ください。(Rác hãy gom sẵn vào thùng)", opts: ["捨てて", "捨て", "捨てる", "捨てた"], correct: 0, exp: "[Độ khó: DỄ | V-ておきます] 捨てて おいてください." },
  { q: "パスポートは 引き出しに ........ あります。(Hộ chiếu đã cất sẵn trong ngăn kéo)", opts: ["しまって", "しまい", "しまう", "しまった"], correct: 0, exp: "[Độ khó: DỄ | Cất sẵn] しまって あります." },
  { q: "Từ「貼ります」có nghĩa là gì?", opts: ["Dán (áp phích, tem)", "Treo", "Trang trí", "Xếp hàng"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng bài 30] 貼ります (はります) là dán giấy, dán tem." },
  { q: "Từ「掛けます」trong「カレンダーを掛ける」nghĩa là gì?", opts: ["Treo (lịch, tranh lên tường)", "Khóa cửa", "Đeo kính", "Gọi điện thoại"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 掛けます (かけます) là treo lên móc, tường." },
  { q: "Từ「飾ります」có nghĩa là gì?", opts: ["Trang trí, bày biện cho đẹp", "Dọn dẹp", "Ném đi", "Sơn màu"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 飾ります (かざります) là trang trí, bày biện." },
  { q: "Từ「並べます」có nghĩa là gì?", opts: ["Xếp thành hàng ngay ngắn (tha động từ)", "Xếp hàng (tự)", "Thu gom lại", "Dán lên"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 並べます (ならべます) là sắp xếp thẳng hàng." },
  { q: "Từ「植えます」có nghĩa là gì?", opts: ["Trồng (cây cối, hoa quả)", "Tưới nước", "Chăm sóc", "Cắt tỉa"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 植えます (うえます) là trồng cây." },
  { q: "Từ「戻します」có nghĩa là gì?", opts: ["Để lại chỗ cũ, hoàn lại", "Quay trở về", "Lấy ra", "Bỏ đi"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 戻します (もどします) là đưa về vị trí ban đầu." },
  { q: "Từ「片づけます」có nghĩa là gì?", opts: ["Dọn dẹp, sắp xếp ngăn nắp", "Làm bẩn", "Vứt bỏ", "Cất giấu"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 片づけます (かたづけます) là dọn dẹp sạch sẽ." },
  { q: "Từ「しまいます」có nghĩa là gì?", opts: ["Cất vào bên trong tủ/ngăn kéo", "Lấy ra ngoài", "Khóa lại", "Làm vỡ"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] しまいます là cất đi, cất vào chỗ kín đáo." },
  { q: "Từ「予習します」có nghĩa là gì?", opts: ["Chuẩn bị trước bài mới ở nhà", "Ôn tập lại bài cũ", "Làm bài kiểm tra", "Đọc sách tham khảo"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng học tập] 予習します (よしゅうします) là soạn bài, chuẩn bị bài trước." },
  { q: "Từ「復習します」có nghĩa là gì?", opts: ["Ôn tập lại kiến thức bài đã học", "Học trước bài mới", "Thi học kỳ", "Nghỉ giải lao"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng học tập] 復習します (ふくしゅうします) là ôn tập lại bài cũ." },
  { q: "Phân biệt:「窓が 閉まっています」vs「窓が 閉めてあります」", opts: ["Câu 1 chỉ trạng thái đơn thuần; Câu 2 nhấn mạnh có người cố ý đóng vì mục đích nào đó", "Câu 1 có người đóng; Câu 2 tự đóng", "Hai câu hoàn toàn giống nhau 100%", "Câu 2 là câu bị động"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Phân biệt ている vs てある] てある nhấn mạnh kết quả của hành động có chủ ý của con người." },
  { q: "Động từ đi trước「〜てあります」bắt buộc phải là loại động từ nào?", opts: ["Tha động từ (他動詞)", "Tự động từ (自動詞)", "Động từ thể khả năng", "Động từ chỉ trạng thái"], correct: 0, exp: "[Độ khó: DỄ | Quy tắc ngữ pháp] Bắt buộc là Tha động từ đi với trợ từ が: N が V-他動詞-てあります." },
  { q: "Trong câu「壁に ポスターが 貼ってあります」, tân ngữ đi với trợ từ nào?", opts: ["が", "を", "に", "で"], correct: 0, exp: "[Độ khó: DỄ | Trợ từ] Trong mẫu 〜てあります, đối tượng đi với trợ từ が: ポスターが." },
  { q: "Khi nói tắt thân mật,「買っておく」thành:", opts: ["買っとく", "買いとく", "買うとく", "買ったとく"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Văn nói thân mật] ておく biến thành とく: 買っとく." },
  { q: "Khi nói tắt thân mật,「読んでおく」thành:", opts: ["読んどく", "読みとく", "読んどく", "読んだとく"], correct: 0, exp: "[Độ khó: TRUNG BÌNH | Văn nói thân mật] でおく biến thành どく: 読んどく." },
  { q: "Mẫu câu「〜ておきます」có mấy ý nghĩa chính trong bài 30?", opts: ["3 ý nghĩa: Chuẩn bị trước, Xử lý sau khi dùng, Giữ nguyên hiện trạng", "Chỉ có 1 ý nghĩa duy nhất", "2 ý nghĩa", "4 ý nghĩa"], correct: 0, exp: "[Độ khó: DỄ | Tổng kết ngữ pháp] 3 ý nghĩa: làm trước chuẩn bị, hoàn trả sau khi dùng, và duy trì hiện trạng." },
  { q: "Điền từ:「ハサミを 使ったら、元の 引き出しに ........ おいてね」", opts: ["戻して", "戻り", "戻す", "戻した"], correct: 0, exp: "[Độ khó: DỄ | Hoàn trả về chỗ cũ] 戻して おいてね." },
  { q: "Điền từ:「窓を 開けたままに ........ おいて ください」", opts: ["して", "し", "する", "した"], correct: 0, exp: "[Độ khó: DỄ | Cứ để nguyên cửa mở] して おいてください." },
  { q: "Từ「お知らせ」có nghĩa là gì?", opts: ["Thông báo, thông cáo tin tức", "Lời mời", "Lời cảm ơn", "Lời xin lỗi"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] お知らせ (おしらせ) là thông báo." },
  { q: "Từ「案内書」có nghĩa là gì?", opts: ["Sách hướng dẫn, tập san thông tin", "Hộ chiếu", "Bản đồ", "Sổ tay"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 案内書 (あんないしょ) là sách hướng dẫn, tờ rơi chỉ dẫn." },
  { q: "Từ「ごみ箱」có nghĩa là gì?", opts: ["Thùng rác", "Hộp bút", "Tủ quần áo", "Túi xách"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] ごみ箱 (ごみばこ) là thùng đựng rác." },
  { q: "Từ「予定表」có nghĩa là gì?", opts: ["Bảng lịch trình dự kiến", "Bảng chữ cái", "Bảng điểm", "Bảng giá tiền"], correct: 0, exp: "[Độ khó: DỄ | Từ vựng] 予定表 (よていひょう) là bảng kế hoạch, lịch trình." },
  { q: "Chọn câu viết đúng trạng thái bàn ăn đã dọn sẵn:", opts: ["テーブルに 料理が 並べて あります。", "テーブルに 料理を 並べて あります。", "テーブルに 料理が 並んで あります。", "テーブルに 料理を 並びて あります。"], correct: 0, exp: "[Độ khó: DỄ | 並べる + てあります] 料理が 並べてあります." },
  { q: "Chọn câu chuẩn bị trước cho kỳ thi:", opts: ["試験の まえに、しっかり 勉強して おきます。", "試験の まえに、しっかり 勉強して あります。", "試験の まえに、しっかり 勉強して しまいました。", "試験の まえに、しっかり 勉強して いました。"], correct: 0, exp: "[Độ khó: DỄ | Chuẩn bị trước] 勉強して おきます." },
  { q: "「会議室の 鍵は どこですか」ー 「あそこに ........ ありますよ」", opts: ["掛けて", "掛かって", "掛け", "掛ける"], correct: 0, exp: "[Độ khó: DỄ | Treo sẵn] 掛けて ありますよ." },
  { q: "「まだ 書類を 読んで いますか」ー 「いいえ、もう ........」", opts: ["読みました", "読んで あります", "読んで おきます", "読みません"], correct: 0, exp: "[Độ khó: DỄ | Hoàn tất trong quá khứ] いいえ、もう 読みました (xong rồi)." },
  { q: "Điền trợ từ:「カレンダーは 壁________ かけてあります」", opts: ["に", "で", "を", "が"], correct: 0, exp: "[Độ khó: DỄ | Nơi chốn tồn tại trạng thái] 壁に (trên tường)." },
  { q: "Điền trợ từ:「明日の 会議の 資料________ 準備して おきます」", opts: ["を", "が", "に", "で"], correct: 0, exp: "[Độ khó: DỄ | Tha động từ trong ておきます] 資料を 準備しておきます." },
  { q: "Chọn câu giữ nguyên tình trạng đèn phòng họp:", opts: ["会議室の 電気を つけたままに して おいてください。", "会議室の 電気を つけて あります。", "会議室の 電気を ついて います。", "会議室の 電気が 消えて おきます。"], correct: 0, exp: "[Độ khó: DỄ | Giữ nguyên hiện trạng] つけたままに して おいてください." },
  { q: "Tổng kết: Trọng tâm cốt lõi của Bài 30 là gì?", opts: ["Trạng thái có chủ ý (〜てあります) và Hành động chuẩn bị sẵn (〜ておきます)", "Thể khả năng", "Liệt kê lý do", "Bị động"], correct: 0, exp: "[Độ khó: DỄ | Tổng kết bài 30] Trạng thái có chủ đích 〜てあります và sự chuẩn bị trước 〜ておきます." }
];

quizData["quiz-30"] = createQuestions(30, "pq30", q30_raw);

console.log(`Generated quiz-30 with ${quizData["quiz-30"].length} questions`);

// Save to data/quizzes_26_30.js
const fileContent = `// Quizzes for Lessons 26 to 30 (Minna no Nihongo N4)
const quizzes_26_30 = ${JSON.stringify(quizData, null, 2)};
`;

fs.writeFileSync('data/quizzes_26_30.js', fileContent, 'utf8');
console.log('Successfully written data/quizzes_26_30.js with 250 questions!');
