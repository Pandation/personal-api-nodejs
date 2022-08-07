const CompanyModel = require("./nailedIt/models/company.model");
const ProcessModel = require("./nailedIt/models/process.model");

module.exports.getSelectsLists = async (req, res) => {
  let companiesList = await CompanyModel.find().select("name");
  let processesList = await ProcessModel.find().select("name");

  res.send({
    companiesList,
    processesList,
  });
};
