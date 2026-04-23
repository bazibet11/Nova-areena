// ================= SIGNUP =================
function signupUser(e){
  e.preventDefault();

  let user = document.getElementById("signupUser").value;
  let pass = document.getElementById("signupPass").value;
  let phone = document.getElementById("phone").value;

  if(user === "" || pass === "" || phone === ""){
    alert("Please fill all fields");
    return;
  }

  // Save data
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Signup Successful ✅");

  // Redirect to login
  window.location.href = "index.html";
}


// ================= LOGIN =================
function loginUser(e){
  e.preventDefault();

  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if(user === savedUser && pass === savedPass){
    localStorage.setItem("loggedIn", "true");

    alert("Login Successful ✅");

    window.location.href = "dashboard.html";
  } else {
    alert("Wrong Username or Password ❌");
  }
}


// ================= LOGOUT =================
function logout(){
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}


// ================= PAGE PROTECTION =================
// Dashboard open na ho jab tak login na ho
function checkLogin(){
  let isLogin = localStorage.getItem("loggedIn");

  if(isLogin !== "true"){
    window.location.href = "index.html";
  }
}


// ================= NAVIGATION =================
function goSignup(){
  window.location.href = "signup.html";
}

function goLogin(){
  window.location.href = "index.html";
}
