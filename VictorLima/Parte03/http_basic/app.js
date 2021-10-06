var http = require('http');

http.createServer(function( req, res ) {
    res.end("Hello Rafa, How you doing!");
}).listen(8081);

console.log("Servidor está rodando!");