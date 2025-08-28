const express = require('express')
const connectDB = require('./db/db_Connection')
const Employee = require('./models/employeeModel')
const app = express()
connectDB()

const addEmployee = async () =>{
    await Employee.create({
        name: "Abdul",
        email: "abasit31@gmail.com",
        position: "Software Engineer",
        department: "IT"
    })
}

addEmployee();

const getEmployee = async ()=>{
    const employees = await Employee.find();
    console.log(employees)
}

getEmployee()

app.listen(3000, ()=>{
    console.log("server is running on port no 3000")
})


