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
var stock;
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
            rl.close()
            resolve('Done');
        });

    })
}
function getJson() {
    return new Promise(resolve => {
       companyarray = require('./companis.json');
        if(companyarray.length===0){
            console.log('Die Eingebene Stadt ist nicht verfügbar');
            process.exit()
        }
        resolve("Done")
    })
}
var y=0;
function ausgabe() {
    new Promise(resolve => {
        companyarray.bestMatches.forEach(element => {
            console.log('Auswahl ' + y + ' für ' + element['2. name']);
            y++
        });
        resolve('done');
        process.exit();

    })
}

async function main() {
    try{
     await company()
    }catch (error) {
    }try {
        await companiesrequest()
    }catch (error) {
    }try {
        await getJson()
    }catch (error) {
    }try {
        await ausgabe()
    }catch (error) {
    }

}
main();

