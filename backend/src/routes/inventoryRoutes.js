const express = require('express')
const router = express.Router();

const { addItem, getItems, updateItem, getLowStock } = require('../controllers/inventoryController');

// all routes
router.post('/', addItem);
router.get('/', getItems);
router.get('/low-stock', getLowStock);
router.put('/:id', updateItem);

module.exports = router;