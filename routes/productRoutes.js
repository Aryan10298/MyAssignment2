const express = require('express');
const productController = require('../src/controllers/productController');
const router = express.Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.delete('/products', productController.deleteAllProducts);
router.get('/products', productController.findProductsByName);

module.exports = router;
