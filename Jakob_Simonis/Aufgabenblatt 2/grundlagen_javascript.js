const maxBerwertung = 5;    //Konstante für maximale Bewertung

let ratings = {
    anzahlBewertung: 0,
    bewertung : 0,
    name : "name",
    bewertungsSumme : 0,

    durchschnitt: function() {
    var avrg = (this.bewertungsSumme/this.anzahlBewertung);
       return avrg;
    }
};   

let bewertungsListe = [ratings];   //Array von Bewertungen


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



function zufall() {
var random;
console.log('zufällige Bewertung: \n');
for(var i = 1; i<=20; i++) {        //Schleife für Zufallszahl
    random = getRandomInt(5);       //AUfruf von Zufallsfunktion

    ratings.bewertungsSumme = ratings.bewertungsSumme + random;
    ratings.bewertung = random;     
    ratings.anzahlBewertung++;  
    ratings.name = i+"-te Bewertung";

    bewertungsListe.push(ratings.name, ratings.bewertung, ratings.anzahlBewertung);     //Hinzufügen in Array
}

bewertungsListe.forEach(function(item, array ){

    console.log(item)
});
                                    //Ausgabe von Array

console.log("\n Durchschnittliche Bewertung:")
console.log(ratings.durchschnitt());    //Ausgabe von Durchschnitt

process.exit();
rl.close();

}


function festlegen() {
console.log('Bewertung festlegen: \n');

rl.question('Geben sie die Bewertung ein: ',function(answer){

    if(answer <= maxBerwertung) {   //Darf maximale Bewertung nicht überschreiten
    ratings.anzahlBewertung+=1;             //Anzahl der Bewertungen erhöhen
    ratings.bewertungsSumme += answer
    ratings.bewertung = parseInt(answer);   //Eingabe als int in Bewertung 
    console.log('Bewertung:',ratings.bewertung);    //Ausgabe   
    } else console.log('Falsche Eingabe')   //Ausgabe Fehlermeldung
    process.exit
    bewertungsListe.push(ratings.bewertung);    //Hinzufuegen in Array

    rl.close();

    bewertungsListe.forEach(function(item, index, array ){

        console.log(item, index)
    });
        //Ausgabe von Array
        
    
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

const hello = "hello";

function helloWorld() {

    const world = "world";
    const zusammen = hello +world;
    
    console.log("\n\n"+zusammen);
    
}

function worldHello() {

    const world = "world"

    const zusammen = world +hello;
    console.log(zusammen);

}
helloWorld();
worldHello();