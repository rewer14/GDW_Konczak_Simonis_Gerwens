'use strict';
const readline = require('readline');
//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let z = 1000000;

//Funktion für die Erstellung des Objektes für die Stadt
function City(name, einwohnerzahl, bundesland) {
    this.name = name;
    this.einwohnerzahl = einwohnerzahl;
    this.bundesland = bundesland;
}

//Funktion für die Erstellung des Objekts für die Benutzer
function User(name, nachname, Email, Wohnort) {
    this.name = name;
    this.nachname = nachname;
    this.Email = Email;
    this.Wohnort = Wohnort;
}

let Dortmund = new City('Dortmund', 587010, 'NRW'); //new objects
let Duesseldorf = new City('Duesseldorf', 619294, 'NRW');
let Koeln = new City('Koeln', 1085664, 'NRW');
let Hamburg = new City('Hamburg', 1841179, 'Hansestadt Hamburg');
let Schmallenberg = new City('Schmallenberg', 24869, 'NRW');
let Muenchen = new City('Muenchen', 1471508, 'Bayern');
let Berlin = new City('Berlin', 3644826, 'Berlin');
let FrankfurtWest = new City('Frankfurt am Main', 753056, 'Hessen');
let Bremen = new City('Bremen', 566000, 'Bremen');
let FrankfurtOst = new City('Frankfurt an der Oder', 57873, 'Brandenburg');

let Max = new User('Gerwens', 'Max', 'max.gerwens@smail.th-koeln.de', Koeln);
let Hans = new User('Hans', 'Dieter', 'hans.dieter@web.de', Hamburg);
let Susi = new User('Susi', 'Dusi', 'susi.dusi@gmail.com', FrankfurtWest);

//var cityarray = [Berlin, Hamburg, Muenchen, Koeln, FrankfurtWest, Duesseldorf, Dortmund, Bremen, FrankfurtOst, Schmallenberg];
var cityarray = [];
//var userarray=[Max,Hans,Susi];
var userarray = [];
const fs = require('fs');
const citypath = './cities.json';
const userpath = './user.json';


//Expotiere Daten zu einem JSON File
function pushtofile(arrayfromoutside, path) {
    return new Promise((resolve, reject) => {
        fs.writeFileSync('./cities.json', JSON.stringify(arrayfromoutside, null, 4));
        process.exit()
        resolve('done')
    })
}

//Holen der Daten über Promise
function ReadJSON() {
    return new Promise((resolve, reject) => {
        cityarray = require(citypath);
        userarray = require(userpath);
        resolve('done')
    });
}


var array = [];
var y = 0;

//Lösche ein Element
function manipulatedata(arrayfromoutside) {
    return new Promise((resolve, reject) => {
        rl.question('Welche Stadt möchten Sie entfernen?\n', answer => {
            for (var k = 0; k < arrayfromoutside.length; k++) {
                if (arrayfromoutside[k].name === answer) {
                    arrayfromoutside.splice(k, 1);
                }
            }
           main();
            resolve('Done');
        });

    });

}

let City1 = new City('', 0, '');

//neue Stadt anlegen
function newCity() {
    return new Promise((resolve, reject) => {
        rl.question('Wie ist der Name der City?\n', answer => {
            City1.name = answer;
            rl.question('Wieviele Einwohner hat die City?\n', answer2 => {
                City1.einwohnerzahl = parseInt(answer2);
                rl.question('In welchem Bundesland?\n', answer3 => {
                    City1.bundesland = answer3;
                    cityarray.push(City1);
                    main()
                });
            });
        });

        resolve('done')
    })

}

var ende = 0;

function frage() {
   return new Promise((resolve,reject) => {
        rl.question('1 für new City\n2 für löschen\n3 für ende', answer => {
            ende = parseInt(answer);
            menue(ende);
            resolve('done')
        });

    })
}

async function menue(answer) {
    switch (answer) {
        case 1: {
            await ReadJSON().then(newCity());
            break;
        }
        case 2:{
            await ReadJSON().then(manipulatedata(cityarray));
            break;
        }
        case 3:{
            await pushtofile(cityarray,citypath);
            break;
        }


    }
}

async function main() {
frage().then(menue(ende));
}


/*    try {
        await ReadJSON()
    } catch (error) {
        console.log(error)
    }*/
/*  try {
      await test();
  } catch (error) {
      console.log(error)
  }*/
/*try {
    await test2()
} catch (error) {
    console.log(error)
}*/
/*    try {
        await manipulatedata(cityarray)
    } catch (error) {
        console.log(error)
    }
    try {
        await newCity()
    } catch (error) {
        console.log(error)
    }
    try {
        await pushtofile(cityarray, citypath)
    } catch (error) {
        console.log(error)
    }
}*/
rl.question
main();





