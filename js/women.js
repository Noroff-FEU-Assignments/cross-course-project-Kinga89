import { jackets } from "./womenAllJackets.js";
import { goBack } from "./utils.js";

const productsContainer = document.querySelector(".all-jackets");
const cart = document.querySelector(".basket");
const cartList = document.querySelector(".cart-list");
let totalPrice = document.querySelector(".total-price");
let cartArray = [];

const previousPage = document.querySelector(".fa-arrow-left");

previousPage.addEventListener("click", goBack);

jackets.forEach(function (product) {
  productsContainer.innerHTML += `
    <div class="product">
    <a href="/product_details/free-spirit.html"><img src="${product.image}" alt="${product.name}"</></a>
    <h2>${product.name}</h2>
    <p class="price">${product.currency} ${product.price}</p>
    <button class="small-button" data-product="${product.id}">Add to cart</button>
    </div>
    `;
});

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = jackets.find(
      (item) => item.id === event.target.dataset.product
    );
    cartArray.push(itemToAdd);
    console.log(cartArray);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

function showCart(productsInTheCart) {
  cart.style.display = "block";
  let total = 0;

  productsInTheCart.forEach(function (cartElement) {
    total += cartElement.price;
    cartList.innerHTML += `
        <div class="cart-item">
        <h4>${cartElement.name}</h4>
        <div class="cart-content">
        <img src="${cartElement.image}" alt="${cartElement.name}" class="detail-img"/>
        <p>${cartElement.currency} ${cartElement.price}</p>
        </div>
        <hr></hr>
        </div>
        `;
  });
  totalPrice.innerHTML = `Total: $ ${total}`;
}
