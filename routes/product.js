const express = require('express');
const productController = require('../controller/product.js');

const router = express.Router();

router
    .post('/', productController.createProduct)
    .get('/:id', productController.getProduct)
    .get('/', productController.getAllProducts)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);

exports.router = router; // This is how you export in CommonJS
