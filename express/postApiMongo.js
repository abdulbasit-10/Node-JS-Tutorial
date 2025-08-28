const express = require('express')
const connectDB = require('./db/db_Connection')
const Employee = require('./models/employeeModel')
const app = express()
app.use(express.json())
connectDB()

app.post('/employees', async (req, res) => {
    try {
        const { name, position, department } = req.body
        const newEmployee = new Employee({
            name,
            position,
            department
        })
        const savedEmployee = await newEmployee.save()
        res.status(201).json({
            message: "Employee created successfully",
            employee: savedEmployee
        })
    } catch (error) {
        console.error("Error creating employee:", error)
        res.status(500).json({ message: "Server error", error: error.message })
    }
})
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
})

app.listen(2000, () => {
    console.log("Server running on http://localhost:2000")
})
