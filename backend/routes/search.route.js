const express = require("express");
const searchCtrl = require("../controller/searchCtrl")

// Routes
const searchRoutes = express.Router();

searchRoutes.route('/search').get(searchCtrl.searchProduct);

module.exports = searchRoutes;