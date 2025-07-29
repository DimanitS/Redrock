function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  
  function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const formContainer = document.getElementById("order-form-container");
  
    const cart = getCart();
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Кошик порожній.</p>";
      formContainer.style.display = "none";
      return;
    }
  
    cartItemsContainer.innerHTML = "";
  
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}" style="width:100px;" />
        <p><strong>${item.name}</strong></p>
        <p>${item.price}</p>
        <button class="remove-btn" onclick="removeItem(${index})">Видалити</button>
        <hr/>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });
  
    formContainer.style.display = "block";
  }
  
  function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    setCart(cart);
    renderCart();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderCart();
  
    const orderForm = document.getElementById("order-form");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
  
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Дані з форми (можна передавати на сервер)
      const formData = new FormData(orderForm);
      const name = formData.get("name");
  
      // Показати модальне вікно
      modal.querySelector("p").textContent = `Дякуємо, ${name}! Ваше замовлення прийнято.`;
      modal.style.display = "block";
  
      localStorage.removeItem("cart");
      renderCart();
      orderForm.reset();
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Закриття при кліку поза модальним вікном
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  