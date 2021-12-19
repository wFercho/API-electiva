'use strict'


const {indexDetail,getDetail,newDetail,updateDetail,deleteDetail} = require('../controllers/detail')
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

//PRODUCTOS
const {newProduct, getAllProductos,getProduct,updateProduct,deleteProduct} = require('../controllers/product')
router.get('/producto',getAllProductos)
router.get('/producto/:idProduct',getProduct)
router.put('/producto/:idProduct',updateProduct)
router.post('/producto',newProduct)
router.delete('/producto/:idProduct', deleteProduct)

//CLIENTES
const {getAllClientes, getCliente, updateCliente, deleteCliente, newCliente} = require('../controllers/cliente')
router.get('/cliente', getAllClientes)
router.get('/cliente/:id', getCliente)
router.post('/cliente', newCliente)
router.put('/cliente/:id', updateCliente)
router.delete('/cliente/:id', deleteCliente)


//PROVEEDOR
const {getAllProveedores, getProveedor, updateProveedor, deleteProveedor, newProveedor} = require('../controllers/proveedor')
router.get('/proveedor', getAllProveedores)
router.get('/proveedor/:id', getProveedor)
router.post('/proveedor', newProveedor)
router.put('/proveedor/:id', updateProveedor)
router.delete('/proveedor/:id', deleteProveedor)


module.exports = router;

