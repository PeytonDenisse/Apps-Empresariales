const express = require('express');
const app = express();

//definir la ruta 
app.get('/', (req, res) => {
    res.send('Hola EXPRESS!');
});

// El puerto donde va a escuchar 
app.listen(3000), () => {
    console.log('Server on port 3000');
}

//get para productos 
app.get('/productos', (req, res) => {
    res.send('Estamos en productos');
});



//Para que sirve node?
// Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
// Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.
//Como instalar nodemon ?
//npm install -g nodemon
//que sigue despues de instalarlo?

 