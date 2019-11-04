/*const fs = require ('fs');

const readJSON = (path, callback) => {
    fs.readFile(path,'utf8',callback);
};

module.exports = {
    readJSON
};
*/

var express = require ('express');
const cities = newObject();
var app = express();
app.local.cities = require('./cities.json');

console.log(cities.einwohnerzahl);