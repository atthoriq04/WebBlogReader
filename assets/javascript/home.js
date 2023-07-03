import master from "../jsons/master.json" assert { type: "json" };
import { showArticle, readArticle } from "./controller/article.js";
if (localStorage.getItem("message") != null) {
  localStorage.removeItem("message");
}
const masterData = JSON.parse(JSON.stringify(master));
const content = document.getElementById("content");
const userdata = JSON.parse(user);
showArticle(masterData, content, false, userdata.userId, "All Notes");
document.addEventListener("DOMContentLoaded", function () {
  content.addEventListener("click", function (e) {
    console.log(masterData);
    if (e.target.classList == "readMore") {
      e.preventDefault();
      const search = e.target.parentElement.parentElement.id;
      const index = masterData.findIndex((obj) => obj.id === search);
      readArticle(masterData[index], content, userdata.userId);
    }
    if (e.target.classList == "categoryLink") {
      e.preventDefault();
      console.log(e.target.id);
      const categoryFilter = masterData.filter(function (a) {
        return a.categoryId == e.target.id;
      });
      console.log(categoryFilter);
      showArticle(
        categoryFilter,
        content,
        false,
        userdata.userId,
        "All Notes On " + e.target.innerHTML
      );
    }
    if (e.target.classList == "userLink") {
      e.preventDefault();
      const userFilter = masterData.filter(function (a) {
        return a.userId == e.target.id;
      });
      console.log(e.target.Id);
      showArticle(
        userFilter,
        content,
        false,
        userdata.userId,
        "All Notes By " + e.target.innerHTML
      );
    }
  });
});

document.title = "Homepage";
