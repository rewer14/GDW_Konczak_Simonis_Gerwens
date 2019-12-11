'use strict';
//require
const readline = require('readline');

//readline
const rs = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Eingabe des gesuchten Unternehmens
function company() {
    return new Promise(resolve => {
        rs.question('Geben Sie den Namen das gesuchte Unternehmen an\n', answer => {
            resolve(answer);
        });

    })
}

module.exports.company = company;