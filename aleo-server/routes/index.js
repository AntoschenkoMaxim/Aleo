const Router = require("express");
const router = new Router();
const questRouter = require("./questRouter");

router.use("/quest", questRouter);

module.exports = router;
