const express = require('express');
const app = express();

const mongoose = require('mongoose');
const conexion = require('./conexion');

mongoose.connect(conexion)
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch(err => console.log('Error al conectar con la base de datos',err));


//middlewares

const productosRoutes = require('./routes/productosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

app.use( productosRoutes);
app.use(categoriasRoutes);
app.use(usuariosRoutes);