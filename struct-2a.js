window.STRUCT_RAW = window.STRUCT_RAW || [];
STRUCT_RAW.push({ topic: "w-req", lines: `
0 | Let's + V = mình cùng… ; go over + N = xem lại, rà soát…
1 | Could you + V? = bạn… được không? ; walk sb through + N = giải thích từng bước về… cho ai
2 | What should + S + V + when + S + V? = … nên làm gì khi…? ; fail = thất bại, lỗi
3 | Who will be + V-ing? = ai sẽ (đang) làm…? (tương lai tiếp diễn) ; feature = tính năng
4 | What are + N? = … là gì? ; main = chính ; user roles = vai trò người dùng
5 | Should + S + be able to + V? = … có nên được phép… không? ; be able to + V = có thể, được phép
6 | Is this A or B? = đây là A hay B? ; must-have = bắt buộc phải có ; nice-to-have = có thì tốt
7 | Which + N (số nhiều) + are + N? = … nào là…? ; the highest priority = ưu tiên cao nhất (so sánh nhất)
8 | Let's + V = mình cùng… ; define = xác định, định nghĩa ; minimum viable product (MVP) = sản phẩm khả dụng tối thiểu
9 | We should + V = chúng ta nên… ; keep + N + adj = giữ cho… ở trạng thái…
10 | Can you give us + N? = bạn cho chúng tôi… được không? ; use case = tình huống sử dụng
11 | Could you + V? = bạn… được không? ; describe = mô tả ; expected behavior = hành vi mong đợi
12 | What happens if + S + V(s)? = chuyện gì xảy ra nếu…? (câu điều kiện loại 1, hiện tại đơn) ; invalid data = dữ liệu không hợp lệ
13 | Do you have any + N? = bạn có… nào không? ; A or B = A hoặc B
14 | We'll + V = chúng tôi sẽ… ; for your review = để quý khách xem xét
15 | Is there + N? = có… không? ; any = nào (câu hỏi) ; integration with + N = tích hợp với…
16 | Which + N + do you want to + V? = bạn muốn dùng… nào? ; payment gateway = cổng thanh toán
17 | Do you need + N? = bạn có cần… không? ; multi-language support = hỗ trợ đa ngôn ngữ
18 | Does it need to + V? = nó có cần… không? ; both A and B = cả A lẫn B
19 | Should + S + be + adj? = … có nên… không? ; mobile-friendly = thân thiện với di động
20 | What are + N? = … là gì? ; performance expectations = kỳ vọng về hiệu năng
21 | How + adj/adv + should + S + V? = … nên… đến mức nào? ; how fast = nhanh đến mức nào
22 | Are there any + N? = có… nào không? ; compliance requirements = yêu cầu tuân thủ quy định
23 | Do we need to + V? = chúng ta có cần… không? ; follow + N = tuân theo… ; security standards = chuẩn bảo mật
24 | Where will + S + be + V3? = … sẽ được… ở đâu? (bị động tương lai) ; store = lưu trữ
25 | have access to + N = có quyền truy cập vào… ; existing database = cơ sở dữ liệu hiện có
26 | Could you + V? = bạn… được không? ; provide = cung cấp ; API documentation = tài liệu API
27 | We'll need + N = chúng tôi sẽ cần… ; access to + N = quyền truy cập vào… ; test environment = môi trường thử nghiệm
28 | Who can + V? = ai có thể…? ; approve = duyệt
29 | Let's + V = mình cùng… ; write down = ghi lại ; as + N = dưới dạng…
30 | acceptance criteria = tiêu chí nghiệm thu ; What are + N? = … là gì?
31 | How will we know + (that) + S + V? = làm sao chúng ta biết…? ; be done = hoàn thành
32 | Let me + V = để tôi… ; confirm the scope with sb = xác nhận phạm vi với ai
33 | be out of scope = nằm ngoài phạm vi ; for this phase = cho giai đoạn này
34 | We can + V = chúng ta có thể… ; include + N + in + N = đưa… vào…
35 | would + V = sẽ (suy đoán, giả định) ; require = đòi hỏi, cần ; additional effort = thêm công sức
36 | technically possible = về kỹ thuật thì làm được ; A, but B = A, nhưng B ; complex = phức tạp
37 | We'd recommend + N = chúng tôi đề xuất… (We would) ; a simpler solution = giải pháp đơn giản hơn
38 | There are + số + N = có… ; option = phương án ; we can consider = (mệnh đề quan hệ) mà chúng ta có thể cân nhắc
39 | Each + N (số ít) + has = mỗi… đều có (động từ chia số ít) ; pros and cons = ưu và nhược điểm
40 | A is + adj-er, but + adj-er = A… hơn, nhưng… hơn ; faster/more expensive = nhanh hơn/đắt hơn
41 | Which + N + do you prefer? = bạn thích… nào hơn?
42 | Let me + V = để tôi… ; check with sb = hỏi lại, kiểm tra với ai
43 | get back to sb on + N = phản hồi lại cho ai về… ; I'll + V = tôi sẽ…
44 | Could you + V? = bạn… được không? ; in writing = bằng văn bản
45 | document + N = ghi chép lại bằng văn bản ; everything we agreed on = mọi điều chúng ta đã thống nhất
46 | Please + V = xin hãy… ; review = xem xét ; requirements document = tài liệu yêu cầu
47 | Is there anything + (that) + S + V? = có điều gì… không? ; miss = bỏ sót (quá khứ: missed)
48 | Once + S + V, + S + will + V = ngay khi… thì… ; approve = duyệt ; start development = bắt đầu phát triển
49 | We'll need + N + before + V-ing = chúng tôi cần… trước khi… ; sign-off = sự chấp thuận chính thức ; proceed = tiếp tục
50 | Let's + V = mình cùng… ; freeze = đóng băng, chốt ; for this sprint = cho sprint này
`});
STRUCT_RAW.push({ topic: "w-demo", lines: `
0 | show sb + N = cho ai xem… ; a demo of + N = bản demo của… ; Today I'll + V = hôm nay tôi sẽ…
1 | Let me + V = để tôi… ; start with + N = bắt đầu bằng… ; a quick overview = phần tổng quan nhanh
2 | This is + N = đây là… ; home screen = màn hình chính
3 | As you can see, + S + V = như quý khách thấy… ; clean and simple = gọn gàng và đơn giản
4 | Let me + V = để tôi… ; log in with + N = đăng nhập bằng… ; test account = tài khoản thử nghiệm
5 | Now I'll + V = bây giờ tôi sẽ… ; click on + N = bấm vào…
6 | You can + V = quý khách có thể… ; filter A by B = lọc A theo B
7 | You can + V = quý khách có thể… ; export A as B = xuất A thành định dạng B
8 | Let me show you how to + V = để tôi chỉ cách… ; create = tạo
9 | Just + V = chỉ cần… ; fill in = điền (biểu mẫu) ; click + N = bấm…
10 | S + V(s) + adv = (hệ thống) tự… ; automatically = tự động ; confirmation email = email xác nhận
11 | Notice how + adj + S + V = hãy để ý… thế nào ; how fast = nhanh đến mức nào
12 | update = cập nhật ; in real time = theo thời gian thực
13 | be still in progress = vẫn đang được thực hiện ; still = vẫn
14 | just a prototype = chỉ là bản mẫu ; so + S + V = nên… ; not final = chưa phải bản cuối
15 | will be + V3 = sẽ được… (bị động tương lai) ; polish = trau chuốt ; later = sau
16 | be connected to + N = được kết nối với… ; not … yet = chưa…
17 | We're + V-ing = chúng tôi đang… ; sample data = dữ liệu mẫu ; for now = tạm thời
18 | Please + V = xin hãy… ; ignore = bỏ qua ; placeholder text = chữ giữ chỗ
19 | seem to be + V-ing = có vẻ đang… ; lag = bị trễ, giật
20 | Let me + V = để tôi… ; refresh = tải lại
21 | worked fine = chạy tốt (quá khứ đơn) ; in our test environment = ở môi trường thử nghiệm của chúng tôi
22 | a known issue = lỗi đã biết ; and = và ; we're fixing it = chúng tôi đang sửa
23 | Good question = câu hỏi hay ; Let me show you = để tôi chỉ cho quý khách
24 | Can you see + N? = quý khách thấy… không? ; on the top right = ở góc trên bên phải
25 | Would you like me to + V? = quý khách có muốn tôi… không?
26 | Feel free to + V = cứ thoải mái… ; interrupt sb with + N = ngắt lời ai để hỏi…
27 | Do you have any + N? = quý khách có… nào không? ; so far = cho đến giờ
28 | What do you think of + N? = quý khách nghĩ gì về…?
29 | Is this what + S + V? = đây có phải là điều… không? ; have in mind = hình dung, dự tính
30 | Would you like + N? = quý khách có muốn… không? ; changes to + N = những thay đổi đối với…
31 | adjust + N + to + V = điều chỉnh… để… ; match + N = khớp với, hợp với…
32 | We'll + V = chúng tôi sẽ… ; add + N = thêm…
33 | responsive = tự co giãn theo màn hình ; works on + N = chạy trên… ; all devices = mọi thiết bị
34 | also + V(s) = cũng… ; support + N = hỗ trợ… ; dark mode = chế độ tối
35 | can + V = có thể… ; reset = đặt lại ; in + số + steps = trong… bước
36 | have + V3 = đã… (hiện tại hoàn thành) ; improve = cải thiện ; a lot = rất nhiều
37 | save + sb + N = giúp ai tiết kiệm… ; a lot of time = rất nhiều thời gian
38 | reduce + N = giảm… ; manual work = công việc thủ công ; significantly = đáng kể
39 | much + adj-er + than = … hơn nhiều so với… ; the old one = cái cũ
40 | test + N + with + N = thử nghiệm… với… ; over + số = hơn…
41 | You'll get access to + N = quý khách sẽ được cấp quyền truy cập… ; after + N = sau…
42 | Please + V = xin hãy… ; try out = dùng thử ; send us + N = gửi chúng tôi…
43 | We'll + V + and + V = chúng tôi sẽ… và… ; collect = thu thập
44 | be scheduled for + thời điểm = được hẹn vào… ; two weeks from now = hai tuần nữa kể từ bây giờ
45 | That concludes + N = đến đây là hết… (câu kết trang trọng)
46 | Any + N? = còn… nào không? ; final = cuối cùng
47 | Thank you for + N = cảm ơn vì… ; valuable = quý giá
`});
