var variable1 = 'Hola Mundo';
console.log(variable1);
//crear persona 
var persona1 = {
    firstName1: "Denisse",
    lastName1: "Peyton",
    age: 21,
};
//desestructurar
var firstName1 = persona1.firstName1, lastName1 = persona1.lastName1;
console.log(firstName1, '', lastName1);
var miNombre = "Edwin";
var a1 = miNombre[0], a2 = miNombre[1], a3 = miNombre[2], a4 = miNombre[3], a5 = miNombre[4];
console.log(a1, a2, a3, a4, a5);
var frutas = ["fresa", "kiwii", "manzana", "durazno"];
var fruta1 = frutas[0], fruta2 = frutas[1];
console.log(fruta1, fruta2);
var frutaA = frutas[0], frutaB = frutas[3];
console.log(frutaA, frutaB);
//creando una clase 
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodos 
    //Agregar
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Persona;
}());
var personaje1 = new Persona('Alberto', 21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);
//cambiar la variable 
personaje1.edad = 25;
personaje1.nombre = 'Edwin';
var personaje2 = new Persona('Francisco', 19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:' + 'Juan');
