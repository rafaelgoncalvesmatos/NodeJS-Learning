**Anotações referente ao Nodejs**


*Função*

Criando uma variavel, funcao ou objeto e exportando ele para ser utilizado em outros scripts

```
var soma = function(a,b){
    return a+b;
}

/*
Exemplo do que pode ser exportado com a funcao module 

ex01: 
var soma = "valor"

ex02:
var obj =  {
    nome: "Rafael"
    sobrenome: "Goncalves"
    rogin: ΅programando na madrugada"
}
*/

module.exports = soma;
```

*Diferença entre variavel declarada com var e const*


Neste exemplo a variavel poderá ser perdida no meio do codigo caso tenha uma declaração posterior:

```
var express = require("express");

// criando uma estancia adicionando na variavel
var app = express();

var app = alsdadas;
```

Neste outro exemplo a variavel fica protejida:

```
const express = require("express");

// criando uma estancia adicionando na variavel
const app = express();

``` 