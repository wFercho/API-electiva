'use strict'

const express = require('express')

const app = express()

require('../drivers/mongo-connect')
//settings
app.set('port',process.env.PORT || 3000)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//enrutamiento
//app.use('/dpto',require('../routes/departments.js'))
//app.use('/town',require('../routes/towns.js'))

module.exports = app