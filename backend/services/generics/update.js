module.exports =
  (model, options = {}) =>
  async (req, res) => {
    try {
      let document = req.body;
      let { id } = req.params;
  
      let newDoc = await model.findByIdAndUpdate(id, document, {
        returnDocument: "after",
      });

      // if (!newDoc) return res.status(404).send({ message: err });

      return res.status(201).send(newDoc);
    } catch (err) {
      res.status(500).send({
        error: err,
        message: "Il y a eu une erreur dans la mise-à-jour.",
      });
    }
  };
