function showLogin(el) {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
}

function showSignup(el) {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
}

function togglePassword(id) {
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}
