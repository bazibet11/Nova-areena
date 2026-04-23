// Signup
function signup() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Signup Success");
  window.location.href = "login.html";
}

// Login
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("loggedIn", user);
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong details");
  }
}

// Dashboard
if (window.location.pathname.includes("dashboard.html")) {
  let user = localStorage.getItem("loggedIn");
  document.getElementById("welcome").innerText = "Welcome " + user;
}

// Game
function startGame() {
  alert("Game Start (next step me real game add hoga)");
}
