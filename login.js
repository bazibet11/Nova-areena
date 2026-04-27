document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let storedUser = localStorage.getItem(username);

  if (!storedUser) {
    alert("User not found!");
    return;
  }

  let user = JSON.parse(storedUser);

  if (user.password === password) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong password!");
  }
});
