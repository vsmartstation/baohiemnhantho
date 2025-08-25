# Thiết Kế Kiến Trúc Chatbot Tư Vấn Bảo Hiểm Nhân Thọ

## Mục tiêu chatbot
- Tư vấn miễn phí về bảo hiểm nhân thọ
- Cung cấp kiến thức tài chính cơ bản
- Giải đáp thắc mắc về các loại bảo hiểm
- Hướng dẫn đánh giá nhu cầu bảo hiểm
- Không bán hàng, chỉ tư vấn khách quan

## Kiến trúc hệ thống

### Frontend (Giao diện người dùng)
- **Chat Widget**: Floating button ở góc dưới phải
- **Chat Interface**: Giao diện chat đơn giản, thân thiện
- **Responsive Design**: Tương thích mobile và desktop
- **Tích hợp**: Embed vào website hiện có

### Backend (Xử lý logic)
- **Framework**: Flask (Python)
- **AI Engine**: Sử dụng prompt engineering với kiến thức về bảo hiểm
- **Database**: SQLite để lưu lịch sử chat (tùy chọn)
- **API**: RESTful API để giao tiếp frontend-backend

### Kiến thức cơ sở (Knowledge Base)
- **Các loại bảo hiểm nhân thọ**:
  - Bảo hiểm nhân thọ truyền thống
  - Bảo hiểm nhân thọ đầu tư (Unit-linked)
  - Bảo hiểm nhân thọ hỗn hợp
  - Bảo hiểm nhân thọ định kỳ

- **Khái niệm tài chính**:
  - Phí bảo hiểm
  - Giá trị hoàn lại
  - Quyền lợi bảo hiểm
  - Thời gian đóng phí
  - Thời gian bảo hiểm

- **Quy trình tư vấn**:
  - Đánh giá tình hình tài chính
  - Xác định nhu cầu bảo hiểm
  - So sánh các loại sản phẩm
  - Giải thích điều khoản
  - Tư vấn lựa chọn phù hợp

## Tính năng chính

### 1. Tư vấn cơ bản
- Giải thích các khái niệm bảo hiểm
- Hướng dẫn tính toán nhu cầu bảo hiểm
- So sánh ưu nhược điểm các loại bảo hiểm

### 2. Đánh giá nhu cầu
- Thu thập thông tin cơ bản (tuổi, thu nhập, gia đình)
- Phân tích khả năng tài chính
- Đề xuất mức bảo hiểm phù hợp

### 3. Giải đáp thắc mắc
- Trả lời câu hỏi về điều khoản
- Giải thích quy trình bồi thường
- Tư vấn về thời điểm mua bảo hiểm

### 4. Tài liệu tham khảo
- Cung cấp link đến tài liệu chi tiết
- Gợi ý các nguồn thông tin uy tín
- Hướng dẫn tự nghiên cứu

## Luồng hội thoại mẫu

### Kịch bản 1: Người mới tìm hiểu
```
Bot: Xin chào! Tôi là trợ lý tư vấn bảo hiểm nhân thọ miễn phí. Bạn có thể hỏi tôi về:
- Các loại bảo hiểm nhân thọ
- Cách tính nhu cầu bảo hiểm
- Giải thích các khái niệm tài chính
Bạn muốn tìm hiểu về điều gì?

User: Tôi chưa biết gì về bảo hiểm, bắt đầu từ đâu?

Bot: Tuyệt vời! Hãy bắt đầu với câu hỏi: Bạn đã bao giờ nghĩ về việc gia đình sẽ ra sao nếu bạn không còn khả năng kiếm tiền? Bảo hiểm nhân thọ chính là giải pháp để bảo vệ tài chính gia đình trong trường hợp này...
```

### Kịch bản 2: Tư vấn nhu cầu
```
User: Tôi 30 tuổi, thu nhập 20 triệu/tháng, có vợ con. Nên mua bảo hiểm gì?

Bot: Với thông tin bạn cung cấp, tôi sẽ giúp đánh giá nhu cầu:
1. Thu nhập hàng năm: 240 triệu
2. Khuyến nghị mức bảo hiểm: 5-10 lần thu nhập năm (1.2-2.4 tỷ)
3. Loại phù hợp: Bảo hiểm nhân thọ định kỳ (term life) cho bảo vệ cơ bản...
```

## Nguyên tắc thiết kế
1. **Minh bạch**: Luôn giải thích rõ ràng, không che giấu thông tin
2. **Khách quan**: Không thiên vị bất kỳ công ty bảo hiểm nào
3. **Giáo dục**: Tập trung vào việc giáo dục kiến thức
4. **Thân thiện**: Giao tiếp dễ hiểu, tránh thuật ngữ phức tạp
5. **Bảo mật**: Không lưu trữ thông tin cá nhân nhạy cảm

## Công nghệ sử dụng
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla hoặc React)
- **Backend**: Python Flask
- **AI**: Prompt engineering với kiến thức domain-specific
- **Database**: SQLite (cho lưu trữ session tạm thời)
- **Deployment**: Có thể deploy trên các platform như Heroku, Vercel

