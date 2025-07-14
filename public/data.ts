// xoa cai nay di nua
export function addNewlines(inputString: string) {
  // Split the input string into an array of lines
  const inputLines = inputString.split("\n");

  const outputLines = inputLines.map(
    (line) => line + "\\n"
  );
  const outputString = outputLines.join("\n");
  console.log(outputString);

  return outputString;
}

// const tutuong = [
//   {
//     label:
//       "4.1tt: Phân tích tư tưởng Hồ Chí Minh về xây dựng nhà nước pháp quyền.",
//     dapan: `Thứ nhất, nhà nước CHXHCN Việt Nam là nhà nước hiến pháp, hợp pháp.

//     Nhà nước Việt Nam được tổ chức thông qua tổng tuyển cử và tuân thủ hiến pháp. 
//     Chủ tịch Hồ Chí Minh, ngay sau Cách mạng Tháng Tám, đại diện chính phủ lâm thời thông báo độc lập của nước Việt Nam. Điều này củng cố vị thế hợp pháp của chính phủ lâm thời do cách mạng nhân dân lập ra. 
//     Hồ Chí Minh đề xuất tổ chức sớm cuộc tổng tuyển cử để hình thành Quốc hội và Chính phủ, thể hiện quyền lực tối cao của nhân dân. Quốc hội đầu tiên họp vào ngày 2-3-1946, xác định cơ sở pháp lí cho Chính phủ giải quyết các vấn đề nội và ngoại trọng quốc gia.
    
//     Thứ hai, nhà nước ta là nhà nước thượng tôn pháp luật.
    
//     Chủ tịch Hồ Chí Minh luôn đặt sự ưu tiên cao cho việc xây dựng cơ sở pháp lý cho Nhà nước Việt Nam mới. Người đã nhận thức ngay từ sớm về tầm quan trọng của Hiến pháp và pháp luật trong đời sống chính trị - xã hội, điều này được thể hiện trong bản Yêu sách của nhân dân An Nam, nơi đòi hỏi quyền bình đẳng về chế độ pháp lý. Khi trở thành người đứng đầu Nhà nước, Người tiếp tục tăng cường quan tâm để đảm bảo tổ chức và hoạt động của Nhà nước tuân thủ pháp luật.
//     Theo tư tưởng của Người, quản lý xã hội bằng bộ máy nhà nước và các biện pháp khác nhau, nhưng quan trọng nhất là quản lý bằng Hiến pháp và pháp luật. Người lãnh đạo cũng đặt sự chú trọng đặc biệt vào công tác lập pháp và đưa pháp luật vào cuộc sống, đồng thời đảm bảo tính minh bạch và nghiêm minh trong việc thi hành pháp luật.
//     Người cũng đặc biệt quan tâm đến công tác giáo dục pháp luật cho mọi người, đặc biệt là thế hệ trẻ, và nhấn mạnh rằng điều này là quan trọng để xây dựng một Nhà nước pháp quyền. Người khuyến khích việc phê bình và giám sát công việc của Nhà nước, đồng thời thúc đẩy tính minh bạch và nghiêm minh trong thi hành pháp luật. Chủ tịch Hồ Chí Minh cũng đặt ra yêu cầu cao về tính công tâm của người thực thi pháp luật và gương mẫu của cán bộ các cấp, đặc biệt là ngành hành pháp và tư pháp.
    
//     Thứ ba, nhà nước ta là nhà nước pháp quyền nhân nghĩa.
    
//     Pháp quyền nhân nghĩa nhấn mạnh rằng Nhà nước cần tôn trọng và bảo vệ đầy đủ các quyền con người, đồng thời đảm bảo lợi ích hợp pháp của mọi người. Hiến pháp Việt Nam chi tiết hóa toàn diện về quyền con người, cung cấp nền tảng pháp lý để bảo vệ và thực thi những quyền này một cách triệt để.
//     Trong pháp quyền nhân nghĩa, tính nhân văn và khuyến thiện của pháp luật là quan trọng. Hệ thống pháp luật thể hiện sự nhân văn khi ghi nhận và bảo vệ đầy đủ quyền con người, duy trì tính nghiêm minh, khách quan và công bằng. Nói cách khác, pháp luật trong Nhà nước pháp quyền nhân nghĩa phải là pháp luật vì con người. 
//     Liên hệ với việc xây dựng nhà nước XHCN Việt Nam hiện nay:
//     Đại hội Đảng lần thứ XIII đã xác định mục tiêu trọng tâm là xây dựng và hoàn thiện Nhà nước pháp quyền XHCN Việt Nam, do nhân dân, vì nhân dân, và dưới sự lãnh đạo của Đảng. Để đạt được mục tiêu này, cần tăng cường hoàn thiện pháp luật và tổ chức thi hành pháp luật, nhằm nâng cao hiệu lực và hiệu quả của Nhà nước. Pháp luật không chỉ là công cụ quản lý xã hội của Nhà nước mà còn là công cụ để nhân dân tham gia làm chủ, kiểm tra và giám sát quyền lực nhà nước.
//     Cần tiếp tục hoàn thiện hệ thống pháp luật, tôn trọng và bảo vệ quyền con người, cũng như quyền và nghĩa vụ của công dân. Quyền lực nhà nước cần được phân công và phối hợp thực hiện một cách rõ ràng, đặc biệt là trong việc kiểm soát quyền lực giữa các cơ quan nhà nước. Chú trọng vào xây dựng đội ngũ cán bộ, công chức, đồng thời đẩy mạnh công tác dân chủ hoá trong việc quản lý cán bộ. Điều này bao gồm việc xác định rõ trách nhiệm, thẩm quyền của từng tổ chức và cấp độ, nhằm xây dựng đội ngũ cán bộ có phẩm chất đạo đức, chính trị vững vàng, và năng lực chuyên môn phù hợp để đáp ứng yêu cầu của giai đoạn mới.
//     `,
//   },
//   {
//     label:
//       "4.2tt: Phân tích tư tưởng Hồ Chí Minh về xây dựng nhà nước dân chủ.",
//     dapan: `Bản chất giai cấp của nhà nước
//     Nhà nước Việt Nam mới – Nhà nước Việt Nam Dân chủ Cộng hòa, theo quan điểm của Hồ Chí Minh, là một nhà nước mang bản chất giai cấp công nhân. Bản chất giai cấp công nhân của Nhà nước Việt Nam thể hiện trên mấy phương diện: Một là, Đảng Cộng sản Việt Nam giữ vị trí và vai trò cầm quyền, vận động quần chúng nhân dân thực hiện đường lối chính sách và thực thi pháp luật.
//     Hai là, bản chất giai cấp của Nhà nước Việt Nam thể hiện ở tính định hướng xã hội chủ nghĩa trong sự phát triển đất nước. Đưa đất nước đi lên chủ nghĩa xã hội và chủ nghĩa cộng sản là mục tiêu cách mạng nhất quán của Hồ Chí Minh. 
//     Ba là, bản chất giai cấp công nhân của Nhà nước thể hiện ở nguyên tắc tổ chức và hoạt động của nó là nguyên tắc tập trung dân chủ. Chủ tịch Hồ Chí Minh nhấn mạnh nhà nước phải tập trung thống nhất quyền lực để tất cả mọi quyền lực thuộc về nhân dân
//     Trong tư tưởng của Người, bản chất giai cấp công nhân của Nhà nước thống nhất với tính nhân dân và tính dân tộc, thể hiện cụ thể như sau:
//     Một là, Nhà nước Việt Nam ra đời là kết quả của cuộc đấu tranh lâu dài, gian khổ của rất nhiều thế hệ người Việt Nam, của toàn thể dân tộc. Từ giữa thế kỷ XIX, khi đất nước bị ngoại xâm, các tầng lớp nhân dân Việt Nam, hết thế hệ này đến thế hệ khác đã không quản hy sinh, xương máu chiến đấu cho độc lập, tự do của Tổ quốc. Nhà nước Việt Nam do vậy, không phải của riêng giai cấp, tầng lớp nào, mà là thuộc về nhân dân
//     Hai là, Nhà nước Việt Nam ngay từ khi ra đời đã xác định rõ và luôn kiên trì, nhất quán mục tiêu vì quyền lợi của nhân dân, lấy quyền lợi của dân tộc làm nền tảng. Bản chất của vấn đề này là ở chỗ, Hồ Chí Minh khẳng định quyền lợi cơ bản của giai cấp công nhân thống nhất với lợi ích của toàn dân tộc. 
//     Ba là, Nhà nước mới ở Việt Nam đã đảm đương nhiệm vụ mà toàn thể dân tộc giao phó là tổ chức nhân dân tiến hành các cuộc kháng chiến để bảo vệ nền độc lập, tự do của Tổ quốc, xây dựng một nước Việt Nam độc lập, dân chủ và giàu mạnh. 
//     Nhà nước của nhân dân
//     Theo quan điểm của Hồ Chí Minh, nhà nước của nhân dân là nhà nước mà mọi quyền lực đều thuộc về nhân dân. Nhân dân là chủ thể tối cao, thể hiện qua hình thức dân chủ trực tiếp và gián tiếp. Cán bộ nhà nước là "công bộc" phục vụ nhân dân. Hồ Chí Minh kịch liệt phê phán những cán bộ nhà nước thoái hóa, biến chất, từ chỗ là công bộc của dân đã trở thành “quan cách mạng”, đứng trên nhân dân, coi khinh nhân dân, “cậy thế” với dân, “quên rằng dân bầu mình ra là để làm việc cho dân”.
//     Hồ Chí Minh nhấn mạnh quyền của nhân dân trong việc kiểm soát, phê bình, có quyền bãi miễn những đại biểu mà họ đã bầu ra và có quyền giải tán những thiết chế quyền lực mà họ đã lập nên, đồng thời khẳng định vai trò của luật pháp là công cụ thực thi quyền lực của nhân dân và kiểm soát quyền lực nhà nước. 
//     Nhà nước do nhân dân
//     Trong tư tưởng của Hồ Chí Minh, nhà nước do nhân dân trước hết là nhà nước được xây dựng sau chiến thắng cách mạng dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Dân chủ được thể hiện qua việc nhân dân "cử ra" và "tổ chức nên" nhà nước, tuân theo các trình tự dân chủ như quyền bầu cử và phúc quyết. Nhà nước do nhân dân còn có nghĩa "Dân làm chủ" đồng nghĩa với việc nhân dân không chỉ có quyền lợi mà còn có nghĩa vụ làm tròn bổn phận công dân. Theo quan điểm của Hồ Chí Minh, “nhân dân có quyền lợi làm chủ, thì phải có nghĩa vụ làm tròn bổn phận công dân, giữ đúng đạo đức công dân” Trong nhà nước dân chủ, Hồ Chí Minh nhấn mạnh vai trò của nhà nước trong việc tạo điều kiện cho nhân dân thực hiện quyền và nghĩa vụ của mình. Việc giáo dục nhân dân và khuyến khích họ phấn đấu có đủ năng lực làm chủ cũng được đặt ra để thúc đẩy tư tưởng dân chủ triệt để. 
//     Nhà nước vì nhân dân
//     Nhà nước phục vụ lợi ích và nguyện vọng của nhân dân theo tư tưởng của Hồ Chí Minh, không được hưởng đặc quyền đặc lợi và cần phải hoạt động trong sạch và liêm chính. Hồ Chí Minh là một vị Chủ tịch vì dân, đề cao nguyên tắc rằng cơ quan nhà nước và cán bộ nhà nước đều phải phục vụ cho nhân dân. Người nhấn mạnh rằng mọi công việc của Chính phủ phải hướng tới một mục đích duy nhất là đặt quyền lợi của nhân dân lên hàng đầu. Người nhấn mạnh tầm quan trọng của việc được lòng dân và tạo ra một tinh thần chí công vô tư trong cán bộ nhà nước.
    
//     `,
//   },
//   {
//     label:
//       "1.1tt: Phân tích tinh hoa văn hóa Phương Đông trong việc hình thành Tư tưởng Hồ Chí Minh, từ đó rút ra giá trị của tinh hoa ấy trong giai đoạn hiện nay?",
//     dapan: `a. Phân tích tinh hoa văn hóa Phương Đông trong việc hình thành Tư tưởng Hồ Chí Minh
//     Chủ tịch Hồ Chí Minh đã tiếp thu và kế thừa các tư tưởng tiến bộ của văn hóa phương Đông một cách có chọn lọc. Cụ thể :
//     + Nho giáo: Hồ Chí Minh đã kế thừa và phát triển những mặt tích cực của Nho giáo như: tư tưởng nhân trị và đức trị để quản lý xã hội, tinh thần đạo đức của Nho giáo trong việc tu dưỡng rèn luyện đạo đức con người v.v. Tuy nhiên, Hồ Chí Minh cũng phê phán các mặt tiêu cực của Nho giáo như: bảo vệ chế độ phong kiến, trọng nam khinh nữ, coi trọng thi cử; suy nghĩ bảo thủ, một chiều; khinh thường công việc lao động xã hội, chỉ đề cao nghề đọc sách. . .
//     Người tiếp thu thông qua việc thường xuyên sử dụng các mệnh đề để đưa ra vấn đề về việc tu dưỡng đạo đức cá nhân (thể hiện xuyên suốt trong các tác phẩm “Đường Cách mệnh” (1927), “Sửa đổi lối làm việc” (1947), “Cần, kiệm, liêm, chính” (1949) cho đến “Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân” (1969) và bản Di chúc của Người (1969)).
//     + Phật giáo : Hồ Chí Minh kế thừa và phát triển tư tưởng từ bi bác ái, cứu khổ cứu nạn, thương người như thể thương thân, đề cao nếp sống đạo đức, trong sạch, chăm làm điều thiện, v.v.. Những quan điểm này được HCM vận động và sáng tạo để đoàn kết đồng bào theo đạo Phật, đoàn kết toàn dân vì 1 nước Việt Nam hòa bình thống nhất, độc lập dân chủ giàu mạnh. Ngoài ra, người cũng chỉ ra những mặt hạn chế tiêu cực của Phật giáo như tư tưởng giải thoát con người thụ động.
//     + Lão giáo(Đạo giáo): Hồ Chí Minh chú ý kế thừa, phát triển tư tưởng của Lão Tử, khuyên con người nên sống gắn bó với thiên nhiên, hòa đồng với thiên nhiên, hơn nữa phải biết bảo vệ môi trường sống.
//     Người khuyên cán bộ, đảng viên thực hiện cần kiệm liêm chính, chí công vô tư; hàng động theo đạo lý với ý nghĩa là hành động đúng với quy luật tự nhiên, xã hội.
//     + Chủ nghĩa Tam dân của Tôn Trung Sơn 
//     Trên hành trình ra đi tìm đường cứu nước, HCM còn bắt gặp và tiếp thu Chủ nghĩa tam dân (dân tộc độc lập, dân quyền tự do, dân sinh hạnh phúc.) Người đã thấy trong đó nhiều tư tưởng tiến bộ, tích cực và có thể vận dụng vào điều kiện cụ thể của cách mạng VN, đó là quan điểm về dân tộc, dân quyền và dân sinh.
//     Kết luận:  Cách thức tiếp thu của Hồ Chí Minh là tiếp thu trên tinh thần biện chứng, có chọn lọc, không rập khuôn máy móc, vận dụng sáng tạo và phát triển vào điều kiện cụ thể của Việt Nam. ƯU điểm được Hồ Chí Minh tiếp thu, cương quyết loại bỏ nhược điểm ra khỏi tư tưởng của mình, đồng thời những điểm chưa phù hợp được HCM cải biến cho phù hợp.
//     `,
//   },
//   {
//     label:
//       "1.2tt: Phân tích tinh hoa văn hóa Phương Tây trong việc hình thành Tư tưởng Hồ Chí Minh, Từ đó, liên hệ với việc tiếp thu giá trị văn hóa phương Tây trong giai đoạn hiện nay",
//     dapan: `a) phân tích tinh hoa văn hóa phương tây trong việc hình thành tư tưởng hồ chí minh
//     - Trước khi ra đi tìm đường cứu nước, HCM đã tiếp xúc và chịu ảnh hưởng bởi văn hóa Pháp khi người học tại trường tiểu học Vinh, Người đã bắt đầu chú ý đến lý tưởng Tự do - Bình đẳng - Bác ái của Cách mạng Pháp (1789), phát triển những quan điểm về dân chủ dân quyền trong bản Tuyên ngôn độc lập của Hoa Kỳ (1776). Sau này người còn tiếp thu tư tưởng nhân quyền, dân quyền trong bản Tuyển ngôn Nhân quyền và Dân quyền của Pháp (1791)
//     - Trong thời gian HCM sống và hoạt động ở phương Tây, Người đã tiếp thu tư tưởng tự do, bình đẳng của các nhà khai sáng Pháp như : Voltaire, Rousso,.. Hồ Chí Minh còn tham gia các hoạt động chính trị, nghiên cứu lý luận , kinh tế, văn hóa của các nước phương Tây. Đồng thời phê phán sự khác nhau giữa những hình ảnh, giá trị đẹp đẽ của tư tưởng và yếu tố thực tế, mang tính thời sự lúc bấy giờ. Những kẻ mệnh danh là người phất cao lá cờ “Tự do - Bình đẳng – Bác ái” lại đang làm trái ngược lý tưởng đó ở khắp nơi trên đất Đông Dương. Người tiếp thu tư tưởng, giá trị dân chủ tư sản qua thực tế cuộc sống, điều đó giúp Người có điều kiện hiểu rõ bản chất của bọn thực dân với cái gọi là “khai hóa thuộc địa”
//     - Tư tưởng Thiên chúa giáo: tiếp thu lòng nhân ái và đức hy sinh. Hồ Chí Minh đã kế thừa, đề cao những mặt tốt, vận dụng sáng tạo những mặt tốt ấy để làm phong phú thêm tư tưởng của Người về đại đoàn kết cả trong quốc gia dân tộc lẫn quốc tế. Động viên đồng bào Thiên chúa giáo tham gia khối để tăng thêm lực lượng cho cách mạng; Vạch mặt bọn thực dân, đế quốc xâm lược lợi dụng tôn giáo, giả danh Chúa vào mục đích, âm mưu “chia để trị”: gây thù hằn giữa cộng sản với tôn giáo... để phục vụ cho mục tiêu xâm lược và chống cộng sản của chúng. Đạo thiên chúa nói riêng và tôn giáo nói chung cùng đồng hành với dân tộc, với cách mạng nước ta.
//     - Trong quá trình hình thành phát triển hoàn thiện tư tưởng của mình về con đường CM VN, HCM đã biết làm giàu trí tuệ của mình bằng việc tiếp thu những giá trị văn hóa nhân loại (văn hóa phương Tây),tiếp thu 1 cách có chọn lọc:hay thì tiếp thu, xấu thì loại bỏ, chính điều này đã giúp người đến được với ánh sáng của chủ nghĩa Mác-Lênin. Tìm ra con đường giải phóng cho dân tộc Việt Nam. Đó là con đường Cách Mạng vô sản.        
//     `,
//   },
//   {
//     label:
//       "7  tt: Phân tích nguyên tắc xây dựng đạo đức cách mạng và liên hệ với việc rèn luyện đạo đức của sinh viên hiện nay.",
//     dapan: `a. Phân tích quan điểm của Hồ Chí Minh về các nguyên tắc xây dựng đạo đức cách mạng
//     Chủ tịch Hồ Chí Minh luôn đề cao vai trò đạo đức của con người “có tài mà không có đức thì là người vô dụng”. Người luôn nhắc nhở ta phải chú ý tu dưỡng đạo đức bản thân. Theo Hồ Chí Minh muốn thực hiện thành công sự nghiệp cách mạng xã hội chủ nghĩa- cuộc cách mạng sâu sắc nhất triệt để nhất toàn diện nhất chúng ta phải đem hết tinh thần tu dưỡng rèn luyện đạo đức cách mạng.
//     1/ Nói phải đi đôi với làm, nêu gương đạo đức cá nhân
//     Hồ Chí Minh coi nguyên tắc nói đi đôi với làm là nguyên tắc quan trọng bậc nhất trong xây dựng nền đạo đức mới. Nguyên tắc cơ bản này là sự thống nhất giữa lý luận thực tiễn. Hồ Chí Minh đề cao việc nêu gương đạo đức. Sự gương mẫu của cán bộ đảng viên không chỉ là cách thức để giáo dục đạo đức cho quần chúng mà còn là một phương pháp để tự giáo dục bản thân.
//     Như vậy, một nền đạo đức mới chỉ được xây dựng khi những chuẩn mực đạo đức trở thành hành vi đạo đức hằng ngày của mỗi người và của toàn xã hội, mà những tấm gương đạo đức của những người tiêu biểu có ý nghĩa thúc đẩy cho quá trình đó.
//     2/ Xây đi đôi với chống
//     Hồ Chí Minh cho rằng, đây là đòi hỏi của nền đạo đức mới, chiến đấu vì mục tiêu của sự nghiệp cách mạng: Xây tức là xây dựng, bồi dưỡng các giá trị, các chuẩn mực đạo đức mới; Chống là chống các biểu hiện, hành vi vô đạo đức, suy thoái đạo đức.
//     Để thực hiện xây và chống có hiệu quả, theo Hồ Chí Minh phải tuyên truyền, vận động hình thành phong trào quần chúng rộng rãi đấu tranh cho sự lành mạnh, trong sạch về đạo đức, thôi thúc trách nhiệm đạo đức cá nhân để mọi người phấn đấu tự bồi dưỡng và nâng cao phẩm chất đạo đức cách mạng; phải chú trọng kết hợp giáo dục đạo đức với tăng cường tính nghiêm minh của pháp luật.
//     3/ Tu dưỡng đạo đức suốt đời
//     Theo Người, đó là một quá trình gian khổ, trường kỳ. Một nền đạo đức mới chỉ có thể được xây dựng dựa trên cơ sở tự giác tu dưỡng đạo đức của mỗi người thông qua các hoạt động thực tiễn: Nhìn thẳng vào mình, không tự lừa dối; thấy rõ điểm chưa tốt của mình để khắc phục; 
//     Người nhấn mạnh mỗi người cần thường xuyên được giáo dục và tự giáo dục về mặt đạo đức. Mỗi người cần luôn bền bỉ, cố gắng. Có rèn luyện như vậy, con người mới có được những phẩm chất tốt đẹp và những phẩm chất ấy ngày được bồi đắp, nâng cao.
//     `,
//   },
//   {
//     label:
//       "3 tt: Tại sao Đảng Cộng Sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm nền tảng theo Hồ Chí Minh",
//     dapan: `a. Đảng cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm nền tảng theo Hồ Chí Minh
//     Vì chủ nghĩa Mác-Lênin là nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng. Nói về tầm quan trọng của lí luận, trong tác phẩm Đường Kách mệnh (1927), Hồ Chí Minh khẳng định: "Đảng muốn vững thì phải có chủ nghĩa làm cốt, trong Đảng ai cũng phải hiểu, ai cũng phải theo chủ nghĩa ấy. Đảng mà không có có chủ nghĩa cũng như người không có trí khôn. Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mệnh nhất là chủ nghĩa Lênin." Hồ Chí Minh luôn luôn nhấn mạnh phải trung thành với chủ nghĩa Mác-Lênin nhưng đồng thời phải biết sáng tạo, vận dụng cho phù hợp với điều kiện, hoàn cảnh, từng lúc từng nơi, không được phép giáo điều.
//     Đối với cơ quan và tổ chức Đảng, Nhà nước, Hồ Chí Minh yêu cầu:
//     + Chủ nghĩa Mác – Lênin là kim chỉ nam cho hành động chứ không phải là kinh thánh. Phải nắm vững phép duy vật biện chứng và duy vật lịch sử, phải căn cứ vào thực tiễn để xác định đúng quan điểm, đường lối chính sách, pháp luật; phải vận dụng sáng tạo, không máy móc, giáo điều, rập khuôn.
//     + Phải tìm các giải pháp, biện pháp thực hiện, phải có quyết tâm, "đường lối 1, biện pháp phải 10, quyết tâm phải 20".
//     + Phải tổng kết kinh nghiệm của Đảng minh, các Đảng anh em, tổng kết thực tiễn để rút ra những bài học thành công, chưa thành công.
//     + Phải tổ chức việc học tập, bồi dưỡng lý luận cho cán bộ, đảng viên phủ hợp, đồng thời phải tuyên truyền vận động quần chúng thực hiện đường lối, chính sách.
//     Đối với cán bộ, đảng viên, Hồ Chí Minh yêu cầu:
//     + Học lý luận, hiểu lý luận là phải vận dụng vào thực tiễn, "học mà không hành là cái hòm đựng sách”, “để lòe thiên hạ”, để ra vẻ ta đây”. Phải chống các biểu hiện kém lý luận, coi thường lý luận, lý luận suông
//     + Phải tin tưởng nhất trí với quan điểm, đường lối của Đảng, giữ vững kỷ luật Đảng và kỷ luật cơ quan đoàn thể.
//     + Phải lấy hiệu quả công tác, hoàn thành nhiệm vụ làm thước đo sự hiểu và vận dụng chủ nghĩa Mác – Lênin; công việc bê trễ thì không thể nói là hiểu chủ nghĩa Mác – Lênin được.
//     + Phải coi việc thường xuyên học tập lý luận là nhiệm vụ và tiêu chuẩn đảng viên.
//     + Phải sống với nhau có tình có nghĩa. 
//     `,
//   },
//   {
//     label:
//       "2  tt: Tư tưởng Hồ Chí Minh về độc lập dân tộc.",
//     dapan: `1. Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc:
//     - Cái khát khao lớn nhất của nhân dân mất nước là độc lập cho tổ quốc, tự do cho nhân dân. Đây cũng là một giá trị tinh thần thiêng liêng, bất hủ của dân tộc mà Hồ Chí Minh là hiện thân của tinh thần ấy, là khát vọng, là mong muốn lớn nhất của Người . Sinh thời, chủ tịch Hồ Chí Minh đã từng nói : “ Trên đời ngàn vạn điều cay đắng, cay đắng chi bằng mất tự do”
//     - Qua tiếp xúc với bản Tuyên ngôn độc lập của Hoa Kỳ vầ Tuyên ngôn Nhân quyền và Dân quyền của cách mạng tư sản Pháp, Người đã khái quát, nêu lên chân lý về quyền cơ bản của các dân tộc : “ Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do ”
//     - Năm 1919, vận dụng nguyên tắc về quyền tự quyết của các dân tộc, Người đã gửi bản Yêu sách của nhân dân An Nam đến hội nghị Véc- xây đòi quyền bình đẳng tự do, tuy không được chấp thuận nhưng qua đó cho thấy tư tưởng về độc lập tự do đã hình thành 
//     - Cách mạng Tháng Tám thành công đã thể hiện ý chí của HCM đã được biến thành hiện thực : “Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy”. Trong các bức thư và điện văn gửi tới Liên hợp quốc và Chính phủ các nước vào thời gian đó, Người đã trịnh trọng tuyên bố rằng : “Nhân dân chúng tôi thành thật mong muốn hòa bình. Nhưng nhân dân chúng tôi cũng kiên quyết chiến đấu đến cùng để bảo vệ quyền thiêng liêng nhất : toàn vẹn lãnh thổ cho Tổ quốc và độc lập cho đất nước”
//     - HCM khẳng định: “ Không! Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ ” - trong lời kêu gọi toàn quốc kháng chiến 1946 đã lại một lần nữa thể hiện quyết tâm bảo vệ độc lập chủ quyền dân tộc
//     Tóm lại, “ Không có gì quý hơn độc lập tự do ” không chỉ là tư tưởng mà còn là lẽ sống, là học thuyết của HCM .Đây chính là lý do chiến đấu là nguồn sức mạnh làm nên chiến thắng của dân tộc Việt Nam, đồng thời cũng là nguồn động viên đối với tất cả các dân tộc bị áp bức trên thế giới.
//     2. Độc lập dân tộc phải gắn liền tự do, cơm no, áo ấm và hạnh phúc của nhân dân:
//     - Khát khao lớn nhất của dân tộc Việt Nam là được độc lập, nhân dân được hạnh phúc tự do. Vì vậy, ngay sau khi giành được độc lập HCM đã tiếp tục đấu tranh vì mục đích cơm no, áo ấm của nhân dân : “ Nước độc lập mà dân không được hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì” “ Chúng ta tranh được tự do độc lập rồi mà dân cứ chết đói, chết rét thì tự do độc lập cũng không làm gì.”
//     - Tóm lại, suốt cuộc đời hoạt động cách mạng của HCM, Người luôn coi độc lập tự do gắn liền với cơm no áo ấm của Nhân dân : “ Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành. ”
//     3. Độc lập dân tộc phải là nền độc lập thật sự, hoàn toàn và triệt để:
//     - Hồ Chí Minh khẳng định độc lập dân tộc phải là nền độc lập thật sự, hoàn toàn triệt để trên tất cả các lĩnh vực, kinh tế, chính trị, quân sự, ngoại giao . Người nói : độc lập mà không có quân đội riêng, ngoại giao riêng, nhân dân Việt Nam quyết không thèm thứ thống nhất và độc lập giả hiệu ấy.
//     4. Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ:
//     Kẻ thù luôn thực hiện âm mưu xâm lược và chia cắt đất nước ta để dễ bề cai trị, khát vọng của nhân dân Việt Nam là thống nhất đất nước. Trong Di chúc, Người cũng đã thể hiện niềm tin tuyệt đối vào sự thắng lợi của Cách mạng, vào sự nghiệp thống nhất đất nước. “ Dù khó khăn gian khổ đến mấy, nhân dân ta nhất định sẽ hoàn toàn thắng lợi. Đế quốc Mỹ nhất định sẽ phải cút khỏi nước ta. Tổ quốc ta nhất định sẽ thống nhất . Đồng bào Nam Bắc nhất định sẽ sum họp một nhà. ”    
//     `,
//   },
//   {
//     label:
//       "6  tt: Tư tưởng Hồ Chí Minh về vai trò của văn hóa.",
//     dapan: `a. Quan điểm của Hồ Chí Minh về vai trò của văn hóa
//     Văn hóa là mục tiêu, động lực của sự nghiệp cách mạng.
//     Mục tiêu của Hồ Chí Minh về văn hóa cũng giống như mục tiêu của chủ tịch Hồ Chí Minh, của toàn thể dân tộc Việt Nam: Đó là độc lập dân tộc và CNXH. Tuy nhiên trên lĩnh vực văn hóa, cụ thể hóa ra thành:
//     + Quyền được sống, quyền sung sướng, quyền tự do và quyền mưu cầu hạnh phúc.
//     + Đó là khát vọng của nhân dân về các giá trị: Chân, thiện, mỹ
//     + Đó là xã hội dân chủ, công bằng, văn minh, ai cũng có cơm ăn, áo mặc,. . .
//     + Đời sống vật chất và tinh thần của nhân dân được nâng cao, con người có điều kiện phát triển toàn diện.
//     Động lực: Văn hóa là động lực cho sự thúc đẩy của kinh tế, chính trị và xã hội. Ở góc độ:
//     + Văn hóa chính trị: Soi đường, mở đường cho quốc dân đi, lãnh đạo nhân dân thực hiện độc lập, tự chủ.
//     + Văn hóa văn nghệ: góp phần nâng cao lòng yêu nước, lý tưởng, tình cảm cách mạng.
//     + Văn hóa giáo dục: Diệt giặc dốt, xóa mù chữ, giúp con người hiểu được các quy luật của xã hội.
//     + Văn hóa đạo đức, lối sống: Nâng cao phẩm chất, phong cách lành mạnh hướng đến chân, thiện, mỹ.
//     Văn hóa là một mặt trận.
//     Mặt trận văn hóa là cuộc đấu tranh cách mạng trên lĩnh vực văn hóa. Đấu tranh trên các lĩnh vực: tư tưởng, đạo đức, lối sống,. . . của các hoạt động văn nghệ, báo chí, đặc biệt là định hướng giá trị Chân, Thiện, Mỹ. Anh em nghệ sĩ là chiến sĩ trên mặt trận – có nhiệm vụ phụng sự tổ quốc và nhân dân.
//     Văn hóa phục vụ quần chúng nhân dân
//     Mọi hoạt động của văn hóa phải trở về cuộc sống thực tại của quần chúng, phản ánh tư tưởng và khát vọng của quần chúng, Văn hóa phải miêu tả cho hay, cho thật, cho hùng hồn. Phải trả lời được câu hỏi. Viết cho ai? Viết vì mục đích gì? Viết như thế nào?. Nói ít, nói cho chắc chắn, thấm thía. . .
//     `,
//   },
//   {
//     label: "5  tt: Vai trò của đại đoàn kết dân tộc",
//     dapan: `a)Đại đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược, quyết định thành công của CM:
//     - Theo HCM, đại đoàn kết dân tộc là chiến lược cơ bản nhất quán lâu dài của cách mạng VN, người nói: “Sử dạy cho ta bài học này: lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại, lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn” như vậy HCM đã đúc rút từ quá trình đấu tranh dựng nước và giữ nước hình thành tư tưởng đại đoàn kết dân tộc của Người.
//     - HCM khẳng định: Trong các giai đoạn cách mạng, trước những yêu cầu và nhiệm vụ khác nhau, chính sách và phương pháp tập hợp khối đại đoàn kết cần phải điều chỉnh cho phù hợp song không bao giờ được thay đổi chủ trương đại đoàn kết toàn dân tộc, vì đó là nhân tố quyết định thành bại của cách mạng.  HCM đã khái quát một số luận điểm mang tính chân lý như “đoàn kết là sức mạnh, là then chốt của thành công” , Người tổng kết “ đoàn kết đoàn kết đại đoàn kết. Thành công thành công đại thành công”.
//     b, Đoàn kết dân tộc là mục tiêu, nhiệm vụ hàng đầu của CMVN
//     - Trong tư tưởng HCM, đại đoàn kết không chỉ là khẩu hiệu chiến lược mà còn được xác định là nhiệm vụ hàng đầu, nó phải được quán triệt trong tất cả mọi đường lối chủ trương chính sách của Đảng cho đến các hoạt động của Đảng. Ngày 3/3/1951, trong buổi ra mắt Đảng Lao động VN, HCM tuyên bố mục đích của Đảng Lao đông VN có thể gồm trong 8 chữ là “ Đoàn kết toàn dân, phụng sự tổ quốc”.
//     - Cách mạng là sự nghiệp của quần chúng do quần chúng và vì quần chúng. Đại đoàn kết là yêu cầu khách quan của sự nghiệp CM. Đảng có sứ mệnh thức tỉnh, tập hợp quần chúng, tạo thành sức mạnh tổng hợp trong cuộc đấu tranh vì độc lập của dân tộc, tự do cho nhân dân và hạnh phúc cho con người
//     `,
//   },
// ];

// const ktct = [
//   {
//     label: "Câu 1: Nền sản xuất hàng hóa",
//     dapan: `- Sản xuất hàng hóa là kiểu tổ chức kinh tế mà ở đó sản phẩm được sản xuất ra để thỏa mãn nhu cầu của người khác thông qua trao đổi, mua bán.  

// - Có hai điều kiện để nền sản xuất hàng hóa tồn tại và phát triển. Thứ nhất, điều kiện cần: phân công lao động xã hội đạt trình độ nhất định. Thứ hai, điều kiện đủ: tồn tại sự tách biệt tương đối về kinh tế giữa các nhà sản xuất. 

// - Mâu thuẫn cơ bản của nền sản xuất hàng là mâu thuẫn giữa tính chất tư nhân và tính chất xã hội. Trong đó, tính chất tư nhân là việc sản xuất ra cái gì là quyết định tư nhân của nhà sản xuất, tính chất xã hội là việc sản phẩm được sản xuất ra để đáp ứng nhu cầu tiêu dùng của xã hội và nhiều nhà sản xuất liên kết để tạo ra một sản phẩm. 

// - Các ưu thế của nền sản xuất hàng hóa bao gồm: khai thác hiệu quả lợi thế so sánh của từng vùng, từng địa phương, từng quốc gia; tạo ra những nhà sản xuất năng động, linh hoạt, có chiến lược dài hạn, cải tiến kỹ thuật, tổ chức sản xuất hợp lý, nâng cao năng suất lao động và chất lượng sản phẩm; thúc đẩy việc nghiên cứu và ứng dụng các thành tựu nghiên cứu khoa học vào sản xuất; thúc đẩy giao lưu kinh tế, giao lưu văn hóa, tạo điều kiện nâng cao, cải thiện đời sống vật chất và tinh thần của xã hội `,
//   },
//   {
//     label:
//       "Câu 2: Hai thuộc tính của hàng hóa và các nhân tố ảnh hưởng đến lượng giá trị hàng hóa",
//     dapan: `- Hàng hóa là sản phẩm của lao động, được sản xuất ra nhằm thỏa mãn nhu cầu nào đó của con người và nhằm mục đích trao đổi, mua bán trên thị trường 

// - Hàng hóa có hai thuộc tính bao gồm giá trị sử dụng và giá trị. 

// + Giá trị sử dụng của hàng hóa là công dụng, tính năng của hàng hóa thỏa mãn nhu cầu tiêu dùng của con người. Giá trị sử dụng là phạm trù vĩnh viễn, tồn tại cùng với xã hội con người; nó chỉ được thể hiện trong tiêu dùng. Một hàng hóa có thể có một hoặc nhiều công dụng. Trong nền sản xuất hàng hóa, hàng hóa có giá trị sử dụng cho xã hội và mang trên mình một giá trị trao đổi. 

// + Giá trị của hàng hóa là hao phí lao động xã hội của người sản xuất kết tinh trong hàng hóa đó. Giá trị là phạm trù lịch sử, chỉ tồn tại khi có sự trao đổi hàng hóa; được thể hiện trong lưu thông và là nội dung bên trong của hàng hóa. Giá cả là hình thức biểu hiện ra bên ngoài bằng tiền của giá trị. 

// - Lượng giá trị hàng hóa là lượng hao phí lao động xã hội để sản xuất ra hàng hóa đó. Các yếu tố ảnh hưởng tới lượng giá trị hàng hóa bao gồm: năng suất lao động, cường độ lao động và mức độ phức tạp của lao động. Trong đó: năng suất lao động tỉ lệ nghịch với giá trị của một đơn vị sản phẩm, không ảnh hưởng tới giá trị tổng sản phẩm; cường độ lao động ảnh hưởng tới giá trị tổng sản phẩm, không ảnh hưởng tới giá trị của một đơn vị sản phẩm; mức độ phức tạp lao động bao gồm lao động đơn giản và lao động phức tạp, trong đó lao động phức tạp tạo ra lượng giá trị gấp bội lần lao động đơn giản. `,
//   },
//   {
//     label:
//       "Câu 3: Nguồn gốc, bản chất và các chức năng của tiền ",
//     dapan: `- Trong quá trình trao đổi hàng hóa, con người cần cần một hình thái làm đơn vị đo lường của hàng hóa. Từ đó, tiền tệ ra đời. 

// - Trong lịch sử của tiền tệ đã có 4 hình thái đo lường của tiền tệ, bao gồm: 

// + Hình thái giản đơn của giá trị là hình thái đo lường giá trị dựa trên sự trao đổi đơn nhất của một loại hàng hóa này lấy một loại hàng hóa khác. 

// + Hình thái mở rộng của giá trị là hình thái đo lường giá trị dựa trên sự trao đổi thường xuyên một loại hàng hóa này lấy nhiều loại hàng hóa khác. 

// + Hình thái chung của giá trị là hình thái đo lường giá trị dựa trên việc cộng đồng chọn ra một loại hàng hóa làm vật ngang giá cung cho mọi hàng hóa khác. 

// + Hình thái tiền tệ là hình thái đo lường giá trị dựa trên việc toàn xã hội thống nhất chọn lấy một loại hàng hóa đặc biệt là vật ngang giá duy nhất cho mọi hàng hóa khác, vàng và bạc được cả xã hội tín nhiệm. 

// - Bản chất của tiền là hàng hóa đặc biệt, được xã hội chọn làm vật ngang giá chung duy nhất, dùng để đo lường giá trị của mọi hàng hóa và làm phương tiện trung gian trao đổi. Vàng và bạc được cả xã hội coi là tiền thực sự vì giá trị kinh tế cao, giá trị sử dụng đa dạng, có thể dát mỏng hoặc đúc thành thỏi cũng như khó bị oxi hóa hoặc ăn mòn. 

// - Chức năng của tiền tệ bao gồm: 

// + Chức năng thước đo giá trị 

// Đây là chức năng gốc, gắn liền với sự ra đời của tiền tệ. Chức năng này thể hiện ở việc xã hội dùng tiền để làm đơn vị đo lường giá trị của mọi loại hàng hóa khác. Vì tiền pháp định bị mất giá do lạm phát nên không phải là đơn vị đo lường ổn định. Do đó, khi đo lường giá trị tài sản giữa các thời kỳ, cần quy đổi ra VÀNG, BẠC. 

// + Chức năng phương tiện cất trữ, tiền cất trữ phải là vàng, bạc. 

// Chức năng này thể hiện ở việc xã hội đưa tiền ra khỏi lưu thông, cho vào cất trữ, nhằm duy trì giá trị tài sản. Tiền dùng để cất trữ phải là VÀNG, BẠC, không nên cất trữ tiền pháp định bởi vì chúng đều bị mất giá do lạm phát. 

// + Chức năng phương tiện lưu thông. 

// Chức năng này thể hiện ở việc xã hội dùng tiền tệ làm phương tiện trung gian trong trao đổi theo công thức: HÀNG – TIỀN – HÀNG. Vì tiền tệ chỉ là phương tiện trung gian trao đổi, nên việc dùng VÀNG, BẠC để lưu thông sẽ gây ra lãng phí, bất tiện, nhà nước khó kiểm soát tình hình kinh tế. Vì vậy, nhà nước phát hành loại chứng chỉ thay cho Vàng, bạc để thực hiện chức năng phương tiện lưu thông. 

// + Chức năng phương tiện thanh toán. 

// Chức năng này thể hiện ở việc xã hội dùng tiền để thực hiện các nghĩa vụ kinh tế: ứng tiền trước, trả nợ, nộp thuế, trả tiền mua chịu hàng… Điều này làm xuất hiện đa dạng các phương thức thanh toán: tiền mặt, séc, chuyển khoản, thẻ tín dụng… nhưng cũng tiềm ẩn khả năng khủng hoảng kinh tế khi 1 khâu thanh toán đến hạn không được thực hiện 

// + Chức năng tiền tệ thế giới. 

// Chức năng này thể hiện ở việc xã hội dùng tiền để thanh toán quốc tế. Đến thế kỷ XIX, tiền để thanh toán quốc tế vẫn là vàng, bạc. Hiện nay, người ta dùng hệ thống tỷ giá hối đoái quy đổi các đồng tiền để thanh toán. `,
//   },
//   {
//     label: "Câu 4: Vì sao tiền là hàng hóa đặc biệt ",
//     dapan: `- Bản chất của tiền tệ: 

// Là một loại hàng hóa đặc biệt 

// Được xã hội chọn làm vật ngang giá duy nhất 

// Dùng để đo lường giá trị hàng hóa và làm phương tiện trung gian trao đổi. 

// Con người thường dùng vàng, bạc làm vật ngang giá trong trao đổi vì chúng có giá trị cao và có giá trị sử dụng đa dạng. 

// - Tiền là một hàng hóa do lao động của con người tạo ra. Tiền phản ánh lao động xã hội và mối quan hệ giữa những người sản xuất và trao đổi hàng hóa. 

// Thứ nhất, trước khi tiền tệ được đem ra là vật ngang giá chung duy nhất cho mọi loại hàng hóa thì nó cũng là một loại hàng hóa, cũng có GTSD và GT

// Thứ hai, khi lực lượng sản xuất và phân công lao động xã hội phát triển đến một trình độ nhất định, sản xuất trao đổi trở nên thường xuyên và thị trường mở rộng thì nhu cầu của xã hội là cần có một vật ngang giá chung duy nhất để thuận tiện cho việc trao đổi, mua bán hàng hóa, vì vậy mà một hoặc một số loại hàng hóa được tách ra để làm tiền tệ. 

// Tiền tệ có những chức năng đặc biệt mà không hàng hóa nào có được: Thước đo giá trị; Phương tiện lưu thông; Phương tiện cất trữ; Phương tiện thanh toán; Tiền thế giới 

// Tiền tệ là một thứ hàng hoá đặc biệt, được tách ra khỏi thế giới hàng hoá, dùng để đo lường và biểu hiện giá trị của tất cả các loại hàng hoá khác. Nó trực tiếp thể hiện lao động xã hội và biểu hiện quan hệ sản xuất giữa những người sản xuất hàng hóa. `,
//   },
//   {
//     label:
//       "Câu 5: Quy luật giá trị - quy luật cơ bản của sản xuất hàng hóa ",
//     dapan: `- Nội dung quy luật giá trị:  

// Sản xuất và lưu thông đều dựa trên cơ sở là hao phí lao động xã hội để sản xuất hàng hóa, tức là dựa trên giá trị.  

// Cụ thể, trong sản xuất, nhà sản xuất phải làm cho hao phí lao động cá biệt nhỏ hơn hoặc bằng hao phí lao động xã hội, tức giá trị sản phẩm cá biệt nhỏ hơn hoặc bằng giá trị thị trường.  

// Trong lưu thông, giá cả vận động xoay quanh giá trị, hay giá trị quyết định giá cả. Giá trị quyết định giá cả trong dài hạn	 

// - Cung – cầu có tác động tới giá cả - giá trị.  

// Cụ thể, khi cung nhỏ hơn cầu, giá cả tăng, giả cả lớn hơn giá trị, lợi nhuận tăng dẫn đến thu hút đầu tư vào ngành, dẫn đến cung tăng và cạnh tranh tăng, kéo theo giá cả giảm, cân bằng trở lại với giá trị.  

// Khi cung lớn hơn cầu, giá cả giảm, giá cả nhở hơn giá trị, dẫn đến lợi nhuận giảm, xu thế doanh nghiệp rời bỏ ngành, dẫn đến cung tăng và cạnh tranh tăng, kéo theo giá cả tăng, cân bằng trở lại với giá trị.  

// Khi cung bằng cầu, giá cả ổn định, cân bằng với giá trị. Cung – cầu xác định giá cả trong ngắn hạn.	 

// - uy luật giá trị có tác dụng  

// điều tiết sản xuất và lưu thông,  

// kích thích cải tiến kĩ thuật, phát triển lực lượng sản xuất,  

// phân hóa những nhà sản xuất, kinh doanh, làm gia tăng khoảng cách giai tầng. 

// Làm xuất hiện quan hệ sản xuất TBCN, là cơ sở ra đời của CNTB `,
//   },
//   {
//     label:
//       "Câu 6: Cơ chế thị trường và vai trò của các chủ thể tham gia thị trường ",
//     dapan: `Thị trường là tổng hòa các mối quan hệ liên quan đến lĩnh vực mua bán, trao đổi được hình thành trong điều kiện lịch sử, kinh tế, chính trị, xã hội nhất định. Thị trường bao hàm các quan hệ giữa các chủ thể tham gia trên thị trường, quan hệ cung – cầu, cạnh tranh, hàng hóa – tiền tệ, giá trị - giá cả,... 

// Cơ chế thị trường là một hệ thống tổ chức và hoạt động của các quy luật kinh tế tự nhiên và quy tắc xã hội để điều chỉnh sự tương tác giữa người mua và người bán, nhằm đạt được một sự cân đối giữa cung và cầu. 

// Nền kinh tế thị trường là nền kinh tế được vận hành theo cơ chế thị trường. Đó là nền kinh tế hàng hóa phát triển cao, ở đó mọi quan hệ sản xuất và trao đổi đều được thông qua thị trường, chịu sự tác động, điều tiết của các quy luật thị trường 

// - Các chủ thể tham gia thị trường bao gồm 4 chủ thể chính: người sản xuất, người tiêu dùng, chủ thể trung gian, Nhà nước. 

// + Người sản xuất: là những người sản xuất và cung cấp hàng hóa, dịch vụ ra thị trường nhằm đáp ứng nhu cầu tiêu dùng của xã hội. 

// + Người tiêu dùng: là những người mua hàng hóa, dịch vụ trên thị trường để thỏa mãn nhu cầu tiêu dùng. Có vai trò rất quan trọng trong định hướng sản xuất 

// + Các chủ thể trung gian: là những cá nhân, tổ chức kết nối giữa người sản xuất và người tiêu dùng. Nhờ vai trò của các trung gian này mà nền kinh tế thị trường trở nên linh hoạt hơn. 

// + Nhà nước tham gia thị trường với vai trò kiến tạo môi trường vĩ mô, điều tiết vĩ mô nền kinh tế thông qua luật pháp, chính sách và an ninh xã hội. `,
//   },
//   {
//     label:
//       "Câu14: Phân tích đặc điểm sự tập trung sản xuất và sự hình thành tổ chức độc quyền ",
//     dapan: `Độc quyền là sự tập trung nắm giữ phần lớn việc sản xuất và tiêu thụ một (hoặc một số) loại hàng hóa vào một liên minh các doanh nghiệp lớn. 

// Nguyên nhân hình thành độc quyền trong kinh tế thị trường: sự cạnh tranh tự do; sự phát triển của lực lượng sản xuất và cách mạng công nghiệp cuối thế kỉ 19, đầu thế kỉ 20; khủng hoảng kinh tế cuối thế kỉ 19, đầu thế kỉ 20. 

// Tổ chức độc quyền (TCDQ) là liên minh các nhà tư bản dưới nhiều hình thức khác nhau, nắm trong tay, phần lớn việc sản xuất và tiêu thụ một hoặc một số hàng hóa nào đó, với mục đích thu được lợi nhuận độc quyền cao. 

// Các hình thức tổ chức độc quyền:  
// Consortium là TCDQ đa ngành thao túng nhiều lĩnh vực trong phạm vi một nền kinh tế. 
// Trust là TCDQ đơn ngành thống nhất về lưu thông và sản xuất. 
// Syndicate là TCDQ thống nhất về lưu thông, độc lập về sản xuất. 
// Cartel là TCDQ đơn ngành thống nhất về tiêu thụ. 

// Các tổ chức độc quyền ngày nay có những biểu hiện mới bao gồm: 
// - sự trở lại của hệ thống doanh nghiệp nhỏ đóng vai trò làm vệ tinh, gia công, nhà thầu ... cho TCDQ;  
// - xuất hiện 2 hình thức mới là TCDQ đa ngành thao túng toàn cầu bao gồm:  
//  + Concern (các ngành có liên kết với nhau về mặt kĩ thuật (liên kết dọc)),  
//  + Conglomerate (các ngành không nhất thiết liên kết với nhau về mặt kĩ thuật (liên kết ngang)).`,
//   },
//   {
//     label: "Câu15: Phân tích đặc điểm xuất khẩu tư bản ",
//     dapan: `Nguyên nhân hình thành xuất khẩu tư bản là do: 
// - tình trạng “Tư bản thừa” tại các nước phát triển khiến nền kinh tế trong nước bão hòa, thị trường đã bị tổ chức độc quyền thao túng, dẫn đến tỷ suất lợi nhuận giảm, cần đầu tư sang thị trường mới;  
// - hoặc là do lịch sử, nhiều nước tư bản lớn có thuộc địa, cần đầu tư sang để khai thác thuộc địa. 

// Xuất khẩu tư bản (XKTB) là việc đầu tư Tư bản ra nước ngoài để sản xuất giá trị thặng dư và thực hiện giá trị thặng dư ở nước ngoài. Khác với xuất khẩu hàng hóa là đầu tư Tư bản vào trong nước để sản xuất giá trị thặng dư ở trong nước và thực hiện giá trị thặng dư ở nước ngoài. 

// Các hình thức xuất khẩu tư bản: 
// Theo chủ thể, bao gồm: xuất khẩu tư bản nhà nước, xuất khẩu tư bản của tư nhân 
// Theo tính chất, bao gồm: 
// + XKTB trực tiếp (FDI): nhà tư bản đầu tư trực tiếp vốn và thực hiện sản xuất kinh doanh. 
// + XKTB gián tiếp: đầu tư chứng khoán ở nước ngoài; cho nước ngoài vay tín dụng, hưởng lãi suất... 

// Gần đây XKTB có những biểu hiện mới, bao gồm: 
// - Về dòng vốn đầu tư: xuất hiện dòng vốn đầu tư giữa các nước lớn với nhau. Bởi vì khoa học kĩ thuật phát triển, tạo nên các ngành mới, nước nhỏ chưa đủ điều kiện để đầu tư, và để tránh rào cản chính sách giữa các nước, phải đầu tư qua nước thứ ba. 
// - Về chính trị: nước lớn tăng cường sử dụng xuất khẩu tư bản (của cả Nhà nước và tư nhân) để chi phối nền kinh tế của nước nhỏ, từ đó, có khả năng chi phối chính trị, văn hóa. `,
//   },
//   {
//     label:
//       "Câu17: Phân tích đặc trưng của nền kinh tế thị trường định hướng XHCN ở Việt Nam ",
//     dapan: `- Kinh tế thị trường là nền kinh tế hàng hóa vận hành theo cơ chế thị trường, phát triển tới trình độ cao, trong đó, quan hệ sản xuất và trao đổi đều thông qua thị trường và chịu sự điều tiết bởi các quy luật khách quan của thị trường. 
// - Kinh tế thị trường định hướng XHCN là nền kinh tế thị trường đầy đủ, mang đặc trưng là định hướng XHCN, có Nhà nước do ĐCS lãnh đạo

// Cơ sở tất yếu của nền kinh tế thị trường định hướng XHCN ở Việt Nam:
// - Về cơ sở lý luận: quan hệ sản xuất phải phù hợp với trình độ của lực lượng sản xuất 
// + Lực lượng sản xuất của Việt Nam đi từ nền sản xuất nhỏ. Vì thế quan hệ sản xuất cần dựa trên kinh tế thị trường với nhiều hình thức sở hữu và thành phần kinh tế thay vì nền kinh tế bao cấp trước đổi mới. 
// + Lịch sử kinh tế thị trường của tư bản chủ nghĩa còn nhiều mâu thuẫn, hạn chế. Vì thế cần có hướng đi khác để đảm bảo sự phát triển bền vững. 
// - Về cơ sở thực tiễn: Việt Nam cần hội nhập, phát triển kinh tế, thực hiện mục tiêu “dân giàu, nước manh, công bằng, dân chủ, văn minh” 
// + Để hội nhập hệ thống phân công lao động thế giới, Việt Nam cần nền kinh tế thị trường. Để hạn chế sự bất bình đẳng, phân hóa giai tầng, Việt Nam cần có định hướng XHCN.  
// + Đặc thù lịch sử Việt Nam với việc Đảng Cộng sản lãnh đạo thành công Cách mạng Dân tộc Dân chủ cũng góp phần định hình lựa chọn này. 

//   [bảng] Nền kinh tế thị trường định hướng xã hội chủ nghĩa (XHCN) của Việt Nam có một số đặc trưng khác biệt so với nền kinh tế thị trường tư bản chủ nghĩa (TBCN). 
//   - Về mục đích, nền kinh tế thị trường định hướng XHCN tập trung xây dựng cơ sở vật chất kỹ thuật của CNXH và đặt lợi ích của nhân dân lên trên, trong khi nền kinh tế thị trường TBCN đặt trọng tâm vào xây dựng cơ sở vật chất kỹ thuật của CNTB và ưu tiên lợi ích của các tập đoàn tư bản. 
//   - Quan hệ sở hữu trong nền kinh tế thị trường định hướng XHCN bao gồm nhiều thành phần kinh tế, với kinh tế nhà nước giữ vai trò chủ đạo, còn ở nền kinh tế thị trường TBCN thì kinh tế tư nhân giữ vai trò chủ đạo. 
//   - Về quan hệ quản lý nền kinh tế, nền kinh tế thị trường định hướng XHCN có cơ chế thị trường tự điều tiết kết hợp với sự điều tiết của nhà nước theo định hướng XHCN, trong khi nền kinh tế thị trường TBCN tự điều tiết theo cơ chế thị trường và chịu sự điều tiết của nhà nước TBCN cùng sự chi phối của giới tài phiệt. 
//   - Quan hệ phân phối trong nền kinh tế thị trường định hướng XHCN có nhiều hình thức phân phối, trong đó phân phối theo lao động là chủ đạo, trong khi ở nền kinh tế thị trường TBCN, phân phối theo vốn góp là chủ đạo.
//   - Cuối cùng, kiến trúc thượng tầng của nền kinh tế thị trường định hướng XHCN là nhà nước do Đảng Cộng sản cầm quyền, trong khi nền kinh tế thị trường TBCN là nhà nước do các đảng phái tranh cử nắm quyền.
 
// Trong các đặc trưng trên, đặc trưng về Xây dựng cơ sở vật chất kỹ thuật trình độ cao của CNXH là quan trọng nhất. Vì đó là nền móng để phát triển quan hệ sản xuất và kiến trúc thượng tầng đi theo định hướng XHCN. 
// `,
//   },
//   {
//     label:
//       "Câu18: Khái niệm, cấu trúc thể chế kinh tế thị trường định hướng XHCN và sự phát huy vai trò lãnh đạo của Đảng trong hoàn thiện thể chế.",
//     dapan: `-	Thể chế kinh tế thị trường định hướng XHCN: là hệ thống đường lối chiến lược phát triển kinh tế - xã hội của Đảng cộng sản, luật pháp, chính sách và bộ máy quản lý của Nhà nước; cùng với cơ chế vận hành. Có tác dụng điều chỉnh quan hệ lợi ích và phương thức hoạt động của các chủ thể kinh tế. Nhằm mục đích xây dựng cơ sở vật chất kỹ thuật trình độ cao của CNXH, một xã hội “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh”.  

// -	Các bộ phận cấu thành thể chế kinh tế thị trường định hướng XHCN: 
// + Đường lối, pháp luật: Đường lối kinh tế - xã hội của Đảng Cộng sản; Luật pháp, chính sách, quy tắc, chế định ... 
// + Các chủ thể tham gia vào thị trường: Bộ máy quản lý Nhà nước; DN và các Tổ chức xã hội đại diện cho DN; Dân cư, các Tổ chức chính trị - xã hội 
// + Cơ chế vận hành: Cơ chế thị trường, thông qua quy luật của thị trường như: QL giá trị, QL cung-cầu, QL cạnh tranh ...Cơ chế vận hành của các chủ thể trên thị trường. Gồm có: Cơ chế phân cấp, Cơ chế phối hợp, Cơ chế giám sát đánh giá, Cơ chế tham gia 

// -	Sự cần thiết phải hoàn thiện thể chế kinh tế thị trường định hướng XHCN: 
// + Do yêu cầu của thực tiễn: Nền kinh tế thị trường định hướng XHCN hướng tới trình độ phát triển cao, hiện đại, phát huy ưu thế của cơ chế thị trường, đồng thời khắc phục những hạn chế của CNTB. Trong khi điều kiện thực tiễn của Việt Nam còn nhiều hạn chế. Vì thế, cần hoàn thiện Thể chế kinh tế thị trường định hướng XHCN.  
// + Do sự dịch chuyển cơ sở hạ tầng của nền kinh tế: Việt Nam dịch chuyển từ nền kinh tế kế hoạch hóa tập trung sang nền kinh tế thị trường định hướng XHCN, hội nhập kinh tế quốc tế 
// → Từ đó đòi hỏi sự hoàn thiện về kiến trúc thượng tầng, tức là phải nâng cao năng lực quản lý của Nhà nước thông qua thể chế. Như vậy cần phải hoàn thiện thể chế kinh tế thị trường XHCN, xây dựng Nhà nước pháp quyền XHCN.  
// + Do xu thế phát huy vai trò của xã hội trong xây dựng thể chế: Các Tổ chức chính trị - xã hội và Tổ chức xã hội - nghề nghiệp đang phát triển mạnh mẽ. Đó là sự đại diện cho các thành phần xã hội, có vai trò phản biện xã hội, theo tinh thần dân chủ và xây dựng => Vì thế, cần tiếp tục hoàn thiện Thể chế kinh tế thị trường định hướng XHCN. 


// - Nhiệm vụ phát huy vai trò lãnh đạo của Đảng trong quá trình hoàn thiện thể chế kinh tế thị trường định hướng XHCN (tự chém)
// Thứ nhất, vai trò phát triển lý luận, hoạch định đường lối 
// + Đảng cần phát triển lý luận phù hợp với tình hình thực tế của đất nước, hoạch định đường lối đảm bảo tính bền vững và đúng đắn của nền kinh tế. 
// Thứ hai, vai trò chỉnh đốn, giám sát, phòng chống tham nhũng  
// + tăng cường giám sát các hoạt động kinh tế, đảm bảo tính công bằng và tránh các hành vi phi pháp và gian lận trong hoạt động kinh tế. 
// Thứ ba, vai trò lãnh đạo, phát huy dân chủ trong Đảng và trong toàn xã hội 
// + tạo điều kiện cho sự tham gia của nhân dân vào hoạt động kinh tế, đảm bảo tính công bằng và tính đúng đắn của hoạt động kinh tế. `,
//   },
//   {
//     label:
//       "Câu19: Phân tích quan hệ lợi ích kinh tế và vai trò của Nhà nước trong việc điều hòa quan hệ lợi ích kinh tế ",
//     dapan: `-	Lợi ích kinh tế: Là sự đáp ứng, sự thỏa mãn về các nhu cầu mà con người muốn đạt được khi thực hiện các hoạt động kinh tế. 
// -	Quan hệ lợi ích kinh tế: Là mối quan hệ tương tác giữa các chủ thể kinh tế để xác lập lợi ích kinh tế của mình, trong mối liên hệ với Lực lượng sản xuất và Kiến trúc thượng tầng. 
// -	Các kiểu quan hệ lợi ích kinh tế: 
// + Xét theo chiều ngang, với các giai tầng trong xã hội thì có: 
// •	Quan hệ lợi ích giữa Người lao động và Doanh nghiệp (tức là giữa giai cấp Công nhân và giai cấp Tư sản) 
// •	Quan hệ lợi ích giữa Doanh nghiệp với nhau (tức là nội bộ giai cấp Tư sản) 
// •	Quan hệ lợi ích giữa Ngƣời lao động với nhau (tức là nội bộ giai cấp CN, NDLĐ) 
// + Xét theo chiều dọc, với các cấp độ thì có: Quan hệ giữa Lợi ích cá nhân, Lợi ích nhóm, Lợi ích xã hội. 

// - Phương thức giải quyết quan hệ lợi ích kinh tế: 
// •	Phương thức cạnh tranh: các chủ thể ganh đua, giành giật lợi ích kinh tế, ưu thế kinh tế 
// •	Phương thức thống nhất: các chủ thể thỏa thuận với nhau, phân chia lợi ích kinh tế, đôi bên cùng có lợi (win – win) 
// •	Phương thức áp đặt: chủ thể có vị thế cao, có điều kiện thuận lợi hơn sẽ áp đặt chủ thể còn lại phải tuân thủ và phục tùng. 

// -	Vai trò của Nhà nước trong việc điều hòa các quan hệ lợi ích kinh tế: (tự chém)
// + Xây dựng và bảo vệ môi trường thuận lợi cho hoạt động tìm kiếm lợi ích hợp pháp của các chủ thể kinh tế 
// Nhà nước cần giữ vững ổn định chính trị, tạo môi trường pháp luật thông thoáng, bảo vệ lợi ích chính đáng của các chủ thể kinh tế trong và ngoài nước.
// + Kiểm soát, ngăn chặn các hoạt động tìm kiếm lợi ích phi pháp, gây tác động tiêu cực cho sự phát triển xã hội 
// Nhà nước cần quy định pháp luật để kiểm soát và ngăn chặn các hoạt động tìm kiếm lợi ích phi pháp, đưa ra biện pháp xử lý vi phạm pháp luật, và giám sát hoạt động kinh doanh. 
// + Giải quyết các xung đột trong quan hệ lợi ích kinh tế, theo các chuẩn mực pháp lý minh bạch, khách quan 
// Việc xử lý các vi phạm cần thực hiện đúng quy trình pháp lý, sử dụng các cơ chế giải quyết tranh chấp như trọng tài, trung tâm giải quyết tranh chấp kinh tế hoặc tòa án. 
// + Điều hòa lợi ích cá nhân, lợi ích nhóm, lợi ích xã hội và phân phôi lại thu nhập.
// Cần áp dụng chính sách và biện pháp để đảm bảo các lợi ích này không gây ra hậu quả tiêu cực cho xã hội và kinh tế. 
// `,
//   },
//   {
//     label:
//       "Câu20: Đặc trưng của Cách mạng khoa học công nghệ hiện đại và nội dung Công nghiệp hóa của Việt Nam, thích ứng với CM Công nghiệp 4.0 Thành tựu các cuộc CM công nghiệp trong lịch sử nhân loại: ",
//     dapan: `- Cách mạng công nghiệp là sự phát triển về chất của tư liệu lao động, trên cơ sở ứng dụng phát minh đột phá về khoa học, kỹ thuật công nghệ một cách có hệ thống; từ đó, tạo ra sự phát triển về chất của phân công lao động xã hội, dẫn đến năng suất lao động vượt trội, và những ứng dụng mới làm thay đổi căn bản phương thức lao động, quản trị và sinh hoạt của con người. 
// - Cách mạng công nghiệp lần thứ nhất bắt đầu từ giữa đến cuối thế kỷ 18 tại Anh, với thành tựu cơ khí hóa sản xuất, năng lượng đốt than và động cơ hơi nước. Lần thứ hai diễn ra từ cuối thế kỷ 19 đến đầu thế kỷ 20 tại Mỹ, đạt tiến bộ điện khí hóa sản xuất và sản xuất dây chuyền. Lần thứ ba nổ ra từ cuối thế kỷ 20 tại Mỹ, với internet và công nghệ sinh học ADN. Lần thứ tư dự báo sẽ bùng nổ vào giữa thế kỷ 21 với các công nghệ tiên tiến như big data, IoT và trí tuệ nhân tạo (AI). 
// - Hai đặc trưng của CM khoa học công nghệ hiện đại:
// + Khoa học trở thành LLSX trực tiếp: bởi vì: Sử dụng tri thức khoa học có vai trò chủ yếu và trực tiếp để tạo nên sản phẩm; Các ngành sản xuất dựa trên thành tựu cách mạng công nghiệp hiện đại chiếm tỷ trọng lớn trong nền kinh tế. 
// + Thời gian nâng cấp các phát minh ngày càng rút ngắn: Do lực lượng sản xuất phát triển, cạnh tranh công nghệ gay gắt, vì vậy chỉ cần vài tháng để nâng cấp một phát minh. 
// - Khái niệm do Đảng Cộng sản Việt Nam đưa ra về Công nghiệp hóa 
// Công nghiệp hóa: là quá trình chuyển đổi căn bản, toàn diện trong các hoạt động bao gồm đầu tư, sản xuất kinh doanh, dịch vụ và quản lý kinh tế - xã hội, từ sử dụng lao động thủ công sang lao động với công nghệ, phương tiện và phương pháp hiện đại, dựa trên thành tựu cách mạng khoa học nhằm tạo ra NSLĐ cao, xây dựng cơ sở vật chất kỹ thuật của CNXH & phát triển bền vững. 

// - Đặc điểm thực hiện Công nghiệp hóa tại VN 
// + Về thể chế và mục tiêu: Công nghiệp hóa trong nền kinh tế thị trường định hướng XHCN 
// + Về kỹ thuật công nghệ: Công nghiệp hóa trong bối cảnh cách mạng công nghiệp lần thứ ba và thứ tư. 
// + Về thị trường: Công nghiệp hóa trong xu thế toàn cầu hóa, hội nhập kinh tế quốc tế 

// - 3 nội dung của Công nghiệp hóa có liên hệ với CM Công nghiệp 4.0 
// + Một là, phát triển LLSX, trên cơ sở thành tựu Cách mạng KHCN hiện đại 
// Ứng dụng công nghệ 4.0 vào các lĩnh vực kinh tế, phát triển kinh tế tri thức, đổi mới giáo dục, thúc đẩy đổi mới sáng tạo và khởi nghiệp, đầu tư hạ tầng đồng bộ vào viễn thông, CNTT, tài chính ngân hàng. 
// + Hai là, chuyển đổi cơ cấu kinh tế theo hướng hiện đại, hợp lý, hiệu quả 
// Cụ thể: Dịch chuyển cơ cấu kinh tế theo hướng hiện đại, tăng tỷ trọng công nghiệp và dịch vụ, giảm tỷ trọng nông nghiệp nhưng cả ba lĩnh vực đều tăng về giá trị. Công nghiệp hóa, hiện đại hóa nông nghiệp, quy hoạch vùng kinh tế phù hợp với biến đổi khí hậu và xu thế thị trường nhân lực. 
// + Ba là, điều chỉnh QHSX và Kiến trúc thượng tầng phù hợp với sự phát triển LLSX 
// Kinh tế nhà nước làm chủ đạo, hoàn thiện thể chế kinh tế thị trường định hướng XHCN, xây dựng chính phủ điện tử, phòng chống tham nhũng, phát triển kinh tế tư nhân. Chủ động hội nhập kinh tế quốc tế, đảm bảo nền kinh tế độc lập tự chủ và an ninh quốc phòng. `,
//   },
//   {
//     label:
//       "BT1:  Dạng 1 (bé tập chính tả học thuộc thoại bằng cách đánh máy 😭)",
//     dapan: `+ Do tiền lương của công nhân không đổi, số lượng công nhân không đổi nên ta có Vsau = Vtrc
// + Sự thay đổi đó là do NTB áp dụng phương pháp sản xuất GTTD tuyệt đối bằng cách [insert đề bài]`,
//   },
//   {
//     label:
//       "BT2:  Dạng 2 (bé tập chính tả học thuộc thoại bằng cách đánh máy 😭)",
//     dapan: `+ Về sau, mặt bằng giá trị hàng tiêu dùng giảm 20% nên NTB giảm lương công nhân tương ứng. Lại có, số lượng công nhân không đổi do NSLĐ, TGLĐ và QMSL không đổi. 
// tổng chi phí nhân công về sau giảm đi 20%. => Vsau = 80% x Vtrc = 0,8 Vtrc
// + Mặt khác, QMSL không đổi nên chi phí TLSX không đổi => Csau = Ctrc
// + Do NSLĐ không đổi nên giá trị của 1 đvsp không đổi. Trong khi đó, QMSL không đổi. Suy ra, giá trị tổng sản phẩm không đổi: Csau + Vsau + Msau = Ctrc + Vtrc + Mtrc

// Sự thay đổi đó là do NTB áp dụng phương pháp sản xuất GTTD tương đối
// Cách thức: ứng dụng thành tựu KHCN để nâng cao NSLĐ xã hội, từ đó làm giảm giá trị sức lao động để sản xuất ra mỗi sản phẩm.`,
//   },
//   {
//     label:
//       "BT3:  Dạng 3 (bé tập chính tả học thuộc thoại bằng cách đánh máy 😭)",
//     dapan: `
// + Về sau, 80% Giá trị thặng dư được dùng để tích lũy tư bản, làm cho cấu tạo hữu cơ tư bản tăng lên thành 17/2. Suy ra:
// Csau + Vsau = (Ctrc + Vtrc) + 80% Mtrc
// Csau / Vsau = 17/2

// Ta thấy: Vsau/Vtrc = 4/5.  Trong khi đó, lương của mỗi công nhân bằng nhau và không thay đổi. Suy ra: Số lượng công nhân giảm đi 1/5 hay tỷ lệ công nhân bị sa thải là 20%.

// Sự thay đổi đó là do nhà tư bản tích lũy tư bản bằng cách chuyển hóa 80% giá trị thặng dư ban đầu thành tư bản phụ thêm vào kỳ sau, làm cho cấu tạo hữu cơ tư bản tăng từ 5/1 lên thành 17/2. `,
//   },
//   {
//     label:
//       "BT4:  Dạng 4 (bé tập chính tả học thuộc thoại bằng cách đánh máy 😭)",
//     dapan: `Có sự thay đổi đó là do nhà tư bản thực hiện đồng thời cả tích lũy tư bản và PPSX giá
// trị thặng dư tuyệt đối. Cụ thể:
// - Tích lũy tư bản: NTB chuyển hóa X% GTTD ban đầu thành tư bản phụ thêm vào kỳ
// sau, làm cho cấu tạo hữu cơ tư bản tăng từ X lên thành X
// - PPSX GTTD tuyệt đối: NTB kéo dài thời gian lao động trong ngày thêm X% mà không
// trả thêm lương cho công nhân.`,
//   },
// ];

const lsd = [
    {
        label: "Câu 1: Vai trò của Lãnh tụ Nguyễn Ái Quốc trong việc chuẩn bị thành lập Đảng cộng sản Việt Nam? (6đ)",
        dapan: `* Nguyễn Ái Quốc tìm đường cứu nước:
-Chứng kiến sự thất bại của phong trào yêu nước cuối Thế kỉ XIX đầu thế kỉ XX , vượt qua tầm nhìn các người yêu nước đương thời năm 1911 người quyết định ra nước ngoài tìm đường cứu nước giải phóng dân tộc.
-  Đến năm 1917, CM tháng 10 Nga thành công đã tác động trực tiếp đến quá trình tìm đường cứu nước của người
- Đến năm 1919 thay mặt những người VN yêu nước tại Pháp người đã gửi tới hội nghị Vécxây bản yêu sách 8 điểm đòi quyền lợi cho dân tộc VN tuy không được chấp thuận nhưng đây là đòn đầu tiên tấn công vào chủ nghĩa đế quốc và đã gây tiếng vang lớn ở Pháp cũng như trong nước
- Đến năm 1920, người tham gia sáng lập Đảng cộng sản Pháp và bỏ phiếu tán thành quốc tế thứ 3 của Lê-nin, sự kiện này đánh dấu bước ngoặt trọng đại trong cuộc đời hoạt động cách mạng của người đó là từ chủ nghĩa yêu nước đến lập trường cộng sản và đi theo chủ nghĩa Mác- leenin.

* Nguyễn Ái Quốc chuẩn bị về tư tưởng - chính trị cho việc thành lập Đảng
- Mục đích: Bác tích cực truyền bá chủ nghĩa Mác-Lênin về Nước từ đó hình thành con đường cứu nước giải phóng dân tộc.
- Nội dung: Thông qua sách báo, tài liệu, đặc biệt thể hiện qua tác phẩm, bài viết của người như: Bản án chế độ thực dân Pháp , Đường Cách Mệnh đã hình thành 1 hệ thống quan điểm: 
+ Hệ thống quan điểm:
. Muốn cứu nước và giải phóng dân tộc không có con đường nào khác CM vô sản 
. Độc lập dân tộc gắn liền với CNXH là mục tiêu và con đường đi lên của CM VN
. Chủ nghĩa thực dân là kẻ thù chung của giai cấp công dân và nhân dân lao động trên toàn TG là kẻ thù trực tiếp nguy hại nhất của nhân dân các cấp thuộc địa 
. CM giải phóng dân tộc ở các nước thuộc địa có mối liên hệ với CM vô sản ở chính quốc nhưng CM giải phóng dân tộc phải có tính chủ động, sáng tạo không lệ thuộc vào CM chính quốc 
. Lực lượng CM: công nông là gốc của CM. tiểu tư sản, trí thức, trung nông là bè bạn của công nông do Giai cấp công nhân lãnh đạo
. Phương pháp CM: CM giải phóng dân tộc phải tiến hành bằng bạo lực CM
. Đoàn kết quốc tế : CM giải phóng dân tộc VN là 1 bộ phận của CM TG nhưng CM VN phải có tính chủ động tự lực, tự cường, đồng thời phải biết tranh thủ sự đồng tình ủng hộ của nhân dân  TG khi có điều kiện.
. Phải có Đảng lãnh đạo: Đảng phải có học thuyết CM đúng đắn, đó là chủ nghĩa Mác-Lênin và phải biết vận dụng vào đk cụ thể của đất nước

* Nguyễn Ái Quốc chuẩn bị về mặt tổ chức cho việc thành lập Đảng 
- Tháng 6 năm 1925, Bác sáng lập hội VN CM thanh niên, hội có vai trò :
+ Tích cực truyền bá CN Mác-Lênin sâu rộng trong phong trào công nhân, đặc biệt thông qua phong trào “vô sản hóa” 
+ Đào tạo đội ngũ cán bộ cho CM
+ Cb về mọi mặt cho việc thành lập Đảng 
-Dưới ảnh hưởng của hội VN CM TN đã hình thành 3 tổ chức cộng sản :
- Sau khi 3 TC cộng sản ra đời, hoạt động mạnh mẽ nhưng riêng rẽ, mất đoàn kết gây bất lợi trong phong trào chung
- Trước tình hình đó lãnh tụ NAQ đã triệu tập hội nghị hợp nhất các TC cộng sản. Hội nghị diễn ra từ 03-07/02/1930 ở (Cửu Long) Hương Cảng, TQ
-Hội nghị quyết định bỏ mọi thành kiến, xung đột cũ, và thành thật hợp tác với nhau trong 1 đảng duy nhất ở VN và đặt tên là Đảng CSVN 
-Hội nghị thông qua chính cương vắn tắt , sách lược vắn tắt, chương trình tóm tắt, điều lệ vắn tắt do NAQ soạn thảo. Đó là cương lĩnh chính trị đầu tiên của Đảng.`,
    },
    {
        label: "Câu 2: Hoàn cảnh ra đời, nội dung và ý nghĩa Cương lĩnh chính trị đầu tiên của Đảng cộng sản Việt Nam. Điểm khác của Luận cương chính trị tháng 10/1930 so với Cương lĩnh chính trị đầu tiên của Đảng? (6đ)",
        dapan: `-Hoàn cảnh ra đời:
+ Cương lĩnh do lãnh tụ NAQ soạn thảo được thông qua tại Hội nghị hợp nhất các tổ chức cộng sản được coi là Cương lĩnh chính trị đầu tiên của Đảng
+ Tại hội nghị hợp nhất ngày 3/2/1930 của Đảng ta đã nhận định rằng: một đảng thống nhất cần phải có cương lĩnh thống nhất để định hướng cho toàn Đảng, toàn dân, trong cuộc đấu tranh chống kẻ thù dân tộc và giai cấp, đưa CM tới thắng lợi vì vậy hội nghị thông qua chính cương sách lược vắn tắt do NAQ soạn thảo. Đây là cương lĩnh chính trị đầu tiên của Đảng.

-Nội dung cơ bản của Cương lĩnh chính trị đầu tiên : 6 ND
+ Phương hướng chiến lược : Trên cơ sở phân tích tình hình của nước ta Đảng chủ trương “làm tư sản dân quyền CM và thổ địa CM để đi tới XH cộng sản”
+ Lực lượng Cách Mạng: Công nông là gốc của CM tiểu tư sản trí thức là bè bạn của công nông do giai cấp công nhân lãnh đạo đối với những phần tử, những người chưa rõ phản CM thì phải ra sức thu phục hoặc trung lập họ 
+ Nhiệm vụ cụ thể :
. Chính trị: đánh đổ đế quốc, địa chủ Pk làm cho nước VN hoàn toàn độc lập, thành lập chính phủ công nông binh, tổ chức quân đội công nông
. Kinh tế : Thủ tiêu các thứ quốc trái, tịch thu ruộng đất của bọn đế quốc , địa chủ chia cho dân cày nghèo, bỏ sưu thuế, mở mang CN và NN, thi hành ngày làm việc 8 tiếng 
. Văn hóa – Xã Hội: dân chúng được tự do tổ chức, nam nữ bình quyền phổ thông: giáo dục theo công nông hóa 
+ Phương pháp CM: CM giải phóng dân tộc VN phải tiến hành bạo lực CM. 
+ Vai trò lãnh đạo của Đảng: CM phải có Đảng lãnh đạo. Đảng phải có đường lối đúng đắn có tổ chức mạnh có mối liên hệ mật thiết với nhân dân và được nhân dân ủng hộ
+ Quan hệ quốc tế: CM VN là 1 bộ phận CM TG nhưng CM VN phải có tính tự lực tự cường đồng thời phải thực hành liên lạc với các dân tộc bị áp bức và giai cấp vô sản thế giới nhất là giai cấp vô sản Pháp.

-Ý nghĩa:
+ Lần đầu tiên CMVN có 1 cương lĩnh chính trị tuy rất ngắn gọn nhưng tương đối hoàn chỉnh đã phản ánh được quy luật khách quan của XH VN đáp ứng nhu cầu cơ bản và cấp bách của nhân dân ta đồng thời nó còn phù hợp với xu thế phát triển của thời đại 
+ Đây là ngọn cờ tập hợp toàn dân và là cơ sở cho sự đoàn kết nhất trí trong nội bộ Đảng 
+ Đây là vũ khí sắc bén của Đảng và nhân dân tiến hành cuộc đấu tranh CM chống lại các kẻ thù của dân tộc và của giai cấp đồng thời đó còn là cơ sở của Đảng ta vận dụng và phát triển đường lối sau này

-Điểm khác của luận cương chính trị tháng 10/1930 so với cương lĩnh chính trị đầu tiên của Đảng:
Luận cương tháng 10/1930 do Trần Phú soạn thảo được thông qua tại Hội nghị Trung Ương lần thứ nhất của Đảng, luận cương có hai điểm khác cơ bản so với Cương lĩnh:
. Đặt nhiệm vụ chống Pk lên hàng đầu, sau đó mới đánh đuổi giặc Pháp
. Xác định lực lượng CM là công-nông, nên không đề cao tinh thần đoàn kết dân tộc rộng rãi…
Những điểm khác này là điểm hạn chế của Luận cương so với Cương lĩnh trong quá trình lãnh đạo CMVN
Cả hai văn kiện tuy có điểm khác nhau, nhưng đều đóng vai trò rất lớn. Đó là sự chuẩn bị tất yếu. Đồng thời là nền tảng cho việc XD lý luận, tư tưởng đến tận ngày nay.`,
    },
    {
        label: "Câu 3: Hoàn cảnh lịch sử, nội dung cơ bản và ý nghĩa Hội nghị Trung Ương lần thứ 8 (5/1941) của Đảng CS Đông Dương? (6đ)",
        dapan: `*Hoàn cảnh lịch sử:
-Tháng 9/1939, chiến tranh TG lần thứ II bùng nổ ở nước Pháp các thế lực Phát xít lên nắm chính quyền đang đưa nước Pháp và các thuộc địa của Pháp lao vào chiến tranh
- Ở Đông Dương, trong đó có VN là thuộc địa của Pháp nên phải chịu hậu quả nặng nề của chiến tranh cụ thể trên các mặt 
+ Về chính trị: Pháp tiến hành chính sách khủng bố trắng nhằm tiêu diệt phong trào CM và Đảng cộng sản ĐD
+ Về kinh tế: Pháp tiến hành chính sách kinh tế thời chiến nhằm vơ vét nguồn nhân lực, tài liệu, vật lực để ném vào chiến tranh
+ Về quân sự: Pháp ra lệnh tổng động viên bắt thanh niên Đông Dương đi lính chết thay cho lính Pháp
=>Với những chính sách trên của Pháp đã làm cho mâu thuẫn dân tộc sâu sắc (mâu thuẫn giữa toàn thể dân tộc VN với đế quốc Pháp) đòi hỏi phải giải quyết đặt ra yêu cầu Đảng phải điều chỉnh lại đường lối CM như hợp với bối cảnh lúc này.

*Nội dung cơ bản:
-Tháng 5/1941, NAQ chủ trì hội nghị lần thứ 8 Ban chấp hành Trung Ương Đảng. Hội nghị bầu đồng chí Trường Chinh làm Tổng bí thư. Hội nghị TƯ nêu rõ những nội dung quan trọng:
+Thứ nhất, nhấn mạnh mâu thuẫn chủ yếu đòi hỏi phải được giải quyết cấp bách là mâu thuẫn giũa dân tộc VN với đế quốc phát- xít Pháp-Nhật, bởi vì dưới hai tầng áp bức Nhật-Pháp, “quyển lợi tất cả các giai cấp bị cướp giật, vận mạng dân tộc nguy vong không lúc nào bằng”
+Thứ hai, khẳng định dứt khoát chủ trương thay đổi chiến lược. Xác định CM không phải giải quyết hai vấn đề: phản đế và điền địa nữa, mà là một cuộc CM chỉ phải giải quyết một vấn đề cần thiết “dân tộc giải phóng”. Hội nghị quyết định tiếp tục tạm gác khẩu hiệu “đánh đổ địa chủ, chia ruộng đất cho dân cày”, thay bằng các khẩu hiệu tịch thu ruộng đất của DDQ và Việt gian chia cho dân cày nghèo, chia lại ruộng đất công cho công bằng, giảm tô, giảm tức.
+Thứ ba, giải quyết vấn đề DT trong khuôn khổ từng nước ở ĐD, thi hành chính sách “dân tộc tự quyết”. Sau khi đánh đuổi Pháp-Nhật, các DT trên cõi ĐD sẽ “tổ chức thành liên bang cộng hòa dân chủ hay đứng riêng thành lập một quốc gia tùy ý”. “Sự tự do độc lập của các DT sẽ được thừa nhận và coi trọng”.Từ quan điểm đó, Hội nghị quyết định thành lập ở mỗi nước ĐD một mặt trận riêng, thực hiện đoàn kết từng DT, đồng thời đoàn kết ba dân tộc chống kẻ thù chung.
+Thứ tư, tập hợp rộng rãi mọi lực lượng dân tộc, “không phân biệt thợ thuyền, dân cày, phú nông, địa chủ, tư bản bản xứ, ai có lòng yêu nước thương nòi sẽ cùng nhau thống nhất mặt trận, thu góp toàn lực đem tất cả ra giành quyền độc lập, tự do cho dân tộc”. Các tổ chức quần chúng trong mặt trận Việt Minh đều mang tên “cứu quốc”. Trong việc xây dựng các đoàn thể cứu quốc, “điều cốt yếu không phải những hội viên phải hiểu chủ nghĩa cộng sản, mà điều cốt yếu hơn hết là họ có tinh thần cứu quốc và muốn tranh đấu cứu quốc”.
+Thứ năm, chủ trương sau khi CM thành công sẽ thành lập nước VN dân chủ cộng hòa theo tinh thần tân dân chủ, một hình thức nhà nước “của chung của toàn thể dân tộc”
+Thứ sáu, Hội nghị xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm của Đảng và nhân dân. Trong những hoàn cảnh nhất định thì “với lực lượng sẵn có, ta có thể lãnh đạo 1 cuộc khởi nghĩa từng phần trong từng địa phương cũng có thể giành thắng lợi mà mở đường cho 1 cuộc tổng khởi nghĩa to lớn”. Hội nghị còn xác định những điều kiện chủ quan, khách quan và dự đoán thời cơ tổng khởi nghĩa.
=>Hội nghị lần thứ 8 Ban chấp hành Trung ương Đảng đã hoàn chỉnh chủ trương chiến lược được đề ra từ Hội nghị tháng 11/1939, khắc phục triệt để những hạn chế của Luận cương chính trị tháng 10/1939, khẳng định lại đường lối CM giải phóng dân tộc đúng đắn trong Cương lĩnh chính trị đầu tiên của Đảng và lý luận CM giải phóng dân tộc của NAQ. Đó là ngọn cờ dẫn đường cho toàn dân tộc VN đẩy mạnh công cuộc chuẩn bị lực lượng, tiến lên trong sự nghiệp đánh Pháp, đuổi Nhật, giành độc lập tự do.

*Ý nghĩa:
-Hội nghị TƯ 6 mở đầu cho chủ trương chuyển hướng chiến lược CM đúng đắn của Đảng; HNTW7 phát triển và đến HNTW8 chủ trương được kiện toàn 
-Chủ trương chuyển hướng chiến lược CM của Đảng thể hiện tinh thần ĐL tự chủ sáng tạo của Đảng nhằm vào mục tiêu số 1 của CM nước ta là giành lấy chính quyền về tay nhân dân ta. Đồng thời là cơ sở để Đảng đề ra nhiều chủ trương cụ thể nhằm đạt mục tiêu đó.
-Chủ trương chuyển hướng chiến lược CM của Đảng đã tập hợp rộng rãi mọi lực lượng, mọi người VN yêu nước trong mặt trận Việt Minh để có lực lượng làm cuộc tổng khởi nghĩa CM tháng Tám thắng lợi. Là ngọn cờ dẫn đường cho nhân dân ta tiến lên giành thắng lợi trong sự nghiệp đánh Pháp đuổi Nhật, giành ĐL cho dân tộc và tự do cho nhân dân.`,
    },
    {
        label: "Câu 4: Hoàn cảnh lịch sử, nội dung và ý nghĩa chỉ thị “Kháng chiến – kiến quốc” ngày 25/11/1945 của Đảng CSĐD? (6đ)",
        dapan: `*Hoàn cảnh VN sau CM tháng 8:
-Thuận lợi:
+ Sau CM T8 nước ta được độc lập nhân dân được làm chủ nước Việt Nam dân chủ cộng hòa đã là 1 nước độc lập có chủ quyền
+ Tạo ra khí thế CM sôi nổi trên cả nước toàn dân tin tưởng và sự lãnh đạo của Đảng và Hồ chủ tịch đồng lòng quyết tâm giữ vững chính quyền bảo vệ nền độc lập dân tộc vững chắc 
+ Phong trào giải phóng dân tộc trên TG, Phong trào đấu tranh vì hòa bình phát triển mạnh tạo thành từng làn sóng CM tấn công vào chủ nghĩa đế quốc chủ nghĩa thực dân (3 dòng thác CM: dân tộc, dân chủ, chủ nghĩa xã hội)
-Khó khăn:
+Đất nước ta bị kẻ thù bao vây tứ phía (thù trong giặc ngoài) câu kết với nhau nhằm lật đổ chính quyền VN non trẻ mới giành lại được
. Phía thứ nhất: ở miền Bắc 20 vạn quân Tưởng và tay sai kéo vào nước ta dưới danh nghĩa là đồng minh nhưng thực chất âm mưu của chúng là diệt cộng, cầm hồ phá tan chính quyền CM để thiết lập 1 chính quyền phản CM tay sai của chúng
. Phía thứ hai: Ở miền Nam gần 3 vạn quân Anh cũng dưới danh nghĩa là đồng minh nhưng thực chất là giúp Pháp chiếm lại Đông Dương
. Phía thứ ba: Ở Đông Dương 6 vạn quân Nhật cũng sẵn sàng trao vũ khí để câu kết với các đế quốc chống lại dân quyền CM
. Phía thứ 4: 3 vạn quân Pháp kéo vào nước ta chúng vẫn nuôi ý đồ khôi phục sự thống trị ở VN
. Phía thứ 5: Các tổ chức phản động đồng loạt nổi lên chống phá chính quyền CM
+ Bên cạnh những thách thức về quân sự thì khó khăn về kinh tế-xã hội cũng là 1 thách thức nặng nề đối với Đảng và chính quyền CM
. Kinh tế tài chính: Kiệt quệ, xơ xác, tiêu điều, kho bạc trống rỗng, nạn đói mới bị đe dọa
. VH-XH: giặc dốt hoành hành, tệ nạn XH tràn lan
+VN chưa được 1 nước nào trên TG công nhận đã quan hệ ngoại giao
NX: Sau CMT8 nước ta đứng trước tình trạng khó khăn “chồng chất khó khăn” vận mệnh dân tộc như “ngàn cân treo sợi tóc” chính quyền nhân dân có nguy cơ bị lật đổ nền độc lập mới dành được có thể bị mất. Trước tình hình đó Đảng ta sáng suất nhận thấy đất nước không chỉ có khó khăn mà còn có những thuận lợi cơ bản, chính quyền nhân dân có thể trụ vững toàn Đảng toàn dân ta quyết tâm đứng lên đấu tranh bảo vệ vững chắc chính quyền giữ vững nền độc lập dân tộc

*Chỉ thị “Kháng chiến-Kiến quốc” ngày 25/11/1945
-Chỉ thị xác định tính chất của CM Đông Dương lúc này vẫn là cuộc CM giải phóng dân tộc bởi cuộc CM này vẫn coi đang tiếp diễn do đó khẩu hiệu đấu tranh của thời kì này “Dân tộc trên hết, Tổ quốc trên hết”
-Trên cơ sở đánh giá thái độ của từng đế quốc từ đó chỉ thị xác định thực dân Pháp là kẻ thù chính cần phải tập trung mũi nhọn vào chống Pháp bởi vì:
+Pháp có nhiều cơ sở quyền lợi ở nước ta vì chúng đã từng thống trị nước ta trên 80 năm 
+ Trên thực tế Pháp đã nổ súng xâm lược Nam Bộ vào 23/09/1945
+ Pháp không từ bỏ dã tâm xâm lược nước ta 1 lần nữa vì chúng quay trở lại thuộc địa để vơ vét nhằm khôi phục nền kinh tế sau chiến tranh
-Trên cơ sở phân tích âm mưu của các tổ chức phản động từ đó Đảng có những chủ trương hết sức mềm dẻo về sách lược nhưng cứng rắn về mặt nguyên tắc có thể nhân nhượng 1 số quyền lợi về kinh tế, chính trị nhưng không vi phạm về quyền lợi dân tộc phải giữ vững sự lãnh đạo của Đảng
-Chỉ thị đề ra các NV cơ bản trước mắt gồm 4 nhiệm vụ như sau:
+ Củng cố và bảo vệ chính quyền CM 
+ Chống thực dân Pháp xâm lược
+ Bài trừ đội phản 
+ Cải thiện đời sống nhân dân
=>4 NV này phải được tiến hành đồng thời nhưng nv củng cố và bảo vệ chính quyền  CM là nv trọng tâm phải được đưa lên hàng đầu
-Chỉ thị vạch ra các biện pháp cụ thể để nhằm thực hiện nv trên bao gồm 5 biện pháp:
+ Về chính trị: Đoàn kết toàn dân tiến tới tổng tiển cử bầu Quốc hội thành lập chính phủ chính thức ban hành Hiến Pháp
+ Về kinh tế: Tăng gia sản xuất để cứu đói, phát động các phong trào nhằm chống giặc đói như Hũ gạo tiết kiệm, tuần lễ vàng, quỹ độc lập
+ Về quân sự: Động viên lực lượng toàn dân trường kì kháng chiến chống Pháp
+ Về VH-XH: Xây dựng nền văn hóa mới bài trừ văn hóa ngu dân xóa nạn mù chữ
+ Ngoại giao: Thực hiện trên nguyên tắc bình đẳng tương trợ thêm bạn bớt thù

*Ý nghĩa:
- Chỉ thị “Kháng chiến-Kiến quốc” soi sáng cho toàn Đảng, toàn dân ta đấu tranh, chống thù trong, giặc ngoài nhằm bảo vệ nền độc lập dân tộc và giữ vững chính quyền CM, xây dựng chế độ mới
- Chỉ thị phản ánh 1 quy luật lớn của CMVN sau CMT8: Giành chính quyền đi đôi với bảo vệ chính quyền đồng thời phản ánh 1 quy luật lớn của lịch sử dân tộc: Dựng nước phải đi đôi với giữ nước`,
    },
    {
        label: "Câu 5: Nguyên nhân cuộc kháng chiến toàn quốc bùng nổ, nội dung và ý nghĩa đường lối kháng chiến chống thực dân Pháp xâm lược của Đảng (1946-1954)? (6đ)",
        dapan: `*Nguyên nhân bùng nổ của cuộc kháng chiến:
-Với dã tâm xâm lược nước ta 1 lần nữa Pháp đã có những hành động trắng trợn vi phạm các điều đã kí kết với chính phủ ta (hiệp định sơ bộ 6/3, tạm ước 14/9) 
-Mặc dù chúng ta đã nhân nhượng với Pháp nhưng cta càng nhân nhượng Pháp càng lấn tới do đó vào đêm 19/12/1946 cuộc kháng chiến toàn quốc bùng nổ tại pháo đài Láng 
*Nội dung đường lối kháng chiến của Đảng:
- Cơ sở đường lối: 
+ Lời kêu gọi “toàn quốc kháng chiến” của Hồ Chủ Tịch ngày 20/12/1946
+ Chỉ thị “toàn dân kháng chiến” của Trưng ương Đảng ngày 22/12/1946
+ Tác phẩm “kháng chiến nhất định thắng lợi” của đồng chí Trường Chinh xuất hiện đầu năm 1947
- Mục đích của cuộc kháng chiến: Đánh đuổi thực dân Pháp xâm lược hoàn thành độc lập dân tộc từng bước xây dựng chế độ mới
- Tính chất của cuộc kháng chiến: Là cuộc chiến tranh nhân dân bảo vệ tổ quốc .Một cuộc chiến tranh chính nghĩa Toàn dân kháng chiến, toàn diện kháng chiến
-Phương châm đường lối kháng chiến: Toàn dân, Toàn diện, Lâu dài, Tự lực cánh sinh
+ Toàn dân: đánh giặc với tinh thần mỗi người dân là một chiến sỹ, mỗi đường phố là 1 mặt trận, mỗi làng xã là 1 pháo đài đánh giặc được thể hiện rõ trong lời kêu gọi toàn quốc kháng chiến của Hồ Chủ Tịch: “Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia đảng phái, tôn giáo dân tộc. Hễ là người VN thì phải đứng lên đánh thực dân Pháp để cứu Tổ Quốc. Ai có súng thì dùng súng, ai có gươm thì dùng gươm, không có súng có gươm thì dùng cuốc, thuổng, gậy , gộc. Ai cũng phải ra sức chống thực dân Pháp cứu nước.
.Tác dụng: Tạo ra sức mạnh tổng hợp của cả dân tộc, của toàn dân cho CM
+ Toàn diện: Là đánh giặc trên tất cả các mặt:
. Về chính trị: Đoàn kết toàn dân, tranh thủ thêm bạn, cô lập kẻ thù
. Về quân sự: Đánh địch ở khắp nơi, vừa đánh địch, vừa xây dựng lực lượng
. Về kinh tế: Tăng gia sản xuất xây dựng kinh tế của ta
. Về văn hóa: Đánh đổ nền văn hóa nô dịch,XH nền văn hóa mới
.Tác dụng: Tạo sức mạnh toàn diện cho CM VN đánh thắng Pháp
+ Kháng chiến lâu dài là để có thời gian làm chuyển hóa tương quan lực lượng giữa ta và Pháp. Kháng chiến lâu dài để có thời gian làm cho chỗ yếu cơ bản của địch ngày càng bộc lộ, chỗ mạnh của địch ngày 1 hạn chế, chỗ yếu của ta được khắc phục, chỗ mạnh của ta ngày một càng phát huy tiến tới áp đảo Pháp kết thúc cuộc kháng chiến
+ Tự lực cánh sinh: Là dựa vào sức lực của toàn dân vào đường lối của Đảng và các điều kiện của nước ta

*Ý nghĩa của đường lối kháng chiến:
-Đường lối kháng chiến chống Pháp của Đảng là sự vận dụng sáng tạo Chủ nghĩa Mác-Lênin về chiến tranh CM vào hoàn cảnh thực tiễn VN. Đường lối đó còn là sự vận dụng những truyền thống, kinh nghiệm đánh giặc giữ nước của dân tộc 
-Chính vì vậy, đường lối đó đã trở thành ngọn cờ dẫn đường và nguồn cổ vũ nhân dân VN tiến hành kháng chiến thắng lợi vẻ vang
(NOTE: Trong câu 4đ khi nta hỏi phân tích phương châm nào thì trả lời phương châm đó, trả lời cả hoàn cảnh, cơ sở đường lối, mục đích, tính chất và ý nghĩa)`,
    },
    {
        label: "Câu 6: Tình hình VN sau hiệp định Giơnevơ năm 1954, nội dung và ý nghĩa đường lối CM VN do Đại hội đại biểu toàn quốc lần thứ III (9/1960) của Đảng đề ra? (6đ)",
        dapan: `*Tình hình VN sau hiệp định Giơnevơ năm 1954
- Với chiến thắng Điện Biên Phủ năm 1954 đã kết thúc cuộc kháng chiến lâu dài chống thực dân Pháp 
- Hiệp định Giơnevơ được ký kết, quốc tế công nhận chủ quyền ĐL và toàn vẹn lãnh thổ VN. Miền Bắc được giải phóng và đi lên xây dựng CNXH
- Đế quốc Mỹ trắng trợn phá hoại việc thi hành hiệp định Giơnevơ nhảy vào Miền Nam nước ta nhằm chia cắt lâu dài đất nước ta
=>Đất nước tạm thời bị chia cắt làm hai miền
MB: Làm CM XHCN
MN: Tiếp tục công cuộc CM dân tộc dân chủ nhân dân ở miền Nam

*Nội dung:
Nội dung đường lối CMVN do Đại hội Đảng toàn quốc lần thứ III (9/1960)
Sau khi phân tích tình hình chung của cả nước và đặc điểm tình hình cụ thể của mỗi miền. ĐH Đảng toàn quốc lần thứ III (9/1960) đã xây dựng đường lối chiến lược chung của CMVN trong giai đoạn này là “Tăng cường đoàn kết toàn dân, kiên quyết đấu tranh giữ vững hòa bình, đẩy mạnh CM xã hội chủ nghĩa ở Miền bắc, đồng thời đẩy mạnh CM dân tộc dân chủ nhân dân ở miền nam, thực hiện thống nhất nước nhà trên cơ sở độc lập và dân chủ, xây dựng 1 nước VN hòa bình thống nhất ĐL dân chủ và giàu mạnh, thiết thực góp phần tăng cường phe XHCN và bảo vệ hòa bình ĐNÁ và TG
-Nhiệm vụ cụ thể:
+ CM xã hội chủ nghĩa ở MB: có nv xây dựng MB thành căn cứ  địa CM vững mạnh của cả nước, là hậu phương lớn của tiền tuyến miền nam, vừa xây dựng chủ nghĩa xã hội ở miền bắc, vừa chi viện sức người sức của cho CM miền nam đánh thắng đế quốc Mỹ 
+ CM dân tộc dân chủ nhân dân ở miền nam: có nv đánh đuổi đế quốc Mỹ ra khỏi MN bảo vệ miền bắc XHCN
-Vai trò, vị trí chiến lược CM mỗi miền:
+ CM XHCN ở miền Bắc: Có vai trò quyết định nhất đối với sự nghiệp phát triển của toàn bộ CMVN, đối với sự nghiệp thống nhất đất nước
+ CM dân tộc dân chủ nhân dân ở miền Nam: Có vai trò quyết định trực tiếp đối với sự nghiệp chỗng Mỹ cứu nước, giải phóng MN, thực hiện hòa bình, thống nhất nước nhà, hoàn thành nốt cuộc CM dân tộc dân chủ nhân dân trên cả nước
-Mối quan hệ giữa hai chiến lược CM:
+Hai chiến lược CM có quy luật vận động khác nhau, nhiệm vụ khác nhau, vai trò vị trí khác nhau nhưng 2 chiến lược CM có mối quan hệ tác động thúc đẩy lẫn nhau vì:
. Cả hai chiến lược CM đều do 1 Đảng lãnh đạo và quân đội thống nhất tiến hành 
. Cả hai chiến lược CM đều diễn ra trong 1 quá trình CM chung của cả nước 
. Cả hai chiến lược CM đều nhằm mục tiêu chung của CM nước ta là hòa bình, thống nhất dân tộc và tiến lên CNXH
. Cả hai chiến lược CM đều giải quyết mâu thuẫn chung của nước ta là mâu thuẫn giữa toàn thể dân tộc VN với đế quốc Mỹ và tay sai

Ý nghĩa:
-Đường lối thực hiện đồng thời hai chiến lược CM thể hiện tư tưởng chiến lược của Đảng đó là ĐLDT gắn liền CNXH vừa phù hợp với MB, vừa phù hợp MN, vừa phù hợp với cả nước và tình hình quốc tế, huy động cao nhất sức mạnh tổng hợp to lớn, do đó đã đánh thắng đế quốc Mỹ và bè lũ tay sai giải phóng MN, thống nhất tổ quốc 
-Đường lối thực hiện đồng thời 2 chiến lược CM thể hiện tinh thần ĐL tự chủ và sáng tạo của Đảng ta trong việc giải phóng những vấn đề của CMVN chưa hề có tiền lệ trong lịch sử (cả lý luận và thực tiễn) vừa đúng với thực tiễn VN, vừa phù hợp với lợi ích của nhân loại và xu thế thời đại.`,
    },
];

const cnxh = [
    {
        label: "",
        dapan: ``,
    },
];

export const goicauhoitriet = lsd;
