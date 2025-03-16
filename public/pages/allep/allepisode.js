const jujutsuKaisenEpisodes = [
  {
    id: 1,
    anime: "Jujutsu Kaisen",
    title: "Ryomen Sukuna",
    description: "Yuji Itadori, a high school student, eats a cursed object and gets dragged into the world of Jujutsu Sorcery.",
    episode: 1,
    episodeSrc: "../../assets/episode1.mp4",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "../../assets/thumbnail-1.jpg",
  },
  {
    id: 2,
    anime: "Jujutsu Kaisen",
    title: "For Myself",
    description: "Yuji joins Jujutsu Tech and meets Megumi and Nobara as they go on their first mission.",
    episode: 2,
    episodeSrc: "../../assets/episode2.mp4",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "../../assets/thumbnail-2.jpg"
  },
  {
    id: 3,
    anime: "Jujutsu Kaisen",
    title: "Girl of Steel",
    description: "The trio faces a dangerous cursed spirit, testing their abilities as Jujutsu Sorcerers.",
    episode: 3,
    episodeSrc: "../../assets/episode3.mp4",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "../../assets/thumbnail-3.jpg"
  },
  {
    id: 4,
    anime: "Jujutsu Kaisen",
    title: "Curse Womb Must Die",
    description: "Sukuna takes control of Yuji’s body, leading to an intense battle between him and Megumi.",
    episode: 4,
    episodeSrc: "../../assets/episode4.mp4",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "../../assets/thumbnail-4.jpg"
  },
  {
    id: 5,
    anime: "Jujutsu Kaisen",
    title: "A Curse Born",
    description: "The group faces a new curse, testing their teamwork and skills.",
    episode: 5,
    episodeSrc: "#",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 6,
    anime: "Jujutsu Kaisen",
    title: "After Rain",
    description: "The aftermath of the battle leaves Yuji questioning his strength.",
    episode: 6,
    episodeSrc: "#",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 7,
    anime: "Jujutsu Kaisen",
    title: "Assault",
    description: "Gojo faces off against a mysterious enemy.",
    episode: 7,
    episodeSrc: "#",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 8,
    anime: "Jujutsu Kaisen",
    title: "Boredom",
    description: "The Kyoto Sister School Exchange Event is about to begin.",
    episode: 8,
    episodeSrc: "#",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 9,
    anime: "Jujutsu Kaisen",
    title: "Young Fish and Reverse Punishment",
    description: "A battle erupts between cursed spirits and sorcerers.",
    episode: 9,
    episodeSrc: "#",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 10,
    anime: "Jujutsu Kaisen",
    title: "Idle Transfiguration",
    description: "Yuji and his allies face a new kind of curse user.",
    episode: 10,
    episodeSrc: "#",
    season: 1,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 11,
    anime: "Jujutsu Kaisen",
    title: "Narrow-Minded",
    description: "The Kyoto team plans their next move against Tokyo.",
    episode: 11,
    episodeSrc: "#",
    season: 2,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 12,
    anime: "Jujutsu Kaisen",
    title: "To You, Someday",
    description: "Yuji and Nobara show their growth in battle.",
    episode: 12,
    episodeSrc: "#",
    season: 2,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 13,
    anime: "Jujutsu Kaisen",
    title: "Tomorrow",
    description: "The battle reaches its climax with unexpected twists.",
    episode: 13,
    episodeSrc: "#",
    season: 2,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 14,
    anime: "Jujutsu Kaisen",
    title: "The Shibuya Incident",
    description: "A large-scale battle erupts in Shibuya.",
    episode: 14,
    episodeSrc: "#",
    season: 2,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 15,
    anime: "Jujutsu Kaisen",
    title: "Fight Back",
    description: "Yuji and Megumi must fight their way through Shibuya.",
    episode: 15,
    episodeSrc: "#",
    season: 2,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 16,
    anime: "Jujutsu Kaisen",
    title: "The Heart",
    description: "Allies and enemies clash in a high-stakes confrontation.",
    episode: 16,
    episodeSrc: "#",
    season: 2,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 17,
    anime: "Jujutsu Kaisen",
    title: "Thunderclap",
    description: "Gojo unleashes his full power in battle.",
    episode: 17,
    episodeSrc: "#",
    season: 2,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  },
  {
    id: 18,
    anime: "Jujutsu Kaisen",
    title: "Black Flash",
    description: "Yuji discovers a new technique in the heat of battle.",
    episode: 18,
    episodeSrc: "#",
    season: 2,
    subAvailable: true,
    dubAvailable: true,
    thumbnail: "#"
  }
];

console.log(jujutsuKaisenEpisodes);



  
  
  
  
let allepisodeContainer = document.getElementById("allepisode-container");

function episodeloader (){
  jujutsuKaisenEpisodes.map(episodes =>{
    console.log(episodes.anime)
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
}