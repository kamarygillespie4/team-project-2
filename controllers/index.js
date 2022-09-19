const router = require("express").Router();

const apiRoutes = require("./api");
const dailyRecipe = require("./api/apiRoutes");
const homeRoutes = require("./api/home-route");
const express = require("express");
const app = express();
const postRoutes = require('./api/post-routes');

// const app = express;

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/post", postRoutes);

router.get("/", async (req, res) => {
  res.render("all-recipes", { dailyRecipe });
});

module.exports = router;

// ACt 20 for instructions on getting the page to load on the local server

// ONE PULL A DAY FROM API, put recipe in database table. Display recipe from that day on front end page.

// Back end makes call to api once a day (00:00 hours), api data is input into database (need to change model for recipe), front end pulls from database and displays on screen (front end would just pull most recent data from table). If they like the recipe, save it to their user table
