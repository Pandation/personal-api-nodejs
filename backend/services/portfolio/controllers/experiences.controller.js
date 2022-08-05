const ExperienceModel = require("../models/experience.model");
const createGeneric = require("../../generics/create");
const getAllGeneric = require("../../generics/getAll");

module.exports.getAll = getAllGeneric(ExperienceModel);

module.exports.create = createGeneric(ExperienceModel);

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  ExperienceModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { jobTitle, society, place, date } = req.body;
  ExperienceModel.findByIdAndUpdate(
    id,
    { jobTitle, society, place, date },
    {},
    (err, docs) => {
      if (err) return res.json({ err });
      return res.json(docs);
    }
  );
};
