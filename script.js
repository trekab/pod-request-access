const form = document.getElementById("email-form");
const errorHandle = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputField = document.getElementById("email");
  inputField.value = "";
});

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value === "") {
    errorHandle.innerText = "Oops! Please add your email";
    input.focus();
    return false;
  } else if (input.value.match(validRegex)) {
    errorHandle.innerText = "";

    input.focus();

    return true;
  } else {
    errorHandle.innerText = "Oops! Please check your email";
    input.focus();

    return false;
  }
}
