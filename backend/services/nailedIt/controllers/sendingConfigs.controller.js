const SendingConfigModel = require("../models/sendingConfig.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");

module.exports.getAll = getAllGeneric(SendingConfigModel);

module.exports.create = createGeneric(SendingConfigModel);

module.exports.delete = (req, res) => {
  const { id } = req.params;
  SendingConfigModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};

