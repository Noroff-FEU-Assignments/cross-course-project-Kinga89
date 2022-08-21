import { goBack } from "./utils.js";

const previousPage = document.querySelector(".fa-arrow-left");

previousPage.addEventListener("click", goBack);

/* PAYMENT DETAILS VALIDATION*/

const paymentForm = document.querySelector(".payment-form");

const cardNumber = document.querySelector("#ccn");
const cardNumberErr = document.querySelector("#ccnError");
const cardNumberErr2 = document.querySelector("#ccnError2");

const expiryDate = document.querySelector("#cc-exp");
const expiryDateErr = document.querySelector("#expError");

const cvc = document.querySelector("#credit-cvc");
const cvcErr = document.querySelector("#cvcError");

const nameOnCard = document.querySelector("#card-name");
const nameOnCardErr = document.querySelector("#cardNameError");

function validatePaymentInfo() {
  event.preventDefault();
  console.log(event);

  /*Checks if the card number field is filled out*/
  if (!cardNumber.value) {
    cardNumberErr.style.display = "block";
    cardNumber.style.borderColor = "red";
  } else {
    cardNumberErr.style.display = "none";
    cardNumber.style.borderColor = "#4cd038";
  }

  /*Checks if the card number consists of 16 digits*/
  if (validateCardNumber(cardNumber.value) === true) {
    cardNumberErr2.style.display = "none";
  } else {
    cardNumberErr2.style.display = "block";
    cardNumber.style.borderColor = "red";
  }

  /*Checks if the expiry date matches regEx pattern*/
  if (validateExpiryDate(expiryDate.value) === true) {
    expiryDateErr.style.display = "none";
    expiryDate.style.borderColor = "#4cd038";
  } else {
    expiryDateErr.style.display = "block";
    expiryDate.style.borderColor = "red";
  }

  /*Checks if the CVC matches regEx pattern*/
  if (validateCVC(cvc.value) === false) {
    cvcErr.style.display = "block";
    cvc.style.borderColor = "red";
  } else {
    cvcErr.style.display = "none";
    cvc.style.borderColor = "#4cd038";
  }

  /*Checks if name field is filled out*/
  if (!nameOnCard.value) {
    nameOnCardErr.style.display = "block";
    nameOnCard.style.borderColor = "red";
  } else {
    nameOnCardErr.style.display = "none";
    nameOnCard.style.borderColor = "#4cd038";
  }

  console.log(cardNumber.value);
  console.log(expiryDate.value);
  console.log(cvc.value);
  console.log(nameOnCard.value);
}

paymentForm.addEventListener("submit", validatePaymentInfo);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateCardNumber(cardNumber) {
  const cardNumRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const cardNumPatternMatch = cardNumRegEx.test(cardNumber);
  return cardNumPatternMatch;
}

function validateExpiryDate(expiryDate) {
  const expDateRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  const expDatePatternMatch = expDateRegEx.test(expiryDate);
  return expDatePatternMatch;
}

function validateCVC(cvc) {
  const cvcRegEx = /^[0-9]{3,4}$/;
  const cvcPatternMatch = cvcRegEx.test(cvc);
  return cvcPatternMatch;
}
