const router = require("express").Router();

const _ = require("../controllers/restaurants.controllers");

router.get("/", _.getAllRestaurants);
router.get("/:id", _.getOneRestaurant);
router.post("/", _.createRestaurant);
router.put("/:id", _.updateRestaurant);
router.delete("/:id", _.deleteRestaurant);

module.exports = router;
