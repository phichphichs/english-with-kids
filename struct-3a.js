window.STRUCT_RAW = window.STRUCT_RAW || [];
STRUCT_RAW.push({ topic: "w-code", lines: `
0 | Could you + V? = bạn… được không? ; review = xem xét, duyệt ; pull request = yêu cầu hợp nhất mã
1 | have + V3 = đã… (hiện tại hoàn thành) ; leave comments on + N = để lại nhận xét về… ; a few + N = vài…
2 | Nice work = làm tốt lắm ; clean and easy to + V = gọn và dễ… ; easy to read = dễ đọc
3 | Could you + V? = bạn… được không? ; add comments = thêm chú thích
4 | too + adj = quá… ; Let's + V = mình cùng… ; split up = tách nhỏ ra
5 | Let's + V = mình cùng… ; rename A to B = đổi tên A thành B ; something clearer = cái gì đó rõ ràng hơn
6 | We should + V = chúng ta nên… ; follow + N = tuân theo… ; coding standards = quy chuẩn viết code
7 | Can we + V? = mình… được không? ; avoid + V-ing = tránh làm gì ; duplicate = lặp lại, nhân bản
8 | Let's + V = mình cùng… ; extract A into B = tách A ra thành B ; shared component = thành phần dùng chung
9 | could + V = có thể… (khả năng) ; cause + N = gây ra… ; performance issue = vấn đề hiệu năng
10 | What happens if + S + V(s)? = chuyện gì xảy ra nếu…? ; null = giá trị rỗng
11 | We need to + V = chúng ta cần… ; handle = xử lý ; edge case = trường hợp biên
12 | Please + V = xin hãy… ; add error handling = thêm xử lý lỗi ; here = ở đây
13 | Have you + V3? = bạn đã… chưa? ; write unit tests for + N = viết unit test cho…
14 | be + V-ing = đang… ; fail = lỗi, không đạt ; on the CI pipeline = trên pipeline CI
15 | Please + V = xin hãy… ; fix = sửa ; merge conflicts = xung đột khi merge
16 | I'll + V = tôi sẽ… ; rebase A on B = rebase A lên B (đặt lại nền nhánh)
17 | Let me + V = để tôi… ; create a branch for + N = tạo nhánh cho…
18 | I'll + V = tôi sẽ… ; commit + N = commit (lưu thay đổi) ; with a clear message = kèm thông điệp rõ ràng
19 | Approved = đã duyệt ; You can + V = bạn có thể… ; merge it = gộp nó vào
20 | Let's + V = mình cùng… ; use a design pattern = dùng một mẫu thiết kế
21 | We should + V = chúng ta nên… ; keep + N + adj = giữ… ở trạng thái… ; architecture = kiến trúc
22 | Should we + V? = chúng ta có nên…? ; A or B = A hay B ; monolith = kiến trúc nguyên khối
23 | Let's + V = mình cùng… ; choose = chọn ; a technology stack that fits + N = bộ công nghệ phù hợp với…
24 | be + V-ing = đang… ; build A with B = xây A bằng B
25 | be + V3 = được… (bị động) ; written in + ngôn ngữ = viết bằng… ; frontend = giao diện
26 | use A as B = dùng A làm B ; our database = cơ sở dữ liệu của chúng tôi
27 | is stored in + N = được lưu trong… (bị động) ; the cloud = đám mây
28 | expose + N = cung cấp (công khai) ; REST API = giao diện REST ; for + N = cho…
29 | Let me + V = để tôi… ; explain how + S + V = giải thích… hoạt động thế nào ; authentication = xác thực
30 | go through + N = đi qua… ; load balancer = bộ cân bằng tải
31 | cache + N = lưu đệm… ; to + V = để… ; improve speed = tăng tốc
32 | scale = mở rộng quy mô ; automatically = tự động ; with traffic = theo lưu lượng
33 | can + V = có thể… ; handle = xử lý ; thousands of + N = hàng nghìn… ; per second = mỗi giây
34 | need to + V = cần… ; optimize = tối ưu ; database query = truy vấn cơ sở dữ liệu
35 | Let's + V = mình cùng… ; add an index = thêm chỉ mục ; to speed up + N = để làm nhanh…
36 | should + V = nên… ; refactor = tái cấu trúc ; module = mô-đun
37 | There's some + N = có một ít… ; technical debt = nợ kỹ thuật ; (that) we need to address = mà chúng ta cần giải quyết
38 | be deprecated = đã lỗi thời, không còn được khuyến khích dùng ; library = thư viện
39 | Let's + V = mình cùng… ; upgrade to + N = nâng lên… ; the latest version = phiên bản mới nhất
40 | have + N = có… ; breaking changes = những thay đổi làm hỏng tương thích
41 | Is this + adj? = cái này có… không? ; backward compatible = tương thích ngược
42 | Let me + V = để tôi… ; write the documentation for + N = viết tài liệu cho…
43 | Where can I + V? = tôi có thể… ở đâu? ; find = tìm thấy ; technical documentation = tài liệu kỹ thuật
44 | Could you + V? = bạn… được không? ; walk sb through + N = giải thích cho ai từng bước về…
45 | Let's + V = mình cùng… ; do pair programming = lập trình cặp ; on this one = ở phần này
46 | be (not) familiar with + N = (không) quen thuộc với… ; codebase = mã nguồn
47 | Let me + V = để tôi… ; try a different approach = thử cách tiếp cận khác
48 | work on my machine = chạy được trên máy tôi (câu đùa quen thuộc của dev)
49 | Let's + V = mình cùng… ; run the tests = chạy kiểm thử ; again = lần nữa
50 | All + N + passed = tất cả… đều đạt (pass → passed)
51 | Great catch! = phát hiện tốt! ; Thanks for + V-ing = cảm ơn vì đã… ; point out = chỉ ra
`});
STRUCT_RAW.push({ topic: "w-support", lines: `
0 | Thank you for + V-ing = cảm ơn quý khách đã… ; contact = liên hệ (không có "to")
1 | How can I + V? = tôi có thể… như thế nào? ; help sb = giúp ai
2 | May I + V? = tôi xin phép… (lịch sự) ; have + N = lấy, xin… ; account number = số tài khoản
3 | Could you + V? = quý khách… được không? ; spell = đánh vần ; for me = giúp tôi
4 | Could you + V? = quý khách… được không? ; verify = xác minh ; email address = địa chỉ email
5 | I'll be happy to + V = tôi rất sẵn lòng… ; assist sb with + N = hỗ trợ ai việc gì
6 | I understand how + adj + S + V = tôi hiểu… phiền thế nào ; must be + adj = hẳn là…
7 | Let me + V = để tôi… ; look into + N = xem xét, kiểm tra…
8 | Could you hold for + N? = quý khách vui lòng chờ máy… ; for a moment = một lát
9 | Thank you for + V-ing = cảm ơn quý khách đã… ; hold = chờ máy
10 | I'll need + N + to + V = tôi cần… để… ; a few minutes = vài phút
11 | I'm going to + V = tôi sẽ (dự định) ; escalate A to B = chuyển vấn đề A lên B
12 | You'll + V = quý khách sẽ… ; receive an update = nhận cập nhật ; within + khoảng thời gian = trong vòng…
13 | Your ticket number is + số = số ticket của quý khách là…
14 | Please + V = xin hãy… ; keep = giữ ; for future reference = để tham khảo về sau
15 | Let me + V = để tôi… ; walk sb through + N = hướng dẫn ai từng bước
16 | First, + V = đầu tiên, hãy… ; go to + N = vào, đến…
17 | Then + V = sau đó hãy… ; click on + N = bấm vào…
18 | Could you tell me + what + S + V? = quý khách cho tôi biết… gì? ; on your screen = trên màn hình
19 | Please + V = xin hãy… ; click the link = bấm vào đường link ; in the email = trong email
20 | Have you + V3? = quý khách đã… chưa? ; spam folder = thư mục thư rác
21 | Let's + V = mình cùng… ; try + V-ing = thử làm gì ; reset = đặt lại
22 | I'll + V = tôi sẽ… ; send sb + N = gửi ai… ; right now = ngay bây giờ
23 | Please + V and + V = xin hãy… rồi… ; log out/log in = đăng xuất/đăng nhập
24 | has been + V3 = đã được… ; unlock = mở khóa
25 | have + V3 = đã… ; update = cập nhật ; account settings = cài đặt tài khoản
26 | Is there anything else + (that) + S + V? = còn điều gì khác… không? ; help sb with + N = giúp ai việc gì
27 | Did that + V? = cách đó có… không? ; solve a problem = giải quyết vấn đề
28 | I'm glad + (that) + S + V = tôi mừng vì… ; help = giúp
29 | Please + V = xin hãy… ; rate = đánh giá ; your experience with + N = trải nghiệm của quý khách với…
30 | value + N = trân trọng… ; feedback = góp ý
31 | be not available yet = chưa có ; feature = tính năng
32 | plan to + V = dự định… ; add = thêm ; in a future update = ở bản cập nhật sau
33 | pass A to B = chuyển A cho B ; suggestion = đề xuất ; product team = đội sản phẩm
34 | Our support hours are + khung giờ = giờ hỗ trợ của chúng tôi là… ; from A to B = từ A đến B
35 | be open 24/7 = mở cửa, hoạt động 24/7
36 | can also + V = cũng có thể… ; reach sb = liên hệ ai ; via + N = qua…
37 | Please visit + N = xin hãy truy cập… ; for more information = để biết thêm thông tin
38 | have + N = có… ; step-by-step guide = hướng dẫn từng bước ; on our website = trên website của chúng tôi
39 | I'll + V = tôi sẽ… ; send sb + N = gửi ai… ; video tutorial = video hướng dẫn
40 | will + V = sẽ… ; renew = gia hạn ; automatically = tự động
41 | How can I + V? = làm sao để tôi…? ; cancel = hủy ; subscription = gói đăng ký
42 | I'd like to + V = tôi muốn… ; upgrade = nâng cấp ; plan = gói dịch vụ
43 | What's included in + N? = … bao gồm những gì? ; premium plan = gói cao cấp
44 | Is there + N + available? = có… sẵn không? ; free trial = bản dùng thử miễn phí
45 | I'd like + N, please = tôi muốn… ; refund = hoàn tiền
46 | process + N = xử lý… ; within + số + business days = trong vòng… ngày làm việc
47 | haven't + V3 = chưa… (hiện tại hoàn thành, phủ định) ; confirmation email = email xác nhận
48 | can't + V = không thể… ; access = truy cập
49 | keep + V-ing = cứ liên tục… ; crash = bị đứng, thoát đột ngột ; on my phone = trên điện thoại của tôi
50 | Thank you for + N and + N = cảm ơn vì… và… ; patience = sự kiên nhẫn
51 | Have a wonderful day! = chúc một ngày tuyệt vời! ; wonderful = tuyệt vời
`});
STRUCT_RAW.push({ topic: "w-price", lines: `
0 | Here is + N = đây là… ; quotation = bảng báo giá ; for + N = cho…
1 | The total cost is + số tiền = tổng chi phí là… ; total = tổng
2 | include + N and + N = bao gồm… và… ; development = phát triển
3 | be charged separately = được tính phí riêng (bị động) ; maintenance = bảo trì
4 | offer + N = đề xuất, đưa ra… ; fixed-price contract = hợp đồng giá trọn gói
5 | We can also + V = chúng tôi cũng có thể… ; work on a time-and-material basis = làm theo giờ công thực tế
6 | hourly rate = đơn giá theo giờ ; is + số tiền = là…
7 | How is + N + V3? = … được … như thế nào? (bị động) ; calculate = tính toán
8 | Could you give us + N? = bạn cho chúng tôi… được không? ; a breakdown of + N = bảng chi tiết của…
9 | be a bit over + N = hơi vượt quá… ; budget = ngân sách
10 | Is there any room for + N? = có chỗ nào để… không? ; negotiation = thương lượng
11 | Could you + V? = bạn… được không? ; offer a discount = giảm giá
12 | We can offer + N + for + N = chúng tôi có thể giảm… cho… ; long-term contract = hợp đồng dài hạn
13 | the best + N + we can + V = … tốt nhất mà chúng tôi có thể… (so sánh nhất) ; offer = đưa ra
14 | Let's + V = mình cùng… ; find a solution that + V = tìm giải pháp mà… ; work for both sides = có lợi cho cả hai bên
15 | be willing to + V = sẵn sàng… ; compromise = nhượng bộ, thỏa hiệp
16 | Could we + V? = chúng ta… được không? ; remove = bỏ ; to + V = để… ; reduce the cost = giảm chi phí
17 | can + V = có thể… ; split A into B = chia A thành B ; smaller phases = các giai đoạn nhỏ hơn
18 | What are + N? = … là gì? ; payment terms = điều khoản thanh toán
19 | require + N = yêu cầu… ; deposit = tiền đặt cọc ; 30 percent = 30%
20 | be due upon + N = đến hạn khi… ; the remaining balance = số tiền còn lại ; delivery = bàn giao
21 | be due within + khoảng thời gian = đến hạn trong vòng… ; invoice date = ngày xuất hóa đơn
22 | invoice sb = xuất hóa đơn cho ai ; at the end of each month = vào cuối mỗi tháng
23 | Please + V = xin hãy… ; transfer A to B = chuyển A vào B ; bank account = tài khoản ngân hàng
24 | haven't + V3 = chưa… ; receive the payment = nhận được khoản thanh toán ; yet = chưa
25 | Could you + V? = bạn… được không? ; check the status of + N = kiểm tra tình trạng…
26 | Here is + N = đây là… ; the draft of + N = bản nháp của…
27 | Please + V = xin hãy… ; review = xem xét ; terms and conditions = các điều khoản và điều kiện
28 | will review + N = sẽ xem xét… ; legal team = bộ phận pháp lý
29 | Could you + V? = bạn… được không? ; clarify = làm rõ ; clause = điều khoản
30 | We'd like to + V = chúng tôi muốn… ; change = thay đổi ; section = mục, phần
31 | Who owns + N? = ai sở hữu…? ; intellectual property = quyền sở hữu trí tuệ
32 | belong to + sb = thuộc về ai ; after final payment = sau khi thanh toán xong
33 | sign + N = ký… ; non-disclosure agreement (NDA) = thỏa thuận bảo mật
34 | will be + V3 = sẽ được… (bị động tương lai) ; keep + N + confidential = giữ… bí mật
35 | What does + N + cover? = … bao gồm những gì? ; warranty = bảo hành
36 | provide + N = cung cấp… ; a three-month warranty = bảo hành ba tháng (danh từ ghép, month không thêm s) ; after delivery = sau bàn giao
37 | Bug fixes = các lần sửa lỗi ; during + N = trong suốt… ; are free = miễn phí
38 | What's + N? = … là gì? ; service level agreement (SLA) = cam kết mức độ dịch vụ
39 | guarantee + N = cam kết… ; 99.9 percent uptime = thời gian hoạt động 99,9%
40 | What happens if + S + V(s)? = chuyện gì xảy ra nếu…? ; either party = một trong hai bên ; terminate = chấm dứt
41 | We need + N = chúng tôi cần… ; 30 days' written notice = thông báo bằng văn bản trước 30 ngày
42 | Let's + V = mình cùng… ; sign the contract = ký hợp đồng
43 | Could you + V? = bạn… được không? ; send + N + by email = gửi… qua email ; signed copy = bản đã ký
44 | We have a deal = chúng ta đã thống nhất, chốt thỏa thuận
45 | be happy to + V = vui lòng… ; move forward with + N = tiến hành theo… ; proposal = đề xuất
46 | need + N + to + V = cần… để… ; consider + N = cân nhắc… ; offer = đề nghị
47 | let sb know + N = cho ai biết… ; decision = quyết định ; by + thời điểm = trước…
48 | look forward to + N = mong chờ… ; long-term partnership = quan hệ hợp tác lâu dài
`});
