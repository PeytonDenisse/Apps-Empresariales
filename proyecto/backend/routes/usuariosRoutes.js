const empress = require('express'); 
const router = empress.Router();
const Usuario = require('../models/usuario');

router.get('/usuarios', (req, res) => {
    Usuario.find().then(usuarios => {
        res.json(usuarios);
    }).catch(err => {
        res.status(400).send(err);
    });
    
});



module.exports = router;

