const mongoose = require("mongoose");

const IssuesSchema = new mongoose.Schema(
  {
    userId:{
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    category: {
        type: String
    }
    ,
    issuetext:{
        type: String,
        max: 500
    },
    publically: {
        type: Boolean,
        default: false
    }
    ,
    isResolved:{
        type: Boolean,
        default: false
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
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issues", IssuesSchema);
