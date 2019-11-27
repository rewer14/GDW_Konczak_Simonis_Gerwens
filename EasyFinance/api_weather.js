'use strict';
const readline = require('readline');
//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');
var openweatherkey='04933593b9bfcebbd6eb4c1f5312cefe';
var request = require('request');

request('https://api.openweathermap.org/data/2.5/weather?q=Gummersbach&appid='+openweatherkey, function (error, response, data) {
        fs.writeFileSync('./weather.json', JSON.stringify(data, null, 4));
        process.exit()
        console.log(data) // Print the google web page.
});


