// Cấu trúc câu viết sẵn. Mỗi dòng:  câu tiếng Anh (đúng từng chữ) || cấu trúc = ý nghĩa ; cấu trúc = ý nghĩa
// Muốn thêm: thêm dòng vào đúng khối bên dưới (hoặc tạo khối mới). Câu chưa có dòng sẽ chỉ hiện khung "tự thêm".
window.STRUCTS = window.STRUCTS || {};
(function (raw) {
  raw.trim().split("\n").forEach(function (line) {
    var i = line.indexOf(" || ");
    if (i < 0) return;
    STRUCTS[line.slice(0, i)] = line.slice(i + 4).split(" ; ").map(function (x) {
      var j = x.indexOf(" = ");
      return j < 0 ? { s: x, m: "" } : { s: x.slice(0, j), m: x.slice(j + 3) };
    });
  });
})(`
Let's start the daily standup. || Let's + V = mình cùng… nhé (rủ, đề nghị cùng làm) ; start + N = bắt đầu việc gì
Who wants to go first? || Who + V(s)…? = ai muốn/làm…? (who làm chủ ngữ nên động từ chia số ít) ; want to + V = muốn làm gì ; go first = nói/làm trước
Yesterday I worked on the login page. || S + V-ed + mốc thời gian = đã làm gì (quá khứ đơn) ; work on + N = làm việc về, đang xử lý cái gì
Yesterday I fixed two bugs in the checkout flow. || S + V-ed + N = đã làm gì (quá khứ đơn) ; fix + N = sửa (lỗi) ; in + N = trong (phạm vi, luồng nào)
Today I'm going to finish the API integration. || be going to + V = sắp, dự định sẽ làm (kế hoạch đã có) ; finish + N = hoàn thành cái gì
I plan to start on the search feature today. || plan to + V = dự định làm gì ; start on + N = bắt tay vào làm cái gì
I'll be working on unit tests this afternoon. || will be + V-ing = sẽ đang làm (tương lai tiếp diễn, nói lịch làm việc) ; this afternoon = chiều nay
I'm blocked by the missing design files. || be blocked by + N = bị vướng, bị chặn bởi cái gì (bị động) ; missing + N = thiếu, chưa có
I'm waiting for feedback from the client. || be + V-ing = đang làm gì (hiện tại tiếp diễn) ; wait for + N = chờ cái gì ; feedback from + N = phản hồi từ ai
I don't have any blockers. || don't have any + N = không có… nào (phủ định dùng any) ; blocker = vướng mắc cản trở công việc
I need some help with the database migration. || need + N = cần cái gì ; help with + N = giúp việc gì ; some + N = một ít (dùng trong câu khẳng định)
Can someone review my pull request? || Can + S + V? = ai đó… được không? (nhờ vả lịch sự) ; review + N = xem xét, duyệt
I'm still working on the same task. || still + V-ing = vẫn đang làm ; the same + N = cùng một…
It's taking longer than expected. || take + longer than expected = mất nhiều thời gian hơn dự kiến ; adj-er + than = so sánh hơn
I should be done by the end of the day. || should + V = chắc là, dự kiến (khả năng cao) ; be done = xong ; by + mốc thời gian = chậm nhất vào lúc
It's almost finished. || almost + adj/V-ed = gần như ; be + V-ed (finished) = trạng thái đã xong
I'll update the ticket after this meeting. || I'll + V = tôi sẽ… (quyết định, hứa ngay lúc nói) ; after + N = sau khi
Let's take this offline. || Let's + V = mình cùng… ; take sth offline = bàn riêng ngoài cuộc họp
Let's discuss it after the standup. || Let's + V = mình cùng… nhé (rủ, đề nghị cùng làm) ; discuss + N (không có "about") = bàn về cái gì
Can we keep the updates short? || Can we + V? = mình… được không? (đề nghị) ; keep + N + adj = giữ cho cái gì ở trạng thái nào
Is anyone else blocked? || Is anyone + adj? = có ai… không? ; anyone else = còn ai khác
Does anyone have questions? || Does + anyone + V? = có ai… không? (anyone đi với động từ số ít) ; have questions = có câu hỏi
The build failed again this morning. || S + V-ed = quá khứ đơn ; again = lại, lần nữa ; this morning = sáng nay
The staging server is down. || be down = (hệ thống) đang sập, không hoạt động ; staging server = máy chủ thử nghiệm
I'm out of the office tomorrow. || be out of the office = không có mặt ở văn phòng ; hiện tại tiếp diễn + tomorrow = nói lịch đã định
I'll be on leave next Monday. || be on leave = đang nghỉ phép ; next + thứ = thứ… tuần tới
I'm working from home today. || work from home = làm việc ở nhà ; be + V-ing + today = hôm nay đang/sẽ làm
Please move my task to "In Progress". || Please + V = làm ơn… (đề nghị lịch sự) ; move A to B = chuyển A sang B
I've moved the ticket to "Done". || have + V3 = đã làm xong (hiện tại hoàn thành, kết quả còn đó) ; move A to B = chuyển A sang B
The task is ready for QA. || be ready for + N = sẵn sàng cho… ; QA = nhóm kiểm thử
I've pushed my changes to the repository. || have + V3 (pushed) = đã đẩy (hiện tại hoàn thành) ; push A to B = đẩy A lên B
I merged the branch into main. || merge A into B = gộp A vào B ; V-ed = quá khứ đơn (việc đã xong)
We're on track for the sprint goal. || be on track for + N = đang đúng tiến độ để đạt… ; goal = mục tiêu
We're a bit behind schedule. || be behind schedule = chậm tiến độ ; a bit + adj = hơi
We might not finish everything this sprint. || might (not) + V = có thể (không)… (khả năng thấp) ; everything = mọi thứ
Let's move this story to the next sprint. || Let's + V = mình cùng… nhé (rủ, đề nghị cùng làm) ; move A to B = chuyển A sang B ; the next + N = … tiếp theo
Let's prioritize the critical bugs first. || Let's + V = mình cùng… nhé (rủ, đề nghị cùng làm) ; prioritize + N = ưu tiên cái gì ; first = trước hết
Who's picking up this ticket? || Who's + V-ing? (Who is) = ai đang, sẽ làm…? ; pick up = nhận (việc)
I can take that one. || can + V = có thể (sẵn sàng làm) ; take = nhận (việc) ; that one = cái đó
I'll pair with you on that. || I'll + V = tôi sẽ… ; pair with + sb = làm cặp, làm cùng ai ; on + N = về việc gì
Let me know if you need anything. || Let me + V = để tôi…, hãy cho tôi… ; Let me know = cho tôi biết ; if + S + V = nếu
Thanks for the update. || Thanks for + N/V-ing = cảm ơn vì… ; update = bản cập nhật
Great progress, everyone. || Great + N = … tuyệt vời (lời khen) ; progress = tiến độ, sự tiến bộ (danh từ không đếm được nên không thêm s)
That's all from me. || That's all = hết rồi, chỉ có vậy ; from me = từ phía tôi
Anything else before we wrap up? || Anything else? = còn gì nữa không? ; before + S + V = trước khi ; wrap up = kết thúc
Let's call it a day. || call it a day = dừng làm việc hôm nay (thành ngữ) ; Let's + V = mình cùng… nhé (rủ, đề nghị cùng làm)
Same time tomorrow. || Same + N = cùng… (câu rút gọn, ý là: mình họp cùng giờ vào ngày mai)
Let's keep it up! || keep it up = cứ tiếp tục phát huy ; Let's + V = mình cùng… nhé (rủ, đề nghị cùng làm)
`);
