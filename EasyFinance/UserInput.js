'use strict';
//require
const readline = require('readline');
const fs = require('fs');
const request = require("request");
const api_weather=require('./api_weather');
const api_stockmarket=require('./api_stockmarket');

//readline
const rs = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Abfrage der Stadt
function city() {
    return new Promise(resolve => {
        rs.question('Geben Sie den Namen der Stadt an\n', answer => {
            resolve(answer)
        })
    })
}

function startdatequestion() {
    return new Promise(resolve => {
        rs.question('Geben Sie das Stat Datum(Format:YYYY-MM-DD) ein:\n', answer => {
            resolve(answer);
        })
    })
}
function enddatequestion() {
    return new Promise(resolve=>{
        rs.question('Geben Sie das End Datum(Format:YYYY-MM-DD) ein:\n', answer => {
            resolve(answer)
        });
    })

}

//Eingabe des gesuchten Unternehmens
function company() {
    return new Promise(resolve => {
        rs.question('Geben Sie den Namen das gesuchte Unternehmen an\n', (answer) => {
            resolve(answer);
        });

    })
}
module.exports.startdate=startdatequestion;
module.exports.enddate=enddatequestion;
module.exports.company=company;
module.exports.city=city;