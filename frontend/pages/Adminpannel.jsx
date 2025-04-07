import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Admin.module.css";
import { useAuth0 } from "@auth0/auth0-react";


const AdminPanel = () => {
  const{ user, isAuthenticated , logout} = useAuth0();
  const [isEpisodeFormOpen, setEpisodeFormOpen] = useState(false);
  const [isDateFormOpen, setDateFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    anime: "",
    title: "",
    episode: "",
    season: "",
    episodeSrc: "",
    thumbnail: "",
    subAvailable: false,
    dubAvailable: false,
    description: "",
  });
  const [releaseDate, setReleaseDate] = useState("");



  const toggleForm = (form) => {
    if (form === "episode") setEpisodeFormOpen(!isEpisodeFormOpen);
    if (form === "date") setDateFormOpen(!isDateFormOpen);
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data:", formData);
      const App_URL = import.meta.env.VITE_API_URL;
      let response = await fetch(`${App_URL}/api/episodes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      let result = await response.json();
      if (response.ok) alert("Episode added successfully!");
      else alert("Error: " + result.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDateSubmit = async (e) => {
    e.preventDefault();
    if (!releaseDate) return alert("Date cannot be empty");

    const dateObj = new Date(releaseDate);
    const data = { date: dateObj.getDate(), month: dateObj.toLocaleString('default', { month: 'short' }) };

    try {
      const App_URL = import.meta.env.VITE_API_URL;
      let response = await fetch(`${App_URL}/api/setdate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      let result = await response.json();
      if (response.ok) alert("Date is set successfully");
      else alert("Error: " + result.message);
    } catch (error) {
      console.error("Error submitting date:", error);
    }
  };

  return (
    <main className={styles.main}>
       
      {isEpisodeFormOpen && (
        <form className={styles.addepisodeForm} onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faXmark} className={styles.close} onClick={() => toggleForm("episode")} />
          <input id="anime" type="text" placeholder="Anime's name" onChange={handleInputChange} />
          <input id="title" type="text" placeholder="Episode's name" onChange={handleInputChange} />
          <input id="episode" type="text" placeholder="Episode number" onChange={handleInputChange} />
          <input id="season" type="text" placeholder="Season number" onChange={handleInputChange} />
          <input id="episodeSrc" type="text" placeholder="Video link" onChange={handleInputChange} />
          <input id="thumbnail" type="text" placeholder="Thumbnail link" onChange={handleInputChange} />
          <label style={{color:"black"}}>Sub Available <input id="subAvailable" type="checkbox" onChange={handleInputChange} /></label>
          <label style={{color:"black"}}>Dub Available <input id="dubAvailable" type="checkbox" onChange={handleInputChange} /></label>
          <textarea className={styles.discription} id="description" placeholder="Description" onChange={handleInputChange}></textarea>
          <button className={styles.submitButton} type="submit">Upload</button>
        </form>
      )}
      {isDateFormOpen && (
        <form className={styles.dateForm} onSubmit={handleDateSubmit}>
        <FontAwesomeIcon icon={faXmark} className="close" onClick={() => toggleForm("date")}/>
          <h3>Set Date:</h3>
          <input type="date" onChange={(e) => setReleaseDate(e.target.value)} />
          <button type="submit">Set Date</button>
        </form>
      )}
      <nav className={styles.nav}>
        <a href="#">Welcome {isAuthenticated? user.name: ""}</a>
        <a href="#"><i className="fa-solid fa-right-from-bracket"></i></a>
        <button onClick={()=>{ logout({ logoutParams: { returnTo: window.location.origin } })}}>Logout</button>
      </nav>
      <div id="controll-container">
        <div className={styles.controlls}>
          <button className={styles.buttonControll} onClick={() => toggleForm("episode")}>Add Episode</button>
          <button className={styles.buttonControll} onClick={() => toggleForm("date")}>Update Date</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>OPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Maria Anders</td>
              <td>
              <FontAwesomeIcon className={styles.editIcon} icon={faPen} />
              <FontAwesomeIcon className={styles.deleteIcon} icon={faTrash} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminPanel;
