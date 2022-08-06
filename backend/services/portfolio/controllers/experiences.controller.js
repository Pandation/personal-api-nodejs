const ExperienceModel = require("../models/experience.model");
const createGeneric = require("../../generics/create");
const getAllGeneric = require("../../generics/getAll");
const deleteGeneric = require("../../generics/delete");

module.exports.getAll = getAllGeneric(ExperienceModel);

module.exports.create = createGeneric(ExperienceModel);

module.exports.delete = deleteGeneric(ExperienceModel);

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, society, place, date } = req.body;
  ExperienceModel.findByIdAndUpdate(
    id,
    { title, society, place, date },
    {},
    (err, docs) => {
      if (err) return res.json({ err });
      return res.json(docs);
    }
  );
};
