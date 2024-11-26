import express from 'express';
const app = express();

import mongoose from 'mongoose';
import conexion  from './conexion.js';
import ejs from 'ejs'
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

mongoose.connect(conexion)
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch(err => console.log('Error al conectar con la base de datos',err));


//middlewares

import productosRoutes from './routes/productosRoutes.js';
import categoriasRoutes from './routes/categoriasRoutes.js';
import usuariosRoutes from'./routes/usuariosRoutes.js';
import documentacionRoutes from './routes/documentacionRoutes.js'

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

app.use( productosRoutes);
app.use(categoriasRoutes);
app.use(usuariosRoutes);
app.use(documentacionRoutes);