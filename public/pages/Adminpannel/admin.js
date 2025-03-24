


let openclose = (elem) => {
    let formid = document.getElementById(elem)
    if(getComputedStyle(formid).display == "grid"){
        formid.style.display = "none";
    }else{
        formid.style.display = "grid";
    }
}

let form = document.getElementById("addepisode-form") 

form.addEventListener("submit", async function (event) {
    event.preventDefault(); 

    let formData = {
        anime: document.getElementById("anime-name").value,
        title: document.getElementById("episode-name").value,
        episode: document.getElementById("episode-number").value,
        season: document.getElementById("season-number").value,
        episodeSrc: document.getElementById("episode-link").value,
        thumbnail: document.getElementById("thumbnail-link").value,
        subAvailable: document.getElementById("sub").checked, 
        dubAvailable: document.getElementById("dub").checked,
        description: document.getElementById("discription").value,
    };
    try {
        let response = await fetch("http://localhost:5000/api/episodes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        console.log("Server response:", result);

        if (response.ok) {
            alert("Episode added successfully!");
            form.reset();
        } else {
            alert("Error: " + result.message);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }}

    
);
