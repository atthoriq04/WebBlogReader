function articleBody(contents, readMode) {
  const div = document.createElement("div");
  div.classList.add("articleMain");
  if (readMode) {
    contents.forEach((content) => {
      const p = document.createElement("p");
      p.classList.add("mainParagraph");
      p.innerHTML = content;
      div.appendChild(p);
    });
  } else {
    const p = document.createElement("p");
    p.innerHTML = contents[0];
    div.appendChild(p);
  }
  return div;
}
export default articleBody;
