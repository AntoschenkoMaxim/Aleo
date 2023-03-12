const Router = require("express");
const router = new Router();

router.post("/");
router.get("/:questNumber");

module.exports = router;
