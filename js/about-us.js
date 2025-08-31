const team = [
  {
    name: "Andra Angjaya",
    role: "Web Developer",
    image: "https://plus.unsplash.com/premium_photo-1682094917716-03b5d476060a?q=80&w=800"
  },
  {
    name: "Jane Doe",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800"
  },
  {
    name: "John Smith",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800"
  },
  {
    name: "John Smith",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800"
  },
  {
    name: "John Smith",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800"
  },
  {
    name: "John Smith",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800"
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
