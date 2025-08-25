# Hướng Dẫn Tích Hợp Chatbot Vào Website baohiemnhantho.org

## 📋 Tổng Quan
Bạn sẽ thêm chatbot vào website hiện tại bằng cách chèn một đoạn code vào cuối trang. Chatbot sẽ xuất hiện dưới dạng floating button ở góc dưới bên phải và không ảnh hưởng đến giao diện hiện tại.

## 🎯 Kết Quả Mong Đợi
- ✅ Chat button xuất hiện ở góc dưới bên phải
- ✅ Click vào button sẽ mở chat widget
- ✅ Chatbot phản hồi câu hỏi về bảo hiểm nhân thọ
- ✅ Giao diện responsive trên mọi thiết bị
- ✅ Không ảnh hưởng đến website hiện tại

## 🛠️ Các Bước Thực Hiện

### Bước 1: Truy Cập File Manager
1. Đăng nhập vào **Hostinger hPanel**
2. Tìm và click vào **"File Manager"**
3. Điều hướng đến thư mục **public_html** (hoặc thư mục chứa website)

### Bước 2: Tìm File HTML Chính
Tìm file HTML chính của website, thường là:
- `index.html`
- `index.php` 
- `home.html`
- Hoặc file template chính

### Bước 3: Backup File (Quan Trọng!)
1. **Right-click** vào file HTML chính
2. Chọn **"Download"** để tải về máy làm backup
3. Lưu file backup với tên như `index_backup.html`

### Bước 4: Chỉnh Sửa File HTML
1. **Right-click** vào file HTML chính
2. Chọn **"Edit"** hoặc **"Code Editor"**
3. Tìm thẻ đóng `</body>` (thường ở cuối file)
4. **Paste code chatbot** ngay TRƯỚC thẻ `</body>`

### Bước 5: Lưu và Test
1. Click **"Save Changes"** hoặc **Ctrl+S**
2. Mở website trong tab mới
3. Kiểm tra chat button ở góc dưới bên phải
4. Test chatbot bằng cách click và hỏi câu hỏi

## 📝 Code Cần Thêm

### Vị Trí Chèn Code
```html
<!-- Nội dung website hiện tại -->
...

<!-- CHÈN CODE CHATBOT VÀO ĐÂY -->
[Code chatbot từ file chatbot_embed.html]

</body>
</html>
```

## 🔧 Troubleshooting

### Vấn Đề 1: Chat Button Không Hiển Thị
**Nguyên nhân có thể:**
- Code chèn sai vị trí
- Có lỗi syntax trong HTML
- CSS conflict

**Giải pháp:**
1. Kiểm tra code có paste đúng vị trí không
2. Mở Developer Tools (F12) xem có lỗi không
3. Thử refresh trang (Ctrl+F5)

### Vấn Đề 2: Chatbot Không Phản Hồi
**Nguyên nhân có thể:**
- Kết nối internet không ổn định
- API server tạm thời không hoạt động

**Giải pháp:**
1. Kiểm tra kết nối internet
2. Thử lại sau vài phút
3. Mở Developer Tools xem có lỗi API không

### Vấn Đề 3: Giao Diện Bị Lỗi
**Nguyên nhân có thể:**
- CSS conflict với website hiện tại
- Responsive không hoạt động đúng

**Giải pháp:**
1. Kiểm tra trên nhiều thiết bị khác nhau
2. Thử zoom in/out trang web
3. Liên hệ hỗ trợ nếu vẫn lỗi

## 📱 Test Trên Các Thiết Bị

### Desktop
- ✅ Chat button ở góc dưới bên phải
- ✅ Chat widget mở mượt mà
- ✅ Tin nhắn hiển thị đúng format

### Mobile
- ✅ Chat button không che khuất nội dung
- ✅ Chat widget full screen trên mobile
- ✅ Keyboard không che chat input

### Tablet
- ✅ Giao diện responsive
- ✅ Touch interaction hoạt động tốt

## 🎨 Tùy Chỉnh (Tùy Chọn)

### Thay Đổi Màu Sắc
Tìm dòng này trong code:
```css
background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
```
Thay đổi màu theo ý muốn.

### Thay Đổi Vị Trí
Tìm dòng này:
```css
bottom: 20px;
right: 20px;
```
Điều chỉnh vị trí theo pixel.

### Thay Đổi Tin Nhắn Chào
Tìm phần tin nhắn chào trong code và chỉnh sửa nội dung.

## 📞 Hỗ Trợ Kỹ Thuật

### Khi Nào Cần Hỗ Trợ
- Chat button không hiển thị sau 24h
- Chatbot không phản hồi liên tục
- Giao diện bị lỗi nghiêm trọng
- Cần tùy chỉnh nâng cao

### Thông Tin Cần Cung Cấp
1. **URL website** đã tích hợp
2. **Screenshot** lỗi (nếu có)
3. **Thông tin trình duyệt** (Chrome, Firefox, Safari...)
4. **Thiết bị** đang sử dụng (Desktop, Mobile, Tablet)
5. **Mô tả chi tiết** vấn đề gặp phải

## ✅ Checklist Hoàn Thành

- [ ] Đã backup file HTML gốc
- [ ] Đã chèn code chatbot vào đúng vị trí
- [ ] Đã lưu file và refresh website
- [ ] Chat button hiển thị ở góc dưới bên phải
- [ ] Click vào button mở được chat widget
- [ ] Chatbot phản hồi được câu hỏi test
- [ ] Test trên cả desktop và mobile
- [ ] Giao diện không bị conflict với website gốc

## 🎉 Kết Luận

Sau khi hoàn thành các bước trên, website của bạn sẽ có chatbot tư vấn bảo hiểm nhân thọ hoạt động 24/7. Chatbot sẽ giúp khách hàng:

- Hiểu các khái niệm cơ bản về bảo hiểm nhân thọ
- Tính toán nhu cầu bảo hiểm cá nhân
- So sánh các loại sản phẩm bảo hiểm
- Nhận tư vấn khách quan và miễn phí

Chatbot hoàn toàn phù hợp với tôn chỉ "không bán hàng, chỉ tư vấn" của website baohiemnhantho.org.

