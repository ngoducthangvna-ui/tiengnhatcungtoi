/**
 * MASTER COMPILER: VOCABULARY-CENTRIC KANJI MNEMONICS DATABASE (50 LESSONS)
 * Thiết kế chuẩn: Từ vựng chữ Hán bên trên - Mẹo nhớ ở dòng bên dưới
 * Nếu từ mới có từ 2 chữ Hán trở lên, chỉ biểu diễn trong 1 ô mẹo nhớ duy nhất
 * Đầy đủ âm Hán Việt, Cách đọc Hiragana, Cấu thành chữ Hán, Mẹo nhớ & Ví dụ thực tế
 */

const fs = require('fs');

// 1. Tải từ điển Chữ Hán đơn (781 chữ Hán độc bản chuẩn Minna)
const p1 = require('./mnemonics_part1.js');
const c1 = require('./mnemonics_chunk_260_389.js');
const c2 = require('./mnemonics_chunk_390_519.js');
const p2 = require('./mnemonics_part2.js');
const c3 = require('./mnemonics_chunk_635_780.js');
const masterKanji = Object.assign({}, p1, c1, c2, p2, c3);
const harvested = require('./harvested_kanji_dict.json');

// 2. Tải toàn bộ 50 bài học từ data/lessons_*.js
const lessonFiles = [
  'lessons_1_5.js', 'lessons_6_10.js', 'lessons_11_15.js', 'lessons_16_20.js',
  'lessons_21_25.js', 'lessons_26_30.js', 'lessons_31_35.js', 'lessons_36_40.js',
  'lessons_41_45.js', 'lessons_46_50.js'
];

const lessonsRaw = [];
lessonFiles.forEach(f => {
  const code = fs.readFileSync('data/' + f, 'utf8');
  const varName = f.replace('.js', '');
  eval(code.replace('const ' + varName + ' =', 'global.' + varName + '='));
  lessonsRaw.push(...global[varName]);
});
console.log('Loaded lessons count:', lessonsRaw.length);

// 3. Kho mẹo nhớ từ vựng ghép đặc sắc (Curated Compound Stories)
const curatedCompoundStories = {
  // Bài 1
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

  // Bài 2
  "辞書": "Cuốn SÁCH (書) thu thập và giải thích tường tận từng TỪ NGỮ (辞): TỪ ĐIỂN.",
  "雑誌": "TẬP KÝ (誌) tổng hợp PHỨC TẠP (雑) nhiều thể loại bài viết và tranh ảnh: TẠP CHÍ.",
  "新聞": "Tờ báo đưa những TIN TỨC MỚI (新) được NGHE (聞) thấy mỗi ngày: BÁO CHÍ.",
  "手帳": "Cuốn TRƯƠNG (帳) sổ nhỏ luôn cầm trên TAY (手) để ghi nhớ công việc: SỔ TAY.",
  "名刺": "Mảnh thiếp nhỏ in TÊN (名) họ trao nhau khi sơ ngộ: DANH THIẾP.",
  "鉛筆": "Cây BÚT (筆) viết bằng ngòi CHÌ (鉛) đen: BÚT CHÌ.",
  "時計": "DỤNG CỤ (計) đo đếm THỜI GIAN (時) từng giây từng phút: ĐỒNG HỒ.",
  "自動車": "Cỗ XE (車) có động cơ TỰ (自) mình chuyển ĐỘNG (動) trên đường: XE Ô TÔ.",
  "椅子": "Vật bằng gỗ cho người tựa Y (椅) vào ngồi yên TỬ (子): CHIẾC GHẾ.",

  // Bài 3
  "教室": "CĂN PHÒNG (室) dành cho việc GIÁO (教) dục giảng bài: PHÒNG HỌC, LỚP HỌC.",
  "食堂": "TÒA ĐƯỜNG (堂) lớn chuyên phục vụ ăn uống (食) cho tập thể: NHÀ ĂN, CĂNG TIN.",
  "事務所": "NƠI CHỐN (所) giải quyết các SỰ VỤ (事務) hành chính: VĂN PHÒNG.",
  "会議室": "CĂN PHÒNG (室) nơi diễn ra HỘI NGHỊ (会議) thảo luận bàn bạc: PHÒNG HỌP.",
  "受付": "Nơi TIẾP NHẬN (受) và THU LẤY (付) thông tin đón khách: QUẦY TIẾP TÂN.",
  "部屋": "CĂN NHÀ (屋) chia thành từng BỘ (部) phận không gian riêng: CĂN PHÒNG.",
  "手洗い": "Nơi RỬA (洗) sạch đôi bàn TAY (手) và vệ sinh cá nhân: NHÀ VỆ SINH.",
  "階段": "Các BẬC (階) cấp từng ĐOẠN (段) nối nhau đi lên tầng: CẦU THANG BỘ.",
  "会社": "Nơi mọi người gặp gỡ HỘI (会) tụ trong một XÃ (社) hội thu nhỏ cùng làm việc: CÔNG TY.",
  "電話": "Truyền lời NÓI (話) đi xa qua đường dây ĐIỆN (電): ĐIỆN THOẠI.",
  "売場": "NƠI CHỐN (場) chuyên BÀY BÁN (売) hàng hóa: QUẦY BÁN HÀNG.",
  "地下": "Khu vực nằm ở PHÍA DƯỚI (下) mặt ĐẤT (地): TẦNG HẦM, DƯỚI ĐẤT.",

  // Bài 4
  "勉強": "Luôn gắng sức MIỄN (勉) để rèn giũa bản thân CƯỜNG (強) tráng về tri thức: HỌC TẬP.",
  "銀行": "Nơi cất giữ tiền BẠC (銀) và thực HÀNH (行) giao dịch tiền tệ: NGÂN HÀNG.",
  "郵便局": "CƠ QUAN (局) chuyên lo việc vận chuyển THƯ TÍN (便) TIỆN LỢI qua đường BƯU ĐIỆN (郵): BƯU ĐIỆN.",
  "図書館": "TÒA NHÀ (館) lưu giữ sách THƯ (書) và tranh ĐỒ (図) cho muôn người: THƯ VIỆN.",
  "美術館": "TÒA NHÀ (館) trưng bày các tác phẩm MỸ THUẬT (美術) tuyệt đẹp: BẢO TÀNG MỸ THUẬT.",
  "午前": "Khoảng thời gian TRƯỚC (前) giờ NGỌ (午) 12 giờ trưa: BUỔI SÁNG (AM).",
  "午後": "Khoảng thời gian SAU (後) giờ NGỌ (午) 12 giờ trưa: BUỔI CHIỀU (PM).",
  "毎朝": "MỖI (毎) BUỔI SÁNG (朝) thức dậy bắt đầu ngày mới: MỖI SÁNG.",
  "毎晩": "MỖI (毎) BUỔI TỐI (晩) quây quần gia đình: MỖI TỐI.",
  "毎日": "MỖI (毎) NGÀY (日) trôi qua đều trân trọng: MỖI NGÀY.",
  "月曜日": "Ngày (NHẬT) soi sáng bởi mặt trăng NGUYỆT (月) rực rỡ (DIỆU): THỨ HAI.",
  "火曜日": "Ngày (NHẬT) ngọn lửa HỎA (火) ấm áp toả sáng (DIỆU): THỨ BA.",
  "水曜日": "Ngày (NHẬT) dòng nước THỦY (水) mát lành toả sáng (DIỆU): THỨ TƯ.",
  "木曜日": "Ngày (NHẬT) cây cối MỘC (木) xanh tươi toả sáng (DIỆU): THỨ NĂM.",
  "金曜日": "Ngày (NHẬT) tiền vàng KIM (金) lấp lánh toả sáng (DIỆU): THỨ SÁU.",
  "土曜日": "Ngày (NHẬT) đất lành THỔ (土) vững vàng toả sáng (DIỆU): THỨ BẢY.",
  "日曜日": "Ngày (NHẬT) mặt trời NHẬT (日) toả sáng (DIỆU) rực rỡ khởi đầu tuần mới: CHỦ NHẬT.",

  // Bài 5
  "学校": "Nơi các thế hệ theo HỌC (学) quy tụ dưới mái TRƯỜNG HIỆU (校): TRƯỜNG HỌC.",
  "飛行機": "Cỗ máy CƠ khí (機) có thể PHI bay lượn (飛) và HÀNH trình (行) trên không: MÁY BAY.",
  "電車": "Cỗ XE (車) chạy bằng năng lượng ĐIỆN (電) trên đường ray: TÀU ĐIỆN.",
  "地下鉄": "Đường SẮT (鉄) ngầm chạy sâu DƯỚI LÒNG ĐẤT (地下): TÀU ĐIỆN NGẦM.",
  "新幹線": "TUYẾN (線) đường ray huyết CÁN (幹) MỚI (新) cho đoàn tàu xé gió: TÀU SIÊU TỐC SHINKANSEN.",
  "自転車": "Cỗ XE (車) TỰ (自) CHUYỂN (転) bánh bằng sức đạp của chính mình: XE ĐẠP.",
  "友達": "Người BẠN (友) cùng CHÚNG TA (達) chia sẻ buồn vui trong cuộc sống: BẠN BÈ.",
  "家族": "NHỮNG NGƯỜI (族) cùng chung sống dưới mái NHÀ (家): GIA ĐÌNH.",
  "先週": "TUẦN (週) ĐI TRƯỚC (先) tuần hiện tại: TUẦN TRƯỚC.",
  "今週": "TUẦN (週) NGAY BÂY GIỜ (今) đang diễn ra: TUẦN NÀY.",
  "来週": "TUẦN (週) SẮP TỚI (来) trong tương lai: TUẦN SAU.",
  "先月": "THÁNG (月) ĐI TRƯỚC (先) tháng hiện tại: THÁNG TRƯỚC.",
  "今月": "THÁNG (月) HIỆN TẠI (今) đang sống: THÁNG NÀY.",
  "来月": "THÁNG (月) SẮP ĐẾN (来) kế tiếp: THÁNG SAU.",
  "去年": "NĂM (年) ĐÃ QUA ĐI (去) thành quá khứ: NĂM NGOÁI.",
  "今年": "NĂM (年) NAY HIỆN TẠI (今) đang ở: NĂM NAY.",
  "来年": "NĂM (年) SẮP ĐẾN (来) phía trước: NĂM SAU.",

  // Bài 6
  "朝ご飯": "Bữa cơm PHẠN (飯) ăn vào buổi SÁNG (朝) sớm: BỮA SÁNG.",
  "昼ご飯": "Bữa cơm PHẠN (飯) ăn vào buổi TRƯA (昼) nghỉ ngơi: BỮA TRƯA.",
  "晩ご飯": "Bữa cơm PHẠN (飯) ăn vào buổi TỐI (晩) gia đình: BỮA TỐI.",
  "野菜": "Các loại CỎ RAU (菜) hái trên CÁNH ĐỒNG DÃ (野): RAU CỦ.",
  "果物": "ĐỒ VẬT (物) là HOA TRÁI HOA QUẢ (果) ngọt ngào trên cành: TRÁI CÂY.",
  "紅茶": "Lá TRÀ (茶) ủ lên men cho ra sắc nước ĐỎ HỒNG (紅): TRÀ ĐEN, HỒNG TRÀ.",
  "牛乳": "DÒNG SỮA NHŨ (乳) tươi ngon vắt từ CON BÒ NGƯU (牛): SỮA BÒ.",
  "映画": "Bức TRANH HỌA (画) PHẢN CHIẾU (映) chuyển động sống động: PHIM ẢNH.",
  "手紙": "Tờ GIẤY CHỈ (紙) nắn nót viết bằng đôi TAY (手) gửi trao tâm tình: BỨC THƯ.",
  "写真": "TẢ THỰC (写) lại hình ảnh CHÂN THẬT (真) của cuộc sống: BỨC ẢNH.",
  "宿題": "ĐỀ MỤC (題) giao về nhà TÚC (宿) trọ để làm bài: BÀI TẬP VỀ NHÀ.",
  "お花見": "Cùng nhau đi NHÌN NGẮM (見) HOA (花) anh đào nở rộ: NGẮM HOA.",

  // Bài 7-10
  "年賀状": "TẤM THIỆP TRẠNG (状) CHÚC MỪNG (賀) NĂM MỚI (年): THIỆP CHÚC TẾT.",
  "消しゴム": "Cục gôm cao su dùng để TẨY XÓA (消) vết chì: CỤC TẨY.",
  "切符": "MẢNH PHÙ (符) nhỏ mua bằng tiền CẮT (切) ra làm vé: VÉ XE, VÉ TÀU.",
  "お父さん": "Tiếng gọi kính trọng người CHA PHỤ (父) trong gia đình: BỐ, BA.",
  "お母さん": "Tiếng gọi kính trọng người MẸ MẪU (母) hiền: MẸ, MÁ.",
  "有名": "CÓ (有) DANH TIẾNG (名) vang xa được nhiều người biết đến: NỔI TIẾNG.",
  "親切": "TẤM LÒNG THÂN THIẾT (親) sâu SẮC (切) luôn giúp đỡ người khác: TỐT BỤNG, THÂN THIỆN.",
  "元気": "NGUỒN GỐC (元) của KHÍ LỰC (気) tràn đầy sức sống: KHỎE MẠNH.",
  "便利": "Vạn sự TIỆN LỢI (便) và mang lại nhiều LỢI ÍCH (利): TIỆN LỢI.",
  "料理": "Đong đếm NGUYÊN LIỆU (料) và xử LÝ (理) nêm nếm thành món ngon: MÓN ĂN, NẤU ĂN.",
  "音楽": "Giai điệu ÂM THANH (音) VUI TƯƠI LẠC (楽) làm lòng người thư thái: ÂM NHẠC.",
  "旅行": "Cất bước LỮ HÀNH (旅行) đi khám phá những miền đất mới: DU LỊCH.",
  "時間": "KHOẢNG CÁCH (間) giữa các THỜI ĐIỂM (時) trôi qua: THỜI GIAN.",
  "約束": "Lời hẹn ƯỚC (約) trói BUỘC (束) giữ trọn chữ tín: CUỘC HẸN, LỜI HỨA.",
  "冷蔵庫": "CHIẾC KHO (庫) giữ cho đồ ăn LẠNH LẼO (冷) tươi ngon lâu ngày: TỦ LẠNH.",

  // Bài 11-25 (Minna N5 trọng tâm)
  "兄弟": "Tình cảm giữa ANH (兄) và EM TRAI (弟) trong một nhà: ANH EM.",
  "両親": "CẢ HAI (両) người THÂN SINH (親) dưỡng dục sinh thành: CHA MẸ.",
  "季節": "MÙA MÀNG (季) và các TIẾT KHÍ (節) chuyển vần trong năm: MÙA, TIẾT TRỜI.",
  "買い物": "Đi ra ngoài để MUA SẮM (買) các ĐỒ VẬT (物): MUA SẮM.",
  "結婚": "Buộc sợi tơ hồng KẾT duyên (結) làm HÔN lễ (婚) trăm năm hạnh phúc: KẾT HÔN.",
  "見学": "Tận mắt NHÌN KIẾN (見) để HỌC HỎI (学) thực tế ngoài đời: THAM QUAN HỌC TẬP.",
  "案内": "Đưa ra phương ÁN (案) dẫn dắt khách ĐI VÀO TRONG (内): HƯỚNG DẪN.",
  "説明": "Dùng lời NÓI (説) giãi bày rõ ràng SÁNG TỎ (明) cặn kẽ: GIẢI THÍCH.",
  "準備": "Đạt chuẩn mực CHUẨN (準) và trang BỊ (備) đầy đủ sẵn sàng: CHUẨN BỊ.",
  "連絡": "Giăng sợi tơ LẠC (絡) LIÊN kết (連) thông tin đến mọi người: LIÊN LẠC.",
  "残業": "Ở LẠI (残) làm thêm CÔNG VIỆC (業) ngoài giờ quy định: TĂNG CA, LÀM THÊM GIỜ.",
  "出張": "Rời nhà đi RA NGOÀI (出) giương mở TRƯƠNG (張) công việc làm ăn: ĐI CÔNG TÁC.",
  "運転": "VẬN DỤNG (運) tay lái để xoay CHUYỂN (転) bánh xe lăn trên đường: LÁI XE.",
  "掃除": "Cầm chổi QUÉT TẢO (掃) sạch và TRỪ KHỬ (除) hết bụi bẩn rác rưởi: DỌN DẸP.",
  "洗濯": "Dùng nước TẨY RỬA (洗) và RŨ TRẠC (濯) sạch xà phòng trên áo quần: GIẶT GIŨ.",
  "練習": "LUYỆN TẬP (練) rèn giũa và ÔN TẬP (習) lặp đi lặp lại nhiều lần: LUYỆN TẬP.",
  "修理": "TU BỔ (修) và chỉnh LÝ (理) lại đồ đạc hư hỏng: SỬA CHỮA.",
  "事故": "Biến CỐ (故) bất ngờ xảy ra trong SỰ VIỆC (事) giao thông: TAI NẠN.",
  "故障": "Gặp sự CỐ (故) CHƯỚNG NGẠI (障) làm máy móc ngừng hoạt động: HỎNG HÓC.",
  "交差点": "ĐIỂM (点) nơi các làn đường GIAO NHAU (交) và SAI KHÁC (差): NGÃ TƯ ĐƯỜNG.",
  "信号": "TÍN HIỆU (信) phát ra bằng SỐ HIỆU (号) đèn đường chỉ dẫn: ĐÈN GIAO THÔNG.",
  "駐車場": "BÃI ĐẤT (場) chuyên dùng để DỪNG ĐỖ (駐) xe cộ (車): BÃI ĐỖ XE.",
  "引っ越し": "KÉO DẪN (引) đồ đạc VƯỢT QUA (越) đến nơi ở mới: CHUYỂN NHÀ.",

  // Bài 26-50 (Minna N4 nâng cao)
  "燃えるゴミ": "Những thứ rác rưởi CÓ THỂ BỐC CHÁY (燃える) dưới ngọn lửa: RÁC CHÁY ĐƯỢC.",
  "自動販売機": "CỖ MÁY (機) TỰ ĐỘNG (自動) BUÔN BÁN (販売) nước và hàng hóa: MÁY BÁN HÀNG TỰ ĐỘNG.",
  "宇宙飛行士": "BẬC HỌC SĨ (士) PHI HÀNH (飛行) thám hiểm VŨ TRỤ (宇宙) bao la: PHI HÀNH GIA.",
  "複雑": "Gấp nhiều lớp vải PHỨC (複) đan xen TẠP (雑) nham rắc rối: PHỨC TẠP.",
  "邪魔": "Ma quỷ TÀ MA (邪魔) cản trở quấy rầy đường đi lối lại: LÀM PHIỀN, CẢN TRỞ.",
  "地震": "Sấm sét thịnh nộ làm mặt ĐẤT (地) RUNG CHUYỂN (震) dữ dội: ĐỘNG ĐẤT.",
  "到着": "Cất bước đi ĐẾN NƠI (到) chạm MỐC ĐÍCH ĐẾN (着): ĐẾN NƠI.",
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

// 4. Hàm làm sạch từ vựng từ lessons_*.js
function parseVocab(v) {
  let rawK = v.kanji.replace(/<rt>[\s\S]*?<\/rt>/g, '').replace(/<[^>]+>/g, '').trim();
  let rawR = (v.hiragana || '').trim();
  let rawM = (v.meaning || '').trim();

  // Chuẩn hóa trường hợp đặc biệt
  if (rawK === 'トイレ (手洗い)') {
    rawK = '手洗い (トイレ)';
  }

  // Tách ngày trong tuần ở bài 4 nếu có
  if (rawK.includes('月曜日 〜 日曜日') || rawK.includes('月曜日げつようび 〜 日曜日にちようび')) {
    const days = [
      { word: '月曜日', reading: 'げつようび', meaning: 'Thứ Hai' },
      { word: '火曜日', reading: 'かようび', meaning: 'Thứ Ba' },
      { word: '水曜日', reading: 'すいようび', meaning: 'Thứ Tư' },
      { word: '木曜日', reading: 'もくようび', meaning: 'Thứ Năm' },
      { word: '金曜日', reading: 'きんようび', meaning: 'Thứ Sáu' },
      { word: '土曜日', reading: 'どようび', meaning: 'Thứ Bảy' },
      { word: '日曜日', reading: 'にちようび', meaning: 'Chủ Nhật' }
    ];
    return days.map(d => ({ word: d.word, reading: d.reading, meaning: d.meaning, type: 'Danh từ', example: v.example || '' }));
  }

  if (rawK.includes(' / ')) {
    const kParts = rawK.split(' / ');
    const rParts = rawR.split(' / ');
    const mParts = rawM.split(' / ');
    return kParts.map((kp, idx) => ({
      word: kp.trim(),
      reading: rParts[idx] ? rParts[idx].trim() : (rParts[0] ? rParts[0].trim() : ''),
      meaning: mParts[idx] ? mParts[idx].trim() : rawM,
      type: v.type || '',
      example: v.example || ''
    })).filter(item => /[\u4e00-\u9faf]/.test(item.word));
  } else if (/[\u4e00-\u9faf]/.test(rawK)) {
    return [{
      word: rawK,
      reading: rawR,
      meaning: rawM,
      type: v.type || '',
      example: v.example || ''
    }];
  }
  return [];
}

// 5. Hàm sinh mẹo nhớ từ ghép nếu chưa có trong curated
function buildCompoundStoryFallback(word, reading, hanViet, meaning, components) {
  // Chuẩn hóa từ để tra cứu (bỏ [な], (お〜)...)
  const cleanKey = word.replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim();

  if (curatedCompoundStories[word]) return curatedCompoundStories[word];
  if (curatedCompoundStories[cleanKey]) return curatedCompoundStories[cleanKey];

  // Phân tích theo hậu tố quen thuộc
  if (cleanKey.endsWith('員')) {
    const base = cleanKey.slice(0, -1);
    return `Thành VIÊN (員) làm việc chuyên trách tại bộ phận [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('者')) {
    const base = cleanKey.slice(0, -1);
    return `Người, kẻ (者) chuyên làm công việc [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('屋')) {
    const base = cleanKey.slice(0, -1);
    return `Cửa hiệu, quán xá (屋) chuyên kinh doanh mặt hàng [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('室') || cleanKey.endsWith('所') || cleanKey.endsWith('館') || cleanKey.endsWith('場') || cleanKey.endsWith('堂')) {
    const base = cleanKey.slice(0, -1);
    return `Khuôn viên, tòa nhà chuyên phục vụ mục đích [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('車') || cleanKey.endsWith('機')) {
    const base = cleanKey.slice(0, -1);
    return `Phương tiện, cỗ máy vận hành theo cơ chế [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('語')) {
    const base = cleanKey.slice(0, -1);
    return `Tiếng nói, ngôn ngữ (語) của đất nước [${base}]: ${meaning} (${word}: ${reading}).`;
  }
  if (cleanKey.endsWith('人')) {
    const base = cleanKey.slice(0, -1);
    return `Con người (人) sinh ra hoặc mang quốc tịch [${base}]: ${meaning} (${word}: ${reading}).`;
  }

  // Kết nối các thành phần ngữ nghĩa một cách tự nhiên
  const compDesc = components.map(c => `${c.kanji} [${c.hanViet}: ${c.meaning}]`).join(' kết hợp cùng ');
  return `Ý nghĩa bắt nguồn từ ${compDesc} tạo nên từ vựng biểu đạt: ${meaning} (${word}: ${reading}).`;
}

// 6. Biên dịch toàn bộ 50 bài học
const compiledLessons = [];
let totalCards = 0;
let totalCompounds = 0;
let totalSingles = 0;

lessonsRaw.forEach((lesson, lIdx) => {
  const lNum = lIdx + 1;
  const rawVocabs = lesson.vocabulary || [];
  const parsedItems = [];

  rawVocabs.forEach(v => {
    parsedItems.push(...parseVocab(v));
  });

  // Lọc trùng lặp trong bài
  const seenInLesson = new Set();
  const lessonItems = [];

  parsedItems.forEach((p, idx) => {
    if (seenInLesson.has(p.word)) return;
    seenInLesson.add(p.word);

    const kanjis = p.word.match(/[\u4e00-\u9faf]/g) || [];
    if (kanjis.length === 0) return;

    // Tính âm Hán Việt chuẩn cho toàn từ
    const hvList = kanjis.map(k => (masterKanji[k] ? masterKanji[k].hv : ''));
    const hanVietFull = hvList.join(' ');

    // Thông tin các chữ Hán cấu thành
    let totalStrokes = 0;
    const components = kanjis.map(k => {
      const m = masterKanji[k] || { hv: '', mean: '', parts: '', story: '' };
      const h = harvested[k] || { strokes: 1, radical: 'Cơ bản', onyomi: '—', kunyomi: '—' };
      const shortMean = m.mean.split('(')[0].split(',')[0].replace(/^.*?:/, '').trim();
      totalStrokes += (h.strokes || 1);
      return {
        kanji: k,
        hanViet: m.hv,
        meaning: shortMean,
        strokes: h.strokes || 1,
        radical: h.radical || 'Cơ bản',
        onyomi: h.onyomi || '—',
        kunyomi: h.kunyomi || '—'
      };
    });

    let fullMnemonic = '';
    if (kanjis.length === 1) {
      // Từ đơn 1 chữ Hán -> Chiết tự của chữ đó
      totalSingles++;
      const k = kanjis[0];
      const m = masterKanji[k];
      fullMnemonic = `【Chiết tự】: ${m.parts}\n【Mẹo nhớ】: ${m.story}`;
    } else {
      // Từ ghép từ 2 chữ Hán trở lên -> 1 ô mẹo nhớ duy nhất cho từ đó!
      totalCompounds++;
      const compHeader = components.map(c => `${c.kanji} (${c.hanViet}: ${c.meaning})`).join(' + ');
      const story = buildCompoundStoryFallback(p.word, p.reading, hanVietFull, p.meaning, components);
      fullMnemonic = `【Cấu thành】: ${compHeader}\n【Mẹo nhớ từ】: ${story}`;
    }

    lessonItems.push({
      id: `v-${lNum}-${lessonItems.length + 1}`,
      word: p.word,
      kanji: p.word, // Đảm bảo tương thích ngược
      reading: p.reading,
      hanViet: hanVietFull,
      meaning: p.meaning,
      type: p.type || 'Từ vựng',
      kanjiCount: kanjis.length,
      kanjis: kanjis,
      strokes: totalStrokes,
      radicals: components[0].radical || 'Cơ bản',
      onyomi: components[0].onyomi || '—',
      kunyomi: components[0].kunyomi || '—',
      components: components,
      mnemonic: fullMnemonic,
      example: p.example || ''
    });
  });

  totalCards += lessonItems.length;

  compiledLessons.push({
    id: `kanji-${lNum}`,
    lesson: lNum,
    title: `Bài ${lNum}: Mẹo Nhớ Từ Vựng Chữ Hán`,
    level: lNum <= 25 ? `Minna N5 (Bài ${lNum})` : `Minna N4 (Bài ${lNum})`,
    description: `Toàn bộ ${lessonItems.length} từ vựng chữ Hán trọng tâm Bài ${lNum}. Từ ghép được giải nghĩa trọn vẹn trong 1 ô, giúp nhớ nhanh và không bị loạn thông tin.`,
    totalKanji: lessonItems.length,
    items: lessonItems
  });
});

console.log('--- COMPILATION COMPLETED ---');
console.log('Total Lessons:', compiledLessons.length);
console.log('Total Vocabulary Cards:', totalCards);
console.log('Compound Word Cards (>=2 kanji):', totalCompounds);
console.log('Single Kanji Cards (1 kanji):', totalSingles);

const outputJs = `/**
 * MASTER DATABASE: MẸO GHI NHỚ TỪ VỰNG CHỮ HÁN 50 BÀI MINNA NO NIHONGO (N5 & N4)
 * Thiết kế chuẩn: Từ vựng chữ Hán bên trên - Mẹo nhớ ở dòng bên dưới
 * Từ mới có từ 2 chữ Hán trở lên được biểu diễn trong 1 ô mẹo nhớ duy nhất
 * Đầy đủ âm Hán Việt, Cách đọc Hiragana, Cấu thành chữ Hán, Mẹo nhớ & Ví dụ thực tế
 */
const kanjiLessonsData = ${JSON.stringify(compiledLessons, null, 2)};
`;

fs.writeFileSync('data/kanji_data.js', outputJs, 'utf8');
console.log('Successfully written data/kanji_data.js');
