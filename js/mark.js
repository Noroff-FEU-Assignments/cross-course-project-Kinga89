import { menjackets } from "./menAllJackets.js";
import { goBack } from "./utils.js";


const previousPage = document.querySelector(".fa-arrow-left");
previousPage.addEventListener("click", goBack);

const jacketContainer = document.querySelector(".product-wrapper");

const markJacket = menjackets.find((jacket) => {
    return jacket.name === "Mark";

});


console.log(markJacket.name);

jacketContainer.innerHTML += `
<div class="product_images">
<img src="${markJacket.image}" alt="${markJacket.name}"</>
<img src="${markJacket.image2}" alt="${markJacket.name}"</>
<img src="${markJacket.image3}" alt="${markJacket.name}"</>
</div>
<div class="product_description">
<h2>${markJacket.name}</h2>
<p>${markJacket.currency} ${markJacket.price}</p>
<div class="button-wrapper">
<button class="cta-button small-button" data-product="${markJacket.id}">Add to cart</button>

<div class="size-submenu">
  <label for="size">Choose your size</label>
  <select id="size" name="size">
    <option value="XS">XS</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select>
</div>
</div>

<div class="product-text">
<p><i class="far fa-check-square green"></i>In stock</p>
<div class="colors">
<p>Pink <i class="fas fa-circle pink"></i></p>
<p>Orange <i class="fas fa-circle orange"></i></p>
<p>Blue <i class="fas fa-circle blue"></i></p>
</div>
<h3>Product description</h3>
<p>${markJacket.product_description}</p>

<h3>Material & care advice</h3>
<p>${markJacket.careAdvice}</p>
</div>
</div>
`;


const cart = document.querySelector(".basket");
const size = document.querySelector("select");
const cartList = document.querySelector(".cart-list");
let totalPrice = document.querySelector(".total-price");
const yourSize = document.querySelector(".yourSize");
let cartArray = [];


size.onchange = function chosenSize() {
    const selectedSize = event.target.value;
    yourSize.innerHTML = `Size: ${selectedSize}`;
    console.log(this.value)
};


/*Add to cart button on details page */
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.onclick = function (event) {
        const itemToAdd = menjackets.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd);
        console.log(cartArray);
        showCart(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray))
    }
});

function showCart(productsInTheCart) {
    cart.style.display = "block";
    cartList.innerHTML = "";
    let total = 0;

    productsInTheCart.forEach(function (cartElement) {

        total += cartElement.price;
        cartList.innerHTML += `
        <h4>${cartElement.name}</h4>
        <div class="cart-content">
        <img src="${cartElement.image}" alt="${cartElement.name}" class="detail-img"/>
        <p>${cartElement.currency} ${cartElement.price}</p>
        </div>
        `;
    });
    totalPrice.innerHTML = `Total: $ ${total}`;
}




