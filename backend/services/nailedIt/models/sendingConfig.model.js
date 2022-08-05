const mongoose = require("mongoose");

const sendingConfigSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "company",
  },
  process: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "process",
  },
  status: {
    type: String,
  },
  customText: {
    type: String,
  },
  lastMailDate: {
    type: Date,
  },
  nextMailDate: {
    type: Date,
  },
});

module.exports = mongoose.model("sendingConfig", sendingConfigSchema);
