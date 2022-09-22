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

router.post("/", handleCreateUser);
router.get("/:id", handleGetUserById);
router.get("/", handleGetAllUsers);
router.delete("/:id", handleDeleteUserById);
router.put("/:id", handleUpdateUserById);

module.exports = { userRouter: router };