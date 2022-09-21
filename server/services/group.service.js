const { Group } = require("../models/group.model");

const createGroup = async (data) => {
  console.log("service: createGroup");

  const group = await Group.create(data);
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
