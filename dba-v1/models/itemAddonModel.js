const mongoose = require("mongoose");

const itemAddonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Invalid item add-on name!"],
    unique: true,
  },
  code: {
    type: String,
    required: [true, "Invalid item add-on code!"],
    unique: true,
  },
  itemType: {
    type: String,
    required: [true, "Invalid item type"],
    unique: false,
  },
  rarity: {
    type: String,
    required: [true, "Invalid item type"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Invalid item type"],
    unique: true,
  },
  icon: {
    type: String,
    required: [true, "Invalid item type"],
    unique: true,
  },
});

const ItemAddon = mongoose.model("ItemAddon", itemAddonSchema);
module.exports = ItemAddon;
