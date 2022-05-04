const factory = require("./handlerFactory");
const Item = require("./../models/itemModel");
const ItemAddon = require("./../models/itemAddonModel");

exports.getAllItems = factory.getAll(Item);
exports.getRandomItem = factory.getOneRandom(Item);
exports.getAllItemAddons = factory.getAll(ItemAddon);
exports.getAddon = factory.getOne(ItemAddon);
exports.getRandomItemAddon = factory.getOneRandom(ItemAddon);
exports.getItem = factory.getOne(Item);
exports.getItemAddons = factory.getAddons(ItemAddon, "item");
