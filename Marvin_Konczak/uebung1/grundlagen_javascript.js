const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Variable mit Namen
let name = "Marvin";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(name);

//deklarieren der Variablen
const maxBewertung = 10;
// bei neuzuweisung erfolgt ein Typeerror

let anzBewertungen = 0;
let DurchschnittsBewertung = 0;

//geschweifte klammern zum ausgeben der Variablennamen

function bewertungAusgeben() {
  console.log({ maxBewertung, anzBewertungen, DurchschnittsBewertung });
}

bewertungAusgeben();

//werte hinzufügen unter beachtung des durchschnitts

function addToAverage(DurchschnittsBewertung, anzBewertungen, nutzerBewertung) {
  return (
    DurchschnittsBewertung +
    (nutzerBewertung - DurchschnittsBewertung) / (anzBewertungen + 1) //weil neue bewertung, wert um 1 erhöhen aber nur für die rechnung
  );
}

//parse funktion für die eingabe als Float

function parseUserInputAsFloat(input) {
  const number = Number.parseFloat(input);

  //abfrage ob Parsen erfolgreich war
  if (String(number) !== input) {
    throw new Error(`${input} could not be parsed as a number`);
  }
  //returned die Number als float
  return number;
}
//
function bewerten(nutzerBewertung) {
  //check ob nutzerbewertung größer als max bewertung, falls ja dann wird eine exception erzeugt
  if (nutzerBewertung > maxBewertung) {
    throw new Error("Bewertung zu groß");
  }

  //addToAverage für einbeziehung des Durschnitts
  DurchschnittsBewertung = addToAverage(
    DurchschnittsBewertung,
    anzBewertungen,
    nutzerBewertung
  );
  //nachdem bewertung gespeichert wurde, muss anzahl bewertung um 1 erhöht werden!
  anzBewertungen++;
}
//Aufgabe3

function getRating() {
  //nutzerBewertung=answer aus question funktion
  rl.question("Bitte Bewertung angeben:", function(nutzerBewertung) {
    const number = parseUserInputAsFloat(nutzerBewertung);
    //falls beim Parsen fehler, wird hier schon exception erzeugt
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
