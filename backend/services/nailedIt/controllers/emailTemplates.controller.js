const EmailTemplateModel = require("../models/emailTemplate.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");

module.exports.getAll = getAllGeneric(EmailTemplateModel);

module.exports.create = createGeneric(EmailTemplateModel);

module.exports.delete = (req, res) => {
  const { id } = req.params;
  EmailTemplateModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};
