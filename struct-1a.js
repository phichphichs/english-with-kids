// Cấu trúc viết sẵn (theo số thứ tự câu trong chủ đề). Dòng:  số | cấu trúc = nghĩa ; cấu trúc = nghĩa
window.STRUCT_RAW = window.STRUCT_RAW || [];
STRUCT_RAW.push({ topic: "w-greet", lines: `
0 | Good morning = chào buổi sáng (dùng đến trước 12 giờ trưa) ; everyone = mọi người (đi với động từ số ít)
1 | Good afternoon = chào buổi chiều ; How are you doing? = Bạn dạo này thế nào? (hỏi thăm thân mật)
2 | Nice to meet you = rất vui được gặp bạn (nói khi gặp lần đầu)
3 | It's a pleasure to + V = rất hân hạnh được làm gì ; in person = trực tiếp, gặp mặt
4 | My name is + tên = tên tôi là… ; a + nghề nghiệp = một (lập trình viên, kỹ sư…) ; and = nối hai mệnh đề
5 | work on + N = làm việc về, phụ trách cái gì ; the + N + team = nhóm…
6 | How long have you been with + N? = bạn làm ở… được bao lâu rồi? (hiện tại hoàn thành) ; be with + công ty = làm việc cho công ty
7 | S + V-ed + khoảng thời gian + ago = đã làm gì cách đây bao lâu ; join + N (không có "to") = tham gia, gia nhập
8 | Welcome to + N = chào mừng đến với…
9 | Let me + V = để tôi… ; show sb around + N = dẫn ai đi tham quan chỗ nào
10 | This is + N = đây là… (giới thiệu đồ vật, người)
11 | on the + số thứ tự + floor = ở tầng thứ mấy ; the second floor = tầng hai (tầng trệt/1 tính theo kiểu Anh-Mỹ có thể khác)
12 | Do you need help + V-ing? = bạn có cần giúp… không? ; set up = cài đặt, thiết lập
13 | send sb + sth = gửi cho ai cái gì ; I'll + V = tôi sẽ… (hứa, quyết định ngay)
14 | Let me + V = để tôi… ; introduce sb to sb = giới thiệu ai với ai
15 | Have you + V3? = bạn đã… chưa? (hiện tại hoàn thành) ; from + nhóm/nơi = đến từ, thuộc
16 | How was + N? = … thế nào? (hỏi về việc đã qua, dùng was)
17 | Did you + V? = bạn đã… phải không? (quá khứ đơn) ; have a good + N = có một… vui vẻ
18 | Are you free for + N? = bạn rảnh để… không? ; for lunch = vào bữa trưa
19 | Let's + V = mình cùng… ; grab a coffee = đi uống cà phê (nói thân mật)
20 | How's + N + going? = … đang thế nào rồi? ; so far = cho đến giờ
21 | as usual = như mọi khi ; busy = bận (câu rút gọn của "I'm busy as usual")
22 | Not too bad = cũng không tệ (cách trả lời "khỏe không") ; And you? = còn bạn thì sao?
23 | be swamped = ngập đầu việc (thành ngữ, thân mật) ; this week = tuần này
24 | Where are you from? = bạn đến từ đâu? ; be from + nơi = đến từ
25 | originally = vốn dĩ, gốc là ; be from + nơi = quê ở
26 | How do you usually + V? = bạn thường… bằng cách nào? ; get to work = đi làm, đến chỗ làm
27 | The traffic was + adj = giao thông… (traffic không đếm được) ; this morning = sáng nay
28 | Thanks for + V-ing/N = cảm ơn vì… ; have sb = mời ai đến, tiếp đón ai
29 | Thanks for + N = cảm ơn vì… ; your time = thời gian của bạn
30 | Excuse me = xin lỗi (để gây chú ý) ; Do you have a minute? = bạn có rảnh một chút không?
31 | Sorry to + V = xin lỗi vì phải… ; interrupt = ngắt lời, làm gián đoạn
32 | Could I + V? = tôi có thể… được không? (xin phép lịch sự) ; a quick question = một câu hỏi nhanh
33 | Do you mind if I + V? = bạn có phiền nếu tôi… không? (trả lời "No, go ahead" = không phiền)
34 | Please + V = xin hãy… ; make yourself at home = cứ tự nhiên như ở nhà
35 | Can I get you + N? = tôi lấy cho bạn… nhé? (mời) ; something to + V = thứ gì đó để làm gì
36 | Would you like + N? = bạn có muốn… không? (mời lịch sự) ; A or B = A hay B
37 | Let's + V = mình cùng… ; keep in touch = giữ liên lạc
38 | It was great + V-ing = thật tuyệt khi được… ; talk to sb = nói chuyện với ai
39 | See you + thời gian = hẹn gặp lại vào… ; tomorrow = ngày mai
40 | Have a + adj + N = chúc… vui vẻ (lời chúc khi chia tay) ; evening = buổi tối
41 | Enjoy + N! = chúc tận hưởng… ; weekend = cuối tuần
42 | Take care = bảo trọng, giữ gìn sức khỏe (lời chào tạm biệt)
43 | I'm sorry, could you + V? = xin lỗi, bạn… được không? ; say that again = nói lại lần nữa
44 | Could you + V? = bạn… được không? ; a little more slowly = chậm hơn một chút (so sánh hơn)
45 | I didn't catch + N = tôi chưa nghe rõ… ; catch = nghe kịp, nghe rõ
46 | How do you + V? = bạn… như thế nào? ; pronounce = phát âm
47 | A, but B = A, nhưng B ; do my best = cố gắng hết sức
48 | Feel free to + V = cứ thoải mái… ; correct sb = sửa lỗi cho ai
49 | Congratulations on + N = chúc mừng vì… ; promotion = việc thăng chức
`});
STRUCT_RAW.push({ topic: "w-meeting", lines: `
0 | Shall we + V? = mình… nhé? (đề nghị lịch sự) ; get started = bắt đầu
1 | Thanks for + V-ing = cảm ơn vì đã… ; join = tham gia (cuộc họp)
2 | Let's + V = mình cùng… ; a few more + N (số nhiều) = vài… nữa
3 | The purpose of + N + is to + V = mục đích của… là để… ; review = xem lại
4 | Here's + N = đây là… ; the agenda for + N = chương trình, nội dung họp của…
5 | have + N + to + V = có… cần làm ; cover = bàn đến, bao quát (nội dung)
6 | go through + N = xem qua, đi qua lần lượt ; one by one = từng cái một
7 | We only have + thời lượng, so + S + V = chỉ có… nên… ; stay on topic = đi đúng chủ đề
8 | move on to + N = chuyển sang… ; the next item = mục tiếp theo
9 | Could you + V, please? = bạn… giúp tôi được không? (nhờ vả lịch sự) ; share your screen = chia sẻ màn hình
10 | Can everyone + V? = mọi người có… được không? ; everyone + V(s) = động từ chia số ít
11 | Let me + V = để tôi… ; share = chia sẻ (slide, màn hình)
12 | I'd like to + V = tôi muốn… (lịch sự) ; give an overview = trình bày tổng quan
13 | Let me walk you through + N = để tôi hướng dẫn bạn từng bước về… ; walk sb through = giải thích chi tiết từng bước
14 | What do you think about + N? = bạn nghĩ gì về…? ; approach = cách tiếp cận
15 | Does that make sense? = như vậy có hợp lý, dễ hiểu không? ; make sense = có nghĩa, hợp lý
16 | Any + N? = có… nào không? (câu hỏi ngắn) ; thoughts or concerns = ý kiến hay lo ngại
17 | I'd like to hear + N = tôi muốn nghe… ; everyone's opinion = ý kiến của mọi người
18 | agree with + sb = đồng ý với ai (không dùng "agree to" cho người)
19 | I see your point, but + S + V = tôi hiểu ý bạn nhưng… ; have a different view = có quan điểm khác
20 | I'm afraid + S + V = tôi e là… (nói nhẹ nhàng khi từ chối, không đồng ý) ; disagree = không đồng ý
21 | That's a good point = ý đó hay đấy (khen ý kiến)
22 | I think we should + V = tôi nghĩ chúng ta nên… ; consider + N = cân nhắc cái gì
23 | Could you + V? = bạn… được không? ; elaborate on + N = nói rõ hơn về…
24 | give sb + an example = cho ai một ví dụ ; Could you + V? = bạn… được không?
25 | Let me + V = để tôi… ; clarify = làm rõ ; what I meant = điều tôi muốn nói
26 | I didn't quite + V = tôi chưa hoàn toàn… ; follow = theo kịp, hiểu được
27 | Can we + V? = mình… được không? ; go back to + N = quay lại… ; the previous + N = … trước đó
28 | put + N + on the parking lot = để việc đó lại bàn sau (thành ngữ họp hành)
29 | run out of + N = hết, cạn cái gì ; be running out of time = sắp hết giờ
30 | Let's wrap up = mình kết thúc nhé ; wrap up = tổng kết, kết thúc
31 | To summarize, + S + V = tóm lại… ; agree on + N = thống nhất về…
32 | Let's + V = mình cùng… ; recap = tóm tắt lại ; action items = các đầu việc cần làm
33 | Who will + V? = ai sẽ…? ; take ownership of + N = chịu trách nhiệm về…
34 | Let's + V = mình cùng… ; set a deadline = đặt hạn chót ; for it = cho việc đó
35 | I'll + V = tôi sẽ… ; send out = gửi đi (cho nhiều người)
36 | follow up = theo dõi tiếp, liên hệ lại ; by + phương tiện = bằng (email, phone)
37 | schedule + N = lên lịch cho cái gì ; follow-up meeting = buổi họp tiếp theo
38 | Is this + N + good for + sb? = … này có ổn với ai không? ; time slot = khung giờ
39 | Can we + V? = mình… được không? ; reschedule to + thời gian = dời sang…
40 | have a conflict = bị trùng lịch ; at that time = vào lúc đó
41 | Could you + V? = bạn… được không? ; send sb + sth = gửi ai cái gì ; calendar invite = lời mời trên lịch
42 | I'm sorry + (that) + S + V = xin lỗi vì… ; be late = đến muộn
43 | have to + V = phải làm gì ; leave early = về sớm
44 | Could you + V? = bạn… được không? ; record = ghi hình, ghi âm
45 | Please + V = xin hãy… ; mute = tắt tiếng ; when + S + V = khi…
46 | You're on mute = bạn đang tắt mic ; be on + trạng thái = đang ở chế độ…
47 | Could you + V? = bạn… được không? ; turn on = bật (camera, đèn)
48 | I'll + V = tôi sẽ… ; drop a link = thả đường link ; in the chat = trong khung chat
49 | Let's + V = mình cùng… ; vote on + N = biểu quyết về…
50 | have + V3 = đã… (hiện tại hoàn thành) ; reach a decision = đi đến quyết định
51 | Thank you all for + N = cảm ơn tất cả vì… ; input = ý kiến đóng góp
52 | Thanks, everyone = cảm ơn mọi người ; Meeting adjourned = buổi họp kết thúc (cách nói trang trọng)
`});
