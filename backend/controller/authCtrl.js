const userModel = require('../models/userModel');

const authCtrl = {
    login: async (req, res) => {
        const { email, password} = req.body
        console.log(email, password)
        userModel.findOne({ 'userDetails.email': email}, (err, user) => {
            if(user){
                console.log(user.userDetails.password)
                if(password === user.userDetails.password) {
                    res.send({message: "Login Successfull", user: user})
                } else {
                    res.send({ message: "Password didn't match"})
                }
            } else {
                res.send({message: "User not registered"})
            }
        })
    }, 
    register: async (req, res) => {
        const { email, userName, password} = req.body
        console.log(email, userName, password)
        userModel.findOne({'userDetails.email': email}, (err, user) => {
            if(user){
                res.send({message: "User already registerd"})
            } else {
                const user = new userModel({
                    userDetails: {
                        email: email,
                        username: userName,
                        password: password,
                    },
                
                    sellingNormalProduct: [
      
                    ],
                
                    sellingCreativeProduct: [
                    ],
                
                    cart: {
                        products: [],
                        totalProducts: 0
                    },
                
                    bashboard : {
                        totalRevenue: 0,
                        currentOrders: 0,
                        totalOrder: 0,
                        totalCreativeOrder: 0,
                    }
                })
                user.save(err => {
                    if(err) {
                        res.send(err)
                    } else {
                        res.send( { message: "Successfully Registered, Please login now." })
                    }
                })
            }
        })
    }
}

module.exports = authCtrl;