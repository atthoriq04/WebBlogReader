function articleTitle(title, isAccount, privacy, created, modified) {
  const div = document.createElement("div");
  div.classList.add("articleTitle");
  const articleTitle = document.createElement("h4");
  articleTitle.innerHTML = title;
  articleTitle.classList.add("title");
  const articlePrivacy = document.createElement("p");
  articlePrivacy.innerHTML = privacy;
  const articleUpload = document.createElement("p");
  articleUpload.innerHTML = "created at : " + new Date(created).toDateString();
  const articleModified = document.createElement("p");
  articleModified.innerHTML =
    "created at : " + new Date(modified).toDateString();
  div.appendChild(articleTitle);
  if (!isAccount) {
    return div;
  }
  div.appendChild(articlePrivacy);
  div.appendChild(articleUpload);
  div.appendChild(articleModified);
  return div;
}

function articleContainer() {}
