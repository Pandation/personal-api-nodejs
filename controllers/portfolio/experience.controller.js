const ExperienceModel = require("../../models/portfolio/experience.model");

module.exports.getAll = async (_, res) => {
  
  const dataFR = await ExperienceModel.find({language: "fr"});
  const dataEN = await ExperienceModel.find({language: "en"});
  if (!dataFR[0] && !dataEN[0]) res.json({ message: "No documents were found." });
  res.json({en: dataEN, fr: dataFR});
};

module.exports.create = async (req, res) => {
  const { jobTitle, society, place, date, language } = req.body;
  ExperienceModel.create({ jobTitle, society, place, date, language }, (err, docs) => {
    if (err) res.json({ err });
    res.json(docs);
  });
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
