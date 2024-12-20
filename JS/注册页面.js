function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psd").value;
    var repsd = document.getElementById("repsd").value;
    var emailRegex = /^[a-zA-Z0-9_.-]{4,20}$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    var inputCode=document.getElementById("inputCode").value; 
  
    if (!emailRegex.test(email)) {
        alert("邮箱长度必须在4-20个字符以内");
        document.getElementById("email").value = ""; // 清空邮箱输入
        return false;
    }
  
    if (!passwordRegex.test(password)) {
        alert("密码必须由字母和数字组成，长度为6-20位");
        document.getElementById("psd").value = ""; // 清空密码输入
        return false;
    }
    if (password !== repsd) {
        alert("两次输入的密码不一致！");
        document.getElementById("repsd").value = ""; // 清空再次输入的密码
        return false;
    }
    if(inputCode.length <= 0)  {  
        alert("请输入验证码！"); 
        }
    else if(inputCode.toUpperCase() != code.toUpperCase())  { 
        alert("验证码输入有误！"); 
            createCode(); 
    }
    return true;  
  }
  var code;
  function createCode() {
      code = "";
      var codeLength = 4; //验证码的长度 
      var checkCode = document.getElementById("checkCode");
      var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的 
      for(var i = 0; i < codeLength; i++) 
      {  var charNum = Math.floor(Math.random() * 52); 
          code += codeChars[charNum]; 
      }
      if(checkCode)  {
          checkCode.className = "code"; 
          checkCode.innerHTML = code; }
      }
