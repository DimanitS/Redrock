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


function updateGuitar(index) {
  const g = guitars[index];
  imgEl.src       = g.img;
  nameEl.textContent  = g.name;
  priceEl.textContent = g.price;
  stockEl.textContent = g.stock;
}


prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + guitars.length) % guitars.length;
  updateGuitar(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % guitars.length;
  updateGuitar(currentIndex);
});


updateGuitar(currentIndex);