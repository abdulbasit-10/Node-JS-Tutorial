const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.get('/', (req, res) => {   
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/home', (req, res) => {   
    res.sendFile(path.join(publicPath, 'home.html'));
});

app.get('*', (req, res) => {   
    res.sendFile(path.join(publicPath, 'pagenotfound.html'));
});

app.listen(3000);
