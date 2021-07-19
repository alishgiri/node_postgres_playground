const router = require("express").Router();

const { getUserWithId } = require("../controllers/users.controller");

app.get("/user/:id", getUserWithId);

module.exports = router;
