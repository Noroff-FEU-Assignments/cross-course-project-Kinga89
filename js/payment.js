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
    console.log(event)
    
       /*Checks if the card number field is filled out*/
       if (!cardNumber.value) {
        cardNumberErr.style.display = "block";
        cardNumber.style.borderColor = "red";
    } else {
        cardNumberErr.style.display = "none";
        cardNumber.style.borderColor = "#4cd038";
       }
    
     /*Checks if the card number consists of 16 digits*/
     if (checkLength(cardNumber.value, 16) === true) {
        cardNumberErr.style.display = "none";
    } else {
        cardNumberErr2.style.display = "block";
        cardNumber.style.borderColor = "red";
     }
    
        /*Checks if the expiry date field is filled out*/
        if (!expiryDate.value) {
            expiryDateErr.style.display = "block";
            expiryDate.style.borderColor = "red";
        } else {
            expiryDateErr.style.display = "none";
            expiryDate.style.borderColor = "#4cd038";
           }
    
      /*Checks if the CVC field is filled out*/
      if (!cvc.value) {
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
    
    
    console.log(cardNumber.value)
    console.log(expiryDate.value)
    console.log(cvc.value)
    console.log (nameOnCard.value)


}

paymentForm.addEventListener("submit", validatePaymentInfo);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}