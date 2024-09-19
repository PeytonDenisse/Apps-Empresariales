"use strict";
let variable1 = 'Hola Mundo';
console.log(variable1);
//crear persona 
const persona1 = {
    firstName1: "Denisse",
    lastName1: "Peyton",
    age: 21,
};
//desestructurar
let { firstName1, lastName1 } = persona1;
console.log(firstName1, '', lastName1);
let miNombre = "Edwin";
let [a1, a2, a3, a4, a5] = miNombre;
console.log(a1, a2, a3, a4, a5);
const frutas = ["fresa", "kiwii", "manzana", "durazno"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, frutaB);
//creando una clase 
class Persona {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    //metodos 
    //Agregar
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellidoPaterno() {
        return this.apellidoPaterno;
    }
    setapellidoMaterno() {
        return this.apellidoMaterno = this.apellidoPaterno;
    }
    getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    getNomnreCompleto() {
        return this.getNombre + '' + this.apellidoPaterno + '' + this.apellidoMaterno;
    }
}
// crear nuaeva persona 
let personaje1 = new Persona('Alberto', 'Guadarrama', 'Delgado', 21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);
//cambiar la variable 
personaje1.edad = 25;
personaje1.nombre = 'Edwin';
let personaje2 = new Persona('Edwin', 'Rodriguez', 'Martinez', 19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:' + 'Juan');
console.log(personaje2.getNombre());
console.log(personaje2.getNomnreCompleto());
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const usuarioX = new UserAccount('Imagine Dragons', 1);
console.log(usuarioX.name, usuarioX.id);
//********************************************************************************* */
//crear al menos 5 clases que se van a usar en el proyecto final
class Personas {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    setApellidoPaterno(apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }
    getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    setApellidoMaterno(apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    //  METODO 
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno} Edad: ${this.edad}`);
    }
}
//clase usuario: clase hijaa de persona 
class Usuario extends Personas {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, username, password, correo) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad); //mandamos llamar al contructor de la clase padre Personas
        this.username = username;
        this.password = password;
        this.correo = correo;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getCorreo() {
        return this.correo;
    }
    setCorreo(correo) {
        this.correo = correo;
    }
    // METODOS
    iniciarSesion(username, password) {
        if (this.username === username && this.password === password) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Cliente extends Persona {
    // Constructor
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, direccion) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad); // Llamada al constructor de la clase padre
        this.direccion = direccion;
        this.historialCompras = [];
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    getHistorialCompras() {
        return this.historialCompras;
    }
    //  METODO
    agregarCompra(producto) {
        this.historialCompras.push(producto);
        console.log(`Producto ${producto.getNombreProducto()} añadido al historial de compras.`);
    }
    // METODO para mostrar el historial de compras
    mostrarHistorialCompras() {
        console.log(`Historial de Compras de ${this.getNombre()} ${this.getApellidoPaterno()} ${this.getApellidoMaterno()}:`);
        this.historialCompras.forEach(producto => {
            console.log(`- ${producto.getNombreProducto()} x ${producto.getCantidad()} unidades`);
        });
    }
}
//Clase productos
class Producto {
    constructor(nombreProducto, precio, cantidad) {
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    getNombreProducto() {
        return this.nombreProducto;
    }
    setNombreProducto(nombreProducto) {
        this.nombreProducto = nombreProducto;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getCantidad() {
        return this.cantidad;
    }
    setCantidad(cantida) {
        this.cantidad = cantida;
    }
    //METODO
    calcularTotal() {
        return this.precio * this.cantidad;
    }
}
//clase carrito de compras
class Carrito {
    //costructor 
    constructor() {
        this.productos = [];
        this.total = 0;
    }
    getProductos() {
        return this.productos;
    }
    setProducto(productos) {
        this.productos = productos;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    //METODO
    agregarProducto(productos) {
        this.productos.push(productos);
        this.total += productos.calcularTotal();
        console.log(`Producto agregado: ${productos.getNombreProducto()}`);
    }
}
//Clase MetodoPAgo
class MetodoPago {
    constructor(tipoPago, detalles) {
        this.tipoPago = tipoPago;
        this.detalles = detalles;
        this.valido = false;
    }
    getTipoPago() {
        return this.tipoPago;
    }
    setTipoPago(tipoPago) {
        this.tipoPago = tipoPago;
    }
    getDetalles() {
        return this.detalles;
    }
    setDetalles(detalles) {
        this.detalles = detalles;
    }
    getValido() {
        return this.valido;
    }
    setValido(valido) {
        this.valido = valido;
    }
    //METODOS
    validarPago() {
        this.valido = true;
        console.log('Pago valido');
    }
}
//Clase Pedido
class Pedido {
    constructor(usuario, carrito, metodoPago) {
        this.usuario = usuario;
        this.carrito = carrito;
        this.metodoPago = metodoPago;
        this.total = carrito.getTotal();
    }
    getUsuario() {
        return this.usuario;
    }
    setUsuario(usuario) {
        this.usuario = usuario;
    }
    getCarrito() {
        return this.carrito;
    }
    setCarrito(carrito) {
        this.carrito = carrito;
    }
    getMetodoPago() {
        return this.metodoPago;
    }
    setMetodoPago(metodoPago) {
        this.metodoPago = metodoPago;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    //METODOS
    realizarPedido() {
        if (this.metodoPago.getValido()) {
            console.log('Pedido realizado');
        }
        else {
            console.log('Error al realizar el pedido');
        }
    }
}
//********************************************************************************* */
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    moverse(distancia = 0) {
        console.log(`${this.nombre} se movio ${distancia}mts`);
    }
    hacerSonido(sonido = 'Sin sonido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
let animal1 = new Animal('Grillo');
animal1.moverse(5);
animal1.hacerSonido('Cri Cri');
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    moverse(distancia = 5) {
        super.moverse(distancia);
    }
    hacerSonido(sonido = 'Ladrido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
let perro1 = new Perro('Firulais');
perro1.moverse(10);
perro1.hacerSonido('Miau Miau');
class Serpiente {
    constructor(nombre) {
        this.nombre = nombre;
    }
    moverse(distancia = 0) {
        console.log(`${this.nombre} se movio ${distancia}mts`);
    }
    hacerSonido(sonido = 'Siseo') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
let serpiente1 = new Serpiente('Cobra');
serpiente1.moverse(2);
serpiente1.hacerSonido('Siseo');
//********************************************************************************* */
// Ejemplos de uso
let persona11 = new Personas('Juan', 'Perez', 'Lopez', 30);
persona11.mostrarInformacion();
persona11.setNombre('Pedro');
persona11.mostrarInformacion();
console.log(Persona);
//********************************************************************************* */
let usuario11 = new Usuario('Juan', 'Perez', 'Lopez', 30, 'juanperez', '123456', 'correo@gmail.com');
console.log(usuario11.iniciarSesion);
//********************************************************************************* */
let cliente1 = new Cliente('Juan', 'Perez', 'Lopez', 30, 'Calle 123, Colonia Centro');
cliente1.agregarCompra(new Producto('Laptop', 15000, 1));
cliente1.agregarCompra(new Producto('Mouse', 500, 2));
cliente1.mostrarHistorialCompras();
console.log(Cliente);
//********************************************************************************* */
let producto1 = new Producto('Laptop', 15000, 1);
console.log(producto1.calcularTotal());
console.log(Producto);
//********************************************************************************* */
let carrito1 = new Carrito();
carrito1.agregarProducto(new Producto('Laptop', 15000, 1));
carrito1.agregarProducto(new Producto('Mouse', 500, 2));
console.log(carrito1.getTotal());
console.log(Carrito);
//********************************************************************************* */
let metodoPago1 = new MetodoPago('Tarjeta', 'Visa');
metodoPago1.validarPago();
console.log(MetodoPago);
//********************************************************************************* */
let pedido1 = new Pedido(usuario11, carrito1, metodoPago1);
pedido1.realizarPedido();
console.log(Pedido);
//********************************************************************************* */
