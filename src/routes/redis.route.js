const router = require("express").Router();

const _ = require("../controllers/redis.controller");

router.get("/", _.getPage);

router.get("/publish", _.publishOnRedis);

module.exports = router;
