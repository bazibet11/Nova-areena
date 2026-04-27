import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* 🔴 APNI FIREBASE CONFIG YAHAN PASTE KARO */
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* SCREEN SWITCH */
window.showLogin = function () {
  document.getElementById("home").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
};

window.showSignup = function () {
  document.getElementById("home").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
};

window.goHome = function () {
  document.getElementById("home").style.display = "block";
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "none";
};

/* SIGNUP */
window.signup = function () {
  let email = document.getElementById("signupEmail").value;
  let pass = document.getElementById("signupPass").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => alert("Signup Successful"))
    .catch(err => alert(err.message));
};

/* LOGIN */
window.login = function () {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Login Successful");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};
