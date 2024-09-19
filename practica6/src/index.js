"use strict";
//enums
var Color;
(function (Color) {
    Color[Color["rojo"] = 50] = "rojo";
    Color[Color["verde"] = 51] = "verde";
    Color[Color["azul"] = 52] = "azul";
})(Color || (Color = {}));
console.log(Color.verde);
console.log(Color.rojo);
let color1 = Color.rojo;
color1 = Color.verde;
var CadinalDirection;
(function (CadinalDirection) {
    CadinalDirection["north"] = "Norte";
    CadinalDirection["South"] = "Sur";
    CadinalDirection["East"] = "Este";
    CadinalDirection["West"] = "Oeste";
})(CadinalDirection || (CadinalDirection = {}));
let directio = CadinalDirection.north;
console.log('Direction', directio);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Succes"] = 200] = "Succes";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["ServerError"] = 500] = "ServerError";
})(StatusCodes || (StatusCodes = {}));
let statusCode = StatusCodes.Succes;
console.log('Status Code', statusCode);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let volumen = Volumen.max;
console.log('Volumen', volumen);
/********************************************************************** */
var Rol;
(function (Rol) {
    Rol[Rol["Administrador"] = 0] = "Administrador";
    Rol[Rol["Cliente"] = 1] = "Cliente";
    Rol[Rol["Invitado"] = 2] = "Invitado"; // 2
})(Rol || (Rol = {}));
class Usuarios {
    constructor(username, rol) {
        this.username = username;
        this.rol = rol;
    }
    mostrarInformacion() {
        console.log(`Usuario: ${this.username}, Rol: ${Rol[this.rol]}`);
    }
    cambiarRol(nuevoRol) {
        this.rol = nuevoRol;
        console.log(`Rol actualizado a: ${Rol[this.rol]}`);
    }
}
//mandamos a imprimir 
const usuario1 = new Usuarios('Juan', Rol.Cliente);
usuario1.mostrarInformacion();
// Salida: Usuario: Juan, Rol: Cliente
usuario1.cambiarRol(Rol.Administrador);
/***********************************************************************/ 
