import cart from './cart.js';
import { loadTemplate } from './loadTemplate.js';

const saveMessage = (messageData) => {
    return fetch('/save-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
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

const initApp = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const messageData = {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        saveMessage(messageData);
    });
};

loadTemplate().then(() => {
    cart();
    setupAccountNav();
    initApp();
});
