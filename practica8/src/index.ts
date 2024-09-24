function sum(a:number,b:number):number{
    return a+b;
}

let resultado = sum(2,3);
console.log(resultado)
//fSum = (5,4): //error

//console.log(fSum);//85

//funciones de ordem superior 

//funciones arrow 
let fSum = (a:number,b:number):number => a+b;
console.log(fSum(5,4));

//funcion anonima
let funcionAnonima = function(){
    console.log("Hola Mundo");
}
funcionAnonima();

//funcion anonima arrow
let funcionAnonimaArrow = () => console.log("Hola Mundo");


//es posible delcrar una funcion dentro de un console.log ?
console.log((function() {
    function innerFunction() {
      return 'Hello, World!';
    }
    return innerFunction();
  })());

  const varable =(a: number, b:number):number => a*b;

  function saludo(nombre:string):string{
    return `Hola ${nombre}`;
  }
  console.log(saludo("Peyton"));

  //funcion arrow que no sea anonima 
    const saludo2 = (nombre:string):string => `Hola ${nombre}`;

    function advertencia():void {
        console.log("Cuidado");
    }

    advertencia();
//void no retorna nada 

//never no retorna nada y no tiene fin 
function error(mensaje:string):never{
    let mensajeError: any = document.getElementById("mensajeError");

    mensajeError.inerHTML = "Error en la aplicacion";
    throw new Error(mensaje);
}
//error("Error en la aplicacion");

type accion = 'suma' | 'resta';
function operacion(a:number, b:number, operacion:accion){
    if(operacion == 'suma'){
        return a+b;
    } else{
        return a-b;
    }
}
console.log(operacion(5,4,'suma'));


//funcion ternaria en una sola linea 
const operacion2 = (a:number, b:number, operacion:accion):number => operacion == 'suma' ? a+b : a-b;

console.log(operacion2(5,4,'resta'));
console.log(operacion(6,6,'suma'));

//la funcion anterior con multiplicacion y division 
type accion2 = 'suma' | 'resta' | 'multiplicacion' | 'division';
const operacion3 = (a:number, b:number, operacion:accion2):number => operacion == 'suma' ? a+b : operacion == 'resta' ? a-b : operacion == 'multiplicacion' ? a*b : a/b;

console.log(25,25, 'division');
//