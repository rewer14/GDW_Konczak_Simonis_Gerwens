'use strict';
//require
const readline = require('readline');
const fs = require('fs');
const request = require("request");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Variabeln
var companyarray = [];
var company_choice = [];
var stockarray = [];
var alphavantage_apikey = '354J0V14M49Y1Y2D';
var iterator = 1;
var startdate='2018-04-05';
var enddate='2019-10-30';

//Abfrage der Unternehmen
function companiesrequest(searchcompany) {
    return new Promise(resolve => {
        request('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + searchcompany + '&apikey=' + alphavantage_apikey, function (error, response, data) {
            fs.writeFileSync('./companies.json', data);
            resolve('Done');
        });
    })
}

//JSON File abrufen
function getJson() {
    return new Promise(resolve => {
        companyarray = require('./companies.json');
        if (companyarray.bestMatches.length === 0) {
            console.log('Das eingebene Unternehmen ist nicht verfügbar');
            process.exit()
        } else {
            companyarray.bestMatches.forEach(element => {
                console.log('Auswahl ' + iterator + ' für ' + element['2. name']);
                iterator++
            });
        }
        resolve("Done")
    })
}


//Abfrage der Aktien Historie
function datarequest() {
    return new Promise(resolve => {
        rl.question('\nIhre Auswahl\n', function (answer) {
            company_choice = companyarray.bestMatches[parseInt(answer) - 1]['1. symbol'];

            request('https://financialmodelingprep.com/api/v3/historical-price-full/' + company_choice + '?from=' + startdate + '&to=' + enddate, function (error, response, data) {
                fs.writeFileSync('./stockmarket.json', data);
                rl.close();
                resolve('Done');
            });
        });
    })
}

//Ausgabe der Aktienkurse
function choice() {
    return new Promise(resolve => {
        stockarray = require('./stockmarket.json');
        stockarray.historical.forEach(element => console.log(element.date + ' high: ' + element.high + ' low: ' + element.low))
        resolve('done')
    })

}

async function main(searchcompany) {
    try {
        await companiesrequest(searchcompany)
    } catch (error) {
    }
    try {
        await getJson()
    } catch (error) {
    }
    try {
        await datarequest()
    } catch (error) {
    }
    try {
        await choice()
    } catch (error) {
    }
}

module.exports.main = main;
module.exports.companyrequest = companiesrequest;
module.exports.getJson = getJson;
module.exports.datarequest = datarequest;
module.exports.choice = choice;
//Ausführen des Codes
