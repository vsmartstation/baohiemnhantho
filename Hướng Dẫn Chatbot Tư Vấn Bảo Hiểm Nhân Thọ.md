# Hướng Dẫn Chatbot Tư Vấn Bảo Hiểm Nhân Thọ

## Tổng Quan

Chatbot Tư Vấn Bảo Hiểm Nhân Thọ là một trợ lý AI miễn phí được thiết kế để cung cấp thông tin khách quan và tư vấn về bảo hiểm nhân thọ. Chatbot này hoàn toàn miễn phí, không bán hàng, chỉ tập trung vào việc giáo dục và tư vấn.

### Đặc điểm chính:
- **Miễn phí hoàn toàn**: Không thu phí, không bán sản phẩm
- **Tư vấn khách quan**: Cung cấp thông tin trung thực, không thiên vị
- **Kiến thức chuyên sâu**: Hiểu biết về các loại bảo hiểm và tài chính cá nhân
- **Giao diện thân thiện**: Dễ sử dụng trên cả desktop và mobile
- **Tích hợp dễ dàng**: Có thể embed vào bất kỳ website nào

## Kiến Trúc Hệ Thống

### Backend (API Server)
- **Framework**: Flask (Python)
- **URL**: https://zmhqivcg9gm0.manus.space
- **Endpoints**:
  - `GET /api/health` - Kiểm tra trạng thái server
  - `POST /api/chat` - Gửi tin nhắn và nhận phản hồi

### Frontend (Chat Widget)
- **Công nghệ**: HTML5, CSS3, JavaScript (Vanilla)
- **Responsive**: Tương thích với mọi thiết bị
- **Tích hợp**: Embed code có sẵn

## Tính Năng Chính

### 1. Tư Vấn Cơ Bản
Chatbot có thể giải thích các khái niệm cơ bản về bảo hiểm nhân thọ:
- Định nghĩa bảo hiểm nhân thọ
- Các thuật ngữ quan trọng (phí bảo hiểm, số tiền bảo hiểm, người thụ hưởng)
- Mục đích và lợi ích của bảo hiểm nhân thọ

### 2. Tính Toán Nhu Cầu
Hỗ trợ người dùng đánh giá nhu cầu bảo hiểm:
- Công thức tính mức bảo hiểm phù hợp
- Các yếu tố cần xem xét (thu nhập, nợ, chi phí gia đình)
- Tư vấn cá nhân hóa dựa trên thông tin cung cấp

### 3. So Sánh Sản Phẩm
Giải thích và so sánh các loại bảo hiểm:
- Bảo hiểm nhân thọ truyền thống
- Bảo hiểm nhân thọ đầu tư (Unit-linked)
- Bảo hiểm nhân thọ hỗn hợp
- Ưu nhược điểm của từng loại

### 4. Tư Vấn Cá Nhân
Đưa ra lời khuyên phù hợp với từng đối tượng:
- Dựa trên độ tuổi và thu nhập
- Tình hình gia đình (độc thân, có vợ/chồng, có con)
- Mục tiêu tài chính cá nhân

## Hướng Dẫn Tích Hợp

### Bước 1: Chuẩn Bị
1. Đảm bảo website của bạn có thể chỉnh sửa HTML
2. Có quyền truy cập vào phần footer hoặc cuối trang

### Bước 2: Thêm Code Embed
1. Mở file `chatbot_embed.html` (đã được cung cấp)
2. Copy toàn bộ nội dung
3. Paste vào cuối thẻ `<body>` của website

### Bước 3: Kiểm Tra
1. Tải lại trang web
2. Kiểm tra xem chat button có xuất hiện ở góc dưới bên phải không
3. Click vào button để mở chat widget
4. Test một vài câu hỏi để đảm bảo hoạt động tốt

### Bước 4: Tùy Chỉnh (Tùy Chọn)
Bạn có thể tùy chỉnh:
- Màu sắc của chat widget (thay đổi trong CSS)
- Vị trí của chat button
- Tin nhắn chào mừng
- Quick questions

## API Documentation

### Health Check
```
GET /api/health
```
**Response:**
```json
{
    "status": "healthy",
    "service": "Insurance Chatbot"
}
```

### Chat Endpoint
```
POST /api/chat
```
**Request Body:**
```json
{
    "message": "Câu hỏi của người dùng",
    "history": [
        {
            "role": "user",
            "content": "Tin nhắn trước đó"
        },
        {
            "role": "bot", 
            "content": "Phản hồi trước đó"
        }
    ]
}
```

**Response:**
```json
{
    "response": "Phản hồi của chatbot",
    "timestamp": "1750892592"
}
```

## Kiến Thức Cơ Sở

### Các Khái Niệm Cơ Bản
Chatbot được trang bị kiến thức về:

**Bảo hiểm nhân thọ**: Hợp đồng bảo vệ tài chính cho gia đình khi người được bảo hiểm qua đời

**Phí bảo hiểm**: Số tiền phải đóng định kỳ để duy trì hợp đồng

**Số tiền bảo hiểm**: Khoản tiền công ty bảo hiểm chi trả khi xảy ra sự kiện

**Người thụ hưởng**: Người được chỉ định nhận tiền bảo hiểm

**Giá trị hoàn lại**: Số tiền có thể nhận được khi chấm dứt hợp đồng sớm

### Các Loại Bảo Hiểm

**1. Bảo hiểm nhân thọ truyền thống**
- Ưu điểm: Phí thấp, đơn giản, bảo vệ hiệu quả
- Nhược điểm: Không có giá trị đầu tư
- Phù hợp: Người trẻ, thu nhập hạn chế

**2. Bảo hiểm nhân thọ đầu tư**
- Ưu điểm: Có khả năng sinh lời, linh hoạt
- Nhược điểm: Phí cao, có rủi ro
- Phù hợp: Người có thu nhập ổn định, hiểu về đầu tư

**3. Bảo hiểm nhân thọ hỗn hợp**
- Ưu điểm: Vừa bảo vệ vừa tích lũy
- Nhược điểm: Phí cao hơn, lợi nhuận thấp
- Phù hợp: Người muốn kết hợp bảo vệ và tiết kiệm

### Công Thức Tính Nhu Cầu
- **Mức cơ bản**: 5-10 lần thu nhập hàng năm
- **Các khoản nợ**: Vay nhà, xe, thẻ tín dụng
- **Chi phí gia đình**: 5-10 năm chi phí sinh hoạt
- **Quỹ giáo dục**: Cho con cái (nếu có)
- **Quỹ khẩn cấp**: 6-12 tháng chi phí

## Bảo Trì và Cập Nhật

### Giám Sát Hoạt Động
- Kiểm tra API health endpoint định kỳ
- Theo dõi log lỗi nếu có
- Đảm bảo thời gian phản hồi nhanh

### Cập Nhật Kiến Thức
Để cập nhật kiến thức cho chatbot:
1. Chỉnh sửa file `src/routes/chatbot.py`
2. Cập nhật `knowledge_base` dictionary
3. Deploy lại backend

### Backup và Khôi Phục
- Source code được lưu tại: `/home/ubuntu/insurance_chatbot/`
- Backup định kỳ database (nếu có)
- Lưu trữ các phiên bản deploy

## Troubleshooting

### Lỗi Thường Gặp

**1. Chat button không hiển thị**
- Kiểm tra xem đã paste code đúng vị trí chưa
- Đảm bảo không có conflict CSS
- Kiểm tra console browser để xem lỗi JavaScript

**2. Chatbot không phản hồi**
- Kiểm tra kết nối internet
- Test API endpoint trực tiếp
- Xem console browser để debug

**3. Giao diện bị lỗi**
- Kiểm tra CSS conflicts với website
- Đảm bảo responsive design hoạt động
- Test trên nhiều trình duyệt khác nhau

### Liên Hệ Hỗ Trợ
Nếu gặp vấn đề kỹ thuật:
1. Kiểm tra tài liệu này trước
2. Test các bước cơ bản
3. Ghi lại thông tin lỗi chi tiết
4. Liên hệ team phát triển với thông tin đầy đủ

## Kết Luận

Chatbot Tư Vấn Bảo Hiểm Nhân Thọ là một công cụ mạnh mẽ để cung cấp thông tin miễn phí và khách quan về bảo hiểm nhân thọ. Với thiết kế đơn giản nhưng hiệu quả, chatbot có thể dễ dàng tích hợp vào bất kỳ website nào và cung cấp giá trị thực sự cho người dùng.

Hệ thống được thiết kế với nguyên tắc minh bạch, không bán hàng, chỉ tập trung vào việc giáo dục và tư vấn. Điều này phù hợp hoàn hảo với tôn chỉ của website baohiemnhantho.org.

---

*Tài liệu này được tạo vào ngày 25/06/2025. Vui lòng cập nhật thông tin khi có thay đổi.*

