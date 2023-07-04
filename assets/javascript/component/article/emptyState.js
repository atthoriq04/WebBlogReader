function emptyState(emptyText, linkHref, afterLink) {
  const div = document.createElement("div");
  div.classList.add("emptyState");
  div.classList.add("flex");
  const h2 = document.createElement("h2");
  h2.innerHTML = emptyText;
  const p = document.createElement("p");
  const link = document.createElement("a");
  link.href = linkHref;
  link.innerHTML = "Click Here ";
  const text = document.createTextNode(afterLink);
  p.appendChild(link);
  p.appendChild(text);
  div.appendChild(h2);
  div.appendChild(p);
  return div;
}
export default emptyState;
