const express = require("express");
const router = express.Router();
const learningsController = require("../controllers/learnings.controller");
const projectsController = require("../controllers/projects.controller");
const experiencesController = require("../controllers/experiences.controller");
const skillsController = require("../controllers/skills.controller");
const educationsController = require("../controllers/educations.controller");

//CRUD EXPERIENCE
router.get("/experiences", experiencesController.getAll);
router.post("/experiences", experiencesController.create);
router.delete("/experiences/:id", experiencesController.delete);
router.put("/experiences/:id", experiencesController.update);

router.get("/educations", educationsController.getAll);
router.post("/educations", educationsController.create);
router.delete("/educations/:id", educationsController.delete);
router.put("/educations/:id", educationsController.update);

router.get("/learnings", learningsController.getAll);
router.post("/learnings", learningsController.create);
router.delete("/learnings/:id", learningsController.delete);
router.put("/learnings/:id", learningsController.update);

router.get("/skills", skillsController.getAll);
router.post("/skills", skillsController.create);
router.delete("/skills/:id", skillsController.delete);
router.put("/skills/:id", skillsController.update);

router.get("/projects", projectsController.getAll);
router.post("/projects", projectsController.create);
router.delete("/projects/:id", projectsController.delete);
router.put("/projects/:id", projectsController.update);


//CRUD EDUCATION
//CRUD PROJECTS
//CRUD SKILLS
//CRUD LEARNINGS

module.exports = router;
