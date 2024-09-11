"use strict";
let normalx = 'Hola mundo';
normalx = 10;
normalx = true;
console.log(normalx);
let usuario = 'Hola nuevo mundo ';
console.log(usuario);
let value;
value = true;
value = 'hola undo';
value = [];
value = {};
value = Math.random;
value = undefined;
value = null;
console.log(value);
let miValor;
console.log("tipo unkwon:", miValor);
let value1 = miValor;
let value2 = miValor;
//let value3: boolean = miValor; esto marca un error
//let value4: number = miValor; esto marca un error
const edad = 20;
console.log('edad:', edad);
const sueldo = 1.201;
const total = Number('14785'); //castear un string a number
console.log('Total:', total);
console.log('Sueldo:', sueldo);
const personaje = "Loky";
const otroPersonaje = 'Thor';
const personajeSecundario = `Hulk y ${personaje}`;
console.log(personajeSecundario);
const hero = "DeadPool's house";
console.log(hero);
console.log(hero.toUpperCase());
let vengador;
vengador = "Black Widow";
console.log(vengador.charAt(2));
vengador = 150.20;
console.log(vengador.toFixed(1));
console.log(vengador.toFixed(1));
console.log(vengador.toFixed(1));
let personas = ['Peyton', 'Saul', 'Edwin'];
console.log(personas);
console.log(personas[1]);
console.log(personas[3]);
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[4]);
let numeros2 = [6, 67, 8, 9];
console.log(numeros2);
let numerosCadena = document.getElementById('numeros');
for (let i = 0; i < numeros.length; i++) {
    numerosCadena.innerHTML += numeros[i];
    if (i < numeros.length - 1) {
        numerosCadena.innerHTML += ' , ';
    }
}
let numeros2Cadena = document.getElementById('numeros2');
for (let i = 0; i < numeros2.length; i++) {
    numeros2Cadena.innerHTML += numeros2[i];
    if (i < numeros2.length - 1) {
        numeros2Cadena.innerHTML += ' , ';
    }
}
//Reto1: quitar la coma al final de la cadena
let miArray = ['Peyton', 20, 'Edwin', 22, 'Diego', 25];
console.log(miArray);
let miArray12 = ['Peyton', 20, 'Edwin', 22, 'Diego', 25, 24];
let miCadena = '';
for (let i = 0; i < miArray12.length; i++) {
    miCadena += miArray12[i];
    if (i < miArray12.length - 1) {
        miCadena += ', ';
    }
}
console.log(miCadena);
let miArray2 = ['Carlos Sainz', 'Lewis Hamilton', 'Lando Norris'];
console.log(miArray2);
let miArray3 = [true, 100, 'F1', 20.25];
console.log(miArray3);
let miArray4 = [];
miArray4.push(3);
miArray4.push(2);
miArray4.push(1);
console.log(miArray4);
//Imprimir al reves mi arreglo 3,2,1
let miArray5 = [10, 20, 30, 40, 50, 15478, 23657,];
miArray5.reverse(); // Invierte el arreglo
console.log('Mi arreglo al revés:', miArray4);
let miArray6 = ["Peyton", "Denisse"];
miArray6.push('Hamilton');
miArray6.push(45);
miArray6.push(true);
miArray6.push('<img src="https://i.pinimg.com/736x/8e/ed/24/8eed244c52d1846dc943a9227874301a.jpg">');
miArray6.push('Mis frutas');
miArray6.push(25);
miArray6.push(true);
miArray6.push('<img src="https://i.pinimg.com/736x/83/98/3d/83983d7b9e927f5eeac2b551b453ec46.jpg"');
// Reto 3: imprimir en pantalla la imagen, usando  la semantica html FIGURE
miArray6.forEach(item => {
    if (typeof item === 'string' && item.includes('<img')) {
        // Envuelve el HTML de la imagen en <figure> y <figcaption>
        const figureHTML = `
            <figure>
                ${item}
                <figcaption>Frutas de fondo</figcaption>
            </figure>
        `;
        document.body.innerHTML += figureHTML + '<br>';
    }
    else {
        console.log(item);
    }
});
