const {
    createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById,
  } = require("../services/user.service");
  
  const handleCreateUser = async (req, res) => {
    console.log("controller: handleCreateUser req.body:", req.body);

    try {
        const createdUser  = await createUser(req.body);
        return res.json(createdUser);
    }
    catch(error) {
        console.log("HandleUser",error)
        return res.status(500).json({message: error.message})
    }
  
  };
  
  const handleGetAllUsers = async (req, res) => {
    try {
      const users = await getAllUsers();
      return res.json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetUserById = async (req, res) => {
    try {
      const user = await getUserById(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleDeleteUserById = async (req, res) => {
    try {
      const user = await deleteUserById(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleUpdateUserById = async (req, res) => {
    try {
      const user = await updateUserById(req.params.id, req.body);
      return res.json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  module.exports = {
    handleCreateUser,
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
  };
  