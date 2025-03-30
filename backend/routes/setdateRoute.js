import express from "express";
import ReleaseDate from "../models/Date.js";

const router = express.Router();

router.post("/setdate",async(req,res)=>{
    try {
        const { date, month } = req.body;
        
        if (!date || !month) {
            return res.status(400).json({ message: "Date and month are required!" });
        }

        await ReleaseDate.deleteMany({});

        const newDate = new ReleaseDate({ date, month });
        await newDate.save();

        res.status(201).json({ message: "Date set successfully!", data: newDate });
    } catch (error) {
        console.error("Error setting date:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

});


router.get("/getdate", async (req, res)=>{
    try{
        const date = await ReleaseDate.findOne();
        res.json(date);
    }catch(err){
        console.error("error fetching date :",err)
    }
})


export default router;