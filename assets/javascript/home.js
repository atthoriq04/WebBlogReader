import master from "../jsons/master.json" assert { type: "json" };
import { showArticle, readArticle } from "./controller/article.js";
if (localStorage.getItem("message") != null) {
  localStorage.removeItem("message");
}
const masterData = JSON.parse(JSON.stringify(master));
const content = document.getElementById("content");
const userdata = JSON.parse(user);
showArticle(masterData, content, false, userdata.userId);
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.addEventListener("click", function (e) {
      if (e.target.classList == "readMore") {
        e.preventDefault();
        const search = e.target.parentElement.parentElement.id;
        const index = masterData.findIndex((obj) => obj.id === search);
        readArticle(masterData[index], content, userdata.userId);
      }
    });
  });
});

document.title = "Homepage";
