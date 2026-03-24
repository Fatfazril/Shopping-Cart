const prisma = require("../../prisma/client");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");
const { success, error } = require("../utils/response");

// Fields returned for the user object in all responses
const userSelect = { id: true, email: true };

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return error(res, 400, "Email already used");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
      select: userSelect,
    });

    return success(res, 201, "Register success", { user });
  } catch (err) {
    return error(res, 500, err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return error(res, 401, "Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return error(res, 401, "Invalid email or password");

    const token = generateToken(user);

    return success(res, 200, "Login success", {
      token,
      user: { id: user.id, email: user.email },
    });
  } catch (err) {
    return error(res, 500, err.message);
  }
};
