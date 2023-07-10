import {
  categorySelector,
  validateArticle,
  placingEdit,
} from "./controller/article.js";
import { darkToogler } from "./controller/functions.js";
const toogleComponent = document.getElementById("darkModeToggle");
darkToogler(toogleComponent);
document.title = "Write an Article";

const title = document.getElementById("title");
const content = document.getElementById("content");
const form = document.getElementById("articleForm");
const categoryComp = document.getElementById("category");
const checkBoxcomp = document.getElementById("isPrivate");
const buttonComp = document.getElementById("submitArticle");
categorySelector(categoryComp, categories);
if (localStorage.getItem("editArcticle") != null) {
  let data = JSON.parse(localStorage.getItem("editArcticle"));
  document.title = "Edit your Article";
  placingEdit(title, content, categoryComp, checkBoxcomp, buttonComp, data);
  localStorage.removeItem("editArcticle");
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleVal = document.getElementById("validateTitle");
  const contentVal = document.getElementById("validateContent");
  validateArticle(title, content, titleVal, contentVal, form);
});
console.log(form);
