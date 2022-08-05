const EducationModel = require("../models/education.model");
const getAllGeneric = require("../../generics/getAll")
const createGeneric = require("../../generics/create")

module.exports.getAll = getAllGeneric(EducationModel);

module.exports.create = createGeneric(EducationModel)

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  EducationModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { jobTitle, society, place, date } = req.body;
  EducationModel.findByIdAndUpdate(
    id,
    { jobTitle, society, place, date },
    {},
    (err, docs) => {
      if (err) return res.json({ err });
      return res.json(docs);
    }
  );
};
