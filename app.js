// ===== GLOBAL CAPTCHA =====
let num1 = 0;
let num2 = 0;

// ===== PAGE LOAD =====
window.onload = function () {
  generateCaptcha();
};

// ===== CAPTCHA GENERATE =====
function generateCaptcha() {
  num1 = Math.floor(Math.random() * 5) + 1;
  num2 = Math.floor(Math.random() * 5) + 1;

  let captchaText = document.getElementById("captchaQ");
  if (captchaText) {
    captchaText.innerText = num1 + " + " + num2;
  }
}

// ===== PASSWORD TOGGLE =====
function togglePass(id) {
  let input = document.getElementById(id);

  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

// ===== SWITCH FORMS =====
function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

function showLogin() {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
  generateCaptcha();
}

// ===== SIGNUP FUNCTION =====
function signup() {
  let user = document.getElementById("signupUser").value.trim();
  let pass = document.getElementById("signupPass").value.trim();

  if (user === "" || pass === "") {
    alert("Please fill all fields");
    return;
  }

  // SAVE DATA (browser storage)
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Signup Successful ✔");

  // Clear fields
  document.getElementById("signupUser").value = "";
  document.getElementById("signupPass").value = "";

  showLogin();
}

// ===== LOGIN FUNCTION =====
function login() {
  let user = document.getElementById("loginUser").value.trim();
  let pass = document.getElementById("loginPass").value.trim();
  let captcha = document.getElementById("captchaA").value.trim();

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  // VALIDATION
  if (user === "" || pass === "" || captcha === "") {
    alert("All fields required");
    return;
  }

  // CAPTCHA CHECK
  if (parseInt(captcha) !== num1 + num2) {
    alert("Wrong captcha ❌");
    generateCaptcha();
    document.getElementById("captchaA").value = "";
    return;
  }

  // LOGIN CHECK
  if (user === savedUser && pass === savedPass) {
    alert("Login Successful ✅");

    // OPTIONAL REDIRECT
    // window.location.href = "dashboard.html";
  } else {
    alert("Wrong Username or Password ❌");
  }
}
