const ProjectModel = require("../models/project.model");
const getAllGeneric = require("../../generics/getAll");

module.exports.getAll = getAllGeneric(ProjectModel);

module.exports.create = async (req, res) => {
  const { en, fr, url } = req.body;
  console.log({ url: req.body.url });
  console.log({ en: req.body.en });
  // ProjectModel.create(
  //   {
  //     en,
  //     fr,
  //     url: url ?? "",
  //     imageUrl: req.file.destination + req.file.filename,
  //   },
  //   (err, docs) => {
  //     if (err) return res.json({ err });
  //     return res.send({ data: docs });
  //   }
  // );
  res.json({ ok: "ok" });
};

module.exports.upload = async (req, res) => {
  return res.send({ data: "reponse" });
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  ProjectModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { jobTitle, society, place, date } = req.body;
  ProjectModel.findByIdAndUpdate(
    id,
    { jobTitle, society, place, date },
    {},
    (err, docs) => {
      if (err) return res.json({ err });
      return res.json(docs);
    }
  );
};
