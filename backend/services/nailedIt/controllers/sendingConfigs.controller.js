const SendingConfigModel = require("../models/sendingConfig.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");
const deleteGeneric = require("../../generics/delete");
const getOneGeneric = require("../../generics/getOne");
const updateGeneric = require("../../generics/update");

let options = {
  populate: {
    company: "name",
    process: "name",
  },
};

module.exports.getAll = getAllGeneric(SendingConfigModel, options);

module.exports.create = createGeneric(SendingConfigModel, options);

module.exports.getOne = getOneGeneric(SendingConfigModel, options);

module.exports.delete = deleteGeneric(SendingConfigModel);

module.exports.update = updateGeneric(SendingConfigModel);
