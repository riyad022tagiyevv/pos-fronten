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
  btn.onclick = () => {
    cart.push(item);
    renderCart();
  };
  menuDiv.appendChild(btn);
});

// Cart render funksiyası
function renderCart() {
  cartUl.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}₼`;
    cartUl.appendChild(li);
  });
}
