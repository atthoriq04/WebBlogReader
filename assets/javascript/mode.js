const mode = localStorage.getItem("mode") || "dark";
console.log(mode);
const body = document.body;
if (mode === "dark") {
  console.log(document.body);
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}
document.addEventListener("DOMContentLoaded", function () {
  const toggleComponent = document.getElementById("darkModeToggle");
  if (mode === "dark") {
    toggleComponent.checked = true;
  } else {
    toggleComponent.checked = false;
  }
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
  nav.addEventListener("click", function (event) {
    const target = event.target;
    if (!target.classList.contains("navmenu")) {
      nav.classList.remove("open");
    }
  });
});
