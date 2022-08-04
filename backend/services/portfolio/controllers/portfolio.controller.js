const EducationModel = require("../models/education.model");
const ExperienceModel = require("../models/experience.model");
const LearningModel = require("../models/learning.model");
const SkillModel = require("../models/skill.model");
// const ProjectModel = require("../models/project.model");

module.exports.getAll = async (_, res) => {
  const educations = await EducationModel.find();
  const experiences = await ExperienceModel.find();
  const learnings = await LearningModel.find();
  const skills = await SkillModel.find();

  const datas = {
    educations,
    experiences,
    learnings,
    skills,
  };
  // const data = await EducationModel.find();

  console.log(datas);

  if (!datas)
    return res.json({ data: [], message: "No documents were found." });
  return res.send({ datas });
};
