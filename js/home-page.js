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

const card = document.getElementById('audio-card');
const audio = document.getElementById('audio-player');

card.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
