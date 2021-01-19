require("dotenv").config();
const { Router } = require("express");
const User = require("../models/user");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const route = Router();

//validation
const { body, validationResult } = require("express-validator");

route.post(
  "/register",
  body("email").isEmail(),
  body(
    "password",
    "Password nust be longer than 3 and shorter than 12"
  ).isLength({ min: 3, max: 12 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} aleready exist` });
      }
      const hashPassword = await bc.hash(password, 7);
      const user = await new User({ email, password: hashPassword }).save();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const candidate = await User.findOne({ email });

    if (!candidate) {
      return res
        .status(400)
        .json({ message: `User with email ${email} not found` });
    }

    const verifyPassword = await bc.compare(password, candidate.password);
    if (verifyPassword) {
      const token = jwt.sign(candidate._doc, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).json(token);
    } else {
      res.status(400).json({ message: "Invalid Password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = route;
