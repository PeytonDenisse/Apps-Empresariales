let normalx:any = 'Hola mundo';
normalx = 10;
normalx = true;

console.log(normalx);

let usuario: string = 'Hola nuevo mundo '
console.log(usuario)

let value: any;

value = true;
value = 'hola undo';
value = [];
value = {};
value = Math.random;
value = undefined;
value = null;

console.log(value);

let miValor: unknown;
console.log("tipo unkwon:",miValor);

let value1: unknown = miValor;
let value2: any = miValor;

//let value3: boolean = miValor; esto marca un error
//let value4: number = miValor; esto marca un error

const edad: number = 20;
console.log('edad:', edad);

const sueldo: number = 1.201;
const total: number = Number('14785');//castear un string a number
console.log('Total:', total);
console.log('Sueldo:', sueldo);

const personaje:string = "Loky";
const otroPersonaje:string = 'Thor';
const personajeSecundario:string = `Hulk y ${personaje}`;
console.log(personajeSecundario);

const hero:string = "DeadPool's house";
console.log(hero)
console.log(hero.toUpperCase());

let vengador: any;
vengador = "Black Widow";
console.log(vengador.charAt(2));

vengador = 150.20
console.log(vengador.toFixed(1));
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1));