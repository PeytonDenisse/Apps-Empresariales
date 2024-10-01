const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {    
    res.send('Hola EXPRESS!');
});

app.get('/productos', (req, res) => {    
    res.send('PRODUCTOS!');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

