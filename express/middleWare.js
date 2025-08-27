const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});

app.get('/', (req, res) => {
  res.send("Home Page");
});

app.listen(3000);
