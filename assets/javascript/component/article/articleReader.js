import articleTitle from "./articleTitle.js";
import articleBody from "./articleBody.js";
import articleFooter from "./articleFooter.js";
import articleLink from "./articleLink.js";
function articleReader(
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
) {
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("container");
  articleContainer.id = articleId;
  articleContainer.appendChild(
    articleTitle(title, false, privacy, created, modified, true)
  );
  articleContainer.appendChild(articleBody(contents, true));
  articleContainer.appendChild(
    articleFooter(username, userId, category, categoryId, created, modified)
  );
  console.log(userId, activeId);
  if (userId === activeId) {
    articleContainer.appendChild(
      articleLink(articleId, false, userId, activeId)
    );
  }
  return articleContainer;
}
export default articleReader;
