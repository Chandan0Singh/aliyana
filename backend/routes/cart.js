// routes/cart.js
const express = require('express');
const router = express.Router();
const { addToCart, getUserCart } = require('../controllers/cartController');

router.post('/add', addToCart); // /api/cart/add
router.get('/:userId', getUserCart); // /api/cart/:userId

module.exports = router;
