// zadatak1.js

var date = new Date(); // Danasnji datum
var hours = date.getHours(); // Trenutno vreme u satima

// Funckija koja ispisuje poruku
// baziranu na trenutnom vremenu
function greetings(hours) {
  // Dinamicna poruka
  const poruka = (poruka) => {
    return poruka + " Тренутно је " + hours + " часова.";
  };
  if (hours < 12) {
    // Ako je manje od 12 casova
    return poruka("Добро јутро!");
  } else if (hours < 18) {
    // Ako je manje od 18 casova
    return poruka("Добар дан!");
  } else {
    return poruka("Добро вече!");
  }
}

// Pokrenuti i ispisati funckiju
console.log(greetings(hours));
