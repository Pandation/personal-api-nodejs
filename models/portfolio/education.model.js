const mongoose = require("mongoose");
const { Schema } = mongoose;

const educationSchema = new Schema({
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

const EducationModel = mongoose.model("education", educationSchema);

module.exports = EducationModel;
