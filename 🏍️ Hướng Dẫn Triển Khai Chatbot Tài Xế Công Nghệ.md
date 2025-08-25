# 🏍️ Hướng Dẫn Triển Khai Chatbot Tài Xế Công Nghệ

## 📋 Tổng Quan

Chatbot này được thiết kế chuyên biệt cho tài xế công nghệ (Grab, Be, Gojek) với các tính năng:

- **3 tầng AI thông minh**: DeepSeek → Gemini → Anthropic
- **Phát hiện tài xế tự động**: Nhận diện và cá nhân hóa
- **Tracking hành vi**: Thu thập insights về người dùng
- **Responsive design**: Hoạt động tốt trên mọi thiết bị
- **Không bán hàng**: Chỉ tư vấn khách quan

## 🚀 Cách Triển Khai Trên Hostinger Horizons

### Bước 1: Truy cập Horizons Editor

1. Đăng nhập vào **Hostinger hPanel**
2. Tìm website **baohiemnhantho.org**
3. Click **"Edit with Horizons"** hoặc **"Chỉnh sửa"**

### Bước 2: Thêm Custom Code

1. Trong Horizons Editor, tìm biểu tượng **⚙️ Settings**
2. Click vào **"Advanced"** hoặc **"Nâng cao"**
3. Tìm mục **"Custom Code"** hoặc **"Custom HTML"**
4. Chọn **"Body Code"** (quan trọng!)

### Bước 3: Paste Code Chatbot

1. Mở file `complete_deepseek_chatbot.html`
2. **Copy toàn bộ nội dung** (Ctrl+A, Ctrl+C)
3. **Paste vào ô Body Code** (Ctrl+V)
4. Click **"Save"** hoặc **"Lưu"**

### Bước 4: Publish Website

1. Click **"Publish"** hoặc **"Xuất bản"**
2. Đợi 2-3 phút để cập nhật
3. Kiểm tra website để thấy chatbot

## ✅ Kiểm Tra Hoạt Động

### Chatbot Button
- Xuất hiện ở **góc dưới bên phải**
- Màu **xanh lá** với hiệu ứng pulse
- Icon hình **ngôi sao** (đặc trưng cho tài xế)

### Tính Năng Cần Test
- [ ] Click button mở/đóng chat
- [ ] Gửi tin nhắn và nhận phản hồi
- [ ] Test quick questions
- [ ] Thử trên mobile
- [ ] Kiểm tra responsive design

## 🤖 Hệ Thống 3 Tầng AI

### 1. DeepSeek AI (Mặc định)
- **Khi nào**: Câu hỏi thông thường
- **Đặc điểm**: Nhanh, tiết kiệm chi phí
- **Màu indicator**: Xanh dương

### 2. Gemini AI (Tài xế)
- **Khi nào**: Phát hiện từ khóa tài xế
- **Đặc điểm**: Hiểu context Việt Nam tốt
- **Màu indicator**: Vàng cam

### 3. Anthropic Claude (Khó khăn)
- **Khi nào**: Người dùng bực bội hoặc >5 tin nhắn
- **Đặc điểm**: Thông minh nhất, xử lý phức tạp
- **Màu indicator**: Tím

## 📊 Tracking & Analytics

### Dữ Liệu Thu Thập
- **Platform**: Grab, Be, Gojek
- **Loại câu hỏi**: Tai nạn, y tế, thu nhập
- **Thời gian chat**: Độ dài cuộc trò chuyện
- **AI sử dụng**: DeepSeek, Gemini, Anthropic
- **Mức độ hài lòng**: Dựa trên hành vi

### Xem Analytics
1. Mở file `driver_analytics_dashboard.html`
2. Dữ liệu được lưu trong **localStorage**
3. Tự động refresh mỗi 30 giây
4. Export CSV/JSON để phân tích

## 🎯 Tối Ưu Hóa Cho Tài Xế

### Quick Questions Chuyên Biệt
- 🚨 **Bảo hiểm tai nạn**: Câu hỏi phổ biến nhất
- 🏥 **Bảo hiểm y tế**: Cho người không BHXH
- 💰 **Bảo hiểm thu nhập**: Khi ốm đau không làm việc
- ❓ **Tư vấn tổng quát**: Hướng dẫn chung

### Phát Hiện Tài Xế Tự Động
Chatbot tự động nhận diện qua từ khóa:
- grab, be, gojek, tài xế, chạy xe
- xe ôm, shipper, delivery, giao hàng
- app, booking, khách hàng, chuyến

### Progressive Profiling
- **Tin nhắn 3**: Hỏi platform (Grab/Be/Gojek)
- **Tin nhắn 5**: Hỏi loại xe (máy/ô tô)
- **Tin nhắn 7**: Hỏi thu nhập (nếu thoải mái)

## 🔧 Troubleshooting

### Chatbot Không Xuất Hiện
1. **Kiểm tra Custom Code**: Đảm bảo paste vào Body Code
2. **Clear Cache**: Ctrl+F5 để refresh
3. **Kiểm tra Console**: F12 → Console để xem lỗi

### AI Không Trả Lời
1. **Kiểm tra API Keys**: Đảm bảo keys còn hoạt động
2. **Kiểm tra Network**: F12 → Network để xem requests
3. **Thử AI khác**: Chatbot sẽ tự chuyển nếu 1 AI lỗi

### Chatbot Chậm
1. **DeepSeek**: 1-3 giây (nhanh nhất)
2. **Gemini**: 2-4 giây (trung bình)
3. **Anthropic**: 3-6 giây (chậm nhưng thông minh)

## 📱 Mobile Optimization

### Responsive Design
- **Desktop**: 400px width, góc dưới phải
- **Mobile**: Full screen khi mở
- **Touch-friendly**: Buttons đủ lớn để touch

### Performance
- **Lazy loading**: Chỉ load khi cần
- **Minimal CSS**: Tối ưu cho mobile
- **Fast animations**: Smooth trên mọi device

## 🔐 Bảo Mật & Privacy

### API Keys
- **Được mã hóa**: Trong code JavaScript
- **Rate limiting**: Tự động giới hạn requests
- **Error handling**: Xử lý lỗi gracefully

### Dữ Liệu Người Dùng
- **LocalStorage**: Chỉ lưu trên máy người dùng
- **Không gửi server**: Dữ liệu không rời khỏi browser
- **Có thể xóa**: Người dùng có thể clear data

## 📈 Monitoring & Maintenance

### Theo Dõi Hàng Ngày
- **Số lượng chat**: Qua analytics dashboard
- **Tỷ lệ hoàn thành**: Conversations completed
- **AI usage**: Phân bố sử dụng 3 AI
- **Error rate**: Tỷ lệ lỗi API

### Cập Nhật Định Kỳ
- **Content**: Cập nhật thông tin bảo hiểm mới
- **API Keys**: Kiểm tra và gia hạn
- **Performance**: Tối ưu tốc độ phản hồi

## 🎨 Customization

### Thay Đổi Màu Sắc
```css
/* Thay đổi màu chính */
background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_DARK_COLOR 100%);
```

### Thay Đổi Vị Trí
```css
/* Di chuyển sang trái */
.driver-chat-button {
    left: 20px;  /* Thay vì right: 20px */
}
```

### Thay Đổi Kích Thước
```css
/* Chatbot nhỏ hơn */
.driver-chat-widget {
    width: 350px;
    height: 500px;
}
```

## 📞 Hỗ Trợ

### Liên Hệ Kỹ Thuật
- **Email**: support@baohiemnhantho.org
- **Hotline**: 1900-xxxx
- **Live Chat**: Qua website chính

### Tài Liệu Tham Khảo
- **API Documentation**: DeepSeek, Gemini, Anthropic
- **Hostinger Help**: help.hostinger.com
- **JavaScript Guide**: developer.mozilla.org

---

## 🎉 Kết Luận

Chatbot tài xế công nghệ này sẽ giúp baohiemnhantho.org:

1. **Tăng engagement**: Tương tác 24/7 với tài xế
2. **Thu thập insights**: Hiểu nhu cầu thực tế
3. **Xây dựng trust**: Tư vấn khách quan, không bán hàng
4. **Tối ưu conversion**: Từ tư vấn đến hành động

**Chúc bạn triển khai thành công! 🚀**

