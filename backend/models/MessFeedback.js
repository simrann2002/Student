const mongoose = require("mongoose");

const MessfeedbackSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MessFeedback", MessfeedbackSchema);
