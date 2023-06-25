const mongoose = require("mongoose");

const killerSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: [true, "Invalid number!"],
    unique: true,
  },
  code: {
    type: String,
    required: [true, "Invalid code!"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Invalid name!"],
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, "Invalid full name!"],
    unique: true,
  },
  nationality: {
    type: String,
  },
  gender: {
    type: String,
  },
  licensed: {
    type: Boolean,
  },
  dlc: {
    type: String,
    required: [true, "Invalid dlc!"],
  },
  difficulty: {
    type: String,
    required: [true, "Invalid difficulty!"],
  },
  realm: {
    type: String,
  },
  powerAttackType: {
    type: String,
    required: [true, "Invalid power attack type!"],
  },
  weapon: {
    type: String,
    required: [true, "Invalid weapon!"],
  },
  moveSpeed: {
    type: String,
    required: [true, "Invalid move speed!"],
  },
  terrorRadius: {
    type: String,
    required: [true, "Invalid terror radius!"],
  },
  height: {
    type: String,
    required: [true, "Invalid height!"],
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
  power: {
    powerId: {
      type: Number,
      required: [true, "Invalid power ID!"],
    },
    powerName: {
      type: String,
      required: [true, "Invalid power name!"],
    },
    powerCode: {
      type: String,
      required: [true, "Invalid power code!"],
    },
  },
  overview: {
    type: String,
    required: [true, "Invalid overview!"],
  },
  backstory: {
    type: String,
    required: [true, "Invalid backstory!"],
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

const Killer = mongoose.model("Killer", killerSchema);
module.exports = Killer;
