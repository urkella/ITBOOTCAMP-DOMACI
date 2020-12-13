// zadatak2.js

// Koristimo array radi lakseg citanja rezultata
let array = []; // prazni array

for (let i = 1; i <= 100; i++) {
  const deljivSaPet = i % 5; // ako je broj deljiv sa 5
  const deljivSaTri = i % 3; // ako je broj deljiv sa 3
  if (deljivSaPet === 0 && deljivSaTri === 0) {
    array.push("FizzBuzz");
  } else if (deljivSaPet === 0) {
    array.push("Buzz");
  } else if (deljivSaTri === 0) {
    array.push("Fizz");
  } else {
    array.push(i);
  }
}

console.log("Rezultat za prvih 100 brojeva", array); // Rezultat
