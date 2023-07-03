import {
  registerForm,
  loginForm,
  accountEdit,
  passwordEdit,
} from "../component/userform.js";
import { emptyValidate, sameValidate, charValidate } from "./functions.js";
function showRegister() {
  const form = document.getElementById("form");
  document.getElementById("loginTitle").firstElementChild.innerHTML =
    "Register";
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
  form.appendChild(registerForm());
}

function showLogin() {
  document.getElementById("loginTitle").firstElementChild.innerHTML = "Login";
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
  form.appendChild(loginForm());
}

function validateLogin(form) {
  const username = emptyValidate(
    document.getElementById("username"),
    document.getElementById("validateUser"),
    "Username Must Not Empty!"
  );
  const password = emptyValidate(
    document.getElementById("password"),
    document.getElementById("validatePass"),
    "Password Must Not Empty!"
  );
  if (username && password) {
    form.submit();
  }
}

function validateRegister(form) {
  const username = emptyValidate(
    document.getElementById("username"),
    document.getElementById("validateUser"),
    "Username Must Not Empty!"
  );
  const emPassword = emptyValidate(
    document.getElementById("password"),
    document.getElementById("validatePass"),
    "Password Must Not Empty!"
  );
  const passwords = sameValidate(
    document.getElementById("password"),
    document.getElementById("pRepeat"),
    document.getElementById("validatePass"),
    "Password must match!"
  );
  const passwordSize = charValidate(
    document.getElementById("password"),
    6,
    document.getElementById("validatePass"),
    "Password Must Longer than 6 Characters"
  );
  if (username && emPassword && passwords && passwordSize) {
    form.submit();
  }
}

function showEdit(username, name) {
  document.getElementById("infoTitle").innerHTML = "Edit Account";
  const parent = document.getElementById("accountInfo");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  parent.appendChild(accountEdit(username, name));
}

function showChangePassword() {
  document.getElementById("infoTitle").innerHTML = "Update Password";
  const parent = document.getElementById("accountInfo");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  parent.appendChild(passwordEdit());
}

function validatePassword(form) {
  const isSame = sameValidate(
    document.getElementById("newOne"),
    document.getElementById("pRepeat"),
    document.getElementById("fMessage"),
    "Your New Password Must be the same as Repeat new Password"
  );
  if (isSame) {
    form.submit();
  }
}
export {
  showRegister,
  showLogin,
  validateLogin,
  validateRegister,
  showEdit,
  showChangePassword,
  validatePassword,
};
