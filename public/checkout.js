import products from './products.js';
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

const showCorrectForm = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const addressForm = document.getElementById('address-form');
    const userForm = document.getElementById('user-form');

    if (loggedInUser) {
        addressForm.style.display = 'block';
    } else {
        userForm.style.display = 'block';
    }
};

loadTemplate().then(() => {
    cart();
    renderCheckoutSummary();
    setupAccountNav();
    showCorrectForm();
});

const renderCheckoutSummary = () => {
    const checkoutSummary = document.getElementById('checkout-summary');
    checkoutSummary.innerHTML = '';

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        checkoutSummary.innerHTML = '<p>Brak przedmiotów w koszyku.</p>';
        return;
    }

    let totalCost = 0;
    let summaryHTML = `
        <table>
            <tr>
                <th>Produkt</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Razem</th>
            </tr>`;

    cartItems.forEach(item => {
        const product = products.find(p => p.id == item.product_id);
        const itemTotal = product.price * item.quantity;
        totalCost += itemTotal;

        summaryHTML += `
            <tr>
                <td class="product-name">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.name}
                </td>
                <td class="product-price">${product.price}zł</td>
                <td class="product-quantity">${item.quantity}</td>
                <td class="product-subtotal">${itemTotal}zł</td>
            </tr>
        `;
    });

    summaryHTML += `
        <tr>
            <td colspan="3"><strong>Całość</strong></td>
            <td class="product-subtotal"><strong>${totalCost}zł</strong></td>
        </tr>
        </table>`;
    checkoutSummary.innerHTML = summaryHTML;
};

document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkoutForm');
    const addressForm = document.getElementById('addressForm');

    checkoutForm?.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    addressForm?.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    document.querySelector('.payNow')?.addEventListener('click', () => {
        localStorage.removeItem('cart');
        window.location.href = 'platnosc_atrapa.html';
    });

    document.querySelector('.submitAddress')?.addEventListener('click', () => {
        localStorage.removeItem('cart');
        window.location.href = 'platnosc_atrapa.html';
    });
});
