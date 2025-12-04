// Fake menyu
const menuData = [
  { id: 1, name: "Dönər", price: 4.0 },
  { id: 2, name: "Kola", price: 1.5 },
  { id: 3, name: "Pizza", price: 6.0 }
];

const menuDiv = document.getElementById("menu");
const cartUl = document.getElementById("cart");
let cart = [];

// Menyu düymələrini yarad
menuData.forEach(item => {
  const btn = document.createElement("button");
  btn.textContent = `${item.name} - ${item.price}₼`;
  btn.onclick = () => addToCart(item);
  menuDiv.appendChild(btn);
});

// Cart-ə əlavə etmə funksiyası
function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  renderCart();
}

// Cart render funksiyası
function renderCart() {
  cartUl.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity}₼`;
    cartUl.appendChild(li);
  });
}
