const router = require("express").Router();
const path = require("path");
const multer = require("multer");

const learningsController = require("../controllers/learnings.controller");
const projectsController = require("../controllers/projects.controller");
const experiencesController = require("../controllers/experiences.controller");
const skillsController = require("../controllers/skills.controller");
const educationsController = require("../controllers/educations.controller");
const portfolioController = require("../controllers/portfolio.controller");


//UPLOAD
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//ALLDATA
router.get("/config", portfolioController.getAll);

//CRUD EXPERIENCE
router.get("/experiences", experiencesController.getAll);
router.get("/experiences/:id", experiencesController.getOne);
router.post("/experiences", experiencesController.create);
router.delete("/experiences/:id", experiencesController.delete);
router.put("/experiences/:id", experiencesController.update);

//CRUD EDUCATION
router.get("/educations", educationsController.getAll);
router.get("/educations/:id", educationsController.getOne);
router.post("/educations", educationsController.create);
router.delete("/educations/:id", educationsController.delete);
router.put("/educations/:id", educationsController.update);

//CRUD LEARNING
router.get("/learnings", learningsController.getAll);
router.get("/learnings/:id", learningsController.getOne);
router.post("/learnings", learningsController.create);
router.delete("/learnings/:id", learningsController.delete);
router.put("/learnings/:id", learningsController.update);

//CRUD SKILLS
router.get("/skills", skillsController.getAll);
router.get("/skills/:id", skillsController.getOne);
router.post("/skills", skillsController.create);
router.delete("/skills/:id", skillsController.delete);
router.put("/skills/:id", skillsController.update);

//CRUD PROJECTS
router.get("/projects", projectsController.getAll);
router.post(
  "/projects/upload",
  upload.single("file"),
  projectsController.upload
);
router.post("/projects", upload.single("file"), projectsController.create);
router.delete("/projects/:id", projectsController.delete);
router.put("/projects/:id", projectsController.update);

module.exports = router;
