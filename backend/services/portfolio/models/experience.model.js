const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  title: {
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

const experienceSchema = new Schema({
  en : dataSchema,
  fr: dataSchema
});



const ExperienceModel = mongoose.model("experience", experienceSchema);

module.exports = ExperienceModel;
