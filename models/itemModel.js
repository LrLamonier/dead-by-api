const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Invalid item name!"],
    unique: true,
  },
  code: {
    type: String,
    required: [true, "Invalid item code!"],
    unique: true,
  },
  type: {
    type: String,
    required: [true, "Invalid item type!"],
  },
  rarity: {
    type: String,
    required: [true, "Invalid rarity!"],
  },
  description: {
    type: String,
    required: [true, "Invalid description!"],
  },
  icon: {
    type: String,
    required: [true, "Invalid icon link!"],
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
