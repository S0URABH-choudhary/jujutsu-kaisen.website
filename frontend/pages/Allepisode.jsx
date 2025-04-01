import { useEffect, useState } from "react";
import "./allepisode.css";
import { useNavigate } from "react-router-dom";
import config from "../Adminpannel/config";

const AllEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    episodeloader();
  }, []);

  const episodeloader = async () => {
    try {
      const response = await fetch(`${config.API_URL}/api/episodes`);
      const data = await response.json();
      setEpisodes(data);
    } catch (err) {
      console.error("Error getting episodes:", err);
    }
  };

  return (
    <div className="all-episodes-page">
      <h4 className="title">S1: JUJUTSU KAISEN</h4>
      <div className="allepisode-container">
        {episodes.map((ep) => (
          <div key={ep.id} className="episode-container">
            <video className="episode-thumbnail" controls poster={ep.thumbnail === "#" ? "../../assets/Video-Placeholder.jpg" : ep.thumbnail}>
              <source src={ep.episodeSrc ? ep.episodeSrc : "#"} type="video/mp4" />
            </video>
            <div className="episode-details">
              <h4>{ep.anime}</h4>
              <h2>{`S${ep.season} E${ep.episode} - ${ep.title}`}</h2>
              <h4>{`${ep.subAvailable ? "Sub" : ""} | ${ep.dubAvailable ? "Dub" : ""}`}</h4>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEpisodes;
