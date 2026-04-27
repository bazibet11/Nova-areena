// SWITCH
function showLogin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("signupBox").style.display = "none";
}

function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

// PASSWORD EYE
function togglePass(id) {
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// CAPTCHA
let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*10);
let c = Math.floor(Math.random()*10);
let d = Math.floor(Math.random()*10);

document.getElementById("loginCaptcha").innerText = `${a} + ${b} = ?`;
document.getElementById("signCaptcha").innerText = `${c} + ${d} = ?`;

// SIGNUP
function signup() {
  let user = document.getElementById("userName").value;
  let pass = document.getElementById("signPass").value;
  let cap = document.getElementById("signCapInput").value;

  if (parseInt(cap) !== (c + d)) {
    alert("Wrong captcha");
    return;
  }

  let data = {
    name: document.getElementById("fullName").value,
    phone: document.getElementById("phone").value,
    password: pass
  };

  localStorage.setItem(user, JSON.stringify(data));

  alert("Signup success");
}

// LOGIN
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;
  let cap = document.getElementById("loginCapInput").value;

  if (parseInt(cap) !== (a + b)) {
    alert("Wrong captcha");
    return;
  }

  let data = localStorage.getItem(user);

  if (!data) {
    alert("User not found");
    return;
  }

  let obj = JSON.parse(data);

  if (obj.password === pass) {
    alert("Login success");
  } else {
    alert("Wrong password");
  }
}

// FORGOT PASSWORD
function forgotPass() {
  let user = prompt("Enter username");

  let data = localStorage.getItem(user);

  if (!data) {
    alert("User not found");
    return;
  }

  let obj = JSON.parse(data);

  alert("Your password is: " + obj.password);
    }
