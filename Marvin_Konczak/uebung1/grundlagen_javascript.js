const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "Marvin";

console.log(name);

const maxBewertung = 10;

let anzBewertungen = 0;
let bewertung = 0;

function bewertungAusgeben() {
  console.log({ maxBewertung, anzBewertungen, bewertung });
}

bewertungAusgeben();

function addToAverage(currentAverage, numberOfElements, newSummand) {
  return (
    currentAverage + (newSummand - currentAverage) / (numberOfElements + 1)
  );
}

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
