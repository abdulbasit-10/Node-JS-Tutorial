const express = require('express')
const connectDB = require('./db/db_Connection')

const app = express()

connectDB();

const user = require('./models/userModel')

const addUser = async () =>{
    await user.create({
        name: "Abdul Basit",
        email: "abasit3110@gmail.com"
    }) 
}

addUser();

app.listen(2000)
