let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

document.getElementById("captcha").innerText = `${num1} + ${num2} = ?`;

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let fullname = document.getElementById("fullname").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let captchaInput = document.getElementById("captchaInput").value;

  if (parseInt(captchaInput) !== (num1 + num2)) {
    alert("Captcha wrong!");
    return;
  }

  let user = {
    fullname,
    username,
    password
  };

  localStorage.setItem(username, JSON.stringify(user));

  alert("Signup successful!");
  window.location.href = "login.html";
});
