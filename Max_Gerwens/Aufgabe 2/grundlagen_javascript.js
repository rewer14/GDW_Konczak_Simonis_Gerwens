const readline = require('readline')
var prompts = require('prompts');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var max_Bewertung = 5;
var aktulleAnzahl = 0;
var sch=0;
var anz;
var bewertung = 0;
let array=[];
let ratings=new Object()
ratings.name;
ratings.anzahl;
ratings.lastrating;

const anzahl=function (log) {
    rl.question('Wie viele Bewertungen?',function (answer) {
        anz=answer
        name()
    })

}


const entscheidung = function () {
    console.log('test3')
       rl.question('Mit 1 kannst du selber eine Bewertung angeben und mit 2 Zufällige Bewertungen und mit 3 beendet du das Programm\n', function (ent) {
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

const log = function (messange) {
  console.log(messange);
    console.log(array[0],array[1],array[2]);
    console.log(ratings.anzahl,ratings.lastrating,ratings.name)
}
const name= function name() {
    for (i = 0; i <= parseInt(anz); i++) {
        rl.question('Was ist Ihr Name?', function (n) {
            array.push(n);
            ratings.name = n;
            entscheidung();
        })
    }
}
const selber = function eingabe(callback) {
    rl.question('Was ist Ihre Bewertung?', function (bew) {
        if (bew <= max_Bewertung) {
            aktulleAnzahl += 1;
            bewertung = (bewertung + parseInt(bew)) / aktulleAnzahl;
            ratings.anzahl=aktulleAnzahl;
            ratings.lastrating=parseInt(bew);
            array.push(aktulleAnzahl,parseInt(bew));
            callback(bewertung + ' von ' + max_Bewertung + ' Sternen');
        } else callback('Falsche Eingabe');
        rl.close()
    })

}

anzahl()



