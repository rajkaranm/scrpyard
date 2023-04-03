const userModel = require('../models/userModel');

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
        userModel.find(function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    },
    updateProduct: async (req, res) => {

        userModel.findById(req.params.id, (err, data) => {
            if (!data)
                res.status(404).send("Data not found");
            else {
                data.sellingNormalProduct = req.body.sellingNormalProduct;
                data.cart = req.body.cart;
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
    },
    getProductById: async (req, res) => {
        userModel.findById(req.params.id, (err, data) => {
            if (!data)
                res.status(404).send("Data not found");
            else
                res.json(data);
        })
    },
    getProductWithId: async (req, res) => {
        userModel.findOne({"sellingNormalProduct._id": req.params.id}, (err, data) => {
            if (!data)
                res.status(404).send("data not found");
            else
                data = data.sellingNormalProduct;
                console.log(data[0])
                for (let i = 0; i < data.length; i++) {
                    if (data[i]._id == req.params.id)
                        return res.json(data[i])
                }
                res.json(data.sellingNormalProduct)
        })
    },
    addCart: async (req, res) => {
        console.log(req.body)
        // userModel.findOne({_id: req.params.id}, (err, data) => {
        //     if (!data)
        //         res.status(404).send("Data not found");
        //     else
        //         res.json(data)
        // })
    }
};

module.exports = userDataCtrl;