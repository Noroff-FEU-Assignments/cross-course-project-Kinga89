import { jackets } from "./freeSpirit.js";

console.log(jackets);

const addToCartButton = document.querySelectorAll(".cta-button");
const cart = document.querySelector(".basket");
const size = document.querySelector("select");
let cartArray = [];

addToCartButton.forEach(function (button) {
    button.onclick = function (event) {
        jackets.forEach(function (jacket) {
            cart.innerHTML += ` 
            <div class="added-item-in-the-basket">
            <div class="checkout-window">
                            <h4>Raincoat: ${jacket.name}</h4>
                            <p>${jacket.currency} ${jacket.price}</p>
                            <img src="${jacket.image}" alt="${jacket.name}" class="detail-img"></img>
                            <a href="checkout-women.html"><button class="small-button">Check out</button></a>
                            </div>
                            </div>        
        `;

        })
        cartArray.push(event.target.dataset.jacket)
        console.log(cartArray);
    }
});




size.onchange = function () {
    const selectedSize = this.value;
    for (let i = 0; i <= selectedSize.length; i++) {
    }
    console.log(event.target.value)
}


