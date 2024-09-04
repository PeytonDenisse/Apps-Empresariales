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