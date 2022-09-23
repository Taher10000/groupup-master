const mongoose = require("mongoose");
const { userRouter } = require("../routes/user.routes");

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
<<<<<<< HEAD
    },
    // createrToken: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User'
    // }
  },
=======
    }, 
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true],
      ref: "User"
      //embeded document //when i do get i need to understand how to get user thru id //logged in user id.
    }
  },   
>>>>>>> dad6fe105d97a262b1fa1d5cb80ad43a73b40af7
  { timestamps: true }
);
// 

const Group = mongoose.model("Group", GroupSchema);

module.exports = { Group: Group };
