const http = require('http');

const PUERTO = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hola Peyton</h1>');
    res.write('<ul><li>JS</li><li>Python</li><li>Java</li></ul>')
    res.write(req.url+'<b>');
    res.end(req.method);
    
});

server.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});

