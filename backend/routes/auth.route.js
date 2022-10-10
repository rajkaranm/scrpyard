const express = require("express");
const authCtrl = require("../controller/authCtrl")

// Routes
const authRoutes = express.Router();

authRoutes.route('/login').get(authCtrl.login);
authRoutes.route('/register').post(authCtrl.register);

module.exports = authRoutes;