const LearningModel = require("../models/learning.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");
const deleteGeneric = require("../../generics/delete");
const getOneGeneric = require("../../generics/getOne");

module.exports.getAll = getAllGeneric(LearningModel);

module.exports.create = createGeneric(LearningModel);

module.exports.delete = deleteGeneric(LearningModel);

module.exports.getOne = getOneGeneric(LearningModel);

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { jobTitle, society, place, date } = req.body;
  LearningModel.findByIdAndUpdate(
    id,
    { jobTitle, society, place, date },
    {},
    (err, docs) => {
      if (err) return res.json({ err });
      return res.json(docs);
    }
  );
};
