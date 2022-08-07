module.exports = (model, options = {}) => async (req, res) => {
  try {
    let document = req.body;
    let newDoc = await model.create(document);

    console.log(newDoc)
    if (typeof options.populate !== "undefined") {
      await Promise.all(
        Object.keys(options.populate).map(async (key) => {
          await newDoc.populate(key, options.populate[key]);
        })
      );
    }

    if (!newDoc) return res.status(501).send({ message: err });

    return res.status(201).send(newDoc);
  } catch (err) {
    console.log(err)
    res.status(500).send({ error : err, message: 'Il y a eu une erreur dans la création.'});
  }
};
