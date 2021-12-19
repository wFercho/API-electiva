'use strict'
const mongoose = require('mongoose')
const {Schema} = mongoose

const billSchema = new Schema({
    number:{
        type: Number,
        required: true
    },
    dateBill:{
        type: Date,
        required: true
    },
    typePay:{
        type: Boolean,
        require: true
    },
    details:[{
        type: Schema.Types.ObjectId,
        ref: 'Detail'
    }],
    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    }
})

module.exports = mongoose.model('Bill', billSchema)