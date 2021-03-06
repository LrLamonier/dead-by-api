const factory = require("./handlerFactory");
const Survivor = require("./../models/survivorModel");
const SurvivorPerk = require("./../models/survivorPerkModel");

exports.getAllSurvs = factory.getAll(Survivor);
exports.getRandomSurv = factory.getRandom(Survivor, 1);
exports.getRandomSurvs = factory.getRandom(Survivor, 5);
exports.getSurv = factory.getOne(Survivor);
exports.getSurvPerks = factory.getOnesPerks(SurvivorPerk, "survivor");
