const express = require("express");
const router = express.Router();


router.get("/hello", (request, response) => {
  response.send("Hello, from Clucks!");
});

router.get("/", (request, response) => {
  response.render("welcome");
});


const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
router.post("/sign_in", (req, res) => {
  const username = req.body.username;

  res.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  res.redirect("/");
});

router.post("/sign_out", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

router.get("*", (req,res) =>{
  res.send(" <strong>404 Page not found.</strong> ");
});

module.exports = router;
