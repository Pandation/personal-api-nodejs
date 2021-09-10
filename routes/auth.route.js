const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/login", authController.login);
router.get("/refresh", authController.refresh);

// router.post("/logout", authController.logout);

module.exports = router;
