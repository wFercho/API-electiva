'use strict'
const mongoose = require('mongoose')
const {Schema} = mongoose
const STOCK_MIN = 5

const clientSchema = new Schema({
    idCliente: {
        type: String,
        required:true
    },
    nombre: String,
    correo:String,
    bills:[{
        type: Schema.Types.ObjectId,
        ref: 'Bill'
    }],
})

clientSchema.set('toJSON', {
    transform:(document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Cliente', clientSchema)