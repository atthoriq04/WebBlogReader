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
    while (char < 500) {
      const p = document.createElement("p");
      p.classList.add("previewParagraph");
      p.innerHTML = contents[index];
      div.appendChild(p);
      char += contents[index].length;
      if ((index == 5 && char < 500) || index === contents.length - 1) {
        break;
      }
      index++;
    }
  }
  return div;
}
export default articleBody;
