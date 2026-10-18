const fs = require('fs');
const https = require('https');
const path = require('path');

// Danh sách các bộ thủ tiếng Nhật quan trọng theo từng nhóm nét
// Chuẩn hóa theo video bài giảng "Kanji - Bộ thủ tiếng Nhật" của cô Ngọc Tiệp Minato
const rawRadicalGroups = [
  {
    id: "radicals-1",
    strokeCount: 1,
    title: "Bộ thủ 1 nét",
    description: "Nhóm 6 bộ thủ cấu tạo từ 1 nét cơ bản, nền móng định hình các nét bút căn bản trong chữ Hán.",
    items: [
      {
        character: "一",
        name: "Bộ Nhất (一)",
        strokeCount: 1,
        meaning: "Số một; nét ngang; khởi nguyên của vạn vật.",
        kanjiMeaning: "Biểu thị số một, sự khởi đầu, toàn thể, mặt đất phẳng hoặc bầu trời trên cao.",
        examples: [
          { kanji: "三", amHan: "Tam", nghia: "Số ba" },
          { kanji: "上", amHan: "Thượng", nghia: "Bên trên" },
          { kanji: "下", amHan: "Hạ", nghia: "Bên dưới" },
          { kanji: "天", amHan: "Thiên", nghia: "Bầu trời" },
          { kanji: "雨", amHan: "Vũ", nghia: "Cơn mưa" }
        ]
      },
      {
        character: "丨",
        name: "Bộ Cổn (丨)",
        strokeCount: 1,
        meaning: "Nét sổ dọc thẳng đứng từ trên xuống.",
        kanjiMeaning: "Biểu thị đường thông suốt, trục đứng, sự đâm xuyên qua từ trên xuống dưới hoặc chia cắt hai bên.",
        examples: [
          { kanji: "中", amHan: "Trung", nghia: "Ở giữa, trung tâm" },
          { kanji: "串", amHan: "Xuyến", nghia: "Xiên que, xiên qua" },
          { kanji: "申", amHan: "Thân", nghia: "Bày tỏ, trình bày" },
          { kanji: "引", amHan: "Dẫn", nghia: "Kéo, giương cung" }
        ]
      },
      {
        character: "丶",
        name: "Bộ Chủ (丶)",
        strokeCount: 1,
        meaning: "Nét chấm; giọt nước, ngọn lửa đèn dầu nhỏ.",
        kanjiMeaning: "Biểu thị điểm nhấn, dấu vết, ngọn đèn nhỏ, sự tích tụ hay điểm khởi phát ban đầu của sự vật.",
        examples: [
          { kanji: "丸", amHan: "Hoàn", nghia: "Hình tròn, viên tròn" },
          { kanji: "丹", amHan: "Đan", nghia: "Màu đỏ son, thuốc luyện" },
          { kanji: "主", amHan: "Chủ", nghia: "Chủ nhân, tim ngọn đèn" }
        ]
      },
      {
        character: "丿",
        name: "Bộ Phiệt (丿)",
        strokeCount: 1,
        meaning: "Nét phẩy xiên từ trên bên phải vuốt nhẹ sang bên trái.",
        kanjiMeaning: "Biểu thị sự chuyển động, trôi dạt, nghiêng ngả, uốn lượn theo chiều gió.",
        examples: [
          { kanji: "乃", amHan: "Nãi", nghia: "Mới là, bèn" },
          { kanji: "乏", amHan: "Phạp", nghia: "Thiếu thốn, mệt mỏi" },
          { kanji: "乗", amHan: "Thừa", nghia: "Cưỡi, lên xe" }
        ]
      },
      {
        character: "乙",
        name: "Bộ Ất (乙)",
        strokeCount: 1,
        meaning: "Can thứ 2 trong thập thiên can; đường cong uốn khúc mềm dẻo, mầm cây non ngoi lên.",
        kanjiMeaning: "Biểu thị hình thái mềm mại, uốn lượn quanh co, uyển chuyển, kéo dài hoặc cuộn tròn.",
        examples: [
          { kanji: "九", amHan: "Cửu", nghia: "Số chín" },
          { kanji: "乞", amHan: "Khất", nghia: "Cầu xin, xin ăn" },
          { kanji: "乱", amHan: "Loạn", nghia: "Hỗn loạn, rối bời" },
          { kanji: "乾", amHan: "Can", nghia: "Khô ráo, kiên cường" }
        ]
      },
      {
        character: "亅",
        name: "Bộ Quyết (亅)",
        strokeCount: 1,
        meaning: "Nét sổ có móc ngược ở chân (hình lưỡi câu cá).",
        kanjiMeaning: "Biểu thị lưỡi câu cá, móc sắt giữ lại, sự vướng móc hoặc sự việc đã hoàn tất dừng lại.",
        examples: [
          { kanji: "了", amHan: "Liễu", nghia: "Kết thúc, hoàn tất" },
          { kanji: "事", amHan: "Sự", nghia: "Sự việc, công việc" }
        ]
      }
    ]
  },
  {
    id: "radicals-2",
    strokeCount: 2,
    title: "Bộ thủ 2 nét",
    description: "Nhóm 23 bộ thủ gồm 2 nét, xuất hiện rất phổ biến trong các Hán tự căn bản N5 và N4.",
    items: [
      {
        character: "二",
        name: "Bộ Nhị (二)",
        strokeCount: 2,
        meaning: "Số hai; hai tầng trời đất đối xứng.",
        kanjiMeaning: "Biểu thị số lượng (hai), sự cân bằng, đôi lứa, tầng thứ đối xứng.",
        examples: [
          { kanji: "井", amHan: "Tỉnh", nghia: "Cái giếng nước" },
          { kanji: "仁", amHan: "Nhân", nghia: "Lòng nhân ái, nhân từ" },
          { kanji: "元", amHan: "Nguyên", nghia: "Gốc rễ, khởi nguyên" }
        ]
      },
      {
        character: "亠",
        name: "Bộ Đầu (亠)",
        strokeCount: 2,
        meaning: "Chóp nón, đỉnh đầu, mái che trên cao.",
        kanjiMeaning: "Biểu thị vị trí ở trên đỉnh cao nhất, nóc nhà hoặc mũ đội trên đầu.",
        examples: [
          { kanji: "京", amHan: "Kinh", nghia: "Kinh đô, thành phố lớn" },
          { kanji: "市", amHan: "Thị", nghia: "Chợ, đô thị" },
          { kanji: "亭", amHan: "Đình", nghia: "Đình nghỉ mát" }
        ]
      },
      {
        character: "人",
        name: "Bộ Nhân / Nhân đứng (人 / 亻)",
        strokeCount: 2,
        meaning: "Con người; hình người đứng thẳng dang chân.",
        kanjiMeaning: "Biểu thị hành động, thân phận, phẩm chất, đạo đức hoặc tư thế của con người.",
        examples: [
          { kanji: "休", amHan: "Hưu", nghia: "Người tựa gốc cây nghỉ ngơi" },
          { kanji: "働", amHan: "Động", nghia: "Lao động làm việc" },
          { kanji: "体", amHan: "Thể", nghia: "Thân thể con người" },
          { kanji: "信", amHan: "Tín", nghia: "Uy tín, tin tưởng" }
        ]
      },
      {
        character: "儿",
        name: "Bộ Nhi (儿)",
        strokeCount: 2,
        meaning: "Đôi chân người đang bước; trẻ con.",
        kanjiMeaning: "Biểu thị phần thân dưới, đôi chân đi lại, vận động di chuyển hoặc trẻ nhỏ.",
        examples: [
          { kanji: "先", amHan: "Tiên", nghia: "Đi trước, tiên phong" },
          { kanji: "兄", amHan: "Huynh", nghia: "Người anh lớn trong nhà" },
          { kanji: "光", amHan: "Quang", nghia: "Ánh sáng chiếu rọi" }
        ]
      },
      {
        character: "入",
        name: "Bộ Nhập (入)",
        strokeCount: 2,
        meaning: "Đi vào, bước vào bên trong.",
        kanjiMeaning: "Biểu thị hành động thâm nhập, tiến vào trong, tiếp nhận hoặc hòa nhập.",
        examples: [
          { kanji: "内", amHan: "Nội", nghia: "Bên trong" },
          { kanji: "全", amHan: "Toàn", nghia: "Toàn vẹn, đầy đủ" }
        ]
      },
      {
        character: "八",
        name: "Bộ Bát (八)",
        strokeCount: 2,
        meaning: "Số tám; hai vệt xòe ra hai bên.",
        kanjiMeaning: "Biểu thị sự chia tách, phân nhánh sang hai phía, mở rộng hoặc số 8.",
        examples: [
          { kanji: "分", amHan: "Phân", nghia: "Dùng dao chia đôi" },
          { kanji: "共", amHan: "Cộng", nghia: "Cùng nhau" },
          { kanji: "半", amHan: "Bán", nghia: "Một nửa" }
        ]
      },
      {
        character: "冂",
        name: "Bộ Quynh (冂)",
        strokeCount: 2,
        meaning: "Vùng đất xa xôi ngoài biên cương hoang vu, vòm mở.",
        kanjiMeaning: "Biểu thị không gian rộng mở bao quanh bên ngoài, đường viền biên giới.",
        examples: [
          { kanji: "冊", amHan: "Sách", nghia: "Tập sách thẻ tre đóng lại" },
          { kanji: "同", amHan: "Đồng", nghia: "Cùng chung" },
          { kanji: "円", amHan: "Yên", nghia: "Đồng tiền Yên, tròn" }
        ]
      },
      {
        character: "冖",
        name: "Bộ Mịch (冖)",
        strokeCount: 2,
        meaning: "Khăn trùm đầu, dải lụa che phủ từ trên xuống.",
        kanjiMeaning: "Biểu thị sự che phủ, trùm kín, bao bọc che khuất tầm nhìn từ bên trên.",
        examples: [
          { kanji: "冠", amHan: "Quan", nghia: "Mũ miện đội đầu" },
          { kanji: "冥", amHan: "Minh", nghia: "U tối, cõi âm" },
          { kanji: "冤", amHan: "Oan", nghia: "Oan ức bị che khuất" }
        ]
      },
      {
        character: "冫",
        name: "Bộ Băng (冫)",
        strokeCount: 2,
        meaning: "Nước đá, băng giá, hơi lạnh buốt.",
        kanjiMeaning: "Biểu thị nhiệt độ thấp, đóng băng, buốt giá, tuyết lạnh đông cứng.",
        examples: [
          { kanji: "冬", amHan: "Đông", nghia: "Mùa đông lạnh giá" },
          { kanji: "冷", amHan: "Lãnh", nghia: "Lạnh lẽo, nguội" },
          { kanji: "凍", amHan: "Đống", nghia: "Đông đá, đóng băng" }
        ]
      },
      {
        character: "几",
        name: "Bộ Kỷ (几)",
        strokeCount: 2,
        meaning: "Ghế tựa, cái bàn nhỏ uống trà.",
        kanjiMeaning: "Biểu thị đồ đạc để ngồi hoặc dựa vào, sự nâng đỡ nương tựa.",
        examples: [
          { kanji: "処", amHan: "Xử", nghia: "Nơi chốn, xử lý" },
          { kanji: "凡", amHan: "Phàm", nghia: "Bình thường, phàm trần" }
        ]
      },
      {
        character: "凵",
        name: "Bộ Khảm (凵)",
        strokeCount: 2,
        meaning: "Miệng há rộng, cái hố trũng sâu dưới đất.",
        kanjiMeaning: "Biểu thị vực sâu, hố trũng, vật chứa có miệng mở đón nhận.",
        examples: [
          { kanji: "出", amHan: "Xuất", nghia: "Đi ra ngoài khỏi hố" },
          { kanji: "凶", amHan: "Hung", nghia: "Rơi xuống hố hiểm họa" },
          { kanji: "函", amHan: "Hàm", nghia: "Hộp thư, phong bì" }
        ]
      },
      {
        character: "刀",
        name: "Bộ Đao / Đao đứng (刀 / 刂)",
        strokeCount: 2,
        meaning: "Con dao, thanh gươm bén nhọn.",
        kanjiMeaning: "Biểu thị hành động cắt, gọt, chém xẻ, phân chia, trừng phạt hoặc đồ vật sắc nhọn.",
        examples: [
          { kanji: "切", amHan: "Thiết", nghia: "Cắt đứt, xẻ ra" },
          { kanji: "割", amHan: "Cát", nghia: "Phân chia, xé rách" },
          { kanji: "判", amHan: "Phán", nghia: "Phán đoán, phân xử" },
          { kanji: "刊", amHan: "San", nghia: "Khắc in ấn, xuất bản" }
        ]
      },
      {
        character: "力",
        name: "Bộ Lực (力)",
        strokeCount: 2,
        meaning: "Sức mạnh; bắp tay nổi gân cuồn cuộn hoặc lưỡi cày.",
        kanjiMeaning: "Biểu thị sức lực, cơ bắp, sự nỗ lực làm việc, năng lượng hoặc công hiệu.",
        examples: [
          { kanji: "助", amHan: "Trợ", nghia: "Giúp đỡ, viện trợ" },
          { kanji: "動", amHan: "Động", nghia: "Chuyển động, vận động" },
          { kanji: "勇", amHan: "Dũng", nghia: "Dũng cảm, quả cảm" },
          { kanji: "労", amHan: "Lao", nghia: "Lao động mệt nhọc" }
        ]
      },
      {
        character: "勹",
        name: "Bộ Bao (勹)",
        strokeCount: 2,
        meaning: "Ôm lấy; người khom lưng ôm giữ đồ vật.",
        kanjiMeaning: "Biểu thị sự bao bọc, gói ghém, ôm ấp, bảo vệ hoặc che chở kín đáo.",
        examples: [
          { kanji: "包", amHan: "Bao", nghia: "Gói bọc lại" },
          { kanji: "旬", amHan: "Tuần", nghia: "Chu kỳ 10 ngày gói gọn" },
          { kanji: "句", amHan: "Cú", nghia: "Câu văn trọn vẹn" }
        ]
      },
      {
        character: "匕",
        name: "Bộ Chủy (匕)",
        strokeCount: 2,
        meaning: "Cái thìa (muỗng) múc canh; con dao găm nhỏ.",
        kanjiMeaning: "Biểu thị dụng cụ ăn uống (thìa), mũi dao nhỏ nhọn hoặc người ngồi co ro quay lưng.",
        examples: [
          { kanji: "北", amHan: "Bắc", nghia: "Hai người quay lưng vào nhau" },
          { kanji: "匙", amHan: "Thì", nghia: "Cái muỗng, thìa múc" },
          { kanji: "旨", amHan: "Chỉ", nghia: "Thơm ngon vừa miệng" }
        ]
      },
      {
        character: "匚",
        name: "Bộ Phương (匚)",
        strokeCount: 2,
        meaning: "Cái tủ nằm ngang, ngăn kéo để đồ dùng.",
        kanjiMeaning: "Biểu thị đồ đạc chứa đựng, lưu trữ vật dụng, ngăn kéo che chắn bảo quản.",
        examples: [
          { kanji: "匠", amHan: "Tượng", nghia: "Người thợ mộc cầm đồ nghề" },
          { kanji: "匣", amHan: "Hạp", nghia: "Hộp nhỏ đựng tráp" }
        ]
      },
      {
        character: "匸",
        name: "Bộ Hệ (匸)",
        strokeCount: 2,
        meaning: "Đồ che đậy giấu kín bí mật.",
        kanjiMeaning: "Biểu thị sự cất giấu bí mật, giấu kín bên trong không để lộ ra ngoài.",
        examples: [
          { kanji: "医", amHan: "Y", nghia: "Thầy thuốc giấu mũi tên trị bệnh" },
          { kanji: "匹", amHan: "Thất", nghia: "Con thú ẩn mình" }
        ]
      },
      {
        character: "十",
        name: "Bộ Thập (十)",
        strokeCount: 2,
        meaning: "Số mười; hình chữ thập trọn vẹn bốn phương tám hướng.",
        kanjiMeaning: "Biểu thị số 10, sự hoàn chỉnh, đầy đủ viên mãn, ngã tư đường.",
        examples: [
          { kanji: "古", amHan: "Cổ", nghia: "Mười đời truyền lại là xưa cũ" },
          { kanji: "博", amHan: "Bác", nghia: "Uyên bác, hiểu rộng" },
          { kanji: "南", amHan: "Nam", nghia: "Phương Nam ấm áp" }
        ]
      },
      {
        character: "卜",
        name: "Bộ Bốc (卜)",
        strokeCount: 2,
        meaning: "Bói toán; vết nứt mai rùa khi hơ lửa đoán điềm.",
        kanjiMeaning: "Biểu thị việc bói quẻ, điềm báo linh ứng hoặc dự đoán trước sự việc.",
        examples: [
          { kanji: "占", amHan: "Chiếm", nghia: "Thầy bói mở miệng phán quẻ" },
          { kanji: "卦", amHan: "Quái", nghia: "Quẻ bói kinh dịch" }
        ]
      },
      {
        character: "卩",
        name: "Bộ Tiết (卩 / ⺋)",
        strokeCount: 2,
        meaning: "Đốt tre; ngọc tiết ấn tín; hình người quỳ gối.",
        kanjiMeaning: "Biểu thị sự quy phục, chừng mực, đốt tre khớp lệnh hoặc con dấu ấn tín.",
        examples: [
          { kanji: "印", amHan: "Ấn", nghia: "Ấn tín, con dấu" },
          { kanji: "卵", amHan: "Noãn", nghia: "Quả trứng nhỏ" },
          { kanji: "危", amHan: "Nguy", nghia: "Người ngồi bên bờ vực nguy hiểm" }
        ]
      },
      {
        character: "厂",
        name: "Bộ Hán / Xưởng (厂)",
        strokeCount: 2,
        meaning: "Sườn núi, vách đá dựng đứng chìa ra.",
        kanjiMeaning: "Biểu thị vách đá cao, sườn dốc nguy hiểm, nơi che chắn dưới vách đá hoặc xưởng sản xuất.",
        examples: [
          { kanji: "原", amHan: "Nguyên", nghia: "Nguồn suối bắt nguồn từ sườn núi" },
          { kanji: "厚", amHan: "Hậu", nghia: "Dày dặn, vững chãi" },
          { kanji: "厄", amHan: "Ách", nghia: "Tai ách hiểm trở" }
        ]
      },
      {
        character: "厶",
        name: "Bộ Khư / Tư (厶)",
        strokeCount: 2,
        meaning: "Riêng tư, cá nhân, sự ôm đồ vào mình.",
        kanjiMeaning: "Biểu thị của riêng, tính tư lợi cá nhân hoặc việc kín đáo giấu riêng.",
        examples: [
          { kanji: "私", amHan: "Tư", nghia: "Lúa gạo của riêng tôi -> Tôi" },
          { kanji: "去", amHan: "Khứ", nghia: "Rời đi, quá khứ" }
        ]
      },
      {
        character: "又",
        name: "Bộ Hựu (又)",
        strokeCount: 2,
        meaning: "Bàn tay phải; lại lần nữa, thêm nữa.",
        kanjiMeaning: "Biểu thị hành động dùng tay cầm nắm, sự lặp đi lặp lại nhiều lần, trợ giúp.",
        examples: [
          { kanji: "友", amHan: "Hữu", nghia: "Hai bàn tay bạn bè nắm lấy nhau" },
          { kanji: "取", amHan: "Thủ", nghia: "Dùng tay lấy" },
          { kanji: "反", amHan: "Phản", nghia: "Lật ngược bàn tay lại" }
        ]
      }
    ]
  },
  {
    id: "radicals-3",
    strokeCount: 3,
    title: "Bộ thủ 3 nét",
    description: "Nhóm 31 bộ thủ cấu tạo từ 3 nét, chiếm tỉ trọng lớn các từ vựng chỉ đời sống, thiên nhiên và xã hội.",
    items: [
      {
        character: "口",
        name: "Bộ Khẩu (口)",
        strokeCount: 3,
        meaning: "Cái miệng.",
        kanjiMeaning: "Biểu thị miệng ăn, lời nói, tiếng kêu, vị giác hoặc cửa ngõ, lỗ mở.",
        examples: [
          { kanji: "味", amHan: "Vị", nghia: "Hương vị đồ ăn" },
          { kanji: "呼", amHan: "Hô", nghia: "Kêu gọi, hô hào" },
          { kanji: "唱", amHan: "Xướng", nghia: "Hát ca, ca xướng" }
        ]
      },
      {
        character: "囗",
        name: "Bộ Vi (囗)",
        strokeCount: 3,
        meaning: "Vây quanh, tường thành khép kín.",
        kanjiMeaning: "Biểu thị sự bao bọc khép kín, bao vây, giam giữ hoặc ranh giới lãnh thổ.",
        examples: [
          { kanji: "国", amHan: "Quốc", nghia: "Đất nước có biên giới bao quanh" },
          { kanji: "四", amHan: "Tứ", nghia: "Số bốn" },
          { kanji: "回", amHan: "Hồi", nghia: "Quay tròn lại, trở về" }
        ]
      },
      {
        character: "土",
        name: "Bộ Thổ (土)",
        strokeCount: 3,
        meaning: "Đất đai, thổ nhưỡng sinh ra cây cỏ.",
        kanjiMeaning: "Biểu thị đất đai, bùn đất, công trình xây dựng đắp nền móng.",
        examples: [
          { kanji: "地", amHan: "Địa", nghia: "Mặt đất, địa phương" },
          { kanji: "場", amHan: "Trường", nghia: "Khu đất trống, hội trường" },
          { kanji: "坂", amHan: "Phản", nghia: "Con dốc đất" }
        ]
      },
      {
        character: "士",
        name: "Bộ Sĩ (士)",
        strokeCount: 3,
        meaning: "Kẻ sĩ, người tài giỏi có học vấn, quan lại.",
        kanjiMeaning: "Biểu thị phẩm tước, người có học vấn, dũng sĩ hoặc người đàn ông uyên thâm.",
        examples: [
          { kanji: "壮", amHan: "Tráng", nghia: "Tráng kiện, hùng mạnh" },
          { kanji: "壱", amHan: "Nhất", nghia: "Số một (viết trang trọng)" },
          { kanji: "寿", amHan: "Thọ", nghia: "Sống lâu, chúc thọ" }
        ]
      },
      {
        character: "夂",
        name: "Bộ Truy (夂)",
        strokeCount: 3,
        meaning: "Đi chậm đến sau, bước chân chậm chạp.",
        kanjiMeaning: "Biểu thị sự theo sau, lề mề, phía sau đuôi hoặc kết thúc.",
        examples: [
          { kanji: "冬", amHan: "Đông", nghia: "Mùa đông buốt giá" },
          { kanji: "各", amHan: "Các", nghia: "Mỗi người, từng người" }
        ]
      },
      {
        character: "夕",
        name: "Bộ Tịch (夕)",
        strokeCount: 3,
        meaning: "Buổi chiều tối, trăng khuyết chiều tà.",
        kanjiMeaning: "Biểu thị thời gian lúc hoàng hôn, màn đêm buông xuống hoặc bóng tối.",
        examples: [
          { kanji: "多", amHan: "Đa", nghia: "Nhiều đêm nối tiếp -> Nhiều" },
          { kanji: "外", amHan: "Ngoại", nghia: "Bên ngoài" },
          { kanji: "夜", amHan: "Dạ", nghia: "Đêm tối" }
        ]
      },
      {
        character: "大",
        name: "Bộ Đại (大)",
        strokeCount: 3,
        meaning: "To lớn; hình người dang rộng cả hai tay hai chân.",
        kanjiMeaning: "Biểu thị kích thước rộng lớn, tầm vóc cao cả, sự vĩ đại hoặc con người.",
        examples: [
          { kanji: "太", amHan: "Thái", nghia: "Mập mạp, to lớn" },
          { kanji: "天", amHan: "Thiên", nghia: "Trời cao rộng lớn" },
          { kanji: "夫", amHan: "Phu", nghia: "Người chồng, người đàn ông" }
        ]
      },
      {
        character: "女",
        name: "Bộ Nữ (女)",
        strokeCount: 3,
        meaning: "Người phụ nữ uốn gối duyên dáng.",
        kanjiMeaning: "Biểu thị giới tính nữ, hôn nhân, gia đình, tình cảm, sự dịu dàng hoặc xinh đẹp.",
        examples: [
          { kanji: "好", amHan: "Hảo", nghia: "Thích (phụ nữ ôm con)" },
          { kanji: "妹", amHan: "Muội", nghia: "Em gái" },
          { kanji: "姉", amHan: "Tỷ", nghia: "Chị gái" },
          { kanji: "妻", amHan: "Thê", nghia: "Người vợ" }
        ]
      },
      {
        character: "子",
        name: "Bộ Tử (子)",
        strokeCount: 3,
        meaning: "Đứa bé, con cái bọc tã.",
        kanjiMeaning: "Biểu thị trẻ em, con cái, hạt giống non nớt, sự sinh sôi nảy nở hoặc học tập.",
        examples: [
          { kanji: "学", amHan: "Học", nghia: "Học tập dưới mái nhà" },
          { kanji: "字", amHan: "Tự", nghia: "Chữ viết sinh sôi" },
          { kanji: "存", amHan: "Tồn", nghia: "Tồn tại, nuôi nấng" }
        ]
      },
      {
        character: "宀",
        name: "Bộ Miên (宀)",
        strokeCount: 3,
        meaning: "Mái nhà có ống khói trên nóc.",
        kanjiMeaning: "Biểu thị căn nhà, nơi cư ngụ, phòng ốc, mái che chở an toàn.",
        examples: [
          { kanji: "安", amHan: "An", nghia: "Phụ nữ dưới mái nhà -> An bình" },
          { kanji: "家", amHan: "Gia", nghia: "Nhà cửa, gia đình" },
          { kanji: "宿", amHan: "Túc", nghia: "Quán trọ, nơi nghỉ" },
          { kanji: "室", amHan: "Thất", nghia: "Căn phòng" }
        ]
      },
      {
        character: "寸",
        name: "Bộ Thốn (寸)",
        strokeCount: 3,
        meaning: "Tấc đo; đốt ngón tay từ cổ tay đến huyệt mạch.",
        kanjiMeaning: "Biểu thị đơn vị đo lường ngắn, sự đo đạc cẩn thận, quy tắc phép tắc.",
        examples: [
          { kanji: "寺", amHan: "Tự", nghia: "Ngôi chùa giữ phép tắc" },
          { kanji: "射", amHan: "Xạ", nghia: "Bắn cung đo thước" },
          { kanji: "専", amHan: "Chuyên", nghia: "Chuyên tâm một mối" }
        ]
      },
      {
        character: "小",
        name: "Bộ Tiểu (小)",
        strokeCount: 3,
        meaning: "Nhỏ bé; một vật bị chia thành ba mảnh nhỏ.",
        kanjiMeaning: "Biểu thị kích thước bé nhỏ, số lượng ít, sự giảm thiểu thu hẹp.",
        examples: [
          { kanji: "少", amHan: "Thiểu", nghia: "Ít ỏi, tuổi trẻ" },
          { kanji: "尖", amHan: "Tiêm", nghia: "Mũi nhọn (dưới to trên nhỏ)" }
        ]
      },
      {
        character: "尢",
        name: "Bộ Uông (尢)",
        strokeCount: 3,
        meaning: "Chân què quặt, dáng đi khập khiễng.",
        kanjiMeaning: "Biểu thị sự dị dạng, gãy khúc, khập khiễng hoặc đặc thù khác biệt.",
        examples: [
          { kanji: "就", amHan: "Tựu", nghia: "Đạt tới thành tựu" },
          { kanji: "尤", amHan: "Vưu", nghia: "Hơn hẳn, sai sót" }
        ]
      },
      {
        character: "尸",
        name: "Bộ Thi (尸)",
        strokeCount: 3,
        meaning: "Thây người nằm; tư thế người ngồi co gối; mái che tạm.",
        kanjiMeaning: "Biểu thị tư thế cơ thể, nơi ở tạm bợ, xác thân hoặc phòng ốc.",
        examples: [
          { kanji: "居", amHan: "Cư", nghia: "Cư ngụ, sinh sống" },
          { kanji: "屋", amHan: "Ốc", nghia: "Căn nhà, cửa tiệm" },
          { kanji: "尺", amHan: "Xích", nghia: "Thước đo gang tay" }
        ]
      },
      {
        character: "山",
        name: "Bộ Sơn (山)",
        strokeCount: 3,
        meaning: "Ngọn núi ba đỉnh nhấp nhô.",
        kanjiMeaning: "Biểu thị núi non, đá cao sừng sững, địa hình đồi núi hiểm trở.",
        examples: [
          { kanji: "岩", amHan: "Nham", nghia: "Tảng đá trên núi" },
          { kanji: "島", amHan: "Đảo", nghia: "Hòn đảo giữa biển" },
          { kanji: "岸", amHan: "Ngạn", nghia: "Bờ núi, bờ vực" }
        ]
      },
      {
        character: "川",
        name: "Bộ Xuyên (川 / 巛)",
        strokeCount: 3,
        meaning: "Dòng sông uốn lượn ba làn sóng nước.",
        kanjiMeaning: "Biểu thị dòng chảy, sông ngòi, kênh rạch, sự lưu thông thuận dòng.",
        examples: [
          { kanji: "順", amHan: "Thuận", nghia: "Thuận theo dòng nước" },
          { kanji: "州", amHan: "Châu", nghia: "Bãi nổi giữa sông" }
        ]
      },
      {
        character: "工",
        name: "Bộ Công (工)",
        strokeCount: 3,
        meaning: "Người thợ; thước đo góc vuông của thợ xây.",
        kanjiMeaning: "Biểu thị kỹ thuật, tay nghề tinh xảo, công trình xây dựng, sự gia công.",
        examples: [
          { kanji: "左", amHan: "Tả", nghia: "Bên tay trái cầm thước" },
          { kanji: "巧", amHan: "Xảo", nghia: "Khéo léo, tinh xảo" },
          { kanji: "功", amHan: "Công", nghia: "Công lao, thành tựu" }
        ]
      },
      {
        character: "己",
        name: "Bộ Kỷ (己)",
        strokeCount: 3,
        meaning: "Bản thân mình; sợi dây cuộn lại định hình.",
        kanjiMeaning: "Biểu thị cái tôi, tự thân kiểm soát, bản thể cá nhân.",
        examples: [
          { kanji: "改", amHan: "Cải", nghia: "Tự sửa đổi bản thân" },
          { kanji: "配", amHan: "Phối", nghia: "Phân chia, quan tâm" }
        ]
      },
      {
        character: "巾",
        name: "Bộ Cân (巾)",
        strokeCount: 3,
        meaning: "Khăn vải rủ xuống.",
        kanjiMeaning: "Biểu thị dải lụa, khăn lau, vải vóc, cờ hiệu hoặc đồ may mặc.",
        examples: [
          { kanji: "布", amHan: "Bố", nghia: "Vải vóc" },
          { kanji: "帆", amHan: "Phàm", nghia: "Cánh buồm bằng vải" },
          { kanji: "幕", amHan: "Mạc", nghia: "Bức rèm, tấm màn" }
        ]
      },
      {
        character: "干",
        name: "Bộ Can (干)",
        strokeCount: 3,
        meaning: "Cái khiên chắn giáo mác; can thiệp, phơi khô.",
        kanjiMeaning: "Biểu thị vũ khí phòng thủ, sự va chạm, can dự hoặc phơi khô cạn.",
        examples: [
          { kanji: "平", amHan: "Bình", nghia: "Bình yên, bằng phẳng" },
          { kanji: "年", amHan: "Niên", nghia: "Năm tháng" }
        ]
      },
      {
        character: "幺",
        name: "Bộ Yêu (幺)",
        strokeCount: 3,
        meaning: "Nhỏ bé, sợi tơ mỏng manh mới nhả.",
        kanjiMeaning: "Biểu thị sự mờ nhạt, nhỏ li ti, yếu ớt hoặc non nớt.",
        examples: [
          { kanji: "幼", amHan: "Ấu", nghia: "Ấu thơ, nhỏ dại" },
          { kanji: "幻", amHan: "Huyễn", nghia: "Ảo ảnh, mờ ảo" }
        ]
      },
      {
        character: "广",
        name: "Bộ Nghiễm (广)",
        strokeCount: 3,
        meaning: "Mái nhà bên sườn núi, ngôi nhà rộng rãi.",
        kanjiMeaning: "Biểu thị gian nhà rộng lớn, kho tàng, sảnh viện hoặc cơ quan công sở.",
        examples: [
          { kanji: "店", amHan: "Điếm", nghia: "Cửa hàng, tiệm buôn" },
          { kanji: "広", amHan: "Quảng", nghia: "Rộng rãi, bao la" },
          { kanji: "床", amHan: "Sàng", nghia: "Sàn nhà, giường nằm" }
        ]
      },
      {
        character: "廴",
        name: "Bộ Dẫn (廴)",
        strokeCount: 3,
        meaning: "Bước chân dài, đi xa.",
        kanjiMeaning: "Biểu thị hành trình dài, sự kéo dài quãng đường hoặc tiếp nối.",
        examples: [
          { kanji: "延", amHan: "Duyên", nghia: "Kéo dài, hoãn lại" },
          { kanji: "建", amHan: "Kiến", nghia: "Xây dựng công trình dài lâu" }
        ]
      },
      {
        character: "廾",
        name: "Bộ Củng (廾)",
        strokeCount: 3,
        meaning: "Hai tay chắp lại nâng đồ vật lên.",
        kanjiMeaning: "Biểu thị hành động cung kính dâng hiến, nâng đỡ đồ vật bằng hai tay.",
        examples: [
          { kanji: "弁", amHan: "Biện", nghia: "Hùng biện, hộp cơm bento" },
          { kanji: "弊", amHan: "Tệ", nghia: "Tệ hại,弊 xá" }
        ]
      },
      {
        character: "弋",
        name: "Bộ Dặc (弋)",
        strokeCount: 3,
        meaning: "Cọc gỗ cắm ranh giới; mũi tên buộc dây bắn chim.",
        kanjiMeaning: "Biểu thị sự cắm mốc, quy chuẩn, bắn tên hoặc giữ gìn.",
        examples: [
          { kanji: "式", amHan: "Thức", nghia: "Nghi thức, công thức" },
          { kanji: "武", amHan: "Vũ", nghia: "Vũ trang, võ sĩ" }
        ]
      },
      {
        character: "弓",
        name: "Bộ Cung (弓)",
        strokeCount: 3,
        meaning: "Cây cung bắn tên có dây căng.",
        kanjiMeaning: "Biểu thị vũ khí bắn xa, đường cong uốn khúc, sự kéo căng hoặc đàn hồi.",
        examples: [
          { kanji: "引", amHan: "Dẫn", nghia: "Kéo căng dây cung" },
          { kanji: "弱", amHan: "Nhược", nghia: "Cung yếu ớt" },
          { kanji: "張", amHan: "Trương", nghia: "Kéo căng, trương phình" }
        ]
      },
      {
        character: "彐",
        name: "Bộ Kệ (彐 / 彑)",
        strokeCount: 3,
        meaning: "Đầu con nhím; bàn tay nắm móng vuốt.",
        kanjiMeaning: "Biểu thị đầu loài vật có mõm nhọn hoặc móng vuốt cầm nắm vật gì.",
        examples: [
          { kanji: "彗", amHan: "Tuệ", nghia: "Sao chổi" },
          { kanji: "録", amHan: "Lục", nghia: "Ghi chép" }
        ]
      },
      {
        character: "彡",
        name: "Bộ Sam (彡)",
        strokeCount: 3,
        meaning: "Chùm lông dài; hoa văn rực rỡ.",
        kanjiMeaning: "Biểu thị vẻ đẹp hình thức, ánh sáng bóng bẩy, râu tóc óng ả hoặc hoa văn nghệ thuật.",
        examples: [
          { kanji: "形", amHan: "Hình", nghia: "Hình dạng, dáng vẻ" },
          { kanji: "影", amHan: "Ảnh", nghia: "Bóng râm, hình ảnh" },
          { kanji: "彩", amHan: "Thải", nghia: "Sắc màu rực rỡ" }
        ]
      },
      {
        character: "彳",
        name: "Bộ Xích (彳)",
        strokeCount: 3,
        meaning: "Bước chân trái; nửa bên trái của ngã tư đường.",
        kanjiMeaning: "Biểu thị hành động bước đi, di chuyển trên đường lộ, đi lại hành trình.",
        examples: [
          { kanji: "行", amHan: "Hành", nghia: "Đi, thi hành" },
          { kanji: "役", amHan: "Dịch", nghia: "Nhiệm vụ, chức vụ" },
          { kanji: "待", amHan: "Đãi", nghia: "Chờ đợi bên đường" }
        ]
      }
    ]
  },
  {
    id: "radicals-4",
    strokeCount: 4,
    title: "Bộ thủ 4 nét",
    description: "Nhóm 34 bộ thủ quan trọng gồm 4 nét, biểu thị các yếu tố tự nhiên cốt lõi (Nước, Lửa, Cây, Trời đất).",
    items: [
      {
        character: "心",
        name: "Bộ Tâm / Tâm đứng (心 / 忄)",
        strokeCount: 4,
        meaning: "Trái tim con người; tấm lòng.",
        kanjiMeaning: "Biểu thị cảm xúc vui buồn, suy nghĩ nội tâm, tình cảm hoặc tư tưởng đạo đức.",
        examples: [
          { kanji: "忙", amHan: "Mang", nghia: "Bận rộn quên cả lòng mình" },
          { kanji: "志", amHan: "Chí", nghia: "Ý chí, mục tiêu trong lòng" },
          { kanji: "快", amHan: "Khoái", nghia: "Sảng khoái, vui vẻ" },
          { kanji: "情", amHan: "Tình", nghia: "Tình cảm con người" }
        ]
      },
      {
        character: "戈",
        name: "Bộ Qua (戈)",
        strokeCount: 4,
        meaning: "Cây giáo mác dài thời cổ.",
        kanjiMeaning: "Biểu thị vũ khí cận chiến, chiến tranh, xung đột đao kiếm hoặc sự phòng vệ răn đe.",
        examples: [
          { kanji: "戦", amHan: "Chiến", nghia: "Chiến tranh, giao chiến" },
          { kanji: "戒", amHan: "Giới", nghia: "Cảnh giác, giới nghiêm" }
        ]
      },
      {
        character: "戸",
        name: "Bộ Hộ (戸)",
        strokeCount: 4,
        meaning: "Cánh cửa đơn một cánh.",
        kanjiMeaning: "Biểu thị cửa nẻo, nơi ở, phòng ốc hoặc từng hộ gia đình.",
        examples: [
          { kanji: "所", amHan: "Sở", nghia: "Nơi chốn, địa điểm" },
          { kanji: "房", amHan: "Phòng", nghia: "Gian phòng, buồng ngủ" },
          { kanji: "扉", amHan: "Phi", nghia: "Cánh cửa khép mở" }
        ]
      },
      {
        character: "手",
        name: "Bộ Thủ / Tay gảy (手 / 扌)",
        strokeCount: 4,
        meaning: "Bàn tay con người với 5 ngón.",
        kanjiMeaning: "Biểu thị các hành động dùng tay như cầm, nắm, nhặt, đánh, ném, mở, đẩy...",
        examples: [
          { kanji: "持", amHan: "Trì", nghia: "Cầm giữ trong tay" },
          { kanji: "指", amHan: "Chỉ", nghia: "Ngón tay, chỉ trỏ" },
          { kanji: "打", amHan: "Đả", nghia: "Dùng tay đánh, gõ" },
          { kanji: "投", amHan: "Đầu", nghia: "Ném đi" }
        ]
      },
      {
        character: "支",
        name: "Bộ Chi (支)",
        strokeCount: 4,
        meaning: "Bàn tay cầm cành cây; cành nhánh.",
        kanjiMeaning: "Biểu thị cành cây, sự chống đỡ, nâng đỡ hoặc chia nhánh chi tiêu.",
        examples: [
          { kanji: "枝", amHan: "Chi", nghia: "Cành cây lá" }
        ]
      },
      {
        character: "攴",
        name: "Bộ Phác (攵 / 攴)",
        strokeCount: 4,
        meaning: "Bàn tay cầm roi gõ nhẹ nhắc nhở.",
        kanjiMeaning: "Biểu thị hành động thúc đẩy, răn dạy, chỉnh đốn, cải tiến hoặc tác động.",
        examples: [
          { kanji: "改", amHan: "Cải", nghia: "Sửa đổi, cải tiến" },
          { kanji: "政", amHan: "Chính", nghia: "Chính trị, phép nước" },
          { kanji: "数", amHan: "Số", nghia: "Tính toán chữ số" }
        ]
      },
      {
        character: "文",
        name: "Bộ Văn (文)",
        strokeCount: 4,
        meaning: "Hoa văn trên vải; văn tự, chữ nghĩa.",
        kanjiMeaning: "Biểu thị văn hóa, học vấn, tri thức sách vở hoặc hoa văn trang trí.",
        examples: [
          { kanji: "斉", amHan: "Tề", nghia: "Chỉnh tề, tề chỉnh" }
        ]
      },
      {
        character: "斗",
        name: "Bộ Đẩu (斗)",
        strokeCount: 4,
        meaning: "Cái đấu đong gạo, đong rượu; chòm sao Bắc Đẩu.",
        kanjiMeaning: "Biểu thị việc đo lường thể tích chất lỏng hoặc thiên văn tinh tú.",
        examples: [
          { kanji: "料", amHan: "Liệu", nghia: "Vật liệu, đong đếm nguyên liệu" },
          { kanji: "斜", amHan: "Tà", nghia: "Nghiêng xéo" }
        ]
      },
      {
        character: "斤",
        name: "Bộ Cân (斤)",
        strokeCount: 4,
        meaning: "Chiếc rìu chặt cây; đơn vị đo cân lạng.",
        kanjiMeaning: "Biểu thị việc chặt chém, đẽo gọt bằng rìu hoặc đo lường trọng lượng.",
        examples: [
          { kanji: "新", amHan: "Tân", nghia: "Mới mẻ (chặt cây lấy gỗ mới)" },
          { kanji: "断", amHan: "Đoạn", nghia: "Chặt đứt, quyết đoán" }
        ]
      },
      {
        character: "方",
        name: "Bộ Phương (方)",
        strokeCount: 4,
        meaning: "Hình vuông; phương hướng, hai chiếc thuyền ghép đôi.",
        kanjiMeaning: "Biểu thị bốn phương tám hướng, hình dạng góc cạnh vuông vức hoặc phương pháp cách làm.",
        examples: [
          { kanji: "旅", amHan: "Lữ", nghia: "Lên đường đi du lịch" },
          { kanji: "族", amHan: "Tộc", nghia: "Gia tộc cùng cội nguồn" }
        ]
      },
      {
        character: "日",
        name: "Bộ Nhật (日)",
        strokeCount: 4,
        meaning: "Mặt trời rực rỡ; ban ngày.",
        kanjiMeaning: "Biểu thị mặt trời, ánh sáng ban ngày, thời gian ngày tháng hoặc khí hậu nắng ấm.",
        examples: [
          { kanji: "早", amHan: "Tảo", nghia: "Sớm mai" },
          { kanji: "明", amHan: "Minh", nghia: "Sáng sủa rực rỡ" },
          { kanji: "春", amHan: "Xuân", nghia: "Mùa xuân nắng ấm" },
          { kanji: "時", amHan: "Thời", nghia: "Thời gian, giờ giấc" }
        ]
      },
      {
        character: "曰",
        name: "Bộ Viết (曰)",
        strokeCount: 4,
        meaning: "Miệng mở ra nói rằng, phát biểu.",
        kanjiMeaning: "Biểu thị lời nói, phát ngôn, bày tỏ ý kiến bằng lời.",
        examples: [
          { kanji: "替", amHan: "Thế", nghia: "Thay thế, đổi mới" }
        ]
      },
      {
        character: "月",
        name: "Bộ Nguyệt (月)",
        strokeCount: 4,
        meaning: "Mặt trăng khuyết; tháng trong năm.",
        kanjiMeaning: "Biểu thị vầng trăng, ánh sáng ban đêm hoặc chu kỳ thời gian theo tháng.",
        examples: [
          { kanji: "期", amHan: "Kỳ", nghia: "Thời kỳ, kỳ hạn" },
          { kanji: "朝", amHan: "Triều", nghia: "Buổi sáng sớm" }
        ]
      },
      {
        character: "木",
        name: "Bộ Mộc (木)",
        strokeCount: 4,
        meaning: "Cây cối có rễ và tán cành xum xuê.",
        kanjiMeaning: "Biểu thị các loài thực vật thân gỗ, rừng cây, đồ vật gia công bằng gỗ.",
        examples: [
          { kanji: "林", amHan: "Lâm", nghia: "Rừng thưa hai cây" },
          { kanji: "森", amHan: "Sâm", nghia: "Rừng rậm ba cây" },
          { kanji: "村", amHan: "Thôn", nghia: "Ngôi làng nhỏ quanh rặng cây" },
          { kanji: "校", amHan: "Hiệu", nghia: "Trường học làm bằng gỗ" }
        ]
      },
      {
        character: "欠",
        name: "Bộ Khiếm (欠)",
        strokeCount: 4,
        meaning: "Người há miệng ngáp; thiếu hụt.",
        kanjiMeaning: "Biểu thị hành động há to miệng (thở, ngáp, hát ca) hoặc sự thiếu thốn khiếm khuyết.",
        examples: [
          { kanji: "次", amHan: "Thứ", nghia: "Kế tiếp" },
          { kanji: "歌", amHan: "Ca", nghia: "Mở miệng hát ca bài hát" },
          { kanji: "欲", amHan: "Dục", nghia: "Mong muốn, khao khát" }
        ]
      },
      {
        character: "止",
        name: "Bộ Chỉ (止)",
        strokeCount: 4,
        meaning: "Bàn chân dừng lại; ngăn cấm.",
        kanjiMeaning: "Biểu thị sự dừng lại, đình chỉ, giới hạn bước chân không đi tiếp.",
        examples: [
          { kanji: "歩", amHan: "Bộ", nghia: "Bước chân đi bộ" },
          { kanji: "正", amHan: "Chính", nghia: "Chính trực, chuẩn mực" },
          { kanji: "歴", amHan: "Lịch", nghia: "Lịch sử trải qua" }
        ]
      },
      {
        character: "歹",
        name: "Bộ Đãi (歹)",
        strokeCount: 4,
        meaning: "Mảnh xương tàn rữa vụn; cái chết.",
        kanjiMeaning: "Biểu thị sự chết chóc, tan rã, mục nát, tàn lụi hoặc tai họa tử nạn.",
        examples: [
          { kanji: "死", amHan: "Tử", nghia: "Cái chết" },
          { kanji: "残", amHan: "Tàn", nghia: "Còn lại, sót lại tàn dư" },
          { kanji: "列", amHan: "Liệt", nghia: "Hàng lối, phân tách" }
        ]
      },
      {
        character: "殳",
        name: "Bộ Thù (殳)",
        strokeCount: 4,
        meaning: "Cây gậy gỗ đập; đánh đòn mạnh.",
        kanjiMeaning: "Biểu thị hành động dùng lực tay cầm gậy đánh, tác động cơ học mạnh.",
        examples: [
          { kanji: "段", amHan: "Đoạn", nghia: "Từng đoạn, giai đoạn" },
          { kanji: "殿", amHan: "Điện", nghia: "Cung điện cao sang" },
          { kanji: "殺", amHan: "Sát", nghia: "Giết hại" }
        ]
      },
      {
        character: "母",
        name: "Bộ Mẫu / Vô (母 / 毋)",
        strokeCount: 4,
        meaning: "Người mẹ có đôi bầu ngực nuôi con nhỏ.",
        kanjiMeaning: "Biểu thị tình mẫu tử, sự sinh nở, nuôi dưỡng tình yêu thương gia đình.",
        examples: [
          { kanji: "毎", amHan: "Mỗi", nghia: "Mỗi ngày (mẹ sinh nở liên tục)" },
          { kanji: "毒", amHan: "Độc", nghia: "Chất độc gây hại" }
        ]
      },
      {
        character: "比",
        name: "Bộ Bỉ (比)",
        strokeCount: 4,
        meaning: "Hai người xếp hàng đứng cạnh nhau so sánh.",
        kanjiMeaning: "Biểu thị việc so đo cao thấp, xếp hàng kề cận, so sánh đối chiếu.",
        examples: [
          { kanji: "皆", amHan: "Giai", nghia: "Mọi người cùng nhau" },
          { kanji: "階", amHan: "Giai", nghia: "Bậc thang tầng gác" }
        ]
      },
      {
        character: "毛",
        name: "Bộ Mao (毛)",
        strokeCount: 4,
        meaning: "Sợi lông, mái tóc, chùm lông thú.",
        kanjiMeaning: "Biểu thị lông tóc động vật, bề mặt lông tơ mịn màng, sợi nhỏ li ti.",
        examples: [
          { kanji: "毫", amHan: "Hào", nghia: "Chút xíu như sợi lông" }
        ]
      },
      {
        character: "氏",
        name: "Bộ Thị (氏)",
        strokeCount: 4,
        meaning: "Dòng tộc, huyết thống gia đình vọng tộc.",
        kanjiMeaning: "Biểu thị danh xưng dòng dõi họ hàng, thần dân trong gia tộc.",
        examples: [
          { kanji: "民", amHan: "Dân", nghia: "Người dân bá tánh" }
        ]
      },
      {
        character: "气",
        name: "Bộ Khí (气)",
        strokeCount: 4,
        meaning: "Luồng hơi bốc lên; bầu không khí.",
        kanjiMeaning: "Biểu thị hơi nước bốc lên, chất khí vô hình, hơi thở khí quyển.",
        examples: [
          { kanji: "汽", amHan: "Khí", nghia: "Hơi nước đầu máy xe lửa" }
        ]
      },
      {
        character: "水",
        name: "Bộ Thủy / Ba chấm thủy (水 / 氵)",
        strokeCount: 4,
        meaning: "Nước mát lành; dòng nước chảy xiết.",
        kanjiMeaning: "Biểu thị nước, sông hồ biển cả, chất lỏng, hành động tắm gội hoặc ẩm ướt.",
        examples: [
          { kanji: "海", amHan: "Hải", nghia: "Biển cả bao la" },
          { kanji: "河", amHan: "Hà", nghia: "Dòng sông lớn" },
          { kanji: "洗", amHan: "Tẩy", nghia: "Rửa ráy sạch sẽ" },
          { kanji: "泳", amHan: "Vịnh", nghia: "Bơi lội dưới nước" }
        ]
      },
      {
        character: "火",
        name: "Bộ Hỏa / Bốn chấm hỏa (火 / 灬)",
        strokeCount: 4,
        meaning: "Ngọn lửa bốc cháy ngùn ngụt.",
        kanjiMeaning: "Biểu thị lửa, sức nóng nhiệt độ, nấu nướng xào nấu hoặc thiêu đốt cháy sáng.",
        examples: [
          { kanji: "炎", amHan: "Viêm", nghia: "Ngọn lửa bùng cháy dữ dội" },
          { kanji: "焼", amHan: "Thiêu", nghia: "Nướng chín, thiêu cháy" },
          { kanji: "熱", amHan: "Nhiệt", nghia: "Nhiệt độ nóng bức" },
          { kanji: "照", amHan: "Chiếu", nghia: "Chiếu sáng rực rỡ" }
        ]
      },
      {
        character: "爪",
        name: "Bộ Trảo (爪 / 爫)",
        strokeCount: 4,
        meaning: "Móng vuốt chim muông; ngón tay xòe cào.",
        kanjiMeaning: "Biểu thị móng vuốt thú dữ, ngón tay vồ lấy cào cấu hoặc đón nhận tranh giành.",
        examples: [
          { kanji: "争", amHan: "Tranh", nghia: "Dùng tay tranh giành nhau" },
          { kanji: "受", amHan: "Thụ", nghia: "Đón nhận bằng đôi tay" }
        ]
      },
      {
        character: "父",
        name: "Bộ Phụ (父)",
        strokeCount: 4,
        meaning: "Người cha cầm gậy chỉ bảo răn dạy con cái.",
        kanjiMeaning: "Biểu thị người cha, bậc gia trưởng răn dạy, chỉ bảo kỷ cương gia đình.",
        examples: [
          { kanji: "爺", amHan: "Gia", nghia: "Ông cụ già" }
        ]
      },
      {
        character: "片",
        name: "Bộ Phiến (片)",
        strokeCount: 4,
        meaning: "Mảnh ván mỏng chẻ làm đôi bên phải.",
        kanjiMeaning: "Biểu thị tấm mỏng, phiến đá mảnh, một nửa bên hoặc giấy tờ thẻ bài.",
        examples: [
          { kanji: "版", amHan: "Bản", nghia: "Bản in ấn bằng gỗ" }
        ]
      },
      {
        character: "牛",
        name: "Bộ Ngưu (牛 / 牜)",
        strokeCount: 4,
        meaning: "Con trâu, con bò với cặp sừng cong.",
        kanjiMeaning: "Biểu thị gia súc móng guốc, súc vật cày cấy nông nghiệp hoặc phẩm vật tế lễ.",
        examples: [
          { kanji: "物", amHan: "Vật", nghia: "Sự vật, đồ vật" },
          { kanji: "特", amHan: "Đặc", nghia: "Đặc biệt, con trâu tốt" },
          { kanji: "牧", amHan: "Mục", nghia: "Chăn dắt đàn gia súc" }
        ]
      },
      {
        character: "犬",
        name: "Bộ Khuyển (犬 / 犭)",
        strokeCount: 4,
        meaning: "Con chó săn ngoan ngoãn vẫy đuôi.",
        kanjiMeaning: "Biểu thị các loài dã thú bốn chân, con vật săn bắn hoặc tính hung dữ.",
        examples: [
          { kanji: "猫", amHan: "Miêu", nghia: "Con mèo" },
          { kanji: "犯", amHan: "Phạm", nghia: "Phạm tội hung hăng" },
          { kanji: "狂", amHan: "Cuồng", nghia: "Điên cuồng hung dữ" }
        ]
      }
    ]
  },
  {
    id: "radicals-5",
    strokeCount: 5,
    title: "Bộ thủ 5 nét",
    description: "Nhóm 23 bộ thủ cấu tạo từ 5 nét, biểu thị đồ vật gia dụng, khoáng vật, ngũ cốc và các giác quan.",
    items: [
      {
        character: "玉",
        name: "Bộ Ngọc / Vương (玉 / 王)",
        strokeCount: 5,
        meaning: "Viên ngọc quý có chuỗi xâu; vua chúa.",
        kanjiMeaning: "Biểu thị đá quý, ngọc ngà châu báu, sự quý giá cao sang hoặc quyền lực vương quyền.",
        examples: [
          { kanji: "宝", amHan: "Bảo", nghia: "Bảo vật quý giá dưới mái nhà" },
          { kanji: "理", amHan: "Lý", nghia: "Mài giũa ngọc theo thớ -> Đạo lý" }
        ]
      },
      {
        character: "甘",
        name: "Bộ Cam (甘)",
        strokeCount: 5,
        meaning: "Vị ngọt trong miệng ngậm vật ngon.",
        kanjiMeaning: "Biểu thị vị ngọt ngào của thức ăn, sự nuông chiều hoặc êm dịu.",
        examples: [
          { kanji: "甚", amHan: "Thậm", nghia: "Rất đỗi, thậm tệ" }
        ]
      },
      {
        character: "生",
        name: "Bộ Sinh (生)",
        strokeCount: 5,
        meaning: "Mầm cây xanh tươi nhú lên khỏi mặt đất; sự sống.",
        kanjiMeaning: "Biểu thị sự sinh sôi, sinh đẻ, cuộc đời, nảy nở mầm sống hoặc tươi sống.",
        examples: [
          { kanji: "産", amHan: "Sản", nghia: "Sinh sản, tài sản" },
          { kanji: "甥", amHan: "Sanhed", nghia: "Cháu trai" }
        ]
      },
      {
        character: "用",
        name: "Bộ Dụng (用)",
        strokeCount: 5,
        meaning: "Dùng đồ vật vào công việc; sử dụng.",
        kanjiMeaning: "Biểu thị việc dùng, áp dụng vào thực tế, công dụng hoặc nhu cầu.",
        examples: [
          { kanji: "甫", amHan: "Phủ", nghia: "Bắt đầu" }
        ]
      },
      {
        character: "田",
        name: "Bộ Điền (田)",
        strokeCount: 5,
        meaning: "Thửa ruộng chia ô vuông bờ đất ngang dọc.",
        kanjiMeaning: "Biểu thị đồng ruộng trồng trọt lúa ngô, đất đai canh tác nông nghiệp.",
        examples: [
          { kanji: "男", amHan: "Nam", nghia: "Dùng sức lực trên đồng ruộng -> Đàn ông" },
          { kanji: "町", amHan: "Đinh", nghia: "Khu phố, xóm làng gần ruộng" },
          { kanji: "界", amHan: "Giới", nghia: "Ranh giới bờ ruộng" }
        ]
      },
      {
        character: "疒",
        name: "Bộ Nạch (疒)",
        strokeCount: 5,
        meaning: "Người ốm đau nằm trên giường bệnh đổ mồ hôi.",
        kanjiMeaning: "Biểu thị bệnh tật, ốm đau, thương tích, triệu chứng bệnh lý cơ thể người.",
        examples: [
          { kanji: "病", amHan: "Bệnh", nghia: "Cơn bệnh tật" },
          { kanji: "痛", amHan: "Thống", nghia: "Đau đớn nhức nhối" },
          { kanji: "疲", amHan: "Bì", nghia: "Mệt mỏi kiệt sức" }
        ]
      },
      {
        character: "白",
        name: "Bộ Bạch (白)",
        strokeCount: 5,
        meaning: "Màu trắng tinh khôi của hạt gạo bóc vỏ.",
        kanjiMeaning: "Biểu thị màu trắng trong sạch, rõ ràng rành mạch hoặc bày tỏ công khai.",
        examples: [
          { kanji: "百", amHan: "Bách", nghia: "Số một trăm" },
          { kanji: "的", amHan: "Đích", nghia: "Mục đích, tấm bia trắng" }
        ]
      },
      {
        character: "皮",
        name: "Bộ Bì (皮)",
        strokeCount: 5,
        meaning: "Tấm da thú được lột bằng tay.",
        kanjiMeaning: "Biểu thị lớp da, vỏ ngoài bao bọc sự vật hoặc bề mặt lột ra.",
        examples: [
          { kanji: "波", amHan: "Ba", nghia: "Làn sóng nước nhấp nhô da nước" },
          { kanji: "破", amHan: "Phá", nghia: "Rách nát, xé toạc lớp da" }
        ]
      },
      {
        character: "皿",
        name: "Bộ Mãnh (皿)",
        strokeCount: 5,
        meaning: "Cái đĩa, bát đĩa nông lòng đựng thức ăn.",
        kanjiMeaning: "Biểu thị đồ dùng chứa đựng thức ăn, đĩa bát, khay chậu gia đình.",
        examples: [
          { kanji: "盆", amHan: "Bồn", nghia: "Cái chậu bồn, lễ hội Bon" },
          { kanji: "益", amHan: "Ích", nghia: "Nước tràn trề trên đĩa -> Có ích" },
          { kanji: "盛", amHan: "Thịnh", nghia: "Thức ăn đầy ắp -> Thịnh vượng" }
        ]
      },
      {
        character: "目",
        name: "Bộ Mục (目)",
        strokeCount: 5,
        meaning: "Con mắt với tròng mắt bên trong.",
        kanjiMeaning: "Biểu thị con mắt, thị giác, hành động nhìn ngắm, theo dõi hoặc nhận thức.",
        examples: [
          { kanji: "見", amHan: "Kiến", nghia: "Nhìn thấy" },
          { kanji: "着", amHan: "Trước", nghia: "Mặc áo, đến nơi" },
          { kanji: "眼", amHan: "Nhãn", nghia: "Mắt, nhãn quan" }
        ]
      },
      {
        character: "矛",
        name: "Bộ Mâu (矛)",
        strokeCount: 5,
        meaning: "Cây giáo nhọn đâm thủng đồ vật.",
        kanjiMeaning: "Biểu thị vũ khí đâm nhọn, sự công kích đối kháng trong mâu thuẫn.",
        examples: [
          { kanji: "柔", amHan: "Nhu", nghia: "Mềm dẻo uốn lượn trước giáo mác" }
        ]
      },
      {
        character: "矢",
        name: "Bộ Thỉ (矢)",
        strokeCount: 5,
        meaning: "Mũi tên bay thẳng vun vút.",
        kanjiMeaning: "Biểu thị sự chuẩn xác, nhanh như tên bắn, quy chuẩn hoặc thẳng thắn.",
        examples: [
          { kanji: "知", amHan: "Tri", nghia: "Lời nói chuẩn như tên bắn -> Tri thức" },
          { kanji: "短", amHan: "Đoản", nghia: "Ngắn ngủi như mũi tên" }
        ]
      },
      {
        character: "石",
        name: "Bộ Thạch (石)",
        strokeCount: 5,
        meaning: "Hòn đá cuội rơi dưới sườn vách núi.",
        kanjiMeaning: "Biểu thị khoáng sản, đất đá cứng rắn, vật liệu xây dựng vững chãi.",
        examples: [
          { kanji: "砂", amHan: "Sa", nghia: "Cát bụi nhỏ" },
          { kanji: "破", amHan: "Phá", nghia: "Dùng đá đập vỡ" },
          { kanji: "研", amHan: "Nghiên", nghia: "Mài giũa đá sắc bén -> Nghiên cứu" }
        ]
      },
      {
        character: "示",
        name: "Bộ Thị / Kỳ (示 / 礻)",
        strokeCount: 5,
        meaning: "Bàn thờ tế lễ thần linh; điềm báo.",
        kanjiMeaning: "Biểu thị tín ngưỡng, lễ nghi cúng tế thần linh, phúc lộc hoặc điềm báo trời cao.",
        examples: [
          { kanji: "社", amHan: "Xã", nghia: "Đền thờ thần đất -> Công ty, xã hội" },
          { kanji: "神", amHan: "Thần", nghia: "Thần linh tối cao" },
          { kanji: "福", amHan: "Phúc", nghia: "Phúc đức viên mãn" }
        ]
      },
      {
        character: "禾",
        name: "Bộ Hòa (禾)",
        strokeCount: 5,
        meaning: "Cây lúa trĩu bông hạt chín vàng.",
        kanjiMeaning: "Biểu thị cây lúa, ngũ cốc, mùa vụ mùa màng gặt hái lương thực nông nghiệp.",
        examples: [
          { kanji: "秋", amHan: "Thu", nghia: "Mùa thu lúa chín phơi lửa" },
          { kanji: "科", amHan: "Khoa", nghia: "Đong đếm thóc gạo -> Khoa học, phân khoa" },
          { kanji: "私", amHan: "Tư", nghia: "Thóc lúa của riêng mình" }
        ]
      },
      {
        character: "穴",
        name: "Bộ Huyệt (穴)",
        strokeCount: 5,
        meaning: "Hang đá sâu chui vào dưới mái nhà.",
        kanjiMeaning: "Biểu thị hang động dưới đất, hốc đá trống rỗng, lỗ hổng đào bới.",
        examples: [
          { kanji: "空", amHan: "Không", nghia: "Bầu trời trong veo trống rỗng" },
          { kanji: "窓", amHan: "Song", nghia: "Khung cửa sổ thông khí" }
        ]
      },
      {
        character: "立",
        name: "Bộ Lập (立)",
        strokeCount: 5,
        meaning: "Người đứng thẳng hai chân trên mặt đất.",
        kanjiMeaning: "Biểu thị tư thế đứng vững chãi, sự thành lập, xác lập vị trí kiên cố.",
        examples: [
          { kanji: "站", amHan: "Trạm", nghia: "Bến ga dừng đỗ" },
          { kanji: "親", amHan: "Thân", nghia: "Bố mẹ đứng trên cây dõi mắt ngóng con" }
        ]
      }
    ]
  },
  {
    id: "radicals-6",
    strokeCount: 6,
    title: "Bộ thủ 6 nét",
    description: "Nhóm 29 bộ thủ gồm 6 nét, bao gồm các loài thực vật, tơ lụa, côn trùng và các bộ phận cơ thể.",
    items: [
      {
        character: "竹",
        name: "Bộ Trúc (竹 / ⺮)",
        strokeCount: 6,
        meaning: "Cây tre, ống tre, rặng tre nứa.",
        kanjiMeaning: "Biểu thị loài tre trúc, đồ vật đan lát bằng tre hoặc quản bút viết chữ.",
        examples: [
          { kanji: "筆", amHan: "Bút", nghia: "Cây bút lông cán trúc" },
          { kanji: "箸", amHan: "Trứ", nghia: "Đôi đũa tre gắp cơm" },
          { kanji: "箱", amHan: "Tương", nghia: "Cái hộp đan bằng tre" }
        ]
      },
      {
        character: "米",
        name: "Bộ Mễ (米)",
        strokeCount: 6,
        meaning: "Hạt gạo trắng sau khi giã trấu.",
        kanjiMeaning: "Biểu thị hạt gạo, lương thực tinh bột, các loại bột phấn mịn màng.",
        examples: [
          { kanji: "粉", amHan: "Phấn", nghia: "Bột gạo mịn" },
          { kanji: "料", amHan: "Liệu", nghia: "Đong đếm thóc gạo nấu ăn" }
        ]
      },
      {
        character: "糸",
        name: "Bộ Mịch (糸)",
        strokeCount: 6,
        meaning: "Cuộn tơ tằm óng ả; sợi chỉ may vá.",
        kanjiMeaning: "Biểu thị tơ lụa, sợi chỉ, dây thừng, sự kết nối, may mặc thêu thùa.",
        examples: [
          { kanji: "紙", amHan: "Chỉ", nghia: "Giấy viết làm từ sợi tơ" },
          { kanji: "結", amHan: "Kết", nghia: "Thắt nút sợi dây, kết nối" },
          { kanji: "組", amHan: "Tổ", nghia: "Tổ hợp, đan bện sợi chỉ" },
          { kanji: "終", amHan: "Chung", nghia: "Kéo hết sợi chỉ -> Kết thúc" }
        ]
      },
      {
        character: "羊",
        name: "Bộ Dương (羊 / ⺶)",
        strokeCount: 6,
        meaning: "Con cừu, con dê có đôi sừng cong hiền lành.",
        kanjiMeaning: "Biểu thị sự lương thiện hiền lành, điều may mắn tốt lành hoặc vẻ đẹp thẩm mỹ.",
        examples: [
          { kanji: "美", amHan: "Mỹ", nghia: "Con cừu to lớn béo tốt -> Đẹp" },
          { kanji: "着", amHan: "Trước", nghia: "Mặc áo lông cừu" },
          { kanji: "善", amHan: "Thiện", nghia: "Lương thiện, tốt đẹp" }
        ]
      },
      {
        character: "羽",
        name: "Bộ Vũ (羽)",
        strokeCount: 6,
        meaning: "Đôi cánh chim có hai hàng lông vũ.",
        kanjiMeaning: "Biểu thị lông vũ, cánh chim bay lượn, sự nhẹ nhàng thanh thoát trên không.",
        examples: [
          { kanji: "習", amHan: "Tập", nghia: "Chim non tập vỗ cánh -> Học tập" },
          { kanji: "翌", amHan: "Dực", nghia: "Sáng hôm sau chim bay" }
        ]
      },
      {
        character: "老",
        name: "Bộ Lão (老 / 耂)",
        strokeCount: 6,
        meaning: "Người già lưng còng tóc dài chống gậy.",
        kanjiMeaning: "Biểu thị tuổi già, người cao tuổi, sự trường thọ hoặc tôn kính thầy cô.",
        examples: [
          { kanji: "考", amHan: "Khảo", nghia: "Người già suy ngẫm sâu xa -> Suy nghĩ" },
          { kanji: "者", amHan: "Giả", nghia: "Người, học giả" }
        ]
      },
      {
        character: "耳",
        name: "Bộ Nhĩ (耳)",
        strokeCount: 6,
        meaning: "Vành tai con người với các nếp cuộn.",
        kanjiMeaning: "Biểu thị thính giác, lỗ tai, hành động lắng nghe âm thanh tiếng nói.",
        examples: [
          { kanji: "聞", amHan: "Văn", nghia: "Đứng bên cửa ngóng tai nghe" },
          { kanji: "声", amHan: "Thanh", nghia: "Âm thanh tiếng nói" },
          { kanji: "職", amHan: "Chức", nghia: "Nghề nghiệp lắng nghe chỉ thị" }
        ]
      },
      {
        character: "肉",
        name: "Bộ Nhục / Nguyệt (肉 / ⺼)",
        strokeCount: 6,
        meaning: "Miếng thịt có thớ gân cắt ra.",
        kanjiMeaning: "Biểu thị các bộ phận cơ thể sinh học, thịt, nội tạng, cơ bắp của con người.",
        examples: [
          { kanji: "肌", amHan: "Cơ", nghia: "Làn da thịt mềm mại" },
          { kanji: "肝", amHan: "Can", nghia: "Lá gan nội tạng" },
          { kanji: "胸", amHan: "Hung", nghia: "Lồng ngực" }
        ]
      },
      {
        character: "自",
        name: "Bộ Tự (自)",
        strokeCount: 6,
        meaning: "Chiếc mũi của mình; tự thân.",
        kanjiMeaning: "Biểu thị bản thân mình, tự động, tự phát, bắt đầu từ chính mình.",
        examples: [
          { kanji: "白", amHan: "Bạch", nghia: "Rõ ràng" },
          { kanji: "息", amHan: "Tức", nghia: "Hơi thở thở ra từ mũi và tim" }
        ]
      },
      {
        character: "至",
        name: "Bộ Chí (至)",
        strokeCount: 6,
        meaning: "Mũi tên cắm xuống đất; đạt tới đích.",
        kanjiMeaning: "Biểu thị việc đi đến nơi, đạt tới tột đỉnh, mục tiêu chạm đích.",
        examples: [
          { kanji: "室", amHan: "Thất", nghia: "Gian phòng đi đến cư ngụ" },
          { kanji: "屋", amHan: "Ốc", nghia: "Nhà cửa" }
        ]
      },
      {
        character: "舌",
        name: "Bộ Thiệt (舌)",
        strokeCount: 6,
        meaning: "Chiếc lưỡi thè ra từ miệng nếm vị.",
        kanjiMeaning: "Biểu thị vị giác nếm đồ ăn, lời ăn tiếng nói nơi đầu lưỡi.",
        examples: [
          { kanji: "話", amHan: "Thoại", nghia: "Lời nói thốt ra từ miệng lưỡi" }
        ]
      },
      {
        character: "舟",
        name: "Bộ Chu (舟)",
        strokeCount: 6,
        meaning: "Con thuyền độc mộc lướt trên sông.",
        kanjiMeaning: "Biểu thị các loại tàu thuyền bè, phương tiện giao thông đường thủy.",
        examples: [
          { kanji: "船", amHan: "Thuyền", nghia: "Tàu thuyền lớn vượt sóng" },
          { kanji: "航", amHan: "Hàng", nghia: "Hàng hải, đi thuyền buôn" }
        ]
      },
      {
        character: "艸",
        name: "Bộ Thảo / Cỏ (艸 / 艹)",
        strokeCount: 6,
        meaning: "Bụi cỏ dại hai nhánh đâm chồi xanh tốt.",
        kanjiMeaning: "Biểu thị các loài cỏ cây, hoa lá, thảo mộc, rau củ quả hoặc dược liệu.",
        examples: [
          { kanji: "花", amHan: "Hoa", nghia: "Bông hoa tươi khoe sắc" },
          { kanji: "茶", amHan: "Trà", nghia: "Lá trà thơm pha nước" },
          { kanji: "薬", amHan: "Dược", nghia: "Thuốc thang từ thảo mộc làm vui lòng người" },
          { kanji: "草", amHan: "Thảo", nghia: "Cỏ cây ngoài đồng" }
        ]
      },
      {
        character: "虫",
        name: "Bộ Trùng (虫)",
        strokeCount: 6,
        meaning: "Con côn trùng, sâu bọ, rắn rết uốn khúc.",
        kanjiMeaning: "Biểu thị các loài côn trùng, sâu bọ, rắn rết hoặc loài giáp xác nhỏ.",
        examples: [
          { kanji: "蚊", amHan: "Văn", nghia: "Con muỗi vo ve bên tai" },
          { kanji: "蛇", amHan: "Xà", nghia: "Con rắn trườn" },
          { kanji: "蛍", amHan: "Huỳnh", nghia: "Con đom đóm phát sáng" }
        ]
      },
      {
        character: "血",
        name: "Bộ Huyết (血)",
        strokeCount: 6,
        meaning: "Giọt máu đọng trong chiếc đĩa cúng tế thần.",
        kanjiMeaning: "Biểu thị máu huyết, sinh mệnh, dòng máu gia tộc hoặc sự hiến tế.",
        examples: [
          { kanji: "衆", amHan: "Chúng", nghia: "Quần chúng nhiều người dưới mặt trời" }
        ]
      },
      {
        character: "行",
        name: "Bộ Hành (行)",
        strokeCount: 6,
        meaning: "Ngã tư đường phố lớn giao nhau.",
        kanjiMeaning: "Biểu thị bước chân đi lại trên phố xá, sự lưu thông, tiến hành công việc.",
        examples: [
          { kanji: "術", amHan: "Thuật", nghia: "Kỹ thuật, phương pháp trên đường đời" },
          { kanji: "街", amHan: "Nhai", nghia: "Đường phố xóm chợ nhộn nhịp" }
        ]
      },
      {
        character: "衣",
        name: "Bộ Y (衣 / 衤)",
        strokeCount: 6,
        meaning: "Chiếc áo dài có cổ áo chéo vạt trang trọng.",
        kanjiMeaning: "Biểu thị quần áo, trang phục, vải vóc may mặc hoặc đồ che đậy ngoài thân.",
        examples: [
          { kanji: "袋", amHan: "Đại", nghia: "Túi xách vải may" },
          { kanji: "被", amHan: "Bị", nghia: "Trùm chăn áo lên người" },
          { kanji: "装", amHan: "Trang", nghia: "Trang phục chỉnh tề" }
        ]
      },
      {
        character: "西",
        name: "Bộ Á / Tây (西 / 襾)",
        strokeCount: 6,
        meaning: "Chiếc tổ chim chiều tà; phương Tây mặt trời lặn.",
        kanjiMeaning: "Biểu thị phương Tây, tổ chim che đậy hoặc che phủ từ trên xuống.",
        examples: [
          { kanji: "要", amHan: "Yếu", nghia: "Thắt lưng người phụ nữ -> Quan trọng, cốt yếu" },
          { kanji: "票", amHan: "Phiếu", nghia: "Lá phiếu bầu" }
        ]
      }
    ]
  },
  {
    id: "radicals-7",
    strokeCount: 7,
    title: "Bộ thủ 7 nét trở lên",
    description: "Nhóm các bộ thủ lớn từ 7 đến 17 nét, đại diện cho ngôn ngữ, vàng bạc, chim muông, thức ăn và thời tiết.",
    items: [
      {
        character: "言",
        name: "Bộ Ngôn / Ngôn đứng (言 / 訁)",
        strokeCount: 7,
        meaning: "Lời ăn tiếng nói thốt ra từ đáy lòng có âm điệu.",
        kanjiMeaning: "Biểu thị ngôn ngữ, lời nói, phát ngôn, bàn luận, đối thoại hoặc sách vở ghi chép.",
        examples: [
          { kanji: "語", amHan: "Ngữ", nghia: "Ngôn ngữ, tiếng nói" },
          { kanji: "話", amHan: "Thoại", nghia: "Trò chuyện, đàm thoại" },
          { kanji: "読", amHan: "Độc", nghia: "Đọc sách to thành tiếng" },
          { kanji: "計", amHan: "Kế", nghia: "Tính toán kế hoạch" }
        ]
      },
      {
        character: "見",
        name: "Bộ Kiến (見)",
        strokeCount: 7,
        meaning: "Con mắt to trên đôi chân người đang đứng quan sát.",
        kanjiMeaning: "Biểu thị việc nhìn thấy, quan sát, trông coi, gặp gỡ hoặc kiến thức thị giác.",
        examples: [
          { kanji: "視", amHan: "Thị", nghia: "Thị lực, nhìn nhận" },
          { kanji: "覚", amHan: "Giác", nghia: "Nhận thức, tỉnh giác" },
          { kanji: "親", amHan: "Thân", nghia: "Bố mẹ thân thương ngóng trông" }
        ]
      },
      {
        character: "貝",
        name: "Bộ Bối (貝)",
        strokeCount: 7,
        meaning: "Vỏ con sò biển quý thời cổ dùng làm tiền tệ.",
        kanjiMeaning: "Biểu thị tiền tài, của cải, mua bán trao đổi hàng hóa, tài chính kinh tế hoặc quý báu.",
        examples: [
          { kanji: "買", amHan: "Mãi", nghia: "Mua sắm bằng tiền sò" },
          { kanji: "貴", amHan: "Quý", nghia: "Cao quý, quý giá đắt tiền" },
          { kanji: "貧", amHan: "Bần", nghia: "Nghèo khó ít tiền của" },
          { kanji: "財", amHan: "Tài", nghia: "Tiền tài tài sản" }
        ]
      },
      {
        character: "走",
        name: "Bộ Tẩu (走)",
        strokeCount: 7,
        meaning: "Người dang hai tay vội vã chạy nhanh trên đất.",
        kanjiMeaning: "Biểu thị hành động chạy nhanh, vội vã phi nhanh, rượt đuổi thoát thân.",
        examples: [
          { kanji: "起", amHan: "Khởi", nghia: "Thức dậy đứng lên chạy" },
          { kanji: "越", amHan: "Việt", nghia: "Vượt qua ranh giới" }
        ]
      },
      {
        character: "足",
        name: "Bộ Túc (足 / ⻊)",
        strokeCount: 7,
        meaning: "Bàn chân người có đầu gối vững vàng; đầy đủ.",
        kanjiMeaning: "Biểu thị đôi chân, bàn chân bước đi, hành động đá nhảy, dẫm đạp hoặc sự đầy đủ túc mãn.",
        examples: [
          { kanji: "路", amHan: "Lộ", nghia: "Con đường cho bước chân đi" },
          { kanji: "跳", amHan: "Khiêu", nghia: "Bật nhảy cao" },
          { kanji: "踊", amHan: "Dũng", nghia: "Nhảy múa rộn ràng" }
        ]
      },
      {
        character: "車",
        name: "Bộ Xa (車)",
        strokeCount: 7,
        meaning: "Chiếc xe kéo có hai bánh và thùng xe nhìn từ trên.",
        kanjiMeaning: "Biểu thị các loại xe cộ, bánh xe lăn, phương tiện vận tải đường bộ hoặc máy móc cơ khí.",
        examples: [
          { kanji: "転", amHan: "Chuyển", nghia: "Bánh xe lăn tròn -> Chuyển động" },
          { kanji: "輪", amHan: "Luân", nghia: "Bánh xe luân hồi" },
          { kanji: "軍", amHan: "Quân", nghia: "Xe bọc thép trong quân đội" }
        ]
      },
      {
        character: "辶",
        name: "Bộ Sước (辶 / 辵)",
        strokeCount: 7,
        meaning: "Bước chân vừa đi vừa dừng trên con đường dài.",
        kanjiMeaning: "Biểu thị sự di chuyển, đi lại trên đường lộ, khoảng cách xa gần, tiến lui hoặc gặp gỡ.",
        examples: [
          { kanji: "道", amHan: "Đạo", nghia: "Con đường dẫn lối" },
          { kanji: "通", amHan: "Thông", nghia: "Thông suốt đi qua" },
          { kanji: "近", amHan: "Cận", nghia: "Gần gũi trên quãng đường" },
          { kanji: "進", amHan: "Tiến", nghia: "Tiến bước về phía trước" }
        ]
      },
      {
        character: "阝",
        name: "Bộ Ấp / Phụ (阝)",
        strokeCount: 7,
        meaning: "Ấp (ở bên phải) chỉ làng xóm; Phụ (ở bên trái) chỉ gò đất cao che chắn.",
        kanjiMeaning: "Khi ở bên phải biểu thị thành quách, thôn ấp dân cư; khi ở bên trái biểu thị đồi dốc cheo leo hiểm trở.",
        examples: [
          { kanji: "部", amHan: "Bộ", nghia: "Bộ phận, phòng ban trong làng ấp" },
          { kanji: "都", amHan: "Đô", nghia: "Đô thành hoa lệ đông đúc" },
          { kanji: "防", amHan: "Phòng", nghia: "Gò đất phòng thủ chắn lũ" }
        ]
      },
      {
        character: "酉",
        name: "Bộ Dậu (酉)",
        strokeCount: 7,
        meaning: "Chiếc bình ủ men rượu đã chín thơm.",
        kanjiMeaning: "Biểu thị việc ủ men rượu bia, chất cồn lên men, canh giờ Dậu hoặc các loại nước sốt ủ chín.",
        examples: [
          { kanji: "酒", amHan: "Tửu", nghia: "Rượu ngon uống say" },
          { kanji: "配", amHan: "Phối", nghia: "Chia rượu cho mọi người -> Phân phối" },
          { kanji: "酸", amHan: "Toan", nghia: "Vị chua lên men" }
        ]
      },
      {
        character: "里",
        name: "Bộ Lý (里)",
        strokeCount: 7,
        meaning: "Đơn vị dặm đường làng quê ruộng đất.",
        kanjiMeaning: "Biểu thị dặm đường dài, làng xóm nông thôn yên bình hoặc đo đạc khoảng cách.",
        examples: [
          { kanji: "野", amHan: "Dã", nghia: "Cánh đồng hoang dã" },
          { kanji: "重", amHan: "Trọng", nghia: "Nặng nề mang vác ngàn dặm" }
        ]
      },
      {
        character: "金",
        name: "Bộ Kim / Kim đứng (金 / 釒)",
        strokeCount: 8,
        meaning: "Quặng kim loại vàng bạc chôn sâu trong lòng đất.",
        kanjiMeaning: "Biểu thị vàng bạc, tiền bạc, khoáng sản kim loại (sắt, đồng, thép), dụng cụ kim khí bén nhọn.",
        examples: [
          { kanji: "銀", amHan: "Ngân", nghia: "Bạc trắng sáng" },
          { kanji: "鉄", amHan: "Thiết", nghia: "Sắt thép cứng rắn" },
          { kanji: "銅", amHan: "Đồng", nghia: "Kim loại đồng đỏ" },
          { kanji: "針", amHan: "Châm", nghia: "Cây kim may bằng kim loại" }
        ]
      },
      {
        character: "門",
        name: "Bộ Môn (門)",
        strokeCount: 8,
        meaning: "Hai cánh cổng lớn mở ra đón khách.",
        kanjiMeaning: "Biểu thị cánh cổng, lối ra vào, sự đóng mở, ngăn cách giữa trong và ngoài.",
        examples: [
          { kanji: "開", amHan: "Khai", nghia: "Mở hai cánh cổng ra" },
          { kanji: "閉", amHan: "Bế", nghia: "Đóng then cài cổng" },
          { kanji: "間", amHan: "Gian", nghia: "Khoảng không nhìn qua khe cổng" }
        ]
      },
      {
        character: "雨",
        name: "Bộ Vũ (雨)",
        strokeCount: 8,
        meaning: "Bầu trời mây giông tuôn rơi từng giọt mưa.",
        kanjiMeaning: "Biểu thị hiện tượng thời tiết thiên nhiên liên quan đến mưa, mây, sấm sét, tuyết sương.",
        examples: [
          { kanji: "雪", amHan: "Tuyết", nghia: "Bông tuyết trắng rơi từ trời" },
          { kanji: "雲", amHan: "Vân", nghia: "Mây giông giăng lối" },
          { kanji: "電", amHan: "Điện", nghia: "Sấm sét lóe sáng khi trời mưa" }
        ]
      },
      {
        character: "青",
        name: "Bộ Thanh (青)",
        strokeCount: 8,
        meaning: "Màu xanh biếc tươi trẻ của cỏ cây nảy chồi.",
        kanjiMeaning: "Biểu thị màu xanh biếc, sự tươi mát non trẻ, thanh xuân trong sáng.",
        examples: [
          { kanji: "静", amHan: "Tĩnh", nghia: "Yên tĩnh thanh bình" },
          { kanji: "清", amHan: "Thanh", nghia: "Dòng nước trong veo" }
        ]
      },
      {
        character: "食",
        name: "Bộ Thực (食 / 飠)",
        strokeCount: 9,
        meaning: "Nồi cơm đậy nắp bốc khói nghi ngút; đồ ăn.",
        kanjiMeaning: "Biểu thị thức ăn, cơm nước, việc ăn uống no nê, ẩm thực và các món ngon.",
        examples: [
          { kanji: "飯", amHan: "Phạn", nghia: "Bát cơm ăn no" },
          { kanji: "飲", amHan: "Ẩm", nghia: "Uống nước ngửa cổ há miệng" },
          { kanji: "館", amHan: "Quán", nghia: "Quán ăn, nhà khách" }
        ]
      },
      {
        character: "首",
        name: "Bộ Thủ (首)",
        strokeCount: 9,
        meaning: "Chiếc đầu người có tóc và cổ; vị trí đứng đầu.",
        kanjiMeaning: "Biểu thị cái đầu, chiếc cổ, vị trí đứng đầu lãnh đạo, thứ nhất khởi đầu.",
        examples: [
          { kanji: "道", amHan: "Đạo", nghia: "Dẫn đầu trên con đường" }
        ]
      },
      {
        character: "風",
        name: "Bộ Phong (風)",
        strokeCount: 9,
        meaning: "Gió thổi mát rượi cuốn theo côn trùng sinh sôi.",
        kanjiMeaning: "Biểu thị ngọn gió thổi, luồng không khí di động, phong thái hoặc phong tục tập quán.",
        examples: [
          { kanji: "嵐", amHan: "Lam", nghia: "Cơn bão giông tố trên núi" }
        ]
      },
      {
        character: "魚",
        name: "Bộ Ngư (魚)",
        strokeCount: 11,
        meaning: "Con cá bơi lội có vảy và vây đuôi nhấp nhô.",
        kanjiMeaning: "Biểu thị các loài cá, sinh vật sống dưới nước hoặc món ăn hải sản biển cả.",
        examples: [
          { kanji: "鮮", amHan: "Tiên", nghia: "Cá tươi và cừu béo -> Tươi ngon" },
          { kanji: "鯨", amHan: "Kình", nghia: "Cá voi khổng lồ" }
        ]
      },
      {
        character: "鳥",
        name: "Bộ Điểu (鳥)",
        strokeCount: 11,
        meaning: "Con chim đuôi dài đậu trên cành cây ngước mỏ.",
        kanjiMeaning: "Biểu thị các loài chim muông bay lượn trên trời hoặc gia cầm nuôi lấy trứng thịt.",
        examples: [
          { kanji: "鳴", amHan: "Minh", nghia: "Chim mở miệng hót vang" },
          { kanji: "鶏", amHan: "Kê", nghia: "Con gà gáy sáng" }
        ]
      }
    ]
  }
];

// Hàm fetch SVG path từ KanjiVG cho từng chữ
function fetchSvg(hex) {
  return new Promise((resolve) => {
    const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;
    https.get(url, res => {
      if (res.statusCode !== 200) {
        return resolve({ hex, status: res.statusCode, paths: [] });
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Trích xuất các nét d="..." từ StrokePaths
        const strokePathsMatch = data.match(/<g id="kvg:StrokePaths_[^"]*"[^>]*>([\s\S]*?)<\/g>\s*<g id="kvg:StrokeNumbers/);
        const searchArea = strokePathsMatch ? strokePathsMatch[1] : data;
        const regex = /<path[^>]+d="([^"]+)"/g;
        const paths = [];
        let match;
        while ((match = regex.exec(searchArea)) !== null) {
          paths.push(match[1]);
        }
        resolve({ hex, status: 200, paths });
      });
    }).on('error', err => resolve({ hex, error: err.message, paths: [] }));
  });
}

// Bổ sung các nét vẽ thủ công dự phòng nếu mạng lỗi
const fallbackPaths = {
  '04e00': ["M11,54.25c3.19,0.62,6.25,0.75,9.73,0.5c20.64-1.5,50.39-5.12,68.58-5.24c3.6-0.02,5.77,0.24,7.57,0.49"],
  '04e28': ["M52.75,12.62c1.09,1.09,1.74,2.38,1.74,4.25c0,4.88-0.08,57.12-0.11,74.75c-0.01,3.46-0.01,5.88-0.01,6.88"],
  '04e36': ["M42.88,38.12c4.14,2.78,10.7,11.45,11.73,15.79"],
  '04e3f': ["M76.5,14c0.12,1.35-0.1,2.83-0.78,4.19C69.38,30.75,54.25,48.62,26.5,60"],
  '04e59': ["M28.75,34.5c1.62,0.62,3.34,0.68,5.18,0.46c6.45-0.78,28.7-4.21,32.32-4.71c2.19-0.3,3.78,1.37,3.15,3.62c-0.9,3.2-3.65,11.38-5.59,16.5c-0.64,1.69-0.93,2.82,0.44,3.75c4.75,3.25,8.12,5.88,12.75,10.38c4.27,4.15,4.72,7.74,1.5,10.75c-3.75,3.5-12.75,11.25-18.75,11.25c-5,0-4.5-3.5-1.5-6.5c4-4,10-9.25,10.5-13.75c0.31-2.77-2.07-5.2-5.5-8.25c-4.75-4.25-11-9.5-15.5-12.5"],
  '04e85': ["M53.77,15.83c1.09,1.19,1.74,2.67,1.74,4.75c0,14.61-0.01,63.1-0.01,68.13c0,9.79-6.32,1.51-7.82,0.22"]
};

async function buildAllRadicals() {
  console.log('Building radicals data...');
  const compiledGroups = [];

  for (const group of rawRadicalGroups) {
    console.log(`Processing ${group.title} (${group.items.length} bộ)...`);
    const compiledItems = [];

    for (let i = 0; i < group.items.length; i++) {
      const item = group.items[i];
      const char = item.character.split('/')[0].trim();
      const hex = char.codePointAt(0).toString(16).padStart(5, '0');
      
      const res = await fetchSvg(hex);
      let paths = res.paths;
      if (!paths || paths.length === 0) {
        paths = fallbackPaths[hex] || [
          "M20,50 L80,50"
        ];
      }

      compiledItems.push({
        id: `rad-${group.strokeCount}-${i + 1}`,
        character: item.character,
        name: item.name,
        strokeCount: item.strokeCount,
        meaning: item.meaning,
        kanjiMeaning: item.kanjiMeaning,
        examples: item.examples,
        paths: paths
      });

      // Nhỏ hơn 1 chút delay để tránh rate-limit
      await new Promise(r => setTimeout(r, 60));
    }

    compiledGroups.push({
      id: group.id,
      strokeCount: group.strokeCount,
      title: group.title,
      description: group.description,
      items: compiledItems
    });
  }

  const jsContent = `/**
 * ==========================================================================
 * DỮ LIỆU BỘ THỦ TIẾNG NHẬT (KANJI RADICALS) - PHÂN THEO SỐ NÉT
 * Nguồn: Video bài giảng "Kanji - Bộ thủ tiếng Nhật" của cô Ngọc Tiệp Minato
 * Gồm đầy đủ:
 *  1. Cách viết: Vector SVG các nét chữ chuẩn KanjiVG chạy lặp tuần hoàn
 *  2. Tên của bộ đó (Hán Việt & Hán tự)
 *  3. Ý nghĩa của bộ thủ đó
 *  4. Ý nghĩa của bộ thủ đó trong Kanji (kèm ví dụ Hán tự tiêu biểu)
 * ==========================================================================
 */

const radicalsData = ${JSON.stringify(compiledGroups, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { radicalsData };
}
`;

  const outputPath = path.join(__dirname, '..', 'data', 'radicals_data.js');
  fs.writeFileSync(outputPath, jsContent, 'utf8');
  console.log(`Successfully generated ${outputPath}! File size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
}

buildAllRadicals();
