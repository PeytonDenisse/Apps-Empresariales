const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    correo: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema); 

module.exports = Usuario;
