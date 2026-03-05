document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const imgElement = this.querySelector("img");
    const newImageSrc = imgElement.src;
    document.getElementById("displayedImage").src = newImageSrc;
  });
});

const upcomingGames = [
  {
    title: "Call Of Duty Black Ops 6",
    img: "./imagenes/imagenesjuegospro/duty6.jpg",
  },
  { title: "Silent Hill 2", img: "./imagenes/imagenesjuegospro/silent.webp" },
  {
    title: "Assasins Creed Shadows",
    img: "../imagenes/imagenesjuegospro/asassin",
  },
  { title: "Until Dawn", img: "./imagenes/imagenesjuegospro/until" },
  {
    title: "Black Myth Wukong",
    img: "../imagenes/imagenesjuegospro/wukon.jpg",
  },
  { title: "XDEFIANT", img: "./imagenes/imagenesjuegospro/xde.jpg" },
];

const availableGames = [
  { title: "Fc 24", img: "./imagenes/imagenesdisponibles/fc-24-scaled.webp" },
  {
    title: "God Of War Ragnarok",
    img: "./imagenes/imagenesdisponibles/KYIGZ47NUNAPDLCIAQPQIUDWS4.avif",
  },
  { title: "Spiderman 2", img: "./imagenes/imagenesdisponibles/spiderman2" },
  { title: "Las Of Us", img: "./imagenes/imagenesdisponibles/lastofus" },
  { title: "Rise Of Ronin", img: "./imagenes/imagenesdisponibles/rise" },
  {
    title: "Call Of Duty Modern Warfare lll",
    img: "./imagenes/imagenesdisponibles/callofduty",
  },
];

const gameContainer = document.getElementById("gameContainer");
const gameToggle = document.getElementById("gameToggle");

function renderGames(games) {
  gameContainer.innerHTML = "";
  games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card", "card");

    gameCard.innerHTML = `
        <img src="${game.img}" class="card-img-top" alt="${game.title}">
        <div class="card-body">
          <h5 class="card-title">${game.title}</h5>
        </div>
      `;
    gameContainer.appendChild(gameCard);
  });
}

gameToggle.addEventListener("change", (event) => {
  if (event.target.checked) {
    renderGames(upcomingGames);
  } else {
    renderGames(availableGames);
  }
});

renderGames(availableGames);

document.getElementById("gameToggle").addEventListener("click", function () {
  const titleElement = document.getElementById("titulo1");
  if (titleElement.innerText === "Proximamente") {
    titleElement.innerText = "Nuevos lanzamientos";
  } else {
    titleElement.innerText = "Proximamente";
  }
});
