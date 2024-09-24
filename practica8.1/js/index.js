"use strict";
console.log("Hola CodeSpaces");
const nuevoHeroe = "Loky";
function returnName() {
    return nuevoHeroe;
}
const heroeNombre = returnName();
let otroNombre = returnName();
console.log("De que tipo es", typeof otroNombre);
//parametros obligatorios en funciones 
const nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};
const nombre = nombreCompleto("Peyton", "Manning");
console.log(nombre);
//parametros opcionales en funciones SWIF
const nombreCompleto2 = (nombre, apellido) => {
    return `${nombre} ${apellido || 'sin apellido'}`;
};
const nombre2 = nombreCompleto2("Peyton");
console.log(nombre2);
//parametros por defecto en funciones
const nombreCompleto3 = (nombre, apellido, mayusculas = false) => {
    if (mayusculas) {
        return `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`.toUpperCase();
    }
    else {
        return `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`;
    }
};
const nombre3 = nombreCompleto3("Peyton", "Manning", true);
console.log(nombre3);
//esta funcion en ternario 
const nombreCompleto4 = (nombre, apellido, mayusculas = false) => (mayusculas) ? `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`.toUpperCase() : `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`;
const nombre4 = nombreCompleto4("Peyton", "Manning", true);
console.log(nombre4);
//operador Rest
const nombreCompleto5 = (nombre, ...restParametros) => {
    return `${nombre} ${restParametros.join(' ')}`;
};
const nombre5 = nombreCompleto5("Peyton", "Manning", "Veloz");
console.log(nombre5);
