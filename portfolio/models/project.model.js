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
  url: {
    type: String,
    default: "",
  },
});

const projectSchema = new Schema({
  en: dataSchema,
  fr: dataSchema,
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
