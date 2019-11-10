const fs = require("fs");
const readJSON = (path, callback) => {
  fs.readFile(path, "utf8", callback);
};

const pathToCityJson = './cities.json'

const getCity = function( name ){
  const NAME = name
  console.log( "Get City" )
  readJSON( pathToCityJson, function(err, result){
    let cities = JSON.parse(result)
    cities.forEach(city => {
      if( city.name == NAME ) console.log(city)
    });
  });
}

const deleteCity = function( name ){
  console.log( "Delete City" )
  const NAME = name
  let CITYINDEX;
  readJSON( pathToCityJson, function(err, result){
    let cities = JSON.parse(result)
    cities.forEach((city, index) => {
      if( city.name == NAME ){
        CITYINDEX = index
      }
    });
    console.log(cities);
    cities.splice(CITYINDEX, 1)

    fs.writeFile( pathToCityJson, JSON.stringify(cities), err => {
      if (err) {
        console.error(err)
        return
      }
    })
  });

}

const addCity = function( city ){
  // TODO: Sortiert einfügen.
  console.log( "Add City" )
  readJSON( pathToCityJson, function(err, result){
    let cities = JSON.parse(result)
    cities.push( city );
    fs.writeFile( pathToCityJson, JSON.stringify(cities), err => {
      if (err) {
        console.error(err)
        return
      }
    })
  });
  
}

module.exports = {
  readJSON,
  getCity,
  deleteCity,
  addCity
};
