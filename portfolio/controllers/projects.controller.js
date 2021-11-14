const ProjectModel = require("../models/project.model");

module.exports.getAll = async (_, res) => {
  const data = await ProjectModel.find();

  if (!data[0]) return res.json({ data: [], message: "No documents were found." });
  return res.send({ data });
};

module.exports.create = async (req, res) => {
  const { en, fr } = req.body;
  ProjectModel.create({ en, fr }, (err, docs) => {
    if (err) return res.json({ err });
    return res.send({ data: docs });
  });
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
