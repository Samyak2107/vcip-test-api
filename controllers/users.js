const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const handleNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please provide all fields" });
  } else {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        res.status(400).json({ error: true, message: "User already exists!" });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User({
          name: name,
          email: email,
          password: hash,
        });
        const savedUser = await newUser.save();
        res.status(201).json({
          error: false,
          data: savedUser,
          message:
            "Thankyou for registering with us! Kindly login to proceed to our platform!",
        });
      }
    } catch (err) {
      res.status(500).json({ error: true, message: err.message });
    }
  }
};

const handleLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Please provide all fields!" });
  } else {
    const user = await User.findOne({ email: email });
    if (!user) {
      res
        .status(400)
        .json({ error: true, message: "User does not exist in our system!" });
    } else {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        res
          .json({
            error: false,
            data: user,
            message: "User logged in successfully!",
          })
          .status(200);
      } else {
        res.status(400).json({ error: true, message: "Incorrect password" });
      }
    }
  }
};

module.exports = { handleNewUser, handleLogin };
