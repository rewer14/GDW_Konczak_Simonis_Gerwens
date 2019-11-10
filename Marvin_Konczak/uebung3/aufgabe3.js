const JSONReader = require("./jasonreader.js");

JSONReader.addCity({name: "Vertania City", einwohnerzahl: 10, bundesland: "Kanto"});
JSONReader.getCity("Vertania City");
JSONReader.deleteCity("Vertania City");