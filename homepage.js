const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');

eventListeners();

function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
    });

    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container')
    });
}

function loadJSON(){
    fetch('furniture.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(product => {
          html += `
          <div class = "product-item">
          <div class = "product-img">
            <img src = "${product.imgSrc}" alt = "product image">
            <button type = "button" class = "add-to-cart-btn">
              <i class = "fas fa-shopping-cart"></i>Add To Cart
            </button>
          </div>

          <div class = "product-content">
            <h3 class = "product-name">${product.name}</h3>
            <span class = "product-category">${product.category}</span>
            <p class = "product-price">$${product.price}</p>
          </div>
        </div>
          `;
        });
        productList.innerHTML = html
;    })
}

