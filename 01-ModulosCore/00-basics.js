'use strict'

/* 
Organizacion de codigo JS
    librerias/modulos
    constantes
    objetos/variables
    funciones
    eventos
    ejecuciones

usar camelCase

Cuando una instruccion tenga una sola palabra, va en minuscula p.e. require()
Solo las clases rompen esta regla, siempre va en mayuscula la letra inicial p.e. EventEmmiter()
Cuando una instruccion tenga 2 o mas palabras, a partir de la segunda la primer letra va en minusculas p.
e.createServer()

Tipos de Camel Case 
UpperCamelCase
    Date
loweCamelCase
    getElementById
*/

//Aqui vamos a mostrar en la consola de Node el resultado de '2+2'
console.log(2 + 2)

//Aqui vamos a mostrar el objeto 'global'
console.log(global)

//Aqui vamos a usar el método 'setInterval', este método va a recibir dos parametros,
//en el primer parametro le pasaremos mediante una funcion lo que va a hacer, y en el segundo parametro, 
//le pasaremos la cantidad de tiempor que va a tardar en repetir en hacer denuevo esa funcion
setInterval(repetir, 1500)

//Aqui estamos creando la funcion que le pasaremos al parametro que nos pide el método 'setInterval()'
function repetir() {
    for (let i = 1; i <= 5; i++) {
        
        console.log(`Hola Mundo ${i}`);
    }
    console.log('')
}