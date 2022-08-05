const router = require("express").Router();

const companiesController = require("../controllers/companies.controller");
router.get("/companies", companiesController.getAll);
// router.get("/companies/:id", companiesController.getOne);
router.post("/companies", companiesController.create);
router.delete("/companies/:id", companiesController.delete);

module.exports = router;
