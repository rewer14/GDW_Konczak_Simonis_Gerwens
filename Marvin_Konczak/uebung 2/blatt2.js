//initialisirung des readline Interfaces

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//random Funktion der JS Library
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//parser Funktion zur konvertierung der Eingaben
function parseUserInputAsFloat(input) {
  const number = Number.parseFloat(input);

  //abfrage ob Parsen erfolgreich war
  if (String(number) !== input) {
    throw new Error(`${input} could not be parsed as a number`);
  }
  //returned die Number als float
  return number;
}

//erzeugung eines Bewertungen Objektes
let ratings = new Object();
ratings.anz = 0;
ratings.avrg = 0;
ratings.name = "test";
let ratingsarray = [ratings];

function auswahl() {
  switch (eingabe) {
    case 1:
      zufall();
      break;
    case 2:
      festlegen();
      break;
    default:
      console.log("\nFalsche Eingabe!\n");
      break;
  }
}
