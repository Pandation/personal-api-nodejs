module.exports =
  (model, options = {}) =>
  async (req, res) => {
    try {
      let { id } = req.params;
      let data = await model.findById(id);

      if (!data) return res.status(501).send({ message: err });

      if (typeof options.populate !== "undefined") {
        await Promise.all(
          Object.keys(options.populate).map(async (key) => {
            await data.populate(key, options.populate[key]);
          })
        );
      }
      return res.status(200).send(data);
    } catch (err) {
      res
        .status(500)
        .send({
          error: err,
          message: "Il y a eu une erreur dans la récupération de l'entité avec l'id : "+ id +" .",
        });
    }
  };
