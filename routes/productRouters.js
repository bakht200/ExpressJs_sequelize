const productController = require('../controller/productController');

const router = require('express').Router();

router.post('/addProduct',productController.addProduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/someProduct',productController.getSpecific)


router.get('/:id',productController.getOneProduct)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct)


module.exports = router;
