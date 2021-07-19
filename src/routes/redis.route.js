const router = require("express").Router();

const { getPage } = require("../controllers/redis.controller");

router.get("/", getPage);

module.exports = router;
