const express = require("express");
const userDataCtrl = require("../controller/userDataCtrl")

// Routes
const userDataRoutes = express.Router();

userDataRoutes.route('/add').post(userDataCtrl.createProduct);
userDataRoutes.route('/get/').get(userDataCtrl.getProduct);
userDataRoutes.route('/get/:id').get(userDataCtrl.getProductById);
userDataRoutes.route('/update/:id').post(userDataCtrl.updateProduct);
userDataRoutes.route('/id/:id').get(userDataCtrl.getProductWithId);
userDataRoutes.route('/cart').post(userDataCtrl.addCart);


module.exports = userDataRoutes;