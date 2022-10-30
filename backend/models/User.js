const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      max: 10,
    },
    created: {
      type: Date,
      default: Date.now,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    hostel_stu: {
      type: Boolean,
      default: false,
    },
    room_no: {
      type: Number,
    },
    branch: {
      type: String,
    },
    year: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
