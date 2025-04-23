const express = require('express');

const { deleteProduct, updateProduct, getProductById, getAllProducts, createProduct } = require('../Controllers/productControll'); // <-- fixed filename
const { authenticate } = require('../middleware/authMiddleware'); 
const { validateProduct } = require('../middleware/validation');

const router = express.Router();

router.post('/', authenticate, validateProduct, createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', authenticate, validateProduct, updateProduct);
router.delete('/:id', authenticate, deleteProduct);

module.exports = router;
