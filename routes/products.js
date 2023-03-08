var express = require('express');
var router = express.Router();
var Products = require('../schema/producs.js');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  let results = await Products.find({})
  // listar todos los productos
  res.send(results);
});

router.get('/fecha', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  // listar todos los productos
  res.send({
   fecha: new Date()
  });
});

router.get('/:id', async function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  let results = await Products.findOne({ _id: req.params.id })
  res.send(results);
});

router.post('/salvar', async function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  let aSalvar = req.body;
  Products.create(aSalvar);
  res.send({ resultado: 'ok'});
});

module.exports = router;
