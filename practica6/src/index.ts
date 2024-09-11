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

/********************************************************************** */
enum Rol {
    Administrador, // 0
    Cliente,       // 1
    Invitado       // 2
}

class Usuarios {
    private username: string;
    private rol: Rol;

    constructor(username: string, rol: Rol) {
        this.username = username;
        this.rol = rol;
    }

    mostrarInformacion(): void {
        console.log(`Usuario: ${this.username}, Rol: ${Rol[this.rol]}`);
    }

    
    cambiarRol(nuevoRol: Rol): void {
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