const Razorpay = require("razorpay");

const rozorpay = new Razorpay({
    key_id: Process.env.RAZORPAY_KEY_SECRET,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

module.exports = razorpay;