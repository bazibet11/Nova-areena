// CAPTCHA
let num1 = Math.floor(Math.random()*10);
let num2 = Math.floor(Math.random()*10);

let num3 = Math.floor(Math.random()*10);
let num4 = Math.floor(Math.random()*10);

window.onload = function(){
  document.getElementById("captchaQ1").innerText = num1 + " + " + num2;
  document.getElementById("captchaQ2").innerText = num3 + " + " + num4;
}

// SWITCH
function showSignup(){
  document.getElementById("loginBox").style.display="none";
  document.getElementById("signupBox").style.display="block";
}

function showLogin(){
  document.getElementById("loginBox").style.display="block";
  document.getElementById("signupBox").style.display="none";
}

// PASSWORD EYE
function togglePass(id){
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// LOGIN
function login(){
  let ans = document.getElementById("captchaA1").value;

  if(parseInt(ans) !== (num1 + num2)){
    alert("Wrong Captcha");
    return;
  }

  alert("Login Successful (Demo)");
}

// SIGNUP
function signup(){
  let ans = document.getElementById("captchaA2").value;

  if(parseInt(ans) !== (num3 + num4)){
    alert("Wrong Captcha");
    return;
  }

  alert("Account Created");
  showLogin();
}

// FORGOT
function forgot(){
  alert("Forgot password coming soon");
}
