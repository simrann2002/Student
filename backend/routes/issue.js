const router = require("express").Router();
const Issue = require("../models/Issues")

router.post("/", async(req,res)=>{
    try{
        const newIssue = new Issue(req.body);
        const issue = await newIssue.save();
        res.status(200).json(issue);
    }
    catch(err){
        console.log(err);
    }
})

router.get("/", async(req,res)=>{
    try{
        const issues = await Issue.find();
        res.status(200).json(issues);
    }
    catch(err){
        console.log(err);
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const issues = await Issue.findById(req.params.id);
        res.status(200).json(issues);
    }
    catch(err){
        console.log(err);
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const issue = await Issue.findById(req.params.id);
        await issue.updateOne({$set: req.body})
        res.status(200).json("Issue Updated Successfully")
    }catch(err){
        console.log(err);
    }
})
router.delete("/:id", async(req,res)=>{
    try{
        await Issue.findByIdAndDelete(req.params.id);
        console.log("Issue deleted successfully")
        res.status(200).json("Deleted successfully")
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
