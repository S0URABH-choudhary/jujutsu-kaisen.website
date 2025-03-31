
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

auth0.createAuth0Client({
  domain: CONFIG.domain,
  clientId: CONFIG.clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: "https://auth-91659.us.auth0.com/userinfo", // Ensure correct audience
    scope: "openid profile email"
  }
}).then(async (auth0Client) => {
  try {
    // Handle the callback if returning from login
    if (location.search.includes("state=") && 
        (location.search.includes("code=") || location.search.includes("error="))) {
      await auth0Client.handleRedirectCallback();
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Function to check authentication status
    async function checkAuth() {
      const isAuthenticated = await auth0Client.isAuthenticated();
      const loginButton = document.getElementById("loginBtn");
      const logoutButton = document.getElementById("logoutBtn");

      if (isAuthenticated) {
        const userProfile = await auth0Client.getUser();
        console.log("✅ User is authenticated", userProfile);

        loginButton.style.display = "none";
        logoutButton.style.display = "block";
      } else {
        console.log("User is not authenticated");

        try {
          await auth0Client.getTokenSilently(); // Attempt silent authentication
          return checkAuth(); // Retry authentication check
        } catch (error) {
          console.error( error);
        }

        loginButton.style.display = "none";
        logoutButton.style.display = "block";
      }
    }

    // Initial auth check
    await checkAuth();

    // Event listeners for login/logout
    document.getElementById("loginBtn").addEventListener("click", async (e) => {
      e.preventDefault();
      await auth0Client.loginWithRedirect();
    });

    document.getElementById("logoutBtn").addEventListener("click", async (e) => {
      e.preventDefault();
      await auth0Client.logout({ logoutParams: { returnTo: window.location.origin } });
    });

  } catch (error) {
    console.error("Auth0 Error:", error);
  }
});
