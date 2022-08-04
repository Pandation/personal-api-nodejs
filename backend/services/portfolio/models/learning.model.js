const mongoose = require("mongoose");
const { Schema } = mongoose;

const learningSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const LearningModel = mongoose.model("learning", learningSchema);

module.exports = LearningModel;
