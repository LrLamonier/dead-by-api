const factory = require("./handlerFactory");
const Killer = require("./../models/killerModel");
const KillerPerk = require("./../models/killerPerkModel");
const KillerAddon = require("./../models/killerAddonModel");

exports.getAllKillers = factory.getAll(Killer);
exports.getRandomKiller = factory.getOneRandom(Killer);
exports.getKiller = factory.getOne(Killer);
exports.getKillerPerks = factory.getOnesPerks(KillerPerk, "killer");
exports.getKillersAddons = factory.getAddons(KillerAddon);
exports.getRandomKillerAddons = factory.getOneRandom(KillerAddon);
exports.getKillerAddons = factory.getAddons(KillerAddon, "killer");
