const EmailTemplateModel = require("../models/emailTemplate.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");

let options = {
  populate: {
    process: "name",
  },
};
module.exports.getAll = getAllGeneric(EmailTemplateModel, options);

module.exports.create = createGeneric(EmailTemplateModel, options);

module.exports.delete = (req, res) => {
  const { id } = req.params;
  EmailTemplateModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};