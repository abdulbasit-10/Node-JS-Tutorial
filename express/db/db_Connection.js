const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://abasit3110_db_user:kDWCWke6S0Rn1Krq@cluster0.crrlxok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')     
        console.log("Mongodb connected successfully")
    }
    catch(err){
        console.log("Mongodb connection error: ", err)
    }
}

module.exports = connectDB;

