import { goBack } from "./utils.js";
const previousPage = document.querySelector(".fa-arrow-left");

const form = document.querySelector("#form");
const sectionForm = document.querySelector(".section-form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

const submitButton = document.querySelector(".submit");

previousPage.addEventListener("click", goBack);

function validateForm() {
  event.preventDefault();
  console.log(event);

  /*Checks if the email is correct*/
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.borderColor = "#4cd038";
  } else {
    emailError.style.display = "block";
    email.style.borderColor = "red";
  }

  /*Checks if the password is correct*/

  if (validatePassword(password.value) === true) {
    passwordError.style.display = "none";
    password.style.borderColor = "#4cd038";
  } else {
    passwordError.style.display = "block";
    password.style.borderColor = "red";
  }

  console.log(email.value);
  console.log(password.value);
}

form.addEventListener("submit", validateForm);

console.log(validateForm);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validatePassword(password) {
  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const passwordPatternMatch = passwordRegEx.test(password);
  return passwordPatternMatch;
}
