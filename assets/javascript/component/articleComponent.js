import articleContainer from "./article/articleContainer.js";
import articleReader from "./article/articleReader.js";

function article(
  articleId,
  userId,
  username,
  categoryId,
  category,
  title,
  contents,
  privacy,
  created,
  modified,
  isAccount,
  activeId
) {
  const div = document.createElement("div");
  div.classList.add("article");
  const postedBy = document.createElement("p");
  const text1 = document.createTextNode("Posted By : ");
  const text2 = document.createTextNode(" on ");
  const usernameLink = document.createElement("a");
  usernameLink.innerHTML = username;
  usernameLink.href = "accountPage.php?userId=" + userId;
  const categoryLink = document.createElement("a");
  categoryLink.innerHTML = category;
  categoryLink.href = categoryId;
  categoryLink.classList.add("categoryLink");
  postedBy.appendChild(text1);
  postedBy.appendChild(usernameLink);
  postedBy.appendChild(text2);
  postedBy.appendChild(categoryLink);
  div.appendChild(postedBy);
  div.appendChild(
    articleContainer(
      title,
      userId,
      isAccount,
      privacy,
      created,
      modified,
      contents,
      articleId
    )
  );
  return div;
}
function articleRead(
  articleId,
  userId,
  username,
  categoryId,
  category,
  title,
  contents,
  privacy,
  created,
  modified,
  isAccount,
  activeId
) {
  const div = document.createElement("div");
  div.classList.add("article");
  div.appendChild(
    articleReader(
      articleId,
      userId,
      username,
      categoryId,
      category,
      title,
      contents,
      privacy,
      created,
      modified,
      activeId
    )
  );
  return div;
}

export { article, articleRead };
