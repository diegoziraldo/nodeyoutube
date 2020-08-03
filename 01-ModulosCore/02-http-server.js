'use strict'
/* Aqui estamos creando un Servidor desde el lado del backEnd */

/* 
//Aqui estamos guardando en una variable el modulo 'http' 
var http = require('http');

//Entonces el módulo http, va a tener un método 'createServer', 
//que este lo que hara va a ser crear un servidor local en la computadora 
//Este método recibira dos parametro, el primero va a ser una funcion la cual enviara,
//datos al servidor, y recibira datos del servidor,
//el segundo parametro va a abrir un puerto por donde recibira los datos que me enviara el servidor
http.createServer(function(req,res){
    //Esta funcion tambien tendra dos parametros, la primera 'req' sera para enviar datos al servidor,
    //y la segunda 'res' sera para recibir esos datos que nos envia el servidor
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hola Mundo\n');
}).listen(3000, "127.0.0.1");

console.log('Server runing at http://127.0.0.1:3000/');

*/
//En una variable guardaremos el modulo 'http'
var http = require('http');

//Crearemos una funcion que devolvera dos valores al front end,
//estos valores se los pasaremos mediante el segundo parametro 'res',
//El primer valor devolvera el formato de la pagina,
//el segundo devolvera una etiqueta 
function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hola desde Node</h1>')
}

//Aqui vamos a crear un servidor al que le pasaremos como parametro la funcion creada anteriormente,
//y como segundo parametro ira el puerto por donde va a ser enviado al front
http.createServer(webServer).listen(3000)

//Aqui crearemos un console.log, que servira como testigo que el programa llego hasta el final sin ningun problema
console.log('Servidor andando')