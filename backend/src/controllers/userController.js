require("dotenv").config()

const userService = require('../services/userService.js');
const jwt = require('jsonwebtoken');




exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await userService.register(username, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



exports.loginUser = async (req, res) => {
    try {
      const {username, password} = req.body;
      const user = await userService.login(username, password);

      const jwtUser = {username}
      const token = jwt.sign(jwtUser, process.env.ACCESS_TOKEN_SECRET)
      res.status(201).json({"accessToken": token});

    } catch (err) {
      res.status(400).json({error: err.message})
    }
};