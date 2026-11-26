const form = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsInput = document.getElementById("terms");
const formMessage = document.getElementById("form-message");

function showError(field, message) {
  document.getElementById(`${field}-error`).textContent = message;
  const input = document.getElementById(field);
  if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateForm() {
  let valid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  ["name", "email", "password", "terms"].forEach(id => showError(id, ""));

  if (name.length < 2) {
    showError("name", "Vui lòng nhập họ tên (ít nhất 2 ký tự).");
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError("email", "Vui lòng nhập địa chỉ email hợp lệ.");
    valid = false;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password)) {
    showError("password", "Mật khẩu cần ít nhất 8 ký tự, gồm chữ hoa, chữ thường và số.");
    valid = false;
  }

  if (!termsInput.checked) {
    showError("terms", "Bạn cần đồng ý với điều khoản để tiếp tục.");
    valid = false;
  }
  return valid;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  formMessage.textContent = "";
  formMessage.className = "form-message";

  if (!validateForm()) {
    formMessage.textContent = "Vui lòng kiểm tra lại thông tin.";
    formMessage.classList.add("error");
    return;
  }

  // Không lưu mật khẩu thô vào LocalStorage vì JavaScript cùng website có thể đọc được.
  const registration = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim().toLowerCase(),
    registeredAt: new Date().toISOString()
  };

  try {
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    users.push(registration);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    formMessage.textContent = "Đăng ký thành công! Thông tin cơ bản đã được lưu trên trình duyệt.";
    formMessage.classList.add("success");
    form.reset();
    [nameInput, emailInput, passwordInput].forEach(input => input.removeAttribute("aria-invalid"));
  } catch (error) {
    formMessage.textContent = "Không thể lưu dữ liệu trên trình duyệt này. Vui lòng kiểm tra cài đặt.";
    formMessage.classList.add("error");
  }
});
