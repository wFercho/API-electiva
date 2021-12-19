'use strict'
const mongoose = require('mongoose')
const {Schema} = mongoose
const STOCK_MIN = 5

const clientSchema = new Schema({
    idProveedor:{
        type: String,
        required: false
    },
    nombre:{
        type: String,
        required: true
    },
    cantProducto:{
        type: Number,
        required: true
    },
    producto:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
})

proSchema.set('toJSON', {
    transform:(document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Cliente', clientSchema)