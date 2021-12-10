'use strict'

const Bill = require('../models/Bill')

function getBillById(req, res){
    const { number } = req.params
    Bill.find({"number":number}),(err, result) => {
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json(result)
    }
}

function getBills(req, res){

    Bill.find((err, result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }

        return res.status(200).json(result)
    })
}


module.exports.getBills = getBills
module.exports.getBillById = getBillById
