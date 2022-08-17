/*export const jackets = [
  {
    name: "Free Spirit",
    price: 120,
    currency: "$",
    image: "../images/Women/woman1.jpg",
    image2: "../images/Women/hiking-woman.jpg",
    image3: "../images/Women/hiking-woman2.jpg",
    image4: "../images/Women/camping-woman.jpg",
    id: "1",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "Marine Blue",
    price: 110,
    currency: "$",
    image: "/images/Women/woman2.png",
    id: "2",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "Kobe II",
    price: 80,
    currency: "$",
    image: "/images/Women/woman3.jpg",
    id: "3",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "Nature Lover",
    price: 150,
    currency: "$",
    image: "/images/Women/woman4.jpg",
    id: "4",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "Osaka",
    price: 120,
    currency: "$",
    image: "/images/Women/woman5.jpg",
    id: "5",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "Kobe I",
    price: 75,
    currency: "$",
    image: "/images/Women/woman6.jpg",
    id: "6",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "Urban",
    price: 100,
    currency: "$",
    image: "/images/Women/woman7.jpg",
    id: "7",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "Sam",
    price: 100,
    currency: "$",
    image: "/images/Women/woman8.jpg",
    id: "8",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "Cloud",
    price: 85,
    currency: "$",
    image: "/images/Women/woman9.jpg",
    id: "9",
    product_description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    careAdvice: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
];*/


 /*****  ADD TO CART BUTTON ******/
 const buttons = document.querySelectorAll("button");
 buttons.forEach(function (button) {
   button.onclick = function (event) {
     const itemToAdd = products.find(
       (item) => item.id === event.target.dataset.product
     );
     console.log(cartArray);
     cartArray.push(itemToAdd);
     
     showCart(cartArray);
     localStorage.setItem("cartList", JSON.stringify(cartArray));
   };
 });


 /*****  CART ******/
function showCart(productsInTheCart) {
cart.style.display = "block";
let total = 0;

const cartItems = JSON.parse(localStorage.getItem("cartList"));

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