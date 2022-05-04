const express = require("express");
const itemController = require("./../controllers/itemController");

const router = express.Router({ mergeParams: true });

router.route("/").get(itemController.getAllItems);
router.route("/random").get(itemController.getRandomItem);
router.route("/addons").get(itemController.getAllItemAddons);
router.route("/addons/random").get(itemController.getRandomItemAddon);
router.route("/addons/:code").get(itemController.getAddon);
router.route("/:code").get(itemController.getItem);
router.route("/:code/addons").get(itemController.getItemAddons);

module.exports = router;
