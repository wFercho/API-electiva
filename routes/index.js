'use strict'


const {indexDetail,getDetail,newDetail,updateDetail,deleteDetail} = require('../controllers/detail')
const express = require('express')
const { model } = require('mongoose')
const router = express.Router()

// router.get('/getDetails',detailController.getDetails)
router.get('/getDetails',indexDetail)
router.post('/newDetail',newDetail)
router.get('/getDetail/:cant', getDetail)
router.get('/updateDetail/:cant', updateDetail)
router.get('/deleteDetail/:cant', deleteDetail)

//BILL
const {getAllBill,newBill,getBill,updateBill,deleteBill} = require('../controllers/bill')
router.get('/bill',getAllBill)
router.get('/bill/:id', getBill)
router.post('/bill',newBill)
router.put('/bill/:id', updateBill)
router.delete('/bill/:id', deleteBill)

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

