const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Item = require("./models/itemModel");
const KillerAddon = require("./models/killerAddonModel");
const ItemAddon = require("./models/itemAddonModel");
const KillerPower = require("./models/killerPowerModel");
const Survivor = require("./models/survivorModel");
const SurvivorPerk = require("./models/survivorPerkModel");
const KillerPerk = require("./models/killerPerkModel");
const Killer = require("./models/killerModel");

// starting the database

dotenv.config({ path: "./.env.local" });
const DB = process.env.DATABASE;
mongoose.connect(DB, {}).then(() => console.log("DB online!"));

// collection models

const itemAddons = JSON.parse(
  fs.readFileSync(`${__dirname}/raw-json/itemAddons.json`, "utf-8")
);
const items = JSON.parse(
  fs.readFileSync(`${__dirname}/raw-json/items.json`, "utf-8")
);
const killerAddons = JSON.parse(
  fs.readFileSync(`${__dirname}/raw-json/killerAddons.json`, "utf-8")
);
const killerPerks = JSON.parse(
  fs.readFileSync(`${__dirname}/raw-json/killerPerks.json`, "utf-8")
);
const powers = JSON.parse(
  fs.readFileSync(`${__dirname}/raw-json/killerPowers.json`, "utf-8")
);
const killers = JSON.parse(
  fs.readFileSync(`${__dirname}/raw-json/killers.json`, "utf-8")
);
const survivorPerks = JSON.parse(
  fs.readFileSync(`${__dirname}/raw-json/survivorPerks.json`, "utf-8")
);
const survivors = JSON.parse(
  fs.readFileSync(`${__dirname}/raw-json/survivors.json`, "utf-8")
);

// scripts

const importData = async () => {
  try {
    // await ItemAddon.create(itemAddons);
    // await Item.create(items);
    // await KillerAddon.create(killerAddons);
    // await KillerPerk.create(killerPerks);
    // await KillerPower.create(powers);
    // await Killer.create(killers);
    // await SurvivorPerk.create(survivorPerks);
    // await Survivor.create(survivors);
    console.log("Data imported!");
    process.exit();
  } catch (err) {
    console.log(
      "There was an error while trying to import data to the database.",
      err
    );
    process.exit();
  }
};

const deleteData = async () => {
  try {
    // await ItemAddon.deleteMany();
    // await Item.deleteMany();
    // await KillerAddon.deleteMany();
    // await KillerPerk.deleteMany();
    // await KillerPower.deleteMany();
    // await Killer.deleteMany();
    // await SurvivorPerk.deleteMany();
    // await Survivor.deleteMany();
    console.log("Data deleted!");
    process.exit();
  } catch (err) {
    console.log(
      "There was an error while trying to delete data from the database.",
      err
    );
    process.exit();
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
