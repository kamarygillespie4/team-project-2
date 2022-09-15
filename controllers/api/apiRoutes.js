const router = require("express").Router();
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://themealdb.p.rapidapi.com/random.php",
  headers: {
    "X-RapidAPI-Key": "8bf19e1dc7msh6d202f14445b47dp11f059jsncde1469bfcfb",
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

module.exports = router;
