const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function switchPopup(closeId, openId) {
  closePopup(closeId);
  openPopup(openId);
}

function hideAuthButton() {
  document.getElementById("authBtn").style.display = "none";
}

function showSuccess(message) {
  document.getElementById("successMessage").innerText = message;
  openPopup("successPopup");
}

// Login form
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  closePopup("loginPopup");
  hideAuthButton();
  showSuccess("Login Successful!");
});

// Signup form
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  closePopup("signupPopup");
  hideAuthButton();
  showSuccess("Sign Up Successful!");
});


function searchSongs() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  let found = false; // penanda apakah ada hasil yang cocok

  cards.forEach(card => {
    const title = card.querySelector('.card-title').innerText.toLowerCase();
    const artist = card.querySelector('.card-desc').innerText.toLowerCase();
    if (title.includes(input) || artist.includes(input)) {
      card.style.display = '';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });
}

const clickableCards = document.querySelectorAll('.card, .discover-more-cards, .universal-card-img-style');
const audio = document.getElementById('audio-player');

clickableCards.forEach(card => {
  card.addEventListener('click', () => {
    const src = card.dataset.audio;
    if (audio.src.includes(src)) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      audio.src = src;
      audio.play();
    }
  });
});
