const router = require("express").Router();
const Bed = require("../models/Beds")

router.post("/", async(req,res)=>{
    try{
        const newBed = new Bed(req.body);
        const bed = await newBed.save();
        res.status(200).json(bed);
    }
    catch(err){
        console.log(err);
    }
})


router.get("/", async(req,res)=>{
    try{
        const beds = await Bed.find();
        res.status(200).json(beds);
    }
    catch(err){
        console.log(err);
    }
})


router.put("/:id", async(req,res)=>{
    try{
        const bed = await Bed.findById(req.params.id);
        await bed.updateOne({$set: req.body})
        res.status(200).json("Data Updated Successfully")
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
