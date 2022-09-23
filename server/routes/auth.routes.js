const express = require("express");
const {User} = require('../models/user.model');
const bcrypt = require("bcrypt");
const Joi = require("joi");

const authRouter = express.Router();
authRouter.post("/", async (req, res)=>{
    try {
        const {error} = validate(req.body);
        if(error){
            return res.status(400).send({message: "this error" + error.details[0].message});
        }
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(401).send({message: "Invalid email or password"})
        }
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if(!validPassword){
            return res.status(401).send({message: "Invalid email or password"})
        }
        const token = user.generateAuthToken();
        res.status(200).send({token: token, message:"Logged in successfully"})
        console.log(token);

    }
    catch(error) {
        res.status(500).send({message: error.message})

    }
})
const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
}





module.exports = { authRouter: authRouter };