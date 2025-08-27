const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <input type="text" placeholder="Your Name" />
    <a href="/contact">Go to contact us page</a>
  `);
});

app.get('/contact', (req, res) => {
  res.send(`
    <h2>Hello Express JS</h2>
    <a href="/about">Go to about us page</a>
  `);
});


app.get('/about', (req, res) => {
  res.send([
    {name: "Basit", address: "abc"},
    {name: "Munim", address: "def"},
    {name: "Abdul", address: "ghi"},
    {name: "Abdalooooo", address: "jkl"},
    {name: "Toto", address: "mno"}
  ]);
});


app.listen(2000);
