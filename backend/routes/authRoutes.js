// routes/api.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Protected endpoint" });
});

module.exports = router;
