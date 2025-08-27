const fs = require('fs')

const myRead = fs.createReadStream('./input.txt')

myRead.on('open', () => {
    console.log("Input.txt is opened")
})

