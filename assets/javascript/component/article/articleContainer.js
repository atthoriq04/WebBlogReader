import articleTitle from "./articleTitle.js";
import articleBody from "./articleBody.js";
import articleLink from "./articleLink.js";
function articleContainer(
  title,
  userId,
  isAccount,
  privacy,
  created,
  modified,
  contents,
  articleId,
  activeId
) {
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("articleContainer");
  articleContainer.id = articleId;
  articleContainer.appendChild(
    articleTitle(title, isAccount, privacy, created, modified, false)
  );
  if (!isAccount) articleContainer.appendChild(articleBody(contents, false));
  articleContainer.appendChild(
    articleLink(articleId, isAccount, userId, activeId)
  );
  return articleContainer;
}
export default articleContainer;
