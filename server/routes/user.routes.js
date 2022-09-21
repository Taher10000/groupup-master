const express = require("express");
const {User, validate} = require('../models/user.model');
const bcrypt = require("bcrypt");

const userRouter = express.Router();
userRouter.post("/", async (req, res)=>{
    try {
        const {error} = validate(req.body);
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        const user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(409).send({message: "User with given email already exists"})
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));  //ADD in .env file SALT =10 .env file is supposed to be same level as server folder
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        
        await new User({...req.body, password: hashPassword}).save();
        res.status(201).send({message:"User created successfully"})
        // const user = await createUser(req.body);
        // res.send(user)

    }
    catch(error) {
        console.log(error)
        res.status(500).send({message: error.message})
        

    }
})

const existingUser = await findUserByEmail(req.body.email);

if (existingUser !== null) {
    return res.status(409).json({message: "email taken"});
}

const createdUser = await createUser(req.body);
res.json(createdUser);



module.exports = { userRouter: userRouter };