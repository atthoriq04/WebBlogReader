function articleTitle(title, isAccount, privacy, created, modified, readMode) {
  const div = document.createElement("div");
  div.classList.add("articleTitle");
  let articleTitle = "";
  if (readMode) {
    articleTitle = document.createElement("h2");
  } else {
    articleTitle = document.createElement("h4");
  }
  articleTitle.innerHTML = title;
  articleTitle.classList.add("title");
  const articlePrivacy = document.createElement("p");
  articlePrivacy.innerHTML = privacy > 0 ? "Private" : "Public";
  const articleUpload = document.createElement("p");
  articleUpload.innerHTML =
    "created at : " + new Date(created * 1000).toDateString();
  const articleModified = document.createElement("p");
  articleModified.innerHTML =
    "created at : " + new Date(modified * 1000).toDateString();
  div.appendChild(articleTitle);
  if (!isAccount * 1000) {
    return div;
  }
  div.appendChild(articlePrivacy);
  div.appendChild(articleUpload);
  div.appendChild(articleModified);
  return div;
}

export default articleTitle;
