const express = require('express');

const server = express();

// Parametros
server.set('views', './ssr/views')
server.set('view engine', 'pug');

// Diccionario Peticion / Respuesta
server.get('/', function(req, res){
  res.render('home', { title: 'Hey', message: 'Hello there!'});
});

// Escucho las peticiones actuales en un puerto dado
server.listen(3000, function(){
  console.log('Servidor ejecutandose en http://localhost:3000');
});