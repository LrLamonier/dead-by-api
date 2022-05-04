const express = require("express");
const perkController = require("./../controllers/perkController");

const router = express.Router();

router.route("/surv").get(perkController.getAllSurvPerks);
router.route("/surv/random").get(perkController.getRandomSurvPerk);
router.route("/killer").get(perkController.getAllKillerPerks);
router.route("/killer/random").get(perkController.getRandomKillerPerk);

module.exports = router;
