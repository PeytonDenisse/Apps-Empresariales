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


//creando una clase 
class Persona{
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    edad: number;

    constructor(nombre: string,  apellidoPaterno: string, apellidoMaterno:string, edad: number){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    //metodos 
    //Agregar
    getEdad(): number{
        return this.edad;
    }
    setEdad(edad: number):void {
        this.edad = edad;
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre: string):void {
        this.nombre = nombre;
        }
    
    setApellidoPaterno(): string{
            return this.apellidoPaterno;
        }

    setapellidoMaterno(): string{
        return this.apellidoMaterno = this.apellidoPaterno;
    }

    getApellidoPaterno():string{
        return this.apellidoPaterno;
    }

    getApellidoMaterno():string{
        return this.apellidoMaterno;
    }

    getNomnreCompleto():string{
        return this.getNombre +''+this.apellidoPaterno+''+this.apellidoMaterno
    }

}


// crear nuaeva persona 
let personaje1 = new Persona('Alberto', 'Guadarrama','Delgado',21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);

//cambiar la variable 
personaje1.edad= 25;
personaje1.nombre = 'Edwin';

let personaje2 = new Persona('Edwin','Rodriguez','Martinez',19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:'+'Juan');

console.log(personaje2.getNombre());
console.log(personaje2.getNomnreCompleto());


//interface
interface User{
    name: string;
    id: number;

}

class UserAccount{
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

}


const usuarioX: User = new UserAccount('Imagine Dragons', 1);
console.log(usuarioX.name, usuarioX.id);
//********************************************************************************* */
//crear al menos 5 clases que se van a usar en el proyecto final

class Personas{
    private nombre: string;
    private apellidoPaterno: string;
    private apellidoMaterno: string;
    private edad: number;

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }

    getNombre():string {
        return this.nombre;
    }
    setNombre(nombre:string):void {
        this.nombre = nombre;
    }

    getApellidoPaterno(): string{
        return this.apellidoPaterno;
    }
    setApellidoPaterno(apellidoPaterno: string):void {
        this.apellidoPaterno = apellidoPaterno;
    }

    getApellidoMaterno(): string{
        return this.apellidoMaterno;
    }
    setApellidoMaterno(apellidoMaterno: string):void {
        this.apellidoMaterno = apellidoMaterno;
    }

    getEdad():number{
        return this.edad;
    }
    setEdad(edad: number):void {
        this.edad = edad;
    }

    //  METODO 
    mostrarInformacion():void{
        console.log(`Nombre: ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno} Edad: ${this.edad}`);
    } 
}

//clase usuario: clase hijaa de persona 

class Usuario extends Personas{
    private username: string;
    private password: string;
    private correo: string;

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number, username: string, password: string, correo: string){
        super(nombre, apellidoPaterno, apellidoMaterno, edad); //mandamos llamar al contructor de la clase padre Personas
        this.username = username;
        this.password = password;
        this.correo = correo;
    }

    getUsername():string{
        return this.username;
    }
    setUsername(username: string):void{
        this.username = username;
    }

    getPassword():string{
        return this.password;
    }
    setPassword(password: string):void{
        this.password = password;
    }

    getCorreo():string{
        return this.correo;
    }
    setCorreo(correo: string):void{
        this.correo = correo;
    }

    // METODOS
    iniciarSesion(username: string, password: string):boolean{
        if(this.username === username && this.password === password){
            return true;
        }else{
            return false;
        }
    }
}

class Cliente extends Persona {
    private direccion: string;
    private historialCompras: Producto[];

    // Constructor
    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number, direccion: string) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad);  // Llamada al constructor de la clase padre
        this.direccion = direccion;
        this.historialCompras = [];
    }

   
    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getHistorialCompras(): Producto[] {
        return this.historialCompras;
    }

    //  METODO
    public agregarCompra(producto: Producto): void {
        this.historialCompras.push(producto);
        console.log(`Producto ${producto.getNombreProducto()} añadido al historial de compras.`);
    }

    // METODO para mostrar el historial de compras
    public mostrarHistorialCompras(): void {
        console.log(`Historial de Compras de ${this.getNombre()} ${this.getApellidoPaterno()} ${this.getApellidoMaterno()}:`);
        this.historialCompras.forEach(producto => {
            console.log(`- ${producto.getNombreProducto()} x ${producto.getCantidad()} unidades`);
        });
    }
}

//Clase productos
class Producto{
    private nombreProducto:string;
    private precio: number;
    private cantidad: number;

    constructor(nombreProducto: string, precio: number, cantidad: number){
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    getNombreProducto():string{
        return this.nombreProducto;
    }
    setNombreProducto(nombreProducto: string):void{
        this.nombreProducto = nombreProducto;
    }

    getPrecio():number{
        return this.precio;
    }
    setPrecio(precio: number):void{
        this.precio = precio;
    }

    getCantidad():number{
        return this.cantidad;
    }
    setCantidad(cantida: number):void{
        this.cantidad = cantida;
    }

    //METODO
    calcularTotal():number{
        return this.precio * this.cantidad;
    }
}

//clase carrito de compras
class Carrito{
    private productos: Producto[];
    private total: number;

    //costructor 
    constructor(){
        this.productos = [];
        this.total = 0;
    }

    getProductos():Producto[] {
        return this.productos;
    }
    setProducto(productos: Producto[]):void{
        this.productos = productos;
    }

    getTotal():number{
        return this.total;
    }
    setTotal(total: number):void{
        this.total = total;
    }

    //METODO
    agregarProducto(productos: Producto):void{
        this.productos.push(productos);
        this.total += productos.calcularTotal();
        console.log(`Producto agregado: ${productos.getNombreProducto()}`)
    }
    
}

//Clase MetodoPAgo
class MetodoPago{
    private tipoPago: string;
    private detalles: string;
    private valido: boolean;

    constructor(tipoPago: string, detalles: string){
        this.tipoPago = tipoPago;
        this.detalles = detalles;
        this.valido = false;
    }
    
    getTipoPago():string{
        return this.tipoPago;
    }
    setTipoPago(tipoPago: string):void{
        this.tipoPago = tipoPago;
    }

    getDetalles():string{
        return this.detalles;
    }
    setDetalles(detalles:string):void{
        this.detalles = detalles
    }

    getValido():boolean{
        return this.valido;
    }
    setValido(valido: boolean):void{
        this.valido = valido;
    }

    //METODOS
    validarPago():void{
        this.valido = true;
        console.log('Pago valido');
    }
}

//Clase Pedido
class Pedido{
    private usuario: Usuario;
    private carrito: Carrito;
    private metodoPago: MetodoPago;
    private total: number;

    constructor(usuario: Usuario, carrito: Carrito, metodoPago: MetodoPago){
        this.usuario = usuario;
        this.carrito = carrito;
        this.metodoPago = metodoPago;
        this.total = carrito.getTotal();
    }

    getUsuario():Usuario{
        return this.usuario;
    }
    setUsuario(usuario: Usuario):void{
        this.usuario = usuario;
    }

    getCarrito():Carrito{
        return this.carrito;
    }
    setCarrito(carrito: Carrito):void{
        this.carrito = carrito;
    }

    getMetodoPago():MetodoPago{
        return this.metodoPago;
    }
    setMetodoPago(metodoPago: MetodoPago):void{
        this.metodoPago = metodoPago;
    }

    getTotal():number{
        return this.total;
    }
    setTotal(total: number):void{
        this.total = total;
    }

    //METODOS
    realizarPedido():void{
        if(this.metodoPago.getValido()){
            console.log('Pedido realizado');
        }else{
            console.log('Error al realizar el pedido');
        }
    }
}






//********************************************************************************* */
class Animal {
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    moverse(distancia: number = 0){
        console.log(`${this.nombre} se movio ${distancia}mts`);
    }
    hacerSonido(sonido: string = 'Sin sonido'){
        console.log(`${this.nombre} hace ${sonido}`);
    }

}

let animal1 = new Animal('Grillo');
animal1.moverse(5);
animal1.hacerSonido('Cri Cri');


class Perro extends Animal{
    constructor(nombre: string){
        super(nombre);
    }
    moverse(distancia: number = 5){
        super.moverse(distancia);
    }
    hacerSonido(sonido: string = 'Ladrido'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

let perro1 = new Perro('Firulais');
perro1.moverse(10);
perro1.hacerSonido('Miau Miau');


class Serpiente{
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    moverse(distancia: number = 0){
        console.log(`${this.nombre} se movio ${distancia}mts`);
    }
    hacerSonido(sonido: string = 'Siseo'){
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
console.log(Persona)
//********************************************************************************* */
let usuario11 = new Usuario('Juan', 'Perez', 'Lopez', 30, 'juanperez', '123456', 'correo@gmail.com');
console.log(usuario11.iniciarSesion)
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



