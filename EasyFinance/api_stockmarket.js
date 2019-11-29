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
//Variabeln
var searchcompany;
var companyarray=[];
var company_choice=[];
var stockarray=[];
var alphavantage_apikey='354J0V14M49Y1Y2D';
var iterator=1;

//Abfrage der Unternehmen
function companiesrequest() {
    return new Promise(resolve => {
        request('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+searchcompany+'&apikey='+alphavantage_apikey, function (error, response, data) {
            fs.writeFileSync('./companies.json', data);
            resolve('Done');
        });


    })
}
//Eingabe des gesuchten Unternehmens
function company() {
    return new Promise(resolve => {
        rl.question('Geben Sie den Namen das gesuchte Unternehmen an\n', (answer) => {
            searchcompany = answer;
            resolve('Done');
        });

    })
}

//JSON File abrufen
function getJson() {
    return new Promise(resolve => {
        companyarray = require('./companies.json');
        if(companyarray.bestMatches.length===0){
            console.log('Das eingebene Unternehmen ist nicht verfügbar');
            process.exit()
        }
        resolve("Done")
    })
}
//Ausgabe der der Unternehmen
function ausgabe() {
    new Promise(resolve => {
        companyarray.bestMatches.forEach(element => {
            console.log('Auswahl ' + iterator + ' für ' + element['2. name']);
            iterator++
        });
        resolve('done');
    })
}

//Abfrage der Aktien Historie
function datarequest() {
    return new Promise(resolve => {
        rl.question('\nIhr Auswahl\n', function (answer) {
            company_choice = companyarray.bestMatches[parseInt(answer) - 1]['1. symbol'];
            resolve('done');
            return new Promise(resolve => {

                var unirest = require("unirest");
                var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data");

                req.query({
                    "frequency": "1d",
                    "filter": "history",
                    "period1": "1546448400",
                    "period2": "1562086800",
                    "symbol": company_choice
                });
                req.headers({
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                    "x-rapidapi-key": "8882db1e5cmsh2ae16f711a15cadp1d29d8jsnbea78110822f"
                });


                req.end(function (res) {
                    fs.writeFileSync('./stockmarket.json',JSON.stringify(res.body) );
                });
                resolve('Done')
            });
        });
    })
}
//Ausgabe der Aktienkurse
function choice(){
    stockarray=require('./stockmarket.json');
    stockarray.prices.forEach(element=>console.log(timeConverter(element.date)+ ' high: '+element.high+ ' low: '+ element.low))
    process.exit()
}
//Unix Time Konverter
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}
//Main asynch Funktion
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
        await datarequest()
    } catch (error) {
    }
    try {
        await choice()
    } catch (error) {
    }
}
//Ausführen des Codes
main();
