const router = require('express').Router();
const authRoutes = require("./authentication/routes/auth.route");
const portfolioRoutes = require("./portfolio/routes/portfolio.route");

router.use("/auth", authRoutes);
router.use("/portfolio", portfolioRoutes);

module.exports = router;
