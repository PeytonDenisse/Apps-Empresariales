const { nombre, apellido, edad} = require('./datos');
const obtenerDatos = require('./obtenerDatos');

console.log(obtenerDatos(nombre,apellido,edad)); // Error: nombre is not defined