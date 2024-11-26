import express from 'express';
const router = express.Router();
import Usuario from'../models/usuario.js';
import bodyParser from'body-parser';
 
router.use(bodyParser.json());
 
 
 
router.get('/usuarios', (req, res) => {
        Usuario.find()
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
//Middleware
router.get('/usuarios/:id',(req, res) => {
    Usuario.findById(req.params.id)
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
});
 
router.delete('/usuarios/:id',(req, res) => {
    Usuario.deleteOne({ _id: req.params.id })
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
});
 
//actualizar
router.put('/usuarios/:id',(req, res) => {
    Usuario.updateOne({ _id: req.params.id }, req.body )
    .then( usuarios => {
        res.json(usuarios);
    })
    .catch( err => {
        res.send(err);
    })
});

router.post('/usuarios',(req, res) => {
    const usuario = new Usuario(req.body);
    usuario.save()
    .then( usuario => {
        res.json(usuario);
        })  
        .catch( err => {
            res.send(err);
        })
 });
 
//module.exports = router;

export default router;


