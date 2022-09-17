// TODO: add other dependencies
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const Dropbox = require("dropbox");

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");

const hbs = exphbs.create({});

// Set up sessions with cookies
const sess = {
  secret: "Super secret secret",
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// app.use(require("./controllers/"));
// Reset this to false before you put it into production.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
