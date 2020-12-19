let deljivoSaPet = []; // Definisati prazan array

// Funckija koja ispisuje sve elemente
// niza koji su deljivi sa 5
function deljivo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0) {
      // Popuniti array sa rezultatom
      deljivoSaPet.push(array[i]);
    }
  }
  return deljivoSaPet; // Vratiti rezultat
}

// Ispisati rezultate u konzoli
console.log(deljivo([1, 17, 25, 47, 88, 90, 99, 100, 115]));
console.log(deljivo([10, 17, 33, 49, 55, 70, 79, 90, 111, 1005, 2020]));
console.log(
  deljivo([1, 13, 23, 405, 1700, 207, 309, 210, 700, 3010, 1203, 9008])
);
