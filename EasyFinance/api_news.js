var request = require('request');
const fs = require('fs');

const ny_times='AaCI42V4KkN5MPQJ72TP4cZRhQ5iXyQ9';
const unternehmen='Apple Inc';
const von ='20180405';
const bis= '20191030';

function req(){
        request('https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date='+von+'&end_date='+bis+'&facet_fields=section_name&fq=business&q=' + unternehmen + '&sort=relevance&api-key=' + ny_times, function (error, response, data) {
            fs.writeFileSync('./news.json',data)

        })
}

var put=require('./news');
function out() {
put.response.docs.forEach(element=>console.log(element.abstract))

}
module.exports.put=put;
out;