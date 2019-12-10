'use strict';
const readline = require('readline');
var request = require('request');
const fs = require('fs');
const api = require('./api_stockmarket');

//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Variablen Block
var meteostat = 'YkbGFtyA';
var stationarray = [];
var station;
var weatherarray = [];


//API Abruf Station id
function stationrequest(searchcity) {
    return new Promise(resolve => {
        request('https://api.meteostat.net/v1/stations/search?q=' + searchcity + '&key=' + meteostat, function (error, response, data) {
            fs.writeFileSync('./station_id.json', data);
            resolve('Done');

        });
    })
}

function getJson() {
    return new Promise(resolve => {
        let y = 1;
        stationarray = require('./station_id.json');
        if (stationarray.data.length === 0) {
            console.log('Die Eingebene Stadt ist nicht verfügbar');
            process.exit();
        } else {
            stationarray.data.forEach(element => {
                console.log('Auswahl ' + y + ' für ' + element.name);
                y++
            });
        }
        resolve("Done")
    })
}

//Wetterdaten abfrage
function datarequest(startdate, enddate, searchcompany) {
    rl.question('\nIhr Auswahl\n', answer => {
        station = stationarray.data[parseInt(answer) - 1].id;
        return new Promise(resolve => {
            request('https://api.meteostat.net/v1/history/daily?station=' + station + '&start=' + startdate + '&end=' + enddate + '&key=' + meteostat, function (error, response, data) {
                fs.writeFileSync('./weather.json', data);
                weatherarray = require('./weather.json');
                resolve('Done');
                weatherarray.data.forEach(element => console.log('Datum: ' + element.date + ' Min: ' + element.temperature_min + ' Max: ' + element.temperature_max + ' Windgeschwindigkeit: ' + element.windspeed + ' Druck: ' + element.pressure))
                api.main(searchcompany, startdate, enddate)
            });
        });
    })
}

//Main asynch Funktion
async function main(searchcity, startdate, enddate, searchcompany) {
    try {
        await stationrequest(searchcity)
    } catch (error) {
        console.log(error)
    }
    try {
        await getJson()

    } catch (error) {
        console.log(error)
    }
    try {
        await datarequest(startdate, enddate, searchcompany)
    } catch (error) {
        console.log(error)
    }
}


module.exports.main = main;
module.exports.stationrequest = stationrequest;
module.exports.getJson = getJson;
module.exports.datarequest = datarequest;


