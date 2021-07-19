const router = require("express").Router();

const { getUserWithId } = require("../controllers/users.controller");

router.get("/:id", getUserWithId);

module.exports = router;
