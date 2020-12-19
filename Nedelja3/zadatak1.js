// zadatak1.js

var date = new Date(); // Danasnji datum
var hours = date.getHours(); // Trenutno vreme u satima

// Funckija koja ispisuje poruku
// baziranu na trenutnom vremenu
function greetings(hours) {
  if (hours < 12) {
    // Ako je manje od 12 casova
    console.log("Добро јутро!");
  } else if (hours < 18) {
    // Ako je manje od 18 casova
    console.log("Добар дан!");
  } else {
    console.log("Добро вече!");
  }
}

// Pokrenuti funckiju
greetings(hours);
