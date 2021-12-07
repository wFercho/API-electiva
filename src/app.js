'use strict'

const express = require('express')

const app = express()

require('../drivers/mongo-connect')
//settings
app.set('port',process.env.PORT || 3000)

//middleware
app.use(express.json)
app.use(express.urlencoded({extended:true}))

//enrutamiento


module.exports = app