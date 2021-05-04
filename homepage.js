const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');

eventListeners();

function eventListeners(){
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
    });

    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container')
    });
}