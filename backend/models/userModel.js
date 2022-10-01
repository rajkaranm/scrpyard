const mongoose = require("mongoose")

const userData = mongoose.Schema({
    userDetails: {
        username: String,
        password: String,
    },

    sellingNormalProduct: [
        {
            productName: String,
            productType: String,
            description: String,
            price: Number,
            rating: Number,
            impression: Number
        },
    ],

    sellingCreativeProduct: [
        {

            productName: String,
            description: String,
            price: Number,
            rating: Number,
            impression: Number
        },
    ],

    cart: {
        products: [
            {
                product_id: String,
                productName: String,
                quantity: Number,
            },
        ],
        totalProducts: Number
    },

    bashboard : {
        totalRevenue: Number,
        currentOrders: Number,
        totalOrder: Number,
        totalCreativeOrder: Number,
    }
});

module.exports = mongoose.model('userData', userData)