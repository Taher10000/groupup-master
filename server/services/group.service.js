const { Group } = require("../models/group.model");

const createGroup = async (data, creatorId) => {  //also pass in creatorId, might be better createGroup({...req.body, creatorId: req.params.creatorId})
  console.log("service: createGroup");
  data.creatorId = creatorId;
  const group = await Group.create(data);  //data need to include creatorId createGroup({...req.body, creatorId: req.params.creatorId})
  return group;
};

const getAllGroups = async () => {
  const groups = await Group.find();
  return groups;
};

const getGroupById = async (id) => {
  const group = await Group.findById(id);
  return group;
};

const deleteGroupById = async (id) => {
  const group = await Group.findByIdAndDelete(id);
  return group;
};

const updateGroupById = async (id, data) => {
  const group = await Group.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return group;
};

const createManyGroups = async (documents) => {
  const createPromises = documents.map((document) => createGroup(document));
  return Promise.allSettled(createPromises);
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  deleteGroupById,
  updateGroupById,
  createManyGroups,
};
