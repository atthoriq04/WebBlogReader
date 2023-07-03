import {
  showLogin,
  showRegister,
  validateLogin,
  validateRegister,
} from "./controller/user.js";
showLogin();
if (localStorage.getItem("message") != null) {
  let data = JSON.parse(localStorage.getItem("message"));
  if (data["isLogin"] == false) {
    showRegister();
  }
  document.getElementById("fMessage").innerHTML = data["message"];
  localStorage.removeItem("message");
}
const form = document.getElementById("form");
form.addEventListener("click", function (e) {
  if (e.target.classList.contains("login")) {
    e.preventDefault();
    showRegister();
  }
  if (e.target.classList.contains("reload")) {
    e.preventDefault();
    showLogin();
  }
  if (e.target.classList.contains("loginButton")) {
    e.preventDefault();
    const form = e.target.parentElement;
    validateLogin(form);
  }
  if (e.target.classList.contains("registerButton")) {
    e.preventDefault();
    const form = e.target.parentElement;
    validateRegister(form);
  }
});
