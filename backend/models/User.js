const db = require("../config/db");

async function getUserByUsername(username) {
  const [rows, fields] = await db.execute("SELECT * FROM users WHERE username = ?", [username]);
  return rows.length > 0 ? rows[0] : null;
}

async function createUser(username, hashedPassword) {
  const [rows, fields] = await db.execute("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword]);
  return rows;
}

module.exports = {
  getUserByUsername,
  createUser,
};
