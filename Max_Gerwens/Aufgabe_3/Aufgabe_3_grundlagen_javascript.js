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
    this.einwohnerzahl= einwohnerzahl;
    this.bundesland = bundesland;
}

let Dortmund = new Stadt('Dortmund', 587010, 'NRW'); //new objects
let Duesseldorf= new Stadt('Duesseldorf',619294, 'NRW');
let Koeln=new Stadt('Koeln',1085664,'NRW');
let Hamburg=new Stadt('Hamburg',1841179, 'Hansestadt Hamburg' );
let Schmallenberg=new Stadt('Schmallenberg',24869,'NRW');
let Muenchen=new Stadt('Muenchen', 1471508, 'Bayern');
let Berlin= new Stadt('Berlin',3644826,'Berlin');
let FrankfurtWest=new Stadt('Frankfurt am Main',753056, 'Hessen');
let Bremen=new Stadt('Bremen', 566000, 'Bremen');
let FrankfurtOst=new Stadt('Frankfurt an der Oder', 57873, 'Brandenburg');

let i;
let array1=[Berlin,Hamburg,Muenchen,Koeln,FrankfurtWest,Duesseldorf,Dortmund,Bremen,FrankfurtOst,Schmallenberg];
const fs=require('fs');

var json = JSON.stringify(array1, null,4)
fs.writeFile('cities.json', json, 'utf8', function (err) {
    if(err) throw err;
    console.log('complete');
    
});






    