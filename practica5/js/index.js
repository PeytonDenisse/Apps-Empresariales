var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var variable1 = 'Hola Mundo';
console.log(variable1);
//crear persona 
var persona1 = {
    firstName1: "Denisse",
    lastName1: "Peyton",
    age: 21,
};
//desestructurar
var firstName1 = persona1.firstName1, lastName1 = persona1.lastName1;
console.log(firstName1, '', lastName1);
var miNombre = "Edwin";
var a1 = miNombre[0], a2 = miNombre[1], a3 = miNombre[2], a4 = miNombre[3], a5 = miNombre[4];
console.log(a1, a2, a3, a4, a5);
var frutas = ["fresa", "kiwii", "manzana", "durazno"];
var fruta1 = frutas[0], fruta2 = frutas[1];
console.log(fruta1, fruta2);
var frutaA = frutas[0], frutaB = frutas[3];
console.log(frutaA, frutaB);
//creando una clase 
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    //metodos 
    //Agregar
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setApellidoPaterno = function () {
        return this.apellidoPaterno;
    };
    Persona.prototype.setapellidoMaterno = function () {
        return this.apellidoMaterno = this.apellidoPaterno;
    };
    Persona.prototype.getApellidoPaterno = function () {
        return this.apellidoPaterno;
    };
    Persona.prototype.getApellidoMaterno = function () {
        return this.apellidoMaterno;
    };
    Persona.prototype.getNomnreCompleto = function () {
        return this.getNombre + '' + this.apellidoPaterno + '' + this.apellidoMaterno;
    };
    return Persona;
}());
// crear nuaeva persona 
var personaje1 = new Persona('Alberto', 'Guadarrama', 'Delgado', 21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);
//cambiar la variable 
personaje1.edad = 25;
personaje1.nombre = 'Edwin';
var personaje2 = new Persona('Edwin', 'Rodriguez', 'Martinez', 19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:' + 'Juan');
console.log(personaje2.getNombre());
console.log(personaje2.getNomnreCompleto());
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var usuarioX = new UserAccount('Imagine Dragons', 1);
console.log(usuarioX.name, usuarioX.id);
//********************************************************************************* */
//crear al menos 5 clases que se van a usar en el proyecto final
var Personas = /** @class */ (function () {
    function Personas(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    Personas.prototype.getNombre = function () {
        return this.nombre;
    };
    Personas.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personas.prototype.getApellidoPaterno = function () {
        return this.apellidoPaterno;
    };
    Personas.prototype.setApellidoPaterno = function (apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    };
    Personas.prototype.getApellidoMaterno = function () {
        return this.apellidoMaterno;
    };
    Personas.prototype.setApellidoMaterno = function (apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    };
    Personas.prototype.getEdad = function () {
        return this.edad;
    };
    Personas.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    //  METODO 
    Personas.prototype.mostrarInformacion = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellidoPaterno, " ").concat(this.apellidoMaterno, " Edad: ").concat(this.edad));
    };
    return Personas;
}());
//clase usuario: clase hijaa de persona 
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombre, apellidoPaterno, apellidoMaterno, edad, username, password, correo) {
        var _this = _super.call(this, nombre, apellidoPaterno, apellidoMaterno, edad) || this; //mandamos llamar al contructor de la clase padre Personas
        _this.username = username;
        _this.password = password;
        _this.correo = correo;
        return _this;
    }
    Usuario.prototype.getUsername = function () {
        return this.username;
    };
    Usuario.prototype.setUsername = function (username) {
        this.username = username;
    };
    Usuario.prototype.getPassword = function () {
        return this.password;
    };
    Usuario.prototype.setPassword = function (password) {
        this.password = password;
    };
    Usuario.prototype.getCorreo = function () {
        return this.correo;
    };
    Usuario.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    // METODOS
    Usuario.prototype.iniciarSesion = function (username, password) {
        if (this.username === username && this.password === password) {
            return true;
        }
        else {
            return false;
        }
    };
    return Usuario;
}(Personas));
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    // Constructor
    function Cliente(nombre, apellidoPaterno, apellidoMaterno, edad, direccion) {
        var _this = _super.call(this, nombre, apellidoPaterno, apellidoMaterno, edad) || this; // Llamada al constructor de la clase padre
        _this.direccion = direccion;
        _this.historialCompras = [];
        return _this;
    }
    Cliente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Cliente.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Cliente.prototype.getHistorialCompras = function () {
        return this.historialCompras;
    };
    //  METODO
    Cliente.prototype.agregarCompra = function (producto) {
        this.historialCompras.push(producto);
        console.log("Producto ".concat(producto.getNombreProducto(), " a\u00F1adido al historial de compras."));
    };
    // METODO para mostrar el historial de compras
    Cliente.prototype.mostrarHistorialCompras = function () {
        console.log("Historial de Compras de ".concat(this.getNombre(), " ").concat(this.getApellidoPaterno(), " ").concat(this.getApellidoMaterno(), ":"));
        this.historialCompras.forEach(function (producto) {
            console.log("- ".concat(producto.getNombreProducto(), " x ").concat(producto.getCantidad(), " unidades"));
        });
    };
    return Cliente;
}(Persona));
//Clase productos
var Producto = /** @class */ (function () {
    function Producto(nombreProducto, precio, cantidad) {
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    Producto.prototype.getNombreProducto = function () {
        return this.nombreProducto;
    };
    Producto.prototype.setNombreProducto = function (nombreProducto) {
        this.nombreProducto = nombreProducto;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Producto.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Producto.prototype.setCantidad = function (cantida) {
        this.cantidad = cantida;
    };
    //METODO
    Producto.prototype.calcularTotal = function () {
        return this.precio * this.cantidad;
    };
    return Producto;
}());
//clase carrito de compras
var Carrito = /** @class */ (function () {
    //costructor 
    function Carrito() {
        this.productos = [];
        this.total = 0;
    }
    Carrito.prototype.getProductos = function () {
        return this.productos;
    };
    Carrito.prototype.setProducto = function (productos) {
        this.productos = productos;
    };
    Carrito.prototype.getTotal = function () {
        return this.total;
    };
    Carrito.prototype.setTotal = function (total) {
        this.total = total;
    };
    //METODO
    Carrito.prototype.agregarProducto = function (productos) {
        this.productos.push(productos);
        this.total += productos.calcularTotal();
        console.log("Producto agregado: ".concat(productos.getNombreProducto()));
    };
    return Carrito;
}());
//Clase MetodoPAgo
var MetodoPago = /** @class */ (function () {
    function MetodoPago(tipoPago, detalles) {
        this.tipoPago = tipoPago;
        this.detalles = detalles;
        this.valido = false;
    }
    MetodoPago.prototype.getTipoPago = function () {
        return this.tipoPago;
    };
    MetodoPago.prototype.setTipoPago = function (tipoPago) {
        this.tipoPago = tipoPago;
    };
    MetodoPago.prototype.getDetalles = function () {
        return this.detalles;
    };
    MetodoPago.prototype.setDetalles = function (detalles) {
        this.detalles = detalles;
    };
    MetodoPago.prototype.getValido = function () {
        return this.valido;
    };
    MetodoPago.prototype.setValido = function (valido) {
        this.valido = valido;
    };
    //METODOS
    MetodoPago.prototype.validarPago = function () {
        this.valido = true;
        console.log('Pago valido');
    };
    return MetodoPago;
}());
//Clase Pedido
var Pedido = /** @class */ (function () {
    function Pedido(usuario, carrito, metodoPago) {
        this.usuario = usuario;
        this.carrito = carrito;
        this.metodoPago = metodoPago;
        this.total = carrito.getTotal();
    }
    Pedido.prototype.getUsuario = function () {
        return this.usuario;
    };
    Pedido.prototype.setUsuario = function (usuario) {
        this.usuario = usuario;
    };
    Pedido.prototype.getCarrito = function () {
        return this.carrito;
    };
    Pedido.prototype.setCarrito = function (carrito) {
        this.carrito = carrito;
    };
    Pedido.prototype.getMetodoPago = function () {
        return this.metodoPago;
    };
    Pedido.prototype.setMetodoPago = function (metodoPago) {
        this.metodoPago = metodoPago;
    };
    Pedido.prototype.getTotal = function () {
        return this.total;
    };
    Pedido.prototype.setTotal = function (total) {
        this.total = total;
    };
    //METODOS
    Pedido.prototype.realizarPedido = function () {
        if (this.metodoPago.getValido()) {
            console.log('Pedido realizado');
        }
        else {
            console.log('Error al realizar el pedido');
        }
    };
    return Pedido;
}());
//********************************************************************************* */
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.moverse = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("".concat(this.nombre, " se movio ").concat(distancia, "mts"));
    };
    Animal.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'Sin sonido'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Animal;
}());
var animal1 = new Animal('Grillo');
animal1.moverse(5);
animal1.hacerSonido('Cri Cri');
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre) {
        return _super.call(this, nombre) || this;
    }
    Perro.prototype.moverse = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        _super.prototype.moverse.call(this, distancia);
    };
    Perro.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'Ladrido'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Perro;
}(Animal));
var perro1 = new Perro('Firulais');
perro1.moverse(10);
perro1.hacerSonido('Miau Miau');
var Serpiente = /** @class */ (function () {
    function Serpiente(nombre) {
        this.nombre = nombre;
    }
    Serpiente.prototype.moverse = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("".concat(this.nombre, " se movio ").concat(distancia, "mts"));
    };
    Serpiente.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'Siseo'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Serpiente;
}());
var serpiente1 = new Serpiente('Cobra');
serpiente1.moverse(2);
serpiente1.hacerSonido('Siseo');
//********************************************************************************* */
// Ejemplos de uso
var persona11 = new Personas('Juan', 'Perez', 'Lopez', 30);
persona11.mostrarInformacion();
persona11.setNombre('Pedro');
persona11.mostrarInformacion();
console.log(Persona);
//********************************************************************************* */
var usuario11 = new Usuario('Juan', 'Perez', 'Lopez', 30, 'juanperez', '123456', 'correo@gmail.com');
console.log(usuario11.iniciarSesion);
//********************************************************************************* */
var cliente1 = new Cliente('Juan', 'Perez', 'Lopez', 30, 'Calle 123, Colonia Centro');
cliente1.agregarCompra(new Producto('Laptop', 15000, 1));
cliente1.agregarCompra(new Producto('Mouse', 500, 2));
cliente1.mostrarHistorialCompras();
console.log(Cliente);
//********************************************************************************* */
var producto1 = new Producto('Laptop', 15000, 1);
console.log(producto1.calcularTotal());
console.log(Producto);
//********************************************************************************* */
var carrito1 = new Carrito();
carrito1.agregarProducto(new Producto('Laptop', 15000, 1));
carrito1.agregarProducto(new Producto('Mouse', 500, 2));
console.log(carrito1.getTotal());
console.log(Carrito);
//********************************************************************************* */
var metodoPago1 = new MetodoPago('Tarjeta', 'Visa');
metodoPago1.validarPago();
console.log(MetodoPago);
//********************************************************************************* */
var pedido1 = new Pedido(usuario11, carrito1, metodoPago1);
pedido1.realizarPedido();
console.log(Pedido);
//********************************************************************************* */
// Define la ruta base para las imágenes
var basePath = 'src/imagenes/';
// Array con las imágenes
var imagenes = [
    'ClasePersona.png',
    'ClaseUsuario.png',
    'ClaseCliente.png',
    'ClaseProducto.png',
    'ClaseCarrito.png',
    'ClaseMetodoPago.png',
    'ClasePedido.png'
];
// Obtén el contenedor donde se insertarán las imágenes
var container = document.getElementById('image-container');
if (container) {
    imagenes.forEach(function (imagen) {
        // Crea un elemento figure para cada imagen
        var figure = document.createElement('figure');
        var img = document.createElement('img');
        var figcaption = document.createElement('figcaption');
        // Configura las propiedades de los elementos
        img.src = "".concat(basePath).concat(imagen);
        img.alt = imagen;
        figcaption.textContent = "Imagen: ".concat(imagen);
        // Agrega los elementos al figure
        figure.appendChild(img);
        figure.appendChild(figcaption);
        // Agrega el figure al contenedor
        container.appendChild(figure);
    });
}
