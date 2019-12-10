const api_weather = require('./api_weather');
const userinput = require('./UserInput');

var searchcity;
var searchcompany;
var startdate;
var enddate;

async function userinterface() {
    try {
        searchcity = await userinput.city();
    } catch (e) {
    }
    try {
        searchcompany = await userinput.company();
    } catch (e) {
    }
    try {
        startdate = await userinput.startdate();
    } catch (e) {
    }
    try {
        enddate = await userinput.enddate();
    } catch (e) {
    }
    try {
        await api_weather.main(searchcity, startdate, enddate, searchcompany)
    } catch (e) {
    }
}

userinterface();