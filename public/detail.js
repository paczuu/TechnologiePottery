import products from '/products.js';
import cart from './cart.js';
import { loadTemplate } from './loadTemplate.js';

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

loadTemplate().then(() => {
    cart();
    initApp();
    setupAccountNav();
});

const initApp = () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    if (!thisProduct) {
        window.location.href = "/";
    }

    let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = thisProduct.price + "zł";
    detail.querySelector('.description').innerText = thisProduct.description;
    detail.querySelector('.addCart').dataset.id = thisProduct.id;

    let listProductHTML = document.querySelector('.listProduct');
    let counter = 0;
    products.forEach(product => {
        if (counter < 4) {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<a href="/detail.html?id=${product.id}">
                <img src="${product.image}">
            </a>
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button 
                class="addCart" 
                data-id='${product.id}'>
                    Add To Cart
            </button>`;
            listProductHTML.appendChild(newProduct);
            counter++;
        }
    });
};
