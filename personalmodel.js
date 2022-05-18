const mongoose = require("mongoose");
const { Schema } = mongoose;
const personschema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoritefoods: { type: [String] },
});
const PersonModel = mongoose.model("Person", personschema);
module.exports = PersonModel;