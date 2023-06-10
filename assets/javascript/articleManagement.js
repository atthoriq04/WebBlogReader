import { categorySelector, validateArticle } from "./controller/article.js";
document.title = "Write an Article";
const form = document.getElementById("articleForm");
categorySelector(document.getElementById("category"), categories);

if (localStorage.getItem["editArcticle"] != null) {
  document.title = "Edit your Article";
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const titleVal = document.getElementById("validateTitle");
  const contentVal = document.getElementById("validateContent");
  validateArticle(title, content, titleVal, contentVal, form);
});
console.log(form);
