// zadatak2.js

let cenaPice = 1199; // Cena pice
let poluPrecnik = 25; // Polu precnik u cm
let pP, kalkulacija;

// Funkcija koja izracunava cenu pice po
// kvadtarnom centimetru
function pica(cenaPice, poluPrecnik) {
  if (poluPrecnik > 0 && cenaPice > 0) {
    // Kalkulacija
    pP = poluPrecnik * poluPrecnik * Math.PI;
    kalkulacija = cenaPice / pP;

    return kalkulacija; // Vrati rezultat
  } else {
    // Ukoliko unos jedan od oba parametra
    // nije validan ispisati gresku
    console.log("Unos cene ili precnika nisu validni.");
  }
}

// Pokrenuti i ispisati funckiju
console.log(pica(cenaPice, poluPrecnik));
