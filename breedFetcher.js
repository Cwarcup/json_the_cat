const request = require('request');


const fetchBreedDescription = (breed, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Breed ${breed} not found`, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};

// before refactor
// const searchTerm = process.argv[2];
// request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, (error, response, body) => {
//   if (error) {
//     console.log(`There was an error with the request`);
//     if (error.code === 'ENOTFOUND') {
//       console.log(`The URL provided was not found.\nDouble check the URL and try again.`);
//     }
//   } else {
//     const data = JSON.parse(body); // body is a sting
    
//     // if search term is not found, data.length is 0
//     if (data.length === 0) {
//       console.log(`Was unable to find a breed with the name ${searchTerm}\nTry a different breed name`);
  
//     }
//     // if search term is found, data.length is 1, console.log the name of the breed
//     console.log(`Found a breed with the name ${searchTerm}. Here is the breed's description:`);
//     console.log(data[0]);
//   }
// });