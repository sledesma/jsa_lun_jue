const express = require('express');
const model = require('../models/registro');

const controller = express.Router();

controller.get('/', function(req, res){
  model.find({}).exec(function(err, docs){
    res.json(docs);
  });
});

module.exports = controller;