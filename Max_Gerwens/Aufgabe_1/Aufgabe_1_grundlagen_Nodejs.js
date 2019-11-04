const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var max_Bewertung = 5;
var aktulleAnzahl = 0;
var bewertung = 0;

const entscheidung = function () {
    rl.question('Mit 1 kannst du selber eine Bewertung angeben und mit 2 Zufällige Bewertungen\n', function (ent) {
        switch (parseInt(ent)) {
            case 1:
                selber(log);
                break
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
    callback((bewertung / i +' von ' + max_Bewertung + ' Sternen'));
    rl.close();
}

const log = function (messange) {
  console.log(messange)
}

const selber = function eingabe(callback) {

    rl.question('Was ist Ihre Bewertung\n', function (answer) {
        if (answer <= max_Bewertung) {
            aktulleAnzahl += 1
            bewertung = (bewertung + parseInt(answer)) / aktulleAnzahl
            callback(bewertung + ' von ' + max_Bewertung + ' Sternen')
        } else callback('Falsche Eingabe')
        rl.close()

    })
}
entscheidung()




