'use strict'

const Detail = require('../models/Detail')

module.exports ={

    indexDetail : async(req,res,next) =>{

        try {
            const result = await Detail.find({})
            return res.status("200").json({"result":"success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
    getDetail : async(req,res,next) =>{

        try {
            const {cant} = req.params
            const result = await Detail.find({"code":cant})
            return res.status("200").json({"result":"Success","code":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
    newDetail : async(req,res,next) =>{

        try {
            const detail= new Detail(req.body)
            console.log(req.body)
            const result = await detail.save()
            return res.status("200").json({"result":"Success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    updateDetail : async(req,res,next) =>{

        try {
            const {cant} = req.params
            const detail = req.body
            const result = await Detail.findByIdAndUpdate(cant,detail)
            
            return res.status("200").json({"result":"Success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    deleteDetail : async(req,res,next) =>{

        try {
            const {cant} = req.params
            const result = await Detail.findByIdAndDelete(cant)
           
            return res.status("200").json({"result":"Success","id":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
}
