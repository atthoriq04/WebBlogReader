import master from "../jsons/master.json" assert { type: "json" };
if (localStorage.getItem("message") != null) {
  localStorage.removeItem("message");
}
const masterData = JSON.parse(JSON.stringify(master));
console.log(masterData);
document.title = "Homepage";
const data = JSON.parse(user);
console.log(data[0]);
