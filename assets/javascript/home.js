if (localStorage.getItem("message") != null) {
  localStorage.removeItem("message");
}
document.title = "Homepage";
const data = JSON.parse(user);
console.log(data[0]);
