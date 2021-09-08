const ExperienceModel = require("../../models/portfolio/experience.model");

module.exports.getAll = async (_, res) => {
  
  const data = await ExperienceModel.find({});
  if (!data[0]) res.json({ message: "No documents were found." });
  console.log(data);
  res.json(data);
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
