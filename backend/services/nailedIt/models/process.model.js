const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const processSchema = new Schema({
  name: {
    type: String,
    required: [true, "The process name is required."],
  },
});

const ProcessModel = mongoose.model("process", processSchema);

module.exports = ProcessModel;
