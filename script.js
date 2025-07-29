const guitars = [
  {
    img: "images/guitar.jpg",
    name: "Harley Benton BS-20BK Rock Series",
    price: "6 270,86 грн",
    stock: "В наявності"
  },
  {
    img: "images/guitar3.jpg",
    name: "Fender Stratocaster Player",
    price: "25 300,00 грн",
    stock: "В наявності"
  },
  {
    img: "images/guitar2.jpg",
    name: "Ibanez RG450DX",
    price: "25 890,87 грн",
    stock: "Під замовлення"
  }
];

let currentIndex = 0;

const imgEl    = document.getElementById("guitar-img");
const nameEl   = document.getElementById("guitar-name");
const priceEl  = document.getElementById("guitar-price");
const stockEl  = document.getElementById("stockStatus");
const prevBtn  = document.getElementById("prevBtn");
const nextBtn  = document.getElementById("nextBtn");
const cartCounter = document.querySelector(".cart");
let addToCartBtn = document.querySelector(".add-to-cart");

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCounter() {
  const count = getCart().length;
  cartCounter.textContent = `🛒 Кошик (${count})`;
}

function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  setCart(cart);
  updateCartCounter();
}

function updateGuitar(index) {
  const g = guitars[index];

  // Анімація fade
  imgEl.classList.add("fade-out");

  setTimeout(() => {
    imgEl.src = g.img;
    nameEl.textContent = g.name;
    priceEl.textContent = g.price;
    stockEl.textContent = g.stock;
    imgEl.classList.remove("fade-out");

    // Обновити кнопку
    addToCartBtn = document.querySelector(".add-to-cart");
    if (addToCartBtn) {
      addToCartBtn.onclick = () => addToCart(g);
    }

  }, 300);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + guitars.length) % guitars.length;
  updateGuitar(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % guitars.length;
  updateGuitar(currentIndex);
});


updateCartCounter();
updateGuitar(currentIndex);
