const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
  survived: Number,
  pclass: Number,
  sex: String,
  age: Number,
  sibsp: Number,
  parch: Number,
  fare: Number,
  embarked: String,
  deck: String
});

const Registro = mongoose.model('Registro', registroSchema, 'registro');

module.exports = Registro