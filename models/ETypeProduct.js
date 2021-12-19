'use strict'

module.exports = {
    VIVERES:"61bf8b1b00a8a86c242f048f",
    LICORES:"61bf8b1000a8a86c242f048d",
    MEDICINA:"61bf8afb00a8a86c242f048b",
    ASEO:"61bf8ae400a8a86c242f0489"
}

const mongoose = require('mongoose')
const {Schema} = mongoose

const ETypeProductSchema = new Schema({
    id: String,
    nombre:String
})

ETypeProductSchema.set('toJSON', {
    transform:(document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('ETypeProductSchema', ETypeProductSchema)