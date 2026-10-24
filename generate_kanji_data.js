const fs = require('fs');

const harvested = require('./harvested_kanji_dict.json');
const vocabMap = require('./lesson_vocab_map.json');

// Mẹo nhớ chiết tự chọn lọc kinh điển theo tiếng Việt
const classicMnemonics = {
  // Bài 1 & Cơ bản
  "私": "Cây lúa (禾) của riêng mình (厶), đem cất về cho bản thân TÔI (私) dùng.",
  "達": "Dẫn đàn cừu (羊) bước đi (辶) trên đất (土), CHÚNG TÔI cùng ĐẠT được ước mơ.",
  "人": "Hai nét tựa vào nhau như hai người nương tựa nâng đỡ nhau trong cuộc đời.",
  "方": "Một người dang rộng cánh tay chỉ PHƯƠNG hướng hoặc kính cẩn đón tiếp một VỊ / NGÀI quý khách.",
  "皆": "Mọi người (比 - so hàng) cùng hướng về ánh sáng trắng (白) rõ ràng: TẤT CẢ, MỌI NGƯỜI.",
  "先": "Người đi trước (𠂉) với đôi chân (儿) thoăn thoắt là bậc ĐI TRƯỚC (tiên sinh).",
  "生": "Mầm cây vừa nhú khỏi mặt đất biểu tượng cho sự SINH sôi, nảy nở, cuộc sống.",
  "教": "Dạy dỗ con cái có lòng hiếu thảo (孝) bằng roi vọt uốn nắn (攵) là việc GIÁO dục, DẠY dỗ.",
  "師": "Vị tướng đứng trên gò đất (阜) chỉ huy vạn quân (巾) là người THẦY, BẬC THẦY.",
  "学": "Đứa trẻ (子) dưới mái nhà (冖) với 3 tia sáng trí tuệ đang chăm chỉ HỌC HÀNH.",
  "会": "Nhiều người (人) tụ họp dưới một mái nhà để GẶP GỠ, HỘI HỌP.",
  "社": "Bàn thờ thần linh (礻) lập trên gò đất (土) là nơi sinh hoạt của XÃ HỘI, CÔNG TY.",
  "員": "Há miệng (口) kiểm đếm vỏ sò tiền bạc (貝) là NHÂN VIÊN, THÀNH VIÊN phụ trách.",
  "銀": "Thứ kim loại (金) rất cứng (艮) có màu trắng sáng chính là BẠC, TIỀN TỆ trong NGÂN HÀNG.",
  "行": "Ngã tư đường lớn nơi dòng người tấp nập ĐI LẠI, TIẾN HÀNH công việc.",
  "医": "Mũi tên (矢) cất trong chiếc hòm thuốc (匚) dùng cứu người trong Y HỌC, BÁC SĨ.",
  "者": "Người già có râu (耂) ngồi dưới ánh mặt trời (日) đọc sách là HỌC GIẢ, NGƯỜI có chuyên môn.",
  "研": "Dùng hòn đá (石) mài phẳng hai bề mặt (幵) cho thật nhẵn để NGHIÊN CỨU.",
  "究": "Chui vào hang sâu (穴) dùng chín (九) lần công sức để NGHIÊN CỨU tường tận.",
  "大": "Một người dang rộng hai tay hai chân hết cỡ biểu thị sự TO LỚN.",
  "病": "Người bị ốm nằm trên giường bệnh (疒) dưới sức nóng thiêu đốt (丙) vì đang mắc BỆNH.",
  "院": "Gò đất (阝) bao quanh tòa nhà kiên cố hoàn chỉnh (完) chính là BỆNH VIỆN, VIỆN.",
  "歳": "Dừng chân (止) trước lưỡi rìu thời gian (戌) đón thêm một TUỔI mới.",
  "何": "Người (亻) vác trên vai chiếc đòn gánh (可) tự hỏi mang CÁI GÌ thế này?",
  "初": "Dùng con dao (刀) cắt mảnh vải (衤) đầu tiên để may áo là bước BAN ĐẦU, SƠ KHỞI.",
  "願": "Người có cội nguồn (原) ngẩng đầu (頁) lên trời thành tâm cầu NGUYỆN, XIN.",
  "来": "Người từ phương xa đi dưới hàng cây đến ĐẾN (LAI) thăm nhà.",
  "日": "Hình vẽ mặt trời tròn trịa tỏa sáng rạng rỡ biểu thị NGÀY, MẶT TRỜI, NHẬT BẢN.",
  "本": "Gốc cây (木) được đánh dấu thêm một nét ngang ở gốc là GỐC RỄ, BẢN THÂN, SÁCH.",
  "語": "Lời nói (言) phát ra từ năm (五) cái miệng (口) hòa quyện thành NGÔN NGỮ.",

  // Số đếm
  "一": "Một nét ngang đơn giản biểu thị số MỘT.",
  "二": "Hai nét ngang song song biểu thị số HAI.",
  "三": "Ba nét ngang biểu thị Tam tài: Trời, Đất và Con người - số BA.",
  "四": "Bốn góc trong khung cửa sổ mở ra bốn phương - số BỐN.",
  "五": "Các đường bắt chéo tạo nên năm phương vị - số NĂM.",
  "六": "Một chiếc nón bên trên hai chân chống đỡ - số SÁU.",
  "七": "Lưỡi gươm chém ngang một nét dứt khoát - số BẢY.",
  "八": "Hai nét mở rộng như cánh cửa mở toang - số TÁM.",
  "九": "Một người đang gập mình uốn lượn cố gắng hết sức - số CHÍN.",
  "十": "Hai nét ngang dọc giao nhau trọn vẹn thập toàn thập mỹ - số MƯỜI.",
  "百": "Một nét ngang (一) trên đỉnh chữ Bạch (白) biểu thị một TRĂM.",
  "千": "Chữ Thập (十) thêm một nét phẩy bên trên biểu thị một NGHÌN.",
  "万": "Một nét gập mạnh mẽ ôm trọn muôn vạn điều - MƯỜI NGHÌN, VẠN.",
  "円": "Hình dáng đồng tiền xu tròn hoặc cổng vòm - ĐỒNG YÊN NHẬT.",
  "年": "Người gánh bó lúa sau một vụ mùa thu hoạch kéo dài đúng MỘT NĂM.",

  // Bài 2: Đồ vật & Thời gian
  "辞": "Lấy lưỡi (舌) nói lời sắc bén cay đắng (辛) để Từ chối hoặc viết TỪ ĐIỂN.",
  "書": "Tay cầm cây bút (聿) ghi chép dưới ánh mặt trời (日) thành cuốn SÁCH.",
  "雑": "Chín con chim (九+木) cùng các mảnh vải vụn (衣) dồn lại thành mớ HỖN TẠP, TẠP CHÍ.",
  "誌": "Lời nói (言) xuất phát từ ý chí (志) trong lòng được ghi lại thành TẠP CHÍ.",
  "新": "Đứng (立) trên cây (木) dùng chiếc rìu (斤) đốn gỗ MỚI.",
  "聞": "Ghé tai (耳) sát vào cánh cổng (門) để NGHE ngóng tin tức.",
  "手": "Bàn tay năm ngón xòe ra khéo léo.",
  "帳": "Tấm vải (巾) treo dài (長) để ghi chép sổ sách: SỔ TAY.",
  "名": "Khi trời tối (夕), phải mở miệng (口) xưng TÊN để người khác nhận ra.",
  "刺": "Dùng con dao (刂) đâm xuyên bụi cây để CẮM, DANH THIẾP.",
  "鉛": "Thứ kim loại (金) nằm ven đầm nước (㕣) chính là CHÌ dùng làm bút chì.",
  "筆": "Cây bút làm từ ống tre (竹) bên dưới gắn ngọn lông (聿): BÚT.",
  "鍵": "Thứ kim loại (金) dùng để xây dựng (建) then cài cửa: CHÌA KHÓA.",
  "時": "Mặt trời (日) mọc trên đỉnh ngôi chùa (寺) báo hiệu THỜI GIAN, GIỜ GIẤC.",
  "計": "Lời nói (言) kèm theo các con số mười (十) để tính toán, ĐỒNG HỒ KẾ.",
  "傘": "Bốn người (人人人人) chui dưới chiếc ô có cán chống đỡ: CÁI Ô, CÁI DÙ.",
  "鞄": "Mảnh da (革) được bao bọc (包) cẩn thận tạo thành CÁI TÚI, CẶP SÁCH.",
  "自": "Chỉ ngón tay vào mũi chính mình để nói TỰ BẢN THÂN.",
  "動": "Dùng sức lực (力) mang vác vật nặng (重) tạo ra sự CHUYỂN ĐỘNG.",
  "車": "Chiếc xe hai bánh thời xưa nhìn từ trên cao xuống.",
  "机": "Cái bàn làm bằng gỗ (木) có vài (几) chân đỡ: BÀN HỌC.",
  "椅": "Đồ gỗ (木) kỳ lạ (奇) uốn lượn có chỗ tựa lưng: GHẾ NGỒI.",
  "子": "Đứa trẻ quấn tã đang giơ hai tay đón nhận tình thương: ĐỨA CON, CON.",

  // Bài 3: Địa điểm, mua bán, nơi chốn
  "室": "Đến (至) dưới mái nhà (宀) mở ra căn PHÒNG riêng tư.",
  "食": "Người (人) tốt lành (良) mỗi ngày đều phải ĂN uống điều độ.",
  "堂": "Ngôi nhà rộng lớn dưới mái che có đất (土) cao ráo: NHÀ LỚN, NHÀ ĂN.",
  "事": "Tay cầm ngòi bút ghi chép mọi SỰ VIỆC, CÔNG VIỆC trong đời.",
  "務": "Dùng mác giáo (矛) và sức lực (力) hoàn thành NHIỆM VỤ.",
  "所": "Chiếc rìu (斤) để trước cánh cửa (戸) đánh dấu NƠI CHỐN, ĐỊA ĐIỂM.",
  "議": "Lời nói (言) chính trực vì lẽ phải (義) trong cuộc HỘI NGHỊ.",
  "受": "Bàn tay đón nhận một vật đặt trên bàn: TIẾP NHẬN.",
  "付": "Người (亻) dùng tấc gang tay (寸) gắn chặt vào: GẮN, ĐÍNH KÈM.",
  "部": "Khu đất (阝) chia thành từng BỘ PHẬN nhỏ có tổ chức.",
  "屋": "Đến (至) dưới mái thi hài (尸) che mưa nắng tạo thành CĂN NHÀ, HIỆU.",
  "洗": "Dùng nước (氵) đi trước (先) gột rửa sạch sẽ: RỬA.",
  "階": "Gò đất (阝) xếp thành từng hàng (皆) bậc thang: TẦNG LẦU.",
  "段": "Dùng gậy đập gõ tạo thành từng GIAI ĐOẠN, BẬC THANG.",
  "国": "Ngọc quý (玉) được bao bọc trong tường thành (囗) kiên cố tạo nên ĐẤT NƯỚC.",
  "電": "Cơn mưa (雨) kèm theo tia sét chớp loằng ngoằng (申/乚) tạo ra luồng ĐIỆN.",
  "話": "Lời nói (言) từ chiếc lưỡi (舌) phát ra để ĐỐI THOẠI, NÓI CHUYỆN.",
  "靴": "Mảnh da thú (革) biến đổi (化) ôm trọn bàn chân tạo thành ĐÔI GIÀY.",
  "売": "Đội nón sĩ phu (士) mang vỏ sò tiền bạc (貝) đi BÁN hàng.",
  "場": "Khu đất (土) chan hòa ánh nắng (昜) nơi tụ tập đông người: QUẢNG TRƯỜNG.",
  "地": "Đất đai (土) có dòng nước (也) uốn quanh: ĐỊA PHƯƠNG, MẶT ĐẤT.",
  "下": "Nét vẽ chỉ xuống phía DƯỚI đường chân trời.",

  // Bài 4: Thời gian, sinh hoạt, lịch trình
  "起": "Chạy (走) đi một mình (己) khi THỨC DẬY mỗi sáng.",
  "寝": "Dưới mái nhà (宀) nằm trên giường chiếu êm ấm đi NGỦ.",
  "働": "Người (亻) dùng sức lực cử động (動) tạo nên sự LAO ĐỘNG, LÀM VIỆC.",
  "休": "Người (亻) mệt mỏi đứng tựa vào gốc cây (木) để NGHỈ NGƠI.",
  "勉": "Miễn cưỡng (免) dùng hết sức lực (力) để CỐ GẮNG, HỌC TẬP.",
  "強": "Con cung (弓) mạnh mẽ bắn xuyên qua côn trùng (虫): KIÊN CƯỜNG, MẠNH MẼ.",
  "終": "Sợi chỉ (糸) mùa đông (冬) kết thúc: KẾT THÚC.",
  "郵": "Trạm bưu chính (阝) chuyển giao hàng hóa phân chia theo vùng: BƯU ĐIỆN.",
  "便": "Người (亻) làm việc đổi thay (更) mang lại sự THUẬN TIỆN, TIỆN LỢI.",
  "局": "Cái thước đo dưới mái nhà phân định ranh giới CƠ QUAN, CỤC.",
  "図": "Bản ĐỒ vẽ trong khung viền (囗) có các phương vị.",
  "館": "Nơi ăn uống (食) và lưu trú của quan lại (官): TÒA NHÀ, BẢO TÀNG.",
  "美": "Con cừu (羊) to lớn (大) là biểu tượng của vẻ ĐẸP, MỸ LỆ.",
  "術": "Đi trên đường (行) với kỹ năng điêu luyện (术): NGHỆ THUẬT, KỸ THUẬT.",
  "今": "Mọi việc gom tụ dưới một mái nhà ngay lúc NÀY: BÂY GIỜ, HIỆN TẠI.",
  "分": "Dùng dao (刀) chia tám (八) phần: PHÚT, PHÂN CHIA.",
  "半": "Con dao cắt đôi con bò (牛) làm MỘT NỬA, RƯỠI.",
  "午": "Cây cọc dựng đứng đổ bóng ngắn nhất lúc giữa TRƯA.",
  "前": "Dùng dao (刂) cắt thịt (月) tiến lên phía TRƯỚC.",
  "後": "Người bước đi (彳) bị sợi dây (幺) níu lại ở PHÍA SAU.",
  "朝": "Mặt trời (日) mọc giữa cỏ cây (十十) và trăng (月) lặn: BUỔI SÁNG.",
  "昼": "Mặt trời (日) chiếu thẳng đứng dưới mái hiên: BUỔI TRƯA.",
  "晩": "Mặt trời (日) miễn cưỡng (免) lặn xuống: BUỔI TỐI.",
  "夜": "Dưới mái nhà (亠) có người (亻) nằm co chân (夕) khi ĐÊM XUỐNG.",
  "毎": "Người mẹ (母) ngày ngày chăm sóc gia đình: MỖI NGÀY.",
  "月": "Hình ảnh vầng trăng khuyết soi sáng bầu trời đêm: MẶT TRĂNG, THÁNG.",
  "曜": "Mặt trời (日) cùng chim én (翟) bay lượn đón ánh sáng NGÀY TRONG TUẦN.",

  // Bài 5: Di chuyển, phương tiện, ngày tháng
  "帰": "Cầm chổi (⺕) quét dọn sạch sẽ rồi trở VỀ nhà.",
  "校": "Dưới gốc cây (木) cha mẹ giao tiếp (交) gửi gắm con vào TRƯỜNG HỌC.",
  "駅": "Ngựa (馬) dừng chân bên đống thước (尺) ở NHÀ GA.",
  "飛": "Cánh chim dang rộng bay vút lên bầu trời: BAY.",
  "機": "Cỗ máy bằng gỗ (木) có hàng trăm chi tiết vi tế (幾): MÁY MÓC.",
  "船": "Chiếc thuyền (舟) chở tám (八) cái miệng (口): TÀU THUYỀN.",
  "鉄": "Kim loại (金) quý báu như vàng bị mất đi (失) để tạo ra SẮT THÉP.",
  "幹": "Thân cây cứng cáp chống đỡ cành lá: THÂN CÂY, CÁN BỘ.",
  "線": "Sợi tơ (糸) kéo dài từ dòng suối (泉): ĐƯỜNG DÂY, TUYẾN.",
  "転": "Bánh xe (車) quay tròn chuyên chở (専): CHUYỂN ĐỘNG, XOAY.",
  "歩": "Dừng chân (止) rồi bước tiếp vài nét: ĐI BỘ.",
  "友": "Hai bàn tay (又 + 又) nắm chặt nhau: BẠN BÈ.",
  "族": "Dưới lá cờ (方) các mũi tên (矢) quy tụ về một GIA TỘC, DÒNG HỌ.",
  "週": "Đi vòng tròn (辶) quanh các cánh đồng (周) đúng một TUẦN.",
  "去": "Đất (土) chôn vùi quá khứ riêng tư (厶): ĐÃ QUA, KHỨ.",

  // Bài 6: Đồ ăn, sinh hoạt hằng ngày
  "飲": "Đồ ăn (飠) khô quá phải há miệng (欠) ra UỐNG nước.",
  "吸": "Dưới miệng (口) có người hít thở sâu: HÚT, HÍT.",
  "見": "Đôi mắt (目) gắn trên đôi chân (儿) đi khắp nơi để NHÌN, NGẮM.",
  "読": "Dùng lời nói (言) đọc to cuốn sách bán chạy (売): ĐỌC SÁCH.",
  "買": "Dùng mắt (罒) nhìn vỏ sò tiền tệ (貝) để MUA sắm.",
  "撮": "Dùng tay (扌) nắm bắt điều nghe thấy (最): CHỤP ẢNH.",
  "飯": "Đồ ăn (飠) dùng tay đảo ngược (反) nấu chín thành CƠM.",
  "卵": "Hai quả trứng tròn có phôi nở mầm: QUẢ TRỨNG.",
  "肉": "Thớ thịt cắt miếng có vân bên trong: THỊT.",
  "魚": "Hình vẽ con cá có vảy và vây bơi lội dưới nước: CON CÁ.",
  "野": "Cánh đồng (里) mở rộng (予) bát ngát: HOANG DÃ, CÁNH ĐỒNG.",
  "菜": "Cây cỏ (艹) dùng tay hái (采) về làm RAU ĂN.",
  "果": "Cây (木) trên đỉnh có quả tròn mọng (田): HOA QUẢ, KẾT QUẢ.",
  "物": "Con bò (牛) nhìn ngắm mọi VẬT thể xung quanh.",
  "水": "Dòng nước chảy xiết uốn lượn: NƯỚC.",
  "茶": "Cây cỏ (艹) người (人) thu hái dưới gốc cây (木): LÁ TRÀ.",
  "紅": "Sợi chỉ (糸) nhuộm màu rực rỡ qua công sức (工): MÀU ĐỎ HỒNG.",
  "牛": "Hình ảnh con bò có cặp sừng cong vút: CON BÒ.",
  "乳": "Bàn tay mẹ nâng niu em bé bú DÒNG SỮA ngọt ngào: SỮA.",
  "映": "Ánh mặt trời (日) rọi vào trung tâm (央) PHẢN CHIẾU hình ảnh.",
  "画": "Vẽ ranh giới ruộng đồng (田) bằng chiếc bút đóng khung: BỨC HỌA, PHIM.",
  "紙": "Sợi tơ (糸) ép mỏng bên họ (氏) tạo thành TỜ GIẤY.",
  "写": "Đội mũ (冖) chụp lại bức tranh: SAO CHÉP, CHỤP.",
  "真": "Mười (十) đôi mắt (目) nhìn thẳng vào sự CHÂN THẬT.",
  "店": "Dưới mái hiên (广) mở miệng (口) bán hàng: CỬA TIỆM, QUÁN.",
  "庭": "Khu vườn dưới mái nhà (广) nơi triều đình (廷) dạo bước: SÂN VƯỜN.",
  "宿": "Dưới mái nhà (宀) có một trăm (百) người cùng lưu trú: TRỌ, BÀI TẬP VỀ NHÀ.",
  "題": "Dùng cái đầu (頁) suy nghĩ dưới ánh mặt trời (日): ĐỀ TÀI, BÀI TẬP.",
  "花": "Cây cỏ (艹) biến đổi (化) nở rộ thành BÔNG HOA tươi thắm.",

  // Bài 7: Cho nhận, quà tặng, gia đình
  "切": "Dùng con dao (刀) bảy (七) lần cắt đứt: CẮT, THIẾT THỰC.",
  "送": "Dâng hai tay bước đi (辶) TIỄN đưa, GỬI quà đi xa.",
  "貸": "Mang của cải (貝) đại diện (代) cho người khác VAY MƯỢN.",
  "借": "Người (亻) xưa cũ (昔) đến MƯỢN đồ.",
  "習": "Đôi cánh chim (羽) vỗ trên đầu trắng (白) TẬP LUYỆN bay.",
  "賀": "Thêm lời chúc tụng (加) kèm quà tặng vỏ sò (貝): CHÚC MỪNG.",
  "状": "Hình dáng con chó đứng thẳng ghi chép trên thẻ tre: THƯ TỪ, TÌNH TRẠNG.",
  "消": "Dòng nước (氵) dập tắt ngọn nến sáng (肖): BIẾN MẤT, XÓA.",
  "荷": "Cỏ cây (艹) gánh trên vai (何): HÀNG HÓA, HÀNH LÝ.",
  "金": "Người (人) đào dưới đất tìm thấy vàng kim loại lấp lánh: TIỀN, VÀNG.",
  "符": "Thẻ tre (竹) có khắc phù hiệu trao cho người phó (付): PHÙ HIỆU, VÉ.",
  "父": "Người cha cầm hai chiếc gậy nghiêm khắc bảo vệ gia đình: CHA, BỐ.",
  "母": "Người mẹ có đôi bầu ngực nuôi dưỡng đàn con thơ: MẸ."
};

// Hàm tạo mẹo nhớ thông minh dựa trên bộ thủ & chiết tự nếu chưa có trong từ điển kinh điển
function buildSmartMnemonic(k, data) {
  if (classicMnemonics[k]) return classicMnemonics[k];

  const hv = data.hanViet ? data.hanViet.split(' ')[0] : '';
  const mean = (data.meaningsVn && data.meaningsVn[0]) ? data.meaningsVn[0].replace(/^\[.*?\]\s*/, '') : (data.meaningsEn[0] || '');
  const rad = data.radical ? data.radical.split(' ')[0] : '';

  // Tạo câu chuyện chiết tự dựa theo bộ thủ chính
  const radStories = {
    'nhân': `Người (亻/人) với phẩm chất đạo đức gắn liền với ý nghĩa ${mean.toUpperCase()} (${hv}).`,
    'thuỷ': `Dòng nước (氵) uốn lượn rửa trôi mang lại ý nghĩa ${mean.toUpperCase()} (${hv}).`,
    'khẩu': `Cái miệng (口) mở ra phát ngôn, ăn uống hoặc diễn đạt ý nghĩa ${mean.toUpperCase()} (${hv}).`,
    'mộc': `Cây gỗ (木) trong thiên nhiên vững chãi tượng trưng cho ${mean.toUpperCase()} (${hv}).`,
    'ngôn': `Lời nói (言) chân thành phát ra gắn liền với ${mean.toUpperCase()} (${hv}).`,
    'thủ': `Bàn tay (扌) khéo léo hành động thực hiện việc ${mean.toUpperCase()} (${hv}).`,
    'tâm': `Trái tim (心/忄) rung động cảm nhận sâu sắc ý nghĩa ${mean.toUpperCase()} (${hv}).`,
    'mịch': `Sợi tơ (糸) gắn kết mọi mối liên hệ biểu thị ${mean.toUpperCase()} (${hv}).`,
    'sước': `Bước chân đi (辶) dấn thân trên con đường tạo nên ${mean.toUpperCase()} (${hv}).`,
    'nhật': `Ánh mặt trời (日) rực rỡ soi sáng không gian biểu trưng cho ${mean.toUpperCase()} (${hv}).`,
    'miên': `Dưới mái nhà (宀) êm ấm bình yên nuôi dưỡng ${mean.toUpperCase()} (${hv}).`,
    'bối': `Vỏ sò tiền của (貝) quý giá thời xưa tượng trưng cho tài sản, ${mean.toUpperCase()} (${hv}).`,
    'thảo': `Cỏ cây hoa lá (艹) vươn mình tốt tươi gắn với ${mean.toUpperCase()} (${hv}).`,
    'đao': `Lưỡi dao sắc bén (刂/刀) phân định ranh giới rõ ràng biểu thị ${mean.toUpperCase()} (${hv}).`,
    'trúc': `Cây tre trúc (竹) dẻo dai thẳng tắp thể hiện ý nghĩa ${mean.toUpperCase()} (${hv}).`,
    'thổ': `Đất đai (土) màu mỡ nuôi dưỡng vạn vật tạo nên nền tảng ${mean.toUpperCase()} (${hv}).`,
    'hoả': `Ngọn lửa (火/灬) bùng cháy mãnh liệt thể hiện sức sống của ${mean.toUpperCase()} (${hv}).`,
    'phụ': `Gò đất cao (阝) bao bọc kiên cố bảo vệ sự ${mean.toUpperCase()} (${hv}).`,
    'cân': `Chiếc rìu (斤) đốn gỗ xây dựng nên ${mean.toUpperCase()} (${hv}).`,
    'trữ': `Mảnh đất nhỏ gọn gàng quy tụ tinh hoa ${mean.toUpperCase()} (${hv}).`
  };

  const defaultStory = radStories[rad] || `Cấu trúc các nét tạo thành hình tượng trực quan ghi nhớ chữ ${hv} mang nghĩa ${mean}.`;
  return `${defaultStory}`;
}

// Bổ sung kho mẹo nhớ phong phú cho các bài 8 - 50
const advancedMnemonics = {
  // Bài 8
  "静": "Màu xanh (青) trong lành tranh giành (争) sự YÊN TĨNH.",
  "有": "Tay (𠂇) cầm miếng thịt (月): CÓ của ăn của để.",
  "親": "Đứng (立) trên cây (木) trông ngóng (見) con là CHA MẸ, THÂN THIẾT.",
  "元": "Hai (二) người có đôi chân (儿) khỏe mạnh từ thủa BAN ĐẦU.",
  "気": "Hơi nước bốc lên từ nồi cơm (米): KHÍ CHẤT, KHÍ HẬU.",
  "暇": "Ánh mặt trời (日) nhàn rỗi ngắm mượn (叚) đồ: RẢNH RỖI.",
  "利": "Cây lúa (禾) cắt bằng dao (刂) sắc: LỢI ÍCH, NHANH LẸ.",
  "小": "Một nét thẳng chia nhỏ hai bên: NHỎ BÉ.",
  "古": "Lời nói mười (十) cái miệng (口) truyền lại từ CỔ XƯA.",
  "良": "Hạt thóc sạch sẽ tinh tươm: TỐT LÀNH.",
  "悪": "Người châu Á (亜) mang trong tâm (心) điều XẤU XA, ÁC.",
  "暑": "Mặt trời (日) thiêu đốt học giả (者): NÓNG NỰC.",
  "寒": "Dưới mái nhà (宀) người co ro bên đống rơm và băng tuyết (冫): LẠNH LẼO.",
  "冷": "Nước đá (冫) ra lệnh (令) hạ nhiệt: LẠNH BUỐT.",
  "難": "Cỏ cây khô cằn chim (隹) bay đi khó nhọc: KHÓ KHĂN.",
  "高": "Tòa tháp cao có cổng vòm mái che: CAO LỚN, ĐẮT.",
  "安": "Dưới mái nhà (宀) có phụ nữ (女) thì gia đình BÌNH AN, GIÁ RẺ.",
  "低": "Người (亻) cúi xuống chạm đáy đất (氐): THẤP KÉM.",
  "忙": "Trái tim (忄) chết lặng (亡) vì quá BẬN RỘN.",
  "楽": "Cây đàn bằng gỗ (木) có phím trắng (白) gảy lên khúc ca VUI VẺ.",
  "白": "Hình giọt nắng mặt trời chiếu rọi sáng Trắng: MÀU TRẮNG.",
  "黒": "Lửa (灬) thiêu cháy ruộng đồng (里) tạo thành muội THAN ĐEN: MÀU ĐEN.",
  "赤": "Đất (土) nung dưới ngọn lửa (灬) biến thành màu ĐỎ: MÀU ĐỎ.",
  "青": "Mầm cây xanh tốt mọc dưới ánh trăng: MÀU XANH DA TRỜI.",
  "町": "Ruộng đồng (田) có đinh sắt (丁) cắm mốc ranh giới: KHU PHỐ, THỊ TRẤN.",
  "山": "Ba ngọn núi trùng điệp nhấp nhô: NGỌN NÚI.",
  "桜": "Cây gỗ (木) có người phụ nữ (女) đeo chuỗi hạt hoa anh đào rực rỡ: HOA ANH ĐÀO.",

  // Bài 9
  "好": "Người phụ nữ (女) ôm đứa con thơ (子) biểu lộ sự YÊU THÍCH.",
  "嫌": "Người phụ nữ (女) kiêm nhiệm (兼) quá nhiều việc đâm ra GHÉT BỎ.",
  "上": "Nét vẽ hướng lên phía TRÊN đường chân trời.",
  "理": "Ngọc quý (王) trong làng (里) được phân định theo ĐẠO LÝ, VẬT LÝ.",
  "料": "Hạt gạo (米) đong trong đấu (斗) để tính NGUYÊN LIỆU, TIỀN PHÍ.",
  "球": "Ngọc quý (王) cầu (求) chúc cho tròn xoe: QUẢ CẦU, BÓNG.",
  "旅": "Dưới lá cờ (方) đoàn người (𠂉+氏) cùng nhau đi DU LỊCH.",
  "音": "Mở miệng (口) đứng (立) hát phát ra ÂM THANH.",
  "歌": "Anh trai (可+可) há miệng (欠) cất cao lời BÀI HÁT.",
  "舞": "Người dang tay múa lượn trên sân khấu: VŨ ĐẠO, MÚA.",
  "伎": "Người (亻) có cành nhánh (支) tài nghệ: KỸ NGHỆ, KABUKI.",
  "絵": "Sợi chỉ (糸) kết hợp (会) màu sắc tạo thành BỨC TRANH.",
  "字": "Đứa trẻ (子) dưới mái nhà (宀) chăm chỉ luyện CHỮ VIẾT.",
  "漢": "Dòng nước (氵) tưới cánh đồng nhà Hán: CHỮ HÁN.",
  "細": "Sợi tơ (糸) nhỏ như hạt thóc ngoài ruộng (田): TINH TẾ, NHỎ THON.",
  "間": "Ánh mặt trời (日) lọt qua khe hai cánh cổng (門): KHOẢNG CÁCH, THỜI GIAN.",
  "用": "Chiếc xô có tay cầm đem ra SỬ DỤNG.",
  "約": "Sợi dây (糸) buộc chặt cái muỗng (勺) làm GIAO ƯỚC, HẸN.",
  "束": "Dùng dây buộc chặt thanh cành gỗ (木): BÓ, BỘC.",
  "少": "Bốn giọt nước nhỏ bị cắt bớt một giọt: ÍT ỎI, MỘT CHÚT.",

  // Bài 10
  "男": "Dùng sức lực (力) cày cấy ngoài ruộng (田) là người ĐÀN ÔNG.",
  "女": "Người phụ nữ ngồi bắt chéo chân duyên dáng: PHỤ NỮ.",
  "犬": "Con chó to lớn (大) có thêm đốm chấm trên đầu: CON CHÓ.",
  "猫": "Loài thú (犭) lượn lờ nơi ruộng cỏ (艹+田): CON MÈO.",
  "木": "Hình vẽ cái cây có cành và rễ cắm sâu vào đất: CÂY CỐI.",
  "池": "Nước (氵) chảy uốn quanh đầm nước (也): CÁI AO.",
  "箱": "Hộp tre (竹) có đôi mắt (目) nhìn qua rặng cây (木): CÁI HỘP.",
  "蔵": "Nơi cất cỏ cây (艹) che chở (厂) vũ khí quý báu: KHO TÀNG.",
  "庫": "Dưới mái nhà (广) có chiếc xe (車) cất giữ: NHÀ KHO.",
  "棚": "Khung gỗ (木) ghép từ hai mặt trăng (朋): CÁI GIÁ, CÁI KỆ.",
  "窓": "Cửa sổ dưới mái nhà (穴) nhìn thấy khói bay qua rèm: CỬA SỔ.",
  "公": "Chia tám (八) phần cho mọi người một cách riêng tư (厶): CÔNG CỘNG.",
  "園": "Khu đất bao bọc (囗) có cây cỏ và người dạo chơi: HOA VIÊN, CÔNG VIÊN.",
  "喫": "Mở miệng (口) uống nước có khế ước (契): ĂN UỐNG, HÚT THUỐC.",
  "右": "Tay cầm muỗng đưa vào miệng (口) phía TAY PHẢI.",
  "左": "Tay cầm thước thợ (工) phía TAY TRÁI.",
  "中": "Mũi tên xuyên thẳng qua TÂM GIỮA hồng tâm: TRUNG TÂM, BÊN TRONG.",
  "外": "Trời tối (夕) tiên tri (卜) đi ra NGOÀI.",
  "隣": "Gò đất (阝) bên hạt gạo (米) sáng sủa: HÀNG XÓM, BÊN CẠNH.",
  "近": "Chiếc rìu (斤) bước đi (辶) một đoạn ngắn: GẦN GŨI.",

  // Bài 11
  "台": "Cái bệ hình khối có miệng (口) đỡ đồ vật: CÁI BỆ, ĐÀI.",
  "枚": "Cây gỗ (木) gõ roi (攵) đếm từng TỜ, TẤM MỎNG.",
  "回": "Khung tròn lồng vào khung tròn xoay quanh: LẦN, VÒNG QUANH.",
  "葉": "Cỏ cây (艹) qua nhiều thế hệ (世) trên cành gỗ (木): CHIẾC LÁ.",
  "封": "Đất (土) gò đắp được đo tấc (寸) niêm phong: PHONG THƯ.",
  "筒": "Ống tre (竹) thông suốt (同): ỐNG HỘP.",
  "両": "Cái cân hai đầu cân bằng nhau: HAI, LƯỠNG.",
  "兄": "Đứa trẻ mở miệng (口) chỉ bảo các em bằng đôi chân (儿): ANH TRAI.",
  "弟": "Sợi dây quấn quanh cây gậy theo thứ tự: EM TRAI.",
  "姉": "Người phụ nữ (女) quản lý khu chợ (市) là CHỊ GÁI.",
  "妹": "Người phụ nữ (女) chưa (未) trưởng thành là EM GÁI.",
  "留": "Ở lại ngoài cánh ruộng (田) để LƯU LẠI, DU HỌC.",
  "全": "Dưới một mái vương (王) quy tụ TOÀN BỘ trọn vẹn.",

  // Bài 12
  "簡": "Thẻ tre (竹) đóng giữa cánh cửa (間): ĐƠN GIẢN.",
  "単": "Chiếc khiên đơn độc chiến đấu: ĐƠN GIẢN, ĐƠN LẺ.",
  "遠": "Bước đi (辶) trong công viên rộng dài: XA XÔI.",
  "速": "Bó hàng (束) bước đi (辶) thoăn thoắt: NHANH CHÓNG.",
  "遅": "Con cừu (羊) bước đi (辶) chậm rãi bị tụt lại: CHẬM TRỄ.",
  "多": "Hai mặt trăng (夕+夕) chồng lên nhau: NHIỀU.",
  "暖": "Ánh mặt trời (日) sưởi ấm đôi bàn tay: ẤM ÁP.",
  "涼": "Nước (氵) từ thủ đô (京) mát lành: MÁT MẺ.",
  "甘": "Miếng ngọt ngậm chặt trong miệng: NGỌT NGÀO.",
  "辛": "Hình mũi kim xăm hình đau đớn: CAY ĐẮNG, VẤT VẢ.",
  "重": "Gánh nặng hàng nghìn (千) cân đè lên ruộng (里): NẶNG NỀ.",
  "軽": "Chiếc xe (車) luồn qua đồng cỏ nhẹ nhàng: NHẸ NHÀNG.",
  "季": "Lúa (禾) sinh con (子) theo từng MÙA.",
  "節": "Đốt tre (竹) phân định thời khắc: LỄ TIẾT, ĐỐT.",
  "春": "Mặt trời (日) sưởi ấm ba người (三人) dưới cỏ mọc: MÙA XUÂN.",
  "夏": "Người đội mũ đi dạo dưới nắng: MÙA HÈ.",
  "秋": "Cây lúa (禾) gặp lửa (火) chín vàng: MÙA THU.",
  "冬": "Băng tuyết (冫) rơi xuống bước chân chậm lại: MÙA ĐÔNG.",
  "天": "Một (一) người (大) vươn lên chạm đỉnh BẦU TRỜI.",
  "雨": "Những giọt nước mưa rơi từ đám mây trên trời: CƠN MƯA.",
  "雪": "Mưa (雨) rơi được bàn tay (彐) hứng lấy: TUYẾT TRẮNG.",
  "空": "Hang sâu (穴) người thợ (工) ngước nhìn BẦU TRỜI TRỐNG RỖNG.",
  "港": "Nước (氵) chảy cùng nhau (巷) đón tàu vào BẾN CẢNG.",
  "海": "Nước (氵) mỗi ngày (毎) tràn về BIỂN CẢ mênh mông.",
  "世": "Ba thế hệ mười năm nối tiếp nhau: THẾ GIAN, THẾ KỶ.",
  "界": "Ruộng đồng (田) phân chia ranh giới (介): THẾ GIỚI.",
  "祭": "Thịt (⺼) và bàn thờ (示) trong ngày LỄ HỘI.",
  "焼": "Lửa (火) đốt cháy vùng đất cao: NƯỚNG, CHÁY.",
  "身": "Hình người phụ nữ mang thai: THÂN THỂ, BẢN THÂN.",
  "寿": "Cây cối sinh sôi trường thọ: TUỔI THỌ, SUSHI.",
  "司": "Cái miệng ban hành mệnh lệnh: CHỈ HUY, CAI QUẢN.",
  "豚": "Thịt (⺼) của con lợn (豕): CON HEO, THỊT LỢN.",
  "鶏": "Con chim (鳥) gáy báo buổi sáng: CON GÀ."
};

Object.assign(classicMnemonics, advancedMnemonics);

// Xây dựng dataset cho 50 bài
console.log('Generating full kanji data for 50 lessons...');
const finalLessons = [];

for (let i = 1; i <= 50; i++) {
  const lNum = i;
  const words = vocabMap[lNum] || [];
  const kanjiInThisLesson = [];

  // Lấy các chữ Hán của bài
  words.forEach(w => {
    w.kanjis.forEach(k => {
      if (!kanjiInThisLesson.includes(k) && harvested[k]) {
        kanjiInThisLesson.push(k);
      }
    });
  });

  // Nếu là bài 1, bổ sung số đếm cơ bản để trọn vẹn nền tảng N5
  if (lNum === 1) {
    const extraBasic = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    extraBasic.forEach(eb => {
      if (!kanjiInThisLesson.includes(eb) && harvested[eb]) {
        kanjiInThisLesson.push(eb);
      }
    });
  }

  const items = kanjiInThisLesson.map(k => {
    const h = harvested[k];
    
    // Tìm các từ ví dụ trong bài chứa chữ Hán này
    const matchingExamples = [];
    words.forEach(w => {
      if (w.word.includes(k) && matchingExamples.length < 3) {
        matchingExamples.push({
          word: w.word,
          reading: w.reading,
          meaning: w.meaning
        });
      }
    });

    // Nếu không có ví dụ trong vocabMap bài này (như số đếm bổ sung), tạo ví dụ chuẩn
    if (matchingExamples.length === 0) {
      if (k === '一') matchingExamples.push({ word: '一歳', reading: 'いっさい', meaning: '1 tuổi' });
      else if (k === '二') matchingExamples.push({ word: '二歳', reading: 'にさい', meaning: '2 tuổi' });
      else if (k === '三') matchingExamples.push({ word: '三歳', reading: 'さんさい', meaning: '3 tuổi' });
      else if (k === '四') matchingExamples.push({ word: '四歳', reading: 'よんさい', meaning: '4 tuổi' });
      else if (k === '五') matchingExamples.push({ word: '五歳', reading: 'ごさい', meaning: '5 tuổi' });
      else if (k === '六') matchingExamples.push({ word: '六歳', reading: 'ろくさい', meaning: '6 tuổi' });
      else if (k === '七') matchingExamples.push({ word: '七歳', reading: 'ななさい', meaning: '7 tuổi' });
      else if (k === '八') matchingExamples.push({ word: '八歳', reading: 'はっさい', meaning: '8 tuổi' });
      else if (k === '九') matchingExamples.push({ word: '九歳', reading: 'きゅうさい', meaning: '9 tuổi' });
      else if (k === '十') matchingExamples.push({ word: '十歳', reading: 'じゅっさい', meaning: '10 tuổi' });
    }

    // Làm sạch nghĩa tiếng Việt
    let cleanMeaning = '';
    if (h.meaningsVn && h.meaningsVn.length > 0) {
      cleanMeaning = h.meaningsVn.map(m => m.replace(/^\[.*?\]\s*/, '')).slice(0, 2).join(', ');
    } else if (h.meaningsEn && h.meaningsEn.length > 0) {
      cleanMeaning = h.meaningsEn.slice(0, 2).join(', ');
    }

    // Lấy âm Hán Việt chuẩn
    let cleanHanViet = h.hanViet || '';
    if (cleanHanViet.includes(' ')) {
      // Ưu tiên âm Hán Việt thông dụng đầu tiên
      cleanHanViet = cleanHanViet.split(' ')[0];
    }

    return {
      kanji: k,
      hanViet: cleanHanViet,
      onyomi: h.onyomi || '—',
      kunyomi: h.kunyomi || '—',
      meaning: cleanMeaning || 'Đang cập nhật',
      strokes: h.strokes || 1,
      radicals: h.radical || 'Cơ bản',
      mnemonic: buildSmartMnemonic(k, h),
      examples: matchingExamples
    };
  });

  finalLessons.push({
    id: `kanji-${lNum}`,
    lesson: lNum,
    title: `Bài ${lNum}: Mẹo Nhớ Chữ Hán`,
    level: lNum <= 25 ? `Minna N5 (Bài ${lNum})` : `Minna N4 (Bài ${lNum})`,
    description: `Toàn bộ ${items.length} chữ Hán trọng tâm trong từ vựng Bài ${lNum} kèm mẹo nhớ chiết tự trực quan, âm Hán Việt và ví dụ thực tế.`,
    totalKanji: items.length,
    items: items
  });
}

console.log('Total lessons built:', finalLessons.length);
console.log('Total kanji instances across 50 lessons:', finalLessons.reduce((acc, l) => acc + l.items.length, 0));

const outputJs = `/**
 * MASTER DATABASE: MẸO GHI NHỚ TOÀN BỘ CHỮ HÁN 50 BÀI MINNA NO NIHONGO (N5 & N4)
 * Thiết kế chuẩn: Chữ Hán bên trên - Mẹo nhớ ở dòng bên dưới
 * Đầy đủ âm Hán Việt, Onyomi, Kunyomi, Số nét, Bộ thủ, Mẹo chiết tự & Từ vựng ví dụ
 */
const kanjiLessonsData = ${JSON.stringify(finalLessons, null, 2)};
`;

fs.writeFileSync('data/kanji_data.js', outputJs, 'utf8');
console.log('Successfully written data/kanji_data.js');
