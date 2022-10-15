import { goBack } from "./utils.js";
const previousPage = document.querySelector(".fa-arrow-left");
const cart = document.querySelector(".basket");
const productsInTheCart = JSON.parse(localStorage.getItem("cartList"));
const cartList = document.querySelector(".cart-list");
let totalPrice = document.querySelector(".total-price");
let cartArray = [];
const container = document.querySelector(".error-container");
const productsContainer = document.querySelector(".all-jackets");
previousPage.addEventListener("click", goBack);

const baseUrl = "https://rainydays.kingakot.com/wp-json/wc/store/products?per_page=20";

async function getProducts() {
  try {
    const response = await fetch(baseUrl);
    const products = await response.json();
    console.log(products)
    const filteredJackets = products.filter(jacket => jacket.categories[1].slug === "men-jackets");
    console.log(filteredJackets)

    productsContainer.innerHTML = "";

    /******* DISPLAY OF ALL JACKETS ******/
    filteredJackets.forEach(function (product) {
      productsContainer.innerHTML += `
          <div class="product">
          <a href="/product_details/productDetailsPage.html?id=${product.id}"><img src="${product.images[0].src}" alt="${product.name}"</></a>
          <h2>${product.name}</h2>
          <p class="price">${product.prices.price} ${product.prices.currency_prefix}</p>
          <button class="small-button" data-product="${product.id}">Add to cart</button>
          </div>
        `;

    });
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
      button.onclick = function (event) {
        const itemToAdd = products.find(
          (item) => item.id === event.target.dataset.product
        );
        cartArray.push(itemToAdd);
        showCart(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
      }
    });

    /*****  CART ******/
    function showCart(productsInTheCart) {
      cart.style.display = "block";
      cartList.innerHTML = "";
      let total = 0;

      productsInTheCart.forEach(function (cartElement) {
        total += cartElement.prices.price;
        cartList.innerHTML += `
       <div class="cart-item">
       <h4>${cartElement.name}</h4>
       <div class="cart-content">
       <img src="${cartElement.images[0].src}" alt="${cartElement.name}" class="detail-img"/>
       <p>${cartElement.currency} ${cartElement.prices.price}</p>
       </div>
       <hr></hr>
       </div>
       `;
      });
      totalPrice.innerHTML = `Total: $ ${total}`;
    }
  } catch (error) {
    container.innerHTML = `<div id="error_msg">An error occured when calling the API </div>`;
    console.log(error);
  }
};

getProducts();
