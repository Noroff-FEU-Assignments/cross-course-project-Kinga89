import { goBack } from "./utils.js";
const previousPage = document.querySelector(".fa-arrow-left");
previousPage.addEventListener("click", goBack);

const jacketContainer = document.querySelector(".product-wrapper");


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const detailsURL = "https://rainydays.kingakot.com/wp-json/wc/store/products/" + id;


async function fetchJacketDetails() {
    try {
        const details = await fetch(detailsURL);
        const result = await details.json();
        console.log(result);

        jacketContainer.innerHTML = "";

        jacketContainer.innerHTML = `
     <div class="product_images">
     <img src="${result.images[0].src}" alt="${result.name}"</>
     </div>
     <div class="product_description">
     <h2>${result.name}</h2>
     <p>${result.prices.currency_prefix} ${result.prices.price}</p>
     <div class="button-wrapper">
     <button class="cta-button small-button" data-product="${result.id}">Add to cart</button>
     
     <div class="size-submenu">
       <label for="size">${result.attributes[0].name}</label>
       <select id="size" name="${result.attributes[0].name}">
       <option value=" ${result.attributes[0].terms[0].name}"> ${result.attributes[0].terms[0].name}</option>
       <option value=" ${result.attributes[0].terms[1].name}"> ${result.attributes[0].terms[1].name}</option>
       <option value=" ${result.attributes[0].terms[2].name}"> ${result.attributes[0].terms[2].name}</option>
       
       </select>
     </div>
     </div>
     
     <div class="product-text">
     <p><i class="far fa-check-square green"></i>In stock</p>
     <div class="colors">
     <label for="colors">${result.attributes[1].name}</label>
     <select id="size" name="${result.attributes[1].name}">
       <option value=" ${result.attributes[1].terms[0].name}">${result.attributes[1].terms[0].name}</option>
       <option value=" ${result.attributes[1].terms[1].name}">${result.attributes[1].terms[1].name}</option>
       <option value=" ${result.attributes[1].terms[2].name}">${result.attributes[1].terms[2].name}</option>
       </select>
       </div>
     <h3>Product description</h3>
     <p>${result.description}</p>
     
     <h3>Material & care advice</h3>
     <p>${result.short_description}</p>
     </div>
     </div>
     `;

        const cart = document.querySelector(".basket");
        const size = document.querySelector("#size");
        const cartList = document.querySelector(".cart-list");
        let totalPrice = document.querySelector(".total-price");
        const yourSize = document.querySelector(".yourSize");
        let cartArray = [];

        size.onchange = function chosenSize() {
            const selectedSize = event.target.value;
            yourSize.innerHTML = `Size: ${selectedSize}`;
            console.log(this.value);
        };

        /*Add to cart button on details page */
        const buttons = document.querySelectorAll("button");
        buttons.forEach(function (button) {
            button.onclick = function (event) {

                console.log(event.target)

                const itemToAdd = result.find(
                    (item => item.id === event.target.dataset.product));

                cartArray.push(itemToAdd);
                console.log(cartArray);
                showCart(cartArray);
                localStorage.setItem("cartList", JSON.stringify(cartArray));
            };
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

    }
    catch (error) {
        jacketContainer.innerHTML = `<div id="error_msg">An error occured when calling the API </div>`;
        console.log(error);
    }
}

fetchJacketDetails();
