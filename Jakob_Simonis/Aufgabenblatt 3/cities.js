const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin, 
     output: process.stdout 
    });
//Funktion zum Einlesen 


function Stadt(name,einwohnerzahl,bundesland){
    this.name=name;
    this.einwohnerzahl=einwohnerzahl;
    this.bundesland=bundesland;
}
//Objekt fuer Stadt

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
//Staedte hinzufuegen

var cities = [Berlin, Hamburg, Muenchen, Koeln, FrankfurtAmMain, Stuttgart, Duesseldorf, Leipzig, Dortmund, Essen];
//Staedte in Array

const fs=require('fs');         //fs einbinden
const jsonpath='cities.json';   //Adresse der .json

const pushtofile=function(){
    fs.writeFileSync(jsonpath,JSON.stringify(cities,null,4),function(err){
        if(err) throw err;
        console.log('complete');      
    });
};
//Array in .json file

//pushtofile();

rl.question('Geben sie ihre Wahl an:\n1fuer Loeschen\n2fuer Hinzufuegen: ',function(answer) {

    eingabe = parseInt(answer)
    auswahl()
});
//Eingabe fuer Menue


function auswahl(){

    switch (eingabe) {
        case 1: del(); break;
        case 2: add(); break;
        default: console.log("\nFalsche Eingabe!\n"); pushtofile(); process.exit(); break;
    }
}
//Switch für Menueauswahl


function del() {

    rl.question('Geben sie die Stadt ein, die sie loeschen wollen: ',function(answer){
loop1:
        for(i=0; i<cities.length; i++){
            if(cities[i].name==answer) {
                    delete cities[i];
                    pushtofile();
                    break loop1;
            }
        }
    rl.close();
    });
}

var neuerName;
var neueEinwohnerzahl;
var neuesBundesland;

function add() {

    rl.question('Geben sie den Namen der Stadt ein, die sie hinzufuegen wollen: ',function(answer){
        
        neuerName = answer;


        rl.question('Geben sie die Einwohnerzahl der Stadt ein: ',function(answer2){
            
            neueEinwohnerzahl = parseInt(answer2);
        

            rl.question('Geben sie das Bundesland der Stadt ein, die sie hinzufuegen wollen: ',function(answer3){
                
                neuesBundesland = answer3;
                
                rl.close();

                
                let neueStadt = new Stadt(neuerName, neueEinwohnerzahl, neuesBundesland);
                cities.push(neueStadt);
                pushtofile();

            }); 
         }); 
    });

}


try {



} catch (err) {

   

}

