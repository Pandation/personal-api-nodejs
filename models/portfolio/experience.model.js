const mongoose = require("mongoose");
const { Schema } = mongoose;

const experienceSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  society: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
});

const ExperienceModel = mongoose.model("experience", experienceSchema);

module.exports = ExperienceModel;
