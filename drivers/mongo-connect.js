'use strict'

const mongoose = require('mongoose')

const url = 'mongodb://'

mongoose.connect(url)
    .then(()=>console.log('Connect DB SUCCESS'))
    .catch((err)=>console.log(`ERROR DB ${err}`))

module.exports = mongoose