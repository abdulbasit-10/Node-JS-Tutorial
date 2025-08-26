const { error } = require('console');
const myFile = require('fs');
console.log("Node JS Core Modules")

// myFile = writerFileSync("coreModules.txt", "Node.js Core Modules Tutorial")

myFile.writeFile("coreModules.txt", "Node.js Core Modules Tutorial", (error)=>{
    if(error)
        throw error;
})

