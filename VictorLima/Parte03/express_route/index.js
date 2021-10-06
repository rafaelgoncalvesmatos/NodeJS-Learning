// criando uma estancia adicionando na variavel
const { response } = require('express');
const express = require("express");
const app = express();


app.get("/", function(req, response) {
    response.send("Seja bem vindo a minha maquina.");
})

app.get("/sobre", function(req, response) {
    response.send("Sobre este curso que é muito bacana.")
})

app.get("/blob", function(req, res) {
    response.send("Sobre a rota blob.")
})

// Este sempre tem que deixa no final
app.listen(8081, function(){
    console.log("Servidor rodando na localhost:8081");
});