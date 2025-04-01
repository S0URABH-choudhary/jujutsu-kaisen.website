
// change language
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});

async function loaddate(){
    const Releasedate = document.getElementById("date")
    const Releasemonth = document.getElementById("month")
try{
    const response = await fetch(`${CONFIG.API_URL}/api/getdate`);
    const data = await response.json();
    Releasedate.innerText = data.date;
    Releasemonth.innerText = data.month;

}catch(err){
    console.error("error getting date :" ,err)
}
}

function showallepisodes() {
    location.href="./pages/allep/allepisode.html"  ;  
}

// for redirecting user to another page
// setting up auth0
