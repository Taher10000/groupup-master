const { User, validate } = require("../models/user.model");
const bcrypt = require("bcrypt");

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

const createUser = async (data) => {
  console.log("service: createUser");
  const { error } = validate(data);
  if (error) {
    throw error;
  }
  const existingUser = await getUserByEmail(data.email);

  if (existingUser !== null) {
    throw new Error("Email taken.");
  }
  const salt = await bcrypt.genSalt(Number(process.env.SALT)); //ADD in .env file SALT =10 .env file is supposed to be same level as server folder
  const hashPassword = await bcrypt.hash(data.password, salt);

  //   const createdUser = await new User({ ...data, password: hashPassword }).save();

  const createdUser = await User.create({ ...data, password: hashPassword });
  return createdUser;
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const deleteUserById = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};

const updateUserById = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
  getUserByEmail,
};
