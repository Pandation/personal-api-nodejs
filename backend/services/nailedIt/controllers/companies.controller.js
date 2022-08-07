const CompanyModel = require("../models/company.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");

module.exports.getAll = getAllGeneric(CompanyModel);

module.exports.create = createGeneric(CompanyModel);

module.exports.delete = (req, res) => {
  const { id } = req.params;
  CompanyModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};

