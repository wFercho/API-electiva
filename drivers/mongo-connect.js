
'use strict'
const mongoose = require('mongoose')

const uri='mongodb+srv://sebasjoya:123Sistemas@cluster.nrexv.mongodb.net/test';


mongoose.connect(uri)
    .then(()=>console.log('Connect DB success'))
    .catch((err)=>console.log(`Error to connect ${err}`))

 module.exports = mongoose