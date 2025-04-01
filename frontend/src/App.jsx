import { useEffect, useState } from "react";
import "./App.css";
import sukunaImage from "./assets/Sukuna (1).jpeg";
import placeholderImage from "./assets/placeholder-img.png";
import sukunaPng from "./assets/sukuna-png.png";

const App = () => {
  const [profilePic, setProfilePic] = useState(placeholderImage);
  const [date, setDate] = useState(27);
  const [month, setMonth] = useState("FEB");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    loaddate();
  }, []);

  const loaddate = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/getdate`);
      const data = await response.json();
      setDate(data.date);
      setMonth(data.month);
    } catch (err) {
      console.error("Error getting date:", err);
    }
  };

  const changeProfileImage = () => {
    setProfilePic(sukunaImage);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "RU" : "EN"));
  };

  const showAllEpisodes = () => {
    window.location.href = "./pages/allep/allepisode.html";
  };

  return (
    <div className="main">
      <nav>
        <a href="#">anime</a>
        <a href="#">manga</a>
        <a href="#">merch</a>
      </nav>
      <div className="hero">
        <div className="col1">
          <div className="col1-top">
            <div className="album-container">
              <img src={sukunaImage} alt="album" className="album-img" />
            </div>
            <div className="profil-container">
              <div className="profile">
                <div className="profile-image">
                  <img src={profilePic} alt="profile" className="profile-pic" onClick={changeProfileImage} />
                </div>
                <div className="login-form-button-container">
                  {isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                  ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col1-bottom">
            <div className="socialmedia">
              <div className="media-button">
                <div className="linkedin"><i className="fa-brands fa-linkedin"></i></div>
                <div className="github"><i className="fa-brands fa-square-github"></i></div>
              </div>
              <div className="language-button" onClick={toggleLanguage}>
                <div className={`toggle-button ${language === "RU" ? "active" : ""}`}>
                  <span className="toggle-label top">EN</span>
                  <div className="toggle-circle"></div>
                  <span className="toggle-label bottom">RU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="col2-top-background">
            <div className="col2-top"></div>
          </div>
          <div className="col2-bottom">
            <div className="merch-container">
              <h1 style={{ fontSize: "1.5rem", color: "white" }}>MERCH</h1>
              <div className="merch-image"></div>
              <div className="buy-merch-button">buy</div>
            </div>
          </div>
        </div>
        <div className="col3">
          <h1>呪術廻戦</h1>
          <div className="release-date">
            <div className="heading">NEXT EPISODE</div>
            <div className="date">{date}</div>
            <div className="month">{month}</div>
          </div>
          <div className="episodes">
            <div className="continue-btn-container">
              <button>CONTINUE</button>
            </div>
            <div className="episode-container"><div className="episode"></div></div>
            <div className="all-ep-button-container" onClick={showAllEpisodes}>
              <link to="/allep">ALL EPISODES</link>
            </div>
          </div>
          <div className="col3-container">
            <img src={sukunaPng} alt="sukuna" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;