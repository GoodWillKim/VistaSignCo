// index.js
// Populate the product grid on the homepage

document.addEventListener('DOMContentLoaded', () => {
  // Use the global PRODUCTS array defined in data.js
  const products = window.PRODUCTS || [];
  const container = document.getElementById('products');
  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="product.html?id=${product.id}">Order Now</a>
      </div>
    `;
    container.appendChild(card);
  });
  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();
});