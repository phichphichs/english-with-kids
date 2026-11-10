window.STRUCT_RAW = window.STRUCT_RAW || [];
STRUCT_RAW.push({ topic: "w-estimate", lines: `
0 | How long will it take to + V? = sẽ mất bao lâu để…? ; it takes + thời gian + to + V = mất bao lâu để làm gì
1 | I'd estimate + N = tôi ước tính khoảng… (I would) ; about = khoảng
2 | It should take + khoảng thời gian = chắc sẽ mất… ; should = dự kiến ; around = khoảng
3 | That's a rough estimate = đó là ước tính sơ bộ ; rough = sơ lược, chưa chính xác
4 | Let me get back to you with + N = để tôi phản hồi lại với… ; a more accurate estimate = ước tính chính xác hơn
5 | include + N = bao gồm… ; estimate = ước tính
6 | doesn't include + N = không bao gồm… (ngôi thứ ba số ít: doesn't)
7 | We need to + V = chúng ta cần… ; add buffer time = chừa thêm thời gian dự phòng
8 | What's + N? = … là gì? ; deadline = hạn chót
9 | The deadline is + thời điểm = hạn chót là… ; next + thứ = thứ… tuần sau
10 | Is + N + realistic? = … có khả thi không? ; that deadline = hạn chót đó
11 | a tight deadline = hạn chót sát ; tight = chặt, gấp
12 | do our best to + V = cố gắng hết sức để… ; meet the deadline = kịp hạn chót
13 | I can't promise + N = tôi không dám hứa… ; A, but B = A, nhưng B ; I'll try = tôi sẽ cố
14 | need + N + to + V = cần… để… ; properly = đúng cách, cẩn thận
15 | Can we + V? = mình… được không? ; extend + N + by + khoảng thời gian = gia hạn… thêm…
16 | have to + V = sẽ phải… ; push = lùi, dời ; release date = ngày phát hành
17 | be scheduled for + thời điểm = dự kiến vào… ; the end of the month = cuối tháng
18 | Here's + N = đây là… ; project timeline = lộ trình dự án
19 | The project has + số + N = dự án có… ; phase = giai đoạn
20 | cover + N = bao gồm… ; design and planning = thiết kế và lập kế hoạch
21 | will take about + thời gian = sẽ mất khoảng… ; development = phát triển
22 | start in + week + số = bắt đầu vào tuần thứ… ; testing = kiểm thử
23 | Here are + N (số nhiều) = đây là… ; key milestones = các cột mốc chính
24 | have + V3 = đã hoàn thành (hiện tại hoàn thành) ; the first milestone = cột mốc đầu tiên
25 | The next + N + is + N = … tiếp theo là… ; beta release = bản beta
26 | critical path = đường găng (chuỗi việc quyết định tiến độ) ; What's + N? = … là gì?
27 | depend on + N/V-ing = phụ thuộc vào… ; the API being ready = việc API đã sẵn sàng
28 | work on + N = làm việc về… ; in parallel = song song
29 | wait on + N = chờ (một quyết định, sự duyệt) ; approval = sự phê duyệt
30 | any delay on your side = bất kỳ sự chậm trễ nào từ phía quý khách ; affect = ảnh hưởng đến
31 | need + N + by + thời điểm = cần… trước… ; stay on schedule = giữ đúng tiến độ
32 | How many + N + are + V-ing? = có bao nhiêu… đang…? ; work on = làm việc về
33 | We can + V = chúng tôi có thể… ; two more + N = thêm hai… nữa
34 | won't necessarily + V = chưa chắc sẽ… ; speed up = làm nhanh hơn ; adding = việc thêm (V-ing làm chủ ngữ)
35 | We should + V = chúng ta nên… ; reduce the scope = giảm phạm vi ; to + V = để…
36 | Which + N + can we + V? = chúng ta có thể… … nào? ; cut = cắt bỏ
37 | Let's focus on + N = mình tập trung vào… ; what matters most = điều quan trọng nhất
38 | What are + N? = … là gì? ; risks = các rủi ro
39 | The main risk is + N = rủi ro chính là… ; third-party = bên thứ ba
40 | have a backup plan = có kế hoạch dự phòng
41 | a high-priority task = việc ưu tiên cao ; high-priority = (tính từ ghép) ưu tiên cao
42 | not urgent, but important = không gấp nhưng quan trọng ; but = nhưng
43 | Let's + V = mình cùng… ; put + N + on the backlog = đưa… vào danh sách việc tồn
44 | plan + N + for + N = lên kế hoạch cho… vào… ; the next sprint = sprint tiếp theo
45 | team capacity = năng lực của nhóm ; be limited = bị giới hạn ; this month = tháng này
46 | be at full capacity = đang kín việc, hết năng lực ; right now = ngay lúc này
47 | I'll + V = tôi sẽ… ; accordingly = cho phù hợp ; update the schedule = cập nhật lịch
48 | keep sb posted on + N = báo cho ai biết về… ; any changes = mọi thay đổi
`});
STRUCT_RAW.push({ topic: "w-progress", lines: `
0 | Let me + V = để tôi… ; give sb + N = đưa cho ai… ; progress update = cập nhật tiến độ
1 | be on track = đang đúng tiến độ
2 | be ahead of schedule = vượt tiến độ
3 | be slightly behind schedule = hơi chậm tiến độ ; slightly = hơi, một chút
4 | have + V3 = đã hoàn thành (hiện tại hoàn thành) ; 70 percent of + N = 70% của…
5 | be almost done = gần xong ; backend = phần phía máy chủ
6 | be about halfway done = xong khoảng một nửa ; frontend = phần giao diện
7 | finish + N = hoàn thành… (quá khứ: finished) ; user authentication = xác thực người dùng
8 | We're currently + V-ing = hiện tại chúng tôi đang… ; work on = làm về
9 | We'll start + V-ing = chúng tôi sẽ bắt đầu… ; next week = tuần sau
10 | Here's what + S + V = đây là những gì… ; accomplish = hoàn thành, đạt được (quá khứ: accomplished)
11 | Here's the plan for + N = đây là kế hoạch cho… ; next week = tuần tới
12 | resolve + N = giải quyết… ; most of + N = phần lớn… ; last sprint = sprint trước
13 | There are still + N = vẫn còn… ; a few + N (số nhiều) = vài… ; open issues = vấn đề chưa xử lý
14 | run into + N = gặp phải… (quá khứ: ran into) ; unexpected = bất ngờ
15 | be caused by + N = bị gây ra bởi… (bị động) ; compatibility issue = lỗi tương thích
16 | have + V3 = đã… ; find a workaround = tìm ra cách xử lý tạm thời
17 | We're + V-ing = chúng tôi đang… ; investigate = điều tra ; root cause = nguyên nhân gốc
18 | be under control = trong tầm kiểm soát
19 | There's nothing to + V = không có gì để… ; worry about = lo lắng về
20 | want to + V = muốn… ; flag a risk = báo trước một rủi ro ; potential = tiềm ẩn
21 | might + V = có thể… ; impact + N = ảnh hưởng đến… ; delivery date = ngày bàn giao
22 | need + N + on + N = cần… về… ; your decision = quyết định của quý khách
23 | need to + V = cần… ; escalate = báo cấp trên, nâng cấp xử lý
24 | Here are + N = đây là… ; key metrics = các chỉ số chính
25 | has improved by + số = đã cải thiện thêm… (hiện tại hoàn thành) ; page load time = thời gian tải trang
26 | drop = giảm (quá khứ: dropped) ; significantly = đáng kể ; error rate = tỷ lệ lỗi
27 | be at + số = ở mức… ; test coverage = độ phủ kiểm thử
28 | close + N = đóng (ticket) ; this sprint = trong sprint này
29 | show (that) + S + V = cho thấy rằng… ; be on target = đạt mục tiêu ; burn-down chart = biểu đồ burn-down
30 | Here's + N = đây là… ; sprint review summary = tóm tắt buổi sprint review
31 | do a great job = làm rất tốt (quá khứ: did) ; this sprint = trong sprint này
32 | learn + N + from + N = rút ra… từ… ; a few lessons = vài bài học
33 | Let's talk about + N = mình nói về… ; what went well = điều đã diễn ra tốt (went = quá khứ của go)
34 | What could we + V? = chúng ta có thể… điều gì? ; improve = cải thiện
35 | Let's do + N = mình cùng làm… ; retrospective = buổi nhìn lại, rút kinh nghiệm ; at the end of + N = vào cuối…
36 | send sb + N = gửi ai… ; every + thứ = vào mỗi… ; weekly report = báo cáo tuần
37 | be attached to + N = được đính kèm vào… (bị động)
38 | track + N = theo dõi… ; on the board = trên bảng công việc
39 | give sb access to + N = cấp cho ai quyền truy cập… ; project board = bảng dự án
40 | Could you + V? = bạn… được không? ; check the status of + N = kiểm tra tình trạng của…
41 | What's + N? = … là gì? ; current status = tình trạng hiện tại
42 | Any updates on + N? = có cập nhật gì về… không? (câu rút gọn)
43 | wait for + N = chờ… ; final assets = tài nguyên bản cuối
44 | go smoothly = diễn ra suôn sẻ (went) ; testing phase = giai đoạn kiểm thử
45 | be ready for + N = sẵn sàng cho… ; user acceptance testing (UAT) = kiểm thử nghiệm thu
46 | Please + V = xin hãy… ; verify = xác minh ; on your side = phía quý khách
47 | hand over + N = bàn giao… ; next month = tháng sau
48 | Thank you for + N = cảm ơn vì… ; continued support = sự ủng hộ liên tục
`});
STRUCT_RAW.push({ topic: "w-bug", lines: `
0 | find + N (quá khứ: found) = tìm thấy, phát hiện ; a bug in + N = một lỗi ở…
1 | Could you + V? = bạn… được không? ; describe + N + in detail = mô tả… chi tiết
2 | What were you + V-ing when + S + V-ed? = bạn đang… khi… xảy ra? (quá khứ tiếp diễn + quá khứ đơn)
3 | Can you + V? = bạn có thể… không? ; reproduce = tái hiện
4 | Here are + N = đây là… ; the steps to + V = các bước để… ; reproduce = tái hiện
5 | be different from + N = khác với… ; expected result = kết quả mong đợi ; actual = thực tế
6 | Could you send us + N? = bạn gửi chúng tôi… được không? ; screenshot = ảnh chụp màn hình
7 | Could you send us + N? = bạn gửi chúng tôi… được không? ; error message = thông báo lỗi
8 | Please + V = xin hãy… ; attach = đính kèm ; log files = file log
9 | Which + N + are you + V-ing? = bạn đang dùng… nào? ; browser = trình duyệt
10 | What version of + N + are you running? = bạn đang chạy phiên bản nào của…? ; run = chạy (ứng dụng)
11 | Does it + V? = nó có… không? ; happen every time = lần nào cũng xảy ra
12 | only + V(s) = chỉ… ; occasionally = thỉnh thoảng
13 | start after + N = bắt đầu sau… (quá khứ: started) ; the last update = lần cập nhật gần nhất
14 | Let me + V = để tôi… ; look into + N = xem xét, điều tra… ; right away = ngay lập tức
15 | be aware of + N = biết về… ; and (be) working on it = và đang xử lý nó
16 | have + V3 = đã… ; create a ticket for + N = tạo ticket cho…
17 | assign + N + to + sb = giao… cho ai (assigned) ; bug = lỗi
18 | a critical bug that + V = một lỗi nghiêm trọng mà… (mệnh đề quan hệ) ; block = chặn, cản trở
19 | a minor issue = một lỗi nhỏ ; and not urgent = và không gấp
20 | fix + N = sửa… ; in the next release = ở bản phát hành tới
21 | need to + V = cần… ; roll back to + N = quay về… ; the previous version = phiên bản trước
22 | be currently unavailable = hiện không truy cập được ; service = dịch vụ
23 | be + V-ing = đang… ; return + N = trả về… ; a 500 error = lỗi 500
24 | run slowly = chạy chậm ; the system is running = hiện tại tiếp diễn
25 | There seems to be + N = có vẻ có… ; memory leak = rò rỉ bộ nhớ
26 | time out = quá hạn (quá khứ: timed out) ; database connection = kết nối cơ sở dữ liệu
27 | be not responding = không phản hồi ; API = giao diện lập trình
28 | Let me + V = để tôi… ; check the logs = xem log
29 | Let me try to + V = để tôi thử… ; debug = gỡ lỗi
30 | I think + S + V = tôi nghĩ… ; find the root cause = tìm ra nguyên nhân gốc
31 | be caused by + N = bị gây ra bởi… (quá khứ: was caused) ; null value = giá trị null
32 | has been fixed = đã được sửa (hiện tại hoàn thành bị động)
33 | be ready for testing = sẵn sàng để kiểm thử ; fix (danh từ) = bản sửa
34 | have + V3 = đã… ; deploy A to B = triển khai A lên B ; hotfix = bản vá nóng ; production = môi trường thật
35 | Could you please + V and + V? = bạn vui lòng… và… được không? ; let us know = báo cho chúng tôi biết
36 | Please + V and + V = xin hãy… và… ; clear the cache = xóa bộ nhớ đệm
37 | Have you + V3? = bạn đã… chưa? ; try + V-ing = thử làm gì ; restart = khởi động lại
38 | should be + V3 = chắc đã được… ; resolved = được giải quyết
39 | Is it + V-ing on your end? = bên phía bạn nó chạy được chưa? ; on your end = phía bạn
40 | We're sorry for + N = chúng tôi xin lỗi vì… ; downtime = thời gian ngừng hoạt động
41 | write + N = viết… ; post-mortem report = báo cáo phân tích sự cố sau khi xảy ra
42 | take steps to + V = có biện pháp để… ; prevent + N + from + V-ing = ngăn… khỏi… ; happen again = xảy ra lần nữa
43 | have + V3 = đã… ; add a test to + V = thêm kiểm thử để… ; cover = bao phủ
44 | Let's + V = mình cùng… ; set up = thiết lập ; monitoring and alerts = giám sát và cảnh báo
45 | be on call = đang trực sự cố ; this weekend = cuối tuần này
46 | be on call = đang trực ; tonight = tối nay
47 | an emergency = tình huống khẩn cấp
48 | Let's + V = mình cùng… ; start an incident call = mở cuộc họp xử lý sự cố ; right now = ngay bây giờ
49 | Please keep us updated on + N = xin cập nhật cho chúng tôi về… ; progress = tiến triển
50 | be back to normal = trở lại bình thường ; everything = mọi thứ
`});
