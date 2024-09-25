console.log("Hola CodeSpaces");
var nuevoHeroe = "Loky";
function returnName() {
    return nuevoHeroe;
}
var heroeNombre = returnName();
var otroNombre = returnName();
console.log("De que tipo es", typeof otroNombre);
//parametros obligatorios en funciones 
var nombreCompleto = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido);
};
var nombre = nombreCompleto("Peyton", "Manning");
console.log(nombre);
//parametros opcionales en funciones SWIF
var nombreCompleto2 = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido || 'sin apellido');
};
var nombre2 = nombreCompleto2("Peyton");
console.log(nombre2);
//parametros por defecto en funciones
var nombreCompleto3 = function (nombre, apellido, mayusculas) {
    if (mayusculas === void 0) { mayusculas = false; }
    if (mayusculas) {
        return "".concat(nombre || 'sin nombre', " ").concat(apellido || 'sin apellido').toUpperCase();
    }
    else {
        return "".concat(nombre || 'sin nombre', " ").concat(apellido || 'sin apellido');
    }
};
var nombre3 = nombreCompleto3("Peyton", "Manning", true);
console.log(nombre3);
//esta funcion en ternario 
var nombreCompleto4 = function (nombre, apellido, mayusculas) {
    if (mayusculas === void 0) { mayusculas = false; }
    return (mayusculas) ? "".concat(nombre || 'sin nombre', " ").concat(apellido || 'sin apellido').toUpperCase() : "".concat(nombre || 'sin nombre', " ").concat(apellido || 'sin apellido');
};
var nombre4 = nombreCompleto4("Peyton", "Manning", true);
console.log(nombre4);
//operador Rest donde edad queda al ultimo
var nombreCompleto5 = function (nombre, edad) {
    var restParametros = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restParametros[_i - 2] = arguments[_i];
    }
    return "".concat(nombre, " ").concat(restParametros.join(' '));
};
var nombre5 = nombreCompleto5("Peyton", 44, "Manning", "Hijo");
console.log(nombre5);
