var request = require('request');
const fs = require('fs');

const ny_times='AaCI42V4KkN5MPQJ72TP4cZRhQ5iXyQ9';
const unternehmen='Apple Inc';
const von ='2018-04-05';
const bis= '2019-10-30';

function req(){
        request('https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20090101&end_date=20191123&facet_fields=section_name&fq=business&q=' + unternehmen + '&sort=relevance&api-key=' + ny_times, function (error, response, data) {
            fs.writeFileSync('./news.json',data)

        })
}

var put=require('./news');
function out() {
put.response.docs.forEach(element=>console.log(element.abstract))

}
module.exports.put=put;
out;