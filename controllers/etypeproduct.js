'use strict'

const ETProduct = require('../models/ETypeProduct')

module.exports ={

    newETProduct: (req,res) => {
        const element = new ETProduct(req.body)
        element.save((err,result)=>{
            if(err){
                return res.status(500).json({"error":err.toString()})
            }
    
            return res.status(200).json({"result":result})
        })
    }
}