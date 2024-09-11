//enums
var Color;
(function (Color) {
    Color[Color["rojo"] = 50] = "rojo";
    Color[Color["verde"] = 51] = "verde";
    Color[Color["azul"] = 52] = "azul";
})(Color || (Color = {}));
console.log(Color.verde);
console.log(Color.rojo);
var color1 = Color.rojo;
color1 = Color.verde;
var CadinalDirection;
(function (CadinalDirection) {
    CadinalDirection["north"] = "Norte";
    CadinalDirection["South"] = "Sur";
    CadinalDirection["East"] = "Este";
    CadinalDirection["West"] = "Oeste";
})(CadinalDirection || (CadinalDirection = {}));
var directio = CadinalDirection.north;
console.log('Direction', directio);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Succes"] = 200] = "Succes";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["ServerError"] = 500] = "ServerError";
})(StatusCodes || (StatusCodes = {}));
var statusCode = StatusCodes.Succes;
console.log('Status Code', statusCode);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var volumen = Volumen.max;
console.log('Volumen', volumen);
