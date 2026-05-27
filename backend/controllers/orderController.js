const Order = require("../models/orderSchema");

const getAllOrders = async(req, res) =>{
    try{
        const response = await Order.find()
        .populate("userId")
        .populate("productId")
        .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: response,
            OrderLength: response.lenght,
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

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
    getAllOrders,
    createOrder,
}