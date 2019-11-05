'use strict';
const readline = require('readline');
//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Funktion für die Erstellung des Objektes für die Stadt
function City(name, einwohnerzahl, bundesland) {
    this.name = name;
    this.einwohnerzahl = einwohnerzahl;
    this.bundesland = bundesland;
}
//Funktion für die Erstellung des Objekts für die Benutzer
function User(name, nachname, Email, Wohnort){
    this.name=name;
    this.nachname=nachname;
    this.Email=Email;
    this.Wohnort=Wohnort;
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

let Max=new User('Gerwens','Max','max.gerwens@smail.th-koeln.de',Koeln);
let Hans=new User('Hans','Dieter','hans.dieter@web.de',Hamburg);
let Susi=new User('Susi','Dusi','susi.dusi@gmail.com',FrankfurtWest);

var cityarray = [Berlin, Hamburg, Muenchen, Koeln, FrankfurtWest, Duesseldorf, Dortmund, Bremen, FrankfurtOst, Schmallenberg];
var userarray=[Max,Hans,Susi];
const fs = require('fs');
const citypath = 'cities.json';
const userpath='user.json';



//Expotiere Daten zu einem JSON File
const pushtofile = function (arrayfromoutside,path) {
    fs.writeFile(path, JSON.stringify(arrayfromoutside,null,4), 'utf8', function (err) {
        if (err) throw Console.log('Fehler beim Schreiben der Datei');
        console.log('complete with write');
    });
};

var array = [];

//Hole Daten von JSON File und Speicher diese in einem Array
const pullfromfile = function (path) {
    let rawdata = fs.readFile(path,function (err) {
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
let City1=new City('',0,'');
const newCity=function(){
    rl.question('Wie ist der Name der City?',answer => {
        City1.name=answer;
            rl.question('Wieviele Einwohner hat die City?',answer2 => {
                City1.einwohnerzahl = parseInt(answer2);
                rl.question('In welchem Bundesstaat?', answer3 => {
                    City1.bundesland = answer3;
                    cityarray.push(City1);
                    pushtofile(cityarray);
                    rl.close();
                });
            });
    });



};
let array3=[];

pushtofile(cityarray,citypath);
//newCity();
//pullfromfile();;
//manipulatedata(cityarray, "Berlin");
//pushtofile(cityarray,citypath);






