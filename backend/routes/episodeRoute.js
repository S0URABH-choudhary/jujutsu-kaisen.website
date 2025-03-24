import express from "express";
import { addEpisode, getEpisodes } from "../controllers/episodeController.js";

const router = express.Router();

router.post("/", addEpisode);
router.get("/", getEpisodes);

export default router;
