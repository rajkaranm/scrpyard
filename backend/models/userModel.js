const mongoose = require("mongoose")

const userData = mongoose.Schema({
    userDetails: {
        email: String,
        username: String,
        password: String,
    },

    sellingNormalProduct: [
        {
            productName: String,
            productType: String,
            description: String,
            imgUrl: String,
            price: Number,
            rating: Number,
            impression: Number
        },
    ],

    sellingCreativeProduct: [
        {

            productName: String,
            description: String,
            imgUrl: String,
            price: Number,
            rating: Number,
            impression: Number
        },
    ],

    cart: {
        products: [
            {
                imgUrl: String,
                productName: String,
                productType: String,
                price: Number,
                quantity: Number,
                _id: String
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
