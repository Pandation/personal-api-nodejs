const mongoose = require("mongoose");
const { Schema } = mongoose;
const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  stacks: [{ type: String }],
  date: {
    type: String,
    required: true,
  },
});

const projectSchema = new Schema({
  en: dataSchema,
  fr: dataSchema,
  url: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    default: "",
  },
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
