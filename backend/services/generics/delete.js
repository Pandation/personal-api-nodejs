module.exports = (model) => (req, res) => {
  const { id } = req.params;
  model.findByIdAndDelete(id, {}, (err, docs) => {
    if (err) return res.json({ err });
    return res.json(docs);
  });
};
