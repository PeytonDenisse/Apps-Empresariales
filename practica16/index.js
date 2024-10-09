const http = require('http');
const fs = require('fs');
const PUERTO = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    // Simple Router
    let ruta = './views';
    switch (req.url) {
        case '/':
            ruta += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            ruta += '/about.html';
            res.statusCode = 200;
            break;
        case '/contact':
            ruta += '/contact.html';
            res.statusCode = 200;
            break;
        case '/products':
            ruta += '/products.html';
            res.statusCode = 200;
            break;
        case '/services':
            ruta += '/services.html';
            res.statusCode = 200;
            break;
        default:
            ruta += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(ruta, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        res.writeHead(res.statusCode, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

server.listen(PUERTO, () => {
    console.log(`Servidor en el puerto ${PUERTO}`);
});

 
//Reto
// De esta practica16 hacer un sitio 100% funcional
// usando BootStrap5 y un poco de CSS
// Debe tener un menu de navegacion con las opciones
// Inicio, Acerca de, Productos, Servicios y Contacto