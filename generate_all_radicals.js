const fs = require('fs');
const https = require('https');
const path = require('path');

// Đầy đủ 17 nhóm bộ thủ từ 1 nét đến 17 nét, tách biệt hoàn toàn không gộp
// Chuẩn hóa theo video bài giảng "Kanji - Bộ thủ tiếng Nhật" của cô Ngọc Tiệp Minato
const allGroupsDefinition = [
  // 1 NÉT
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
        hex: "04e00",
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
        hex: "04e28",
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
        hex: "04e36",
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
        hex: "04e3f",
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
        hex: "04e59",
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
        hex: "04e85",
        meaning: "Nét sổ có móc ngược ở chân (hình lưỡi câu cá).",
        kanjiMeaning: "Biểu thị lưỡi câu cá, móc sắt giữ lại, sự vướng móc hoặc sự việc đã hoàn tất dừng lại.",
        examples: [
          { kanji: "了", amHan: "Liễu", nghia: "Kết thúc, hoàn tất" },
          { kanji: "事", amHan: "Sự", nghia: "Sự việc, công việc" }
        ]
      }
    ]
  },

  // 2 NÉT
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
        hex: "04e8c",
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
        hex: "04ea0",
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
        hex: "04eba",
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
        hex: "0513f",
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
        hex: "05165",
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
        hex: "0516b",
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
        hex: "05182",
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
        hex: "05196",
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
        hex: "051ab",
        meaning: "Nước đá, băng giá, hơi lạnh buốt.",
        kanjiMeaning: "Biểu thị nhiệt độ thấp, đóng băng, buốt giá, tuyết lạnh đông cứng.",
        examples: [
          { kanji: "冬", amHan: "Đông", nghia: "Mùa đông lạnh giá" },
          { kanji: "冷", amHan: "Lãnh", nghia: "Lạnh lẽo, nguội" },
          { kanji: "凍", amHan: "Đống", nghia: "Đóng băng" }
        ]
      },
      {
        character: "几",
        name: "Bộ Kỷ (几)",
        strokeCount: 2,
        hex: "051e0",
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
        hex: "051f5",
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
        hex: "05200",
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
        hex: "0529b",
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
        hex: "052f9",
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
        hex: "05315",
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
        hex: "0531a",
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
        hex: "05338",
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
        hex: "05341",
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
        hex: "0535c",
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
        hex: "05369",
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
        hex: "05382",
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
        hex: "053b6",
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
        hex: "053c8",
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

  // 3 NÉT
  {
    id: "radicals-3",
    strokeCount: 3,
    title: "Bộ thủ 3 nét",
    description: "Nhóm 29 bộ thủ cấu tạo từ 3 nét, chiếm tỉ trọng lớn các từ vựng chỉ đời sống, thiên nhiên và xã hội.",
    items: [
      {
        character: "口",
        name: "Bộ Khẩu (口)",
        strokeCount: 3,
        hex: "053e3",
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
        hex: "056d7",
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
        hex: "0571f",
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
        hex: "058eb",
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
        hex: "05902",
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
        hex: "05915",
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
        hex: "05927",
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
        hex: "05973",
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
        hex: "05b50",
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
        hex: "05b80",
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
        hex: "05bf8",
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
        hex: "05c0f",
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
        hex: "05c22",
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
        hex: "05c38",
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
        hex: "05c71",
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
        hex: "05ddd",
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
        hex: "05de5",
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
        hex: "05df1",
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
        hex: "05dfe",
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
        hex: "05e72",
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
        hex: "05e7a",
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
        hex: "05e7f",
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
        hex: "05ef4",
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
        hex: "05efe",
        meaning: "Hai tay chắp lại nâng đồ vật lên.",
        kanjiMeaning: "Biểu thị hành động cung kính dâng hiến, nâng đỡ đồ vật bằng hai tay.",
        examples: [
          { kanji: "弁", amHan: "Biện", nghia: "Hùng biện, hộp cơm bento" },
          { kanji: "弊", amHan: "Tệ", nghia: "Tệ hại, xá" }
        ]
      },
      {
        character: "弋",
        name: "Bộ Dặc (弋)",
        strokeCount: 3,
        hex: "05f0b",
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
        hex: "05f13",
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
        hex: "05f50",
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
        hex: "05f61",
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
        hex: "05f73",
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

  // 4 NÉT
  {
    id: "radicals-4",
    strokeCount: 4,
    title: "Bộ thủ 4 nét",
    description: "Nhóm 30 bộ thủ quan trọng gồm 4 nét, biểu thị các yếu tố tự nhiên cốt lõi (Nước, Lửa, Cây, Trời đất).",
    items: [
      {
        character: "心",
        name: "Bộ Tâm / Tâm đứng (心 / 忄)",
        strokeCount: 4,
        hex: "05fc3",
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
        hex: "06208",
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
        hex: "06238",
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
        hex: "0624b",
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
        hex: "0652f",
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
        hex: "06534",
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
        hex: "06587",
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
        hex: "06597",
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
        hex: "065a4",
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
        hex: "065b9",
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
        hex: "065e5",
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
        hex: "066f0",
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
        hex: "06708",
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
        hex: "06728",
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
        hex: "06b20",
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
        hex: "06b62",
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
        hex: "06b79",
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
        hex: "06bb3",
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
        hex: "06bcd",
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
        hex: "06bd4",
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
        hex: "06bdb",
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
        hex: "06c0f",
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
        hex: "06c14",
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
        hex: "06c34",
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
        hex: "0706b",
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
        hex: "0722a",
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
        hex: "07236",
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
        hex: "07247",
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
        hex: "0725b",
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
        hex: "072ac",
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

  // 5 NÉT
  {
    id: "radicals-5",
    strokeCount: 5,
    title: "Bộ thủ 5 nét",
    description: "Nhóm 17 bộ thủ cấu tạo từ 5 nét, biểu thị đồ vật gia dụng, khoáng vật, ngũ cốc và các giác quan.",
    items: [
      {
        character: "玉",
        name: "Bộ Ngọc / Vương (玉 / 王)",
        strokeCount: 5,
        hex: "07389",
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
        hex: "07518",
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
        hex: "0751f",
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
        hex: "07528",
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
        hex: "07530",
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
        hex: "07592",
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
        hex: "0767d",
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
        hex: "076ae",
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
        hex: "076bf",
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
        hex: "076ee",
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
        hex: "077db",
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
        hex: "077e2",
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
        hex: "077f3",
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
        hex: "0793a",
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
        hex: "079be",
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
        hex: "07a74",
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
        hex: "07acb",
        meaning: "Người đứng thẳng hai chân trên mặt đất.",
        kanjiMeaning: "Biểu thị tư thế đứng vững chãi, sự thành lập, xác lập vị trí kiên cố.",
        examples: [
          { kanji: "站", amHan: "Trạm", nghia: "Bến ga dừng đỗ" },
          { kanji: "親", amHan: "Thân", nghia: "Bố mẹ đứng trên cây dõi mắt ngóng con" }
        ]
      }
    ]
  },

  // 6 NÉT
  {
    id: "radicals-6",
    strokeCount: 6,
    title: "Bộ thủ 6 nét",
    description: "Nhóm 18 bộ thủ gồm 6 nét, bao gồm các loài thực vật, tơ lụa, côn trùng và các bộ phận cơ thể.",
    items: [
      {
        character: "竹",
        name: "Bộ Trúc (竹 / ⺮)",
        strokeCount: 6,
        hex: "07af9",
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
        hex: "07c73",
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
        hex: "07cf8",
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
        hex: "07f8a",
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
        hex: "07fbd",
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
        hex: "08001",
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
        hex: "08033",
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
        hex: "08089",
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
        hex: "081ea",
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
        hex: "081f3",
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
        hex: "0820c",
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
        hex: "0821f",
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
        hex: "08278",
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
        hex: "0866b",
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
        hex: "08840",
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
        hex: "0884c",
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
        hex: "08863",
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
        hex: "0897f",
        meaning: "Chiếc tổ chim chiều tà; phương Tây mặt trời lặn.",
        kanjiMeaning: "Biểu thị phương Tây, tổ chim che đậy hoặc che phủ từ trên xuống.",
        examples: [
          { kanji: "要", amHan: "Yếu", nghia: "Thắt lưng người phụ nữ -> Quan trọng, cốt yếu" },
          { kanji: "票", amHan: "Phiếu", nghia: "Lá phiếu bầu" }
        ]
      }
    ]
  },

  // 7 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-7",
    strokeCount: 7,
    title: "Bộ thủ 7 nét",
    description: "Nhóm 20 bộ thủ gồm đúng 7 nét, đại diện cho thị giác, lời nói, xe cộ, tiền tài và bước chân.",
    items: [
      {
        character: "見",
        name: "Bộ Kiến (見)",
        strokeCount: 7,
        hex: "0898b",
        meaning: "Con mắt to trên đôi chân người đang đứng quan sát; nhìn thấy.",
        kanjiMeaning: "Biểu thị thị giác, hành động nhìn ngắm, quan sát, xem xét, kiến thức hoặc gặp gỡ.",
        examples: [
          { kanji: "視", amHan: "Thị", nghia: "Thị lực, nhìn nhận" },
          { kanji: "覚", amHan: "Giác", nghia: "Nhận thức, tỉnh giác" },
          { kanji: "親", amHan: "Thân", nghia: "Bố mẹ thân thương ngóng trông" },
          { kanji: "規", amHan: "Quy", nghia: "Quy tắc, khuôn phép" }
        ]
      },
      {
        character: "角",
        name: "Bộ Giác (角)",
        strokeCount: 7,
        hex: "089d2",
        meaning: "Cặp sừng nhọn hoắt của loài thú; góc cạnh.",
        kanjiMeaning: "Biểu thị sừng động vật, góc cạnh nhọn, sự ganh đua đọ sừng hoặc phân chia góc độ.",
        examples: [
          { kanji: "解", amHan: "Giải", nghia: "Dùng dao mổ xẻ sừng bò -> Giải thích, tháo gỡ" },
          { kanji: "触", amHan: "Xúc", nghia: "Tiếp xúc, đụng chạm góc cạnh" }
        ]
      },
      {
        character: "言",
        name: "Bộ Ngôn / Ngôn đứng (言 / 訁)",
        strokeCount: 7,
        hex: "08a00",
        meaning: "Lời ăn tiếng nói thốt ra từ miệng có âm điệu rõ ràng.",
        kanjiMeaning: "Biểu thị ngôn ngữ, lời nói, phát biểu, đối thoại, bàn luận hoặc sách vở ghi chép.",
        examples: [
          { kanji: "語", amHan: "Ngữ", nghia: "Ngôn ngữ, tiếng nói" },
          { kanji: "話", amHan: "Thoại", nghia: "Trò chuyện, đàm thoại" },
          { kanji: "読", amHan: "Độc", nghia: "Đọc sách to thành tiếng" },
          { kanji: "計", amHan: "Kế", nghia: "Tính toán kế hoạch" }
        ]
      },
      {
        character: "谷",
        name: "Bộ Cốc (谷)",
        strokeCount: 7,
        hex: "08c37",
        meaning: "Thung lũng sâu có dòng suối chảy qua giữa hai ngọn núi.",
        kanjiMeaning: "Biểu thị khe núi hiểm trở, thung lũng sâu, lòng chảo hoặc sự trống rỗng đón nhận.",
        examples: [
          { kanji: "欲", amHan: "Dục", nghia: "Khao khát như lòng thung lũng sâu" },
          { kanji: "容", amHan: "Dung", nghia: "Chứa đựng, dung nạp" }
        ]
      },
      {
        character: "豆",
        name: "Bộ Đậu (豆)",
        strokeCount: 7,
        hex: "08c46",
        meaning: "Hạt đậu nhỏ; chiếc đĩa cao có chân cúng tế thời cổ.",
        kanjiMeaning: "Biểu thị các loại hạt đậu đỗ, đồ tế lễ thần linh hoặc vật dụng hình đĩa cao.",
        examples: [
          { kanji: "頭", amHan: "Đầu", nghia: "Cái đầu tròn như hạt đậu" },
          { kanji: "豊", amHan: "Phong", nghia: "Mâm cúng đầy ắp hạt đậu -> Phong phú" },
          { kanji: "登", amHan: "Đăng", nghia: "Bước lên đài cúng -> Leo núi" }
        ]
      },
      {
        character: "豕",
        name: "Bộ Thỉ (豕)",
        strokeCount: 7,
        hex: "08c55",
        meaning: "Con lợn (heo) mõm nhọn đuôi ngắn.",
        kanjiMeaning: "Biểu thị loài lợn nhà, lợn rừng, súc vật nuôi trong chuồng hoặc đàn gia súc.",
        examples: [
          { kanji: "家", amHan: "Gia", nghia: "Nuôi lợn dưới mái nhà -> Gia đình, mái ấm" },
          { kanji: "豚", amHan: "Đốn", nghia: "Miếng thịt lợn ngon" },
          { kanji: "象", amHan: "Tượng", nghia: "Con voi khổng lồ" }
        ]
      },
      {
        character: "豸",
        name: "Bộ Trĩ (豸)",
        strokeCount: 7,
        hex: "08c78",
        meaning: "Loài thú săn mồi không sừng, lưng cong đuôi dài rình mồi.",
        kanjiMeaning: "Biểu thị các loài dã thú rình rập săn mồi, sự hung tợn hoặc mưu mô xảo quyệt.",
        examples: [
          { kanji: "貌", amHan: "Mạo", nghia: "Diện mạo, dáng vẻ loài thú" },
          { kanji: "豹", amHan: "Báo", nghia: "Con báo hoa mai" }
        ]
      },
      {
        character: "貝",
        name: "Bộ Bối (貝)",
        strokeCount: 7,
        hex: "08c9d",
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
        character: "赤",
        name: "Bộ Xích (赤)",
        strokeCount: 7,
        hex: "08d64",
        meaning: "Màu đỏ rực rỡ của ngọn lửa soi trên mặt đất.",
        kanjiMeaning: "Biểu thị màu đỏ tươi, sự trần trụi thuần khiết hoặc lòng chân thành nhiệt huyết.",
        examples: [
          { kanji: "赫", amHan: "Hách", nghia: "Đỏ rực chói lọi" },
          { kanji: "赦", amHan: "Xá", nghia: "Ân xá, lòng trong sáng tha thứ" }
        ]
      },
      {
        character: "走",
        name: "Bộ Tẩu (走)",
        strokeCount: 7,
        hex: "08d70",
        meaning: "Người dang hai tay vội vã chạy nhanh trên đất.",
        kanjiMeaning: "Biểu thị hành động chạy nhanh, vội vã phi nhanh, rượt đuổi thoát thân.",
        examples: [
          { kanji: "起", amHan: "Khởi", nghia: "Thức dậy đứng lên chạy" },
          { kanji: "越", amHan: "Việt", nghia: "Vượt qua ranh giới" },
          { kanji: "超", amHan: "Siêu", nghia: "Siêu việt, vượt xa" }
        ]
      },
      {
        character: "足",
        name: "Bộ Túc (足 / ⻊)",
        strokeCount: 7,
        hex: "08db3",
        meaning: "Bàn chân người có đầu gối vững vàng; đầy đủ.",
        kanjiMeaning: "Biểu thị đôi chân, bàn chân bước đi, hành động đá nhảy, dẫm đạp hoặc sự đầy đủ túc mãn.",
        examples: [
          { kanji: "路", amHan: "Lộ", nghia: "Con đường cho bước chân đi" },
          { kanji: "跳", amHan: "Khiêu", nghia: "Bật nhảy cao" },
          { kanji: "踊", amHan: "Dũng", nghia: "Nhảy múa rộn ràng" }
        ]
      },
      {
        character: "身",
        name: "Bộ Thân (身)",
        strokeCount: 7,
        hex: "08eab",
        meaning: "Thân thể người có bụng lớn; người mang thai.",
        kanjiMeaning: "Biểu thị thân thể con người, thân phận xã hội hoặc bản thân chính mình.",
        examples: [
          { kanji: "射", amHan: "Xạ", nghia: "Đem thân mình đo tấc bắn cung" },
          { kanji: "躬", amHan: "Cung", nghia: "Khom mình cung kính" }
        ]
      },
      {
        character: "車",
        name: "Bộ Xa (車)",
        strokeCount: 7,
        hex: "08eca",
        meaning: "Chiếc xe kéo có hai bánh và thùng xe nhìn từ trên cao.",
        kanjiMeaning: "Biểu thị các loại xe cộ, bánh xe lăn, phương tiện vận tải đường bộ hoặc máy móc cơ khí.",
        examples: [
          { kanji: "転", amHan: "Chuyển", nghia: "Bánh xe lăn tròn -> Chuyển động" },
          { kanji: "輪", amHan: "Luân", nghia: "Bánh xe luân hồi" },
          { kanji: "軍", amHan: "Quân", nghia: "Xe bọc thép trong quân đội" }
        ]
      },
      {
        character: "辛",
        name: "Bộ Tân (辛)",
        strokeCount: 7,
        hex: "08f9b",
        meaning: "Vị cay nồng; con dao xâm khắc trừng phạt nô lệ; gian nan cay đắng.",
        kanjiMeaning: "Biểu thị vị cay, sự gian truân cay đắng, đau đớn nhọc nhằn hoặc hình phạt khắc nghiệt.",
        examples: [
          { kanji: "辞", amHan: "Từ", nghia: "Từ chức, lời cay đắng giã từ" },
          { kanji: "辟", amHan: "Tịch", nghia: "Trừng phạt tội phạm" }
        ]
      },
      {
        character: "辰",
        name: "Bộ Thần (辰)",
        strokeCount: 7,
        hex: "08fb0",
        meaning: "Sao Thần; con rồng trong 12 con giáp; thời khắc vạn vật nảy chồi cựa quậy.",
        kanjiMeaning: "Biểu thị thời gian, thiên văn tinh tú, ngày giờ hoặc mùa màng cày cấy đất đai.",
        examples: [
          { kanji: "農", amHan: "Nông", nghia: "Làm nông theo thời khắc ngôi sao" },
          { kanji: "辱", amHan: "Nhục", nghia: "Sỉ nhục, bùn lầy dính vụ mùa" }
        ]
      },
      {
        character: "辶",
        name: "Bộ Sước (辶 / 辵)",
        strokeCount: 7,
        hex: "08fb6",
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
        character: "邑",
        name: "Bộ Ấp (邑 / 阝)",
        strokeCount: 7,
        hex: "09091",
        meaning: "Thành quách, làng xóm dân cư sinh sống thanh bình.",
        kanjiMeaning: "Khi đứng bên phải chữ Hán biểu thị tên vùng đất, làng ấp, đô thị, phòng ban hành chính.",
        examples: [
          { kanji: "都", amHan: "Đô", nghia: "Đô thành hoa lệ đông đúc" },
          { kanji: "部", amHan: "Bộ", nghia: "Bộ phận, phòng ban trong làng ấp" },
          { kanji: "郷", amHan: "Hương", nghia: "Quê hương xóm làng" }
        ]
      },
      {
        character: "酉",
        name: "Bộ Dậu (酉)",
        strokeCount: 7,
        hex: "09149",
        meaning: "Chiếc bình gốm ủ men rượu đã chín thơm; canh giờ Dậu.",
        kanjiMeaning: "Biểu thị việc ủ men rượu bia, chất cồn lên men, canh giờ Dậu hoặc các loại nước sốt ủ chín.",
        examples: [
          { kanji: "酒", amHan: "Tửu", nghia: "Rượu ngon uống say" },
          { kanji: "配", amHan: "Phối", nghia: "Chia rượu cho mọi người -> Phân phối" },
          { kanji: "酸", amHan: "Toan", nghia: "Vị chua lên men" }
        ]
      },
      {
        character: "釆",
        name: "Bộ Biện (釆)",
        strokeCount: 7,
        hex: "091c6",
        meaning: "Bàn chân thú xòe móng để phân biệt dấu vết trên đất.",
        kanjiMeaning: "Biểu thị sự phân biệt, nhận biết rõ ràng từng chi tiết dấu vết.",
        examples: [
          { kanji: "釈", amHan: "Thích", nghia: "Giải thích rành mạch, Thích Ca" }
        ]
      },
      {
        character: "里",
        name: "Bộ Lý (里)",
        strokeCount: 7,
        hex: "091cc",
        meaning: "Đơn vị dặm đường làng quê ruộng đất.",
        kanjiMeaning: "Biểu thị dặm đường dài, làng xóm nông thôn yên bình hoặc đo đạc khoảng cách.",
        examples: [
          { kanji: "野", amHan: "Dã", nghia: "Cánh đồng hoang dã" },
          { kanji: "重", amHan: "Trọng", nghia: "Nặng nề mang vác ngàn dặm" }
        ]
      }
    ]
  },

  // 8 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-8",
    strokeCount: 8,
    title: "Bộ thủ 8 nét",
    description: "Nhóm 9 bộ thủ gồm đúng 8 nét, đại diện cho kim loại vàng bạc, cánh cổng, thời tiết mưa gió và chim muông.",
    items: [
      {
        character: "金",
        name: "Bộ Kim / Kim đứng (金 / 釒)",
        strokeCount: 8,
        hex: "091d1",
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
        character: "長",
        name: "Bộ Trường (長)",
        strokeCount: 8,
        hex: "09577",
        meaning: "Mái tóc dài óng ả; sự lâu dài, người lớn tuổi đứng đầu.",
        kanjiMeaning: "Biểu thị độ dài không gian thời gian, sự trưởng thành, người đứng đầu cơ quan.",
        examples: [
          { kanji: "髟", amHan: "Tiêu", nghia: "Mái tóc dài" },
          { kanji: "肆", amHan: "Tứ", nghia: "Buông thả lâu ngày" }
        ]
      },
      {
        character: "門",
        name: "Bộ Môn (門)",
        strokeCount: 8,
        hex: "09580",
        meaning: "Hai cánh cổng lớn mở ra đón khách.",
        kanjiMeaning: "Biểu thị cánh cổng, lối ra vào, sự đóng mở, ngăn cách giữa trong và ngoài.",
        examples: [
          { kanji: "開", amHan: "Khai", nghia: "Mở hai cánh cổng ra" },
          { kanji: "閉", amHan: "Bế", nghia: "Đóng then cài cổng" },
          { kanji: "間", amHan: "Gian", nghia: "Khoảng không nhìn qua khe cổng" }
        ]
      },
      {
        character: "阜",
        name: "Bộ Phụ (阜 / 阝)",
        strokeCount: 8,
        hex: "0961c",
        meaning: "Gò đất cao che chắn hiểm trở bên trái.",
        kanjiMeaning: "Khi đứng bên trái biểu thị địa hình đồi dốc cheo leo, bờ thành đất chắn hoặc sự hiểm trở cản trở.",
        examples: [
          { kanji: "防", amHan: "Phòng", nghia: "Gò đất phòng thủ chắn lũ" },
          { kanji: "限", amHan: "Hạn", nghia: "Giới hạn bờ dốc cản lại" },
          { kanji: "降", amHan: "Giáng", nghia: "Bước xuống sườn dốc" }
        ]
      },
      {
        character: "隹",
        name: "Bộ Chuy (隹)",
        strokeCount: 8,
        hex: "096b9",
        meaning: "Loài chim đuôi ngắn lông vũ dày.",
        kanjiMeaning: "Biểu thị các loài chim muông đuôi ngắn, sự tập trung tụ họp như bầy chim đậu cành.",
        examples: [
          { kanji: "集", amHan: "Tập", nghia: "Đàn chim tụ họp trên cây" },
          { kanji: "進", amHan: "Tiến", nghia: "Chim bay thẳng tiến lên" },
          { kanji: "難", amHan: "Nan", nghia: "Khó khăn như săn chim trên cành" }
        ]
      },
      {
        character: "雨",
        name: "Bộ Vũ (雨)",
        strokeCount: 8,
        hex: "096e8",
        meaning: "Bầu trời mây giông tuôn rơi từng giọt mưa rào.",
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
        hex: "09752",
        meaning: "Màu xanh biếc tươi trẻ của cỏ cây nảy chồi.",
        kanjiMeaning: "Biểu thị màu xanh biếc, sự tươi mát non trẻ, thanh xuân trong sáng.",
        examples: [
          { kanji: "静", amHan: "Tĩnh", nghia: "Yên tĩnh thanh bình" },
          { kanji: "清", amHan: "Thanh", nghia: "Dòng nước trong veo" }
        ]
      },
      {
        character: "非",
        name: "Bộ Phi (非)",
        strokeCount: 8,
        hex: "0975e",
        meaning: "Đôi cánh chim xòe ngược chiều nhau; sai lầm, phi lý.",
        kanjiMeaning: "Biểu thị tính phủ định, sai trái, bất chính, không tuân theo quy chuẩn lẽ phải.",
        examples: [
          { kanji: "悲", amHan: "Bi", nghia: "Lòng đau đớn khi gặp chuyện trái ý -> Bi thương" },
          { kanji: "罪", amHan: "Tội", nghia: "Lưới trừng phạt việc phi pháp" }
        ]
      },
      {
        character: "斉",
        name: "Bộ Tề (斉 / 齊)",
        strokeCount: 8,
        hex: "06589",
        meaning: "Bông lúa mì mọc đều nhau tăm tắp; chỉnh tề ngăn nắp.",
        kanjiMeaning: "Biểu thị sự đồng đều, chỉnh tề ngăn nắp, cùng nhau hoặc tề gia thanh tịnh.",
        examples: [
          { kanji: "斎", amHan: "Trai", nghia: "Phòng ăn chay chỉnh tề thanh tịnh" },
          { kanji: "済", amHan: "Tế", nghia: "Bằng phẳng xuôi dòng -> Hoàn tất, cứu tế" }
        ]
      }
    ]
  },

  // 9 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-9",
    strokeCount: 9,
    title: "Bộ thủ 9 nét",
    description: "Nhóm 11 bộ thủ gồm đúng 9 nét, đại diện cho ẩm thực, khuôn mặt, gió thoảng, âm thanh và da thuộc.",
    items: [
      {
        character: "面",
        name: "Bộ Diện (面)",
        strokeCount: 9,
        hex: "09762",
        meaning: "Khuôn mặt người có mắt mũi bao quanh; bề mặt tiếp xúc.",
        kanjiMeaning: "Biểu thị bộ mặt, phương diện, diện mạo, bề mặt hoặc đối diện trực tiếp.",
        examples: [
          { kanji: "麺", amHan: "Miến", nghia: "Bột mì cán mỏng diện mạo sợi mì" }
        ]
      },
      {
        character: "革",
        name: "Bộ Cách (革)",
        strokeCount: 9,
        hex: "09769",
        meaning: "Tấm da thú cạo sạch lông để thay đổi thành da thuộc; cải cách.",
        kanjiMeaning: "Biểu thị đồ làm từ da thú (giày, áo, yên cương) hoặc sự thay đổi triệt để cải cách.",
        examples: [
          { kanji: "靴", amHan: "Ngoa", nghia: "Đôi giày da êm ái" },
          { kanji: "鞍", amHan: "An", nghia: "Yên ngựa bằng da thú" }
        ]
      },
      {
        character: "韋",
        name: "Bộ Vi (韋)",
        strokeCount: 9,
        hex: "097cb",
        meaning: "Da thú đã thuộc mềm dẻo uốn quanh; bước chân đi vòng quanh.",
        kanjiMeaning: "Biểu thị sự uốn lượn, mềm dẻo bao quanh, da thuộc mềm hoặc vi phạm quay lưng.",
        examples: [
          { kanji: "韓", amHan: "Hàn", nghia: "Tên nước Hàn Quốc" },
          { kanji: "偉", amHan: "Vĩ", nghia: "Người vĩ đại bao dung" }
        ]
      },
      {
        character: "韭",
        name: "Bộ Phỉ / Cửu (韭)",
        strokeCount: 9,
        hex: "097ed",
        meaning: "Cây rau phỉ (rau hẹ) mọc thành từng bụi lá dài cắt lại mọc tiếp.",
        kanjiMeaning: "Biểu thị các loài rau thơm mọc bụi, cây rau hẹ dẻo dai.",
        examples: [
          { kanji: "韮", amHan: "Cửu", nghia: "Bụi rau hẹ non" }
        ]
      },
      {
        character: "音",
        name: "Bộ Âm (音)",
        strokeCount: 9,
        hex: "097f3",
        meaning: "Âm thanh vang vọng phát ra từ miệng thấu lòng người.",
        kanjiMeaning: "Biểu thị âm thanh, tiếng nhạc réo rắt, nhịp điệu phát âm hoặc tin tức truyền đi.",
        examples: [
          { kanji: "響", amHan: "Hưởng", nghia: "Tiếng vang ngân dài hưởng ứng" },
          { kanji: "韻", amHan: "Vận", nghia: "Vần thơ réo rắt" }
        ]
      },
      {
        character: "頁",
        name: "Bộ Hiệt (頁)",
        strokeCount: 9,
        hex: "09801",
        meaning: "Đầu người ngước nhìn; trang giấy trong cuốn sách.",
        kanjiMeaning: "Biểu thị cái đầu, trán, khuôn mặt, các bộ phận trên đầu hoặc trang sách báo.",
        examples: [
          { kanji: "頭", amHan: "Đầu", nghia: "Cái đầu người" },
          { kanji: "頂", amHan: "Đỉnh", nghia: "Đỉnh đầu, chóp núi" },
          { kanji: "額", amHan: "Ngạch", nghia: "Trán người, kim ngạch số tiền" },
          { kanji: "題", amHan: "Đề", nghia: "Tiêu đề bài học" }
        ]
      },
      {
        character: "風",
        name: "Bộ Phong (風)",
        strokeCount: 9,
        hex: "098a8",
        meaning: "Cơn gió thổi mát cuốn theo côn trùng sinh sôi nảy nở.",
        kanjiMeaning: "Biểu thị gió bão, không khí luân chuyển, phong thái dung mạo hoặc phong tục tập quán.",
        examples: [
          { kanji: "嵐", amHan: "Lam", nghia: "Giông bão trên núi cao" },
          { kanji: "飄", amHan: "Phiêu", nghia: "Gió cuốn lá bay phiêu dạt" }
        ]
      },
      {
        character: "飛",
        name: "Bộ Phi (飛)",
        strokeCount: 9,
        hex: "098db",
        meaning: "Đôi cánh chim xòe rộng bay lượn trên bầu trời xanh.",
        kanjiMeaning: "Biểu thị hành động bay lượn trên không trung, sự bay bổng hoặc phi tán.",
        examples: [
          { kanji: "飜", amHan: "Phiên", nghia: "Bay lượn lật cánh -> Phiên dịch" }
        ]
      },
      {
        character: "食",
        name: "Bộ Thực (食 / 飠)",
        strokeCount: 9,
        hex: "098df",
        meaning: "Nồi cơm đậy nắp bốc khói ngun ngút; ăn uống thức ăn.",
        kanjiMeaning: "Biểu thị việc ăn uống, lương thực thực phẩm, các món ăn ngon hoặc quán ăn.",
        examples: [
          { kanji: "飯", amHan: "Phạn", nghia: "Bát cơm ăn no" },
          { kanji: "飲", amHan: "Ẩm", nghia: "Uống nước ngửa cổ" },
          { kanji: "館", amHan: "Quán", nghia: "Nhà khách quán trọ ăn uống" },
          { kanji: "養", amHan: "Dưỡng", nghia: "Nuôi dưỡng bằng thức ăn" }
        ]
      },
      {
        character: "首",
        name: "Bộ Thủ (首)",
        strokeCount: 9,
        hex: "09996",
        meaning: "Cái đầu người có tóc và cổ; vị trí đứng đầu lãnh đạo.",
        kanjiMeaning: "Biểu thị chiếc đầu, cái cổ, người đứng đầu, bắt đầu hoặc việc cốt lõi.",
        examples: [
          { kanji: "道", amHan: "Đạo", nghia: "Người dẫn đầu đứng đầu đi khai phá con đường" }
        ]
      },
      {
        character: "香",
        name: "Bộ Hương (香)",
        strokeCount: 9,
        hex: "09999",
        meaning: "Mùi hương thơm ngọt ngào của hạt kê chín nấu bốc khói.",
        kanjiMeaning: "Biểu thị hương thơm, gia vị ngào ngạt, nhang trầm hoặc sự thơm tho dễ chịu.",
        examples: [
          { kanji: "馨", amHan: "Hinh", nghia: "Hương thơm bay xa ngào ngạt" }
        ]
      }
    ]
  },

  // 10 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-10",
    strokeCount: 10,
    title: "Bộ thủ 10 nét",
    description: "Nhóm 8 bộ thủ gồm đúng 10 nét, đại diện cho ngựa chiến, khung xương, tòa nhà cao và quỷ thần.",
    items: [
      {
        character: "馬",
        name: "Bộ Mã (馬)",
        strokeCount: 10,
        hex: "099ac",
        meaning: "Con ngựa phi nước đại tung bờm và bốn vó phi nhanh.",
        kanjiMeaning: "Biểu thị các loài ngựa, hành động phi nhanh, cưỡi ngựa hoặc kéo xe ngựa.",
        examples: [
          { kanji: "駅", amHan: "Dịch", nghia: "Trạm đổi ngựa thời xưa -> Nhà ga xe lửa" },
          { kanji: "騎", amHan: "Kị", nghia: "Kỵ binh cưỡi ngựa" },
          { kanji: "駆", amHan: "Khu", nghia: "Thúc ngựa phi nhanh" }
        ]
      },
      {
        character: "骨",
        name: "Bộ Cốt (骨)",
        strokeCount: 10,
        hex: "09aa8",
        meaning: "Khung xương cứng cáp thịt bọc bên ngoài của động vật.",
        kanjiMeaning: "Biểu thị xương cốt, khung xương, cấu trúc giàn giáo kiên cố hoặc khí phách cứng rắn.",
        examples: [
          { kanji: "髄", amHan: "Tủy", nghia: "Tủy sống trong xương" },
          { kanji: "骸", amHan: "Hài", nghia: "Hài cốt thi thể" }
        ]
      },
      {
        character: "高",
        name: "Bộ Cao (高)",
        strokeCount: 10,
        hex: "09ad8",
        meaning: "Tòa lâu đài có chòi vọng gác cao chọc trời.",
        kanjiMeaning: "Biểu thị chiều cao, sự cao thượng, cao quý hoặc vị trí chót vót.",
        examples: [
          { kanji: "喬", amHan: "Kiều", nghia: "Cây cao chót vót" },
          { kanji: "亭", amHan: "Đình", nghia: "Đình cao nghỉ mát" }
        ]
      },
      {
        character: "髟",
        name: "Bộ Tiêu (髟)",
        strokeCount: 10,
        hex: "09adf",
        meaning: "Mái tóc dài óng ả xõa xuống vai.",
        kanjiMeaning: "Biểu thị tóc tai, râu ria, búi tóc hoặc chùm lông dài trên đầu.",
        examples: [
          { kanji: "髪", amHan: "Phát", nghia: "Mái tóc người" },
          { kanji: "髭", amHan: "Tỳ", nghia: "Bộ râu mép" },
          { kanji: "鬚", amHan: "Tu", nghia: "Râu cằm dài" }
        ]
      },
      {
        character: "鬥",
        name: "Bộ Đấu (鬥)",
        strokeCount: 10,
        hex: "09b25",
        meaning: "Hai người cầm vũ khí lao vào giao chiến đánh nhau.",
        kanjiMeaning: "Biểu thị sự chiến đấu, đấu tranh đối kháng, tranh đoạt hoặc thi đấu.",
        examples: [
          { kanji: "鬧", amHan: "Náo", nghia: "Cãi cọ huyên náo" },
          { kanji: "闘", amHan: "Đấu", nghia: "Chiến đấu dũng cảm" }
        ]
      },
      {
        character: "鬯",
        name: "Bộ Sưởng (鬯)",
        strokeCount: 10,
        hex: "09b2f",
        meaning: "Chiếc vò ủ rượu nghệ thơm lừng dùng dâng cúng thần linh.",
        kanjiMeaning: "Biểu thị rượu hương thơm làm lễ tế thần, sự linh thiêng thanh sạch.",
        examples: [
          { kanji: "鬱", amHan: "Uất", nghia: "Cỏ cây rậm rạp che phủ hương thơm -> U uất u sầu" }
        ]
      },
      {
        character: "鬲",
        name: "Bộ Cách (鬲)",
        strokeCount: 10,
        hex: "09b32",
        meaning: "Cái nồi nấu ba chân rỗng đáy thời cổ để đun nóng nhanh.",
        kanjiMeaning: "Biểu thị nồi niêu đồ nấu bếp ba chân, sự cách ly phân tách hoặc đun nấu.",
        examples: [
          { kanji: "融", amHan: "Dung", nghia: "Bốc hơi tan chảy hòa tan" },
          { kanji: "隔", amHan: "Cách", nghia: "Ngăn cách ly gián" }
        ]
      },
      {
        character: "鬼",
        name: "Bộ Quỷ (鬼)",
        strokeCount: 10,
        hex: "09b3c",
        meaning: "Con quỷ đội mặt nạ quái dị; linh hồn người chết.",
        kanjiMeaning: "Biểu thị ma quỷ, linh hồn, yêu ma quái đản hoặc sự xảo quyệt ma mãnh.",
        examples: [
          { kanji: "魂", amHan: "Hồn", nghia: "Linh hồn con người" },
          { kanji: "魔", amHan: "Ma", nghia: "Yêu ma quỷ quái" },
          { kanji: "魅", amHan: "Mị", nghia: "Mê hoặc quyến rũ" }
        ]
      }
    ]
  },

  // 11 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-11",
    strokeCount: 11,
    title: "Bộ thủ 11 nét",
    description: "Nhóm 6 bộ thủ gồm đúng 11 nét, đại diện cho loài cá, chim đuôi dài, hươu nai và lúa mạch.",
    items: [
      {
        character: "魚",
        name: "Bộ Ngư (魚)",
        strokeCount: 11,
        hex: "09b5a",
        meaning: "Con cá bơi lội dưới làn nước có vảy và vây đuôi nhấp nhô.",
        kanjiMeaning: "Biểu thị các loài cá, sinh vật biển thủy hải sản hoặc món ăn từ cá.",
        examples: [
          { kanji: "鮮", amHan: "Tiên", nghia: "Cá tươi và cừu béo -> Tươi ngon" },
          { kanji: "鯨", amHan: "Kình", nghia: "Cá voi khổng lồ" },
          { kanji: "鯉", amHan: "Lý", nghia: "Cá chép hóa rồng" }
        ]
      },
      {
        character: "鳥",
        name: "Bộ Điểu (鳥)",
        strokeCount: 11,
        hex: "09ce5",
        meaning: "Con chim đuôi dài đậu trên cành ngước mỏ cất tiếng hót.",
        kanjiMeaning: "Biểu thị các loài chim muông đuôi dài, gia cầm lông vũ bay lượn trên trời.",
        examples: [
          { kanji: "鳴", amHan: "Minh", nghia: "Chim mở miệng hót vang" },
          { kanji: "鶏", amHan: "Kê", nghia: "Con gà gáy sáng" },
          { kanji: "鴨", amHan: "Áp", nghia: "Con vịt trời bơi lội" }
        ]
      },
      {
        character: "鹵",
        name: "Bộ Lỗ (鹵)",
        strokeCount: 11,
        hex: "09e75",
        meaning: "Vùng đất mặn ven biển kết tinh ra hạt muối ăn.",
        kanjiMeaning: "Biểu thị vị mặn, đất mặn, muối khoáng hoặc nước mắm ngâm mặn.",
        examples: [
          { kanji: "鹹", amHan: "Hàm", nghia: "Vị mặn chát của muối biển" }
        ]
      },
      {
        character: "鹿",
        name: "Bộ Lộc (鹿)",
        strokeCount: 11,
        hex: "09e7f",
        meaning: "Con hươu (nai) rừng có cặp sừng gạc nhánh trên đầu.",
        kanjiMeaning: "Biểu thị loài hươu nai sừng gạc, sự nhanh nhẹn tinh khôn hoặc phúc lộc rừng sâu.",
        examples: [
          { kanji: "麗", amHan: "Lệ", nghia: "Đôi sừng hươu tuyệt đẹp -> Diễm lệ, hoa lệ" },
          { kanji: "麟", amHan: "Lân", nghia: "Con kỳ lân thần thoại" }
        ]
      },
      {
        character: "麦",
        name: "Bộ Mạch (麦 / 麥)",
        strokeCount: 11,
        hex: "09ea6",
        meaning: "Cây lúa mì, lúa mạch có râu dài trĩu hạt.",
        kanjiMeaning: "Biểu thị các loại lúa mì mạch, bột mì làm bánh mì hoặc mì sợi sợi miến.",
        examples: [
          { kanji: "麺", amHan: "Miến", nghia: "Mì sợi ăn ngon" },
          { kanji: "麹", amHan: "Khúc", nghia: "Men ủ lúa mạch làm bia miso" }
        ]
      },
      {
        character: "麻",
        name: "Bộ Ma (麻)",
        strokeCount: 11,
        hex: "09ebb",
        meaning: "Cây gai dầu phơi vỏ tơ dưới mái nhà làm sợi dệt vải.",
        kanjiMeaning: "Biểu thị cây gai dệt vải thô, bề mặt gai ráp hoặc cảm giác tê dại mất cảm giác.",
        examples: [
          { kanji: "磨", amHan: "Ma", nghia: "Dùng đá mài giũa sợi gai -> Mài bóng" },
          { kanji: "摩", amHan: "Ma", nghia: "Xoa bóp ma sát" }
        ]
      }
    ]
  },

  // 12 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-12",
    strokeCount: 12,
    title: "Bộ thủ 12 nét",
    description: "Nhóm 4 bộ thủ gồm đúng 12 nét, đại diện cho màu vàng, màu đen bồ hóng, hạt kê dẻo và thêu thùa.",
    items: [
      {
        character: "黄",
        name: "Bộ Hoàng (黄)",
        strokeCount: 12,
        hex: "09ec4",
        meaning: "Miếng ngọc bội màu vàng óng đeo bên mình; màu vàng đất màu mỡ.",
        kanjiMeaning: "Biểu thị sắc vàng tươi, đất vàng trung thổ hoặc đồ đạc óng ánh sắc vàng.",
        examples: [
          { kanji: "黄金", amHan: "Hoàng kim", nghia: "Vàng quý giá chói lọi" }
        ]
      },
      {
        character: "黍",
        name: "Bộ Thử (黍)",
        strokeCount: 12,
        hex: "09ecd",
        meaning: "Cây kê hạt nhỏ dẻo quánh dính dùng nấu xôi rượu nếp.",
        kanjiMeaning: "Biểu thị các loại ngũ cốc hạt kê dẻo, tính chất dính quánh hoặc rượu kê.",
        examples: [
          { kanji: "黏", amHan: "Niêm", nghia: "Dính chặt nhớp nháp" }
        ]
      },
      {
        character: "黒",
        name: "Bộ Hắc (黒 / 黑)",
        strokeCount: 12,
        hex: "09ed2",
        meaning: "Bồ hóng màu đen bám trong ống khói lò than đang cháy.",
        kanjiMeaning: "Biểu thị màu đen nhánh, bóng tối tăm u ám, điều mờ ám hoặc độc ác.",
        examples: [
          { kanji: "墨", amHan: "Mặc", nghia: "Mực tàu mài từ bồ hóng đen" },
          { kanji: "黙", amHan: "Mặc", nghia: "Im lặng như màn đêm đen" },
          { kanji: "点", amHan: "Điểm", nghia: "Dấu chấm mực đen" }
        ]
      },
      {
        character: "黹",
        name: "Bộ Chỉ (黹)",
        strokeCount: 12,
        hex: "09ef9",
        meaning: "Người thợ luồn kim thêu từng đường kim mũi chỉ hoa văn trên vải.",
        kanjiMeaning: "Biểu thị việc thêu thùa, may vá tỉ mỉ, tạo hoa văn tinh xảo trên áo quần.",
        examples: [
          { kanji: "黻", amHan: "Phất", nghia: "Mẫu hoa văn thêu rồng trên áo vua" }
        ]
      }
    ]
  },

  // 13 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-13",
    strokeCount: 13,
    title: "Bộ thủ 13 nét",
    description: "Nhóm 4 bộ thủ gồm đúng 13 nét, đại diện cho loài ếch nhái, đỉnh vạc đồng, trống gõ và con chuột.",
    items: [
      {
        character: "黽",
        name: "Bộ Mãnh (黽)",
        strokeCount: 13,
        hex: "09efd",
        meaning: "Con ếch (hoặc cóc) nhảy phóc với đôi mắt tròn xoe và chân có màng.",
        kanjiMeaning: "Biểu thị loài lưỡng cư (ếch nhái, rùa cóc), sự cần cù nỗ lực nhảy tiến lên.",
        examples: [
          { kanji: "勉", amHan: "Miễn", nghia: "Dốc sức học tập chăm chỉ như ếch nhảy -> Siêng năng" },
          { kanji: "鼇", amHan: "Ngao", nghia: "Con rùa khổng lồ đội núi" }
        ]
      },
      {
        character: "鼎",
        name: "Bộ Đỉnh (鼎)",
        strokeCount: 13,
        hex: "09f0e",
        meaning: "Chiếc vạc ba chân hai tai bằng đồng đúc dùng nấu tế lễ của bậc vua chúa.",
        kanjiMeaning: "Biểu thị đỉnh vạc quyền lực quốc gia, thế chân vạc ba bên hoặc việc đổi mới thời đại.",
        examples: [
          { kanji: "鼐", amHan: "Nãi", nghia: "Chiếc đỉnh đồng khổng lồ" }
        ]
      },
      {
        character: "鼓",
        name: "Bộ Cổ (鼓)",
        strokeCount: 13,
        hex: "09f13",
        meaning: "Chiếc trống da gắn chân đế có tay cầm dùi gõ vang nhịp rộn rã.",
        kanjiMeaning: "Biểu thị chiếc trống, âm vang tiếng gõ, sự thúc giục phấn chấn tinh thần cổ vũ.",
        examples: [
          { kanji: "鼓舞", amHan: "Cổ vũ", nghia: "Đánh trống múa cờ động viên" },
          { kanji: "瞽", amHan: "Cổ", nghia: "Người mù nghe trống gảy đàn" }
        ]
      },
      {
        character: "鼠",
        name: "Bộ Thử (鼠)",
        strokeCount: 13,
        hex: "09f20",
        meaning: "Con chuột có răng gặm nhấm nhọn hoắt và đuôi dài.",
        kanjiMeaning: "Biểu thị loài chuột gặm nhấm, sự lén lút lẩn trốn trong bóng tối.",
        examples: [
          { kanji: "鼬", amHan: "Dữu", nghia: "Con chồn săn chuột" }
        ]
      }
    ]
  },

  // 14 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-14",
    strokeCount: 14,
    title: "Bộ thủ 14 nét",
    description: "Nhóm 2 bộ thủ gồm đúng 14 nét, đại diện cho chiếc mũi con người và sự chỉnh tề ngay ngắn.",
    items: [
      {
        character: "鼻",
        name: "Bộ Tị (鼻)",
        strokeCount: 14,
        hex: "09f3b",
        meaning: "Chiếc mũi thở đón khí trời của con người; khứu giác.",
        kanjiMeaning: "Biểu thị chiếc mũi, khứu giác hít thở mùi hương, sự ngạt thở hoặc khởi đầu.",
        examples: [
          { kanji: "鼾", amHan: "Hãn", nghia: "Tiếng ngáy vang phát ra từ mũi khi ngủ" }
        ]
      },
      {
        character: "齊",
        name: "Bộ Tề (齊 / 斉)",
        strokeCount: 14,
        hex: "09f4a",
        meaning: "Những bông lúa mạch mọc thẳng đều nhau tăm tắp; chỉnh tề ngăn nắp.",
        kanjiMeaning: "Biểu thị sự đồng đều, ngang bằng nhau, chỉnh tề tề gia hoặc thanh tịnh.",
        examples: [
          { kanji: "斎", amHan: "Trai", nghia: "Phòng thanh tịnh ăn chay" },
          { kanji: "済", amHan: "Tế", nghia: "Bằng phẳng, cứu tế kinh tế" }
        ]
      }
    ]
  },

  // 15 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-15",
    strokeCount: 15,
    title: "Bộ thủ 15 nét",
    description: "Bộ thủ gồm đúng 15 nét, đại diện cho hàm răng nhai và tuổi thọ bậc đời.",
    items: [
      {
        character: "歯",
        name: "Bộ Xỉ (歯 / 齒)",
        strokeCount: 15,
        hex: "06b6f",
        meaning: "Hàng răng đều đặn nhai cắn thức ăn trong vòm miệng; tuổi tác tính theo răng.",
        kanjiMeaning: "Biểu thị hàm răng, nha khoa, việc nhai cắn, tuổi thọ xếp theo hàng răng thứ bậc.",
        examples: [
          { kanji: "齢", amHan: "Linh", nghia: "Tuổi tác tính theo số răng" },
          { kanji: "齟", amHan: "Trở", nghia: "Răng cắn lệch nhau -> Xung đột bất hòa" }
        ]
      }
    ]
  },

  // 16 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-16",
    strokeCount: 16,
    title: "Bộ thủ 16 nét",
    description: "Nhóm 2 bộ thủ linh thú gồm đúng 16 nét: Rồng thần uy quyền và Rùa trường thọ.",
    items: [
      {
        character: "竜",
        name: "Bộ Long (竜 / 龍)",
        strokeCount: 16,
        hex: "07adc",
        meaning: "Con rồng thần thoại uy quyền mình rắn chân hổ vảy cá bay lượn giữa mây trời.",
        kanjiMeaning: "Biểu thị loài rồng thần, bậc đế vương quyền lực tột đỉnh hoặc sự phi thường dũng mãnh.",
        examples: [
          { kanji: "竜", amHan: "Long", nghia: "Con rồng bay lượn" },
          { kanji: "襲", amHan: "Tập", nghia: "Áo mặc chồng lớp như vảy rồng -> Tập kích" }
        ]
      },
      {
        character: "亀",
        name: "Bộ Quy (亀 / 龜)",
        strokeCount: 16,
        hex: "04e80",
        meaning: "Con rùa mai cứng đầu ngẩng chân bơi sống trường thọ ngàn năm.",
        kanjiMeaning: "Biểu thị loài rùa, mai rùa bói toán thời cổ, sự trường thọ sống lâu hoặc nứt nẻ mai rùa.",
        examples: [
          { kanji: "龜裂", amHan: "Quy liệt", nghia: "Vết nứt toác như mai rùa" }
        ]
      }
    ]
  },

  // 17 NÉT (TÁCH RIÊNG CỤ THỂ)
  {
    id: "radicals-17",
    strokeCount: 17,
    title: "Bộ thủ 17 nét",
    description: "Bộ thủ có số nét lớn nhất (17 nét), đại diện cho cây sáo trúc cổ hòa âm tế thần.",
    items: [
      {
        character: "龠",
        name: "Bộ Dược (龠)",
        strokeCount: 17,
        hex: "09fa0",
        meaning: "Chiếc sáo trúc ba lỗ thời cổ hòa cùng dàn nhạc tế thần linh.",
        kanjiMeaning: "Biểu thị nhạc cụ thổi sáo, âm luật hòa hợp du dương, sự đồng thanh tương ứng.",
        examples: [
          { kanji: "龢", amHan: "Hòa", nghia: "Tiếng sáo trúc hòa cùng tiếng chuông đồng" }
        ]
      }
    ]
  }
];

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

async function buildAllRadicals() {
  console.log(`Bắt đầu tạo dữ liệu toàn diện cho ${allGroupsDefinition.length} nhóm bộ thủ (từ 1 nét đến 17 nét)...`);
  const compiledGroups = [];

  for (const group of allGroupsDefinition) {
    console.log(`Xử lý ${group.title} (${group.items.length} bộ)...`);
    const compiledItems = [];

    for (let i = 0; i < group.items.length; i++) {
      const item = group.items[i];
      const hex = item.hex || item.character.split('/')[0].trim().codePointAt(0).toString(16).padStart(5, '0');
      
      const res = await fetchSvg(hex);
      let paths = res.paths;
      if (!paths || paths.length === 0) {
        console.warn(`Cảnh báo: Không tìm thấy SVG cho ${item.character} (${hex}), tạo nét thay thế.`);
        paths = ["M20,50 L80,50"];
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

      await new Promise(r => setTimeout(r, 40));
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
 * DỮ LIỆU BỘ THỦ TIẾNG NHẬT (KANJI RADICALS) - TÁCH RIÊNG TỪ 1 NÉT ĐẾN 17 NÉT
 * Nguồn: Video bài giảng "Kanji - Bộ thủ tiếng Nhật" của cô Ngọc Tiệp Minato
 * Gồm đầy đủ 17 nhóm phân loại chuẩn:
 *  1. Cách viết: Vector SVG các nét chữ chuẩn KanjiVG chạy lặp tuần hoàn
 *  2. Tên của bộ đó (Hán Việt & Hán tự)
 *  3. Ý nghĩa của bộ thủ đó
 *  4. Ý nghĩa của bộ thủ đó trong Kanji (kèm ví dụ Hán tự tiêu biểu)
 * ==========================================================================
 */

const radicalsData = ${JSON.stringify(compiledGroups, null, 2)};

if (typeof window !== 'undefined') {
  window.radicalsData = radicalsData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { radicalsData };
}
`;

  const outputPath = path.join(__dirname, '..', 'data', 'radicals_data.js');
  fs.writeFileSync(outputPath, jsContent, 'utf8');
  console.log(`ĐÃ TẠO THÀNH CÔNG ${outputPath}! Kích thước tệp: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
}

buildAllRadicals();
