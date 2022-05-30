import {goBack } from "./utils.js";

const previousPage = document.querySelector(".fa-arrow-left");
const cartItems = JSON.parse(localStorage.getItem("cartList"));
console.log(cartItems)

const cartContainer = document.querySelector(".order-details");
const totalPrice = document.querySelector(".total");
let yourSize = document.querySelector(".yourSize");
let total = 0;

previousPage.addEventListener("click", goBack);


cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    cartContainer.innerHTML += `
    <img src="${cartElement.image}" alt="${cartElement.name}" class="checkout-image"/>
    <h2>${cartElement.name}</h2>
    <p>${cartElement.currency} ${cartElement.price}</p>
    `;
});
totalPrice.innerHTML = `Total: $ ${total}`;



/* FORM */
const formWrapper = document.querySelector(".form-wrapper2");
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const mobileNumber = document.querySelector("#mobile-number");
const mobileNumberError = document.querySelector("#mobileNumberError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const submitButton = document.querySelector(".small-button");

function validateForm() {
    event.preventDefault();
    console.log(event);

    /*Checks if the first name has at least 2 characters*/
    if (checkLength(firstName.value, 2) === true) {
        firstNameError.style.display = "none";
        firstName.style.borderColor = "#4cd038";
    } else {
        firstNameError.style.display = "block";
        firstName.style.borderColor = "red";
    }

    /*Checks if the last name is correct*/
    if (checkLength(lastName.value, 2) === true) {
        lastNameError.style.display = "none";
        lastName.style.borderColor = "#4cd038";
    } else {
        lastNameError.style.display = "block";
        lastName.style.borderColor = "red";
    }

    /*Checks if the mobile number has minimum of 9 digits*/

    if (checkLength(mobileNumber.value, 9) === true) {
        mobileNumberError.style.display = "none";
        mobileNumber.style.borderColor = "#4cd038";
    } else {
        mobileNumberError.style.display = "block";
        mobileNumber.style.borderColor = "red";
    }

    /*Checks if the email is correct*/
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        email.style.borderColor = "#4cd038";
    } else {
        emailError.style.display = "block";
        email.style.borderColor = "red";
    }

    /*Checks if the address field has at least 25 characters*/
    if (addressLength(address.value, 25) === true) {
        addressError.style.display = "none";
        address.style.borderColor = "#4cd038";
    } else {
        addressError.style.display = "block";
        address.style.borderColor = "red";
    }

    console.log(firstName.value)
    console.log(lastName.value)
    console.log(mobileNumber.value)
    console.log(email.value)
    console.log(address.value)

}

formWrapper.addEventListener("submit", validateForm);



function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function addressLength(value, length) {
    if (value.length > length) {
        return true;
    } else {
        return false;
    }
}
