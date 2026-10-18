const fs = require('fs');

const lessons_36_40 = [
  // BÀI 36
  {
    "id": "bai-36",
    "title": "Bài 36: Mục Đích Với 〜ように & Thay Đổi Thói Quen 〜ようになる",
    "level": "Minna no Nihongo N4 (Bài 36)",
    "badge": "Mục đích & Thay đổi",
    "description": "Biểu thị mục đích không mang ý chí với V-る / V-ない + ように, diễn tả sự biến đổi khả năng trạng thái với 〜ようになりました, và duy trì thói quen với 〜ように して います.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>届<rt>とど</rt></ruby>きます</span>",
        "hiragana": "とどきます",
        "meaning": "Được gửi đến, chuyển đến (hàng hóa - 荷物が〜)",
        "type": "Động từ nhóm 1",
        "example": "荷物が 届きました。(Hàng hóa đã được giao đến nơi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>貯金<rt>ちょきん</rt></ruby>します</span>",
        "hiragana": "ちょきんします",
        "meaning": "Tiết kiệm tiền, gửi tiền tiết kiệm",
        "type": "Động từ nhóm 3",
        "example": "将来の ために 貯金します。(Tiết kiệm tiền cho tương lai.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>太<rt>ふと</rt></ruby>ります</span>",
        "hiragana": "ふとります",
        "meaning": "Béo lên, tăng cân",
        "type": "Động từ nhóm 1",
        "example": "最近 少し 太りました。(Dạo này hơi béo lên một chút.)"
      },
      {
        "kanji": "やせます",
        "hiragana": "やせます",
        "meaning": "Gầy đi, giảm cân",
        "type": "Động từ nhóm 2",
        "example": "運動して やせました。(Tập thể dục nên đã gầy đi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>過<rt>す</rt></ruby>ぎます</span>",
        "hiragana": "すぎます",
        "meaning": "Quá giờ, quá giới hạn (7時を〜)",
        "type": "Động từ nhóm 2",
        "example": "約束の 時間を 過ぎました。(Đã quá giờ hẹn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>慣<rt>な</rt></ruby>れます</span>",
        "hiragana": "なれます",
        "meaning": "Quen với (cuộc sống, công việc - đi với に)",
        "type": "Động từ nhóm 2",
        "example": "日本の 生活に 慣れました。(Đã quen với cuộc sống ở Nhật.)"
      },
      {
        "kanji": "かたい",
        "hiragana": "かたい",
        "meaning": "Cứng, rắn chắc",
        "type": "Tính từ (i)",
        "example": "かたい パン (Bánh mì cứng)"
      },
      {
        "kanji": "やわらかい",
        "hiragana": "やわらかい",
        "meaning": "Mềm mại, dẻo",
        "type": "Tính từ (i)",
        "example": "やわらかい 肉 (Thịt mềm)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>工場<rt>こうじょう</rt></ruby></span>",
        "hiragana": "こうじょう",
        "meaning": "Nhà máy, công xưởng",
        "type": "Danh từ",
        "example": "自動車の 工場 (Nhà máy sản xuất ô tô)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>健康<rt>けんこう</rt></ruby></span>",
        "hiragana": "けんこう",
        "meaning": "Sức khỏe",
        "type": "Danh từ",
        "example": "健康に 気を つけます。(Chú ý giữ gìn sức khỏe.)"
      },
      {
        "kanji": "やっと",
        "hiragana": "やっと",
        "meaning": "Cuối cùng thì (sau bao nỗ lực)",
        "type": "Phó từ",
        "example": "やっと 自転車に 乗れるように なりました。(Cuối cùng tôi cũng đã đi được xe đạp.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>必<rt>かなら</rt></ruby>ず</span>",
        "hiragana": "かならず",
        "meaning": "Nhất định (chắc chắn sẽ làm)",
        "type": "Phó từ",
        "example": "必ず 宿題を やります。(Nhất định tôi sẽ làm bài tập.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>絶対<rt>ぜったい</rt></ruby>に</span>",
        "hiragana": "ぜったいに",
        "meaning": "Tuyệt đối không bao giờ",
        "type": "Phó từ",
        "example": "絶対に 忘れません。(Tuyệt đối sẽ không quên.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-る / V-ない + ように、〜 (Để mà - Mục đích không ý chí)",
        "explanation": "Dùng để biểu thị mục đích mà hành động hướng tới. Động từ ở vế trước là động từ không mang ý chí (động từ thể khả năng, tự động từ hoặc thể phủ định V-ない).",
        "caution": "Khác với 〜ために (vế 1 là động từ mang ý chí của con người), 〜ように dùng với động từ thể khả năng hoặc phủ định.",
        "examples": [
          {
            "type": "sentence",
            "context": "Ghi chú để không quên",
            "jp": "<span class=\"furigana\"><ruby>忘<rt>わす</rt></ruby>れない</span>ように、メモを しておきます。",
            "rawJp": "忘れないように、メモをしておきます。",
            "vi": "Tôi ghi chép lại sẵn để không bị quên."
          }
        ]
      },
      {
        "structure": "2. V-る + ように なりました (Biến đổi trạng thái/khả năng)",
        "explanation": "Diễn tả sự thay đổi từ trạng thái không thể làm được sang trạng thái có thể làm được hoặc hình thành thói quen mới.",
        "caution": "Thường đi kèm với động từ thể khả năng (話せるように なりました).",
        "examples": [
          {
            "type": "sentence",
            "context": "Sau một thời gian học đã nói được tiếng Nhật",
            "jp": "<span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>が <span class=\"furigana\"><ruby>話<rt>はな</rt></ruby>せるように</span> なりました。",
            "rawJp": "日本語が話せるようになりました。",
            "vi": "Tôi đã có thể nói được tiếng Nhật rồi."
          }
        ]
      },
      {
        "structure": "3. V-る / V-ない + ように して います (Cố gắng duy trì thói quen)",
        "explanation": "Diễn tả sự nỗ lực, cố gắng thực hiện hoặc kiêng cữ một hành động nào đó đều đặn như một thói quen.",
        "caution": "Văn khuyên nhủ thường dùng 〜ように して ください.",
        "examples": [
          {
            "type": "sentence",
            "context": "Cố gắng uống nhiều nước mỗi ngày",
            "jp": "<span class=\"furigana\"><ruby>毎日<rt>まいにち</rt></ruby></span> <span class=\"furigana\"><ruby>水<rt>みず</rt></ruby></span>を たくさん <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>むように</span> して います。",
            "rawJp": "毎日水をたくさん飲むようにしています。",
            "vi": "Mỗi ngày tôi đều cố gắng uống thật nhiều nước."
          }
        ]
      }
    ]
  },

  // BÀI 37
  {
    "id": "bai-37",
    "title": "Bài 37: Thể Bị Động (受身形: うけみけい)",
    "level": "Minna no Nihongo N4 (Bài 37)",
    "badge": "Thể bị động",
    "description": "Cách chia và sử dụng Thể bị động (受身形: 書かれる、褒められる、叱られる), bị động trực tiếp, bị động gián tiếp chịu tổn thất (〜に〜を 盗まれました), và bị động sáng tạo (〜によって).",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>褒<rt>ほ</rt></ruby>めます</span>",
        "hiragana": "ほめます",
        "meaning": "Khen ngợi, tán dương",
        "type": "Động từ nhóm 2",
        "example": "先生に 褒められました。(Được thầy giáo khen ngợi.)"
      },
      {
        "kanji": "しかります",
        "hiragana": "しかります",
        "meaning": "Mắng mỏ, la rầy",
        "type": "Động từ nhóm 1",
        "example": "母に しかられました。(Bị mẹ mắng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>誘<rt>さそ</rt></ruby>います</span>",
        "hiragana": "さそいます",
        "meaning": "Rủ rê, mời đi chơi",
        "type": "Động từ nhóm 1",
        "example": "友だちに 映画に 誘われました。(Được bạn rủ đi xem phim.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>招待<rt>しょうたい</rt></ruby>します</span>",
        "hiragana": "しょうたいします",
        "meaning": "Mời tiệc, chiêu đãi",
        "type": "Động từ nhóm 3",
        "example": "パーティーに 招待されました。(Được mời đến bữa tiệc.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>頼<rt>たの</rt></ruby>みます</span>",
        "hiragana": "たのみます",
        "meaning": "Nhờ vả, yêu cầu",
        "type": "Động từ nhóm 1",
        "example": "仕事を 頼まれました。(Được nhờ làm công việc.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>踏<rt>ふ</rt></ruby>みます</span>",
        "hiragana": "ふみます",
        "meaning": "Giẫm lên, đạp lên (chân - 足を〜)",
        "type": "Động từ nhóm 1",
        "example": "電車で 足を 踏まれました。(Bị giẫm lên chân trên tàu điện.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>汚<rt>よご</rt></ruby>します</span>",
        "hiragana": "よごします",
        "meaning": "Làm bẩn (tha động từ)",
        "type": "Động từ nhóm 1",
        "example": "服を 汚されました。(Bị người khác làm bẩn áo.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>行<rt>おこな</rt></ruby>います</span>",
        "hiragana": "おこないます",
        "meaning": "Tổ chức, tiến hành",
        "type": "Động từ nhóm 1",
        "example": "会議が 行われます。(Cuộc họp được tổ chức.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>輸出<rt>ゆしゅつ</rt></ruby>します</span>",
        "hiragana": "ゆしゅつします",
        "meaning": "Xuất khẩu",
        "type": "Động từ nhóm 3",
        "example": "車を 輸出します。(Xuất khẩu xe ô tô.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>輸入<rt>ゆにゅう</rt></ruby>します</span>",
        "hiragana": "ゆにゅうします",
        "meaning": "Nhập khẩu",
        "type": "Động từ nhóm 3",
        "example": "石油を 輸入します。(Nhập khẩu dầu mỏ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>翻訳<rt>ほんやく</rt></ruby>します</span>",
        "hiragana": "ほんやくします",
        "meaning": "Dịch văn bản, biên dịch",
        "type": "Động từ nhóm 3",
        "example": "本を ベトナム語に 翻訳します。(Dịch sách sang tiếng Việt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>発明<rt>はつめい</rt></ruby>します</span>",
        "hiragana": "はつめいします",
        "meaning": "Phát minh",
        "type": "Động từ nhóm 3",
        "example": "電話が 発明されました。(Điện thoại đã được phát minh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>発見<rt>はっけん</rt></ruby>します</span>",
        "hiragana": "はっけんします",
        "meaning": "Phát hiện, tìm ra",
        "type": "Động từ nhóm 3",
        "example": "新しい 星を 発見しました。(Phát hiện ra ngôi sao mới.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>泥棒<rt>どろぼう</rt></ruby></span>",
        "hiragana": "どろぼう",
        "meaning": "Kẻ trộm, kẻ cắp",
        "type": "Danh từ",
        "example": "泥棒に 入られました。(Bị trộm đột nhập vào nhà.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>警官<rt>けいかん</rt></ruby></span>",
        "hiragana": "けいかん",
        "meaning": "Cảnh sát viên",
        "type": "Danh từ",
        "example": "警官に 助けられました。(Được cảnh sát giúp đỡ.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Cách chia Động từ Thể bị động (受身形)",
        "explanation": "• Nhóm 1: Chuyển âm cuối cột [u] sang cột [a] + れる (書く -> 書かれる、話す -> 話される、叱る -> 叱られる).\n• Nhóm 2: Bỏ る thêm られる (褒める -> 褒められる、食べる -> 食べられる).\n• Nhóm 3: くる -> こられる, する -> される.",
        "caution": "Người thực hiện hành vi tác động lên chủ ngữ đi với trợ từ に (Aは Bに V-受身).",
        "examples": [
          {
            "type": "sentence",
            "context": "Được giáo viên khen ngợi",
            "jp": "わたしは <span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>に <span class=\"furigana\"><ruby>褒<rt>ほ</rt></ruby>められました</span>。",
            "rawJp": "わたしは先生に褒められました。",
            "vi": "Tôi đã được thầy giáo khen ngợi."
          }
        ]
      },
      {
        "structure": "2. Bị động gián tiếp (Chịu thiệt hại: Aは Bに Nを V-受身)",
        "explanation": "Chủ ngữ A chịu tổn thất, phiền toái khi người B thực hiện hành động lên đồ vật/vật sở hữu N của A.",
        "caution": "Tân ngữ N vẫn đi với trợ từ を (泥棒に 財布を 盗まれました).",
        "examples": [
          {
            "type": "sentence",
            "context": "Bị trộm lấy mất ví",
            "jp": "わたしは <span class=\"furigana\"><ruby>泥棒<rt>どろぼう</rt></ruby></span>に <span class=\"furigana\"><ruby>財布<rt>さいふ</rt></ruby></span>を <span class=\"furigana\"><ruby>盗<rt>ぬす</rt></ruby>まれました</span>。",
            "rawJp": "わたしは泥棒に財布を盗まれました。",
            "vi": "Tôi đã bị kẻ trộm lấy cắp mất ví tiền."
          }
        ]
      },
      {
        "structure": "3. N (vật) は [Tác giả] によって V-受身 (Được sáng tạo bởi)",
        "explanation": "Khi chủ ngữ là công trình, tác phẩm nghệ thuật, phát minh thì người sáng tạo/tác giả đi với によって thay cho に.",
        "caution": "Thường dùng với các động từ: 書かれる (được viết), 発明される (được phát minh), 建てられる (được xây dựng).",
        "examples": [
          {
            "type": "sentence",
            "context": "Điện thoại được phát minh bởi Bell",
            "jp": "<span class=\"furigana\"><ruby>電話<rt>でんわ</rt></ruby></span>は ベルに よって <span class=\"furigana\"><ruby>発明<rt>はつめい</rt></ruby>されました</span>。",
            "rawJp": "電話はベルによって発明されました。",
            "vi": "Điện thoại được phát minh bởi Alexander Graham Bell."
          }
        ]
      }
    ]
  },

  // BÀI 38
  {
    "id": "bai-38",
    "title": "Bài 38: Danh Từ Hóa Động Từ Bằng の (〜のは / 〜のを)",
    "level": "Minna no Nihongo N4 (Bài 38)",
    "badge": "Danh từ hóa の",
    "description": "Biến mệnh đề động từ thành cụm danh từ bằng trợ từ の: V-る のは [Tính từ] です, V-る のを 忘れました (quên làm gì), V-る のを 知っていますか, và cấu trúc nhấn mạnh 〜のは N です.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>育<rt>そだ</rt></ruby>てます</span>",
        "hiragana": "そだてます",
        "meaning": "Nuôi nấng, chăm sóc (con cái, hoa màu)",
        "type": "Động từ nhóm 2",
        "example": "子どもを 育てます。(Nuôi dạy con cái.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>運<rt>はこ</rt></ruby>びます</span>",
        "hiragana": "はこびます",
        "meaning": "Vận chuyển, mang vác",
        "type": "Động từ nhóm 1",
        "example": "荷物を 運びます。(Vận chuyển hành lý.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>亡<rt>な</rt></ruby>くなります</span>",
        "hiragana": "なくなります",
        "meaning": "Qua đời, mất (cách nói lịch sự)",
        "type": "Động từ nhóm 1",
        "example": "祖父が 亡くなりました。(Ông tôi đã qua đời.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>入院<rt>にゅういん</rt></ruby>します</span>",
        "hiragana": "にゅういんします",
        "meaning": "Nhập viện (đi với に)",
        "type": "Động từ nhóm 3",
        "example": "病院に 入院します。(Nhập viện điều trị.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>退院<rt>たいいん</rt></ruby>します</span>",
        "hiragana": "たいいんします",
        "meaning": "Xuất viện (rời viện - đi với を)",
        "type": "Động từ nhóm 3",
        "example": "来週 病院を 退院します。(Tuần sau sẽ xuất viện.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>入<rt>い</rt></ruby>れます</span>",
        "hiragana": "いれます",
        "meaning": "Bật công tắc điện (電源を〜)",
        "type": "Động từ nhóm 2",
        "example": "電源を 入れます。(Bật nguồn điện.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>切<rt>き</rt></ruby>ります</span>",
        "hiragana": "きります",
        "meaning": "Tắt ngắt công tắc điện (電源を〜)",
        "type": "Động từ nhóm 1",
        "example": "電源を 切ります。(Ngắt nguồn điện.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>赤<rt>あか</rt></ruby>ちゃん</span>",
        "hiragana": "あかちゃん",
        "meaning": "Em bé sơ sinh",
        "type": "Danh từ",
        "example": "赤ちゃんが 生まれました。(Em bé đã chào đời.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>海岸<rt>かいがん</rt></ruby></span>",
        "hiragana": "かいがん",
        "meaning": "Bờ biển, bãi biển",
        "type": "Danh từ",
        "example": "海岸を 散歩します。(Đi dạo ven bờ biển.)"
      },
      {
        "kanji": "うそ",
        "hiragana": "うそ",
        "meaning": "Lời nói dối",
        "type": "Danh từ",
        "example": "うそを ついては いけません。(Không được nói dối.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>書類<rt>しょるい</rt></ruby></span>",
        "hiragana": "しょるい",
        "meaning": "Giấy tờ tài liệu",
        "type": "Danh từ",
        "example": "大切な 書類 (Tài liệu quan trọng)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>電源<rt>でんげん</rt></ruby></span>",
        "hiragana": "でんげん",
        "meaning": "Nguồn điện, công tắc nguồn",
        "type": "Danh từ",
        "example": "電源ボタン (Nút nguồn)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-る のは [Tính từ] です (Danh từ hóa làm chủ ngữ)",
        "explanation": "Động từ thể từ điển đi với の đóng vai trò như một danh từ làm chủ ngữ trong câu, biểu thị đánh giá tính chất của hành động.",
        "caution": "Tính từ thường gặp: おもしろい、難しい、楽しい、危ない、大変だ.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhận xét việc chơi quần vợt",
            "jp": "テニスを <span class=\"furigana\"><ruby>する<rt>する</rt></ruby></span>のは おもしろいです。",
            "rawJp": "テニスをするのはおもしろいです。",
            "vi": "Việc chơi quần vợt rất thú vị."
          }
        ]
      },
      {
        "structure": "2. V-る のを 忘れました (Quên làm việc gì)",
        "explanation": "Dùng để diễn tả việc người nói đã quên mất một hành động nào đó đáng lẽ phải làm.",
        "caution": "Mệnh đề trước の chia ở thể từ điển V-る (không chia quá khứ).",
        "examples": [
          {
            "type": "sentence",
            "context": "Quên khóa cửa phòng",
            "jp": "かぎを <span class=\"furigana\"><ruby>掛<rt>か</rt></ruby>ける</span>のを <span class=\"furigana\"><ruby>忘<rt>わす</rt></ruby>れました</span>。",
            "rawJp": "かぎを掛けるのを忘れました。",
            "vi": "Tôi đã quên khóa cửa phòng rồi."
          }
        ]
      },
      {
        "structure": "3. [Thể thông thường] のは N です (Nhấn mạnh trọng tâm)",
        "explanation": "Dùng để nhấn mạnh danh từ N (thời gian, địa điểm, con người, lý do).",
        "caution": "Tính từ đuôi な và Danh từ ở hiện tại đổi だ thành な trước のは (好きなのは、有名なのは).",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhấn mạnh nơi sinh ra",
            "jp": "わたしが <span class=\"furigana\"><ruby>生<rt>う</rt></ruby>まれた</span>のは ベトナムの ハノイです。",
            "rawJp": "わたしが生まれたのはベトナムのハノイです。",
            "vi": "Nơi tôi sinh ra chính là thủ đô Hà Nội, Việt Nam."
          }
        ]
      }
    ]
  },

  // BÀI 39
  {
    "id": "bai-39",
    "title": "Bài 39: Nguyên Nhân & Lý Do Với 〜て / 〜で / 〜ので",
    "level": "Minna no Nihongo N4 (Bài 39)",
    "badge": "Nguyên nhân lý do",
    "description": "Biểu thị nguyên nhân dẫn đến trạng thái tâm lý, cảm xúc hoặc biến cố bất khả kháng với V-て / V-なくて / A-くて / Na-で, và nguyên nhân khách quan lịch sự với 〜ので.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>答<rt>こた</rt></ruby>えます</span>",
        "hiragana": "こたえます",
        "meaning": "Trả lời (câu hỏi - 質問に〜)",
        "type": "Động từ nhóm 2",
        "example": "質問に 答えます。(Trả lời câu hỏi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>倒<rt>たお</rt></ruby>れます</span>",
        "hiragana": "たおれます",
        "meaning": "Đổ, sụp đổ (tự động từ, tòa nhà sụp)",
        "type": "Động từ nhóm 2",
        "example": "地震で ビルが 倒れました。(Vì động đất nên tòa nhà bị sập.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>通<rt>とお</rt></ruby>ります</span>",
        "hiragana": "とおれます",
        "meaning": "Đi qua, chạy qua (con đường - 道を〜)",
        "type": "Động từ nhóm 1",
        "example": "道を 通ります。(Đi qua con đường.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>死<rt>し</rt></ruby>にます</span>",
        "hiragana": "しにます",
        "meaning": "Chết, qua đời",
        "type": "Động từ nhóm 1",
        "example": "犬が 死にました。(Con chó đã chết.)"
      },
      {
        "kanji": "びっくりします",
        "hiragana": "びっくりします",
        "meaning": "Giật mình, kinh ngạc bất ngờ",
        "type": "Động từ nhóm 3",
        "example": "大きな 音に びっくりしました。(Giật mình vì tiếng động lớn.)"
      },
      {
        "kanji": "がっかりします",
        "hiragana": "がっかりします",
        "meaning": "Thất vọng, nản lòng chán nản",
        "type": "Động từ nhóm 3",
        "example": "試験に 落ちて がっかりしました。(Thi trượt nên rất thất vọng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>安心<rt>あんしん</rt></ruby>します</span>",
        "hiragana": "あんしんします",
        "meaning": "Yên tâm, thanh thản",
        "type": "Động từ nhóm 3",
        "example": "家族の 顔を 見て 安心しました。(Nhìn thấy mặt gia đình tôi thấy rất yên tâm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>遅刻<rt>ちこく</rt></ruby>します</span>",
        "hiragana": "ちこくします",
        "meaning": "Đến muộn, trễ giờ",
        "type": "Động từ nhóm 3",
        "example": "授業に 遅刻しました。(Đến muộn giờ học.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>早退<rt>そうたい</rt></ruby>します</span>",
        "hiragana": "そうたいします",
        "meaning": "Về sớm trước giờ quy định",
        "type": "Động từ nhóm 3",
        "example": "体調が 悪くて 早退しました。(Người khó chịu nên tôi xin về sớm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>複雑<rt>ふくざつ</rt></ruby>な</span>",
        "hiragana": "ふくざつな",
        "meaning": "Phức tạp, rắc rối",
        "type": "Tính từ (na)",
        "example": "複雑な 問題 (Vấn đề phức tạp)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>邪魔<rt>じゃま</rt></ruby>な</span>",
        "hiragana": "じゃまな",
        "meaning": "Cản trở, vướng víu",
        "type": "Tính từ (na)",
        "example": "荷物が 邪魔です。(Hành lý cản trở lối đi.)"
      },
      {
        "kanji": "うれしい",
        "hiragana": "うれしい",
        "meaning": "Vui mừng, hạnh phúc",
        "type": "Tính từ (i)",
        "example": "合格して うれしいです。(Đỗ kỳ thi tôi rất vui mừng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>悲<rt>かな</rt></ruby>しい</span>",
        "hiragana": "かなしい",
        "meaning": "Buồn bã, đau lòng",
        "type": "Tính từ (i)",
        "example": "友だちと 別れて 悲しいです。(Chia tay bạn bè tôi thấy rất buồn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>恥<rt>は</rt></ruby>ずかしい</span>",
        "hiragana": "はずかしい",
        "meaning": "Xấu hổ, ngượng ngùng",
        "type": "Tính từ (i)",
        "example": "間違えて 恥ずかしいです。(Nói nhầm nên tôi rất xấu hổ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>地震<rt>じしん</rt></ruby></span>",
        "hiragana": "じしん",
        "meaning": "Trận động đất",
        "type": "Danh từ",
        "example": "地震が 起きました。(Động đất đã xảy ra.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>台風<rt>たいふう</rt></ruby></span>",
        "hiragana": "たいふう",
        "meaning": "Cơn bão nhiệt đới",
        "type": "Danh từ",
        "example": "台風が 来ます。(Bão sắp đến.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>火事<rt>かじ</rt></ruby></span>",
        "hiragana": "かじ",
        "meaning": "Hỏa hoạn, vụ cháy",
        "type": "Danh từ",
        "example": "火事に 気を つけます。(Cẩn thận củi lửa đề phòng cháy nổ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>事故<rt>じこ</rt></ruby></span>",
        "hiragana": "じこ",
        "meaning": "Tai nạn giao thông",
        "type": "Danh từ",
        "example": "交通事故 (Tai nạn giao thông)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-て / V-なくて / A-くて / Na-で (Nguyên nhân tâm lý, biến cố)",
        "explanation": "Diễn tả nguyên nhân dẫn đến các kết quả ở vế sau như: cảm xúc tâm lý (びっくりする、うれしい、安心する), tình huống bất khả kháng (行けない、遅れる).",
        "caution": "Vế sau KHÔNG được chứa câu mang ý chí, mệnh lệnh hay nhờ vả.",
        "examples": [
          {
            "type": "sentence",
            "context": "Tin tức bất ngờ",
            "jp": "ニュースを <span class=\"furigana\"><ruby>聞<rt>き</rt></ruby>いて</span>、びっくりしました。",
            "rawJp": "ニュースを聞いて、びっくりしました。",
            "vi": "Nghe bản tin xong tôi đã vô cùng giật mình kinh ngạc."
          }
        ]
      },
      {
        "structure": "2. Danh từ (hiện tượng thiên tai/tai nạn) + で (Do, bởi vì)",
        "explanation": "Danh từ chỉ sự kiện, thiên tai (地震、台風、火事、事故) đi với で biểu thị nguyên nhân gây ra thiệt hại hoặc cản trở.",
        "caution": "Chỉ dùng với danh từ chỉ sự cố, biến cố (không dùng với đồ vật thông thường).",
        "examples": [
          {
            "type": "sentence",
            "context": "Tàu dừng chạy do tai nạn",
            "jp": "<span class=\"furigana\"><ruby>事故<rt>じこ</rt></ruby></span>で <span class=\"furigana\"><ruby>電車<rt>でんしゃ</rt></ruby></span>が <span class=\"furigana\"><ruby>止<rt>と</rt></ruby>まりました</span>。",
            "rawJp": "事故で電車が止まりました。",
            "vi": "Do tai nạn nên tàu điện đã phải ngừng hoạt động."
          }
        ]
      },
      {
        "structure": "3. [Thể thông thường] + ので (Bởi vì - khách quan, lịch sự)",
        "explanation": "Biểu thị nguyên nhân khách quan dẫn đến kết quả. Sắc thái nhẹ nhàng, lịch sự hơn から nên rất hay dùng khi xin phép hoặc từ chối.",
        "caution": "Tính từ đuôi な và Danh từ ở hiện tại thêm な trước ので (雨なので、病気なので).",
        "examples": [
          {
            "type": "sentence",
            "context": "Xin phép về sớm vì có việc bận",
            "jp": "<span class=\"furigana\"><ruby>用事<rt>ようじ</rt></ruby></span>が <span class=\"furigana\"><ruby>ある<rt>ある</rt></ruby></span>ので、お<span class=\"furigana\"><ruby>先<rt>さき</rt></ruby></span>に <span class=\"furigana\"><ruby>失礼<rt>しつれい</rt></ruby>します</span>。",
            "rawJp": "用事があるので、お先に失礼します。",
            "vi": "Vì tôi có chút việc bận nên xin phép được về trước ạ."
          }
        ]
      }
    ]
  },

  // BÀI 40
  {
    "id": "bai-40",
    "title": "Bài 40: Câu Nghi Vấn Lồng (間接疑問文) & Thử Làm Gì 〜てみる",
    "level": "Minna no Nihongo N4 (Bài 40)",
    "badge": "Câu hỏi lồng & Thử nghiệm",
    "description": "Lồng câu hỏi vào trong câu lớn với Từ nghi vấn + 〜か、〜 hoặc 〜かどうか、〜 (có hay không), và diễn tả hành vi trải nghiệm thử với V-て みます.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>数<rt>かぞ</rt></ruby>えます</span>",
        "hiragana": "かぞえます",
        "meaning": "Đếm (số lượng, người)",
        "type": "Động từ nhóm 2",
        "example": "人数を 数えます。(Đếm số người.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>測<rt>はか</rt></ruby>ります</span>",
        "hiragana": "はかります",
        "meaning": "Đo đạc, cân (độ dài, cân nặng)",
        "type": "Động từ nhóm 1",
        "example": "長さを 測ります。(Đo chiều dài.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>確<rt>たし</rt></ruby>かめます</span>",
        "hiragana": "たしかめます",
        "meaning": "Xác nhận lại, kiểm tra cho chắc",
        "type": "Động từ nhóm 2",
        "example": "時間を 確かめます。(Xác nhận lại thời gian.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>合<rt>あ</rt></ruby>います</span>",
        "hiragana": "あいます",
        "meaning": "Khớp, vừa vặn (kích cỡ - サイズが〜)",
        "type": "Động từ nhóm 1",
        "example": "サイズが 合います。(Kích cỡ vừa vặn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出発<rt>しゅっぱつ</rt></ruby>します</span>",
        "hiragana": "しゅっぱつします",
        "meaning": "Xuất phát, khởi hành",
        "type": "Động từ nhóm 3",
        "example": "8時に 出発します。(Khởi hành lúc 8 giờ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>到着<rt>とうちゃく</rt></ruby>します</span>",
        "hiragana": "とうちゃくします",
        "meaning": "Đến nơi, cập bến",
        "type": "Động từ nhóm 3",
        "example": "空港に 到着しました。(Đã đến sân bay.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>酔<rt>よ</rt></ruby>います</span>",
        "hiragana": "よいます",
        "meaning": "Say (say rượu, say xe - お酒に〜)",
        "type": "Động từ nhóm 1",
        "example": "お酒に 酔いました。(Say rượu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>必要<rt>ひつよう</rt></ruby>な</span>",
        "hiragana": "ひつような",
        "meaning": "Cần thiết",
        "type": "Tính từ (na)",
        "example": "パスポートが 必要です。(Hộ chiếu là cần thiết.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>忘年会<rt>ぼうねんかい</rt></ruby></span>",
        "hiragana": "ぼうねんかい",
        "meaning": "Tiệc tất niên cuối năm",
        "type": "Danh từ",
        "example": "忘年会を 開きます。(Tổ chức tiệc tất niên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>新年会<rt>しんねんかい</rt></ruby></span>",
        "hiragana": "しんねんかい",
        "meaning": "Tiệc tân niên đầu năm mới",
        "type": "Danh từ",
        "example": "新年会に 出席します。(Tham dự tiệc tân niên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>二次会<rt>にじかい</rt></ruby></span>",
        "hiragana": "にじかい",
        "meaning": "Tăng hai (tiếp nối bữa tiệc đầu)",
        "type": "Danh từ",
        "example": "二次会へ 行きます。(Đi tăng hai.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>大会<rt>たいかい</rt></ruby></span>",
        "hiragana": "たいかい",
        "meaning": "Đại hội, cuộc thi đấu lớn",
        "type": "Danh từ",
        "example": "スピーチ大会 (Cuộc thi hùng biện tiếng Nhật)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>返事<rt>へんじ</rt></ruby></span>",
        "hiragana": "へんじ",
        "meaning": "Câu trả lời, hồi âm",
        "type": "Danh từ",
        "example": "メールの 返事 (Thư hồi âm)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>傷<rt>きず</rt></ruby></span>",
        "hiragana": "きず",
        "meaning": "Vết xước, vết thương hỏng",
        "type": "Danh từ",
        "example": "車に 傷が つきました。(Xe bị xước một vết.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Từ nghi vấn + [Thể thông thường] + か、〜 (Câu hỏi gián tiếp có từ để hỏi)",
        "explanation": "Dùng để lồng một câu hỏi có từ nghi vấn (ở đâu, khi nào, là ai...) vào trong một câu phức lớn hơn.",
        "caution": "Tính từ đuôi な và Danh từ ở hiện tại không dùng だ (どこが 便利か、誰が 先生か).",
        "examples": [
          {
            "type": "sentence",
            "context": "Không biết chìa khóa ở đâu",
            "jp": "かぎが どこに <span class=\"furigana\"><ruby>ある<rt>ある</rt></ruby></span>か、わかりません。",
            "rawJp": "かぎがどこにあるか、わかりません。",
            "vi": "Tôi không biết là chìa khóa đang ở đâu nữa."
          }
        ]
      },
      {
        "structure": "2. [Thể thông thường] + かどうか、〜 (Có hay không)",
        "explanation": "Dùng để lồng câu hỏi dạng Có/Không (Yes/No) vào trong câu lớn.",
        "caution": "Trước かどうか cũng bỏ だ đối với Tính từ đuôi な và Danh từ.",
        "examples": [
          {
            "type": "sentence",
            "context": "Kiểm tra xem bản dịch có sai sót gì không",
            "jp": "<span class=\"furigana\"><ruby>間違<rt>まちが</rt></ruby>い</span>が <span class=\"furigana\"><ruby>ない<rt>ない</rt></ruby></span>かどうか、<span class=\"furigana\"><ruby>調<rt>しら</rt></ruby>べて</span> ください。",
            "rawJp": "間違いがないかどうか、調べてください。",
            "vi": "Hãy kiểm tra xem có chỗ nào bị sai hay không nhé."
          }
        ]
      },
      {
        "structure": "3. V-て みます (Thử làm một hành động)",
        "explanation": "Biểu thị việc người nói thực hiện một hành động mang tính thử nghiệm, trải nghiệm để xem kết quả ra sao.",
        "caution": "Thường dùng trong mua sắm thử đồ: 履いてみます (đi thử giày), 着てみます (mặc thử áo).",
        "examples": [
          {
            "type": "sentence",
            "context": "Mặc thử chiếc áo mới",
            "jp": "この シャツを <span class=\"furigana\"><ruby>着<rt>き</rt></ruby>て</span> みても いいですか。",
            "rawJp": "このシャツを着てみてもいいですか。",
            "vi": "Tôi có thể mặc thử chiếc áo sơ mi này được không?"
          }
        ]
      }
    ]
  }
];

fs.writeFileSync('data/lessons_36_40.js', `// Lessons 36 to 40 (Minna no Nihongo N4)\nconst lessons_36_40 = ${JSON.stringify(lessons_36_40, null, 2)};\n`, 'utf8');
console.log('Successfully generated data/lessons_36_40.js');
