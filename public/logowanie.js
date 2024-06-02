import { loadTemplate } from './loadTemplate.js';

loadTemplate().then(() => {
    const logincont = document.getElementById('logincont');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');

    registerBtn.addEventListener('click', () => {
        logincont.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        logincont.classList.remove("active");
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;

        if (name && email && password) {
            const user = { name, email, password };
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(response => response.text().then(text => ({ status: response.status, text })))
            .then(({ status, text }) => {
                alert(text);
                if (status === 200) {
                    localStorage.setItem('loggedInUser', email);
                    window.location.href = '/index.html';
                }
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('Wypełnij wszystkie pola.');
        }
    });

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signInForm.querySelector('input[type="email"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.text().then(text => ({ status: response.status, text })))
        .then(({ status, text }) => {
            const errorMessageContainer = document.getElementById('error-message-container');
            errorMessageContainer.innerHTML = '';
            
            if (status === 200) {
                alert(`Witaj z powrotem, ${email}`);
                localStorage.setItem('loggedInUser', email);
                window.location.href = '/index.html';
            } else {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Błędne dane logowania';
                
                errorMessageContainer.appendChild(errorMessage);

                // Flash register button
                const registerButton = document.querySelector('.toggle-panel .hidden#register');
                registerButton.classList.add('flash');
                setTimeout(() => {
                    registerButton.classList.remove('flash');
                }, 4000);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
