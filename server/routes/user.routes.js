const express = require("express");
const {User, validate} = require('../models/user.model');
const bcrypt = require("bcrypt");

const {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleUpdateUserById,
} = require("../controllers/user.controller");

const router = express.Router();

// router.post("/", async (req, res)=>{
//     try {
//         const {error} = validate(req.body);
//         if(error){
//             return res.status(400).send({message: error.details[0].message});
//         }
//         const user = await User.findOne({email:req.body.email});
//         if(user){
//             return res.status(409).send({message: "User with given email already exists"})
//         }
//         const salt = await bcrypt.genSalt(Number(process.env.SALT));  //ADD in .env file SALT =10 .env file is supposed to be same level as server folder
//         const hashPassword = await bcrypt.hash(req.body.password, salt);
        
//         await new User({...req.body, password: hashPassword}).save();
//         res.status(201).send({message: req.body})
//         const newUser = await handleCreateUser(req.body);
//         res.send(newUser)

//     }
//     catch(error) {
//         console.log(error)
//         res.status(500).send({message: error.message})
        

//     }
// })

router.post("/", handleCreateUser);
router.get("/:id", handleGetUserById);
router.get("/", handleGetAllUsers);
router.delete("/:id", handleDeleteUserById);
router.put("/:id", handleUpdateUserById);

module.exports = { userRouter: router };











// const express = require("express");
// const {User, validate} = require('../models/user.model');
// const bcrypt = require("bcrypt");

// const userRouter = express.Router();
// userRouter.post("/", async (req, res)=>{
//     try {
//         const {error} = validate(req.body);
//         if(error){
//             return res.status(400).send({message: error.details[0].message});
//         }
//         const user = await User.findOne({email:req.body.email});
//         if(user){
//             return res.status(409).send({message: "User with given email already exists"})
//         }
//         const salt = await bcrypt.genSalt(Number(process.env.SALT));  //ADD in .env file SALT =10 .env file is supposed to be same level as server folder
//         const hashPassword = await bcrypt.hash(req.body.password, salt);
        
//         await new User({...req.body, password: hashPassword}).save();
//         res.status(201).send({message:"User created successfully"})
//         const newUser = await createUser(req.body);
//         res.send(newUser)

//     }
//     catch(error) {
//         console.log(error)
//         res.status(500).send({message: error.message})
        

//     }
// })


// module.exports = { userRouter: userRouter };