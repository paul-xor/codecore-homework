const express = require("express");
//const knex = require("../db/client");
const router = express.Router();

// NAME: posts#new, METHOD: GET, PATH: /posts/new
router.get("/new", (req, res) => {
    res.render("posts/new");
  });

module.exports = router;