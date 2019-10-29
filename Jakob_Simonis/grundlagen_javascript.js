
const maxBerwertung = 5; //Konstante für maximale Bewertung
var anzahlBewertung = 20; //Variable für Anzahl von Bewertungen
var bewertung = 3; //Bewertung selbst
let bewertungsListe = []; //Array von Bewertungen


console.log(maxBerwertung);
console.log(anzahlBewertung);
console.log(bewertung);
//Ausgabe auf Konsole

function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max))
}
//Zufallszahl generieren

const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin, 
     output: process.stdout 
    });
//Funktion zum Einlesen

console.log('zufällige Bewertung: \n');

function zufall() {
var random;
for(var i = 1; i<=20; i++) {
    random = getRandomInt(5);
    bewertung+=random;
    console.log(i,random,(bewertung/i));
}
console.log('Bewertung: ',(bewertung/i));
process.exit()
rl.close();
}

function festlegen() {
console.log('Bewertung festlegen: \n');

rl.question('Geben sie die Bewertung ein: ',function(answer){

    if(answer <= maxBerwertung) {   //Darf maximale Bewertung nicht überschreiten
    anzahlBewertung+=1;             //Anzahl der Bewertungen erhöhen
    bewertung = parseInt(answer);   //Eingabe als int in Bewertung 
    console.log('Bewertung:',bewertung);    //Ausgabe   
    } else console.log('Falsche Eingabe')   //Ausgabe Fehlermeldung
    process.exit
    bewertungsListe.push(bewertung);

    rl.close();

});

}

var eingabe;

rl.question('Geben sie ihre Wahl an:\n1fuer Zufall\n2fuer festlegen ',function(answer) {

    eingabe = parseInt(answer)
    auswahl()
});
//Eingabe fuer Menue

function auswahl(){

    switch (eingabe) {
        case 1: zufall(); break;
        case 2: festlegen(); break;
        default: console.log("\nFalsche Eingabe!\n"); break;
    }
}
//Switch für Menueauswahl

