const User = require("../models/userModels.js");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const authMiddlewares = require("../middlewares/authMiddlewares.js");

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) throw new Error("User with this email id already exists");
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await User.create(req.body);
    res
      .status(200)
      .json({ message: "User successfully registered", success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("User not exist ");
    }

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isCorrectPassword) throw new Error("Invalid password");

    const token = jwt.sign({ userId: user._id }, process.env.secret_jwt, {
      expiresIn: "1d",
    });
    res.status(200).json({
      message: "User logged In Successfully",
      success: true,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});

router.get("/get-current-user", authMiddlewares, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.status(200).json({
      message: "User fetched Successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});
module.exports = router;
