function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("psd").value;
  var emailRegex = /^[a-zA-Z0-9_.-]{4,20}$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;

  if (!emailRegex.test(email)) {
      alert("邮箱长度必须在4-20个字符以内");
      document.getElementById("email").value = ""; // 清空邮箱输入
      return;
  }

  if (!passwordRegex.test(password)) {
      alert("密码必须由字母和数字组成，长度为6-20位");
      document.getElementById("psd").value = ""; // 清空密码输入
      return;
  }
}