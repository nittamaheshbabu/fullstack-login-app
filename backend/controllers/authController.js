const User = require("../models/User");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user in MongoDB
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful", username: user.username });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// Add a register function to CREATE users in DB
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};