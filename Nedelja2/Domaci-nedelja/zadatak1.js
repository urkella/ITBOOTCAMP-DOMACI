// zadatak1.js

let cenaPice = 999; // Cena pice
let precnikPice = 50; // Precnik pice

let poluPrecnik = precnikPice / 2;
let povrsina = poluPrecnik * poluPrecnik * Math.PI;

if (cenaPice > 0 && precnikPice > 0) {
  let cena = cenaPice / povrsina;
  console.log(cena.toFixed(2)); // Cena pice po cm2
} else {
  console.log("Unesite cenu i precnik pice ponovo."); // Pogresno uneta cena ili precnik
}
