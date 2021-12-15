'use strict'

const Bill = require('../models/Bill')

module.exports ={

    indexBill : async(req,res,next) =>{

        try {
            const result = await Bill.find({})
            return res.status("200").json({"result":"success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
    getBill : async(req,res,next) =>{

        try {
            const {number} = req.params
            const result = await Bill.find({"code":number})
            return res.status("200").json({"result":"Success","code":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
    newBill : async(req,res,next) =>{

        try {
            const bill= new Bill(req.body)
            console.log(req.body)
            const result = await bill.save()
            return res.status("200").json({"result":"Success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    updateBill : async(req,res,next) =>{

        try {
            const {number} = req.params
            const bill = req.body
            const result = await Bill.findByIdAndUpdate(number,bill)
            
            return res.status("200").json({"result":"Success","data":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },

    deleteBill : async(req,res,next) =>{

        try {
            const {number} = req.params
            const result = await Bill.findByIdAndDelete(number)
           
            return res.status("200").json({"result":"Success","id":result})
     
        } catch (err) {
            return res.status(500).json({"result":"Error","error":err.message})
        }
    },
}



//module.exports.getBills = getBills
//module.exports.getBillById = getBillById
