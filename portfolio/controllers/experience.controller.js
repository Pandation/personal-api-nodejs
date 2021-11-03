const ExperienceModel = require("../models/experience.model");

module.exports.getAll = async (_, res) => {
  const data = await ExperienceModel.find();

  if (!data[0]) res.json({ data: [], message: "No documents were found." });
  res.json({ data });
};

module.exports.create = async (req, res) => {
  const { en, fr } = req.body;
  ExperienceModel.create(
    { en , fr },
    (err, docs) => {
      if (err) res.json({ err });
      res.json(docs);
    }
  );
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  ExperienceModel.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) res.json({ err });
    res.json(docs);
  });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { jobTitle, society, place, date } = req.body;
  ExperienceModel.findByIdAndUpdate(
    id,
    { jobTitle, society, place, date },
    {},
    (err, docs) => {
      if (err) res.json({ err });
      res.json(docs);
    }
  );
};
