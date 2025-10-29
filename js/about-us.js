const team = [
  {
    name: "Andra Angjaya",
    role: "Web Developer",
    image: "/img/Andra.jpeg"
  },
  {
    name: "Muhammad Yusuf",
    role: "UI/UX Designer",
    image: "/img/Aji.jpeg"
  },
  {
    name: "Muhammad Faiz",
    role: "Web Developer",
    image: "/img/Faiz.jpeg"
  },
  {
    name: "Zaidan Fakhri",
    role: "Web Developer",
    image: "/img/Zaidan.jpeg"
  },
  {
    name: "Fachri El Kadhafi",
    role: "Web Developer",
    image: "/img/Fachri.jpeg"
  },
  {
    name: "Zuyyin Kesha",
    role: "Web Developer",
    image: "/img/Zuyyin.jpeg"
  }
];

const container = document.getElementById('team-container');

const cardsContainer = document.createElement('div');
cardsContainer.classList.add('about-us-cards-container');
container.appendChild(cardsContainer);

team.forEach(member => {
  const card = document.createElement('div');
  card.classList.add('about-us-card');
  card.style.backgroundImage = `url('${member.image}')`;

  card.innerHTML = `
    <h2>${member.name}</h2>
    <h2 class="role-style">${member.role}</h2>
  `;

  cardsContainer.appendChild(card);
});
