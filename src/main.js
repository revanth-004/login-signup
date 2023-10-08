const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");

//This function is for ERROR messages for incorrect inputs
function setInputError(form, type, message) {
  //'form'- to deside which form,'type'-success or error,'message'-this will be displayed
  const messageElement = form.querySelector(".form-message");
  messageElement.textContent = message;
  messageElement.classList.remove(
    "form-message-success",
    "form-message-error",
    "form-hidden"
  );
  messageElement.classList.add(`form-message-${type}`);
}

document
  .getElementById("linkCreateAccount")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.toggle("form-hidden");
    createAccountForm.classList.toggle("form-hidden");
  });

document
  .getElementById("linkLoginAccount")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.toggle("form-hidden");
    createAccountForm.classList.toggle("form-hidden");
  });

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const username_email = formData.get("username_email");
  const password = formData.get("password");

  if (password === "" || username_email === "") {
    setInputError(loginForm, "error", "Please fill all fields");
  } else {
    // Check the username and password
    setInputError(loginForm, "success", "Login successfull !!");
  }
});
createAccountForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const username = formData.get("username");
  const email = formData.get("email");
  const confirm_password = formData.get("confirm_password");
  const password = formData.get("password");

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirm_password === ""
  ) {
    setInputError(createAccountForm, "error", "Please fill all fields");
  } else {
    // Check the username and password
    setInputError(createAccountForm, "success", "Sign in successfull !!");
  }
});
