import { emptyValidate } from "./functions.js";

function categorySelector(parent, datas) {
  datas.forEach((category) => {
    const opt = document.createElement("option");
    opt.value = category.id;
    console.log(category["Category"]);
    opt.innerHTML = category.Category;
    parent.appendChild(opt);
  });
}
function validateArticle(titleComp, contentComp, titleVal, contentVal, form) {
  const title = emptyValidate(titleComp, titleVal, "Title Must not be Empty");
  const content = emptyValidate(
    contentComp,
    contentVal,
    "Content Must not be Empty"
  );
  if (title && content) {
    form.submit();
  }
}

export { validateArticle, categorySelector };
