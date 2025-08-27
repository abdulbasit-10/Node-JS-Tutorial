const express = require('express');

const app = express();
app.get('', (req, res) =>{
    // console.log("Routing parameters in express js")
    const name = req.query.name;
    if(name){
        res.send(`Welcome ${name}`)
    }
    else{
        res.send("Router parameters in JS")
    }
})

app.listen(1000, ()=>{
    console.log("Server is running on port 1000")
})

