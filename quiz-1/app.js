const path = require("path");
const express = require("express");

const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");


const app = express();
app.set("view engine", "ejs");


// MIDDLEWARE
// LOGGER
app.use(logger("dev"));

// STATIC ASSETS
app.use(express.static(path.join(__dirname, "public")));

// URLENCODED
app.use(express.urlencoded({ extended: true }));

// METHOD OVERRIDE
app.use(
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method;
      return method;
    }
  })
);

// COOKIE PARSER
app.use(cookieParser());

// CUSTOM MIDDLEWARE
app.use((req, res, next) => {
  console.log("Cookies:", req.cookies);
  const username = req.cookies.username;

  res.locals.username = "";
  if (username) {
    res.locals.username = username;
    console.log(`Signed in as ${username}`);
  }
  next();
});

// ROUTES
const clucksRouter = require("./routes/clucks");
const baseRouter = require("./routes/base");

app.use("/", baseRouter);
app.use("/clucks", clucksRouter);


// RUN SERVER
const PORT = 5050;
const HOST = "localhost";
app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});