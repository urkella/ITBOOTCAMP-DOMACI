// Pokemoni
let Pok1 = {
  ime: "Glaceon",
  vrsta: ["Water", "Ice"],
  sposobnosti: ["Snow Cloak", "Illuminate"],
  karakteristike: { Nap: 55, Odbr: 67, Brzn: 70 },
};

let Pok2 = {
  ime: "Eevee",
  vrsta: ["Normal"],
  sposobnosti: ["Adaptability", "Run Away"],
  karakteristike: { Nap: 120, Odbr: 90, Brzn: 60 },
};

let Pok3 = {
  ime: "Sylveon",
  vrsta: "Grass",
  sposobnosti: ["Cute Charm"],
  karakteristike: { Nap: 100, Odbr: 80, Brzn: 65 },
};

let Pok4 = {
  ime: "Shiinotic",
  vrsta: ["Grass", "Fairy"],
  sposobnosti: ["Illuminate", "Effect Spore", "Rain Dish"],
  karakteristike: { Nap: 45, Odbr: 70, Brzn: 30 },
};

let nizPok = [Pok1, Pok2, Pok3, Pok4]; // Kreirati niz pokemona

document.getElementById("prikaz").addEventListener("click", prikaziPokemone);
document
  .getElementById("pobednik")
  .addEventListener("click", prikaziNajjacegPokemona);
var wrapper = document.getElementById("wrapper");

function prikaziPokemone() {
  wrapper.innerHTML = "";

  for (key in nizPok) {
    var result = nizPok[key];

    var pokDiv = document.createElement("div");
    pokDiv.innerHTML = `Ime: ${result.ime}, Napad: ${result.karakteristike.Nap}`;

    wrapper.append(pokDiv);
  }
}

function prikaziNajjacegPokemona() {
  wrapper.innerHTML = "";

  var sortiraj = nizPok.sort(
    (a, b) => a.karakteristike.Nap - b.karakteristike.Nap
  )[3];

  var najjaciPokDiv = document.createElement("div");
  najjaciPokDiv.innerHTML = `Ime: ${sortiraj.ime}, Napad: ${sortiraj.karakteristike.Nap}`;

  wrapper.append(najjaciPokDiv);
}
