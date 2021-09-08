const express = require("express");
const router = express.Router();
// const learningsController = require("../controllers/portfolio/learnings.controller");
// const projectsController = require("../controllers/portfolio/projects.controller");
const experienceController = require("../controllers/portfolio/experience.controller");
// const skillsController = require("../controllers/portfolio/skills.controller");
// const educationController = require("../controllers/portfolio/education.controller");

//CRUD EXPERIENCE
router.get("/experience", experienceController.getAll);
router.post("/experience", experienceController.create);
router.delete("/experience/:id", experienceController.delete);
router.put("/experience/:id", experienceController.update);

//CRUD EDUCATION
//CRUD PROJECTS
//CRUD SKILLS
//CRUD LEARNINGS

module.exports = router;
