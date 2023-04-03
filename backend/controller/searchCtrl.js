const userModel = require('../models/userModel');

const searchCtrl = {
    searchProduct: async (req, res) => {
        const search = req.query.search.toLowerCase();
        let found = [];

        userModel.find((err, data) => {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].sellingNormalProduct.length; j++) {
                    if (data[i].sellingNormalProduct[j].productName.toLowerCase().includes(search)) {
                        found.push(data[i].sellingNormalProduct[j])
                    }
                }
            }

            if (found.length == 0) {
                res.json({flag: 0})
            } else {
                res.json(found)
            }
        })
    }
};

module.exports = searchCtrl;