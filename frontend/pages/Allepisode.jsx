import React, { useEffect, useState } from "react";
import "./Allepisode.css";
import { Link } from "react-router-dom";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        let response = await fetch(
          `${apiUrl}/api/episodes`
        );
        const data = await response.json();
        setEpisodes(data);
      } catch (err) {
        console.error("Error fetching episodes:", err);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div>
      <div className="jjk-tittle">
        <h4 style={{display:"flex", alignItems:"center"}}><Link style={{display:"flex", alignItems:"center"}} to="/"><svg className="angle--pJ1yZ angle--is-left--j9YOy icon left-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="angle-left-svg" aria-labelledby="angle-svg" aria-hidden="true" role="img"><title id="angle-svg">Previous</title><path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path></svg></Link>S1: JUJUTSU KAISEN</h4>
      </div>
      <div className="allepisode-container">
        {episodes.map((episode, index) => (
          <div key={index} className="episode-container">
            <video
              className="episode-thumbnail"
              poster={
                episode.thumbnail === "#"
                  ? require("../../assets/Video-Placeholder.jpg")
                  : episode.thumbnail
              }
              controls
            >
              <source
                src={episode.episodeSrc ? 'https://api.telegram.org/bot7753700943:AAHpqAonC_c-Z70j6gDoj7LM9gxkpAYrGkg/videos/jujutsukaisenepisode1.mp4 ' : "#"}
                type="video/mp4"
              />
            </video>
            <div className="episode-details">
              <h4>{episode.anime}</h4>
              <h2>
                S{episode.season} E{episode.episode}-{episode.title}
              </h2>
              <h4>
                {episode.subAvailable ? "Sub" : ""} |
                {episode.dubAvailable ? "Dub" : ""}
              </h4>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
