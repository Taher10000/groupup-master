const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    groupType: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    groupDate: {
      type: Date,
      required: [true, "{PATH} is required."],
    },
    location: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    locLink: {
      type: String,
      required: [false],
    },
    desc: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    src: {
      type: String,
      required: [false],
    },
    creator: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    price: {
      type: Number,
      required: [false],
    },
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", GroupSchema);

module.exports = { Group: Group };
