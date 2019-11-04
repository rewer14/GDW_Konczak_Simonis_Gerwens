const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//erzeugung eines Bewertungen Objektes
let bewertungen = new Object();

bewertungen.bewertung = 0;
