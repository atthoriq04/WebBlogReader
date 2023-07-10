import master from "../jsons/master.json" assert { type: "json" };
import {
  showEdit,
  showChangePassword,
  validatePassword,
} from "./controller/user.js";
import { showArticle, readArticle } from "./controller/article.js";
import { darkToogler } from "./controller/functions.js";
darkToogler(document.getElementById("darkModeToggle"));
const masterData = JSON.parse(JSON.stringify(master));
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
//Account Edit Controlling
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

const content = document.getElementById("work");
const userArticle = masterData.filter(function (a) {
  return a.userId == userdata.userId;
});
showArticle(
  userArticle,
  content,
  true,
  userdata.userId,
  "Article By " + userdata.name
);
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.addEventListener("click", function (e) {
      if (e.target.classList == "deleteArticle") {
        const result = confirm("Want to delete?");
        if (!result) {
          e.preventDefault();
        }
      }
      if (e.target.classList == "readMore") {
        e.preventDefault();
        e.preventDefault();
        const search = e.target.parentElement.parentElement.id;
        const index = masterData.findIndex((obj) => obj.id === search);
        readArticle(masterData[index], content, userdata.userId);
      }
    });
  });
});
