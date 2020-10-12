const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");
const TaskValidation = require("../middlewares/TaskValidation");
const MacAddressValidation = require("../middlewares/MacAddressValidation");

router.post("/", TaskValidation, TaskController.create);
router.put("/:id", TaskValidation, TaskController.update);
router.get("/:id", TaskController.show);
router.get("/filter/all", MacAddressValidation, TaskController.all);
router.delete("/:id", TaskController.delete);
router.put("/:id/:done", TaskController.done);
router.get("/filter/late", MacAddressValidation, TaskController.late);
router.get("/filter/today", MacAddressValidation, TaskController.today);
router.get("/filter/week", MacAddressValidation, TaskController.week);
router.get("/filter/month", MacAddressValidation, TaskController.month);
router.get("/filter/year", MacAddressValidation, TaskController.year);

module.exports = router;
