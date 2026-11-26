# Bài tập 35a - Form đăng ký

## Chạy thử
Mở `index.html` bằng trình duyệt. Không cần cài thư viện hoặc chạy build.

## Cấu trúc
- `index.html`: form họ tên, email, mật khẩu và checkbox điều khoản.
- `css/style.css`: giao diện responsive.
- `js/script.js`: xử lý submit, validate và LocalStorage.

## Logic
1. Bắt sự kiện `submit`, gọi `event.preventDefault()` để ngăn tải lại trang.
2. Kiểm tra họ tên, email, mật khẩu tối thiểu 8 ký tự có chữ hoa/chữ thường/số và checkbox điều khoản.
3. Nếu dữ liệu sai, hiển thị lỗi và không lưu.
4. Nếu hợp lệ, lưu họ tên, email và thời điểm đăng ký vào LocalStorage rồi thông báo thành công.

## Bảo mật LocalStorage
Mật khẩu KHÔNG được lưu vào LocalStorage vì dữ liệu này có thể bị JavaScript cùng origin đọc. Trong ứng dụng thật, gửi mật khẩu qua HTTPS đến máy chủ và lưu bằng thuật toán băm mật khẩu chuyên dụng phía máy chủ như Argon2id hoặc bcrypt. Chỉ dùng dữ liệu giả khi thực hành trên website công khai.

Có thể xem dữ liệu demo trong DevTools > Application > Local Storage > `registeredUsers`.

## Deploy Netlify
1. Tạo repository GitHub mới, ví dụ `bai-tap-35a`.
2. Đưa `index.html`, thư mục `css`, thư mục `js` và `README.md` lên thư mục gốc repository.
3. Trên Netlify chọn Add new project > Import from Git > GitHub, rồi chọn repository.
4. Build command để trống; Publish directory là `.`.
5. Deploy và mở URL Netlify để kiểm tra.
