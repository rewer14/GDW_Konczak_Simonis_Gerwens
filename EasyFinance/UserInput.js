'use strict';
//require
const rl = require('readline');

//readline
const rs = rl.createInterface({
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