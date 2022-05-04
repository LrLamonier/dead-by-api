const express = require("express");
const perkController = require("./../controllers/perkController");

const router = express.Router();

router.route("/surv").get(perkController.getAllSurvPerks);
router.route("/surv/random").get(perkController.getRandomSurvPerk);
router.route("/surv/:code").get(perkController.getSurvPerks);
router.route("/killer").get(perkController.getAllKillerPerks);
router.route("/killer/random").get(perkController.getRandomKillerPerk);
router.route("/killer/:code").get(perkController.getKillerPerks);

module.exports = router;
