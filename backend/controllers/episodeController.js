import Episode from "../models/Episode.js";

// @desc    Add a new episode
// @route   POST /api/episodes
// @access  Public
export const addEpisode = async (req, res) => {
    try {
        const newEpisode = new Episode(req.body);
        await newEpisode.save();
        res.status(201).json({ message: "Episode added successfully!", episode: newEpisode });
    } catch (error) {
        console.error("❌ Error saving episode:", error);
        res.status(500).json({ message: "Server error. Could not save episode." });
    }
};

// @desc    Get all episodes
// @route   GET /api/episodes
// @access  Public
export const getEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.find();
        res.json(episodes);
    } catch (error) {
        console.error("❌ Error fetching episodes:", error);
        res.status(500).json({ message: "Server error. Could not fetch episodes." });
    }
};
