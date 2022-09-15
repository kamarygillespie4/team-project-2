const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./home-route");

router.use("/call", apiRoutes);
router.use("/products", homeRoutes);

module.exports = router;
