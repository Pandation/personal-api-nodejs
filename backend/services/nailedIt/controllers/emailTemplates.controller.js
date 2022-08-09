const EmailTemplateModel = require("../models/emailTemplate.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");
const getOneGeneric = require("../../generics/getOne");
const deleteGeneric = require("../../generics/delete");
const updateGeneric = require("../../generics/update");

let options = {
  populate: {
    process: "name",
  },
};
module.exports.getAll = getAllGeneric(EmailTemplateModel, options);

module.exports.create = createGeneric(EmailTemplateModel, options);

module.exports.getOne = getOneGeneric(EmailTemplateModel, options);

module.exports.delete = deleteGeneric(EmailTemplateModel);

module.exports.update = updateGeneric(EmailTemplateModel);
