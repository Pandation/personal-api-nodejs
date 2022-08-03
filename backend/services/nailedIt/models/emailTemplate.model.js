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
});

const EmailTemplateModel = mongoose.model("emailTemplate", emailTemplateSchema);

module.exports = EmailTemplateModel;
