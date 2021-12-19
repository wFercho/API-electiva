'use strict'

const {index,getProduct,updateProduct,deleteProduct} = require('../controllers/product')
const {indexDetail,getDetail,newDetail,updateDetail,deleteDetail} = require('../controllers/detail')
const productController = require('../controllers/product')
const {indexBill,newBill,getBill,updateBill,deleteBill} = require('../controllers/bill')
const express = require('express')
const { model } = require('mongoose')
const router = express.Router()

// router.get('/getDetails',detailController.getDetails)
router.get('/getDetails',indexDetail)
router.post('/newDetail',newDetail)
router.get('/getDetail/:cant', getDetail)
router.get('/updateDetail/:cant', updateDetail)
router.get('/deleteDetail/:cant', deleteDetail)

//router.get('/getbills', billController.getBills)
router.get('/getbills',indexBill)
router.post('/newbill',newBill)
router.get('/getbill/:number', getBill)
router.get('/updatebill/:number', updateBill)
router.get('/deletebill/:number', deleteBill)

//GET para listar productos
router.get('/producto',index)
//GET para busar un producto por id
router.get('/producto/:idProduct',getProduct)
//POST para crear productos
router.post('/producto',productController.newProduct)

//DELETE para eliminar productos por IDnewCliente
router.delete('/producto/:idProduct', deleteProduct)
//PUT para modificar un producto
router.put('/producto/:idProduct',updateProduct)

//CLIENTES
const {getAllClientes, getCliente, updateCliente, deleteCliente, newCliente} = require('../controllers/cliente')
router.get('/cliente', getAllClientes)
router.get('/cliente/:id', getCliente)
router.post('/cliente', newCliente)
router.put('/cliente/:id', updateCliente)
router.delete('/cliente/:id', deleteCliente)
 
module.exports = router;

