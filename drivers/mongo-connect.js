
'use strict'
const mongoose = require('mongoose')

const uri=`mongodb+srv://${process.env.USER_DATABASE}:${process.env.PASSWORD}@cluster0.w9cte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(()=>console.log('Connect DB success'))
    .catch((err)=>console.log(`Error to connect ${err}`))

 module.exports = mongoose