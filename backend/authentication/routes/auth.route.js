const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const jwt = require("jsonwebtoken");

router.post("/login", authController.login);
router.post("/register", authController.register);

router.get("/logout",hasValidToken, authController.logout);
router.get("/user", hasValidToken, authController.get_admin);

function hasValidToken(req, res, next) {
  const cookie = req.cookies["jwt"];

  if (!cookie) {
    return res.status(400).send({ message: "No token", error: true });
  }

  const claims = jwt.verify(cookie, process.env.JWT_SECRET);

  if (!claims) {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(400).send({ message: "Bad cookie", error: true });
  }
  req.userId = claims._id;
  next();
}
module.exports = router;
