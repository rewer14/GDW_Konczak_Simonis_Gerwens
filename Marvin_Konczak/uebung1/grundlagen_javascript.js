const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "Marvin";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(name);

const maxBewertung = 10;

let anzBewertungen = 0;
let bewertung = 0;

function bewertungAusgeben() {
  console.log({ maxBewertung, anzBewertungen, bewertung });
}

bewertungAusgeben();

//werte hinzufügen unter beachtung des durchschnitts
function addToAverage(currentAverage, numberOfElements, newSummand) {
  return (
    currentAverage + (newSummand - currentAverage) / (numberOfElements + 1)
  );
}

//parse funktion für die eingabe als INT
function parseUserInputAsFloat(input) {
  const number = Number.parseFloat(input, 10);

  if (String(number) !== input) {
    throw new Error(`${input} could not be parsed as a number`);
  }

  return number;
}

function bewerten(nutzerBewertung) {
  if (nutzerBewertung > maxBewertung) {
    throw new Error("Bewertung zu groß");
  }

  bewertung = addToAverage(bewertung, anzBewertungen, nutzerBewertung);

  anzBewertungen++;
}
//Aufgabe3

function getRating() {
  rl.question("Bitte Bewertung angeben:", function(nutzerBewertung) {
    const number = parseUserInputAsFloat(nutzerBewertung);
    bewerten(number);
    bewertungAusgeben();
    getRating();
  });
}
getRating();

//Aufgabe 4

function zufallsbewertung() {
  let radom;
  for (let i = 1; i <= 100; i++) random = getRandomInt(5);
  bewerten(random);
}

getRating(zufallsbewertung);
