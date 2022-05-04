const factory = require("./handlerFactory");
const SurvivorPerk = require("./../models/survivorPerkModel");
const KillerPerk = require("./../models/killerPerkModel");

exports.getAllSurvPerks = factory.getAll(SurvivorPerk);
exports.getRandomSurvPerk = factory.getOneRandom(SurvivorPerk);
exports.getSurvPerks = factory.getOnesPerks(SurvivorPerk, "survivor");
exports.getAllKillerPerks = factory.getAll(KillerPerk);
exports.getRandomKillerPerk = factory.getOneRandom(KillerPerk);
exports.getKillerPerks = factory.getOnesPerks(KillerPerk, "killer");
