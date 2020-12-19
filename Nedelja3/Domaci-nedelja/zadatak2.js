// zadatak2.js

function pica(mesecno, godine) {
  let dozSnabdevanje = 0; // Dozivotno snabdevanje
  if (mesecno >= 0 && godine > 0 && godine < 100) {
    return (dozSnabdevanje += mesecno * (100 - godine) * 12); // Kalkulacija
  } else {
    // Ispisati gresku
    return "Paramteri nisu validno uneti.";
  }
}

// Pokrenuti i ispisati funckiju
console.log(pica(30, 25)); // 30 pica i 25 godina
