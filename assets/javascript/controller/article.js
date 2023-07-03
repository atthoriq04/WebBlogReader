import { emptyValidate } from "./functions.js";
import { article, articleRead } from "../component/articleComponent.js";

function categorySelector(parent, datas) {
  datas.forEach((category) => {
    const opt = document.createElement("option");
    opt.value = category.categoryId;
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
function placingEdit(
  titleComp,
  contentComp,
  categoryComp,
  checkBoxcomp,
  buttonComp,
  datas
) {
  titleComp.value = datas["title"];
  titleComp.name = "editTitle";
  contentComp.innerHTML = datas["notes"];
  categoryComp.value = datas["categoryId"];
  if (datas["isPrivate"] > 0) {
    checkBoxcomp.checked = true;
  }
  buttonComp.innerHTML = "Update Article";
  console.log(titleComp.name);
}
// ["id", "userId", "username", "name", "title", "categoryId", "Category", "notes", "createdAt", "modifiedAt", "isPrivate"]
function showArticle(datas, parent, isAccount, userId, text) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  const h2 = document.createElement("h2");
  h2.innerHTML = text;
  parent.appendChild(h2);
  if (!isAccount) {
    datas.forEach((data) => {
      if (data.isPrivate < 1) {
        parent.appendChild(
          article(
            data.id,
            data.userId,
            data.username,
            data.categoryId,
            data.Category,
            data.title,
            data.notes,
            data.isPrivate,
            data.createdAt,
            data.modifiedAt,
            isAccount,
            userId
          )
        );
      }
    });
    return;
  }
  datas.forEach((data) => {
    parent.appendChild(
      article(
        data.id,
        data.userId,
        data.username,
        data.categoryId,
        data.Category,
        data.title,
        data.notes,
        data.isPrivate,
        data.createdAt,
        data.modifiedAt,
        isAccount,
        userId
      )
    );
  });
}

function readArticle(datas, parent, userId) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  console.log(datas.createdAt);
  parent.appendChild(
    articleRead(
      datas.id,
      datas.userId,
      datas.username,
      datas.categoryId,
      datas.Category,
      datas.title,
      datas.notes,
      datas.isPrivate,
      datas.createdAt,
      datas.modifiedAt,
      userId
    )
  );
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export {
  validateArticle,
  categorySelector,
  showArticle,
  readArticle,
  placingEdit,
};
