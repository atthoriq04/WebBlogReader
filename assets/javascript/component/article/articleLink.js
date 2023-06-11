function articleLink(id, isAccount) {
  const div = document.createElement("div");
  div.classList.add("articleLink");
  const readMore = document.createElement("a");
  readMore.classList.add("readMore");
  readMore.href = "";
  readMore.innerHTML = "Read More";
  const editArticle = document.createElement("a");
  editArticle.classList.add("editArticle");
  editArticle.href = "manageArticle.php?editId=" + id;
  editArticle.innerHTML = "Edit";
  const deleteArticle = document.createElement("a");
  deleteArticle.classList.add("deleteArticle");
  deleteArticle.href = "manageArticle.php?deleteId=" + id;
  deleteArticle.innerHTML = "Delete";
  div.appendChild(readMore);
  if (!isAccount) {
    return div;
  }
  div.appendChild(editArticle);
  div.appendChild(deleteArticle);
  return div;
}
