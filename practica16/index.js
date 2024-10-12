const http = require('http');
const fs = require('fs');
const path = require('path');

const PUERTO = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

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

    // Usamos path.resolve para construir una ruta absoluta
    const filePath = path.resolve(ruta);

    fs.readFile(filePath, (err, data) => {
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
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});
