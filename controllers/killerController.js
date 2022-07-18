const factory = require("./handlerFactory");
const Killer = require("./../models/killerModel");
const KillerPerk = require("./../models/killerPerkModel");
const KillerAddon = require("./../models/killerAddonModel");
const KillerPower = require("./../models/killerPowerModel");

exports.getAllKillers = factory.getAll(Killer);
exports.getRandomKiller = factory.getOneRandom(Killer);
exports.getAllPowers = factory.getAll(KillerPower);
exports.getRandomPower = factory.getRandom(KillerPower, 1);
exports.getRandomPowers = factory.getRandom(KillerPower, 5);
exports.getKiller = factory.getOne(Killer);
exports.getKillerPerks = factory.getOnesPerks(KillerPerk, "killer");
exports.getKillersAddons = factory.getAll(KillerAddon);
exports.getKillerAddon = factory.getOne(KillerAddon);
exports.getKillerPower = factory.getAddons(KillerPower, "killer");
exports.getRandomKillerAddons = factory.getOneRandom(KillerAddon);
exports.getKillerAddons = factory.getAddons(KillerAddon, "killer");
