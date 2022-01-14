const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});


const skillSchema = new Schema({
  en: dataSchema,
  fr: dataSchema,
});

const SkillModel = mongoose.model("skill", skillSchema);

module.exports = SkillModel;
