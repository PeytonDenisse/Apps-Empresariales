"use strict";
function sum(a, b) {
    return a + b;
}
let resultado = sum(2, 3);
console.log(resultado);
//fSum = (5,4): //error
//console.log(fSum);//85
//funciones de ordem superior 
//funciones arrow 
let fSum = (a, b) => a + b;
console.log(fSum(5, 4));
//funcion anonima
let funcionAnonima = function () {
    console.log("Hola Mundo");
};
funcionAnonima();
//funcion anonima arrow
let funcionAnonimaArrow = () => console.log("Hola Mundo");
//es posible delcrar una funcion dentro de un console.log ?
console.log((function () {
    function innerFunction() {
        return 'Hello, World!';
    }
    return innerFunction();
})());
const varable = (a, b) => a * b;
function saludo(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludo("Peyton"));
//funcion arrow que no sea anonima 
const saludo2 = (nombre) => `Hola ${nombre}`;
function advertencia() {
    console.log("Cuidado");
}
advertencia();
//void no retorna nada 
//never no retorna nada y no tiene fin 
function error(mensaje) {
    let mensajeError = document.getElementById("mensajeError");
    mensajeError.inerHTML = "Error en la aplicacion";
    throw new Error(mensaje);
}
function operacion(a, b, operacion) {
    if (operacion == 'suma') {
        return a + b;
    }
    else {
        return a - b;
    }
}
console.log(operacion(5, 4, 'suma'));
//funcion ternaria en una sola linea 
const operacion2 = (a, b, operacion) => operacion == 'suma' ? a + b : a - b;
console.log(operacion2(5, 4, 'resta'));
console.log(operacion(6, 6, 'suma'));
const operacion3 = (a, b, operacion) => operacion == 'suma' ? a + b : operacion == 'resta' ? a - b : operacion == 'multiplicacion' ? a * b : a / b;
console.log(25, 25, 'division');
//
