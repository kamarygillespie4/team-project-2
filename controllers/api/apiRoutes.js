const router = require("express").Router();
const express = require("express");
// const port = 3001;
const axios = require("axios");
const app = express();
const { DailyRecipe } = require("../../models");

let todayApiDailyRecipe;

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
    todayApiDailyRecipe = response.data.meals[0];
    console.log(todayApiDailyRecipe);
    router.post("/", async (req, res) => {
      try {
        // take dailyRecipe object and post to database
        const dbRecipe = await DailyRecipe.create({});
      } catch (err) {
        console.log(err);
      }
    });
  })
  .catch(function (error) {
    console.error(error);
  });

console.log(this);

module.exports = router;
