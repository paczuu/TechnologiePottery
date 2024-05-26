const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
        const user = { name, email, password };
        saveUser(user);
        res.status(200).send('User registered successfully!');
    } else {
        res.status(400).send('Please fill all fields.');
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = getUser(email);
    if (user && user.password === password) {
        res.status(200).send('Login successful!');
    } else {
        res.status(400).send('Invalid email or password.');
    }
});

function saveUser(user) {
    let users = [];
    if (fs.existsSync('users.json')) {
        users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    }
    users.push(user);
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

function getUser(email) {
    if (!fs.existsSync('users.json')) return null;
    let users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    return users.find(user => user.email === email);
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
