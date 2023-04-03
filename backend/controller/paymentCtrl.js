const userModel = require("../models/userModel");
const Razorpay = require("razorpay")
require("dotenv").config({ path: "../.env" });

// Razorpay
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const paymentCtrl = {
  checkout: async (req, res) => {
    const amount = Number(req.body.total) * 100;

    var options = {
        amount: amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
    const order = instance.orders.create(options, function(err, order) {
        console.log(order);
        res.json({order})
    });
  },
  paymentVerification: async (req, res) => {
    res.json({success: true})
  },
  getRazorKey: async (req, res) => {
    res.json({key: process.env.RAZORPAY_API_KEY})
  }
};

module.exports = paymentCtrl;
