const router = require("express").Router({ mergeParams: true });
const controller = require("./projects.controller");

router.route("/:projectId([0-9]+)").get(controller.read);

router.route("/").get(controller.list);

module.exports = router;
