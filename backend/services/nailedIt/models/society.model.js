const mongoose = require("mongoose");
const { Schema } = mongoose;

const societySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    //validate
  },
  askAgain: {
    type: Boolean,
    required: true,
    default: false,
  },
  contactGender: {
    type: String,
  },
  contactLastname: {
    type: String,
  },
  contactFirstname: {
    type: String,
  },
  template: {
    // type: ID
  },
  customText: {
    type: String,
  },
});

const SocietyModel = mongoose.model("society", societySchema);

module.exports = SocietyModel;
