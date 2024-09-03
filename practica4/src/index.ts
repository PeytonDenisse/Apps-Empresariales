//tuplas

let tupla: [string,number] = ['Tomy', 23];

console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);

let tupla2: [string, number, boolean] = ['Tomy', 23, true];
console.log('Nombre',tupla2[0])
console.log('Edad',tupla2[1]);

//crear un condicional para saber si es true o no con ternario
//ternario 
let estadoCivil: string = tupla2[2] ? 'Casado' : 'Soltero';
console.log(estadoCivil);


let tupla3: [number,boolean, string];
tupla3 = [23,false,'Edwin'];
console.log(tupla3);

//tuplas solo de lectura 
//no se pueden cambiar solo puedes usar los elementos e adentro

let ourReadonlyTuple: readonly [Number, Boolean, string] = [5,false, 'Peyton'];
//ourReadonlyTuple.push('Cadena'); //error
//ourReadonlytuple[0] = 30; Error
console.log(ourReadonlyTuple);

//grafica
const graph: [x:number, y:number] = [55.2, 56.24];
console.log(graph);
console.log(graph[0]);


//destrucuturacion de variables 
const persona ={
    firstName: "Edwin",
    lastName: "Rodriguez",
    age: 21
}
console.log(persona.firstName);


let {firstName, lastName, age =25} = persona;
console.log(firstName, lastName, age);


//Facer una serie fibonacci con TS y desestrucuturacion de variables, con un limite de 100 numeros 
//Graficar con la libreria Chart.js 

function fibonacciSeries(n: number): number[] {
    const series: number[] = [0, 1];
 
    for (let i = 2; i < n; i++) {
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
 
    return series;
}
 
const n:number = 25; // Change this value to generate Fibonacci series up to a different number
const fibonacci:number[] = fibonacciSeries(n);
console.log(fibonacci);