'use strict'
const readline = require('readline')
//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Randomaize
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Variablen
var max_Bewertung = 5;
var aktulleAnzahl = 0;
var bewertung = 0;
var i;
let array = [];
var sum = 0

//Funktion für die Erstellung eines Objekts
function Rating(name, anzahl, lastrating) {
    this.name = name;
    this.anzahl = anzahl;
    this.lastrating = lastrating;
    this.durchschnitt = () => {
        for (i = 0; i < this.rating.length; i++) {
            sum += this.rating[i]
        }
        return (sum / this.anzahl);
    }
};

let ratings = new Rating('', 0, 0); //new object


//Auswahl zwischen Selber bewerten und zufälliger Bewertung
const entscheidung = function () {
    rl.question('Mit 1 kannst du selber eine Bewertung angeben und mit 2 Zufällige Bewertungen\n', function (ent) {
        switch (parseInt(ent)) {
            case 1:
                selber(log);
                break;
            case 2:
                random(log);
                break;

        }

    })

}

// Funktion zum erzeugen von zufälligen Bewertungen
const random = function (callback) {
    var random;
    for (var i = 1; i <= 20; i++) {
        random = getRandomInt(6);

        bewertung += random;
        console.log(i, random, (bewertung / i));
    }
    callback((bewertung / i));
    rl.close();
}
//Konsolen ausgabe
const log = function (messange) {
    console.log(messange);
    console.log(array[0].name, array[0].anzahl, array[0].lastrating)
}
//Funktion zur Angabe einer Bewertung
const name = function name() {
    rl.question('Was ist Ihr Name?', function (n) {
        //array.push(n);
        ratings.name = n;
        entscheidung();
    })
}
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

}
//Konstante Werte
const hello = "hello"
const world="world"
//Konkenation von zwei Konstanten
const konk=function(){
    const zusammen=world + hello
    console.log(zusammen)
}

const konk2=function(){
    const zusammen2=hello+world
    console.log(zusammen2)
}

//Ausführen des Codes
name()
konk()
konk2()



