// zadatak4.js

// Proci kroz svaki broj od 0 do 999 i
// ispisati da li je deljiv sa brojem 5
for (let i = 0; i < 1000; i++) {
  const broj = 5; // Deljiv broj

  if (i % broj == 0) {
    // Broj je deljiv sa datim brojem
    console.log("Broj " + i + " je deljiv sa brojem " + broj + ".");
  }
}
