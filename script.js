const form = document.getElementById("email-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputField = document.getElementById("email");
  console.log(validateEmail(inputField));
  inputField.value = "";
});

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    alert("Valid email address!");

    input.focus();

    return true;
  } else {
    alert("Invalid email address!");

    input.focus();

    return false;
  }
}
