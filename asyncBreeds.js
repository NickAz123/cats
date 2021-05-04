// asyncBreeds.js
const fs = require('fs');

const returnData = (data) => {
  returnData(data);
}

const breedDetailsFromFile = function(breed, returnData) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log("In readFile's Callback: it has the data.");
    
    if (!error) { 
      returnData(data);
    } else {
      returnData(undefined);
    }
  });
};

//call function
// breedDetailsFromFile('Bombay', returnData);
// breedDetailsFromFile(`Bombay`, returnData);
module.exports = breedDetailsFromFile;