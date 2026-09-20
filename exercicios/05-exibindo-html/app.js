const express = require('express')
const app = express()

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/front/index.html") 
})
app.get("/sobre", (req,res) => {
    res.sendFile(__dirname + "/front/sobre.html") 
})
app.get("/contato", (req,res) => {
    res.sendFile(__dirname + "/front/contato.html") 
})

app.get("/ola/:nome/:idade", (req,res) => {
    res.send("<h1>Meu nome é " + req.params.nome + "E tenho " + req.params.idade + " anos." + "</h1>")
})

app.listen(3000, () => {
    console.log("Servidor ligado")
})
