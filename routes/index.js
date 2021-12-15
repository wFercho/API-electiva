'use strict'

const billController = require('../controllers/bill')
const productController = require('../controllers/product')
const {index,getProduct,updateProduct,deleteProduct} = require('../controllers/product')
const express = require('express')
const { model } = require('mongoose')
const router = express.Router()

router.get('/getbills', billController.getBills)
router.get('/getbill/:number', billController.getBillById)

//GET para listar productos
router.get('/',index)
//GET para busar un producto por id
router.get('/:idProduct',getProduct)
//POST para crear productos
router.post('/newproduct',productController.newProduct)

//DELETE para eliminar productos por ID
router.delete('/deleteproduct/:idProduct', deleteProduct)
//PUT para modificar un producto
router.put('/updateproduct/:idProduct',updateProduct)
 
module.exports = router;
