const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const learningSchema = new Schema({
  en: dataSchema,
  fr: dataSchema,
});

const LearningModel = mongoose.model("learning", learningSchema);

module.exports = LearningModel;
