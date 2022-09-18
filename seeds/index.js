// TODO: make sure dependecies are needed/in here
const { Dish, Recipe } = require("../models");

const sequelize = require("../config/connection");
const recipeSeeds = require("./recipes.data.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await Recipe.bulkCreate(recipeSeeds);
  process.exit(0);
};

seedAll();

// const dishData = [
//   {
//     data_name: "",
//   },
//   {
//     data_name: "",
//   },
//   {
//     data_name: "",
//   },
//   {
//     data_name: "",
//   },
//   {
//     data_name: "",
//   },
// ];

// const seedDish = () => Dish.bulkCreate(dishData);

// module.exports = seedDish;
