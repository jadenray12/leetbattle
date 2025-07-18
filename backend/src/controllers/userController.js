const userService = require('../services/userService.js');

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



    } catch (err) {
        res.status(400).json({error: message})
    }
};