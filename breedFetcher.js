const request = require('request');
// https://api.thecatapi.com/v1/breeds/search

const fetchBreedDescription = (breed, callback) => {
  //make search url variable so that its less messy code
  let search = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(search, (error, response, body) => {
    /*
    ***dont need these
    console.log(typeof body);
    console.log(body);
    */

    if (error) {
      callback(`ERROR: ${error}`, null);
    }

    //first data entry: breed info, make variable
    const data = JSON.parse(body);
    //first entry at index 0
    const breedInfo = data[0];
    
    //if no description, its invalid
    if (breedInfo.length === 0) { 
      callback('Invalid breed');
    }

    if (breedInfo) { //error will be null if successful
      callback(null, breedInfo.description);
    }

  });

};

module.exports = {fetchBreedDescription};
