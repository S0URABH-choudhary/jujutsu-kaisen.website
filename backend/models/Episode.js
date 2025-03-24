import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema(
    {
        anime: { type: String, required: true },
        title: { type: String, required: true },
        episode: { type: String, required: true },
        season: { type: String, required: true },
        episodeSrc: { type: String, required: true },
        thumbnail: { type: String, required: true },
        subAvailable: { type: Boolean, default: false },
        dubAvailable: { type: Boolean, default: false },
        description: { type: String, required: true },
    },
    { timestamps: true }
);

const Episode = mongoose.model("Episode", episodeSchema);
export default Episode;
