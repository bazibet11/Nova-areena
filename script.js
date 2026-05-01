// CAPTCHA
let captcha = Math.floor(1000 + Math.random() * 9000);

window.onload = function() {
  let cap = document.getElementById("captchaText");
  if(cap){
    cap.innerText = "Captcha: " + captcha;
  }
}

// SIGNUP
function signup() {
  let user = document.getElementById("su_user").value;
  let pass = document.getElementById("su_pass").value;

  if(user === "" || pass === ""){
    alert("Fill all fields");
    return;
  }

  localStorage.setItem(user, pass);
  alert("Account Created");
  window.location.href = "index.html";
}

// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let userCaptcha = document.getElementById("captchaInput").value;

  if(userCaptcha != captcha){
    alert("Wrong Captcha");
    return;
  }

  let stored = localStorage.getItem(user);

  if(stored === pass){
    alert("Login Success");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}

// NAVIGATION
function goSignup(){
  window.location.href = "signup.html";
}

function goLogin(){
  window.location.href = "index.html";
}

function logout(){
  window.location.href = "index.html";
}
