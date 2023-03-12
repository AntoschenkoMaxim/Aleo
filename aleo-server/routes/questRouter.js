const Router = require("express");
const router = new Router();
const questController = require("../controllers/questController");

router.post("/", questController.addUser);
router.get("/", questController.getUsersByQuest);

module.exports = router;
