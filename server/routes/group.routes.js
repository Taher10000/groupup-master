const express = require("express");

const {
  handleCreateGroup,
  handleGetAllGroups,
  handleGetGroupById,
  handleDeleteGroupById,
  handleUpdateGroupById,
} = require("../controllers/group.controller");

const router = express.Router();

router.post("/", handleCreateGroup);
router.get("/:id", handleGetGroupById);
router.get("/", handleGetAllGroups);
router.delete("/:id", handleDeleteGroupById);
router.put("/:id", handleUpdateGroupById);

module.exports = { groupRouter: router };
