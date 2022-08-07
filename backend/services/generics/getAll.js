module.exports = (model, options = {}) => async (req, res) => {
  try {
    let data = []
    if(typeof options.populate === 'undefined') {
      data = await model.find();
    } else {
      data = model.find()
      Object.keys(options.populate).map((key) => {
        data.populate(key, options.populate[key]);
      });
      data = await data;
    }

    if (!data) {
      return res.json({ data: [], message: "No documents were found." });
    }
    return res.status(200).send({ data });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
