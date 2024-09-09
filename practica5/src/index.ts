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
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
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
}



let personaje1 = new Persona('Alberto', 21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);

//cambiar la variable 
personaje1.edad= 25;
personaje1.nombre = 'Edwin';

let personaje2 = new Persona('Francisco',19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:'+'Juan');