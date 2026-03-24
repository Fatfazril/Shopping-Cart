const { verifyToken } = require("../utils/token");
const { error } = require("../utils/response");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return error(res, 401, "Unauthorized");

    const token = authHeader.split(" ")[1]; // "Bearer <token>"
    req.user = verifyToken(token);           // { id: userId }

    next();
  } catch {
    return error(res, 401, "Invalid token");
  }
};