const router = require("express").Router();
const express = require("express");
// const port = 3001;
const axios = require("axios");
const app = express();
const { Recipe } = require("../../models");
const { restart } = require("nodemon");

let todayApiDailyRecipe;
process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD

// axios
//   .request(options)
//   .then(async function (response) {
//     for (let i = 0; i < response.data.meals.length; i++) {
//       todayApiDailyRecipe = response.data.meals[i];
//       console.log(todayApiDailyRecipe);
//       let allIngredients = "";
//       try {

//         //TODO take dailyRecipe object and post to database
//         console.log(todayApiDailyRecipe.strInstructions);
//         const dbRecipe = await Recipe.create({
//           title: todayApiDailyRecipe.strMeal,
//           instructions: JSON.stringify(todayApiDailyRecipe.strInstructions),
//           strIngredient1:
//             todayApiDailyRecipe.strMeasure1 +
//             " " +
//             todayApiDailyRecipe.strIngredient1,
//           strIngredient2:
//             todayApiDailyRecipe.strMeasure2 +
//             " " +
//             todayApiDailyRecipe.strIngredient2,
//           strIngredient3:
//             todayApiDailyRecipe.strMeasure3 +
//             " " +
//             todayApiDailyRecipe.strIngredient3,
//           strIngredient4:
//             todayApiDailyRecipe.strMeasure4 +
//             " " +
//             todayApiDailyRecipe.strIngredient4,
//           strIngredient5:
//             todayApiDailyRecipe.strMeasure5 +
//             " " +
//             todayApiDailyRecipe.strIngredient5,
//           strIngredient6:
//             todayApiDailyRecipe.strMeasure6 +
//             " " +
//             todayApiDailyRecipe.strIngredient6,
//           strIngredient7:
//             todayApiDailyRecipe.strMeasure7 +
//             " " +
//             todayApiDailyRecipe.strIngredient7,
//           strIngredient8:
//             todayApiDailyRecipe.strMeasure8 +
//             " " +
//             todayApiDailyRecipe.strIngredient8,
//           strIngredient9:
//             todayApiDailyRecipe.strMeasure9 +
//             " " +
//             todayApiDailyRecipe.strIngredient9,
//           strIngredient10:
//             todayApiDailyRecipe.strMeasure10 +
//             " " +
//             todayApiDailyRecipe.strIngredient10,
//           strIngredient11:
//             todayApiDailyRecipe.strMeasure11 +
//             " " +
//             todayApiDailyRecipe.strIngredient11,
//           strIngredient12:
//             todayApiDailyRecipe.strMeasure12 +
//             " " +
//             todayApiDailyRecipe.strIngredient12,
//           strIngredient13:
//             todayApiDailyRecipe.strMeasure13 +
//             " " +
//             todayApiDailyRecipe.strIngredient13,
//           strIngredient14:
//             todayApiDailyRecipe.strMeasure14 +
//             " " +
//             todayApiDailyRecipe.strIngredient14,
//           strIngredient15:
//             todayApiDailyRecipe.strMeasure15 +
//             " " +
//             todayApiDailyRecipe.strIngredient15,
//           strIngredient16:
//             todayApiDailyRecipe.strMeasure16 +
//             " " +
//             todayApiDailyRecipe.strIngredient16,
//           strIngredient17:
//             todayApiDailyRecipe.strMeasure17 +
//             " " +
//             todayApiDailyRecipe.strIngredient17,
//           strIngredient18:
//             todayApiDailyRecipe.strMeasure18 +
//             " " +
//             todayApiDailyRecipe.strIngredient18,
//           strIngredient19:
//             todayApiDailyRecipe.strMeasure19 +
//             " " +
//             todayApiDailyRecipe.strIngredient19,
//           strIngredient20:
//             todayApiDailyRecipe.strMeasure20 +
//             " " +
//             todayApiDailyRecipe.strIngredient20,
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   })

//   .catch(function (error) {
//     console.error(error);
//   });

console.log(this);

module.exports = router;