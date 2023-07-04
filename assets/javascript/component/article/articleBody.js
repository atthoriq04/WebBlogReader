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
    let index = 0;
    let char = 0;
    while (char < 300) {
      const p = document.createElement("p");
      p.classList.add("previewParagraph");
      p.innerHTML = contents[index];
      div.appendChild(p);
      console.log(index);
      char += contents[index].length;
      index++;
    }
  }
  return div;
}
export default articleBody;
