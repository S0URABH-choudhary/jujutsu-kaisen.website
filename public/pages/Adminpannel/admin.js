let openclose = (elem) => {
    let formid = document.getElementById(elem)
    if (getComputedStyle(formid).display == "grid") {
        formid.style.display = "none";
    } else {
        formid.style.display = "grid";
    }
};

let form = document.getElementById("addepisode-form");

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
        let response = await fetch(`${CONFIG.API_URL}/api/episodes`, {
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
    }
}


);


let dateform = document.getElementById("dateform");

dateform.addEventListener("submit", async (event) => {
    event.preventDefault();
    let releasedate = document.getElementById("episode-release-date").value;
    if (releasedate) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let dateobject = new Date(releasedate);
        const date = dateobject.getDate();
        const month = monthNames[dateobject.getMonth()];
        
        const data = {date, month}

        try{
            let response = await fetch(`${CONFIG.API_URL}/api/setdate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            let result = await response.json();
            console.log("server responce:" ,result);

            if(response.ok){
                alert("Date is set successfully")
                dateform.reset()
            } else {
                alert("Error: " + result.message);
            }     

        }catch(error){
            console.error("Error submiting form:" ,error)

        }

    }else{
        alert("date cannot be empty")
    }
});

