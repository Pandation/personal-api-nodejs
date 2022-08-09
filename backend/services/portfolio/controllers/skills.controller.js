const SkillModel = require("../models/skill.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");
const deleteGeneric = require("../../generics/delete");
const getOneGeneric = require("../../generics/getOne");

module.exports.getAll = getAllGeneric(SkillModel);

module.exports.create = createGeneric(SkillModel);

module.exports.delete = deleteGeneric(SkillModel);

module.exports.getOne = getOneGeneric(SkillModel)

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { jobTitle, society, place, date } = req.body;
  SkillModel.findByIdAndUpdate(
    id,
    { jobTitle, society, place, date },
    {},
    (err, docs) => {
      if (err) return res.json({ err });
      return res.json(docs);
    }
  );
};
