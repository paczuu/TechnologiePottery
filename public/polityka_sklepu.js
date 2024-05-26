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
    
};
