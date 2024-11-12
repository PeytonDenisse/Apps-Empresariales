const empress = require('express'); 
const router = empress.Router();
const Producto = require('../models/producto');

router.get('/productos', (req, res) => {
    Producto.find().then(productos => {
        res.json(productos);
    }).catch(err => {
        res.status(400).send(err);
    });
    
});



module.exports = router;

