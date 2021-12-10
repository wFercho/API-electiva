'use strict'
const mongoose = require('mongoose')
const {Schema} = mongoose

const detSchema = new Schema({
    cant:{
        type: Number,
        required:true
    },
    product:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

module.exports = mongoose.model('Detail', detSchema)