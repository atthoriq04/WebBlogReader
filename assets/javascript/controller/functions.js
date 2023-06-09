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

export { emptyValidate, sameValidate, charValidate };
