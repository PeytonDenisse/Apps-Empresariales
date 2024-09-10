let variable1: string = 'Hola Mundo'
console.log(variable1)
//crear persona 
const persona1  = {
    firstName1: "Denisse",
    lastName1: "Peyton",
    age: 21,
}

//desestructurar
let {firstName1, lastName1} = persona1; 
console.log(firstName1,'',lastName1);

let miNombre = "Edwin";
let [a1, a2, a3, a4, a5]: any = miNombre;
console.log(a1,a2 ,a3,a4,a5);

const frutas = ["fresa","kiwii","manzana", "durazno"];
let [fruta1,fruta2] = frutas;
console.log(fruta1,fruta2);

let [frutaA,,,frutaB]= frutas;
console.log(frutaA,frutaB);


//creando una clase 
class Persona{
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    edad: number;

    constructor(nombre: string,  apellidoPaterno: string, apellidoMaterno:string, edad: number){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    //metodos 
    //Agregar
    getEdad(): number{
        return this.edad;
    }
    setEdad(edad: number):void {
        this.edad = edad;
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre: string):void {
        this.nombre = nombre;
        }
    
    setApellidoPaterno(): string{
            return this.apellidoPaterno;
        }

    setapellidoMaterno(): string{
        return this.apellidoMaterno = this.apellidoPaterno;
    }

    getApellidoPaterno():string{
        return this.apellidoPaterno;
    }

    getApellidoMaterno():string{
        return this.apellidoMaterno;
    }

    getNomnreCompleto():string{
        return this.getNombre +''+this.apellidoPaterno+''+this.apellidoMaterno
    }

}


// crear nuaeva persona 
let personaje1 = new Persona('Alberto', 'Guadarrama','Delgado',21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);

//cambiar la variable 
personaje1.edad= 25;
personaje1.nombre = 'Edwin';

let personaje2 = new Persona('Edwin','Rodriguez','Martinez',19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:'+'Juan');

console.log(personaje2.getNombre());
console.log(personaje2.getNomnreCompleto());


//interface
interface User{
    name: string;
    id: number;

}

class UserAccount{
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

}


const usuarioX: User = new UserAccount('Imagine Dragons', 1);
console.log(usuarioX.name, usuarioX.id);

//crear al menos 5 clases que se van a usar en el proyecto final


/*class Producto{
    id: number;
    name: string;
    precio: number;

    constructor(id: number, name: )

}*/

class Animal {
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    moverse(distancia: number = 0){
        console.log(`${this.nombre} se movio ${distancia}mts`);
    }
    hacerSonido(sonido: string = 'Sin sonido'){
        console.log(`${this.nombre} hace ${sonido}`);
    }

}

let animal1 = new Animal('Grillo');
animal1.moverse(5);
animal1.hacerSonido('Cri Cri');


class Perro extends Animal{
    constructor(nombre: string){
        super(nombre);
    }
    moverse(distancia: number = 5){
        super.moverse(distancia);
    }
    hacerSonido(sonido: string = 'Ladrido'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

let perro1 = new Perro('Firulais');
perro1.moverse(10);
perro1.hacerSonido('Miau Miau');


class Serpiente{
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    moverse(distancia: number = 0){
        console.log(`${this.nombre} se movio ${distancia}mts`);
    }
    hacerSonido(sonido: string = 'Siseo'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

let serpiente1 = new Serpiente('Cobra');
serpiente1.moverse(2);
serpiente1.hacerSonido('Siseo');
