const router = require("express").Router();

const companiesController = require("../controllers/companies.controller");
const emailTemplatesController = require("../controllers/emailTemplates.controller");
const processesController = require("../controllers/processes.controller");
const sendingConfigsController = require("../controllers/sendingConfigs.controller");

//COMPANIES
router.get("/companies", companiesController.getAll);
// router.get("/companies/:id", companiesController.getOne);
router.post("/companies", companiesController.create);
router.delete("/companies/:id", companiesController.delete);

//EMAIL TEMPLATES
router.get("/emailTemplates", emailTemplatesController.getAll);
// router.get("/emailTemplates/:id", emailTemplatesController.getOne);
router.post("/emailTemplates", emailTemplatesController.create);
router.delete("/emailTemplates/:id", emailTemplatesController.delete);

//SENDINGCONFIGS
router.get("/sendingConfigs", sendingConfigsController.getAll);
// router.get("/sendingConfigs/:id", sendingConfigsController.getOne);
router.post("/sendingConfigs", sendingConfigsController.create);
router.delete("/sendingConfigs/:id", sendingConfigsController.delete);

//PROCESSES
router.get("/processes", processesController.getAll);
// router.get("/processes/:id", processesController.getOne);
router.post("/processes", processesController.create);
router.delete("/processes/:id", processesController.delete);

module.exports = router;
