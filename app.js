let user = localStorage.getItem("currentUser");

if(!user){
  window.location.href = "index.html";
}

// BALANCE LOAD
let balance = parseInt(localStorage.getItem(user+"_balance")) || 0;
updateBalance();

// UPDATE FUNCTION
function updateBalance(){
  document.getElementById("topBalance").innerText = balance;
}

// ADD MONEY
function addMoney(){
  balance += 100;
  localStorage.setItem(user+"_balance", balance);
  updateBalance();
}

// WITHDRAW
function withdraw(){
  if(balance >= 50){
    balance -= 50;
    localStorage.setItem(user+"_balance", balance);
    updateBalance();
  }else{
    alert("Not enough balance");
  }
}

// LOGOUT
function logout(){
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
