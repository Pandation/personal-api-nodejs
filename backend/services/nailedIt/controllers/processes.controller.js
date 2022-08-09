const ProcessModel = require("../models/process.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");
const getOneGeneric = require("../../generics/getOne");
const deleteGeneric = require("../../generics/delete");
const updateGeneric = require("../../generics/update");

module.exports.getAll = getAllGeneric(ProcessModel);

module.exports.create = createGeneric(ProcessModel);

module.exports.getOne = getOneGeneric(ProcessModel);

module.exports.delete = deleteGeneric(ProcessModel);

module.exports.update = updateGeneric(ProcessModel);
