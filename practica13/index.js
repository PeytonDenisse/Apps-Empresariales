const fs = require('fs')
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

