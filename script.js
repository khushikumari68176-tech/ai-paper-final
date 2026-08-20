function signup() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newPass").value;
  console.log(user);
  console.log(pass);
  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);
  document.getElementById("msg").innerText = "Account Created Successfuly";
}
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");
  if (username === savedUser && password === savedPass) {
    alert("Login Successful");
    window.location.href = "project/index.html";
  } else {
    document.getElementById("error").innerText =
      "Invalid username and password";
    console.error("error");
  }
}
function toggle() {
  let pass = document.getElementById("password");
  let eye = document.getElementById("eye");
  if (pass.type === "password") {
    pass.type = "text";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    pass.type = "password";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
}
