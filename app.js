let users = JSON.parse(localStorage.getItem("users")) || [];

// CAPTCHA LOGIN
let a1 = Math.floor(Math.random()*10);
let b1 = Math.floor(Math.random()*10);
if(document.getElementById("q1")){
  document.getElementById("q1").innerText = a1 + " + " + b1;
}

// CAPTCHA SIGNUP
let a2 = Math.floor(Math.random()*10);
let b2 = Math.floor(Math.random()*10);
if(document.getElementById("q2")){
  document.getElementById("q2").innerText = a2 + " + " + b2;
}

// SIGNUP
function signup() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let ans = document.getElementById("ans2").value;

  if (ans != (a2 + b2)) {
    alert("Captcha wrong");
    return;
  }

  users.push({user, pass});
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");
  window.location.href = "index.html";
}

// LOGIN
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;
  let ans = document.getElementById("ans1").value;

  if (ans != (a1 + b1)) {
    alert("Captcha wrong");
    return;
  }

  let found = users.find(u => u.user === user && u.pass === pass);

  if (found) {
    alert("Login success!");
  } else {
    alert("User not found");
  }
}
