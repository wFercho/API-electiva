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
//test
app.get('/',(req, res) => {
    res.send("<h1>Hola Mundo</h1>")
})
app.use('/api',require('../routes/index'))


module.exports = app