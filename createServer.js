const http = require('http')

// http.createServer((request,response) =>{
//     response.writeHead(200, {'Content-Type' : 'text/html'})  
//     response.write("<h2>hello from node.js</h2>")
//     response.end();
// }).listen(1000)

// function as a parameter

const sayHello = (request, response) =>{
    response.write("hello i m software engineer")
    response.end()
}

http.createServer(sayHello).listen(1000)

