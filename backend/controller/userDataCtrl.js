const userModel = require('../models/userModel');
const cloudinary = require("cloudinary").v2;
require("dotenv").config({ path: "./.env" });

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
  });

const userDataCtrl = {
    createProduct: async (req, res) => {
        const userData = new userModel(req.body);
        userData.save()
        .then(todo => {
            res.status(200).json({'todo': 'Data Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed To Add Data');
        });
    },
    getProduct: async (req, res) => {
        userModel.find(function(err, todos) {
            if (err) {
                console.log(err);
            } else {
                res.json(todos);
            }
        });
    },
    updateProduct: async (req, res) => {

        userModel.findById(req.params.id, (err, data) => {
            if (!data)
                res.status(404).send("Data not found");
            else {
                data.sellingNormalProduct = req.body.sellingNormalProduct;
                data.save().then(data => {
                    res.json('Data updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
            }
        })
    },
    getProductById: async (req, res) => {
        userModel.findById(req.params.id, (err, data) => {
            if (!data)
                res.status(404).send("Data not found");
            else
                res.json(data);
        })
    }
};

module.exports = userDataCtrl;