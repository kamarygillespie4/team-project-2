// TODO: add other dependencies
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// app.use(require("./controllers/"));
// Reset this to false before you put it into production.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
