module.exports = (model) => (req, res) => {
  try {
    model.find((err, data) => {
      if (err) return res.status(500).send({ message: err });
      if (!data[0])
        return res.json({ data: [], message: "No documents were found." });
      return res.status(200).send({ data });
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

// module.exports.getAll = (req, res) => {
//   try {
//     CompanyModel.find((err, data) => {
//       if (err) return res.status(500).send({ message: err });
//       if (!data[0])
//         return res.json({ data: [], message: "No documents were found." });
//       return res.status(200).send({ data });
//     });
//   } catch (err) {
//     res.status(500).send({ message: err });
//   }
// };