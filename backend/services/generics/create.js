module.exports = (model) => (req, res) => {
  try {
    let document = req.body;
    model.create(document, (err, docs) => {
      if (err) return res.status(501).send({ message: err });
      console.log(docs)
      return res.status(201).send(docs);
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
