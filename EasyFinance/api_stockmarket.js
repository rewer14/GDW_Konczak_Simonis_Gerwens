'use strict';
//require
const readline = require('readline');
const fs = require('fs');
const request = require("request");

//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var searchcompany;
var companyarray=[];
var company_choice=[];
var stockarray=[];
var alphavantage_apikey='354J0V14M49Y1Y2D';


function companiesrequest() {
    return new Promise(resolve => {
        request('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+searchcompany+'&apikey='+alphavantage_apikey, function (error, response, data) {
            fs.writeFileSync('./companis.json', data);
            resolve('Done');
        });


    })
}
function company() {
    return new Promise(resolve => {
        rl.question('Geben Sie den Namen das gesuchte Unternehmen an\n', (answer) => {
            searchcompany = answer;
            resolve('Done');
        });

    })
}
function getJson() {
    return new Promise(resolve => {
       companyarray = require('./companis.json');
        if(companyarray.bestMatches.length===0){
            console.log('Das eingebene Unternehmen ist nicht verfügbar');
            process.exit()
        }
        resolve("Done")
    })
}
var y=1;
function ausgabe() {
    new Promise(resolve => {
        companyarray.bestMatches.forEach(element => {
            console.log('Auswahl ' + y + ' für ' + element['2. name']);
            y++
        });
        resolve('done');
    })
}
function datarequest() {
    return new Promise(resolve => {
        rl.question('\nIhr Auswahl\n', function (answer) {
            company_choice = companyarray.bestMatches[parseInt(answer) - 1]['1. symbol'];
            resolve('done');
            return new Promise(resolve => {
                request('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=' + company_choice + '&apikey=' + alphavantage_apikey, function (error, response, data) {

                    var json_data = data;
                    var result = [];

                    fs.writeFileSync('./stockmarket.json',json_data );
                    // stockarray = require('./stockmarket.json');
                    // stockarray=stockarray["Monthly Time Series"]
                    // console.log(stockarray.length);
                    rl.close();
                    resolve('Done');
                    process.exit();
                });
            });
        })
    });
}
function auswahl(){
    stockarray=require('./stockmarket.json');
    stockarray=stockarray["Monthly Time Series"];
    stockarray.forEach(element=>console.log(element['1. open']))
}

async function main() {

    try {
        await company()
    } catch (error) {
    }
    try {
        await companiesrequest()
    } catch (error) {
    }
    try {
        await getJson()
    } catch (error) {
    }
    try {
        await ausgabe()
    } catch (error) {
    }
    try {
        await auswahl()
    } catch (error) {
    }
    try {
        await datarequest()
    } catch (error) {
    }
}
main();
