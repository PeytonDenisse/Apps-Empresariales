const empress = require('express'); 
const router = empress.Router();
const Categoria = require('../models/categoria');

router.get('/categorias', (req, res) => {
    Categoria.find().then(categorias => {
        res.json(categorias);
    }).catch(err => {
        res.status(400).send(err);
    });
    
});

module.exports = router;
