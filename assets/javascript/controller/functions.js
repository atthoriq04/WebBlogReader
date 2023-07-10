function emptyValidate(component, errorHandling, message) {
  if (component.value.trim() == "") {
    errorHandling.innerHTML = message;
    return false;
  }
  return true;
}

function sameValidate(component1, component2, errorHandling, message) {
  if (component1.value !== component2.value) {
    errorHandling.innerHTML = message;
    return false;
  }
  return true;
}

function charValidate(component, charLength, errorHandling, message) {
  if (component.value.length < charLength) {
    errorHandling.innerHTML = message;
    return false;
  }
  return true;
}
function changeMode(toggleComponent, body) {
  const mode = localStorage.getItem("mode") || "dark";
  if (mode === "dark") {
    toggleComponent.checked = true;
    body.classList.add("dark-mode");
  } else {
    toggleComponent.checked = false;
    body.classList.remove("dark-mode");
  }
}

function darkToogler(toogleComponent) {
  const body = document.body;
  toogleComponent.addEventListener("change", function () {
    localStorage.setItem("mode", "normal");
    if (toogleComponent.checked) {
      localStorage.setItem("mode", "dark");
    }
    changeMode(toogleComponent, body);
  });
}

export { emptyValidate, sameValidate, charValidate, darkToogler };
