import {
  showEdit,
  showChangePassword,
  validatePassword,
} from "./controller/user.js";
const userdata = JSON.parse(user);
document.title = "Account";
document.getElementById("username").innerHTML = userdata["username"];
document.getElementById("name").innerHTML = userdata["name"];
document.getElementById("role").innerHTML =
  userdata["isAdmin"] > 0 ? "admin" : "user";
//Flash Message Controlling
if (localStorage.getItem("message") != null) {
  let localData = JSON.parse(localStorage.getItem("message"));
  console.log(localData);
  localStorage.removeItem("message");
  if ("isEdit" in localData && localData["isEdit"] == true)
    showEdit(userdata["username"], userdata["name"]);

  if ("isPassword" in localData && localData["isPassword"] == true)
    showChangePassword();
  document.getElementById("fMessage").innerHTML = localData["message"];
}
//
document.getElementById("accountInfo").addEventListener("click", function (e) {
  if (e.target.tagName === "A") e.preventDefault();
  if (e.target.id === "editAccount")
    showEdit(userdata["username"], userdata["name"]);

  if (e.target.id === "cPassword") showChangePassword();

  if (e.target.id === "toEdit")
    showEdit(userdata["username"], userdata["name"]);

  if (e.target.id === "changePassword") {
    e.preventDefault();
    validatePassword(document.getElementById("changeP"));
  }

  if (e.target.id === "toAccount") location.reload();
});
