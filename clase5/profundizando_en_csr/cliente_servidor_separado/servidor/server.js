const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const registroController = require('./controllers/registro');

const server = express();

mongoose.connect("mongodb://localhost:27017/titanic", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(function(mongoose){
  server.use(express.static(path.join(__dirname, "cliente")));
  server.use(cors());

  server.use('/api/registro', registroController);
  
  server.listen(3000, function () {
    console.log("Servidor ejecutandose en http://localhost:3000");
  });
})


