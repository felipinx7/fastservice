// routes/cardapioRoutes.js
const express = require('express');
const router = express.Router();
const cardapioController = require('../controllers/cardapioController');

router.get('/', cardapioController.getCardapio);
router.get('/:id', cardapioController.getItem);
router.post('/', cardapioController.addItem);
router.put('/:id', cardapioController.updateItem);
router.delete('/:id', cardapioController.deleteItem);

module.exports = router;
