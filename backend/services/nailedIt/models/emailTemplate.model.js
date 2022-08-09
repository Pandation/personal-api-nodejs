const mongoose = require("mongoose");
const { Schema } = mongoose;

const emailTemplateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  footer: {
    type: String,
    required: true,
  },
  process: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "process",
  },
  status: {
    type: String,
  },
  subject: {
    type: String,
    required: true,
  },
});

module.exports == mongoose.model("emailTemplate", emailTemplateSchema);

