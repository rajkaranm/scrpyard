const express = require("express");
const paymentCtrl = require("../controller/paymentCtrl")

// Routes
const paymentRoutes = express.Router();

paymentRoutes.route('/checkout').post(paymentCtrl.checkout);
paymentRoutes.route('/paymentVerification').post(paymentCtrl.paymentVerification);
paymentRoutes.route('/getRazorKey').get(paymentCtrl.getRazorKey);

module.exports = paymentRoutes;