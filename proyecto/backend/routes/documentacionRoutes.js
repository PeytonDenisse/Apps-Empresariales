import express from 'express';
const router = express.Router();

router.get('/',(req, res) => {
    //res.send('Documentacion')
    res.render('documentacion', {tittle: 'Documentcion'});
});

export default router; 

