const express = require('express');

const router = express.Router();

const geetProductos = require('../controllers/productosController');
let productos = [];

router.get('/productos', getProductos);
module.exports = router;