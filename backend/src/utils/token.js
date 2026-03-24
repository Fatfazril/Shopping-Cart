const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = "1h";

exports.generateToken = (user) =>
  jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

exports.verifyToken = (token) =>
  jwt.verify(token, JWT_SECRET);