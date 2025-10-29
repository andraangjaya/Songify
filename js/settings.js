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

const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');
burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
