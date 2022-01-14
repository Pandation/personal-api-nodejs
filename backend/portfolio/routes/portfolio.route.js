const express = require("express");
const router = express.Router();
const learningsController = require("../controllers/learnings.controller");
const projectsController = require("../controllers/projects.controller");
const experiencesController = require("../controllers/experiences.controller");
const skillsController = require("../controllers/skills.controller");
const educationsController = require("../controllers/educations.controller");
const path = require('path');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      console.log(file)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

//CRUD EXPERIENCE
router.get("/experiences", experiencesController.getAll);
router.post("/experiences", experiencesController.create);
router.delete("/experiences/:id", experiencesController.delete);
router.put("/experiences/:id", experiencesController.update);

//CRUD EDUCATION
router.get("/educations", educationsController.getAll);
router.post("/educations", educationsController.create);
router.delete("/educations/:id", educationsController.delete);
router.put("/educations/:id", educationsController.update);

//CRUD LEARNING
router.get("/learnings", learningsController.getAll);
router.post("/learnings", learningsController.create);
router.delete("/learnings/:id", learningsController.delete);
router.put("/learnings/:id", learningsController.update);

//CRUD SKILLS
router.get("/skills", skillsController.getAll);
router.post("/skills", skillsController.create);
router.delete("/skills/:id", skillsController.delete);
router.put("/skills/:id", skillsController.update);

//CRUD PROJECTS
router.get("/projects", projectsController.getAll);
router.post("/projects/upload", upload.single('file'), projectsController.upload);
router.post("/projects", upload.single('file'), projectsController.create);
router.delete("/projects/:id", projectsController.delete);
router.put("/projects/:id", projectsController.update);


//CRUD EDUCATION
//CRUD PROJECTS
//CRUD SKILLS
//CRUD LEARNINGS

module.exports = router;
