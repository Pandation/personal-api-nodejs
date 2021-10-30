const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  stacks: [{type : String, required: true}],
  date : {
      type: String,
      required: true
  },
  url : {
      type : String,
      default : ""
  }
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
