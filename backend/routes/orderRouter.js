const express = require("express");
const router = express.Router();

const { getAllOrders, createOrder } = require("../controllers/orderController");

router.post("/create", createOrder)

router.get("/all", getAllOrders)

module.exports = router;