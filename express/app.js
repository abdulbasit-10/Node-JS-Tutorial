const express = require('express')

const app = express();

app.get('', (req,res) =>{
    res.send("Good Morning Guys")
})

app.get('/contact', (req,res) =>{
    res.send("Good Morning Guys Contact us for more details")
})

app.listen(2000);
