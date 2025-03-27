import mongoose from "mongoose";

const dateSchema = new mongoose.Schema({
    date: Number,
    month: String
});

const DateModel = mongoose.model("Date", dateSchema);

module.exports =  DateModel;