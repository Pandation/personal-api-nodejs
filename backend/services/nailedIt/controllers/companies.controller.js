const CompanyModel = require("../models/company.model");
const getAllGeneric = require("../../generics/getAll");
const createGeneric = require("../../generics/create");
const getOneGeneric = require("../../generics/getOne");
const deleteGeneric = require("../../generics/delete");
const updateGeneric = require("../../generics/update");

module.exports.getAll = getAllGeneric(CompanyModel);

module.exports.create = createGeneric(CompanyModel);

module.exports.getOne = getOneGeneric(CompanyModel);

module.exports.delete = deleteGeneric(CompanyModel);

module.exports.update = updateGeneric(CompanyModel);
