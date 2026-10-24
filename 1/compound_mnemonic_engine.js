/**
 * MASTER COMPOUND MNEMONIC ENGINE (50 LESSONS MINNA NO NIHONGO)
 * Compliant with kanji-hanzi-mnemonics SKILL.md:
 * - Structural decomposition of component characters
 * - Concrete, associative, vivid cognitive storytelling
 * - ZERO boilerplate ("Ý nghĩa bắt nguồn từ...")
 */

const curatedStories = {
  // === Bài 1 ===
  "私達": "Bản thân TÔI (私) cùng CHÚNG TA (達) bước tới đạt được ước mơ: CHÚNG TÔI, CHÚNG TA.",
  "先生": "Người sinh ra trước (SINH) và đi trước dẫn đường (TIÊN) để truyền dạy tri thức cho đời: THẦY CÔ GIÁO.",
  "教師": "Bậc thầy SƯ (師) làm công tác GIÁO (教) dục uốn nắn học trò: GIÁO VIÊN.",
  "学生": "Tuổi trẻ chăm chỉ theo HỌC (学) chuẩn bị cho cuộc SINH (生) sống tương lai: HỌC SINH, SINH VIÊN.",
  "会社員": "Thành VIÊN (員) làm việc cống hiến trong công ty HỘI XÃ (会社): NHÂN VIÊN CÔNG TY.",
  "社員": "Thành VIÊN (員) thuộc biên chế của công XÃ / công ty (社): NHÂN VIÊN.",
  "銀行員": "Thành VIÊN (員) làm việc tại NGÂN HÀNG (銀行) cất giữ tiền bạc: NHÂN VIÊN NGÂN HÀNG.",
  "医者": "Kẻ, người (者) chuyên làm nghề Y (医) thuật chữa bệnh cứu người: BÁC SĨ.",
  "研究者": "Người (者) chuyên tâm mài giũa NGHIÊN CỨU (研究) học thuật chuyên sâu: NHÀ NGHIÊN CỨU.",
  "大学": "Nơi HỌC (学) tập ở bậc ĐẠI (大) học đỉnh cao của tri thức: TRƯỜNG ĐẠI HỌC.",
  "病院": "Tòa VIỆN (院) lớn chuyên chăm sóc và chữa trị ốm BỆNH (病) cho nhân dân: BỆNH VIỆN.",
  "何歳": "MẤY (何) con số năm TUỔI (歳) đời đã trải qua: MẤY TUỔI.",
  "何才": "Bao nhiêu (何) con số chỉ TUỔI (才) tác của một người: MẤY TUỔI.",
  "中国": "Đất NƯỚC (国) nằm ở vị trí TRUNG (中) tâm phương Đông: TRUNG QUỐC.",
  "日本": "Xứ sở nơi mặt trời NHẬT (日) mọc từ GỐC (本) nguồn biển Đông: NHẬT BẢN.",
  "田舎": "Vùng đất nương ĐIỀN (田) mộc mạc có mái nhà XÁ (舎) đơn sơ: QUÊ HƯƠNG, NÔNG THÔN.",
  "出身": "Nơi bước RA (出) bắt đầu cho THÂN (身) phận và cuộc đời: XUẤT THÂN, QUÊ QUÁN.",
  "実習生": "Học SINH (生) tham gia TẬP (習) tành thực tế THỰC (実) tế tay nghề: THỰC TẬP SINH.",
  "機械": "Cỗ máy cơ KHÍ (機) tinh xảo trang bị KHÍ GIỚI (械) vận hành mạnh mẽ: MÁY MÓC.",
  "専門": "Cánh CỔNG (門) mở vào lĩnh vực CHUYÊN (専) sâu: CHUYÊN MÔN.",

  // === Bài 2 ===
  "辞書": "Cuốn SÁCH (書) thu thập và giải thích tường tận từng TỪ NGỮ (辞): TỪ ĐIỂN.",
  "雑誌": "TẬP KÝ (誌) tổng hợp PHỨC TẠP (雑) nhiều thể loại bài viết và tranh ảnh: TẠP CHÍ.",
  "新聞": "Tờ báo đưa những TIN TỨC MỚI (新) được NGHE (聞) thấy mỗi ngày: BÁO CHÍ.",
  "手帳": "Cuốn TRƯƠNG (帳) sổ nhỏ luôn cầm trên TAY (手) để ghi nhớ công việc: SỔ TAY.",
  "名刺": "Mảnh thiếp nhỏ in TÊN (名) họ trao nhau khi sơ ngộ: DANH THIẾP.",
  "鉛筆": "Cây BÚT (筆) có ruột làm bằng CHÌ (鉛) dùng để viết và vẽ: BÚT CHÌ.",
  "時計": "Cỗ máy KÊ TÍNH (計) đo lường chính xác từng khoảnh khắc THỜI GIAN (時): ĐỒNG HỒ.",
  "自動車": "Cỗ XA (車) TỰ ĐỘNG (自動) lăn bánh trên đường bằng động cơ mà không cần ngựa kéo: Ô TÔ.",
  "自転車": "Chiếc xe XA (車) chuyển bánh nhờ người lái TỰ (自) mình đạp CHUYỂN (転) bàn đạp: XE ĐẠP.",
  "手紙": "Mảnh GIẤY (紙) nắn nót viết bằng TAY (手) gửi gắm tâm tình phương xa: LÁ THƯ.",
  "英語": "Ngôn NGỮ (語) của xứ sở tinh ANH (英): TIẾNG ANH.",
  "煙草": "Thứ THẢO MỘC (草) phơi khô quấn lại châm lửa phả ra khói YÊN (煙): THUỐC LÁ.",
  "日本語": "Ngôn NGỮ (語) chính thức của đất nước NHẬT BẢN (日本): TIẾNG NHẬT.",
  "灰皿": "Chiếc ĐĨA (皿) nhỏ dùng để hứng tàn TRO (灰) thuốc lá: GẠT TÀN.",

  // === Bài 3 ===
  "教室": "Căn PHÒNG THẤT (室) dành riêng cho thầy trò truyền dạy GIÁO (教) dục: PHÒNG HỌC.",
  "食堂": "Gian ĐƯỜNG (堂) rộng lớn chuyên phục vụ THỰC (食) phẩm ăn uống: NHÀ ĂN, CĂNG TIN.",
  "事務所": "NƠI CHỐN (所) giải quyết các SỰ VỤ (事務) hành chính công việc: VĂN PHÒNG.",
  "会議室": "Căn PHÒNG (室) trang nghiêm để mọi người HỘI HỌP (会議) thảo luận: PHÒNG HỌP.",
  "受付": "Bàn quầy đứng TIẾP NHẬN (受) và GIAO PHÓ (付) hướng dẫn khách đến: QUẦY TIẾP TÂN.",
  "部屋": "Căn PHÒNG ỐC (屋) chia thành từng BỘ (部) phận khép kín trong ngôi nhà: CĂN PHÒNG.",
  "手洗い": "Nơi dùng nước RỬA (洗い) sạch đôi TAY (手) và vệ sinh cá nhân: NHÀ VỆ SINH.",
  "階段": "Bậc THANG (階) phân theo từng GIAI ĐOẠN (段) bước chân lên xuống: CẦU THANG.",
  "自動販売機": "CỖ MÁY (機) TỰ ĐỘNG (自動) BUÔN BÁN (販売) nước giải khát và hàng hóa: MÁY BÁN HÀNG TỰ ĐỘNG.",
  "電話": "Dùng dòng ĐIỆN (電) truyền đi lời THOẠI (話) nói chuyện từ xa: ĐIỆN THOẠI.",
  "会社": "Nơi mọi người TỤ HỘI (会) lại cùng làm việc trong một TỔ CHỨC XÃ HỘI (社): CÔNG TY.",
  "売り場": "BÃI ĐẤT, QUẦY HÀNG (場) chuyên dùng để BÁN (売り) đồ đạc sản phẩm: QUẦY HÀNG.",
  "地下": "Khoảng không gian nằm BÊN DƯỚI (下) lòng ĐẤT (地): TẦNG HẦM, DƯỚI ĐẤT.",
  "何階": "Hỏi xem ở TẦNG THỨ MẤY (何階) của tòa nhà cao tầng: TẦNG MẤY.",

  // === Bài 4 ===
  "郵便局": "Cơ quan CỤC (局) chuyên lo việc trạm BƯU (郵) vận chuyển thư tín TIỆN (便) lợi: BƯU ĐIỆN.",
  "図書館": "Tòa QUÁN (館) nguy nga lưu trữ hàng vạn bản ĐỒ (図) và SÁCH (書) quý: THƯ VIỆN.",
  "美術館": "Tòa QUÁN (館) trang nhã trưng bày các tác phẩm NGHỆ THUẬT (術) tuyệt MỸ (美): BẢO TÀNG MỸ THUẬT.",
  "電話番号": "Dãy số PHIÊN (番) và ký HIỆU (号) định danh riêng cho từng chiếc máy ĐIỆN THOẠI (電話): SỐ ĐIỆN THOẠI.",
  "銀行": "Nơi cất giữ tiền BẠC NGÂN (銀) và thực hiện các giao dịch LƯU HÀNH (行) tiền tệ: NGÂN HÀNG.",
  "勉強": "Phải luôn MIỄN (勉) cưỡng nỗ lực vượt qua lười biếng để ý chí và trí tuệ trở nên kiên CƯỜNG (強): HỌC TẬP.",
  "勉強する": "Phải luôn MIỄN (勉) cưỡng nỗ lực vượt qua lười biếng để ý chí và trí tuệ trở nên kiên CƯỜNG (強): HỌC TẬP.",
  "午前": "Quãng thời gian TRƯỚC (前) buổi trưa đúng giờ NGỌ (午): BUỔI SÁNG (AM).",
  "午後": "Quãng thời gian SAU (後) buổi trưa đúng giờ NGỌ (午): BUỔI CHIỀU (PM).",
  "今朝": "Thời khắc ban SÁNG (朝) của chính ngày HÔM NAY (今): SÁNG NAY.",
  "今晩": "Buổi TỐI (晩) muộn của ngày HÔM NAY (今): TỐI NAY.",
  "昨夜": "ĐÊM (夜) tăm tối của ngày HÔM QUA (昨): ĐÊM QUA, TỐI QUA.",
  "月曜日": "NGÀY (日) đầu tuần được vầng TRĂNG NGUYỆT (月) soi sáng: THỨ HAI.",
  "火曜日": "NGÀY (日) rực lửa HỎA (火) nhiệt huyết: THỨ BA.",
  "水曜日": "NGÀY (日) mát lành như dòng nước THỦY (水): THỨ TƯ.",
  "木曜日": "NGÀY (日) vững chãi tươi tốt như hàng cây MỘC (木): THỨ NĂM.",
  "金曜日": "NGÀY (日) lấp lánh như vàng KIM (金) đón chờ cuối tuần: THỨ SÁU.",
  "土曜日": "NGÀY (日) thảnh thơi trở về với đất mẹ THỔ (土): THỨ BẢY.",
  "日曜日": "NGÀY (日) trọn vẹn của mặt trời NHẬT (日) chan hòa: CHỦ NHẬT.",
  "何曜日": "MẤY (何) ngày trong tuần lễ được gọi tên: THỨ MẤY.",
  "昼休み": "Đến đúng cữ ban TRÚ (昼) giữa ngày, tạm dừng tay để HƯU (休) dưỡng: NGHỈ TRƯA.",
  "毎晩": "Từng buổi TỐI (晩) đều đặn trôi qua lặp lại MỖI (毎) ngày: MỖI TỐI.",
  "毎日": "Từng NGÀY (日) trôi qua đều đặn lặp lại MỖI (毎) sáng mai: MỖI NGÀY.",
  "講義": "Diễn GIẢNG (講) những ĐẠO NGHĨA (義) và tri thức sâu sắc: BÀI GIẢNG, GIẢNG BÀI.",
  "見学": "Tận mắt NHÌN KIẾN (見) để HỌC HỎI (学) thực tế ngoài đời: THAM QUAN HỌC HỎI.",
  "番号案内": "Hướng DẪN (案内) tra cứu dãy SỐ (番号) liên lạc: DỊCH VỤ HỎI SỐ ĐIỆN THOẠI.",
  "大変": "Biến cố ĐỔI THAY (変) quá to LỚN ĐẠI (大) khiến người ta phải vất vả: VẤT VẢ, KHÓ KHĂN.",

  // === Bài 5 ===
  "飛行機": "Cỗ máy CƠ (機) khí khổng lồ biết PHI (飛) lượn trên trời để HÀNH (行) trình qua muôn trùng mây: MÁY BAY.",
  "電車": "Cỗ xe XA (車) gắn bánh sắt chạy bằng dòng ĐIỆN (電) cao thế: TÀU ĐIỆN.",
  "地下鉄": "Đoàn tàu SẮT (鉄) lao vun vút dưới đường hầm NGẦM DƯỚI ĐẤT (地下): TÀU ĐIỆN NGẦM.",
  "新幹線": "Tuyến ĐƯỜNG DÂY (線) tàu cao tốc hoàn toàn MỚI (新) đóng vai trò TRỤ CỘT CÁN (幹) của quốc gia: TÀU SIÊU TỐC SHINKANSEN.",
  "家族": "GIA đình (家) gắn kết những người cùng huyết TỘC (族): GIA ĐÌNH.",
  "友達": "Những người BẠN (友) đồng hành cùng bước tới ĐẠT (達) thành công: BẠN BÈ.",
  "彼女": "Người PHỤ NỮ (女) ở BÊN KIA (彼) làm rung động trái tim: BẠN GÁI, CÔ ẤY.",
  "彼": "Người đàn ông ở BÊN KIA (彼): ANH ẤY, BẠN TRAI.",
  "先週": "CHU KỲ TUẦN (週) trôi qua TRƯỚC TIÊN (先): TUẦN TRƯỚC.",
  "今週": "CHU KỲ TUẦN (週) đang diễn ra ở HIỆN TẠI (今): TUẦN NÀY.",
  "来週": "CHU KỲ TUẦN (週) sắp sửa BƯỚC ĐẾN (来): TUẦN SAU.",
  "先月": "THÁNG (月) trôi qua TRƯỚC TIÊN (先): THÁNG TRƯỚC.",
  "今月": "THÁNG (月) đang ở HIỆN TẠI (今): THÁNG NÀY.",
  "来月": "THÁNG (月) sắp sửa BƯỚC ĐẾN (来): THÁNG SAU.",
  "去年": "NĂM (年) đã KHỨ (去) qua, lùi vào dĩ vãng: NĂM NGOÁI.",
  "今年": "NĂM (年) đang diễn ra ở HIỆN TẠI (今): NĂM NAY.",
  "来年": "NĂM (年) sắp sửa BƯỚC ĐẾN (来) trong tương lai: NĂM SAU.",
  "何月": "Hỏi xem THÁNG MẤY (何月) trong chu kỳ 12 tháng: THÁNG MẤY.",
  "一日": "Con số 1 (一) đứng đầu danh sách các NGÀY (日) trong tháng: NGÀY MÙNG MỘT.",
  "誕生日": "NGÀY (日) chúc mừng sinh linh chào ĐỜI (誕) cất tiếng khóc đầu tiên SINH (生): SINH NHẬT.",
  "普通": "Mức độ PHỔ THÔNG (普通) dừng ở mọi ga: TÀU THƯỜNG.",
  "急行": "Chuyến tàu HÀNH (行) trình di chuyển KHẨN CẤP (急) bỏ qua các ga nhỏ: TÀU TỐC HÀNH.",
  "特急": "Chuyến tàu ĐẶC BIỆT (特) chạy CỰC NHANH (急): TÀU TỐC HÀNH ĐẶC BIỆT.",

  // === Bài 6 ===
  "ご飯": "Hạt GẠO NẤU CHÍN (飯) được dâng kính trọng (ご): BỮA CƠM, CƠM ĂN.",
  "朝ご飯": "Bữa CƠM (ご飯) nạp năng lượng vào buổi sáng sớm TINH MƠ (朝): BỮA SÁNG.",
  "昼ご飯": "Bữa CƠM (ご飯) lót dạ vào ban TRƯA (昼) giữa ngày: BỮA TRƯA.",
  "晩ご飯": "Bữa CƠM (ご飯) quây quần gia đình vào buổi TỐI (晩): BỮA TỐI.",
  "野菜": "Các loại CỎ CÂY RAU CỎ (菜) tươi tốt nơi ĐỒNG NỘI DÃ (野): RAU CỦ.",
  "果物": "VẬT PHẨM (物) là HOA QUẢ (果) thơm ngọt kết tinh từ cây cối: TRÁI CÂY.",
  "お茶": "Lá TRÀ (茶) xanh hãm nước nóng thơm ngát: NƯỚC CHÈ, TRÀ.",
  "紅茶": "Thứ TRÀ (茶) lên men có sắc nước ĐỎ HỒNG (紅) nồng nàn: TRÀ ĐEN, HỒNG TRÀ.",
  "牛乳": "Dòng SỮA (乳) trắng ngần tinh khiết vắt từ bò BÒ NGƯU (牛): SỮA BÒ.",
  "お酒": "Thức uống lên men từ gạo TỬU (酒) đậm đà phong vị Nhật Bản: RƯỢU.",
  "映画": "Bức TRANH HỌA (画) được ÁNH SÁNG PHẢN CHIẾU (映) chuyển động sống động: PHIM ẢNH.",
  "写真": "Tấm hình chộp lại CHÂN DUNG (真) chân thực thông qua việc SAO CHÉP TẢ (写): BỨC ẢNH.",
  "宿題": "CHỦ ĐỀ BÀI TẬP (題) mang về TÚC XÁ, NHÀ Ở (宿) làm trước khi đến lớp: BÀI TẬP VỀ NHÀ.",
  "お花見": "Cùng nhau ngắm NHÌN (見) vẻ đẹp rực rỡ của ngàn đóa HOA (花) anh đào: LỄ HỘI NGẮM HOA.",

  // === Bài 7 ===
  "切符": "TẤM PHÙ HIỆU (符) được CẮT (切) ra từ cuống vé dùng để lên tàu: VÉ TÀU XE.",
  "荷物": "VẬT PHẨM (物) được gánh vác NẰM TRÊN LƯNG (荷) khi đi xa: HÀNH LÝ, ĐỒ ĐẠC.",
  "切手": "Mảnh giấy nhỏ CẮT (切) ra dán vào TAY THƯ (手) làm cước phí: TEM THƯ.",
  "葉書": "Bức THƯ VIẾT (書) ngắn gọn trên mảnh giấy mỏng như chiếc LÁ (葉): BƯU THIẾP.",
  "父母": "Đấng PHỤ THÂN (父) cùng MẪU THÂN (母) sinh thành dưỡng dục: CHA MẸ.",

  // === Bài 8 ===
  "食べ物": "Những VẬT PHẨM (物) dùng để ĂN (食べ) nuôi dưỡng cơ thể: THỨC ĂN, ĐỒ ĂN.",
  "飲み物": "Những VẬT PHẨM (物) dạng lỏng dùng để UỐNG (飲み): ĐỒ UỐNG.",
  "生活": "Dòng SINH MỆNH (生) luôn vận ĐỘNG LINH HOẠT (活) mỗi ngày: ĐỜI SỐNG, SINH HOẠT.",
  "仕事": "Kẻ SĨ (仕) đứng ra gánh vác các SỰ VIỆC (事) để mưu sinh: CÔNG VIỆC.",

  // === Bài 9 ===
  "料理": "Đong đếm NGUYÊN LIỆU (料) và điều CHỈNH LÝ (理) gia vị thành món ngon: MÓN ĂN, NẤU ĂN.",
  "野球": "Môn thể thao đánh quả BÓNG CẦU (球) trên sân cỏ NỘI DÃ (野): BÓNG CHÀY.",
  "旅行": "Du ngoạn bước ĐI (行) khắp muôn dặm ĐƯỜNG LỮ (旅): DU LỊCH.",
  "音楽": "ÂM THANH (音) du dương mang lại niềm VUI LẠC (楽) cho tâm hồn: ÂM NHẠC.",
  "歌舞伎": "Nghệ thuật KỸ NGHỆ (伎) biểu diễn MÚA VŨ (舞) và HÁT CA (歌) truyền thống: KỊCH KABUKI.",
  "漢字": "CHỮ VIẾT (字) bắt nguồn từ triều đại nhà HÁN (漢): CHỮ HÁN, KANJI.",
  "時間": "Khoảng GIAN (間) được tính theo từng giờ THỜI (時): THỜI GIAN.",
  "用事": "Những SỰ VIỆC (事) quan trọng cần phải DÙNG (用) tâm giải quyết: CÔNG VIỆC BẬN.",
  "約束": "Lời giao ƯỚC (約) RÀNG BUỘC (束) đôi bên cùng giữ gìn: CUỘC HẸN, LỜI HỨA.",

  // === Bài 10 ===
  "男の人": "CON NGƯỜI (人) mang giới tính NAM (男) giới: NGƯỜI ĐÀN ÔNG.",
  "女の人": "CON NGƯỜI (人) mang giới tính NỮ (女) giới: NGƯỜI PHỤ NỮ.",
  "男の子": "ĐỨA TRẺ CON (子) mang giới tính NAM (男): BÉ TRAI.",
  "女の子": "ĐỨA TRẺ CON (子) mang giới tính NỮ (女): BÉ GÁI.",
  "電池": "Chiếc ao AO HỒ (池) nhỏ tích trữ năng lượng ĐIỆN (電): PIN.",
  "冷蔵庫": "Chiếc KHO (庫) chuyên LÀM LẠNH (冷) để ĐÔNG ĐÁ (蔵) bảo quản thực phẩm: TỦ LẠNH.",
  "公園": "Khu VƯỜN (園) CÔNG CỘNG (公) dành cho toàn thể nhân dân dạo mát: CÔNG VIÊN.",
  "喫茶店": "CỬA TIỆM (店) nơi khách ngồi NGẬM NHẤM (喫) từng ngụm TRÀ (茶) thanh tịnh: QUÁN CÀ PHÊ.",
  "本屋": "CỬA TIỆM (屋) chuyên bày bán các loại SÁCH (本): TIỆM SÁCH.",
  "乗り場": "BÃI ĐẤT, NƠI CHỐN (場) quy định để LÊN XE (乗り): ĐIỂM ĐÓN XE.",

  // === Bài 11 ===
  "兄弟": "Tình thân giữa người anh HUYNH (兄) và người em ĐỆ (弟): ANH EM.",
  "両親": "CẢ HAI (両) đấng THÂN SINH (親) ruột thịt cha và mẹ: CHA MẸ.",
  "留学生": "Học SINH (生) LƯU LẠI (留) xứ người để HỌC HỎI (学): DU HỌC SINH.",
  "封筒": "ỐNG TRE hoặc bao giấy (筒) NIÊM PHONG (封) kín thư từ: PHONG BÌ.",
  "速達": "Vận chuyển hỏa TỐC (速) để bưu phẩm ĐẠT ĐẾN (達) nhanh nhất: CHUYỂN PHÁT NHANH.",
  "書留": "Văn bản THƯ TỪ (書) được LƯU (留) lại chữ ký bảo đảm: THƯ BẢO ĐẢM.",
  "船便": "Vận chuyển TIỆN LỢI (便) hàng hóa bằng đường THUYỀN (船) biển: GỬI ĐƯỜNG BIỂN.",

  // === Bài 12 ===
  "簡単": "GIẢN ĐƠN (簡) và ĐƠN THUẦN (単) dễ dàng nắm bắt: ĐƠN GIẢN.",
  "季節": "Từng TIẾT KHÍ (節) chuyển vần trong MÙA VỤ (季): MÙA MÀNG, MÙA TRONG NĂM.",
  "天気": "KHÍ TIẾT (気) của đất TRỜI (天) ban xuống: THỜI TIẾT.",
  "空港": "BẾN CẢNG (港) trên BẦU TRỜI KHÔNG (空) cho máy bay cất hạ cánh: SÂN BAY.",
  "世界": "KHÔNG GIAN CÕI (世) ranh GIỚI (界) của toàn nhân loại: THẾ GIỚI.",

  // === Bài 13 ===
  "水泳": "Vươn mình BƠI LỘI (泳) tung tăng dưới làn NƯỚC (水): BƠI LỘI.",
  "買い物": "Đi chọn MUA (買い) các VẬT PHẨM (物) tiêu dùng: MUA SẮM.",
  "散歩": "TẢN MÁT (散) cất từng BƯỚC CHÂN (歩) thảnh thơi trên đường: ĐI DẠO.",
  "注文": "Rót ý CHÚ TÂM (注) vào lời HỎI (文) đặt món: GỌI MÓN, ĐẶT HÀNG.",
  "定食": "Suất ĂN (食) trọn gói được QUY ĐỊNH (定) sẵn món: SUẤT ĂN CỐ ĐỊNH.",
  "牛丼": "BÁT TÔ CƠM (丼) phủ đầy thịt BÒ (牛) xào hành tây thơm nức: CƠM BÒ XÀO.",

  // === Bài 14 ===
  "信号": "TÍN HIỆU (信) phát ra bằng SỐ HIỆU (号) đèn đường chỉ dẫn: ĐÈN GIAO THÔNG.",
  "住所": "NƠI CHỐN (所) CƯ TRÚ (住) lâu dài của một gia đình: ĐỊA CHỈ NHÀ.",
  "地図": "BẢN ĐỒ (図) phác họa địa hình ĐẤT ĐAI (地): BẢN ĐỒ.",

  // === Bài 15 ===
  "歯医者": "BÁC SĨ (医者) chuyên khoa khám chữa hàm RĂNG (歯): NHA SĨ.",
  "独身": "Bản THÂN (身) sống ĐƠN ĐỘC (独) chưa lập gia đình: ĐỘC THÂN.",
  "製品": "VẬT PHẨM (品) được CHẾ TẠO (製) ra từ nhà máy: SẢN PHẨM.",

  // === Bài 16 ===
  "小学校": "Ngôi TRƯỜNG (校) bước đầu học trò TIỂU HỌC (小学) cắp sách đến lớp: TRƯỜNG TIỂU HỌC.",
  "中学校": "Ngôi TRƯỜNG (校) ở bậc TRUNG HỌC CƠ SỞ (中学): TRƯỜNG CẤP HAI.",
  "高等学校": "Ngôi TRƯỜNG HỌC (校) ở bậc CAO ĐẲNG (高等): TRƯỜNG CẤP BA.",

  // === Bài 17 ===
  "心配": "Nỗi niềm từ TRÁI TIM (心) PHÂN PHÁT (配) đi khắp nơi vì bồn chồn lo lắng: LO LẮNG.",
  "残業": "Ở LẠI (残) làm thêm CÔNG VIỆC (業) ngoài giờ quy định: TĂNG CA, LÀM THÊM GIỜ.",
  "出張": "Rời nhà đi RA NGOÀI (出) giương mở TRƯƠNG (張) công việc làm ăn: ĐI CÔNG TÁC.",
  "保険証": "TẤM CHỨNG TỪ (証) BẢO HIỂM (保険) y tế: THẺ BẢO HIỂM.",
  "病気": "KHÍ HUYẾT (気) suy yếu sinh ra ốm BỆNH (病): ỐM ĐAU, BỆNH TẬT.",
  "上着": "ÁO QUẦN (着) mặc khoác BÊN TRÊN (上): ÁO KHOÁC.",
  "下着": "ĐỒ MẶC (着) lót BÊN DƯỚI (下) sát cơ thể: ĐỒ LÓT.",

  // === Bài 18 ===
  "運転": "VẬN DỤNG (運) tay lái để xoay CHUYỂN (転) bánh xe lăn trên đường: LÁI XE.",
  "趣味": "HƯƠNG VỊ (味) cuốn hút gợi niềm HỨNG THÚ (趣): SỞ THÍCH.",
  "読書": "ĐỌC ĐỌC (読) những cuốn SÁCH (書) khai sáng tri thức: ĐỌC SÁCH.",

  // === Bài 19 ===
  "掃除": "Cầm chổi QUÉT TẢO (掃) sạch và TRỪ KHỬ (除) hết bụi bẩn rác rưởi: DỌN DẸP.",
  "洗濯": "Dùng nước TẨY RỬA (洗) và RŨ TRẠC (濯) sạch xà phòng trên áo quần: GIẶT GIŨ.",
  "練習": "LUYỆN TẬP (練) rèn giũa và ÔN TẬP (習) lặp đi lặp lại nhiều lần: LUYỆN TẬP.",
  "調子": "TIẾT ĐIỆU ĐIỀU HÒA (調) của cơ thể hoặc máy móc: TÌNH TRẠNG, PHONG ĐỘ.",

  // === Bài 20 ===
  "言葉": "Lời NÓI (言) trải rộng như những chiếc LÁ (葉) ngôn từ: TỪ VỰNG, NGÔN TỪ.",
  "物価": "GIÁ TRỊ (価) tính bằng tiền của HÀNG HÓA VẬT PHẨM (物): GIÁ CẢ.",
  "着物": "TRANG PHỤC ĐỒ ĐẠC (物) dùng để MẶC VÀO THÂN (着): TRANG PHỤC TRUYỀN THỐNG KIMONO.",

  // === Bài 21 ===
  "意見": "Ý NGHĨ (意) và góc NHÌN KIẾN THỨC (見) của bản thân: Ý KIẾN.",
  "試合": "ĐỌ SỨC THI THỐ (試) và HỢP LỰC (合) tranh tài: TRẬN ĐẤU.",
  "交通": "GIAO NHAU (交) và LƯU THÔNG (通) xe cộ trên đường sá: GIAO THÔNG.",
  "最近": "Thời gian TỐI (最) gần GẦN GŨI (近) ngay trước mắt: GẦN ĐÂY, DẠO NÀY.",

  // === Bài 22 ===
  "眼鏡": "Chiếc GƯƠNG THẤU KÍNH (鏡) đeo trước CON MẮT NHÃN (眼): KÍNH MẮT.",
  "帽子": "Chiếc MŨ (帽) nhỏ nhắn che đầu cho đứa TRẺ CON (子): NÓN, MŨ.",

  // === Bài 23 ===
  "故障": "Gặp sự CỐ (故) CHƯỚNG NGẠI (障) làm máy móc ngừng hoạt động: HỎNG HÓC.",
  "交差点": "ĐIỂM (点) nơi các làn đường GIAO NHAU (交) và SAI KHÁC (差): NGÃ TƯ ĐƯỜNG.",
  "駐車場": "BÃI ĐẤT (場) chuyên dùng để DỪNG ĐỖ (駐) xe cộ (車): BÃI ĐỖ XE.",

  // === Bài 24 ===
  "準備": "Đạt chuẩn mực CHUẨN (準) và trang BỊ (備) đầy đủ sẵn sàng: CHUẨN BỊ.",
  "引越し": "KÉO DẪN (引) đồ đạc VƯỢT QUA (越) đến nơi ở mới: CHUYỂN NHÀ.",
  "全部": "TOÀN THỂ (全) các BỘ PHẬN (部) không sót một điều gì: TOÀN BỘ, TẤT CẢ.",
  "自分": "TỰ bản thân mình (自) trong từng PHẦN (分) trách nhiệm: TỰ BẢN THÂN.",

  // === Bài 25 ===
  "留学": "LƯU LẠI (留) xứ người để trau dồi HỌC HỎI (学): DU HỌC.",
  "一億": "Con số 1 (一) đứng trước hàng ỨC (億) trăm triệu: MỘT TRĂM TRIỆU.",

  // === Bài 26-50 (Minna N4 Nâng Cao) ===
  "燃えるゴミ": "Những thứ rác rưởi CÓ THỂ BỐC CHÁY (燃える) dưới ngọn lửa: RÁC CHÁY ĐƯỢC.",
  "燃えないゴミ": "Những thứ rác rưởi KHÔNG THỂ BỐC CHÁY (燃えない): RÁC KHÔNG CHÁY ĐƯỢC.",
  "宇宙": "Mái vòm KHÔNG GIAN VŨ (宇) cùng TRỤC THỜI GIAN TRỤ (宙) vô tận: VŨ TRỤ.",
  "宇宙船": "CON THUYỀN (船) thám hiểm không gian VŨ TRỤ (宇宙): TÀU VŨ TRỤ.",
  "宇宙飛行士": "BẬC HỌC SĨ (士) PHI HÀNH (飛行) thám hiểm VŨ TRỤ (宇宙) bao la: PHI HÀNH GIA.",
  "連絡": "Giăng sợi tơ LẠC (絡) LIÊN kết (連) thông tin đến mọi người: LIÊN LẠC.",
  "道具": "CÔNG CỤ (具) giúp con người đi đúng ĐẠO LÝ (道) và hoàn thành công việc: DỤNG CỤ.",
  "通信販売": "Buôn BÁN (販売) hàng hóa từ xa thông qua TRUYỀN THÔNG TIN (通信): BÁN HÀNG TỪ XA.",
  "台所": "NƠI CHỐN (所) đặt chiếc KỆ BẾP (台) nấu nướng: NHÀ BẾP.",
  "本棚": "Chiếc KỆ GIÁ (棚) dùng để xếp ngay ngắn những cuốn SÁCH (本): KỆ SÁCH.",
  "家具": "DỤNG CỤ (具) tiện nghi bày biện trong GIA ĐÌNH (家): ĐỒ NỘI THẤT.",
  "真面目": "Đôi MẮT (目) toát lên vẻ CHÂN THẬT (真) và ĐỐI DIỆN DIỆN MẠO (面) nghiêm chỉnh: NGHIÊM TÚC, ĐỨNG ĐẮN.",
  "熱心": "TRÁI TIM (心) luôn bừng cháy ngọn lửa NHIỆT HUYẾT (熱): NHIỆT TÌNH, HẾT LÒNG.",
  "美容院": "TÒA VIỆN (院) chuyên chăm sóc NHAN SẮC MỸ MIỀU (美容): THẨM MỸ VIỆN, TIỆM LÀM ĐẸP.",
  "経験": "Đã từng KINH QUA (経) và TRẢI NGHIỆM THỬ THÁCH (験) ngoài đời: KINH NGHIỆM.",
  "品物": "VẬT PHẨM (物) hàng hóa đạt PHẨM CHẤT (品) đưa ra thị trường: HÀNG HÓA.",
  "値段": "BẬC THANG (段) định GIÁ TRỊ (値) tiền tệ của sản phẩm: GIÁ BÁN.",
  "給料": "Khoản NGUYÊN LIỆU TIỀN PHÍ (料) CUNG CẤP (給) thù lao cho công sức: TIỀN LƯƠNG.",
  "番組": "TỔ CHỨC CÁC PHÂN ĐOÀN (組) theo từng PHIÊN SỐ (番) phát sóng: CHƯƠNG TRÌNH PHÁT THANH TRUYỀN HÌNH.",
  "小説": "Tác phẩm giãi BÀY DIỄN THUYẾT (説) về những mảnh đời bình dị NHỎ BÉ (小): TIỂU THUYẾT.",
  "小説家": "CHUYÊN GIA BẬC THẦY (家) sáng tác TIỂU THUYẾT (小説): NHÀ VĂN.",
  "歌手": "BÀN TAY, CON NGƯỜI (手) cất lên những bài CA HÁT (歌) lay động: CA SĨ.",
  "交番": "Nơi các cảnh sát viên THAY PHIÊN (番) GIAO NHAU (交) canh gác trị an: BỐT CẢNH SÁT.",
  "案内書": "Cuốn SÁCH VĂN BẢN (書) HƯỚNG DẪN (案内) thông tin tường tận: SÁCH HƯỚNG DẪN.",
  "人形": "Bức tượng hình DÁNG HÌNH (形) CON NGƯỜI (人) đáng yêu: BÚP BÊ.",
  "花瓶": "Chiếc BÌNH GỐM (瓶) duyên dáng cắm những cành HOA (花) tươi: LỌ HOA.",
  "引き出し": "Chiếc ngăn kéo KÉO DẪN (引き) RA NGOÀI (出し) để lấy đồ: NGĂN KÉO.",
  "玄関": "CÁNH CỔNG THEN CHỐT (関) mở vào nơi HUYỀN DIỆU (玄) của ngôi nhà: CỬA RA VÀO.",
  "廊下": "HÀNH LANG (廊) thông suốt dẫn DƯỚI (下) mái hiên: HÀNH LANG.",
  "連休": "Chuỗi ngày NGHỈ NGƠI HƯU DƯỠNG (休) LIÊN TIẾP (連) nhau: KỲ NGHỈ LIÊN TIẾP.",
  "作文": "TẠO DỰNG TÁC THÀNH (作) nên ANG VĂN CHƯƠNG (文): BÀI TẬP LÀM VĂN.",
  "展覧会": "BUỔI HỘI NGỘ (会) để TRIỂN KHAI (展) và CHIÊM LÃM (覧) các tác phẩm: CUỘC TRIỂN LÃM.",
  "結婚式": "NGHI THỨC (式) KẾT TƠ DUYÊN (結) nên vợ thành CHỒNG HÔN (婚): HÔN LỄ, ĐÁM CƯỚI.",
  "葬式": "NGHI LỄ (式) tiễn đưa người mất an TÁNG (葬): TANG LỄ.",
  "本社": "Trụ sở CHÍNH GỐC (本) của toàn CÔNG TY XÃ (社): TRỤ SỞ CHÍNH.",
  "支店": "CỬA TIỆM (店) CHI NHÁNH (支) phân bổ khắp các tỉnh: CHI NHÁNH.",
  "大学院": "VIỆN HỌC (院) nghiên cứu chuyên sâu sau bậc ĐẠI HỌC (大学): VIỆN SAU ĐẠI HỌC.",
  "温泉": "SUỐI NƯỚC (泉) ngầm tự nhiên bốc hơi ẤM NÓNG ÔN (温): SUỐI NƯỚC NÓNG.",
  "運動": "VẬN ĐỘNG (運) cơ thể CHUYỂN ĐỘNG (動) rèn luyện thể chất: TẬP THỂ DỤC.",
  "成功": "ĐẠT THÀNH (成) được CÔNG TRẠNG (功) hiển hách: THÀNH CÔNG.",
  "失敗": "Đánh MẤT (失) cơ hội và chịu THẤT BẠI (敗): THẤT BẠI.",
  "合格": "KẾT QUẢ ĐẠT PHÙ HỢP (合) tiêu chuẩn CÁCH THỨC (格): THI ĐỖ.",
  "太陽": "Vầng THÁI CỰC (太) tỏa ra muôn vạt ánh sáng DƯƠNG (陽) rực rỡ: MẶT TRỜI.",
  "水道": "CON ĐƯỜNG DẪN ỐNG (道) dẫn nguồn NƯỚC (水) sinh hoạt: NƯỚC MÁY.",
  "洗濯機": "CỖ MÁY (機) tự động TẨY RỬA (洗) và RŨ SẠCH (濯) quần áo: MÁY GIẶT.",
  "規則": "KHUÔN QUY (規) và NGUYÊN TẮC (則) giữ gìn kỷ cương: QUY TẮC.",
  "使用禁止": "NGHIÊM CẤM (禁止) không cho phép SỬ DỤNG (使用): CẤM SỬ DỤNG.",
  "立ち入り禁止": "CẤM (禁止) không được ĐỨNG BƯỚC ĐI VÀO TRONG (立ち入り): CẤM VÀO.",
  "非常口": "CỬA CỔNG (口) thoát hiểm trong những tình huống KHÔNG BÌNH THƯỜNG KHẨN CẤP (非常): CỬA THOÁT HIỂM.",
  "無料": "Hoàn toàn KHÔNG MẤT (無) tiền NGUYÊN LIỆU PHÍ (料): MIỄN PHÍ.",
  "割引": "BẺ BỚT (割) và KÉO GIẢM (引) giá tiền xuống: GIẢM GIÁ.",
  "飲み放題": "UỐNG (飲み) thả phanh thỏa thích giải TỎA ĐỀ TỰ (放題): UỐNG THỎA THÍCH KHÔNG GIỚI HẠN.",
  "警察": "Cơ quan CẢNH GIÁC (警) và XEM XÉT SÁT SAO (察) trật tự an ninh: CẢNH SÁT.",
  "罰金": "Khoản TIỀN (金) phải nộp phạt do chịu HÌNH PHẠT (罰): TIỀN PHẠT.",
  "説明書": "BẢN VĂN BẢN (書) GIẢI THÍCH (説明) tường tận cách dùng: SÁCH HƯỚNG DẪN.",
  "電子辞書": "Cuốn TỪ ĐIỂN (辞書) tra cứu chạy bằng vi mạch ĐIỆN TỬ (電子): TỪ ĐIỂN ĐIỆN TỬ.",
  "工場": "BÃI ĐẤT KHUÔN VIÊN (場) quy tụ các CÔNG NHÂN CÔNG TRÌNH (工) chế tạo máy móc: NHÀ MÁY.",
  "健康": "Thể chất TRÁNG KIỆN (健) và tinh thần AN KHANG (康): SỨC KHỎE.",
  "輸出": "VẬN CHUYỂN DU CHUYỂN (輸) hàng hóa RA NƯỚC NGOÀI (出): XUẤT KHẨU.",
  "輸入": "VẬN CHUYỂN DU CHUYỂN (輸) hàng hóa ĐI VÀO TRONG NƯỚC (入): NHẬP KHẨU.",
  "翻訳": "LẬT MỞ PHIÊN DỊCH (翻) và DIỄN DỊCH (訳) văn bản sang ngôn ngữ khác: BIÊN DỊCH.",
  "通訳": "LƯU THÔNG (通) lời nói và DIỄN DỊCH (訳) trực tiếp giữa hai bên: THÔNG DỊCH.",
  "発明": "SÁNG TẠO PHÁT TẠO (発) ra những điều SÁNG TỎ (明) chưa từng có: PHÁT MINH.",
  "発見": "KHỞI PHÁT (発) và TẬN MẮT NHÌN THẤY (見) điều bí ẩn: PHÁT HIỆN.",
  "複雑": "Gấp nhiều lớp vải PHỨC (複) đan xen TẠP (雑) nham rắc rối: PHỨC TẠP.",
  "邪魔": "Ma quỷ TÀ MA (邪魔) cản trở quấy rầy đường đi lối lại: LÀM PHIỀN, CẢN TRỞ.",
  "地震": "Sấm sét thịnh nộ làm mặt ĐẤT (地) RUNG CHUYỂN (震) dữ dội: ĐỘNG ĐẤT.",
  "到着": "Cất bước đi ĐẾN NƠI (到) chạm MỐC ĐÍCH ĐẾN (着): ĐẾN NƠI.",
  "出発": "XUẤT PHÁT (出) và KHỞI HÀNH PHÁT BƯỚC (発) lên đường: KHỞI HÀNH.",
  "計算": "KÊ TÍNH (計) số liệu rồi dùng bàn TOÁN (算) tính ra đáp số: TÍNH TOÁN.",
  "弁護士": "BẬC TRÍ SĨ (士) đứng ra BIỆN HỘ (弁護) lẽ phải bảo vệ thân chủ: LUẬT SƯ.",
  "法律": "KHUÔN PHÉP PHÁP ĐỘ (法) và KỶ CƯƠNG LUẬT LỆ (律) quản lý xã hội: PHÁP LUẬT.",
  "戦争": "Binh đao CHIẾN ĐẤU (戦) TRANH ĐOẠT (争) lãnh thổ quyền lợi: CHIẾN TRANH.",
  "平和": "Mọi người đều có cơm ăn áo mặc THÁI BÌNH (平) HÒA MỤC (和): HÒA BÌNH.",
  "一生懸命": "Treo tính MỆNH (命) dốc trọn cả ĐỜI (一生) phấn đấu HẾT MÌNH (懸): HẾT SỨC MÌNH.",
  "丁寧": "Dưới mái nhà dâng mâm quả chu tất ĐINH NINH (丁寧) nhã nhặn: LỊCH SỰ, CHU ĐÁO.",
  "洋服": "TRANG PHỤC (服) mang phong cách TÂY DƯƠNG (洋) hiện đại: QUẦN ÁO ÂU.",
  "収入": "Toàn bộ tiền bạc THU HOẠCH (収) mang ĐI VÀO (入) ngân quỹ: THU NHẬP.",
  "卒業": "Sau mười năm đèn sách hoàn tất TỐT ĐẸP (卒) NGHỀ NGHIỆP (業) học hành: TỐT NGHIỆP.",
  "原因": "Hạt mầm căn NGUYÊN (原) khởi nguồn sinh ra MỌI HẬU QUẢ (因): NGUYÊN NHÂN.",
  "救急車": "CỖ XE (車) CẤP CẤP (急) ứng CỨU (救) bệnh nhân hiểm nghèo: XE CỨU THƯƠNG.",
  "賛成": "Cùng nhau TÁN THÀNH (賛) góp phần TẠO THÀNH (成) quyết định chung: ĐỒNG Ý, TÁN THÀNH.",
  "化粧品": "SẢN PHẨM (品) dùng để ĐIỂM TRANG (化粧) phấn son nhan sắc: MỸ PHẨM.",
  "貿易": "Mở cửa khẩu MẬU DỊCH (貿易) trao đổi hàng hóa xuyên biên giới: NGOẠI THƯƠNG.",
  "遠慮": "Thận trọng SUY TƯ LỰ (慮) giữ kẽ XA XÔI (遠) không làm phiền lòng ai: NGẠI NGẦN, KHÁCH KHÍ."
};

/**
 * Hàm tổng hợp mẹo nhớ thông minh theo mô hình hình tượng SKILL.md
 */
function buildSmartCompoundMnemonic(word, reading, hanViet, meaning, components) {
  const cleanKey = word.replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').replace(/〜/g, '').trim();

  // 1. Kiểm tra kho Curated đặc sắc
  if (curatedStories[word]) return curatedStories[word];
  if (curatedStories[cleanKey]) return curatedStories[cleanKey];

  // 2. Phân tích ngữ nghĩa theo các hậu tố chức năng chuẩn Hán tự
  if (cleanKey.endsWith('員')) {
    const base = cleanKey.slice(0, -1);
    return `Thành VIÊN (員) mẫn cán làm việc chuyên trách tại bộ phận [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('者')) {
    const base = cleanKey.slice(0, -1);
    return `Con người, bậc trí thức (者) chuyên tâm thực hiện lĩnh vực [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('屋')) {
    const base = cleanKey.slice(0, -1);
    return `Cửa hiệu, quán xá (屋) nơi chuyên mua bán và phục vụ mặt hàng [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('室') || cleanKey.endsWith('所') || cleanKey.endsWith('館') || cleanKey.endsWith('場') || cleanKey.endsWith('堂') || cleanKey.endsWith('院')) {
    const base = cleanKey.slice(0, -1);
    return `Khuôn viên, tòa nhà bề thế chuyên phục vụ cho mục đích [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('車') || cleanKey.endsWith('機')) {
    const base = cleanKey.slice(0, -1);
    return `Cỗ máy, phương tiện vận hành theo cơ chế [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('語')) {
    const base = cleanKey.slice(0, -1);
    return `Tiếng nói, ngôn ngữ (語) đặc trưng của vùng đất [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('人')) {
    const base = cleanKey.slice(0, -1);
    return `Con người (人) sinh ra hoặc mang quốc tịch gắn liền với xứ sở [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('料') || cleanKey.endsWith('代') || cleanKey.endsWith('金') || cleanKey.endsWith('費')) {
    const base = cleanKey.slice(0, -1);
    return `Khoản chi phí, tiền nong cần thanh toán cho dịch vụ [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('物')) {
    const base = cleanKey.slice(0, -1);
    return `Vật phẩm, món đồ (物) gắn liền với tính chất hoặc hành động [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('書')) {
    const base = cleanKey.slice(0, -1);
    return `Văn bản, tài liệu sách vở (書) ghi chép lại toàn bộ thông tin về [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('的')) {
    const base = cleanKey.slice(0, -1);
    return `Đặc tính mang đậm màu sắc và phong thái (的) của [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('力')) {
    const base = cleanKey.slice(0, -1);
    return `Nguồn năng lực, sức mạnh (力) biểu hiện qua phương diện [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('性')) {
    const base = cleanKey.slice(0, -1);
    return `Bản chất, đặc tính nội tại (性) của sự vật hiện tượng [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('法')) {
    const base = cleanKey.slice(0, -1);
    return `Quy tắc, phương pháp khuôn mẫu (法) để tiến hành [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('品')) {
    const base = cleanKey.slice(0, -1);
    return `Mặt hàng, sản phẩm (品) được sản xuất phục vụ mục đích [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('家')) {
    const base = cleanKey.slice(0, -1);
    return `Bậc thầy, chuyên gia danh tiếng (家) cống hiến trong lĩnh vực [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('会')) {
    const base = cleanKey.slice(0, -1);
    return `Buổi họp mặt, hội ngộ (会) của tập thể mọi người để [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('手')) {
    const base = cleanKey.slice(0, -1);
    return `Bàn tay tài hoa, người trực tiếp đảm nhận (手) việc [${base}]: ${meaning} (${word}: ${reading}).`;
  }

  // 3. Phân tích theo tiền tố quen thuộc
  if (cleanKey.startsWith('無') || cleanKey.startsWith('不') || cleanKey.startsWith('非')) {
    const base = cleanKey.slice(1);
    return `Biểu thị trạng thái không có hoặc phủ định hoàn toàn đối với [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.startsWith('新')) {
    const base = cleanKey.slice(1);
    return `Sự cải tiến hoàn toàn mới mẻ (新) so với [${base}] ban đầu: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.startsWith('大')) {
    const base = cleanKey.slice(1);
    return `Quy mô to lớn, tầm vóc vượt bậc (大) của [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.startsWith('小')) {
    const base = cleanKey.slice(1);
    return `Kích thước nhỏ gọn, tinh tế (小) của [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.startsWith('毎')) {
    const base = cleanKey.slice(1);
    return `Chu kỳ lặp đi lặp lại đều đặn mỗi khi đến [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.startsWith('再')) {
    const base = cleanKey.slice(1);
    return `Hành động được lặp lại một lần nữa (再) đối với [${base}]: ${meaning} (${word}: ${reading}).`;
  }

  // 4. Tổng hợp hình tượng từ các chữ Hán cấu thành (Vivid Semantic Synthesis)
  if (components.length === 2) {
    const c1 = components[0];
    const c2 = components[1];
    return `Hình tượng ${c1.kanji} (${c1.hanViet}: ${c1.meaning}) hòa quyện cùng ${c2.kanji} (${c2.hanViet}: ${c2.meaning}) khắc họa trọn vẹn khái niệm: ${meaning} (${word}: ${reading}).`;
  }

  const cList = components.map(c => `${c.kanji} (${c.hanViet}: ${c.meaning})`).join(', ');
  return `Chuỗi liên kết ngữ nghĩa giữa ${cList} cùng đúc kết nên ý niệm: ${meaning} (${word}: ${reading}).`;
}

module.exports = {
  curatedStories,
  buildSmartCompoundMnemonic
};
