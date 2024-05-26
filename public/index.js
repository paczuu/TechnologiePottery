import products from '/products.js';
import cart from './cart.js';
import { loadTemplate } from './loadTemplate.js';

loadTemplate().then(() => {
    cart();
    initApp();
    setupAccountNav();
});

const initApp = () => {
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = null;

    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        `<a href="/detail.html?id=${product.id}">
            <img src="${product.image}">
        </a>
        <h2>${product.name}</h2>
        <div class="price">${product.price}zł</div>
        <button 
            class="addCart" 
            data-id='${product.id}'>
                Add To Cart
        </button>`;
        listProductHTML.appendChild(newProduct);
    });
};

const setupAccountNav = () => {
    const accountLink = document.getElementById('accountLink');
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        accountLink.textContent = "Wyloguj";
        accountLink.href = "#";
        accountLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('loggedInUser');
            window.location.href = '/index.html';
        });
    }
};
