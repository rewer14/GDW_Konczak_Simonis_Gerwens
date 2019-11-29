'use strict';
const readline = require('readline');
const request = require('request');
const fs = require('fs');
const unirest = require("unirest");

//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Variablen Block
var meteostat_apikey = 'YkbGFtyA';
var searchcity;
var startdate;
var enddate;
var stationarray = [];
var station;
var weatherarray = [];
var iterator2 = 1;

var searchcompany;
var companyarray=[];
var company_choice=[];
var stockarray=[];
var alphavantage_apikey='354J0V14M49Y1Y2D';
var iterator=1;

//Abfrage der Stadt
function city() {
    return new Promise(resolve => {
        rl.question('Geben Sie den Namen der Stadt an\n', answer => {
            searchcity = answer;
            resolve('Done');
        })
    })
}

//Startdatum
function date() {
    return new Promise(resolve => {
        rl.question('Geben Sie das Stat Datum(Format:YYYY-MM-DD) ein:\n', answer => {
            startdate = answer;
            rl.question('Geben Sie das End Datum(Format:YYYY-MM-DD) ein:\n', answer => {
                enddate = answer;
                resolve('Done');
            });
        })
    })
}


//API Abruf Station id
function stationrequest() {
    return new Promise(resolve => {
        request('https://api.meteostat_apikey.net/v1/stations/search?q=' + searchcity + '&key=' + meteostat_apikey, function (error, response, data) {
            fs.writeFileSync('./station_id.json', data);
            resolve('Done');

        });


    })
}
//Read JSON File stations
function getJsonforStations() {
    return new Promise(resolve => {
        stationarray = require('./station_id.json');
        if(stationarray.data.length===0){
            console.log('Die Eingebene Stadt ist nicht verfügbar');
            process.exit()
        }
        resolve("Done")
    })
}

//https://api.meteostat_apikey.net/v1/history/monthly?station=+ station + '&start=' + startdate + '&end=' + enddate + '&key=' + meteostat_apikey
function weatherrequest() {
    rl.question('\nIhr Auswahl\n',answer=>{
        station = stationarray.data[parseInt(answer) - 1].id;
        return new Promise(resolve => {
            request('https://api.meteostat_apikey.net/v1/history/daily?station=' + station + '&start=' + startdate + '&end=' + enddate + '&key=' + meteostat_apikey, function (error, response, data) {
                fs.writeFileSync('./weather.json', data);
                weatherarray = require('./weather.json');
                resolve('Done');
                weatherarray.data.forEach(element=>console.log('Datum: '+ element.date +' Min: ' +element.temperature_min +' Max: ' +element.temperature_max+' Windgeschwindigkeit: '+element.windspeed+' Druck: '+element.pressure ))
            });
        });
    })
}



function ausgabe() {
    new Promise(resolve => {
        stationarray.data.forEach(element => {
            console.log('Auswahl ' + iterator2 + ' für ' + element.name);
            iterator2++
        });
        resolve('done')

    })
}


function companiesrequest() {
    return new Promise(resolve => {
        request('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+searchcompany+'&apikey='+alphavantage_apikey, function (error, response, data) {
            fs.writeFileSync('./companies.json', data);
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
        companyarray = require('./companies.json');
        if(companyarray.bestMatches.length===0){
            console.log('Das eingebene Unternehmen ist nicht verfügbar');
            process.exit()
        }
        resolve("Done")
    })
}

function ausgabe2() {
    new Promise(resolve => {
        companyarray.bestMatches.forEach(element => {
            console.log('Auswahl ' + iterator + ' für ' + element['2. name']);
            iterator++
        });
        resolve('done');
    })
}
function stockrequest() {
    return new Promise(resolve => {
        rl.question('\nIhr Auswahl\n', function (answer) {
            company_choice = companyarray.bestMatches[parseInt(answer) - 1]['1. symbol'];
            resolve('done');
            return new Promise(resolve => {
                var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data");

                req.query({
                    "frequency": "1d",
                    "filter": "history",
                    "period1": Date.parse(startdate),
                    "period2": Date.parse(enddate),
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

function choice(){
    stockarray=require('./stockmarket.json');
    stockarray.prices.forEach(element=>console.log(timeConverter(element.date)+ ' high: '+element.high+ ' low: '+ element.low))
    process.exit()
}
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}

async function stock() {

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
        await ausgabe2()
    } catch (error) {
    }
    try {
        await stockrequest()
    } catch (error) {
    }
    try {
        await choice()
    } catch (error) {
    }
}

async function weather() {
    try {
        await city()
    } catch (error) {
        console.log(error);
    }
    try {
        await stationrequest()
    } catch (error) {
        console.log(error)
    }
    try {
        await getJsonforStations()

    } catch (error) {
        console.log(error)
    }
    try {
        await date()
    } catch (error) {
        console.log(error);
    }
    try {
        await ausgabe();
    } catch (error) {
        console.log(error)
    }

    try {
        await weatherrequest()
    } catch (error) {
        console.log(error)
    }
}

async function main () {
    try {
        await weather()
    }catch (error) {
    }try {
        await stock()
    }catch (error) {

    }
}
main();
