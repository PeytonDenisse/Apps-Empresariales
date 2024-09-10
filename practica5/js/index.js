var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Persona(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
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
    Persona.prototype.setApellidoPaterno = function () {
        return this.apellidoPaterno;
    };
    Persona.prototype.setapellidoMaterno = function () {
        return this.apellidoMaterno = this.apellidoPaterno;
    };
    Persona.prototype.getApellidoPaterno = function () {
        return this.apellidoPaterno;
    };
    Persona.prototype.getApellidoMaterno = function () {
        return this.apellidoMaterno;
    };
    Persona.prototype.getNomnreCompleto = function () {
        return this.getNombre + '' + this.apellidoPaterno + '' + this.apellidoMaterno;
    };
    return Persona;
}());
// crear nuaeva persona 
var personaje1 = new Persona('Alberto', 'Guadarrama', 'Delgado', 21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);
//cambiar la variable 
personaje1.edad = 25;
personaje1.nombre = 'Edwin';
var personaje2 = new Persona('Edwin', 'Rodriguez', 'Martinez', 19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:' + 'Juan');
console.log(personaje2.getNombre());
console.log(personaje2.getNomnreCompleto());
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var usuarioX = new UserAccount('Imagine Dragons', 1);
console.log(usuarioX.name, usuarioX.id);
//crear al menos 5 clases que se van a usar en el proyecto final
/*class Producto{
    id: number;
    name: string;
    precio: number;

    constructor(id: number, name: )

}*/
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.moverse = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("".concat(this.nombre, " se movio ").concat(distancia, "mts"));
    };
    Animal.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'Sin sonido'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Animal;
}());
var animal1 = new Animal('Grillo');
animal1.moverse(5);
animal1.hacerSonido('Cri Cri');
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre) {
        return _super.call(this, nombre) || this;
    }
    Perro.prototype.moverse = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        _super.prototype.moverse.call(this, distancia);
    };
    Perro.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'Ladrido'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Perro;
}(Animal));
var perro1 = new Perro('Firulais');
perro1.moverse(10);
perro1.hacerSonido('Miau Miau');
var Serpiente = /** @class */ (function () {
    function Serpiente(nombre) {
        this.nombre = nombre;
    }
    Serpiente.prototype.moverse = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("".concat(this.nombre, " se movio ").concat(distancia, "mts"));
    };
    Serpiente.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'Siseo'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Serpiente;
}());
var serpiente1 = new Serpiente('Cobra');
serpiente1.moverse(2);
serpiente1.hacerSonido('Siseo');
