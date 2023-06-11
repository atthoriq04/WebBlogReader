function articleBody(contents, readMode) {
  const div = document.createElement("div");
  div.classList.add("articleMain");
  const p = document.createElement("p");
  if (readMode) {
    contents.forEach((content) => {
      p.innerHTML = content;
      div.appendChild(p);
    });
  } else {
    p.innerHTML = contents[0];
    div.appendChild(p);
  }
  return div;
}
