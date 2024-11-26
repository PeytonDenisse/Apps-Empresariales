import express  from 'express';
const router = express.Router();
import Categoria  from '../models/categoria.js';
import bodyParser  from 'body-parser';
 
router.use(bodyParser.json());
 
 
 
router.get('/categorias', (req, res) => {
        Categoria.find()
        .then(categorias => {
            res.json(categorias);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
//Middleware
router.get('/categorias/:id',(req, res) => {
    Categoria.findById(req.params.id)
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
});
 
router.delete('/categorias/:id',(req, res) => {
    Categoria.deleteOne({ _id: req.params.id })
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
});
 
//actualizar
router.put('/categorias/:id',(req, res) => {
    Categoria.updateOne({ _id: req.params.id }, req.body )
    .then( categorias => {
        res.json(categorias);
    })
    .catch( err => {
        res.send(err);
    })
});

router.post('/categorias',(req, res) => {
    const categoria = new Categoria(req.body);
    categoria.save()
    .then( producto => {
        res.json(categoria);
        })  
        .catch( err => {
            res.send(err);
        })
 });
 
//module.exports = router;

export default router;


