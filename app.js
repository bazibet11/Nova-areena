var firebaseConfig = {
  apiKey: "AIzaSyDHpc9lN_y8c2Ta0Xfed5ayOzEjYbN5ur4",
  authDomain: "nova-areena.firebaseapp.com",
  projectId: "nova-areena",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

/* CAPTCHA */
let cap1, cap2;

function generateCaptcha1(){
  let a=Math.floor(Math.random()*10);
  let b=Math.floor(Math.random()*10);
  cap1=a+b;
  document.getElementById("cap1").innerText=a+" + "+b+" =";
}

function generateCaptcha2(){
  let a=Math.floor(Math.random()*10);
  let b=Math.floor(Math.random()*10);
  cap2=a+b;
  document.getElementById("cap2").innerText=a+" + "+b+" =";
}

/* SWITCH */
function showSignup(){
  document.getElementById("loginBox").style.display="none";
  document.getElementById("signupBox").style.display="block";
}

function showLogin(){
  document.getElementById("loginBox").style.display="block";
  document.getElementById("signupBox").style.display="none";
}

/* SIGNUP */
function signup(){
  let email=document.getElementById("userName").value+"@gmail.com";
  let pass=document.getElementById("pass").value;
  let cap=document.getElementById("capAns2").value;

  if(parseInt(cap)!==cap2){ alert("Wrong captcha"); return; }

  auth.createUserWithEmailAndPassword(email,pass)
  .then(()=>alert("Signup Success"))
  .catch(e=>alert(e.message));
}

/* LOGIN */
function login(){
  let email=document.getElementById("loginUser").value+"@gmail.com";
  let pass=document.getElementById("loginPass").value;
  let cap=document.getElementById("capAns1").value;

  if(parseInt(cap)!==cap1){ alert("Wrong captcha"); return; }

  auth.signInWithEmailAndPassword(email,pass)
  .then(()=>window.location.href="dashboard.html")
  .catch(e=>alert(e.message));
}

window.onload=()=>{
  generateCaptcha1();
  generateCaptcha2();
    }
