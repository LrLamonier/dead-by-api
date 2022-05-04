const mongoose = require("mongoose");

const killerPerkSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Invalid perk id!"],
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
  killerCode: {
    type: String,
    required: true,
  },
  killerName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: [true, "Invalid perk description!"],
    unique: true,
  },
  icon: {
    type: String,
    required: [true, "Invalid perk icon!"],
    unique: true,
  },
});

const KillerPerk = mongoose.model("KillerPerk", killerPerkSchema);
module.exports = KillerPerk;
