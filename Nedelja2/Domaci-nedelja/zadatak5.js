// zadatak5.js

let n = 5; // broj reda
let piramida = ""; // definisati promenljivu

for (i = 0; i <= n; i++) {
  piramida +=
    " ".repeat(n - i) +
    "#".repeat(i) +
    " " +
    "#".repeat(i) +
    " ".repeat(n - i) +
    "\n";
}

console.log(piramida); // Mario piramida
