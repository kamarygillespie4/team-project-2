const router = require("express").Router();
const apiRoutes = require("./api/apiRoutes");
const homeRoutes = require("./home-route");
const express = require("express");
const app = express();

// const app = express;

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  res.render("all");
});

module.exports = router;

// ACt 20 for instructions on getting the page to load on the local server
