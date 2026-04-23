function loginUser(e) {
  e.preventDefault();

  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if(user === savedUser && pass === savedPass){
    alert("Login Success");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong Details");
  }
}

function goSignup(){
  window.location.href = "signup.html";
}
