'use strict'

const Cliente = require('../models/Cliente')

module.exports ={

    newCliente: (req,res) => {
        const element = new Cliente(req.body)
        element.save((err,result)=>{
            if(err){
                return res.status(500).json({"error":err.toString()})
            }
    
            return res.status(200).json({"result":result})
        })
    },

    getAllClientes : async(req,res,next) =>{
        try {
            const result = await Cliente.find({})
            return res.status("200").json({"result":"success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    getCliente : async(req,res,next) =>{
      
        try {
            const {id} = req.params
            const result = await Cliente.find({"idCliente":id})
            return res.status("200").json({"result":"Success","Cliente":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
    updateCliente : async(req,res,next) =>{

        try {
            const {id} = req.params
            const [{_id}] = await Cliente.find({"idCliente":id})
            const updateCliente = req.body
            const result = await Cliente.findByIdAndUpdate(_id,updateCliente)
            
            return res.status("200").json({"result":"Success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    deleteCliente : async(req,res,next) =>{

        try {
            const {id} = req.params
            const [{_id}] = await Cliente.find({"idCliente":id})
            const result = await Cliente.findByIdAndDelete(_id)
           
            return res.status("200").json({"result":"Success","id":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
}


