const CompanyModel = require("../models/company.model");

module.exports.getAll = (req, res) => {
  try {
    CompanyModel.find((err, data) => {
      if (err) return res.status(500).send({ message: err });
      return res.status(200).send({ data });
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.create = (req, res) => {
  try {
    let companyDoc = req.body;
    CompanyModel.create(companyDoc, (err, docs) => {
      if (err) return res.status(501).send({ message: err });
      console.log(docs)
      return res.status(201).send(docs);
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.update = (req, res) => {};

module.exports.delete = (req, res) => {};

module.exports.getOne = (req, res) => {};
