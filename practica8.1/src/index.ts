console.log("Hola CodeSpaces");

const nuevoHeroe:string = "Loky";
function returnName():string {
    return nuevoHeroe;
}

const heroeNombre = returnName();
let otroNombre = returnName();
console.log("De que tipo es", typeof otroNombre);


//parametros obligatorios en funciones 
const nombreCompleto= (nombre:string, apellido:string) =>{
    return `${nombre} ${apellido}`;
}

const nombre = nombreCompleto("Peyton", "Manning");
console.log(nombre);

//parametros opcionales en funciones SWIF
const nombreCompleto2 = (nombre:string, apellido?:string) =>{
    return `${nombre} ${apellido || 'sin apellido'}`;
}

const nombre2 = nombreCompleto2("Peyton");
console.log(nombre2);

//parametros por defecto en funciones
const nombreCompleto3 = (nombre?:string, apellido?:string, mayusculas:boolean= false) =>{
    if(mayusculas){
        return `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`.toUpperCase();
    }
    else{
        return `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`;
    }
}

const nombre3 = nombreCompleto3("Peyton", "Manning", true);
console.log(nombre3);

//esta funcion en ternario 
const nombreCompleto4 = (nombre?:string, apellido?:string, mayusculas:boolean= false) =>
    (mayusculas) ? `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`.toUpperCase() : `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`;

const nombre4 = nombreCompleto4("Peyton", "Manning", true);
console.log(nombre4);

//operador Rest donde edad queda al ultimo
const nombreCompleto5 = (nombre:string, edad:number, ...restParametros:string[]) =>{
    return `${nombre} ${restParametros.join(' ')}`;
}

const nombre5 = nombreCompleto5("Peyton", 44, "Manning", "Hijo");
console.log(nombre5);

