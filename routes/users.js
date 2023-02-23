const express = require("express");
const router = express.Router();

/* Controllers */
const usersController = require("../controllers/users");

router.post("/sign-up", (req, res) => {
  usersController.handleNewUser(req, res);
});

router.post("/login", (req, res) => {
  usersController.handleLogin(req, res);
});

module.exports = router;
