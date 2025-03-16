// change language
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});

function showallepisodes() {
    location.href="./pages/allep/allepisode.html"  ;     ;
}

// login and register

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");

  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  const closeButtons = document.querySelectorAll(".close");

  loginBtn.addEventListener("click", () => {
      loginModal.style.display = "flex";
  });

  registerBtn.addEventListener("click", () => {
      registerModal.style.display = "flex";
  });

  closeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
          const modalId = btn.getAttribute("data-close");
          document.getElementById(modalId).style.display = "none";
      });
  });

  window.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal")) {
          event.target.style.display = "none";
      }
  });
});

// for redirecting user to another page


