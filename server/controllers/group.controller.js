const {
  createGroup,
  getAllGroups,
  getGroupById,
  deleteGroupById,
  updateGroupById,
} = require("../services/group.service");

const handleCreateGroup = async (req, res) => {
  console.log("controller: handleCreateGroup req.body:", req.body);

  try {
    const group = await createGroup(req.body);
    return res.json(group);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetAllGroups = async (req, res) => {
  try {
    const groups = await getAllGroups();
    return res.json(groups);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetGroupById = async (req, res) => {
  try {
    const group = await getGroupById(req.params.id);
    return res.json(group);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleDeleteGroupById = async (req, res) => {
  try {
    const group = await deleteGroupById(req.params.id);
    return res.json(group);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleUpdateGroupById = async (req, res) => {
  try {
    const group = await updateGroupById(req.params.id, req.body);
    return res.json(group);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  handleCreateGroup,
  handleGetAllGroups,
  handleGetGroupById,
  handleDeleteGroupById,
  handleUpdateGroupById,
};
