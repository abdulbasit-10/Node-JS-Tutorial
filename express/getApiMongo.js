const express = require('express')
const connectDB = require('./db/db_Connection')
const Employee = require('./models/employeeModel')

const app = express() 
connectDB();

app.get("/employees", async (req, res) =>{
    try{
        const employees = await Employee.find()
        res.json(employees);  
    } catch (error){
        console.log("Error fetching employees data: ", error)
        res.status(500).send("Server Error")
    }
})
app.listen(20001),() =>{
    console.log("Server is running on port 20001")
}
