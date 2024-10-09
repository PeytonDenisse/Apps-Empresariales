/*const fs = require('fs')
console.log(fs);

// const leerArchivo = (err,data) => {
//     if (err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// }

//funcion ternario 

fs.readFile('archivo.txt', (err,data) => err ? console.log(err) : console.log(data.toString()));


fs.writeFile('nuevoArchivo3.txt', 'Hola nuevo archivo', (err) => err ? console.log(err) : console.log('Archivo creado'));

// unlink
fs.unlink('nuevoArchivo2.txt', (err) => err ? console.log(err) : console.log('Archivo eliminado'));

//mkdir
fs.mkdir('nuevaCarpeta', (err) => err ? console.log(err) : console.log('Carpeta creada'));

// rmdir
//fs.rmdir('nuevaCarpeta', (err) => err ? console.log(err) : console.log('Carpeta eliminada'));

//copiar archivo 
fs.copyFile('archivoCopia.txt', 'archivoCopia.txt', (err) => err ? console.log(err) : console.log('Archivo copiado'));


//mover el archivo que se crea al copiar un archivo , a la carpeta que se crea con mkdir
fs.copyFile('archivoCopia.txt', 'nuevaCarpeta/archivoCopia.txt', (err) => err ? console.log(err) : console.log('Archivo copiado'));


*/
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos (como el HTML, CSS, etc.)
app.use(express.static('public'));

// Endpoint para obtener archivos y carpetas del directorio actual
app.get('/api/files', (req, res) => {
    const directoryPath = path.join(__dirname);

    // Leer todos los archivos y carpetas en el directorio actual
    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudieron leer los archivos' });
        }

        // Mapeamos la lista de archivos y carpetas a un formato más simple
        const filesInfo = files.map(file => ({
            name: file.name,
            isDirectory: file.isDirectory()
        }));

        // Enviamos la lista de archivos al cliente
        res.json(filesInfo);
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});




// RETO
// Leer todos los archivos y carpetas
// de nuestro directorio y vamos a crear un front-end
// que muestre todos los archivos y carpetas usando iconos para diferenciarlos
// usar BootStrap Icons.