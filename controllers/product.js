'use strict'

const Product = require('../models/Product')

module.exports ={

    newProduct: (req,res) => {
        const element = new Product(req.body)
        element.save((err,result)=>{
            if(err){
                return res.status(500).json({"error":err.toString()})
            }
    
            return res.status(200).json({"result":result})
        })
    },

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

const isExpired = (producto) =>{

    //Diferencia de fecha

    let diferencia = 0
    let isExpired = diferencia <= 0 ? true : false

    return isExpired
}

const calcIva = ({value}) =>{
    let valIva = 0
    valIva = value + (value * 0.19) 
    return valIva

}



//module.exports.getProducts = getProducts
//module.exports.getProduct = getProduct