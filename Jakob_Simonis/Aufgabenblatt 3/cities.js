/*const fs = require ('fs');

const readJSON = (path, callback) => {
    fs.readFile(path,'utf8',callback);
};

module.exports = {
    readJSON
};
*/

function Stadt(name,einwohnerzahl,bundesland){
    this.name=name;
    this.einwohnerzahl=einwohnerzahl;
    this.bundesland=bundesland;
}

let Berlin = new Stadt('Berlin', 3748148, 'Berlin');
let Hamburg = new Stadt('Hamburg', 1891810, 'Hamburg')
let Muenchen = new Stadt ('Muenchen', 1471508, 'Muenchen');
let Koeln = new Stadt ('Koeln', 1085664, 'Nordrheinwestfalen');
let FrankfurtAmMain = new Stadt ('Frankfurt am Main', 753056, 'Hessen');
let Stuttgart = new Stadt ('Stuttgart', 634830, 'Baden Württemberg');
let Duesseldorf = new Stadt ('Duesseldorf', 619294, 'Nordrheinwestfalen');
let Leipzig = new Stadt ('Leipzig', 587857, 'Sachsen');
let Dortmund=new Stadt('Dortmund',587010,'Nordrheinwestfalen');
let Essen = new Stadt ('Essen', 583109, 'Nordrheinwestfalen');
var cities = [Berlin, Hamburg, Muenchen, Koeln, FrankfurtAmMain, Stuttgart, Duesseldorf, Leipzig, Dortmund, Essen];
const fs=require('fs');
const jsonpath='cities.json';

const pushtofile=function(){
    fs.writeFileSync(jsonpath,JSON.stringify(cities,null,4),function(err){
        if(err) throw err;
        console.log('complete');
        
    });
};

function del() {



}

function add(city) {



}

pushtofile();

