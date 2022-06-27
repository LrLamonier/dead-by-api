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
		unique: false,
	},
	rarity: {
		type: String,
		required: [true, "Invalid rarity!"],
		unique: false,
	},
	description: {
		type: String,
		required: [true, "Invalid description!"],
		unique: false,
	},
	icon: {
		type: String,
		required: [true, "Invalid icon link!"],
		unique: false,
	},
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
