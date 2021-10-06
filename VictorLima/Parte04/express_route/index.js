//const { res } = require('express');
const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.send("<marquee> Seja bem vindo mano a minha maquina.</marquee>");
});

app.get("/sobre", function(req, res) {
    res.send("Sobre este curso que é muito bacana.");
});

app.get("/blob", function(req, res) {
    res.send("Sobre a rota blob.");
});

app.get('/func/:cargo/:nome/:cor', function(req, res) {
    // res.send(req.params);
    res.send("Seu nome é "+req.params.nome+" seja bem vindo!");
    res.send("Cargo atual: "+req.params.cargo );
    res.send("Cor: " + req.params.cor );
});

// Este sempre tem que deixa no final
app.listen(8081, function(){
    console.log("Servidor rodando na localhost:8081");
});