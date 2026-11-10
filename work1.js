// Công sở IT - phần 1. Mỗi dòng: tiếng Anh | tiếng Việt
window.WORK_RAW = window.WORK_RAW || [];
WORK_RAW.push(
{ id: "w-greet", icon: "👋", name: "Chào hỏi & làm quen", lines: `
Good morning, everyone. | Chào buổi sáng mọi người.
Good afternoon. How are you doing? | Chào buổi chiều. Bạn khỏe không?
Nice to meet you. | Rất vui được gặp bạn.
It's a pleasure to meet you in person. | Rất hân hạnh được gặp trực tiếp.
My name is Linh, and I'm a backend developer. | Tôi là Linh, lập trình viên backend.
I work on the payments team. | Tôi làm ở nhóm thanh toán.
How long have you been with the company? | Bạn làm ở công ty được bao lâu rồi?
I joined the team three months ago. | Tôi gia nhập nhóm cách đây ba tháng.
Welcome to the team! | Chào mừng bạn đến với nhóm!
Let me show you around the office. | Để tôi dẫn bạn đi tham quan văn phòng.
This is your desk. | Đây là bàn làm việc của bạn.
The kitchen is on the second floor. | Bếp ăn ở tầng hai.
Do you need help setting up your laptop? | Bạn có cần giúp cài đặt laptop không?
I'll send you the Wi-Fi password. | Tôi sẽ gửi bạn mật khẩu Wi-Fi.
Let me introduce you to our team lead. | Để tôi giới thiệu bạn với trưởng nhóm.
Have you met Minh from the QA team? | Bạn đã gặp Minh bên nhóm QA chưa?
How was your weekend? | Cuối tuần của bạn thế nào?
Did you have a good holiday? | Kỳ nghỉ của bạn vui chứ?
Are you free for lunch today? | Hôm nay bạn rảnh ăn trưa không?
Let's grab a coffee. | Mình đi uống cà phê nhé.
How's your day going so far? | Ngày hôm nay của bạn thế nào rồi?
Busy as usual. | Vẫn bận như mọi khi.
Not too bad, thanks. And you? | Cũng ổn, cảm ơn. Còn bạn?
I'm swamped this week. | Tuần này tôi ngập đầu việc.
Where are you from? | Bạn đến từ đâu?
I'm originally from Da Nang. | Tôi quê ở Đà Nẵng.
How do you usually get to work? | Bạn thường đi làm bằng gì?
The traffic was terrible this morning. | Sáng nay kẹt xe kinh khủng.
Thanks for having me. | Cảm ơn đã đón tiếp tôi.
Thanks for your time. | Cảm ơn bạn đã dành thời gian.
Excuse me, do you have a minute? | Xin lỗi, bạn có rảnh một chút không?
Sorry to interrupt. | Xin lỗi vì đã làm gián đoạn.
Could I ask you a quick question? | Tôi hỏi bạn nhanh một câu được không?
Do you mind if I sit here? | Tôi ngồi đây được không?
Please make yourself at home. | Cứ tự nhiên như ở nhà nhé.
Can I get you something to drink? | Bạn muốn uống gì không?
Would you like tea or coffee? | Bạn muốn uống trà hay cà phê?
Let's keep in touch. | Mình giữ liên lạc nhé.
It was great talking to you. | Rất vui được nói chuyện với bạn.
See you tomorrow. | Mai gặp lại nhé.
Have a nice evening. | Chúc bạn buổi tối vui vẻ.
Enjoy your weekend! | Cuối tuần vui vẻ nhé!
Take care. | Giữ gìn sức khỏe nhé.
I'm sorry, could you say that again? | Xin lỗi, bạn nói lại được không?
Could you speak a little more slowly? | Bạn nói chậm hơn một chút được không?
I didn't catch your name. | Tôi chưa nghe rõ tên bạn.
How do you pronounce your name? | Tên bạn đọc thế nào?
My English isn't perfect, but I'll do my best. | Tiếng Anh của tôi chưa hoàn hảo, nhưng tôi sẽ cố gắng.
Feel free to correct me. | Bạn cứ sửa cho tôi nhé.
Congratulations on your promotion! | Chúc mừng bạn được thăng chức!
`},
{ id: "w-standup", icon: "🌅", name: "Họp đứng hằng ngày (daily standup)", lines: `
Let's start the daily standup. | Mình bắt đầu buổi họp đứng hằng ngày nhé.
Who wants to go first? | Ai muốn nói trước?
Yesterday I worked on the login page. | Hôm qua tôi làm trang đăng nhập.
Yesterday I fixed two bugs in the checkout flow. | Hôm qua tôi sửa hai lỗi ở luồng thanh toán.
Today I'm going to finish the API integration. | Hôm nay tôi sẽ hoàn thành phần tích hợp API.
I plan to start on the search feature today. | Hôm nay tôi định bắt đầu tính năng tìm kiếm.
I'll be working on unit tests this afternoon. | Chiều nay tôi sẽ viết unit test.
I'm blocked by the missing design files. | Tôi bị vướng vì thiếu file thiết kế.
I'm waiting for feedback from the client. | Tôi đang chờ phản hồi từ khách hàng.
I don't have any blockers. | Tôi không có vướng mắc nào.
I need some help with the database migration. | Tôi cần giúp đỡ về việc di chuyển cơ sở dữ liệu.
Can someone review my pull request? | Ai review giúp pull request của tôi được không?
I'm still working on the same task. | Tôi vẫn đang làm task cũ.
It's taking longer than expected. | Việc này mất nhiều thời gian hơn dự kiến.
I should be done by the end of the day. | Tôi sẽ xong trước cuối ngày.
It's almost finished. | Gần xong rồi.
I'll update the ticket after this meeting. | Tôi sẽ cập nhật ticket sau cuộc họp này.
Let's take this offline. | Mình bàn riêng chuyện này sau nhé.
Let's discuss it after the standup. | Mình bàn việc đó sau buổi standup nhé.
Can we keep the updates short? | Mình báo cáo ngắn gọn thôi nhé?
Is anyone else blocked? | Có ai khác đang bị vướng không?
Does anyone have questions? | Có ai có câu hỏi không?
The build failed again this morning. | Sáng nay bản build lại lỗi.
The staging server is down. | Máy chủ staging đang sập.
I'm out of the office tomorrow. | Ngày mai tôi không có mặt ở văn phòng.
I'll be on leave next Monday. | Thứ Hai tới tôi nghỉ phép.
I'm working from home today. | Hôm nay tôi làm việc ở nhà.
Please move my task to "In Progress". | Nhờ chuyển task của tôi sang "Đang thực hiện".
I've moved the ticket to "Done". | Tôi đã chuyển ticket sang "Hoàn thành".
The task is ready for QA. | Task đã sẵn sàng cho QA kiểm tra.
I've pushed my changes to the repository. | Tôi đã đẩy thay đổi lên kho mã nguồn.
I merged the branch into main. | Tôi đã merge nhánh vào main.
We're on track for the sprint goal. | Chúng ta đang đúng tiến độ cho mục tiêu sprint.
We're a bit behind schedule. | Chúng ta đang hơi chậm tiến độ.
We might not finish everything this sprint. | Có thể chúng ta không xong hết trong sprint này.
Let's move this story to the next sprint. | Mình chuyển story này sang sprint sau nhé.
Let's prioritize the critical bugs first. | Mình ưu tiên các lỗi nghiêm trọng trước.
Who's picking up this ticket? | Ai nhận ticket này?
I can take that one. | Tôi nhận việc đó được.
I'll pair with you on that. | Tôi sẽ làm cặp với bạn việc đó.
Let me know if you need anything. | Cần gì thì báo tôi nhé.
Thanks for the update. | Cảm ơn bạn đã cập nhật.
Great progress, everyone. | Mọi người tiến bộ tốt lắm.
That's all from me. | Phần của tôi đến đây là hết.
Anything else before we wrap up? | Còn gì nữa trước khi kết thúc không?
Let's call it a day. | Hôm nay mình dừng ở đây nhé.
Same time tomorrow. | Mai họp cùng giờ nhé.
Let's keep it up! | Cứ phát huy nhé!
`},
{ id: "w-meeting", icon: "🗓️", name: "Điều phối & tham gia họp", lines: `
Shall we get started? | Mình bắt đầu nhé?
Thanks for joining, everyone. | Cảm ơn mọi người đã tham dự.
Let's wait a few more minutes for the others. | Mình chờ thêm vài phút cho mọi người khác nhé.
The purpose of this meeting is to review the roadmap. | Mục đích buổi họp này là xem lại lộ trình.
Here's the agenda for today. | Đây là chương trình họp hôm nay.
We have three items to cover. | Chúng ta có ba mục cần bàn.
Let's go through the agenda one by one. | Mình đi qua từng mục trong chương trình nhé.
We only have 30 minutes, so let's stay on topic. | Chỉ có 30 phút nên mình tập trung vào chủ đề nhé.
Let's move on to the next item. | Mình chuyển sang mục tiếp theo.
Could you share your screen, please? | Bạn chia sẻ màn hình được không?
Can everyone see my screen? | Mọi người thấy màn hình của tôi chứ?
Let me share the slides. | Để tôi chia sẻ slide.
I'd like to give a quick overview. | Tôi muốn trình bày tổng quan nhanh.
Let me walk you through the plan. | Để tôi trình bày kế hoạch cho mọi người.
What do you think about this approach? | Bạn nghĩ gì về hướng tiếp cận này?
Does that make sense? | Như vậy có hợp lý không?
Any thoughts or concerns? | Mọi người có ý kiến hay lo ngại gì không?
I'd like to hear everyone's opinion. | Tôi muốn nghe ý kiến của mọi người.
I agree with you. | Tôi đồng ý với bạn.
I see your point, but I have a different view. | Tôi hiểu ý bạn, nhưng tôi có quan điểm khác.
I'm afraid I disagree. | Tôi e là tôi không đồng ý.
That's a good point. | Ý đó hay đấy.
I think we should consider another option. | Tôi nghĩ chúng ta nên cân nhắc phương án khác.
Could you elaborate on that? | Bạn nói rõ hơn được không?
Could you give us an example? | Bạn cho chúng tôi một ví dụ được không?
Let me clarify what I meant. | Để tôi làm rõ ý của tôi.
Sorry, I didn't quite follow. | Xin lỗi, tôi chưa theo kịp lắm.
Can we go back to the previous slide? | Mình quay lại slide trước được không?
Let's put that on the parking lot. | Mình để vấn đề đó lại bàn sau nhé.
We're running out of time. | Chúng ta sắp hết giờ rồi.
Let's wrap up. | Mình kết thúc nhé.
To summarize, we agreed on three things. | Tóm lại, chúng ta đã thống nhất ba điều.
Let's recap the action items. | Mình tóm tắt lại các đầu việc nhé.
Who will take ownership of this task? | Ai sẽ chịu trách nhiệm việc này?
Let's set a deadline for it. | Mình đặt hạn chót cho việc đó nhé.
I'll send out the meeting notes. | Tôi sẽ gửi biên bản họp.
I'll follow up by email. | Tôi sẽ gửi email theo dõi sau.
Let's schedule a follow-up meeting. | Mình hẹn một buổi họp tiếp theo nhé.
Is this time slot good for everyone? | Khung giờ này ổn với mọi người chứ?
Can we reschedule the meeting to Thursday? | Mình dời cuộc họp sang thứ Năm được không?
I have a conflict at that time. | Giờ đó tôi bị trùng lịch.
Could you send me a calendar invite? | Bạn gửi lời mời lịch cho tôi được không?
I'm sorry I'm late. | Xin lỗi tôi đến trễ.
I have to leave early today. | Hôm nay tôi phải về sớm.
Could you record the meeting? | Bạn ghi hình buổi họp được không?
Please mute your microphone when you're not speaking. | Vui lòng tắt mic khi không phát biểu.
You're on mute. | Bạn đang tắt mic.
Could you turn on your camera? | Bạn bật camera được không?
I'll drop a link in the chat. | Tôi sẽ thả đường link vào khung chat.
Let's vote on it. | Mình biểu quyết nhé.
We have reached a decision. | Chúng ta đã đi đến quyết định.
Thank you all for your input. | Cảm ơn mọi người đã đóng góp ý kiến.
Thanks, everyone. Meeting adjourned. | Cảm ơn mọi người. Buổi họp kết thúc.
`},
{ id: "w-email", icon: "✉️", name: "Viết email công việc", lines: `
Dear Mr. Smith, | Kính gửi ông Smith,
Hi team, | Chào cả nhóm,
I hope this email finds you well. | Tôi hy vọng bạn vẫn khỏe.
Thank you for your prompt reply. | Cảm ơn bạn đã phản hồi nhanh chóng.
Thank you for getting back to me. | Cảm ơn bạn đã trả lời tôi.
I'm writing to follow up on our last meeting. | Tôi viết email để tiếp nối cuộc họp lần trước.
I'm writing to inquire about the project status. | Tôi viết để hỏi về tình trạng dự án.
I'm reaching out regarding the invoice. | Tôi liên hệ về hóa đơn.
Please find the attached document. | Vui lòng xem tài liệu đính kèm.
I've attached the latest report. | Tôi đã đính kèm báo cáo mới nhất.
Could you please send me the specifications? | Bạn vui lòng gửi tôi bản đặc tả được không?
Could you confirm the delivery date? | Bạn xác nhận ngày bàn giao được không?
Please let me know if you have any questions. | Có thắc mắc gì xin cứ cho tôi biết.
Please feel free to reach out. | Xin cứ liên hệ với tôi.
I'd appreciate your feedback by Friday. | Tôi rất mong nhận phản hồi của bạn trước thứ Sáu.
I look forward to hearing from you. | Tôi mong sớm nhận được phản hồi của bạn.
I look forward to working with you. | Tôi mong được làm việc cùng bạn.
Just a quick reminder about the deadline. | Chỉ nhắc nhanh về hạn chót.
This is a gentle reminder that the payment is due. | Đây là lời nhắc nhẹ rằng hạn thanh toán đã đến.
As discussed, I'll send you the proposal tomorrow. | Như đã bàn, ngày mai tôi sẽ gửi đề xuất.
As per our conversation, here's the summary. | Theo cuộc trao đổi của chúng ta, đây là phần tóm tắt.
Following up on my previous email. | Tiếp theo email trước của tôi.
I wanted to check if you received my last email. | Tôi muốn kiểm tra bạn đã nhận email trước chưa.
Sorry for the late reply. | Xin lỗi vì trả lời muộn.
Apologies for the inconvenience. | Xin lỗi vì sự bất tiện này.
Thank you for your patience. | Cảm ơn sự kiên nhẫn của bạn.
I'm currently out of the office with limited access to email. | Hiện tôi đang vắng mặt và ít khi truy cập email.
I'll be back on Monday. | Tôi sẽ trở lại vào thứ Hai.
For urgent matters, please contact my colleague. | Với việc gấp, vui lòng liên hệ đồng nghiệp của tôi.
I'm copying my manager on this email. | Tôi đang cc quản lý của tôi trong email này.
Adding John to this thread. | Tôi thêm John vào chuỗi email này.
I'll loop in the design team. | Tôi sẽ kéo nhóm thiết kế vào trao đổi.
Please reply all so everyone stays informed. | Vui lòng reply all để mọi người cùng nắm thông tin.
Could we set up a call to discuss this? | Mình đặt một cuộc gọi để bàn việc này nhé?
Are you available for a call tomorrow? | Ngày mai bạn rảnh gọi điện không?
Please confirm your availability. | Vui lòng xác nhận lịch rảnh của bạn.
Here's a summary of what we discussed. | Đây là tóm tắt những gì chúng ta đã bàn.
Please review and let me know your thoughts. | Vui lòng xem và cho tôi biết ý kiến.
Please approve the attached quotation. | Vui lòng duyệt bảng báo giá đính kèm.
I've updated the document as requested. | Tôi đã cập nhật tài liệu theo yêu cầu.
The changes are highlighted in yellow. | Các thay đổi được tô vàng.
Could you please sign and return it? | Bạn vui lòng ký và gửi lại được không?
I'm happy to help with anything else. | Tôi sẵn lòng hỗ trợ thêm bất cứ điều gì.
Let me know if this works for you. | Hãy cho tôi biết nếu cách này ổn với bạn.
Thanks in advance for your help. | Cảm ơn bạn trước vì sự giúp đỡ.
Best regards, | Trân trọng,
Kind regards, | Trân trọng,
Sincerely, | Chân thành,
Thanks and regards, | Cảm ơn và trân trọng,
Have a great week ahead. | Chúc bạn một tuần làm việc tốt đẹp.
Please disregard my previous email. | Vui lòng bỏ qua email trước của tôi.
Sorry, I attached the wrong file. | Xin lỗi, tôi đính kèm nhầm file.
`},
{ id: "w-clientfirst", icon: "🤝", name: "Gặp khách hàng lần đầu", lines: `
Thank you for taking the time to meet with us. | Cảm ơn quý khách đã dành thời gian gặp chúng tôi.
We're excited to work with you. | Chúng tôi rất háo hức được làm việc với quý khách.
Let me introduce our team. | Để tôi giới thiệu nhóm của chúng tôi.
This is our project manager, Hoa. | Đây là quản lý dự án của chúng tôi, Hoa.
We're a software company specializing in mobile apps. | Chúng tôi là công ty phần mềm chuyên về ứng dụng di động.
We have over ten years of experience in this field. | Chúng tôi có hơn mười năm kinh nghiệm trong lĩnh vực này.
We've worked with clients in banking and e-commerce. | Chúng tôi đã làm việc với khách hàng ngành ngân hàng và thương mại điện tử.
Could you tell us a bit about your company? | Quý khách giới thiệu đôi chút về công ty được không?
What does your business do? | Doanh nghiệp của quý khách hoạt động trong lĩnh vực gì?
Who are your target customers? | Khách hàng mục tiêu của quý khách là ai?
What problem are you trying to solve? | Quý khách đang muốn giải quyết vấn đề gì?
What are your main goals for this project? | Mục tiêu chính của quý khách cho dự án này là gì?
What does success look like for you? | Với quý khách, thế nào là thành công?
Do you have an existing system? | Quý khách đã có hệ thống hiện tại chưa?
What are the biggest pain points right now? | Hiện nay khó khăn lớn nhất là gì?
How many users do you expect? | Quý khách dự kiến có bao nhiêu người dùng?
Do you have a budget in mind? | Quý khách đã có ngân sách dự kiến chưa?
What's your expected timeline? | Quý khách mong muốn tiến độ như thế nào?
When do you need the product to launch? | Khi nào quý khách cần ra mắt sản phẩm?
Who will be the main point of contact? | Ai sẽ là đầu mối liên hệ chính?
Who makes the final decisions? | Ai là người quyết định cuối cùng?
We'd like to understand your needs first. | Chúng tôi muốn hiểu rõ nhu cầu của quý khách trước.
Let me take some notes. | Để tôi ghi chú lại.
Let me make sure I understand correctly. | Để tôi chắc chắn rằng mình hiểu đúng.
So what you're saying is that you need a customer portal. | Vậy ý quý khách là cần một cổng thông tin khách hàng.
Do you have any reference examples? | Quý khách có ví dụ tham khảo nào không?
Could you share any existing documentation? | Quý khách chia sẻ tài liệu hiện có được không?
We'll prepare a proposal based on today's discussion. | Chúng tôi sẽ chuẩn bị đề xuất dựa trên buổi trao đổi hôm nay.
We'll send you a detailed quote by next Wednesday. | Chúng tôi sẽ gửi báo giá chi tiết trước thứ Tư tuần sau.
Here's our company profile. | Đây là hồ sơ năng lực của công ty chúng tôi.
Here's a case study of a similar project. | Đây là một dự án tương tự mà chúng tôi đã thực hiện.
We can provide references from past clients. | Chúng tôi có thể cung cấp thông tin tham khảo từ khách hàng cũ.
Our approach is to deliver in small iterations. | Cách làm của chúng tôi là bàn giao theo từng vòng nhỏ.
We follow the Agile methodology. | Chúng tôi làm việc theo phương pháp Agile.
You'll see progress every two weeks. | Quý khách sẽ thấy tiến độ mỗi hai tuần.
We'll keep you updated throughout the project. | Chúng tôi sẽ cập nhật cho quý khách suốt dự án.
Communication is very important to us. | Giao tiếp rất quan trọng với chúng tôi.
What's the best way to reach you? | Cách liên lạc tốt nhất với quý khách là gì?
Do you prefer email or phone calls? | Quý khách thích email hay gọi điện hơn?
We'll set up a shared channel on Slack. | Chúng tôi sẽ lập một kênh chung trên Slack.
Could you introduce us to your technical team? | Quý khách giới thiệu chúng tôi với đội kỹ thuật được không?
We'd like to schedule a kickoff meeting. | Chúng tôi muốn hẹn họp khởi động dự án.
Does next Tuesday work for you? | Thứ Ba tuần sau quý khách có tiện không?
Thank you for your trust in us. | Cảm ơn quý khách đã tin tưởng chúng tôi.
We truly appreciate this opportunity. | Chúng tôi rất trân trọng cơ hội này.
Please let us know if we missed anything. | Nếu chúng tôi bỏ sót điều gì, xin quý khách cho biết.
Here's my business card. | Đây là danh thiếp của tôi.
It was a pleasure meeting you today. | Rất hân hạnh được gặp quý khách hôm nay.
We'll be in touch soon. | Chúng tôi sẽ sớm liên lạc.
Have a safe trip back. | Chúc quý khách về an toàn.
`}
);
