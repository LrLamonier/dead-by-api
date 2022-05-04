const mongoose = require("mongoose");

const killerAddonSchema = new mongoose.Schema({
  killerId: {
    type: Number,
    required: [true, "Invalid killer id!"],
  },
  killerCode: {
    type: String,
    required: [true, "Invalid killer code!"],
  },
  powerCode: {
    type: String,
    required: [true, "Invalid killer power code!"],
  },
  name: {
    type: String,
    required: [true, "Invalid add-on name!"],
  },
  addonCode: {
    type: String,
    required: [true, "Invalid add-on code!"],
  },
  rarity: {
    type: String,
    required: [true, "Invalid add-on rarity!"],
  },
  description: {
    type: String,
    required: [true, "Invalid add-on description!"],
  },
  icon: {
    type: String,
    required: [true, "Invalid add-on icon URL!"],
  },
});

const KillerAddon = mongoose.model("KillerAddon", killerAddonSchema);
module.exports = KillerAddon;
