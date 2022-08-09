const EducationModel = require("../models/education.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");
const deleteGeneric = require("../../generics/delete");
const getOneGeneric = require("../../generics/getOne");

module.exports.getAll = getAllGeneric(EducationModel);

module.exports.create = createGeneric(EducationModel);

module.exports.delete = deleteGeneric(EducationModel);

module.exports.getOne = getOneGeneric(EducationModel);

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, society, place, date } = req.body;
  EducationModel.findByIdAndUpdate(
    id,
    { title, society, place, date },
    {},
    (err, docs) => {
      if (err) return res.json({ err });
      return res.json(docs);
    }
  );
};
