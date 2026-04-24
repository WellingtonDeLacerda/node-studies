const http = require('http')

http.createServer(function (req,res) {
    res.end('Hello, this is my website')
    }).listen(3000)

console.log("servidor ligado")

