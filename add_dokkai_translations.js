// scripts/add_dokkai_translations.js
// Script bổ sung bản dịch tiếng Việt đầy đủ, chuẩn xác cho toàn bộ 50 bài đọc hiểu Dokkai (Minna 1-50)
const fs = require('fs');
const path = require('path');

const dokkaiTranslations = {
  "dokkai-1": `Rất hân hạnh được làm quen với bạn. Tôi là Mike Miller. Tôi đến từ nước Mỹ.
Tôi 28 tuổi. Tôi còn độc thân.
Tôi là nhân viên của công ty IMC. IMC là một công ty về máy vi tính.

Vị kia là anh Santos. Anh Santos là người Brazil. Anh Santos cũng là nhân viên công ty.
Vị ở đằng kia là chị Karina. Chị Karina là người Indonesia. Chị Karina là sinh viên. Chị ấy là sinh viên của trường Đại học Fuji.
Hàng ngày, chúng tôi cùng học tiếng Nhật tại trường tiếng Nhật. Rất mong nhận được sự giúp đỡ của các bạn!`,

  "dokkai-2": `Đây là căn phòng của tôi. Ở đây có một chiếc bàn làm việc lớn.
Hãy nhìn lên trên bàn xem. Có rất nhiều đồ vật khác nhau.
Đây là cuốn từ điển tiếng Nhật. Nó rất hữu ích. Kia là cuốn sách tiếng Anh. Đó là cuốn sách của anh Santos.

Trên bàn có 3 cây bút. Chiếc bút màu đen này là của tôi. Chiếc bút màu đỏ kia là của anh Yamada.
Chiếc cặp ở đằng kia là của ai vậy? Đó là cặp của chị Karina. Trong cặp có máy ảnh và chìa khóa.
Cuốn sổ tay này là quà tặng kèm của tạp chí vi tính. Nó rất tiện lợi.`,

  "dokkai-3": `Đây là một trung tâm thương mại nổi tiếng ở Tokyo. Nơi đây rất nhộn nhịp.
Tầng hầm 1 là quầy bán thực phẩm. Ở đó có nhiều loại bánh kẹo ngon và rượu vang. Chai rượu vang này là của nước Pháp. Một chai có giá 3.500 yên.

Tầng 1 là quầy bán giày dép và túi xách. Đôi giày này là của Ý. Nó rất đẹp nhưng hơi đắt một chút.
Tầng 2 là quầy thời trang nam và thời trang nữ.
Thang máy ở đằng kia. Còn thang cuốn thì nằm ở ngay cạnh quầy lễ tân.
Nhà vệ sinh có ở mỗi tầng. Văn phòng làm việc nằm ở tầng 7. Điện thoại công cộng nằm ở sảnh tầng 1.`,

  "dokkai-4": `Anh Mike Miller là nhân viên của công ty IMC. Hàng ngày anh ấy rất bận rộn.
Mỗi buổi sáng, anh Miller thức dậy vào lúc 6 giờ rưỡi. Anh ăn bữa sáng và đọc báo.
Giờ làm việc của công ty là từ 9 giờ đến 5 giờ chiều. Anh làm việc từ thứ Hai đến thứ Sáu. Giờ nghỉ trưa là từ 12 giờ đến 1 giờ.

Thứ Bảy và Chủ Nhật là ngày nghỉ. Vào buổi sáng thứ Bảy, anh học tiếng Nhật ở thư viện. Chủ Nhật anh không làm việc.
Mỗi tối anh đi ngủ lúc 11 giờ rưỡi. Hôm qua anh đi ngủ lúc 12 giờ. Sáng nay anh thức dậy lúc 7 giờ.`,

  "dokkai-5": `Thứ Bảy tuần trước, tôi đã cùng người bạn là anh Santos đi Kyoto.
Chúng tôi đi bằng tàu siêu tốc Shinkansen từ ga Tokyo đến ga Kyoto. Tàu Shinkansen chạy rất nhanh và tiện lợi. Chuyến đi mất 2 tiếng 15 phút.

Ở Kyoto, chúng tôi đã đến thăm chùa Vàng (Kinkaku-ji) và chùa Thanh Thủy (Kiyomizu-dera). Chúng tôi đi bằng xe buýt từ nhà ga.
Hoa anh đào ở Kyoto rất đẹp. Tôi đã chụp được rất nhiều ảnh.
Tối Chủ Nhật, tôi quay trở về Tokyo bằng tàu Shinkansen. Tuần tới tôi sẽ đi Nara một mình. Tôi sẽ đi Nara bằng tàu điện Kintetsu.`,

  "dokkai-6": `Hôm qua là ngày Chủ Nhật. Thời tiết rất đẹp trời.
Tôi thức dậy vào lúc 8 giờ sáng. Tôi ăn bánh mì cùng trứng, và uống cà phê.
Buổi sáng, tôi làm bài tập tiếng Nhật ở trong phòng. Sau đó, tôi xem trận đấu bóng đá trên ti-vi.

Buổi trưa, tôi gọi điện thoại cho người bạn là anh Yamada. Tôi rủ: "Cùng đi công viên với mình không? Hoa anh đào đang rất đẹp đấy!".
Anh Yamada trả lời: "Hay quá! Chúng ta cùng đi nhé".
Chúng tôi đã cùng nhau ngắm hoa anh đào ở công viên. Chúng tôi ăn cơm hộp bento và uống trà. Chuyến đi thực sự rất vui vẻ.`,

  "dokkai-7": `Hôm qua là ngày sinh nhật của tôi. Tôi đã tròn 24 tuổi.
Ở công ty, tôi đã nhận được một bó hoa tuyệt đẹp từ đồng nghiệp là chị Kimura. Tôi cảm thấy rất vui.
Tôi cũng nhận được một lá thư và tiền gửi từ mẹ. Bức thư được viết bằng tiếng Việt.

Buổi tối, tôi đi ăn cùng bạn bè ở nhà hàng. Chúng tôi dùng thìa và nĩa thưởng thức những món ăn ngon miệng.
Tôi hỏi bạn mình: "Cậu đã nộp bài báo cáo tiếng Nhật chưa?".
Bạn tôi trả lời: "Chưa, mình vẫn chưa nộp. Bây giờ mình chuẩn bị viết đây".
Ngày mai, tôi sẽ gửi thư điện tử cho mẹ bằng máy vi tính.`,

  "dokkai-8": `Thành phố nơi tôi đang sinh sống là Kobe. Kobe là một thành phố xinh đẹp có cả biển lẫn núi.
Dù không phải là một thành phố quá lớn, nhưng nơi đây rất nhộn nhịp và tiện lợi.
Người dân Kobe rất thân thiện, tốt bụng. Thêm vào đó, thịt bò Kobe vô cùng nổi tiếng và thơm ngon, tuy nhiên giá hơi đắt một chút.

Căn hộ của tôi nằm ở một nơi yên tĩnh. Phòng tuy không rộng rãi lắm nhưng còn rất mới.
Mùa hè ở Nhật Bản rất nóng bức, nhưng mùa thu thì mát mẻ và dễ chịu. Tôi vô cùng yêu thích thành phố Kobe.`,

  "dokkai-9": `Tôi rất yêu thích âm nhạc, đặc biệt là nhạc cổ điển. Tôi cũng có thể chơi piano một chút.
Tôi cũng thích thể thao nữa. Cuối tuần tôi thường chơi bóng đá cùng bạn bè. Còn môn quần vợt thì tôi chơi không giỏi lắm.

Việc học tiếng Nhật của tôi thế nào ư? Chữ Hiragana và Katakana thì tôi hiểu rất rõ, nhưng chữ Hán (Kanji) thì tôi hoàn toàn chưa nắm được. Chữ Hán quả thực rất khó.
Ngày mai là Chủ Nhật, nhưng tôi sẽ không đi chơi cùng bạn bè. Vì thứ Hai có bài kiểm tra tiếng Nhật nên tôi sẽ ở nhà tập trung học tập hết sức mình.`,

  "dokkai-10": `Căn phòng của tôi nằm ở tầng 2. Khi mở cửa phòng ra, phía bên phải có một chiếc giường ngủ.
Bên cạnh giường là bàn làm việc. Trên bàn có máy vi tính, vở ghi chép và nhiều đồ dùng khác.
Dưới gầm bàn có một thùng rác nhỏ. Giá sách nằm ở phía bên trái căn phòng. Trong giá sách có rất nhiều sách tiếng Nhật.

Ở gần cửa sổ phòng có một chú mèo màu trắng. Tên của chú là Shiro.
Shiro lúc nào cũng ngủ ở trên giường. Trong phòng tôi không có ti-vi.`,

  "dokkai-11": `Tôi là du học sinh đến từ Việt Nam. Gia đình tôi có tất cả 5 người:
Bố mẹ, một người anh trai và một người em gái. Anh trai tôi là nhân viên công ty, còn em gái tôi là học sinh cấp ba.
Tính từ lúc sang Nhật Bản đến nay, tôi đã ở được tròn một năm rưỡi rồi.

Mỗi ngày tôi học 4 tiếng ở trường tiếng Nhật. Trường có 20 bạn du học sinh đến từ nhiều quốc gia khác nhau.
Cứ mỗi tuần một lần, tôi lại gọi điện thoại về nước và trò chuyện với mẹ khoảng 30 phút.
Tôi ít khi viết thư tay, thay vào đó tôi gửi thư điện tử khoảng 3 lần mỗi tháng.`,

  "dokkai-12": `Năm ngoái tôi đã đi Hokkaido. Tháng trước tôi lại đến Okinawa.
Giữa Hokkaido và Okinawa thì nơi nào lạnh hơn? Hokkaido lạnh hơn rất nhiều, tuyết rơi rất nhiều.
Okinawa thì vô cùng ấm áp. Biển xanh ngắt và tuyệt đẹp.

Đồ ăn ở cả hai nơi đều rất ngon. Ở Hokkaido, cá và cua biển rất tươi ngon. Còn ở Okinawa thì các món thịt lợn là ngon nhất.
Trong các mùa của Nhật Bản, tôi thích nhất là mùa thu, bởi vì tiết trời mát mẻ và hoa quả lại rất thơm ngon.`,

  "dokkai-13": `Kỳ nghỉ hè thú vị sắp đến rồi. Kỳ nghỉ hè kéo dài trong 2 tuần.
Hiện tại tôi đang rất muốn có một chiếc máy ảnh mới, vì tôi muốn chụp thật nhiều bức ảnh trong chuyến du lịch.
Ngày mai tôi sẽ đến trung tâm thương mại để mua máy ảnh.

Trong kỳ nghỉ hè, tôi muốn cùng bạn bè đi đâu đó. Tôi muốn đến Hokkaido để tận hưởng những làn gió mát lành.
Tôi cũng muốn đi bơi ở biển và thưởng thức những món hải sản tươi ngon.
Thời gian qua tôi đã làm việc rất nhiều nên bây giờ cảm thấy khá mệt mỏi. Kỳ nghỉ hè này tôi muốn được nghỉ ngơi thật thảnh thơi.`,

  "dokkai-14": `Hôm nay từ sáng sớm tuyết lạnh đã rơi. Bên ngoài trời rất lạnh.
Anh Miller đi ra nhà ga. Trước cửa ga có một người đàn ông đang xách hai kiện hành lý nặng và trông rất lúng túng, vất vả.
Anh Miller liền ngỏ lời: "Để tôi xách giúp anh một kiện hành lý nhé?". Người đàn ông đáp: "Cảm ơn anh rất nhiều, xin hãy giúp tôi với!".

Sau đó, hai người cùng nhau bước đi. Vì tuyết rơi ngày càng nhiều nên anh Miller nhắc nhở: "Đường trơn nguy hiểm đấy, anh hãy đi chậm thôi nhé!".
Thấy người đàn ông không mang theo ô, anh Miller bảo: "Anh hãy vào che chung ô với tôi này!".
Sau khi đã vào bên trong nhà ga, người đàn ông nói lời cảm ơn: "Anh đã đối xử với tôi thật tốt bụng, thực sự cảm ơn anh rất nhiều!".`,

  "dokkai-15": `Tôi là Miller, đến từ nước Mỹ và hiện còn độc thân.
Hiện nay tôi đang sống trong một căn hộ nhỏ ở Tokyo.
Tôi làm việc tại một công ty tên là IMC. Công ty IMC chuyên sản xuất phần mềm máy tính.

Ở IMC có nhiều quy định khác nhau. Trong phòng làm việc không được phép hút thuốc lá vì đây là khu vực cấm hút thuốc. Mọi người có thể hút thuốc ở khu vực được bố trí bên ngoài.
Ngoài ra, không được đỗ xe ô tô ở trước cửa công ty vì đây là khu vực cấm đỗ xe.

Khi muốn sử dụng tài liệu hoặc sách giới thiệu của công ty, tôi sẽ hỏi trưởng phòng: "Em có thể xem tài liệu này được không ạ?". Trưởng phòng luôn vui vẻ bảo: "Được chứ, xin mời cậu!".
Đồng nghiệp của tôi là anh Yamada đã kết hôn vào năm ngoái. Vợ anh ấy làm việc ở ngân hàng.
Tôi thì vẫn chưa kết hôn. Thế nhưng cuộc sống ở Nhật Bản đối với tôi vô cùng vui vẻ và thú vị.`,

  "dokkai-16": `Thứ Bảy tuần trước, tôi đã cùng người bạn là Maria đi du lịch Kyoto.
Tôi thức dậy lúc 6 giờ sáng, tắm vòi sen rồi ăn bữa sáng. Sau đó, tôi đến ga Tokyo và lên tàu siêu tốc Shinkansen.

Sau khi đến ga Kyoto, trước tiên tôi đến quầy thông tin du lịch để nhận bản đồ. Từ trước ga Kyoto, chúng tôi đón xe buýt thành phố và xuống tại trạm Kinkakuji-michi.
Chùa Vàng Kinkaku-ji rực rỡ sắc vàng và vô cùng tráng lệ. Khu vườn có rất nhiều cây xanh và không gian thật tĩnh lặng.

Sau đó, chúng tôi thưởng thức ẩm thực Kyoto tại một nhà hàng gần đó. Đồ ăn vừa rẻ lại rất ngon miệng. Nhân viên quán rất nhiệt tình và chỉ đường chu đáo cho chúng tôi. Kyoto quả là một thành phố cổ kính và đầy thú vị.`,

  "dokkai-17": `Từ hôm qua tôi đã bị sốt, đầu và cổ họng đều đau rát. Vì vậy, sáng hôm nay tôi đã đến khám tại bệnh viện Sakura.

Tại quầy tiếp tân của bệnh viện, nhân viên bảo tôi: "Xin vui lòng xuất trình thẻ bảo hiểm y tế". May mắn là tôi không quên mang theo nên đã lấy ra trình ngay được.

Bác sĩ khám và bảo: "Cháu bị cảm cúm rồi nhé. Bác sẽ kê đơn thuốc cho cháu, mỗi ngày uống 3 lần sau bữa ăn. Hôm nay cháu đừng tắm bồn mà hãy đi ngủ sớm nhé. Ngày mai cháu không cần phải đi làm ở công ty đâu".
Bác sĩ cũng dặn thêm: "Chậm nhất là trước thứ Sáu cháu hãy đến tái khám một lần nữa nhé". Tôi sẽ uống thuốc đúng giờ và ở nhà nghỉ ngơi thật tĩnh dưỡng.`,

  "dokkai-18": `Tên của tôi là Vương, tôi đến từ Trung Quốc. Tôi sang Nhật Bản đến nay đã được 1 năm rồi.

Sở thích của tôi là chụp ảnh và chơi đàn piano. Vì đã luyện tập piano từ khi còn nhỏ nên tôi có thể chơi được cả những bản nhạc khó.
Tôi cũng rất thích thể thao. Tôi có thể bơi được 50 mét ở hồ bơi. Tuy nhiên tôi không biết trượt tuyết. Vì chưa một lần nào được thử nên mùa đông năm nay tôi nhất định muốn đến khu trượt tuyết.

Mỗi tối trước khi đi ngủ, tôi đều viết nhật ký bằng tiếng Nhật. Ban đầu tôi rất khó nhớ ra chữ Hán, nhưng dạo gần đây tôi đã có thể viết được rất nhiều. Trong tương lai, tôi mong muốn được làm việc tại một công ty Nhật Bản.`,

  "dokkai-19": `Mùa hè năm ngoái, tôi đã cùng bạn bè leo núi Phú Sĩ. Vì chưa từng leo núi Phú Sĩ bao giờ nên tôi đã cảm thấy vô cùng hào hứng và phấn khích.
Chúng tôi bắt đầu leo từ ban đêm. Càng lên cao trời càng lạnh dần và cơ thể cũng mệt mỏi, nhưng cảnh mặt trời mọc ngắm nhìn từ đỉnh núi thì đẹp đến nao lòng.

Sau đó, chúng tôi nghỉ lại tại một nhà trọ suối nước nóng ở gần chân núi. Chúng tôi được ngâm mình trong suối nước nóng và thưởng thức những món ăn Nhật truyền thống thơm ngon. Chúng tôi mặc áo yukata và chụp rất nhiều bức ảnh kỷ niệm.
Nhờ ngâm suối nước nóng, thể trạng của tôi đã hoàn toàn hồi phục khỏe khoắn trở lại.

Vào những ngày nghỉ, tôi thường dọn dẹp phòng ốc hoặc giặt giũ quần áo, nhưng thỉnh thoảng tôi vẫn muốn đi xa để trải nghiệm những điều mới mẻ.`,

  "dokkai-20": `Tanaka: Này cậu Miller, Chủ Nhật tuần này cậu có rảnh không?
Miller: Ừ, mình không có kế hoạch gì đặc biệt cả. Có chuyện gì thế?
Tanaka: Ở Ginza đang có một buổi triển lãm ảnh rất thú vị đấy. Nếu được thì tụi mình cùng đi nhé?
Miller: Tuyệt quá! Mình rất muốn đi. Mấy giờ và gặp nhau ở đâu được nhỉ?
Tanaka: 10 giờ ở cửa soát vé ga Ginza được không?
Miller: Nhất trí! À mà, sau đó tụi mình tìm chỗ nào ăn trưa luôn nhé?
Tanaka: Ừ, ở Ginza có một quán mì ramen ngon lắm. Giá hơi đắt một chút nhưng quán nổi tiếng cực kỳ.
Miller: Ồ, nghe mong chờ quá đi. Tokyo vật giá đắt đỏ thật nhưng lại có nhiều quán ăn ngon tuyệt.
Tanaka: Đúng vậy đấy! Vậy hẹn cậu Chủ Nhật lúc 10 giờ nhé!
Miller: Ừ, hẹn gặp lại cậu vào Chủ Nhật nhé!`,

  "dokkai-21": `Về giao thông ở Nhật Bản, tôi thấy vô cùng tiện lợi.
Tàu điện và xe buýt luôn chạy đúng giờ nên mọi người không bao giờ bị trễ hẹn. Bên trong các nhà ga lẫn đường sá đều rất sạch sẽ và an toàn.

Tuy nhiên, tôi thấy giờ cao điểm buổi sáng thực sự rất vất vả. Người đông đến mức khó lòng cử động nổi trên tàu điện.
Tiền bối ở công ty bảo tôi: "Mới đầu em thấy ngỡ ngàng đúng không? Nhưng rồi sẽ quen ngay thôi mà!".

Ngoài ra, tôi thấy nhân viên văn phòng Nhật Bản rất nghiêm túc và làm việc chăm chỉ. Dẫu vậy, tôi nghĩ họ không nên làm thêm giờ quá nhiều, mà nên dành thêm thời gian cho gia đình thì tốt hơn.`,

  "dokkai-22": `Tuần trước, tôi vừa chuyển đến một căn hộ mới.
Căn hộ mà hiện tại tôi đang sống nằm ở vị trí chỉ cách nhà ga 5 phút đi bộ. Tiền thuê nhà hơi cao một chút nhưng lại vô cùng tiện lợi.

Trong phòng có chiếc bàn làm việc lớn do bố mua cho tôi, và một bức tranh tuyệt đẹp do bạn tôi vẽ.
Ngoài ra, căn hộ này còn có một phòng kiểu Nhật truyền thống (washitsu). Có một tủ âm tường oshiire rất lớn nên ban ngày tôi có thể cất đệm futon gọn gàng vào trong đó.

Phòng bên cạnh có một anh nhân viên văn phòng tốt bụng đang sinh sống, anh ấy luôn đeo kính và mặc vest.
Vào ngày tôi chuyển đến, anh ấy đã nói "Chúc mừng bạn nhé!" và tặng tôi một hộp bánh kẹo thơm ngon. Nơi đây thực sự là một nơi ở tuyệt vời.`,

  "dokkai-23": `Kỳ nghỉ tháng trước, tôi đã đi du lịch Nara một mình.
Khi đến ga Nara, tôi không biết đường đến công viên Nara. Vì vậy, tôi đã vào đồn công an trước ga để hỏi thăm chú cảnh sát.

Chú cảnh sát đã chỉ đường rất tận tình: "Cháu hãy đi thẳng con đường này, đến cột đèn giao thông thứ hai thì rẽ phải. Sau đó đi qua một cây cầu lớn, công viên sẽ nằm ở ngay phía bên tay trái nhé!".

Đi theo đúng như lời chỉ dẫn, tôi đã tìm thấy công viên Nara ngay tức thì.
Trong công viên có rất nhiều chú hươu. Khi tôi mua bánh quy cho hươu (shika senbei) đưa cho chúng, những chú hươu liền cúi đầu chào cảm ơn. Tôi thấy chúng vô cùng đáng yêu. Lúc bị lạc đường thì thấy lo lắng, nhưng quả thực đây là một ngày trải nghiệm thật vui vẻ.`,

  "dokkai-24": `Hồi tôi mới đặt chân sang Nhật Bản, tôi hầu như chẳng hiểu được tiếng Nhật.
Lúc đó, bác chủ nhà trọ đã dẫn tôi lên ủy ban quận và giúp tôi làm các thủ tục đăng ký cư trú cho người nước ngoài.

Thêm vào đó, anh Sato - đồng nghiệp ở công ty - đã ân cần hướng dẫn cho tôi cách mua sắm ở siêu thị cũng như cách phân loại rác đúng quy định. Vợ của anh Sato còn tự tay nấu những món ăn Nhật Bản thơm ngon mang sang cho tôi thưởng thức.

Tôi rất muốn cảm ơn mọi người, vì vậy tuần trước tôi đã tự tay làm món chả giò Việt Nam mang biếu bác chủ nhà và anh Sato. Mọi người khen: "Ngon tuyệt cú mèo!" và ăn rất nhiều. Nhờ những người xung quanh luôn hết lòng giúp đỡ nên cuộc sống của tôi tại Nhật Bản thật vui tươi và ấm áp.`,

  "dokkai-25": `Hôm nay là ngày kết thúc khóa học tiếng Nhật sơ cấp. Trong suốt nửa năm qua, em xin chân thành cảm ơn sự giúp đỡ tận tình của mọi người.

Lúc mới bắt đầu, ngay cả chữ Hiragana và Katakana em cũng không đọc được, nên dù có học thế nào thì điểm bài kiểm tra cũng chẳng cao. Nhưng nhờ có các thầy cô luôn ân cần, kiên nhẫn giảng dạy, em đã dần dần thấu hiểu được tiếng Nhật.

Nếu thi đỗ kỳ thi JLPT N5, tiếp theo em muốn bắt đầu học lên N4. Dù công việc có bận rộn đến đâu, em dự định mỗi ngày vẫn sẽ dành ra ít nhất 1 tiếng để học tiếng Nhật.
Và trong tương lai, nếu có cơ hội, em mong muốn được làm việc tại một doanh nghiệp IT của Nhật Bản. Dù có vất vả thế nào, em cũng sẽ nỗ lực hết mình vì ước mơ.

Xin gửi lời cảm ơn chân thành đến các thầy cô giáo và tất cả các bạn trong lớp. Chúc mọi người luôn dồi dào sức khỏe!`,

  "dokkai-26": `Tuần trước, tôi vừa chuyển sang một căn hộ mới đấy. Căn phòng ở gần nhà ga nên vô cùng tiện lợi.
Thế nhưng, có một điều khiến tôi khá bối rối. Đó là tôi chưa rõ cách vứt rác ở đây như thế nào.
Vì vậy, tôi đã đến gặp bác quản lý khu căn hộ để hỏi.
Tôi hỏi: "Xin lỗi bác, rác cháy được thì vứt vào lúc nào ạ?".
Bác quản lý đã hướng dẫn rất nhiệt tình: "Rác cháy được thì cháu hãy mang ra vứt trước 8 giờ sáng thứ Ba và thứ Sáu nhé. Còn lon nhôm và chai thủy tinh thì vào buổi sáng thứ Tư đấy".
Cuộc sống ở Nhật tuy có nhiều quy tắc, nhưng bác quản lý tốt bụng như vậy khiến tôi cảm thấy rất yên tâm.`,

  "dokkai-27": `Ở Nhật Bản có rất nhiều suối nước nóng. Tháng trước, tôi đã đi tắm suối nước nóng ở Hakone.
Từ bồn tắm lộ thiên ngoài trời có thể nhìn thấy núi Phú Sĩ hiện ra rõ mồn một. Làn nước ấm áp ngâm vào đem lại cảm giác vô cùng sảng khoái và dễ chịu.
Tại nhà trọ này, khách có thể thưởng thức những món ăn ngon trong căn phòng rộng rãi cho đến 8 giờ tối.
Ngoài ra, từ con suối gần đó còn nghe được tiếng chim hót líu lo, giúp tôi có những giây phút nghỉ ngơi thật tĩnh lặng.
Dù ngày nào cũng bận rộn, nhưng khi đi suối nước nóng, mọi mệt mỏi đều tan biến hết. Người nước ngoài cũng có thể đặt phòng rất dễ dàng, các bạn hãy thử trải nghiệm một lần xem nhé!`,

  "dokkai-28": `Tôi là du học sinh đến từ Việt Nam, sang Nhật đến nay đã tròn 1 năm.
Ngày thường, ban ngày tôi học kinh tế ở trường đại học, còn buổi tối thì đi làm thêm ở cửa hàng tiện lợi.
Công việc làm thêm có rất nhiều thứ phải làm, như bấm máy tính tiền hay sắp xếp hàng hóa lên kệ.
Bác quản lý cửa hàng rất hiền từ, lương bổng khá tốt, đồng nghiệp lại thân thiện nên môi trường làm việc vô cùng thoải mái.
Vào dịp cuối tuần, tôi vừa nghe nhạc Nhật vừa dọn dẹp phòng ốc. Tuy có vất vả, nhưng tôi luôn cố gắng hết mình vì tương lai của chính bản thân.`,

  "dokkai-29": `Hôm qua, tôi đã mắc phải một sai lầm vô cùng tai hại. Tôi đã để quên mất chiếc túi xách ở trên tàu điện.
Khi bước ra khỏi cửa soát vé của ga, tôi mới giật mình nhận ra chiếc túi đựng ví tiền và hộ chiếu đã không còn nữa.
Tôi vội vàng chạy đến chỗ nhân viên nhà ga và báo: "Tôi đã để quên túi xách trên tàu mất rồi!".
Nhân viên nhà ga đã hỏi han rất ân cần về thời gian chuyến tàu và màu sắc của chiếc túi.
30 phút sau, nhân viên nhà ga liên lạc lại: "Túi xách của bạn đã được tìm thấy ở ga kế tiếp rồi nhé!".
Khi kiểm tra bên trong, cả tiền bạc lẫn hộ chiếu đều còn nguyên vẹn y như cũ. Tôi vô cùng biết ơn và cảm kích tấm lòng của các nhân viên nhà ga Nhật Bản.`,

  "dokkai-30": `Từ tuần tới, tôi sẽ cùng bạn bè đi du lịch Hokkaido trong 3 ngày.
Khách sạn thì chúng tôi đã đặt sẵn qua mạng internet rồi, vé máy bay cũng đã được mua sẵn từ trước.
Vì Hokkaido hiện tại trời vẫn còn lạnh, nên chúng tôi phải chuẩn bị sẵn áo khoác ấm.
Trên tường phòng tôi có dán sẵn một tấm bản đồ Hokkaido. Những địa điểm du lịch muốn ghé thăm đều đã được đánh dấu bằng bút đỏ.
Trước khi khởi hành, tôi sẽ sạc đầy pin máy ảnh sẵn sàng. Tôi đang rất nóng lòng và mong chờ được thưởng thức món mì ramen thơm ngon tại đây.`,

  "dokkai-31": `Sau khi tốt nghiệp đại học, tôi dự định sẽ làm việc tại một nhà hàng Nhật Bản trong 3 năm.
Tôi định sẽ học hỏi thật kỹ càng cách chế biến món ăn Nhật Bản cũng như tác phong, phép tắc phục vụ khách hàng.
Sau đó, tôi có kế hoạch sẽ tự mở một quán ăn Việt Nam của riêng mình trước năm 30 tuổi.
Tại quán ăn đó, tôi dự tính sẽ phục vụ những món ăn đậm đà hương vị quê hương như phở hay nem cuốn tươi ngon.
Để biến ước mơ thành hiện thực, tôi định từ bây giờ mỗi tháng sẽ tiết kiệm một khoản tiền. Cho dù có khó khăn vất vả thế nào, tôi cũng quyết không bao giờ từ bỏ.`,

  "dokkai-32": `Dạo gần đây do công việc bận rộn nên buổi tối tôi mãi không tài nào chợp mắt được. Đầu lại bị đau nhức nên tôi đã đến bệnh viện khám.
Bác sĩ đã đưa ra cho tôi một vài lời khuyên:
"Buổi tối muộn bạn không nên nhìn vào điện thoại thông minh nữa nhé. Bạn nên ngâm mình thư thả trong bồn tắm để làm ấm cơ thể.
Ngoài ra, uống một ly sữa ấm trước khi đi ngủ có thể sẽ giúp bạn ngủ ngon hơn đấy".
Sau khi về nhà, tôi làm theo đúng như lời dặn của bác sĩ và quả nhiên đã ngủ được một giấc thật say nồng. Sức khỏe quả thực là điều quan trọng nhất!`,

  "dokkai-33": `Tôi đang làm việc tại một nhà xưởng chuyên sản xuất linh kiện ô tô.
Trong xưởng có rất nhiều biển báo khác nhau. Ví dụ như tấm biển màu vàng có ghi dòng chữ "Cấm vào" (立入禁止).
Biển này có ý nghĩa là "Không được bước vào đây", vì máy móc đang hoạt động rất nguy hiểm.
Ngoài ra, tấm biển màu đỏ "Nghiêm cấm lửa" (火気厳禁) mang ý nghĩa là "Không được hút thuốc hay sử dụng lửa ở khu vực này".
Trong buổi họp giao ban mỗi sáng, nhóm trưởng luôn nhắc nhở: "Hãy chỉ tay xác nhận!" và "Làm việc an toàn là trên hết!". Tuân thủ nghiêm ngặt các quy tắc là điều tối quan trọng để không để xảy ra tai nạn.`,

  "dokkai-34": `Tuần trước, trong buổi trải nghiệm văn hóa Nhật Bản tại trường đại học, lần đầu tiên tôi đã được trải nghiệm trà đạo.
Giáo viên hướng dẫn bảo: "Các em hãy pha trà đúng theo những thao tác của cô nhé!".
Đầu tiên, sau khi ăn xong bánh ngọt wagashi thì mới thưởng thức trà. Sau khi ăn bánh ngọt ngào xong, ta sẽ cảm nhận được vị trà hơi đắng trở nên vô cùng thơm ngon.
Khi cầm chén trà lên tay, phải xoay chén trà theo chiều kim đồng hồ 2 lần rồi mới uống.
Lúc đầu, do ngồi quỳ kiểu seiza nên chân tôi bị đau mỏi, nhưng làm theo đúng hướng dẫn của cô giáo, tôi đã thực hiện rất thuần thục. Văn hóa truyền thống Nhật Bản quả thực vô cùng sâu sắc.`,

  "dokkai-35": `Ở Nhật Bản có bốn mùa xuân, hạ, thu, đông rõ rệt.
Khi mùa xuân đến, hoa anh đào nở rộ khiến cả khu phố như ngập tràn trong sắc hồng. Nếu muốn đi ngắm hoa anh đào, Kyoto và Nara là những gợi ý tuyệt vời nhất.
Mùa hè tuy oi bức nhưng khắp nơi lại tổ chức những lễ hội pháo hoa và lễ hội truyền thống sôi động. Nếu muốn đến nơi mát mẻ, ghé thăm Hokkaido sẽ là một lựa chọn lý tưởng.
Mùa thu lá đỏ momiji rất đẹp và đồ ăn cũng rất thơm ngon. Nếu thời tiết đẹp, bạn có thể thỏa thích tận hưởng thú vui leo núi.
Khi mùa đông đến, tuyết trắng rơi đầy. Nếu muốn trượt tuyết, đến Nagano hay Niigata bạn sẽ được chiêm ngưỡng phong cảnh tuyết trắng tuyệt mỹ.`,

  "dokkai-36": `Hồi mới sang Nhật Bản, tôi hoàn toàn chẳng nói được tiếng Nhật.
Thế nhưng, tôi đã không nản lòng mà kiên trì học tập mỗi ngày, và đến nay tôi đã có thể giao tiếp những câu đàm thoại hàng ngày đơn giản bằng tiếng Nhật.
Dạo gần đây tôi cũng đã bắt đầu xem được phim hoạt hình anime Nhật Bản mà không cần phụ đề.
Mỗi ngày tôi đều cố gắng ghi nhớ 5 chữ Hán mới.
Ngoài ra, nếu gặp từ ngữ nào chưa hiểu, tôi luôn tạo thói quen tra từ điển ngay tức thì.
Để năm tới có thể thi đỗ chứng chỉ JLPT N2, từ nay về sau tôi dự định sẽ tiếp tục nỗ lực học tập hết mình.`,

  "dokkai-37": `Mì ăn liền - món ăn chỉ cần chế nước sôi vào là có thể thưởng thức - chính là một phát minh đến từ Nhật Bản.
Vào năm 1958, món mì ramen vị gà (Chicken Ramen) đầu tiên trên thế giới đã được tạo ra bởi một người tên là Momofuku Ando.
Vào thời điểm đó, mọi người đã vô cùng ngạc nhiên và thán phục vì có thể thưởng thức một bát mì ngon miệng một cách nhanh chóng, tiện lợi đến vậy.
Sau đó, vào năm 1971, mì ly Cup Noodles được ra mắt và bắt đầu được xuất khẩu ra toàn thế giới.
Ngày nay, không chỉ ở châu Á mà cả ở Mỹ hay châu Âu, mì ăn liền đều được đông đảo người dân trên toàn cầu thưởng thức mỗi ngày. Đó thực sự là một trong những phát minh tuyệt vời của Nhật Bản.`,

  "dokkai-38": `Vào những ngày cuối tuần, tôi thường tham gia hoạt động tình nguyện dọn dẹp vệ sinh tại khu dân cư.
Đúng 8 giờ sáng, chúng tôi tập trung tại công viên và cùng nhau nhặt rác.
Việc giữ gìn công viên sạch đẹp không chỉ mang lại cảm giác thoải mái dễ chịu mà còn giúp thắt chặt tình đoàn kết, giao lưu với những người hàng xóm xung quanh.
Tuần trước, các em nhỏ cũng cùng tham gia với chúng tôi. Nhìn thấy các em nhiệt tình, chăm chỉ nhặt từng mẩu rác, tôi cảm thấy rất đỗi vui mừng.
Sau khi kết thúc buổi dọn dẹp, mọi người cùng nhau quây quần uống trà thật vui vẻ. Tôi muốn tiếp tục duy trì hoạt động ý nghĩa này vì cộng đồng địa phương.`,

  "dokkai-39": `Hôm qua, một cơn bão cực mạnh đã đổ bộ vào Nhật Bản.
Gió giật mạnh kèm theo mưa lớn dữ dội đã khiến cho nhiều tuyến tàu điện phải ngừng hoạt động.
Nhiều cây xanh bị gãy đổ chắn ngang mặt đường khiến cho xe buýt cũng không thể lưu thông được.
Các trường học đều cho học sinh nghỉ học, còn nhân viên các công ty cũng chuyển sang làm việc từ xa tại nhà.
Khu căn hộ của tôi cũng bị mất điện, đèn không bật được khiến tôi khá lúng túng, nhưng may nhờ đã chuẩn bị sẵn đèn pin và nước uống dự trữ nên mọi thứ đều an toàn.
Tại một đất nước thường xảy ra thiên tai như Nhật Bản, tôi thấm thía sâu sắc rằng việc chủ động phòng ngừa, chuẩn bị sẵn sàng từ trước là điều tối quan trọng.`,

  "dokkai-40": `Từ thuở ấu thơ, tôi đã luôn ấp ủ ước mơ được bay vào vũ trụ bao la.
Để trở thành một phi hành gia, người ta phải vượt qua những kỳ thi và khóa huấn luyện vô cùng khắc nghiệt.
Ứng viên sẽ được thử thách về tinh thần, xem liệu có thể cùng các đồng đội sinh hoạt hòa thuận trong một căn phòng chật hẹp suốt 1 tuần mà không xảy ra xích mích hay không.
Ngoài ra, họ còn phải làm đi làm lại nhiều thí nghiệm để kiểm tra xem có thể vận hành máy móc chính xác trong môi trường không trọng lực hay không.
Ngắm nhìn Trái Đất từ vũ trụ sẽ tráng lệ và diệu kỳ đến nhường nào nhỉ? Dẫu chưa biết liệu ước mơ có thành hiện thực hay không, tôi vẫn sẽ dốc toàn lực để thử sức một lần.`,

  "dokkai-41": `Ở Nhật Bản có phong tục tặng quà cho những người đã từng cưu mang, giúp đỡ mình.
Mùa hè thì có quà "Ochugen", còn cuối mùa đông thì có quà "Oseibo", đó là dịp để bày tỏ tấm lòng biết ơn sâu sắc thường ngày.
Tuần trước, tôi đã nhận được một giỏ trái cây tươi ngon từ bác trưởng phòng công ty - người luôn hết lòng chỉ bảo tôi trong công việc.
Bác trưởng phòng lúc nào cũng ân cần, chu đáo hướng dẫn từng li từng tí cho tôi.
Khi đến dịp Tết Năm Mới, người lớn sẽ mừng tuổi (otoshidama) cho trẻ nhỏ. Các em nhỏ dùng số tiền đó để mua những món đồ chơi mình yêu thích.
Tôi nghĩ rằng việc gửi trao lòng biết ơn thông qua những món quà là một nét văn hóa vô cùng tốt đẹp của người Nhật.`,

  "dokkai-42": `Để giúp đỡ những mảnh đời gặp khó khăn, tôi đã hạ quyết tâm sẽ trở thành một luật sư.
Luật pháp Nhật Bản tuy rất phức tạp và khó khăn, nhưng ngày nào tôi cũng miệt mài học tập hết sức mình.
Để tốt nghiệp một trường đại học ở Nhật Bản, người ta phải tiêu tốn rất nhiều thời gian và tiền bạc.
Chính vì vậy, để có tiền trang trải học phí, vào những ngày cuối tuần tôi đều đi làm thêm tại một nhà hàng.
Cuốn sách luật dày cộm này vô cùng hữu ích cho tôi trong việc tra cứu các án lệ.
Để hiện thực hóa ước mơ của bản thân, cho dù có gian truân vất vả đến đâu, tôi cũng quyết không nản lòng mà kiên định vững bước tiếp.`,

  "dokkai-43": `Khi bước sang tháng 11, những cơn gió trở nên lạnh buốt và mùa đông đã cận kề gõ cửa.
Ngước nhìn lên bầu trời, những đám mây xám xịt dày đặc giăng kín, dường như trời có thể đổ mưa bất cứ lúc nào.
Lá cây trong công viên cũng đã ngả sang sắc vàng, sắc đỏ, mỗi khi có làn gió thoảng qua lại chực rơi rụng.
Trước quầy hàng rau củ, những trái quýt và táo tươi ngon, mọng nước được bày biện thật bắt mắt.
Trời có vẻ lạnh giá nên tôi đã khoác áo ấm và ra cửa hàng tiện lợi gần nhà mua một chai trà nóng hổi mang về.
Thời điểm giao mùa rất dễ bị cảm lạnh nên tôi phải đặc biệt chú ý giữ gìn sức khỏe của mình.`,

  "dokkai-44": `Hồi mới bắt đầu cuộc sống tự lập một mình ở Nhật Bản, tôi đã vấp phải rất nhiều lần thất bại dở khóc dở cười.
Lần đầu tiên tự nấu món cà ri, do cho quá nhiều gia vị cay nồng nên món ăn cay xé lưỡi, không thể nào nuốt nổi.
Vì thế, để làm giảm bớt vị cay, tôi đã phải đổ thêm sữa tươi vào để điều chỉnh lại vị.
Ngoài ra, chiếc tủ lạnh ở phòng trọ mới quá nhỏ nên chẳng chứa được bao nhiêu thực phẩm dự trữ.
Tuy nhiên, khu vực gần nhà ga lại có rất nhiều siêu thị nên việc đi mua sắm rất thuận tiện và dễ dàng.
Để căn phòng trông rộng rãi hơn, tôi đã vứt bỏ những món đồ không cần thiết và dọn dẹp phòng ốc thật ngăn nắp, sạch sẽ. Trải qua những lần vụng về ban đầu, cuộc sống của tôi đã dần trở nên thú vị và vui vẻ hơn.`,

  "dokkai-45": `Hôm qua, buổi diễn tập phòng chống thiên tai đã được tổ chức tại khu phố của tôi.
Cán bộ sở cứu hỏa đã giải thích cặn kẽ: "Trong trường hợp xảy ra hỏa hoạn hoặc động đất, bà con hãy thật bình tĩnh xử lý, chớ hoảng loạn!".
"Nếu có khói bốc lên, xin hãy dùng khăn tay bịt kín mũi và miệng, hạ thấp người xuống rồi nhanh chóng thoát hiểm!".
Dù trời mưa gió, nhưng rất đông người dân trong khu phố đã đến tham gia buổi diễn tập.
Cách sử dụng bình chữa cháy, dù đã được nghe hướng dẫn nhiều lần, nhưng khi bắt tay vào thực hành mới thấy quả thực không hề đơn giản.
Trong những tình huống khẩn cấp, kiến thức đúng đắn sẽ cứu sống sinh mạng của chúng ta, vì vậy đây là một buổi diễn tập vô cùng thiết thực và bổ ích.`,

  "dokkai-46": `Hiện tại tôi đang đứng trên sân ga của ga Tokyo. Đoàn tàu siêu tốc Shinkansen hướng về Shin-Osaka vừa lúc lăn bánh tiến vào sân ga.
Tàu Shinkansen của Nhật Bản giờ giấc cực kỳ chuẩn xác, nên chắc chắn tàu sẽ xuất phát đúng vào lúc 10 giờ không sai một giây.
Tôi cùng người đàn em mới vào công ty hồi tuần trước sẽ cùng nhau đi công tác tại chi nhánh Osaka.
Người đàn em hào hứng bảo: "Đây là lần đầu tiên em được đi tàu Shinkansen đấy ạ!" và vẻ mặt tràn đầy mong đợi.
Chúng tôi vừa mới mua xong cơm hộp bento và trà nóng, liền bước vào khoang ngồi xuống ghế thảnh thơi đợi giờ tàu lăn bánh.
Vì tàu chắc chắn sẽ đến nơi đúng giờ theo lịch trình nên chúng tôi sẽ dư dả thời gian kịp tham dự cuộc họp vào buổi chiều.`,

  "dokkai-47": `Người Nhật khi chào hỏi thường cúi đầu thực hiện động tác cúi chào ojigi.
Theo sách vở, hành động cúi chào tùy theo góc độ được chia làm 3 loại chính: "Eshaku" (cúi chào nhẹ), "Keirei" (cúi chào kính trọng) và "Saikeirei" (cúi chào cung kính nhất).
Trong môi trường công sở kinh doanh, người ta thường cúi gập người sâu khoảng từ 30 độ đến 45 độ.
Nhìn vào văn phòng làm việc, các nhân viên vừa cúi chào lịch sự vừa cất lời chào hỏi nhau trông thật trang trọng và lễ phép.
Bên ngoài vang lên tiếng chim hót ríu rít, mở đầu một buổi sáng thật trong lành, sảng khoái. Tôi cũng muốn nở một nụ cười thật tươi và cất lời chào: "Ohayou gozaimasu!".`,

  "dokkai-48": `Ở Nhật Bản, rất nhiều học sinh tiểu học theo học các lớp năng khiếu như đàn piano, bơi lội hay tiếng Anh.
Bạn tôi là anh Yamada mỗi tuần đều cho cậu con trai đi học bóng đá.
Tuy nhiên, anh Yamada chia sẻ rằng: "Bố mẹ gượng ép con học những thứ con không thích là điều không nên".
Anh cho rằng điều quan trọng nhất là để cho con trẻ được tự do khám phá và theo đuổi những gì con thực sự cảm thấy hứng thú.
Hôm nay, anh đã đến gặp bác trưởng phòng xin phép: "Xin lỗi bác, chiều nay cháu nhà em có trận thi đấu, bác có thể cho phép em được về sớm một chút được không ạ?" rồi vội vã đi cổ vũ cho con.
Nhìn thấy nụ cười rạng rỡ của con trẻ chính là niềm hạnh phúc to lớn nhất của những người làm cha mẹ.`,

  "dokkai-49": `Hôm qua, tôi đã có dịp đến thăm xưởng chế tác của thầy Sato - một nghệ nhân gốm sứ nổi tiếng.
Hằng ngày, thầy thức dậy từ lúc 6 giờ sáng và miệt mài sáng tác các tác phẩm nghệ thuật cho đến tận đêm muộn.
Khi tôi kính cẩn hỏi: "Thưa thầy, những chiếc đĩa tuyệt đẹp này có thể được chiêm ngưỡng ở đâu ạ?",
Thầy Sato liền mỉm cười đôn hậu đáp: "Tháng tới tôi sẽ tổ chức một buổi triển lãm cá nhân tại một trung tâm thương mại ở Tokyo, rất mong bạn sẽ ghé thăm nhé!".
Thầy không chỉ nổi tiếng ở Nhật Bản mà còn thường xuyên được mời tham gia các cuộc triển lãm lớn ở nước ngoài.
Hình ảnh người nghệ nhân vừa trân trọng gìn giữ tinh hoa truyền thống, vừa không ngừng tìm tòi, thử nghiệm những kỹ thuật mới mẻ đã để lại trong tôi niềm xúc động và cảm phục sâu sắc.`,

  "dokkai-50": `Vào lúc 10 giờ sáng ngày hôm nay, tôi đã cùng cấp trên đến thăm công ty đối tác Power Denki.
Tại quầy tiếp tân, tôi lịch sự thông báo: "Tôi tên là Nguyễn. Tôi đã có hẹn trước với Trưởng phòng Yamada vào lúc 10 giờ ạ".
Chúng tôi được mời vào phòng tiếp khách và ngồi đợi một lúc.
Khi Trưởng phòng Yamada bước vào, tôi cúi đầu kính cẩn chào: "Rất hân hạnh được gặp ngài. Tôi tên là Nguyễn, đến từ công ty IMC. Hôm nay ngài đã dành thời gian quý báu cho chúng tôi, tôi xin chân thành cảm ơn ngài!".
Chúng tôi kính mời ngài xem qua cuốn catalog sản phẩm mới mang theo và thuyết minh cặn kẽ về những đặc tính nổi bật của sản phẩm.
Việc vận dụng kính ngữ chuẩn mực trong môi trường kinh doanh thực tế tuy có phần hồi hộp, căng thẳng, nhưng đây thực sự là một trải nghiệm vô cùng quý giá và bổ ích.`
};

// Đọc file data/dokkai.js
const dokkaiPath = path.resolve(__dirname, '../data/dokkai.js');
let dokkaiContent = fs.readFileSync(dokkaiPath, 'utf8');

// Tải dữ liệu vào VM/eval an toàn để phân tích
eval(dokkaiContent + '; global.dokkaiData = dokkaiData;');

console.log('Tổng số bài đọc trong dokkaiData:', global.dokkaiData.length);
let countUpdated = 0;

global.dokkaiData.forEach(d => {
  if (dokkaiTranslations[d.id]) {
    d.translation = dokkaiTranslations[d.id];
    countUpdated++;
  } else {
    console.warn('CẢNH BÁO: Chưa có bản dịch cho bài:', d.id);
  }
});

console.log('Đã gán bản dịch tiếng Việt cho:', countUpdated, '/ 50 bài đọc.');

// Tạo nội dung file mới
const newFileContent = '// Dữ liệu 50 bài đọc hiểu theo giáo trình Minna no Nihongo (Bài 1 - 50)\n' +
  'const dokkaiData = ' + JSON.stringify(global.dokkaiData, null, 2) + ';\n';

fs.writeFileSync(dokkaiPath, newFileContent, 'utf8');
console.log('Đã ghi thành công bản dịch vào data/dokkai.js!');
