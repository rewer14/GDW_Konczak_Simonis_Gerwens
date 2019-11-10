//initialisirung des readline Interfaces

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



/*
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

//Aufgabe 1
let namebewert = "Bewertung1";
let bewertungsanz = 11;
let letztebewertung = 5;

let array1 = [namebewert, bewertungsanz, letztebewertung];

//Ausgabe der Arraylänge
console.log(array1.length);
//Ausgabe der letzten Bewertung
console.log(array1[2]);

//Aufgabe 2
//erzeugung eines Bewertungen Objektes
let rating1 = new Object();
rating1.anz = 20;
rating1.avrg = 8.5;
rating1.name = "Bewertung1";

console.log(rating1.name);

//Object 2
let rating2 = new Object();
rating2.anz = 15;
rating2.avrg = 7.5;
rating2.name = "Bewertung2";
console.log(rating2.name);

//Object 3
let rating3 = new Object();
rating3.anz = 10;
rating3.avrg = 4.5;
rating3.name = "Bewertung3";

console.log(rating2.name);

let ratingsarray = [rating1];

ratingsarray.push(rating2);
ratingsarray.push(rating3);

//Aufgabe 3

let durchschnitt = 0;

for (let x = 0; x < 2; x++) {
  durchschnitt += this.anz;
}
durchschnitt = durchschnitt / ratingsarray.length;

console.log(durchschnitt);


//Aufgabe 4

process.exit;
*/

// Aufgabe 5

const hello = "hello";

function con1() {
  const world = "World";
  return console.log(hello + " " + world);
}

function con2(world) {
  return console.log(world + " " + hello);
}

con1();
con2("World"); //World muss übergeben werden weil world nur in funktion verfügbar
process.exit();
