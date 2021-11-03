const express = require("express");
const router = express.Router();
// const learningsController = require("../controllers/learnings.controller");
// const projectsController = require("../controllers/projects.controller");
const experienceController = require("../controllers/experience.controller");
// const skillsController = require("../controllers/skills.controller");
// const educationController = require("../controllers/education.controller");

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
