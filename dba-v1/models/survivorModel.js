const mongoose = require("mongoose");

const survivorSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: [true, "Invalid number!"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Invalid name!"],
    unique: true,
  },
  code: {
    type: String,
    required: [true, "Invalid code!"],
    unique: true,
  },
  licensed: {
    type: Boolean,
    required: [true, "Invalid licensed status!"],
  },
  difficulty: {
    type: String,
    required: [true, "Invalid difficulty!"],
  },
  role: {
    type: String,
    required: [true, "Invalid role!"],
  },
  nationality: {
    type: String,
    required: [true, "Invalid nationality!"],
  },
  dlc: {
    type: String,
    required: [true, "Invalid dlc name!"],
  },
  perks_names: [
    {
      type: String,
      required: [true, "Invalid perk names!"],
    },
  ],
  perks_ids: [
    {
      type: Number,
      required: [true, "Invalid perk ids!"],
    },
  ],
  overview: {
    type: String,
    required: [true, "Invalid overview!"],
  },
  backstory: {
    type: String,
    required: [true, "Invalid backstory"],
  },
  imgs: {
    portrait: {
      type: String,
      required: [true, "Invalid portrait!"],
    },
    store: {
      type: String,
      required: [true, "Invalid store image!"],
    },
  },
});

const Survivor = mongoose.model("Survivor", survivorSchema);
module.exports = Survivor;
