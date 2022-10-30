const mongoose = require("mongoose");

const HostelfeedbackSchema = new mongoose.Schema(
  {
   text:{
       type: String,
       required: true,
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("HostelFeedback", HostelfeedbackSchema);
