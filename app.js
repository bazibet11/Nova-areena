let mode = "login";
let captcha = "";

function generateCaptcha(){
    captcha = Math.floor(1000 + Math.random()*9000);
    document.getElementById("captchaText").innerText = "Captcha: " + captcha;
}

generateCaptcha();

function switchMode(){
    mode = (mode === "login") ? "signup" : "login";
    document.querySelector(".btn").innerText = mode === "login" ? "Login" : "Sign Up";
    document.querySelector(".link").innerText = mode === "login" ? "Create Account" : "Back to Login";
    generateCaptcha();
}

function submit(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let cap = document.getElementById("captchaInput").value;

    if(!user || !pass){
        alert("Fill all fields");
        return;
    }

    if(cap != captcha){
        alert("Wrong captcha");
        generateCaptcha();
        return;
    }

    if(mode === "signup"){
        localStorage.setItem(user, pass);
        alert("Account Created!");
    }else{
        let saved = localStorage.getItem(user);
        if(saved === pass){
            showDashboard(user);
        }else{
            alert("Invalid Login");
        }
    }
}

function showDashboard(user){
    document.getElementById("authBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("welcomeUser").innerText = "Hello " + user;
}

function logout(){
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("authBox").style.display = "block";
}
