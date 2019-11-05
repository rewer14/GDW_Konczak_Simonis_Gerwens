'use strict';
const readline = require('readline');
//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Funktion für die Erstellung eines Objekts
function Stadt(name, einwohnerzahl, bundesland) {
    this.name = name;
    this.einwohnerzahl = einwohnerzahl;
    this.bundesland = bundesland;
}

let Dortmund = new Stadt('Dortmund', 587010, 'NRW'); //new objects
let Duesseldorf = new Stadt('Duesseldorf', 619294, 'NRW');
let Koeln = new Stadt('Koeln', 1085664, 'NRW');
let Hamburg = new Stadt('Hamburg', 1841179, 'Hansestadt Hamburg');
let Schmallenberg = new Stadt('Schmallenberg', 24869, 'NRW');
let Muenchen = new Stadt('Muenchen', 1471508, 'Bayern');
let Berlin = new Stadt('Berlin', 3644826, 'Berlin');
let FrankfurtWest = new Stadt('Frankfurt am Main', 753056, 'Hessen');
let Bremen = new Stadt('Bremen', 566000, 'Bremen');
let FrankfurtOst = new Stadt('Frankfurt an der Oder', 57873, 'Brandenburg');

var array1 = [Berlin, Hamburg, Muenchen, Koeln, FrankfurtWest, Duesseldorf, Dortmund, Bremen, FrankfurtOst, Schmallenberg];
const fs = require('fs');
const jsonpath = 'cities.json';


//Expotiere Daten zu einem JSON File
const pushtofile = function (arrayfromoutside) {
    fs.writeFile(jsonpath, JSON.stringify(arrayfromoutside,null,4), 'utf8', function (err) {
        if (err) throw Console.log('Fehler beim Schreiben der Datei');
        console.log('complete with write');
    });
};

var array = [];

//Hole Daten von JSON File und Speicher diese in einem Array
const pullfromfile = function () {
    let rawdata = fs.readFile(jsonpath,function (err) {
        if (err) throw Console.log('Fehler beim Schreiben der Datei');
        console.log('complete with pull');
    });
    console.log(rawdata);
    let data=JSON.parse(rawdata);
    console.log('Test2');
    for (let j = 0; j < data.length; j++) {
        array.push([
            data[j].name, data[j].einwohnerzahl, data[j].bundesland
        ])
    }
    console.log(array.length)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

};

const manipulatedata = function (arrayfromoutside, searchname) {
    for (let k = 0; k < arrayfromoutside.length; k++) {
       if (arrayfromoutside[k].name === searchname) {
           console.log(arrayfromoutside)
           arrayfromoutside.splice(k,1);
       }
    }
};
let City1=new Stadt('',0,'');
const newCity=function(){
    rl.question('Wie ist der Name der Stadt?',answer => {
        City1.name=answer;
            rl.question('Wieviele Einwohner hat die Stadt?',answer2 => {
                City1.einwohnerzahl = parseInt(answer2);
                rl.question('In welchem Bundesstaat?', answer3 => {
                    City1.bundesland = answer3;
                    array1.push(City1);
                    pushtofile(array1);
                    rl.close();
                });
            });
    });



};
let array3=[];

//pushtofile(array1);
newCity();
//pullfromfile();;
//manipulatedata(array1, "Berlin");
//pushtofile(array1);






