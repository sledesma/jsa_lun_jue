const express = require('express');
const cors = require('cors');

const fotos = require('./db');

const app = express();

app.use(cors());

app.get('/api/fotos', function(req, res){
  res.json(fotos);
})

app.listen(3000, () => console.log('Servidor ejecutandose en http://localhost:3000'));