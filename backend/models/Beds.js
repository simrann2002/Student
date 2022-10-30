const mongoose = require("mongoose");

const BedSchema = new mongoose.Schema(
  {
   bedType:{
       type: String,
       required: true,
       default : ""
   },
   bedsavailable: {
       type :Number,
       required: true,
       default: 0

   },
   rent:{
     type: String,
     required:true
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beds", BedSchema);
