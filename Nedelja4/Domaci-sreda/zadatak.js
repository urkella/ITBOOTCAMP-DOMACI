/*
Zadatak 1
*/

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

console.log(nizPok); // Ispisati inicijalne pokemone

/*
Zadatak 2
*/

nizPok = [Pok1, Pok2, Pok3, Pok4];

function nizSposP(nizPok) {
  let nizSpos = [];
  nizPok.forEach((Pok) => {
    nizSpos.push(Pok.sposobnosti);
  });
  return nizSpos.flat();
}

console.log(nizSposP(nizPok)); // Ispisati jedan niz sposobnosti pokemona

/*
Zadatak 3
*/

nizPok = [Pok1, Pok2, Pok3, Pok4];

nizPok.sort((a, b) => a.karakteristike.Brzn - b.karakteristike.Brzn);

console.log(nizPok); // Ispisati sortirane pokemone po brzini
