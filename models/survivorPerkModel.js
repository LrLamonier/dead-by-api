const mongoose = require("mongoose");

const survivorPerkSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Invalid perk number!"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Invalid perk name!"],
    unique: true,
  },
  code: {
    type: String,
    required: [true, "Invalid perk code!"],
    unique: true,
  },
  survivorCode: {
    type: String,
    required: [true, "Invalid survivor code!"],
  },
  survivorName: {
    type: String,
    required: [true, "Invalid survivor name!"],
  },
  description: {
    type: String,
    required: [true, "Invalid perk description!"],
  },
  icon: {
    type: String,
    required: [true, "Invalid perk icon!"],
  },
});

const SurvivorPerk = mongoose.model("SurvivorPerk", survivorPerkSchema);
module.exports = SurvivorPerk;
