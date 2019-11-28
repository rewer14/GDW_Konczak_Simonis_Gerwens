'use strict';
const readline = require('readline');
//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');

//Variablen Block
var meteostat = 'YkbGFtyA';
var request = require('request');
var searchcity;
var startdate;
var enddate;
var stationarray = [];
var station;
var weatherarray = [];

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
        request('https://api.meteostat.net/v1/stations/search?q=' + searchcity + '&key=' + meteostat, function (error, response, data) {
            fs.writeFileSync('./station_id.json', data);
            resolve('Done');

        });


    })
}

function getJson() {
    return new Promise(resolve => {
        stationarray = require('./station_id.json');
        if(stationarray.data.length===0){
            console.log('Die Eingebene Stadt ist nicht verfügbar');
            process.exit()
        }
        resolve("Done")
    })
}

//https://api.meteostat.net/v1/history/monthly?station=+ station + '&start=' + startdate + '&end=' + enddate + '&key=' + meteostat
function datarequest() {
    rl.question('\nIhr Auswahl\n',answer=>{
        station = stationarray.data[parseInt(answer) - 1].id;
        return new Promise(resolve => {
            request('https://api.meteostat.net/v1/history/daily?station=' + station + '&start=' + startdate + '&end=' + enddate + '&key=' + meteostat, function (error, response, data) {
                fs.writeFileSync('./weather.json', data);
                weatherarray = require('./weather.json');
                resolve('Done');
                weatherarray.data.forEach(element=>console.log('Datum: '+ element.date +' Min: ' +element.temperature_min +' Max: ' +element.temperature_max+' Windgeschwindigkeit: '+element.windspeed+' Druck: '+element.pressure ))
            });
    });
    })
}

var y = 1;

function ausgabe() {
    new Promise(resolve => {
        stationarray.data.forEach(element => {
            console.log('Auswahl ' + y + ' für ' + element.name);
            y++
        });
        resolve('done')

    })
}


async function main() {
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
        await getJson()

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
        await datarequest()
    } catch (error) {
        console.log(error)
    }
}

main();


