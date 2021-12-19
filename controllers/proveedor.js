'use strict'

const Proveedor = require('../models/Proveedor')

module.exports ={

    newProveedor: (req,res) => {
        const element = new Proveedor(req.body)
        element.save((err,result)=>{
            if(err){
                return res.status(500).json({"error":err.toString()})
            }
    
            return res.status(200).json({"result":result})
        })
    },

    getAllProveedores : async(req,res,next) =>{
        try {
            const result = await Proveedor.find({})
            return res.status("200").json({"result":"success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    getProveedor : async(req,res,next) =>{
      
        try {
            const {id} = req.params
            const result = await Proveedor.find({"idProveedor":id})
            return res.status("200").json({"result":"Success","Proveedor":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
    updateProveedor : async(req,res,next) =>{

        try {
            const {id} = req.params
            const [{_id}] = await Proveedor.find({"idProveedor":id})
            const updateProveedor = req.body
            const result = await Proveedor.findByIdAndUpdate(_id,updateProveedor)
            
            return res.status("200").json({"result":"Success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    deleteProveedor : async(req,res,next) =>{

        try {
            const {id} = req.params
            const [{_id}] = await Proveedor.find({"idProveedor":id})
            const result = await Proveedor.findByIdAndDelete(_id)
           
            return res.status("200").json({"result":"Success","id":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
}


