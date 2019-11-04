'use strict'
const readline = require('readline')
//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Randomaizer
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Variablen
var max_Bewertung = 5;
var aktulleAnzahl = 0;
var sch = 0;
var anz;
var i;
var bewertung = 0;
let array = [];
var sum = 0;
var rating=[];

//Funktion für die Erstellung eines Objekts
function Rating(name, anzahl, lastrating) {
    this.name = name;
    this.anzahl = anzahl;
    this.lastrating = lastrating;
    this.durchschnitt = () => {
        for (i = 0; i < rating.length; i++) {
            sum += rating[i]
        }
        return (sum / this.anzahl);
    }
}

let ratings = new Rating('', 0, 0); //new object


//Auswahl zwischen Selber bewerten und zufälliger Bewertung
const entscheidung = function () {
    rl.question('Mit 1 kannst du selber eine Bewertung angeben und mit 2 Zufällige Bewertungen und mit 3 beendet du das Programm\n', function (ent) {
        switch (parseInt(ent)) {
            case 1:
                selber(log);
                break;
            case 2:
                random(log2);
                break;

        }

    })

};

// Funktion zum erzeugen von zufälligen Bewertungen
const random = function (callback) {
    var random;
    for (var i = 1; i <= 20; i++) {
        random = getRandomInt(6);
        rating.push(random)
        bewertung += random;
        ratings.anzahl=ratings.anzahl+1;
        console.log(i, random, (bewertung / i));
    }

    callback((bewertung / i));
    rl.close();
};
//Konsolen Ausgabe für Selber Eingabe
const log = function (messange) {
    console.log(messange);
    console.log(array[0].name, array[0].anzahl, array[0].lastrating)
    process.exit();
};
//Konsolen Ausgabe für Random
const log2 = function (messange) {
    console.log(messange);
    console.log(ratings.durchschnitt());
    process.exit();
};
//Funktion zur Angabe einer Bewertung
const name = function name() {
    rl.question('Was ist Ihr Name?', function (n) {
        //array.push(n);
        ratings.name = n;
        entscheidung();
    })
};
//Funktion zur selbst Eingabe einer Bewertung
const selber = function eingabe(callback) {
    rl.question('Was ist Ihre Bewertung?', function (bew) {
        if (bew <= max_Bewertung) {
            aktulleAnzahl += 1;
            bewertung = (bewertung + parseInt(bew)) / aktulleAnzahl;
            ratings.anzahl = aktulleAnzahl;
            ratings.lastrating = parseInt(bew);
            array.push(ratings);
            callback(bewertung + ' von ' + max_Bewertung + ' Sternen');
        } else callback('Falsche Eingabe');
        rl.close()
    })

};
//Konstante Werte
const hello = "hello";
const world="world";
//Konkenation von zwei Konstanten
const konk=function(){
    const zusammen=world + hello;
    console.log(zusammen)
};

const konk2=function(){
    const zusammen2=hello+world;
    console.log(zusammen2)
};

//Ausführen des Codes
name();

//konk()
//konk2()





