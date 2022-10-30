
const router = require("express").Router();
const Messf = require("../models/MessFeedback")

router.post("/", async(req,res)=>{
    try{
        const newHostelf = new Messf(req.body);
        const hostelf = await newHostelf.save();
        res.status(200).json(hostelf);
    }
    catch(err){
        console.log(err);
    }
})

router.get("/", async(req,res)=>{
    try{
        const hostelf = await Messf.find();
        res.status(200).json(hostelf);
    }
    catch(err){
        console.log(err);
    }
})

// router.get("/:id", async(req,res)=>{
//     try{
//         const issues = await Issue.findById(req.params.id);
//         res.status(200).json(issues);
//     }
//     catch(err){
//         console.log(err);
//     }
// })

// router.put("/:id", async(req,res)=>{
//     try{
//         const issue = await Issue.findById(req.params.id);
//         await issue.updateOne({$set: req.body})
//         res.status(200).json("Issue Updated Successfully")
//     }catch(err){
//         console.log(err);
//     }
// })
router.delete("/:id", async(req,res)=>{
    try{
        await Messf.findByIdAndDelete(req.params.id);
        console.log("Feedback deleted successfully")
        res.status(200).json("Deleted successfully")
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
