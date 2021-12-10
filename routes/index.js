'use strict'

const billController = require('../controllers/bill')

const express = require('express')
const { model } = require('mongoose')

const router = express.Router()

router.get('/', billController.getBills)
router.get('/:number', billController.getBillById)


module.exports = router