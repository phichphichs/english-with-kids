// Đoạn hội thoại. Mỗi đoạn: roles = tên hai vai (0 và 1); lines = [vai, tiếng Anh, tiếng Việt]
// Muốn thêm đoạn mới: thêm một mục vào đúng bộ ("kids" hoặc "work").
window.DIALOGS = {
  kids: [
    { id: "k-wake", icon: "☀️", title: "Gọi con dậy", roles: ["Mẹ", "Con"], lines: [
      [0, "Good morning, sweetheart! Time to wake up.", "Chào buổi sáng, con yêu! Đến giờ thức dậy rồi."],
      [1, "Five more minutes, please.", "Cho con năm phút nữa thôi."],
      [0, "No, we'll be late for school. Did you sleep well?", "Không được, mình sẽ trễ học. Con ngủ ngon không?"],
      [1, "Yes, I had a funny dream.", "Dạ có, con mơ một giấc mơ vui."],
      [0, "Tell me about it after we brush your teeth.", "Kể mẹ nghe sau khi đánh răng nhé."],
      [1, "Okay, I'm getting up!", "Dạ được, con dậy đây!"]
    ]},
    { id: "k-eat", icon: "🍚", title: "Giờ ăn cơm", roles: ["Mẹ", "Con"], lines: [
      [0, "Dinner is ready. Please wash your hands.", "Cơm tối xong rồi. Con đi rửa tay nhé."],
      [1, "I'm hungry! What are we having?", "Con đói quá! Mình ăn món gì vậy?"],
      [0, "We're having rice, fish and vegetables.", "Mình ăn cơm, cá và rau."],
      [1, "I don't like vegetables.", "Con không thích rau."],
      [0, "Just try one bite. They're good for you.", "Con thử một miếng thôi. Rau tốt cho con mà."],
      [1, "Hmm... it's not bad. Can I have more?", "Ừm... cũng không tệ. Cho con thêm nữa được không?"]
    ]},
    { id: "k-sleep", icon: "🌙", title: "Giờ đi ngủ", roles: ["Mẹ", "Con"], lines: [
      [0, "It's bedtime. Let's put on your pajamas.", "Đến giờ đi ngủ rồi. Mình mặc đồ ngủ nào."],
      [1, "Can you read me a story?", "Mẹ đọc truyện cho con nghe được không?"],
      [0, "Sure. Pick one book, just one.", "Được chứ. Con chọn một cuốn thôi nhé."],
      [1, "I want the one about the little bear.", "Con muốn cuốn về chú gấu nhỏ."],
      [0, "Good choice. Now close your eyes.", "Lựa chọn hay đấy. Giờ nhắm mắt lại nào."],
      [1, "Good night, Mom. I love you.", "Chúc mẹ ngủ ngon. Con yêu mẹ."],
      [0, "Good night, sweetheart. I love you too.", "Chúc con ngủ ngon. Mẹ cũng yêu con."]
    ]},
    { id: "k-play", icon: "🧩", title: "Dọn đồ chơi", roles: ["Mẹ", "Con"], lines: [
      [0, "It's time to clean up your toys.", "Đến giờ dọn đồ chơi rồi."],
      [1, "But I'm not done playing.", "Nhưng con chưa chơi xong."],
      [0, "You can play again tomorrow. Let's do it together.", "Mai con chơi tiếp được. Mình cùng dọn nhé."],
      [1, "Where do the blocks go?", "Các khối gỗ để ở đâu ạ?"],
      [0, "Put them in the blue box, please.", "Con bỏ vào hộp màu xanh nhé."],
      [1, "All done! Can I have a snack now?", "Xong rồi! Giờ con ăn vặt được không?"]
    ]}
  ],
  work: [
    { id: "w-standup", icon: "🗓️", title: "Họp daily stand-up", roles: ["Lead", "Dev"], lines: [
      [0, "Morning! Let's start the stand-up. What did you work on yesterday?", "Chào buổi sáng! Mình bắt đầu họp stand-up. Hôm qua bạn làm gì?"],
      [1, "I finished the login API and started on the unit tests.", "Mình xong API đăng nhập và bắt đầu viết unit test."],
      [0, "Great. What's your plan for today?", "Tốt. Hôm nay bạn định làm gì?"],
      [1, "I'll wrap up the tests and open a pull request.", "Mình sẽ làm nốt test rồi mở pull request."],
      [0, "Any blockers?", "Có vướng mắc gì không?"],
      [1, "Yes, I'm waiting for the staging environment to be fixed.", "Có, mình đang chờ môi trường staging được sửa."],
      [0, "Got it. I'll follow up with DevOps right after the meeting.", "Hiểu rồi. Mình sẽ hỏi DevOps ngay sau buổi họp."]
    ]},
    { id: "w-review", icon: "🔍", title: "Code review", roles: ["Reviewer", "Author"], lines: [
      [0, "Thanks for the PR. Could you elaborate on this change?", "Cảm ơn về PR. Bạn giải thích rõ hơn thay đổi này được không?"],
      [1, "Sure. I moved the validation into a separate function to reuse it.", "Được. Mình tách phần validate ra hàm riêng để tái sử dụng."],
      [0, "Makes sense. I left a few comments about naming.", "Hợp lý. Mình có để vài comment về cách đặt tên."],
      [1, "Thanks, I'll fix them and push an update.", "Cảm ơn, mình sẽ sửa rồi push bản cập nhật."],
      [0, "Also, can you add a test for the empty input case?", "Với lại, bạn thêm test cho trường hợp input rỗng nhé?"],
      [1, "Good catch. I'll add it now.", "Bạn phát hiện hay đấy. Mình thêm ngay."]
    ]},
    { id: "w-bug", icon: "🐞", title: "Báo lỗi (bug)", roles: ["QA", "Dev"], lines: [
      [0, "I found a bug on the checkout page.", "Mình tìm thấy một lỗi ở trang thanh toán."],
      [1, "Can you walk me through the steps to reproduce it?", "Bạn mô tả các bước để tái hiện lỗi giúp mình nhé?"],
      [0, "Add two items, apply a coupon, then click Pay. The total goes negative.", "Thêm hai sản phẩm, áp mã giảm giá, rồi bấm Thanh toán. Tổng tiền bị âm."],
      [1, "Thanks. Is it happening on every browser?", "Cảm ơn. Lỗi này xảy ra trên mọi trình duyệt không?"],
      [0, "I only tried Chrome so far. I'll check the others.", "Mình mới thử Chrome. Mình sẽ kiểm tra thêm các trình duyệt khác."],
      [1, "Okay. I'll look into it and get back to you by this afternoon.", "Được. Mình sẽ xem và báo lại cho bạn trước chiều nay."]
    ]},
    { id: "w-deadline", icon: "⏰", title: "Trao đổi deadline", roles: ["Manager", "Dev"], lines: [
      [0, "Do you think we can ship this feature by Friday?", "Bạn nghĩ mình có thể phát hành tính năng này trước thứ Sáu không?"],
      [1, "It's a bit tight. The payment part is more complex than expected.", "Hơi gấp. Phần thanh toán phức tạp hơn dự kiến."],
      [0, "What would help you move faster?", "Điều gì giúp bạn làm nhanh hơn?"],
      [1, "If someone could review my code quickly, we might make it.", "Nếu có người review code nhanh thì có thể kịp."],
      [0, "I'll ask Lan to help. Let me know if anything changes.", "Mình sẽ nhờ Lan giúp. Có gì thay đổi nhớ báo mình."],
      [1, "Will do. I'll keep you posted.", "Vâng. Mình sẽ cập nhật cho bạn."]
    ]},
    { id: "w-clarify", icon: "🙋", title: "Hỏi lại yêu cầu", roles: ["PM", "Dev"], lines: [
      [0, "We need a search bar on the home page.", "Mình cần một thanh tìm kiếm ở trang chủ."],
      [1, "Just to clarify, should it search products only, or articles too?", "Để làm rõ, nó chỉ tìm sản phẩm hay cả bài viết?"],
      [0, "Products only for now. We can extend it later.", "Hiện tại chỉ sản phẩm thôi. Sau này mình mở rộng."],
      [1, "Got it. Do we have a design for the empty results state?", "Hiểu rồi. Mình có thiết kế cho trạng thái không có kết quả chưa?"],
      [0, "Not yet. I'll ask the designer and send it to you today.", "Chưa. Mình sẽ hỏi designer và gửi bạn trong hôm nay."]
    ]}
    ,
    { id: "w-ba-elicit", icon: "📝", title: "BA: Thu thập yêu cầu", roles: ["BA", "Stakeholder"], lines: [
      [0, "Thanks for your time. I'd like to understand the problem you're trying to solve.", "Cảm ơn bạn đã dành thời gian. Mình muốn hiểu vấn đề bạn đang cần giải quyết."],
      [1, "Our sales team spends hours creating reports by hand.", "Đội kinh doanh của chúng tôi mất hàng giờ làm báo cáo thủ công."],
      [0, "Which reports take the most time, and who uses them?", "Báo cáo nào tốn nhiều thời gian nhất và ai là người dùng chúng?"],
      [1, "The weekly revenue report. Managers use it every Monday.", "Báo cáo doanh thu tuần. Các quản lý dùng nó mỗi thứ Hai."],
      [0, "What would an ideal solution look like for you?", "Giải pháp lý tưởng với bạn sẽ như thế nào?"],
      [1, "A dashboard that updates automatically, with an export to Excel.", "Một dashboard tự cập nhật, có xuất ra Excel."],
      [0, "Got it. I'll write this up and send you a summary to confirm.", "Hiểu rồi. Mình sẽ ghi lại và gửi bản tóm tắt để bạn xác nhận."]
    ]},
    { id: "w-ba-story", icon: "📖", title: "BA: Giải thích user story", roles: ["BA", "Dev"], lines: [
      [0, "Let me walk you through this user story. As a customer, I want to reset my password by email.", "Để mình giải thích user story này. Là khách hàng, tôi muốn đặt lại mật khẩu qua email."],
      [1, "What are the acceptance criteria?", "Tiêu chí chấp nhận là gì?"],
      [0, "The link expires after 24 hours, and the new password must meet the policy.", "Link hết hạn sau 24 giờ và mật khẩu mới phải đúng chính sách."],
      [1, "What happens if the email isn't registered?", "Nếu email chưa đăng ký thì sao?"],
      [0, "Good question. We show a generic message so we don't reveal which emails exist.", "Câu hỏi hay. Mình hiển thị thông báo chung để không lộ email nào đã tồn tại."],
      [1, "Makes sense. Is this in scope for this sprint?", "Hợp lý. Việc này nằm trong phạm vi sprint này chứ?"],
      [0, "Yes, it's high priority. I'll update the ticket with these details.", "Có, ưu tiên cao. Mình sẽ cập nhật ticket với các chi tiết này."]
    ]},
    { id: "w-ba-scope", icon: "🎯", title: "BA: Thay đổi phạm vi (scope)", roles: ["BA", "Stakeholder"], lines: [
      [0, "I understand you'd like to add a new approval step.", "Mình hiểu bạn muốn thêm một bước phê duyệt mới."],
      [1, "Yes, our legal team needs to review every contract.", "Đúng, bên pháp chế cần xem xét mọi hợp đồng."],
      [0, "That's a reasonable request, but it's outside the original scope.", "Yêu cầu này hợp lý, nhưng nằm ngoài phạm vi ban đầu."],
      [1, "How will it affect the timeline?", "Việc này ảnh hưởng thế nào đến tiến độ?"],
      [0, "It would add roughly two weeks. We could release it in phase two instead.", "Sẽ thêm khoảng hai tuần. Mình có thể đưa vào giai đoạn hai."],
      [1, "Let's do that. Please document it as a future requirement.", "Vậy làm thế đi. Hãy ghi nó thành yêu cầu cho sau này."],
      [0, "Sure. I'll raise a change request and get it signed off.", "Được. Mình sẽ tạo change request và xin duyệt."]
    ]},
    { id: "w-ba-demo", icon: "🖥️", title: "BA: Demo & UAT", roles: ["BA", "User"], lines: [
      [0, "Today we'll walk through the new order screen. Please try it and share your feedback.", "Hôm nay mình sẽ chạy thử màn hình đơn hàng mới. Bạn dùng thử và cho ý kiến nhé."],
      [1, "The search filter is great, but I can't find the export button.", "Bộ lọc tìm kiếm rất tốt, nhưng tôi không thấy nút xuất file."],
      [0, "It's in the top right corner. Is that easy enough to spot?", "Nó ở góc trên bên phải. Vậy có dễ thấy không?"],
      [1, "Not really. Could you make it more visible?", "Không hẳn. Bạn làm nó nổi bật hơn được không?"],
      [0, "Noted. I'll log it as an issue and discuss it with the team.", "Đã ghi nhận. Mình sẽ tạo issue và bàn với team."],
      [1, "Other than that, the flow works well for us.", "Ngoài điều đó ra, luồng xử lý hoạt động tốt với chúng tôi."],
      [0, "Great. Once the fix is done, I'll ask you to sign off the UAT.", "Tốt. Khi sửa xong, mình sẽ nhờ bạn xác nhận UAT."]
    ]},
    { id: "w-ba-gap", icon: "🧭", title: "BA: Phân tích khoảng cách (gap)", roles: ["BA", "PM"], lines: [
      [0, "I finished the gap analysis between the current process and the new system.", "Mình đã xong phân tích khoảng cách giữa quy trình hiện tại và hệ thống mới."],
      [1, "What are the main gaps?", "Các khoảng cách chính là gì?"],
      [0, "The old process has no approval history, and data is entered twice.", "Quy trình cũ không có lịch sử phê duyệt, và dữ liệu bị nhập hai lần."],
      [1, "Which one is the biggest risk?", "Điều nào rủi ro nhất?"],
      [0, "The duplicate entry. It causes errors in about ten percent of orders.", "Việc nhập trùng. Nó gây lỗi ở khoảng mười phần trăm đơn hàng."],
      [1, "Please prepare a short presentation for the steering meeting.", "Hãy chuẩn bị bài thuyết trình ngắn cho buổi họp ban chỉ đạo."],
      [0, "Will do. I'll include the recommendations and the estimated impact.", "Được. Mình sẽ đưa cả đề xuất lẫn ước tính tác động."]
    ]},
    { id: "w-ba-refine", icon: "🔧", title: "BA: Backlog refinement", roles: ["BA", "Team"], lines: [
      [0, "Let's go through the top items in the backlog. The first one is the invoice export.", "Mình cùng xem các mục đầu của backlog. Mục đầu là xuất hóa đơn."],
      [1, "Is the requirement clear enough to estimate?", "Yêu cầu đã đủ rõ để ước lượng chưa?"],
      [0, "Almost. The only open question is the file format. I'll confirm it with the client.", "Gần đủ. Câu hỏi còn lại là định dạng file. Mình sẽ xác nhận với khách hàng."],
      [1, "Can we split it into two smaller stories?", "Mình tách thành hai story nhỏ hơn được không?"],
      [0, "Good idea. One for PDF and one for Excel. I'll update the acceptance criteria.", "Ý hay. Một cho PDF và một cho Excel. Mình sẽ cập nhật tiêu chí chấp nhận."],
      [1, "Then we can estimate both in this meeting.", "Vậy mình có thể ước lượng cả hai ngay trong buổi họp này."]
    ]}
]
};
