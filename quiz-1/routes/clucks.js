const express = require("express");
//const knex = require("../db/client");
const router = express.Router();

// NAME: posts#new, METHOD: GET, PATH: /clucks/new
router.get("/signIn", (req, res) => {
      res.render("clucks/signIn");
  });




module.exports = router;