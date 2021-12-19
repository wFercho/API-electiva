'use strict'

const Product = require('../models/Product')

module.exports ={

    getAllProductos : async(req,res,next) =>{

        try {
            const result = await Product.find({})
            return res.status("200").json({"result":"success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    getProduct : async(req,res,next) =>{

        try {
            const {idProduct} = req.params
            const result = await Product.find({"idProduct":idProduct})
            return res.status("200").json({"result":"Success","idProduct":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
    updateProduct : async(req,res,next) =>{

        try {
            const {idProduct} = req.params
            const dpto = req.body
            const result = await Product.findByIdAndUpdate(idProduct,dpto)
            
            return res.status("200").json({"result":"Success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    deleteProduct : async(req,res,next) =>{

        try {
            const {idProduct} = req.params
            const result = await Product.findByIdAndDelete(idProduct)
           
            return res.status("200").json({"result":"Success","id":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
}

function newProduct(req,res){
    const element = new Product(req.body)
    element.save((err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json({"result":result})
    })
}

//module.exports.getProducts = getProducts
module.exports.newProduct = newProduct
//module.exports.getProduct = getProduct