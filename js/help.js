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

document.addEventListener("DOMContentLoaded", () => {
  const allContents = document.querySelectorAll('.section-content');
  const allArrows = document.querySelectorAll('.arrow');

  allContents.forEach((c, index) => {
    c.style.display = 'none'; // keep them hidden
    allArrows[index].textContent = '▼'; // reset arrows
    allArrows[index].style.transform = 'rotate(0deg)';
  });
});

function toggleSection(sectionId) {
  const content = document.getElementById(sectionId + '-content');
  const arrow = document.getElementById(sectionId + '-arrow');
  const section = content.parentElement;

  // Close all other dropdowns
  const allContents = document.querySelectorAll('.section-content');
  const allArrows = document.querySelectorAll('.arrow');

  allContents.forEach((c, index) => {
    if (c !== content) {
      c.style.display = 'none';
      allArrows[index].textContent = '▼';
      allArrows[index].style.transform = 'rotate(0deg)';
    }
  });

  // Toggle current dropdown
  if (content.style.display === 'block') {
    content.style.display = 'none';
    arrow.textContent = '▼';
    arrow.style.transform = 'rotate(0deg)';

    // Scroll into view even when closing
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  } else {
    content.style.display = 'block';
    arrow.textContent = '▲';
    arrow.style.transform = 'rotate(180deg)';

    // Scroll into view when opening
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    }, 200);
  }
}

const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');
burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
