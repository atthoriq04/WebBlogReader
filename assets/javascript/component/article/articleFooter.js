function articleFooter(
  username,
  userId,
  category,
  categoryId,
  created,
  modified
) {
  const div = document.createElement("div");
  div.classList.add("articleFoot");
  const postedBy = document.createElement("p");
  const text1 = document.createTextNode("Posted By: ");
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
  const articleUpload = document.createElement("p");
  articleUpload.innerHTML =
    "created at: " + new Date(created * 1000).toDateString();
  const articleModified = document.createElement("p");
  articleModified.innerHTML =
    "Modified at: " + new Date(modified * 1000).toDateString();
  div.appendChild(postedBy);
  div.appendChild(articleUpload);
  div.appendChild(articleModified);

  return div; // Add this line to return the created div element
}

export default articleFooter;
