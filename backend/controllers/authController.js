const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUserByUsername, createUser } = require("../models/User");

async function register(req, res) {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, hashedPassword);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to register user" });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
}

module.exports = {
  register,
  login,
};
