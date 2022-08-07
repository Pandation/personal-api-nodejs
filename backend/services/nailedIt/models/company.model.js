const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: [true, "The company name is required."],
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    validate: [validator.isEmail, "This email is not valid."],
  },
  contactGender: {
    type: String,
    enum: ['0','1','2'],
    default: '0'
  },
  contactLastname: {
    type: String,
  },
  contactFirstname: {
    type: String,
  },
});

const CompanyModel = mongoose.model("company", companySchema);

module.exports = CompanyModel;
