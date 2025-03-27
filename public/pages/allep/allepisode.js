 
let allepisodeContainer = document.getElementById("allepisode-container");

async function  episodeloader (){
  try{
    let response = await fetch("https://jujutsu-kaisen-website.onrender.com/api/episodes/api/episodes");
    const data = await response.json();
    data.map(episodes =>{
      let episode = document.createElement("div");
      episode.id ="episode-container";
      let source = document.createElement("source")
      source.src = episodes.episodeSrc? episodes.episodeSrc : "#";
      source.type = "video/mp4"
      let episodeThumbnail = document.createElement("video")
      episodeThumbnail.poster= episodes.thumbnail=="#"? "../../assets/Video-Placeholder.jpg":episodes.thumbnail;
      episodeThumbnail.classList = "episode-thumbnail";
      episodeThumbnail.controls = true;
      let animename = document.createElement("h4");
      animename.innerText = episodes.anime;
      let episodename = document.createElement("h2");
      episodename.innerText = `S${episodes.season} E${episodes.episode}-${episodes.title}`;
      let subdub = document.createElement("h4");
      subdub.innerText = `${episodes.subAvailable?"Sub":""} | ${episodes.dubAvailable?"Dub":""}`;
      let ellipsicon = document.createElement("i");
      ellipsicon.classList = "fa-solid fa-ellipsis-vertical";
      let episodedetails = document.createElement("div");
      episodedetails.classList="episode-details";
      allepisodeContainer.appendChild(episode);
      episodeThumbnail.appendChild(source)
      episode.appendChild(episodeThumbnail);
      episodedetails.appendChild(animename);
      episodedetails.appendChild(episodename);
      episodedetails.appendChild(subdub);
      episodedetails.appendChild(ellipsicon);
      episode.appendChild(episodedetails);
    })
  }catch(err){
    console.error("error", err)
  }
}