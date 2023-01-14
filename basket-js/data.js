const products = document.querySelectorAll(".add-to-basket");
const basket = document.getElementById("basket-items");
let total = 0;

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", function() {
        const name = this.getAttribute("data-name");
        const price = this.getAttribute("data-price");

        const item = document.createElement("li");
        item.innerHTML = `${name} - $${price}`;
        basket.appendChild(item);

        total += parseFloat(price);
        console.log(`Total: $${total}`);
    });
}
