const express = require("express");
const userDataCtrl = require("../controller/userDataCtrl")

// Routes
const userDataRoutes = express.Router();

userDataRoutes.route('/add').post(userDataCtrl.createProduct);
userDataRoutes.route('/get/').get(userDataCtrl.getProduct);
userDataRoutes.route('/update/:id').post(userDataCtrl.updateProduct);

module.exports = userDataRoutes;