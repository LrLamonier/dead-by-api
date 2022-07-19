const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Item = require("./../models/itemModel");
const KillerAddon = require("./../models/killerAddonModel");
const ItemAddon = require("./../models/itemAddonModel");
const KillerPower = require("./../models/killerPowerModel");
const Survivor = require("./../models/survivorModel");
const SurvivorPerk = require("./../models/survivorPerkModel");
const KillerPerk = require("./../models/killerPerkModel");
const Killer = require("./../models/killerModel");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose.connect(DB, {}).then(() => console.log("DB online!"));

const itemAddons = JSON.parse(
	fs.readFileSync(`${__dirname}/itemAddons.json`, "utf-8")
);
const items = JSON.parse(fs.readFileSync(`${__dirname}/items.json`, "utf-8"));
const killerAddons = JSON.parse(
	fs.readFileSync(`${__dirname}/killerAddons.json`, "utf-8")
);
const killerPerks = JSON.parse(
	fs.readFileSync(`${__dirname}/killerPerks.json`, "utf-8")
);
const powers = JSON.parse(
	fs.readFileSync(`${__dirname}/killerPowers.json`, "utf-8")
);
const killers = JSON.parse(
	fs.readFileSync(`${__dirname}/killers.json`, "utf-8")
);
const survivorPerks = JSON.parse(
	fs.readFileSync(`${__dirname}/survivorPerks.json`, "utf-8")
);
const survivors = JSON.parse(
	fs.readFileSync(`${__dirname}/survivors.json`, "utf-8")
);

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
		console.log(err);
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
		console.log(err);
		process.exit();
	}
};

if (process.argv[2] === "--import") {
	importData();
} else if (process.argv[2] === "--delete") {
	deleteData();
} else if (process.argv[2] === "--update") {
	updateData();
}
