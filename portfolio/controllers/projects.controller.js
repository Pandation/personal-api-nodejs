const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });

    if (user) {
      const isValidPwd = await bcrypt.compare(password, user.password);
      if (isValidPwd) {
        const userObj = generateUserObj(user.username);
        return res.json(userObj);
      }
      return res.json({
        auth: false,
        message: "Wrong username/password combination.",
      });
    } else
      res.json({
        auth: false,
        message: "Wrong username/password combination.",
      });
  } catch (err) {
    res.json({ auth: false, message: err.message });
  }
};

//fonctions à ranger/ classe avec méthodes statiques?
function generateUserObj(username) {
  const token = generateToken(username);
  const refreshToken = generateRefreshToken(username);
  return {
    username,
    auth: true,
    token,
    refreshToken,
  };
}

function generateToken(username) {
  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "15m" });
}

function generateRefreshToken(username) {
  return jwt.sign({ username }, process.env.REFRESH_SECRET);
}
