const ProcessModel = require("../models/process.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");

module.exports.getAll = getAllGeneric(ProcessModel);

module.exports.create = createGeneric(ProcessModel);

module.exports.delete = (req, res) => {
  const { id } = req.params;
  ProcessModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};

