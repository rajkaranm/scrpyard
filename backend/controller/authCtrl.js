const userModel = require('../models/userModel');

const authCtrl = {
    login: async (req, res) => {
        const { email, password} = req.body
        userModel.findOne({ 'userDetails.username': email}, (err, user) => {
            if(user){
                if(password === user.password ) {
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
        const { email, password} = req.body
        userModel.findOne({'userDetails.email': email}, (err, user) => {
            if(user){
                res.send({message: "User already registerd"})
            } else {
                const user = new userModel({
                    email,
                    password
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