const express = require("express");
const router = express.Router();
// const learningsController = require("../controllers/learnings.controller");
// const projectsController = require("../controllers/projects.controller");
const experienceController = require("../controllers/experience.controller");
// const skillsController = require("../controllers/skills.controller");
// const educationController = require("../controllers/education.controller");

//CRUD EXPERIENCE
router.get("/experiences", experienceController.getAll);
router.post("/experiences", experienceController.create);
router.delete("/experiences/:id", experienceController.delete);
router.put("/experiences/:id", experienceController.update);

//CRUD EDUCATION
//CRUD PROJECTS
//CRUD SKILLS
//CRUD LEARNINGS

module.exports = router;
