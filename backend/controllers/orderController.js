const Order = require("../models/orderSchema");

const createOrder = async(req, res)=>{
    try{
        const order = Order.create(req.body);
        res.status(201).json({
            success: true,
            data: order
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

module.exports = {
    createOrder,
}