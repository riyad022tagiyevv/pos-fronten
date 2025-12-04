// Fake menyu
const menuData = [
  { id: 1, category: "Əsas yeməklər", name: "Dönər", price: 4.0 },
  { id: 2, category: "Əsas yeməklər", name: "Şaurma", price: 3.5 },
  { id: 3, category: "Əsas yeməklər", name: "Lavaş", price: 2.5 },
  { id: 4, category: "Əsas yeməklər", name: "Basdırma", price: 3.0 },

  { id: 5, category: "Sulu yeməklər", name: "Düyü plov", price: 5.0 },
  { id: 6, category: "İsti yeməklər", name: "Toyuq qızartması", price: 6.0 },

  { id: 7, category: "Şirniyyat", name: "Napoleon", price: 2.0 },
  { id: 8, category: "Şirniyyat", name: "Ballı Tort", price: 2.5 },
  { id: 9, category: "Şirniyyat", name: "Meringa", price: 1.5 },
  { id: 10, category: "Şirniyyat", name: "Yojik", price: 3.0 },

  { id: 11, category: "İçkilər", name: "Ayran", price: 1.0 },
  { id: 12, category: "İçkilər", name: "Çay", price: 0.5 },
  { id: 13, category: "İçkilər", name: "Alpengold", price: 1.5 }
];

const menuDiv = document.getElementById("menu");
const cartUl = document.getElementById("cart");
let cart = [];

const categories = [...new Set(menuData.map(i => i.category))];

categories.forEach(cat => {
  const catDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = cat;
  catDiv.appendChild(h3);

  menuData.filter(i => i.category === cat).forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = `${item.name} - ${item.price}₼`;
    btn.onclick = () => addToCart(item);
    catDiv.appendChild(btn);
  });

  menuDiv.appendChild(catDiv);
});

function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  renderCart();
}

function renderCart() {
  cartUl.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity}₼`;
    cartUl.appendChild(li);
  });
}
