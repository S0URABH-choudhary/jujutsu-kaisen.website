import mongoose from "mongoose";

const dateSchema = new mongoose.Schema({
    date: Number,
    month: String
});

const ReleaseDate = mongoose.model("Date", dateSchema);

export default ReleaseDate;