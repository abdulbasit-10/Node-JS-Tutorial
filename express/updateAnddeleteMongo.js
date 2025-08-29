const express = require('express')
const connectDB = require('./db/db_Connection')
const Employee = require('./models/employeeModel')
const app = express()
connectDB()

const getEmployees = async ()=>{
    const employees = await Employee.find()
    console.log("Employees data:", employees)
}

const updateEmployee = async (id, updatedData) =>{
    const result = await Employee.updateOne({_id: id}, {$set: updatedData});
    console.log(
        result.nModified === 0 ? `No updates for employee ${id}` : `Updated employee data:` , result
    )
}

const deleteEmployee = async (id)=>{
    await Employee.findByIdAndDelete(id)
    console.log(`Employee${id} deleted`)

}

const main = async ()=>{
    await getEmployees()
    const employeeID ='68b0011f5fa25be9af8bfbf3';
    const updatedData = {
        position: "Senior",
        department: "CDA"
    }

    await updateEmployee(employeeID, updatedData)
    await getEmployees()

    await deleteEmployee(employeeID)
    await getEmployees()
}

main()

app.listen(2000)
 