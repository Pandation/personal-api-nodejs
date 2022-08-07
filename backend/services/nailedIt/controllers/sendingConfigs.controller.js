const SendingConfigModel = require("../models/sendingConfig.model");
const CompanyModel = require("../models/company.model");
const ProcessModel = require("../models/process.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");

module.exports.getAll = getAllGeneric(SendingConfigModel, {
  populate: {
    company: "name",
    process: "name",
  },
});

module.exports.create = createGeneric(SendingConfigModel, {
  populate: {
    company: "name",
    process: "name",
  },
});

module.exports.delete = (req, res) => {
  const { id } = req.params;
  SendingConfigModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};
