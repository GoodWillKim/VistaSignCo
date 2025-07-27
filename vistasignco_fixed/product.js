// product.js
// Handle product page interactions: load product data, render options,
// calculate price dynamically, and update checkout link.

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  if (!productId) {
    alert('No product specified.');
    return;
  }
  // Access the global PRODUCTS array defined in data.js
  const products = window.PRODUCTS || [];
  const product = products.find((p) => p.id === productId);
  if (!product) {
    alert('Product not found.');
    return;
  }
  // Populate page with product information
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productDescription').textContent = product.description;
  // Insert option selectors
  const optionContainer = document.getElementById('optionContainer');
  const optionElements = {};
  Object.keys(product.options).forEach((key) => {
    const optionList = product.options[key];
    const group = document.createElement('div');
    group.className = 'form-group';
    const label = document.createElement('label');
    label.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    const select = document.createElement('select');
    optionList.forEach((opt) => {
      const optionEl = document.createElement('option');
      optionEl.value = opt.label;
      optionEl.textContent = opt.label;
      optionEl.dataset.multiplier = opt.multiplier || 1;
      optionEl.dataset.additional = opt.additional || 0;
      select.appendChild(optionEl);
    });
    group.appendChild(label);
    group.appendChild(select);
    optionContainer.appendChild(group);
    optionElements[key] = select;
  });
  // Grab inputs
  const widthFtInput = document.getElementById('widthFt');
  const widthInInput = document.getElementById('widthIn');
  const heightFtInput = document.getElementById('heightFt');
  const heightInInput = document.getElementById('heightIn');
  const quantityInput = document.getElementById('quantity');
  const priceDisplay = document.getElementById('price');
  const checkoutBtn = document.getElementById('checkoutBtn');
  function computePrice() {
    const widthFt = parseFloat(widthFtInput.value) || 0;
    const widthIn = parseFloat(widthInInput.value) || 0;
    const heightFt = parseFloat(heightFtInput.value) || 0;
    const heightIn = parseFloat(heightInInput.value) || 0;
    const quantity = parseInt(quantityInput.value) || 1;
    const totalWidth = widthFt + widthIn / 12;
    const totalHeight = heightFt + heightIn / 12;
    let area = totalWidth * totalHeight;
    if (!isFinite(area) || area < 0) area = 0;
    let rate = product.basePrice;
    Object.keys(optionElements).forEach((key) => {
      const select = optionElements[key];
      const selectedOption = select.options[select.selectedIndex];
      const multiplier = parseFloat(selectedOption.dataset.multiplier || '1');
      const additional = parseFloat(selectedOption.dataset.additional || '0');
      rate = rate * multiplier + additional;
    });
    const total = area * rate * quantity;
    priceDisplay.textContent = `$${total.toFixed(2)}`;
        // If a payment link exists, build the checkout URL. Payment Links only
        // support integer quantities, so we round up to the next whole unit
        // based on the calculated area × quantity. This prevents invalid
        // decimal quantities that would cause the checkout page to error out.
        if (product.paymentLink) {
          const unitsRaw = area * quantity;
          const units = Math.max(unitsRaw, 1);
          // Round up to the nearest whole number of units for Stripe quantity
          const quantityInt = Math.ceil(units);
          checkoutBtn.href = `${product.paymentLink}?quantity=${quantityInt}`;
        } else {
          checkoutBtn.href = '#';
        }
  }
  [widthFtInput, widthInInput, heightFtInput, heightInInput, quantityInput].forEach((el) => {
    el.addEventListener('input', computePrice);
  });
  Object.values(optionElements).forEach((select) => {
    select.addEventListener('change', computePrice);
  });
  computePrice();
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();
});