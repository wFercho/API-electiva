class Detail{

    constructor(product,cant){
        this.cant = cant
        this.product = product
    }

    calcSubtotal(){
        subtotal = 0.0

        return subtotal
    }
}

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