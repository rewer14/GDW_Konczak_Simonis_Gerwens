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
const jsonpath='cities.json'

var json = JSON.stringify(array1, null,4)


//Expotiere Daten zu einem JSON File
const pushtofile=function(arrayfromoutside) {
    fs.writeFile(jsonpath, JSON.stringify(arrayfromoutside), 'utf8', function (err) {
        if (err) throw err;
        console.log('complete');
    });
};
var array = [];

//Hole Daten von JSON File und Speicher diese in einem Array
const pullfromfile=function () {
   var rawdata= fs.readFileSync(jsonpath);
   var data=JSON.parse(rawdata);
   for(let j=0;j<data.length;j++){
       array.push([
           data[j].name,data[j].einwohnerzahl,data[j].bundesland
       ])
   }
   console.log(array.length)
   for(i=0;i<array.length;i++){
       console.log(array[i]);
   }

};

//pushtofile(array1);
pullfromfile();






