//enums
enum Color{
    rojo = 50,
    verde,
    azul
}

console.log(Color.verde);
console.log(Color.rojo);

let color1: Color = Color.rojo;

color1 = Color.verde;

enum CadinalDirection{
    north = 'Norte',
    South = 'Sur',
    East = 'Este',
    West = 'Oeste'
}

let directio:CadinalDirection = CadinalDirection.north;
console.log('Direction', directio);

enum StatusCodes{
    Succes = 200,
    NotFound = 404,
    ServerError = 500
}

let statusCode:StatusCodes = StatusCodes.Succes;
console.log('Status Code', statusCode);

enum Volumen{
    min = 1,
    medio = 5,
    max = 10
}

let volumen:Volumen = Volumen.max;
console.log('Volumen', volumen);