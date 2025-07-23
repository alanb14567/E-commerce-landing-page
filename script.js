const products = [
  { id: 1, name: "Headphones", price: "$59.99" },
  { id: 2, name: "Smart Watch", price: "$149.99" },
  { id: 3, name: "Bluetooth Speaker", price: "$89.99" },
];

const productList = document.getElementById("productList");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;
  productList.appendChild(card);
});

function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("searchInput").addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");
  
  cards.forEach((card) => {
    const productName = card.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

);

