const express = require("express");
const survController = require("./../controllers/survController");

const router = express.Router();

router.route("/").get(survController.getAllSurvs);
router.route("/:code").get(survController.getSurv);
router.route("/:code/perks").get(survController.getSurvPerks);

module.exports = router;
