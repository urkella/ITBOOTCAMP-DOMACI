// SpaceX API
const API = "https://api.spacexdata.com/v3";

// SpaceX name
let SPACEX_NAME = "";

// Selectors
var popup = document.getElementById("popup");
var popupClose = document.getElementById("popup-close");
var popupInner = document.getElementById("popup-content");
var shipsButton = document.getElementById("ships");
var launchesButton = document.getElementById("launches");
var heading = document.createElement("h1");

// Listeners
shipsButton.addEventListener("click", getShips);
launchesButton.addEventListener("click", getLaunches);
popupClose.addEventListener("click", closePopup);

// Close popup
function closePopup() {
  popup.classList.remove("opened");
  popupInner.innerHTML = "";
}

function getShips() {
  popup.classList.add("opened");

  getShipsFromAPI(); // Call the API

  // Apply heading
  heading.innerHTML = `${SPACEX_NAME} Ships`;
  popupInner.prepend(heading);
}

function getLaunches() {
  popup.classList.add("opened");

  getLaunchesFromAPI(); // Call the API

  // Apply heading
  heading.innerHTML = `${SPACEX_NAME} Launches`;
  popupInner.prepend(heading);
}

// Handle API responses - SHIPS, LAUNCHES and INFO
function getShipsFromAPI() {
  axios
    .get(`${API}/ships`)
    .then((response) => {
      const list = document.createElement("ul");

      response.data.map((ship) => {
        const item = document.createElement("li");
        item.setAttribute("id", ship.ship_id);
        item.innerHTML = ship.ship_name;

        list.prepend(item);
      });

      popupInner.append(list);
    })
    .catch((error) => console.error(error));
}

function getLaunchesFromAPI() {
  axios
    .get(`${API}/launches`)
    .then((response) => {
      const list = document.createElement("ul");

      response.data.map((launch) => {
        const item = document.createElement("li");
        item.setAttribute("id", launch.flight_number);
        item.innerHTML = `<b>${launch.mission_name}</b> launched on <b>${launch.launch_year}</b>`;

        list.prepend(item);
      });

      popupInner.append(list);
    })
    .catch((error) => console.error(error));
}

function getInfoFromAPI() {
  axios
    .get(`${API}/info`)
    .then((response) => {
      const name = response.data.name;
      SPACEX_NAME = name;
    })
    .catch((error) => console.error(error));
}

// Run the SpaceX INFO API
getInfoFromAPI();

// Particles animation
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "repulse" },
      onhover: {
        enable: true,
        mode: "bubble",
        parallax: { enable: false, force: 2, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      bubble: { distance: 200, duration: 2, opacity: 0, size: 0, speed: 3 },
      grab: { distance: 400, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 400, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 600 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: true,
      speed: 0.3,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 600 },
    opacity: {
      anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: 0.6,
    },
    shape: {
      type: "circle",
    },
    size: {
      anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
      random: false,
      value: 1,
    },
  },
  retina_detect: true,
});
