const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'static')));

// Diccionario Peticion / Respuesta
server.get('/api/productos', function(req, res){
  res.json({
    msj: 'Hola mundo'
  });
})

// Escucho las peticiones actuales en un puerto dado
server.listen(3000, function(){
  console.log('Servidor ejecutandose en http://localhost:3000');
});