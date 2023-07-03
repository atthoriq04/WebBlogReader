function articleLink(articleId, isAccount, userId, activeId) {
  const div = document.createElement("div");
  div.classList.add("articleLink");
  const readMore = document.createElement("a");
  readMore.classList.add("readMore");
  readMore.href = "";
  readMore.innerHTML = "Read More";
  const editArticle = document.createElement("a");
  editArticle.classList.add("editArticle");
  editArticle.href = "manageArticle.php?editId=" + articleId;
  editArticle.innerHTML = "Edit";
  const deleteArticle = document.createElement("a");
  deleteArticle.classList.add("deleteArticle");
  deleteArticle.href = "manageArticle.php?deleteId=" + articleId;
  deleteArticle.innerHTML = "Delete";
  if (!isAccount) {
    if (userId === activeId) {
      div.appendChild(editArticle);
      div.appendChild(deleteArticle);
      return div;
    }
    div.appendChild(readMore);
    return div;
  }
  div.appendChild(readMore);
  div.appendChild(editArticle);
  div.appendChild(deleteArticle);
  return div;
}

export default articleLink;
