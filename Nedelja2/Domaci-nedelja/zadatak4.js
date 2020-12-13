// zadatak4.js

let n = 5; // broj reda
let piramida = ""; // definisati promenljivu

for (i = 0; i <= n; i++) {
  // Popuniti promenljivu za svaki rezultat
  piramida += " ".repeat(n - i) + "#".repeat(i) + "\n";
}

console.log(piramida); // Mario piramida
