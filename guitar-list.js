function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  
  function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    setCart(cart);
    updateCartCounter();
  }
  
  function updateCartCounter() {
    const cart = getCart();
    const cartIcon = document.querySelector(".cart");
    cartIcon.textContent = `🛒 Кошик (${cart.length})`;
  }
  
  fetch("guitars.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("guitar-list");
  
      data.forEach((guitar, index) => {
        const card = document.createElement("div");
        card.classList.add("guitar-card");
        card.innerHTML = `
          <img src="${guitar.img}" alt="${guitar.name}">
          <h3>${guitar.name}</h3>
          <p>${guitar.price}</p>
          <p><em>${guitar.stock}</em></p>
          <button ${guitar.stock === "Немає в наявності" ? "disabled" : ""}>
            Додати в кошик
          </button>
        `;
        card.querySelector("button").addEventListener("click", () => {
          addToCart(guitar);
        });
        container.appendChild(card);
      });
  
      updateCartCounter();
    });
  