// TODO: make sure dependecies are needed/in here
const { Dish } = require("../models");

const dishData = [
  {
    data_name: "",
  },
  {
    data_name: "",
  },
  {
    data_name: "",
  },
  {
    data_name: "",
  },
  {
    data_name: "",
  },
];

const seedDish = () => Dish.bulkCreate(dishData);

module.exports = seedDish;
