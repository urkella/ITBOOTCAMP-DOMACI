// zadatak2.js - Prodavnica

var proizvod = 40; // Cena proizvoda
var novac = 100; // Novac koji kupac ima

if (novac < proizvod) {
  // Kupac nema dovoljno novca
  console.log(
    "Немате довољно новца.",
    "На рачуну имате " + novac + " € док производ кошта " + proizvod + " €."
  );
} else {
  var trenutniNovac = novac - proizvod; // Predstavlja trenutni iznos novca umanjen za cenu proizvoda
  novac = trenutniNovac; // Umanjiti novac na racunu

  // Kupac ima dovoljno novca
  console.log(
    "Успешно сте купили производ.",
    "Ваше тренутно стање је: " + novac + " €."
  );
}
