const _ = require('lodash');
 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
console.log(_.chunk(array, 7));
 
let arreglo = ['Juan','','Pedro',0,'Ana',false,'Jose','Carlos',''];
console.log(_.chunk(arreglo, 2));
console.log(_.compact(arreglo));
 
let array1 = ['Superman', 'Batman', 'Flash'];
let array2 = ['Thor', 'Ironman', 'Spiderman'];
console.log(_.concat(array1, array2));
 
let array3 = ['El Chavo', 'El Chapulin Colorado', 'El Doctor Chapatín'];
let array4 = ['El Chavo','El Chompiras', 'El Botija', 'El Peterete'];
console.log(_.difference(array3, array4));
 
let array5 = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j'];
// drop elimina los primeros n elementos del array
console.log(_.drop(array5, 3));
 
const numeroAleatorio = _.random(0, 100);
console.log(numeroAleatorio);
 
const saludar = () => {
    console.log('Hola Mayito, ¿Cómo estás?');
}
 
const saludarMayito = _.once(saludar);
 
saludarMayito();
saludarMayito();
saludarMayito();
 
const users = [
    { usuario: 'Mayito', edad: 25 },
    { usuario: 'Juanito', edad: 30 },
    { usuario: 'Pedrito', edad: 35 },
    { usuario: 'Pablito', edad: 40 },
    { usuario: 'Carlitos', edad: 45 }
];
 
const sortedUsers = _.sortBy(users, ['edad'],['asc']);
console.log(sortedUsers);
 
const obtieneNumero = () => {
    return _.random(0, 100);
}
 
let result = _.times(50, obtieneNumero);
console.log(result);
 


 


// Reto 1
// Crear un arreglo con 100 números aleatorios y mostrar los números pares
// y los números impares en arreglos diferentes
 
function reto1() {
    const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);
    console.log('Pares:', pares);
    console.log('Impares:', impares);
}

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


//Reto 2
// Crear un arreglo con 100 números aleatorios y mostrar los números primos
// y los números no primos en arreglos diferentes
function reto2() {
    const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    const primos = numeros.filter(esPrimo);
    const noPrimos = numeros.filter(num => !esPrimo(num));
    console.log('Primos:', primos);
    console.log('No Primos:', noPrimos);
}

//Reto 3
// Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra 'A'  
// y los nombres que no empiecen con la letra 'A' en arreglos diferentes// Reto 1

function reto3() {
    const nombres = ['Ana', 'Edwin', 'Alberto', 'Peyton', 'Andrés', 'Francisco', 'Alejandra', 'Denisse'];
    const nombresConA = nombres.filter(nombre => nombre.startsWith('A'));
    const nombresSinA = nombres.filter(nombre => !nombre.startsWith('A'));
    console.log('Nombres que empiezan con A:', nombresConA);
    console.log('Nombres que no empiezan con A:', nombresSinA);
}

// Ejecutar los retos
reto1();
reto2();
reto3();

console.log(reto1);
console.log(reto2);
console.log(reto3);
