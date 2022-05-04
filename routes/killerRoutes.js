const express = require("express");
const killerController = require("./../controllers/killerController");

const router = express.Router({ mergeParams: true });

router.route("/").get(killerController.getAllKillers);
router.route("/random").get(killerController.getRandomKiller);
router.route("/addons").get(killerController.getKillersAddons);
router.route("/addons/random").get(killerController.getRandomKillerAddons);
router.route("/:code").get(killerController.getKiller);
router.route("/:code/addons").get(killerController.getKillerAddons);
router.route("/:code/perks").get(killerController.getKillerPerks);

module.exports = router;
