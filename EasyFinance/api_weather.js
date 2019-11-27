'use strict'
const readline = require('readline');
//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const weatherbyname=function (name) {
var key='04933593b9bfcebbd6eb4c1f5312cefe';
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ name+ '&appid'+key)
    .then(function(resp) {return resp.json})
    .then(function (data) {
        console.log(data);
    })
    .catch(function () {
    })
};
window.onload=function () {
weatherbyname(Gummersbach);
};

