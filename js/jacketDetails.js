import { jackets } from "./allJackets.js";
import { goBack } from "./utils.js";

const previousPage = document.querySelector(".fa-arrow-left");
previousPage.addEventListener("click", goBack);

const jacketContainer = document.querySelector(".product-wrapper");

const freeSpiritJacket = jackets.find((jacket) => {

    return jacket.name === "Free Spirit";

});


console.log(freeSpiritJacket.name);

jacketContainer.innerHTML += `
<div class="product_images">
<img src="${freeSpiritJacket.image}" alt="${freeSpiritJacket.name}"</>
<img src="${freeSpiritJacket.image2}" alt="${freeSpiritJacket.name}"</>
<img src="${freeSpiritJacket.image3}" alt="${freeSpiritJacket.name}"</>
<img src="${freeSpiritJacket.image4}" alt="${freeSpiritJacket.name}"</>
</div>
<div class="product_description">
<h2>${freeSpiritJacket.name}</h2>
<p>${freeSpiritJacket.currency} ${freeSpiritJacket.price}</p>
<div class="button-wrapper">
<button class="cta-button small-button" data-product="${freeSpiritJacket.id}">Add to cart</button>
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
<h3>Product description</h3>
<p>${freeSpiritJacket.product_description}</p>

<h3>Material & care advice</h3>
<p>${freeSpiritJacket.careAdvice}</p>
</div>
</div>
`;


const cart = document.querySelector(".basket");
const size = document.querySelector("select");
const cartList = document.querySelector(".cart-list");
let totalPrice = document.querySelector(".total-price");
let cartArray = [];



size.onchange = function () {
    const selectedSize = this.value;
    for (let i = 0; i <= selectedSize.length; i++) {
    }
    console.log(this.value)
};


const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.onclick = function (event) {
        const itemToAdd = jackets.find(item => item.id === event.target.dataset.product);
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
};



