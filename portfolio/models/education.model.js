const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  school: {
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
const educationSchema = new Schema({
  en: dataSchema,
  fr: dataSchema,
});

const EducationModel = mongoose.model("education", educationSchema);

module.exports = EducationModel;
