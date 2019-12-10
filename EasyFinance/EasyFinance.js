const api_stockmarket = require('./api_stockmarket');
const userinput = require('./UserInput');

var searchcity;
var searchcompany;
var startdate;
var enddate;

async function userinterface() {
    try {
        searchcompany = await userinput.company();
    } catch (e){

    }
    try {
        await api_stockmarket.main(searchcompany)
    } catch (e) {
    }
}

userinterface();