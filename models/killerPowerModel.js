const mongoose = require("mongoose");

const killerPowerSchema = new mongoose.Schema({
  powerId: {
    type: Number,
    required: [true, "Invalid id!"],
    unique: true,
  },
  powerName: {
    type: String,
    required: [true, "Invalid power name!"],
    unique: true,
  },
  powerCode: {
    type: String,
    required: [true, "Invalid power code!"],
    unique: true,
  },
  killerCode: {
    type: String,
    required: [true, "Invalid killer name!"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Invalid description!"],
    unique: true,
  },
  powerImg: [
    {
      type: String,
    },
  ],
});

const KillerPower = mongoose.model("KillerPower", killerPowerSchema);
module.exports = KillerPower;
